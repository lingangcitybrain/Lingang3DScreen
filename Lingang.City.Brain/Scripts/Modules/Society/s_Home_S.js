define(["config", "common", "s_Main", 's_LayerMenuAjax', 's_LeftLayer', 's_RightLayer', 's_Echart', 'sl_IOT', 'sl_Camera', 'sl_Drone', 'sl_Event', 'sl_SeaboardLine', 'sl_WorkSite', 'sl_WorkStation'],
function (con, com, s_Main, s_LayerMenuAjax, s_LeftLayer, s_RightLayer, s_Echart, sl_IOT, sl_Camera, sl_Drone, sl_Event, sl_SeaboardLine, sl_WorkSite, sl_WorkStation) {
    return {
        loadMain: function () {
            s_Main.loadMain(function () {
                setTimeout(function () { $('.chartzoomin').hide() }, 1000);
            });
        },
        dayNightMenuChange: function (type) {
            switch (type) {
                case "实景":
                    com.ChangeLight(1);
                    break;
                case "夜景":
                    com.ChangeLight(0);
                    break;
                default:
            }
        }
    }
});