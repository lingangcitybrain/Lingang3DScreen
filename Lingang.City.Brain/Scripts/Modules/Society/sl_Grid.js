define(["config", "common", "util", "s_layerMenuData", "s_EchartAjax"], function (con, com, util, s_layerMenuData, s_EchartAjax) {
    /**************************************网格*************************************/
    var gridTotalNum = 0; //主责部门事件数量总数
    var gridTop15Num = 0; //主责部门Top15事件数量

    var TaskTypeDataPercent = []; //处置案件类别占百分比 

    return {
        oneLevelData: null,//1级网格线
        areaListData: null,//3级网格区域
        poiListData: null,

        POIData:null,
        loadGridInfo: function () {
            com.LayerFlyto(281, function () {
                
            });
            require("sl_Grid").loadGridPOI();
                require("sl_Grid").loadGridOneLevelLine();
                require("sl_Grid").loadGridArea();
                require("sl_Grid").loadGridLine();
        },
        //加载POI
        loadGridPOI: function (){
            this.areaListData = s_layerMenuData.GirdData;
            var areaName = con.AreaName;
            for (var i = 0; i < this.areaListData.length; i++) {
                var data = this.areaListData[i];
                var nodename = "girdpoi" + data.id;
               
                var node = map.getSceneNode(con.AreaName + "/" + nodename);
                if (node) {
                    node.setVisible(1);
                }
                else {
                    var iconSize = Q3D.vector2(150, 150);
                    if (data.poipos != "") {
                        var pos = data.poipos + ",0";
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
                                Text: "",//data.textname,
                                Icon: "",
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

                            },
                        }
                        map.createPOI(areaName + "/" + nodename, options)
                    }
                }
            }
           
        },

        //一级网格区域画线
        loadGridOneLevelLine: function () {
            this.oneLevelData = s_layerMenuData.GirdOneLevelData;
            var AreaName = con.AreaName;
            for (var i = 0; i < this.oneLevelData.length; i++) {
                var id = this.oneLevelData[i].id
                var posstr = this.oneLevelData[i].pos
                var linenodename = "girdonelevel" + id;
                var lineArray = [];
                var node = map.getSceneNode(con.AreaName + "/" + linenodename);
                if (node) {
                    node.setVisible(1);
                }
                else {
                    if (posstr.indexOf("|") > -1) {
                        var str = posstr.split("|")
                        for (var k = 0; k < str.length; k++) {
                            pos = str[k] + "," + 100;
                            pos = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(AreaName))
                            lineArray.push(pos)
                        }
                        var nodePath = con.AreaName + "/" + linenodename;
                        var createOptions = {
                            //Material: "Material/linered.mtr",
                            Material: null,
                            SpecialTransparent: true, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                            LinePoints: [lineArray], //一维数组,由Vector3坐标组成
                            OffsetDist: [],//偏移距离，单位米，用于贝塞尔曲线的控制点计算
                            LineOptions: {
                                Subdivision: 20, //设置生成曲线细分程度
                                LineWidth: 4,
                                WrapLen: 10,
                                //以下用于动态创建的材质
                                Color: Q3D.colourValue("#000079", 1), //线的颜色
                                Alpha: 1, //线的透明度
                            },
                            OnLineCreated: null
                        }

                        map.createPolyLine(nodePath, createOptions);

                    }
                }
            }
        },
        //隐藏一级网格区域
        clearGridOneLevelLine: function () {
            var areaname = con.AreaName;
            if (require("sl_Grid").oneLevelData != null) {
                for (var i = 0; i < require("sl_Grid").oneLevelData.length; i++) {
                    var nodename = "girdonelevel" + require("sl_Grid").oneLevelData[i].id;
                    var node = map.getSceneNode(areaname + "/" + nodename);
                    if (node) {
                        //map.getArea(areaname).destroySceneNode(nodename);
                        node.setVisible(0);
                    }
                }
            }
        },
        //画三级区域
        loadGridArea: function () {
            this.areaListData = s_layerMenuData.GirdData;


            var AreaName = con.AreaName;
            for (var i = 0; i < this.areaListData.length; i++) {
                var id = this.areaListData[i].id
                var areacolor = this.areaListData[i].areacolor
                var posstr = this.areaListData[i].pos
                var nodename = "girdarea" + id;
                var lineArray = [];
                var node = map.getSceneNode(con.AreaName + "/" + nodename);
                if (node) {
                    node.setVisible(1);
                }
                else {
                    if (posstr.indexOf("|") > -1) {
                        var str = posstr.split("|")
                        for (var k = 0; k < str.length; k++) {
                            pos = str[k] + "," + 100;
                            pos = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(AreaName))
                            lineArray.push(pos)
                        }
                        //画多边形
                        map.createPolygon(con.AreaName + "/" + nodename, {
                            Material: null,
                            SpecialTransparent: false, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                            Points: lineArray,//注意要剔除收尾相等的点
                            Color: Q3D.colourValue(areacolor, 1),
                            Alpha: 0.1, //填充透明度
                            Direction: 1, //默认逆时针方向
                            OnPolygonCreated: null
                        });
                       
                    }
                }
            }
        },
        //区域三级画线
        loadGridLine: function () {
            this.areaListData = s_layerMenuData.GirdData;
            var AreaName = con.AreaName;
            for (var i = 0; i < this.areaListData.length; i++) {
                var id = this.areaListData[i].id
                var areacolor = this.areaListData[i].areacolor
                var posstr = this.areaListData[i].pos
                var linenodename = "girdarealine" + id;
                var lineArray = [];
                var node = map.getSceneNode(con.AreaName + "/" + linenodename);
                if (node) {
                    node.setVisible(1);
                }
                else {
                    if (posstr.indexOf("|") > -1) {
                        var str = posstr.split("|")
                        for (var k = 0; k < str.length; k++) {
                            pos = str[k] + "," + 100;
                            pos = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(AreaName))
                            lineArray.push(pos)
                        }
                        var nodePath = con.AreaName + "/" + linenodename;
                        var createOptions = {
                            //Material: "Material/linered.mtr",
                            Material: null,
                            SpecialTransparent: true, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                            LinePoints: [lineArray], //一维数组,由Vector3坐标组成
                            OffsetDist: [],//偏移距离，单位米，用于贝塞尔曲线的控制点计算
                            LineOptions: {
                                Subdivision: 20, //设置生成曲线细分程度
                                LineWidth: 1,
                                WrapLen: 10,
                                //以下用于动态创建的材质
                                Color: Q3D.colourValue("#006000", 1), //线的颜色
                                Alpha: 1, //线的透明度
                            },
                            OnLineCreated: null
                        }

                        map.createPolyLine(nodePath, createOptions);

                    }
                }
            }
        },
        //隐藏三级多边形
        clearDecal: function () {
            var areaname = con.AreaName;
            if (require("sl_Grid").areaListData != null) {
                for (var i = 0; i < require("sl_Grid").areaListData.length; i++) {
                    var nodename = "girdarea" + require("sl_Grid").areaListData[i].id;
                    var node = map.getSceneNode(areaname + "/" + nodename);
                    if (node) {
                        //map.getArea(areaname).destroySceneNode(nodename);
                        node.setVisible(0);
                    }

                    var nodelinename = "girdarealine" + require("sl_Grid").areaListData[i].id;
                    var nodeline = map.getSceneNode(areaname + "/" + nodelinename);
                    if (nodeline) {
                        //map.getArea(areaname).destroySceneNode(nodelinename);
                        nodeline.setVisible(0);
                    }
                }
            }
        },
        //隐藏三级多边形
        clearPOI: function () {
            var areaname = con.AreaName;
            if (require("sl_Grid").areaListData != null) {
                for (var i = 0; i < require("sl_Grid").areaListData.length; i++) {
                    var nodename = "girdpoi" + require("sl_Grid").areaListData[i].id;
                    var node = map.getSceneNode(areaname + "/" + nodename);
                    if (node) {
                        //map.getArea(areaname).destroySceneNode(nodename);
                        node.setVisible(0);
                    }
                }
            }
        },
        
        //加载第二列的div
        loadLeftSecond: function () {
            this.loadLeftSecond1();
            this.loadLeftSecond2();
            this.loadLeftSecond3();

            //左侧第1列第4个
            var optionL14 = {
                aniDom: "#left02_04",
                htmlDom: "#left_second_04",
                url: '',
                leftOrRight: 'left'
            }
            com.UIControlAni(optionL14, null);

        },
        //加载第二列的div1
        loadLeftSecond1: function () {
            var option = {
                aniDom: "#left02_01",
                htmlDom: "#left_second_01",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventGrid1.html'
            }
            com.UIControlAni(option, function () {
                require("sl_Grid").loadDealTaskNumData();
            });
        },
        //加载第二列的div2
        loadLeftSecond2: function () {
            var option = {
                aniDom: "#left02_02",
                htmlDom: "#left_second_02",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventGrid2.html'
            }
            com.UIControlAni(option, function () {
                require("sl_Grid").loadDealTaskTypeData();
                
            });
        },
        //加载第二列的div3
        loadLeftSecond3: function () {
            var option = {
                aniDom: "#left02_03",
                htmlDom: "#left_second_03",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventGrid3.html'
            }
            com.UIControlAni(option, function () {
               // require("sl_Grid").loadGridCZZZBMchart();
                require("sl_Grid").gridData();
                require("sl_IOT").Scrolldiv();
            });
        },

        //处置案件数量
        loadDealTaskNumData: function () {
            s_EchartAjax.getDealTaskNumData(function (result) {
                if (require("s_Echart").dealTaskNumData == null) { return false; }
                var data = require("s_Echart").dealTaskNumData;
                data = data.data;
                
                var czajslxAxisData = [];
                var czajslxAxisDataMax = [];
                var czajslSeriesData = [];
                for (var i = 0; i < data.length; i++) {
                    czajslxAxisData.push(data[i].months.replace("-","/"));
                    czajslSeriesData.push(data[i].counts);
                }
                czajslxAxisDataMax = parseInt(Math.max.apply(null, czajslSeriesData) * 1.1);


                //图表
                if ($("#czajsl-chart").length <= 0) { return false; }
                var czajslChart = document.getElementById('czajsl-chart');
                var myChartczajsl = echarts.init(czajslChart);
                czajslOption = {
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
                        height: "88%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
                    },
                    xAxis: {
                        type: 'category',
                        data: czajslxAxisData,
                        boundaryGap: ['10%', '10%'],
                        axisTick: {
                            show: true,
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
                        name: "(记录数)",
                        nameTextStyle: {
                            color: "#00d7fe",
                            fontSize: 18,
                            align: 'center',
                        },
                        axisTick: {
                            show: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: "rgba(80,172,254,.2)",
                            }
                        },
                        interval: 1000,
                        min: 0,
                        max: czajslxAxisDataMax,
                        axisLabel: {
                            textStyle: {
                                fontSize: 22,
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
                            type: 'line',
                            //smooth:true,
                            color: "rgba(7,196,230,1)",
                            areaStyle: {
                                opacity: .1,
                            },
                            lineStyle: {
                                width: 2,
                            },
                            symbolSize: 4,
                            data: czajslSeriesData,
                        }
                    ]
                };
                myChartczajsl.setOption(czajslOption);

            });
        },
        bigLoadDealTaskNumData: function () {
            s_EchartAjax.getDealTaskNumData(function (result) {
                if (require("s_Echart").dealTaskNumData == null) { return false; }
                var data = require("s_Echart").dealTaskNumData;
                data = data.data;

                var czajslxAxisData = [];
                var czajslxAxisDataMax = [];
                var czajslSeriesData = [];
                for (var i = 0; i < data.length; i++) {
                    czajslxAxisData.push(data[i].months.replace("-", "/"));
                    czajslSeriesData.push(data[i].counts);
                }
                czajslxAxisDataMax = parseInt(Math.max.apply(null, czajslSeriesData) * 1.1);

                //图表
                if ($("#czajsl-chart").length <= 0) { return false; }
                $("#bigechartHead").html("处置案件数量");
                option = {
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
                            fontSize: 50,
                        }
                    },
                    grid: {
                        left: '5%',   // grid 组件离容器左侧的距离。
                        right: '5%',
                        bottom: '8%',
                        height: "86%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
                    },
                    xAxis: {
                        type: 'category',
                        data: czajslxAxisData,
                        boundaryGap: ['10%', '10%'],
                        axisTick: {
                            show: true,
                        },
                        axisLine: {
                            lineStyle: {
                                width: 4,
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
                                width: 4,
                                color: "rgba(80,172,254,.2)"
                            }
                        }
                    },
                    yAxis: {
                        axisTick: {
                            show: true,
                        },
                        axisLine: {
                            lineStyle: {
                                width: 4,
                                color: "rgba(80,172,254,.2)",
                            }
                        },
                        interval: 1000,
                        min: 0,
                        max: czajslxAxisDataMax,
                        axisLabel: {
                            textStyle: {
                                fontSize: 50,
                                color: "#00d7fe",
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                width: 4,
                                color: "rgba(80,172,254,.2)"
                            }
                        }
                    },
                    series: [
                        {
                            type: 'line',
                            //smooth:true,
                            color: "rgba(7,196,230,1)",
                            areaStyle: {
                                opacity: .1,
                            },
                            lineStyle: {
                                width: 10,
                            },
                            symbolSize: 20,
                            data: czajslSeriesData,
                        }
                    ]
                };
                if (require("s_Echart").mybigChart != null && require("s_Echart").mybigChart != "" && require("s_Echart").mybigChart != undefined) {
                    require("s_Echart").mybigChart.dispose();
                }
                require("s_Echart").mybigChart = echarts.init(document.getElementById('Big-chart'));
                require("s_Echart").mybigChart.setOption(option);
            });
        },

        //处置案件类别
        loadDealTaskTypeData: function () {
            s_EchartAjax.getDealTaskTypeData(function (result) {
                if (require("s_Echart").dealTaskTypeData == null) { return false; }
                var data = require("s_Echart").dealTaskTypeData;
                data = data.data;
                
                var TaskTypeData = []; //各类别数据
                var TaskTypeDataSum = 0; //各类别数据总和

                for (var i = 0; i < data.length; i++) {
                    TaskTypeData.push(Number(data[i].counts));
                    TaskTypeDataSum += Number(data[i].counts);
                }
                TaskTypeData.sort(function (a, b) { return b - a; }) //排序  从大到小
                TaskTypeDataPercent = [];  //占百分比 全局变量，便于下面引用
                for (var i = 0; i < data.length; i++) {
                    TaskTypeDataPercent.push(parseInt(TaskTypeData[i] / TaskTypeDataSum * 100));
                }

                var TaskTypeDataType = [];  //前三的类别
                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < TaskTypeData.length; j++) {
                        if (TaskTypeData[j] === Number(data[i].counts)) { TaskTypeDataType.push(data[i].infotypename) }
                    }
                }

                // 加载数据
                for (var i = 0; i < TaskTypeDataType.length; i++) {
                    $("#dealtasktype>li").eq(i).find(".czajlb-circlediv").attr("data-text", TaskTypeDataPercent[i] + '%')
                    $("#dealtasktype>li").eq(i).find(".item-r-data").html(TaskTypeData[i])
                    
                    
                }

                require("sl_Grid").loadCirclediv(TaskTypeDataPercent);

            });

        },

        loadCirclediv: function (TaskTypeDataPercent) {
            // 摄像头圆圈
            if ($("body").width() == 7680) {
                $("html").css({ fontSize: "90px" });
                $(".czajlb-circlediv").each(function () { $(this).empty();})
                com.loopFun($('.czajlb-circlediv')[0], TaskTypeDataPercent[0], '#1f2533', '#eda637', 'transparent', '20px', 18, 36, 1000);
                com.loopFun($('.czajlb-circlediv')[1], TaskTypeDataPercent[1], '#1f2533', '#05c1f8', 'transparent', '20px', 18, 36, 1000);
                com.loopFun($('.czajlb-circlediv')[2], TaskTypeDataPercent[2], '#1f2533', '#55b400', 'transparent', '20px', 18, 36, 1000);
            } else if ($("body").width() == 11520) {
                $("html").css({ fontSize: "160px" });
                $(".czajlb-circlediv").each(function () { $(this).empty(); })
                com.loopFun($('.czajlb-circlediv')[0], TaskTypeDataPercent[0], '#1f2533', '#eda637', 'transparent', '20px', 25, 54, 1000);
                com.loopFun($('.czajlb-circlediv')[1], TaskTypeDataPercent[1], '#1f2533', '#05c1f8', 'transparent', '20px', 25, 54, 1000);
                com.loopFun($('.czajlb-circlediv')[2], TaskTypeDataPercent[2], '#1f2533', '#55b400', 'transparent', '20px', 25, 54, 1000);
            }
        },
 
        bigLoadGridCZZZBMchart: function () {
            if ($("#czajsl-chart").length <= 0) { return false; }
            $("#bigechartHead").html("处置主责部门");
            option = {
                tooltip: {
                    show: false,
                    trigger: 'item',
                    textStyle: {
                        fontSize:70,
                    },
                    formatter: "{b} : {c} ({d}%)"
                },
                color: ["#0b6ccd", "#eb5501"],
                legend: {
                    show:false,
                },
                grid: {
                    left: '5%',   // grid 组件离容器左侧的距离。
                    right: '5%',
                    bottom: '5%',
                    height: "86%",
                    containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
                },
                series: [
	                {
	                    type: 'pie',
	                    radius: '58%',
	                    center: ['50%', '50%'],
	                    data: [
	            	        { value: gridTotalNum - gridTop15Num, name: "其它", selected: true },
	            	        { value: gridTop15Num, name: "TOP15" }
	                    ],
	                    selectedOffset: 25,
	                    label: {
                            fontSize:80,
	                        formatter: '{b|{b}}\n{c|{c}}({per|{d}}%)',
                            padding: [0, -500],
                            color: "#fff",
                            rich: {
                                b: {
                                    fontSize: 80,
                                    lineHeight: 80,
                                    color: "#05c1f8",
                                },
                                c: {
                                    fontSize: 80,
                                    lineHeight: 80,
                                    color: "#f7b001",
                                    fontFamily: "Aerial",
                                },
                                per: {
                                    fontSize: 80,
                                    lineHeight: 80,
                                    color: "#fff",
                                    fontFamily: "Aerial",
                                },

                            }
	                    },
	                    labelLine: {
	                        normal: {
	                            length: 40,
	                            length2: 500,
	                            lineStyle: {
	                                width: 8,
	                                color: "#fff"
	                            }
	                        }
	                    },
	                    itemStyle: {
	                        show: false,
	                        emphasis: {
	                            shadowBlur: 10,
	                            shadowOffsetX: 0,
	                            shadowColor: 'rgba(0, 0, 0, 0.5)'
	                        }
	                    }
	                }
                ]
            };

            if (require("s_Echart").mybigChart != null && require("s_Echart").mybigChart != "" && require("s_Echart").mybigChart != undefined) {
                require("s_Echart").mybigChart.dispose();
            }
            require("s_Echart").mybigChart = echarts.init(document.getElementById('Big-chart'));
            require("s_Echart").mybigChart.setOption(option);
        },

        gridData: function () {
            s_EchartAjax.getSocietyZzbm(function (result) {
                if (require("s_Echart").zzbmData == null) { return false; }
                var data = require("s_Echart").zzbmData;
                //data = data.data.dealDeptList;   //中台地址接口直接返回数组  20190714

                gridTotalNum = 0; //主责部门事件数量总数
                gridTop15Num = 0; //主责部门Top15事件数量
                var top15NumRate = 0; 
                var elseNumRate = 0;
                //主责部门右侧列表
                for (var i = 0; i < data.length; i++) {
                    $("#grid-czzzbm").append("<li><span>" + data[i].executeDeptname + "</span><em>" + data[i].taskNums + "</em></li>");

                    gridTotalNum += Number(data[i].taskNums);
                    if (i <= 15 && data[i]) {
                        gridTop15Num += Number(data[i].taskNums);
                    }
                }

                top15NumRate = gridTop15Num / gridTotalNum * 100; //没有百分号
                elseNumRate = parseInt(100 - top15NumRate);

                // 加载图表
                if ($("#czajsl-chart").length <= 0) { return false; }
                var czzzbmChart = document.getElementById('czzzbm-chart');
                var myChartczzzbm = echarts.init(czzzbmChart);
                czzzbmOption = {
                    tooltip: {
                        show: false,
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    color: ["#0b6ccd", "#eb5501"],
                    legend: {
                        show: false,
                    },
                    grid: {
                        left: '1%',  
                        right: '1%',
                        bottom: '2%',
                        height: "94%",
                        containLabel: true   
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: '58%',
                            center: ['50%', '50%'],
                            data: [
                                { value: gridTotalNum - gridTop15Num, selected: true },
                                { value: gridTotalNum }
                            ],
                            selectedOffset: 25,
                            label: {
                                fontSize: 22
                            },
                            labelLine: {
                                show: false,
                            },
                            itemStyle: {
                                show: false,
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                myChartczzzbm.setOption(czzzbmOption);

                $("#zzbm-top15").append('<div class=\"czzzbm-legendtitle\"><span>TOP15</span><em>(' + top15NumRate
                    + '%)</em></div><div class=\"czzzbm-legenddata testAerial\">' + gridTop15Num + '</div>');

                $("#zzbm-else").append('<div class=\"czzzbm-legendtitle\"><span>其他</span><em>(' + elseNumRate
                    + '%)</em></div><div class=\"czzzbm-legenddata testAerial\">' + (gridTotalNum - gridTop15Num) + '</div>');

            });
        },

        //清空
        Revert: function () {
            require("sl_Grid").clearGridOneLevelLine();//隐藏一级网格
            require("sl_Grid").clearDecal();         //隐藏三级网格
            require("sl_Grid").clearPOI();
        }
    }
    });