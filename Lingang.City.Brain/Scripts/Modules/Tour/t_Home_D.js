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
            loadBigChart: function (divname) {
                
                require("t_Echart").loadBigChart(divname);
                var jsondata = {
                    'menu': '2',
                    'seat': divname,
                    'command': 'open',
                };
                control_Ajax.sendEchartControlInfo(jsondata); //发送控制命令
            },
            closeBigChart: function () {
                require("t_Echart").closeBigChart()
                var jsondata = {
                    'menu': '2',
                    'seat': '',
                    'command': 'close',
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
            /**************************POI点击事件******************************/
            PoiEvent: function (nodename) {
                t_Main.PoiEvent(nodename);
                var jsondata = {
                    "menu": "2",
                    "layer": this.layerNO,
                    "id": nodename,
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendPOIControlInfo(jsondata); //发送控制命令
            },
            /******************************END********************************/
        }
    });