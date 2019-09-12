define(["config", "common", "e_EchartAjax"], function (con, com, e_EchartAjax) {
    var gauge_value = 0;
    /****************************产业****************************/
    return {
        oIndustryBriefingTimer: null,    //产业简报图表定时器
        oIndustryBriefingTimer2: null,    //产业简报企业列表定时器
        mybigChart: null,
        myChartcyjzl: null,             //产业竞争力
        cyjzlData:null,                 //产业竞争力数据
        myChartqybhqs: null,            //企业变化趋势
        qybhqsData: null,               //企业变化趋势数据
        ssbhqsData: null,               //税收变化趋势数据
        myChartssbhqs: null,            //税收变化趋势
        gtbhqsData:null,                //固投变化趋势数据
        myChartgtbhqs: null,            //固投变化趋势
        jyjhbhqsData:null,              //就业机会数据
        myChartjyjh: null,              //就业机会
        myChartxzsp: null,              //薪资水平
        xzspbhqsData: null,             //薪资水平数据
        myChartgccrc: null,             //高层次人才
        gccrcData: null,                //高层次人才数据
        zlxxcyData: null,               //战略新兴产业数据 
        zlxxcyjgData:null,              //战略新兴产业结构数据 
        myChartleida: null,             //风控雷达
        fkldData:null,                  //风控雷达数据
        fkldInterval: null,             //雷达计时器
        centernumberData: null,         //中间数字数据
        cyjbListData: null,             //产业简报企业列表

        //加载图表
        loadEcharts:function()
        {
            //require("e_Echart").leida();
            //require("e_Echart").jyjh();
            //require("e_Echart").xzsp();
            //require("e_Echart").gccrc();
        },
        //显示大的图表
        loadBigChart: function (divname) {
            var url = con.HtmlUrl + 'Industry/Estate/Center_03.html';
            require(['text!' + url], function (template) {
                $("#center_03").html(template);
                $("#center_03").show('drop', 1000);//左侧

                switch (divname) {
                    case "Left_First_01"://产业竞争力
                        require("e_Echart").bigcyjzl();
                        break;
                    case "Left_Second_01"://企业变化趋势
                        require("e_Echart").bigqybhqs();
                        break;
                    case "Left_Second_02"://税收变化趋势
                        require("e_Echart").bigssbhqs();
                        break;
                    case "Left_Second_03"://固投变化趋势
                        require("e_Echart").biggtbhqs();
                        break;
                    case "Right_First_01"://就业机会变化趋势
                        require("e_Echart").bigjyjh();
                        break;
                    case "Right_First_02"://薪资水平变化趋势
                        require("e_Echart").bigxzsp();
                        break;
                    case "Right_First_03"://高层次人才变化趋势
                        require("e_Echart").biggccrc();
                        break;
                    default:
                }

            })
        },
        //关闭大的图表
        closeBigChart: function () {
            if (require("e_Echart").mybigChart != null && require("e_Echart").mybigChart != "" && require("e_Echart").mybigChart != undefined) {
                require("e_Echart").mybigChart.dispose();
            }
            $("#center_03").html("");
        },
        //产业竞争力
        cyjzl: function () {
            if ($("#cyjzl-chart").length <= 0) { return false; }
            e_EchartAjax.cyjzl(function (result) {
                if (require("e_Echart").cyjzlData == null) { return false; }
                var data = require("e_Echart").cyjzlData;
               
                var cyjzlChart = document.getElementById('cyjzl-chart');
                var Max = 100;
                
                require("e_Echart").myChartcyjzl = echarts.init(cyjzlChart);
                cyjzlOption = {
                    tooltip: {
                        //trigger: 'axis'
                    },
                    legend: {
                        show: false
                    },
                    radar: [
                        {
                            indicator: [
                                { text: data[2].model_item_name, max: Max },
                                { text: data[1].model_item_name, max: Max },
                                { text: data[0].model_item_name, max: Max },
                                { text: data[3].model_item_name, max: Max },
                                { text: data[4].model_item_name, max: Max }
                            ],
                            name: {
                                formatter: '【{value}】',
                                textStyle: {
                                    color: '#0ff',
                                    fontSize: 25
                                }
                            },
                            radius: 150,
                            center: ['50%', '55%'],
                            axisLine: {
                                lineStyle: {
                                    width: 2,
                                },
                            },
                            splitLine: {
                                lineStyle: {
                                    width: 2,
                                },
                            },
                            splitArea: {
                                areaStyle: {
                                    color: "transparent",
                                },
                            },
                        }
                    ],
                    series: [
                        {
                            name:"产业竞争力",
                            type: 'radar',
                            data: [
                                {
                                    value: [data[2].score, data[1].score, data[0].score, data[3].score, data[4].score],
                                    areaStyle: {
                                        normal: {
                                            color: 'rgba(235,182,0,.4)'
                                        }
                                    },
                                    lineStyle: {
                                        normal: {
                                            width: 6,
                                            color: "rgba(235,182,0,1)"
                                        }
                                    }
                                }
                            ],
                        }
                    ]
                };
                require("e_Echart").myChartcyjzl.setOption(cyjzlOption);
            })
        },
        //大产业竞争力
        bigcyjzl: function () {
            $("#EbigechartHead").html('产业竞争力');
            if ($("#cyjzl-chart").length <= 0) { return false; }
            e_EchartAjax.cyjzl(function (result) {
                if (require("e_Echart").cyjzlData == null) { return false; }
                var data = require("e_Echart").cyjzlData;
               
                    var Max = 100;
                    
           
                    cyjzlOption = {
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            show: false
                        },
                        radar: [
                            {
                                indicator: [
                                    { text: data[2].model_item_name, max: Max },
                                    { text: data[1].model_item_name, max: Max },
                                    { text: data[0].model_item_name, max: Max },
                                    { text: data[3].model_item_name, max: Max },
                                    { text: data[4].model_item_name, max: Max }
                                ],
                                name: {
                                    formatter: '【{value}】',
                                    textStyle: {
                                        color: '#0ff',
                                        fontSize: 50
                                    }
                                },
                                radius: 380,
                                center: ['50%', '54%'],
                                axisLine: {
                                    lineStyle: {
                                        width: 6,
                                    },
                                },
                                splitLine: {
                                    lineStyle: {
                                        width: 6,
                                    },
                                },
                                splitArea: {
                                    areaStyle: {
                                        color: "transparent",
                                    },
                                },
                            }
                        ],
                        series: [
                            {
                                type: 'radar',
                                data: [
                                    {
                                        value: [data[2].score, data[1].score, data[0].score, data[3].score, data[4].score],
                                        areaStyle: {
                                            normal: {
                                                color: 'rgba(235,182,0,.4)'
                                            }
                                        },
                                        lineStyle: {
                                            normal: {
                                                width: 12,
                                                color: "rgba(235,182,0,1)"
                                            }
                                        }
                                    }
                                ],
                            }
                        ]
                    };
                    if (require("e_Echart").mybigChart != null && require("e_Echart").mybigChart != "" && require("e_Echart").mybigChart != undefined) {
                        require("e_Echart").mybigChart.dispose();
                    }
                    require("e_Echart").mybigChart = echarts.init(document.getElementById('Ebig-chart'));
                    require("e_Echart").mybigChart.setOption(cyjzlOption);
                
                    
            })
        },
        //企业变化趋势
        qybhqs: function () {
            if ($("#qybhqs-chart").length <= 0) { return false; }
            var qybhqsChart = document.getElementById('qybhqs-chart');
            e_EchartAjax.qybhqs(function (result) {
                if (require("e_Echart").qybhqsData == null) { return false; }
                var data = require("e_Echart").qybhqsData;
                var arrvalue = [], arryear = [], arr = [], temp = []
                for (var i = 0; i < data.length; i++) {
                    if (typeof data[i] == "object") {
                        for (var key in data[i]) {
                            arr.push(data[i][key])
                        }
                    }
                }
                for (var i = 0; i < arr.length; i++) {
                    if (temp.indexOf(arr[i]) == -1) {
                        temp.push(arr[i]);
                    }
                }
                for (var a = 0; a < arr.length; a++) {
                    if (a % 2 != 0) {
                        arrvalue.push(temp[a])
                    } else {
                        arryear.push(temp[a])
                    }
                }
                require("e_Echart").myChartqybhqs = echarts.init(qybhqsChart);
                qybhqsOption = {
                    legend: {
                        show: false
                    },
                    color: ['#02d8e3'],
                    grid: {
                        left: '1%',   // grid 组件离容器左侧的距离。
                        right: '1%',
                        bottom: '2%',
                        height: "88%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
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
                        nameLocation: "start",
                        data: arryear,
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
                        name: "        (企业数/千)",
                        nameTextStyle: {
                            color: "#00d7fe",
                            fontSize: 22,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        },
                        //interval: 10,
                        //max: 90,
                        axisLabel: {
                            formatter: function (value, index) {
                                
                                    value = value / 1000;
                                
                                return value;
                            },
                            textStyle: {
                                fontSize: 22,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)",
                            }
                        }
                    },
                    series: [
                      {
                          type: 'line',
                          lineStyle: {
                              width: 2,
                          },
                          symbolSize: 10,
                          areaStyle: {
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: "rgba(74,128,244,.1)",
                              }, {
                                  offset: 1,
                                  color: "rgba(74,128,244,.3)",
                              }])
                          },
                          data: arrvalue
                      }
                    ]
                };
                require("e_Echart").myChartqybhqs.setOption(qybhqsOption);
            })
        },
        //大企业变化趋势
        bigqybhqs: function () {
            $("#EbigechartHead").html('企业变化趋势(企业数/千)');
            if ($("#qybhqs-chart").length <= 0) { return false; }
            e_EchartAjax.qybhqs(function (result) {
                if (require("e_Echart").qybhqsData == null) { return false; }
                var data = require("e_Echart").qybhqsData;
                var arrvalue = [], arryear = [], arr = [], temp = []
                for (var i = 0; i < data.length; i++) {
                    if (typeof data[i] == "object") {
                        for (var key in data[i]) {
                            arr.push(data[i][key])
                        }
                    }
                }
                for (var i = 0; i < arr.length; i++) {
                    if (temp.indexOf(arr[i]) == -1) {
                        temp.push(arr[i]);
                    }
                }
                for (var a = 0; a < arr.length; a++) {
                    if (a % 2 != 0) {
                        arrvalue.push(temp[a])
                    } else {
                        arryear.push(temp[a])
                    }
                }
                qybhqsOption = {
                    legend: {
                        show: false
                    },
                    color: ['#02d8e3'],
                    grid: {
                        left: '5%',   // grid 组件离容器左侧的距离。
                        right: '5%',
                        bottom: '5%',
                        height: "86%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                show: false,
                            }
                        },
                        textStyle:{
                            fontSize:50,
                        }
                    },
                    xAxis: {
                        type: 'category',
                        nameLocation: "start",
                        data: arryear,
                        boundaryGap: ["5%", "5%"],
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 4,
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
                                width: 4,
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
                                width: 4,
                                color: "rgba(80,172,254,0.2)"
                            }
                        },
                        //interval: 10,
                        //max: 90,
                        axisLabel: {
                            formatter: function (value, index) {
                                value = value / 1000;
                                return value;
                            },
                            textStyle: {
                                fontSize: 50,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                width: 4,
                                color: "rgba(80,172,254,0.2)",
                            }
                        }
                    },
                    series: [
                      {
                          type: 'line',
                          lineStyle: {
                              width: 10,
                          },
                          symbolSize: 20,
                          areaStyle: {
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: "rgba(74,128,244,.1)",
                              }, {
                                  offset: 1,
                                  color: "rgba(74,128,244,.3)",
                              }])
                          },
                          data: arrvalue
                      }
                    ]
                };
                if (require("e_Echart").mybigChart != null && require("e_Echart").mybigChart != "" && require("e_Echart").mybigChart != undefined) {
                    require("e_Echart").mybigChart.dispose();
                }
                require("e_Echart").mybigChart = echarts.init(document.getElementById('Ebig-chart'));
                require("e_Echart").mybigChart.setOption(qybhqsOption);
            })
        },
        //税收变化趋势
        ssbhqs: function () {
            if ($("#ssbhqs-chart").length <= 0) { return false; }
            var ssbhqsChart = document.getElementById('ssbhqs-chart');
            e_EchartAjax.ssbhqs(function (result) {
                if (require("e_Echart").ssbhqsData == null) { return false; }
                var data = require("e_Echart").ssbhqsData;
                var arrvalue = [], arryear = [], arr = [], temp = []
                for (var i = 0; i < data.length; i++) {
                    if (typeof data[i] == "object") {
                        for (var key in data[i]) {
                            arr.push(data[i][key])
                        }
                    }
                }
                for (var i = 0; i < arr.length; i++) {
                    if (temp.indexOf(arr[i]) == -1) {
                        temp.push(arr[i]);
                    }
                }
                for (var a = 0; a < arr.length; a++) {
                    if (a % 2 != 0) {
                        arrvalue.push(temp[a])
                    } else {
                        arryear.push(temp[a])
                    }
                }
                require("e_Echart").myChartssbhqs = echarts.init(ssbhqsChart);
                ssbhqsOption = {
                    legend: {
                        show: false
                    },
                    color: ['#02d8e3'],
                    grid: {
                        left: '1%',   // grid 组件离容器左侧的距离。
                        right: '1%',
                        bottom: '2%',
                        height: "88%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
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
                        show: true,
                        type: 'category',
                        data: arryear,
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
                        name: "        (金额/亿)",
                        nameTextStyle: {
                            color: "#00d7fe",
                            fontSize: 22,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        },
                        //interval: 10,
                        //max: 90,
                        axisLabel: {
                            formatter: function (value, index) {
                                if (value >= 100000000) {
                                    value = value / 100000000;
                                }
                                return value;
                            },
                            textStyle: {
                                fontSize: 22,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)",
                            }
                        }
                    },
                    series: [
                      {
                          type: 'line',
                          //smooth:true,
                          //color:"rgba(7,196,230,1)",
                          lineStyle: {
                              width: 2,
                          },
                          symbolSize: 10,
                          areaStyle: {
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: "rgba(74,128,244,.1)",
                              }, {
                                  offset: 1,
                                  color: "rgba(74,128,244,.3)",
                              }])
                          },
                          data: arrvalue
                      }
                    ]
                };
                require("e_Echart").myChartssbhqs.setOption(ssbhqsOption);

            })

        },
        //大税收变化趋势
        bigssbhqs: function () {
            if ($("#ssbhqs-chart").length <= 0) { return false; }
            $("#EbigechartHead").html('税收变化趋势(金额/亿)');
            e_EchartAjax.ssbhqs(function (result) {
                if (require("e_Echart").ssbhqsData == null) { return false; }
                var data = require("e_Echart").ssbhqsData;
                var arrvalue = [], arryear = [], arr = [], temp = []
                for (var i = 0; i < data.length; i++) {
                    if (typeof data[i] == "object") {
                        for (var key in data[i]) {
                            arr.push(data[i][key])
                        }
                    }
                }
                for (var i = 0; i < arr.length; i++) {
                    if (temp.indexOf(arr[i]) == -1) {
                        temp.push(arr[i]);
                    }
                }
                for (var a = 0; a < arr.length; a++) {
                    if (a % 2 != 0) {
                        arrvalue.push(temp[a])
                    } else {
                        arryear.push(temp[a])
                    }
                }
                ssbhqsOption = {
                    legend: {
                        show: false
                    },
                    color: ['#02d8e3'],
                    grid: {
                        left: '5%',   // grid 组件离容器左侧的距离。
                        right: '5%',
                        bottom: '5%',
                        height: "86%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
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
                        show: true,
                        type: 'category',
                        data: arryear,
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
                        //name: "(金额/亿)",
                        //nameTextStyle: {
                        //    color: "#00d7fe",
                        //    fontSize: 50,
                        //},
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
                            formatter: function (value, index) {
                                if (value >= 100000000) {
                                    value = value / 100000000;
                                }
                                return value;
                            },
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
                          //smooth:true,
                          //color:"rgba(7,196,230,1)",
                          lineStyle: {
                              width: 10,
                          },
                          symbolSize: 20,
                          areaStyle: {
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: "rgba(74,128,244,.1)",
                              }, {
                                  offset: 1,
                                  color: "rgba(74,128,244,.3)",
                              }])
                          },
                          data: arrvalue
                      }
                    ]
                };
                if (require("e_Echart").mybigChart != null && require("e_Echart").mybigChart != "" && require("e_Echart").mybigChart != undefined) {
                    require("e_Echart").mybigChart.dispose();
                }
                require("e_Echart").mybigChart = echarts.init(document.getElementById('Ebig-chart'));
                require("e_Echart").mybigChart.setOption(ssbhqsOption);

            })
        },
        //固投变化趋势
        gtbhqs: function () {
            if ($("#gtbhqs-chart").length <= 0) { return false; }
            e_EchartAjax.gtbhqs(function (result) {
                if (require("e_Echart").gtbhqsData == null) { return false; }
                var gtbhqsChart = document.getElementById('gtbhqs-chart');
                var data = require("e_Echart").gtbhqsData;
                    var gtbhqsdata = [
                        parseInt(data.investmentInfo['2009年']), parseInt(data.investmentInfo['2010年']), parseInt(data.investmentInfo['2011年']),
                        parseInt(data.investmentInfo['2012年']), parseInt(data.investmentInfo['2013年']), parseInt(data.investmentInfo['2014年']),
                        parseInt(data.investmentInfo['2015年']), parseInt(data.investmentInfo['2016年']), parseInt(data.investmentInfo['2017年']),
                    ];
                    require("e_Echart").myChartgtbhqs = echarts.init(gtbhqsChart);
                    gtbhqsOption = {
                        legend: {
                            show: false
                        },
                        color: ['#e3a102'],
                        grid: {
                            left: '1%',   // grid 组件离容器左侧的距离。
                            right: '1%',
                            bottom: '2%',
                            height: "88%",
                            containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
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
                            show: true,
                            type: 'category',
                            data: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
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
                            name: "        (金额/亿)",
                            nameTextStyle: {
                                color: "#00d7fe",
                                fontSize: 22,
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: "rgba(80,172,254,0.2)"
                                }
                            },
                            //interval: 5,
                            //max: 2000000,
                            axisLabel: {
                                margin: 2,
                                
                        formatter: function (value, index) {
                           
                                value = value / 10000 ;
                         
                            return value;
                        },
                        textStyle: {
                            fontSize: 22,
                            color: "#00d7fe"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "rgba(80,172,254,0.2)",
                        }
                    }
                },
                series: [
                  {
                      type: 'line',
                      //smooth:true,
                      //color:"rgba(7,196,230,1)",
                      lineStyle: {
                          width: 2,
                      },
                      symbolSize: 10,
                      areaStyle: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                              offset: 0,
                              color: "rgba(227,161,2,.1)",
                          }, {
                              offset: 1,
                              color: "rgba(227,161,2,.3)",
                          }])
                      },
                      data: gtbhqsdata
                  }
                ]
            };
            require("e_Echart").myChartgtbhqs.setOption(gtbhqsOption);
               
            })
          
        },
        //大固投变化趋势
        biggtbhqs: function () {
            $("#EbigechartHead").html('固投变化趋势(金额/亿)');
            if ($("#gtbhqs-chart").length <= 0) { return false; }
            e_EchartAjax.gtbhqs(function (result) {
                if (require("e_Echart").gtbhqsData == null) { return false; }
                var data = require("e_Echart").gtbhqsData;
                var gtbhqsdata = [
                    parseInt(data.investmentInfo['2009年']), parseInt(data.investmentInfo['2010年']), parseInt(data.investmentInfo['2011年']),
                    parseInt(data.investmentInfo['2012年']), parseInt(data.investmentInfo['2013年']), parseInt(data.investmentInfo['2014年']),
                    parseInt(data.investmentInfo['2015年']), parseInt(data.investmentInfo['2016年']), parseInt(data.investmentInfo['2017年']),
                ];
                gtbhqsOption = {
                    legend: {
                        show: false
                    },
                    color: ['#e3a102'],
                    grid: {
                        left: '5%',   // grid 组件离容器左侧的距离。
                        right: '5%',
                        bottom: '5%',
                        height: "86%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
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
                        show: true,
                        type: 'category',
                        data: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
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
                        //name: "(金额/百万)",
                        //nameTextStyle: {
                        //    color: "#00d7fe",
                        //    fontSize: 50,
                        //},
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
                        //interval: 5,
                        //max: 2000000,
                        axisLabel: {
                            margin: 4,

                            formatter: function (value, index) {

                                value = value / 10000;

                                return value;
                            },
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
                          //smooth:true,
                          //color:"rgba(7,196,230,1)",
                          lineStyle: {
                              width: 10,
                          },
                          symbolSize: 20,
                          areaStyle: {
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: "rgba(227,161,2,.1)",
                              }, {
                                  offset: 1,
                                  color: "rgba(227,161,2,.3)",
                              }])
                          },
                          data: gtbhqsdata
                      }
                    ]
                };
                if (require("e_Echart").mybigChart != null && require("e_Echart").mybigChart != "" && require("e_Echart").mybigChart != undefined) {
                    require("e_Echart").mybigChart.dispose();
                }
                require("e_Echart").mybigChart = echarts.init(document.getElementById('Ebig-chart'));
                require("e_Echart").mybigChart.setOption(gtbhqsOption);
            })
        },
        //就业机会
        jyjh: function () {
            if ($("#jyjh-chart").length <= 0) { return false; }
            var jyjhChart = document.getElementById('jyjh-chart');
            e_EchartAjax.jyjhbhqs(function (result) {
                if (require("e_Echart").jyjhbhqsData == null) { return false; }
                var data = require("e_Echart").jyjhbhqsData;
                var arrvalue = [data[0].totality, data[1].totality, data[2].totality, data[3].totality, data[4].totality, ]
                var arryear = [data[0].year, data[1].year, data[2].year, data[3].year, data[4].year,]
                require("e_Echart").myChartjyjh = echarts.init(jyjhChart);
                jyjhOption = {
                    legend: {
                        show: false
                    },
                    grid: {
                        left: '1%',   // grid 组件离容器左侧的距离。
                        right: '1%',
                        bottom: '2%',
                        height: "94%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
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
                        show: true,
                        type: 'category',
                        data: arryear,
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
                        name: "        (就业机会/千)",
                        nameTextStyle: {
                            color: "#00d7fe",
                            fontSize: 22,
                        },
                        axisTick: {
                            show: false,
                        },
                        //max: 90,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        },
                        //interval: 10,
                        axisLabel: {
                            
                            formatter: function (value, index) {
                                
                                value = value / 1000;
                                
                                return value;
                            },
                            textStyle: {
                                fontSize: 22,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)",
                            }
                        }
                    },
                    series: [
                      {
                          type: 'line',
                          smooth: true,
                          color: "rgba(7,196,230,1)",
                          lineStyle: {
                              width: 2,
                          },
                          //symbolSize:10,
                          areaStyle: {
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: "rgba(7,196,230,.3)",
                              }, {
                                  offset: 1,
                                  color: "rgba(7,196,230,0)",
                              }])
                          },
                          data: arrvalue
                      }
                    ]
                };
                require("e_Echart").myChartjyjh.setOption(jyjhOption);
            })
        },
        //大就业机会
        bigjyjh: function () {
            $("#EbigechartHead").html('就业机会变化趋势(千)');
            if ($("#jyjh-chart").length <= 0) { return false; }
            e_EchartAjax.jyjhbhqs(function (result) {
                if (require("e_Echart").jyjhbhqsData == null) { return false; }
                var data = require("e_Echart").jyjhbhqsData;
                var arrvalue = [data[0].totality, data[1].totality, data[2].totality, data[3].totality, data[4].totality, ]
                var arryear = [data[0].year, data[1].year, data[2].year, data[3].year, data[4].year, ]
                jyjhOption = {
                    legend: {
                        show: false
                    },
                    grid: {
                        left: '5%',   // grid 组件离容器左侧的距离。
                        right: '5%',
                        bottom: '5%',
                        height: "86%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
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
                        show: true,
                        type: 'category',
                        data: arryear,
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
                        //max: 90,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width:4,
                                color: "rgba(80,172,254,0.2)"
                            }
                        },
                        //interval: 10,
                        axisLabel: {
                           
                            formatter: function (value, index) {
                                
                                value = value / 1000;
                                
                                return value;
                            },
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
                          lineStyle: {
                              width: 10,
                          },
                          //symbolSize:10,
                          areaStyle: {
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: "rgba(7,196,230,.3)",
                              }, {
                                  offset: 1,
                                  color: "rgba(7,196,230,0)",
                              }])
                          },
                          data: arrvalue
                      }
                    ]
                };
                if (require("e_Echart").mybigChart != null && require("e_Echart").mybigChart != "" && require("e_Echart").mybigChart != undefined) {
                    require("e_Echart").mybigChart.dispose();
                }
                require("e_Echart").mybigChart = echarts.init(document.getElementById('Ebig-chart'));
                require("e_Echart").mybigChart.setOption(jyjhOption);
            })
        },
        //薪资水平
        xzsp: function () {
            if ($("#xzsp-chart").length <= 0) { return false; }
            var xzspChart = document.getElementById('xzsp-chart');
            var postdata="year"; 
            e_EchartAjax.xzspbhqs(postdata,function (result) {
                if (require("e_Echart").xzspbhqsData == null) { return false; }
                var data = require("e_Echart").xzspbhqsData;
                var arrvalue = [data[4].salaryTotality, data[3].salaryTotality, data[2].salaryTotality, data[1].salaryTotality, data[0].salaryTotality, ]
                var arryear = [data[4].year, data[3].year, data[2].year, data[1].year, data[0].year,]
                require("e_Echart").myChartxzsp = echarts.init(xzspChart);
                xzspOption = {
                    legend: {
                        show: false
                    },
                    grid: {
                        left: '1%',   // grid 组件离容器左侧的距离。
                        right: '1%',
                        bottom: '2%',
                        height: "94%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
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
                        show: true,
                        type: 'category',
                        data: arryear,
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
                        name: "       (薪资水平/万)",
                        nameTextStyle: {
                            color: "#00d7fe",
                            fontSize: 22,
                        },
                        axisTick: {
                            show: false,
                        },
                        //min:7500,
                        //max: 8500,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        },
                        //interval: 300,
                        axisLabel: {
                          
                            formatter: function (value, index) {
                                
                                value = value / 10000;
                                Math.round(value)
                                return value;
                            },
                            textStyle: {
                                fontSize: 22,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)",
                            }
                        }
                    },
                    series: [
                      {
                          type: 'line',
                          smooth: true,
                          color: "rgba(7,230,75,1)",
                          lineStyle: {
                              width: 2,
                          },
                          //symbolSize:10,
                          areaStyle: {
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: "rgba(7,230,75,.3)",
                              }, {
                                  offset: 1,
                                  color: "rgba(7,230,75,0)",
                              }])
                          },
                          data: arrvalue
                      }
                    ]
                };
                require("e_Echart").myChartxzsp.setOption(xzspOption);
            })
        },
        //大薪资水平
        bigxzsp: function () {
            $("#EbigechartHead").html('薪资水平变化趋势（万）');
            if ($("#xzsp-chart").length <= 0) { return false; }
            var postdata = "year";
            e_EchartAjax.xzspbhqs(postdata,function (result) {
                if (require("e_Echart").xzspbhqsData == null) { return false; }
                var data = require("e_Echart").xzspbhqsData;
                var arrvalue = [data[4].salaryTotality, data[3].salaryTotality, data[2].salaryTotality, data[1].salaryTotality, data[0].salaryTotality, ]
                var arryear = [data[4].year, data[3].year, data[2].year, data[1].year, data[0].year, ]
                xzspOption = {
                    legend: {
                        show: false
                    },
                    grid: {
                        left: '5%',   // grid 组件离容器左侧的距离。
                        right: '5%',
                        bottom: '5%',
                        height: "86%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
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
                        show: true,
                        type: 'category',
                        data: arryear,
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
                        //min: 7500,
                        //max: 8500,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width:4,
                                color: "rgba(80,172,254,0.2)"
                            }
                        },
                        //interval: 300,
                        axisLabel: {
                            formatter: function (value, index) {

                                value = value / 10000;
                                Math.round(value)
                                return value;
                            },
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
                          color: "rgba(7,230,75,1)",
                          lineStyle: {
                              width: 10,
                          },
                          //symbolSize:10,
                          areaStyle: {
                              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: "rgba(7,230,75,.3)",
                              }, {
                                  offset: 1,
                                  color: "rgba(7,230,75,0)",
                              }])
                          },
                          data: arrvalue
                      }
                    ]
                };
                if (require("e_Echart").mybigChart != null && require("e_Echart").mybigChart != "" && require("e_Echart").mybigChart != undefined) {
                    require("e_Echart").mybigChart.dispose();
                }
                require("e_Echart").mybigChart = echarts.init(document.getElementById('Ebig-chart'));
                require("e_Echart").mybigChart.setOption(xzspOption);
            })
        },
        //高层次人才
        gccrc: function () {
            if ($("#gccrc-chart").length <= 0) { return false; }
            var gccrcChart = document.getElementById('gccrc-chart');
            e_EchartAjax.gccrcbhqs(function (result) {
                if (require("e_Echart").gccrcbhqsData == null) { return false; }
                var data = require("e_Echart").gccrcbhqsData;
                var arrdq = [data[0]["年份"], data[1]["年份"], data[2]["年份"], data[3]["年份"], data[4]["年份"], ]
                var arrvalue = [data[0]["高层次人才数"], data[1]["高层次人才数"], data[2]["高层次人才数"], data[3]["高层次人才数"], data[4]["高层次人才数"], ]
                require("e_Echart").myChartgccrc = echarts.init(gccrcChart);
                gccrcOption = {
                    legend: {
                        show: false
                    },
                    color: ['#02d8e3'],
                    grid: {
                        left: '1%',   // grid 组件离容器左侧的距离。
                        right: '1%',
                        bottom: '2%',
                        height: "94%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
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
                        show: true,
                        type: 'category',
                        data: arrdq,
                        boundaryGap: ["20%", "20%"],
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
                        //interval: 10,
                        //max: 90,
                        axisLabel: {
                            textStyle: {
                                fontSize: 22,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)",
                            }
                        }
                    },
                    series: [
                      {
                          type: 'bar',
                          barWidth: 50,
                          itemStyle: {
                              normal: {
                                  barBorderRadius: [8,8,0,0],
                                  // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  //     offset: 0,
                                  //     color: '#04cafc'
                                  // }, {
                                  //     offset: 1,
                                  //     color: '#0e4abc'
                                  // }]),
                              }
                          },
                          color: "#0065fc",
                          data: arrvalue
                      }
                    ]
                };
                require("e_Echart").myChartgccrc.setOption(gccrcOption);
            })
        },
        //大高层次人才
        biggccrc: function () {
            $("#EbigechartHead").html('高层次人才变化趋势');
            if ($("#gccrc-chart").length <= 0) { return false; }
            e_EchartAjax.gccrcbhqs(function (result) {
                if (require("e_Echart").gccrcbhqsData == null) { return false; }
                var data = require("e_Echart").gccrcbhqsData;
                var arrdq = [data[0]["年份"], data[1]["年份"], data[2]["年份"], data[3]["年份"], data[4]["年份"], ]
                var arrvalue = [data[0]["高层次人才数"], data[1]["高层次人才数"], data[2]["高层次人才数"], data[3]["高层次人才数"], data[4]["高层次人才数"], ]
                gccrcOption = {
                    legend: {
                        show: false
                    },
                    color: ['#02d8e3'],
                    grid: {
                        left: '5%',   // grid 组件离容器左侧的距离。
                        right: '5%',
                        bottom: '5%',
                        height: "86%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
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
                        show: true,
                        type: 'category',
                        data: arrdq,
                        boundaryGap: ["20%", "20%"],
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
                        //interval: 10,
                        //max: 90,
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
                          type: 'bar',
                          barWidth: 140,
                          itemStyle: {
                              normal: {
                                  barBorderRadius: [20,20,0,0],
                                  // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  //     offset: 0,
                                  //     color: '#04cafc'
                                  // }, {
                                  //     offset: 1,
                                  //     color: '#0e4abc'
                                  // }]),
                              }
                          },
                          color: "#0065fc",
                          data: arrvalue
                      }
                    ]
                };
                if (require("e_Echart").mybigChart != null && require("e_Echart").mybigChart != "" && require("e_Echart").mybigChart != undefined) {
                    require("e_Echart").mybigChart.dispose();
                }
                require("e_Echart").mybigChart = echarts.init(document.getElementById('Ebig-chart'));
                require("e_Echart").mybigChart.setOption(gccrcOption);
            })
        },
        //战略新兴产业结构
        zlxxcyjg: function () {
            e_EchartAjax.getzlxxcyjgData(function (result) {
                
                var data = require("e_Echart").zlxxcyjgData;
                var arr = [];
                for (var i = 0; i < data[0][2019].length; i++) {
                    arr.push((data[0][2019][i].rate * 100).toFixed(2))
                }
                $("#zlxxcyjg").empty();
                var html = "";
                html += '<ul class="zlxxcyjg-list zlxxcyjg-list-left">';
                html += '<li class="zlxxcyjg-li" data-text="' + arr[0] + '%' + '">' + data[0][2019][0].industry + '</li>';
                html += '<li class="zlxxcyjg-li" data-text="' + arr[1] + '%' + '">' + data[0][2019][1].industry + '</li>';
                html += '<li class="zlxxcyjg-li" data-text="' + arr[2] + '%' + '">' + data[0][2019][2].industry + '</li>';
                html += '<li class="zlxxcyjg-li" data-text="' + arr[3] + '%' + '">' + data[0][2019][3].industry + '</li>';
                html += '<li class="zlxxcyjg-li" data-text="' + arr[4] + '%' + '">' + data[0][2019][4].industry + '</li>';
                html += '</ul>';
                html += '<ul class="zlxxcyjg-list zlxxcyjg-list-right">';
                html += '<li class="zlxxcyjg-li" data-text="' + arr[5] + '%' + '">' + data[0][2019][5].industry + '</li>';
                html += '<li class="zlxxcyjg-li" data-text="' + arr[6] + '%' + '">' + data[0][2019][6].industry + '</li>';
                html += '<li class="zlxxcyjg-li" data-text="' + arr[7] + '%' + '">' + data[0][2019][7].industry + '</li>';
                html += '<li class="zlxxcyjg-li" data-text="' + arr[8] + '%' + '">' + data[0][2019][8].industry + '</li>';
                html += '</ul>';
                $("#zlxxcyjg").html(html);
            })
        },
        //风控雷达
        fkld: function () {
            if ($("#fkld-chart").length <= 0) { return false; }
            require("e_Echart").myChartleida = echarts.init(document.getElementById('fkld-chart'));
            e_EchartAjax.getfkldData(function (result) {
            	var data = require("e_Echart").fkldData;
            	if (data.totalBusiness != 0) {
            		var dataArr = [
						data["舆情风险"].business / data.totalBusiness,
						data["税收异常"].business / data.totalBusiness,
						data["司法监管"].business / data.totalBusiness,
						data["经营风险"].business / data.totalBusiness
            		];
            	} else {
            		var dataArr = [0,0,0,0]
            	}

				require("e_Echart").fkldInterval = setInterval(function () {
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
									color: [
										[dataArr[0], '#a6f08f'],
										[dataArr[0] + dataArr[1], '#3dd4de'],
										[dataArr[0] + dataArr[1] + dataArr[2], '#e4e100'],
										[dataArr[0] + dataArr[1] + dataArr[2] + dataArr[3], '#8e26dc'],
									]
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
									//   color: '#55e1eb',
									// areaColor: '#006fff',
									// shadowOffsetX: 2,
									// shadowOffsetY: 2
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

								//  formatter: '{value}%', //显示的值

								//show:true,
								formatter: function (param) {
									var level = '';
									if (param <= dataArr[0] * 100) { //舆情风险
										level = (dataArr[0] * 100).toFixed(2) + '%'
										var html = '';
										html+= '<div class="fkld-div">';
										html+= ' <div class="fkld-result">舆情风险</div>';
										html+= '<div class="fkld-button flex">';
										html += '<button class="">企业数<span>' + data["舆情风险"].business + '</span></button>';
										html += '<button class="">信息数<span>' + data["舆情风险"].records + '</span></button>';
											 html+= '</div>'
											 html+= '<ul class="fkld-list">';
											 for (var i = 0; i < data["舆情风险"].list.length; i++) {
												 html += '<li class="fkld-li">';
												 html += '<div class="fkld-title">' + data["舆情风险"].list[i].name + '<span>' + data["舆情风险"].list[i].business + '|' + data["舆情风险"].list[i].records + '</span></div>';
												 html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
												 html += '</li>';
											 }
											 html+= '</ul>';
											 html += '</div>';
									 $('#fkld').html(html);
									}
									else if (param <= (dataArr[0] + dataArr[1]) * 100) { //税收异常
										level = (dataArr[1] * 100).toFixed(2) + '%'
										var html = '';
										html += '<div class="fkld-div">';
										html += ' <div class="fkld-result">税收异常</div>';
										html += '<div class="fkld-button flex">';
										html += '<button class="">企业数<span>' + data["税收异常"].business + '</span></button>';
										html += '<button class="">信息数<span>' + data["税收异常"].records + '</span></button>';
										html += '</div>'
										html += '<ul class="fkld-list">';
										for (var i = 0; i < data["税收异常"].list.length; i++) {
												 html += '<li class="fkld-li">';
												 html += '<div class="fkld-title">' + data["税收异常"].list[i].name + '<span>' + data["税收异常"].list[i].business + '|' + data["税收异常"].list[i].records + '</span></div>';
												 html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
												 html += '</li>';
										}
										html += '</ul>';
										html += '</div>';
										$('#fkld').html(html);
									}
									else if (param <= (dataArr[0] + dataArr[1] + dataArr[2]) * 100) { //司法监管
										level = (dataArr[2] * 100).toFixed(2) + '%'
										var html = '';
										html += '<div class="fkld-div">';
										html += ' <div class="fkld-result">司法监管</div>';
										html += '<div class="fkld-button flex">';
										html += '<button class="">企业数<span>' + data["司法监管"].business + '</span></button>';
										html += '<button class="">信息数<span>' + data["司法监管"].records + '</span></button>';
										html += '</div>'
										html += '<ul class="fkld-list">';
										for (var i = 0; i < data["司法监管"].list.length; i++) {
												 html += '<li class="fkld-li">';
												 html += '<div class="fkld-title">' + data["司法监管"].list[i].name + '<span>' + data["司法监管"].list[i].business + '|' + data["司法监管"].list[i].records + '</span></div>';
												 html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
												 html += '</li>';
										}
										html += '</ul>';
										html += '</div>';
										$('#fkld').html(html);
									}
									else if (param <= (dataArr[0] + dataArr[1] + dataArr[2] + dataArr[3]) * 100) { //经营风险
										level = (dataArr[3] * 100).toFixed(2) + '%'
										var html = '';
										html+= '<div class="fkld-div">';
										html+= ' <div class="fkld-result">经营风险</div>';
										html+= '<div class="fkld-button flex">';
										html += '<button class="">企业数<span>' + data["经营风险"].business + '</span></button>';
										html += '<button class="">信息数<span>' + data["经营风险"].records + '</span></button>';
											 html+= '</div>'
											 html+= '<ul class="fkld-list">';
											 for (var i = 0; i < data["经营风险"].list.length; i++) {
												 html += '<li class="fkld-li">';
												 html += '<div class="fkld-title">' + data["经营风险"].list[i].name + '<span>' + data["经营风险"].list[i].business + '|' + data["经营风险"].list[i].records + '</span></div>';
												 html += '<div class="fkld-bardiv"><span class="fkld-bar"></span></div>';
												 html += '</li>';
											 }
												 html+= '</ul>';
												 html += '</div>';
									 $('#fkld').html(html);
									} else {
										level = '暂无';
									}
									return level;
								},
								offsetCenter: [0, 0],
								textStyle: {
									fontSize: 40,
									color:'#fff', 
                                
								}
							},
							data: [{
								name: "",
								value: Math.floor(gauge_value)
							}]
						}]
					};

					require("e_Echart").myChartleida.setOption(option, true);

				}, 300);
            })
        },

        //中间大数字和产业简报图表
        centernumber: function () {
            e_EchartAjax.centernumberajax(function (result) {
                var data = require("e_Echart").centernumberData;
                //中间大数字
                require('e_Main').numberAni(data.total, data.above, data.emerging, data.unicorn, data.public);

                //产业简报图表
                var cyjbChart = document.getElementById('cyjb-chart');
                require("e_Echart").myChartcyjb = echarts.init(cyjbChart);

                var cyjbColor = ["#3cb2ef", "#32c4e9", "#66e0e3", "#9fe7b9", "#fedb5b", "#ff9f7f", "#fc7293", "#e061ae", "#e690d1", "#e7bcf2", "#9d96f5", "#96bfff", "#96bfff", "#3cb2ef", "#32c4e9", "#64dee1", "#a1e6b9"];

                var cyjbIndustryData = [], cyjbEnt234TypeData = [], cyjbRegionData = [];
                var cyjbIndustryName = [], cyjbEnt234TypeName = [], cyjbRegionName = [];
                //industry
                for (var i = 0; i < data.category.industry.length; i++) {
                    cyjbIndustryName.push(data.category.industry[i].name);
                    cyjbIndustryData.push({ "value": data.category.industry[i].count, "name": data.category.industry[i].name });
                }
                //ent234Type
                for (var i = 0; i < data.category.ent234Type.length; i++) {
                    cyjbEnt234TypeName.push(data.category.ent234Type[i].name);
                    cyjbEnt234TypeData.push({ "value": data.category.ent234Type[i].count, "name": data.category.ent234Type[i].name });
                }
                //region
                for (var i = 0; i < data.category.region.length; i++) {
                    cyjbRegionName.push(data.category.region[i].name);
                    cyjbRegionData.push({ "value": data.category.region[i].count, "name": data.category.region[i].name });
                }

                function cyjbChartFun(colorData, NameData, seriesData) {
                    $(".cyjb-chartdiv>.legend-list").empty();
                    for (var i = 0; i < NameData.length; i++) {
                        $(".cyjb-chartdiv>.legend-list").append("<li style=' color:" + colorData[i] + "'><div>" + NameData[i] + "</div></li>")
                    };

                    cyjbOption = {
                        title: {
                            text: "单位：家",
                            textStyle: {
                                fontSize: 12,
                                color: "#ccc"
                            },
                            x: 'left',

                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{b} : {c} ({d}%)"
                        },
                        color: colorData,
                        legend: {
                            show: false,
                        },
                        series: [
                            {
                                type: 'pie',
                                radius: [60, 130],
                                center: ['28%', '50%'],
                                roseType: 'area',
                                label: {
                                    formatter: "{c}",
                                    textStyle: {
                                        fontSize: 20,
                                    },

                                },
                                data: seriesData
                            }
                        ]
                    };
                    require("e_Echart").myChartcyjb.setOption(cyjbOption);
                    $('.scrolldiv').perfectScrollbar({ cursorwidth: 10, cursorcolor: "rgba(0, 126, 179, .6)", });

                }

                cyjbChartFun(cyjbColor, cyjbIndustryName, cyjbIndustryData);

                //循环播放
                var cyjbChartIndex = 1;
                clearInterval(require("e_Echart").oIndustryBriefingTimer);
                require("e_Echart").oIndustryBriefingTimer = null;
                require("e_Echart").oIndustryBriefingTimer = setInterval(IndustryBriefingTimerFun, 20000);

                function IndustryBriefingTimerFun() {
                    cyjbChartIndex++;
                    cyjbChartIndex = cyjbChartIndex === 4 ? 1 : cyjbChartIndex;

                    if (cyjbChartIndex === 1) {
                        cyjbChartFun(cyjbColor, cyjbIndustryName, cyjbIndustryData);
                    } else if (cyjbChartIndex === 2) {
                        cyjbChartFun(cyjbColor, cyjbEnt234TypeName, cyjbEnt234TypeData);
                    } else if (cyjbChartIndex === 3) {
                        cyjbChartFun(cyjbColor, cyjbRegionName, cyjbRegionData);
                    }
                    $("#cyjb-charttabbox>a").eq(cyjbChartIndex - 1).addClass("active").siblings().removeClass("active");

                }


                //Tab点击
                $("#cyjb-charttabbox>a").each(function (index, element) {
                    $(this).click(function () {
                        clearInterval(require("e_Echart").oIndustryBriefingTimer);
                        require("e_Echart").oIndustryBriefingTimer = null;
                        if (index === 0) {
                            cyjbChartIndex = 1;
                            cyjbChartFun(cyjbColor, cyjbIndustryName, cyjbIndustryData);
                        }else if(index === 1) {
                            cyjbChartIndex = 2;
                            cyjbChartFun(cyjbColor, cyjbEnt234TypeName, cyjbEnt234TypeData);
                        }else if (index === 2) {
                            cyjbChartIndex = 3;
                            cyjbChartFun(cyjbColor, cyjbRegionName, cyjbRegionData);
                        }
                        $(this).addClass("active").siblings().removeClass("active");
                        require("e_Echart").oIndustryBriefingTimer = setInterval(IndustryBriefingTimerFun, 20000);

                    })
                })


            })
        },

        //产业简报企业列表
        cyjbList: function () {
            e_EchartAjax.getCyjbList(function (result) {
                var data = require("e_Echart").cyjbListData;
                //更新时间
                var cyjbUpdateTimeYear = parseInt(data.summarydate.split("年")[0]);
                var cyjbUpdateTimeMonth = parseInt(data.summarydate.split("年")[1]);
                if (cyjbUpdateTimeMonth === 12) {
                    cyjbUpdateTimeMonth = 1;
                    cyjbUpdateTimeYear++;
                } else {
                    cyjbUpdateTimeMonth++;
                }
                $("#cyjb-updatetime>em").html(cyjbUpdateTimeYear + "年" + cyjbUpdateTimeMonth + "月15日");

                //cyjbList-tab
                $("#cyjb-business>div").html(data.newBusinessCount);
                $("#cyjb-died>div").html(data.newDiedCount);
                $("#cyjb-regulatory>div").html(data.newRegulatoryCount);
                $("#cyjb-judged>div").html(data.newJudgedCount);
                $("#cyjb-emerging>div").html(data.newEmergingCount);
             
                //["newBusinessList", "newDiedList", "newRegulatoryList", "newJudgedList", "newEmergingList"]
                var cyjbListIndex = 0;
                var newBusinessList = data.newBusinessList;     //新增企业数
                var newDiedList = data.newDiedList;             //迁出/消亡企业数
                var newRegulatoryList = data.newRegulatoryList; //新增司法监管数
                var newJudgedList = data.newJudgedList;         //新增行政处罚数
                var newEmergingList = data.newEmergingList;     //新增战略新兴企业数
                var cyjbListArr = [newBusinessList, newDiedList, newRegulatoryList, newJudgedList, newEmergingList]

                //默认加载
                cyjbListFun(0, cyjbListArr[0]);

                //定时器循环
                clearInterval(require("e_Echart").oIndustryBriefingTimer2);
                require("e_Echart").oIndustryBriefingTimer2 = null;
                require("e_Echart").oIndustryBriefingTimer2 = setInterval(function () {
                    cyjbListIndex++;
                    cyjbListIndex = cyjbListIndex === 5 ? 0 : cyjbListIndex;
                    cyjbListFun(cyjbListIndex, cyjbListArr[cyjbListIndex]);
                }, 1000*15);

                //tab点击加载
                $(".cyjbList-tabbox>.cyjbList-tab").each(function (index, element) {
                    $(this).click(function () {
                        cyjbListFun(index, cyjbListArr[index]);
                    })
                });

                //列表函数
                function cyjbListFun(index, listData) {
                    clearInterval(require("e_Echart").oIndustryBriefingTimer2);
                    require("e_Echart").oIndustryBriefingTimer2 = null;
                    cyjbListIndex = index;

                    $("#cyjbList-div").empty();
                    $(".cyjbList-tabbox>.cyjbList-tab").eq(index).addClass("active").siblings().removeClass("active");

                    for (var i = 0; i < listData.length; i++) {
                        if (index === 0) {
                            cyjbListCommonFun(listData, listData[i].basicInfo.industryPhy)

                        } else if (index === 1) {
                            cyjbListCommonFun(listData, listData[i].basicInfo.entStatus)

                        } else if (index === 2) {
                            cyjbListCommonFun(listData, listData[i].riskType[0])

                        } else if (index === 3) {
                            cyjbListCommonFun(listData, listData[i].riskInfo[0].illeg_act_type)

                        } else if (index === 4) {
                            cyjbListCommonFun(listData, listData[i].basicInfo.industryPhy)
                        }
                    }

                    function cyjbListCommonFun(listData, listDataMess) {
                        $("#cyjbList-div").append(
                            '<div class="cyjbList-item">' +
                                '<div class="cyjbList-name">' + listData[i].entName + '</div>' +
                                '<div class="cyjbList-type">' + listDataMess + '</div>' +
                            '</div> '
                        )
                    };

                    $("#cyjbList-div>.cyjbList-item").eq(0).addClass("active");
                    $('.scrolldiv').perfectScrollbar({ cursorwidth: 6, cursorcolor: "rgba(0, 126, 179, .6)", });

                    require("e_Echart").oIndustryBriefingTimer2 = setInterval(function () {
                        cyjbListIndex++;
                        cyjbListIndex = cyjbListIndex === 5 ? 0 : cyjbListIndex;
                        cyjbListFun(cyjbListIndex, cyjbListArr[cyjbListIndex]);
                    }, 1000 * 15);

                }



            });
        },



        Revert: function () {
            //产业竞争力
            if (require("e_Echart").myChartcyjzl != null && require("e_Echart").myChartcyjzl != "" && require("e_Echart").myChartcyjzl != undefined) {
                require("e_Echart").myChartcyjzl.dispose();
                //require("e_Echart").myChartcyjzl.restore();
            }
            //企业变化趋势
            if (require("e_Echart").myChartqybhqs != null && require("e_Echart").myChartqybhqs != "" && require("e_Echart").myChartqybhqs != undefined) {
                require("e_Echart").myChartqybhqs.dispose();
                //require("e_Echart").myChartqybhqs.restore();
            }
            //税收变化趋势
            if (require("e_Echart").myChartssbhqs != null && require("e_Echart").myChartssbhqs != "" && require("e_Echart").myChartssbhqs != undefined) {
                require("e_Echart").myChartssbhqs.dispose();
                //require("e_Echart").myChartssbhqs.restore();
            }
            //固投变化趋势
            if (require("e_Echart").myChartgtbhqs != null && require("e_Echart").myChartgtbhqs != "" && require("e_Echart").myChartgtbhqs != undefined) {
                require("e_Echart").myChartgtbhqs.dispose();
                //require("e_Echart").myChartgtbhqs.restore();
            }
            //就业机会
            if (require("e_Echart").myChartjyjh != null && require("e_Echart").myChartjyjh != "" && require("e_Echart").myChartjyjh != undefined) {
                require("e_Echart").myChartjyjh.dispose();
                //require("e_Echart").myChartjyjh.restore();
            }
            //薪资水平
            if (require("e_Echart").myChartxzsp != null && require("e_Echart").myChartxzsp != "" && require("e_Echart").myChartxzsp != undefined) {
                require("e_Echart").myChartxzsp.dispose();
                //require("e_Echart").myChartxzsp.restore();
            }
            //高层次人才
            if (require("e_Echart").myChartgccrc != null && require("e_Echart").myChartgccrc != "" && require("e_Echart").myChartgccrc != undefined) {
                require("e_Echart").myChartgccrc.dispose();
                //require("e_Echart").myChartgccrc.restore();
            }
            
            //风控雷达
            if (require("e_Echart").myChartleida != null && require("e_Echart").myChartleida != "" && require("e_Echart").myChartleida != undefined) {
                clearInterval(require("e_Echart").fkldInterval);//清空计时器
                require("e_Echart").myChartleida.dispose();


                //require("e_Echart").myChartleida.restore();
            }

            //产业简报图表
            if (require("e_Echart").myChartcyjb != null && require("e_Echart").myChartcyjb != "" && require("e_Echart").myChartcyjb != undefined) {
                require("e_Echart").myChartcyjb.dispose();
            }

            if (require("e_Echart").oIndustryBriefingTimer != null) {
                clearInterval(require("e_Echart").oIndustryBriefingTimer);
                require("e_Echart").oIndustryBriefingTimer = null;
            }

            if (require("e_Echart").oIndustryBriefingTimer2 != null) {
                clearInterval(require("e_Echart").oIndustryBriefingTimer2);
                require("e_Echart").oIndustryBriefingTimer2 = null;
            }

        },
       
    
    }
})