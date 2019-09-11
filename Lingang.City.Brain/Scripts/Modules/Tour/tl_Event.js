define(["config", "common", "t_LayerMenuData", "t_LayerMenuAjax", "util"], function (con, com, t_LayerMenuData, t_LayerMenuAjax, util) {
    /***************************************事件***************************************/
    return {
        LayerType: null,//选择事件
        POIData: null,//POI详情数据
        POITruckTraceData: null, //POI车辆轨迹数据
        LastPOI_Clk: null,//鼠标选中POI
        tl_EventData: new util.HashMap,

        nodeFollowingPath:null,
        /************************事件POI-start************************/
        //加载事件
        loadEvent: function () {
            this.Revert();

            
            require("tl_Event").loadEventPOI();
        },
        loadEventPOI:function()
        {
            require("tl_Event").LayerType = require("t_Main").LayerCatalog.Event;
            
            var nowdata = require("common").getNowFormatDate();//当前时间
            var before7 = require("common").getDaysBefore(nowdata, 7);//30天前的时间
            var post_data = { "starttime": before7, "endtime": nowdata, "offset": 0, "count": 10000 } //&offset=0&count=10000
            require("t_LayerMenuAjax").getEventList(post_data, function (result) {

                var areaName = con.AreaName;
                var icon = require("tl_Event").LayerType.UnChooseIcon;
                var pois = [];
                for (var i = 0; i < require("tl_Event").POIData.length; i++) {
                    var row = require("tl_Event").POIData[i];
                    var poiName = "POITour" + require("tl_Event").LayerType.Name + "_" + row.id;//POIIOT_01
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

                require("tl_Event").loadEventList();//加载事件列表
            });
        },
        //事件点击事件
        loadEventDetial: function (nodeName) {
            /*******************选中POI-start*******************/
            var areaName = con.AreaName;
            //POI放在中间
            Q3D.globalCamera().flyToByClick('MapWrapper', Q3D.vector3d(map.getSceneNode(areaName, nodeName).getAbsPos()), 0.5);
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var layername = this.LastPOI_Clk.split('_')[0].replace("POITour", "");
                var level = require("tl_Event").LayerType.Level;
                var icon = require("tl_Event").LayerType.UnChooseIcon;
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

                var layername = nodeName.split('_')[0].replace("POITour", "");
                var level = require("tl_Event").LayerType.Level;
                var icon = require("tl_Event").LayerType.ChooseIcon;
                poi.setIcon(icon);

                //var clickPosV3d = Q3D.vector3d(node.getAbsPos());
                // Q3D.globalCamera().flyToByClick('MapWrapper_qmap3d', clickPosV3d, 1);

                //Q3D.globalCamera().flyToAxisView(node, 1000, 1, function () { });

                    var id = nodeName.split('_')[1];
                    var dataEvent = require("tl_Event").tl_EventData.get(id);

                    require("tl_Event").loadEventDetail(dataEvent);

                    //if (dataEvent.sj == '疑似黑车' || dataEvent.sj == '疑似渣土车') {
                    //    if (dataEvent.cardNo != '') {
                    //        require("tl_Event").clearTruckLine();
                    //        require("tl_Event").addTruckRouteLine(dataEvent.cardNo);
                    //    }
                    //}
                    //else {
                    //    require("tl_Event").clearTruckLine();
                    //}
                
            }           

            /*******************选中POI-end*******************/
        },
        //清空事件POI
        clearEventPOI: function () {
            var areaName = con.AreaName;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var layername = this.LastPOI_Clk.split('_')[0].replace("POITour", "");
                var level = require("tl_Event").LayerType.Level;
                var icon = require("tl_Event").LayerType.UnChooseIcon;
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
                    var name = require("tl_Event").LayerType.Name;

                    var poiname = "POITour" + name + "_" + data[i].id;
                    var node = map.getSceneNode(areaName + "/" + poiname);
                    if (node) {
                        //map.getArea(areaName).destroySceneNode(poiname);
                        node.setVisible(0);
                    }
                }
                require("tl_Event").LayerType = null;
                this.POIData = null;
            }

            if (require("tl_Event").nodeFollowingPath != null) {
                map.disableNodeFollowing(require("tl_Event").nodeFollowingPath, true);
            }
        },
        /************************事件POI-end************************/

        /************************右侧事件列表-start************************/
        loadEventList: function () {
            var data = require("tl_Event").POIData;
            var html = "";
            for (var i = 0; i < data.length; i++) {
                require("tl_Event").tl_EventData.put(data[i].id, data[i]);
            }

            //加载滚动条
            require(['nicescroll'], function (data) {
                $('.scrolldiv').perfectScrollbar({ cursorwidth: 10, cursorcolor: "rgba(0, 126, 179, .6)", });
            });

            /*
            var post_data = { "pageIndex": "1", "pageSize": "100", startTime: "2019-02-06 000:00:00", endTime: "2019-03-06 000:00:00" }
            require("t_LayerMenuAjax").getEventList(post_data, function (result) {

                var data = require("tl_Event").POIData;
                var html = "";
                for (var i = 0; i < data.length; i++) {
                    //html += '<li class="yqsjlb-item clearfix">'+
                    //    '<div class="item-l"></div>'+
                    //    '<div class="item-r" onclick="require(\'tl_Event\').loadEventDetail(' + data[i].id + ');">' +
                    //        '<div>拍照时间：' + data[i].sbsj + '</div>' +
                    //        '<div>处理状态：' + data[i].DICTNAME + '<span>事件类型：' + data[i].flmc + '</span></div>' +
                    //        '<div>事件详情：' + data[i].sjms + '</div>' +
                    //    '</div>'+
                    //'</li>';
                    require("tl_Event").tl_EventData.put(data[i].id, data[i]);
                }
                //$("#tour_cameralist").html(html);



                //加载滚动条
                require(['nicescroll'], function (data) {
                    $('.scrolldiv').perfectScrollbar({ cursorwidth: 10, cursorcolor: "rgba(0, 126, 179, .6)", });
                });
            });*/
        },
        loadEventDetail: function (data) {
            //加载页面内容
            var url = con.HtmlUrl + 'TourNew/Center_EventDetail.html';
            require(['text!' + url], function (template) {
                $("#center_02").html(template);
                $("#center_02").show('slide', { direction: 'left' }, 500);

                if (data) {
                    var html = "";
                    var carNumber = '无';
                    if (data.cardNo != null )
                    	carNumber = data.cardNo;

                    $("#ul_eventdetail").addClass("poiinfo poiinfo3");
                    html += '<div class=\"box-top\">' +
                            '    事件-' + data.sj +
                            '    <button type=\"button\" class=\"box-close\"  onclick=\"require(\'t_Home\').closeEventDetail()\"></button>' +
                            '</div>' +
                            '<div class=\"boxcont\">' +
								'<div>' +
									'<div class=\"box-leftpic\" style="width:100%;">' +
                						'<img src=\"' + data.snapshoturiwithrect + '\" style=\"height:5rem; margin:0 auto; display:block;\">' +
                					'</div>' +
									'<div class=\"box-rightinfo flex\" style=\" margin-left:0; margin-top:.2rem; \">' +
									'    <ul style="width:100%;">' +
										'    <li><span>事件时间：</span><em>' + data.sbsj + '</em></li>' +
										//'   <li><span>车牌号码：</span><em>' + carNumber + '</em></li>' +
										'   <li><span>事件状态：</span><em>' + data.DICTNAME + '</em></li>' +
										'    <li style="overflow:hidden;"><span style="float:left; width:5em;">事件描述：</span>' +
                								'<em class="scrolldiv" style="float:left; width:calc(100% - 5em); height:auto;  max-height:1.5rem; ">' + data.sjms + '</em></li>' +
									'    </ul>' +
									'</div>' +
								'</div>'+
							'</div>';

                    $("#ul_eventdetail").empty();
                    $("#ul_eventdetail").html(html);
                    $('.scrolldiv').perfectScrollbar({ cursorwidth: 10, cursorcolor: "rgba(0, 126, 179, .6)", });
                    if(data.snapshoturiwithrect == ""){
                        $("#ul_eventdetail").find(".box-leftpic").remove();
                    }
                }


                $("#ul_eventdetail").hide()
                $("#ul_eventdetail").show('drop', 1000);


                //  节点信息窗跟随测试
                var areaName = con.AreaName;
                var nodeName = "POITour" + require("tl_Event").LayerType.Name + "_" + data.id;//POIIOT_01
                var nodePath = areaName + '/' + nodeName;

                if (require("tl_Event").nodeFollowingPath != null) {
                    map.disableNodeFollowing(require("tl_Event").nodeFollowingPath, true);
                }

                require("tl_Event").nodeFollowingPath = nodePath;
                map.enableNodeFollowing(nodePath, function (node, v2i) {
                    if (node.getFullName() == nodePath) {
                        document.getElementById("ul_eventdetail").style.left = v2i.x + "px";
                        document.getElementById("ul_eventdetail").style.top = v2i.y + "px";
                    }
                });
            })
        },
        addTruckRouteLine: function (carNo) {

            var post_data = { "cardNo": carNo };
            require("t_LayerMenuAjax").getEventTruckTrace(post_data, function (result) {
                var truckPoints = '';
                $.each(result, function (key, val) {
                    var coordinate = com.gcj02towgs84(parseFloat(val.lng), parseFloat(val.lat));//高德坐标转84坐标
                    if (key == 0)
                        truckPoints = coordinate;
                    else
                        truckPoints = truckPoints + '|' + coordinate;
                })

                var data = truckPoints;

                var status = 1;
                var linename = 'TruckLine01';
                var linecolor = "#D8201E";
                var coordinate = data;
                var nodename = "Tour_TruckLine";
                var lineArray = new Array()
                if (status == 1) {
                    var points = coordinate.split("|")

                    //画连接线
                    for (var k = 0; k < points.length; k++) {
                        var pos = points[k]
                        var lng = parseFloat(pos.split(",")[0])
                        var lat = parseFloat(pos.split(",")[1])
                        var hgt = 8
                        var position = Q3D.globalVec3d(lng, lat, hgt).toGlobalPos();

                        var point = Q3D.vector3(Q3D.globalVec3d(lng, lat, hgt).toLocalPos(con.AreaName))
                        lineArray.push(point)
                    }



                    require("tl_Event").createTruckLine(linecolor, nodename, lineArray)
                }

            });

        },
        //创建渣土车路线
        createTruckLine: function (linecolor, nodename, lineArray) {
            var nodePath = con.AreaName + "/" + nodename;

            var createOptions = {
                Material: "Material/linered.mtr",
                //Material: null,
                SpecialTransparent: true, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                LinePoints: [lineArray], //一维数组,由Vector3坐标组成
                OffsetDist: [],//偏移距离，单位米，用于贝塞尔曲线的控制点计算
                LineOptions: {
                    Subdivision: 20, //设置生成曲线细分程度
                    LineWidth: 3,
                    WrapLen: 10,
                    //以下用于动态创建的材质
                    Color: Q3D.colourValue(linecolor, 1), //线的颜色
                    Alpha: 1, //线的透明度
                },
                OnLineCreated: null
            }

            var linenode = map.getSceneNode(con.AreaName, nodename)
            if (linenode) {
                linenode.setVisible(1)
                //map.destroySceneNode(con.AreaName, nodename)
            } else {
                map.createPolyLine(nodePath, createOptions);
            }
        },
        //清除渣土车线路
        clearTruckLine: function () {
                var linename = "Tour_TruckLine";
                var node = map.getSceneNode(con.AreaName + "/" + linename);
                if (node) {
                    node.setVisible(0);
                }
        },
        closeDetail:function(){
            $("#center_02").html("");
             var areaName = con.AreaName;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var layername = this.LastPOI_Clk.split('_')[0].replace("POITour", "");
                var level = require("tl_Event").LayerType.Level;
                var icon = require("tl_Event").LayerType.UnChooseIcon;
                var lastNode = map.getSceneNode(areaName, this.LastPOI_Clk);
                if (lastNode) {
                    lastNode.asPOI().setIcon(icon);
                    //lastNode.setVisible(0);
                }
            }
        },
        /************************右侧事件列表-end************************/
        //清空
        Revert: function () {
            this.clearEventPOI();
            this.closeDetail();
            this.clearTruckLine();
        }
    }
})