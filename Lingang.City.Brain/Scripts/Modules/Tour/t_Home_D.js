﻿define(["config", "common", "t_Main", "control_Ajax", "t_LayerMenuAjax", "animsition", "t_Echart", "tl_Bus", "tl_Metro", "tl_Camera", "tl_Drone", "tl_Event", "tl_ParkingLot", "tl_RoadCondition", "tl_TrafficSimulation", "tl_StreamCalculate", "tl_VisitorsMap", "t_LayerMenuData"],
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
            loadBigChart: function (divname) {
                
                require("t_Echart").loadBigChart(divname);
                var jsondata = {
                    'menu': '2',
                    'seat': divname,
                    'command': 'open',
                };
                //return divname;
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
        }
        }
    });