define(["config", "common", "util"], function (con, com, util) {
    return {
        LayerType: null,//选择无人机
        POIData: null,//POI详情数据
        LastPOI_Clk: null,//鼠标选中POI
        TourDrone_player: null,
        DroneMovieClip: null,
        DroneList: new util.HashMap,
        DroneFirstTimeList: new util.HashMap,
        DroneInter: null,
        flag:0,//
        loadDrone: function () {
            this.Revert();
            require("mainMenu").LayerFlyto(12, function () { })




            require("tl_Drone").loadDronePOI();
            //require("tl_Drone").loadDroneModel();

            //无人机采用实际的数据
            require("tl_Drone").loadDroneModelForList();



            //setTimeout(function () {require("tl_Drone").flyToDrone();}, 1000);


            require("tl_Drone").DroneInter = setInterval(function () {
                require("tl_Drone").loadDroneModelForList();
            }, 2000);
        },
        //
        flyToDrone:function(){
            var data = require("tl_Drone").DroneList;
            if (data)
            {
                var id = this.DroneList.keys()[0]
                var nodename =  "wrj" + id;
                var node = map.getSceneNode(con.AreaName, nodename)

                if (node){
                    Q3D.globalCamera().flyToAxisView(node, 200, 1, function () { })
                }
            }
        },
        loadDronePOI: function () {
            this.LayerType = require("t_Main").LayerCatalog.Drone;
            var post_data = { "offset": "0", "count": "1000" }

            require("t_LayerMenuAjax").getDroneList(post_data, function (result) {
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
                            //创建子POI显示
                            require("tl_Drone").loadDroneKuDetail(areaName, poiName, "Texture/Common/wurenji_detail" + row.id + ".png", row.id);
                        },
                    }
                    map.createPOI(areaName + "/" + poiName, options)
                }
            });
        },
        //加载无人机库详情
        loadDroneKuDetail: function (AreaName, parentName, icon, id) {
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
        loadDroneDetail: function (nodename) {
            require("mainMenu").LayerFlyto(121, function () {
                require("tl_Drone").loadDroneModel();
                require("tl_Drone").loadDroneCamera(nodename);
            })
        },

        //根据实时接口加载无人机
        loadDroneModelForList:function()
        {
            //console.log("loadDroneModelForList");
            var post_data = { "offset": "", "count": "" }
            require("t_LayerMenuAjax").getDronePosList(post_data, function (result) {               
                //if (require('tl_Drone').DroneInter) {

                //}
                if (result != null && require('tl_Drone').DroneInter!=null)
                {
                    //console.log("getDronePosList");
                    //无人机相应的字段
                    /*
                    "creator": "",
                    "wrj_id": 364,
                    "lng": 121.89602,
                    "create_time": "2019-02-16 15:35:00",
                    "gps_count": "",
                    "modify_time": "2019-03-28 18:17:40",
                    "is_delete": "0",
                    "remaining_time": "",
                    "bat": 0,
                    "v_speed": 0,
                    "angle1": -125,
                    "angle2": 65,
                    "h_speed": 0,
                    "lat": 30.90591,
                    "height": 0,
                    "status": "NaN"
                    */
                    for (var i = 0; i < result.length;i++)
                    {

                           //创建无人机模型
                            var id = result[i].wrj_id.toString();
                            var lng = result[i].lng.toString();
                            var lat = result[i].lat.toString();
                            var height = result[i].height.toString();
                            var modify_time = result[i].modify_time.toString();

                           
                            //if (height != "" && height != 0) {
                            if (height != "" && lng != "" && lat != "") {
                                var Coordinate = com.gcj02towgs84(parseFloat(lng), parseFloat(lat));

                                var modelName = "wrj" + id;
                                var areaName = con.AreaName; ///"gwh_xilou";
                                var quanMesh = "Mesh/dajiangm600.mesh"

                                var dronepath = areaName + "/" + modelName;
                                //var POS = lng + "," + lat + ",70";  //"121.909119,30.883694,500.000053"
                                //var POS = lng + "," + lat + ",70";

                                var POS = Coordinate + ",70";


                                var position = (POS).toGlobalVec3d().toLocalPos(areaName)


                                var nodePath = areaName + "/" + modelName;
                                var nextpos = Q3D.vector3(position);
                                var seconds  = 0;
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
                                        var poiName = "POITourDrone_wurenji" + id
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


                                     var poiName = "POITourDrone_wurenji" + id
                                     var poinode = map.getSceneNode(con.AreaName, poiName)
                                     if (poinode){
                                         poinode.setVisible(1)
                                     }




                                    //添加无人机追踪数据
                                    var lastdata = require("tl_Drone").DroneFirstTimeList.get(id)
                                    if (lastdata) {
                                        var lasttime = lastdata.modify_time;
                                        seconds = com.GetDateDiff(lasttime, modify_time, "second")
                                        if (seconds > 0) {
                                            require("tl_Drone").DroneTrack(nodePath, nextpos, seconds)
                                        }
                                    }
                                } else {
                                    map.createModel(dronepath, quanMesh, quanmodelOptions);

                                    require("tl_Drone").DroneFirstTimeList.put(id, result[i]);
                                }

                         }

                        //缓存无人机数据
                        require("tl_Drone").DroneList.put(id, result[i]);
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
                SecsFromStart: [0,  10, 20, 30, 40, 50, 60], //从起点开始算起的时间差，单位秒
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
        //加载无人机视频
        loadDroneCamera: function (nodename) {
            //
            this.choosePOI(nodename)

            //require("sl_Drone").loadDroneCamera();
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


                require("t_LayerMenuAjax").getDroneVideo(post_data, function (result) {
                    for (var i = 0; i < result.length; i++)
                    {
                        var id      = result[i].id;
                        var playUrl = result[i].playUrl;
                        if (id == 364 && playUrl != ""){                            
                            require("tl_Drone").openDroneVideo(playUrl);
                        }
                    }                  
                })
            });
        },
        //当前的POI选中
        choosePOI:function(nodename)
        {

            var icon = "Texture/Common/wurenji_hover.png";//

            var node = map.getSceneNode(con.AreaName, nodename)
            if (node){
                node.asPOI().setIcon(icon);
                this.LastPOI_Clk = nodename
            }
        },
        //清除所有选中的POI
        clearAllChoosePoi:function()
        {
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var icon = "Texture/Common/wurenji.png";
                var lastNode = map.getSceneNode(con.AreaName, this.LastPOI_Clk);
                if (lastNode) {
                    lastNode.asPOI().setIcon(icon);
                }
                this.LastPOI_Clk = "";
            }
        },
        //加载无人机视频
        openDroneVideo:function(url)
        {
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

            if (require("tl_Drone").TourDrone_player) {
                require("tl_Drone").TourDrone_player.loadByUrl("");
                require("tl_Drone").TourDrone_player.dispose();
                require("tl_Drone").TourDrone_player = null;
            }

           
            $("#detail_tourplayer").html("");

            this.clearAllChoosePoi();
        },

        //清除无人机
        clearPlane: function () {
            //社会综治-无人机视频清空
            if (require("tl_Drone").SocietyDrone_player) {
                require("tl_Drone").SocietyDrone_player.loadByUrl("");
                require("tl_Drone").SocietyDrone_player.dispose();
                require("tl_Drone").SocietyDrone_player = null;
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
        //清空无人机
        clearDrone:function()
        {
            //清除定时器
            if (require('tl_Drone').DroneInter != null){
                window.clearInterval(require('tl_Drone').DroneInter)
                require('tl_Drone').DroneInter = null;
            }


            ////清空
            if (require('tl_Drone').DroneList != null && require('tl_Drone').DroneList != undefined)
            {
                var Data = require('tl_Drone').DroneList
                if (Data.size() > 0) {
                    for (i = 0; i < Data.size() ; i++) {
                        var key = Data.keys()[i];
                        var node1 = map.getSceneNode(con.AreaName, "wrj" + key);
                        //var node2 = map.getSceneNode(con.AreaName, "TextCone" + key);
                        var node3 = map.getSceneNode(con.AreaName, "POITourDrone_wurenji" + key);
                        
                        if (node3) {
                            node3.setVisible(0)
                            //map.destroySceneNode(con.AreaName, "POITourDrone_wurenji" + key);
                        }
                        //if (node2) { map.destroySceneNode(con.AreaName, "TextCone" + key); }
                         //if (node1) { map.destroySceneNode(con.AreaName, "wrj" + key); }
                        
                    }

                    require('tl_Drone').DroneList.clear();
                }                
            }

            //
            if (require('tl_Drone').DroneFirstTimeList != null && require('tl_Drone').DroneFirstTimeList != undefined) {
                if (require('tl_Drone').DroneFirstTimeList.size() > 0){
                    require('tl_Drone').DroneFirstTimeList.clear();
                }
            }     
        },
        Revert: function () {
            require('tl_Drone').closeCameraDetial();
            require('tl_Drone').clearDronePOI();
            require('tl_Drone').clearDrone();

            //this.clearPlane();
        }
    }
})