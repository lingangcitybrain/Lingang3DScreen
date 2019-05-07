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
        },
        loadIOT: function () {
            sl_IOT.loadIOT();
            sl_IOT.loadLeftSecond();
        },
        loadCamera: function () {
            sl_Camera.loadCamera();
        },
        loadDrone: function () {
            sl_Drone.loadDrone();
        },
        loadWorkStation: function () {
            sl_WorkStation.loadWorkStation();
        },
        layerSeaboard: function () {
            sl_SeaboardLine.layerSeaboard();
        },
        loadWorkSite: function () {
            sl_WorkSite.loadWorkSite();
        },
        loadEvent: function () {
            sl_Event.loadEvent();
        },
        /*******************************POI操作********************************************/

        PoiEvent: function (nodename) {
            s_Main.PoiEvent(nodename);
        },
        /**********************END******************************/

        /**********************UI事件****************************/
        closeCameraDetial: function () {
            require('sl_Drone').closeCameraDetial()
        },
        /**********************END******************************/
    }
});