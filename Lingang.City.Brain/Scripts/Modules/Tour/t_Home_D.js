﻿define(["config", "common", "t_Main", "control_Ajax", "t_LayerMenuAjax", "animsition", "t_Echart", "tl_Bus", "tl_Metro", "tl_Camera", "tl_Drone", "tl_Event", "tl_ParkingLot", "tl_RoadCondition", "tl_TrafficSimulation", "tl_StreamCalculate", "tl_VisitorsMap", "t_LayerMenuData"],
    function (con, com, t_Main, control_Ajax, t_LayerMenuAjax, animsition, t_Echart, tl_Bus, tl_Metro, tl_Camera, tl_Drone, tl_Event, tl_ParkingLot, tl_RoadCondition, tl_TrafficSimulation, tl_StreamCalculate, tl_VisitorsMap, t_LayerMenuData) {
        return {
            layerNO: null,
            POIName_Clk:null,
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
                this.layerNO = 1;
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
                this.layerNO = 2;
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
                this.layerNO = 3;
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
                this.layerNO = 4;
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
                this.layerNO = 5;
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
                this.layerNO = 6;
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
                this.layerNO = 7;
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
                this.layerNO = 8;
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
                this.layerNO = 9;
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
                this.POIName_Clk = nodename;
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

            /********************************UI点击*********************************/
            //关闭无人机视频窗口
            closeDroneCameraDetial: function () {
                require('tl_Drone').closeCameraDetial();
                var jsondata = {
                    "menu": "2",
                    "layer": this.layerNO,
                    "id": this.POIName_Clk,
                    "command": "close",
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
            },
            //关闭摄像头窗口
            closeCameraDetial: function () {
                require('tl_Camera').closeCameraDetial();
                var jsondata = {
                    "menu": "2",
                    "layer": this.layerNO,
                    "id": this.POIName_Clk,
                    "command": "close",
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
            },
            //关闭事件窗口
            closeEventDetail: function () {
                require('tl_Event').closeDetail();
                var jsondata = {
                    "menu": "2",
                    "layer": this.layerNO,
                    "id": this.POIName_Clk,
                    "command": "close",
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
            },
            //关闭交通仿真窗口
            closeCameraDetialTraffic: function () {
                require('tl_TrafficSimulation').closeCameraDetial();
                var jsondata = {
                    "menu": "2",
                    "layer": this.layerNO,
                    "id": "TrafficSimulation",
                    "command": "close",
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
            },
            /**********************************END*********************************/

            /****************图表点击事件*********************/
            //人员车辆统计
            ryClickEvent: function (domName) {
                require('t_Echart').rycltjClickEvent(domName);
                var jsondata = {
                    "menu": "2",
                    "layer": "all",
                    "type": "rycltj",
                    "id": domName,
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendButtoncontrolInfo(jsondata); //发送控制命令
            },
            //景区事件统计
            jqsjtjClickEvent: function (domName) {
                require('t_Echart').jqsjtjClickEvent(domName);
                var jsondata = {
                    "menu": "2",
                    "layer": "all",
                    "type": "jqsjtj",
                    "id": domName,
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendButtoncontrolInfo(jsondata); //发送控制命令
            },
            /*********************END************************/
        }
    });