define(["config", "common", "g_EchartAjax", "pagination", "nicescroll"], function (con, com, g_EchartAjax, pagination, nicescroll) {
    var gauge_value = 0;
    /****************************园区****************************/
    return {
        mybigChart: null,
        myChartleida: null,//招商雷达
        zsldInterval: null,//雷达计时器
        zsldData: null,     //招商雷达数据
        zsFunnelData: null, //招商漏斗数据
        tcfwData: null,     //停车服务数据
        wrjsData: null,     //无人驾驶接驳车数据
        bigNumData: null,   //中间大数字数据
        zhwyData: null,    //智慧物业数据
        zhnhData: null,    //智慧能耗数据
        sjtjData: null,    //事件统计数据
        //加载图表
        loadEcharts:function()
        {

        },
        //显示大的图表
        loadBigChart: function (divname) {
            var url = con.HtmlUrl + 'Industry/Garden/Center_02.html';
            require(['text!' + url], function (template) {
                $("#center_02").html(template);
                $("#center_02").show('drop', 1000);//左侧
                switch (divname) {
                    case "Left_Second_02"://停车服务
                        require("g_Echart").bigtcfw();
                        break;
                    case "Left_Second_03"://无人驾驶接驳车
                        require("g_Echart").bigwrjsjbc();
                        break;
                    case "Right_First_01"://智慧物业
                        require("g_Echart").bigzhwy();
                        break;
                    case "Right_First_02"://智慧能耗
                        require("g_Echart").bigzhnh();
                        break;
                    default:
                }
            })
        },
        //关闭大的图表
        closeBigChart: function () {
            if (require("g_Echart").mybigChart != null && require("g_Echart").mybigChart != "" && require("g_Echart").mybigChart != undefined) {
                require("g_Echart").mybigChart.dispose();
            }
            $("#center_02").html("");
        },
        //招商雷达
        zsld: function () {
            g_EchartAjax.getzsldDataFun(function (result) {
                if (require("g_Echart").zsldData == null) { return false; }
                var data = require("g_Echart").zsldData;
                
                if ($("#zsld-chart").length <= 0) { return false; }
                require("g_Echart").myChartleida = echarts.init(document.getElementById('zsld-chart'));

                // data json 转换成数组
                var dataToArr = [], dataToArrIndex = -1;
                for (key in data) {
                    dataToArrIndex++;
                    dataToArr[dataToArrIndex] = data[key];
                }

                //各产业的百分比-----总和为 1
                var dataArr = [];
                for (var i = 0; i < dataToArr.length; i++) {
                    dataArr.push(dataToArr[i]["招商雷达"] / 100);
                }

                // 前index之和组成的数组   
                var dataArrSum = 0;
                var dataArrIndexSum = [];
                for (var i = 0; i < dataArr.length; i++) {
                    dataArrSum += dataArr[i];
                    dataArrIndexSum.push(dataArrSum);
                }

                //产业数据number ---计算出长度百分比
                var industryNumber = [];
                for (var i = 0; i < dataArr.length; i++) {
                    industryNumber.push(  JSON.parse(dataToArr[i]["产业数据"]).number);
                }
                var industryNumberMax = Math.max.apply(null, industryNumber); //最大数
                var industryNumberPercent = []; //百分数
                for (var i = 0; i < dataArr.length; i++) {
                    industryNumberPercent.push(Number((industryNumber[i] / industryNumberMax * 100).toFixed(2)));
                }

                //产业颜色
                var dataArrColor = ["#b356d8", "#184370", "#547ae5", "#1588e5", "#de7869", "#e57f01", "#e4e100", "#07d8ae", "#70d367"]
                var industryColor = [];
                for (var i = 0; i < dataArr.length; i++) {
                    industryColor.push([dataArrIndexSum[i], dataArrColor[i]])
                }

                var paramLevel = -1;
                gauge_value = 0;
                require("g_Echart").zsldInterval = setInterval(function () {
                    gauge_value++;  //递增
                    if (gauge_value >= 100) { //重置
                        gauge_value = 0;
                    }

                    option = {
                        //backgroundColor: 'black',
                        title: {
                            show: false, //关闭显示
                            x: "center",
                            bottom: 200,
                            //text:'AAA',
                            subtext: '信用等级'
                        },
                        tooltip: {
                            show: false,//关闭显示
                            //  formatter: "{a} <br/>{b} {c}",
                            backgroundColor: '#F7F9FB',
                            borderColor: '#92DAFF',
                            borderWidth: '1px',
                            textStyle: {
                                color: 'black'
                            },
                            formatter: function (param) {
                                return '<em style="color:' + param.color + ';">' + param.value + '</em> 分'
                            }

                        },
                        series: [{
                            name: '信用分',
                            type: 'gauge',
                            startAngle: 90,       //开始角度
                            endAngle: -269.9999,  //结束角度
                            animation: 0,          //动画关闭防止从100到0时出现倒回来的动画
                            min: 0,               //图表最小值
                            max: 100,             //最大值

                            axisLine: {
                                show: true,
                                lineStyle: {
                                    width: 15,
                                    shadowBlur: 10,         //发光
                                    shadowColor: "#8e26dc",
                                    color: industryColor
                                }
                            },
                            axisTick: {
                                show: false,
                                splitNumber: 1
                            },
                            splitLine: {
                                show: false,
                                length: 0,
                                lineStyle: {
                                    //color:'black'
                                },
                            },
                            axisLabel: {
                                show: false,
                                textStyle: {
                                    fontSize: 12,
                                    fontWeight: ""
                                }
                            },
                            pointer: {       //指针
                                show: true,
                                length: '120%',//指针长度
                                width: 1,
                            },
                            itemStyle: { //仪表盘指针样式

                                normal: {
                                    shadowColor: '#55e1eb',
                                    shadowBlur: 10,
                                    borderWidth: 3,//设置外层边框
                                    borderColor: '#55e1eb',
                                },
                                emphasis: {
                                    areaColor: '#55e1eb'
                                }
                            },
                            detail: {
                                formatter: function (param) {
                                    var level = '';
                                    var index = 0;

                                    function loadZsldFormatterFun(index) {
                                        paramLevel = index;
                                        level = (dataArr[index] * 100).toFixed(0) + '%';
                                        var str = '<div class="zsld-result">产业聚集地</div>'
                                                  + '<ul class="zsld-ul"></ul>'
                                                  + '<div class="zsld-company flex">'
                                                      + '<dl class="zsld-dl" id="zsld-cymx">'
                                                        + '<dt class="">产业明星企业</dt>'
                                                      + '</dl>'
                                                      + '<dl class="zsld-dl"  id="zsld-zytzjg">'
                                                        + '<dt class="">产业主要投资机构</dt>'
                                                      + '</dl>'
                                                  + '</div>';

                                        $("#zsld").html(str);

                                        $("#zsld>.zsld-result").html(JSON.parse(dataToArr[index]["产业数据"]).industry);
                                        $("#zsld>.zsld-ul").append(
                                            '<li class="zsld-li clearfix"><span>上海市</span><div class="zsld-bar"><div data-text="' +
                                                 industryNumber[index]+ '"></div></div></li>'
                                        );
                                        //zsld-bar 宽度
                                        $(".zsld-bar>div").css({ width: industryNumberPercent[index] + '%' });

                                        //产业明星企业
                                        var starCompany = dataToArr[index]["明星企业"].split(",");
                                        for (var j = 0; j < starCompany.length; j++) {
                                            $("#zsld-cymx").append("<dd>" + starCompany[j] + "</dd>");
                                        }

                                        //产业主要投资机构
                                        var mainBody = dataToArr[index]["主要投资机构"].split(",");
                                        if (mainBody.length && mainBody[0] != ' ') {
                                            for (var j = 0; j < mainBody.length; j++) {
                                                $("#zsld-zytzjg").append("<dd>" + mainBody[j] + "</dd>");
                                            }
                                        } else {
                                            $("#zsld-zytzjg").remove()
                                        }

                                        //zsld-legend
                                        for (var n = 0; n < $("#zsld-legend>li").length; n++) {
                                            if (JSON.parse(dataToArr[index]["产业数据"]).industry === $("#zsld-legend>li").eq(n).html()) { 
                                                $("#zsld-legend>li").eq(n).addClass("active").siblings().removeClass("active")
                                            }
                                        }
                                    }

                                    if (param > dataArrIndexSum[0] * 100) {
                                        do {
                                            index++;
                                        } while (param > dataArrIndexSum[index] * 100)

                                        if (paramLevel === index) {
                                            return level = (dataArr[index] * 100).toFixed(0) + '%';
                                        } else {
                                            loadZsldFormatterFun(index);
                                        }

                                    } else if (param <= dataArrIndexSum[0] * 100) {
                                        if (paramLevel === index) {
                                            return level = (dataArr[index] * 100).toFixed(0) + '%';
                                        } else {
                                            loadZsldFormatterFun(0);
                                        }
                                    } else {
                                        level = '暂无';
                                    }
                                    return level;
                                },
                                offsetCenter: [0, 0],
                                textStyle: {
                                    fontSize: 40,
                                    color: '#fff'
                                }
                            },
                            data: [{
                                name: "",
                                value: Math.floor(gauge_value)
                            }]
                        }]
                    };

                    require("g_Echart").myChartleida.setOption(option);

                }, 800);
            })
        
        },
        
        //招商漏斗
        zsFunnel: function (){
            g_EchartAjax.getZsFunnel(function (result) {
                if (require("g_Echart").zsFunnelData == null) { return false; }
                var data = require("g_Echart").zsFunnelData;
                data = data[0];
                $("#zsfunnel").append('<div>接洽数<span class=\"testAerial\">' + data.totalMerchantsProjects + '</span></div><div>成功数<span class=\"testAerial\">' +
                             data.successedMerchantsProjects + '</span></div>');
            });
        },

        //停车服务
        tcfw: function ()
        {
            if ($("#tcfw-chart").length <= 0) { return false; }
            var tcfwChart = document.getElementById('tcfw-chart');
            var tcfwdata = [];
            for (var i = 1; i < 100; i++) {
                tcfwdata.push(Math.round((Math.random() * 5000 + 3000)));
            }
            var myCharttcfw = echarts.init(tcfwChart);
            tcfwOption = {
                title: {
                    text: "(辆)",
                    left: "0",
                    top: 8,
                    textStyle: {
                        fontSize: 24,
                        color: "#00d7fe",
                        fontWeight: "normal",
                    },
                },
                legend: {
                    show: false
                },
                color: ['#3398DB'],
                grid: {
                    left: '0',
                    right: '2%',
                    bottom: '2%',
                    height: "82%",
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            show: false,
                        }

                    },
                },
                xAxis: {
                    type: 'category',
                    data: ['02/26', '02/27', '02/28', '03/01', '03/02', '03/03', '03/04'],
                    boundaryGap: ["5%", "5%"],
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(80,172,254,0.2)"
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 22,
                            color: "#00d7fe"
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(80,172,254,0.2)"
                        }
                    }

                },
                yAxis: {
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(80,172,254,0.2)"
                        }
                    },
                    interval: 1000,
                    max: 9000,
                    min: 2000,
                    axisLabel: {
                        textStyle: {
                            fontSize: 22,
                            color: "#00d7fe"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "rgba(80,172,254,0.2)",
                            //color:"#50acfe"
                        }
                    }
                },
                series: [
                  {
                      type: 'line',
                      // smooth:true,
                      color: "rgba(7,196,230,1)",
                      areaStyle: {
                          opacity: .1,
                      },
                      lineStyle: {
                          width: 2,
                      },
                      symbolSize: 10,
                      data: tcfwdata,
                  }
                ]
            };
            myCharttcfw.setOption(tcfwOption);



        
        },
        //大停车服务
        bigtcfw: function () {
            $("#GbigechartHead").html('停车服务(辆)');
            if ($("#tcfw-chart").length <= 0) { return false; }
            var tcfwdata = [];
            for (var i = 1; i < 100; i++) {
                tcfwdata.push(Math.round((Math.random() * 5000 + 3000)));
            }
            tcfwOption = {
                title: {
                    show:false,
                    //text: "(辆)",
                    //left: "0",
                    //top: 8,
                    //textStyle: {
                    //    fontSize: 24,
                    //    color: "#00d7fe",
                    //    fontWeight: "normal",
                    //},
                },
                legend: {
                    show: false
                },
                color: ['#3398DB'],
                grid: {
                    left: '5%',
                    right: '5%',
                    bottom: '5%',
                    height: "86%",
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            show: false,
                        }
                    },
                    textStyle: {
                        fontSize: 50,
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['02/26', '02/27', '02/28', '03/01', '03/02', '03/03', '03/04'],
                    boundaryGap: ["5%", "5%"],
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width:4,
                            color: "rgba(80,172,254,0.2)"
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 50,
                            color: "#00d7fe"
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                        width:4,
                            color: "rgba(80,172,254,0.2)"
                        }
                    }

                },
                yAxis: {
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width:4,
                            color: "rgba(80,172,254,0.2)"
                        }
                    },
                    interval: 1000,
                    max: 9000,
                    min: 2000,
                    axisLabel: {
                        textStyle: {
                            fontSize: 50,
                            color: "#00d7fe"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            width:4,
                            color: "rgba(80,172,254,0.2)",
                        }
                    }
                },
                series: [
                  {
                      type: 'line',
                      // smooth:true,
                      color: "rgba(7,196,230,1)",
                      areaStyle: {
                          opacity: .1,
                      },
                      lineStyle: {
                          width: 10,
                      },
                      symbolSize: 20,
                      data: tcfwdata,
                  }
                ]
            };
            if (require("g_Echart").mybigChart != null && require("g_Echart").mybigChart != "" && require("g_Echart").mybigChart != undefined) {
                require("g_Echart").mybigChart.dispose();
            }
            require("g_Echart").mybigChart = echarts.init(document.getElementById('Gbig-chart'));
            require("g_Echart").mybigChart.setOption(tcfwOption);


        },
        //无人驾驶接驳车
        wrjsjbc:function()
        {
            if ($("#wrjsjbc-chart").length <= 0) { return false; }
            var wrjsjbcChart = document.getElementById('wrjsjbc-chart');
            //var wrjsjbcdata = [50,55,60,20,35,65,70];
            //for (var i = 1; i < 100; i++) {
            //    wrjsjbcdata.push(Math.round((Math.random() * 50 + 25)));
            //}
            var myChartwrjsjbc = echarts.init(wrjsjbcChart);
            wrjsjbcOption = {
                title: {
                    text: "(%)",
                    left: "0",
                    top: 8,
                    textStyle: {
                        fontSize: 24,
                        color: "#00d7fe",
                        fontWeight: "normal",
                    },
                },
                legend: {
                    show: false
                },
                color: ['#3398DB'],
                grid: {
                    left: '1%',
                    right: '2%',
                    bottom: '2%',
                    height: "82%",
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            show: false,
                        }

                    },
                },
                xAxis: {
                    type: 'category',
                    data: ['02/26', '02/27', '02/28', '03/01', '03/02', '03/03', '03/04'],
                    boundaryGap: ["5%", "5%"],
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(80,172,254,0.2)"
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 22,
                            color: "#00d7fe"
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(80,172,254,0.2)"
                        }
                    }
                },
                yAxis: {
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(80,172,254,0.2)"
                        }
                    },
                    interval: 10,
                    max: 100,
                    axisLabel: {
                        textStyle: {
                            fontSize: 22,
                            color: "#00d7fe"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "rgba(80,172,254,0.2)",
                            //color:"#50acfe"
                        }
                    }
                },
                series: [
                  {
                      type: 'line',
                      // smooth:true,
                      color: "rgba(7,196,230,1)",
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(74,128,244,.1)",
                            }, {
                                offset: 1,
                                color: "rgba(74,128,244,.3)",
                            }])
                        },
                      lineStyle: {
                          width: 2,
                      },
                      symbolSize: 10,
                      data: [50, 55, 60, 20, 35, 65, 70],
                  }
                ]
            };
            myChartwrjsjbc.setOption(wrjsjbcOption);
        },
        //大无人驾驶接驳车
        bigwrjsjbc: function () {
            $("#GbigechartHead").html('无人驾驶接驳车(%)');
            if ($("#wrjsjbc-chart").length <= 0) { return false; }
            wrjsjbcOption = {
                title: {
                    show:false,
                    //text: "(%)",
                    //left: "0",
                    //top: 8,
                    //textStyle: {
                    //    fontSize: 24,
                    //    color: "#00d7fe",
                    //    fontWeight: "normal",
                    //},
                },
                legend: {
                    show: false
                },
                color: ['#3398DB'],

                grid: {
                    left: '5%',
                    right: '5%',
                    bottom: '5%',
                    height: "86%",
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            show: false,
                        }
                    },
                    textStyle: {
                        fontSize:50,
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['02/26', '02/27', '02/28', '03/01', '03/02', '03/03', '03/04'],
                    boundaryGap: ["5%", "5%"],
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width:4,
                            color: "rgba(80,172,254,0.2)"
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 50,
                            color: "#00d7fe"
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width:4,
                            color: "rgba(80,172,254,0.2)"
                        }
                    }
                },
                yAxis: {
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width:4,
                            color: "rgba(80,172,254,0.2)"
                        }
                    },
                    interval: 10,
                    max: 100,
                    axisLabel: {
                        textStyle: {
                            fontSize: 50,
                            color: "#00d7fe"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            width:4,
                            color: "rgba(80,172,254,0.2)",
                        }
                    }
                },
                series: [
                  {
                      type: 'line',
                      // smooth:true,
                      color: "rgba(7,196,230,1)",
                      areaStyle: {
                          opacity: .1,
                      },
                      lineStyle: {
                          width: 10,
                      },
                      symbolSize: 20,
                      data: [50, 55, 60, 20, 35, 65, 70],
                  }
                ]
            };
            if (require("g_Echart").mybigChart != null && require("g_Echart").mybigChart != "" && require("g_Echart").mybigChart != undefined) {
                require("g_Echart").mybigChart.dispose();
            }
            require("g_Echart").mybigChart = echarts.init(document.getElementById('Gbig-chart'));
            require("g_Echart").mybigChart.setOption(wrjsjbcOption);
        },

        //智慧物业
        zhwyRepair: function () {
            g_EchartAjax.getZhwyRepair(function (result) {
                if (require("g_Echart").zhwyRepairData == null) { return false; }
                var data = require("g_Echart").zhwyRepairData;
                $("#zhwy-repair").append(
                    '<li class=""><span>总数：</span><em class="testAerial">' + Number(data.todayrepaircount) + Number(data.todaywaitrepaircount) + '</em></li>'
                   + '<li class=""><span>已处理：</span><em class="testAerial">' + data.todayrepaircount + '</em></li>'
                   + '<li class=""><span>待处理：</span><em class="testAerial">' + data.todaywaitrepaircount + '</em></li>'
                )
            });

            g_EchartAjax.getZhwInspect(function (result) {
                if (require("g_Echart").zhwyInspectData == null) { return false; }
                var data = require("g_Echart").zhwyInspectData;
                $("#zhwy-inspect").append(
                    '<li class=""><span>总数：</span><em class="testAerial">' + Number(data.todaychecked) + Number(data.todayuncheck) + '</em></li>'
                   + '<li class=""><span>已处理：</span><em class="testAerial">' + data.todaychecked + '</em></li>'
                   + '<li class=""><span>待处理：</span><em class="testAerial">' + data.todayuncheck + '</em></li>'
                );
                $("#zhwy-weekaveragerate").append('<span class="testAerial">' + data.weekaveragerate + '%</span>')
            });


            //图表
            if ($("#zhwy-chart").length <= 0) { return false; }
            var zhwyChart = document.getElementById('zhwy-chart');
            var zhwydata = [];
            for (var i = 1; i < 100; i++) {
                zhwydata.push(Math.round((Math.random() * 70)));
            }
            var myChartzhwy = echarts.init(zhwyChart);
            zhwyOption = {
                title: {
                    text: "近一周报修量分布",
                    left: "center",
                    top: 8,
                    textStyle: {
                        fontSize: 24,
                        color: "#00d7fe",
                        fontWeight: "normal",
                    },
                },
                legend: {
                    show: false
                },
                color: ['#3398DB'],
                grid: {
                    left: '0',
                    right: '2%',
                    bottom: '2%',
                    height: "85%",
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            show: false,
                        }

                    },
                },
                xAxis: {
                    type: 'category',
                    data: ['02/26', '02/27', '02/28', '03/01', '03/02', '03/03', '03/04'],
                    boundaryGap: ["5%", "5%"],
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(80,172,254,0.2)"
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 22,
                            color: "#00d7fe"
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(80,172,254,0.2)"
                        }
                    }

                },
                yAxis: {
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "rgba(80,172,254,0.2)"
                        }
                    },
                    interval: 10,
                    max: 70,
                    axisLabel: {
                        textStyle: {
                            fontSize: 22,
                            color: "#00d7fe"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "rgba(80,172,254,0.2)",
                            //color:"#50acfe"
                        }
                    }
                },
                series: [
                  {
                      type: 'line',
                      smooth: true,
                      color: "rgba(7,196,230,1)",
                      areaStyle: {
                          opacity: .1,
                      },
                      lineStyle: {
                          width: 2,
                      },
                      symbolSize: 4,
                      data: zhwydata,
                  }
                ]
            };
            myChartzhwy.setOption(zhwyOption);
        },
        //大智慧物业
        bigzhwy: function () {
            $("#GbigechartHead").html('智慧物业(近一周报修量分布)');
            if ($("#zhwy-chart").length <= 0) { return false; }
            var zhwydata = [];
            for (var i = 1; i < 100; i++) {
                zhwydata.push(Math.round((Math.random() * 70)));
            }
            zhwyOption = {
                title: {
                    show:false,
                    //text: "近一周报修量分布",
                    //left: "center",
                    //top: 8,
                    //textStyle: {
                    //    fontSize: 24,
                    //    color: "#00d7fe",
                    //    fontWeight: "normal",
                    //},
                },
                legend: {
                    show: false
                },
                color: ['#3398DB'],
                grid: {
                    left: '5%',
                    right: '5%',
                    bottom: '5%',
                    height: "86%",
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            show: false,
                        }
                    },
                    textStyle: {
                        fontSize:50,
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['02/26', '02/27', '02/28', '03/01', '03/02', '03/03', '03/04'],
                    boundaryGap: ["5%", "5%"],
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width:4,
                            color: "rgba(80,172,254,0.2)"
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 50,
                            color: "#00d7fe"
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width:4,
                            color: "rgba(80,172,254,0.2)"
                        }
                    }

                },
                yAxis: {
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width:4,
                            color: "rgba(80,172,254,0.2)"
                        }
                    },
                    interval: 10,
                    max: 70,
                    axisLabel: {
                        textStyle: {
                            fontSize: 50,
                            color: "#00d7fe"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            width:4,
                            color: "rgba(80,172,254,0.2)",
                        }
                    }
                },
                series: [
                  {
                      type: 'line',
                      smooth: true,
                      color: "rgba(7,196,230,1)",
                      areaStyle: {
                          opacity: .1,
                      },
                      lineStyle: {
                          width: 10,
                      },
                      symbolSize: 20,
                      data: zhwydata,
                  }
                ]
            };
            if (require("g_Echart").mybigChart != null && require("g_Echart").mybigChart != "" && require("g_Echart").mybigChart != undefined) {
                require("g_Echart").mybigChart.dispose();
            }
            require("g_Echart").mybigChart = echarts.init(document.getElementById('Gbig-chart'));
            require("g_Echart").mybigChart.setOption(zhwyOption);
        },
        //智慧能耗
        zhnh: function () {

            g_EchartAjax.getZhnh(function (result) {
                if (require("g_Echart").zhnhData == null) { return false; }
                var data = require("g_Echart").zhnhData;

                //单位面积能耗排行
                var unitEnergyRank = JSON.parse(data.unitenergyrank);
                for (var i = 0; i < unitEnergyRank.length; i++) {
                    $("#zhnh-unit").append('<li>'+ unitEnergyRank[i].buildingname + '栋<span>' + unitEnergyRank[i].energy + '</span></li>');
                }
                // 同比和环比
                // $("#zhnh-common").append('<span class="testAerial colorgreen">'+ +'<em></em></span>')

                //zhnh-dailyenergy
                $("#zhnh-dailyenergy>span").html(data.dailyenergy);
                $("#zhnh-monthenergy>span").html(data.monthenergy);
                $("#zhnh-yearenergy>span").html(data.yearenergy);

            });



            if ($("#zhnh-chart").length <= 0) { return false; }
            var zhnhChart = document.getElementById('zhnh-chart');
            var zhnhdata = [];
            for (var i = 0; i < 7; i++) {
                zhnhdata.push(Math.round((Math.random() * 60 + 10)));
            }
            var myChartzhnh = echarts.init(zhnhChart);
            zhnhOption = {
                title: {
                    text: "园区日用电量峰值（近一周）",
                    left: 2,
                    top: 8,
                    textStyle: {
                        fontWeight: "normal",
                        fontSize: 24,
                        color: "#fff",
                    },
                },
                legend: {
                    show: false
                },
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow',       //阴影指示器  默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '1%',   // grid 组件离容器左侧的距离。
                    right: '2%',
                    bottom: '2%',
                    height: "80%",
                    containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
                },
                xAxis: {
                    type: 'category',
                    data: ['19/02/10', '19/02/11', '19/02/12', '19/02/13', '19/02/14', '19/02/15', '19/02/16'],
                    boundaryGap: ['20%', '20%'],
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        lineStyle: {
                            color: "rgba(80,172,254,.2)"
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 20,
                            color: "#00d7fe"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "rgba(80,172,254,.2)"
                        }
                    }
                },
                yAxis: {
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        lineStyle: {
                            color: "rgba(80,172,254,.2)",
                        }
                    },
                    interval: 10,
                    max: 70,
                    axisLabel: {
                        textStyle: {
                            fontSize: 25,
                            color: "#00d7fe",
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "rgba(80,172,254,.2)"
                        }
                    }
                },
                series: [
                  {
                      type: 'bar',
                      barWidth: 50,
                      itemStyle: {
                          normal: {
                              barBorderRadius: 10,
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: '#04cafc'
                              }, {
                                  offset: 1,
                                  color: '#0e4abc'
                              }]),
                          }
                      },

                      data: zhnhdata,
                  }
                ]
            };
            myChartzhnh.setOption(zhnhOption);
        },
        //大智慧能耗
        bigzhnh: function () {
            $("#GbigechartHead").html('园区日用电量峰值（近一周）');
            if ($("#zhnh-chart").length <= 0) { return false; }
            var zhnhdata = [];
            for (var i = 0; i < 7; i++) {
                zhnhdata.push(Math.round((Math.random() * 60 + 10)));
            }
            zhnhOption = {
                title: {
                    show:false,
                    //text: "",
                    //left: 2,
                    //top: 8,
                    //textStyle: {
                    //    fontWeight: "normal",
                    //    fontSize: 24,
                    //    color: "#fff",
                    //},
                },
                legend: {
                    show: false
                },
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow',       //阴影指示器  默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        fontSize:50,
                    }
                },
                grid: {
                    left: '5%',   // grid 组件离容器左侧的距离。
                    right: '5%',
                    bottom: '5%',
                    height: "86%",
                    containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
                },
                xAxis: {
                    type: 'category',
                    data: ['19/02/10', '19/02/11', '19/02/12', '19/02/13', '19/02/14', '19/02/15', '19/02/16'],
                    boundaryGap: ['20%', '20%'],
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        lineStyle: {
                            width:4,
                            color: "rgba(80,172,254,.2)"
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 50,
                            color: "#00d7fe"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            width:4,
                            color: "rgba(80,172,254,.2)"
                        }
                    }
                },
                yAxis: {
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        lineStyle: {
                            width:4,
                            color: "rgba(80,172,254,.2)",
                        }
                    },
                    interval: 10,
                    max: 70,
                    axisLabel: {
                        textStyle: {
                            fontSize: 50,
                            color: "#00d7fe",
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            width:4,
                            color: "rgba(80,172,254,.2)"
                        }
                    }
                },
                series: [
                  {
                      type: 'bar',
                      barWidth: 140,
                      itemStyle: {
                          normal: {
                              barBorderRadius: 20,
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: '#04cafc'
                              }, {
                                  offset: 1,
                                  color: '#0e4abc'
                              }]),
                          }
                      },

                      data: zhnhdata,
                  }
                ]
            };
            if (require("g_Echart").mybigChart != null && require("g_Echart").mybigChart != "" && require("g_Echart").mybigChart != undefined) {
                require("g_Echart").mybigChart.dispose();
            }
            require("g_Echart").mybigChart = echarts.init(document.getElementById('Gbig-chart'));
            require("g_Echart").mybigChart.setOption(zhnhOption);
        },
        //事件统计
        sjtj: function (pageindex) {
            var items_per_page = 15;       //每页显示的条数
            var edge_entries = 2;          //后面显示的页码数
            var display_entries = 3;
            g_EchartAjax.getSjtj(function (data) {
                if (require("g_Echart").sjtjData == null) { return false; }
                var data = require("g_Echart").sjtjData;

                $('#ul-parkingEnvent').empty();

                var maxLength = pageindex * items_per_page + items_per_page;
                var minLength = pageindex * items_per_page;
                //var cnt_processed = 0, cnt_Untreated = 0,cnt_inprocess=0;
                if (data.length > 0) {
                    for (var i = minLength; i < data.length; i++) {
                        if (maxLength < i + 1) {
                            break;
                        } else {
                            $('#ul-parkingEnvent').append(
                                 '<li class="cy-ly-rr1-li">'
                                   + '<div class="cy-ly-rr1-lidiv clearfix active">'
                                       + '<span class="cy-ly-rr1-num">' + (i+1) + '</span>'
                                       + '<span class="cy-ly-rr1-name">' + data[i].eventName + '</span>'
                                   + '</div>'
                                   + '<div class="cy-ly-rr1-state">' + data[i].status + '</div>'
                                   + '<span class="cy-ly-rr1-date">' + myTime(data[i].eventTime) + '</span>'
                               + '</li>'
                            );
                        }
                    }

                    $('.scrolldiv').perfectScrollbar({ cursorwidth: 10, cursorcolor: "rgba(0, 126, 179, .6)", });
                    //加载分页控件内容 
                    if (pageindex == 0) {
                        var optInit = com.GetOptionsFrom(require("g_Echart").sjtj, items_per_page, items_per_page, display_entries, edge_entries);     // Create pagination element with options from form
                        $("#pagination-parkingEnvent").pagination(data.length, optInit);
                    }
                }          
            })


            function myTime(date) {
                var arr = date.split("T");
                var d = arr[0];
                var darr = d.split('-');

                var t = arr[1];
                var tarr = t.split('.000');
                var marr = tarr[0].split(':');

                var dd = parseInt(darr[0]) + "/" + parseInt(darr[1]) + "/" + parseInt(darr[2]) + " " + addZero(parseInt(marr[0])) + ":" + addZero(parseInt(marr[1])) + ":" + addZero(parseInt(marr[2]));
                return dd;
            }

            // 数字补0操作
            function addZero(num) {
                return num < 10 ? '0' + num : num;
            }

        },
        Revert: function () {
            if (require("g_Echart").myChartleida != null && require("g_Echart").myChartleida != "" && require("g_Echart").myChartleida != undefined) {
                clearInterval(require("g_Echart").zsldInterval);//清空计时器
                require("g_Echart").myChartleida.dispose();
                //require("g_Echart").myChartleida.restore();
            }
        }
    }
})