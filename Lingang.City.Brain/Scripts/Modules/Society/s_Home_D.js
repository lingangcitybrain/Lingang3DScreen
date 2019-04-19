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
        }
    }
});