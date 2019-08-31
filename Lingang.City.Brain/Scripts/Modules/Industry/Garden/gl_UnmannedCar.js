define(["config", "common", "g_UnmannedCarData", "gl_GardenBuildingAjax", "util"], function (con, com, g_UnmannedCarData, gl_GardenBuildingAjax, util) {
    /****************************无人车图层****************************/
    return {
        UnmannedCarPOIIcon: "Texture/common/wurenche.png",
        UnmannedCarPOIIcon_hover: "Texture/common/wurenche_hover.png",
        RouterPointPOI: "Texture/common/IOT6.png",
        RouterPointPOI_hover: "Texture/common/IOT6_hover.png",
        UnmannedClk_Car:null,
        UnmannedCarPOIs: [],
        StartAndEndPointPOIs_last:[],
        UnmannedCarTrajectors:null,//[],
        RoutePointPOIs:[],
        DrivingRoutes: [],
        UnmannedCarDetailInfo: new util.HashMap,
        //加载无人车图层
        loadUnmannedCar: function () {
                require("gl_UnmannedCar").loadCarTrajectory();
                require("gl_UnmannedCar").DrawDrivingRoute();
            com.LayerFlyto(22, function () {
                
            })

        },
        //
        Revert: function () {
            //隐藏无人车POI,轨迹线
            for (var i = 0; i < require("gl_UnmannedCar").UnmannedCarPOIs.length; i++) {
                var node = map.getSceneNode(require("gl_UnmannedCar").UnmannedCarPOIs[i]);
                //var nodeTrajector = map.getSceneNode(require("gl_UnmannedCar").UnmannedCarTrajectors[i]);
                if (node) {
                    node.setVisible(0);
                }
                //if (nodeTrajector) {
                //    nodeTrajector.setVisible(0);
                //}
            }

            for (var i = 0; i < require("gl_UnmannedCar").DrivingRoutes.length; i++) {
                var nodeTrajector = map.getSceneNode(require("gl_UnmannedCar").DrivingRoutes[i]);
                if (nodeTrajector) {
                    nodeTrajector.setVisible(0);
                }
            }
            
            this.clearLastUnmannedCar();
        },

        //加载无人车实时行驶轨迹，漫游
        loadCarTrajectory: function () {
            //var TrajectoryData = g_UnmannedCarData.UmmannedCarTrajectoryData;
            gl_GardenBuildingAjax.getUnmannedCarInfo(function (TrajectoryData) {
            var areaName = con.AreaName;
            for (var i in TrajectoryData) {
                var data = TrajectoryData[i]; //无人车漫游轨迹
                require("gl_UnmannedCar").UnmannedCarDetailInfo.put(data.id, data.passengers);  //无人车详情
                /************************创建无人车POI*******************************/
                var POINodeName = "UmmannedCarPOI_" + data.id;                
                //var POIPosition = (data.currentLon + "," + data.currentLat + ",0").toGlobalVec3d().toLocalPos(areaName);
                var Coordinate = com.gcj02towgs84(parseFloat(data.currentLon), parseFloat(data.currentLat));//高德坐标转wgs84
                var pos = Coordinate + ",0";
                var POIPosition = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

                var iconSize = Q3D.vector2(21, 25),
                    FontColor = Q3D.colourValue("#000080", 1),
                    icon = require("gl_UnmannedCar").UnmannedCarPOIIcon;
                var node = map.getSceneNode(areaName, POINodeName);
                if (node) {
                    node.setVisible(1);
                } else {
                    var poiOptions = {
                        Position: POIPosition,
                        Orientation: null,
                        OrientationType: Q3D.Enums.nodeOrientationType.Self,
                        Scale: Q3D.vector3(1, 1, 1),
                        POIOptions: {
                            FontSize: 15,
                            FontName: "微软雅黑",
                            FontColor: FontColor,
                            CharScale: 1,
                            Text: "无人车" + data.id,
                            Icon: icon,
                            IconSize: iconSize,
                            POILayout: Q3D.Enums.poiLayOut.Bottom,
                            UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
                            IconAlphaEnabled: true,
                            FontOutLine: 2, //同描边有关
                            FontEdgeColor: Q3D.colourValue("#80ffff", 1),
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
                    map.createPOI(areaName + "/" + POINodeName, poiOptions);
                    require("gl_UnmannedCar").UnmannedCarPOIs.push(areaName + "/" + POINodeName);
                    /************************END*******************************/
                }

                /******************************漫游起点和终点POI***************************************/
                //var RouteStartNode = "RouteStartPOI_" + data.id, RouteEndNode = "RouteEndPOI_" + data.id;
                //var RouteStartPOIPosition = (data.startLon + "," + data.startLat + ",0").toGlobalVec3d().toLocalPos(areaName),
                //    realTimePosition = (data.currentLon + "," + data.currentLat + ",0").toGlobalVec3d().toLocalPos(areaName),
                //    RouteEndPOIPosition = (data.desLon + "," + data.desLat + ",0").toGlobalVec3d().toLocalPos(areaName);

                var RouteStartNode = "RouteStartPOI_" + data.id, RouteEndNode = "RouteEndPOI_" + data.id;
                var RouteStartPOIPosition = (com.gcj02towgs84(parseFloat(data.startLon) , parseFloat(data.startLat)) + ",0").toGlobalVec3d().toLocalPos(areaName),
                    realTimePosition = (com.gcj02towgs84(parseFloat(data.currentLon), parseFloat(data.currentLat)) + ",0").toGlobalVec3d().toLocalPos(areaName),
                    RouteEndPOIPosition = (com.gcj02towgs84(parseFloat(data.desLon), parseFloat(data.desLat)) + ",0").toGlobalVec3d().toLocalPos(areaName);

                var iconSize = Q3D.vector2(21, 25),
                    FontColor = Q3D.colourValue("#000080", 1);
                //起点
                var node = map.getSceneNode(areaName, RouteStartNode);
                if (node) {
                    node.setVisible(0);
                } else {
                    var poiOptions = {
                        Position: Q3D.vector3(RouteStartPOIPosition),
                        Orientation: null,
                        OrientationType: Q3D.Enums.nodeOrientationType.Self,
                        Scale: Q3D.vector3(1, 1, 1),
                        POIOptions: {
                            FontSize: 15,
                            FontName: "微软雅黑",
                            FontColor: FontColor,
                            CharScale: 1,
                            Text: "",
                            Icon: "Texture/common/poi_guiji_qidian.png",
                            IconSize: iconSize,
                            POILayout: Q3D.Enums.poiLayOut.Bottom,
                            UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
                            IconAlphaEnabled: true,
                            FontOutLine: 2, //同描边有关
                            FontEdgeColor: Q3D.colourValue("#80ffff", 1),
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
                        },
                        OnLoaded: function () {
                            //默认隐藏漫游起始点
                            var Node = map.getSceneNode(areaName, RouteStartNode);
                            if (Node) {
                                Node.setVisible(0);
                            }
                        },
                    };
                    map.createPOI(areaName + "/" + RouteStartNode, poiOptions);
                    //require("gl_UnmannedCar").UnmannedCarPOIs.push(areaName + "/" + RouteStartNode);
                    
                    
                }
                //终点
                var nodeEnd = map.getSceneNode(areaName, RouteEndNode);
                if (nodeEnd) {
                    nodeEnd.setVisible(0);
                } else {
                    var poiOptions = {
                        Position: Q3D.vector3(RouteEndPOIPosition),
                        Orientation: null,
                        OrientationType: Q3D.Enums.nodeOrientationType.Self,
                        Scale: Q3D.vector3(1, 1, 1),
                        POIOptions: {
                            FontSize: 25,
                            FontName: "微软雅黑",
                            FontColor: FontColor,
                            CharScale: 1,
                            Text: "",
                            Icon: "Texture/common/poi_guiji_zhongdian.png",
                            IconSize: iconSize,
                            POILayout: Q3D.Enums.poiLayOut.Bottom,
                            UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
                            IconAlphaEnabled: true,
                            FontOutLine: 2, //同描边有关
                            FontEdgeColor: Q3D.colourValue("#80ffff", 1),
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
                        },
                        OnLoaded: function () {
                            //默认隐藏漫游起始点
                            var Node = map.getSceneNode(areaName, RouteEndNode);
                            if (Node) {
                                Node.setVisible(0);
                            }
                        },
                    };
                    map.createPOI(areaName + "/" + RouteEndNode, poiOptions);
                    //require("gl_UnmannedCar").UnmannedCarPOIs.push(areaName + "/" + RouteEndNode);


                }
                /************************END*******************************/
                /**************************************END*******************************************/
                /************************无人车漫游路线*******************************/
                var pointsArray = [], offsetArray = [], pointsArray_route = [], offsetArray_route = [], LineName = "TrajectoryRoute_" + data.id;

                //for (var j = 0; j < data.length; j++) {
                //    var pos = data[j].pos;
                //    pointsArray.push(Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName)));
                //    offsetArray.push(0);
                //}
                pointsArray = [Q3D.vector3(RouteStartPOIPosition), Q3D.vector3(realTimePosition), Q3D.vector3(RouteEndPOIPosition)],
                offsetArray = [0, 0, 0],
                pointsArray_route = [Q3D.vector3(realTimePosition), Q3D.vector3(RouteEndPOIPosition)],
                offsetArray_route = [0, 0];

                var nodeLine = map.getSceneNode(areaName, LineName);
                if (!nodeLine)
                {
                    //画路线
                    var routeOptions = {
                        Material: null,
                        SpecialTransparent: true, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                        LinePoints: pointsArray, //一维数组
                        OffsetDist: offsetArray, //偏移距离，单位米，用于贝塞尔曲线的控制点计算
                        LineOptions: {
                            Subdivision: 20, //设置生成曲线细分程度
                            LineWidth: 2,
                            WrapLen: 2,
                            //以下用于动态创建的材质
                            Color: Q3D.colourValue("#008000", 1), //线的颜色
                            Alpha: 1, //线的透明度
                        },
                        OnLineCreated: function () {
                        //默认隐藏漫游路线
                            var lineNode = map.getSceneNode(areaName + "/" + LineName);
                            if (lineNode) {
                                lineNode.setVisible(0);
                            }
                        }
                    };
                    map.createRoamRoute(areaName + "/" + LineName, routeOptions);
                    //require("gl_UnmannedCar").UnmannedCarTrajectors.push(areaName + "/" + LineName);
                }
               
                  //动线漫游
                 var polylineOptions = {
                         CenterLine: pointsArray_route, //动线中心线，由 Vector3 坐标组成
                         OffsetDist: offsetArray_route, //偏移距离，单位米，用于贝塞尔曲线的控制点计算
                         TotalTime: 60, //路上用时，单位秒
                         DelayTime: 2, //延迟出发，单位秒
                         IsLoop: true, //是否循环播放，默认为否
                         IsAutoPlay: true, //是否自动播放， 默认为否
                         PitchAllowed: false, //是否允许俯仰
                         OnAnimationEndFn: function () {                     
                        }
                    };
                 map.roamByPolyline(areaName + "/" + POINodeName, polylineOptions);
                
                /******************************END************************************/

            }
            })
        },
        //无人车轨迹实时追踪(等待实时数据推送验证)
        appendRealTimeTrack: function (param) {
            var option = { TimeDiff: 80, Location: "121.917290,30.896462,-0.034027".toGlobalVec3d(), Heading: 0, };  //121.917290,30.896462,-0.034027
            map.startRealTimeTrack("gwh_xilou/UmmannedCarPOI_0", option);
        },
        //清除上一个点击的无人车选中状态
        clearLastUnmannedCar: function () {
            if (this.StartAndEndPointPOIs_last.length > 0) {
                for (var i = 0; i < this.StartAndEndPointPOIs_last.length; i++) {
                    this.StartAndEndPointPOIs_last[i].setVisible(0);
                }
            }
            if (this.UnmannedClk_Car) {
                this.UnmannedClk_Car.asPOI().setIcon(this.UnmannedCarPOIIcon);
            }
            if (this.UnmannedCarTrajectors) {
                this.UnmannedCarTrajectors.setVisible(0);
            }
        },
        showUnmannedCarTrajectors: function (nodeName) {
            var id = nodeName.split("_")[1];
            var nodeName_Trajectory = "TrajectoryRoute_" + id,
                RouteStartNode = "RouteStartPOI_" + id, 
                RouteEndNode="RouteEndPOI_"+id,
                areaName = con.AreaName;
            this.clearLastUnmannedCar();
            var node_car = map.getSceneNode(areaName, nodeName);
            if (node_car) {
                node_car.asPOI().setIcon(this.UnmannedCarPOIIcon_hover);
                this.UnmannedClk_Car = node_car;
            }

            var node = map.getSceneNode(areaName, nodeName_Trajectory),
                node1 = map.getSceneNode(areaName, RouteStartNode),
                node2 = map.getSceneNode(areaName, RouteEndNode);
            if (node) {
                node.setVisible(1);  //显示漫游轨迹
                require("gl_UnmannedCar").UnmannedCarTrajectors = node;//.push(areaName + "/" + LineName);
            }
            if (node1) {
                node1.setVisible(1);  //显示漫游起点
                require("gl_UnmannedCar").StartAndEndPointPOIs_last.push(node1);
            }
            if (node2) {
                node2.setVisible(1);  //显示漫游终点
                require("gl_UnmannedCar").StartAndEndPointPOIs_last.push(node2);
            }
            //显示无人车详情页面
            var option = {
                aniDom: "#center01_01",
                htmlDom: "#center_01",
                url: con.HtmlUrl + 'Industry/Garden/UnmannedCarDetail.html'
            }
            com.UIControlAni(option, function () {
                //require("gl_GardenBuilding").loadCompanyInfo();
                var info = require("gl_UnmannedCar").UnmannedCarDetailInfo.get(id);
                if (info) {
                    var data = info[0];
                    if (data.profileUrl!="") {
                        $("#personIMG").attr("src",data.profileUrl);
                    }
                    $("#dest").html(data.dest);
                    $("#estimatedArrivalTime").html(data.estimatedArrivalTime);
                    $("#onboardTime").html(data.onboardTime);
                    //$("#").html(data.);
                    //$("#").html(data.);
                }
            });
        },
        //画无人车行驶路线
        DrawDrivingRoute: function () {
            var UmmannedCarDrivingRoute = g_UnmannedCarData.UmmannedCarDrivingRoute;
            var areaName = con.AreaName;
            /************************无人车行驶路线*******************************/
            //for (var i in UmmannedCarDrivingRoute) {
            for (var i = 0; i < UmmannedCarDrivingRoute.length; i++) {
                var data = UmmannedCarDrivingRoute[i];
                var pointsArray = [], offsetArray = [], LineName = "DrivingRoute"+i;
                for (var j in data) {
                    var pos = data[j].pos;
                    pointsArray.push(Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName)));
                    offsetArray.push(0);                   
                }
                //}
                var nodeLine = map.getSceneNode(areaName, LineName);
                if (nodeLine) {
                    nodeLine.setVisible(1);
                } else {
                    //画路线
                    var routeOptions = {
                        Material: null,
                        SpecialTransparent: false, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                        LinePoints: pointsArray, //一维数组
                        OffsetDist: offsetArray, //偏移距离，单位米，用于贝塞尔曲线的控制点计算
                        LineOptions: {
                            Subdivision: 20, //设置生成曲线细分程度
                            LineWidth: 5,
                            WrapLen: 2,
                            //以下用于动态创建的材质
                            Color: Q3D.colourValue("#0000FF", 0.8), //线的颜色
                            Alpha: 0.7, //线的透明度
                        },
                        OnLineCreated: function () {
                            //alert("Line is created!");
                        }
                    };
                    map.createRoamRoute(areaName + "/" + LineName, routeOptions);
                    require("gl_UnmannedCar").DrivingRoutes.push(areaName + "/" + LineName);
                }
            }
        },
    }
})