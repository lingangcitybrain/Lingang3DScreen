define(["config", "common", "t_LayerMenuAjax", "animsition", "t_Echart", "tl_Bus", "tl_Metro", "tl_Camera", "tl_Drone", "tl_Event", "tl_ParkingLot", "tl_RoadCondition", "tl_TrafficSimulation", "tl_StreamCalculate", "tl_VisitorsMap", "t_LayerMenuData"],
    function (con, com, t_LayerMenuAjax, animsition, t_Echart, tl_Bus, tl_Metro, tl_Camera, tl_Drone, tl_Event, tl_ParkingLot, tl_RoadCondition, tl_TrafficSimulation, tl_StreamCalculate, tl_VisitorsMap, t_LayerMenuData) {
        return {
            LayerCatalog: {
                Camera: { Id: 1, TextName: "摄像头", Name: "Camera", Level: 1, ChooseIcon: "Texture/Common/camera_hover.png", UnChooseIcon: "Texture/Common/camera.png" },
                ParkingLot: { Id: 2, TextName: "停车场", Name: "ParkingLot", Level: 1, ChooseIcon: "Texture/Common/stop_hover.png", UnChooseIcon: "Texture/Common/stop.png" },
                Bus: { Id: 1, TextName: "公交", Name: "Bus", Level: 2, ChooseIcon: "Texture/Common/bus_hover.png", UnChooseIcon: "Texture/Common/bus.png" },
                Metro: { Id: 1, TextName: "地铁", Name: "Metro", Level: 1, ChooseIcon: "Texture/Common/metro_hover.png", UnChooseIcon: "Texture/Common/metro.png" },
                Event: { Id: 5, TextName: "事件", Name: "Event", Level: 1, ChooseIcon: "Texture/Common/event_hover.png", UnChooseIcon: "Texture/Common/event.png" },
                DroneHangar: {
                    Id: 6, TextName: "无人机库", Name: "DHangar", Level: 1, ChooseIcon: "Texture/Common/wurenjiku_hover.png", UnChooseIcon: "Texture/Common/wurenjiku.png"
                }
            },
            left02_video01: null,
            left02_video01: null,
            left02_video01: null,
            tourhtml_wurenji01: null,
            Interval1: null,//园区总人数
            Interval2: null,//园区车辆数
            Interval3: null,//
            Interval4: null,//
            Interval5: null,//
            IntervalMain: null,//
            currentPopulation: 0,   //园区总人数
            currentCarNum: 0,   //园区内车辆
            estimate30mParkVehicleNo: 0,   //未来30分钟预测车辆
            outerPeople: 0,   //园区周边人数
            estimateOuterParkPeopleNo: 0,   //未来30分钟预测人数
            loadMain: function (callback) {

                tl_VisitorsMap.loadVisitorsMap();
                //this.Revert();
                //this.loadBottomMenu();//加载底部图层

                this.loadLeftFirst1();//加载左侧第一列第一个div
                this.loadLeftFirst2();//
                this.loadLeftFirst3();//
                this.loadLeftFirst4();//

                this.loadLeftSecond1();//加载左侧第二列第一个div
                this.loadLeftSecond2();//
                this.loadLeftSecond3();//

                this.loadCenter1();//加载中间列

                this.loadRightFirst1();//加载右侧第一列第一个div
                this.loadRightFirst2();//
                this.loadRightFirst3();//

                this.loadRightSecond1();//加载右侧第二列第一个div
                this.loadRightSecond2();//
                this.loadRightSecond3();//                

                this.closeOtherUi();

                //加载滚动条
                require(['nicescroll'], function (data) {
                    $('.scrolldiv').perfectScrollbar({ cursorwidth: 10, cursorcolor: "rgba(0, 126, 179, .6)", });
                });

                if ($.isFunction(callback))
                    callback();
            },

            //特效加载
            specialEffects: function () {
                t_Echart.loadEcharts();
            },
            hideDiv: function () {
                $(".pj-lshadow").hide()
                $(".pj-rshadow").hide()

                $("#left_first_01").css('display', 'none');
                $("#left_first_02").css('display', 'none');
                $("#left_first_03").css('display', 'none');
                $("#left_first_04").css('display', 'none');

                $("#left_second_01").css('display', 'none');
                $("#left_second_02").css('display', 'none');
                $("#left_second_03").css('display', 'none');
                $("#left_second_04").css('display', 'none');

                $("#right_first_01").css('display', 'none');
                $("#right_first_02").css('display', 'none');
                $("#right_first_03").css('display', 'none');
                $("#right_first_04").css('display', 'none');

                $("#right_second_01").css('display', 'none');
                $("#right_second_02").css('display', 'none');
                $("#right_second_03").css('display', 'none');
                $("#right_second_04").css('display', 'none');
            },

            /*****************************左侧第一列*****************************/

            //加载第一个div
            loadLeftFirst1: function () {
                var option = {
                    aniDom: "#left01_01",
                    htmlDom: "#left_first_01",
                    url: con.HtmlUrl + 'TourNew/Left_First_01.html'
                }
                com.UIControlAni(option, function () {
                    require("t_Echart").ykhx();//游客画像
                });
            },
            //加载第二个div
            loadLeftFirst2: function () {
                var option = {
                    aniDom: "#left01_02",
                    htmlDom: "#left_first_02",
                    url: con.HtmlUrl + 'TourNew/Left_First_02.html'
                }
                com.UIControlAni(option, function () {
                    require("t_Echart").ykfx()
                    //require("t_Echart").Interval6 = setInterval(function () { require("t_Echart").ykfx() }, 5000)
                });
            },
            //加载第三个div
            loadLeftFirst3: function () {
                var option = {
                    aniDom: "#left01_03",
                    htmlDom: "#left_first_03",
                    url: con.HtmlUrl + 'TourNew/Left_First_03.html'
                }
                com.UIControlAni(option, function () {
                    require("t_Echart").ykqsfx();//游客趋势分析
                    //require("t_Echart").Interval7 = setInterval(function () { require("t_Echart").ykqsfx() }, 5000)
                });
            },
            //加载第四个div
            loadLeftFirst4: function () {
                var option = {
                    aniDom: "#left01_04",
                    htmlDom: "#left_first_04",
                    url: con.HtmlUrl + 'TourNew/Left_First_04.html'
                }
                com.UIControlAni(option, function () {
                    require("t_Echart").yqfx();//舆情分析
                    //require("t_Echart").Interval8 = setInterval(function () { require("t_Echart").yqfx() }, 5000)
                    require("t_Echart").yqxxs();//舆情分析
                });
            },
            hideLeft01Div: function () {
                $("#left_first_01").css('display', 'none');
                $("#left_first_02").css('display', 'none');
                $("#left_first_03").css('display', 'none');
                $("#left_first_04").css('display', 'none');
            },
            showLeft01Div: function () {
                $("#left_first_01").css('display', 'block');
                $("#left_first_02").css('display', 'block');
                $("#left_first_03").css('display', 'block');
                $("#left_first_04").css('display', 'block');
            },
            /*****************************左侧第二列*****************************/
            //加载第一个div
            loadLeftSecond1: function () {
                var option = {
                    aniDom: "#left02_01",
                    htmlDom: "#left_second_01",
                    url: con.HtmlUrl + 'TourNew/Left_Second_01.html'
                }
                com.UIControlAni(option, function () {
                    require("t_Echart").wrj();
                    //require("t_Echart").Interval9 = setInterval(function () { require("t_Echart").wrj() }, 5000)
                    setTimeout(function () { require("t_Main").loadLeft02_01_Video() }, 800);//无人机视频
                });
            },
            //加载第二个div
            loadLeftSecond2: function () {
                var option = {
                    aniDom: "#left02_02",
                    htmlDom: "#left_second_02",
                    url: con.HtmlUrl + 'TourNew/Left_Second_02.html'
                }
                com.UIControlAni(option, function () {
                    setTimeout(function () {
                        require("t_Main").loadLeft2_Video()
                    }, 800);//加载视频
                });
            },
            //加载第三个div
            loadLeftSecond3: function () {
                var option = {
                    aniDom: "#left02_03",
                    htmlDom: "#left_second_03",
                    url: con.HtmlUrl + 'TourNew/Left_Second_03.html'
                }
                com.UIControlAni(option, function () {
                    require("t_Echart").jtxxtj();
                    require("t_Echart").jtxx();//交通信息 
                    
                    //require("t_Echart").Interval10 = setInterval(function () { require("t_Echart").jtxx() }, 5000)
                });
            },
            hideLeft02Div: function () {
                $("#left_second_01").css('display', 'none');
                $("#left_second_02").css('display', 'none');
                $("#left_second_03").css('display', 'none');
                $("#left_second_04").css('display', 'none');
            },
            showLeft02Div: function () {
                $("#left_second_01").css('display', 'block');
                $("#left_second_02").css('display', 'block');
                $("#left_second_03").css('display', 'block');
                $("#left_second_04").css('display', 'block');
            },
            /*****************************中间*****************************/
            loadCenter1: function () {
                var url = con.HtmlUrl + 'TourNew/Center_01.html';
                require(['text!' + url], function (template) {
                    $("#center_01").html(template);
                    $("#center_01").show('drop', 1000);//左侧
                    //require("t_Echart").parkcount();//人员车辆统计



                    if (con.IsInterface == false) {
                        require("t_Main").numberAni();
                        require("t_Main").totalsNumUp(); //取模拟数据
                    } else {
                        //require("t_Main").numberAni();//
                        require("t_Main").totalsRefresh();//
                        require("t_Main").totalsNumUpForReal();


                        require("t_Main").IntervalMain = setInterval(function () {
                            require("t_Main").totalsRefresh(); //取真实数据
                        }, 1000 * 30)
                    }
                })
            },
            /*****************************右侧第一列*****************************/
            //加载第一个div
            loadRightFirst1: function () {
                var option = {
                    aniDom: "#right01_01",
                    htmlDom: "#right_first_01",
                    url: con.HtmlUrl + 'TourNew/Right_First_01.html',
                    leftOrRight: 'right'
                }
                com.UIControlAni(option, function () {
                    require("t_Echart").zxsxt()
                    require("t_Echart").rq();
                    //require("t_Echart").rycltj();//人员车辆统计
                    //require("t_Echart").personCarTotal();
                    require("t_Echart").personTotal_xj();
                    setInterval(function () { require("t_Echart").personTotal_xj();}, 60 * 1000 * 30)
                    //require("t_Echart").personTotal();
                    //require("t_Echart").rycltj();//人员车辆统计
                    //require("t_Echart").Interval11 = setInterval(function () { require("t_Echart").rycltj() }, 5000)

                });
            },
            //加载第二个div
            loadRightFirst2: function () {
                var option = {
                    aniDom: "#right01_02",
                    htmlDom: "#right_first_02",
                    url: con.HtmlUrl + 'TourNew/Right_First_02.html',
                    leftOrRight: 'right'
                }
                com.UIControlAni(option, function () {
                    require("t_Echart").tccsyqk({"count": 666});//停车场使用情况
                    //require("t_Echart").Interval12 = setInterval(function () { require("t_Echart").tccsyqk() }, 5000)
                });
            },
            //加载第三个div
            loadRightFirst3: function () {
                var option = {
                    aniDom: "#right01_03",
                    htmlDom: "#right_first_03",
                    url: con.HtmlUrl + 'TourNew/Right_First_03.html',
                    leftOrRight: 'right'
                }
                com.UIControlAni(option, function () {
                    require("t_Echart").jwrsjtj();//近五日事件统计
                    setInterval(function () { require("t_Echart").yqsjlbtj() }, 60 * 1000 * 30)
                });
            },

            hideRight01Div: function () {
                $("#right_first_01").css('display', 'none');
                $("#right_first_02").css('display', 'none');
                $("#right_first_03").css('display', 'none');
                $("#right_first_04").css('display', 'none');
            },
            showRight01Div: function () {
                $("#right_first_01").css('display', 'block');
                $("#right_first_02").css('display', 'block');
                $("#right_first_03").css('display', 'block');
                $("#right_first_04").css('display', 'block');
            },
            /*****************************右侧第二列*****************************/
            //加载第一个div
            loadRightSecond1: function () {
                var option = {
                    aniDom: "#right02_01",
                    htmlDom: "#right_second_01",
                    url: con.HtmlUrl + 'TourNew/Right_Second_01.html',
                    leftOrRight: 'right'
                }
                com.UIControlAni(option, function () {
                    return null;
                });
            },
            //加载第二个div
            loadRightSecond2: function () {
                var option = {
                    aniDom: "#right02_02",
                    htmlDom: "#right_second_02",
                    url: con.HtmlUrl + 'TourNew/Right_Second_02.html',
                    leftOrRight: 'right'
                }
                com.UIControlAni(option, function () {
                    require("t_Echart").yqsjlblx();//园区事件列表类型 
                    require("t_Echart").yqsjlbqy();//园区事件列表区域
                    
                });
            },
            //加载第三个div
            loadRightSecond3: function () {
                var option = {
                    aniDom: "#right02_03",
                    htmlDom: "#right_second_03",
                    url: con.HtmlUrl + 'TourNew/Right_Second_03.html',
                    leftOrRight: 'right'
                }
                com.UIControlAni(option, function () {
                    //return null;
                    require("t_Echart").yqsjlbtj();//园区事件统计
                    setInterval(function () { require("t_Echart").yqsjlbtj() }, 60 * 1000 * 15)

                });
            },
            hideRight02Div: function () {
                $("#right_second_01").css('display', 'none');
                $("#right_second_02").css('display', 'none');
                $("#right_second_03").css('display', 'none');
                $("#right_second_04").css('display', 'none');
            },
            showRight01Div: function () {
                $("#right_second_01").css('display', 'block');
                $("#right_second_02").css('display', 'block');
                $("#right_second_03").css('display', 'block');
                $("#right_second_04").css('display', 'block');
            },
            // 关闭其他的
            closeOtherUi: function () {
                //左侧第1列第4个
                var option14 = {
                    aniDom: "#left01_04",
                    htmlDom: "#left_first_04",
                    url: '',
                    leftOrRight: 'left'
                }
                com.UIControlAni(option14, null);
                //左侧第2列第4个
                var optionL24 = {
                    aniDom: "#left02_04",
                    htmlDom: "#left_second_04",
                    url: '',
                    leftOrRight: 'left'
                }
                com.UIControlAni(optionL24, null);
                //右侧第1列第4个
                var optionR14 = {
                    aniDom: "#right01_04",
                    htmlDom: "#right_first_04",
                    url: '',
                    leftOrRight: 'right'
                }
                com.UIControlAni(optionR14, null);
                //右侧第2列第4个
                var optionR24 = {
                    aniDom: "#right02_04",
                    htmlDom: "#right_second_04",
                    url: '',
                    leftOrRight: 'right'
                }
                com.UIControlAni(optionR24, null);

            },
            /**********************************************************/
            //加载视频
            loadLeft2_Video: function () {
                var videowidth = $(".sxt-videoli").width();
                var videoheight = $(".sxt-videoli").height();
                try {
                    if (require("t_Main").left02_video01) {
                        require("t_Main").left02_video01.loadByUrl("");
                        require("t_Main").left02_video01.dispose();
                        require("t_Main").left02_video01 = null;
                    }
                    if (require("t_Main").left02_video02) {
                        require("t_Main").left02_video02.loadByUrl("");
                        require("t_Main").left02_video02.dispose();
                        require("t_Main").left02_video02 = null;
                    }
                } catch (error) {
                    console.log(error.message);
                    //$.getScript(con.WebServiceUrl + "Scripts/Tools/aliplayer/aliplayer-min.js", function (script, textStatus, jqXHR) {});
                }
                $("#left02_video01").empty();
                $("#left02_video02").empty();

                require(['aliplayer'], function (data) {
                    //var post_data = { "sbbm": "31011900081326016004" }
                    var post_data = { "sbbm": "31011900081326016002" }

                    require("t_LayerMenuAjax").getCameraUrlById(post_data, function (result) {
                        var cameraurl1 = result.data;
                        //console.log('A:'+cameraurl)
                        require("t_Main").left02_video01 = new Aliplayer({
                            "id": "left02_video01",
                            "source": cameraurl1,
                            //"width": videowidth + "px",
                            //"height": videoheight + "px",
                            "autoplay": true,
                            "isLive": true,
                            "rePlay": false,
                            "showBuffer": true,
                            "snapshot": false,
                            "showBarTime": 5000,
                            "useFlashPrism": true,
                        }, function (player) {
                            //加载成功,清空错误提示
                            $(".prism-ErrorMessage").empty();
                        })
                    });
                    //var post_data = { "sbbm": "31011900081316001191" }
                    var post_data = { "sbbm": "31011900081326016003" }
                    require("t_LayerMenuAjax").getCameraUrlById(post_data, function (result) {
                        var cameraurl2 = result.data;
                        //console.log('B:' + cameraurl)
                        require("t_Main").left02_video02 = new Aliplayer({
                            "id": "left02_video02",
                            "source": cameraurl2,
                            //"width": videowidth + "px",
                            //"height": videoheight + "px",
                            "autoplay": true,
                            "isLive": true,
                            "rePlay": false,
                            "showBuffer": true,
                            "snapshot": false,
                            "showBarTime": 5000,
                            "useFlashPrism": true,

                        }, function (player) {
                            $(".prism-ErrorMessage").empty();
                        })
                    });
                });
            },
            //加载无人机视频
            loadLeft02_01_Video: function () {
                var videowidth = $(".wrj-li").width();
                var videoheight = $(".wrj-li").height();
                if (require("t_Main").tourhtml_wurenji01) {
                    require("t_Main").tourhtml_wurenji01.dispose();
                    require("t_Main").tourhtml_wurenji01 = null;
                }

                $("#tourhtml_wurenji01").empty();
                require(['aliplayer'], function (data) {
                    var post_data = { "offset": "0", "count": "1000" }
                     var playurl = con.WebServiceUrl + "/Content/video/dakeliu.flv";
                     require("t_Main").tourhtml_wurenji01 = new Aliplayer({
                            "id": "tourhtml_wurenji01",
                            "source": playurl,
                            //"width": videowidth + "px",
                            //"height": videoheight + "px",
                            "autoplay": true,
                            "isLive": false,
                            "rePlay": true,
                            "showBuffer": true,
                            "snapshot": false,
                            "showBarTime": 5000,   
                            "useFlashPrism": true,
                            "mediaType": "audio"

                            }, function (player) {
                            //加载成功,清空错误提示
                            $(".prism-ErrorMessage").empty();
                        });

                    //require("t_LayerMenuAjax").getDroneVideo(post_data, function (result) {
                    //    var playurl = con.WebServiceUrl + "/Content/video/dakeliu.flv";
                    //    for (var i = 0; i < result.length; i++) {
                    //        if (playurl == "") {
                    //            playurl = result[i].playUrl;
                    //        }
                    //    }
                    //    if(playurl==""){playurl=con.WebServiceUrl + "/Content/video/dakeliu.flv";}
 
                        
                    //})


                });
            },
            //加载中间无人机视频
            loadCenter_Video: function () {
                var videowidth = $("#Big-chart").width();
                var videoheight = $("#Big-chart").height();
                if (require("t_Main").tourhtml_wurenji01) {
                    require("t_Main").tourhtml_wurenji01.dispose();
                    require("t_Main").tourhtml_wurenji01 = null;
                }

                $("#Big-chart").empty();
                require(['aliplayer'], function (data) {
                    var post_data = { "offset": "0", "count": "1000" }
                    var playurl = con.WebServiceUrl + "/Content/video/dakeliu.flv";
                    require("t_Main").tourhtml_wurenji01 = new Aliplayer({
                        "id": "Big-chart",
                        "source": playurl,
                        "width": videowidth + "px",
                        "height": videoheight + "px",
                        "autoplay": true,
                        "isLive": false,
                        "rePlay": true,
                        "showBuffer": true,
                        "snapshot": false,
                        "showBarTime": 5000,
                        "useFlashPrism": true,
                        "mediaType": "audio"
                    }, function (player) {
                        //加载成功,清空错误提示
                        $("#Big-chart").empty();
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


            /*****************************其他*****************************/
            //POI事件响应
            PoiEvent: function (nodename) {
                var str = nodename
                var poitype = "";
                var id = "";
                if (str.indexOf("_") > -1) {
                    poitype = str.split("_")[0];
                    poitype = poitype.replace("POITour", "")

                    id = str.split("_")[1];
                }

                switch (poitype) {
                    case "Camera": //摄像头
                        setTimeout(function(){
                            tl_Camera.loadCameraDetial(nodename);
                        }, 300);  //加timeout目的：因控件针对鼠标点击处理的反应速度要低于div弹出速度，
                                  //所以点击POI时鼠标的mouseup释放处理被优先弹出的全屏div遮挡，导致控件认为是拖动事件。
                                  //加timeout，延迟div弹出时间，mouseup优先处理完成。
                        break;
                    case "Drone": //无人机  
                        //tl_Drone.loadDroneDetail(nodename);
                        tl_Drone.loadDroneCamera(nodename);
                        break;
                    case "Event": //事件
                        tl_Event.loadEventDetial(nodename)
                        break;

                    default:
                }
            },
            clearVideo: function () {
                try {
                    if (require("t_Main").left02_video01) {
                        require("t_Main").left02_video01.loadByUrl("");
                        require("t_Main").left02_video01.dispose();
                        require("t_Main").left02_video01 = null;
                    }
                    if (require("t_Main").left02_video02) {
                        require("t_Main").left02_video02.loadByUrl("");
                        require("t_Main").left02_video02.dispose();
                        require("t_Main").left02_video02 = null;
                    }
                    if (require("t_Main").left02_video03) {
                        require("t_Main").left02_video03.loadByUrl("");
                        require("t_Main").left02_video03.dispose();
                        require("t_Main").left02_video03 = null;
                    }
                    if (require("t_Main").tourhtml_wurenji01) {
                        require("t_Main").tourhtml_wurenji01.loadByUrl("");
                        require("t_Main").tourhtml_wurenji01.dispose();
                        require("t_Main").tourhtml_wurenji01 = null;
                    }
                } catch (error) {
                    console.log(error.message);
                    //$.getScript(con.WebServiceUrl + "Scripts/Tools/aliplayer/aliplayer-min.js", function (script, textStatus, jqXHR) {});
                }
            },
            closeBottomVideo: function () {
                try {
                    //大客流-摄像头视频清空
                    if (require("tl_Camera").cameradetail_player) {
                        require("tl_Camera").cameradetail_player.loadByUrl("");
                        require("tl_Camera").cameradetail_player.dispose();
                        require("tl_Camera").cameradetail_player = null;
                    }
                    //大客流-无人机视频清空
                    if (require("tl_Drone").SocietyDrone_player) {
                        require("tl_Drone").SocietyDrone_player.loadByUrl("");
                        require("tl_Drone").SocietyDrone_player.dispose();
                        require("tl_Drone").SocietyDrone_player = null;
                    }
                    //大客流-交通仿真
                    if (require("tl_TrafficSimulation").Trafficdetail_player) {
                        require("tl_TrafficSimulation").Trafficdetail_player.loadByUrl("");
                        require("tl_TrafficSimulation").Trafficdetail_player.dispose();
                        require("tl_TrafficSimulation").Trafficdetail_player = null;
                    }
                } catch (error) {
                    console.log(error.message);
                    //$.getScript(con.WebServiceUrl + "Scripts/Tools/aliplayer/aliplayer-min.js", function (script, textStatus, jqXHR) {});
                }
            },
            numberAni: function () {
                //园区总人数
                var yqzrsNumber = 23412;
                if ($('#yqzrs-center').length > 0) {
                    yqzrsNumber = $('#yqzrs-center').html();
                    yqzrsNumber = yqzrsNumber.replace(/,/ig, '');
                    yqzrsNumber = parseInt(yqzrsNumber)
                }

                //园区内车辆
                var yqnclsNumber = 1029;
                if ($('#yqncls-center').length > 0) {
                    yqnclsNumber = $('#yqncls-center').html();
                    yqnclsNumber = yqnclsNumber.replace(/,/ig, '');
                    yqnclsNumber = parseInt(yqnclsNumber)
                }

                //未来30分钟预测车辆
                var yqnwlclsNumber = 1233;
                if ($('#yqnwlcls-center').length > 0) {
                    yqnwlclsNumber = $('#yqnwlcls-center').html();
                    yqnwlclsNumber = yqnwlclsNumber.replace(/,/ig, '');
                    yqnwlclsNumber = parseInt(yqnwlclsNumber)
                }

                //景区周边人数
                var yqzbrsNumber = 769;
                if ($('#yqzbrs-center').length > 0) {
                    yqzbrsNumber = $('#yqzbrs-center').html();
                    yqzbrsNumber = yqzbrsNumber.replace(/,/ig, '');
                    yqzbrsNumber = parseInt(yqzbrsNumber)
                }


                //景区周边人数
                var yqnwlrsNumber = 5019;
                if ($('#yqnwlrs-center').length > 0) {
                    yqnwlrsNumber = $('#yqnwlrs-center').html();
                    yqnwlrsNumber = yqnwlrsNumber.replace(/,/ig, '');
                    yqnwlrsNumber = parseInt(yqnwlrsNumber)
                }

                com.numberAnimation($('#yqzrs-center'), yqzrsNumber - 20, yqzrsNumber, 2000);
                com.numberAnimation($('#yqncls-center'), yqnclsNumber - 20, yqnclsNumber, 2000);
                com.numberAnimation($('#yqnwlcls-center'), yqnwlclsNumber - 20, yqnwlclsNumber, 2000);
                com.numberAnimation($('#yqzbrs-center'), yqzbrsNumber - 20, yqzbrsNumber, 2000);
                com.numberAnimation($('#yqnwlrs-center'), yqnwlrsNumber - 20, yqnwlrsNumber, 2000);
            },
            htmlRevert: function () {
                this.clearVideo();
                //左一
                $("#left_first_01").html("");
                $("#left_first_02").html("");
                $("#left_first_03").html("");
                $("#left_first_04").html("");

                //左二
                $("#left_second_01").html("");
                $("#left_second_02").html("");
                $("#left_second_03").html("");

                //右一
                $("#right01_01").html("");
                $("#right01_02").html("");
                $("#right01_03").html("");

                //右二
                $("#right02_01").html("");
                $("#right02_02").html("");
                $("#right02_03").html("");
                //中间
                $("#center_01").html("");

            },
            //汇总数据增长
            totalsNumUp: function () {
                //园区总人数
                if ($("#yqzrs-center").length > 0) {
                    this.Interval1 = setInterval(function () {
                        var lastvalue = $("#yqzrs-center").html()
                        lastvalue = lastvalue.replace(/,/ig, '');
                        var step_values = com.random(-10, 100)
                        var current_values = parseInt(lastvalue) + step_values

                        //调用预警指标
                        require("t_Main").yqyjLevelFun(current_values);

                        //
                        current_values = com.toThousands(current_values)
                        $("#yqzrs-center").html(current_values)
                    }, 3000);
                }

                //园区内车辆
                if ($("#yqncls-center").length > 0) {
                    this.Interval2 = setInterval(function () {
                        var lastvalue = $("#yqncls-center").html()
                        lastvalue = lastvalue.replace(/,/ig, '');
                        var step_values = com.random(-10, 50)
                        var current_values = parseInt(lastvalue) + step_values
                        current_values = com.toThousands(current_values)
                        $("#yqncls-center").html(current_values)
                    }, 2000);
                }

                //未来30分钟预测车辆
                if ($("#yqnwlcls-center").length > 0) {
                    this.Interval3 = setInterval(function () {
                        var lastvalue = $("#yqnwlcls-center").html()
                        lastvalue = lastvalue.replace(/,/ig, '');
                        var step_values = com.random(-30, 100)
                        var current_values = parseInt(lastvalue) + step_values
                        current_values = com.toThousands(current_values)
                        $("#yqnwlcls-center").html(current_values)
                    }, 7000);
                }

                //园区周边人数
                if ($("#yqzbrs-center").length > 0) {
                    this.Interval4 = setInterval(function () {
                        var lastvalue = $("#yqzbrs-center").html()
                        lastvalue = lastvalue.replace(/,/ig, '');
                        var step_values = com.random(-10, 200)
                        var current_values = parseInt(lastvalue) + step_values
                        current_values = com.toThousands(current_values)
                        $("#yqzbrs-center").html(current_values)
                    }, 2500);
                }

                //园区周边人数
                if ($("#yqnwlrs-center").length > 0) {
                    this.Interval5 = setInterval(function () {
                        var lastvalue = $("#yqnwlrs-center").html()
                        lastvalue = lastvalue.replace(/,/ig, '');
                        var step_values = com.random(-10, 300)
                        var current_values = parseInt(lastvalue) + step_values
                        current_values = com.toThousands(current_values)
                        $("#yqnwlrs-center").html(current_values)
                    }, 8000);
                }
            },

            //汇总数据刷新
            totalsRefresh: function () {
                try {
                    var post_data = null;
                    require("t_LayerMenuAjax").getCenterTotalsData(post_data, function (result) {
                        if (result != null) {
                            //园区总人数
                            if (result.currentPopulation != undefined) {
                                var insidePersons = result.currentPopulation;
                                //调用预警指标
                                require("t_Main").yqyjLevelFun(insidePersons);

                                //
                                insidePersons = com.toThousands(insidePersons)
                                $("#yqzrs-center").html(insidePersons)

                                this.currentPopulation =result.currentPopulation; //园区总人数
                            }



                            //园区内车辆
                            if (result.currentCarNum != undefined) {
                                var insideCars = result.currentCarNum;
                                insideCars = com.toThousands(insideCars)
                                $("#yqncls-center").html(insideCars)


                                this.currentCarNum =result.currentCarNum; //园区内车辆
                            }

                            //未来30分钟预测车辆
                            if (result.estimate30mParkVehicleNo != undefined) {
                                var insideFutureCars = result.estimate30mParkVehicleNo;
                                insideFutureCars = com.toThousands(insideFutureCars)
                                $("#yqnwlcls-center").html(insideFutureCars)

                                this.estimate30mParkVehicleNo =result.currentCarNum; //未来30分钟预测车辆
                            }



                            //园区周边人数
                            if (result.outerPeople != undefined) {
                                var outsidePersons = result.outerPeople;
                                outsidePersons = com.toThousands(outsidePersons)
                                $("#yqzbrs-center").html(outsidePersons)


                                this.outerPeople =result.outerPeople; //园区周边人数
                            }


                            //未来30分钟预测人数
                            if (result.estimateOuterParkPeopleNo != undefined) {
                                var outsideFuturePersons = result.estimateOuterParkPeopleNo;
                                outsideFuturePersons = com.toThousands(outsideFuturePersons)
                                $("#yqnwlrs-center").html(outsideFuturePersons)

                                this.estimateOuterParkPeopleNo =result.estimateOuterParkPeopleNo; //未来30分钟预测人数
                            }
                        }
                    })
                } catch (e) {
                }
            },

            //汇总数据增长
            totalsNumUpForReal: function () {
                //园区总人数
                if ($("#yqzrs-center").length > 0) {
                    this.Interval1 = setInterval(function () {
                        var lastvalue = $("#yqzrs-center").html()
                        lastvalue = lastvalue.replace(/,/ig, '');
                        var step_values = com.random(-2, 2)
                        var current_values = parseInt(lastvalue) + step_values

                        var minValues = parseInt(parseInt(this.currentPopulation) * 0.95)
                        var maxValues = parseInt(parseInt(this.currentPopulation) * 1.05)

                        if (current_values < minValues) { current_values = minValues }
                        if (current_values > maxValues) { current_values = maxValues }
                        if (current_values <= 0) { current_values =0}
                        //调用预警指标
                        require("t_Main").yqyjLevelFun(current_values);

                        //
                        current_values = com.toThousands(current_values)
                        $("#yqzrs-center").html(current_values)
                    }, 3000);
                }

                //园区内车辆
                if ($("#yqncls-center").length > 0) {
                    this.Interval2 = setInterval(function () {
                        var lastvalue = $("#yqncls-center").html()
                        lastvalue = lastvalue.replace(/,/ig, '');
                        var step_values = com.random(-2, 2)
                        var current_values = parseInt(lastvalue) + step_values


                        var minValues = parseInt(parseInt(this.currentCarNum) * 0.95)
                        var maxValues = parseInt(parseInt(this.currentCarNum) * 1.05)

                        if (current_values < minValues) { current_values = minValues }
                        if (current_values > maxValues) { current_values = maxValues }
                        if (current_values <= 0) { current_values = 0 }

                        

                        current_values = com.toThousands(current_values)
                        $("#yqncls-center").html(current_values)
                    }, 2000);
                }

                //未来30分钟预测车辆
                if ($("#yqnwlcls-center").length > 0) {
                    this.Interval3 = setInterval(function () {
                        var lastvalue = $("#yqnwlcls-center").html()
                        lastvalue = lastvalue.replace(/,/ig, '');
                        var step_values = com.random(-2, 2)
                        var current_values = parseInt(lastvalue) + step_values


                        var minValues = parseInt(parseInt(this.estimate30mParkVehicleNo) * 0.95)
                        var maxValues = parseInt(parseInt(this.estimate30mParkVehicleNo) * 1.05)

                        if (current_values < minValues) { current_values = minValues }
                        if (current_values > maxValues) { current_values = maxValues }
                        if (current_values <= 0) { current_values = 0 }


                        current_values = com.toThousands(current_values)
                        $("#yqnwlcls-center").html(current_values)
                    }, 2500);
                }

                //园区周边人数
                if ($("#yqzbrs-center").length > 0) {
                    this.Interval4 = setInterval(function () {
                        var lastvalue = $("#yqzbrs-center").html()
                        lastvalue = lastvalue.replace(/,/ig, '');
                        var step_values = com.random(-2, 2)
                        var current_values = parseInt(lastvalue) + step_values

                        var minValues = parseInt(parseInt(this.outerPeople) * 0.95)
                        var maxValues = parseInt(parseInt(this.outerPeople) * 1.05)

                        if (current_values < minValues) { current_values = minValues }
                        if (current_values > maxValues) { current_values = maxValues }
                        if (current_values <= 0) { current_values =0}

                        current_values = com.toThousands(current_values)
                        $("#yqzbrs-center").html(current_values)
                    }, 2000);
                }

                //园区周边30分钟预测人数
                if ($("#yqnwlrs-center").length > 0) {
                    this.Interval5 = setInterval(function () {
                        var lastvalue = $("#yqnwlrs-center").html()
                        lastvalue = lastvalue.replace(/,/ig, '');
                        var step_values = com.random(-2, 2)
                        var current_values = parseInt(lastvalue) + step_values

                        var minValues = parseInt(parseInt(this.estimateOuterParkPeopleNo) * 0.95)
                        var maxValues = parseInt(parseInt(this.estimateOuterParkPeopleNo) * 1.05)

                        if (current_values < minValues) { current_values = minValues }
                        if (current_values > maxValues) { current_values = maxValues }
                        if (current_values <= 0) { current_values = 0 }


                        current_values = com.toThousands(current_values)
                        $("#yqnwlrs-center").html(current_values)
                    }, 1500);
                }
            },
            //预警指标颜色条控制
            yqyjLevelFun: function (yqsjNum, yqsjMaxNum) {
                var yqsjLevel = [0, 28000, 33000, 45000];
                var yqsjMaxNum = yqsjMaxNum ? yqsjMaxNum : 50000;
                $(".yqyj-levelbox>.yqyj-level").each(function (index, element) {
                    $(this).css({ left: "calc( (100% - .4rem) * " + (yqsjLevel[index] / yqsjMaxNum).toFixed(2) + " + .2rem)" })
                })

                $(".yqyj-levelbg").width((yqsjNum / yqsjMaxNum).toFixed(4) * 100 + "%");

                var numLittle = 0;
                if (yqsjNum >= yqsjLevel[0]) {
                    do {
                        numLittle++;
                    } while (yqsjNum > yqsjLevel[numLittle])
                    numLittle--;
                    $(".yqyj-levelbox>.yqyj-level").eq(numLittle).addClass("active").siblings().removeClass("active");
                    $(".yqyj-levelbox>.yqyj-level").eq(numLittle).css({ left: (yqsjNum / yqsjMaxNum).toFixed(4) * 100 + "%" });
                }
            },
            //清除定时器
            clearIntervalTime: function () {
                if (this.Interval1 != null) {
                    window.clearInterval(this.Interval1)
                }

                if (this.Interval2 != null) {
                    window.clearInterval(this.Interval2)
                }

                if (this.Interval3 != null) {
                    window.clearInterval(this.Interval3)
                }

                if (this.Interval4 != null) {
                    window.clearInterval(this.Interval4)
                }

                if (this.Interval5 != null) {
                    window.clearInterval(this.Interval5)
                }

                if (this.IntervalMain != null) {
                    window.clearInterval(this.IntervalMain)
                }
            },
            //清空
            Revert: function () {
                this.closeBottomVideo();
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