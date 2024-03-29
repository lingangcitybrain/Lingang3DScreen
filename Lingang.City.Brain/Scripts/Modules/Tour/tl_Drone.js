﻿define(["config", "common", "util"], function (con, com, util) {
    return {
        LayerType: null,//选择无人机
        POIData: null,//POI详情数据
        LastPOI_Clk: null,//鼠标选中POI
        TourDrone_player: null,
        DroneMovieClip: null,
        DroneHangarList: new util.HashMap,
        DroneFirstTimeList: new util.HashMap,
        DroneInter: null,
        flag: 0,//

        DroneData: null,//无人机数据
        DroneList: new util.HashMap,

        freeDroneKuData: [],//无人机数据
        nodeFollowingPath: [],//节点跟随路径
        detailWindowId: 0,//当前窗口id

        loadDrone: function () {
            this.Revert();
            

            //加载无人机库
            require("tl_Drone").loadDroneHangarPOI();
            //无人机采用实际的数据
            require("tl_Drone").loadDroneModelForList();
            //缓存无人机数据（取视频SBBM用）
            require("tl_Drone").loadDroneList();
            //不断刷新获取新的无人机坐标
            require("tl_Drone").DroneInter = setInterval(function () {
                require("tl_Drone").loadDroneModelForList();
            }, 2000);
        },
        //缓存无人机数据
        loadDroneList: function () {
            if (!require("tl_Drone").DroneData) {
                require("t_LayerMenuAjax").getDroneList(function (result) {
                    for (var i = 0; i < require("tl_Drone").DroneData.length; i++) {
                        var row = require("tl_Drone").DroneData[i];
                        require("tl_Drone").DroneList.put(row.id, row);
                    }
                })
            }
        },

        /*******************无人机库定位POI-并显示详情-start*******************/
        //加载无人机库
        loadDroneHangarPOI: function () {
            this.LayerType = require("t_Main").LayerCatalog.DroneHangar;
            var post_data = { "offset": "0", "count": "1000" }

            require("t_LayerMenuAjax").getDroneHangarList(post_data, function (result) {
                require("tl_Drone").freeDroneKuData = result;
                var areaName = con.AreaName;
                var icon = require("tl_Drone").LayerType.UnChooseIcon;
                var pois = [];
                for (var i = 0; i < require("tl_Drone").POIData.length; i++) {

                    var row = require("tl_Drone").POIData[i];

                    var poiName = "POITour" + require("tl_Drone").LayerType.Name + "_" + row.id;//POIIOT_01

                    var iconSize = Q3D.vector2(41, 45);
                    //var pos = row.lat_84 + "," + row.lng_84 + ",0";
                    var Coordinate = com.gcj02towgs84(parseFloat(row.lng), parseFloat(row.lat));//高德坐标转wgs84
                    var pos = Coordinate + ",0";

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
                            require("tl_Drone").loadDroneKuDetailWindow(poiName, row.id);
                            ////创建子POI显示
                            //require("tl_Drone").loadDroneHangarDetail(areaName, poiName, "Texture/Common/wurenji_detail" + row.id + ".png", row.id);
                        },
                    }
                    map.createPOI(areaName + "/" + poiName, options)

                    //创建机库三公里半径效果
                    var nodePath = areaName + "/" + poiName + "_quan";
                    var node = map.getSceneNode(nodePath);
                    if (node) {
                        map.getArea(areaName).destroySceneNode(nodePath);
                    }
                    var quanpos = Coordinate + ",20";
                    var quanposition = Q3D.vector3(quanpos.toGlobalVec3d().toLocalPos(areaName));
                    map.createCylinder(nodePath, {
                        SpecialTransparent: false, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                        Color: Q3D.colourValue("#00ffff", 1), //颜色材质使用的颜色
                        Alpha: 0.1, //颜色材质使用的透明度
                        Center: quanposition, //底面中心坐标 Vector3        
                        Anchor: null,//顶面中心坐标 Vector3，非垂直情况下可设置
                        Radius: 2500, //半径
                        Height: parseInt(1),//1000,//高度
                        Pieces: 360, //设置生成圆面的面个数    
                        OnCylinderCreated: function () {//加载结束回调
                        }
                    })
                }
            });
        },
        loadDroneKuDetailWindow: function (nodeName, pid) {
            var data = null;
            require("tl_Drone").freeDroneKuData.forEach(function (e) {
                if (e.id == pid) {
                    data = e;
                }
            });

            var url = con.HtmlUrl + 'SocietyNew/Bottom_DroneKuDetail.html';

            require("tl_Drone").detailWindowId = require("tl_Drone").detailWindowId + 1;
            var domWinName = 'detail_' + require("tl_Drone").detailWindowId;

            require(['text!' + url], function (template) {
                $("#" + domWinName).show();
                $("#" + domWinName).html(template);

                require("tl_Drone").openWinDetail(domWinName, data);

            });

            var nodePath = con.AreaName + '/' + nodeName;
            var nodeObject = { "nodePath": nodePath, "nodeDom": domWinName };

            require("tl_Drone").nodeFollowingPath.push(nodeObject);

            map.enableNodeFollowing(nodePath, function (node, v2i) {
                require("tl_Drone").nodeFolowing(node, v2i);
            });
        },
        nodeFolowing: function (node, v2i) {
            require("tl_Drone").nodeFollowingPath.forEach(function (e) {
                if (node.getFullName() == e.nodePath) {
                    document.getElementById(e.nodeDom).style.left = v2i.x + "px";
                    document.getElementById(e.nodeDom).style.top = v2i.y - 100 + "px";
                }
            });
        },
        openWinDetail: function (domWinName, data) {
            var html = '<div class=\"poi-box poi-box1\" style=\"z-index:980\">'
                     + '<div class=\"poi-title\">' + data.jkmc + '</div>'
                     + '<div class=\"poi-cont\">'
                     + '<ul class=\"poi-ul\">'
                     + '<li class=\"poi-li\"><em><i>' + data.jkmc + '</i></em></li>'
                     + '<li class=\"poi-li\"><span>状态：</span><em><i>' + data.jkzt + '</i></em></li>'
                     + '<li class=\"poi-li\"><span>地址：</span><em><i>' + data.jkdz + '</i></em></li>'
                     + '</ul>'
                     + '</div>'
                     + '</div>';

            $("#" + domWinName).html(html);
        },
        closeDroneKuDetailWindow: function () {
            var currentWinId = require("tl_Drone").detailWindowId;

            while (currentWinId > 0) {
                var domDetail = $("#detail_" + currentWinId);
                domDetail.empty();
                domDetail.hide();
                currentWinId = currentWinId - 1;
            }

            require("tl_Drone").detailWindowId = 0;

            require("tl_Drone").nodeFollowingPath.forEach(function (e) {
                map.disableNodeFollowing(e.nodePath, true);
            });

            require("tl_Drone").nodeFollowingPath = [];
        },
        /*******************无人机库定位POI-并显示详情-end*******************/

        //加载无人机库详情
        loadDroneHangarDetail: function (AreaName, parentName, icon, id) {
            var pos = Q3D.vector3(1000, -100, 0);
            switch (id) {
                case 238://海科
                    pos = Q3D.vector3(450, -180, 0);
                    break;
                case 174://书塘
                    pos = Q3D.vector3(720, -180, 0);
                    break;
                case 240://A2
                    pos = Q3D.vector3(740, -180, 0);
                    break;
                case 241://临闸
                    pos = Q3D.vector3(580, -180, 0);
                    break;
                case 242://A3泵站机库
                    pos = Q3D.vector3(850, -200, 0);
                    break;
                case 243://同汇路站
                    pos = Q3D.vector3(400, -200, 0);
                    break;
                case 244://申能站
                    pos = Q3D.vector3(580, -180, 0);
                    break;
                case 264://智选站无人机
                    pos = Q3D.vector3(580, -180, 0);
                    break;
                default:
            }
            var iconSize = Q3D.vector2(420, 248);
            var createOptions = {
                Position: pos,
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
            var poiName = "PoiDroneInfo" + id;
            var node = map.getSceneNode(AreaName, poiName)
            if (node) { map.destroySceneNode(AreaName, poiName) }
            map.createPOI(AreaName + "/" + parentName + "/" + poiName, createOptions);
        },
        //根据实时接口加载无人机
        loadDroneModelForList: function () {
            //console.log("loadDroneModelForList");
            var post_data = { "offset": "", "count": "" }
            require("t_LayerMenuAjax").getDronePosList(post_data, function (result) {
                require("tl_Drone").freeDroneKuData = result;

                if (result != null) {
                    for (var i = 0; i < result.length; i++) {

                        //创建无人机模型
                        var id = result[i].sbbm.toString();
                        var lng = result[i].lng.toString();
                        var lat = result[i].lat.toString();
                        var height = result[i].height.toString();
                        var modify_time = result[i].flightTime.toString();


                        //if (height != "" && height != 0) {
                        if (height != "" && lng != "" && lat != "") {
                            var Coordinate = com.gcj02towgs84(parseFloat(lng), parseFloat(lat));

                            var modelName = "wrj" + id;
                            var areaName = con.AreaName; ///"gwh_xilou";
                            var quanMesh = "Mesh/dajiangm600.mesh"

                            var dronepath = areaName + "/" + modelName;
                            var POS = Coordinate + ",70";


                            var position = (POS).toGlobalVec3d().toLocalPos(areaName)


                            var nodePath = areaName + "/" + modelName;
                            var nextpos = Q3D.vector3(position);
                            var seconds = 0;
                            var modelnode = map.getSceneNode(areaName, modelName)



                            var quanmodelOptions = {
                                Position: Q3D.vector3(position),
                                Orientation: Q3D.vector3(0, 0, 0),
                                OrientationType: Q3D.Enums.nodeOrientationType.Self,
                                Scale: Q3D.vector3(5, 5, 5),
                                SkeletonAnimation: null,
                                OnLoaded: function () {
                                    //添加实时追踪数据
                                    require("tl_Drone").DroneTrack(nodePath, nextpos, seconds)


                                    //创建圆锥投影
                                    var conePath = dronepath + "/TextCone" + id;
                                    var dronepos = Q3D.globalVec3d(Q3D.vector3d(map.getSceneNode(areaName, modelName).getAbsPos()).toGlobalVec3d());
                                    var conepos = dronepos.longitude + "," + dronepos.latitude + ",-70";

                                    var Pos = Q3D.vector3(conepos.toGlobalVec3d().toLocalPos(areaName));
                                    map.createCone(conePath, {
                                        //Material: ["Material/xihongqiao2_dz01.mtr", "Materialne_static.mtr"],
                                        Alpha: 0.1,
                                        Color: Q3D.colourValue("#0ad0ce", 1), //线的颜色 0000ff
                                        Center: Q3D.vector3(Pos),
                                        Radius: 15, //半径
                                        Height: 70,//高度
                                        //Anchor: Q3D.vector3(20,10,10),            
                                    });


                                    //无人机上加POI
                                    var icon = "Texture/Common/wurenji.png";
                                    var iconSize = Q3D.vector2(20, 22);
                                    var createOptions = {
                                        Position: Q3D.vector3(0, 1, 0),
                                        Orientation: null,
                                        OrientationType: Q3D.Enums.nodeOrientationType.Self,
                                        Scale: Q3D.vector3(0.3, 0.3, 0.3),
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
                                    var poiName = "POITourDrone_" + id
                                    var node = map.getSceneNode(con.AreaName, poiName)
                                    if (node) {
                                        node.setVisible(1)
                                    } else {
                                        map.createPOI(con.AreaName + "/" + modelName + "/" + poiName, createOptions);
                                    }
                                }
                            };


                            if (modelnode) {
                                modelnode.setVisible(1)

                                var coneName = "TextCone" + id
                                var conenode = map.getSceneNode(con.AreaName, coneName)
                                if (conenode) {
                                    conenode.setVisible(1)
                                }

                                var poiName = "POITourDrone_" + id
                                var poinode = map.getSceneNode(con.AreaName, poiName)
                                if (poinode) {
                                    poinode.setVisible(1)
                                }




                                //添加无人机追踪数据
                                var lastdata = require("tl_Drone").DroneFirstTimeList.get(id)
                                if (lastdata) {
                                    //var lasttime = lastdata.modify_time;
                                    //seconds = com.GetDateDiff(lasttime, modify_time, "second")
                                    if (modify_time > 0) {
                                        require("tl_Drone").DroneTrack(nodePath, nextpos, modify_time)
                                    }
                                }
                            } else {
                                map.createModel(dronepath, quanMesh, quanmodelOptions);

                                require("tl_Drone").DroneFirstTimeList.put(id, result[i]);
                            }

                        }

                        //缓存无人机数据
                        require("tl_Drone").DroneHangarList.put(id, result[i]);
                    }
                }
            })
        },
        //船舶实时追踪
        DroneTrack: function (nodePath, nextpos, seconds) {
            var option = {
                TimeDiff: seconds, //本次数据上报时间差相对于追踪开始时间，单位 S
                Location: nextpos, //当前经纬度坐标，字符串类型
                //到达新的位置后水平偏转角度，[-180,180]，0 为正北方向顺时针为正，比如无人机，如果
                Heading: null,
                //Heading: direction,
                PitchAllowed: false, //是否允许俯仰
            };
            map.startRealTimeTrack(nodePath, option);
        },
        //加载无人机视频
        loadDroneCamera: function (nodename) {
            //
            this.choosePOI(nodename)

            //require("tl_Drone").loadDroneCamera();
            if (require("tl_Drone").TourDrone_player) {
                require("tl_Drone").TourDrone_player.dispose();
                require("tl_Drone").TourDrone_player = null;
            }

            var url = con.HtmlUrl + 'TourNew/Bottom_DroneCamera.html';
            require(['text!' + url], function (template) {
                $("#detail_tourplayer").html(template);
                $("#detail_tourplayer").show('slide', { direction: 'left' }, 500);

                //var url = con.WebServiceUrl + "/Content/video/CH2.flv";


                //var post_data = { "sbbm": "20010000001680000001" }

                var post_data = { "offset": "0", "count": "1000" }

                var id = nodename.split('_')[1];
                var data = require("tl_Drone").DroneHangarList.get(id);
                var post_data = { "sbbm": data.sbbm };
                if (data.sbbm != "ceshi_001" && data.sbbm != "SkySys_0004" && data.sbbm != "SkySys_0005") {
                    console.log(data.sbbm);
                    require("t_LayerMenuAjax").getDroneVideo(post_data, function (result) {
                        console.log(result);
                        require("tl_Drone").openDroneVideo(result);
                    })
                }
                else {
                    console.log("暂无sbbm数据");
                }
            });
        },
        //加载无人机视频
        openDroneVideo: function (url) {
            setTimeout(function () {
                //加载视频
                require(['aliplayer'], function (data) {
                    var videowidth = $(".video-js").width();
                    var videoheight = $(".video-js").height();

                    require("tl_Drone").TourDrone_player = new Aliplayer({
                        "id": "bottom_cameradetail",
                        "source": url,
                        //"width": videowidth + "px",
                        //"height": videoheight + "px",
                        "autoplay": true,
                        "isLive": false,
                        "rePlay": true,
                        "showBuffer": true,
                        "snapshot": false,
                        "showBarTime": 5000,
                        "useFlashPrism": true,
                        "waitingTimeout": 60

                    }, function (player) {
                        //加载成功,清空错误提示
                        $(".prism-ErrorMessage").empty();
                        $("#eventvideo").attr("poster", con.WebServiceUrl + "Content/images/sxt-videoli.png");
                    })
                })
            }, 1000);
        },
        //
        flyToDrone: function () {
            var data = require("tl_Drone").DroneHangarList;
            if (data) {
                var id = this.DroneHangarList.keys()[0]
                var nodename = "wrj" + id;
                var node = map.getSceneNode(con.AreaName, nodename)

                if (node) {
                    Q3D.globalCamera().flyToAxisView(node, 200, 1, function () { })
                }
            }
        },


        /*************************加载单个无人机-start*************************/
        loadDroneDetail: function (nodename) {
            com.LayerFlyto(121, function () {
                require("tl_Drone").loadDroneModel();
                require("tl_Drone").loadDroneCamera(nodename);
            })
        },
        //加载无人机模型
        loadDroneModel: function () {
            require("tl_Drone").clearPlane();
            //创建无人机模型
            var modelName = "wrj";
            var areaName = "gwh_xilou"; ///"gwh_xilou";
            var quanMesh = "Mesh/dajiangm600.mesh"
            var dronepath = areaName + "/" + modelName;
            var POS = "121.909119,30.883694,78.000053"
            var position = (POS).toGlobalVec3d().toLocalPos(areaName)


            var quanmodelOptions = {
                Position: Q3D.vector3(position),
                Orientation: Q3D.vector3(0, 0, 0),
                OrientationType: Q3D.Enums.nodeOrientationType.Self,
                Scale: Q3D.vector3(5, 5, 5),
                SkeletonAnimation: null,
                OnLoaded: function () {
                    //创建圆锥投影
                    var conePath = dronepath + "/TextCone";
                    var dronepos = Q3D.globalVec3d(Q3D.vector3d(map.getSceneNode(areaName, modelName).getAbsPos()).toGlobalVec3d());
                    var conepos = dronepos.longitude + "," + dronepos.latitude + ",-250";

                    var Pos = Q3D.vector3(conepos.toGlobalVec3d().toLocalPos(areaName));
                    map.createCone(conePath, {
                        //Material: ["Material/xihongqiao2_dz01.mtr", "Materialne_static.mtr"],
                        Alpha: 0.1,
                        Color: Q3D.colourValue("#0ad0ce", 1), //线的颜色 0000ff
                        Center: Q3D.vector3(Pos),
                        Radius: 30, //半径
                        Height: 250,//高度
                        //Anchor: Q3D.vector3(20,10,10),            
                    });


                    //无人机上加POI
                    var icon = "Texture/Common/wurenji.png";
                    var iconSize = Q3D.vector2(20, 22);
                    var createOptions = {
                        Position: Q3D.vector3(0, 1, 0),
                        Orientation: null,
                        OrientationType: Q3D.Enums.nodeOrientationType.Self,
                        Scale: Q3D.vector3(0.3, 0.3, 0.3),
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
                    var poiName = "POITourDrone_wurenji"
                    var node = map.getSceneNode("gwh_xilou", poiName)
                    if (node) {
                        map.destroySceneNode("gwh_xilou", poiName)
                    } else {
                        map.createPOI("gwh_xilou" + "/" + modelName + "/" + poiName, createOptions);
                    }
                }
            };

            var modelnode = map.getSceneNode(areaName, modelName)
            if (modelnode) {
                map.destroySceneNode(areaName, modelName);
                map.createModel(dronepath, quanMesh, quanmodelOptions);
            } else {
                map.createModel(dronepath, quanMesh, quanmodelOptions);
            }


            //创建动画
            var options = {
                CenterLine: ["121.909259,30.882365,500.000053".toGlobalVec3d(),	//动线中心线，由 QGlobalVec3d 坐标组成，表示每个位置点的实际经纬度
                    //"121.909259,30.882365,78.000053".toGlobalVec3d(),
                    //"121.909259,30.882365,78.000053".toGlobalVec3d(),
                    //"121.910060,30.883052,78.000000".toGlobalVec3d(),
                         "121.910954,30.883800,500.000076".toGlobalVec3d(),
                         "121.912005,30.884733,500.0001830".toGlobalVec3d(),
                         "121.912963,30.885574,500.000206".toGlobalVec3d(),
                         "121.913363,30.886051,500.000076".toGlobalVec3d(),
                         "121.914181,30.886709,500.653145".toGlobalVec3d(),
                         "121.914886,30.887295,500.000084".toGlobalVec3d()
                ],
                SecsFromStart: [0, 10, 20, 30, 40, 50, 60], //从起点开始算起的时间差，单位秒
                Heading: null,//每个位置上的水平偏转角度，若未提供该参数，则角度自动计算
                TotalTime: 140,//轨迹回放路上总用时，单位秒
                timeForDirAdjustion: 0.1,//用于调整方向的时间，单位为秒
                IsLoop: true,//是否循环播放，默认不循环执行
                IsAutoPlay: true, //是否自动播放，默认否
                PitchAllowed: false, //是否允许俯仰
                IsEndDestroy: false,
                BaseGlobalPos: null, //用于修正经纬度坐标, QGlobalVec3d类型, 只对传入的中心线点为QGlobalVec3d时有效
                OnAnimationEndFn: function () {//动画结束回调事件
                    map.destroySceneNode(areaName, modelName);
                }, //动画结束回调事件
            };

            require("tl_Drone").DroneMovieClip = map.roamByGPSTrack(areaName + "/" + modelName, options);
            require("tl_Drone").DroneMovieClip._mcInst.play();

        },

        //当前的POI选中
        choosePOI: function (nodename) {

            var icon = "Texture/Common/wurenji_hover.png";//

            var node = map.getSceneNode(con.AreaName, nodename)
            if (node) {
                node.asPOI().setIcon(icon);
                this.LastPOI_Clk = nodename
            }
        },
        //清除无人机
        clearPlane: function () {
            //社会综治-无人机视频清空
            try {
                if (require("tl_Drone").SocietyDrone_player) {
                    require("tl_Drone").SocietyDrone_player.loadByUrl("");
                    require("tl_Drone").SocietyDrone_player.dispose();
                    require("tl_Drone").SocietyDrone_player = null;
                }
            } catch (error) {
                console.log(error.message);
                //$.getScript(con.WebServiceUrl + "Scripts/Tools/aliplayer/aliplayer-min.js", function (script, textStatus, jqXHR) {});
            }
            var modelName = "wrj";
            var AreaName = con.AreaName;
            var quanpath = AreaName + "/" + modelName;
            var modelnode = map.getSceneNode(AreaName, modelName)
            if (modelnode) {
                map.destroySceneNode(AreaName, modelName)
            }

            var poiName = "POITourDrone_wurenji"
            var node = map.getSceneNode(con.AreaName, poiName)
            if (node) {
                map.destroySceneNode(con.AreaName, poiName)
            }
        },
        /*************************加载单个无人机-end*************************/


        //清空无人机POI
        clearDronePOI: function () {
            if (require("tl_Drone").TourDrone_player) {
                require("tl_Drone").TourDrone_player.dispose();
                require("tl_Drone").TourDrone_player = null;
            }
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

                    var poiname = "POITour" + name + "_" + data[i].id;
                    var node = map.getSceneNode(areaName + "/" + poiname);
                    if (node) {
                        map.getArea(areaName).destroySceneNode(poiname);
                        //node.setVisible(0);
                    }
                    var quanname = poiname + "_quan";
                    var quannode = map.getSceneNode(areaName + "/" + quanname);
                    if (quannode) {
                        //map.getArea(areaName).destroySceneNode(poiname);
                        map.destroySceneNode(areaName, quanname)
                    }

                    /*详情*/
                    var fullNodePath = areaName + "/PoiDroneInfo" + data[i].id;
                    if (map.getSceneNode(fullNodePath)) {
                        map.getArea(areaName).destroySceneNode(fullNodePath);
                    }
                }
                this.LayerType = null;
                this.POIData = null;
            }

        },
        closeCameraDetial: function () {
            try {
                if (require("tl_Drone").TourDrone_player) {
                    require("tl_Drone").TourDrone_player.loadByUrl("");
                    require("tl_Drone").TourDrone_player.dispose();
                    require("tl_Drone").TourDrone_player = null;
                }
            } catch (error) {
                console.log(error.message);
                //$.getScript(con.WebServiceUrl + "Scripts/Tools/aliplayer/aliplayer-min.js", function (script, textStatus, jqXHR) {});
            }

            $("#detail_tourplayer").html("");

            this.clearAllChoosePoi();
        },
        //清除所有选中的POI
        clearAllChoosePoi: function () {
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var icon = "Texture/Common/wurenji.png";
                var lastNode = map.getSceneNode(con.AreaName, this.LastPOI_Clk);
                if (lastNode) {
                    lastNode.asPOI().setIcon(icon);
                }
                this.LastPOI_Clk = "";
            }
        },
        //清空无人机
        clearDrone: function () {
            //清除定时器
            if (require('tl_Drone').DroneInter != null) {
                window.clearInterval(require('tl_Drone').DroneInter)
                require('tl_Drone').DroneInter = null;
            }


            ////清空
            if (require('tl_Drone').DroneHangarList != null && require('tl_Drone').DroneHangarList != undefined) {
                var Data = require('tl_Drone').DroneHangarList
                if (Data.size() > 0) {
                    for (i = 0; i < Data.size() ; i++) {
                        var key = Data.keys()[i];
                        var node1 = map.getSceneNode("gwh_xilou", "wrj" + key);
                        var node2 = map.getSceneNode("gwh_xilou", "TextCone" + key);
                        var node3 = map.getSceneNode("gwh_xilou", "POITourDrone_" + key);

                        if (node1) {
                            node1.setVisible(0)
                            //map.destroySceneNode(con.AreaName, "POISocietyDrone_wurenji" + key);
                        }
                        if (node2) { node2.setVisible(0) }
                        if (node3) { node3.setVisible(0) }
                    }

                    require('tl_Drone').DroneHangarList.clear();
                }
            }

            //
            if (require('tl_Drone').DroneFirstTimeList != null && require('tl_Drone').DroneFirstTimeList != undefined) {
                if (require('tl_Drone').DroneFirstTimeList.size() > 0) {
                    require('tl_Drone').DroneFirstTimeList.clear();
                }
            }
        },

        Revert: function () {
            require('tl_Drone').closeDroneKuDetailWindow()
            require('tl_Drone').closeCameraDetial();
            require('tl_Drone').clearDronePOI();
            require('tl_Drone').clearDrone();

            //this.clearPlane();
        }
    }
})