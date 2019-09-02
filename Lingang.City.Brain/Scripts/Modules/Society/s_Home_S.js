define(["config", "common", "tl_Drone","s_Main", 's_LayerMenuAjax', 's_LeftLayer', 's_RightLayer', 's_Echart', 'sl_IOT', 'sl_Camera', 'sl_Drone', 'sl_Event', 'sl_SeaboardLine', 'sl_WorkSite', 'sl_WorkStation', 'sl_Street', 'sl_Grid', 'sl_Pipeline'],
function (con, com, tl_Drone, s_Main, s_LayerMenuAjax, s_LeftLayer, s_RightLayer, s_Echart, sl_IOT, sl_Camera, sl_Drone, sl_Event, sl_SeaboardLine, sl_WorkSite, sl_WorkStation, sl_Street, sl_Grid, sl_Pipeline) {
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
            setTimeout(function () {
                if (require('sl_Pipeline').isOpenedPipeline == true) {
                    require('sl_Pipeline').displayPipeline();
                }
            }, 1000);

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
            sl_Drone.loadDrone();
            sl_Drone.loadLeftSecond();
            require("s_Main").loadCenter1Info();
        },
        loadWorkStation: function () {
            sl_WorkStation.loadWorkStation();
            sl_IOT.loadLeftSecond();
            require("s_Main").loadCenter1Info();
        },
        layerSeaboard: function () {
            com.LayerFlyto(14)
            sl_SeaboardLine.layerSeaboard();
            sl_SeaboardLine.loadLeftSecond();
           // require("s_Main").loadCenter1Info();
            require("s_Main").loadCenter1();
        },
        loadWorkSite: function () {

            Q3D.globalCamera().flyTo(("396108.71569771634,2102.016891479492,-3414150.4402918345").toVector3d(), ("-30.96967124938965,0.03673381358385086,0.016093820333480835").toVector3(), 1, null);
            sl_WorkSite.loadWorkSite();
            sl_WorkSite.loadLeftSecond();
           // require("s_Main").loadCenter1Info();
            require("s_Main").loadCenter1();
        },
        loadEvent: function () {
            com.LayerFlyto(15, function () { });
            sl_Event.loadEvent();
            sl_IOT.loadLeftSecond();
            require("s_Main").loadCenter1();
        },
        loadStreet: function () {
            Q3D.globalCamera().flyTo(("395990.1351315872,502.45323181152343,-3416512.159721699").toVector3d(), ("-31.376115798950195,8.757302284240722,5.298542499542236").toVector3(), 1, function () {
                require("sl_Street").createStreetLine();
            });
            sl_Street.loadWorkSite();
            sl_Street.loadLeftSecond();
            require("s_Main").loadCenter1();
        },
        loadGrid: function () {
            com.LayerFlyto(281, function () {

            });
            sl_Grid.loadGridInfo();
            sl_Grid.loadLeftSecond();
            require("s_Main").loadCenter1();
        },
        loadPipeline:function(){
            sl_Pipeline.openPipeline();
        },
        /////////////////////////////////////图表控制///////////////////////////////////////////////////
        loadBigChart: function (seat) {
            require("s_Echart").loadBigChart(seat);
        },
        closeBigChart: function () {
            require("s_Echart").closeBigChart();
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
        //关闭事件派单详情
        closeEventPaidan: function () {
            require('sl_Event').closeEventPaidan();
        },
        //关闭楼栋视频
        closeBuildVideo: function () {
            require('sl_Event').closeBuildVideo();
        },
        //关闭事件无人机视频
        closeEventDrone: function () {
            require('sl_Event').closeEventDrone();
        },
        //关闭传感器详情
        closeIOTDetail: function () {
            require('sl_IOT').closeIOTDetail();
        },
        /**********************END******************************/
    }
});