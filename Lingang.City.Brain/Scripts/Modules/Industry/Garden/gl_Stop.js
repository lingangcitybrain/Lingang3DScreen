define(["config", "common", "util"], function (con, com, util) {
    /****************************停车位图层****************************/
    return {
        stopPOI: "Texture/common/stop.png",
        stopPOI_hover: "Texture/common/stop_hover.png",
        stopPOIs: [],
        parkingLotInfo:new util.HashMap,
        Revert: function () {
            var areaName = con.AreaName;
            //设置POI隐藏
            for (var i = 0; i < require("gl_Stop").stopPOIs.length; i++) {
                var node = map.getSceneNode(areaName, require("gl_Stop").stopPOIs[i]);
                if (node) {
                    node.setVisible(0);
                }
            }
        },
        //停车位图层
        loadStop: function () {

            require("g_Main").loadLeftFirst1();//加载左侧第一列第一个div
            require("g_Main").loadLeftFirst2();//

            require("g_Main").loadLeftSecond1();//加载左侧第二列第一个div
            require("g_Main").loadLeftSecond2();//
            require("g_Main").loadLeftSecond3();//
            com.LayerFlyto(21);
            require("reset").ClearDivHtmlOnCenter();
            require("gl_Stop").loadParkingInfo();
        },
        loadParkingInfo: function () {
            var time = con.getNowFormatDateYYMMDDHHMMSS();
            require("gl_GardenBuildingAjax").getParkingInfo(time, function (data) {
                require("gl_Stop").parkingLotInfo.put(data.appid,data);
                var areaName = con.AreaName,
                    poiName = "parkinglotPOI_" + data.appid;//+data.
                var node = map.getSceneNode(areaName, poiName);
                if (node) {
                    node.setVisible(1);
                }
                var parkingLotPOS = Q3D.vector3((data.longitude + "," + data.altitude + ",0").toGlobalVec3d().toLocalPos(areaName));
                require("gl_Stop").stopPOIs.push(poiName);
                var createOptions = {
                    Position: parkingLotPOS,
                    Orientation: null,
                    OrientationType: Q3D.Enums.nodeOrientationType.Self,
                    Scale: Q3D.vector3(1, 1, 1),
                    POIOptions: {
                        FontSize: 14,
                        FontName: "微软雅黑",
                        FontColor: Q3D.colourValue("#FF0000", 1),
                        CharScale: 1,
                        Text: "",//data.name,
                        Icon: require("gl_Stop").stopPOI,
                        IconSize: Q3D.vector2(40, 32),
                        POILayout: Q3D.Enums.poiLayOut.Bottom,
                        UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
                        IconAlphaEnabled: true,
                        FontOutLine: 2, //同描边有关
                        FontEdgeColor: Q3D.colourValue("#ffffff", 1),
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
                    
                };

                map.createPOI(areaName + "/" + poiName, createOptions);
                
            })
        },
        showParkingLotDetail: function (nodename) {
            var areaName = con.AreaName;
            var node = map.getSceneNode(areaName + "/" + nodename);
                        if (node) {
                            Q3D.globalCamera().flyToAxisView(node,10,2);
                        }
            var appid = nodename.split("_")[1];
            //var data = require("gl_Stop").parkingLotInfo.get(id);
            //显示无人车详情页面
            var option = {
                aniDom: "#center01_01",
                htmlDom: "#center_01",
                url: con.HtmlUrl + 'Industry/Garden/ParkingLotDetail.html'
            }
            com.UIControlAni(option, function () {
                var data = require("gl_Stop").parkingLotInfo.get(appid);
                if (data) {                   
                    $("#placeName").html(data.name);
                    $("#TotalParkingLot").html(data.total);
                    $("#EmptyParkingLot").html(parseInt(data.total) - parseInt(data.occupied));
                }
            });
        },
    }
})