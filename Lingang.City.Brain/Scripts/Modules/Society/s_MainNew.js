﻿define(["config", "common", 's_LayerMenuAjax', 's_EchartAjax', 's_LeftLayer', 's_RightLayer', 's_Echart', 'sl_IOT', 'sl_Camera', 'sl_Drone', 'sl_Event', 'sl_SeaboardLine', 'sl_WorkSite', 'sl_WorkStation', 'sl_Street', 'sl_Grid'],
function (con, com, s_LayerMenuAjax, s_EchartAjax, s_LeftLayer, s_RightLayer, s_Echart, sl_IOT, sl_Camera, sl_Drone, sl_Event, sl_SeaboardLine, sl_WorkSite, sl_WorkStation, sl_Street, sl_Grid) {
    return {
        left01_02_video01: null,
        left01_02_video02: null,
        left01_02_video03: null,
        left01_03_video01: null,
        leftcenter_video: null,

        LayerCatalog: {
            IOT: {
                Id: 1, TextName: "传感器", Name: "IOT", Level: 2,
                List: {
                    1: { Id: 1001, TextName: "无线烟感", Name: "IOT_1", Type: 1, ChooseIcon: "Texture/Common/IOT1_hover.png", UnChooseIcon: "Texture/Common/IOT1.png", },
                    2: { Id: 1002, TextName: "电梯传感器", Name: "IOT_2", Type: 2, ChooseIcon: "Texture/Common/IOT2_hover.png", UnChooseIcon: "Texture/Common/IOT2.png" },
                    3: { Id: 1003, TextName: "无线门磁", Name: "IOT_3", Type: 3, ChooseIcon: "Texture/Common/IOT3_hover.png", UnChooseIcon: "Texture/Common/IOT3.png", },
                    4: { Id: 1004, TextName: "微信开门", Name: "IOT_4", Type: 4, ChooseIcon: "Texture/Common/IOT4_hover.png", UnChooseIcon: "Texture/Common/IOT4.png" },
                    5: { Id: 1005, TextName: "电子围栏", Name: "IOT_5", Type: 5, ChooseIcon: "Texture/Common/IOT5_hover.png", UnChooseIcon: "Texture/Common/IOT5.png", },
                    6: { Id: 1006, TextName: "井盖传感器", Name: "IOT_6", Type: 6, ChooseIcon: "Texture/Common/IOT6_hover.png", UnChooseIcon: "Texture/Common/IOT6.png" },
                    7: { Id: 1007, TextName: "地磁", Name: "IOT_7", Type: 7, ChooseIcon: "Texture/Common/IOT7_hover.png", UnChooseIcon: "Texture/Common/IOT7.png" }
                }
            },
            Camera: { Id: 2, TextName: "摄像头", Name: "Camera", Level: 1, ChooseIcon: "Texture/Common/camera_hover.png", UnChooseIcon: "Texture/Common/camera.png" },
            WorkStation: { Id: 3, TextName: "村居工作站", Name: "WorkStation", Level: 1, ChooseIcon: "Texture/Common/station_hover.png", UnChooseIcon: "Texture/Common/station.png" },
            WorkSite: { Id: 4, TextName: "工地", Name: "WorkSite", Level: 1, ChooseIcon: "Texture/Common/worksite_hover.png", UnChooseIcon: "Texture/Common/worksite.png" },
            Event: {
                Id: 5, TextName: "事件", Name: "Event", Level: 2,
                List: {
                    S012: {
                        Id: 1001, TextName: "社区", Name: "Event_S012", Type: 1, ChooseIcon: "Texture/Common/event1_hover.png", UnChooseIcon: "Texture/Common/event1.png",
                    },
                    U001: { Id: 1002, TextName: "市政道路", Name: "Event_U001", Type: 2, ChooseIcon: "Texture/Common/event2_hover.png", UnChooseIcon: "Texture/Common/event2.png" },
                    U002: { Id: 1003, TextName: "共享区", Name: "Event_U002", Type: 3, ChooseIcon: "Texture/Common/event3_hover.png", UnChooseIcon: "Texture/Common/event3.png" },
                    U003: { Id: 1004, TextName: "海岸线", Name: "Event_U003", Type: 4, ChooseIcon: "Texture/Common/event4_hover.png", UnChooseIcon: "Texture/Common/event4.png", },
                    C001: { Id: 1005, TextName: "工地", Name: "Event_C001", Type: 5, ChooseIcon: "Texture/Common/event5_hover.png", UnChooseIcon: "Texture/Common/event5.png", },
                }
            },
            Drone: {
                Id: 6, TextName: "无人机", Name: "Drone", Level: 1, ChooseIcon: "Texture/Common/wurenjiku.png", UnChooseIcon: "Texture/Common/wurenjiku.png"
            }
        },
        loadMain: function () {
            sl_Event.loadEvent();  

            //this.loadBottomMenu();//加载底部图层

            this.loadLeftFirst1();//加载左侧第一列第一个div
            this.loadLeftFirst2();//
            this.loadLeftFirst3();//
            this.loadLeftFirst4();//

            this.loadCenter1();//加载中间列
            sl_IOT.loadLeftSecond();

            this.loadRightSecond1();//加载右侧第一列第一个div
            this.loadRightSecond2();//
            this.loadRightSecond3();

            this.closeOtherUi();

            
        },

        /*****************************左侧第一列*****************************/
        //加载第一个div
        loadLeftFirst1: function () {
            var option = {
                aniDom: "#left01_01",
                htmlDom: "#left_first_01",
                url: con.HtmlUrl + 'SocietyNew/Left_First_01.html'
            }
            com.UIControlAni(option, function () {
                require("s_Echart").cgq();
                 
            });

        },
        //加载第二个div
        loadLeftFirst2: function () {
            var option = {
                aniDom: "#left01_02",
                htmlDom: "#left_first_02",
                url: con.HtmlUrl + 'SocietyNew/Left_First_02.html'
            }

            com.UIControlAni(option, function () {
                //require("s_Echart").sxt1();
                //require("s_Echart").sxt2();
                //require("s_Echart").sxt3();
            });

        },
        //加载第三个div
        loadLeftFirst3: function () {
            var option = {
                aniDom: "#left01_03",
                htmlDom: "#left_first_03",
                url: con.HtmlUrl + 'SocietyNew/Left_First_03.html'
            }
            com.UIControlAni(option, function () {
                require("s_Echart").wrj();
                //加载摄像头视频
                setTimeout(function () { require("s_Main").loadLeft01_02_Video() }, 800);
                //加载无人机视频
                setTimeout(function () { require("s_Main").loadLeft01_03_Video() }, 800);
            });

        },
        //加载第四个div
        loadLeftFirst4: function () {
            var option = {
                aniDom: "#left01_04",
                htmlDom: "#left_first_04",
                url: con.HtmlUrl + 'SocietyNew/Left_First_04.html'
            }
            com.UIControlAni(option, function () {
                require("s_Echart").zzbm();
                require("sl_IOT").Scrolldiv();
            });

        },

        //////////////////////////////////////////////中间页面//////////////////////////////////////////////////
        //加载中间DIV  事件 时显示该内容
        loadCenter1: function () {
            var url = con.HtmlUrl + 'SocietyNew/Center_01.html';
            require(['text!' + url], function (template) {
                $("#center_01").html(template);
                $("#center_01").show('drop', 1000);//左侧

                require('s_Main').SocietyBigNum();
            })
        },
        //加载中间DIV  传感器、摄像头、无人机、村居工作站显示该内容
        loadCenter1Info: function () {
            var url = con.HtmlUrl + 'SocietyNew/Center_01_Info.html';
            require(['text!' + url], function (template) {
                $("#center_01").html(template);
                $("#center_01").show('drop', 1000);//左侧

               require('s_Main').numberAni2();
               // require('s_Main').getSocietyBigNum
            })
        },
        ////////////////////////////////////////////////右侧页面//////////////////////////////////////////////////////
        /*****************************右侧第二列*****************************/
        //加载第一个div
        loadRightSecond1: function () {
            var option = {
                aniDom: "#right02_01",
                htmlDom: "#right_second_01",
                url: con.HtmlUrl + 'SocietyNew/Right_second_01.html',
                leftOrRight: 'right'
            }
            com.UIControlAni(option, function () {
                require("s_Echart").sjxx();
                require("s_Echart").gradient();
                //require("s_Echart").sj();
                //require("s_Echart").yq();
                //if($("body").width() == 7680){
                //    $("html").css({fontSize: "90px"});
                //    $(".sj-circlediv").each(function () { 
                //        $(this).empty();
                //    })
                //    com.loopFun($('.sj-circlediv')[0], 35, '#564009', '#f7b001', 'transparent', '20px', 15, 30, 1000);
                //    com.loopFun($('.sj-circlediv')[1], 80, '#564009', '#098bdc', 'transparent', '20px', 15, 30, 1000);
               
                //}else if($("body").width() == 11520){
                //    $("html").css({fontSize: "130px"});
                //    $(".sj-circlediv").each(function () {
                //        $(this).empty();
                //    })
                //    com.loopFun($('.sj-circlediv')[0], 35,'#564009','#f7b001','transparent','20px', 20,45,1000);
                //    com.loopFun($('.sj-circlediv')[1], 80,'#564009','#098bdc','transparent','20px', 20,45,1000);
                //}
                //$(window).resize();

                //require("s_Echart").bigNumber();//中间大数字
            });
        },
        //加载第二个div
        loadRightSecond2: function () {
            var option = {
                aniDom: "#right02_02",
                htmlDom: "#right_second_02",
                url: con.HtmlUrl + 'SocietyNew/Right_second_02.html',
                leftOrRight: 'right'
            }
            com.UIControlAni(option, function () {
                require("s_Echart").sjcg();//事件处理成功数
                require("sl_Event").generateEventList();
            });
        },
        //加载第三个div
        loadRightSecond3: function () {
            //var option = {
            //    aniDom: "#right02_03",
            //    htmlDom: "#right_second_03",
            //    url: con.HtmlUrl + 'SocietyNew/Right_second_03.html',
            //    leftOrRight: 'right'
            //}
            //com.UIControlAni(option, function () {
               
            //});
        },

        // 关闭其他的
        closeOtherUi: function () {
            var option1 = {
                aniDom: "#right01_01",
                htmlDom: "#right_first_01",
                url: '',
                leftOrRight: 'right'
            }
            com.UIControlAni(option1, null);

            var option2 = {
                aniDom: "#right01_02",
                htmlDom: "#right_first_02",
                url: '',
                leftOrRight: 'right'
            }
            com.UIControlAni(option2, null);

            var option3 = {
                aniDom: "#right01_03",
                htmlDom: "#right_first_03",
                url: '',
                leftOrRight: 'right'
            }
            com.UIControlAni(option3, null);

            var optionR23 = {
                aniDom: "#right02_03",
                htmlDom: "#right_second_03",
                url: '',
                leftOrRight: 'right'
            }
            com.UIControlAni(optionR23, null);

            //var option4 = {
            //    aniDom: "#left02_01",
            //    htmlDom: "#left_second_01",
            //    url: ''
            //}
            //com.UIControlAni(option4, null);

            //var option5 = {
            //    aniDom: "#left02_02",
            //    htmlDom: "#left_second_02",
            //    url: ''
            //}
            //com.UIControlAni(option5, null);

            //var option6 = {
            //    aniDom: "#left02_03",
            //    htmlDom: "#left_second_03",
            //    url: ''
            //}
            //com.UIControlAni(option6, null);
        },

        ////////////////////////////////////////////////////////////////////其他///////////////////////////////////////////////////
        //加载视频
        loadLeft01_02_Video: function () {
            if (require("s_Main").left01_02_video01) {
                require("s_Main").left01_02_video01.dispose();
                require("s_Main").left01_02_video01 = null;
            }
            if (require("s_Main").left01_02_video02) {
                require("s_Main").left01_02_video02.dispose();
                require("s_Main").left01_02_video02 = null;
            }
            $("#Societyleft01_02_video01").empty();
            $("#Societyleft01_02_video02").empty();

            require(['aliplayer'], function (data) {
                //setTime
                var post_data = { "sbbm": "31011900011328041002" }
                require("s_LayerMenuAjax").getCameraUrlById(post_data, function (result) {
                    var cameraurl = result.data;
                    require("s_Main").left01_02_video01 = new Aliplayer({
                        "id": "Societyleft01_02_video01",
                        "source":cameraurl,
                        //"width": "100%",
                        //"height": "100%",
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
                var post_data = { "sbbm": "31011900011328041001" }
                require("s_LayerMenuAjax").getCameraUrlById(post_data, function (result) {
                    var cameraurl = result.data;
                require("s_Main").left01_02_video02 = new Aliplayer({
                    "id": "Societyleft01_02_video02",
                    "source": cameraurl,
                    //"width": "20%",
                    //"height": "20%",
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
        loadLeft01_03_Video: function () {

            var videowidth = $(".wrj-li").width();
            var videoheight = $(".wrj-li").height();
            if (require("s_Main").left01_03_video01) {
                require("s_Main").left01_03_video01.dispose();
                require("s_Main").left01_03_video01 = null;
            }
            $("#Societyleft01_03_video01").empty();
            require(['aliplayer'], function (data) {
                require("s_Main").left01_03_video01 = new Aliplayer({
                    "id": "Societyleft01_03_video01",
                    //"source": "http://106.14.152.119:8082/videoGetStream/103.214.87.69:11937/citybrain/31011900011328031005.flv?vhost=cb.alivecdn.com",
                    "source": con.WebServiceUrl + "/Content/video/drone_video_demo.flv",
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
                })
            });
        },
        //加载中间无人机视频
        loadCenter_Video: function () {

            var videowidth = $("#Big-chart").width();
            var videoheight = $("#Big-chart").height();
            if (require("s_Main").leftcenter_video) {
                require("s_Main").leftcenter_video.dispose();
                require("s_Main").leftcenter_video = null;
            }
            $("#Big-chart").empty();
            require(['aliplayer'], function (data) {
                require("s_Main").leftcenter_video = new Aliplayer({
                    "id": "Big-chart",
                    "source": con.WebServiceUrl + "/Content/video/drone_video_demo.flv",
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
                    $(".prism-ErrorMessage").empty();
                })
            });
        },
        closevideo:function(){
             if (require("s_Main").leftcenter_video) {
                require("s_Main").leftcenter_video.dispose();
                require("s_Main").leftcenter_video = null;
            }
        },
        clearVideo: function () {

            if (require("s_Main").left01_02_video01) {
                require("s_Main").left01_02_video01.dispose();
                require("s_Main").left01_02_video01 = null;
                //require("s_Main").CameraState01 = 0;
            }

            if (require("s_Main").left01_02_video02) {
                require("s_Main").left01_02_video02.dispose();
                require("s_Main").left01_02_video02 = null;
            }

            if (require("s_Main").left01_02_video03) {
                require("s_Main").left01_02_video03.dispose();
                require("s_Main").left01_02_video03 = null;
            }

            if (require("s_Main").left01_03_video01) {
                require("s_Main").left01_03_video01.dispose();
                require("s_Main").left01_03_video01 = null;
            }
            
        },
        closeBottomVideo:function(){
            //社会综治-事件视频清空
            if (require("sl_Event").SocietyEvent_player) {
                require("sl_Event").SocietyEvent_player.dispose();
                require("sl_Event").SocietyEvent_player = null;
            }
            //社会综治-无人机视频清空
            if (require("sl_Drone").SocietyDrone_player) {
                require("sl_Drone").SocietyDrone_player.dispose();
                require("sl_Drone").SocietyDrone_player = null;
            }
        },
        //POI事件响应
        PoiEvent: function (nodename) {
            var str = nodename
            var poitype = "";
            var id = "";
            if (str.indexOf("_") > -1) {
                poitype = str.split("_")[0];
                poitype = poitype.replace("POISociety", "")

                id = str.split("_")[1];
            }

            switch (poitype) {
                case "IOT": //传感器
                    sl_IOT.loadIOTDetial(nodename)
                    break;
                case "Camera": //摄像头
                    sl_Camera.loadCameraDetial(nodename)
                    break;
                case "Drone": //无人机  
                    sl_Drone.loadDroneDetail();
                    break;
                case "WorkSite": //工地

                    break;
                case "Event": //事件
                    sl_Event.loadEventProcessing(nodename);
                    com.openCloseBigDigital('close'); // 收起大数字
                    break;
                default:
            }
        },

        SocietyBigNum: function () {
            s_EchartAjax.getSocietyBigNum(function (result) {
                if (require("s_Echart").societyBigNumData == null) { return false; }
                var data = require("s_Echart").societyBigNumData;
                data = data.data;
                require('s_Main').numberAni1(data);
            });
        },

        numberAni1: function (data) {
            com.numberAnimation($('#dsz-ajljs'), Number(data.totalCount) - 20, Number(data.totalCount), 2000);
            com.numberAnimation($('#dsz-dyajs'), Number(data.monthCount) - 20, Number(data.monthCount), 2000);
            com.numberAnimation($('#dsz-znpds'), Number(data.dispatchRate) - 20, Number(data.dispatchRate), 2000);
            com.numberAnimation($('#dsz-zdfxl'), Number(data.autoRate) - 5, Number(data.autoRate), 2000);
            com.numberAnimation($('#dsz-bhl'), Number(data.loopRate) - 20, Number(data.loopRate), 2000);
        },
        numberAni2: function () {
            com.numberAnimation($('#s_xcxcysl'), 128 - 20, 128, 2000);
            com.numberAnimation($('#s_xcwrjsl'), 4- 1, 4, 1000);
            com.numberAnimation($('#s_jrsxtsl'), 163 - 20, 163, 2000);
        },

        htmlRevert: function () {
            this.clearVideo();
            //左一
            $("#left_first_01").html("");
            $("#left_first_02").html("");
            $("#left_first_03").html("");
            $("#left_first_04").html("");

            //右一
            $("#right_first_01").html("");
            $("#right_first_02").html("");
            //中间
            $("#center_01").html("");
            //s_LeftLayer.Revert();//视频清空
        },

        Revert: function () {
            this.closeBottomVideo();
            sl_IOT.Revert();
            sl_Camera.Revert();
            sl_Drone.Revert();
            sl_Event.Revert();
            sl_SeaboardLine.Revert();
            sl_WorkSite.Revert();
            sl_WorkStation.Revert();
            sl_Street.Revert();
            sl_Grid.Revert();

        }
    }
});