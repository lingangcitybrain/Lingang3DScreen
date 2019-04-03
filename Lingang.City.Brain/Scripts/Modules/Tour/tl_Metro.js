define(["config", "common", "t_LayerMenuData"], function (con, com, t_LayerMenuData) {
    /****************************地铁****************************/
    return {
        LayerType: null,//选择地铁
        POIData: null,//POI详情数据
        LastPOI_Clk: null,//鼠标选中POI

        //加载地铁Metro
        loadMetro: function () {
            this.Revert();
            this.LayerType = require("t_Main").LayerCatalog.Metro;

            require("tl_Metro").POIData = t_LayerMenuData.MetroData.Data;
                var areaName = con.AreaName;
                var icon = require("tl_Metro").LayerType.UnChooseIcon;
                var pois = [];
                for (var i = 0; i < require("tl_Metro").POIData.length; i++) {
                    var row = require("tl_Metro").POIData[i];
                    //var Coordinate = com.gcj02towgs84(parseFloat(row.lng), parseFloat(row.lat));//高德坐标转wgs84
                    var pos = row.lng + "," + row.lat + ",0";
                    var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

                    var poiName = "POITour" + require("tl_Metro").LayerType.Name + "_" + row.id;//POIIOT_01
                    var iconSize = Q3D.vector2(54, 44);

                    var zdmc = row.zdmc; //公交站名
                   
                    var poi = { POIName: poiName, Position: position, Text: zdmc, Icon: icon, IconSize: iconSize, FontColor: "#EF6464", FontSize:10 };
                var node = map.getSceneNode(areaName + "/" + poiName);
                if (node) {
                    node.setVisible(1);//显示当前父节点
                } else {
                    pois.push(poi);
                }
            }
            com.InitPois(areaName, pois);
        },
        //地铁点击事件
        loadMetroDetial: function (nodeName) {
            var areaName = con.AreaName;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var layername = this.LastPOI_Clk.split('_')[0].replace("POITour", "");
                var level = this.LayerType.Level;
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
                //Q3D.globalCamera().flyToNode(node, con.ViewOri.toVector3(), 2, function () {
                var poi = node.asPOI();

                var layername = nodeName.split('_')[0].replace("POITour", "");
                var level = this.LayerType.Level;
                var type = nodeName.split('_')[1];
                var icon = this.LayerType.List[type].ChooseIcon;

                poi.setIcon(icon);
                //});
            }
        },
        //清空地铁POI
        clearMetroPOI: function () {
            var data = this.POIData;
            var areaName = con.AreaName;
            //设置POI隐藏
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    var name = this.LayerType.Name;

                    var poiname = "POITour" + name + "_" + data[i].id;
                    var node = map.getSceneNode(areaName + "/" + poiname);
                    if (node) {
                        //map.getArea(areaName).destroySceneNode(poiname);
                        node.setVisible(0);
                    }
                }
                this.LayerType = null;
                this.POIData = null;
            }
        },
        Revert: function () {
            this.clearMetroPOI();
        }
    }
})