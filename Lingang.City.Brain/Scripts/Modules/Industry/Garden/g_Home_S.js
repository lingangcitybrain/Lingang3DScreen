define(["config", "common", "g_Main", "e_Main", "gl_GardenBuilding", "gl_Stop", "gl_UnmannedCar", "gl_Event", "el_EstateInfo", "el_AtlasChart", "el_HotMap"], function (con, com, g_Main, e_Main, gl_GardenBuilding, gl_Stop, gl_UnmannedCar, gl_Event, el_EstateInfo, el_AtlasChart, el_HotMap) {
    /****************************园区****************************/
    return {
        loadMain_e_Main: function () {
            e_Main.loadMain();
        },
        loadEstateInfo: function () {
            el_EstateInfo.loadEstateInfo();
        },
        loadAtlasChart: function () {
            el_AtlasChart.loadAtlasChart();
        },
        loadHotMap: function () {
            el_HotMap.loadHotMap();
        },
        loadMain_g_Main: function () {
            g_Main.loadMain();
        },
        loadBuilding: function () {
            gl_GardenBuilding.loadBuilding();
        },
        loadStop: function () {
            gl_Stop.loadStop();
        },
        loadUnmannedCar: function () {
            gl_UnmannedCar.loadUnmannedCar();
        },
        loadEvent: function () {
            gl_Event.loadEvent();
        },
    }

})