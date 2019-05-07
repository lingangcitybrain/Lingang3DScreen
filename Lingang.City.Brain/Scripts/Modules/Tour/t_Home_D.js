define(["config", "common", "t_Main", "control_Ajax", "t_LayerMenuAjax", "animsition", "t_Echart", "tl_Bus", "tl_Metro", "tl_Camera", "tl_Drone", "tl_Event", "tl_ParkingLot", "tl_RoadCondition", "tl_TrafficSimulation", "tl_StreamCalculate", "tl_VisitorsMap", "t_LayerMenuData"],
    function (con, com, t_Main, control_Ajax, t_LayerMenuAjax, animsition, t_Echart, tl_Bus, tl_Metro, tl_Camera, tl_Drone, tl_Event, tl_ParkingLot, tl_RoadCondition, tl_TrafficSimulation, tl_StreamCalculate, tl_VisitorsMap, t_LayerMenuData) {
        return {
            layerNO: null,
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

            /*******************底部菜单图层**************************/
            loadVisitorsMap: function () {
                this.layerNO = 16;
                tl_VisitorsMap.loadVisitorsMap();
                var jsondata = {
                    "menu": "2",
                    "layer": "1",
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
            },
            loadRoadCondition: function () {
                this.layerNO = 16;
                tl_RoadCondition.loadRoadCondition();
                var jsondata = {
                    "menu": "2",
                    "layer": "2",
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
            },
            loadCamera: function () {
                this.layerNO = 16;
                tl_Camera.loadCamera();
                var jsondata = {
                    "menu": "2",
                    "layer": "3",
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
            },
            loadDrone: function () {
                this.layerNO = 16;
                tl_Drone.loadDrone();
                var jsondata = {
                    "menu": "2",
                    "layer": "4",
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
            },
            loadParkingLot: function () {
                this.layerNO = 16;
                tl_ParkingLot.loadParkingLot();
                var jsondata = {
                    "menu": "2",
                    "layer": "5",
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
            },
            PublicTransportation: function () {
                this.layerNO = 16;
                tl_Bus.loadBus();
                tl_Bus.loadBusLine();
                tl_Metro.loadMetro();
                var jsondata = {
                    "menu": "2",
                    "layer": "6",
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
            },
            loadEvent: function () {
                this.layerNO = 16;
                tl_Event.loadEvent();
                var jsondata = {
                    "menu": "2",
                    "layer": "7",
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
            },
            loadStream: function () {
                this.layerNO = 16;
                tl_StreamCalculate.loadStream();
                var jsondata = {
                    "menu": "2",
                    "layer": "8",
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
            },
            loadTrafficSimulation: function () {
                this.layerNO = 16;
                tl_TrafficSimulation.loadTrafficSimulation();
                var jsondata = {
                    "menu": "2",
                    "layer": "9",
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
            },
            /************************END******************************/
        }
    });