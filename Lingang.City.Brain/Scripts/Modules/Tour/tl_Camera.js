define(["config", "common", "util", "t_LayerMenuData", "t_LayerMenuAjax"], function (con, com, util, t_LayerMenuData, t_LayerMenuAjax) {
    return {
        LayerType: null,//选择摄像头
        POIData: null,//POI详情数据
        LastPOI_Clk: null,//鼠标选中POI
        cameradetail_player: null,
        CameraListData: new util.HashMap,
        //加载摄像头
        loadCamera: function () {
            this.Revert();

            //默认视口
            com.LayerFlyto(3)

            this.LayerType = require("t_Main").LayerCatalog.Camera;
            var post_data = { "offset": "0", "count": "1000" }

            require("t_LayerMenuAjax").getCameraList(post_data, function (result) {
                var areaName = con.AreaName;
                var icon = require("tl_Camera").LayerType.UnChooseIcon;
                var pois = [];
                require("tl_Camera").POIData = result.data;
                for (var i = 0; i < require("tl_Camera").POIData.length; i++) {
                    var row  = require("tl_Camera").POIData[i];
                    var sbmc = row.sbmc

                    if (sbmc.indexOf("海洋小区") <= -1) {
                        require("tl_Camera").CameraListData.put(row.id, row);
                        var poiName = "POITour" + require("tl_Camera").LayerType.Name + "_" + row.id;//POIIOT_01

                        var iconSize = Q3D.vector2(41, 45);
                        var Coordinate = com.gcj02towgs84(row.lng, row.lat);//高德坐标转84坐标
                        var pos = Coordinate + ",0";
                        var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

                        var poi = { POIName: poiName, Position: position, Text: "", Icon: icon, IconSize: iconSize };
                        var node = map.getSceneNode(areaName + "/" + poiName);
                        if (node) {
                            node.setVisible(1);//显示当前父节点
                        } else {
                            pois.push(poi);
                        }
                    }
                    //else {
                    //    console.log(sbmc)
                    //}
                }
                com.InitPois(areaName, pois);
            });
        },
        //摄像头点击事件
        loadCameraDetial: function (nodeName) {

            $("#detail_tourplayer").hide();
            this.closeCameraDetial();
            /*******************选中POI-start*******************/
            var areaName = con.AreaName;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var layername = this.LastPOI_Clk.split('_')[0].replace("POITour", "");
                var level = this.LayerType.Level;
                var icon = this.LayerType.UnChooseIcon;
                var lastNode = map.getSceneNode(areaName, this.LastPOI_Clk);
                if (lastNode) {
                    lastNode.asPOI().setIcon(icon);
                    //lastNode.setVisible(0);
                }
            }
            this.LastPOI_Clk = nodeName;
            //console.log(areaName + "," + nodeName);
            var node = map.getSceneNode(areaName, nodeName);
            if (node != null) {

                var poi = node.asPOI();

                var level = this.LayerType.Level;
                var icon = this.LayerType.ChooseIcon;
                poi.setIcon(icon);

                var id = nodeName.replace("POITourCamera_", "");
                var data = require("tl_Camera").CameraListData.get(id);

                var post_data = { "sbbm": data.sbbm }
                require("t_LayerMenuAjax").getCameraUrlById(post_data, function (result) {
                    var cameraurl = result.data;
                    if (cameraurl != null) {
                        //aliplayer不能删除视频，先隐藏后直接替换视频地址。
                        //加载页面内容
                        if (!require("tl_Camera").cameradetail_player) {
                           
                            var url = con.HtmlUrl + 'TourNew/Bottom_CameraDetail.html';
                            require(['text!' + url], function (template) {
                                $("#detail_tourplayer").show();
                                $("#detail_tourplayer").html(template);
                                $("#cameradetail").hide()
                                $("#cameradetail").show('drop', 1000);

                                require("tl_Camera").loadaliplayer1(cameraurl);
                            });

                        }
                        else {
                            $("#detail_tourplayer").show();
                            //$("#cameradetail").hide()
                            //$("#cameradetail").show('drop', 1000);
                            try {
                                require("tl_Camera").changealiplayer(cameraurl);
                            } catch (e) {
                            }
                        }
                    }
                    else {
                        com.alert("视频地址为空");
                    }
                });
            }
            /*******************选中POI-end*******************/


        },
        changealiplayer: function (url) {
            require("tl_Camera").cameradetail_player.loadByUrl(url);
        },
        loadaliplayer1: function (url) {
            setTimeout(function () {
                //加载视频
                require(['aliplayer'], function (data) {
                    //var videowidth = $(".video-js").width();
                    //var videoheight = $(".video-js").height();

                    require("tl_Camera").cameradetail_player = new Aliplayer({
                        "id": "bottom_cameradetail",
                        "source": url,
                        //"width": videowidth + "px",
                        //"height": videoheight + "px",
                        "autoplay": true,
                        "isLive": true,
                        "rePlay": false,
                        "showBuffer": true,
                        "snapshot": false,
                        "showBarTime": 5000,
                        "useFlashPrism": true,
                        "waitingTimeout": 60

                    }, function (player) {
                        //加载成功,清空错误提示
                        $(".prism-ErrorMessage").empty();
                        $("#bottom_cameradetail").attr("poster", con.WebServiceUrl + "Content/images/sxt-videoli.png");
                    })
                })
            }, 1000);
        },
        //创建连接线
        createNodeLine: function (node, left, top) {
            var options = {
                Name: 'lineTooltip',
                Margin: {
                    left: left, //窗口坐标x
                    top: top, //窗口坐标y
                    bottom: null,
                    right: null
                },
                Layout: {
                    width: 547,//窗口宽
                    height: 290//窗口高
                },
                TooltipOptions: {
                    TriFillColor: Q3D.colourValue("#142E47", 1).get(),//连接线边框填充色
                    TriAlpha: 0.8,
                    EdgeColor: Q3D.colourValue("#00FFFF", 1).get(),//连接线边框颜色
                    EdgeWidth: 0,
                },
                OnUserNotify: null
            }

            com.nodeLineToScreen(node, options);
        },
        closeCameraDetial: function () {

            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                this.LayerType = require("t_Main").LayerCatalog.Camera;
                var level = this.LayerType.Level;
                var icon = this.LayerType.UnChooseIcon;
                var lastNode = map.getSceneNode(con.AreaName, this.LastPOI_Clk);
                if (lastNode) {
                    lastNode.asPOI().setIcon(icon);

                    this.LastPOI_Clk = null;
                }
            }
            com.delNodeLineToScreen("lineTooltip");

            //$("#bottom_cameradetail").empty();
            $("#detail_tourplayer").hide();
        },
        //清空摄像头POI
        clearCameraPOI: function () {
            var areaName = con.AreaName;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var layername = this.LastPOI_Clk.split('_')[0].replace("POITour", "");
                var level = this.LayerType.Level;
                var icon = this.LayerType.UnChooseIcon;
                var lastNode = map.getSceneNode(areaName, this.LastPOI_Clk);
                if (lastNode) {
                    lastNode.asPOI().setIcon(icon);
                    //lastNode.setVisible(0);
                }
            }
            this.LastPOI_Clk = "";

            var data = this.POIData;
            //设置POI隐藏
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    var name = this.LayerType.Name;

                    var poiname = "POITour" + name + "_" + data[i].id;
                    var node = map.getSceneNode(areaName + "/" + poiname);
                    if (node) {
                        //map.getArea(areaName).destroySceneNode(poiname);
                        node.setVisible(0);
                    }
                }
                this.LayerType = null;
                this.POIData = null;
            }


        },
        //清空
        Revert: function () {
            this.clearCameraPOI();
            this.closeCameraDetial();
            if (require("tl_Camera").cameradetail_player) {
                require("tl_Camera").cameradetail_player.loadByUrl("");
                require("tl_Camera").cameradetail_player.dispose();
                require("tl_Camera").cameradetail_player = null;
            }
        }
    }
})