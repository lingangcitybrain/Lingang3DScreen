define(["config", "common", "g_Main", "e_Main", "control_Ajax", "gl_GardenBuilding", "gl_Stop", "gl_UnmannedCar", "gl_Event", "el_EstateInfo", "el_AtlasChart", "el_HotMap"], function (con, com, g_Main, e_Main, control_Ajax, gl_GardenBuilding, gl_Stop, gl_UnmannedCar, gl_Event, el_EstateInfo, el_AtlasChart, el_HotMap) {
    /****************************园区****************************/
    return {
        loadMain_e_Main: function () {
            e_Main.loadMain();
            var jsondata = {
                "menu":"3",
                "layer": "24",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadEstateInfo: function () {
            el_EstateInfo.loadEstateInfo();
            var jsondata = {
                "menu": "3",
                "layer": "16",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadAtlasChart: function () {
            el_AtlasChart.loadAtlasChart();
            var jsondata = {
                "menu": "3",
                "layer": "17",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadHotMap: function () {
            el_HotMap.loadHotMap();
            var jsondata = {
                "menu": "3",
                "layer": "18",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadMain_g_Main: function () {
            g_Main.loadMain();
            var jsondata = {
                "menu": "3",
                "layer": "19",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadBuilding: function () {
            gl_GardenBuilding.loadBuilding();
            var jsondata = {
                "menu": "3",
                "layer": "20",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadStop: function () {
            gl_Stop.loadStop();
            var jsondata = {
                "menu": "3",
                "layer": "21",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadUnmannedCar: function () {
            gl_UnmannedCar.loadUnmannedCar();
            var jsondata = {
                "menu": "3",
                "layer": "22",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadEvent: function () {
            gl_Event.loadEvent();
            var jsondata = {
                "menu": "3",
                "layer": "23",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
    }

})