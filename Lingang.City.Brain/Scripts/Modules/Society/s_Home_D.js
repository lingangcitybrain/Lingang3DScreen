define(["config", "common", "s_Main", "control_Ajax", 's_LayerMenuAjax', 's_LeftLayer', 's_RightLayer', 's_Echart', 'sl_IOT', 'sl_Camera', 'sl_Drone', 'sl_Event', 'sl_SeaboardLine', 'sl_WorkSite', 'sl_WorkStation'],
function (con, com, s_Main, control_Ajax, s_LayerMenuAjax, s_LeftLayer, s_RightLayer, s_Echart, sl_IOT, sl_Camera, sl_Drone, sl_Event, sl_SeaboardLine, sl_WorkSite, sl_WorkStation) {
    return {
        layerNO: null,
        POIName:null,
        loadMain: function () {
            s_Main.loadMain();
            var jsondata = {
                "menu": "1",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendMenuControlInfo(jsondata); //发送控制命令
        },
        dayNightMenuChange: function (type) {
            var jsondata = {
                "menu": "11",
                "xyz": "",
                "angle": "",
            };
            switch (type) {
                case "实景":
                    com.ChangeLight(1);
                    jsondata.menu = "11";
                    break;
                case "夜景":
                    com.ChangeLight(0);
                    jsondata.menu = "12";
                    break;
                default:
            }

            control_Ajax.sendMenuControlInfo(jsondata); //发送控制命令
        },
        loadIOT: function ()
        {

            this.layerNO = 10;
            sl_IOT.loadIOT();
            sl_IOT.loadLeftSecond();
            require("s_Main").loadCenter1Info();  //当中大数字显示
            var jsondata = {
                "menu": "1",
                "layer": "10",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadCamera: function () {
            this.layerNO = 11;
            sl_Camera.loadCamera();
            sl_IOT.loadLeftSecond();
            require("s_Main").loadCenter1Info();
            var jsondata = {
                "menu": "1",
                "layer": "11",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadDrone: function () {
            this.layerNO = 12;
            sl_Drone.loadDrone();
            sl_Drone.loadLeftSecond();
            require("s_Main").loadCenter1Info();
            var jsondata = {
                "menu": "1",
                "layer": "12",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadWorkStation: function () {
            this.layerNO = 13;
            sl_WorkStation.loadWorkStation();
            sl_IOT.loadLeftSecond();
            require("s_Main").loadCenter1Info();
            var jsondata = {
                "menu": "1",
                "layer": "13",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        layerSeaboard: function () {
            this.layerNO = 14;
            sl_SeaboardLine.layerSeaboard();
            sl_SeaboardLine.loadLeftSecond();
            require("s_Main").loadCenter1Info();
            var jsondata = {
                "menu": "1",
                "layer": "14",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadWorkSite: function () {
            this.layerNO = 26;
            sl_WorkSite.loadWorkSite();
            sl_WorkSite.loadLeftSecond();
            require("s_Main").loadCenter1Info();
            var jsondata = {
                "menu": "1",
                "layer": "26",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadEvent: function () {
        this.layerNO = 15;
            sl_Event.loadEvent();
            sl_IOT.loadLeftSecond();
            require("s_Main").loadCenter1();
            var jsondata = {
                "menu": "1",
                "layer": "15",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },

        /*******************************POI操作********************************************/

        PoiEvent: function (nodename) {
            this.POIName = nodename;
            s_Main.PoiEvent(nodename);
            var jsondata = {
                "menu": "1",
                "layer": this.layerNO,
                "id": nodename,
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIControlInfo(jsondata); //发送控制命令
        },

        /***********************************END****************************************************/

        /**********************UI事件****************************/
        closeCameraDetial: function () {
            require('sl_Drone').closeCameraDetial();
            var jsondata = {
                "menu": "1",
                "layer": this.layerNO,
                "id": this.POIName,
                "command": "close",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
        },
        /**********************END******************************/
    }
});