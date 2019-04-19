define(["config", "common", "g_UnmannedCarData"], function (con, com, g_UnmannedCarData) {
    /****************************无人车图层****************************/
    return {
        stationPOI: "Texture/common/bus.png",
        stationPOI_hover: "Texture/common/bus_hover.png",
        //加载无人车图层
        loadUnmannedCar: function () {
            com.LayerFlyto(22, function () {

            })

        },
        //
        Revert: function () {

        },
        //加载无人车站点poi
        loadUnmannedCarStationPOI: function () {
            var data = g_UnmannedCarData.UmmannedCarStationData;
            var areaName = con.AreaName;
            //for (var i in floorDevice) {
            for (var i = 0; i < data.length; i++) {
                    //var serverData = require("Gate").GateDeviceData.get(i);
                    var pois = [];
                    var icon = require("gl_UnmannedCar").stationPOI;
                var poiName = "UnmannedCarStation_" + data[i].id,
                        FontColor = Q3D.colourValue("#ffff00", 1);
                    
                    var node = map.getSceneNode(areaName, poiName);
                    if (node) {
                        node.setVisible(1);
                    } else {
                        var iconSize = Q3D.vector2(50, 70);

                        var pos = data[i].pos;

                        //var position = pos.toVector3d().toLocalPos(areaName);
                        var position = pos.toGlobalVec3d().toLocalPos(areaName);
                        require("gl_UnmannedCar").GateDevicePOIs.push(areaName + "/" + poiName);

                        var createOptions = {
                            Position: Q3D.vector3(position),//data[i].Position.toVector3(),
                            Orientation: null,
                            OrientationType: Q3D.Enums.nodeOrientationType.Self,
                            Scale: Q3D.vector3(1, 1, 1),
                            POIOptions: {
                                FontSize: 25,
                                FontName: "微软雅黑",
                                FontColor: FontColor,
                                CharScale: 1,
                                Text: "",
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

                        map.createPOI(areaName + "/" + poiName, createOptions);

                        //}
                    }
            }
        },
    }
})