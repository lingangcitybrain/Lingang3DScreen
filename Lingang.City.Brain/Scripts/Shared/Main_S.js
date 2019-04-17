require.config({
    baseUrl: "Scripts",
    paths: {
        //base
        text: 'text',
        jquery: 'jquery-1.10.2',
        jqueryui: "Tools/jqueryUI/jquery-ui",
        qmap3d: "Qmap/QMap3d-src",
        qmap3dcustom: "Qmap/QMap3dV2.3-custom",

        //shared common
        config: 'Shared/Config',
        common: "Shared/Common",
        reset: "Shared/Reset",
        load: "Shared/Load",
        dataCache: "Shared/dataCache",
        mevent: "Shared/MouseEvent",
        //layerControl: "../Shared/layerControl",


        //tools
        countup: "Tools/jqplug/jquery.countup",
        animateNumber: "Tools/Animate-Number/jquery.animateNumber",
        waypoints: "Tools/jqplug/jquery.waypoints.min",
        echarts: "Tools/echarts",
        nicescroll: "Tools/divscroll",
        util: "Tools/util",
        aliplayer: "https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min",
        animsition: "Tools/jqueryUI/jquery.animsition.min",//JS特效



        //Ajax
        e_EchartAjax: "Ajax/Industry/e_EchartAjax",
        s_EchartAjax: "Ajax/Society/s_EchartAjax",
        s_LayerMenuAjax: "Ajax/Society/s_LayerMenuAjax",
        t_LayerMenuAjax: "Ajax/Tour/t_LayerMenuAjax",
        t_EchartAjax: "Ajax/Tour/t_EchartAjax",
        g_EchartAjax: "Ajax/Industry/g_EchartAjax",
        gl_GardenBuildingAjax: "Ajax/Industry/gl_GardenBuildingAjax",
        control_Ajax: "Ajax/IPadPcControlAjax",
        //Data
        s_layerMenuData: "Data/Society/s_LayerMenuData",
        s_EchartData: "Data/Society/s_EchartData",
        
        t_LayerMenuData: "Data/Tour/t_LayerMenuData",
        t_EchartData: "Data/Tour/t_EchartData",

        e_LayerMenuData: "Data/Industry/e_LayerMenuData",
        e_EchartData: "Data/Industry/e_EchartData",

        g_EchartData: "Data/Industry/g_EchartData",
        //Modules
        mainMenu: "Modules/MainMenu",
        iPad: "Modules/IPadPcControl",

        //Society
        //s_Main: "Modules/Society/s_Main",
        s_Main: "Modules/Society/s_MainNew",
        s_LeftLayer: "Modules/Society/s_LeftLayer",
        s_RightLayer: "Modules/Society/s_RightLayer",
        s_Echart: "Modules/Society/s_Echart",
        sl_Camera: "Modules/Society/sl_Camera",
        sl_Drone: "Modules/Society/sl_Drone",
        sl_Event: "Modules/Society/sl_Event",
        sl_IOT: "Modules/Society/sl_IOT",
        sl_SeaboardLine: "Modules/Society/sl_SeaboardLine",
        sl_WorkSite: "Modules/Society/sl_WorkSite",
        sl_WorkStation: "Modules/Society/sl_WorkStation",

        s_Event: "Modules/Society/s_Event",
        s_PoiDetial: "Modules/Society/s_PoiDetial",

        //tour
        //t_Main: "Modules/Tour/t_Main",
        //t_Echart: "Modules/Tour/t_Echart",
        t_Main: "Modules/Tour/t_MainNew",
        t_Echart: "Modules/Tour/t_EchartNew",
        tl_Metro: "Modules/Tour/tl_Metro",
        tl_Bus: "Modules/Tour/tl_Bus",
        tl_Camera: "Modules/Tour/tl_Camera",
        tl_Drone: "Modules/Tour/tl_Drone",
        tl_Event: "Modules/Tour/tl_Event",
        tl_ParkingLot: "Modules/Tour/tl_ParkingLot",
        tl_RoadCondition: "Modules/Tour/tl_RoadCondition",
        tl_StreamCalculate: "Modules/Tour/tl_StreamCalculate",
        tl_TrafficSimulation: "Modules/Tour/tl_TrafficSimulation",
        tl_VisitorsMap: "Modules/Tour/tl_VisitorsMap",


        //Industry
        //Estate
        e_Main: "Modules/Industry/Estate/e_Main",
        e_Echart: "Modules/Industry/Estate/e_Echart",
        el_EstateInfo: "Modules/Industry/Estate/el_EstateInfo",
        el_AtlasChart: "Modules/Industry/Estate/el_AtlasChart",
        el_HotMap: "Modules/Industry/Estate/el_HotMap",
        //Garden
        g_Main: "Modules/Industry/Garden/g_Main",
        g_Echart: "Modules/Industry/Garden/g_Echart",
        gl_GardenBuilding: "Modules/Industry/Garden/gl_GardenBuilding",
        gl_Stop: "Modules/Industry/Garden/gl_Stop",
        gl_UnmannedCar: "Modules/Industry/Garden/gl_UnmannedCar",
        gl_Event: "Modules/Industry/Garden/gl_Event",
        gl_TopCompany: "Modules/Industry/Garden/gl_TopCompany",
        //Building
        b_Main: "Modules/Industry/Building/b_Main",
        b_Echart: "Modules/Industry/Building/b_Echart",
        b_BuildingFloor: "Modules/Industry/Building/b_BuildingFloor",
        //
        //specialEff: "Modules/Test/SpecialEfficiency",
        specialEff: "Modules/SpecialEfficiency",
    },
    shim: {
        "jqueryui": {
            deps: ["jquery"],
            exports: "jqueryui"
        },
        'qmap3d': {
            deps: ['jquery', 'jqueryui'],
            exports: 'Qmap/qmap3d'
        },
        'qmap3dcustom': {
            deps: ['jquery', 'jqueryui', 'qmap3d'],
            exports: 'Qmap/qmap3dcustom'
        },
        'nicescroll': {
            deps: ["jquery"],
            exports: 'nicescroll'
        },
        'countup': {
            deps: ["jquery", "waypoints"],
            exports: 'countup'
        },
        'animateNumber': {
            deps: ["jquery"],
            exports: 'animateNumber'
        },
        'aliplayer': {
            exports: 'aliplayer'
        },
        'animsition': {
            exports: 'animsition'
        }
    },
    waitSeconds: 0,
});


//加载三维
require(['Shared/Map', "qmap3d", "qmap3dcustom", 'jquery', 'jqueryui'], function (mapObj) {
    mapObj.initMap();

   // 社区综治
    require(['s_Main'], function (data) {
        data.loadMain();
        $("body").css("background-color", "black");
    });
 
    // 园区
    //require(['g_Main'], function (data) {
    //    data.loadMain();
    //    $("body").css("background-color", "black");
    //});

    // 产业
    //require(['e_Main'], function (data) {
    //    data.loadMain();
    //    $("body").css("background-color", "black");
    //});

    //大客流 旅游
    //require(['t_Main'], function (data) {
    //    data.loadMain();
    //    $("body").css("background-color", "black");
    //});
})