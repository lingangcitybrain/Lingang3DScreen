define(["config", "common", "s_layerMenuData"], function (con, com, s_layerMenuData) {
    /**************************************WorkSite**************************************/
    return {
        LayerType: null,//选择传感器
        POIData: null,//POI详情数据
        LastPOI_Clk: null,//鼠标选中POI

        //加载工地POI
        loadWorkSite: function () {
            this.Revert();
            this.LayerType = require("s_Main").LayerCatalog.WorkSite;
            this.POIData = s_layerMenuData.WorkSiteData.Data;

            Q3D.globalCamera().flyTo(("395811.04410528304,286.2732696533203,-3416789.683830375").toVector3d(), ("-31.37611198425293,8.757302284240722,5.298542022705078").toVector3(), 1, null);


            var areaName = con.AreaName;
            var icon = this.LayerType.UnChooseIcon;
            var pois = [];
            for (var i = 0; i < this.POIData.length; i++) {
                var row = this.POIData[i];
                var poiName = "POISociety" + this.LayerType.Name + "_" + row.id;//POIIOT_01
                var iconSize = Q3D.vector2(41, 45);
                var pos = row.pos;
                var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

                var poi = { POIName: poiName, Position: position, Text: "", Icon: icon, IconSize: iconSize };
                pois.push(poi);
            }
            com.InitPois(areaName, pois);

        },
        //工地点击事件
        loadWorkSiteDetial: function (nodeName) {
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
        //清空工地POI
        clearWorkSitePOI: function () {
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
                }
                this.LayerType = null;
                this.POIData = null;
            }

        },

        //加载第二列的div
        loadLeftSecond: function () {
            var url = con.HtmlUrl + 'SocietyNew/Left_Second_EventWorkSite.html';
            require(['text!' + url], function (template) {
                $("#left_second_01").html(template);


            })
        },


        Revert: function () {
            this.clearWorkSitePOI();
        }
    }
})