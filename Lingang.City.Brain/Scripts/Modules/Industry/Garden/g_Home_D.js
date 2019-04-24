define(["config", "common", "g_Main", "e_Main", "control_Ajax", "gl_GardenBuilding", "gl_Stop", "gl_UnmannedCar", "gl_Event", "el_EstateInfo", "el_AtlasChart", "el_HotMap"], function (con, com, g_Main, e_Main, control_Ajax, gl_GardenBuilding, gl_Stop, gl_UnmannedCar, gl_Event, el_EstateInfo, el_AtlasChart, el_HotMap) {
    /****************************园区****************************/
    return {
        layerNO:null,
        /**********************************底部菜单操作********************************************/
        loadMain_e_Main: function () {
            e_Main.loadMain();
            this.layerNO = 24;
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
            this.layerNO = 16;
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
            this.layerNO = 17;
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
            this.layerNO = 18;
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
            this.layerNO = 19;
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
            this.layerNO = 20;
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
            this.layerNO = 21;
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
            this.layerNO = 22;
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
            this.layerNO = 23;
            var jsondata = {
                "menu": "3",
                "layer": "23",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        /************************************END*******************************************/

        /*******************************POI操作********************************************/

        PoiEvent: function (nodename) {
            g_Main.PoiEvent(nodename);
            var jsondata = {
                "menu": "3",
                "layer": this.layerNO,
                "id":nodename,
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIControlInfo(jsondata); //发送控制命令
        },
        //无人车poi点击
        showUnmannedCarTrajectors: function (nodename) {
            require("gl_UnmannedCar").showUnmannedCarTrajectors(nodename);
            var jsondata = {
                "menu": "3",
                "layer": this.layerNO,
                "id": nodename,
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIControlInfo(jsondata); //发送控制命令
        },
        /*************************************END******************************************/
    }

})