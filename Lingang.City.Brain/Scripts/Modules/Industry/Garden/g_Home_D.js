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

        /*****************************UI窗口交互******************************************/
        //关闭代表企业花瓣窗口
        closeTopCompanyInfo: function () {
            require('gl_TopCompany').closeTopCompanyInfo();
            var jsondata = {
                "menu": "3",
                "layer": this.layerNO,
                "id": require("gl_TopCompany").LastPOI_Clk,
                "command":"close",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
        },

        //花瓣点击事件
        FlowerClickFn: function (index) {
            //$(e).addClass("active").parents(".cy-qy-menuli").siblings().find("a").removeClass("active").find(".cy-qy-divcont").removeClass("active");
            //$(e).find(".cy-qy-divcont").css({ "transition-duration": ".8s" }).addClass("active");
            var jsondata = {
                "menu": "3",
                "layer": this.layerNO,
                "id": require("gl_TopCompany").LastPOI_Clk+"/"+index,
                "command": "",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
        },
        //点击进入企业详情
        clickCompany: function () {
            var jsondata = {
                "menu": "3",
                "layer": this.layerNO,
                "id": require("gl_TopCompany").LastPOI_Clk, //+ "/" + require("gl_TopCompany").clickBoolean,
                "command": "open",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
        },
        //楼宇揭楼层
        openFloor: function (floor) {
            require("b_BuildingFloor").openFloor(floor);
            var jsondata = {
                "menu": "3",
                "layer": this.layerNO,
                "id": "buildingFloor/"+floor,
                "command": "open",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
        },
        /*********************************END*********************************************/
    }

})