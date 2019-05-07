define(["config", "common", "t_Main", "t_LayerMenuAjax", "animsition", "t_Echart", "tl_Bus", "tl_Metro", "tl_Camera", "tl_Drone", "tl_Event", "tl_ParkingLot", "tl_RoadCondition", "tl_TrafficSimulation", "tl_StreamCalculate", "tl_VisitorsMap", "t_LayerMenuData","t_Home"],
    function (con, com, t_Main, t_LayerMenuAjax, animsition, t_Echart, tl_Bus, tl_Metro, tl_Camera, tl_Drone, tl_Event, tl_ParkingLot, tl_RoadCondition, tl_TrafficSimulation, tl_StreamCalculate, tl_VisitorsMap, t_LayerMenuData,t_Home) {
        return {
            loadMain: function () {
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

            //loadBigChartleft3: function () {
            //    t_Echart.loadBigChart();
            //},
            //loadBigChartleft4: function () {
            //    t_Echart.loadBigChart();
            //},
            //loadBigChartlefts1: function () {
            //    t_Echart.loadBigChart();
            //},
            //loadBigChartlefts3: function () {
            //    t_Echart.loadBigChart();
            //},
            //loadBigChartright1: function () {
            //    t_Echart.loadBigChart();
            //},
            //loadBigChartright2: function () {
            //    t_Echart.loadBigChart();
            //},
            //loadBigChartright3: function () {
            //    t_Echart.loadBigChart();
            //},

            /*******************底部菜单图层**************************/
            loadVisitorsMap: function () {
                tl_VisitorsMap.loadVisitorsMap();
            },
            loadRoadCondition: function () {
                tl_RoadCondition.loadRoadCondition();
            },
            loadCamera: function () {
                tl_Camera.loadCamera();
            },
            loadDrone: function () {
                tl_Drone.loadDrone();
            },
            loadParkingLot: function () {
                tl_ParkingLot.loadParkingLot();
            },
            PublicTransportation: function () {
                tl_Bus.loadBus();
                tl_Bus.loadBusLine();
                tl_Metro.loadMetro();
            },
            loadEvent: function () {
                tl_Event.loadEvent();
            },
            loadStream: function () {
                tl_StreamCalculate.loadStream();
            },
            loadTrafficSimulation: function () {
                tl_TrafficSimulation.loadTrafficSimulation();
            },
            /************************END******************************/
           
            
        }
    });