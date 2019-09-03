define(["config", "common", "g_Main", "e_Main", "g_Echart", "gl_GardenBuilding", "gl_Stop", "gl_UnmannedCar", "gl_Event", "el_EstateInfo", "el_AtlasChart", "el_HotMap","b_BuildingFloor"], function (con, com, g_Main, e_Main, g_Echart, gl_GardenBuilding, gl_Stop, gl_UnmannedCar, gl_Event, el_EstateInfo, el_AtlasChart, el_HotMap,b_BuildingFloor) {
    /****************************园区****************************/
    return {
        loadMain_e_Main: function () {
            com.LayerFlyto(16, function () {

            })
            e_Main.loadMain();
        },
        loadEstateInfo: function () {
        com.LayerFlyto(16, function () {
                
            })
            el_EstateInfo.loadEstateInfo();
        },
        loadAtlasChart: function () {
            com.LayerFlyto(17, function () {

            })
            el_AtlasChart.loadAtlasChart();
        },
        loadHotMap: function () {
             com.LayerFlyto(18);
            el_HotMap.loadHotMap();
        },
        loadMain_g_Main: function () {
            //飞行到园区视角
            com.LayerFlyto(20, function () { 

            })
            g_Main.loadMain();
        },
        loadBuilding: function () {
            //飞行到园区视角
           com.LayerFlyto(311, function () { 

            })
            b_BuildingFloor.loadBuilding();
        },
        loadStop: function () {
            com.LayerFlyto(21);
            gl_Stop.loadStop();
        },
        loadUnmannedCar: function () {
            com.LayerFlyto(22, function () {

            })

            gl_UnmannedCar.loadUnmannedCar();
        },
        loadEvent: function () {
            com.LayerFlyto(23)
            gl_Event.loadEvent();
        },

        /////////////////////////////////////图表控制///////////////////////////////////////////////////
        loadBigChart: function (seat) {
            require("g_Echart").loadBigChart(seat);
        },
        closeBigChart: function () {
            require("g_Echart").closeBigChart()
        },
        ///////////////////////////////////end////////////////////////////////////////////////////////

        /*******************************POI操作********************************************/

        PoiEvent: function (nodename) {
            g_Main.PoiEvent(nodename);            
        },
        //无人车poi点击
        showUnmannedCarTrajectors: function (nodename) {
        require("gl_UnmannedCar").showUnmannedCarTrajectors(nodename);        
        },
        showParkingLotDetail: function (nodename) {
            require("gl_Stop").showParkingLotDetail(nodename);
            
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
         //关闭楼宇详情
        closeBuildingDetail: function () {
            require('b_BuildingFloor').closeBuidingDetail();            
        },
        closeParkingDetail: function () {
                require('gl_Stop').closeEventDetail();
               
            },
        /*********************************END*********************************************/
        
    }

})