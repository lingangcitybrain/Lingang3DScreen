define(["config", "common", "t_Main", "control_Ajax", "t_LayerMenuAjax", "animsition", "t_Echart", "tl_Bus", "tl_Metro", "tl_Camera", "tl_Drone", "tl_Event", "tl_ParkingLot", "tl_RoadCondition", "tl_TrafficSimulation", "tl_StreamCalculate", "tl_VisitorsMap", "t_LayerMenuData"],
    function (con, com, t_Main, control_Ajax, t_LayerMenuAjax, animsition, t_Echart, tl_Bus, tl_Metro, tl_Camera, tl_Drone, tl_Event, tl_ParkingLot, tl_RoadCondition, tl_TrafficSimulation, tl_StreamCalculate, tl_VisitorsMap, t_LayerMenuData) {
        return {
            loadMain: function () {
                t_Main.loadMain();
                var jsondata = {
                    "menu": "2",
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendMenuControlInfo(jsondata); //发送控制命令

            },
            loadBigChartleft2: function () {
                t_Echart.loadBigChart();
                var jsondata = {
                    'menu': '2',
                    'seat': 'Left_First_02',
                    'command': 'open',
                };
                control_Ajax.sendEchartControlInfo(jsondata); //发送控制命令
            },
            loadBigChartleft3: function () {
                t_Echart.loadBigChart();
                var jsondata = {
                    'menu': '2',
                    'seat': 'Left_First_03',
                    'command': 'open',
                };
                control_Ajax.sendEchartControlInfo(jsondata); //发送控制命令
            },
            loadBigChartleft4: function () {
                t_Echart.loadBigChart();
                var jsondata = {
                    'menu': '2',
                    'seat': 'Left_First_04',
                    'command': 'open',
                };
                control_Ajax.sendEchartControlInfo(jsondata); //发送控制命令
            },
            loadBigChartlefts1: function () {
                t_Echart.loadBigChart();
                var jsondata = {
                    'menu': '2',
                    'seat': 'Left_Second_01',
                    'command': 'open',
                };
                control_Ajax.sendEchartControlInfo(jsondata); //发送控制命令
            },
            loadBigChartlefts3: function () {
                t_Echart.loadBigChart();
                var jsondata = {
                    'menu': '2',
                    'seat': 'Left_Second_03',
                    'command': 'open',
                };
                control_Ajax.sendEchartControlInfo(jsondata); //发送控制命令
            },
            loadBigChartright1: function () {
                t_Echart.loadBigChart();
                var jsondata = {
                    'menu': '2',
                    'seat': 'Right_First_01',
                    'command': 'open',
                };
                control_Ajax.sendEchartControlInfo(jsondata); //发送控制命令
            },
            loadBigChartright2: function () {
                t_Echart.loadBigChart();
                var jsondata = {
                    'menu': '2',
                    'seat': 'Right_First_02',
                    'command': 'open',
                };
                control_Ajax.sendEchartControlInfo(jsondata); //发送控制命令
            },
            loadBigChartright3: function () {
                t_Echart.loadBigChart();
                var jsondata = {
                    'menu': '2',
                    'seat': 'Right_First_03',
                    'command': 'open',
                };
                control_Ajax.sendEchartControlInfo(jsondata); //发送控制命令
            },
        }
    });