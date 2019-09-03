define(["config", "common", "t_Main", "t_LayerMenuAjax", "animsition", "t_Echart", "tl_Bus", "tl_Metro", "tl_Camera", "tl_Drone", "tl_Event", "tl_ParkingLot", "tl_RoadCondition", "tl_TrafficSimulation", "tl_StreamCalculate", "tl_VisitorsMap", "t_LayerMenuData","t_Home"],
    function (con, com, t_Main, t_LayerMenuAjax, animsition, t_Echart, tl_Bus, tl_Metro, tl_Camera, tl_Drone, tl_Event, tl_ParkingLot, tl_RoadCondition, tl_TrafficSimulation, tl_StreamCalculate, tl_VisitorsMap, t_LayerMenuData,t_Home) {
        return {
            loadMain: function () {
                com.LayerFlyto(1);
                t_Main.loadMain(function () {
                    setTimeout(function () { $('.chartzoomin').hide() }, 1000);
                });
            },
            loadBigChart: function (seat) {
                require("t_Echart").loadBigChart(seat);
            },
            closeBigChart: function () {
                require("t_Echart").closeBigChart()
            },

            /*******************底部菜单图层**************************/
            loadVisitorsMap: function () {
                //默认视口
                com.LayerFlyto(1);
                tl_VisitorsMap.loadVisitorsMap();
            },
            loadRoadCondition: function () {
                tl_RoadCondition.loadRoadCondition();
            },
            loadCamera: function () {
                //默认视口
                com.LayerFlyto(3)
                tl_Camera.loadCamera();
            },
            loadDrone: function () {
                com.LayerFlyto(12, function () { })
                tl_Drone.loadDrone();
            },
            loadParkingLot: function () {
                //默认视口
                com.LayerFlyto(5)
                tl_ParkingLot.loadParkingLot();
            },
            PublicTransportation: function () {
                //默认视口
                com.LayerFlyto(6)
                tl_Bus.loadBus();
                tl_Bus.loadBusLine();
                tl_Metro.loadMetro();
            },
            loadEvent: function () {
                //默认视口
                com.LayerFlyto(7, function () {

                })
                tl_Event.loadEvent();
            },
            loadStream: function () {
                com.LayerFlyto(8); //飞到默认时口
                tl_StreamCalculate.loadStream();
            },
            loadTrafficSimulation: function () {
                //切换视口
                com.LayerFlyto(9, null, 2);
                tl_TrafficSimulation.loadTrafficSimulation();
            },
            /************************END******************************/
           
            /**************************POI点击事件******************************/
            PoiEvent: function (nodename) {
                t_Main.PoiEvent(nodename);
            },
            /******************************END********************************/

            /********************************UI点击*********************************/
            //关闭无人机视频窗口
            closeDroneCameraDetial: function () {
                require('tl_Drone').closeCameraDetial();
            },
            //关闭摄像头窗口
            closeCameraDetial: function () {
                require('tl_Camera').closeCameraDetial();               
            },
             //关闭事件窗口
            closeEventDetail: function () {
                require('tl_Event').closeDetail();               
            },
            //关闭公交详情窗口
            closeBusStopDetail: function () {
                require('tl_Bus').closeBusStopDetail();
            },
            //关闭交通仿真窗口
            closeCameraDetialTraffic: function () {
                require('tl_TrafficSimulation').closeCameraDetial();
            },
            /**********************************END*********************************/

            /****************图表点击事件*********************/
            //人员车辆统计
            ryClickEvent: function (domName) {
                require('t_Echart').rycltjClickEvent(domName);
            },
            //景区事件统计
            jqsjtjClickEvent: function (domName) {
                require('t_Echart').jqsjtjClickEvent(domName);                
            },
            //人员车辆统计图表日期点击事件
            rqClickEvent: function (index) {
                //index=parseInt(index);
                //$("#rq").children()[index].click()
            },
            //人员车辆统计图表日期点击事件
            rqPreOrNextClickEvent: function (domID) {
                //index = parseInt(index);
                //$("#rq").children()[index].click()
            },
            //景区事件列表放大
            EventListBigChart: function () {
                require('t_Echart').loadCenterEventList();
                require('t_Echart').closeBigChart();
            },
            //事件列表时间点击
            EventListBigChartTimeClickEvent: function (index) {
                
            },
            closeCenterEventList: function () {
                require('t_Echart').closeCenterEventList();
            },
            /*********************END************************/
        }
    });