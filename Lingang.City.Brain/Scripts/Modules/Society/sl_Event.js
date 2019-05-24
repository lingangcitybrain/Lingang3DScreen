define(["config", "common", "util", "s_layerMenuData", "s_LayerMenuAjax", "s_LeftLayer"], function (con, com, util, s_layerMenuData, s_LayerMenuAjax, s_LeftLayer) {
    /**************************************事件*************************************/
    return {
        LayerType: null,//选择事件
        POIData: null,//POI详情数据
        LastPOI_Clk: null,//鼠标选中POI
        DanaoAnimation: null, //大脑动画
        //加载摄像头POI
        //"danao_dndx007",
        Linelist: new Array("danao_dndx001_c", "danao_dndx001_r", "danao_dndx002_c", "danao_dndx002_r", "danao_dndx003_c", "danao_dndx003_r", "danao_dndx004_c", "danao_dndx004_r"),
        showTime: null,
        hideTime: null,
        jumppoilist: [],//跳动POI列表
        SocietyEvent_player: null,
        DanaoAnimation: null,
        EventList: new util.HashMap,
        InspectorData: null,//派单巡查员数据
        InspectorList: new util.HashMap,
        /*********************加载事件POI-start*********************/
        loadEvent: function () {
            //this.Revert();
            this.LayerType = require("s_Main").LayerCatalog.Event;

            map.loadArea("danao");

            //获取巡查员数据
            require("sl_Event").loadInspectorList();

            com.LayerFlyto(15, function () {
                //大脑转动
                require("s_Main").DanaoAnimation = setTimeout(function () {
                    require("sl_Event").loadDanaoAnimation();
                }, 10000);

                var nowdata = require("common").getNowFormatDate();//当前时间
                var before7 = require("common").getDaysBefore(nowdata, 7);//7天前的时间
                var post_data = { "pageIndex": 1, "pageSize": 10000, "startTime": before7, "endTime": nowdata }
                //获取最近7天事件
                require("s_LayerMenuAjax").getEventList(post_data, function (result) {

                    var areaName = con.AreaName;
                    var pois = [];
                    for (var i = 0; i < require("sl_Event").POIData.length; i++) {
                        var row = require("sl_Event").POIData[i];
                        require("sl_Event").EventList.put(row.id, row);
                        var icon = require("sl_Event").LayerType.List[row.communityId].UnChooseIcon;
                        var poiName = "POISociety" + require("sl_Event").LayerType.List[row.communityId].Name + "_" + row.id;//POIIOT_01
                        var iconSize = Q3D.vector2(53, 43);
                        //switch (row.communityId) {
                        //    case "U003"://海岸线
                        //        iconSize = Q3D.vector2(41, 45);
                        //        break;
                        //    case "C001"://工地
                        //        iconSize = Q3D.vector2(41, 45);
                        //        break;
                        //    default:
                        //}
                        var pos = row.lng + "," + row.lat + ",0";
                        var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

                        var poi = {
                            POIName: poiName, Position: position, Text: "", Icon: icon, IconSize: iconSize
                        };

                        var node = map.getSceneNode(areaName + "/" + poiName);

                        if (node) {
                            node.setVisible(1);
                        } else {
                            pois.push(poi);

                        }
                    }
                    com.InitPois(areaName, pois);
                });
            })
        },
        //获取巡查员坐标
        loadInspectorList: function () {
            if (!require("sl_Event").InspectorData) {
                require("s_LayerMenuAjax").getInspectorList(function (result) {
                    for (var i = 0; i < require("sl_Event").InspectorData.length; i++) {
                        var row = require("sl_Event").InspectorData[i];
                        require("sl_Event").InspectorList.put(row.inspectorName, row);
                    }
                })
            }

            for (var i in require("sl_Event").InspectorList.keys()) {
                console.log(require("sl_Event").InspectorList.keys()[i]);
            }

        },
        //清空事件POI
        clearEventPOI: function () {
            var data = this.POIData;
            var areaName = con.AreaName;
            //设置POI隐藏
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    var name = this.LayerType.List[data[i].communityId].Name;

                    var poiname = "POISociety" + name + "_" + data[i].id;
                    var node = map.getSceneNode(areaName + "/" + poiname);
                    if (node) {
                        map.getArea(areaName).destroySceneNode(poiname);
                        //node.setVisible(0);
                    }
                }
                this.LayerType = null;
                this.POIData = null;
            }
            //if (map.getSceneNode(areaName + "/eventDetail1")) {
            //    map.getArea(areaName).destroySceneNode("eventDetail1");
            //}
            if (map.getSceneNode(areaName + "/paidan01")) {
                map.clearPOIJump();
                map.getArea(areaName).destroySceneNode("paidan01");
            }
            if (map.getSceneNode(areaName + "/paidanDetail")) {
                map.getArea(areaName).destroySceneNode("paidanDetail");
            }
            //map.getArea(areaName).destroySceneNode(poiname);

        },
        //点击POI显示详情事件
        loadPoiDetail: function () {
            require("sl_Event").jumppoilist = [];
            var areaName = con.AreaName;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var type = this.LastPOI_Clk.split('_')[1];
                var icon = this.LayerType.List[type].UnChooseIcon;

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
                var type = nodeName.split('_')[1];
                var icon = this.LayerType.List[type].ChooseIcon;
                poi.setIcon(icon);
            }
            require("sl_Event").jumppoilist.push(areaName + "/" + nodeName);
            map.setBatchPOIJump(require("sl_Event").jumppoilist, 50);

            var id = nodeName.split('_')[2];

            //获取大脑坐标
            var danao_absPos = Q3D.vector3d(map.getSceneNode("danao/danao_zhdn").getAbsPos());
            var danao_coordinate = require("common").planeToCoordinate(danao_absPos.x + "," + danao_absPos.y + "," + danao_absPos.z);//获取大脑经纬度坐标

            //画事件到大脑的连接

        },
        /*********************加载事件POI-end*********************/


        /*********************加载大脑转动特效-start*********************/
        //事件处理特效
        loadEventProcessing: function (nodeName) {
            require("sl_Event").clearEventPaidan();
            require("sl_Event").jumppoilist = [];
            var areaName = con.AreaName;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var type = this.LastPOI_Clk.split('_')[1];
                var icon = this.LayerType.List[type].UnChooseIcon;

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
                var type = nodeName.split('_')[1];
                var icon = this.LayerType.List[type].ChooseIcon;
                poi.setIcon(icon);
            }
            require("sl_Event").jumppoilist = [];
            require("sl_Event").jumppoilist.push(areaName + "/" + nodeName);
            map.setBatchPOIJump(require("sl_Event").jumppoilist, 50);


            var id = nodeName.split('_')[2];
            switch (id) {
                case "3606": //显示事件图片详情-智能井盖翻开
                    require("sl_Event").loadEventPicDetail(id);
                    break;
                case "3594":  //显示事件视频详情-停车地磁占位
                    require("sl_Event").loadEventVedioDetail(id);
                    break;
                case "3562": //显示事件视频详情
                    require("sl_Event").loadEventVedioDetail(id);
                    break;
                default:
                    //视角定位到坐标,默认显示图片
                    var pos = Q3D.vector3d(map.getSceneNode(areaName, nodeName).getAbsPos());
                    var postr = pos.x + "," + pos.y + "," + pos.z;
                    var height = parseFloat(postr.split(',')[2]) - 1300,
                        x = parseFloat(postr.split(',')[0]) + 2600,
                        z = parseFloat(postr.split(',')[1]) + 2200;
                    var pointlast = x + "," + z + "," + height;
                    Q3D.globalCamera().flyTo(pointlast.toVector3d(), ("-72.18743133544922,56.96735382080078,69.03022766113281").toVector3(), 2, function () {
                        require("sl_Event").loadEventPicDetail(id);
                    });
                    break;
            }
        },
        //显示事件图片详情
        loadEventPicDetail: function (id) {
            //console.log(id);
            var areaName = con.AreaName;
            var data = require("sl_Event").EventList.get(id);
            //加载页面内容
            var url = con.HtmlUrl + 'SocietyNew/Bottom_EventDetailPic.html';
            require(['text!' + url], function (template) {
                $("#detail_02").html(template);
                $("#detail_02").show('slide', {
                    direction: 'left'
                }, 500);
                $(".poiinfo").css("left", "32%");
                $(".poiinfo").css("top", "19%");

                $("#div_eventdetail").hide()
                $("#div_eventdetail").show('drop', 1000);

                $("#eventhead").html(data.eventName);
                var html = '<div class="boxcont flex">';
                //图片不为空 显示图片
                if (!data.dealImage && data.dealImage != "") {
                    var html = '<div class="box-leftpic fl" style="text-align:center;">' +
                                    '<img src="' + data.dealImage + '" style="width:3rem;" />' +
                                    '</div>';
                }
                var html = '<dic class="box-rightinfo fl" style="margin-top:.2rem; font-size:.35rem; line-height:.7rem;">' +
                    '<ul>' +
                        '<li><span>事件时间：</span><em>' + require("common").formatDate2(data.createTime) + '</em></li>' +
                        '<li><span>事件地点：</span><em>' + data.address + '</em></li>' +
                        '<li><span>事件类型：</span><em' + data.eventTypeName + '</em></li>' +
                        '<li><span>事件描述：</span><em>' + data.eventDes + '</em></li>' +
                        '<li><span>事件状态：</span><em>' + data.statusName + '</em></li>' +
                        '<li><span>小区名称：</span><em>' + data.regionName + '</em></li>' +
                    '</ul>' +
                    '</dic></div>';
                $("#eventdetail").html(html);

                //require("sl_Event").loadVedio();

                //map.getSceneNode("danao/" + data.todanaoLine).setVisible(1);

                //Q3D.globalCamera().flyTo((data.xyz).toVector3d(), (data.angle).toVector3(), 1, function () {

                //    map.getSceneNode("danao/" + data.danaoLineTo).setVisible(1);

                //获取大脑坐标
                var danao_absPos = Q3D.vector3d(map.getSceneNode("danao/danao_zhdn").getAbsPos());
                var danao_coordinate = require("common").planeToCoordinate(danao_absPos.x + "," + danao_absPos.y + "," + danao_absPos.z);//获取大脑经纬度坐标
                var danao_coordinatestr = danao_coordinate.longitude + "," + danao_coordinate.latitude + "," + danao_coordinate.height;
                //画事件到大脑的连接
                var option = {
                    AreaName: "gwh_xilou",
                    //AreaName: "Shanghai",
                    Name: "shijian_" + id,
                    LineAlias: "mark",
                    LineWidth: 50,
                    showAuxIcon: false,
                    MaterialName: "Material/aaaa.mtr",
                }

                var eventpos = data.lng + "," + data.lat + ",0";
                require("common").getRadianLine(eventpos, danao_coordinatestr, 500, option);//显示事件到大脑的连线

                //定位视角到大脑
                //399242.5915524868,3584.834014892578,-3418567.276543012|-73.44865417480469,51.54043960571289,69.21678161621094
                //Q3D.globalCamera().flyTo(("399242.5915524868,3584.834014892578,-3418567.276543012").toVector3d(), ("-73.44865417480469,51.54043960571289,69.21678161621094").toVector3(), 2, null);

                if (data.dealPerson != null && data.dealPerson != "") {
                    setTimeout(function () {
                        var inspectordetail = require("sl_Event").InspectorList.get("杨育峰");//静态测试
                        if (inspectordetail!=null) {
                            //画大脑到派单员的连接
                            var option = {
                                AreaName: "gwh_xilou",
                                //AreaName: "Shanghai",
                                Name: "paidan_" + id,
                                LineAlias: "mark",
                                LineWidth: 50,
                                showAuxIcon: false,
                                MaterialName: "Material/aaaa.mtr",
                            }
                            var pos2 = inspectordetail.longitude + "," + inspectordetail.latitude + ",0";//派单坐标
                            require("common").getRadianLine(danao_coordinatestr, pos2, 500, option);//显示事件到大脑的连线

                            var fullNodePath2 = areaName + "/paidan01";

                            var position2 = Q3D.vector3(pos2.toGlobalVec3d().toLocalPos(areaName));

                            var data2 = {
                                Position: position2, Text: "", Icon: "Texture/Common/paidan.png", IconSize: Q3D.vector2(100, 97)
                            }
                            if (map.getSceneNode(fullNodePath2)) {
                                map.clearPOIJump();
                                map.getArea(areaName).destroySceneNode("paidan01");
                            }
                            require("sl_Event").createPOI(fullNodePath2, data2);

                            require("sl_Event").jumppoilist.push(fullNodePath2);
                            map.setBatchPOIJump(require("sl_Event").jumppoilist, 50);
                            require("sl_Event").loadPaidan(id);
                        }
                    }, 1000);
                }

            })
        },
        //显示事件视频详情
        loadEventVedioDetail: function (id) {
            var areaName = con.AreaName;
            var data = require("sl_Event").EventList.get(id);
            //加载页面内容
            var url = con.HtmlUrl + 'SocietyNew/Bottom_EventDetail.html';
            require(['text!' + url], function (template) {
                $("#detail_02").html(template);
                $("#detail_02").show('slide', {
                    direction: 'left'
                }, 500);


                switch (id) {
                    case "3606": //智能井盖翻开
                        $(".sqzz-sj-poi").css("left", "40%");
                        $(".sqzz-sj-poi").css("top", "19%");
                        break;
                    case "3562": //工地冰雪世界
                        $(".sqzz-sj-poi").css("left", "72%");
                        $(".sqzz-sj-poi").css("top", "12%");
                        break;
                    default:
                }
                $("#eventdetail").hide()
                $("#eventdetail").show('drop', 1000);

                $("#eventhead").html(data.eventName);
                var html = ' <li><div>接警时间：</div><span>' + require("common").formatDate2(data.createTime) + '</span></li>' +
                    '<li><div><img src="Content/images/sqzz-poi-icon1.png">地址：</div><span>' + data.address + '</span></li>' +
                    '<li><div><img src="Content/images/sqzz-poi-icon2.png">事件描述：</div><span>' + data.eventDes + '</span></li>';
                $("#ul_eventdetail").html(html);

                require("sl_Event").loadVedio(id);

                map.getSceneNode("danao/" + data.todanaoLine).setVisible(1);
                Q3D.globalCamera().flyTo((data.xyz).toVector3d(), (data.angle).toVector3(), 1, function () {

                    map.getSceneNode("danao/" + data.danaoLineTo).setVisible(1);

                    setTimeout(function () {
                        /*派单POI*/
                        var fullNodePath2 = areaName + "/paidan01";
                        var pos2 = data.plng + "," + data.plat + ",0";
                        var position2 = Q3D.vector3(pos2.toGlobalVec3d().toLocalPos(areaName));

                        var data2 = {
                            Position: position2, Text: "", Icon: "Texture/Common/paidan.png", IconSize: Q3D.vector2(100, 97)
                        }
                        if (map.getSceneNode(fullNodePath2)) {
                            map.clearPOIJump();
                            map.getArea(areaName).destroySceneNode("paidan01");
                        }
                        require("sl_Event").createPOI(fullNodePath2, data2);

                        require("sl_Event").jumppoilist.push(fullNodePath2);
                        map.setBatchPOIJump(require("sl_Event").jumppoilist, 50);
                        require("sl_Event").loadPaidan(id);
                    }, 1000);
                });


            })
        },
        //加载派单页面
        loadPaidan: function (id) {
            var url = con.HtmlUrl + 'SocietyNew/Bottom_EventPaidan.html';
            require(['text!' + url], function (template) {
                $("#detail_03").html(template);
                $("#detail_03").show('slide', {
                    direction: 'left'
                }, 500);

                var data = require("sl_Event").EventList.get(id);
                var inspectordata = require("sl_Event").InspectorList.get("杨育峰");//静态测试
                var html = '<dic class="sqzz-sjjd-div flex">' +
                            '<img src="' + inspectordata.photoUrl + '" style="width: 112px; height: 150px;">' +
                            '<ul class="sqzz-sjjd-list1">' +
                                '<li><span>接单员：</span><em>' + inspectordata.inspectorName + '</em></li>' +
                                '<li><span>性别：</span><em>' + inspectordata.sex + '</em></li>' +
                                '<li><span>职位：</span><em>' + inspectordata.position + '</em></li>' +
                           ' </ul>' +
                        '</dic>' +
                        '<ul class="sqzz-sjjd-list2">' +
                            '<li><span>响应时间：</span><em>' + data.updateTime + '</em></li>' +
                           ' <li><span>状态：</span><em>' + data.statusName + '</em></li>' +
                           ' <li><span>社区：</span><em>' + inspectordata.belongCommunities + '</em></li>' +
                            '</ul>';
                $("#paidandetail").html(html);
                $("#paidandetail").hide()
                $("#paidandetail").show('drop', 1000);
            })
        },
        loadWorkSiteVedioDetail: function (id) {
            if (require("sl_Event").SocietyEvent_player) {
                require("sl_Event").SocietyEvent_player.dispose();
                require("sl_Event").SocietyEvent_player = null;
            }

        },
        loadVedio: function (id) {
            if (require("sl_Event").SocietyEvent_player) {
                require("sl_Event").SocietyEvent_player.dispose();
                require("sl_Event").SocietyEvent_player = null;
            }
            var url = "";
            switch (id) {
                case "3594": //停车地磁占位
                    setTimeout(function () {
                        //加载视频
                        require(['aliplayer'], function (data) {
                            var url = con.WebServiceUrl + "/Content/video/illegalPark.flv";

                            require("sl_Event").SocietyEvent_player = new Aliplayer({
                                "id": "eventvideo",
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
                                $("#eventvideo").attr("poster", con.WebServiceUrl + "Content/images/sxt-videoli.png");
                            })
                        })
                    }, 1000);
                    break;
                case "3562": //工地无人机
                    var url = con.WebServiceUrl + "/Content/video/CH2.flv";
                    setTimeout(function () {
                        //加载视频
                        require(['aliplayer'], function (data) {
                            var videowidth = $(".sqzz-sj-video").width();
                            var videoheight = $(".sqzz-sj-video").height();

                            require("sl_Event").SocietyEvent_player = new Aliplayer({
                                "id": "eventvideo",
                                "source": url,
                                "width": videowidth + "px",
                                "height": videoheight + "px",
                                "autoplay": true,
                                "isLive": false,
                                "rePlay": true,
                                "showBuffer": true,
                                "snapshot": false,
                                "showBarTime": 5000,
                                "useFlashPrism": true,
                                "waitingTimeout": 60

                            }, function (player) {
                                //加载成功,清空错误提示
                                $(".prism-ErrorMessage").empty();
                                $("#eventvideo").attr("poster", con.WebServiceUrl + "Content/images/sxt-videoli.png");
                            })
                        })
                    }, 1000);
                    break;
                default:
            }


        },
        clearEventPaidan: function () {
            var areaName = con.AreaName;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var type = require("sl_Event").LastPOI_Clk.split('_')[1];
                var icon = this.LayerType.List[type].UnChooseIcon;

                var lastNode = map.getSceneNode(areaName, this.LastPOI_Clk);
                if (lastNode) {
                    lastNode.asPOI().setIcon(icon);
                    //lastNode.setVisible(0);
                }

                var id = require("sl_Event").LastPOI_Clk.split('_')[2];
                //清除发光动线连线
                map.getArea(areaName).destroySceneNode("shijian_" + id);
                map.getArea(areaName).destroySceneNode("paidan_" + id);
            }
            if (require("sl_Event").SocietyEvent_player) {
                require("sl_Event").SocietyEvent_player.dispose();
                require("sl_Event").SocietyEvent_player = null;
            }


            $("#detail_02").html("");
            $("#detail_03").html("");
        },
        //循环出现事件-派单
        showEventProcessing: function () {
            require("sl_Event").clearEventProcessing();
            var data = s_layerMenuData.EventData.list;
            //
            for (var i = 0; i <= 7; i++) {
                (function (i) {
                    setTimeout(function () {
                        var posview1 = data[i].poiview.split('|')[0];
                        var posview2 = data[i].poiview.split('|')[1];
                        Q3D.globalCamera().flyTo((posview1).toVector3d(), (posview2).toVector3(), 1, function () {
                            if (map.getSceneNode("danao/" + data[i].linename)) {
                                map.getSceneNode("danao/" + data[i].linename).setVisible(1);
                            }
                            var nodeName = "POISociety" + require("sl_Event").LayerType.List[data[i].communityId].Name + "_" + data[i].id;//POIIOT_01

                            var areaName = con.AreaName;
                            if (require("sl_Event").LastPOI_Clk && require("sl_Event").LastPOI_Clk != "") {
                                var layername = require("sl_Event").LastPOI_Clk.split('_')[0].replace("POISociety", "");
                                var level = require("sl_Event").LayerType.Level;
                                var type = require("sl_Event").LastPOI_Clk.split('_')[1];
                                var icon = require("sl_Event").LayerType.List[type].UnChooseIcon;

                                var lastNode = map.getSceneNode(areaName, require("sl_Event").LastPOI_Clk);
                                if (lastNode) {
                                    lastNode.asPOI().setIcon(icon);
                                    //lastNode.setVisible(0);
                                }
                            }

                            require("sl_Event").LastPOI_Clk = nodeName;
                            var node = map.getSceneNode(areaName, nodeName);
                            if (node != null) {

                                var poi = node.asPOI();

                                var layername = nodeName.split('_')[0].replace("POISociety", "");
                                var level = require("sl_Event").LayerType.Level;
                                var type = nodeName.split('_')[1];
                                var icon = require("sl_Event").LayerType.List[type].ChooseIcon;
                                poi.setIcon(icon);
                                //设置选中POI跳动一次
                                var poiname = areaName + "/" + nodeName;
                                map.setBatchPOIGravityJump([poiname], 50);

                            }

                            /*显示事件详情*/
                            var fullNodePath = areaName + "/eventDetail" + i;
                            if (map.getSceneNode(fullNodePath)) {
                                map.getSceneNode(fullNodePath).setVisible(1);
                            }
                            else {
                                var pos = data[i].lng + "," + data[i].lat + ",200";
                                var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

                                var data1 = {
                                    Position: position, Text: "", Icon: "Texture/Common/eventDetail1.png", IconSize: Q3D.vector2(150, 130)
                                }
                                require("sl_Event").createPOI(fullNodePath, data1);
                            }
                            /*事件传输到大脑的连线*/
                            map.getSceneNode("danao/" + data[i].linename).setVisible(1);
                            /*大脑传输到派单员的连线*/
                            map.getSceneNode("danao/danao_dndx007").setVisible(1);

                            /*派单POI*/
                            var fullNodePath2 = areaName + "/paidan01";
                            if (map.getSceneNode(fullNodePath2)) {
                                map.getSceneNode(fullNodePath2).setVisible(1);
                            }
                            else {
                                var pos2 = "121.905560,30.900820,11.306030";
                                var position2 = Q3D.vector3(pos2.toGlobalVec3d().toLocalPos(areaName));

                                var data2 = {
                                    Position: position2, Text: "", Icon: "Texture/Common/paidan.png", IconSize: Q3D.vector2(100, 97)
                                }
                                require("sl_Event").createPOI(fullNodePath2, data2);
                            }
                            var fullNodePath2 = "gwh_xilou/paidan01";
                            map.setBatchPOIJump([fullNodePath2], 50);

                            /*派单详情*/
                            var fullNodePath3 = areaName + "/paidanDetail";
                            if (map.getSceneNode(fullNodePath3)) {
                                map.getSceneNode(fullNodePath3).setVisible(1);
                            }
                            else {
                                var pos3 = "121.905047,30.900992,450";
                                var position3 = Q3D.vector3(pos3.toGlobalVec3d().toLocalPos(areaName));

                                var data3 = {
                                    Position: position3, Text: "", Icon: "Texture/Common/eventDetail2.png", IconSize: Q3D.vector2(200, 150)
                                }

                                require("sl_Event").createPOI(fullNodePath3, data3);


                                map.setBatchPOIJump("gwh_xilou/eventDetail2", 5, null, null);
                            }
                        });



                    }, 2000 * i);
                })(i);

            }
        },
        clearEventProcessing: function () {
            require("sl_Event").hideLine();
            var areaName = con.AreaName;
            for (var i = 0; i <= 7; i++) {
                var fullNodePath = areaName + "/eventDetail" + i;
                if (map.getSceneNode(fullNodePath)) {
                    map.getSceneNode(fullNodePath).setVisible(0);
                }
            }

            $("#detail_02").html("");
            $("#detail_03").html("");
        },
        createPOI: function (fullNodePath, data) {
            //给定POI参数		
            var createOptions = {
                Position: data.Position,//data[i].Position.toVector3(),
                Orientation: null,
                OrientationType: Q3D.Enums.nodeOrientationType.Self,
                Scale: Q3D.vector3(1, 1, 1),
                POIOptions: {
                    FontSize: data.FontSize == null ? 14 : data.FontSize,
                    FontName: "微软雅黑",
                    FontColor: Q3D.colourValue(data.FontColor, 1),
                    CharScale: 1,
                    Text: data.Text,
                    Icon: data.Icon,
                    IconSize: Q3D.vector2(data.IconSize == null ? [50, 50] : data.IconSize),
                    POILayout: Q3D.Enums.poiLayOut.Bottom,
                    UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
                    IconAlphaEnabled: true,
                    FontOutLine: 0, //同描边有关
                    FontEdgeColor: Q3D.colourValue("#000000", 1),
                    AlphaTestRef: null,
                    Location: Q3D.Enums.poiImagePositionType.POI_LOCATE_BOTTOM,
                    LocationOffset: null, //当Location为POI_LOCATE_CUSTOM起作用
                    BackFrameBorderSize: null,//2, //同边框有关 背景边框大小
                    BackBorderColor: null,//Q3D.colourValue("#80ffff", 1),//背景边框颜色
                    BackFillColor: null,//Q3D.colourValue("#80ffff", 1),//背景填充色
                    LabelMargin: null,
                    IconLabelMargin: null,
                    SpecialTransparent: true,
                    AlwaysOnScreen: true,
                }
            };

            map.createPOI(fullNodePath, createOptions);
        },


        //大脑自传动画
        loadDanaoAnimation: function () {

            //map.clearMovieClip(require('sl_Event').DanaoAnimation.getCName());
            require('sl_Event').DanaoAnimation = null
            var mcName = "operationProcedureMC",
              mcInstName = "operationProcedureMCInst",
              fps = 25;
            //无人车(旋转)
            var rotateInfoForAGVVehicle1 = [
                {
                    Key: 0, Rotate: "180,-68.67,180".toVector3()
                },						//初始位置
                {
                    Key: fps * 2, Rotate: "180,0,180".toVector3()
                },
                {
                    Key: fps * 4, Rotate: "180,60,180".toVector3()
                },
                {
                    Key: fps * 6, Rotate: "180,120,180".toVector3()
                },
                {
                    Key: fps * 8, Rotate: "180,180,180".toVector3()
                },
                {
                    Key: fps * 10, Rotate: "180,240,180".toVector3()
                },
                {
                    Key: fps * 12, Rotate: "180,290,180".toVector3()
                },
            ];

            if (require('sl_Event').DanaoAnimation != null) {
                require('sl_Event').DanaoAnimation.replay();
            } else {
                var operationMC = Q3D.movieClip(mcName, fps);
                if (operationMC) {
                    operationMC.addActorRotateAnimation("actorForAGVVehicle1", rotateInfoForAGVVehicle1);
                }

                var operationMCInst = Q3D.movieClipInstance(mcInstName, operationMC);
                if (operationMCInst) {
                    var yt1 = map.getSceneNode("danao/danao_zhdn");
                    if (yt1) {
                        operationMCInst.setTransformPlayer("actorForAGVVehicle1", yt1);
                        operationMCInst.setPlayOptions(0, 1);
                        operationMCInst.play();
                    }
                }

                //缓存对象
                require('sl_Event').DanaoAnimation = operationMCInst;
            }
        },

        showLine: function () {
            for (var i = 0; i <= 7; i++) {
                (function (i) {
                    setTimeout(function () {
                        if (map.getSceneNode("danao/danao_dndx001_c")) {
                            map.getSceneNode("danao/danao_dndx001_c").setVisible(1);
                        }

                        if (map.getSceneNode("danao/danao_dndx001_r")) {
                            map.getSceneNode("danao/danao_dndx001_r").setVisible(1);
                        }

                        if (map.getSceneNode("danao/danao_dndx001_c")) {
                            map.getSceneNode("danao/danao_dndx001_c").setVisible(0);
                        }

                        if (map.getSceneNode("danao/danao_dndx001_r")) {
                            map.getSceneNode("danao/danao_dndx001_r").setVisible(0);
                        }

                        if (map.getSceneNode("danao/danao_dndx002_c")) {
                            map.getSceneNode("danao/danao_dndx002_c").setVisible(0);
                        }

                        if (map.getSceneNode("danao/danao_dndx002_r")) {
                            map.getSceneNode("danao/danao_dndx002_r").setVisible(0);
                        }
                        if (map.getSceneNode("danao/danao_dndx003_c")) {
                            map.getSceneNode("danao/danao_dndx003_c").setVisible(0);
                        }

                        if (map.getSceneNode("danao/danao_dndx003_r")) {
                            map.getSceneNode("danao/danao_dndx003_r").setVisible(0);
                        }
                        if (map.getSceneNode("danao/danao_dndx004_c")) {
                            map.getSceneNode("danao/danao_dndx004_c").setVisible(1);
                        }

                        if (map.getSceneNode("danao/danao_dndx004_r")) {
                            map.getSceneNode("danao/danao_dndx004_r").setVisible(1);
                        }
                    }, 1000 * i);
                })(i);

            }
        },
        hideLine: function () {
            for (var i = 0; i <= 7; i++) {
                if (map.getSceneNode("danao/" + require("sl_Event").mycars[i])) {
                    map.getSceneNode("danao/" + require("sl_Event").mycars[i]).setVisible(0);
                }
            }
            if (map.getSceneNode("danao/danao_dndx007")) {
                map.getSceneNode("danao/danao_dndx007").setVisible(0);
            }
            //for (var i = 0; i <= 7; i++) {
            //    (function (i) {
            //        setTimeout(function () {
            //            if (map.getSceneNode("danao/" + require("sl_Event").mycars[i])) {
            //                map.getSceneNode("danao/" + require("sl_Event").mycars[i]).setVisible(0);
            //            }
            //        }, 500 * i);
            //    })(i);
            //}
        },
        //清除动画剪辑对象
        movieClear: function () {
            if (require('sl_Event').DanaoAnimation != null) {
                try {
                    map.clearMovieClip(require('sl_Event').DanaoAnimation.getCName());
                    require('sl_Event').DanaoAnimation = null

                } catch (e) {

                }
            }
        },

        /*********************加载大脑转动特效-end*********************/


        //事件点击事件
        loadEventDetial: function (id) {

            var option = {
                AreaName: "gwh_xilou",
                //AreaName: "Shanghai",
                Name: "11112",
                LineAlias: "mark",
                LineWidth: 50,
                showAuxIcon: false,
                MaterialName: "Material/aaaa.mtr",
            }

            var fromPos = "121.901576,30.895399,3.999176";
            var toPos = "121.912923,30.896909,3.999176";
            require('common').getRadianLine(fromPos, toPos, 500, option);


            s_LeftLayer.loadLeft2Html();
            com.delNodeLineToScreen("lineTooltip");


            var nodeName = "POISocietyEvent_" + id

            //加载页面内容
            var url = con.HtmlUrl + 'Society/R_EventDetail.html';
            require(['text!' + url], function (template) {
                $("#detail_02").html(template);
                $("#detail_02").show('slide', {
                    direction: 'left'
                }, 500);


                var data = require("s_RightLayer").EventData.get(id);
                if (data) {



                    var html = "";


                    html += "<div class=\"box-top\">"
                    html += "    事件" + id
                    html += "    <button type=\"button\" class=\"box-close\"  onclick=\"require('s_Home').closeDetail()\"></button>"
                    html += "</div>"
                    html += "<div class=\"boxcont\">"
                    html += "<div class=\"box-leftpic\"><img src=\"Content/images/poi-leftpic.png\"></div>"
                    html += "<dic class=\"box-rightinfo\">"
                    html += "    <ul>"
                    html += "    <li><span>事件时间：</span><em>" + con.getNowFormatDate(data.createTime) + "</em></li>"
                    html += "     <li><span>事件地点：</span><em>" + data.address + "</em></li>"
                    html += "    <li><span>事件类型：</span><em>" + data.eventTypeName + "</em></li>"
                    html += "   <li><span>风险等级：</span><em>一级</em></li>"
                    html += "   <li><span>事件状态：</span><em>" + data.statusName + "</em></li>"
                    html += "    </ul>"
                    html += "    <button type=\"button\" class=\"btn\">事件处置</button>"
                    html += "</dic>"
                    html += "</div>"




                    $("#ul_eventdetail").empty();
                    $("#ul_eventdetail").html(html);
                }


                $("#ul_eventdetail").hide()
                $("#ul_eventdetail").show('drop', 1000);
            })



            //POI样式调整
            var areaName = con.AreaName;
            this.LayerType = require("s_Main").LayerCatalog.Event;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var layername = id; //this.LastPOI_Clk.split('_')[0].replace("POISociety", "");
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

                var layername = id;// nodeName.split('_')[0].replace("POISociety", "");
                var level = this.LayerType.Level;
                var icon = this.LayerType.ChooseIcon;
                poi.setIcon(icon);

                //飞到POI对应的位置
                Q3D.globalCamera().flyToByDistance(node.getAbsPos(), 100, Q3D.vector3(-78.01741027832031, 4.639147758483887, 20.8710994720459), 2, null);

                //创建连接线
                //页面位置调整
                var scrpos = require('sl_Event').getScrPosition(node)
                var top = scrpos.top + "px";
                var right = scrpos.right + "px";

                var width = 2130;
                var height = 100;

                var srcwidth = $(window).width()
                screen = window.screen,
                ratio = screen.deviceXDPI / screen.logicalXDPI;

                if (srcwidth > 1920 && ratio >= 1) {
                    width = 2130;
                    height = 100;
                } else {
                    width = 900;
                    height = 30;
                }


                require('sl_Event').createNodeLine(node, width, height);
            }
        },
        //创建连接线
        CreateTooltip: function (areaName, nodeName, right, top) {
            var tooltipName = "lineTooltipCase";

            var sNode = map.getSceneNode(areaName, nodeName);
            if (sNode == null) return;
            var uiSys = map.getOcx().getWorldManager().getUIWindowSys(0);
            var widget = uiSys.getTooltipWidget(tooltipName);
            if (widget == null) {
                widget = uiSys.createTooltipWidget(tooltipName);
            }
            widget.setMarginRight(right);
            widget.setMarginTop(top);
            widget.setLayoutWidth(1);
            widget.setLayoutHeight(1);
            widget.setAlpha(1);
            widget.setVisible(1);
            var color = Q3D.colourValue("#142E47", 1).get();
            widget.setTriFillColor(color);
            widget.setTriAlpha(0.8);
            widget.setEdgeColor(color);
            widget.setEdgeWidth(1);
            widget.setAutoObserveObj(sNode);
            widget.createRectLinks(0, 0, 1, 1);
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
        //获取页面的位置，后续需要完善
        getScrPosition: function (node) {
            var option = {
                top: 50, right: 450
            };
            var n_top, n_right;

            //根据POI在屏幕中位置以及告警页面的宽高计算告警页面的实际位置
            if (node) {
                var poinode = node.asPOI();
                var ScreenX = poinode.getScreenRectMin(); //获取当前POI相对于左上角的距离 
                var Fullwidth = $(window).width();          //获取整个屏幕的框度

                n_top = ScreenX.y + 4;                    //
                n_right = Fullwidth - ScreenX.x - 350

                option = {
                    top: n_top, right: n_right
                }  //获取告警页面的在屏幕的位置
            }

            return option;
        },
        //关闭
        closeDetail: function () {
            //$("#left_02").html("");
            $("#detail_02").empty();
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                this.LayerType = require("s_Main").LayerCatalog.Event;
                var level = this.LayerType.Level;
                var icon = this.LayerType.UnChooseIcon;
                var lastNode = map.getSceneNode(con.AreaName, this.LastPOI_Clk);
                if (lastNode) {
                    lastNode.asPOI().setIcon(icon);

                    this.LastPOI_Clk = null;
                }

                //com.delNodeLineToScreen("lineTooltip");
                //Q3D.globalCamera().flyTo(("395683.8080060399,286.4911804199219,-3416926.616417045").toVector3d(), ("-42.453548431396484,-2.83009672164917,-2.5931613445281982").toVector3(), 1, null);
            }
        },

        //加载第二列的div
        loadLeftSecond: function () {
            var url = con.HtmlUrl + 'SocietyNew/Left_Second_EventAll.html';
            require(['text!' + url], function (template) {
                $("#left_second_01").html(template);
                require("sl_IOT").loadSocietyCarchart();
            })
        },
        /*********************加载右侧事件列表-start*********************/

        //生成事件列表
        generateEventList: function () {
            require("s_LayerMenuAjax").getEventList(function (result) {
                var data = require("sl_Event").POIData;
                var html = '';
                var num = 0;
                for (var i = 0; i < data.length; i++) {


                    num++;

                    var style = "sjxx-li"
                    if (i <= 1) {
                        style = "sjxx-li active"
                    }

                    html +=
                       '<li class="' + style + '" onclick="require(&apos;s_RightLayer&apos;).loadEventDetail(' + data[i].id + ')">' +
                        '<div class="sjxx-li-line1">' +
                            '<span class="sjxx-id counter">' + num + '</span>' +
                            '<span class="sjxx-event">' + data[i].eventName + '</span>' +
                            '<span class="fr sjxx-state">' + data[i].statusName + '</span>' +
                        '</div>' +
                        '<div class="sjxx-address">' + data[i].address +
                            '<span class="fr sjxx-time">' + con.getNowFormatDate(data[i].createTime) + '<span>' + data[i].dealPerson + '</span></span>' +
                        '</div>' +
                        '</li>';

                    require("s_RightLayer").EventData.put(data[i].id, data[i]);
                }
                $("#ul_eventlist").html(html);

                //加载滚动条
                require(['nicescroll'], function (data) {
                    $('.scrolldiv').perfectScrollbar({
                        cursorwidth: 10, cursorcolor: "rgba(0, 126, 179, .6)",
                    });
                });
            });
        },

        loadEventDetail: function (id) {
            //显示左侧社区页面
            $("#society_twocolright").hide()
            $("#society_twocolright").show('drop', 1000);
            //var data = this.EventData.get(id);


            //图层选中事件
            $("#full_container #bottom_menu ul li").removeClass("active");
            $("#full_container #bottom_menu ul li").eq(6).addClass("active");

            //加载事件POI和事件详情
            require("sl_Event").loadEvent();
            setTimeout(function () {
                require("sl_Event").loadEventDetial(id)
            }, 1500);
        },
        /*********************加载大脑转动特效-end*********************/

        Revert: function () {
            if (this.DanaoAnimation) {
                clearTimeout(this.DanaoAnimation);
            }
            this.clearEventPaidan();
            this.movieClear();
            map.unloadArea("danao");
            this.clearEventPOI();
            this.closeDetail();

            //if (this.showTime != null) {
            //    window.clearInterval(this.showTime);
            //}
            //if (this.hideTime != null) {
            //    window.clearInterval(this.hideTime);
            //}
        }
    }
})