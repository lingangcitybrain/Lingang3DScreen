define(["config", "common", "util", "t_LayerMenuData"], function (con, com, util,t_LayerMenuData) {
    /*****************************停车场*****************************/
    return {
        LayerType: null,//选择摄像头
        POIData: null,//POI详情数据
        LastPOI_Clk: null,//鼠标选中POI
        CurrentParkingLot: new util.HashMap,
        ParkingInter:null,
        //加载停车场信息
        CrawPnts: [],//停车场坐标工算法判断用
        loadParkingLot: function () {
            this.Revert();

            //
            require("tl_ParkingLot").loadCurrentParkingLot();

            require("tl_StreamCalculate").ParkingInter = setInterval(function () {
                require("tl_ParkingLot").loadCurrentParkingLot();
            }, 30000);


            //默认视口
            com.LayerFlyto(5)

            
            //加载停车场POI
            require("tl_ParkingLot").loadParkingLotPOI();
    
            //加载停车场范围
            require("tl_ParkingLot").loadParkingArea();
        },
        //获取空闲停车位
        loadCurrentParkingLot:function()
        {
            var post_data = { "pageIndex": "", "pageSize": "" }
            require("t_LayerMenuAjax").getParkingLots(post_data, function (result) {
                
                if(result!=null)
                {
                    for(var i =0;i<result.length;i++)
                    {
                        var data = result[i];
                        var pid     = data.id;
                        var freeNum = data.freeNum;

                        //缓存空余车位数
                        require("tl_ParkingLot").CurrentParkingLot.put(pid, data)

                        var poiName = "PoiParkingInfo" + pid;
                        var node    = map.getSceneNode(con.AreaName, poiName)
                        if (node) {
                            var poinode = node.asPOI();
                            poinode.setText(freeNum);
                        }
                    }
                }
            })        
        },
        //加载停车场点位
        loadParkingLotPOI:function()
        {
            this.LayerType = require("t_Main").LayerCatalog.ParkingLot;
            require("tl_ParkingLot").POIData = t_LayerMenuData.ParkingLot.Data;
            //this.POIData = s_layerMenuData.CameraData.cameraBaseInfos;

            var areaName = con.AreaName;
            var icon = require("tl_ParkingLot").LayerType.UnChooseIcon;
            var pois = [];
            for (var i = 0; i < require("tl_ParkingLot").POIData.length; i++) {
                var row = require("tl_ParkingLot").POIData[i];
                var poiName = "POITour" + require("tl_ParkingLot").LayerType.Name + "_" + row.pid;//POIIOT_01
                var iconSize = Q3D.vector2(54, 44);

                var lotnum = row.pos;
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
                        require("tl_ParkingLot").loadParkingLotDetail(areaName, poiName, "Texture/Common/stop_" + row.id + ".png", row.pid, lotnum);
                    },
                }
                map.createPOI(areaName + "/" + poiName, options)
            }    
        },
        //加载无人机库详情
        loadParkingLotDetail: function (AreaName, parentName, icon, id, lotnum) {
            //获取空余停车位
            var data          = this.CurrentParkingLot.get(id)
            var parkingNumber = lotnum;
            if (data != null) {parkingNumber = data.freeNum}


            var pos = Q3D.vector3(170, -90, 0);
            switch (id) {
                case "P0001"://海昌
                    pos = Q3D.vector3(350, -160, 0);
                    break;
                case "P0002"://雪绒花
                    pos = Q3D.vector3(350, -140, 0);
                    break;
                case "P0003"://临港
                    pos = Q3D.vector3(420, -170, 0);
                    break;
                case "P0004"://港城新天地
                    pos = Q3D.vector3(170, -90, 0);
                    break;
                default:
            }


            var iconSize = Q3D.vector2(367, 222);
            var createOptions = {
                Position: pos,
                Orientation: null,
                OrientationType: Q3D.Enums.nodeOrientationType.Self,
                Scale: Q3D.vector3(0.5, 0.5, 0.5),
                POIOptions: {
                    FontSize: 22,
                    FontName: "微软雅黑",
                    FontColor: Q3D.colourValue("#F8D906", 1),//封装ColourValue对象
                    CharScale: 1,
                    Text: parkingNumber,
                    Icon: icon,
                    IconSize: iconSize,
                    //POILayout: Q3D.Enums.poiLayOut.Bottom,
                    POILayout: Q3D.Enums.poiLayOut.BottomCustom,
                    POILayoutCustom: 0.6,
                    UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
                    IconAlphaEnabled: true,
                    Location: Q3D.Enums.poiImagePositionType.POI_LOCATE_BOTTOM,
                    IconLabelMargin: Q3D.vector2(0, -170),
                    SpecialTransparent: true,
                    AlwaysOnScreen: true,
                    OnLoaded: function () {
                    },
                }
            };
            var poiName = "PoiParkingInfo" + id;
            var node = map.getSceneNode(AreaName, poiName)
            if (node) { map.destroySceneNode(AreaName, poiName) }
            map.createPOI(AreaName + "/" + parentName + "/" + poiName, createOptions);
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
                        pos = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(AreaName))
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
        //停车场点击事件
        loadParkingLotDetial: function (nodeName) {
            /*******************选中POI-start*******************/
            var areaName = con.AreaName;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var layername = this.LastPOI_Clk.split('_')[0].replace("POITour", "");
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

                var layername = nodeName.split('_')[0].replace("POITour", "");
                var level = this.LayerType.Level;
                var icon = this.LayerType.ChooseIcon;
                poi.setIcon(icon);
            }
            /*******************选中POI-end*******************/
        },
        //清空停车场POI
        clearParkingLotPOI: function () {
            var areaName = con.AreaName;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var layername = this.LastPOI_Clk.split('_')[0].replace("POITour", "");
                var level = this.LayerType.Level;
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
                        map.destroySceneNode(areaName, poiname)
                    }
                    var crawlname = "crawlDecal" + name + "_" + data[i].id;
                    var node = map.getSceneNode(areaName + "/" + crawlname);
                    if (node) {
                        //map.getArea(areaName).destroySceneNode(poiname);
                        map.destroySceneNode(areaName, crawlname)
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
        //清除定时器 停车场空余车辆数
        clearParkingInter:function()
        {
            if (require("tl_StreamCalculate").ParkingInter != null){
                window.clearInterval(require("tl_StreamCalculate").ParkingInter)
            }
        },
        //清空
        Revert: function () {
            this.clearParkingLotPOI();
            //this.closeParkingLotDetial();

            this.clearParkingInter();
        }
    }
})