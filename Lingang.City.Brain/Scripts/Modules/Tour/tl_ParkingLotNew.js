define(["config", "common", "util", "t_LayerMenuData"], function (con, com, util,t_LayerMenuData) {
    /*****************************停车场*****************************/
    return {
        LayerType: null,//选择摄像头
        POIData: null,//POI详情数据
        LastPOI_Clk: null,//鼠标选中POI

        freeParkingLotData:[],//停车场数据
        nodeFollowingPath:[],//节点跟随路径
        detailWindowId:0,//当前窗口id
        CrawPnts: [],//停车场坐标工算法判断用
        loadParkingLot: function () {
            this.Revert();

            var post_data = {
                "pageIndex": "",
                "pageSize": ""
            }
            require("t_LayerMenuAjax").getParkingLots(post_data, function (result) {
                require("tl_ParkingLot").freeParkingLotData = result;

                //加载停车场POI
                require("tl_ParkingLot").loadParkingLotPOI();

                //加载停车场范围
                require("tl_ParkingLot").loadParkingArea();
            });

            //默认视口
            com.LayerFlyto(5);            

        },
        //加载停车场点位
        loadParkingLotPOI:function()
        {
            this.LayerType = require("t_Main").LayerCatalog.ParkingLot;
            require("tl_ParkingLot").POIData = t_LayerMenuData.ParkingLot.Data;

            var areaName = con.AreaName;
            var icon = require("tl_ParkingLot").LayerType.UnChooseIcon;

            for (var i = 0; i < require("tl_ParkingLot").POIData.length; i++) {
                var row = require("tl_ParkingLot").POIData[i];
                var poiName = "POITour" + require("tl_ParkingLot").LayerType.Name + "_" + row.pid;//POIIOT_01
                var iconSize = Q3D.vector2(54, 44);
                var pos = row.pos;
                var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

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
                        UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,//CameraOrientedKeepSize , CameraOriented
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
                    OnLoaded: function() {//加载结束回调
                        //创建窗口信息显示
                        require("tl_ParkingLot").loadParkingLotDetailWindow(poiName, row.pid);
                    },
                }
                map.createPOI(areaName + "/" + poiName, options)
            }    
        },
        loadParkingLotDetailWindow: function(nodeName, pid){
            var data = null;
            require("tl_ParkingLot").freeParkingLotData.forEach(function(e){
                if(e.id == pid){
                    data = e;
                }
            });

            var url = con.HtmlUrl + 'TourNew/ParkingLotDetail.html';

            require("tl_ParkingLot").detailWindowId = require("tl_ParkingLot").detailWindowId + 1;
            var domWinName = 'detail_' + require("tl_ParkingLot").detailWindowId;            

            require(['text!' + url], function (template) {
                $("#"+domWinName).show();
                $("#"+domWinName).html(template);

                require("tl_ParkingLot").openWinDetail(domWinName, data);                

            });

            var nodePath = con.AreaName + '/' + nodeName;    
            var nodeObject = {"nodePath": nodePath, "nodeDom": domWinName};

            require("tl_ParkingLot").nodeFollowingPath.push(nodeObject);
            
            map.enableNodeFollowing(nodePath, function(node, v2i){      
                require("tl_ParkingLot").nodeFolowing(node, v2i);
            });            
        },
        nodeFolowing: function(node, v2i){
            require("tl_ParkingLot").nodeFollowingPath.forEach(function(e){
                if (node.getFullName() == e.nodePath){
                    document.getElementById(e.nodeDom).style.left = v2i.x + "px";
                    document.getElementById(e.nodeDom).style.top = v2i.y - 100 + "px"; 
                } 
            });
        },
        openWinDetail: function (domWinName, data) {
            var parkingName = '';
            switch (data.id) {
                case "P0001": //海昌
                    parkingName = '海昌公园';
                    break;
                case "P0002": //雪绒花
                    parkingName = '雪绒花路';
                    break;
                case "P0003": //临港
                    parkingName = '临港大道';
                    break;
                case "P0004": //港城新天地
                    parkingName = '港城新天地'; 
                    break;
                default:
            }

            var html = '<div class=\"poi-box poi-box1\" style=\"z-index:980\">'
                     +'<div class=\"poi-title\">'+ parkingName + '</div>'
                     + '<div class=\"poi-cont\">'
                     +    '<ul class=\"poi-ul\">'
                     +        '<li class=\"poi-li\"><span>总车位数：</span><em><i>'+data.total+'</i></em>个</li>'
                     +        '<li class=\"poi-li\"><span>空余车位：</span><em><i>'+data.freeNum+'</i></em>个</li>'
                     +    '</ul>'
                     + '</div>'
                     + '</div>';

            $("#" + domWinName).html(html);
        },
        closeParkingLotDetailWindow: function () {
            var currentWinId = require("tl_ParkingLot").detailWindowId;
            
            while (currentWinId > 0) {
                var domDetail = $("#detail_" + currentWinId);
                domDetail.empty();
                domDetail.hide();
                currentWinId = currentWinId - 1;
            }

            require("tl_ParkingLot").detailWindowId = 0;

            require("tl_ParkingLot").nodeFollowingPath.forEach(function(e) {
                map.disableNodeFollowing(e.nodePath, true);
            }); 

            require("tl_ParkingLot").nodeFollowingPath = [];
        },
        //加载停车场区域
        loadParkingArea:function()
        {
            require("tl_ParkingLot").POIData = t_LayerMenuData.ParkingLot.Data;
            for (var i = 0; i < require("tl_ParkingLot").POIData.length; i++) {
                var row = require("tl_ParkingLot").POIData[i];
                var ForAreaList = row.blockcordinate.split(';');
                if (ForAreaList != "") {

                    var AreaName = con.AreaName;

                    var lineArray = [];
                    var pos;
                    //var pnts = [];
                    var str;
                    var longitude, latitude;

                    if (require('tl_ParkingLot').CrawPnts.length > 0) {
                        require('tl_ParkingLot').CrawPnts.splice(0, require('tl_ParkingLot').CrawPnts.length);
                    }


                    for (var k = 0; k < ForAreaList.length; k++) {
                        pos = ForAreaList[k] + "," + 20;
                        pos = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(AreaName));
                        lineArray.push(pos)


                        //判断
                        str = ForAreaList[k].split(",");
                        longitude = str[0];
                        latitude = str[1];
                        require('tl_ParkingLot').CrawPnts.push([longitude, latitude]);
                    }

                    if (ForAreaList.length > 0) {
                        pos = ForAreaList[0];
                        str = pos.split(",");
                        longitude = str[0];
                        latitude = str[1];
                        require('tl_ParkingLot').CrawPnts.push([longitude, latitude]);
                    }

                    //polygon = turf.polygon([pnts], { name: 'poly1' });

                    var nodename = "crawlDecal" + require("tl_ParkingLot").LayerType.Name + "_" + row.id
                    if (map.getSceneNode(AreaName + "/" + nodename)) {
                        map.getSceneNode(AreaName + "/" + nodename).setVisible(1);//显示当前父节点
                    }
                    map.createDecal(AreaName + "/" + nodename, {
                        Points: lineArray,
                        Resolution: 1,
                        FillColor: Q3D.colourValue("#87CEEB", 0.2), //多边形填充颜色和透明值
                        LineColor: Q3D.colourValue("#00BFFF", 1.0), //多边形边框颜色和透明值
                        LineWidth: 1, //多边形线宽    
                        OnDecalCreated: function () {
                            //console.log(new Date().getTime());       
                            //console.log("ok");
                        }
                    });
                }
            }
        },
        //清空停车场POI
        clearParkingLotPOI: function () {
            var areaName = con.AreaName;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var icon = this.LayerType.UnChooseIcon;
                var lastNode = map.getSceneNode(areaName, this.LastPOI_Clk);
                if (lastNode) {
                    lastNode.asPOI().setIcon(icon);
                    //lastNode.setVisible(0);
                }
            }
            this.LastPOI_Clk = "";

            var data = this.POIData;
            //设置POI隐藏
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    var name = this.LayerType.Name;

                    var poiname = "POITour" + name + "_" + data[i].pid;
                    var node = map.getSceneNode(areaName + "/" + poiname);
                    if (node) {
                        //map.getArea(areaName).destroySceneNode(poiname);
                        map.destroySceneNode(areaName, poiname);
                    }
                    var crawlname = "crawlDecal" + name + "_" + data[i].id;
                    var node1 = map.getSceneNode(areaName + "/" + crawlname);
                    if (node1) {
                        //map.getArea(areaName).destroySceneNode(poiname);
                        map.destroySceneNode(areaName, crawlname);
                    }

                    /*详情*/
                    var fullNodePath = areaName + "/PoiParkingInfo" + data[i].pid;
                    if (map.getSceneNode(fullNodePath)) {
                        map.getArea(areaName).destroySceneNode(fullNodePath);
                    }
                }
                this.LayerType = null;
                this.POIData = null;
            }

        },
        //清空
        Revert: function () {
            this.clearParkingLotPOI();
            this.closeParkingLotDetailWindow();
        }
    }
})