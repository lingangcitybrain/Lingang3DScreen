define(["config", "common", "t_Main", "t_LayerMenuAjax", "animsition", "t_Echart", "tl_Bus", "tl_Metro", "tl_Camera", "tl_Drone", "tl_Event", "tl_ParkingLot", "tl_RoadCondition", "tl_TrafficSimulation", "tl_StreamCalculate", "tl_VisitorsMap", "t_LayerMenuData"],
    function (con, com, t_Main, t_LayerMenuAjax, animsition, t_Echart, tl_Bus, tl_Metro, tl_Camera, tl_Drone, tl_Event, tl_ParkingLot, tl_RoadCondition, tl_TrafficSimulation, tl_StreamCalculate, tl_VisitorsMap, t_LayerMenuData) {
        return {
            loadMain: function () {
                t_Main.loadMain(function () {
                    setTimeout(function () { $('.chartzoomin').hide() }, 1000);
                });
            },
            loadBigChartleft2: function () {
                t_Echart.loadBigChart();
            },
            loadBigChartleft3: function () {
                t_Echart.loadBigChart();
            },
            loadBigChartleft4: function () {
                t_Echart.loadBigChart();
            },
            loadBigChartlefts1: function () {
                t_Echart.loadBigChart();
            },
            loadBigChartlefts3: function () {
                t_Echart.loadBigChart();
            },
            loadBigChartright1: function () {
                t_Echart.loadBigChart();
            },
            loadBigChartright2: function () {
                t_Echart.loadBigChart();
            },
            loadBigChartright3: function () {
                t_Echart.loadBigChart();
            },
        }
    });