/// <reference path="jquery-1.9.1.min.js" />
/// <reference path="QMap3dV2.0.4.2.js" />
//QMapV2.UI = {}; //封装集成所有用户界面、用户交互、界面动画效果。
//QMapV2.Animation = {};//封装集成所有参数化动画效果。
//QMapV2.Algorithm = {};//封装集成所有基于三维的算法。
//QMapV2.Interaction = {};//封装与新引擎通用基础数据库实体对象的交互、绑定、双向更新、参数UI化、批量处理等。
//QMapV2.Common = {};//封装新引擎的通用操作，如：模型编辑，模型点击效果，选中效果，双击拉近，画线，画面，画箭头等。
//QMapV2.Global = {};//封装所有基于地球的操作。
window.QMapV2 = new Object();
window.QMapV2.Common = function (MapObj) {
    var commonObj = new Object();
    $.extend(true, commonObj, {
        //通用的线设置
        lineOptions: {
            Material: null,
            LineOptions: {
                LineType: QMapLineType.StraightLine,
                BesselDim: 2,
                Subdivision: 20,
                LineWidth: 5,
                WrapLen: 5,
                Color: QMapColor.RED, ///线的颜色
                Transparent: 1, ///线的透明度
                Dynamic: false, ///是否动态线
                Dotted: false ///是否虚线
            }
        },
        //设置绘图所用线的外观
        setLine: function (LineOption) {
            $.extend(true, commonObj.lineOptions, LineOption);
        },
        ///计算空间中两点间距离
        getDistance: function (fromCoord, toCoord) {
            try {
                return Math.sqrt(Math.pow((toCoord.x() - fromCoord.x()), 2) + Math.pow((toCoord.y() - fromCoord.y()), 2) + Math.pow((toCoord.z() - fromCoord.z()), 2));
            }
            catch (e) {
                return 0;
            }
        },
        ///计算空间中两点间位置上的坐标
        GetPointIn3DLineByRate: function (From, To, distRate) {
            if (($.isQMapObject(From, QMapObject.QVector3) || $.isQMapObject(From, QMapObject.QVector3d)) || ($.isQMapObject(To, QMapObject.QVector3) || $.isQMapObject(To, QMapObject.QVector3d))) {
                var ptTo = To;
                var ptFrom = From;
                var p = {
                    x: 0,
                    y: 0,
                    z: 0

                };
                p.x = ptFrom.x() + distRate * (ptTo.x() - ptFrom.x())
                p.y = ptFrom.y() + distRate * (ptTo.y() - ptFrom.y())
                p.z = ptFrom.z() + distRate * (ptTo.z() - ptFrom.z())
                if ($.isQMapObject(From, QMapObject.QVector3)) {
                    return MapObj.QVector3(p.x, p.y, p.z);
                } else {
                    return MapObj.QVector3d(p.x, p.y, p.z);
                }
            }
            else {
                return null;
            }
        },
        ///计算空间中两点间延长线上一定距离的坐标
        GetPointIn3DLineByDistance: function (From, To, distance) {
            if (this.getDistance(From, To) == 0) {
                return null;
            }
            return this.GetPointIn3DLineByRate(From, To, distance / this.getDistance(From, To));
        },
        HoverTimer: null,
        HoverInitial: {
            cameraPosition: null,
            fetchRotYaw: null,
            fetchRotPitch: null,
            cameraOrient: null,
            WatchNodeList: null
        },
        Hover: function (node, distance) { //防止高度变化
            commonObj.StopHoverAround();
            //摄像机位置
            this.HoverInitial.cameraPosition = MapObj.eyePos();
            //偏航的角度
            this.HoverInitial.fetchRotYaw = MapObj.QGlobalCamera(0)[0].fetchRotYaw();
            //俯仰的角度
            this.HoverInitial.fetchRotPitch = MapObj.QGlobalCamera(0)[0].fetchRotPitch();
            //自身视角
            this.HoverInitial.cameraOrient = MapObj.QVector3Extend(MapObj.QGlobalCamera(0)[0].makeRotByYawPitch(this.HoverInitial.fetchRotYaw, this.HoverInitial.fetchRotPitch));
            this.HoverInitial.WatchNodeList = MapObj.createSceneNodeList().addNode(node);
            this.HoverTimer = setInterval(function () {
                commonObj.HoverInitial.fetchRotYaw++;
                commonObj.HoverInitial.cameraOrient = MapObj.QVector3Extend(MapObj.QGlobalCamera(0)[0].makeRotByYawPitch(commonObj.HoverInitial.fetchRotPitch, commonObj.HoverInitial.fetchRotYaw));
                var WatcheyePos = MapObj.QGlobalCamera(0).calcFullVisiblePos(commonObj.HoverInitial.WatchNodeList, commonObj.HoverInitial.cameraOrient, distance);
                WatcheyePos.y(map.eyePos().y());
                MapObj.QGlobalCamera(0).flyTo(WatcheyePos, commonObj.HoverInitial.cameraOrient, 0.1);
            }, 100);
            MapObj.unBindAction({
                deviceId: 1,
                ctrlId: 4
            });
        },
        HoverAround: function (node, distance) {
            commonObj.StopHoverAround();
            node.makeSureVisible(distance);
            //摄像机位置
            this.HoverInitial.cameraPosition = MapObj.eyePos();
            //偏航的角度
            this.HoverInitial.fetchRotYaw = MapObj.QGlobalCamera(0)[0].fetchRotYaw();
            //俯仰的角度
            this.HoverInitial.fetchRotPitch = MapObj.QGlobalCamera(0)[0].fetchRotPitch();
            //自身视角
            this.HoverInitial.cameraOrient = MapObj.QVector3Extend(MapObj.QGlobalCamera(0)[0].makeRotByYawPitch(this.HoverInitial.fetchRotYaw, this.HoverInitial.fetchRotPitch));
            this.HoverInitial.WatchNodeList = MapObj.createSceneNodeList().addNode(node);
            this.HoverTimer = setInterval(function () {
                commonObj.HoverInitial.fetchRotYaw++;
                commonObj.HoverInitial.cameraOrient = MapObj.QVector3Extend(MapObj.QGlobalCamera(0)[0].makeRotByYawPitch(commonObj.HoverInitial.fetchRotPitch, commonObj.HoverInitial.fetchRotYaw));
                var WatcheyePos = MapObj.QGlobalCamera(0).calcFullVisiblePos(commonObj.HoverInitial.WatchNodeList, commonObj.HoverInitial.cameraOrient, distance);
                MapObj.QGlobalCamera(0).flyTo(WatcheyePos, commonObj.HoverInitial.cameraOrient, 0.1);
            }, 100);
            MapObj.unBindAction({
                deviceId: 1,
                ctrlId: 4
            });
        },
        StopHoverAround: function () {
            if (commonObj.HoverTimer != null) {
                clearInterval(commonObj.HoverTimer);
                MapObj.bindAction(13, {
                    deviceId: 1,
                    ctrlId: 4
                });
            }
        },
        ///根据空间上两点计算从起点到终点的朝向
        getAniFace: function (start, end, excur) {
            var x = start.longitude();
            var y = start.latitude();
            var z = start.height();
            var x1 = end.longitude();
            var y1 = end.latitude();
            var z1 = end.height();
            if (!excur && excur != 0) excur = 90;
            if (x == x1 && y == y1) {
                return 0;
            }
            var angle = (180 * Math.asin((x1 - x) / (Math.sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y)))) / Math.PI);

            if (((x1 - x) < 0 && (y1 - y) < 0) || ((x1 - x) > 0 && (y1 - y) < 0)) {
                angle = angle - 180 - excur;
            } else {
                angle = -angle - excur;
            }
            return angle;
        },
        ///当前正在绘制的线段节点对象
        currentLineNode: null,
        ///当前正在绘制的线段对象
        currentLineObjs: null,
        currentLinePoints: new Array(),
        ///画线方法
        drawLine: function (nodePath, drawOptions, lineOptions) {
            ///画线操作的默认处理
            var defaultDrawOptions = {
                MouseTrack: true,
                OnDrawLineCompleted: null,
                OnPointAdded: null,
                HeightFix: 0.1
            }
            ///线对象的默认属性
            var defaultLineOptions = {
                Material: null,
                LineOptions: {
                    LineType: QMapLineType.StraightLine,
                    BesselDim: 2,
                    Subdivision: 20,
                    LineWidth: 5,
                    WrapLen: 5,
                    Color: QMapColor.RED, ///线的颜色
                    Transparent: 1, ///线的透明度
                    Dynamic: false, ///是否动态线
                    Dotted: false ///是否虚线
                }
            }
            $.extend(true, defaultLineOptions, lineOptions);
            $.extend(defaultDrawOptions, drawOptions);
            MapObj.disableAllDefaultMouseEvent();
            MapObj.attachMouseEvent(QMapMouseEvent.OnLButtonDblClk, "drawLine", function (option) {
                option.GroundCoord.y(option.GroundCoord.y() + defaultDrawOptions.HeightFix);
                if (MapObj.getNodeByNodePath(nodePath) == null) {
                    defaultLineOptions.LinePoints = [[option.GroundCoord]]
                    defaultLineOptions.OnLineCreated = function (ModelAppend, Lines) {
                        commonObj.currentLineNode = ModelAppend;
                        commonObj.currentLineObjs = Lines[0];
                        if (defaultDrawOptions.MouseTrack) {
                            commonObj.currentLineObjs.addPoint(option.GroundCoord, commonObj.currentLineNode);
                            MapObj.attachMouseEvent(QMapMouseEvent.OnMouseMove, "ShowTrack", function (option) {
                                var Ground = MapObj.QGlobalCamera(0).getCrossCoord(option.ScreenCoord, 65);
                                if (Ground != null) {
                                    Ground.y(Ground.y() + defaultDrawOptions.HeightFix);
                                    commonObj.currentLineObjs.setPoint(commonObj.currentLineObjs.getPointCount() - 1, Ground, commonObj.currentLineNode);
                                }
                            });
                        }
                    }
                    MapObj.createLine(nodePath, defaultLineOptions);

                }
                else if (commonObj.currentLineObjs != null) {
                    if (option.ShiftPressDown || option.CtrlPressDown) {
                        if (defaultDrawOptions.MouseTrack) {
                            commonObj.currentLineObjs.setPoint(commonObj.currentLineObjs.getPointCount() - 1, option.GroundCoord, commonObj.currentLineNode);
                            commonObj.currentLineObjs.addPoint(option.GroundCoord, commonObj.currentLineNode);
                        }
                        else {
                            commonObj.currentLineObjs.addPoint(option.GroundCoord, commonObj.currentLineNode);
                        }
                    }
                    else {
                        if (defaultDrawOptions.MouseTrack) {
                            commonObj.currentLineObjs.setPoint(commonObj.currentLineObjs.getPointCount() - 1, option.GroundCoord, commonObj.currentLineNode);
                            MapObj.detachMouseEvent(QMapMouseEvent.OnMouseMove, "ShowTrack");
                        }
                        else {
                            commonObj.currentLineObjs.addPoint(option.GroundCoord, commonObj.currentLineNode);
                        }
                        MapObj.detachMouseEvent(QMapMouseEvent.OnLButtonDblClk, "drawLine");
                        if ($.isFunction(defaultDrawOptions.OnDrawLineCompleted)) {
                            defaultDrawOptions.OnDrawLineCompleted(commonObj.currentLineNode, commonObj.currentLineObjs);
                        }
                        MapObj.enableAllDefaultMouseEvent();
                        //new add  on onemap
                        //commonObj.currentLineNode = null;
                        commonObj.currentLineObjs = null;
                    }
                    if ($.isFunction(defaultDrawOptions.OnPointAdded)) {
                        defaultDrawOptions.OnPointAdded(commonObj.currentLineNode, commonObj.currentLineObjs);
                    }
                }
                else {
                    MapObj.enableAllDefaultMouseEvent();
                    return -1;
                }
            })
        },
        ///画线方法
        drawPolygon: function (nodePath, drawOptions, polygonOptions) {
            ///画线操作的默认处理
            var defaultDrawOptions = {
                MouseTrack: true,
                OnDrawPolygonCompleted: null,
                HeightFix: 0.1
            }
            var defaultPolygonOptions = {
                Alpha: 1,
                Color: QMapColor.NAVY
            }
            $.extend(defaultDrawOptions, drawOptions);
            $.extend(defaultPolygonOptions, polygonOptions);
            var material = MapObj.createMaterial("VecMaterialPoly", { AlphaBlendEnable: defaultPolygonOptions.Alpha > 0 && defaultPolygonOptions.Alpha < 1, Alpha: defaultPolygonOptions.Alpha, DiffuseColor: MapObj.QColourValue(defaultPolygonOptions.Color, 1) });
            MapObj.disableAllDefaultMouseEvent();
            MapObj.attachMouseEvent(QMapMouseEvent.OnLButtonDblClk, "drawPolygon", function (option) {
                option.GroundCoord.y(option.GroundCoord.y() + defaultDrawOptions.HeightFix);
                if (MapObj.getNodeByNodePath(nodePath + "_BasicLine") == null) {
                    commonObj.lineOptions.LinePoints = [[option.GroundCoord]]
                    commonObj.lineOptions.OnLineCreated = function (ModelAppend, Lines) {
                        commonObj.currentLineNode = ModelAppend;
                        commonObj.currentLineObjs = Lines[0];
                        if (defaultDrawOptions.MouseTrack) {
                            commonObj.currentLinePoints.push(option.GroundCoord);
                            commonObj.currentLineObjs.addPoint(option.GroundCoord, commonObj.currentLineNode);
                            MapObj.attachMouseEvent(QMapMouseEvent.OnMouseMove, "ShowTrack", function (option) {
                                var Ground = MapObj.QGlobalCamera(0).getCrossCoord(option.ScreenCoord, 65);
                                if (Ground != null) {
                                    Ground.y(Ground.y() + defaultDrawOptions.HeightFix);
                                    commonObj.currentLineObjs.setPoint(commonObj.currentLineObjs.getPointCount() - 1, Ground, commonObj.currentLineNode);
                                }
                            });
                        }
                    }
                    MapObj.createLine(nodePath + "_BasicLine", commonObj.lineOptions);

                }
                else if (commonObj.currentLineObjs != null) {
                    if (option.ShiftPressDown || option.CtrlPressDown) {
                        if (defaultDrawOptions.MouseTrack) {
                            commonObj.currentLineObjs.setPoint(commonObj.currentLineObjs.getPointCount() - 1, option.GroundCoord, commonObj.currentLineNode);
                            commonObj.currentLineObjs.addPoint(option.GroundCoord, commonObj.currentLineNode);
                        }
                        else {
                            commonObj.currentLineObjs.addPoint(option.GroundCoord, commonObj.currentLineNode);
                        }
                        commonObj.currentLinePoints.push(option.GroundCoord);
                    }
                    else {
                        if (defaultDrawOptions.MouseTrack) {
                            MapObj.detachMouseEvent(QMapMouseEvent.OnMouseMove, "ShowTrack");
                        }

                        if (commonObj.currentLinePoints.length > 2) {

                            MapObj.createPolygon(nodePath, {
                                //Position: commonObj.currentLinePoints[0],
                                Material: [material.getName()],
                                Points: commonObj.currentLinePoints,
                                OnPolygonCreated: function (VecNode, VecModel) {
                                    MapObj.detachMouseEvent(QMapMouseEvent.OnLButtonDblClk, "drawPolygon");
                                    MapObj.enableAllDefaultMouseEvent();
                                    commonObj.currentLineNode.remove();
                                    commonObj.currentLineNode = null;
                                    commonObj.currentLineObjs = null;
                                    commonObj.currentLinePoints = new Array();
                                    if ($.isFunction(defaultDrawOptions.OnDrawPolygonCompleted)) {
                                        defaultDrawOptions.OnDrawPolygonCompleted(VecNode, VecModel);
                                    }
                                }
                            });
                        }
                        else {
                            commonObj.currentLineNode.remove();
                            commonObj.currentLineNode = null;
                            commonObj.currentLineObjs = null;
                            commonObj.currentLinePoints = new Array();
                        }
                    }
                }
                else {
                    MapObj.enableAllDefaultMouseEvent();
                    return -1;
                }
            })


        },
        ///画梭柱
        drawPrism: function (nodePath, drawOptions, prismOptions, callback) {
            ///操作的默认处理
            var optionsNew = {};
            var defaultDrawOptions = {
                MouseTrack: true,
                OnDrawPrismCompleted: null,
                HeightFix: 0.1,
                EditAfterCreate: true,
                RollingStep: 5
            }
            var defaultPrismOptions = {
                Alpha: 1,
                Color: QMapColor.NAVY,
                Height: 10
            }
            $.extend(defaultDrawOptions, drawOptions);
            $.extend(defaultPrismOptions, prismOptions);
            optionsNew = defaultPrismOptions;
            //modify by tangeng 2014-11-25 【+Math.random()】
            var material = MapObj.createMaterial("VecMaterialPrism" + Math.random(), { AlphaBlendEnable: defaultPrismOptions.Alpha > 0 && defaultPrismOptions.Alpha < 1, Alpha: defaultPrismOptions.Alpha, DiffuseColor: MapObj.QColourValue(defaultPrismOptions.Color, 1) });
            MapObj.disableAllDefaultMouseEvent();
            MapObj.attachMouseEvent(QMapMouseEvent.OnLButtonDblClk, "drawPrism", function (option) {
                option.GroundCoord.y(option.GroundCoord.y() + defaultDrawOptions.HeightFix);
                if (MapObj.getNodeByNodePath(nodePath + "_BasicLine") == null) {
                    commonObj.lineOptions.LinePoints = [[option.GroundCoord]]
                    commonObj.lineOptions.OnLineCreated = function (ModelAppend, Lines) {
                        commonObj.currentLineNode = ModelAppend;
                        commonObj.currentLineObjs = Lines[0];
                        if (defaultDrawOptions.MouseTrack) {
                            commonObj.currentLinePoints.push(option.GroundCoord);
                            commonObj.currentLineObjs.addPoint(option.GroundCoord, commonObj.currentLineNode);
                            MapObj.attachMouseEvent(QMapMouseEvent.OnMouseMove, "ShowTrack", function (option) {
                                var Ground = MapObj.QGlobalCamera(0).getCrossCoord(option.ScreenCoord, 65);
                                if (Ground != null) {
                                    Ground.y(Ground.y() + defaultDrawOptions.HeightFix);
                                    commonObj.currentLineObjs.setPoint(commonObj.currentLineObjs.getPointCount() - 1, Ground, commonObj.currentLineNode);
                                }
                            });
                        } else {//add by tangdeng 2014-11-28 MouseTrack=false时 添加模型缺少起始点问题
                            commonObj.currentLinePoints.push(option.GroundCoord);
                        }
                    }
                    MapObj.createLine(nodePath + "_BasicLine", commonObj.lineOptions);

                }
                else if (commonObj.currentLineObjs != null) {
                    if (option.ShiftPressDown || option.CtrlPressDown) {
                        if (defaultDrawOptions.MouseTrack) {
                            commonObj.currentLineObjs.setPoint(commonObj.currentLineObjs.getPointCount() - 1, option.GroundCoord, commonObj.currentLineNode);
                            commonObj.currentLineObjs.addPoint(option.GroundCoord, commonObj.currentLineNode);
                        }
                        else {
                            commonObj.currentLineObjs.addPoint(option.GroundCoord, commonObj.currentLineNode);
                        }
                        commonObj.currentLinePoints.push(option.GroundCoord);
                    }
                    else {
                        if (defaultDrawOptions.MouseTrack) {
                            MapObj.detachMouseEvent(QMapMouseEvent.OnMouseMove, "ShowTrack");
                        }

                        if (commonObj.currentLinePoints.length > 2) {

                            MapObj.createPrism(nodePath, {
                                //Position: commonObj.currentLinePoints[0],
                                Material: [material.getName(), material.getName(), material.getName()],
                                Points: commonObj.currentLinePoints,
                                PrismOptions: {
                                    KeepVertical: true,
                                    Points: commonObj.currentLinePoints,
                                    Anchor: commonObj.currentLinePoints[0],
                                    Height: defaultPrismOptions.Height
                                },
                                OnPrismCreated: function (VecNode, VecModel) {
                                    //add by tangdeng 2015-02-04 键值对
                                    // optionsNew.Points = commonObj.currentLinePoints;
                                    // $.Boiler.PrismValues[VecNode.getName()] = optionsNew;
                                    //end
                                    //MapObj.detachMouseEvent(QMapMouseEvent.OnLButtonDblClk, "drawPrism");
                                    //MapObj.detachMouseEvent(QMapMouseEvent.OnRButtonDblClk, "clearPrismPoint");
                                    commonObj.currentLineNode.remove();
                                    if (defaultDrawOptions.EditAfterCreate) {
                                        MapObj.unBindAction(QMapKey.AXISZ);
                                        MapObj.attachMouseEvent(QMapMouseEvent.OnMouseWheel, "adjustPrismHeight", function (option) {
                                            if (option.rollingDirection == "up") {
                                                VecModel.setHeight(VecModel.getHeight() + defaultDrawOptions.RollingStep);
                                            }
                                            else {
                                                VecModel.setHeight(VecModel.getHeight() - defaultDrawOptions.RollingStep);
                                            }
                                        })
                                        MapObj.attachMouseEvent(QMapMouseEvent.OnLButtonDblClk, "saveModel", function (option) {
                                            MapObj.detachMouseEvent(QMapMouseEvent.OnMouseWheel, "adjustPrismHeight");
                                            MapObj.detachMouseEvent(QMapMouseEvent.OnLButtonDblClk, "saveModel");
                                            MapObj.attachMouseEvent(QMapMouseEvent.OnLButtonDblClk, "drawPrism");
                                            MapObj.enableAllDefaultMouseEvent();
                                            MapObj.bindAction(QMapActionType.CAMERA_SCALE, QMapKey.AXISZ);
                                            commonObj.currentLineNode = null;
                                            commonObj.currentLineObjs = null;
                                            commonObj.currentLinePoints = new Array();
                                            if ($.isFunction(defaultDrawOptions.OnDrawPrismCompleted)) {
                                                defaultDrawOptions.OnDrawPrismCompleted(VecNode, VecModel);
                                            }
                                        })
                                    }
                                    else {
                                        MapObj.enableAllDefaultMouseEvent();
                                        commonObj.currentLineNode.remove();
                                        commonObj.currentLineNode = null;
                                        commonObj.currentLineObjs = null;
                                        commonObj.currentLinePoints = new Array();
                                        if ($.isFunction(defaultDrawOptions.OnDrawPrismCompleted)) {
                                            defaultDrawOptions.OnDrawPrismCompleted(VecNode, VecModel);
                                        }
                                    }
                                    //MapObj.enableAllDefaultMouseEvent();
                                    //commonObj.currentLineNode.remove();
                                    //commonObj.currentLineNode = null;
                                    //commonObj.currentLineObjs = null;
                                    //commonObj.currentLinePoints = new Array();
                                    //if ($.isFunction(defaultDrawOptions.OnDrawPrismCompleted)) {
                                    //    defaultDrawOptions.OnDrawPrismCompleted(VecNode, VecModel);
                                    //}
                                    //回调函数 add by tangdeng 
                                    if (typeof (callback) == "function") {
                                        callback();
                                    }
                                }
                            });
                        }
                        else {
                            commonObj.currentLineNode.remove();
                            commonObj.currentLineNode = null;
                            commonObj.currentLineObjs = null;
                            commonObj.currentLinePoints = new Array();
                        }
                    }
                }
                else {
                    MapObj.enableAllDefaultMouseEvent();
                    return -1;
                }
            })

            MapObj.attachMouseEvent(QMapMouseEvent.OnRButtonDblClk, "clearPrismPoint", function () {

                if (commonObj.currentLineObjs != null && commonObj.currentLineObjs.getPointCount() > 1) {
                    commonObj.currentLineObjs.removePoint(commonObj.currentLineObjs.getPointCount() - 1);
                    //add by tangdeng 2014-12-1 解决右键清除所有点之后，再次双击的时候仍然会添加模型的问题
                    commonObj.currentLinePoints.splice(commonObj.currentLineObjs.getPointCount() - 1, 1);

                }
            })


        },
        ///画球体
        drawSphere: function (nodePath, drawOptions, sphereOptions) {
            ///操作的默认处理
            var defaultDrawOptions = {
                CenterType: 0,//1以接触面为中心 0以中心点为中心
                OnDrawSphereCompleted: null,
                RollingStep: 5,
                EditAfterCreate: true
            }
            var defaultSphereOptions = {
                Alpha: 1,
                Color: QMapColor.NAVY,
                Radius: 10
            }
            $.extend(defaultDrawOptions, drawOptions);
            $.extend(defaultSphereOptions, sphereOptions);
            var material = MapObj.createMaterial("VecMaterialSphere", { AlphaBlendEnable: defaultSphereOptions.Alpha > 0 && defaultSphereOptions.Alpha < 1, Alpha: defaultSphereOptions.Alpha, DiffuseColor: MapObj.QColourValue(defaultSphereOptions.Color, 1) });
            if (MapObj.getNodeByNodePath(nodePath) == null) {
                MapObj.disableAllDefaultMouseEvent();
                MapObj.attachMouseEvent(QMapMouseEvent.OnLButtonDblClk, "pickSphereCenter", function (option) {
                    MapObj.detachMouseEvent(QMapMouseEvent.OnLButtonDblClk, "pickSphereCenter");
                    var startCenter = option.GroundCoord;
                    if (defaultDrawOptions.CenterType == 1) {
                        startCenter.y(startCenter.y() + defaultSphereOptions.Radius);
                    }
                    MapObj.createSphere(nodePath, {
                        Material: "VecMaterialSphere",
                        SphereOptions: {
                            Center: startCenter,
                            Radius: defaultSphereOptions.Radius
                        },
                        OnSphereCreated: function (VecNode, VecModel) {
                            if (defaultDrawOptions.EditAfterCreate) {
                                MapObj.unBindAction(QMapKey.AXISZ);
                                MapObj.attachMouseEvent(QMapMouseEvent.OnMouseWheel, "adjustSphereRadius", function (option) {
                                    if (option.rollingDirection == "up") {
                                        if (defaultDrawOptions.CenterType == 1) {
                                            var newCenter = VecModel.getCenter();
                                            newCenter.y(newCenter.y() + defaultDrawOptions.RollingStep);
                                            VecModel.setCenter(newCenter);
                                        }
                                        VecModel.setRadius(VecModel.getRadius() + defaultDrawOptions.RollingStep);
                                    }
                                    else {
                                        if (defaultDrawOptions.CenterType == 1) {
                                            var newCenter = VecModel.getCenter();
                                            newCenter.y(newCenter.y() - defaultDrawOptions.RollingStep);
                                            VecModel.setCenter(newCenter);
                                        }
                                        VecModel.setRadius(VecModel.getRadius() - defaultDrawOptions.RollingStep);
                                    }
                                })
                                MapObj.attachMouseEvent(QMapMouseEvent.OnLButtonDblClk, "exitSphereEdit", function () {
                                    MapObj.detachMouseEvent(QMapMouseEvent.OnMouseWheel, "adjustSphereRadius");
                                    MapObj.detachMouseEvent(QMapMouseEvent.OnLButtonDblClk, "exitSphereEdit");
                                    MapObj.enableAllDefaultMouseEvent();
                                    MapObj.bindAction(QMapActionType.CAMERA_SCALE, QMapKey.AXISZ);
                                    if ($.isFunction(defaultDrawOptions.OnDrawSphereCompleted)) {
                                        defaultDrawOptions.OnDrawSphereCompleted(VecNode, VecModel)
                                    }
                                })
                            }
                            else {
                                if ($.isFunction(defaultDrawOptions.OnDrawSphereCompleted)) {
                                    defaultDrawOptions.OnDrawSphereCompleted(VecNode, VecModel)
                                }
                            }
                        }
                    })
                })
            }
            else {
                return -1;
            }
        }
    });
    return commonObj;
}