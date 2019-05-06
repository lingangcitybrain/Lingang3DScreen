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


        /*******************************POI操作********************************************/

        PoiEvent: function (nodename) {
            g_Main.PoiEvent(nodename);            
        },
        //无人车poi点击
        showUnmannedCarTrajectors: function (nodename) {
        require("gl_UnmannedCar").showUnmannedCarTrajectors(nodename);        
    },
        /*************************************END******************************************/
        /*****************************UI窗口交互******************************************/
        //关闭代表企业花瓣窗口
        closeTopCompanyInfo: function () {
            require('gl_TopCompany').closeTopCompanyInfo();
        },
        //花瓣点击事件
        FlowerClickFn: function (index) {
           //没有可执行代码，同步中控台方法名称
        },
        //点击进入企业详情
        clickCompany: function () {       
            $(".cy-qy-navbar").removeClass("active");
            //点击入驻企业操作
            require("gl_TopCompany").flyToBuilding();
            //没有可执行代码，同步中控台方法名称

        },
        //楼宇揭楼层
        openFloor: function (floor) {
            require("b_BuildingFloor").openFloor(floor);
            
        },
        /*********************************END*********************************************/
    }

})