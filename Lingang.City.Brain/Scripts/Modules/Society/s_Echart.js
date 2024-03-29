﻿define(["config", "common", "s_layerMenuData", "s_EchartAjax", "mainMenu", "s_Main"], function (con, com, s_layerMenuData, s_EchartAjax, mainMenu, s_Main) {

    var sjcgSeriesDataMax = 0; //事件处理成功数据最大值
    var sjcgSeriesDataMin = 0; //事件处理成功数据最大值
    var oSjcgseriesData = []; //事件处理成功数据
    var oSjcgseriesRateData = []; //事件处理成功率数据
    var sjcgChartClose = true;
    var strTitle = "事件成功数";
    var sPerCarPic = 'car'; //放大显示车或者人

    return {
        perCarPicTimer: null,   //人员车辆结构化图片
        sjcgTimer: null,
        mybigChart: null,     //大的图表显示  
        myChartsxt1: null,     //摄像头
        myChartsxt2: null,    //摄像头
        myChartsxt3: null,    //摄像头
        myChartwrj: null,     //无人机
        myChartsj: null,      //事件
        myChartsjcg: null,    //事件成功
        wrjData: null,        //无人机数据
        cgqData: null,        //传感器数据
        sxtData: null,        //摄像头数据
        sjcgData: null,       //事件成功数据
        bigNumData: null,     //大数字数据      
        jqCameraData: null,   //景区--摄像头
        jqCarData: null,      //景区--车辆
        jqPersonData: null,   //景区--人员
        sxtCameraData: null,  //摄像头--摄像头
        sxtCarData: null,     //摄像头--车辆
        sxtPersonData: null,  //摄像头--人员
        perCarPicData: null,   //人员车辆结构化图片
        zzbmData: null,       //主责部门
        societyPersonData: null,    // 社区人口
        societySjcgListData: null,  //事件成功列表数据
        societySjData: null,        //事件信息
        societySjcgData: null,      //事件处理成功
        societySjcgStatusData: null,//事件处理成功事件状态
        societySjcgListData: null,  //事件处理成功事件列表
        societyBigNumData: null,    //事件（海岸线，工地，街面，网格）大数字
        cgqBigNumData: null,        //传感器，无人机，摄像头，村居工作站大数字
        jmBasicInfoData: null,       //街面基本信息
        jmDroneData: null,          //街面无人机 
        jmXcyData: null,            //街面巡查员
        workSiteInspectorData: null, //工地巡查员
        recentFlightData: null,     //海岸线无人机最近一次飞行统计
        monthlyRecentFlightData: null, //海岸线无人机最近一个月飞行统计
        costlineTideData: null,     //海岸线潮汐时间表
        workSiteBuilderData: null, //工地施工单位
        workSiteWrjData: null,     //工地无人机
        dealTaskNumData: null,     //网格处置案件数量
        dealTaskTypeData: null,   //网格处置案件类别
    	videoPicData:null,   //海岸线，工地，街面无视频放图片
        intervalTime: 0,
        //加载图表
        loadEcharts: function () {

            //setInterval(require("s_Echart").tick, 1000);

            //require("s_Echart").gradient();           //渐变进场动画
            //require("s_Echart").sj();                 //事件列表 Right_First_01 
            //require("s_Echart").sjcg();               //事件处理成功数据 Right_First_02 
            //require("s_Echart").cgq();                //传感器 Left_First_03
            //require("s_Echart").wrj();                //无人机 Left_First_05
            //require("s_Echart").num();                //数字动画
            //require("s_Echart").sxt1();               //摄像头 Left_First_04
            //require("s_Echart").sxt2();               //摄像头 Left_First_04
            //require("s_Echart").sxt3();               //摄像头 Left_First_04
        },

        loadBigChart: function (divname) {

            var url = con.HtmlUrl + 'SocietyNew/Center_03.html';
            require(['text!' + url], function (template) {
                $("#center_03").html(template);
                $("#center_03").show('drop', 1000);//左侧
                sjcgChartClose = true;
                require("s_Echart").closeEvent();//关闭事件循环播放
                switch (divname) {
                    case "Left_First_02"://无人机视频
                        require("s_Echart").wrjsp();
                        break;
                    case "Left_First_03"://无人机
                        require("s_Echart").bigWrj();
                        break;
                    case "Left_Second_EventIOT2"://社区车辆
                        require("sl_IOT").bigLoadCarPersonInOutData(require("sl_IOT").carInOutCount, require("sl_IOT").personInOutCount, require("sl_IOT").seriesDataMax);
                        break;
                    case "Right_Second_02"://事件处理成功数
                        sjcgChartClose = false;
                        require("s_Echart").bigSjcg(strTitle, sjcgSeriesDataMax, sjcgSeriesDataMin, oSjcgseriesData);
                        break;
                    case "Left_Second_EventGrid1"://处置案件数量
                        require("sl_Grid").bigLoadDealTaskNumData();
                        break;
                    case "Left_Second_EventGrid3"://处置主责部门
                        require("sl_Grid").bigLoadGridCZZZBMchart();
                        break;
                    default:
                }
            })
            $("#center_04").html("");
            $("#center_05").html("");
        },
        //关闭大的图表
        closeBigChart: function () {
            require("s_Echart").loadloopevent();//关闭事件循环播放
            if (require("s_Echart").mybigChart != null && require("s_Echart").mybigChart != "" && require("s_Echart").mybigChart != undefined) {
                require("s_Echart").mybigChart.dispose();
            }
            sjcgChartClose = true;
            $("#center_03").html("");
        },

        //社综---车辆识别 放大
        loadCenterCarIdentify: function () {
            require("s_Echart").closeEvent();//关闭事件循环播放
            var url = con.HtmlUrl + 'SocietyNew/Center_05.html';
            require(['text!' + url], function (template) {
                $("#center_05").html(template);
                $("#center_05").show('drop', 1000);//左侧

                require("s_Echart").bigPerCarPic();
            })
            $("#center_03").html("");
            $("#center_04").html("");
        },

        closeCenterCarIdentify: function () {
            require("s_Echart").loadloopevent();//关闭事件循环播放
            $("#center_05").html("");
        },

        //加载头部日期时间  

        tick: function () {
            var years, months, days, hours, week, minutes, seconds;
            var intYears, intMonths, intDays, intHours, intMinutes, intSeconds;
            var today;
            today = new Date(); //系统当前时间
            intYears = today.getFullYear(); //得到年份,getFullYear()比getYear()更普适
            intMonths = today.getMonth() + 1; //得到月份，要加1
            intDays = today.getDate(); //得到日期
            week = " 星期" + "日一二三四五六 ".charAt(today.getDay());//得到星期几
            intHours = today.getHours(); //得到小时
            intMinutes = today.getMinutes(); //得到分钟
            intSeconds = today.getSeconds(); //得到秒钟
            years = intYears + "/";
            if (intMonths < 10) {
                months = "0" + intMonths + "/";
            } else {
                months = intMonths + "/";
            }
            if (intDays < 10) {
                days = "0" + intDays + " ";
            } else {
                days = intDays + " ";
            }
            if (intHours == 0) {
                hours = "00:";
            } else if (intHours < 10) {
                hours = "0" + intHours + ":";
            } else {
                hours = intHours + ":";
            }
            if (intMinutes < 10) {
                minutes = "0" + intMinutes + ":";
            } else {
                minutes = intMinutes + ":";
            }
            if (intSeconds < 10) {
                seconds = "0" + intSeconds + " ";
            } else {
                seconds = intSeconds + " ";
            }
            timeString = hours + minutes + seconds;
            yearString = years + months + days;
            $('.pj-houre').html(timeString)
            $('.pj-year').html(yearString)
            $('.pj-day').html(week)

        },

        gradient: function () {
            $('.twocol-left').addClass('yin').stop().animate({ opacity: '1' }, 2000);
            $('.twocol-right').addClass('yin').stop().animate({ opacity: '1' }, 2000);
            //$('.pjr').addClass('yin').stop().animate({ opacity: '1' }, 2000);
        },
        //无人机视频
        wrjsp: function () {
            $("#bigechartHead").empty();
            require("s_Main").loadCenter_Video();

        },
        num: function () {
            require(['countup'], function () {
                $('.counter').countUp({
                    delay: 10,
                    time: 1000
                });
            });
        },
        /*********************左侧图表-start*********************/

        wrj: function () {
            var wrjChart = document.getElementById('wrj-chart');

            //var post_data = { "communityId": "s012", "type": "" };

            s_EchartAjax.getSocietyWrj(function (result) {

                require("s_Echart").myChartwrj = echarts.init(wrjChart);

                if (require("s_Echart").wrjData == null) { return false; }
                if ($("#wrj-chart").length <= 0) { return false; }
                var data = require("s_Echart").wrjData;
                wrjOption = {
                    title: {
                        text: data.wrj_cnt,
                        subtext: '总数',
                        x: 'center',
                        y: '38%',
                        textStyle: {
                            color: '#ea6604',
                            fontSize: 24,
                            fontFamily: "Aerial"
                        },
                        subtextStyle: {
                            color: '#fff',
                            fontSize: 20
                        }
                    },
                    tooltip: {},
                    legend: {
                        show: false
                    },
                    color: ["#09d10e", "#0024fe", "#7d43f3"],
                    series: [
                        {
                            type: 'pie',
                            radius: ['50%', '64%'],
                            center: ["center", "center"],
                            itemStyle: {
                                borderWidth: 0,
                                borderColor: "#000",
                            },
                            labelLine: {
                                normal: {
                                    length: 20,
                                    length2: 60,
                                    lineStyle: {
                                        width: 2,
                                        color: "#0996d1"
                                    }
                                }
                            },
                            label: {
                                normal: {
                                    fontSize: 20,
                                    formatter: '{b|{b}}\n{c}架',
                                    padding: [0, -70],
                                    color: "#0996d1",
                                    rich: {
                                        b: {
                                            fontSize: 20,
                                            lineHeight: 36,
                                            color: "#fff",

                                        },
                                        c: {
                                            fontSize: 20,
                                            lineHeight: 36,
                                            color: "#fff",
                                            position: "center",
                                        },
                                        per: {
                                            fontSize: 20,
                                            color: "#0996d1",
                                            fontFamily: "Aerial",
                                        },
                                        center: {
                                            position: "center",
                                        }
                                    }
                                }
                            },
                            data: [
                                { value: data.wrj_flying_cnt, name: '执飞中' },
                                { value: data.wrj_charging_cnt, name: '充电中' },
                                { value: data.wrj_idle_cnt, name: '待命中' }
                            ]
                        }
                    ]
                };
                require("s_Echart").myChartwrj.setOption(wrjOption);
            })
        },

        bigWrj: function () {
            if ($("#wrj-chart").length <= 0) { return false; }
            $("#bigechartHead").html("无人机");
            s_EchartAjax.getSocietyWrj(function (result) {
                if (require("s_Echart").wrjData == null) { return false; }
                if ($("#wrj-chart").length <= 0) { return false; }
                var data = require("s_Echart").wrjData;
                option = {
                    title: {
                        text: data.wrj_cnt,
                        subtext: '总数',
                        x: 'center',
                        y: '38%',
                        textStyle: {
                            color: '#ea6604',
                            fontSize: 140,
                            fontFamily: "Aerial"
                        },
                        subtextStyle: {
                            color: '#fff',
                            fontSize: 100
                        }

                    },
                    tooltip: {
                        show: false,
                    },
                    legend: {
                        show: false
                    },
                    color: ["#09d10e", "#0024fe", "#7d43f3"],
                    series: [
                        {
                            type: 'pie',
                            radius: ['48%', '62%'],
                            center: ["center", "center"],
                            itemStyle: {
                                borderWidth: 0,
                                borderColor: "#000",
                            },
                            labelLine: {
                                normal: {
                                    length: 40,
                                    length2: 300,
                                    lineStyle: {
                                        width: 8,
                                        color: "#0996d1"
                                    }
                                }
                            },
                            label: {
                                normal: {
                                    fontSize: 70,
                                    formatter: '{b|{b}}\n{c}架',
                                    padding: [0, -200],
                                    color: "#0996d1",
                                    rich: {
                                        b: {
                                            fontSize: 70,
                                            lineHeight: 76,
                                            color: "#fff",
                                        },
                                        c: {
                                            fontSize: 70,
                                            lineHeight: 76,
                                            color: "#fff",
                                            position: "center",
                                        },
                                        per: {
                                            fontSize: 70,
                                            color: "#0996d1",
                                            fontFamily: "Aerial",
                                        },
                                        center: {
                                            position: "center",
                                        }
                                    }
                                }
                            },
                            data: [
                                { value: data.wrj_flying_cnt, name: '执飞中' },
                                { value: data.wrj_charging_cnt, name: '充电中' },
                                { value: data.wrj_idle_cnt, name: '待命中' }
                            ]
                        }
                    ]
                };
                if (require("s_Echart").mybigChart != null && require("s_Echart").mybigChart != "" && require("s_Echart").mybigChart != undefined) {
                    require("s_Echart").mybigChart.dispose();
                }
                require("s_Echart").mybigChart = echarts.init(document.getElementById('Big-chart'));
                require("s_Echart").mybigChart.setOption(option);
            })
        },

        //传感器数据
        cgq: function () {
            s_EchartAjax.getSocietyCgq(function (result) {
                if (require("s_Echart").cgqData == null) { return false; }
                var data = require("s_Echart").cgqData;
                //data = data.data.sensorNumList;  //20190714改  中台接口直接返回数组

                $('#cgq-ywgy').html(data[6].sensorCount)
                $('#cgq-zndt').html(data[5].sensorCount)
                $('#cgq-wxmc').html(data[3].sensorCount)
                $('#cgq-tcdc').html(data[1].sensorCount)
                $('#cgq-wxkm').html(data[2].sensorCount)
                $('#cgq-dzwl').html(data[8].sensorCount)
                $('#cgq-znjg').html(data[4].sensorCount)
                $('#cgq-dl').html(data[16].sensorCount)

                if (data[6].alarmSensorCount) {
                    $('#cgq-ywgy').parents(".item-r").siblings().addClass("testAerial has-num").attr("data-text", data[6].alarmSensorCount)
                }
                if (data[5].alarmSensorCount) {
                    $('#cgq-zndt').parents(".item-r").siblings().addClass("testAerial has-num").attr("data-text", data[5].alarmSensorCount)
                }
                if (data[3].alarmSensorCount) {
                    $('#cgq-wxmc').parents(".item-r").siblings().addClass("testAerial has-num").attr("data-text", data[3].alarmSensorCount)
                }
                if (data[1].alarmSensorCount) {
                    $('#cgq-tcdc').parents(".item-r").siblings().addClass("testAerial has-num").attr("data-text", data[1].alarmSensorCount)
                }
                if (data[2].alarmSensorCount) {
                    $('#cgq-wxkm').parents(".item-r").siblings().addClass("testAerial has-num").attr("data-text", data[2].alarmSensorCount)
                }
                if (data[8].alarmSensorCount) {
                    $('#cgq-dzwl').parents(".item-r").siblings().addClass("testAerial has-num").attr("data-text", data[8].alarmSensorCount)
                }
                if (data[4].alarmSensorCount) {
                    $('#cgq-znjg').parents(".item-r").siblings().addClass("testAerial has-num").attr("data-text", data[4].alarmSensorCount)
                }
            })
        },

        loadCirclediv: function () {
            if ($("body").width() == 4500) {
                $('#sqzz-sxt1>.sxt-circlediv').empty();
                $('#sqzz-sxt2>.sxt-circlediv').empty();

                com.loopFun($('#sqzz-sxt1>.sxt-circlediv')[0], 40, '#071956', '#0078ff', 'transparent', '20px', 5, 30, 1000);
                com.loopFun($('#sqzz-sxt2>.sxt-circlediv')[0], 60, '#075612', '#00f81f', 'transparent', '20px', 5, 30, 1000);

            } else if ($("body").width() == 7680) {
                $('#sqzz-sxt1>.sxt-circlediv').empty();
                $('#sqzz-sxt2>.sxt-circlediv').empty();
                com.loopFun($('#sqzz-sxt1>.sxt-circlediv')[0], 40, '#071956', '#0078ff', 'transparent', '20px', 6, 40, 1000);
                com.loopFun($('#sqzz-sxt2>.sxt-circlediv')[0], 60, '#075612', '#00f81f', 'transparent', '20px', 6, 40, 1000);

            } else if ($("body").width() == 11520) {
                $('#sqzz-sxt1>.sxt-circlediv').empty();
                $('#sqzz-sxt2>.sxt-circlediv').empty();
                com.loopFun($('#sqzz-sxt1>.sxt-circlediv')[0], 40, '#071956', '#0078ff', 'transparent', '20px', 10, 65, 1000);
                com.loopFun($('#sqzz-sxt2>.sxt-circlediv')[0], 60, '#075612', '#00f81f', 'transparent', '20px', 10, 65, 1000);
            }
        },

        //景区--摄像头
        jqCamera: function (post_data) {
            s_EchartAjax.getJqCameraData(post_data, function (result) {
                if (require("s_Echart").jqCameraData == null) { return false; }
                var data = require("s_Echart").jqCameraData;
                $("#total_camera").html(data.total);
                $("#online_camera").html(data.onTotal);
                $("#outline_camera").html(data.offTotal);
            });
        },

        //景区--车辆
        jqCar: function () {
            s_EchartAjax.getJqCarData(function (result) {
                if (require("s_Echart").jqCarData == null) { return false; }
                var data = require("s_Echart").jqCarData;
                data = data[0];

                function MyDate() {
                    function addZero(n) {
                        n = n < 10 ? '0' + n : n;
                        return n;
                    }

                    var d = new Date();
                    var year = d.getFullYear();
                    var mon = d.getMonth() + 1;
                    var day = d.getDate();

                    var s = '' + year + addZero(mon) + addZero(day);
                    return s;
                }

                var thisDayCarJson = null;
                for (key in data) {
                    if (key === MyDate()) {
                        thisDayCarJson = data[key];
                    }
                }
                //出临港 ,入临港相加
                var outCarNum = 0, inCarNum = 0, carTotal = 0;
                if (thisDayCarJson) {
                    for (key1 in thisDayCarJson["出临港"]) {
                        outCarNum += thisDayCarJson["出临港"][key1]
                    }
                    for (key2 in thisDayCarJson["入临港"]) {
                        inCarNum += thisDayCarJson["入临港"][key2]
                    }
                }

                carTotal = outCarNum + inCarNum;

                $("#total_car").html(carTotal);
                $("#total_normalCar").html(inCarNum);
                $("#total_illegalCar").html(outCarNum);
            });
        },

        //景区--人员
        jqPerson: function (post_data) {
            s_EchartAjax.getJqPersonData(post_data, function (result) {
                if (require("s_Echart").jqPersonData == null) { return false; }
                var data = require("s_Echart").jqPersonData;

                $("#total_person").html(data.total);
                $("#normal_person").html(data.lingangdadao);
                $("#doubtable_person").html(data.dishui);
            });
        },

        //摄像头--摄像头
        sxtCamera: function (post_data) {
            s_EchartAjax.getSxtCameraData(post_data, function (result) {
                if (require("s_Echart").sxtCameraData == null) { return false; }
                var data = require("s_Echart").sxtCameraData;

                var cameraOnNum = 0;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].sbzt === "ON") {
                        cameraOnNum++;
                    }
                }

                $("#iot-sxt1").find(".sxt-circleinfo").children().eq(0).find("em").html(data.length);
                $("#iot-sxt1").find(".sxt-circleinfo").children().eq(1).find("em").html(cameraOnNum);
                $("#iot-sxt1").find(".sxt-circleinfo").children().eq(2).find("em").html(data.length - cameraOnNum);
            });
        },

        //摄像头--车辆
        sxtCar: function (str, post_data) {
            // var post_data = { "communityId": "S012", "startDate": "2019-05-01", "endDate": "2019-05-02" };

            s_EchartAjax.getSxtCarData(post_data, function (result) {
                if (require("s_Echart").sxtCarData == null) { return false; }
                var data = require("s_Echart").sxtCarData;
                data = data.data;

                $(str).find(".sxt-circleinfo").children().eq(0).find("em").html(data.total);
                $(str).find(".sxt-circleinfo").children().eq(1).find("em").html(data.total - data.illegally);
                $(str).find(".sxt-circleinfo").children().eq(2).find("em").html(data.illegally);
            });
        },

        //摄像头--人员
        sxtPerson: function (str) {
            s_EchartAjax.getSxtPersonData(function (result) {
                if (require("s_Echart").sxtPersonData == null) { return false; }
                var data = require("s_Echart").sxtPersonData;

                $(str).find(".sxt-circleinfo").children().eq(0).find("em").html(data.total);
                $(str).find(".sxt-circleinfo").children().eq(1).find("em").html(data.total - data.count);
                $(str).find(".sxt-circleinfo").children().eq(2).find("em").html(data.count);

            });
        },


        //人员车辆结构化图片
        perCarPic: function () {
            clearInterval(window.perCarPicTimer);
            window.perCarPicTimer = null;

            s_EchartAjax.getPerCarPicData(function (result) {
                if (require("s_Echart").perCarPicData == null) { return false; }
                var data = require("s_Echart").perCarPicData;
            
                var carData = data.car[0];
                var personData = data.person[0];
                var perCarPicNum = 1;
                changeToCarFun();
                perCarPicTimer = setInterval(function () {
                    perCarPicNum++;
                    perCarPicNum % 2 == 0 ? changeToPersonFun() : changeToCarFun();
                }, 15000);

                function changeToCarFun() {
                    sPerCarPic = 'car'
                    $("#bigpercartitle").html("车辆信息");
                    $(".iot-percarpic").css({ "backgroundImage": "url(" + encodeURI(carData.picurl) + ")" });
                    $(".iot-percarmess>em").html('车牌号：');
                    $(".iot-percarmess>span").html(carData.platenumber);
                    $(".iot-percartime>em").html('识别时间：');

                    $(".iot-percartime>span").html([carData.date.split("-")[1], carData.date.split("-")[2]].join("/"));
                    if ($("#iot-percartime").length > 0) {
                        $("#iot-percartime>span").html([carData.date.split("-")[1], carData.date.split("-")[2]].join("月").replace(" ", "日 "));
                    }
                    
                }

                function changeToPersonFun() {
                    sPerCarPic = 'person'
                    $("#bigpercartitle").html("人员信息");
                    var time = personData.wzbjsj.split(".")[0].split("-");
                    var timestr = [time[1], time[2]].join("/").replace("T", " ");

                    $(".iot-percarpic").css({ "backgroundImage": "url(" + personData.cjtobjectid + ")" });
                    if ($("#iot-percarpic").length > 0) {
                    $("#iot-percarpic").css({"backgroundImage": "url("+ personData.ytobjectid +")"});
                    }

                    $(".iot-percarmess>em").html('性别：');
                    $(".iot-percarmess>span").html(personData.gender);
                    $(".iot-percartime>em").html('识别时间：');

                    $(".iot-percartime>span").html(timestr);
                    if ($("#iot-percartime").length > 0) {
                        $("#iot-percartime>span").html(timestr.replace("/", "月").replace(" ", "日 "));
                    }
                }


            });
        },

        bigPerCarPic: function () {
            s_EchartAjax.getPerCarPicData(function (result) {
                if (require("s_Echart").perCarPicData == null) { return false; }
                var data = require("s_Echart").perCarPicData;
                var carData = data.car[0];
                var personData = data.person[0];

                if (sPerCarPic === 'car') {
                    changeToCarFun();
                } else {
                    changeToPersonFun();
                }

                function changeToCarFun() {
                    $("#bigpercartitle").html("车辆信息");
                    $(".iot-percarpic2").css({ "backgroundImage": "url(" + encodeURI(carData.picurl) + ")" });
                    $(".iot-percarmess>em").html('车牌号：');
                    $(".iot-percarmess>span").html(carData.platenumber);
                    $(".iot-percartime>em").html('识别时间：');

                    $(".iot-percartime>span").html([carData.date.split("-")[1], carData.date.split("-")[2]].join("/"));
                    if ($("#iot-percartime").length > 0) {
                        $("#iot-percartime>span").html([carData.date.split("-")[1], carData.date.split("-")[2]].join("月").replace(" ", "日 "));
                    }

                }

                function changeToPersonFun() {
                    $("#bigpercartitle").html("人员信息");
                    var time = personData.wzbjsj.split(".")[0].split("-");
                    var timestr = [time[1], time[2]].join("/").replace("T", " ");

                    $(".iot-percarpic2").css({ "backgroundImage": "url(" + personData.cjtobjectid + ")" });
                    if ($("#iot-percarpic").length > 0) {
                        $("#iot-percarpic").css({ "backgroundImage": "url(" + personData.ytobjectid + ")" });
                    }

                    $(".iot-percarmess>em").html('性别：');
                    $(".iot-percarmess>span").html(personData.gender);
                    $(".iot-percartime>em").html('识别时间：');

                    $(".iot-percartime>span").html(timestr);
                    if ($("#iot-percartime").length > 0) {
                        $("#iot-percartime>span").html(timestr.replace("/", "月").replace(" ", "日 "));
                    }
                }
            });
        },

        //主责部门
        zzbm: function () {
            s_EchartAjax.getSocietyZzbm(function (result) {
                if (require("s_Echart").zzbmData == null) { return false; }
                var data = require("s_Echart").zzbmData;
                //data = data.data.dealDeptList;    //201907014 中台接口直接返回数组

                for (var i = 0; i < data.length; i++) {
                    $("#zzbm-tbody").append("<tr><td>" + (data[i].executeDeptname ? data[i].executeDeptname : '') + "</td><td>" +
                    data[i].infoScname + "</td><td>" + data[i].taskNums + "</td></tr>");
                }
            });
        },

        /*********************左侧图表-end*********************/


        /*********************右侧图表-start*********************/
        //右侧事件---好像没用到
        sj: function () {
            if ($("#sj-chart").length <= 0) { return false; }
            var sjChart = document.getElementById('sj-chart');
            require("s_Echart").myChartsj = echarts.init(sjChart);

            sjOption = {
                tooltip: {
                    show: false,
                },
                legend: {
                    show: false
                },
                color: ["#04c6fa", "#dc4804"],
                series: [
                    {
                        type: 'pie',
                        radius: ['60%', '90%'],
                        center: ["center", "center"],
                        itemStyle: {
                            borderWidth: 5,
                            borderColor: "#000",
                        },
                        labelLine: {
                            show: false,
                        },
                        label: {
                            show: false,
                        },
                        data: [
                            { value: 160, name: '1' },
                            { value: 40, name: '2' },
                        ]
                    }
                ]
            };
            require("s_Echart").myChartsj.setOption(sjOption);
        },

        //右侧事件信息
        sjxx: function () {
            s_EchartAjax.getSocietySj(function (result) {
                if (require("s_Echart").societySjData == null) { return false; }
                var data = require("s_Echart").societySjData;

                $("#sj-list1").find(".sj-data").eq(0).html(data.eventNums);
                $("#sj-list1").find(".sj-data").eq(1).html(Number(data.discoverRate).toFixed(1) + '%');
                $("#sj-list1").find(".sj-data").eq(2).html(data.discoverTimeSaving);

                $("#sj-list2").find(".sj-data").eq(0).html(data.distributeNums);
                $("#sj-list2").find(".sj-data").eq(1).html(Number(data.smartSingleRate).toFixed(1) + '%');
                $("#sj-list2").find(".sj-data").eq(2).html(data.smartSingleTimeSaving);


            })
        },

        //事件处理成功
        sjcg: function () {
            var changeTime = 15000;//图表切换频率
            s_EchartAjax.getSocietySjcg(function (result) {
                clearInterval(window.sjcgTimer);
                window.sjcgTimer = null;

                if (require("s_Echart").societySjcgData == null) { return false; }
                if ($("#sjcg-chart").length <= 0) { return false; }
                var data = require("s_Echart").societySjcgData;
                //data = data.data.taskInfo;  //中台直接返回数组  20190714

                //X轴月份
                var xAxisMonth = [];
                var oToDay = new Date().getMonth() + 1;
                for (var i = 0; i < data.length; i++) {
                    if (i < oToDay) {
                        data.push(data.shift())
                    }
                }

                //事件处理成功数
                var seriesData = [];
                for (var i = 0; i < data.length; i++) {
                    seriesData.push(Number(data[i].counts));
                    xAxisMonth.push(data[i].months + '月');
                    //事件成功率 保留两位小数
                    oSjcgseriesRateData.push((Number(data[i].counts) / Number(data[i].totalCounts) * 100).toFixed(2));
                }
                var seriesDataMax = Math.max.apply(null, seriesData);
                seriesDataMax = (Math.ceil(seriesDataMax / 1000) * 1000).toFixed(0);
                var seriesDataMin = parseInt(Math.min.apply(null, seriesData));
                seriesDataMin = seriesDataMin < 8000 ? 0 : seriesDataMin;
                //事件处理成功率最大最小数
                var sjcgSeriesRateDataMax = Math.max.apply(null, oSjcgseriesRateData);
                sjcgSeriesRateDataMax = (Math.ceil(sjcgSeriesRateDataMax / 100) * 100).toFixed(0);
                var sjcgSeriesRateDataMin = parseInt(Math.min.apply(null, oSjcgseriesRateData));
                // sjcgSeriesRateDataMin = sjcgSeriesRateDataMin < 99.8 ? 99 : sjcgSeriesRateDataMin;

                // 图表成功数成功率循环
                var sjcgTimerIndex = 0;
                if (require("s_Echart").intervalTime <= 0) {
                    changeTime = 2000;
                }
                window.sjcgTimer = setInterval(function () {

                    if (sjcgTimerIndex) {
                        oSjcgseriesData = seriesData;
                        sjcgSeriesDataMax = seriesDataMax;
                        sjcgSeriesDataMin = seriesDataMin;
                        sjcgTimerIndex--;
                        strTitle = "事件处理成功数";
                    } else {
                        oSjcgseriesData = oSjcgseriesRateData;
                        sjcgSeriesDataMax = sjcgSeriesRateDataMax;
                        sjcgSeriesDataMin = sjcgSeriesRateDataMin;
                        sjcgTimerIndex++;
                        strTitle = "事件处理成功率（%）";
                    }
                    $("#sjcg-charttab>.charttab").eq(sjcgTimerIndex).addClass("active").siblings().removeClass("active");

                    sjcgFun(sjcgSeriesDataMax, sjcgSeriesDataMin, oSjcgseriesData);

                    if (require("s_Echart").myChartsjcg != null && require("s_Echart").myChartsjcg != "" && require("s_Echart").myChartsjcg != undefined) {
                        require("s_Echart").myChartsjcg.dispose();
                    }
                    require("s_Echart").myChartsjcg = echarts.init(document.getElementById('sjcg-chart'));
                    require("s_Echart").myChartsjcg.setOption(sjcgOption);

                    require("s_Echart").bigSjcg(strTitle, sjcgSeriesDataMax, sjcgSeriesDataMin, oSjcgseriesData);
                    require("s_Echart").intervalTime = 1;
                    if (require("s_Echart").intervalTime == 1) {
                        changeTime = 15000;
                        clearInterval(window.sjcgTimer);
                        window.sjcgTimer = setInterval(function () {

                            if (sjcgTimerIndex) {
                                oSjcgseriesData = seriesData;
                                sjcgSeriesDataMax = seriesDataMax;
                                sjcgSeriesDataMin = seriesDataMin;
                                sjcgTimerIndex--;
                                strTitle = "事件处理成功数";
                            } else {
                                oSjcgseriesData = oSjcgseriesRateData;
                                sjcgSeriesDataMax = sjcgSeriesRateDataMax;
                                sjcgSeriesDataMin = sjcgSeriesRateDataMin;
                                sjcgTimerIndex++;
                                strTitle = "事件处理成功率（%）";
                            }
                            $("#sjcg-charttab>.charttab").eq(sjcgTimerIndex).addClass("active").siblings().removeClass("active");

                            sjcgFun(sjcgSeriesDataMax, sjcgSeriesDataMin, oSjcgseriesData);

                            if (require("s_Echart").myChartsjcg != null && require("s_Echart").myChartsjcg != "" && require("s_Echart").myChartsjcg != undefined) {
                                require("s_Echart").myChartsjcg.dispose();
                            }
                            require("s_Echart").myChartsjcg = echarts.init(document.getElementById('sjcg-chart'));
                            require("s_Echart").myChartsjcg.setOption(sjcgOption);

                            require("s_Echart").bigSjcg(strTitle, sjcgSeriesDataMax, sjcgSeriesDataMin, oSjcgseriesData);
                            require("s_Echart").intervalTime = 1;
                        }, 15000);
                    }
                }, changeTime);

                //事件处理成功图表加载
                $("#sjcg-charttab>.charttab").eq(sjcgTimerIndex).addClass("active").siblings().removeClass("active");
                oSjcgseriesData = seriesData;
                sjcgSeriesDataMax = seriesDataMax;
                sjcgFun(sjcgSeriesDataMax, oSjcgseriesData);
                if (require("s_Echart").myChartsjcg != null && require("s_Echart").myChartsjcg != "" && require("s_Echart").myChartsjcg != undefined) {
                    require("s_Echart").myChartsjcg.dispose();
                }
                require("s_Echart").myChartsjcg = echarts.init(document.getElementById('sjcg-chart'));
                require("s_Echart").myChartsjcg.setOption(sjcgOption);

                require("s_Echart").bigSjcg(strTitle, sjcgSeriesDataMax, sjcgSeriesDataMin, oSjcgseriesData);

                function sjcgFun(yAxisMax, yAxisMin, seriesData) {
                    sjcgOption = {
                        tooltip: {
                            trigger: 'axis',
                        },
                        legend: {
                            show: false,
                        },
                        grid: {
                            top: '10%',
                            left: '0',
                            right: '2%',
                            bottom: '3%',
                            containLabel: true,
                        },
                        xAxis: [{
                            type: 'category',
                            boundaryGap: false,
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: '#3d4147'
                                },
                            },
                            axisLabel: {
                                interval: 0,
                                margin: 15,
                                textStyle: {
                                    color: '#ebebeb',
                                    fontFamily: 'Helvetica',
                                    fontSize: 22,
                                },
                            },
                            axisTick: { show: false, },
                            data: xAxisMonth,
                        }],
                        yAxis: [{
                            type: 'value',
                            min: yAxisMin,
                            max: yAxisMax,
                            splitNumber: 5,
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#3d4147'
                                }
                            },
                            axisLine: { show: false, },
                            axisLabel: {
                                margin: 30,
                                textStyle: {
                                    color: '#ebebeb',
                                    fontFamily: 'Helvetica',
                                    fontSize: 22,

                                },
                            },
                            axisTick: { show: false, },
                        }],
                        series: [{
                            // name: '月',
                            type: 'line',
                            symbol: 'circle',
                            symbolSize: 12,
                            areaStyle: {
                                color: 'rgba(1,98,133,0.3)'
                            },
                            itemStyle: {
                                normal: {
                                    color: "#42e2fa",
                                    borderWidth: 4,
                                    borderColor: "#000"
                                }
                            },
                            lineStyle: {
                                normal: {
                                    color: "#42e2fa"
                                }
                            },
                            data: seriesData
                        },
                        ]
                    };

                }

            })
            //$("#sjcg-title").click(function () { 
            //    require("s_Echart").sjcg();
            //})

        },

        // 事件处理成功状态
        loadSocietySjcgStatusData: function () {
            s_EchartAjax.getSocietySjcgStatusData(function (result) {
                if (require("s_Echart").societySjcgStatusData == null) { return false; };
                var data = require("s_Echart").societySjcgStatusData;
                //data = data.data.dealDeptList;   //中台接口直接返回数组

                $("#sjcg-status>button").eq(0).find("span").html(data[0].counts);
                $("#sjcg-status>button").eq(1).find("span").html(data[1].counts);
                $("#sjcg-status>button").eq(2).find("span").html(data[2].counts);
            })
        },


        // 事件处理成功数列表
        loadSocietySjcgList: function () {

            var nowdata = require("common").getNowFormatDate();//当前时间
            //var before7 = require("common").getDaysBefore(nowdata, 7);//7天前的时间
            var beforetime = nowdata.split(' ')[0] + " 00:00:00";//当天事件
            var post_data = { "pageIndex": 1, "pageSize": 10000, "startTime": beforetime, "endTime": nowdata }

            s_EchartAjax.getSocietySjcgList(post_data, function (result) {
                if (require("s_Echart").societySjcgListData == null) { return false; };
                var data = require("s_Echart").societySjcgListData;
                //data = data.data.list;   //中台新接口直接返回数组  20190714
                var html = '';
                for (var i = 0; i < data.length; i++) {
                    var time = data[i].createTime.split(".")[0].split("T");
                    var sjxxLiClass = "sjxx-li flex"
                    if (i <= 0) {
                        sjxxLiClass = "sjxx-li flex active"
                    }

                    if (data[i].communityId == null) {
                        data[i].communityId = 'SANGAO';
                    }
                    if (require("s_Main").LayerCatalog.Event.List[data[i].communityId]) {
                        var poiName = "POISociety" + require("s_Main").LayerCatalog.Event.List[data[i].communityId].Name + "_" + data[i].id;//POIIOT_01
                        var aiiconstyle = "";
                        if (data[i].dispatchType == "智能派单") {
                            aiiconstyle = 'style="background: url(Content/images/AI-icon.png) center center no-repeat;"';
                        }

                        html +=
                           '<li class="' + sjxxLiClass + '" onclick="javascript:$(this).addClass(\'active\');require(&apos;sl_Event&apos;).loadEventDetail(&apos;' + poiName + '&apos;)">' +
                              '<span class="sjxx-id counter" ' + aiiconstyle + '></span>' +
                              '<div class="sjxx-div">' +
                                  '<div class="sjxx-li-line1">' +
                                      '<span class="sjxx-event">' + data[i].eventName + '</span>' +
                                      '<span class="fr sjxx-state">' + data[i].statusName + '</span>' +
                                      '<span class="fr sjxx-economizetime">节约' + data[i].economizeTime + '</span>' +
                                  '</div>' +
                                  '<div class="sjxx-address">' + data[i].address +
                                     '<span class="fr sjxx-time">' + time[0] + '<span>' + data[i].dealPerson + '</span></span>' +
                                  '</div>' +
                              '</div>' +
                        '</li>';
                    }
                }
                $("#ul_eventlist").html(html);

            })
        },

        //社综事件列表 ---放大
        loadCenterEventList: function () {
            require("s_Echart").closeEvent();//关闭事件循环播放
            var url = con.HtmlUrl + 'SocietyNew/Center_04.html';
            require(['text!' + url], function (template) {
                $("#center_04").html(template);
                $("#center_04").show('drop', 1000);//左侧
                require("s_Echart").loadSocietyEventList();
            })
            $("#center_03").html("");
            $("#center_05").html("");
        },
        // 中间放大事件列表
        loadSocietyEventList: function () {
            $("#center-event-tabsoci .center-event-tab").each(function (index, element) {
                $(this).click(function () {
                    $(this).addClass("active").siblings().removeClass("active");
                    var thisHtml = $(this).html();
                    switch (thisHtml) {
                        case "当天":// 近三天
                            setPostData(1);
                            break;
                        case "近一周"://近一周
                            setPostData(7);
                            break;
                        case "近一月"://近一月
                            setPostData(30);
                            break;
                        default:
                    }
                })
                $("#center-event-tabsoci .center-event-tab").eq(0).click();
            })

            function setPostData(n) {
                var nowdata = require("common").getNowFormatDate();//当前时间
                if (n == 1) {//当天
                    var beforetime = nowdata.split(' ')[0] + " 00:00:00";//当天事件
                    var post_data = { "pageIndex": 1, "pageSize": 10000, "startTime": beforetime, "endTime": nowdata }
                }
                else {
                    var before7 = require("common").getDaysBefore(nowdata, n);//7天前的时间
                    var post_data = { "pageIndex": 1, "pageSize": 10000, "startTime": before7, "endTime": nowdata }
                }


                s_EchartAjax.getSocietySjcgList(post_data, function (result) {
                    if (require("s_Echart").societySjcgListData == null) { return false; };
                    var data = require("s_Echart").societySjcgListData;
                    //data = data.data.list;  //中台新接口直接返回数组  20190714

                    $("#center-event-sociul").html('');
                    var html = '';
                    for (var i = 0; i < data.length; i++) {
                        var time = data[i].createTime.split(".")[0].split("T");
                        if (data[i].communityId == null) {
                            data[i].communityId = 'SANGAO';
                        }
                        if (require("s_Main").LayerCatalog.Event.List[data[i].communityId]) {
                            var poiName = "POISociety" + require("s_Main").LayerCatalog.Event.List[data[i].communityId].Name + "_" + data[i].id;//POIIOT_01

                            html +=
                               '<li class="center-event-li flex" onclick="require(&apos;sl_Event&apos;).loadEventDetail(&apos;' + poiName + '&apos;)">' +
                                 '<span class="sjxx-id counter"></span>' +
                                 '<div class="sjxx-div">' +
                                     '<div class="sjxx-li-line1 center-event-li-line1">' +
                                         '<span class="sjxx-event">' + data[i].eventName + '</span>' +
                                         '<span class="fr sjxx-state">' + data[i].statusName + '</span>' +
                                         '<span class="fr sjxx-economizetime">节约' + data[i].economizeTime + '</span>' +
                                     '</div>' +
                                     '<div class="sjxx-address">' + data[i].address +
                                        '<span class="fr sjxx-time">' + time[0] + '<span>' + data[i].dealPerson + '</span></span>' +
                                     '</div>' +
                                 '</div>' +
                                '</li>';

                        }
                    }

                    $("#center-event-sociul").html(html);
                    $('.scrolldiv').perfectScrollbar({ cursorwidth: 20, cursorcolor: "rgba(0, 126, 179, .6)", });
                })
            };

        },
        //关闭事件大图
        closeCenterEventList: function () {
            require("s_Echart").loadloopevent();
            $("#center_04").html("");
        },
        bigSjcg: function (strTitle, sjcgSeriesDataMax, sjcgSeriesDataMin, oSjcgseriesData) {

            //X轴月份
            var xAxisMonth = [];
            var oToDay = new Date().getMonth() + 1;
            for (var i = 0; i < 12; i++) {
                var j = (oToDay - i) <= 0 ? (12 + oToDay - i) : (oToDay - i);
                xAxisMonth.unshift(j + '月')
            }

            if (sjcgChartClose) {
                return false;
            } else {
                $("#bigechartHead").html(strTitle);
                option = {
                    tooltip: {
                        trigger: 'axis',
                        textStyle: {
                            fontSize: 50,
                        }
                    },
                    legend: {
                        show: false,
                    },
                    grid: {
                        bottom: '5%',
                        left: '5%',
                        right: '5%',
                        height: '86%',
                        containLabel: true,
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            lineStyle: {
                                width: 4,
                                color: "rgba(80,172,254,.2)",
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            margin: 15,
                            textStyle: {
                                color: "#00d7fe",
                                fontFamily: 'Helvetica',
                                fontSize: 60,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                width: 4,
                                color: "rgba(80,172,254,.2)"
                            }
                        },
                        axisTick: { show: false, },
                        data: xAxisMonth,

                    }],
                    yAxis: [{
                        type: 'value',
                        min: sjcgSeriesDataMin,
                        max: sjcgSeriesDataMax,
                        splitNumber: 5,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                width: 4,
                                color: "rgba(80,172,254,.2)",
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                width: 4,
                                color: "rgba(80,172,254,.2)",
                            }
                        },
                        axisLabel: {
                            margin: 30,
                            textStyle: {
                                color: '#00d7fe',
                                fontFamily: 'Helvetica',
                                fontSize: 60,

                            },
                        },
                        axisTick: { show: false, },
                    }],
                    series: [{
                        // name: '月',
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 30,
                        areaStyle: {
                            color: 'rgba(1,98,133,0.3)'
                        },
                        itemStyle: {
                            normal: {
                                color: "#42e2fa",
                                borderWidth: 8,
                                borderColor: "#000"
                            }
                        },
                        lineStyle: {
                            normal: {
                                width: 12,
                                color: "#42e2fa"
                            }
                        },
                        data: oSjcgseriesData
                    },
                    ]
                };

                if (require("s_Echart").mybigChart != null && require("s_Echart").mybigChart != "" && require("s_Echart").mybigChart != undefined) {
                    require("s_Echart").mybigChart.dispose();
                }

                require("s_Echart").mybigChart = echarts.init(document.getElementById('Big-chart'));
                require("s_Echart").mybigChart.setOption(option);
            }


        },
        //中间大数字   //这个没有用到
        //bigNumber: function () {
        //    s_EchartAjax.getSocietyBigNum(function (result) {
        //        if (require("s_Echart").societyBigNumData == null) { return false; };
        //        var data = require("s_Echart").societyBigNumData;
        //        $('#dsz-ajljs').html(data.totalCount);
        //        $('#dsz-dyajs').html(data.monthCount);
        //        $('#dsz-znpds').html(Number(data.dispatchRate).toFixed(1) + "%");
        //        $('#dsz-zdfxl').html(Number(data.autoRate).toFixed(1) + "%");
        //        $('#dsz-bhl').html(Number(data.loopRate).toFixed(1) + "%");
        //    })
        //},
        //无人机事件天气预报
        DroneWeather: function () {
            if (WeatherSevenData != null) {
                //console.log("天气数据不为空");
                var data = WeatherSevenData;
                //var weaimg_0 = "https://cdn.huyahaha.com/tianqiapi/skin/qq/" + data.data[0].wea_img + ".png"
                //var weaimg_1 = "https://cdn.huyahaha.com/tianqiapi/skin/qq/" + data.data[1].wea_img + ".png"
                //var weaimg_2 = "https://cdn.huyahaha.com/tianqiapi/skin/qq/" + data.data[2].wea_img + ".png"
                //var weaimg_3 = "https://cdn.huyahaha.com/tianqiapi/skin/qq/" + data.data[3].wea_img + ".png"
                //console.log(data);
                var html = '';


                html += '<div class="sqzz-wrj-lr2-temp">' + data.data[0].week + '（今天，实时：' + data.data[0].tem + '）</div>';
                html += '<div class="tablebox">';
                html += '<table cellspacing="0" cellpadding="0" class="table sqzz-wrj-lr2-table">';
                html += '<tbody>';

                html += '<tr>';
                //html += '<td rowspan="2">';
                //html += '<div class=""><img src=' + weaimg_0 + ' style="width: 1.1rem"></div>';
                //html += '</td>';
                html += '<td>' + data.data[0].week + '</td>';
                html += '<td>' + data.data[1].week + '</td>';
                html += '<td>' + data.data[2].week + '</td>';
                html += '<td>' + data.data[3].week + '</td>';
                html += '</tr>';
                html += '<tr><td></td>';
                //html += '<td><div class=""><img src=' + weaimg_1 + ' style="width: .8rem"></div></td>';
                //html += '<td><div class=""><img src=' + weaimg_2 + ' style="width: .8rem"></div></td>';
                //html += '<td><div class=""><img src=' + weaimg_3 + ' style="width: .8rem"></div></td>';
                html += '<td><div class=""></div></td>';
                html += '<td><div class=""></div></td>';
                html += '<td><div class=""></div></td>';

                html += '</tr>';
                html += '<tr>';
                html += '<td style="font-size: .4rem;">' + data.data[0].tem1 + '-' + data.data[0].tem2 + '</td>';
                html += '<td></td>';
                html += '<td></td>';
                html += '<td></td>';
                html += '</tr>';
                html += '<tr>';
                html += '<td>' + data.data[0].wea + '</td>';
                html += '<td>' + data.data[1].tem1 + '-' + data.data[1].tem2 + '</td>';
                html += '<td>' + data.data[2].tem1 + '-' + data.data[2].tem2 + '</td>';
                html += '<td>' + data.data[3].tem1 + '-' + data.data[3].tem2 + '</td>';
                html += '</tr>';
                html += '<tr>';
                html += '<td>' + data.data[0].win[0] + data.data[0].win_speed + '</td>';
                html += '<td>' + data.data[1].wea + '</td>';
                html += '<td>' + data.data[2].wea + '</td>';
                html += '<td>' + data.data[3].wea + '</td>';
                html += '</tr>';
                html += '<tr>';
                html += '<td>空气质量：' + data.data[0].air + '<span class="sqzz-wrj-lr2-air">' + data.data[0].air_level + '</span></td>';
                html += '<td>' + data.data[1].win[0] + data.data[1].win_speed + '</td>';
                html += '<td>' + data.data[2].win[0] + data.data[2].win_speed + '</td>';
                html += '<td>' + data.data[3].win[0] + data.data[3].win_speed + '</td>';
                html += '</tr>';


                html += '</tbody>';
                html += '</table>';
                html += '</div>';


                $('#drone_weather').html(html);
            }
            //else {
            //    console.log("天气数据为空");
            //    function setData(result) {
            //        //data = require("mainMenu").WeatherData
            //        var data = result;
            //        console.log(data);
            //        var html = '';
            //        html += '<tr>';
            //        html += '<td rowspan="2">';
            //        html += '<div class=""><img src="Content/images/sqzz-lr-21.png" style="width: 1.1rem"></div>';
            //        html += '</td>';
            //        html += '<td>'+data.data[0].week+'</td>';
            //        html += '<td>'+data.data[1].week+'</td>';
            //        html += '<td>'+data.data[2].week+ '</td>';
            //        html += '</tr>';
            //        html += '<tr>';
            //        html += '<td><div class=""><img src="Content/images/sqzz-lr-22.png" style="width: .8rem"></div></td>';
            //        html += '<td><div class=""><img src="Content/images/sqzz-lr-22.png" style="width: .8rem"></div></td>';
            //        html += '<td><div class=""><img src="Content/images/sqzz-lr-22.png" style="width: .8rem"></div></td>';
            //        html += '</tr>';
            //        html += '<tr>';
            //        html += '<td style="font-size: .4rem;">' + data.data[0].tem1 + '-' + data.data[0].tem2 + '℃</td>';
            //        html += '<td></td>';
            //        html += '<td></td>';
            //        html += '<td></td>';
            //        html += '</tr>';
            //        html += '<tr>';
            //        html += '<td>' + data.data[0].wea + '</td>';
            //        html += '<td>' + data.data[1].tem1 + '-' + data.data[1].tem2 + '℃</td>';
            //        html += '<td>' + data.data[2].tem1 + '-' + data.data[2].tem2 + '℃</td>';
            //        html += '<td>' + data.data[3].tem1 + '-' + data.data[3].tem2 + '℃</td>';
            //        html += '</tr>';
            //        html += '<tr>';
            //        html += '<td>' + data.data[0].win[0] + data.data[0].win_speed + '</td>';
            //        html += '<td>' + data.data[1].wea + '</td>';
            //        html += '<td>' + data.data[2].wea + '</td>';
            //        html += '<td>' + data.data[3].wea + '</td>';
            //        html += '</tr>';
            //        html += '<tr>';
            //        html += '<td>空气质量：94<span class="sqzz-wrj-lr2-air">' + data.data[0].air_level+ '</span></td>';
            //        html += '<td>' + data.data[1].win[0] + data.data[1].win_speed + '</td>';
            //        html += '<td>' + data.data[2].win[0] + data.data[2].win_speed + '</td>';
            //        html += '<td>' + data.data[3].win[0] + data.data[3].win_speed + '</td>';
            //        html += '</tr>';
            //        $('#drone_weather').html(html);
            //    }
            //    require("mainMenu").Weather(setData);

            //}

        },
        yq: function () { },
        /*********************左侧图表-end*********************/
        //关闭事件循环播放
        closeEvent: function () {
            require("sl_Event").closeDetail();//关闭详情窗口
            require("sl_Event").closeLoopAllEvents();//关闭循环播放所有事件
        },
        loadloopevent: function () {
            //if ($("#header_menu div button.active").text() == "城区综治" && $("#bottom_menu ul li.active").text() == "事件") {
            //    //require("sl_Event").LoopAllEvents();//开启全部事件循环播放
            //}
        },
        Revert: function () {
            require("s_Echart").intervalTime = 0;
            //事件成功
            if (window.sjcgTimer != null) {
                clearInterval(window.sjcgTimer)
            }

            if (window.perCarPicTimer != null) {
                clearInterval(window.perCarPicTimer)
                window.perCarPicTimer = null;

            }
            //摄像头
            if (require("s_Echart").myChartsxt1 != null && require("s_Echart").myChartsxt1 != "" && require("s_Echart").myChartsxt1 != undefined) {
                require("s_Echart").myChartsxt1.dispose();
            }
            //摄像头
            if (require("s_Echart").myChartsxt2 != null && require("s_Echart").myChartsxt2 != "" && require("s_Echart").myChartsxt2 != undefined) {
                require("s_Echart").myChartsxt2.dispose();
            }
            //摄像头
            if (require("s_Echart").myChartsxt3 != null && require("s_Echart").myChartsxt3 != "" && require("s_Echart").myChartsxt3 != undefined) {
                require("s_Echart").myChartsxt3.dispose();
            }
            //无人机
            if (require("s_Echart").myChartwrj != null && require("s_Echart").myChartwrj != "" && require("s_Echart").myChartwrj != undefined) {
                require("s_Echart").myChartwrj.dispose();
            }
            //事件
            if (require("s_Echart").myChartsj != null && require("s_Echart").myChartsj != "" && require("s_Echart").myChartsj != undefined) {
                require("s_Echart").myChartsj.dispose();
            }
            //事件成功
            if (require("s_Echart").myChartsjcg != null && require("s_Echart").myChartsjcg != "" && require("s_Echart").myChartsjcg != undefined) {
                require("s_Echart").myChartsjcg.dispose();
            }
        },
    }
})