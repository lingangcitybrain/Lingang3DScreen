define(["config", "common", "util", "s_layerMenuData", "s_LayerMenuAjax", "s_EchartAjax"], function (con, com,util, s_layerMenuData, s_LayerMenuAjax, s_EchartAjax) {
    /**************************************传感器**************************************/
    return {
        carInOutCount: null, //08:00--16:00点的进出车辆数
        personInOutCount: null, //08:00--16:00点的进出人员数
        seriesDataMax: 2000, //进出人员车辆数图表Y轴最大值

        LayerType: null,//选择传感器
        POIData: null,//POI详情数据
        LastPOI_Clk: null,//鼠标选中POI
        IOTList: new util.HashMap,
        //加载传感器IOT
        loadIOT: function () {
            this.Revert();
            this.LayerType = require("s_Main").LayerCatalog.IOT;

            //默认视口
            //Q3D.globalCamera().flyTo(("395748.56013082625,291.2252960205078,-3416845.9814377967").toVector3d(), ("-32.5178108215332,4.200603485107422,2.6675448417663574").toVector3(), 1, null);
            com.LayerFlyto(10)


            var post_data = { "communityId": "s012", "page": 0,"rows":1000 }

            require("s_LayerMenuAjax").getSensorList(post_data, function (result) {
                //require("sl_IOT").POIData = result.list;

                var areaName = con.AreaName;
                var pois = [];
                for (var i = 0; i < require("sl_IOT").POIData.length; i++) {
                    var row = require("sl_IOT").POIData[i];
                    require("sl_Event").EventList.put(row.sensorNum, row);
                    if (row.wgs84Lng && row.wgs84Lat) {
                        var icon = require("sl_IOT").LayerType.List[row.sensorType].UnChooseIcon;
                        var poiName = "POISociety" + require("sl_IOT").LayerType.List[row.sensorType].Name + "_" + row.sensorNum;//POIIOT_01
                        var iconSize = Q3D.vector2(41, 45);
                        var pos = row.wgs84Lng + "," + row.wgs84Lat + ",0";
                        var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

                        var poi = { POIName: poiName, Position: position, Text: "", Icon: icon, IconSize: iconSize };

                        var node = map.getSceneNode(areaName + "/" + poiName);
                        if (node) {
                            node.setVisible(1);
                        } else {
                            pois.push(poi);

                        }
                    }
                }
                com.InitPois(areaName, pois);
            })
            

            
        },
        //传感器点击事件
        loadIOTDetial: function (nodeName) {
            var areaName = con.AreaName;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var layername = this.LastPOI_Clk.split('_')[0].replace("POISociety", "");
                var level = this.LayerType.Level;
                var type = this.LastPOI_Clk.split('_')[1];
                var icon = this.LayerType.List[type].UnChooseIcon;

                var lastNode = map.getSceneNode(areaName, this.LastPOI_Clk);
                if (lastNode) {
                    lastNode.asPOI().setIcon(icon);
                    //lastNode.setVisible(0);
                }
            }

            this.LastPOI_Clk = nodeName;
            var node = map.getSceneNode(areaName, nodeName);
            if (node != null) {
                //Q3D.globalCamera().flyToNode(node, con.ViewOri.toVector3(), 2, function () {
                var poi = node.asPOI();

                var layername = nodeName.split('_')[0].replace("POISociety", "");
                var level = this.LayerType.Level;
                var type = nodeName.split('_')[1];
                var icon = this.LayerType.List[type].ChooseIcon;

                poi.setIcon(icon);
                //});
            }
            var sensorNum = nodeName.split('_')[2];
            var data = require("sl_IOT").IOTList.get(sensorNum);
            //加载页面内容
            var url = con.HtmlUrl + 'SocietyNew/Bottom_IOTDetail.html';
            require(['text!' + url], function (template) {
                $("#detail_02").html(template);
                $("#detail_02").show('slide', { direction: 'left' }, 500);
                $(".poiinfo").css("left", "52%");
                $(".poiinfo").css("top", "19%");

                $("#div_iotdetail").hide()
                $("#div_iotdetail").show('drop', 1000);

                $("#eventhead").html(data.sensorType);
                var html = '<div class="boxcont flex">';
                var html = '<dic class="box-rightinfo fl" style="margin-top:.2rem; font-size:.35rem; line-height:.7rem;">' +
                    '<ul>' +
                     '<li><span>编号：</span><em>' + data.sensorNum + '</em></li>' +
                     '<li><span>所属品牌：</span><em>' + data.sensorBrand + '</em></li>' +
                        '<li><span>安装地址：</span><em>' + data.installationAddress + '</em></li>' +
                        '<li><span>所属区域：</span><em>' + data.belongRegion + '</em></li>' +
                        '<li><span>所属街道：</span><em' + data.belongStreet + '</em></li>' +
                        '<li><span>安装时间：</span><em>' + data.installationTime + '</em></li>' +
                    '</ul>' +
                '</dic></div>';
                $("#iotdetail").html(html);
            })
        },
        //清空传感器POI
        clearIOTPOI: function () {
            var data = this.POIData;
            var areaName = con.AreaName;
            //设置POI隐藏
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    var name = this.LayerType.List[data[i].sensorType].Name;

                    var poiname = "POISociety" + name + "_" + data[i].id;
                    var node = map.getSceneNode(areaName + "/" + poiname);
                    if (node) {
                        //map.getArea(areaName).destroySceneNode(poiname);
                        node.setVisible(0);
                    }
                }
                this.LayerType = null;
                this.POIData = null;
            }
        },

        //加载第二列的div
        loadLeftSecond: function () {
            var url = con.HtmlUrl + 'SocietyNew/Left_Second_EventIOT.html';
            require(['text!' + url], function (template) {
                $("#left_second_01").html(template);

                require("sl_IOT").loadSocietyCarchart();//
                require("sl_IOT").loadCirclediv();
            })
        },
        //加载第二列的div
        loadLeftSecond: function () {
            this.loadLeftSecond1();
            this.loadLeftSecond2();
            this.loadLeftSecond3();
            this.loadLeftSecond4();
        },
        //加载第二列的div1
        loadLeftSecond1: function () {
            var option = {
                aniDom: "#left02_01",
                htmlDom: "#left_second_01",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventIOT1.html'
            }
            com.UIControlAni(option, function () {
                require("sl_IOT").loadSocietyPerson();
            });
        },
        //加载第二列的div2
        loadLeftSecond2: function () {
            var option = {
                aniDom: "#left02_02",
                htmlDom: "#left_second_02",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventIOT2.html'
            }
            com.UIControlAni(option, function () {
                require("sl_IOT").loadCarPersonInOutData();
            });
        },
        //加载第二列的div3
        loadLeftSecond3: function () {
            var option = {
                aniDom: "#left02_03",
                htmlDom: "#left_second_03",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventIOT3.html'
            }
            com.UIControlAni(option, function () {
                require("sl_IOT").loadCirclediv();
                require("s_Echart").sxtCamera("#iot-sxt1", { "communityId": "S012" });
                require("s_Echart").sxtCar("#iot-sxt2", { "communityId": "S012", "startDate": "2019-05-01", "endDate": "2019-05-02" });
                require("s_Echart").sxtPerson("#iot-sxt3");

            });
        },
        //加载第二列的div4
        loadLeftSecond4: function () {
            var option = {
                aniDom: "#left02_04",
                htmlDom: "#left_second_04",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventIOT4.html'
            }
            com.UIControlAni(option, function () {  require("sl_IOT").loadSocietyIOT() });
        },

        loadSocietyPerson: function () {
            s_EchartAjax.getSocietyPersonData(function (result) {
                if (require("s_Echart").societyPersonData == null) { return false; }
                var data = require("s_Echart").societyPersonData;

                $("#society-person>li").eq(0).find(".item-r-data").html(data.realTimeCount);
                $("#society-person>li").eq(1).find(".item-r-data").html(data.visitor);
                $("#society-person>li").eq(2).find(".item-r-data").html(data.total);
                $("#society-person>li").eq(3).find(".item-r-data").html(data.peopleFlow);
            });

        },

        //加载社区车辆图表
        loadCarPersonInOutData: function () {
            s_EchartAjax.getCarPersonInOutData(function (result) {
                if (require("s_Echart").carPersonInOutData == null) { return false; }
                var data = require("s_Echart").carPersonInOutData;
                data = data.data;

                require("sl_IOT").carInOutCount = []; //08:00--16:00点的进出车辆数
                require("sl_IOT").personInOutCount = [];//08:00--16:00点的进出人员数

                for (var i = 0; i < data.dateLists.length; i++) {
                    var dateTime = data.dateLists[i].split(" ")[1];
                    switch (dateTime) {
                        case "08":
                            require("sl_IOT").carInOutCount[0] = data.carInOutCount[i];
                            require("sl_IOT").personInOutCount[0] = data.personInOutCount[i];
                            break;
                        case "09":
                            require("sl_IOT").carInOutCount[1] = data.carInOutCount[i];
                            require("sl_IOT").personInOutCount[1] = data.personInOutCount[i];
                            break;
                        case "10":
                            require("sl_IOT").carInOutCount[2] = data.carInOutCount[i];
                            require("sl_IOT").personInOutCount[2] = data.personInOutCount[i];
                            break;
                        case "11":
                            require("sl_IOT").carInOutCount[3] = data.carInOutCount[i];
                            require("sl_IOT").personInOutCount[3] = data.personInOutCount[i];
                            break;
                        case "12":
                            require("sl_IOT").carInOutCount[4] = data.carInOutCount[i];
                            require("sl_IOT").personInOutCount[4] = data.personInOutCount[i];
                            break;
                        case "13":
                            require("sl_IOT").carInOutCount[5] = data.carInOutCount[i];
                            require("sl_IOT").personInOutCount[5] = data.personInOutCount[i];
                            break;
                        case "14":
                            require("sl_IOT").carInOutCount[6] = data.carInOutCount[i];
                            require("sl_IOT").personInOutCount[6] = data.personInOutCount[i];
                            break;
                        case "15":
                            require("sl_IOT").carInOutCount[7] = data.carInOutCount[i];
                            require("sl_IOT").personInOutCount[7] = data.personInOutCount[i];
                            break;
                        case "16":
                            require("sl_IOT").carInOutCount[8] = data.carInOutCount[i];
                            require("sl_IOT").personInOutCount[8] = data.personInOutCount[i];
                            break;
                        default:
                    }
                }

                var seriesDataMaxCar = Math.max.apply(null, require("sl_IOT").carInOutCount);
                var seriesDataMaxperson = Math.max.apply(null, require("sl_IOT").personInOutCount);
                var seriesDataMax = seriesDataMaxCar >= seriesDataMaxperson ? seriesDataMaxCar : seriesDataMaxperson;

                require("sl_IOT").seriesDataMax = (Math.ceil(seriesDataMax / 100) * 100).toFixed(0);

                if ($("#sqcl-chart").length <= 0) { return false; }
                var sqclChart = document.getElementById('sqcl-chart');
                var myChartsqcl = echarts.init(sqclChart);

                sqclOption = {
                    legend: {
                        top: '1%',
                        left: 'center',
                        icon: 'rect',
                        itemWidth: 30,
                        itemHeight: 10,
                        itemGap: 40,
                        textStyle: {
                            color: '#e4e4e4',
                            fontSize: 25,
                        },
                    },
                    color: ['#3398DB', '#00f81f'],
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
                        height: "86%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
                    },
                    xAxis: {
                        type: 'category',
                        data: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
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
                                fontSize: 25,
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
                        min: 0,
                        max: require("sl_IOT").seriesDataMax,
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
                            name: '进出人员',
                            type: 'line',
                            smooth: true,
                            data: require("sl_IOT").personInOutCount
                        },
                        {
                            name: '进出车辆',
                            type: 'line',
                            smooth: true,
                            data: require("sl_IOT").carInOutCount
                        },
                    ]
                };
                myChartsqcl.setOption(sqclOption);

            });



        },

        bigLoadCarPersonInOutData: function (carInOutCount, personInOutCount, seriesDataMax) {
            if ($("#sqcl-chart").length <= 0) { return false; }
            $("#bigechartHead").html("进出人员车辆曲线图");


            // echart
            option = {
                legend: {
                    top: '1%',
                    left: 'center',
                    icon: 'rect',
                    itemWidth: 60,
                    itemHeight: 20,
                    itemGap: 80,
                    textStyle: {
                        color: '#e4e4e4',
                        fontSize: 50,
                    },
                },
                color: ['#3398DB', '#00f81f'],
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
                    height: "82%",
                    containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
                },
                xAxis: {
                    type: 'category',
                    data: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
                    boundaryGap: ['20%', '20%'],
                    axisTick: {
                        show: false,
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
                        show: false,
                    },
                    axisLine: {
                        lineStyle: {
                            width: 4,
                            color: "rgba(80,172,254,.2)",
                        }
                    },
                    min: 0,
                    max: seriesDataMax,
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
                        name: '进出人员',
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            width: 6,
                        },
                        symbol: 'circle',
                        symbolSize: 22,
                        data: personInOutCount
                    },
                    {
                        name: '进出车辆',
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            width: 6,
                        },
                        symbol: 'circle',
                        symbolSize: 22,
                        data: carInOutCount
                    }
                ]
            };

            if (require("s_Echart").mybigChart != null && require("s_Echart").mybigChart != "" && require("s_Echart").mybigChart != undefined) {
                require("s_Echart").mybigChart.dispose();
            }
            require("s_Echart").mybigChart = echarts.init(document.getElementById('Big-chart'));
            require("s_Echart").mybigChart.setOption(option);

            //myChartsqcl.setOption(sqclOption);
        },
        // 摄像头圆圈
        loadCirclediv: function (str){         
            if ($("body").width() == 7680) {
                $("html").css({ fontSize: "90px" });
                $('#iot-sxt1>.sxt-circlediv').empty();
                $('#iot-sxt2>.sxt-circlediv').empty();
                $('#iot-sxt3>.sxt-circlediv').empty();
                com.loopFun($('#iot-sxt1>.sxt-circlediv')[0], 40, '#071956', '#0078ff', 'transparent', '20px', 6, 40, 1000);
                com.loopFun($('#iot-sxt2>.sxt-circlediv')[0], 60, '#075612', '#00f81f', 'transparent', '20px', 6, 40, 1000);
                com.loopFun($('#iot-sxt3>.sxt-circlediv')[0], 90, '#564009', '#f7b001', 'transparent', '20px', 6, 40, 1000);

            } else if ($("body").width() == 11520) {
                $("html").css({ fontSize: "130px" });
                $('#iot-sxt1>.sxt-circlediv').empty();
                $('#iot-sxt2>.sxt-circlediv').empty();
                $('#iot-sxt3>.sxt-circlediv').empty();
                com.loopFun($('#iot-sxt1>.sxt-circlediv')[0], 40, '#071956', '#0078ff', 'transparent', '20px', 10, 65, 1000);
                com.loopFun($('#iot-sxt2>.sxt-circlediv')[0], 60, '#075612', '#00f81f', 'transparent', '20px', 10, 65, 1000);
                com.loopFun($('#iot-sxt3>.sxt-circlediv')[0], 90, '#564009', '#f7b001', 'transparent', '20px', 10, 65, 1000);
            }      
        },

        //社区IOT
        loadSocietyIOT: function () {
            s_EchartAjax.getSocietyCgq(function (result) {
                if (require("s_Echart").cgqData == null) { return false; }
                var data = require("s_Echart").cgqData;
                data = data.data.sensorNumList;

                $("#society-iot>.iot-li").eq(0).find(".item-l-data").html(data[6].sensorCount);
                $("#society-iot>.iot-li").eq(0).find("span").eq(0).html(data[6].OnlineSensorCount);
                $("#society-iot>.iot-li").eq(0).find("span").eq(1).html(data[6].alarmSensorCount + data[6].LossSensorCount);

                $("#society-iot>.iot-li").eq(1).find(".item-l-data").html(data[4].sensorCount);
                $("#society-iot>.iot-li").eq(1).find("span").eq(0).html(data[4].OnlineSensorCount);
                $("#society-iot>.iot-li").eq(1).find("span").eq(1).html(data[4].alarmSensorCount + data[4].LossSensorCount);

                $("#society-iot>.iot-li").eq(2).find(".item-l-data").html(data[3].sensorCount);
                $("#society-iot>.iot-li").eq(2).find("span").eq(0).html(data[3].OnlineSensorCount);
                $("#society-iot>.iot-li").eq(2).find("span").eq(1).html(data[3].alarmSensorCount + data[3].LossSensorCount);
            });
        },

        Scrolldiv: function(){
            $('.scrolldiv').perfectScrollbar({ cursorwidth: 10, cursorcolor: "rgba(0, 126, 179, .6)", });
        },
        
        Revert: function () {
            this.clearIOTPOI();
        }
    }
})