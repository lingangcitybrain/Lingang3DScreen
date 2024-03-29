﻿define(["config", "common", "util", "s_layerMenuData", "s_LayerMenuAjax", "s_LeftLayer"], function (con, com, util, s_layerMenuData, s_LayerMenuAjax, s_LeftLayer) {
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
        EventList: new util.HashMap,
        InspectorData: null,//派单巡查员数据
        InspectorList: new util.HashMap,

        danao_coordinatestr: "121.91684579294313,30.90144566215005,90",//城市大脑的坐标
        timeCountList: [],//POI计时器集合
        eventTimer: null,
        paidanTimerout: null,
        paidan2Timerout: null,
        eventProcessTimerout: null,//事件处置流程
        timeCountDownData: new util.HashMap,//倒计时数据
        allLoopEventList: [],
        allPOINameList: [],//所有POI名字
        /*********************加载事件POI-start*********************/
        loadEvent: function (callback) {
            //this.Revert();
            require("sl_Event").LayerType = require("s_Main").LayerCatalog.Event;

            //map.loadArea("danao");

            //获取巡查员数据
            require("sl_Event").loadInspectorList();
            require("sl_Event").clearTimeCount();//计时器清空

            require("sl_Event").loadIOTData();//加载传感器详情数据
           
            //大脑转动
            //require("s_Main").DanaoAnimation = setTimeout(function () {
            //    require("sl_Event").loadDanaoAnimation();
            //}, 10000);

            var nowdata = require("common").getNowFormatDate();//当前时间
            var before7 = require("common").getDaysBefore(nowdata, 7);//7天前的时间
            var beforetime = nowdata.split(' ')[0] + " 00:00:00";//当天事件
            var post_data = { "pageIndex": 1, "pageSize": 10000, "startTime": before7, "endTime": nowdata };
            require("sl_Event").allPOINameList = [];
            //获取最近7天事件
            require("s_LayerMenuAjax").getEventList(post_data, function (result) {

                var areaName = con.AreaName;
                var pois = [];
                require("sl_Event").allLoopEventList = [];
                for (var i = 0; i < require("sl_Event").POIData.length; i++) {
                    var row = require("sl_Event").POIData[i];
                    require("sl_Event").EventList.put(row.id, row);
                    if(row.communityId == null){
                        row.communityId = 'SANGAO';
                    }                    
                    if (require("sl_Event").LayerType.List[row.communityId] != null) {
                        require("sl_Event").allLoopEventList.push(row);//加入全部事件循环数组
                        var icon = require("sl_Event").LayerType.List[row.communityId].UnChooseIcon;
                        var poiName = "POISociety" + require("sl_Event").LayerType.List[row.communityId].Name + "_" + row.id;//POIIOT_01

                        require("sl_Event").allPOINameList.push(poiName);//添加POI名字集合

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

                        if (row.lastTime > 0) {
                            //console.log(row.lastTime);
                        }
                        var textname = "";
                        if (i == 0) {
                            textname = "00:08:30";
                        }
                        else if (i == 1) {
                            textname = "00:13:14";
                        } else if (i == 2) {
                            textname = "00:11:38";
                        }

                        var poi = {
                            POIName: poiName, Position: position, Text: '', Icon: icon, IconSize: iconSize, FontColor: "#00caca"
                        };

                        var node = map.getSceneNode(areaName + "/" + poiName);

                        if (node) {
                            node.setVisible(1);
                        } else {
                            pois.push(poi);
                        }

                        //数据暂未提供，默认前3个 开始POI倒计时
                        // if (i == 0) {
                        //     require("sl_Event").timeCountDownData.put(poiName, "510");//标记
                        // }
                        // else if (i == 1) {
                        //     require("sl_Event").timeCountDownData.put(poiName, "794");//标记
                        // }
                        // else if (i == 2) {
                        //     require("sl_Event").timeCountDownData.put(poiName, "698");//标记
                        // }
                    }
                }
                com.InitPois(areaName, pois);

                //循环播放事件
                require("sl_Event").allEventLength = require("sl_Event").allLoopEventList.length;
                require("sl_Event").LoopAllEvents();

                //循环播放倒计时
                if (require("sl_Event").timeCountDownData.size() > 0) {
                    for (var i in require("sl_Event").timeCountDownData.keys()) {
                        var datalist = require("sl_Event").timeCountDownData.get(require("sl_Event").timeCountDownData.keys()[i]);
                        //开始倒计时
                        // require("sl_Event").setTimeCountDown(require("sl_Event").timeCountDownData.keys()[i], datalist);
                    }

                }
                if ($.isFunction(callback))
                    callback()
            });

        },
        //事件传感器详情需要的数据
        loadIOTData: function () {
            if (require("sl_IOT").IOTList.size() == 0) {
                require("sl_IOT").getSensorListAjax();//缓存好数据
            }
        },
        //设置时间倒计时
        setTimeCountDown: function (poiname, times) {
            //var times = 915;
            var timer = null;
            timer = setInterval(function () {
                if (times <= 0) {
                    times = require("sl_Event").timeCountDownData.get(poiname);
                    //console.log("timeCountDownData:"+times);
                }
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
                //console.log(times);
            }, 1000);
            require("sl_Event").timeCountList.push(timer);
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
        /*********************加载事件POI-end*********************/


        /*********************事件详情处理-start*********************/
        allEventTimer: null,
        allEventID: 0,
        allEventLength: 0,

        nodeFollowingPath: [],//窗口跟随事件节点
        /*********************循环播放所有-start*********************/
        //加载事件后循环播放事件处置
        LoopAllEvents: function () {
            require("sl_Event").allEventTimer = setInterval("require('sl_Event').EachAllEvent()", 10000);
        },
        EachAllEvent: function () {
             if (require("sl_Event").allLoopEventList.length > 0) {
                    if ($("#header_menu div button.active").text() == "城区综治" && $("#bottom_menu ul li.active").text() == "事件") {
                        require("sl_Event").closeLoopPlay();
                        var areaName = con.AreaName;
                        if (require("sl_Event").LastPOI_Clk && require("sl_Event").LastPOI_Clk != "") {
                            var type = require("sl_Event").LastPOI_Clk.split('_')[1];
                            var icon = require("sl_Event").LayerType.List[type].UnChooseIcon;

                            var lastNode = map.getSceneNode(areaName, require("sl_Event").LastPOI_Clk);
                            if (lastNode) {
                                lastNode.asPOI().setIcon(icon);
                                //lastNode.setVisible(0);
                            }
                        }

                        var tempid = require("sl_Event").allEventID;
                        //console.log(tempid);
                        var data = require("sl_Event").allLoopEventList[tempid];
                        if (require("sl_Event").LayerType.List[data.communityId] != null) {
                            var nodeName = "POISociety" + require("sl_Event").LayerType.List[data.communityId].Name + "_" + data.id;//POIIOT_01

                            //console.log(nodeName);
                            require("sl_Event").LastPOI_Clk = nodeName;
                            var node = map.getSceneNode(areaName, nodeName);
                            if (node != null) {
                                var poi = node.asPOI();
                                var type = nodeName.split('_')[1];
                                var icon = require("sl_Event").LayerType.List[type].ChooseIcon;
                                poi.setIcon(icon);
                            }
                            if (data.videoUrl != null && data.videoUrl != "")//视频不为空 优先显示视频格式
                            {
                                require("sl_Event").loadEventVedioDetail(data.id);


                            }
                            else {
                                //显示图片格式
                                require("sl_Event").loadEventPicDetail(data.id);
                            }
                        }
                        //循环到最后一个时 重新置于0
                        if (require("sl_Event").allEventID == require("sl_Event").allEventLength - 1) {
                            require("sl_Event").allEventID = 0;
                        }
                        else {
                            require("sl_Event").allEventID++;
                        }
                    }
                    else {
                        //console.log("LoopAllEvents-清空循环");
                        clearInterval(require("sl_Event").allEventTimer);
                        require("sl_Event").allEventTimer = null;

                    }
                }
        },
        //关闭循环播放事件
        closeLoopAllEvents: function () {
            //循环播放处置流程
            if (require("sl_Event").allEventTimer != null) {
                clearInterval(require("sl_Event").allEventTimer);
                require("sl_Event").allEventTimer = null;
            }
        },

        /*********************单独点击查看事件详情-start*********************/
        //事件处理特效
        loadEventProcessing: function (nodeName) {
            require("sl_Event").closeLoopAllEvents();//关闭循环播放所有事件
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
            if (data != null) {
                //data.videoUrl = "http://47.101.181.131:8092/videoGetStream/103.214.87.67:11937/citybrain/20010000001680000001.flv?vhost=cb.alivecdn.com&deviceType=0&deviceId=20010000001680000001&profile=HD&vendor=test&algo=md5&expires=1561013305&txid=20010000001680000001-1561009705-ax99b9cw2g&sign=ef8dce80f1c9bef37cc4d5de9dd0dde6";
                //data.imageUrl = "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf-truck/video_automobile_panoramic/068/20190618/20190618-8947af93-0a580a000ac8-00000068-0003ed9f.jpg";

                //视角定位到坐标,默认显示图片
                //var pos = Q3D.vector3d(map.getSceneNode(areaName, nodeName).getAbsPos());
                //var postr = pos.x + "," + pos.y + "," + pos.z;
                //var height = parseFloat(postr.split(',')[2]) + 852,
                //    x = parseFloat(postr.split(',')[0]) + 52,
                //    z = parseFloat(postr.split(',')[1]) + 828;
                //var pointlast = x + "," + z + "," + height;
                //Q3D.globalCamera().flyTo((pointlast).toVector3d(), ("-42.812068939208984,1.9336525201797485,1.7832627296447754").toVector3(), 2, function () {

                //});
                //将POI定位到屏幕中间
                //Q3D.globalCamera().flyToByClick('MapWrapper', Q3D.vector3d(map.getSceneNode(areaName, nodeName).getAbsPos()), 0.5);
                if (data.videoUrl != null && data.videoUrl != "")//视频不为空 优先显示视频格式
                {
                    require("sl_Event").loadEventVedioDetail(id);
                }
                else {//显示图片格式
                    //console.log(id);
                    require("sl_Event").loadEventPicDetail(id);
                    require("sl_Event").LoopPlayback(id);
                }
            }
        },
        //循环播放单个事件-派单
        LoopPlayback: function (id) {
            require("sl_Event").eventTimer = setInterval(function () {
                require("sl_Event").closeLoopPlay();
                require("sl_Event").eventProcessTimerout = setTimeout(
                    require("sl_Event").loadEventPicDetail(id)
                    , 5000);//延迟5000毫米
            }, 10000);
        },
        closeLoopPlay: function () {
            //var id = 14204;
            //var areaname="gwh_xilou";
            var areaname = con.AreaName;
            require("sl_Event").clearWindowFolowing();//关闭窗口跟随
            //延后执行事件连线
            if (require("sl_Event").eventProcessTimerout != null) {
                clearTimeout(require("sl_Event").eventProcessTimerout);
                require("sl_Event").eventProcessTimerout = null;
            }
            //延后执行事件连线
            if (require("sl_Event").paidanTimerout != null) {
                clearTimeout(require("sl_Event").paidanTimerout);
                require("sl_Event").paidanTimerout = null;
            }
            //延后执行派单连线
            if (require("sl_Event").paidan2Timerout != null) {
                clearTimeout(require("sl_Event").paidan2Timerout);
                require("sl_Event").paidan2Timerout = null;
            }
            var carlinname = "lineEventPartCar";
            var carLineNode = map.getSceneNode(areaname, carlinname);
            if (carLineNode) {
                map.destroySceneNode(areaname, carlinname);
            }

            //清除发光动线连线
            if (map.getSceneNode(areaname, "shijian_line")) {
                map.getArea(areaname).destroySceneNode("shijian_line");
            }
            if (map.getSceneNode(areaname, "paidan_line")) {
                map.getArea(areaname).destroySceneNode("paidan_line");
            }
            //派单POI
            if (map.getSceneNode(areaname, "paidan_poi")) {
                map.getArea(areaname).destroySceneNode("paidan_poi");
            }
            $("#detail_02").html("");
            $("#detail_03").html("");//页面清空
        },


        //显示事件图片详情
        loadEventPicDetail: function (id) {
            var areaName = con.AreaName;
            var data = require("sl_Event").EventList.get(id);
            if (data != null) {
                //加载页面内容
                var url = con.HtmlUrl + 'SocietyNew/Bottom_EventDetailPic.html';
                require(['text!' + url], function (template) {
                    $("#detail_02").html(template);
                    $("#detail_02").show('slide', {
                        direction: 'left'
                    }, 500);
                    $(".poiinfo").css("left", "50%");
                    $(".poiinfo").css("top", "50%");

                    $("#div_eventdetail").hide()
                    $("#div_eventdetail").show('drop', 1000);
                    var html = '';
                    //图片不为空 显示图片
                    if (data.imageUrl || data.imageUrl != "") {
                        $("#div_eventdetail").addClass("poiinfo poiinfo2");

                        html += '<div class="box-top">' +
                                    '<span id="eventhead">' + data.eventName + '</span>' +
                                    '<button type="button" class="box-close" onclick="require(\'s_Home\').closeDetail();"></button>' +
                                '</div>' +
                                '<div class="boxcont" id="eventdetail" >' +
                                    '<div class="flex" style="height:calc(100% - 1.2rem);">' +
                                        '<div class="box-leftpic">' +
                                            '<img src="' + data.imageUrl + '" style="width: 100%; height: 100%;" />' +
                                        '</div>' +
                                        '<div class="box-rightinfo scrolldiv flex" style="width:calc(100% - 6.5rem);">' +
                                            '<ul style="flex-grow:1; width:100%;">' +
                                              '<li style="color: #f90;">事件详情</li>' +
                                                // '<li><em>事件属性：</em><span>' + require("sl_Event").LayerType.List[data.communityId].TextName + '</span></li>' +
                                                '<li><em>事件时间：</em><span>' + require("common").formatDate2(data.createTime) + '</span></li>' +
                                                '<li><em>事件地点：</em><span>' + data.address + '</span></li>' +
                                                '<li><em>事件类型：</em><span>' + data.dispatchType + '</span></li>' +
                                                 //'<li><em>事件状态：</em><span>' + data.statusName + '</span></li>' +
                                                // '<li><em>发生区域：</em><span>' + data.regionName + '</span></li>' +
                                                '<li style="overflow:hidden;"><em style="float:left; width:5em;">事件描述：</em><span style="float:left; width:calc(100% - 5em);">' + data.eventDes + '</span></li>' +
                                            '</ul>';
                        //社区事件的话，有传感器ID显示传感器详情
                        if (data.communityId = "S012") {
                            var iotdata = require("sl_IOT").IOTList.get(data.deviceId);
                            if (iotdata != null) {
                                var status = "暂无数据";
                                if (iotdata.status == 0) {
                                    status = "正常";
                                }
                                else if (iotdata.status == 0) {
                                    status = "失联";
                                }
                                else {
                                    status = "告警";
                                }
                                var sensorBrand = iotdata.sensorBrand == null ? "暂无数据" : iotdata.sensorBrand;
                                var installationAddress = iotdata.installationAddress == null ? "暂无数据" : iotdata.installationAddress;
                                var belongRegion = iotdata.belongRegion == null ? "暂无数据" : iotdata.belongRegion;
                                var belongStreet = iotdata.belongStreet == null ? "暂无数据" : iotdata.belongStreet;
                                var installationTime = iotdata.installationTime == null ? "暂无数据" : iotdata.installationTime;

                                html += '<ul style="margin-left:.5rem; flex-grow:1;">' +
									 '<li style="color: #f90;">传感器详情</li>' +
												'<li><em>编号：</em><span>' + iotdata.sensorNum + '</span></li>' +
												'<li><em>当前状态：</em><span>' + status + '</span></li>' +
												'<li><em>所属品牌：</em><span>' + sensorBrand + '</span></li>' +
												'<li><em>安装地址：</em><span>' + iotdata.installationAddress + '</span></li>' +
												 '<li><em>所属区域：</em><span>' + belongRegion + '</span></li>' +
												'<li><em>所属街道：</em><span>' + belongStreet + '</span></li>' +
												 '<li><em>安装时间：</em><span>' + installationTime + '</span></li>' +
											'</ul>';
                            }
                        }
                        html += '</div>' +
							 '</div>';

                        //加载事件流程图标
                        html += require("sl_Event").loadEventStatusHtml(data.statusName);

                    } else {
                        $("#div_eventdetail").addClass("poiinfo poiinfo2");
                        html += '<div class="box-top">' +
                                    '<span id="eventhead">' + data.eventName + '</span>' +
                                    '<button type="button" class="box-close" onclick="require(\'s_Home\').closeDetail();"></button>' +
                                '</div>' +
                                '<div class="boxcont" id="eventdetail" >' +
                                    '<div class="flex" style="height:calc(100% - 1.2rem);">' +
                                        '<div class="box-rightinfo scrolldiv flex" style="width:100%;">' +
                                            '<ul style="flex-grow:1;">' +
                                                '<li style="color: #f90;">事件详情</li>' +
                                                // '<li><em>事件属性：</em><span>' + require("sl_Event").LayerType.List[data.communityId].TextName + '</span></li>' +
                                                '<li><em>事件时间：</em><span>' + require("common").formatDate2(data.createTime) + '</span></li>' +
                                                '<li><em>事件地点：</em><span>' + data.address + '</span></li>' +
                                                '<li><em>事件类型：</em><span>' + data.dispatchType + '</span></li>' +
                                                 //'<li><em>事件状态：</em><span>' + data.statusName + '</span></li>' +
                                                // '<li><em>发生区域：</em><span>' + data.regionName + '</span></li>' +
                                                '<li style="overflow:hidden;"><em style="float:left; width:5em;">事件描述：</em><span style="float:left; width:calc(100% - 5em);">' + data.eventDes + '</span></li>' +
                                            '</ul>';
                        //社区事件的话，有传感器ID显示传感器详情
                        if (data.communityId = "S012") {
                            var iotdata = require("sl_IOT").IOTList.get(data.deviceId);
                            if (iotdata != null) {
                                var status = "<span>暂无数据</span>";
                                if (data.status == 0) {
                                    status = "<span>正常</span>";
                                }
                                else if (data.status == 0) {
                                    status = '<span style="color: #f90;">失联</span>';
                                }
                                else {
                                    status = '<span style="color: red;"">告警</span>';
                                }
                                var sensorBrand = iotdata.sensorBrand == null ? "暂无数据" : iotdata.sensorBrand;
                                var installationAddress = iotdata.installationAddress == null ? "暂无数据" : iotdata.installationAddress;
                                var belongRegion = iotdata.belongRegion == null ? "暂无数据" : iotdata.belongRegion;
                                var belongStreet = iotdata.belongStreet == null ? "暂无数据" : iotdata.belongStreet;
                                var installationTime = iotdata.installationTime == null ? "暂无数据" : iotdata.installationTime;

                                html += '<ul style="margin-left:.5rem; flex-grow:1;">' +
                                            '<li style="color: #f90;">传感器详情</li>' +
                                            '<li><em>编号：</em><span>' + iotdata.sensorNum + '</span></li>' +
                                            '<li><em>当前状态：</em>' + status + '</li>' +
                                            '<li><em>所属品牌：</em><span>' + sensorBrand + '</span></li>' +
                                            '<li><em>安装地址：</em><span>' + iotdata.installationAddress + '</span></li>' +
                                            '<li><em>所属区域：</em><span>' + belongRegion + '</span></li>' +
                                            '<li><em>所属街道：</em><span>' + belongStreet + '</span></li>' +
                                            '<li><em>安装时间：</em><span>' + installationTime + '</span></li>' +
                                        '</ul>';
                            }
                        }
                        html += '</div></div>';


                        //加载事件流程图标
                        html += require("sl_Event").loadEventStatusHtml(data.statusName);

                    }

                    //海岸线，街面，工地 显示历史无人机
                    if (data.communityId == "U002" || data.communityId == "U003" || data.communityId == "C001") {
                        //html += '<button type="button"onclick="require(&#39;sl_Event&#39;).loadDrone()" style="width:100%; height:.5rem; border-radius:.05rem; background: #1a8fef; font-size:.4rem; color:#eee;">查看无人机</button></div></div>';
                    }
                    $("#div_eventdetail").html(html);

                    $('.box-rightinfo.scrolldiv').perfectScrollbar({
                        cursorwidth: 10, cursorcolor: "rgba(0, 126, 179, .6)",
                    });
                    require("sl_Event").paidanTimerout = setTimeout(function () {

                        if (data.eventDes.indexOf("渣土车") > -1 || data.eventDes.indexOf("黑车") > -1) {
                            //require("sl_Event").loadPartCarTravel();//加载轨迹线
                        }
                        require("sl_Event").loadPaidan(id);//加载派单页面
                    }, 1000);
                })
            }
        },
        loadEventStatusHtml: function (statusname) {
            var statuslist = ["新事件发现", "巡查员取证", "选择处置流程", "处置单位处理", "巡查员审核", "确认是否结案"];
            var html = '<div class="eventProcess-div">' +
							 '<div class="eventProcess-title">事件状态：</div>' +
								'<ul class="eventProcess-ul flex">';
            var classname = "active";
            for (var i = 0; i < statuslist.length; i++) {
                if (statusname == statuslist[i]) {
                    classname = "nowactive";
                }

                html += '<li class="eventProcess-li ' + classname + '">' +
                                   '<div data-text="' + (i + 1) + '"></div>' +
                                   '<span>' + statuslist[i] + '</span>' +
                                   //'<em>' + time + '</em>' +
                                 '</li>';
                if (statusname == statuslist[i]) {
                    classname = "";
                }
            }
            html += '</ul>' +
							'</div>' +
						'</div>';
            return html;
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
                html += 
                // ' <li><div>事件属性：</div><span>' + require("sl_Event").LayerType.List[data.communityId].TextName + '</span></li>' +
                '<li><div>接警时间：</div><span>' + require("common").formatDate2(data.createTime) + '</span></li>' +
                    '<li><div><img src="Content/images/sqzz-poi-icon1.png"/>地址：</div><span>' + data.address + '</span></li>' +
                     '<li><div><img src="Content/images/sqzz-poi-icon1.png"/>事件类型：</div><span>' + data.dispatchType + '</span></li>' +
                     '<li><div><img src="Content/images/sqzz-poi-icon1.png"/>事件状态：</div><span>' + data.statusName + '</span></li>' +
                    //  '<li><div><img src="Content/images/sqzz-poi-icon1.png"/>发生区域：</div><span>' + data.regionName + '</span></li>' +
                    '<li><div><img src="Content/images/sqzz-poi-icon2.png"/>事件描述：</div><span>' + data.eventDes + '</span></li>';
                html += '</ul>';
                //海岸线，街面，工地 显示历史无人机
                if (data.communityId == "U002" || data.communityId == "U003" || data.communityId == "C001") {
                    //html += '<button type="button"onclick="require(&#39;sl_Event&#39;).loadDrone()" style="width:100%; height:.5rem; border-radius:.05rem; background: #1a8fef; font-size:.4rem; color:#eee;">查看无人机</button></div></div>';
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
                require("sl_Event").paidanTimerout = setTimeout(function () {
                    require("sl_Event").loadPaidan(id);//加载派单页面
                }, 500);
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
                Name: "shijian_line",
                LineAlias: "mark",
                LineWidth: 50,
                showAuxIcon: false,
                MaterialName: "Material/aaaa.mtr",
            }
            //城市大脑坐标
            //if (require("sl_Event").danao_coordinatestr == null) {
            //    var danao_absPos = Q3D.vector3d(map.getSceneNode("danao/danao_zhdn").getAbsPos());
            //    var danao_coordinate = require("common").planeToCoordinate(danao_absPos.x + "," + danao_absPos.y + "," + danao_absPos.z);//获取大脑经纬度坐标
            //    require("sl_Event").danao_coordinatestr = danao_coordinate.longitude + "," + danao_coordinate.latitude + "," + danao_coordinate.height;
            //}

            var eventpos = data.lng + "," + data.lat + ",0";
            require("common").getRadianLine(eventpos, require("sl_Event").danao_coordinatestr, 500, option);//显示事件到大脑的连线

            //派单员是否有值
            if (data.dealPerson != null && data.dealPerson != "") {
                require("sl_Event").paidan2Timerout = setTimeout(function () {
                    var inspectordetail = require("sl_Event").InspectorList.get(data.dealPerson);//通过巡查员查找巡查员坐标
                    if (inspectordetail != null) {

                        //画大脑到派单员的连接
                        var option = {
                            AreaName: "gwh_xilou",
                            //AreaName: "Shanghai",
                            Name: "paidan_line",
                            LineAlias: "mark",
                            LineWidth: 50,
                            showAuxIcon: false,
                            MaterialName: "Material/aaaa.mtr",
                        }
                        var pos2 = inspectordetail.longitude + "," + inspectordetail.latitude + ",0";//派单坐标
                        require("common").getRadianLine(require("sl_Event").danao_coordinatestr, pos2, 500, option);//显示事件到大脑的连线

                        //创建派单POI
                        var fullNodePath2 = areaName + "/paidan_poi";
                        var position2 = Q3D.vector3(pos2.toGlobalVec3d().toLocalPos(areaName));
                        var data2 = {
                            Position: position2, Text: "", Icon: "Texture/Common/paidan.png", IconSize: Q3D.vector2(100, 97)
                        }
                        if (map.getSceneNode(fullNodePath2)) {
                            //map.clearPOIJump();
                            map.getArea(areaName).destroySceneNode("paidan_poi");
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
                            var html = '<div class="sqzz-sjjd-div flex">' +
                                        '<img src="' + inspectordata.photoUrl + '" style="width: 112px; height: 150px;"/>' +
                                        '<ul class="sqzz-sjjd-list1">' +
                                            '<li><span>接单员：</span><em>' + inspectordata.name + '</em></li>' +
                                            '<li><span>性别：</span><em>男</em></li>' +
                                            '<li><span>联系电话：</span><em>' + inspectordata.phone + '</em></li>' +
                                        ' </ul>' +
                                    '</div>' +
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

                            map.enableNodeFollowing(fullNodePath2, function (node, v2i) {
                                require("sl_Event").nodeFolowing(node, v2i);
                            });
                        })
                    }
                }, 500);
            }

        },

        //加载渣土车/黑车轨迹
        loadPartCarTravel: function () {
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

            var linname = "lineEventPartCar"
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
        nodeFolowing: function (node, v2i) {
            require("sl_Event").nodeFollowingPath.forEach(function (e) {
                if (node.getFullName() == e.nodePath) {
                    if (document.getElementById(e.nodeDom) != null) {
                        document.getElementById(e.nodeDom).style.left = v2i.x + "px";
                        document.getElementById(e.nodeDom).style.top = v2i.y - 560 + "px";
                    }
                }
            });
        },

        /*********************关闭事件-start*********************/
        //关闭跟随
        clearWindowFolowing: function () {
            require("sl_Event").nodeFollowingPath.forEach(function (e) {
                map.disableNodeFollowing(e.nodeName, true);
            });
            require("sl_Event").nodeFollowingPath = [];
        },
        //关闭派单页面
        closeEventPaidan: function () {
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var id = require("sl_Event").LastPOI_Clk.split('_')[2];
                //删除拍单连线
                if (map.getSceneNode(con.AreaName, "paidan_line")) {
                    map.getArea(con.AreaName).destroySceneNode("paidan_line");
                }
                //删除POI
                var areaName = con.AreaName;
                if (map.getSceneNode(areaName + "/paidan_poi")) {
                    //map.clearPOIJump();
                    map.getArea(areaName).destroySceneNode("paidan_poi");
                }
                if (require("sl_Event").nodeFollowingPath.length == 2) {
                    require("sl_Event").nodeFollowingPath.pop();//删除派单窗口跟随
                }
                $("#detail_03").html("");//页面清空
            }
        },
        //关闭事件详情
        closeDetail: function () {
            require("sl_Event").clearTimeCount();//计时器清空
            //循环播放处置流程
            if (require("sl_Event").eventTimer != null) {
                clearInterval(require("sl_Event").eventTimer);
                require("sl_Event").eventTimer = null;
                //if ($("#header_menu div button.active").text() == "城区综治" && $("#bottom_menu ul li.active").text() == "事件") {
                //    console.log("开启全部事件循环播放");
                //    require("sl_Event").LoopAllEvents();//开启全部事件循环播放
                //}
            }
            //延后执行事件连线
            if (require("sl_Event").eventProcessTimerout != null) {
                clearTimeout(require("sl_Event").eventProcessTimerout);
                require("sl_Event").eventProcessTimerout = null;
            }
            //延后执行事件连线
            if (require("sl_Event").paidanTimerout != null) {
                clearTimeout(require("sl_Event").paidanTimerout);
                require("sl_Event").paidanTimerout = null;
            }
            //延后执行派单连线
            if (require("sl_Event").paidan2Timerout != null) {
                clearTimeout(require("sl_Event").paidan2Timerout);
                require("sl_Event").paidan2Timerout = null;
            }
            require("sl_Event").clearWindowFolowing();
            //清空派单
            require("sl_Event").closeEventPaidan();

            //$("#left_02").html("");
            $("#detail_02").empty();
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {

                var id = require("sl_Event").LastPOI_Clk.split('_')[2];
                //清除发光动线连线
                if (map.getSceneNode(con.AreaName, "shijian_line")) {
                    map.getArea(con.AreaName).destroySceneNode("shijian_line");
                }

                if (map.getSceneNode(con.AreaName, "paidan_line")) {
                    map.getArea(con.AreaName).destroySceneNode("paidan_line");
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

            var carlinname = "lineEventPartCar";
            var AreaName = con.AreaName;
            var carLineNode = map.getSceneNode(con.AreaName, carlinname);
            if (carLineNode) {
                map.destroySceneNode(AreaName, carlinname);
            }

        },
        //清空事件POI
        clearEventPOI: function () {
            var data = require("sl_Event").allPOINameList;
            var areaName = con.AreaName;
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    var node = map.getSceneNode(areaName + "/" + data[i]);
                    if (node) {
                        map.getArea(areaName).destroySceneNode(data[i]);
                    }
                }
                require("sl_Event").allPOINameList = [];
            }
            if (map.getSceneNode(areaName + "/paidan_poi")) {
                map.getArea(areaName).destroySceneNode("paidan_poi");
            }
            if (map.getSceneNode(areaName + "/paidanDetail")) {
                map.getArea(areaName).destroySceneNode("paidanDetail");
            }
        },
        clearTimeCount: function () {
            if (require("sl_Event").timeCountList.length > 0) {
                for (var i = 0; i < require("sl_Event").timeCountList.length; i++) {
                    clearInterval(require("sl_Event").timeCountList[i]);
                }
                require("sl_Event").timeCountList = [];
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

        /*********************加载大脑转动特效-start*********************/
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
            if (this.DanaoAnimation) {
                clearTimeout(this.DanaoAnimation);
            }
            map.unloadArea("danao");//卸载模型
        },
        /*********************加载大脑转动特效-end*********************/

        /*********************无人机历史视频-历史轨迹-start*********************/
        EventDrone_player: null,//无人机视频
        DroneMovieClip: null,
        //点击查看无人机
        loadDrone: function () {
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
        clearDroneVideo: function () {
            if (require("sl_Event").EventDrone_player) {
                require("sl_Event").EventDrone_player.dispose();
                require("sl_Event").EventDrone_player = null;
            }
            $("#detail_04").html("");
        },
        //关闭无人机视频
        closeEventDrone: function () {
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
                for (var i = 0; i < data.length; i++) {
                    var style = "sjxx-li flex"
                    if (i <= 1) {
                        style = "sjxx-li active flex"
                    }
                    var aiiconstyle = "";
                    if (data[i].dispatchType == "主动发现") {
                        aiiconstyle = 'style="background: url(../Content/images/AI-icon.png) center center no-repeat;"';
                    }
                    if(data[i].communityId == null){
                        data[i].communityId = 'SANGAO';
                    }   
                    var poiName = "POISociety" + require("sl_Event").LayerType.List[data[i].communityId].Name + "_" + data[i].id;//POIIOT_01
                    html +=
                       '<li class="' + style + '" onclick="require(&apos;sl_Event&apos;).loadEventDetail(' + poiName + ')">' +
							'<span class="sjxx-id counter"  style="background: url(../Content/images/AI-icon.png) center center no-repeat;"' + aiiconstyle + '></span>' +
							'<div class="sjxx-div">' +
								'<div class="sjxx-li-line1">' +
									'<span class="sjxx-event">' + data[i].eventName + '</span>' +
									'<span class="fr sjxx-state">' + data[i].statusName + '</span>' +
									'<span class="fr sjxx-economizetime">节约' + data[i].economizeTime + '</span>' +
								'</div>' +
								'<div class="sjxx-address">' + data[i].address +
									'<span class="fr sjxx-time">' + con.getNowFormatDate(data[i].createTime) + '<span>' + data[i].dealPerson + '</span></span>' +
								'</div>' +
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
        loadEventDetail: function (poiName) {
            $(".sjxx-li").each(function (index, element) {
                $(this).click(function () {
                    $(this).addClass("active").siblings(".sjxx-li").removeClass("active");
                })
            })
            var layeractive = $("#bottom_menu ul li.active").text();
            switch (layeractive) {
                case "传感器":
                    require("sl_IOT").Revert();
                    //加载事件POI和事件详情
                    require("sl_Event").loadEvent(function () {
                        setTimeout(function () {
                            require("sl_Event").loadEventProcessing(poiName)
                        }, 1500);
                    });
                    break;
                case "摄像头":
                    require("sl_Camera").Revert();
                    //加载事件POI和事件详情
                    require("sl_Event").loadEvent(function () {
                        setTimeout(function () {
                            require("sl_Event").loadEventProcessing(poiName)
                        }, 1500);
                    });
                    break;
                case "无人机":
                    require("sl_Drone").Revert();
                    //加载事件POI和事件详情
                    require("sl_Event").loadEvent(function () {
                        setTimeout(function () {
                            require("sl_Event").loadEventProcessing(poiName)
                        }, 1500);
                    });
                    break;
                case "村居工作站":
                    require("sl_WorkStation").Revert();
                    //加载事件POI和事件详情
                    require("sl_Event").loadEvent(function () {
                        setTimeout(function () {
                            require("sl_Event").loadEventProcessing(poiName)
                        }, 1500);
                    });
                    break;
                case "海岸线":
                    require("sl_SeaboardLine").Revert();
                    //加载事件POI和事件详情
                    require("sl_Event").loadEvent(function () {
                        setTimeout(function () {
                            require("sl_Event").loadEventProcessing(poiName)
                        }, 1500);
                    });
                    break;
                case "工地":
                    require("sl_WorkSite").Revert();
                    //加载事件POI和事件详情
                    require("sl_Event").loadEvent(function () {
                        setTimeout(function () {
                            require("sl_Event").loadEventProcessing(poiName)
                        }, 1500);
                    });
                    break;
                case "街面":
                    require("sl_Street").Revert();
                    //加载事件POI和事件详情
                    require("sl_Event").loadEvent(function () {
                        setTimeout(function () {
                            require("sl_Event").loadEventProcessing(poiName)
                        }, 1500);
                    });
                    break;
                case "网格":
                    require("sl_Grid").Revert();
                    //加载事件POI和事件详情
                    require("sl_Event").loadEvent(function () {
                        setTimeout(function () {
                            require("sl_Event").loadEventProcessing(poiName)
                        }, 1500);
                    });
                    break;
                default://事件
                    setTimeout(function () {
                        require("sl_Event").loadEventProcessing(poiName)
                    }, 1500);
                    break;

            }
            //显示左侧社区页面
            $("#society_twocolright").hide()
            $("#society_twocolright").show('drop', 1000);
            //var data = this.EventData.get(id);


            //图层选中事件
            $("#bottom_menu ul li").removeClass("active");
            $("#bottom_menu ul li").eq(8).addClass("active");
        },
        /*********************加载大脑转动特效-end*********************/
        Revert: function () {
            this.clearEventPOI();
            this.closeDetail();//关闭详情窗口

            //if (this.DanaoAnimation) {
            //    clearTimeout(this.DanaoAnimation);
            //}
            //this.movieClear();
            //map.unloadArea("danao");
            if (require("sl_Event").eventTimer != null) {
                clearInterval(require("sl_Event").eventTimer);
                require("sl_Event").eventTimer = null;
            }
            require("sl_Event").closeLoopAllEvents();//关闭循环播放所有事件
        }
    }
})