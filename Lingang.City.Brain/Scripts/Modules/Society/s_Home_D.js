define(["config", "common", "s_Main", "control_Ajax", 's_LayerMenuAjax', 's_LeftLayer', 's_RightLayer', 's_Echart', 'sl_IOT', 'sl_Camera', 'sl_Drone', 'sl_Event', 'sl_SeaboardLine', 'sl_WorkSite', 'sl_WorkStation'],
function (con, com, s_Main, control_Ajax, s_LayerMenuAjax, s_LeftLayer, s_RightLayer, s_Echart, sl_IOT, sl_Camera, sl_Drone, sl_Event, sl_SeaboardLine, sl_WorkSite, sl_WorkStation) {
    return {
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
        loadIOT: function () {
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
    }
});