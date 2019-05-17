define(["config", "common"], function (con, com) {
    /****************************楼宇****************************/
    return {
        buildingID: null,
        changeMaterialModel: [],
        POINodeClk: "",
        buildingPOI: "Texture/common/building.png",
        buildingPOI_hover: "Texture/common/building_hover.png",
        HideLayerArr:[],
        Revert: function () {
            this.resetBuildingMaterial();
            this.hideBuilding(0);//显示所有楼栋
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
                    var floors = parseInt(data.floors);
                    var floorHTML = "";
                    for (var i = 1; i <= floors; i++) {
                        floorHTML += '<li class="loudong-floor" value="'+i+'"><span class="testAerial">'+i+'</span>楼</li>';
                    }
                    $("#loudong-ul").html(floorHTML);
                    $("#buildingFloors_detail").html(data.floors);
                    $("#companyCount_detail").html(data.companyCount);
                    $("#occupancyRate_detail").html(data.occupancyRate);

                    $("#loudong-ul li").click(function (e) {
                        $(this).addClass("active").siblings().removeClass("active");
                        var floor = $(this).attr("value");
                        require("g_Home").openFloor(floor);
                        //require("b_BuildingFloor").openFloor(floor);
                    })
                }
            });
            

        },
        closeBuidingDetail: function () {
            $("#center_01").html("");
            require("b_BuildingFloor").hideBuilding(0);//显示所有楼栋
            require("gl_GardenBuilding").loadPOI();//显示所有楼栋POI
        },
        openFloor: function (floor) {
            require("b_BuildingFloor").resetHideLayer();
            var id = require("b_BuildingFloor").buildingID;
            var layerArr = require("e_LayerMenuData").FloorLayerData[id];
            if (layerArr) {
                var data = layerArr.layerName;
                for (var i = parseInt(floor); i <=data.length; i++) {
                    var lg = Q3D.layerGroup();
                    var layer = lg.getLayer(data[i]);
                    if (layer) {
                        layer.setVisible(0);
                        require("b_BuildingFloor").HideLayerArr.push(layer);
                    }
                }
                var node = map.getSceneNode("hcy_baimo/hcy_baimo_" + id + "#rooftop");//固定飞到每栋楼的指定节点位置
                if (node) {
                    //飞行位置暂定
                    var viewPos = " -67.65904235839844,57.3547477722168,63.98405456542969".toVector3(); 1
                    Q3D.globalCamera().flyToNode(node, viewPos, 1, function () { })
                }
            }
        },
        buildingOperation: function (nodename) {            
            
            require("b_BuildingFloor").resetBuildingMaterial();
            
            var areaName = con.AreaName;
            var node = map.getSceneNode(areaName, nodename);
            if (node) {
                node.asPOI().setIcon(require("b_BuildingFloor").buildingPOI_hover);
            }
            require("b_BuildingFloor").POINodeClk = nodename;
            require("b_BuildingFloor").loadBuidingDetail(nodename);
            var id = nodename.split("_")[1];
            require("b_BuildingFloor").hideBuilding(id);//隐藏楼栋
            require("gl_GardenBuilding").clearPOI(nodename);//隐藏楼栋POI
            /**********************测试半透明************************/
            var lg = Q3D.layerGroup();
            var layerArr = require("e_LayerMenuData").FloorLayerData[id].layerName;
            //var layerArr=["14#1F","14#2F","14#3F","14#4F","14#5F","14#rooftop"];
            for (var i = 0; i < layerArr.length; i++) {
                var nodeArr = lg.getLayerAllNodeNames(layerArr[i]);
                for (var j = 0; j < nodeArr.length; j++) {
                    var node = map.getSceneNode(nodeArr[j]);
                    if (node) {
                        var nodeName = node.getName();
                        if (nodeName.indexOf("shell") > -1 || nodeName.indexOf("area") > -1) {
                            var model = node.asModel();
                            var qmaterial = model.getMaterial(0);
                            // console.info(qmaterial.getName());
                            var materialName = qmaterial.getName();
                            require("b_BuildingFloor").changeMaterialModel.push({ model: model,materialName: qmaterial.getName() });
                            model.setMaterial(0, "material/69_lanse.mtr");  //批量替换模型材质
                            //设置材质透明度没效果
                            //var MaterialCount=model.getMaterialCount();
                            //for(var k=0;k<MaterialCount;k++){
                            //var qmaterial = model.getMaterial(k);
                            //    qmaterial.setAlpha(0.5);
                            //}	
                        }
                    }
                }
            }
            /****************************************************/
        },
        //隐藏楼栋
        hideBuilding: function (id) {
            var buildingData = require("e_LayerMenuData").FloorLayerData;
            $.each(buildingData, function (i, val) {
                if (id != i && id !=0 ) {
                    for (var j = 0; j < val.layerName.length; j++) {
                        var layer = Q3D.layerGroup().getLayer(val.layerName[j]);
                        if (layer) {
                            layer.setVisible(0);
                        }
                    }                   
                } else {
                    for (var j = 0; j < val.layerName.length; j++) {
                        var layer = Q3D.layerGroup().getLayer(val.layerName[j]);
                        if (layer) {
                            layer.setVisible(1);
                        }
                    }
                }
            })
        },
        //还原隐藏的楼层
        resetHideLayer: function () {
            var HideLayerArr = require("b_BuildingFloor").HideLayerArr;
            if (HideLayerArr.length > 0) {
                for (var i = 0; i < HideLayerArr.length; i++) {
                    //var lg = Q3D.layerGroup();
                    var layer = HideLayerArr[i];
                    //if (layer) {
                        layer.setVisible(1);
                    //}
                }
                require("b_BuildingFloor").HideLayerArr = [];
            }
        },
        //还原建筑原来材质
        resetBuildingMaterial: function () {
            var modelArr = require("b_BuildingFloor").changeMaterialModel;
            if (modelArr.length > 0) {
                for (var i = 0; i < modelArr.length; i++) {
                    var model = modelArr[i].model;
                    model.setMaterial(0, modelArr[i].materialName);  //恢复原始材质
                }
                require("b_BuildingFloor").changeMaterialModel = [];
            }
            require("b_BuildingFloor").resetHideLayer();
            //还原POI
            if (require("b_BuildingFloor").POINodeClk != "") {
                var areaName = con.AreaName;
                var node = map.getSceneNode(areaName, require("b_BuildingFloor").POINodeClk);
                if (node) {
                    node.asPOI().setIcon(require("b_BuildingFloor").buildingPOI);
                }
            }
        },
    }
})