define(["config", "common", "e_LayerMenuData", "util"], function (con, com, e_LayerMenuData, util) {
    /****************************象限图谱****************************/
    return {
        LayerType: null,//选择象限图谱
        POIData: null,//POI详情数据
        LastPOI_Clk: null,//鼠标选中POI
        //加载象限图谱图层信息
        loadAtlasChart: function () {
            com.LayerFlyto(17, function () {
                require("el_AtlasChart").loadPOI();
            })

            var url = '/LingangCityBrain/View/Industry/Estate/Bottom_AtlasDetail.html';
            require(['text!' + url], function (template) {
               
                $("#detail_01").html(template);
                $("#detail_01").show('drop', 1000);//左侧
            })
           
        },
        loadPOI: function () {
            this.LayerType = require("e_Main").LayerCatalog.Atlas;
            this.POIData = e_LayerMenuData.AtlasPOI.Data;
            var areaName = con.AreaName;
            var pois = [];
            for (var i = 0; i < require("el_AtlasChart").POIData.length; i++) {
                var row = require("el_AtlasChart").POIData[i];
                var icon = require("el_AtlasChart").LayerType.List[row.type].UnChooseIcon;
                var poiName = "POIIndustry" + require("el_AtlasChart").LayerType.List[row.type].Name + "_" + row.id;//POIIOT_01
                var iconSize = Q3D.vector2(40, 40);
                switch (row.iconsize) {
                    case 1://大
                        iconSize = Q3D.vector2(40, 40);
                        break;
                    case 2://中
                        iconSize = Q3D.vector2(25, 25);
                        break;
                    case 3://小
                        iconSize = Q3D.vector2(15, 15);
                        break;
                    default:  
                }
                
                var pos = row.lng + "," + row.lat + ",0";
                var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

                var poi = { POIName: poiName, Position: position, Text: "", Icon: icon, IconSize: iconSize};

                var node = map.getSceneNode(areaName + "/" + poiName);
                if (node) {
                    node.setVisible(1);
                } else {
                    pois.push(poi);

                }
            }
            com.InitPois(areaName, pois);
        },
        //清空POI
        clearPOI: function () {
            var data = this.POIData;
            var areaName = con.AreaName;
            //设置POI隐藏
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    var name = this.LayerType.List[data[i].type].Name;

                    var poiname = "POIIndustry" + name + "_" + data[i].id;
                    var node = map.getSceneNode(areaName + "/" + poiname);
                    if (node) {
                        node.setVisible(0);
                    }
                }
                this.LayerType = null;
                this.POIData = null;
            }
        },
        //清楚图例
        clearTuli:function()
        {
            $("#detail_01").empty();      
        },
        Revert: function () {
            this.clearPOI();
            this.clearTuli();
        }
    }
})