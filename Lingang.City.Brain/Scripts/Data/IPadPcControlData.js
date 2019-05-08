define(["config", "g_Home"], function (con, g_Home) {
    return {
        /***************************图层控制*****************************/
        layerControlData: [
        { "menu": "1", "layer": "10", "menuNM": "社区综合", "layerNM": "传感器", "func": "require('s_Main').showLayer(0);" },

            { "menu": "1", "layer": "11", "menuNM": "社区综合", "layerNM": "摄像头", "func": "require('s_Main').showLayer(1);" },
            { "menu": "1", "layer": "12", "menuNM": "社区综合", "layerNM": "无人机", "func": "require('s_Main').showLayer(2);" },
            { "menu": "1", "layer": "13", "menuNM": "社区综合", "layerNM": "村居工作站", "func": "require('s_Main').showLayer(3);" },
            { "menu": "1", "layer": "14", "menuNM": "社区综合", "layerNM": "海岸线", "func": "require('s_Main').showLayer(4);" },
            { "menu": "1", "layer": "15", "menuNM": "社区综合", "layerNM": "事件", "func": "require('s_Main').showLayer(8);" },
            { "menu": "1", "layer": "26", "menuNM": "社区综合", "layerNM": "工地", "func": "require('s_Main').showLayer(5);" },

            { "menu": "2", "layer": "1", "menuNM": "景区管理", "layerNM": "人流热力图", "func": "require('t_Main').showLayer(0);" },
            /*{ "menu": "2", "layer": "2", "menuNM": "景区管理", "layerNM": "实时路况", "func": "require('iPad').layerSocietyControl('2');" },*/
            { "menu": "2", "layer": "3", "menuNM": "景区管理", "layerNM": "摄像头", "func": "require('t_Main').showLayer(1);" },
            { "menu": "2", "layer": "4", "menuNM": "景区管理", "layerNM": "无人机", "func": "require('t_Main').showLayer(2);" },
            { "menu": "2", "layer": "5", "menuNM": "景区管理", "layerNM": "停车场", "func": "require('t_Main').showLayer(3);" },
            { "menu": "2", "layer": "6", "menuNM": "景区管理", "layerNM": "公交", "func": "require('t_Main').showLayer(4);" },
            { "menu": "2", "layer": "7", "menuNM": "景区管理", "layerNM": "事件", "func": "require('t_Main').showLayer(5);" },
            { "menu": "2", "layer": "8", "menuNM": "景区管理", "layerNM": "人流预测", "func": "require('t_Main').showLayer(6);" },
            { "menu": "2", "layer": "9", "menuNM": "景区管理", "layerNM": "交通仿真", "func": "require('t_Main').showLayer(7);" },


            { "menu": "3", "layer": "16", "menuNM": "产业发展", "layerNM": "产业信息", "func": " require('mainMenu').showLayer_e_Main(0);" },
            { "menu": "3", "layer": "17", "menuNM": "产业发展", "layerNM": "象限图谱", "func": " require('mainMenu').showLayer_e_Main(1);" },
            { "menu": "3", "layer": "18", "menuNM": "产业发展", "layerNM": "人员分布", "func": " require('mainMenu').showLayer_e_Main(2);" },
            { "menu": "3", "layer": "19", "menuNM": "产业发展", "layerNM": "园区信息", "func": " require('mainMenu').showLayer_e_Main(3);" },

            { "menu": "3", "layer": "20", "menuNM": "产业发展", "layerNM": "楼宇", "func": "require('mainMenu').showLayer_gMain(0);" },
            { "menu": "3", "layer": "21", "menuNM": "产业发展", "layerNM": "停车", "func": "require('mainMenu').showLayer_gMain(1);" },
            { "menu": "3", "layer": "22", "menuNM": "产业发展", "layerNM": "无人驾驶接驳车", "func": "require('mainMenu').showLayer_gMain(2);" },
            { "menu": "3", "layer": "23", "menuNM": "产业发展", "layerNM": "事件", "func": "require('mainMenu').showLayer_gMain(3);" },
            { "menu": "3", "layer": "24", "menuNM": "产业发展", "layerNM": "产业信息", "func": "require('mainMenu').showLayer_gMain(4);" },

        ],

        /***************************POI控制*****************************/
        poiControlData: [
            { "menu": "1", "layer": "12", "menuNM": "社区综合", "layerNM": "无人机", "func": "require('sl_Drone').loadDroneDetail('*');" },

            { "menu": "2", "layer": "", "menuNM": "景区管理", "layerNM": "所有POI", "func": "require('t_Main').PoiEvent('*');" },
            //{ "menu": "2", "layer": "3", "menuNM": "景区管理", "layerNM": "摄像头-POI", "func": "require('t_Main').PoiEvent('*');" },
            
            { "menu": "3", "layer": "", "menuNM": "产业发展", "layerNM": "园区信息", "func": "require('iPad').poiIndustryControl('*');" },
            //{ "menu": "3", "layer": "19", "menuNM": "产业发展", "layerNM": "园区信息", "func": "require('iPad').poiIndustryControl('*');" },
            //{ "menu": "3", "layer": "20", "menuNM": "产业发展", "layerNM": "园区信息-楼宇POI", "func": "require('iPad').poiIndustryControl('*');" },
            //{ "menu": "3", "layer": "21", "menuNM": "产业发展", "layerNM": "园区信息-停车POI", "func": "require('iPad').poiIndustryControl('*');" },
            //{ "menu": "3", "layer": "22", "menuNM": "产业发展", "layerNM": "园区信息-无人车POI", "func": "require('iPad').poiIndustryControl('*');" },
            //{ "menu": "3", "layer": "23", "menuNM": "产业发展", "layerNM": "园区信息-事件POI", "func": "require('iPad').poiIndustryControl('*');" },
        ],

        /************************UI事件************************/
        poiWinControlData: [
        { "menu": "1", "layer": "12", "menuNM": "社区综合", "layerNM": "无人机", POISTR: "Drone", "command": "close", "func": "require('sl_Drone').closeCameraDetial();" },//无人机视频窗口关闭

        { "menu": "2", "layer": "4", "menuNM": "景区管理", "layerNM": "无人机", POISTR: "POITourDrone", "command": "close", "func": "require('tl_Drone').closeCameraDetial();" },//无人机窗口关闭
        { "menu": "2", "layer": "3", "menuNM": "景区管理", "layerNM": "摄像头", POISTR: "POITourCamera", "command": "close", "func": "require('tl_Camera').closeCameraDetial();" },//摄像头窗口关闭
        { "menu": "2", "layer": "7", "menuNM": "景区管理", "layerNM": "事件", POISTR: "POITourEvent", "command": "close", "func": "require('tl_Event').closeDetail();" },//事件窗口关闭

        { "menu": "3", "layer": "19", "menuNM": "产业发展", "layerNM": "代表企业", POISTR: "POIIndustryGTopCompany", "command": "open", "func": "$('.cy-qy-navbar').removeClass('active');require('gl_TopCompany').flyToBuilding();" },//花展开
        { "menu": "3", "layer": "19", "menuNM": "产业发展", "layerNM": "代表企业", POISTR: "POIIndustryGTopCompany", "command": "close", "func": "require('gl_TopCompany').closeTopCompanyInfo();$('.cy-qy-menu-close').click();" },//花隐藏
        { "menu": "2", "layer": "4", "menuNM": "产业发展", "layerNM": "代表企业", POISTR: "POITourDrone", "command": "close", "func": "require('gl_TopCompany').closeTopCompanyInfo();$('.cy-qy-menu-close').click();" },//无人机窗口关闭       
        ],

        /************************UI Button事件*******************************/
        UIButtonControlData: [
            { "menu": "3", "layer": "19", "menuNM": "产业发展", "layerNM": "代表企业", type: "flowerClk", "func": "$('.cy-qy-menu a')[*].click();" },  //花瓣显示隐藏
            { "menu": "3", "layer": "20", "menuNM": "产业发展", "layerNM": "楼宇", type: "buildingFloor", "func": "require('b_BuildingFloor').openFloor(*);" },//揭楼层
        ],
    }
})