define(["config", "common", "tl_Drone","s_Main", 's_LayerMenuAjax', 's_LeftLayer', 's_RightLayer', 's_Echart', 'sl_IOT', 'sl_Camera', 'sl_Drone', 'sl_Event', 'sl_SeaboardLine', 'sl_WorkSite', 'sl_WorkStation', 'sl_Street', 'sl_Grid'],
function (con, com, tl_Drone, s_Main, s_LayerMenuAjax, s_LeftLayer, s_RightLayer, s_Echart, sl_IOT, sl_Camera, sl_Drone, sl_Event, sl_SeaboardLine, sl_WorkSite, sl_WorkStation, sl_Street, sl_Grid) {
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
            require("s_Main").loadCenter1Info();  //当中大数字显示
        },
        loadCamera: function () {
            sl_Camera.loadCamera();
            sl_IOT.loadLeftSecond();
            require("s_Main").loadCenter1Info();
        },
        loadDrone: function () {
            tl_Drone.loadDrone();
            sl_Drone.loadLeftSecond();
            require("s_Main").loadCenter1Info();
        },
        loadWorkStation: function () {
            sl_WorkStation.loadWorkStation();
            sl_IOT.loadLeftSecond();
            require("s_Main").loadCenter1Info();
        },
        layerSeaboard: function () {
            sl_SeaboardLine.layerSeaboard();
            sl_SeaboardLine.loadLeftSecond();
           // require("s_Main").loadCenter1Info();
            require("s_Main").loadCenter1();
        },
        loadWorkSite: function () {
            sl_WorkSite.loadWorkSite();
            sl_WorkSite.loadLeftSecond();
           // require("s_Main").loadCenter1Info();
            require("s_Main").loadCenter1();
        },
        loadEvent: function () {
            sl_Event.loadEvent();
            sl_IOT.loadLeftSecond();
            require("s_Main").loadCenter1();
        },
        loadStreet: function () {
            sl_Street.loadWorkSite();
            sl_Street.loadLeftSecond();
            require("s_Main").loadCenter1();
        },
        loadGrid:function(){
            sl_Grid.loadGridInfo();
            sl_Grid.loadLeftSecond();
            require("s_Main").loadCenter1();
        },
        /////////////////////////////////////图表控制///////////////////////////////////////////////////
        loadBigChart: function (seat) {
            require("s_Echart").loadBigChart(seat);
        },
        closeBigChart: function () {
            require("s_Echart").closeBigChart()
        },
        ///////////////////////////////////end////////////////////////////////////////////////////////
        /*******************************POI操作********************************************/

        PoiEvent: function (nodename) {
            s_Main.PoiEvent(nodename);
        },
        /**********************END******************************/

        /**********************UI事件****************************/
        //无人机实时视频窗口
        closeDroneCameraDetial: function () {
            require('sl_Drone').closeCameraDetial();            
        },
        //摄像头视频窗口
        closeCameraDetial: function () {
            require('sl_Camera').closeCameraDetial();           
        },
        //关闭事件详情
        closeDetail: function () {
            require('sl_Event').closeDetail();          
        },
        /**********************END******************************/
    }
});