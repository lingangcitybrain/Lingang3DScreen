define(["config", "common", "g_UnmannedCarData"], function (con, com, g_UnmannedCarData) {
    /****************************无人车图层****************************/
    return {
        UnmannedCarPOIIcon: "Texture/common/wurenche.png",
        UnmannedCarPOIIcon_hover: "Texture/common/wurenche_hover.png",
        RouterPointPOI: "Texture/common/IOT6.png",
        RouterPointPOI_hover: "Texture/common/IOT6_hover.png",
        UnmannedCarPOIs: [],
        UnmannedCarTrajectors:[],
        RoutePointPOIs:[],
        DrivingRoutes:[],
        //加载无人车图层
        loadUnmannedCar: function () {
            com.LayerFlyto(22, function () {
                require("gl_UnmannedCar").loadCarTrajectory();
                require("gl_UnmannedCar").DrawDrivingRoute();
            })

        },
        //
        Revert: function () {
            //隐藏无人车POI,轨迹线
            for (var i = 0; i < require("gl_UnmannedCar").UnmannedCarPOIs.length; i++) {
                var node = map.getSceneNode(require("gl_UnmannedCar").UnmannedCarPOIs[i]);
                var nodeTrajector = map.getSceneNode(require("gl_UnmannedCar").UnmannedCarTrajectors[i]);
                if (node) {
                    node.setVisible(0);
                }
                if (nodeTrajector) {
                    nodeTrajector.setVisible(0);
                }
            }

            for (var i = 0; i < require("gl_UnmannedCar").DrivingRoutes.length; i++) {
                var nodeTrajector = map.getSceneNode(require("gl_UnmannedCar").DrivingRoutes[i]);
                if (nodeTrajector) {
                    nodeTrajector.setVisible(0);
                }
            }
            
        },

        //加载无人车实时行驶轨迹，漫游
        loadCarTrajectory: function () {
            var TrajectoryData = g_UnmannedCarData.UmmannedCarTrajectoryData;
            var areaName = con.AreaName;
            for (var i in TrajectoryData) {
                var data = TrajectoryData[i]; //无人车漫游轨迹

                /************************创建无人车POI*******************************/
                var POINodeName = "UmmannedCarPOI_" + i;                
                var POIPosition = data[0].pos.toGlobalVec3d().toLocalPos(areaName);
                var iconSize = Q3D.vector2(41, 45),
                    FontColor = Q3D.colourValue("#000080", 1),
                    icon = require("gl_UnmannedCar").UnmannedCarPOIIcon;
                var node = map.getSceneNode(areaName, POINodeName);
                if (node) {
                    node.setVisible(1);
                } else {
                    var poiOptions = {
                        Position: Q3D.vector3(POIPosition),
                        Orientation: null,
                        OrientationType: Q3D.Enums.nodeOrientationType.Self,
                        Scale: Q3D.vector3(1, 1, 1),
                        POIOptions: {
                            FontSize: 25,
                            FontName: "微软雅黑",
                            FontColor: FontColor,
                            CharScale: 1,
                            Text: "无人车" + i,
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
                }                /******************************漫游起点和终点POI***************************************/                /*var RouteStart = "RouteStartPOI_" + i, RouteEnd="RouteEndPOI_"+i;
                var POIPosition = data[0].pos.toGlobalVec3d().toLocalPos(areaName);
                var iconSize = Q3D.vector2(41, 45),
                    FontColor = Q3D.colourValue("#000080", 1),
                    icon = require("gl_UnmannedCar").UnmannedCarPOIIcon;
                var node = map.getSceneNode(areaName, POINodeName);
                if (node) {
                    node.setVisible(1);
                } else {
                    var poiOptions = {
                        Position: Q3D.vector3(POIPosition),
                        Orientation: null,
                        OrientationType: Q3D.Enums.nodeOrientationType.Self,
                        Scale: Q3D.vector3(1, 1, 1),
                        POIOptions: {
                            FontSize: 25,
                            FontName: "微软雅黑",
                            FontColor: FontColor,
                            CharScale: 1,
                            Text: "无人车" + i,
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
                    */
                    /************************END*******************************/
                }                /**************************************END*******************************************/                /************************无人车漫游路线*******************************/                var pointsArray = [], offsetArray = [], LineName = "TrajectoryRoute_" + i;                for (var j = 0; j < data.length; j++) {
                    var pos = data[j].pos;
                    pointsArray.push(Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName)));
                    offsetArray.push(0);
                }                var nodeLine = map.getSceneNode(areaName, LineName);
                if (!nodeLine)
                //{
                //    nodeLine.setVisible(1);
                //} else                {                    //画路线
                    var routeOptions = {
                        Material: null,
                        SpecialTransparent: true, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                        LinePoints: pointsArray, //一维数组
                        OffsetDist: offsetArray, //偏移距离，单位米，用于贝塞尔曲线的控制点计算
                        LineOptions: {
                            Subdivision: 20, //设置生成曲线细分程度
                            LineWidth: 5,
                            WrapLen: 2,
                            //以下用于动态创建的材质
                            Color: Q3D.colourValue("#008000", 1), //线的颜色
                            Alpha: 1, //线的透明度
                        },
                        OnLineCreated: function () {
                        //默认隐藏漫游路线
                            var lineNode = map.getSceneNode(areaName + "/" + LineName);                            if (lineNode) {
                                lineNode.setVisible(0);
                            }
                        }
                    };
                    map.createRoamRoute(areaName + "/" + LineName, routeOptions);                    require("gl_UnmannedCar").UnmannedCarTrajectors.push(areaName + "/" + LineName);
                }                                 //动线漫游
                 var polylineOptions = {
                         CenterLine: pointsArray, //动线中心线，由 Vector3 坐标组成
                         OffsetDist: offsetArray, //偏移距离，单位米，用于贝塞尔曲线的控制点计算
                         TotalTime: 60, //路上用时，单位秒
                         DelayTime: 2, //延迟出发，单位秒
                         IsLoop: true, //是否循环播放，默认为否
                         IsAutoPlay: true, //是否自动播放， 默认为否
                         PitchAllowed: false, //是否允许俯仰
                         OnAnimationEndFn: function () {                     
                            //map.thirdPersonView("xydy", "droneCamera");                   
                            //map.destroySceneNode("xydy/drone");
                            //map.destroySceneNode("xydy/droneRoute");
                            //map.unloadLayout("personSwitchPanel");
                        }
                    };
                 map.roamByPolyline(areaName + "/" + POINodeName, polylineOptions);                                /******************************END************************************/
            }
        },
        showUnmannedCarTrajectors: function (nodeName) {
            var id = nodeName.split("_")[1];
            var nodeName = "TrajectoryRoute_" + id,
                areaName = con.AreaName;
            var node = map.getSceneNode(areaName, nodeName);
            if (node) {
                node.setVisible(1);  //显示漫游轨迹
            }

            //显示无人车详情页面
            var option = {
                aniDom: "#center01_01",
                htmlDom: "#center_01",
                url: con.HtmlUrl + 'Industry/Garden/UnmannedCarDetail.html'
            }
            com.UIControlAni(option, function () {
                //require("gl_GardenBuilding").loadCompanyInfo();
            });
        },
        //画无人车行驶路线
        DrawDrivingRoute: function () {
            var UmmannedCarDrivingRoute = g_UnmannedCarData.UmmannedCarDrivingRoute;
            var areaName = con.AreaName;
            /************************无人车行驶路线*******************************/            //for (var i in UmmannedCarDrivingRoute) {
            for (var i = 0; i < UmmannedCarDrivingRoute.length; i++) {
                var data = UmmannedCarDrivingRoute[i];
                var pointsArray = [], offsetArray = [], LineName = "DrivingRoute"+i;                for (var j in data) {
                    var pos = data[j].pos;
                    pointsArray.push(Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName)));
                    offsetArray.push(0);
                    /**************************路线标注POI****************************************/
                    /* var POINodeName = "RoutePointPOI" + j;
                     var POIPosition = pos.toGlobalVec3d().toLocalPos(areaName);
                     var iconSize = Q3D.vector2(41, 45),
                         FontColor = Q3D.colourValue("#000080", 1),
                         icon = require("gl_UnmannedCar").RouterPointPOI;
                     var node = map.getSceneNode(areaName, POINodeName);
                     if (node) {
                         node.setVisible(1);
                     } else {
                         var poiOptions = {
                             Position: Q3D.vector3(POIPosition),
                             Orientation: null,
                             OrientationType: Q3D.Enums.nodeOrientationType.Self,
                             Scale: Q3D.vector3(1, 1, 1),
                             POIOptions: {
                                 FontSize: 15,
                                 FontName: "微软雅黑",
                                 FontColor: FontColor,
                                 CharScale: 1,
                                 Text: "点位" + j,
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
                         require("gl_UnmannedCar").RoutePointPOIs.push(areaName + "/" + POINodeName);
                         */
                    /*************************************END***********************************************/
                }
                //}                var nodeLine = map.getSceneNode(areaName, LineName);
                if (nodeLine) {
                    nodeLine.setVisible(1);
                } else {                    //画路线
                    var routeOptions = {
                        Material: null,
                        SpecialTransparent: true, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                        LinePoints: pointsArray, //一维数组
                        OffsetDist: offsetArray, //偏移距离，单位米，用于贝塞尔曲线的控制点计算
                        LineOptions: {
                            Subdivision: 20, //设置生成曲线细分程度
                            LineWidth: 5,
                            WrapLen: 2,
                            //以下用于动态创建的材质
                            Color: Q3D.colourValue("#0000FFF", 1), //线的颜色
                            Alpha: 1, //线的透明度
                        },
                        OnLineCreated: function () {
                            //alert("Line is created!");
                        }
                    };
                    map.createRoamRoute(areaName + "/" + LineName, routeOptions);                    require("gl_UnmannedCar").DrivingRoutes.push(areaName + "/" + LineName);
                }
            }
        },
    }
})