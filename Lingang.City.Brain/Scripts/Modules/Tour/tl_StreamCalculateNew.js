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
        HcPosition: '121.901825,30.915066,3',
        radianLines: null,
        detailWindowId: 0,//当前窗口id
        nodeFollowingPath:[],//节点跟随路径
        loadStream: function () {
            

            require("t_LayerMenuAjax").getFlowRatePredictionData(function (result) {
                require("tl_StreamCalculate").flowRateData = result.data;
                require("common").openCloseBigDigital('close');

                require("tl_StreamCalculate").getPeopleCountTotal(result.counts);
                require("tl_StreamCalculate").startPredictionShow();
            });
        },

        //清理已划光线
        lightLineClose: function () {
            if (require("tl_StreamCalculate").radianLines != null && require("tl_StreamCalculate").radianLines != []) {
                require("tl_StreamCalculate").radianLines.forEach(function (k) {
                    map.getArea(con.AreaName).destroySceneNode(k);
                });
            }
            require("tl_StreamCalculate").radianLines = [];  
        },

        getPeopleCountTotal: function (counts) {
            require("tl_StreamCalculate").peopleCountTotal = [
                counts['15min'], 
                counts['30min'], 
                counts['60min'], 
                counts['360min'], 
                counts['24hr']
            ];             
        },

        //开始人流预测
        startPredictionShow: function () {
            var url = con.HtmlUrl + 'TourNew/Center_02.html';
            require(['text!' + url], function (template) {
                $("#center_02").html(template);
                $("#center_02").show('drop', 1000); //左侧

                //人流量预测数值进行轮播
                require("tl_StreamCalculate").k = 0;

                require("tl_StreamCalculate").lightLineClose();
                require("tl_StreamCalculate").alternatePlay();
                require("tl_StreamCalculate").IntervalB = setInterval(function () {
                    require("tl_StreamCalculate").alternatePlay();
                }, 7000);
            });
        },

        //人流预测轮播
        alternatePlay: function () {
            require("tl_StreamCalculate").lightLineClose();

            // 15分, 30分,1小时，6小时 ，明日
            if (require("tl_StreamCalculate").k >= require("tl_StreamCalculate").peopleCountTotal.length) {
                require("tl_StreamCalculate").k = 0;
            }
            var count = require("tl_StreamCalculate").peopleCountTotal[require("tl_StreamCalculate").k];

            var inFlowRate = [];
            timetype = require("tl_StreamCalculate").k;
            //15分钟
            if (timetype == 0) {
                inFlowRate = require("tl_StreamCalculate").flowRateData['15min'];
            }
            //30分钟
            else if (timetype == 1) {
                inFlowRate = require("tl_StreamCalculate").flowRateData['30min'];
            }
            //60分钟
            else if (timetype == 2) {
                inFlowRate = require("tl_StreamCalculate").flowRateData['60min'];
            }
            //6小时
            else if (timetype == 3) {
                inFlowRate = require("tl_StreamCalculate").flowRateData['360min'];
            }
            //1天
            else if (timetype == 4) {
                inFlowRate = require("tl_StreamCalculate").flowRateData['24hr'];
            }

            ////////////////////////////显示相应的动线//////////////////////////////////////////////////
            require("tl_StreamCalculate").lineControl(inFlowRate);

            ////////////////////////////加载对应的POI///////////////////////////////////////////////////
            require("tl_StreamCalculate").hidePoiNew();
            require("tl_StreamCalculate").loadPoiNew(require("tl_StreamCalculate").k, inFlowRate);

            ////////////////////////////飞到对应的视口///////////////////////////////////////////////////
            require("tl_StreamCalculate").minflyto(require("tl_StreamCalculate").k);

            ////////////////////////////显示表格////////////////////////////////////////////////////////
            require("tl_StreamCalculate").wlrlycChartFun(require("tl_StreamCalculate").k);

            ////////////////////////////POI报警提醒/////////////////////////////////////////////////////
            require("tl_StreamCalculate").warmPoiJump(count);

            $(".forecast-pernum-ul").children().siblings().removeClass('active');
            $(".forecast-pernum-item").eq(require("tl_StreamCalculate").k).addClass("active");
            require("tl_StreamCalculate").k = require("tl_StreamCalculate").k + 1;
        },

        //图表数值播放
        wlrlycChartFun: function (wlrlycK) {
            var xAxisText = ['', '15分钟', '30分钟', '60分钟', '360分钟', '一天', ''];
            // var yAxisText = ['', 1523, 4512, 7869, 30151, 31267, ''];
            var yAxisText = ['', 248, 1026, 1232, 2116, 4502, ''];
            var xAxisData = [];
            var seriesData = [];

            //yAxisText重新赋值
            yAxisText = [];
            yAxisText.push('');
            for (var i = 0; i < require("tl_StreamCalculate").peopleCountTotal.length; i++) {
                yAxisText.push(require("tl_StreamCalculate").peopleCountTotal[i]);
            }
            yAxisText.push('');

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
                    };
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
                    };
                },
            };

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

            wlrlycLoopTimerFun();

            function wlrlycLoopTimerFun() {

                wlrlycLoopIndex++;
                wlrlycLoopIndex = wlrlycLoopIndex < xAxisText.length - 1 ? wlrlycLoopIndex : 1;

                for (var i = 1; i < xAxisText.length - 1; i++) {

                    if (yAxisText[wlrlycLoopIndex] <= 28000) {
                        wlrlycWarnLevel = "";
                        wlrlycWarnLevelColor = "#af6eff";
                    } else if (yAxisText[wlrlycLoopIndex] <= 33000) {
                        wlrlycWarnLevel = "三级预警";
                        wlrlycWarnLevelColor = "#fff000";
                        wlrlycWarnIcon = wlrlycWarnIcon1;
                    } else if (yAxisText[wlrlycLoopIndex] <= 45000) {
                        wlrlycWarnLevel = "二级预警";
                        wlrlycWarnLevelColor = "#ff7700";
                        wlrlycWarnIcon = wlrlycWarnIcon2;
                    } else {
                        wlrlycWarnLevel = "一级预警";
                        wlrlycWarnLevelColor = "#ff0000";
                        wlrlycWarnIcon = wlrlycWarnIcon3;
                    }

                    if (wlrlycLoopIndex === i) {
                        if (wlrlycWarnLevel === "") {
                            seriesData[i] = wlrlyc.seriesDataNormalOption(yAxisText[i]);
                        } else {
                            seriesData[i] = wlrlyc.seriesDataWarnOption(yAxisText[i], wlrlycWarnLevel, wlrlycWarnLevelColor, wlrlycWarnIcon);
                        }
                    } else {
                        xAxisData[i] = xAxisText[i];
                        seriesData[i] = yAxisText[i];
                    }
                }

                xAxisThisDataLabel = xAxisText[wlrlycLoopIndex];

                $(".wlrlyc-top-time").html(xAxisText[wlrlycLoopIndex]);
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
                        //interval: 10000,
                        max: Math.max.apply(null, require("tl_StreamCalculate").peopleCountTotal) * 1.5,
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

        //POI报警图标跳动
        warmPoiJump: function (totals) {
            /*
            3级预警 2.8 万
                2级预警 3.3 万
                1级预警 4.5 万        
            */
            var icon = "Texture/Common/alarm_red.png";
            if (totals > 28000) {
                icon = "Texture/Common/alarm_yellow.png";
            }
            if (totals > 33000) {
                icon = "Texture/Common/alarm_orang.png";
            }
            if (totals > 45000) {
                icon = "Texture/Common/alarm_red.png";
            }
            var AreaName = con.AreaName;
            var poiName = "POIStreamCalculateWarm";
            var node = map.getSceneNode(AreaName, poiName);

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
                    node.setVisible(1);
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
                    node.setVisible(0);
                }
            }
        },
        
        //不同的时间点视口需要飞行到不同位置
        minflyto: function (k) {
            var data = require("dataCache").defaultLayerView.get(8);
            var angle = data.angle;
            var xyz = data.xyz;
            switch (k) {
                case 0: //15分钟
                    xyz = "394967.358031979,618.4823303222656,-3419689.3428271916";
                    angle = "-25.435457229614258,-2.4480040073394775,-1.1693611145019531";
                    break;
                case 1: //30分钟
                    xyz = "398449.56787013344,2416.730987548828,-3415715.1396180214";
                    angle = "-23.51727867126465,29.07093620300293,11.933000564575195";
                    break;
                case 2: //1小时
                    xyz = "398541.6018056803,1623.5906066894531,-3416594.3927918495";
                    angle = "-16.406274795532226,40.455787658691406,10.8098783493042";
                    break;
                case 3: //6小时
                    xyz = "398809.4880368618,1911.6011047363281,-3416673.268364301";
                    angle = "-22.936050415039062,42.93545913696289,16.072927474975586";
                    break;
                case 4: //明日
                    xyz = "398372.9333493618, 2214.208282470703, -3416454.9463428166";
                    angle = "-25.833391189575195, 35.00666046142578, 15.515213012695312";
                    break;
            }

            try {
                Q3D.globalCamera().flyTo((xyz).toVector3d(), (angle).toVector3(), 1, null);
            } catch (e) {}
        },

        //加载POI
        loadPoiNew: function (timetype, inFlowRate) {
            var poidata = inFlowRate;            
            var areaName = con.AreaName;

            require("tl_StreamCalculate").closeDetailWindow();

            for (var i = 0; i < poidata.length; i++) {
                var row = poidata[i];
                var poiName = "POIStreamCalculate_" + timetype + "-" + row.id;
                var icon = "Texture/Common/POI_peple.png";
                var iconSize = Q3D.vector2(41, 45);
                var num = row.count;
                var address = row.name;

                var lng = parseFloat(row.lon);
                var lat = parseFloat(row.lat);
                var Coordinate = com.gcj02towgs84(lng, lat); //高德坐标转wg84坐标
                var tmppos = Coordinate + ",0";
                var position = Q3D.vector3(tmppos.toGlobalVec3d().toLocalPos(areaName));

                var node = map.getSceneNode(areaName + "/" + poiName);
                if (node) {
                    node.setVisible(1);
                    require("tl_StreamCalculate").loadDetailWindow(poiName, num, address);
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
                            Text: '', //num + '\n' + address,
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
                            require("tl_StreamCalculate").loadDetailWindow(poiName, num, address);
                        },
                    };
                    map.createPOI(areaName + "/" + poiName, options);
                }
                require("tl_StreamCalculate").ListData.put(timetype + "-" + row.id, row);
            }      
        },
        loadDetailWindow:function(nodeName, num, address){
            var url = con.HtmlUrl + 'TourNew/StreamCalculateDetail.html';
            require(['text!' + url], function (template) {

                require("tl_StreamCalculate").detailWindowId = require("tl_StreamCalculate").detailWindowId + 1;
                var domWinName = 'detail_' + require("tl_StreamCalculate").detailWindowId;

                $("#"+domWinName).show();
                $("#"+domWinName).html(template);   
                
                var html = '<div class="poi-box-num flex"  style="pointer-events: none;">' +
                                '<button>' + num + '&nbsp;</button>' +
                                '<button class="poi-box-num-text">' + address + '</button>' +
                            '</div>';
                $("#" + domWinName).html(html);

                //节点跟随
                var nodePath = con.AreaName + '/' + nodeName;    
                var nodeObject = {"nodePath": nodePath, "nodeDom": domWinName};
    
                require("tl_StreamCalculate").nodeFollowingPath.push(nodeObject);
                
                map.enableNodeFollowing(nodePath, function(node, v2i){      
                    require("tl_StreamCalculate").nodeFolowing(node, v2i);
                });

            });   
        }, 
        nodeFolowing: function(node, v2i){
            require("tl_StreamCalculate").nodeFollowingPath.forEach(function(e){
                if (node.getFullName() == e.nodePath){
                    document.getElementById(e.nodeDom).style.left = v2i.x - 180 + "px";
                    document.getElementById(e.nodeDom).style.top = v2i.y - 220 + "px"; 
                } 
            });
        },
        closeDetailWindow: function () {
            var currentWinId = require("tl_StreamCalculate").detailWindowId;
            
            while (currentWinId > 0) {
                var domDetail = $("#detail_" + currentWinId);
                domDetail.empty();
                domDetail.hide();
                currentWinId = currentWinId - 1;
            }

            require("tl_StreamCalculate").detailWindowId = 0;

            require("tl_StreamCalculate").nodeFollowingPath.forEach(function(e) {
                map.disableNodeFollowing(e.nodePath, true);
            }); 

            require("tl_StreamCalculate").nodeFollowingPath = [];
        },
        //人流动线控制
        lineControl: function (inFlowRate) {                 
            inFlowRate.forEach(function(e){
                var lng = parseFloat(e.lon);
                var lat = parseFloat(e.lat);
                var Coordinate = com.gcj02towgs84(lng, lat); //高德坐标转wg84坐标
                var tmppos = Coordinate + ",0";
                //var roadpos = Q3D.vector3(tmppos.toGlobalVec3d().toLocalPos(con.AreaName));
                require("tl_StreamCalculate").createRadianLine(tmppos, e.id);
            });
        },

        //清除POI
        clearPoiNew: function () {
            if (require("tl_StreamCalculate").ListData.size() > 0) {
                for (i = 0; i < require("tl_StreamCalculate").ListData.size(); i++) {
                    var key = require("tl_StreamCalculate").ListData.keys()[i];
                    var nodeName = "POIStreamCalculate_" + key;
                    var node = map.getSceneNode(con.AreaName, nodeName);
                    if (node) {
                        map.destroySceneNode(con.AreaName, nodeName);
                    }
                }
            }
        },

        //隐藏POI
        hidePoiNew: function () {
            if (require("tl_StreamCalculate").ListData.size() > 0) {
                for (i = 0; i < require("tl_StreamCalculate").ListData.size(); i++) {
                    var key = require("tl_StreamCalculate").ListData.keys()[i];
                    var nodeName = "POIStreamCalculate_" + key;
                    var node = map.getSceneNode(con.AreaName, nodeName);
                    if (node) {
                        node.setVisible(0);
                    }
                }
            }
        },

        //清空div
        clearDiv: function () {
            $("#center_02").empty();
        },

        //清除定时器
        clearInter: function () {
            if (require("tl_StreamCalculate").IntervalB != null) {
                window.clearInterval(require("tl_StreamCalculate").IntervalB);
            }
        },
        
        clearWarmPoi: function () {
            var AreaName = con.AreaName;
            var poiName = "POIStreamCalculateWarm";
            var node = map.getSceneNode(AreaName, poiName);
            if (node) {
                map.destroySceneNode(AreaName, poiName);
            }
        },

        createRadianLine: function (roadPosition, id) {
            var option = {
                AreaName: "gwh_xilou",
                Name: "streamC_" + id,
                LineAlias: "mark",
                LineWidth: 50,
                showAuxIcon: false,
                MaterialName: "Material/aaaa.mtr",
            };
            require("tl_StreamCalculate").radianLines.push(option.Name);

            require("common").getRadianLine(roadPosition, require("tl_StreamCalculate").HcPosition, 500, option);
        },
        //清空
        Revert: function () {
            require("tl_StreamCalculate").lightLineClose(); //卸载人流动线
            require("tl_StreamCalculate").clearDiv(); //清除人流预测的轮播统计
            require("tl_StreamCalculate").clearPoiNew(); //
            require("tl_StreamCalculate").clearInter(); //
            require("tl_StreamCalculate").clearWarmPoi(); //
            require("tl_StreamCalculate").k = 0;
            require("common").openCloseBigDigital('open');
            require("tl_StreamCalculate").closeDetailWindow();
        }
    };
});