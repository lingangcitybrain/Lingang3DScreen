define(["config", "common", "s_layerMenuData", "s_EchartAjax", "mainMenu"], function (con, com, s_layerMenuData, s_EchartAjax, mainMenu) {
    return {
        cgqData: null,  
        myChartsxt1:null,   //摄像头
        myChartsxt2: null,   //摄像头
        myChartsxt3: null,   //摄像头
        myChartwrj: null,     //无人机
        myChartsj: null,     //事件
        myChartsjcg: null,     //事件成功
        wrjData: null,    //无人机数据
        cgqData: null,    //传感器数据
        sjcgData: null,    //事件成功数据
        bigNumData: null,  //大数字数据

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

        num: function () {
            require(['countup'], function () {
                $('.counter').countUp({ 
                    delay: 10,
                    time: 1000
                });
            });
        },
        /*********************左侧图表-start*********************/
      

        //sxt1: function () {
        //    if ($("#sxt1-chart").length <= 0) { return false; }
        //    var myChart = echarts.init(document.getElementById('sxt1-chart'));
        //    require("s_Echart").myChartsxt1 = echarts.init(myChart);
        //    var option =
        //        {
        //        calculable: true,
        //    series: [
        //        {
        //            name: "人员",
        //            type: "pie",
        //            radius: ["90%", "95%"],
        //            itemStyle: {
        //                normal: {
        //                    label: {
        //                        show: false,
        //                        position: "left",
        //                        formatter: "{b}{c}",
        //                        textStyle: {
        //                            color: "rgb(66, 162, 206)",
        //                            fontSize: 30,
        //                            fontWeight: "bold"
        //                        }
        //                    },
        //                    labelLine: {
        //                        show: false
        //                    }
        //                },
        //            },
 

        //            data: [
        //                {
        //                    value: 4000,
        //                    name: "正常",
        //                    itemStyle:
        //                    {
        //                        color: 'rgba(0,120,255,1)',//颜色设定
        //                    },
        //                },
        //                {
        //                    value: 6000,
        //                    name: "嫌疑",
        //                    itemStyle:
        //                    {
        //                        color: 'rgba(0,120,255,0.5)',//颜色设定
                        
        //                    },
        //                }
        //            ],
        //            startAngle: 150
        //        }
        //    ]
        //}
        //    require("s_Echart").myChartsxt1.setOption(option);// 为echarts对象加载数据
        //},
        //sxt2: function () {
        //    if ($("#sxt2-chart").length <= 0) { return false; }
        //    var myChart = echarts.init(document.getElementById('sxt2-chart'));
        //    require("s_Echart").myChartsxt2 = echarts.init(myChart);

        //    var option =
        //        {
        //            calculable: true,
        //            series: [
        //                {
        //                    name: "人员",
        //                    type: "pie",
        //                    radius: ["90%", "95%"],
        //                    itemStyle: {
        //                        normal: {
        //                            label: {
        //                                show: false,
        //                                position: "left",
        //                                formatter: "{b}{c}",
        //                                textStyle: {
        //                                    color: "rgb(66, 162, 206)",
        //                                    fontSize: 30,
        //                                    fontWeight: "bold"
        //                                }
        //                            },
        //                            labelLine: {
        //                                show: false
        //                            }
        //                        },
        //                    },


        //                    data: [
        //                        {
        //                            value: 6000,
        //                            name: "正常",
        //                            itemStyle:
        //                            {
        //                                color: 'rgb(6,207,17)',//颜色设定
        //                            },
        //                        },
        //                        {
        //                            value: 4000,
        //                            name: "嫌疑",
        //                            itemStyle:
        //                            {
        //                                color: 'rgba(6,207,17,0.5)',//颜色设定

        //                            },
        //                        }
        //                    ],
        //                    startAngle: 150
        //                }
        //            ]
        //        }
        //    require("s_Echart").myChartsxt2.setOption(option);// 为echarts对象加载数据
        //},
        //sxt3: function () {
        //    if ($("#sxt3-chart").length <= 0) { return false; }           
        //    var myChart = echarts.init(document.getElementById('sxt3-chart'));
        //    require("s_Echart").myChartsxt3 = echarts.init(myChart);

        //    var option =
        //        {
        //            calculable: true,
        //            series: [
        //                {
        //                    name: "人员",
        //                    type: "pie",
        //                    radius: ["90%", "95%"],
        //                    itemStyle: {
        //                        normal: {
        //                            label: {
        //                                show: false,
        //                                position: "left",
        //                                formatter: "{b}{c}",
        //                                textStyle: {
        //                                    color: "rgb(66, 162, 206)",
        //                                    fontSize: 30,
        //                                    fontWeight: "bold"
        //                                }
        //                            },
        //                            labelLine: {
        //                                show: false
        //                            }
        //                        },
        //                    },


        //                    data: [
        //                        {
        //                            value: 9000,
        //                            name: "正常",
        //                            itemStyle:
        //                            {
        //                                color: 'rgb(247,176,1)',//颜色设定
        //                            },
        //                        },
        //                        {
        //                            value: 1000,
        //                            name: "嫌疑",
        //                            itemStyle:
        //                            {
        //                                color: 'rgba(247,176,1,0.5)',//颜色设定

        //                            },
        //                        }
        //                    ],
        //                    startAngle: 150
        //                }
        //            ]
        //        }
        //    require("s_Echart").myChartsxt3.setOption(option);// 为echarts对象加载数据
        //},
        //无人机
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
                        text: data.data[0].wrj_cnt,
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
                                    formatter: '{b|{b}}\n{per|{d}}%',
                                    padding: [0, -70],
                                    color: "#0996d1",
                                    rich: {
                                        b: {
                                            fontSize: 20,
                                            lineHeight: 36,
                                            color: "#fff",

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
                                { value: data.data[0].wrj_flying_cnt, name: '执飞中' },
                                { value: data.data[0].wrj_charging_cnt, name: '充电中' },
                                { value: data.data[0].wrj_idle_cnt, name: '待命中' }
                            ]
                        }
                    ]
                };
                require("s_Echart").myChartwrj.setOption(wrjOption);
            })
        },
        cgq1: function () {
            //(function (obj) {
            //    obj.win = {
            //        /**
            //            * 环形进度条
            //            * @param el：DOM对象
            //            * @param val:数值
            //            * @param bg:背景颜色
            //            * @param color:环颜色
            //            * @param textColor：数字颜色
            //            * @param fontSize：数字字体大小
            //            * @param size:环宽度
            //            * @param r:环内半径
            //            * @param time:动画时间
            //            * @param easing:动画类型:
            //            *  'linear'
            //            *  '<' or 'easeIn' or 'ease-in'
            //            *  '>' or 'easeOut' or 'ease-out'
            //            *  '<>' or 'easeInOut' or 'ease-in-out'
            //            *  'backIn'or 'back-in'
            //            *  'backOut' or 'back-out'
            //            *  'elastic'
            //            *  'bounce'
            //            */
            //        loopFun: function (el, val, bg, color, textColor, fontSize, size, r, time, easing) {
            //            var si = r + size / 2;
            //            var xy = r + size;
            //            if (val < 0 || val > 100) {
            //                return alert('请输入0~100之间的数')
            //            }
            //            var paper = Raphael(el, (r + size) * 2, (r + size) * 2);
            //            paper.circle(xy, xy, r).attr({
            //                'stroke-width': size,
            //                stroke: bg
            //            });
            //            paper.customAttributes.arc = function (val) {
            //                var v = 360 * val / 100,
            //                    s = -180,
            //                    e = s + v,
            //                    x = xy,
            //                    y = xy,
            //                    rad = Math.PI / 180,
            //                    x1 = x + r * Math.sin(-s * rad),
            //                    y1 = y + r * Math.cos(-s * rad),
            //                    x2 = x + r * Math.sin(-e * rad),
            //                    y2 = y + r * Math.cos(-e * rad),
            //                    path = [
            //                        ['M', x1, y1],
            //                        ['A', r, r, 0, +(e - s > 180), 1, x2, y2]
            //                    ];
            //                return {
            //                    path: path
            //                };
            //            };
            //            var an = paper.path().attr({
            //                'stroke-width': size,
            //                stroke: color,
            //                arc: 0.01
            //            });
            //            an.animate({
            //                stroke: color,
            //                arc: val
            //            }, time, easing);
            //            setTimeout(function () {
            //                if (val == 100) {
            //                    paper.circle(xy, xy, r).attr({
            //                        'stroke-width': size,
            //                        stroke: color
            //                    });
            //                }
            //            }, time);
            //            paper.customAttributes.txt = function (val) {
            //                return {
            //                    text: Math.floor(val * 100) / 100 + '%'
            //                }
            //            };
            //            var l = paper.text(xy, xy).attr({
            //                txt: 0,
            //                'fill': textColor,
            //                'font-size': fontSize,
            //                'font-weight': 700
            //            });
            //            l.animate({
            //                txt: val
            //            }, time);
            //        },
            //    };
            //})(window);
            //if ($("body").width() <= 7680) {
            //    win.loopFun($('.sj-circlediv')[0], 35, '#564009', '#f7b001', 'transparent', '20px', 15, 30, 1000);
            //    win.loopFun($('.sj-circlediv')[1], 80, '#564009', '#098bdc', 'transparent', '20px', 15, 30, 1000);
            //} else if ($("body").width() > 7680) {
            //    win.loopFun($('.sj-circlediv')[0], 35, '#564009', '#f7b001', 'transparent', '20px', 20, 45, 1000);
            //    win.loopFun($('.sj-circlediv')[1], 80, '#564009', '#098bdc', 'transparent', '20px', 20, 45, 1000);
            //}
        },
        //传感器数据
        cgq: function () {
            s_EchartAjax.getSocietyCgq(function (result) {
                if (require("s_Echart").cgqData == null) { return false; }
                var data=require("s_Echart").cgqData;
                console.info(data);
                console.info(data.data.sensorNumList);
                data = data.data.sensorNumList;
                //$('#cgq-ywgy').html(data[1].sensorCount)
                //$('#cgq-zndt').html(data[2].sensorCount)
                //$('#cgq-wxmc').html(data[3].sensorCount)
                //$('#cgq-wxkm').html(data[4].sensorCount)
                //$('#cgq-dzwl').html(data[5].sensorCount)
                //$('#cgq-znjg').html(data[6].sensorCount)
                //$('#cgq-tcdc').html(data[7].sensorCount)

                $('#cgq-ywgy').html(data[6].sensorCount)
                $('#cgq-zndt').html(data[5].sensorCount)
                $('#cgq-wxmc').html(data[3].sensorCount)
                $('#cgq-wxkm').html(data[2].sensorCount)
                $('#cgq-dzwl').html(data[8].sensorCount)
                $('#cgq-znjg').html(data[4].sensorCount)
                $('#cgq-tcdc').html(data[1].sensorCount)
            })
        },
        /*********************左侧图表-end*********************/


        /*********************右侧图表-start*********************/
        //右侧事件
        yq: function () {
            //    (function (obj) {
            //        $('.sj-circlediv').empty();
            //        obj.win = {
            //            /**
            //             * 环形进度条
            //             * @param el：DOM对象
            //             * @param val:数值
            //             * @param bg:背景颜色
            //             * @param color:环颜色
            //             * @param textColor：数字颜色
            //             * @param fontSize：数字字体大小
            //             * @param size:环宽度
            //             * @param r:环内半径
            //             * @param time:动画时间
            //             * @param easing:动画类型:
            //             *  'linear'
            //             *  '<' or 'easeIn' or 'ease-in'
            //             *  '>' or 'easeOut' or 'ease-out'
            //             *  '<>' or 'easeInOut' or 'ease-in-out'
            //             *  'backIn'or 'back-in'
            //             *  'backOut' or 'back-out'
            //             *  'elastic'
            //             *  'bounce'
            //             */
            //            loopFun: function (el, val, bg, color, textColor, fontSize, size, r, time, easing) {
            //                var si = r + size / 2;
            //                var xy = r + size;
            //                if (val < 0 || val > 100) {
            //                    return alert('请输入0~100之间的数')
            //                }
            //                var paper = Raphael(el, (r + size) * 2, (r + size) * 2);
            //                paper.circle(xy, xy, r).attr({
            //                    'stroke-width': size,
            //                    stroke: bg
            //                });
            //                paper.customAttributes.arc = function (val) {
            //                    var v = 360 * val / 100,
            //                        s = -180,
            //                        e = s + v,
            //                        x = xy,
            //                        y = xy,
            //                        rad = Math.PI / 180,
            //                        x1 = x + r * Math.sin(-s * rad),
            //                        y1 = y + r * Math.cos(-s * rad),
            //                        x2 = x + r * Math.sin(-e * rad),
            //                        y2 = y + r * Math.cos(-e * rad),
            //                        path = [
            //                            ['M', x1, y1],
            //                            ['A', r, r, 0, +(e - s > 180), 1, x2, y2]
            //                        ];
            //                    return {
            //                        path: path
            //                    };
            //                };
            //                var an = paper.path().attr({
            //                    'stroke-width': size,
            //                    stroke: color,
            //                    arc: 0.01
            //                });
            //                an.animate({
            //                    stroke: color,
            //                    arc: val
            //                }, time, easing);
            //                setTimeout(function () {
            //                    if (val == 100) {
            //                        paper.circle(xy, xy, r).attr({
            //                            'stroke-width': size,
            //                            stroke: color
            //                        });
            //                    }
            //                }, time);
            //                paper.customAttributes.txt = function (val) {
            //                    return {
            //                        text: Math.floor(val * 100) / 100 + '%'
            //                    }
            //                };
            //                var l = paper.text(xy, xy).attr({
            //                    txt: 0,
            //                    'fill': textColor,
            //                    'font-size': fontSize,
            //                    'font-weight': 700
            //                });
            //                l.animate({
            //                    txt: val
            //                }, time);
            //            },
            //        };
            //    })
        
        },
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
        //事件处理成功
        sjcg: function () {
            s_EchartAjax.getSocietySjcg(function (result) {
                if (require("s_Echart").sjcgData == null) { return false; }
                if ($("#sjcg-chart").length <= 0) { return false; }
                var data = require("s_Echart").sjcgData;

                var myChart = echarts.init(document.getElementById('sjcg-chart'));
                require("s_Echart").myChartsjcg = echarts.init(document.getElementById('sjcg-chart'));
                option = {

                    tooltip: {
                        trigger: 'axis',
                    },
                    legend: {
                        top: '1%',
                        left: 'center',
                        itemWidth: 10,
                        itemHeight: 10,
                        itemGap: 25,
                        selectedMode: 'single',
                        textStyle: {
                            color: '#e4e4e4',
                            fontSize: 16,
                        },
                        data: [

                        ]
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
                        data: ['4', '5', '6', '7', '8', '9',
                                 '10', '11', '12', '1', '2', '3'],
                    }],
                    yAxis: [{
                        type: 'value',
                        min: 0,
                        max: 5000,
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
                        name: '月',
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
                        data: data.data
                    },
                    ]
                };


                require("s_Echart").myChartsjcg.setOption(option);// 为echarts对象加载数据
            })
           
        },
        //中间大数字
        bigNumber: function () {
            s_EchartAjax.getSocietyBigNum(function (result) {

                if (require("s_Echart").bigNumData == null) { return false; }

                var data = require("s_Echart").bigNumData;
                
                $('#dsz-ajljs').html(data.totalCount)
                $('#dsz-dyajs').html(data.monthCount)
                $('#dsz-znpds').html(data.dispatchRate+"%")
                $('#dsz-zdfxl').html(data.autoRate+"%")
                $('#dsz-bhl').html(data.loopRate+"%")
               
            })
        },
        //无人机事件天气预报
        DroneWeather: function () {
            if (WeatherSevenData != null) {
                //console.log("天气数据不为空");
                var data = WeatherSevenData
                var weaimg_0 = "https://cdn.huyahaha.com/tianqiapi/skin/qq/" + data.data[0].wea_img + ".png"
                var weaimg_1 = "https://cdn.huyahaha.com/tianqiapi/skin/qq/" + data.data[1].wea_img + ".png"
                var weaimg_2 = "https://cdn.huyahaha.com/tianqiapi/skin/qq/" + data.data[2].wea_img + ".png"
                var weaimg_3 = "https://cdn.huyahaha.com/tianqiapi/skin/qq/" + data.data[3].wea_img + ".png"
                //console.log(data);
                var html = '';
                
                
                html += '<div class="sqzz-wrj-lr2-temp">' + data.data[0].week + '（今天，实时：'+ data.data[0].tem +'）</div>';
                html += '<div class="tablebox">';
                html += '<table cellspacing="0" cellpadding="0" class="table sqzz-wrj-lr2-table">';
                html += '<tbody>';
                
                html += '<tr>';
                html += '<td rowspan="2">';
                html += '<div class=""><img src=' + weaimg_0 + ' style="width: 1.1rem"></div>';
                html += '</td>';
                html += '<td>' + data.data[1].week + '</td>';
                html += '<td>' + data.data[2].week + '</td>';
                html += '<td>' + data.data[3].week + '</td>';
                html += '</tr>';
                html += '<tr>';
                html += '<td><div class=""><img src=' + weaimg_1 + ' style="width: .8rem"></div></td>';
                html += '<td><div class=""><img src=' + weaimg_2 + ' style="width: .8rem"></div></td>';
                html += '<td><div class=""><img src=' + weaimg_3 + ' style="width: .8rem"></div></td>';
                
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
                html += '<td>空气质量：'+ data.data[0].air+'<span class="sqzz-wrj-lr2-air">' + data.data[0].air_level + '</span></td>';
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

        /*********************左侧图表-end*********************/
        Revert: function () {
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