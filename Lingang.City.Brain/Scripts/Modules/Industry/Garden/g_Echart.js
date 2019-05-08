  define(["config", "common", "g_EchartAjax"], function (con, com, g_EchartAjax) {
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

                gauge_value = 0;
               //各个产业的占比数据
                var jnhbData = data.节能环保产业 / 100,
                    gdzbData = data.高端装备制造产业 / 100,
                    xnycyData = data.新能源产业 / 100,
                    szcyData = data.数字创意产业 / 100,
                    xclcyData = data.新材料产业 / 100,
                    xnyqcData = data.新能源汽车 / 100,
                    xydxxData = data.信息技术产业 / 100,
                    swcyData = data.生物产业 / 100,
                    xgfwyData = data.相关服务产业 / 100;
                   
                var dataArr = [jnhbData, gdzbData, xnycyData, szcyData, xclcyData, xnyqcData, xydxxData, swcyData, xgfwyData];
                //节能环保产业，高端装备制造产业，新能源产业，数字创意产业，新材料产业，新能源汽车产业，新一代信息技术产业，生物产业，相关服务业
                var jnhb = dataArr[0],
                    gdzb = dataArr[0] + dataArr[1],
                    xnycy = dataArr[0] + dataArr[1] + dataArr[2],
                    szcy = dataArr[0] + dataArr[1] + dataArr[2] + dataArr[3],
                    xclcy = dataArr[0] + dataArr[1] + dataArr[2] + dataArr[3] + dataArr[4],
                    xnyqc = dataArr[0] + dataArr[1] + dataArr[2] + dataArr[3] + dataArr[4] + dataArr[5],
                    xydxx = dataArr[0] + dataArr[1] + dataArr[2] + dataArr[3] + dataArr[4] + dataArr[5] + dataArr[6],
                    swcy = dataArr[0] + dataArr[1] + dataArr[2] + dataArr[3] + dataArr[4] + dataArr[5] + dataArr[6] + dataArr[7],
                    xgfwy = dataArr[0] + dataArr[1] + dataArr[2] + dataArr[3] + dataArr[4] + dataArr[5] + dataArr[6] + dataArr[7] + dataArr[8];
                //产业颜色
                var industryColor = [
                                        [jnhb, '#b356d8'],
                                        [gdzb, '#184370'],
                                        [xnycy, '#547ae5'],
                                        [szcy, '#1588e5'],
                                        [xclcy, '#de7869'],
                                        [xnyqc, '#e57f01'],
                                        [xydxx, '#e4e100'],
                                        [swcy, '#07d8ae'],
                                        [xgfwy, '#70d367'],
                ]

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
                                    // borderWidth: 10,
                                    // shadowOffsetX: 10,
                                    // shadowOffsetY: 5,
                                    // color: [                
                                    //     [0.2, '#a6f08f'],
                                    //     [0.4, '#3dd4de'],
                                    //     [0.8, '#7CBB55'],
                                    //     [1, '#8e26dc'],
                                    // ]
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
                                // formatter: function(e) {
                                //     switch (e + "") {
                                //         case "410":
                                //             return "较差";
                                //             //return "";
                                //         case "470":
                                //             return "550";

                                //         case "530":
                                //             return "中等";
                                //             //return "";
                                //         case "590":
                                //             return "600";

                                //         case "650":
                                //             return "良好";
                                //             //return "";
                                //         case "710":
                                //             return "650";

                                //         case "770":
                                //             return "优秀";
                                //             //return "";
                                //         case "830":
                                //             return "700";

                                //         case "890":
                                //             return "极好";
                                //             //return "";
                                //         default:
                                //             return e;
                                //     }
                                // },
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
                                    if (param <= jnhb * 100) {
                                        level = dataArr[0] * 100 + '%'
                                        var html = '';
                                        html += '<div class="zsld-result">节能环保产业</div>';
                                        html += '<ul class="zsld-ul">';
                                        html += '<li class="zsld-li clearfix"><span>上海市</span><div class="zsld-bar"><div style="width: 3rem" data-text="131"></div></div></li>';
                                        html += '</ul>';
                                        html += '<div class="zsld-company flex">';
                                        html += '<dl class="zsld-dl">';
                                        html += '<dt class="">产业明星企业</dt>';
                                        html += '<dd class="">上海欣河水利市政工程有限公司</dd>';
                                        html += '<dd class="">上海强强财务咨询有限公司</dd>';
                                        html += '<dd class="">上海华琪实业有限公司</dd>';
                                        html += '</dl>';
                                        html += '<dl class="zsld-dl">';
                                        //html += '<dt class="">产业主要投资机构</dt>';
                                        html += '</dl>';
                                        html += '</div>';
                                        html += '</div>';
                                        html += '</div>	';
                                        $('#zsld').html(html);
                                    }
                                    else if (param <= gdzb * 100) {
                                        level = dataArr[1] * 100 + '%'
                                        var html = '';
                                        html += '<div class="zsld-result">高端装备制造产业</div>';
                                        html += '<ul class="zsld-ul">';
                                        html += '<li class="zsld-li clearfix"><span>上海市</span><div class="zsld-bar"><div style="width: 5rem" data-text="361"></div></div></li>';

                                        html += '</ul>';
                                        html += '<div class="zsld-company flex">';
                                        html += '<dl class="zsld-dl">';
                                        html += '<dt class="">产业明星企业</dt>';
                                        html += '<dd class="">上海凯群金属制品有限公司</dd>';
                                        html += '<dd class="">上海御拓电机有限公司</dd>';
                                        html += '<dd class="">上海思章机械设备有限公司</dd>';
                                        html += '</dl>';
                                        html += '<dl class="zsld-dl">';
                                        //html += '<dt class="">产业主要投资机构</dt>';
                                        html += '</dl>';
                                        html += '</div>';
                                        html += '</div>';
                                        html += '</div>';
                                        $('#zsld').html(html);
                                    }
                                    else if (param <= xnycy * 100) {//新能源产业
                                        level = dataArr[2] * 100 + '%'
                                        var html = '';
                                        html += '<div class="zsld-result">新能源产业</div>';
                                        html += '<ul class="zsld-ul">';
                                        html += '<li class="zsld-li clearfix"><span>上海市</span><div class="zsld-bar"><div style="width: 2rem" data-text="33"></div></div></li>';

                                        html += '</ul>';
                                        html += '<div class="zsld-company flex">';
                                        html += '<dl class="zsld-dl">';
                                        html += '<dt class="">上海雄淼船舶机械有限公司</dt>';
                                        html += '<dd class="">上海宏宇船舶有限公司</dd>';
                                        html += '<dd class="">上海铁纽电力工程有限公司</dd>';
                                        html += '</dl>';
                                        html += '<dl class="zsld-dl">';
                                        //html += '<dt class="">产业主要投资机构</dt>';
                                        html += '</dl>';
                                        html += '</div>';
                                        html += '</div>';
                                        html += '</div>';
                                        $('#zsld').html(html);
                                    }
                                    else if (param <= szcy * 100) {//数字创意
                                        level = dataArr[3] * 100 + '%'
                                        var html = '';
                                        html += '<div class="zsld-result">数字创意产业</div>';
                                        html += '<ul class="zsld-ul">';
                                        html += '<li class="zsld-li clearfix"><span>上海市</span><div class="zsld-bar"><div style="width: 5rem" data-text="361"></div></div></li>';

                                        html += '</ul>';
                                        html += '<div class="zsld-company flex">';
                                        html += '<dl class="zsld-dl">';
                                        html += '<dt class="">产业明星企业</dt>';
                                        html += '<dd class="">上海秋霞圃文化传播有限公司</dd>';
                                        html += '<dd class="">上海今典广昊影院管理有限公司</dd>';
                                        html += '<dd class="">上海弘歌城镇数字电影院线有限公司</dd>';
                                        html += '</dl>';
                                        html += '<dl class="zsld-dl">';
                                        //html += '<dt class="">产业主要投资机构</dt>';
                                        html += '</dl>';
                                        html += '</div>';
                                        html += '</div>';
                                        html += '</div>	';
                                        $('#zsld').html(html);
                                    }
                                    else if (param <= xclcy * 100) {//新材料产业
                                        level = dataArr[4] * 100 + '%'
                                        var html = '';
                                        html += '<div class="zsld-result">新材料产业</div>';
                                        html += '<ul class="zsld-ul">';
                                        html += '<li class="zsld-li clearfix"><span>上海市</span><div class="zsld-bar"><div style="width: 4rem" data-text="185"></div></div></li>';

                                        html += '</ul>';
                                        html += '<div class="zsld-company flex">';
                                        html += '<dl class="zsld-dl">';
                                        html += '<dt class="">产业明星企业</dt>';
                                        html += '<dd class="">上海辉成实业有限公司</dd>';
                                        html += '<dd class="">上海郎峰电子技术有限公司</dd>';
                                        html += '<dd class="">上海杰斐金属制品有限公司</dd>';
                                        html += '</dl>';
                                        html += '<dl class="zsld-dl">';
                                        //html += '<dt class="">产业主要投资机构</dt>';
                                        html += '</dl>';
                                        html += '</div>';
                                        html += '</div>';
                                        html += '</div>	';
                                        $('#zsld').html(html);
                                    }
                                    else if (param <= xnyqc * 100) {
                                        level = dataArr[5] * 100 + '%' //新能源汽车
                                        var html = '';
                                        html += '<div class="zsld-result">新能源产业</div>';
                                        html += '<ul class="zsld-ul">';
                                        html += '<li class="zsld-li clearfix"><span>上海市</span><div class="zsld-bar"><div style="width: 2rem" data-text="33"></div></div></li>';

                                        html += '</ul>';
                                        html += '<div class="zsld-company flex">';
                                        html += '<dl class="zsld-dl">';
                                        html += '<dt class="">产业明星企业</dt>';
                                        html += '<dd class="">上海雄淼船舶机械有限公司</dd>';
                                        html += '<dd class="">上海宏宇船舶有限公司</dd>';
                                        html += '<dd class="">上海铁纽电力工程有限公司</dd>';
                                        html += '</dl>';
                                        html += '<dl class="zsld-dl">';
                                        //html += '<dt class="">产业主要投资机构</dt>';
                                        html += '</dl>';
                                        html += '</div>';
                                        html += '</div>';
                                        html += '</div>';
                                        $('#zsld').html(html);
                                    }
                                    else if (param <= xydxx * 100) {
                                        level = dataArr[6] * 100 + '%'//新一代信息技术产业
                                        var html = '';
                                        html += '<div class="zsld-result">新一代信息技术产业</div>';
                                        html += '<ul class="zsld-ul">';
                                        html += '<li class="zsld-li clearfix"><span>上海市</span><div class="zsld-bar"><div style="width: 6rem" data-text="604"></div></div></li>';

                                        html += '</ul>';
                                        html += '<div class="zsld-company flex">';
                                        html += '<dl class="zsld-dl">';
                                        html += '<dt class="">产业明星企业</dt>';
                                        html += '<dd class="">上海桑磊互联网上网服务有限公司</dd>';
                                        html += '<dd class="">上海华夕网络科技有限公司</dd>';
                                        html += '<dd class="">上海偕氪有限公司</dd>';
                                        html += '</dl>';
                                        html += '<dl class="zsld-dl">';
                                        html += '<dt class="">产业主要投资机构</dt>';
                                        html += '<dd class="">上海遇象网络科技有限公司</dd>';
                                        html += '<dd class="">上海晚鲤网络科技有限公司</dd>';
                                        html += '<dd class="">上海车瑞信息科技有限公司</dd>';
                                        html += '</dl>';
                                        html += '</div>';
                                        html += '</div>';
                                        html += '</div>';
                                        $('#zsld').html(html);
                                    }
                                    else if (param <= swcy * 100) {
                                        level = dataArr[7] * 100 + '%'//生物产业
                                        var html = '';
                                        html += '<div class="zsld-result">生物产业</div>';
                                        html += '<ul class="zsld-ul">';
                                        html += '<li class="zsld-li clearfix"><span>上海市</span><div class="zsld-bar"><div style="width: 7rem" data-text="817"></div></div></li>';

                                        html += '</ul>';
                                        html += '<div class="zsld-company flex">';
                                        html += '<dl class="zsld-dl">';
                                        html += '<dt class="">产业明星企业</dt>';
                                        html += '<dd class="">韩佑利信息科技（上海）有限公司</dd>';
                                        html += '<dd class="">上海福贵生物科技有限公司</dd>';
                                        html += '<dd class="">上海诚竺生物科技有限公司</dd>';
                                        html += '</dl>';
                                        html += '<dl class="zsld-dl">';
                                        //html += '<dt class="">产业主要投资机构</dt>';
                                        html += '</dl>';
                                        html += '</div>';
                                        html += '</div>';
                                        html += '</div>	';
                                        $('#zsld').html(html);
                                    }
                                    else if (param <= xgfwy * 100) {
                                        level = dataArr[8] * 100 + '%'//相关服务业
                                        var html = '';
                                        html += '<div class="zsld-result">相关服务业</div>';
                                        html += '<ul class="zsld-ul">';
                                        html += '<li class="zsld-li clearfix"><span>上海市</span><div class="zsld-bar"><div style="width: 1rem" data-text="14"></div></div></li>';

                                        html += '</ul>';
                                        html += '<div class="zsld-company flex">';
                                        html += '<dl class="zsld-dl">';
                                        html += '<dt class="">产业明星企业</dt>';
                                        html += '<dd class="">上海浦海测绘有限公司</dd>';
                                        html += '<dd class="">上海露磊电脑技术有限公司</dd>';
                                        html += '<dd class="">上海井园市政工程有限公司</dd>';
                                        html += '</dl>';
                                        html += '<dl class="zsld-dl">';
                                        //html += '<dt class="">产业主要投资机构</dt>';
                                        html += '</dl>';
                                        html += '</div>';
                                        html += '</div>';
                                        html += '</div>';
                                        $('#zsld').html(html);
                                    }
                                    else {
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

                }, 300);
            })
        
        },
        
        //招商漏斗
        zsFunnel: function ()
        {
            if ($("#qyzhpfldt-chart").length <= 0) { return false; }
            var qyzhpfldtChart = document.getElementById('qyzhpfldt-chart');
            var myChartqyzhpfldt = echarts.init(qyzhpfldtChart);

            qyzhpfldtOption = {
                title: {

                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    show: false
                },
                radar: [
                    {
                        indicator: [
                            { text: '产业聚集性', max: 100 },
                            { text: '产业前瞻性', max: 100 },
                            { text: '产业均衡性', max: 100 },
                            { text: '技术领先性', max: 100 },
                            { text: '规模竞争力', max: 100 }
                        ],
                        name: {
                            formatter: '{value}',
                            textStyle: {
                                color: '#0ff',
                                fontSize: 20
                            }
                        },
                        radius: 80,
                        center: ['25%', '64%'],
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
                    },
                    {
                        indicator: [
                            { text: '污染防治', max: 100 },
                            { text: '污染控制', max: 100 },
                            { text: '环境管理', max: 100 },
                            { text: '生态保护', max: 100 }
                        ],
                        name: {
                            formatter: '{value}',
                            textStyle: {
                                color: '#0ff',
                                fontSize: 20
                            }
                        },
                        radius: 80,
                        center: ['75%', '64%'],
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
                        type: 'radar',
                        tooltip: {
                            trigger: 'item'
                        },
                        itemStyle: {
                            normal: {
                                areaStyle: {
                                    type: 'default'
                                }
                            }
                        },
                        data: [
                            {
                                value: [70, 65, 80, 75, 78],
                                areaStyle: {
                                    normal: {
                                        color: 'rgba(235,182,0,.4)'
                                    }
                                },
                                lineStyle: {
                                    normal: {
                                        width: 4,
                                        color: "rgba(235,182,0,1)"
                                    }
                                }
                            }
                        ],
                    },
                    {
                        type: 'radar',
                        radarIndex: 1,
                        tooltip: {
                            trigger: 'item'
                        },
                        itemStyle: {
                            normal: {
                                areaStyle: {
                                    type: 'default'
                                }
                            }
                        },
                        data: [
                            {
                                value: [60, 73, 85, 40],
                                areaStyle: {
                                    normal: {
                                        color: 'rgba(26,234,187,.4)'
                                    }
                                },
                                lineStyle: {
                                    normal: {
                                        width: 4,
                                        color: "rgba(26,234,187,1)"
                                    }
                                }

                            }
                        ]
                    },


                ]
            };
            myChartqyzhpfldt.setOption(qyzhpfldtOption);



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
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    }
                },
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
            $("#GbigechartHead").html('停车服务');
            if ($("#tcfw-chart").length <= 0) { return false; }
            var tcfwdata = [];
            for (var i = 1; i < 100; i++) {
                tcfwdata.push(Math.round((Math.random() * 5000 + 3000)));
            }
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
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    }
                },
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
            if (require("g_Echart").mybigChart != null && require("g_Echart").mybigChart != "" && require("g_Echart").mybigChart != undefined) {
                require("g_Echart").mybigChart.dispose();
            }
            require("g_Echart").mybigChart = echarts.init(document.getElementById('Gbig-chart'));
            require("g_Echart").mybigChart.setOption(tcfwOption);


        },
        //无人接驳车
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
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    }
                },
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
                          opacity: .1,
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
        //大无人接驳车
        bigwrjsjbc: function () {
            $("#GbigechartHead").html('无人接驳车');
            if ($("#wrjsjbc-chart").length <= 0) { return false; }
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
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    }
                },
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
                          opacity: .1,
                      },
                      lineStyle: {
                          width: 2,
                      },
                      symbolSize: 10,
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
        zhwy:function()
        {
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
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    }
                },
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
            $("#GbigechartHead").html('智慧物业');
            if ($("#zhwy-chart").length <= 0) { return false; }
            var zhwydata = [];
            for (var i = 1; i < 100; i++) {
                zhwydata.push(Math.round((Math.random() * 70)));
            }
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
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    }
                },
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
            if (require("g_Echart").mybigChart != null && require("g_Echart").mybigChart != "" && require("g_Echart").mybigChart != undefined) {
                require("g_Echart").mybigChart.dispose();
            }
            require("g_Echart").mybigChart = echarts.init(document.getElementById('Gbig-chart'));
            require("g_Echart").mybigChart.setOption(zhwyOption);
        },
        //智慧能耗
        zhnh:function(){
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
            $("#GbigechartHead").html('智慧能耗');
            if ($("#zhnh-chart").length <= 0) { return false; }
            var zhnhdata = [];
            for (var i = 0; i < 7; i++) {
                zhnhdata.push(Math.round((Math.random() * 60 + 10)));
            }
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
            if (require("g_Echart").mybigChart != null && require("g_Echart").mybigChart != "" && require("g_Echart").mybigChart != undefined) {
                require("g_Echart").mybigChart.dispose();
            }
            require("g_Echart").mybigChart = echarts.init(document.getElementById('Gbig-chart'));
            require("g_Echart").mybigChart.setOption(zhnhOption);
        },
        //事件统计
        sjtj: function () {
            //g_EchartAjax.sjtj(function (result) {
            //    var data = rerquire("g_Echart").sjtjData
            //    var html = '';
            //    for (var i = 0; i < data.length; i++) {
            //        html += '<li class="cy-ly-rr1-li active">';
            //        html += '<div class="cy-ly-rr1-lidiv clearfix active">';
            //        html += '<span class="cy-ly-rr1-num">00'+i+'</span>';
            //        html += '<span class="cy-ly-rr1-name">'+data[i].eventName+'+<em>'+data[i].solver+'</em></span>';
            //        html += '<span class="cy-ly-rr1-date">2019/02/01</span>';
            //        html += '</div>';
            //        html += '<div class="cy-ly-rr1-state">' + data[i].status + '</div>';
            //        html += '</li>';
            //    }
            //    $('.cy-ly-rr1-ul').html(html)
            //})
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