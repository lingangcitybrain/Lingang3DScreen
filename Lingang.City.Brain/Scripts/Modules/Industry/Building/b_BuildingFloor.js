define(["config", "common"], function (con, com) {
    /****************************楼宇****************************/
    return {
        buildingID:null,
        Revert: function () {

        },
         //加载楼栋信息
        loadBuidingDetail: function (nodename) {
            var option = {
                aniDom: "#center01_01",
                htmlDom: "#center_01",
                leftOrRight: 'right',
                url: con.HtmlUrl + 'Industry/Building/BuildingDetail.html'
            }
            com.UIControlAni(option, function () {
                //获取建筑信息
                var id = nodename.split("_")[1];
                require("b_BuildingFloor").buildingID = id;
                var data = require("gl_GardenBuilding").BuildingListData.get(id);
                if (data) {
                    $("#buildingName_detail").html(data.buildingName);
                    $("#").html();
                    $("#buildingArea_detail").html(data.buildingArea);
                    //var floors = parseInt(data.floors);
                    //var floorHTML = "";
                    //for (var i = 1; i <= floors; i++) {
                    //    floorHTML += "<option>"+i+"</option>";
                    //}
                    $("#buildingFloors_detail").html(data.floors);
                    $("#companyCount_detail").html(data.companyCount);
                    $("#occupancyRate_detail").html(data.occupancyRate);
                }
            });
            

        },
        openFloor: function (floor) {
            require("b_BuildingFloor").openFloor(4);
            var id = require("b_BuildingFloor").buildingID;
            var layerArr = require("e_LayerMenuData").FloorLayerData[id];
            if (layerArr) {
                var data = layerArr.layerName;
                for (var i = parseInt(floor); i <=data.length; i++) {
                    var lg = Q3D.layerGroup();
                    var layer = lg.getLayer(data[i]);
                    if (layer) {
                        layer.setVisible(0);
                    }
                }
                var node = map.getSceneNode("hcy_baimo/hcy_baimo_" + id + "#rooftop");//固定飞到每栋楼的指定节点位置
                if (node) {
                    //飞行位置暂定
                    var viewPos = "-92.72203063964844,46.00672149658203,93.78089904785156".toVector3(); 1
                    Q3D.globalCamera().flyToNode(node, viewPos, 1, function () { })
                }
            }
        },
    }
})