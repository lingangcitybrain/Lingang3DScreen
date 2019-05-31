define(["config", "common", "e_LayerMenuData", "util", "gl_GardenBuildingAjax", "pagination"], function (con, com, e_LayerMenuData, util, gl_GardenBuildingAjax, pagination) {
    /****************************楼宇****************************/
    return {
        LayerType: null,//选择楼宇
        POIData: null,//POI详情数据
        //LastPOI_Clk: null,//鼠标选中POI
        //poiListData: new util.HashMap,
        BuildingListData: new util.HashMap,

        buildingID: null,
        changeMaterialModel: [],
        changeMaterialModel_floor:[],
        //changeAlphaNode:[],
        POINodeClk: "",
        buildingPOI: "Texture/common/a4.png",//building.png",
        buildingPOI_hover: "Texture/common/a4_hover.png",
        HideLayerArr:[],
        Revert: function () {
            this.resetBuildingMaterial();
            this.hideBuilding(0);//显示所有楼栋
            this.clearPOI();
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
                var data = require("b_BuildingFloor").BuildingListData.get(id);
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
            //飞行到园区视角
            com.LayerFlyto(311, function () {

            })
            $("#center_01").html("");
            require("b_BuildingFloor").hideBuilding(0);//显示所有楼栋
            require("b_BuildingFloor").loadPOI();//显示所有楼栋POI
            require("b_BuildingFloor").resetBuildingMaterial();//还原楼宇材质
        },
        openFloor: function (floor,room) {
            require("b_BuildingFloor").resetHideLayer();
            var id = require("b_BuildingFloor").buildingID;
            var layerArr = require("e_LayerMenuData").FloorLayerData[id];
            if (layerArr) {
                var data = layerArr.layerName;
                var lg = Q3D.layerGroup();
                for (var i = parseInt(floor) ; i <= data.length; i++) {
                    //var lg = Q3D.layerGroup();
                    var layer = lg.getLayer(data[i]);
                    if (layer) {
                        layer.setVisible(0);
                        require("b_BuildingFloor").HideLayerArr.push(layer);
                    }
                }

                /*******************换楼层房间的材质***********************/
                /*****************************还原楼层房间层材质******************************/
                var modelArr = require("b_BuildingFloor").changeMaterialModel_floor;
                if (modelArr.length > 0) {
                    for (var i = 0; i < modelArr.length; i++) {
                        var model = modelArr[i].model;
                        model.setMaterial(0, modelArr[i].materialName);  //恢复原始材质
                    }
                    require("b_BuildingFloor").changeMaterialModel_floor = [];
                }
                /************************************END**********************************/
                if (room && room != 0 && room != "0") {
                    var nodeArr = lg.getLayerAllNodeNames(data[parseInt(floor) - 1]);
                    var cnt = 0;
                    for (var j = 0; j < nodeArr.length; j++) {
                        var nodeName = nodeArr[j];
                        if (nodeName.indexOf("area") > -1 && nodeName.indexOf(room) > -1) {
                            cnt=require("b_BuildingFloor").changeRoomNodeMaterial(nodeName); //替换指定房间的材质
                        }
                    }
                    if (cnt == 0) {//房间模型没找到，替换所有模型的材质
                        require("b_BuildingFloor").changeAllNodeMaterial(data[parseInt(floor) - 1]);
                    }
                } else {
                    require("b_BuildingFloor").changeAllNodeMaterial(data[parseInt(floor) - 1]);
                }
                                
                /***************************END*************************/
                var areaName = con.AreaName;
                var POIName = "POIIndustryGBuilding_" + id;
                var poiNode = map.getSceneNode(areaName, POIName);
                var a = null;
                if (poiNode == null) {//不存在poi，则取poi数据里的经纬度
                    var poiData = e_LayerMenuData.GardenPOI.Data[id];
                    if (poiData) {
                        var pos = poiData.lng + "," + poiData.lat + ",21";
                        a = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));
                    }
                } else {
                     a = poiNode.getPosition();
                }
                var pos = ((a.x + 60) + "," + (a.y - a.y / parseInt(floor) + 25) + "," + (a.z + 15)).toVector3().toGlobalPos(areaName);

                var viewPos = " -67.65904235839844,57.3547477722168,63.98405456542969".toVector3();
                Q3D.globalCamera().flyTo((pos.x + "," + pos.y + "," + pos.z).toVector3d(), viewPos, 1, function () { })
            }
        },
        changeRoomNodeMaterial: function (nodeName) {
            var node = map.getSceneNode(nodeName);
            if (node) {
                //node.setVisible(1);
                var model = node.asModel();
                var qmaterial = model.getMaterial(0);
                if (qmaterial) {
                    var materialName = qmaterial.getName();
                    require("b_BuildingFloor").changeMaterialModel_floor.push({ model: model, materialName: qmaterial.getName() });
                    model.setMaterial(0, "material/69_chengse.mtr");  //批量替换模型材质  69_chengse.mtr  hcy_area.mtr
                    //require("b_BuildingFloor").changeAlphaNode.push(model);
                    //设置材质透明度没效果
                    var MaterialCount = model.getMaterialCount();
                    for (var k = 0; k < MaterialCount; k++) {
                        var qmaterial = model.getMaterial(k);
                        if (qmaterial) {
                            qmaterial.setAlpha(0.8);
                        }
                    }
                }
                return 1;
            } else {
                return 0;
            }
        },
        changeAllNodeMaterial: function (layerName) {
            var lg = Q3D.layerGroup();
            var nodeArr = lg.getLayerAllNodeNames(layerName);
            for (var j = 0; j < nodeArr.length; j++) {
                var nodeName = nodeArr[j];
                if (nodeName.indexOf("area") > -1) {
                    var node = map.getSceneNode(nodeName);
                    if (node) {
                        //node.setVisible(1);
                        var model = node.asModel();
                        var qmaterial = model.getMaterial(0);
                        if (qmaterial) {
                            var materialName = qmaterial.getName();
                            require("b_BuildingFloor").changeMaterialModel_floor.push({ model: model, materialName: qmaterial.getName() });
                            model.setMaterial(0, "material/69_chengse.mtr");  //批量替换模型材质  69_chengse.mtr  hcy_area.mtr
                            //require("b_BuildingFloor").changeAlphaNode.push(model);
                            //设置材质透明度没效果
                            var MaterialCount = model.getMaterialCount();
                            for (var k = 0; k < MaterialCount; k++) {
                                var qmaterial = model.getMaterial(k);
                                if (qmaterial) {
                                    qmaterial.setAlpha(0.8);
                                }
                            }
                        }
                    }
                }
            }
        },
        buildingOperation: function (nodename) {            
            
            require("b_BuildingFloor").resetBuildingMaterial();
            
            var areaName = con.AreaName;
            var node = map.getSceneNode(areaName, nodename);
            if (node) {
                node.asPOI().setIcon(require("b_BuildingFloor").buildingPOI_hover);

                //围绕楼层转圈
                //var eyePos = Q3D.vector3d(Q3D.globalCamera().getAbsPos()),
                //targetPos = Q3D.vector3d(node.getAbsPos());
                //Q3D.globalCamera().startCircleFly(eyePos, targetPos, 10, -1)

                //setTimeout(function () {
                //    Q3D.globalCamera().stopCircleFly();
                //}, 3000)

            }
            require("b_BuildingFloor").POINodeClk = nodename;
            require("b_BuildingFloor").loadBuidingDetail(nodename);
            var id = nodename.split("_")[1];
            require("b_BuildingFloor").hideBuilding(id);//隐藏楼栋
            require("b_BuildingFloor").clearPOI(nodename);//隐藏楼栋POI
            /**********************测试半透明************************/
            var lg = Q3D.layerGroup();
            var layerArr = require("e_LayerMenuData").FloorLayerData[id].layerName;
            //var layerArr=["14#1F","14#2F","14#3F","14#4F","14#5F","14#rooftop"];
            for (var i = 0; i < layerArr.length; i++) 
            {
                var nodeArr = lg.getLayerAllNodeNames(layerArr[i]);
                for (var j = 0; j < nodeArr.length; j++) {
                    var node = map.getSceneNode(nodeArr[j]);
                    if (node) {
                        var nodeName = node.getName();
                        if (nodeName.indexOf("shell") > -1) {  // || nodeName.indexOf("area") > -1
                            var model = node.asModel();
                            var qmaterial = model.getMaterial(0);
                            if (qmaterial) {
                                // console.info(qmaterial.getName());
                                var materialName = qmaterial.getName();
                                require("b_BuildingFloor").changeMaterialModel.push({ model: model, materialName: qmaterial.getName() });
                                model.setMaterial(0, "material/69_lanse.mtr");  //批量替换模型材质                               
                            }
                        }
                        if (nodeName.indexOf("area") > -1) {  //房间节点设置不透明
                            //node.setVisible(0);
                            var model = node.asModel();
                            var qmaterial = model.getMaterial(0);
                            if (qmaterial) {
                                // console.info(qmaterial.getName());
                                var materialName = qmaterial.getName();
                                require("b_BuildingFloor").changeMaterialModel.push({ model: model, materialName: qmaterial.getName() });
                                model.setMaterial(0, "material/hcy_area.mtr");  //批量替换模型材质                               
                            }
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

            /*****************************还原楼层房间层材质******************************/
            var modelArr_floor = require("b_BuildingFloor").changeMaterialModel_floor;
            if (modelArr_floor.length > 0) {
                for (var i = 0; i < modelArr_floor.length; i++) {
                    var model = modelArr_floor[i].model;
                    model.setMaterial(0, modelArr_floor[i].materialName);  //恢复原始材质
                }
                require("b_BuildingFloor").changeMaterialModel_floor = [];
            }
            /************************************END**********************************/

            require("b_BuildingFloor").resetHideLayer();
            //还原POI
            if (require("b_BuildingFloor").POINodeClk != "") {
                var areaName = con.AreaName;
                var node = map.getSceneNode(areaName, require("b_BuildingFloor").POINodeClk);
                if (node) {
                    node.asPOI().setIcon(require("b_BuildingFloor").buildingPOI);
                    //node.setVisible(0);
                }
                //require("b_BuildingFloor").POINodeClk = "";
            }
        },

        /*************楼宇-start*************/

        loadBuilding: function () {
            require('mainMenu').dayNightMenuSelect(1);
            require("reset").ClearDivHtmlOnLeft();
            require("reset").ClearDivHtmlOnCenter();
            require("b_BuildingFloor").loadPOI();
            require("b_BuildingFloor").showGardenShowWindow();
            //飞行到园区视角
            com.LayerFlyto(311, function () {

            })
            //存储楼宇信息到本地
            gl_GardenBuildingAjax.getBuildingListData(function (result) {
                for (var i = 0; i < result.length; i++) {
                    require("b_BuildingFloor").BuildingListData.put(result[i].id, result[i]);
                }
            })
        },
        //加载楼宇POI
        loadPOI: function () {
            this.LayerType = require("g_Main").LayerCatalog.Building;

            require("b_BuildingFloor").POIData = e_LayerMenuData.GardenPOI.Data;


            var areaName = con.AreaName;
            var icon = require("b_BuildingFloor").LayerType.UnChooseIcon;
            var pois = [];
            //for (var i = 0; i < require("gl_GardenBuilding").POIData.length; i++) {
            //$.each(require("gl_GardenBuilding").POIData,function)
            for (var i in require("b_BuildingFloor").POIData) {
                var row = require("b_BuildingFloor").POIData[i];
                //require("gl_GardenBuilding").poiListData.put(row.id, row);

                var poiName = "POIIndustryG" + require("b_BuildingFloor").LayerType.Name + "_" + row.id;//POIIOT_01

                var iconSize = Q3D.vector2(48, 57);
                //var Coordinate = com.gcj02towgs84(row.lng, row.lat);//高德坐标转百度坐标
                //var pos = Coordinate + ",0";
                var pos = row.lng + "," + row.lat + ",21";
                var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

                var poi = {
                    POIName: poiName, Position: position, POIOptions: {
                        Text: row.name, Icon: icon, IconSize: iconSize, FontColor: Q3D.colourValue("#ffffff",1), POILayout: Q3D.Enums.poiLayOut.Center, FontSize: 10

                    }
                };
                var node = map.getSceneNode(areaName + "/" + poiName);
                if (node) {
                    node.setVisible(1);//显示当前父节点
                } else {
                    pois.push(poi);
                }
            }
            com.InitPoisN(areaName, pois);
        },
        //隐藏POI
        clearPOI: function (nodename) {
            var areaName = con.AreaName;
            if (nodename == undefined) {//type==undefined表示全部还原
                if (this.POINodeClk && this.POINodeClk != "") {
                    var lastNode = map.getSceneNode(areaName, this.POINodeClk);
                    if (lastNode) {
                        map.destroySceneNode(areaName, this.POINodeClk);
                        //lastNode.asPOI().setIcon(icon);
                        //lastNode.setVisible(0);
                    }
                }
            //    this.POINodeClk = "";
            }
            var data = this.POIData;
            //设置POI隐藏
            if (data != null) {
                for (var i in data) {
                    var name = this.LayerType.Name;

                    var poiname = "POIIndustryG" + name + "_" + data[i].id;
                    if (poiname != nodename) {  //nodename有值表示从楼宇详情来，故不隐藏当前点击的POI
                        var node = map.getSceneNode(areaName + "/" + poiname);
                        if (node) {
                            map.destroySceneNode(areaName, poiname);
                        }
                    }
                }
                this.LayerType = null;
                this.POIData = null;
            }
        },

        //加载园区展示窗口
        showGardenShowWindow: function () {
            require("b_BuildingFloor").CompanyStatisticWindow();
        },
        //入驻企业统计
        CompanyStatisticWindow: function () {
            var option = {
                aniDom: "#left01_01",
                htmlDom: "#left_first_01",
                url: con.HtmlUrl + 'Industry/Garden/CompanyStatistic.html'
            }
            com.UIControlAni(option, function () {
                require("b_BuildingFloor").loadCompanyInfo();
            });
        },
        //加载企业信息 
        loadCompanyInfo: function () {
            gl_GardenBuildingAjax.getCompanyStatisticsData(function (result) {
                var data = result[0];
                $("#companyTotal").html(data.companyCount);
                $("#totalOutputValue").html(data.outputValue);
                $("#totalPerson").html(data.servicesCount);  //不确定该字段
            })
            require("b_BuildingFloor").loadCompanyList(0);
        },
        //loadCompanyList: function (pageIndex) {
        //    var items_per_page = 25;       //每页显示的条数
        //    var edge_entries = 2;          //后面显示的页码数
        //    var display_entries = 3;

        //    $('#ul-companylist').empty();
        //    var maxLength = pageindex * items_per_page + items_per_page;
        //    var minLength = pageindex * items_per_page;

        //    gl_GardenBuildingAjax.getCompanyData(function (result) {

        //        if (result.length > 0) {
        //            for (var i = minLength; i < result.length; i++) {
        //                if (maxLength < i + 1) {
        //                    break;
        //                } else {
        //                    $('#ul-companylist').append(
        //                        '<li class="cy-ly-rr1-li ">' +
        //                            '<div class="cy-ly-rr1-lidiv clearfix ">' +
        //                                '<span class="cy-ly-rr1-num">00' + (i + 1) + '</span>' +
        //                                '<span class="cy-ly-rr1-name">' + result[i].companyName + '</span>' +
        //                                '<span class="cy-ly-rr1-date">' + result[i].preYearOutputValue + '万元</span>' +
        //                            '</div>' +
        //                        '</li>'
        //                    );
        //                }
        //            }

        //            //加载分页控件内容 
        //            if (pageindex == 0) {
        //                var optInit = com.GetOptionsFrom(require("b_BuildingFloor").loadCompanyList, items_per_page, items_per_page, display_entries, edge_entries);
        //                // Create pagination element with options from form
        //                $("#pagination-companylist").pagination(result.length, optInit);
        //            }
        //        }          

        //    })

        //},
        loadCompanyList: function (pageIndex) {
            gl_GardenBuildingAjax.getCompanyData(function (result) {
                var html = "";
                for (var i = 0; i < result.length; i++) {
                    html += ' <li class="cy-ly-rr1-li ">' +
                    '<div class="cy-ly-rr1-lidiv clearfix ">' +
                        '<span class="cy-ly-rr1-num">00' + (i + 1) + '</span>' +
                        '<span class="cy-ly-rr1-name">' + result[i].companyName + '</span>' +
                        '<span class="cy-ly-rr1-date">' + result[i].preYearOutputValue + '万元</span>' +
                    '</div>' +
                '</li>';
                }
                $("#ul-companylist").html(html);
                $('.scrolldiv').perfectScrollbar({
                    cursorwidth: 10, cursorcolor: "rgba(0, 126, 179, .6)",
                });
            })
        },
        /*************楼宇-end*************/
    }
})