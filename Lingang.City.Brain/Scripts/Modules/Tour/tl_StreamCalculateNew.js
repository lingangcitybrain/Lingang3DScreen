define(["config", "common", "util"], function (con, com, util) {
    return {
        POIData: null,
        linemtr: null,
        IntervalB: null,
        IntervalS: new util.HashMap(),  
        peopleCountTotal: [], //人流预测总数值
        k: 0,  //人流预测轮播当前值
        ListData: new util.HashMap(), //人流预测信息缓存

        flowRateData: null,
        loadStream: function () {
            com.LayerFlyto(8); //飞到默认时口

            require("t_LayerMenuAjax").getFlowRatePredictionData(function (result) {
                flowRateData = result;
                require("common").openCloseBigDigital('close');

                this.getPeopleCountTotal();
                this.startPredictionShow();
            });
        },

        //清理已划光线
        lightLineClose: function () {

        },

        getPeopleCountTotal: function () {
            peopleCountTotal = [248, 1026, 1232, 2116, 4507]; //todo
        },

        //开始人流预测
        startPredictionShow: function () {
            var url = con.HtmlUrl + 'TourNew/Center_02.html';
            require(['text!' + url], function (template) {
                $("#center_02").html(template);
                $("#center_02").show('drop', 1000); //左侧

                //人流量预测数值进行轮播
                this.k = 0;

                this.lightLineClose();
                require("tl_StreamCalculate").alternatePlay();
                require("tl_StreamCalculate").IntervalB = setInterval(function () {
                    require("tl_StreamCalculate").alternatePlay();
                }, 7000);
            });
        },

        //人流预测轮播
        alternatePlay: function () {
            this.lightLineClose();

            // 15分, 30分,1小时，6小时 ，明日
            if (this.k >= this.peopleCountTotal.length) {
                this.k = 0;
            }
            var count = this.peopleCountTotal[this.k];
            var lastcount = 0;
            if (this.k != 0) {
                lastcount = this.peopleCountTotal[this.k - 1];
            }

            ///////////////////////////////显示相应的动线///////////////////////////////////////////////////////
            this.lineControl(this.k + 1);

            /////////////////////////////////////////////////加载对应的POI///////////////////////////////////////
            this.hidePoiNew();
            this.loadPoiNew(this.k + 1);

            ///////////////////////////////////////飞到对应的视口///////////////////////////////////////////////
            this.minflyto(this.k + 1);

            ////////////////////////////////////////////显示表格///////////////////////////////////////////////////////
            this.wlrlycChartFun(this.k);

            ////////////////////////////////////////////POI报警提醒/////////////////////////////////////////////////////
            this.warmPoiJump(count);

            $(".forecast-pernum-ul").children().siblings().removeClass('active');
            $(".forecast-pernum-item").eq(this.k).addClass("active")

            this.k = this.k + 1;
        },

        //加载相应的POI数据
        loadPoi: function () {
            this.POIData = require("t_LayerMenuData").StationData;

            var areaName = con.AreaName;
            var pois = [];
            for (var i = 0; i < this.POIData.length; i++) {

                var row = this.POIData[i];
                var poiName = "POIStream_" + row.id; //POIStream_1
                var icon = this.getIcon(row.stationtype) //"Texture/Common/camera.png";
                var iconSize = Q3D.vector2(54, 44);
                if (row.stationtype == "4") {
                    iconSize = Q3D.vector2(140, 202);
                }


                var pos = row.pos;
                var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

                var poi = {
                    POIName: poiName,
                    Position: position,
                    Text: "",
                    Icon: icon,
                    IconSize: iconSize
                };
                var node = map.getSceneNode(areaName + "/" + poiName);
                if (node) {
                    node.setVisible(1); //显示当前父节点
                } else {
                    pois.push(poi);
                }
            }
            com.InitPois(areaName, pois);
        },

        //清空摄像头POI
        clearPOI: function () {
            var areaName = con.AreaName;
            var data = this.POIData;
            //设置POI隐藏
            if (data != null) {
                for (var i = 0; i < data.length; i++) {

                    var poiname = "POIStream_" + data[i].id;
                    var node = map.getSceneNode(areaName + "/" + poiname);
                    if (node) {
                        node.setVisible(0);
                    }
                }

                this.POIData = null;
            }
        },

        //图表数值播放
        wlrlycChartFun: function (wlrlycK) {
            var xAxisText = ['', '15分钟', '30分钟', '60分钟', '360分钟', '一天', ''];
            // var yAxisText = ['', 1523, 4512, 7869, 30151, 31267, ''];
            var yAxisText = ['', 248, 1026, 1232, 2116, 4502, ''];
            var xAxisData = [];
            var seriesData = [];


            //yAxisText重新赋值
            yAxisText = []
            yAxisText.push('')
            for (var i = 0; i < this.peopleCountTotal.length; i++) {
                yAxisText.push(this.peopleCountTotal[i])
            }
            yAxisText.push('')


            var wlrlyc = {
                seriesDataNormalOption: function (value) {
                    return {
                        value: value,
                        symbol: "circle",
                        symbolSize: 30,
                        itemStyle: {
                            shadowColor: "rgba(203,87,252,1)",
                            shadowBlur: 25,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            color: {
                                type: 'radial',
                                x: .5,
                                y: .5,
                                x2: 0,
                                y2: 0,
                                colorStops: [{
                                    offset: .2,
                                    color: '#c275fe'
                                }, {
                                    offset: 1,
                                    color: '#4d0784'
                                }],
                                global: false
                            }
                        },
                        label: {
                            show: true,
                            offset: [0, -10],
                            formatter: '{c|{c}}',
                            rich: {
                                c: {
                                    color: "#af6eff",
                                    fontSize: 60,
                                    borderRadius: 4,
                                    shadowColor: "rgba(158,110,255,.75)",
                                    shadowBlur: 30,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 0,
                                    padding: [15, 20],
                                    backgroundColor: "rgba(1,14,55,.8)",
                                }
                            }
                        }
                    }
                },
                seriesDataWarnOption: function (value, wlrlycWarnLevel, wlrlycWarnLevelColor, wlrlycWarnIcon) {
                    return {
                        value: value,
                        symbol: "circle",
                        symbolSize: 30,
                        itemStyle: {
                            shadowColor: wlrlycWarnLevelColor,
                            shadowBlur: 25,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            color: {
                                type: 'radial',
                                x: .5,
                                y: .5,
                                x2: 0,
                                y2: 0,
                                colorStops: [{
                                    // offset: .2, color: '#c275fe' 
                                    offset: .2,
                                    color: wlrlycWarnLevelColor
                                }, {
                                    offset: 1,
                                    color: '#4d0784'
                                    //offset: 1, color: wlrlycWarnLevelColor 
                                }],
                                global: false
                            }
                        },
                        label: {
                            show: true,
                            offset: [0, -10],
                            // formatter: '{c|{c}}',

                            formatter: [
                                '{wlrlycWarnIcon|} {wlrlycWarnLevel|' + wlrlycWarnLevel + '}',
                                '{hr|}',
                                '{c|{c}}'
                            ].join('\n'),

                            rich: {
                                wlrlycWarnIcon: {
                                    width: 40,
                                    height: 33,
                                    align: "center",
                                    backgroundColor: {
                                        image: wlrlycWarnIcon,
                                    },
                                },
                                wlrlycWarnLevel: {
                                    fontSize: 35,
                                    align: "center",
                                    color: wlrlycWarnLevelColor,
                                },
                                hr: {
                                    height: 20
                                },
                                c: {
                                    color: wlrlycWarnLevelColor,
                                    fontSize: 60,
                                    borderRadius: 4,
                                    shadowColor: wlrlycWarnLevelColor,
                                    shadowBlur: 30,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 0,
                                    padding: [15, 20],
                                    backgroundColor: "rgba(1,14,55,.8)",
                                }
                            }
                        }
                    }
                },
            }

            var wlrlycWarnLevel = "";
            var wlrlycWarnLevelColor = "";
            var wlrlycWarnIcon = '';
            var wlrlycWarnIcon1 = '../Content/images/yqyj-hart-warn-icon1.png';
            var wlrlycWarnIcon2 = '../Content/images/yqyj-hart-warn-icon2.png';
            var wlrlycWarnIcon3 = '../Content/images/yqyj-hart-warn-icon3.png';

            var xAxisThisDataLabel = '';
            var wlrlycLoopTimer = null;
            var wlrlycLoopIndex = wlrlycK;

            var wlrlycChart = document.getElementById('wlrlyc-chart');
            var myChartwlrlyc = echarts.init(wlrlycChart);

            //定时器
            //wlrlycLoopTimer = setTimeout(function(){
            //    clearTimeout(wlrlycLoopTimer);
            //    wlrlycLoopTimerFun()
            //}, 1500)

            wlrlycLoopTimerFun()

            function wlrlycLoopTimerFun() {

                wlrlycLoopIndex++;
                wlrlycLoopIndex = wlrlycLoopIndex < xAxisText.length - 1 ? wlrlycLoopIndex : 1;

                for (var i = 1; i < xAxisText.length - 1; i++) {

                    if (yAxisText[wlrlycLoopIndex] <= 28000) {
                        wlrlycWarnLevel = "";
                        wlrlycWarnLevelColor = "#af6eff"
                    } else if (yAxisText[wlrlycLoopIndex] <= 33000) {
                        wlrlycWarnLevel = "三级预警";
                        wlrlycWarnLevelColor = "#fff000"
                        wlrlycWarnIcon = wlrlycWarnIcon1;
                    } else if (yAxisText[wlrlycLoopIndex] <= 45000) {
                        wlrlycWarnLevel = "二级预警";
                        wlrlycWarnLevelColor = "#ff7700"
                        wlrlycWarnIcon = wlrlycWarnIcon2;
                    } else {
                        wlrlycWarnLevel = "一级预警";
                        wlrlycWarnLevelColor = "#ff0000"
                        wlrlycWarnIcon = wlrlycWarnIcon3;
                    }

                    if (wlrlycLoopIndex === i) {
                        if (wlrlycWarnLevel === "") {
                            seriesData[i] = wlrlyc.seriesDataNormalOption(yAxisText[i])
                        } else {
                            seriesData[i] = wlrlyc.seriesDataWarnOption(yAxisText[i], wlrlycWarnLevel, wlrlycWarnLevelColor, wlrlycWarnIcon)
                        }
                    } else {
                        xAxisData[i] = xAxisText[i]
                        seriesData[i] = yAxisText[i]
                    }
                }

                xAxisThisDataLabel = xAxisText[wlrlycLoopIndex];

                $(".wlrlyc-top-time").html(xAxisText[wlrlycLoopIndex])
                // .css({color: wlrlycWarnLevelColor})


                wlrlycOption = {
                    legend: {
                        show: false
                    },
                    grid: {
                        left: '1%',
                        right: '1%',
                        bottom: '4%',
                        height: "90%",
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxisText,
                        boundaryGap: ["5%", "5%"],
                        offset: 5,

                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)",
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: 22,
                                color: function (value) {
                                    return value == xAxisThisDataLabel ? wlrlycWarnLevelColor : '#0ec8fd';
                                }
                            }
                        },
                        splitLine: {
                            show: false,
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
                            show: false,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)"
                            }
                        },
                        interval: 10000,
                        min: 0,
                        //max: 100000,
                        max: 10000,
                        axisLabel: {
                            show: false,
                            textStyle: {
                                fontSize: 22,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: "rgba(80,172,254,0.2)",
                            }
                        }
                    },
                    series: [{
                        type: 'line',
                        animationDuration: 300,
                        itemStyle: {
                            color: "#1395cb"
                        },
                        symbolSize: 20,
                        symbol: 'circle',
                        lineStyle: {
                            width: 4,
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(74,128,244,.1)",
                            }, {
                                offset: 1,
                                color: "rgba(74,128,244,.3)",
                            }])
                        },
                        data: seriesData,
                    }]
                };
                myChartwlrlyc.setOption(wlrlycOption);

                //wlrlycLoopTimer = setTimeout(function(){
                //    clearTimeout(wlrlycLoopTimer);
                //    wlrlycLoopTimerFun()
                //},1500)

            }
        },

        //POI图标跳动
        warmPoiJump: function (totals) {
            /*
            3级预警 2.8 万
                2级预警 3.3 万
                1级预警 4.5 万        
            */
            var icon = "Texture/Common/alarm_red.png"
            if (totals > 28000) {
                icon = "Texture/Common/alarm_yellow.png"
            }
            if (totals > 33000) {
                icon = "Texture/Common/alarm_orang.png"
            }
            if (totals > 45000) {
                icon = "Texture/Common/alarm_red.png"
            }


            var AreaName = con.AreaName;
            var poiName = "POIStreamCalculateWarm"
            var node = map.getSceneNode(AreaName, poiName)

            var jumppoilist = [];
            jumppoilist.push(AreaName + "/" + poiName);

            if (totals > 28000) {
                var tmppos = "121.901994,30.915654,8.438965";
                var pos = Q3D.vector3(tmppos.toGlobalVec3d().toLocalPos(AreaName));

                var createOptions = {
                    Position: pos,
                    Orientation: null,
                    OrientationType: Q3D.Enums.nodeOrientationType.Self,
                    Scale: Q3D.vector3(1, 1, 1),
                    POIOptions: {
                        FontSize: 18,
                        FontName: "微软雅黑",
                        FontColor: Q3D.colourValue("#efcfff", 1),
                        CharScale: 1,
                        Text: "",
                        Icon: icon, //"Texture/Common/alarm_orang.png",
                        IconSize: Q3D.vector2(100, 105),
                        POILayout: Q3D.Enums.poiLayOut.Right,
                        UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
                        IconAlphaEnabled: true,
                        Location: Q3D.Enums.poiImagePositionType.POI_LOCATE_BOTTOM,
                        SpecialTransparent: true,
                        AlwaysOnScreen: true,
                        OnLoaded: function () {

                        },
                    }
                };

                if (node) {
                    node.setVisible(1)
                    node.asPOI().setIcon(icon);
                    map.setBatchPOIJump(jumppoilist, 100);
                } else {
                    var poinode = map.createPOI(AreaName + "/" + poiName, createOptions);
                    if (poinode) {
                        map.setBatchPOIJump(jumppoilist, 100);
                    }
                }
            } else {
                if (node) {
                    node.setVisible(0)
                }
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //不同的时间点视口需要飞行到不同位置
        minflyto: function (k) {
            var data = require("dataCache").defaultLayerView.get(8);
            var angle = data.angle;
            var xyz = data.xyz;
            switch (k) {
                case 1: //15分钟
                    xyz = "394967.358031979,618.4823303222656,-3419689.3428271916";
                    angle = "-25.435457229614258,-2.4480040073394775,-1.1693611145019531";
                    break;
                case 2: //30分钟
                    xyz = "398449.56787013344,2416.730987548828,-3415715.1396180214";
                    angle = "-23.51727867126465,29.07093620300293,11.933000564575195";
                    break;
                case 3: //1小时
                    xyz = "398541.6018056803,1623.5906066894531,-3416594.3927918495";
                    angle = "-16.406274795532226,40.455787658691406,10.8098783493042";
                    break;
                case 4: //6小时
                    xyz = "398809.4880368618,1911.6011047363281,-3416673.268364301";
                    angle = "-22.936050415039062,42.93545913696289,16.072927474975586";
                    break;
                case 5: //明日
                    xyz = "398372.9333493618, 2214.208282470703, -3416454.9463428166";
                    angle = "-25.833391189575195, 35.00666046142578, 15.515213012695312";
                    break;
            }


            try {
                Q3D.globalCamera().flyTo((xyz).toVector3d(), (angle).toVector3(), 1, null);
            } catch (e) {}
        },
        //加载POI
        loadPoiNew: function (timetype) {
            var poidata = null;
            var totals = 0;

            switch (timetype) {
                case 1: //15分钟
                    poidata = require("t_LayerMenuData").PeopleIn15Data.data;
                    totals = require("t_LayerMenuData").PeopleIn15Data.totals;
                    break;
                case 2: //30分钟
                    poidata = require("t_LayerMenuData").PeopleIn30Data.data;
                    totals = require("t_LayerMenuData").PeopleIn30Data.totals;
                    break;
                case 3: //1小时
                    poidata = require("t_LayerMenuData").PeopleIn60Data.data;
                    totals = require("t_LayerMenuData").PeopleIn60Data.totals;
                    break;
                case 4: //6小时
                    poidata = require("t_LayerMenuData").PeopleIn360Data.data;
                    totals = require("t_LayerMenuData").PeopleIn360Data.totals;
                    break;
                case 5: //明日
                    poidata = require("t_LayerMenuData").PeopleIn1000Data.data;
                    totals = require("t_LayerMenuData").PeopleIn1000Data.totals;
                    break;
                default:
            }

            var areaName = con.AreaName;
            var pois = [];
            for (var i = 0; i < poidata.length; i++) {

                var row = poidata[i];
                var poiName = "POIStreamCalculate_" + timetype + "-" + row.id;
                var icon = "Texture/Common/POI_peple.png"
                var iconSize = Q3D.vector2(41, 45);
                //var num = row.values;
                var num = parseInt(totals * row.percent);

                // 
                var adress = row.adress;
                var v3pos = row.v3pos;
                var childIcon = row.iconimg;

                var pos = row.pos;
                var lng = parseFloat(pos.split(",")[0])
                var lat = parseFloat(pos.split(",")[1])
                var Coordinate = com.gcj02towgs84(lng, lat); //高德坐标转wg84坐标
                var tmppos = Coordinate + ",0";
                var position = Q3D.vector3(tmppos.toGlobalVec3d().toLocalPos(areaName));


                var poi = {
                    POIName: poiName,
                    Position: position,
                    Text: num,
                    Icon: icon,
                    IconSize: iconSize,
                    FontColor: "#efcfff",
                    FontSize: 14
                };
                var node = map.getSceneNode(areaName + "/" + poiName);
                if (node) {
                    node.setVisible(1);

                    var childnodeName = "PoiStreamStationName" + timetype + "-" + row.id;
                    var childnode = map.getSceneNode(con.AreaName, childnodeName);
                    if (childnode) {
                        childnode.setVisible(1);
                    } else {
                        //创建子POI显示
                        require("tl_StreamCalculate").loadStationName(areaName, poiName, timetype + "-" + row.id, adress, v3pos, num, childIcon);
                    }
                } else {
                    //创建POI
                    var options = {
                        Position: position, //封装Vector3对象
                        Orientation: null, //封装Vector3对象
                        OrientationType: Q3D.Enums.nodeOrientationType.Self,
                        Scale: Q3D.vector3(1, 1, 1), //封装Vector3对象
                        POIOptions: {
                            FontSize: 14,
                            FontName: "微软雅黑",
                            FontColor: Q3D.colourValue("#efcfff", 1), //封装ColourValue对象
                            CharScale: 1.0,
                            //Text: num,
                            Text: "",
                            Icon: icon,
                            IconSize: iconSize, //封装Vector2对象
                            POILayout: Q3D.Enums.poiLayOut.Bottom,
                            POILayoutCustom: null, //支持负数，取值0相当于LeftTop，1.0相当于LeftBottom，0.5相当于Left；只对POILayout为LeftCustom、TopCustom、RightCustom、BottomCustom时有效
                            UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
                            IconAlphaEnabled: true,
                            FontOutLine: 0, //同描边有关
                            FontEdgeColor: Q3D.colourValue("#000000", 1), //封装ColourValue对象
                            Location: Q3D.Enums.poiImagePositionType.POI_LOCATE_BOTTOM,
                            SpecialTransparent: true,
                            AlwaysOnScreen: true,
                        },
                        OnLoaded: function () { //加载结束回调
                            //创建子POI显示
                            require("tl_StreamCalculate").loadStationName(areaName, poiName, timetype + "-" + row.id, adress, v3pos, num, childIcon);
                        },
                    }
                    map.createPOI(areaName + "/" + poiName, options)
                }
                this.ListData.put(timetype + "-" + row.id, row);
            }
            //com.InitPois(areaName, pois);         
        },
        //显示路名
        loadStationName: function (AreaName, parentName, id, adress, v3pos, num, icon) {
            var pos = Q3D.vector3(50, 120, 0);
            if (v3pos != "") {
                try {
                    var str = v3pos.split(",")
                    pos = Q3D.vector3(parseInt(str[0]), parseInt(str[1]), parseInt(str[2]));
                } catch (e) {}
            }

            var createOptions = {
                Position: pos,
                Orientation: null,
                OrientationType: Q3D.Enums.nodeOrientationType.Self,
                Scale: Q3D.vector3(1, 1, 1),
                POIOptions: {
                    FontSize: 18,
                    FontName: "微软雅黑",
                    FontColor: Q3D.colourValue("#efcfff", 1),
                    CharScale: 1,
                    Text: num,
                    Icon: icon,
                    IconSize: Q3D.vector2(55, 30),
                    POILayout: Q3D.Enums.poiLayOut.Right,
                    UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
                    IconAlphaEnabled: true,
                    Location: Q3D.Enums.poiImagePositionType.POI_LOCATE_BOTTOM,
                    SpecialTransparent: true,
                    AlwaysOnScreen: true,
                    OnLoaded: function () {},
                }
            };
            var poiName = "PoiStreamStationName" + id;
            var node = map.getSceneNode(AreaName, poiName)
            if (node) {
                map.destroySceneNode(AreaName, poiName)
            }
            map.createPOI(AreaName + "/" + parentName + "/" + poiName, createOptions);

        },
        //人流动线控制
        lineControl: function (timetype) {
            var layer1 = mapObj._map3d.getWorldManager().getLayer("15miao")
            var layer2 = mapObj._map3d.getWorldManager().getLayer("30miao")
            var layer3 = mapObj._map3d.getWorldManager().getLayer("60miao")

            //15分钟
            if (timetype == 1) {
                if (layer1) {
                    layer1.setVisible(1)
                }
            }

            //30分钟
            if (timetype == 2) {
                if (layer2) {
                    layer2.setVisible(1)
                }
            }

            //60分钟
            if (timetype == 3) {
                if (layer3) {
                    layer3.setVisible(1)
                }
            }

            //6小时
            if (timetype == 4) {
                if (layer3) {
                    layer3.setVisible(1)
                }
            }

            //1天
            if (timetype == 5) {
                if (layer3) {
                    layer3.setVisible(1)
                }
            }
        },
        //数值区间取值
        random: function (lower, upper) {
            return Math.floor(Math.random() * (upper - lower)) + lower;
        },

        //清除POI
        clearPoiNew: function () {
            if (this.ListData.size() > 0) {
                for (i = 0; i < this.ListData.size(); i++) {
                    var key = this.ListData.keys()[i];
                    var nodeName = "POIStreamCalculate_" + key;
                    var node = map.getSceneNode(con.AreaName, nodeName);
                    if (node) {
                        map.destroySceneNode(con.AreaName, nodeName);
                    }

                    var childnodeName = "PoiStreamStationName" + key;
                    var childnode = map.getSceneNode(con.AreaName, childnodeName);
                    if (childnode) {
                        map.destroySceneNode(con.AreaName, childnodeName);
                    }
                }
            }
        },
        //hide
        hidePoiNew: function () {
            if (this.ListData.size() > 0) {
                for (i = 0; i < this.ListData.size(); i++) {
                    var key = this.ListData.keys()[i];
                    var nodeName = "POIStreamCalculate_" + key;
                    var node = map.getSceneNode(con.AreaName, nodeName);
                    if (node) {
                        node.setVisible(0);
                    }

                    var childnodeName = "PoiStreamStationName" + key;
                    var childnode = map.getSceneNode(con.AreaName, childnodeName);
                    if (childnode) {
                        childnode.setVisible(0);
                    }
                }
            }
        },
        //获取POI图标
        getIcon: function (stationtype) {
            var icon = "Texture/Common/metro.png";
            switch (stationtype) {
                case "1": //地铁站
                    icon = "Texture/Common/metro.png";
                    break;
                case "2": //公交车站
                    icon = "Texture/Common/bus.png";
                    break;
                case "3": //停车场
                    icon = "Texture/Common/stop.png";
                    break;
                case "4": //海昌海洋公园
                    icon = "Texture/Common/haichang.png";
                    break;
                default:
                    icon = "Texture/Common/metro.png";
            }

            return icon;
        },
        //清空div
        clearDiv: function () {
            $("#center_02").empty();
        },
        //清除定时器
        clearInter: function () {
            if (this.IntervalB != null) {
                window.clearInterval(this.IntervalB)
            }

            //this.clearInterS();
        },
        //清除数字翻滚的定时器
        clearInterS: function () {
            if (this.IntervalS.size() > 0) {
                for (i = 0; i < this.IntervalS.size(); i++) {
                    var key = this.IntervalS.keys()[i];
                    var inter = this.IntervalS.get(key)
                    if (inter != null) {
                        window.clearInterval(inter)
                    }
                }
                this.IntervalS.clear();
            }
        },
        //
        clearWarmPoi: function () {
            var AreaName = con.AreaName;
            var poiName = "POIStreamCalculateWarm"
            var node = map.getSceneNode(AreaName, poiName)
            if (node) {
                map.destroySceneNode(AreaName, poiName);
            }
        },
        //清空
        Revert: function () {
            this.loadStreamLine(0); //卸载人流动线
            this.clearDiv(); //清除人流预测的轮播统计
            //this.clearPOI();       //清除POI
            this.clearPoiNew(); //
            this.clearInter(); //
            this.clearWarmPoi(); //
            this.k = 0;

            require("common").openCloseBigDigital('open')
        }
    }
})