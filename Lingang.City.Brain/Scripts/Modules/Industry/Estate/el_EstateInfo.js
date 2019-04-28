define(["config", "common", "e_LayerMenuData", "util"], function (con, com, e_LayerMenuData, util) {
    /****************************产业信息图层****************************/
    return {
        areaListData: null,
        LayerType: null,
        LastPOI_Clk:null,
        poiListData: new util.HashMap,
        farDist: null,//远裁面
        nearDist: null,//近裁面
        //加载产业图层信息
        loadEstateInfo:function()
        {
            this.setEstateArea(1);//显示产业区块
            require("el_EstateInfo").loadEstatePOI();//加载POI
            com.LayerFlyto(16, function () {
                
            })
        },
        //加载POI
        loadEstatePOI: function () {
            this.LayerType = require("e_Main").LayerCatalog.Estate;

            require("el_EstateInfo").POIData = e_LayerMenuData.estatePOI.Data;


            var areaName = con.AreaName;
            var icon = require("el_EstateInfo").LayerType.UnChooseIcon;
            var pois = [];
            for (var i = 0; i < require("el_EstateInfo").POIData.length; i++) {
                var row = require("el_EstateInfo").POIData[i];
                var edetailimg = row.edetailimg;
                var poiName  = "POIIndustry" + require("el_EstateInfo").LayerType.Name + "_" + row.id;//POIIOT_01
                var iconSize = Q3D.vector2(150, 150);
                var pos      = row.lng + "," + row.lat + ",0";
                var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));
                

                var node = map.getSceneNode(areaName + "/" + poiName);
                if (node) {map.destroySceneNode(areaName, poiName)} 

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
                        Text: row.name,
                        Icon: icon,
                        IconSize: iconSize,//封装Vector2对象
                        POILayout: Q3D.Enums.poiLayOut.Bottom,
                        POILayoutCustom: null,	//支持负数，取值0相当于LeftTop，1.0相当于LeftBottom，0.5相当于Left；只对POILayout为LeftCustom、TopCustom、RightCustom、BottomCustom时有效
                        UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
                        IconAlphaEnabled: true,
                        FontOutLine: 0, //同描边有关
                        FontEdgeColor:Q3D.colourValue("#000000", 1),//封装ColourValue对象
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
                        require("el_EstateInfo").loadEstateDetailNew(areaName, poiName, edetailimg,row.id,row.v3pos);
                    }, 
                }
                map.createPOI(areaName + "/" + poiName, options)
            }
        },
        //加载产业详情
        loadEstateDetailNew: function (AreaName, parentName, icon, id, v3pos)
        {
         var pos = Q3D.vector3(2000, -100, 0);
            if (v3pos != ""){
                try {
                    var str = v3pos.split(",")
                    pos = Q3D.vector3(parseInt(str[0]), parseInt(str[1]), parseInt(str[2]));
                } catch (e)
                { }
            }


            var iconSize = Q3D.vector2(420, 248);
            var createOptions = {
                Position:pos,
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
            var poiName = "PoiEstateInfo" + id;
            var node = map.getSceneNode(AreaName, poiName)
            if (node) {map.destroySceneNode(AreaName, poiName)} 
            map.createPOI(AreaName + "/" + parentName + "/" + poiName, createOptions);                
        },
        loadEstateDetail: function () {
            var areaName = con.AreaName;
            var detaildata = e_LayerMenuData.estateDetailPOI.Data;
            for (var i = 0; i < detaildata.length; i++) {
                var row = detaildata[i];
                /*显示产业详情*/
                var fullNodePath = areaName + "/estateDetail" + row.id;


                if (map.getSceneNode(fullNodePath)) {
                    map.getSceneNode(fullNodePath).setVisible(1);
                }
                else {
                    var pos = row.lng + "," + row.lat + ",200";
                    var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

                    var data1 = {
                        Position: position, Text: "", Icon: row.edetailimg, IconSize: Q3D.vector2(75, 65)
                    }
                    require("sl_Event").createPOI(fullNodePath, data1);
                }
            }
        },
        //清空摄像头POI
        clearPOI: function () {
            var areaName = con.AreaName;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var layername = this.LastPOI_Clk.split('_')[0].replace("POITour", "");
                var level = this.LayerType.Level;
                var icon = this.LayerType.UnChooseIcon;
                var lastNode = map.getSceneNode(areaName, this.LastPOI_Clk);
                if (lastNode) {
                    lastNode.asPOI().setIcon(icon);
                }
            }
            this.LastPOI_Clk = "";

            var data = this.POIData;
            //设置POI隐藏
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    var name = this.LayerType.Name;

                    var poiname = "POIIndustry" + name + "_" + data[i].id;
                    var node = map.getSceneNode(areaName + "/" + poiname);
                    if (node) {
                        //node.setVisible(0);

                        map.destroySceneNode(areaName, poiname)
                    }
                }
                this.LayerType = null;
                this.POIData = null;
            }
            var detaildata = e_LayerMenuData.estateDetailPOI.Data;
            for (var i = 0; i < detaildata.length; i++) {
                var row = detaildata[i];
                /*显示产业详情*/
                var fullNodePath = areaName + "/estateDetail" + row.id;
                if (map.getSceneNode(fullNodePath)) {
                    map.getArea(areaName).destroySceneNode(fullNodePath);
                }
             }
        },

        //地面设置 flag 1:显示区块  0:隐藏区块
        setEstateArea:function(flag)
        {
            var node  = map.getSceneNode("beijing/beijing_dikuai")
            var node1 = map.getSceneNode("beijing/beijing_shuimian")
            var node2 = map.getSceneNode("beijing/beijing_haidi")
           

            if (flag == 1) {
                //map.loadArea("quyu");//加载产业区块
                Q3D.LayerGroup.prototype.getLayer("quyu").setVisible(true);


                //隐藏原有的地块
                if (node){ node.setVisible(0) }
                if (node1){ node1.setVisible(0) }
                if (node2) { node2.setVisible(0) }

                ////设置远裁面
                //this.nearDist = mapObj._map3d.getWorldManager().getMainCamera(0).getNearClipDistance(); //1800
                //this.farDist = mapObj._map3d.getWorldManager().getMainCamera(0).getFarClipDistance(); //1800
                //mapObj._map3d.getWorldManager().getMainCamera(0).setFarClipDistance(20000);
                //mapObj._map3d.getWorldManager().getMainCamera(0).setNearClipDistance(5);

            } else {
                //map.unloadArea("quyu"); //清除产业区块
                Q3D.LayerGroup.prototype.getLayer("quyu").setVisible(false);

                //显示原有的地块
                if (con.currStatus == 1){
                    if (node) { node.setVisible(1) }
                    if (node1) { node1.setVisible(1) }
                    if (node2) { node2.setVisible(1) }
                }
                
                ////远裁面还原
                //if (this.farDist != null) { mapObj._map3d.getWorldManager().getMainCamera(0).setFarClipDistance(this.farDist); }
                //if (this.nearDist != null) { mapObj._map3d.getWorldManager().getMainCamera(0).setNearClipDistance(this.nearDist); }
            }
        },
        //画多边形
        loadEstateArea: function ()
        {
            this.areaListData = e_LayerMenuData.estateAreaData;


            var AreaName = con.AreaName;
            for (var i = 0; i < this.areaListData.length; i++)
            {
                var id = this.areaListData[i].id
                var areacolor = this.areaListData[i].areacolor
                var posstr = this.areaListData[i].pos
                var nodename = "estatearea" + id;
                var linenodename = "estatearealine" + id;
                var lineArray = [];
                var node = map.getSceneNode(con.AreaName + "/" + nodename);
                if (node) {
                    node.setVisible(1);
                }
                else {
                    if (posstr.indexOf("|") > -1) {
                        var str = posstr.split("|")
                        for (var k = 0; k < str.length; k++) {
                            pos = str[k] + "," + 200;
                            pos = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(AreaName))
                            lineArray.push(pos)
                        }

                        this.drawDecal(nodename, lineArray, areacolor)
                        //this.createAreaLine(linenodename, lineArray)
                    }
                }
            }
        },
        //画多边形
        drawDecal: function (nodename,lineArray, colourValue)
        {
            map.createPolygon(con.AreaName + "/" + nodename, {
                    Material: null,
                    SpecialTransparent: false, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                    Points: lineArray,//注意要剔除收尾相等的点
                    Color: Q3D.colourValue(colourValue, 1),
                    Alpha: 0.1, //填充透明度
                    Direction: 1, //默认逆时针方向
                    OnPolygonCreated:null
            });

            //#0b2d69 
            //#13136f
            //透明度50%
            //描边颜色#1e569c

            //map.createDecal(con.AreaName + "/" + nodename, {
            //    Points: lineArray,
            //    Resolution: 1,
            //    FillColor: Q3D.colourValue(colourValue, 0.2), //多边形填充颜色和透明值
            //    LineColor: Q3D.colourValue(colourValue, 1.0), //多边形边框颜色和透明值
            //    LineWidth: 1, //多边形线宽    
            //    OnDecalCreated: function () {
            //    }
            //});
        },
        //区域画线
        createAreaLine: function (nodename, lineArray)
        {
            var nodePath = con.AreaName + "/" + nodename;

            var createOptions = {
                //Material: "Material/linered.mtr",
                Material: null,
                SpecialTransparent: true, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                LinePoints: [lineArray], //一维数组,由Vector3坐标组成
                OffsetDist: [],//偏移距离，单位米，用于贝塞尔曲线的控制点计算
                LineOptions: {
                    Subdivision: 20, //设置生成曲线细分程度
                    LineWidth: 10,
                    WrapLen: 10,
                    //以下用于动态创建的材质
                    Color: Q3D.colourValue("#1e569c", 1), //线的颜色
                    Alpha: 1, //线的透明度
                },
                OnLineCreated: null
            }
        
            map.createPolyLine(nodePath, createOptions);
        },


        //隐藏多边形
        clearDecal: function () {
            if (require("el_EstateInfo").areaListData != null) {
                for (var i = 0; i < require("el_EstateInfo").areaListData.length; i++) {
                    var node = map.getSceneNode(con.AreaName + "/" + "estatearea" + this.areaListData[i].id);
                    var linenode = map.getSceneNode(con.AreaName + "/" + "estatearea" + this.areaListData[i].id);
                    if (node) {
                        map.getArea(areaName).destroySceneNode(poiname);
                        //node.setVisible(0);
                    }
                }
            }
        },
        //清除产业详情POI
        clearEstateInfo:function()
        {
            var POIData = e_LayerMenuData.estatePOI.Data;
            if (POIData){
                for (var i = 0; i < POIData.length; i++) {
                    var row =POIData[i];
                    var nodename = "PoiEstateInfo" + row.id;
                    var node = map.getSceneNode(con.AreaName, nodename)
                    if (node){
                        map.destroySceneNode(con.AreaName, nodename)
                    }
                }
            }
        },
        //清空
        Revert: function () {
            this.clearPOI();         //清除POI
            this.clearEstateInfo();  //清除产业详情POI
            this.setEstateArea(0);  //显示产业区块
        }
    }
})