define(["config", "common", "s_layerMenuData"], function (con, com, s_layerMenuData) {
    /**************************************村居工作站**************************************/
    return {
        LayerType: null,//选择传感器
        POIData: null,//POI详情数据
        LastPOI_Clk: null,//鼠标选中POI

        //加载村居工作站POI
        loadWorkStation: function () {
            this.Revert();
            this.LayerType = require("s_Main").LayerCatalog.WorkStation;
            this.POIData = s_layerMenuData.WorkStationData;

            //Q3D.globalCamera().flyTo(("395687.1677625096,257.72499084472656,-3416907.1926804725").toVector3d(), ("-36.82597732543945,-2.9202616214752197,-2.19104266166687").toVector3(), 1, null);
             com.LayerFlyto(13)

            var areaName = con.AreaName;
            var icon = this.LayerType.UnChooseIcon;
            var iconSize = Q3D.vector2(41, 45);
          
            for (var i = 0; i < this.POIData.length; i++) {
                var row = this.POIData[i];
                var pos = row.lat + "," + row.lng + ",0";
                var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));
                var poiName = "POISociety" + this.LayerType.Name + "_" + row.id;//POIIOT_01
                //创建POI
                var options = {
                    Position: position,//封装Vector3对象
                    Orientation: null,//封装Vector3对象
                    OrientationType: Q3D.Enums.nodeOrientationType.Self,
                    Scale: Q3D.vector3(1, 1, 1),//封装Vector3对象
                    POIOptions: {
                        FontSize: 14,
                        FontName: "微软雅黑",
                        FontColor: Q3D.colourValue("#00caca", 1),//封装ColourValue对象
                        CharScale: 1.0,
                        Text: "",
                        Icon: icon,
                        IconSize: iconSize,//封装Vector2对象
                        POILayout: Q3D.Enums.poiLayOut.Bottom,
                        POILayoutCustom: null,	//支持负数，取值0相当于LeftTop，1.0相当于LeftBottom，0.5相当于Left；只对POILayout为LeftCustom、TopCustom、RightCustom、BottomCustom时有效
                        UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
                        IconAlphaEnabled: true,
                        FontOutLine: 0, //同描边有关
                        FontEdgeColor: Q3D.colourValue("#000000", 1),//封装ColourValue对象
                        AlphaTestRef: null,
                        Location: Q3D.Enums.poiImagePositionType.POI_LOCATE_BOTTOM,
                        LocationOffset: null, //当Location为POI_LOCATE_CUSTOM起作用，封装Vector2对象
                        BackFrameBorderSize: null, //同边框有关
                        BackBorderColor: null,//封装ColourValue对象
                        BackFillColor: null,//封装ColourValue对象
                        LabelMargin: null,//封装Vector2对象
                        IconLabelMargin: null,//封装Vector2对象，左右布局X分量有效，上下布局的Y分量有效
                        SpecialTransparent: true,
                        AlwaysOnScreen: true,
                        AbsPriority: null,
                        RelPriority: null,
                    },
                    OnLoaded: function () {//加载结束回调
                        //创建子POI显示
                        require("sl_WorkStation").loadWorkStationPOIDetial(areaName, poiName, "Texture/Common/cunju_" + row.id + ".png", row.id);
                    },
                }
                map.createPOI(areaName + "/" + poiName, options)
            }
            //var pois = [];
            //for (var i = 0; i < this.POIData.length; i++) {
            //    var row = this.POIData[i];
            //    var poiName = "POISociety" + this.LayerType.Name + "_" + row.id;//POIIOT_01
            //    var iconSize = Q3D.vector2(41, 45);
            //    var pos = row.lat + "," + row.lng + ",0";
            //    var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

            //    var poi = { POIName: poiName, Position: position, Text: "", Icon: icon, IconSize: iconSize };
            //    pois.push(poi);
            //}
            //com.InitPois(areaName, pois);

        },
        loadWorkStationPOIDetial: function (AreaName, parentName, icon, id) {
            var pos = Q3D.vector3(400, 120, 0);
            switch (id) {
                case 1://临港家园社区居委会
                    pos = Q3D.vector3(0, -20, 130);
                    break;
                case 2://东岸涟城居委会
                    pos = Q3D.vector3(0, -20, 175);
                    break;
                case 3://滴水湖馨苑居委会
                    pos = Q3D.vector3(0, 0, 275);
                    break;
                case 4://宜浩佳园第一居委会
                    pos = Q3D.vector3(0, 0, 350);
                    break;
                case 5://宜浩佳园第二居委会
                    pos = Q3D.vector3(0, 100, 0);
                    break;
                default:
            }
            var iconSize = Q3D.vector2(388, 217);
            var createOptions = {
                Position: pos,
                Orientation: null,
                OrientationType: Q3D.Enums.nodeOrientationType.Self,
                Scale: Q3D.vector3(0.5, 0.5, 0.5),
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
            var poiName = "PoiWorkStationInfo" + id;
            var node = map.getSceneNode(AreaName, poiName)
            if (node) { map.destroySceneNode(AreaName, poiName) }
            map.createPOI(AreaName + "/" + parentName + "/" + poiName, createOptions);
        },
        //村居工作站点击事件
        loadWorkStationDetial: function (nodeName) {
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
        },
        //清空村居工作站POI
        clearWorkStationPOI: function () {
            var data = this.POIData;
            var areaName = con.AreaName;
            //设置POI隐藏
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    var name = this.LayerType.Name;

                    var poiname = "POISociety" + name + "_" + data[i].id;
                    var node = map.getSceneNode(areaName + "/" + poiname);
                    if (node) {
                        map.getArea(areaName).destroySceneNode(poiname);
                    }

                    /*详情*/
                    var fullNodePath = areaName + "/PoiWorkStationInfo" + data[i].id;
                    if (map.getSceneNode(fullNodePath)) {
                        map.getArea(areaName).destroySceneNode(fullNodePath);
                    }
                }
                this.LayerType = null;
                this.POIData = null;
            }

        },

        //加载第二列的div
        loadLeftSecond: function () {
            var url = con.HtmlUrl + 'SocietyNew/Left_Second_EventWorkStation.html';
            require(['text!' + url], function (template) {
                $("#left_second_01").html(template);

                require("sl_IOT").loadSocietyCarchart();
            })
        },

        Revert: function () {
            this.clearWorkStationPOI();
        }
    }
})