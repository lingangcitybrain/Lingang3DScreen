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

        danao_coordinatestr: null,//城市大脑的坐标
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
                        var pos = parseFloat(row.lng).toFixed(6) + "," + parseFloat(row.lat).toFixed(6) + ",0";
                        var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

                        var textname = "";
                        if (i == 0)
                        {
                            textname = "00:15:15";
                        } else if (i == 1)
                        {
                            textname = "00:05:18";
                        } else if (i == 2) {
                            textname = "00:10:16";
                        }

                        var poi = {
                            POIName: poiName, Position: position, Text: textname, Icon: icon, IconSize: iconSize, FontColor: "#00caca"
                        };

                        var node = map.getSceneNode(areaName + "/" + poiName);

                        if (node) {
                            node.setVisible(1);
                        } else {
                            pois.push(poi);
                        }

                    }
                    com.InitPois(areaName, pois);

                    //数据暂未提供，默认前5个 开始POI倒计时
                    for (var i = 0; i < 3; i++) {
                        var row = require("sl_Event").POIData[i];
                        var poiName = "POISociety" + require("sl_Event").LayerType.List[row.communityId].Name + "_" + row.id;//POIIOT_01
                        var timeText = "00:10:16";
                        if (i == 0) {
                            timeText = "00:15:15";
                        } else if (i == 1) {
                            timeText = "00:07:18";
                        } else if (i == 2) {
                            timeText = "00:10:16";
                        }
                       
                        var s = '';
                        var hour = timeText.split(':')[0];
                        var min = timeText.split(':')[1];
                        var sec = timeText.split(':')[2];

                        s = Number(hour * 3600) + Number(min * 60) + Number(sec);
                        require("sl_Event").setTimeCountDown(poiName, s);
                    //require("sl_Event").setTimeCountDown("POISocietyEvent_C001_13482", 918);
                    
                    }
                });
            })
        },
        //设置时间倒计时
        setTimeCountDown: function (poiname, times) {
            //var times = 915;
            var timer = null;
            timer = setInterval(function () {
                var day = 0,
                hour = 0,
                minute = 0,
                second = 0;//时间默认值
                if (times > 0) {
                    day = Math.floor(times / (60 * 60 * 24));
                    hour = Math.floor(times / (60 * 60)) - (day * 24);
                    minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
                    second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
                }
                if (day <= 9) day = '0' + day;
                if (hour <= 9) hour = '0' + hour;
                if (minute <= 9) minute = '0' + minute;
                if (second <= 9) second = '0' + second;
                //
                var timedata = hour + ":" + minute + ":" + second;
                var areaName = con.AreaName;
                var node = map.getSceneNode(areaName, poiname);
                if (node) {
                    node.asPOI().setText(timedata);
                }
                times--;
            }, 1000);
            if (times <= 0) {
                clearInterval(timer);
                var node = map.getSceneNode(areaName, poiname);
                if (node) {
                    node.asPOI().setText("");
                }
            }
        },
        //获取巡查员坐标
        loadInspectorList: function () {
            if (!require("sl_Event").InspectorData) {
                require("s_LayerMenuAjax").getInspectorList(function (result) {
                    for (var i = 0; i < require("sl_Event").InspectorData.length; i++) {
                        var row = require("sl_Event").InspectorData[i];
                        require("sl_Event").InspectorList.put(row.name, row);
                    }
                })
            }
        },
        //清空事件POI
        clearEventPOI: function () {
            var data = require("sl_Event").POIData;
            var areaName = con.AreaName;
            //设置POI隐藏
            if (data != null && this.LayerType!=null) {
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
        /*********************加载事件POI-end*********************/


        /*********************加载大脑转动特效-start*********************/
        nodeFollowingPath: [],//窗口跟随事件节点
        //事件处理特效
        loadEventProcessing: function (nodeName) {
            require("sl_Event").clearWindowFolowing();//关闭窗口跟随
            require("sl_Event").closeDetail();//关闭事件详情
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
            //require("sl_Event").jumppoilist = [];
            //require("sl_Event").jumppoilist.push(areaName + "/" + nodeName);
            //map.setBatchPOIJump(require("sl_Event").jumppoilist, 50);


            var id = nodeName.split('_')[2];
            var data = require("sl_Event").EventList.get(id);
            data.videoUrl = "http://47.101.181.131:8092/videoGetStream/103.214.87.67:11937/citybrain/20010000001680000001.flv?vhost=cb.alivecdn.com&deviceType=0&deviceId=20010000001680000001&profile=HD&vendor=test&algo=md5&expires=1561013305&txid=20010000001680000001-1561009705-ax99b9cw2g&sign=ef8dce80f1c9bef37cc4d5de9dd0dde6";
            //data.imageUrl = "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf-truck/video_automobile_panoramic/068/20190618/20190618-8947af93-0a580a000ac8-00000068-0003ed9f.jpg";

            //视角定位到坐标,默认显示图片
            var pos = Q3D.vector3d(map.getSceneNode(areaName, nodeName).getAbsPos());
            var postr = pos.x + "," + pos.y + "," + pos.z;
            var height = parseFloat(postr.split(',')[2]) + 852,
                x = parseFloat(postr.split(',')[0]) + 52,
                z = parseFloat(postr.split(',')[1]) + 828;
            var pointlast = x + "," + z + "," + height;
            Q3D.globalCamera().flyTo((pointlast).toVector3d(), ("-42.812068939208984,1.9336525201797485,1.7832627296447754").toVector3(), 2, function () {
               
            });

            if (data.videoUrl != null && data.videoUrl != "")//视频不为空 优先显示视频格式
            {
                require("sl_Event").loadEventVedioDetail(id);
            }
            else {//显示图片格式
                require("sl_Event").loadEventPicDetail(id);
            }
        },
        //显示事件图片详情
        loadEventPicDetail: function (id) {
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
                if (data.imageUrl || data.imageUrl != "") {
                    html += '<div class="box-leftpic fl" style="width: 6rem; text-align: center;">' +
                                    '<img src="' + data.imageUrl + '" style="width: 100%; height: 100%;" />' +
                                    '</div>';
                }
                html += '<dic class="box-rightinfo fl" style="width: calc(100% - 6.5rem); line-height: 0.7rem; font-size: 0.35rem; margin-top: 0.2rem;">' +
                    '<ul>' +
                     '<li><div>事件属性：</div><span>' + require("sl_Event").LayerType.List[data.communityId].TextName + '</span></li>' +
                        '<li><div>事件时间：</div><span>' + require("common").formatDate2(data.createTime) + '</span></li>' +
                        '<li><div>事件地点：</div><span>' + data.address + '</span></li>' +
                        '<li><div>事件类型：</div><span' + data.eventTypeName + '</span></li>' +
                        '<li><div>事件描述：</div><span>' + data.eventDes + '</span></li>' +
                        '<li><div>小区名称：</div><span>' + data.regionName + '</span></li>' +
                    '</ul>';

                //海岸线，街面，工地 显示历史无人机
                if (data.communityId == "U002" || data.communityId == "U003" || data.communityId == "C001")
                {
                    html += '<button type="button"onclick="require(&#39;sl_Event&#39;).loadDrone()" style="width:100%; height:.5rem; border-radius:.05rem; background: #1a8fef; font-size:.4rem; color:#eee;">查看无人机</button></dic></div>';
                }
                html += '</dic></div>';
                $("#eventdetail").html(html);
                require("sl_Event").loadPaidan(id);//加载派单页面
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

                $("#div_eventdetail").hide()
                $("#div_eventdetail").show('drop', 1000);

                $("#eventhead").html(data.eventName);//标题
                var html = '<ul>';
                html += ' <li><div>事件属性：</div><span>' + require("sl_Event").LayerType.List[data.communityId].TextName + '</span></li>' +
                '<li><div>接警时间：</div><span>' + require("common").formatDate2(data.createTime) + '</span></li>' +
                    '<li><div><img src="Content/images/sqzz-poi-icon1.png">地址：</div><span>' + data.address + '</span></li>' +
                    '<li><div><img src="Content/images/sqzz-poi-icon2.png">事件描述：</div><span>' + data.eventDes + '</span></li>';
                html += '</ul>';
                //海岸线，街面，工地 显示历史无人机
                if (data.communityId == "U002" || data.communityId == "U003" || data.communityId == "C001")
                {
                    html += '<button type="button"onclick="require(&#39;sl_Event&#39;).loadDrone()" style="width:100%; height:.5rem; border-radius:.05rem; background: #1a8fef; font-size:.4rem; color:#eee;">查看无人机</button></dic></div>';
                }
                $("#ul_eventdetail").html(html);

                var nodeName = "POISociety" + require("sl_Event").LayerType.List[data.communityId].Name + "_" + data.id;//POIIOT_01
                //事件详情窗口跟随
                var nodePath = con.AreaName + '/' + nodeName;
                //var nodeObject = { "nodeName": nodeName, "nodeDom": "div_eventdetail" };
                var nodeObject = { "nodePath": nodePath, "nodeDom": "div_eventdetail" };

                require("sl_Event").nodeFollowingPath.push(nodeObject);

                map.enableNodeFollowing(nodePath, function (node, v2i) {
                    require("sl_Event").nodeFolowing(node, v2i);
                });

                require("sl_Event").loadVedio(id);//加载视频

                require("sl_Event").loadPaidan(id);//加载派单页面
            })
        },
        //显示视频
        loadVedio: function (id) {
            try {
                if (require("sl_Event").SocietyEvent_player) {
                    require("sl_Event").SocietyEvent_player.dispose();
                    require("sl_Event").SocietyEvent_player = null;
                }
            } catch (error) {
                console.log(error.message);
                //$.getScript(con.WebServiceUrl + "Scripts/Tools/aliplayer/aliplayer-min.js", function (script, textStatus, jqXHR) {});
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
                                //"width": videowidth + "px",
                                //"height": videoheight + "px",
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
        },
        //加载派单页面
        loadPaidan: function (id) {
            var areaName = con.AreaName;
            var data = require("sl_Event").EventList.get(id);
            

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
            //城市大脑坐标
            if (require("sl_Event").danao_coordinatestr==null) {
                var danao_absPos = Q3D.vector3d(map.getSceneNode("danao/danao_zhdn").getAbsPos());
                var danao_coordinate = require("common").planeToCoordinate(danao_absPos.x + "," + danao_absPos.y + "," + danao_absPos.z);//获取大脑经纬度坐标
                require("sl_Event").danao_coordinatestr = danao_coordinate.longitude + "," + danao_coordinate.latitude + "," + danao_coordinate.height;
            }

            var eventpos = data.lng + "," + data.lat + ",0";
            require("common").getRadianLine(eventpos, require("sl_Event").danao_coordinatestr, 500, option);//显示事件到大脑的连线

            //派单员是否有值
            if (data.dealPerson != null && data.dealPerson != "") {
                setTimeout(function () {
                    var inspectordetail = require("sl_Event").InspectorList.get(data.dealPerson);//通过巡查员查找巡查员坐标
                    if (inspectordetail != null) {
                        
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
                        require("common").getRadianLine(require("sl_Event").danao_coordinatestr, pos2, 500, option);//显示事件到大脑的连线

                        //创建派单POI
                        var fullNodePath2 = areaName + "/paidan01";
                        var position2 = Q3D.vector3(pos2.toGlobalVec3d().toLocalPos(areaName));
                        var data2 = {
                            Position: position2, Text: "", Icon: "Texture/Common/paidan.png", IconSize: Q3D.vector2(100, 97)
                        }
                        if (map.getSceneNode(fullNodePath2)) {
                            //map.clearPOIJump();
                            map.getArea(areaName).destroySceneNode("paidan01");
                        }
                        require("sl_Event").createPOI(fullNodePath2, data2);

                        //require("sl_Event").jumppoilist.push(fullNodePath2);//POI跳动
                        //map.setBatchPOIJump(require("sl_Event").jumppoilist, 50);

                        //加载派单页面
                        var url = con.HtmlUrl + 'SocietyNew/Bottom_EventPaidan.html';
                        require(['text!' + url], function (template) {
                            $("#detail_03").html(template);
                            $("#detail_03").show('slide', {
                                direction: 'left'
                            }, 500);

                            var inspectordata = require("sl_Event").InspectorList.get(data.dealPerson);//静态测试
                            var html = '<dic class="sqzz-sjjd-div flex">' +
                                        '<img src="' + inspectordata.photoUrl + '" style="width: 112px; height: 150px;">' +
                                        '<ul class="sqzz-sjjd-list1">' +
                                            '<li><span>接单员：</span><em>' + inspectordata.name + '</em></li>' +
                                            '<li><span>性别：</span><em>男</em></li>' +
                                            '<li><span>联系电话：</span><em>' + inspectordata.phone + '</em></li>' +
                                       ' </ul>' +
                                    '</dic>' +
                                    '<ul class="sqzz-sjjd-list2">' +
                                        '<li><span>响应时间：</span><em>' + require("common").formatDate2(data.updateTime) + '</em></li>' +
                                       ' <li><span>状态：</span><em>' + data.statusName + '</em></li>' +
                                       //' <li><span>社区：</span><em>' + inspectordata.belongCommunities + '</em></li>' +
                                        '</ul>';
                            $("#ul_paidan").html(html);
                            $("#paidandetail").hide()
                            $("#paidandetail").show('drop', 1000);


                            //派单POI跟随
                            var nodeObject = { "nodePath": fullNodePath2, "nodeDom": "paidandetail" };
                            require("sl_Event").nodeFollowingPath.push(nodeObject);
                        })
                    }
                }, 1000);
            }
            
        },
        nodeFolowing: function (node, v2i) {
            require("sl_Event").nodeFollowingPath.forEach(function (e) {
                if (node.getFullName() == e.nodePath) {
                    document.getElementById(e.nodeDom).style.left = v2i.x + "px";
                    document.getElementById(e.nodeDom).style.top = v2i.y - 560 + "px";
                }
                //if (node.getFullName().indexOf("paidan01") > -1) {//派单
                //    document.getElementById(e.nodeDom).style.left = v2i.x + "px";
                //    document.getElementById(e.nodeDom).style.top = v2i.y - 360 + "px";
                //}
                //else if (node.getFullName().indexOf("POISocietyEvent") > -1) {//事件POI
                //    document.getElementById(e.nodeDom).style.left = v2i.x + "px";
                //    document.getElementById(e.nodeDom).style.top = v2i.y -560+ "px";
                //}
            });
        },
        //关闭跟随
        clearWindowFolowing: function () {
            require("sl_Event").nodeFollowingPath.forEach(function (e) {
                console.log(e.nodeName)
                map.disableNodeFollowing(e.nodeName, true);
            });
            require("sl_Event").nodeFollowingPath = [];
        },
        //关闭派单页面
        closeEventPaidan: function () {
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var id = require("sl_Event").LastPOI_Clk.split('_')[2];
                //删除拍单连线
                if (map.getSceneNode(con.AreaName, "paidan_" + id)) {
                    map.getArea(con.AreaName).destroySceneNode("paidan_" + id);
                }
                //删除POI
                var areaName = con.AreaName;
                if (map.getSceneNode(areaName + "/paidan01")) {
                    //map.clearPOIJump();
                    map.getArea(areaName).destroySceneNode("paidan01");
                }
                if (require("sl_Event").nodeFollowingPath.length == 2)
                {
                    require("sl_Event").nodeFollowingPath.pop();//删除派单窗口跟随
                }
                $("#detail_03").html("");//页面清空
            }
        },
        //关闭事件详情
        closeDetail: function () {
            require("sl_Event").clearWindowFolowing();
            //清空派单
            require("sl_Event").closeEventPaidan();
            
            //$("#left_02").html("");
            $("#detail_02").empty();
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {

                var id = require("sl_Event").LastPOI_Clk.split('_')[2];
                //清除发光动线连线
                if (map.getSceneNode(con.AreaName, "shijian_" + id)) {
                    map.getArea(con.AreaName).destroySceneNode("shijian_" + id);
                }
                if (map.getSceneNode(con.AreaName, "paidan_" + id)) {
                    map.getArea(con.AreaName).destroySceneNode("paidan_" + id);
                }
                this.LayerType = require("s_Main").LayerCatalog.Event;
                var type = this.LastPOI_Clk.split('_')[1];
                var icon = this.LayerType.List[type].UnChooseIcon;
                var lastNode = map.getSceneNode(con.AreaName, this.LastPOI_Clk);
                if (lastNode) {
                    lastNode.asPOI().setIcon(icon);
                    this.LastPOI_Clk = null;
                    //map.clearPOIJump();
                }
            }

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

        /*********************无人机历史视频-历史轨迹-start*********************/
        EventDrone_player: null,//无人机视频
        DroneMovieClip: null,
        //点击查看无人机
        loadDrone:function()
        {
            require("sl_Event").loadDroneVideo();//加载视频
            require("sl_Event").loadDroneTrack();//加载轨迹
        },
        //加载无人机历史视频
        loadDroneVideo: function () {
            if (require("sl_Event").EventDrone_player) {
                require("sl_Event").EventDrone_player.dispose();
                require("sl_Event").EventDrone_player = null;
            }

            var url = con.HtmlUrl + 'SocietyNew/Bottom_EventDrone.html';
            require(['text!' + url], function (template) {
                $("#detail_04").html(template);
                $("#detail_04").show('slide', {
                    direction: 'left'
                }, 500);

                var url = "http://" + location.host + "/LingangCityBrain/Content/video/illegalPark.flv";

                require("sl_Event").EventDrone_player = new Aliplayer({
                    "id": "eventdronedetail",
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
                    $("#eventdronedetail").attr("poster", con.WebServiceUrl + "Content/images/sxt-videoli.png");
                })
            })
        },
        //加载轨迹
        loadDroneTrack: function () {
            require("sl_Event").clearPlane();
            //创建无人机模型
            var modelName = "eventwrj";
            var areaName = con.AreaName; ///"gwh_xilou";
            var quanMesh = "Mesh/dajiangm600.mesh"
            var dronepath = areaName + "/" + modelName;
            var POS = "121.909119,30.883694,500.000053"
            var position = (POS).toGlobalVec3d().toLocalPos(areaName)


            var quanmodelOptions = {
                Position: Q3D.vector3(position),
                Orientation: Q3D.vector3(0, 0, 0),
                OrientationType: Q3D.Enums.nodeOrientationType.Self,
                Scale: Q3D.vector3(5, 5, 5),
                SkeletonAnimation: null,
                OnLoaded: function () {
                    //创建圆锥投影
                    var conePath = dronepath + "/TextCone";
                    var dronepos = Q3D.globalVec3d(Q3D.vector3d(map.getSceneNode(areaName, modelName).getAbsPos()).toGlobalVec3d());
                    var conepos = dronepos.longitude + "," + dronepos.latitude + ",-12";

                    var Pos = Q3D.vector3(conepos.toGlobalVec3d().toLocalPos(areaName));
                    map.createCone(conePath, {
                        //Material: ["Material/xihongqiao2_dz01.mtr", "Materialne_static.mtr"],
                        Alpha: 0.1,
                        Color: Q3D.colourValue("#0ad0ce", 1), //线的颜色 0000ff
                        Center: Q3D.vector3(Pos),
                        Radius: 4, //半径
                        Height: 12.5,//高度
                        //Anchor: Q3D.vector3(20,10,10),            
                    });


                    //无人机上加POI
                    var icon = "Texture/Common/wurenji.png";
                    var iconSize = Q3D.vector2(20, 22);
                    var createOptions = {
                        Position: Q3D.vector3(0, 1, 0),
                        Orientation: null,
                        OrientationType: Q3D.Enums.nodeOrientationType.Self,
                        Scale: Q3D.vector3(0.3, 0.3, 0.3),
                        POIOptions: {
                            CharScale: 1,
                            Text: "",
                            Icon: icon,
                            IconSize: iconSize,
                            POILayout: Q3D.Enums.poiLayOut.Bottom,
                            UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
                            IconAlphaEnabled: true,
                            Location: Q3D.Enums.poiImagePositionType.POI_LOCATE_BOTTOM,
                            SpecialTransparent: true,
                            AlwaysOnScreen: true,
                            OnLoaded: function () {
                            },
                        }
                    };
                    var poiName = "POISocietyEvent_wurenji"
                    var node = map.getSceneNode(con.AreaName, poiName)
                    if (node) {
                        map.destroySceneNode(con.AreaName, poiName)
                    } else {
                        map.createPOI(con.AreaName + "/" + modelName + "/" + poiName, createOptions);
                    }
                }
            };

            var modelnode = map.getSceneNode(areaName, modelName)
            if (modelnode) {
                map.destroySceneNode(areaName, modelName)
            } else {
                map.createModel(dronepath, quanMesh, quanmodelOptions);
            }


            //创建动画
            var options = {
                CenterLine: ["121.909259,30.882365,78.000053".toGlobalVec3d(),	//动线中心线，由 QGlobalVec3d 坐标组成，表示每个位置点的实际经纬度
                    //"121.909259,30.882365,78.000053".toGlobalVec3d(),
                    //"121.909259,30.882365,78.000053".toGlobalVec3d(),
                    //"121.910060,30.883052,78.000000".toGlobalVec3d(),
                         "121.910954,30.883800,78.000076".toGlobalVec3d(),
                         "121.912005,30.884733,78.0001830".toGlobalVec3d(),
                         "121.912963,30.885574,78.000206".toGlobalVec3d(),
                         "121.913363,30.886051,78.000076".toGlobalVec3d(),
                         "121.914181,30.886709,78.653145".toGlobalVec3d(),
                         "121.914886,30.887295,78.000084".toGlobalVec3d()
                ],
                SecsFromStart: [0, 10, 20, 30, 40, 50, 60], //从起点开始算起的时间差，单位秒
                Heading: null,//每个位置上的水平偏转角度，若未提供该参数，则角度自动计算
                TotalTime: 140,//轨迹回放路上总用时，单位秒
                timeForDirAdjustion: 0.1,//用于调整方向的时间，单位为秒
                IsLoop: true,//是否循环播放，默认不循环执行
                IsAutoPlay: true, //是否自动播放，默认否
                PitchAllowed: false, //是否允许俯仰
                IsEndDestroy: false,
                BaseGlobalPos: null, //用于修正经纬度坐标, QGlobalVec3d类型, 只对传入的中心线点为QGlobalVec3d时有效
                OnAnimationEndFn: function () {//动画结束回调事件
                    map.destroySceneNode(areaName, modelName);
                }, //动画结束回调事件
            };

            require("sl_Event").DroneMovieClip = map.roamByGPSTrack(areaName + "/" + modelName, options);
            require("sl_Event").DroneMovieClip._mcInst.play();
        },

        //清除无人机
        clearPlane: function () {
            var modelName = "eventwrj";
            var AreaName = con.AreaName;
            var quanpath = AreaName + "/" + modelName;
            var modelnode = map.getSceneNode(AreaName, modelName)
            if (modelnode) {
                map.destroySceneNode(AreaName, modelName)
            }

            var poiName = "POISocietyEvent_wurenji"
            var node = map.getSceneNode(con.AreaName, poiName)
            if (node) {
                map.destroySceneNode(con.AreaName, poiName)
            }
        },
        //清楚无人机视频
        clearDroneVideo:function(){
            if (require("sl_Event").EventDrone_player) {
                require("sl_Event").EventDrone_player.dispose();
                require("sl_Event").EventDrone_player = null;
            }
            $("#detail_04").html("");
        },
        //关闭无人机视频
        closeEventDrone:function(){
            require("sl_Event").clearDroneVideo();
            require("sl_Event").clearPlane();
        },
        /*********************无人机历史视频-历史轨迹-end*********************/

        /*********************社区楼栋事件-start*********************/
        EventBuild_player: null,//楼栋视频
        //加载社区楼栋事件
        loadEventBuild: function () {
            require("sl_Event").loadBuildList();//列表
            require("sl_Event").loadBuildVideo();//楼栋

            require("sl_Event").loadBuildTravel();//轨迹线
        },
        //加载社区楼栋列表
        loadBuildList: function () {
            var url = con.HtmlUrl + 'SocietyNew/Bottom_EventBuildList.html';
            require(['text!' + url], function (template) {
                $("#detail_03").html(template);
                $("#detail_03").show('slide', {
                    direction: 'left'
                }, 500);
            })
        },
        //加载社区楼栋视频
        loadBuildVideo: function () {
            if (require("sl_Event").EventBuild_player) {
                require("sl_Event").EventBuild_player.dispose();
                require("sl_Event").EventBuild_player = null;
            }

            var url = con.HtmlUrl + 'SocietyNew/Bottom_EventBuildVideo.html';
            require(['text!' + url], function (template) {
                $("#detail_02").html(template);
                $("#detail_02").show('slide', {
                    direction: 'left'
                }, 500);

                var url = "http://" + location.host + "/LingangCityBrain/Content/video/illegalPark.flv";

                require("sl_Event").EventBuild_player = new Aliplayer({
                    "id": "eventbuildvideo",
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
                    $("#eventbuildvideo").attr("poster", con.WebServiceUrl + "Content/images/sxt-videoli.png");
                })
            })
        },
        //关闭视频页面
        closeBuildVideo: function () {
            if (require("sl_Event").EventBuild_player) {
                require("sl_Event").EventBuild_player.dispose();
                require("sl_Event").EventBuild_player = null;
            }

            $("#detail_02").html("");
            $("#detail_03").html("");

            var linname = "lineEventBuild";
            var AreaName = con.AreaName;
            map.destroySceneNode(AreaName, linname);

        },
        //加载社区楼栋轨迹
        loadBuildTravel: function () {
            Q3D.globalCamera().flyTo(("396912.5554196743,1369.9429016113281,-3416923.858696332").toVector3d(), ("-50.00032424926758,19.80562400817871,21.98160171508789").toVector3(), 2, null);
            var points = s_layerMenuData.eventbuildlinePoints;
            var linePoints = new Array()
            var AreaName = con.AreaName; 

            //画连接线
            for (var i = 0; i < points.length; i++) {
                var coordinate = points[i]
                var lng = parseFloat(coordinate.split(",")[0])
                var lat = parseFloat(coordinate.split(",")[1])
                var hgt = 0
                var position = Q3D.globalVec3d(lng, lat, hgt).toGlobalPos();

                var point = Q3D.vector3(Q3D.globalVec3d(lng, lat, hgt).toLocalPos(AreaName))
                linePoints.push(point)
            }

            var linname = "lineEventBuild"
            var nodePath = AreaName + "/" + linname;

            var createOptions = {
                Material: "Material/linered.mtr",
                SpecialTransparent: true, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                LinePoints: [linePoints], //一维数组,由Vector3坐标组成
                OffsetDist: [],//偏移距离，单位米，用于贝塞尔曲线的控制点计算
                LineOptions: {
                    Subdivision: 20, //设置生成曲线细分程度
                    LineWidth: 2,
                    WrapLen: 2,
                    //以下用于动态创建的材质
                    Color: Q3D.colourValue("#FF8C00", 1), //线的颜色
                    Alpha: 1, //线的透明度
                },
                OnLineCreated: null
            }

            var linenode = map.getSceneNode(AreaName, linname)
            if (linenode) {
                map.destroySceneNode(AreaName, linname);
            } else {
                map.createPolyLine(nodePath, createOptions);
            }


        },


        /*********************社区楼栋事件-end*********************/

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
            this.clearEventPOI();
            this.closeDetail();//关闭详情窗口
            this.closeEventPaidan();

            if (this.DanaoAnimation) {
                clearTimeout(this.DanaoAnimation);
            }
            this.movieClear();
            map.unloadArea("danao");


            //if (this.showTime != null) {
            //    window.clearInterval(this.showTime);
            //}
            //if (this.hideTime != null) {
            //    window.clearInterval(this.hideTime);
            //}
        }
    }
})