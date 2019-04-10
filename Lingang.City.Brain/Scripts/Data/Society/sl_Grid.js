define(["config", "common", "util", "s_layerMenuData"], function (con, com, util, s_layerMenuData) {
    /**************************************网格*************************************/
    return {
        oneLevelData: null,//1级网格线
        areaListData: null,//3级网格区域
        poiListData: null,

        POIData:null,
        loadGridInfo: function () {
            require("mainMenu").LayerFlyto(16, function () {
                require("sl_Grid").loadGridPOI();
                require("sl_Grid").loadGridOneLevelLine();
                require("sl_Grid").loadGridArea();
                require("sl_Grid").loadGridLine();
            });
        },
        //加载POI
        loadGridPOI: function (){
            this.areaListData = s_layerMenuData.GirdData;
            var areaName = con.AreaName;
            for (var i = 0; i < this.areaListData.length; i++) {
                var data = this.areaListData[i];
                var nodename = "girdpoi" + data.id;
               
                var node = map.getSceneNode(con.AreaName + "/" + nodename);
                if (node) {
                    node.setVisible(1);
                }
                else {
                    var iconSize = Q3D.vector2(150, 150);
                    if (data.poipos != "") {
                        var pos = data.poipos + ",0";
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
                                Text: data.textname,
                                Icon: "",
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

                            },
                        }
                        map.createPOI(areaName + "/" + nodename, options)
                    }
                }
            }
           
        },

        //一级网格区域画线
        loadGridOneLevelLine: function () {
            this.oneLevelData = s_layerMenuData.GirdOneLevelData;
            var AreaName = con.AreaName;
            for (var i = 0; i < this.oneLevelData.length; i++) {
                var id = this.oneLevelData[i].id
                var posstr = this.oneLevelData[i].pos
                var linenodename = "girdonelevel" + id;
                var lineArray = [];
                var node = map.getSceneNode(con.AreaName + "/" + linenodename);
                if (node) {
                    node.setVisible(1);
                }
                else {
                    if (posstr.indexOf("|") > -1) {
                        var str = posstr.split("|")
                        for (var k = 0; k < str.length; k++) {
                            pos = str[k] + "," + 100;
                            pos = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(AreaName))
                            lineArray.push(pos)
                        }
                        var nodePath = con.AreaName + "/" + linenodename;
                        var createOptions = {
                            //Material: "Material/linered.mtr",
                            Material: null,
                            SpecialTransparent: true, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                            LinePoints: [lineArray], //一维数组,由Vector3坐标组成
                            OffsetDist: [],//偏移距离，单位米，用于贝塞尔曲线的控制点计算
                            LineOptions: {
                                Subdivision: 20, //设置生成曲线细分程度
                                LineWidth: 4,
                                WrapLen: 10,
                                //以下用于动态创建的材质
                                Color: Q3D.colourValue("#000079", 1), //线的颜色
                                Alpha: 1, //线的透明度
                            },
                            OnLineCreated: null
                        }

                        map.createPolyLine(nodePath, createOptions);

                    }
                }
            }
        },
        //隐藏一级网格区域
        clearGridOneLevelLine: function () {
            var areaname = con.AreaName;
            if (require("sl_Grid").oneLevelData != null) {
                for (var i = 0; i < require("sl_Grid").oneLevelData.length; i++) {
                    var nodename = "girdonelevel" + require("sl_Grid").oneLevelData[i].id;
                    var node = map.getSceneNode(areaname + "/" + nodename);
                    if (node) {
                        //map.getArea(areaname).destroySceneNode(nodename);
                        node.setVisible(0);
                    }
                }
            }
        },
        //画三级区域
        loadGridArea: function () {
            this.areaListData = s_layerMenuData.GirdData;


            var AreaName = con.AreaName;
            for (var i = 0; i < this.areaListData.length; i++) {
                var id = this.areaListData[i].id
                var areacolor = this.areaListData[i].areacolor
                var posstr = this.areaListData[i].pos
                var nodename = "girdarea" + id;
                var lineArray = [];
                var node = map.getSceneNode(con.AreaName + "/" + nodename);
                if (node) {
                    node.setVisible(1);
                }
                else {
                    if (posstr.indexOf("|") > -1) {
                        var str = posstr.split("|")
                        for (var k = 0; k < str.length; k++) {
                            pos = str[k] + "," + 100;
                            pos = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(AreaName))
                            lineArray.push(pos)
                        }
                        //画多边形
                        map.createPolygon(con.AreaName + "/" + nodename, {
                            Material: null,
                            SpecialTransparent: false, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                            Points: lineArray,//注意要剔除收尾相等的点
                            Color: Q3D.colourValue(areacolor, 1),
                            Alpha: 0.1, //填充透明度
                            Direction: 1, //默认逆时针方向
                            OnPolygonCreated: null
                        });
                       
                    }
                }
            }
        },
        //区域三级画线
        loadGridLine: function () {
            this.areaListData = s_layerMenuData.GirdData;
            var AreaName = con.AreaName;
            for (var i = 0; i < this.areaListData.length; i++) {
                var id = this.areaListData[i].id
                var areacolor = this.areaListData[i].areacolor
                var posstr = this.areaListData[i].pos
                var linenodename = "girdarealine" + id;
                var lineArray = [];
                var node = map.getSceneNode(con.AreaName + "/" + linenodename);
                if (node) {
                    node.setVisible(1);
                }
                else {
                    if (posstr.indexOf("|") > -1) {
                        var str = posstr.split("|")
                        for (var k = 0; k < str.length; k++) {
                            pos = str[k] + "," + 100;
                            pos = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(AreaName))
                            lineArray.push(pos)
                        }
                        var nodePath = con.AreaName + "/" + linenodename;
                        var createOptions = {
                            //Material: "Material/linered.mtr",
                            Material: null,
                            SpecialTransparent: true, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                            LinePoints: [lineArray], //一维数组,由Vector3坐标组成
                            OffsetDist: [],//偏移距离，单位米，用于贝塞尔曲线的控制点计算
                            LineOptions: {
                                Subdivision: 20, //设置生成曲线细分程度
                                LineWidth: 1,
                                WrapLen: 10,
                                //以下用于动态创建的材质
                                Color: Q3D.colourValue("#006000", 1), //线的颜色
                                Alpha: 1, //线的透明度
                            },
                            OnLineCreated: null
                        }

                        map.createPolyLine(nodePath, createOptions);

                    }
                }
            }

            

            
        },
        //隐藏三级多边形
        clearDecal: function () {
            var areaname = con.AreaName;
            if (require("sl_Grid").areaListData != null) {
                for (var i = 0; i < require("sl_Grid").areaListData.length; i++) {
                    var nodename = "girdarea" + require("sl_Grid").areaListData[i].id;
                    var node = map.getSceneNode(areaname + "/" + nodename);
                    if (node) {
                        //map.getArea(areaname).destroySceneNode(nodename);
                        node.setVisible(0);
                    }

                    var nodelinename = "girdarealine" + require("sl_Grid").areaListData[i].id;
                    var nodeline = map.getSceneNode(areaname + "/" + nodelinename);
                    if (nodeline) {
                        //map.getArea(areaname).destroySceneNode(nodelinename);
                        nodeline.setVisible(0);
                    }
                }
            }
        },
        //隐藏三级多边形
        clearPOI: function () {
            var areaname = con.AreaName;
            if (require("sl_Grid").areaListData != null) {
                for (var i = 0; i < require("sl_Grid").areaListData.length; i++) {
                    var nodename = "girdpoi" + require("sl_Grid").areaListData[i].id;
                    var node = map.getSceneNode(areaname + "/" + nodename);
                    if (node) {
                        //map.getArea(areaname).destroySceneNode(nodename);
                        node.setVisible(0);
                    }
                }
            }
        },
        
        //清空
        Revert: function () {
            require("sl_Grid").clearGridOneLevelLine();//隐藏一级网格
            require("sl_Grid").clearDecal();         //隐藏三级网格
            require("sl_Grid").clearPOI();
        }
    }
    });