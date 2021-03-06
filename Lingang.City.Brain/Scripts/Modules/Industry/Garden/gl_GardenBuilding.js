﻿define(["config", "common", "e_LayerMenuData", "util", "gl_GardenBuildingAjax"], function (con, com, e_LayerMenuData, util,gl_GardenBuildingAjax) {
    /****************************园区建筑图层****************************/
    return {
        POIData: null,//POI详情数据
        LastPOI_Clk: null,//鼠标选中POI
        GardenLayerType: null,//园区POI属性
        GardenPOIData: null,//园区POI详情数据
        pieNode:[],
        nodeFollowingPath:[],//节点跟随路径
        detailWindowId:0,//当前窗口id
        
        //加载园区的建筑信息，在建筑上标注楼号POI
        loadGardenBuilding:function()
        {
            require("gl_GardenBuilding").loadGardenPOI();
            
        
        },

        /*****************************************/

        /*************园区图层-start*************/
        //加载园区POI
        loadGardenPOI:function(){
            this.GardenLayerType = require("g_Main").LayerCatalog.Garden;
            this.drawPieArea();
            require("gl_GardenBuilding").GardenPOIData = e_LayerMenuData.GardenList.Data;
            //gl_GardenBuildingAjax.getGardenInfo(function (result) { 
            var areaName = con.AreaName;
            var icon = require("gl_GardenBuilding").GardenLayerType.UnChooseIcon;
            var pois = [];
            for (var i = 0; i < require("gl_GardenBuilding").GardenPOIData.length; i++) {
                var row = require("gl_GardenBuilding").GardenPOIData[i];               
                var poiName = "POIIndustryG" + require("gl_GardenBuilding").GardenLayerType.Name + "_" + row.id;//POIIOT_01
                var iconSize = Q3D.vector2(72, 76);
                var pos = row.lng + "," + row.lat + ",21";
                var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));
                var edetailimg = row.edetailimg;

                var poi = { POIName: poiName, Position: position, Text: row.name, Icon: icon, IconSize: iconSize, FontColor: "#00ff00" };
                var node = map.getSceneNode(areaName + "/" + poiName);
                if (node) {map.destroySceneNode(areaName + "/" + poiName);} 

                //
                var options = {
                        Position: position,//封装Vector3对象
                        Orientation: null,//封装Vector3对象
                        OrientationType: Q3D.Enums.nodeOrientationType.Self,
                        Scale: null,//封装Vector3对象
                        POIOptions: {
                            FontSize: 14,
                            FontName: "微软雅黑",
                            FontColor: Q3D.colourValue("#00ff00", 1),//封装ColourValue对象
                            CharScale: 1.0,
                            Text: row.name,
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
                            require("gl_GardenBuilding").loadGardeninfo(areaName, poiName, edetailimg, row.id);
                        },
                    }
                map.createPOI(areaName + "/" + poiName, options)
            }
            //})
        },
        drawPieArea: function () {
            gl_GardenBuildingAjax.getGardenInfo(function (result) { 
                var areaName = con.AreaName;
                var icon = require("gl_GardenBuilding").GardenLayerType.UnChooseIcon;
                var pois = [];
                for (var i = 0; i < result.length; i++) {
                    var row = result[i];
                    var nodename = "girdarea" + i;
                    var node = map.getSceneNode(con.AreaName + "/" + nodename);
                    if (node) {
                        node.setVisible(1);
                    }
                    else {
                        var pointsArr = [], pointsData = row.points.split(",");
                        for (var j = 0; j < pointsData.length; j++) {
                            var point = pointsData[j].split(" ");
                            //var aa = point[0] + "," + point[1] + ",0";
                            //pointsArr.push(Q3D.vector3(aa.toGlobalVec3d().toLocalPos(areaName)));
                            var Coordinate = com.gcj02towgs84(parseFloat(point[0]), parseFloat(point[1]));//高德坐标转wgs84
                var pos = Coordinate + ",0";
                var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));
                pointsArr.push(position);
                            
                        }
                        //画多边形
                        map.createPrism(areaName + "/" + nodename, {
                            Material: null,
                            SpecialTransparent: false, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                            Points: pointsArr,//注意要剔除收尾相等的点
                            Color: Q3D.colourValue("#0b2d69", 1),
                            Alpha: 0.1, //填充透明度
                            //Direction: 1, //默认逆时针方向
                            Height:5,
                            OnPolygonCreated: null
                        });
                        require("gl_GardenBuilding").pieNode.push(areaName + "/" + nodename);
                    }
                }
                })
        },
        //加载园区详情信息
        loadGardeninfo: function (AreaName, parentName, icon, id)
        {
            // var iconSize = Q3D.vector2(404, 250);
            // var createOptions = {
            //     Position: Q3D.vector3(230, -30, 0),
            //     Orientation: null,
            //     OrientationType: Q3D.Enums.nodeOrientationType.Self,
            //     Scale: Q3D.vector3(0.5, 0.5, 0.5),
            //     POIOptions: {
            //         CharScale: 1,
            //         Text: "",
            //         Icon: icon,
            //         IconSize: iconSize,
            //         POILayout: Q3D.Enums.poiLayOut.Bottom,
            //         UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
            //         IconAlphaEnabled: true,
            //         Location: Q3D.Enums.poiImagePositionType.POI_LOCATE_BOTTOM,
            //         SpecialTransparent: true,
            //         AlwaysOnScreen: true,
            //         OnLoaded: function () {
            //         },
            //     }
            // };
            // var poiName = "PoiGardenInfo" + id;
            // var node = map.getSceneNode(AreaName, poiName)
            // if (node) {map.destroySceneNode(AreaName,poiName);} 

            // map.createPOI(AreaName + "/" + parentName + "/" + poiName, createOptions);       
            
            var url = con.HtmlUrl + 'Industry/Garden/ParkDetail.html';

            require("gl_GardenBuilding").detailWindowId = 1;
            var domWinName = 'detail_' + require("gl_GardenBuilding").detailWindowId;            

            require(['text!' + url], function (template) {
                $("#"+domWinName).show();
                $("#"+domWinName).html(template);             

            });

            var nodePath = AreaName + '/' + parentName;    
            var nodeObject = {"nodePath": nodePath, "nodeDom": domWinName};

            require("gl_GardenBuilding").nodeFollowingPath.push(nodeObject);
            
            map.enableNodeFollowing(nodePath, function(node, v2i){      
                require("gl_GardenBuilding").nodeFolowing(node, v2i);
            }); 
        },
        nodeFolowing: function(node, v2i){
            require("gl_GardenBuilding").nodeFollowingPath.forEach(function(e){
                if (node.getFullName() == e.nodePath){
                    document.getElementById(e.nodeDom).style.left = v2i.x + "px";
                    document.getElementById(e.nodeDom).style.top = v2i.y - 100 + "px"; 
                } 
            });
        },
        closeGardenDetailWindow: function () {
            var currentWinId = require("gl_GardenBuilding").detailWindowId;
            
            while (currentWinId > 0) {
                var domDetail = $("#detail_" + currentWinId);
                domDetail.empty();
                domDetail.hide();
                currentWinId = currentWinId - 1;
            }

            require("gl_GardenBuilding").detailWindowId = 0;

            require("gl_GardenBuilding").nodeFollowingPath.forEach(function(e) {
                map.disableNodeFollowing(e.nodePath, true);
            }); 

            require("gl_GardenBuilding").nodeFollowingPath = [];
        },
        //隐藏POI
        clearGardenPOI: function () {
            var areaName = con.AreaName;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var layername = this.LastPOI_Clk.split('_')[0].replace("POIIndustryG", "");
                var level = this.GardenLayerType.Level;
                var icon = this.GardenLayerType.UnChooseIcon;
                var lastNode = map.getSceneNode(areaName, this.LastPOI_Clk);
                if (lastNode) {
                    lastNode.asPOI().setIcon(icon);
                    //lastNode.setVisible(0);
                }
            }
            this.LastPOI_Clk = "";

            var data = this.GardenPOIData;
            //设置POI隐藏
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    var name = this.GardenLayerType.Name;

                    var poiname = "POIIndustryG" + name + "_" + data[i].id;
                    var node = map.getSceneNode(areaName + "/" + poiname);
                    if (node) {
                        //map.getArea(areaName).destroySceneNode(poiname);
                        node.setVisible(0);
                    }
                }
                this.GardenLayerType = null;
                this.GardenPOIData = null;
            }


            //隐藏园区饼
            if (require("gl_GardenBuilding").pieNode.length > 0) {
                for (var i = 0; i < require("gl_GardenBuilding").pieNode.length; i++) {
                    var node = map.getSceneNode(require("gl_GardenBuilding").pieNode[i]);
                    if (node) {
                        node.setVisible(0);
                    }
                }
            }
        },
        loadGardenDetial:function(nodename){
            this.clearGardenPOI();//隐藏园区POI
            //进入龙头企业视角
            require("gl_TopCompany").loadTopCompanyPOI();
            com.LayerFlyto(311, function () {
                

            })

            //var data = require("dataCache").defaultLayerView.get(311);
            //if (data != null) {
            //    var angle = data.angle;
            //    var xyz = data.xyz;

            //    try {

            //        Q3D.globalCamera().flyTo((xyz).toVector3d(), (angle).toVector3(), 1, function () {
            //            require("gl_TopCompany").loadTopCompanyPOI();
            //        });

            //    } catch (e) {

            //    }
            //}
        },

        //清除园区详情POI
        clearGardenInfo: function () {
            var POIData = e_LayerMenuData.GardenList.Data;
            if (POIData) {
                for (var i = 0; i < POIData.length; i++) {
                    var row = POIData[i];
                    var nodename = "PoiGardenInfo" + row.id;
                    var node = map.getSceneNode(con.AreaName, nodename)
                    if (node) {
                        map.destroySceneNode(con.AreaName, nodename);
                    }
                }
            }
        },
        /*************园区图层-end*************/




        Revert: function () {
            this.clearGardenPOI();
            //this.clearPOI();
            this.clearGardenInfo();
            this.closeGardenDetailWindow();
        }
    }
})
