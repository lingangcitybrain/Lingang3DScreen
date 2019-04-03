define(["config", "common", "t_Echart", "tl_Bus", "tl_Metro", "tl_Camera", "tl_Drone", "tl_Event", "tl_ParkingLot", "tl_RoadCondition", "tl_TrafficSimulation", "tl_StreamCalculate", "tl_VisitorsMap", "t_LayerMenuData"],
    function (con, com, t_Echart, tl_Bus,tl_Metro, tl_Camera, tl_Drone, tl_Event, tl_ParkingLot, tl_RoadCondition, tl_TrafficSimulation, tl_StreamCalculate,tl_VisitorsMap,t_LayerMenuData) {
        return {
            LayerCatalog: {
                Camera: { Id: 1, TextName: "摄像头", Name: "Camera", Level: 1, ChooseIcon: "Texture/Common/camera_hover.png", UnChooseIcon: "Texture/Common/camera.png" },
                ParkingLot: { Id: 2, TextName: "停车场", Name: "ParkingLot", Level: 1, ChooseIcon: "Texture/Common/stop_hover.png", UnChooseIcon: "Texture/Common/stop.png" },
                Bus: {Id: 1, TextName: "公交", Name: "Bus", Level: 2,ChooseIcon: "Texture/Common/bus_hover.png", UnChooseIcon: "Texture/Common/bus.png" },
                Metro: { Id: 1, TextName: "地铁", Name: "Metro", Level: 1, ChooseIcon: "Texture/Common/metro_hover.png", UnChooseIcon: "Texture/Common/metro.png" },
                Event: { Id: 5, TextName: "事件", Name: "Event", Level: 1, ChooseIcon: "Texture/Common/event_hover.png", UnChooseIcon: "Texture/Common/event.png" }
            },
            left02_video01: null,
            left02_video01: null,
            left02_video01: null,
            loadMain: function () {
                //this.Revert();
                this.clearvideo();
            //this.loadHeaderMenu();//加载头部菜单
            this.loadBottomMenu();//加载底部图层
            this.loadLeaft1();//加载左侧第一列
            this.loadLeaft2();//加载左侧第二列
            require("t_Main").loadCenter();//加载中间列
            this.loadRight1();//加载右侧第一列
            this.loadRight2();//加载右侧第二列

            setTimeout(function () {
                //加载滚动条
                require(['nicescroll'], function (data) {
                        $('.scrolldiv').perfectScrollbar({ cursorwidth: 10, cursorcolor: "rgba(0, 126, 179, .6)", });
                });
                
                //加载图表
                t_Echart.loadEcharts();
                //加载视频
              
            }, 1500);
        },
        //加载头部菜单
        loadHeaderMenu:function()
        {
            var url = con.HtmlUrl + 'Tour/Header_Menu.html';
            require(['text!' + url], function (template) {
                $("#header_menu").html(template);
                $("#header_menu").show('drop', 1000);//左侧
            })
        },
        //加载底部图层
        loadBottomMenu:function()
        {
            var url = con.HtmlUrl + 'Tour/Bottom_Menu.html';
            require(['text!' + url], function (template) {
                $("#bottom_menu").html(template);
                $("#bottom_menu").show('drop', 1000);//左侧
                require("t_Main").ChangeLayer();
            })
        },
        //加载左侧第一列
        loadLeaft1:function()
        {
            var url = con.HtmlUrl + 'Tour/Left01_Container.html';
            require(['text!' + url], function (template) {
                $("#left_01").html(template);
                $("#left_01").show('drop', 1000);//左侧
            })
        },
        //加载左侧第二列
        loadLeaft2: function () {
            

            var url = con.HtmlUrl + 'Tour/Left02_Container.html';
            require(['text!' + url], function (template) {
                $("#left_02").html(template);
                $("#left_02").show('drop', 1000);//左侧
                setTimeout(function () {
                    require("t_Main").loadLeft2_Video();
                }, 1500);
            })
        },
        //加载视频
        loadLeft2_Video: function () {
            var videowidth = $(".sxt-videoli").width();
            var videoheight = $(".sxt-videoli").height();
            if (require("t_Main").left02_video01) { require("t_Main").left02_video01.dispose(); }
            if (require("t_Main").left02_video02) { require("t_Main").left02_video02.dispose(); }
            if (require("t_Main").left02_video03) { require("t_Main").left02_video03.dispose(); }
            $("#left02_video01").empty();
            $("#left02_video02").empty();
            $("#left02_video03").empty();
            require(['aliplayer'], function (data) {
                require("t_Main").left02_video01 = new Aliplayer({
                    "id": "left02_video01",
                    "source": "http://106.14.152.119:8082/videoGetStream/103.214.87.67:11937/citybrain/31011900011328031001.flv?vhost=cb.alivecdn.com",
                    "width": videowidth+"px",
                    "height": videoheight+"px",
                    "autoplay": true,
                    "isLive": true,
                    "rePlay": false,
                    "showBuffer": true,
                    "snapshot": false,
                    "showBarTime": 5000,
                    "useFlashPrism": true,

                }, function (player) {
                    //加载成功,清空错误提示
                    $(".prism-ErrorMessage").empty()
                })
                require("t_Main").left02_video02 = new Aliplayer({
                    "id": "left02_video02",
                    "source": "http://106.14.152.119:8082/videoGetStream/103.214.87.67:11937/citybrain/31011900081316001124.flv?vhost=cb.alivecdn.com",
                    "width": videowidth + "px",
                    "height": videoheight + "px",
                    "autoplay": true,
                    "isLive": true,
                    "rePlay": false,
                    "showBuffer": true,
                    "snapshot": false,
                    "showBarTime": 5000,
                    "useFlashPrism": true,

                }, function (player) {
                    $(".prism-ErrorMessage").empty()
                })
                require("t_Main").left02_video03 = new Aliplayer({
                    "id": "left02_video03",
                    "source": "http://106.14.152.119:8082/videoGetStream/103.214.87.67:11937/citybrain/31011900081316001152.flv?vhost=cb.alivecdn.com",
                    "width": videowidth + "px",
                    "height": videoheight + "px",
                    "autoplay": true,
                    "isLive": true,
                    "rePlay": false,
                    "showBuffer": true,
                    "snapshot": false,
                    "showBarTime": 5000,
                    "useFlashPrism": true,

                }, function (player) {
                   $(".prism-ErrorMessage").empty()
                });
            });
        },
        //加载中间列
        loadCenter: function () {
            var url = con.HtmlUrl + 'Tour/Centre_Container.html';
            require(['text!' + url], function (template) {
                $("#centre_01").html(template);
                $("#centre_01").show('drop', 1000);//左侧

                ////数字跳动动画
                //require(['animateNumber'], function () {
                //    $('#tour_count')
                //       .prop('number', lastcount)
                //       .animateNumber(
                //       {
                //           number: count
                //       },
                //       2000
                //    );
                //});
            })
        },
        //加载右侧第一列
        loadRight1: function () {
            var url = con.HtmlUrl + 'Tour/Right01_Container.html';
            require(['text!' + url], function (template) {
                $("#right_01").html(template);
                $("#right_01").show('drop', 1000);//左侧
            })
        },
        //加载右侧第二列
        loadRight2: function () {
            var url = con.HtmlUrl + 'Tour/Right02_Container.html';
            require(['text!' + url], function (template) {
                $("#right_02").html(template);
                $("#right_02").show('drop', 1000);//左侧

                tl_Event.loadEventList();//加载事件列表
            })
        },
        //////////////////////////////////////////////////////////////////////////////////////////
        //点击底部的菜单
        ChangeLayer: function () {
            //社区综治
            $("#bottom_menu ul li").each(function (index) {//便利对象
                $(this).click(function () {//点击触发事件
                    $("li").removeClass("active");//删除当前元素的样式
                    $("li").eq(index).addClass("active");//添加当前元素的样式
                    var menuname = $("li").eq(index).text();
                    require("t_Main").showLayer(menuname);
                });
            });
        },

        //切换显示图层
        showLayer: function (menuname) {
            this.Revert();
            switch (menuname) {
                case "人流热力图":
                    tl_VisitorsMap.loadVisitorsMap();
                    break;
                case "实时路况":
                    tl_RoadCondition.loadRoadCondition();
                    break;
                case "摄像头":
                    tl_Camera.loadCamera();
                    break;
                case "无人机":
                    tl_Drone.loadDrone();
                    break;
                case "停车场":
                    tl_ParkingLot.loadParkingLot();
                    break;
                case "公交":
                    tl_Bus.loadBus();
                    tl_Metro.loadMetro();
                    break;
                case "事件":
                    tl_Event.loadEvent();
                    break;
                case "人流预测":
                    tl_StreamCalculate.loadStream();
                    break;
                case "交通仿真":
                    tl_TrafficSimulation.loadTrafficSimulation();   
                    break;
                default:
            }
        },
            //POI事件响应
        PoiEvent: function (nodename) {
            var str = nodename
            var poitype = "";
            var id = "";
            if (str.indexOf("_") > -1) {
                poitype = str.split("_")[0];
                poitype = poitype.replace("GardenBuilding", "")

                id = str.split("_")[1];
            }

            switch (poitype) {
                case "Camera": //摄像头
                    tl_Camera.loadCameraDetial(nodename)
                    break;
                default:
            }
        },
        clearvideo: function () {
            if (require("t_Main").left02_video01) { require("t_Main").left02_video01.dispose(); }
            if (require("t_Main").left02_video02) { require("t_Main").left02_video02.dispose(); }
            if (require("t_Main").left02_video03) { require("t_Main").left02_video03.dispose(); }
            $("#left02_video01").empty();
            $("#left02_video02").empty();
            $("#left02_video03").empty();
        },
        //清空
        Revert: function () {
            tl_Bus.Revert();
            tl_Metro.Revert();
            tl_Camera.Revert();
            tl_Drone.Revert();
            tl_Event.Revert();
            tl_ParkingLot.Revert();
            tl_RoadCondition.Revert();
            tl_StreamCalculate.Revert();
            tl_TrafficSimulation.Revert();
            tl_VisitorsMap.Revert();
        }
    }
});