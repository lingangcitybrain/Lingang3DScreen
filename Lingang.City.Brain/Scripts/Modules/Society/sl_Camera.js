define(["config", "common", "util", "s_layerMenuData", "s_LayerMenuAjax", "video"], function (con, com, util,s_layerMenuData, s_LayerMenuAjax, video) {
    /**************************************摄像头**************************************/
    return {
        LayerType: null,//选择摄像头
        POIData: null,//POI详情数据
        LastPOI_Clk: null,//鼠标选中POI
        SocietyCamera_player: null,
        CameraListData: new util.HashMap,
        nodeFollowingPath: null,//窗口跟随缓存
        CameraState: 0,//0：未打开过视频,1打开视频

        //加载摄像头POI
        loadCamera: function () {

            this.Revert();
            this.LayerType = require("s_Main").LayerCatalog.Camera;
             com.LayerFlyto(11)

            var post_data = {"communityId": "s012"}

            require("s_LayerMenuAjax").getCameraList(post_data, function (result) {

                var areaName = con.AreaName;
                var icon = require("sl_Camera").LayerType.UnChooseIcon;
                var pois = [];
                for (var i = 0; i < require("sl_Camera").POIData.length; i++) {
                    var row = require("sl_Camera").POIData[i];
                    require("sl_Camera").CameraListData.put(row.id, row);
                    var poiName = "POISociety" + require("sl_Camera").LayerType.Name + "_" + row.id;//POIIOT_01
                    var iconSize = Q3D.vector2(41, 45);
                    var Coordinate = com.gcj02towgs84(parseFloat(row.lng), parseFloat(row.lat));//高德坐标转84坐标
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
                com.InitPois(areaName, pois);
            })

        },
        //摄像头点击事件
        loadCameraDetial: function (nodeName) {
            $("#detail_societyplayer").hide();
            /*******************选中POI-start*******************/
            var areaName = con.AreaName;
            //POI放在中间
            Q3D.globalCamera().flyToByClick('MapWrapper', Q3D.vector3d(map.getSceneNode(areaName, nodeName).getAbsPos()), 0.5);

            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var layername = this.LastPOI_Clk.split('_')[0].replace("POISociety", "");
                var level = this.LayerType.Level;
                var icon = this.LayerType.UnChooseIcon;
                var lastNode = map.getSceneNode(areaName, this.LastPOI_Clk);
                if (lastNode) {
                    lastNode.asPOI().setIcon(icon);
                    //lastNode.setVisible(0);
                }
            }
            this.LastPOI_Clk = nodeName;
            var node = map.getSceneNode(areaName, nodeName);
            if (node != null) {

                var poi = node.asPOI();

                var layername = nodeName.split('_')[0].replace("POISociety", "");
                var level = this.LayerType.Level;
                var icon = this.LayerType.ChooseIcon;
                poi.setIcon(icon);
                //});
            }
            /*******************选中POI-end*******************/

            var id = nodeName.replace("POISocietyCamera_", "");
            var data = require("sl_Camera").CameraListData.get(id);

            var post_data = { "sbbm": data.globalNumber }
            require("s_LayerMenuAjax").getCameraUrlById(post_data, function (result) {
                var cameraurl = result.data;
                if (cameraurl != null) {
                    //aliplayer不能删除视频，先隐藏后直接替换视频地址。
                    //加载页面内容
                    if (!require("sl_Camera").SocietyCamera_player) {
                        var url = con.HtmlUrl + 'SocietyNew/Bottom_CameraDetail.html';
                        require(['text!' + url], function (template) {
                            $("#detail_societyplayer").html(template);
                            $("#detail_societyplayer").show('slide', { direction: 'left' }, 500);
                            var videowidth = $(".video-js").width();
                            var videoheight = $(".video-js").height();
                            //加载视频
                            var playerurl = "http://106.14.152.119:8082/videoGetStream/103.214.87.67:11937/citybrain/31011900011328031001.flv?vhost=cb.alivecdn.com";
                            require("sl_Camera").loadaliplayer(cameraurl);
                            require("sl_Camera").CameraState = 1;
                        });

                    }
                    else {
                        $("#detail_societyplayer").show();
                        try {
                            var playerurl = "http://106.14.152.119:8082/videoGetStream/103.214.87.67:11937/citybrain/31011900011328031001.flv?vhost=cb.alivecdn.com";
                            require("sl_Camera").changealiplayer(cameraurl);
                        } catch (e) {
                        }
                    }

                    //  节点信息窗跟随测试
                    var nodePath = areaName + '/' + nodeName;

                    if (require("sl_Camera").nodeFollowingPath != null) {
                        map.disableNodeFollowing(require("sl_Camera").nodeFollowingPath, true);
                    }

                    require("sl_Camera").nodeFollowingPath = nodePath;
                    map.enableNodeFollowing(nodePath, function (node, v2i) {
                        if (node.getFullName() == nodePath) {
                            document.getElementById("s_cameradetail").style.left = v2i.x + "px";
                            document.getElementById("s_cameradetail").style.top = v2i.y + "px";

                            // 获取指定节点的屏幕坐标
                            //var v2iNode = mapObj._map3d.getWorldManager().getMainCamera(0).absPosToViewport(node.getAbsPos());

                            //console.log('窗口：'+v2i.x + ',' + v2i.y + ';' + '节点：'+v2iNode.x + ',' + v2iNode.y);
                        }
                    });
                }
                else {
                    //com.alert("视频地址为空");
                    require("mainJsLoad").commonAlert("视频地址为空");
                }
            });
        },
        //切换视频
        changealiplayer: function (url) {
            require("sl_Camera").SocietyCamera_player.loadByUrl(url);
        },
        //加载阿里视频
        loadaliplayer: function (url) {
            setTimeout(function () {
                //加载视频
                require(['aliplayer'], function (data) {
                    var videowidth = $(".video-js").width();
                    var videoheight = $(".video-js").height();

                    require("sl_Camera").SocietyCamera_player = new Aliplayer({
                        "id": "bottom_cameradetail",
                        "source": url,
                        "width": videowidth + "px",
                        "height": videoheight + "px",
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
                this.LayerType = require("s_Main").LayerCatalog.Camera;
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
            $("#detail_societyplayer").hide();
        },
        //清空摄像头POI
        clearCameraPOI: function () {
            var areaName = con.AreaName;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var layername = this.LastPOI_Clk.split('_')[0].replace("POISociety", "");
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

                    var poiname = "POISociety" + name + "_" + data[i].id;
                    var node = map.getSceneNode(areaName + "/" + poiname);
                    if (node) {
                        //map.getArea(areaName).destroySceneNode(poiname);
                        node.setVisible(0);
                    }

                    //var linname = "SocietyLine" + name + "_" + data[i].id;
                    //var modelPath = areaName + "/" + poiname;
                    //var nodePath = modelPath + "/" + linname;
                    //var nodeline = map.getSceneNode("lg/POISocietyCamera_1/SocietyLineCamera_1");
                    //if (nodeline) {

                    //    //map.getArea(areaName).destroySceneNode(poiname);
                    //    nodeline.setVisible(0);
                    //}
                }
                this.LayerType = null;
                this.POIData = null;
            }

        },

        //加载第二列的div
        loadLeftSecond: function () {
            var url = con.HtmlUrl + 'SocietyNew/Left_Second_EventCamera.html';
            require(['text!' + url], function (template) {
                $("#left_second_01").html(template);

                require("sl_IOT").loadSocietyCarchart();//
                require("sl_IOT").loadCirclediv();
            })
        },
        Revert: function () {
            try {
                if (require("sl_Camera").SocietyCamera_player) {
                    require("sl_Camera").SocietyCamera_player.dispose();
                    require("sl_Camera").SocietyCamera_player = null;
                }

            } catch (error) {
                console.log(error.message);
                //$.getScript(con.WebServiceUrl + "Scripts/Tools/aliplayer/aliplayer-min.js", function (script, textStatus, jqXHR) {});
            }

            require("sl_Camera").clearCameraPOI();
            this.closeCameraDetial();
            //if (require("sl_Camera").CameraState == 1) {
            //    //加载视频后dispose只能一次，重复dispose会报错

            //}
        }
    }
})