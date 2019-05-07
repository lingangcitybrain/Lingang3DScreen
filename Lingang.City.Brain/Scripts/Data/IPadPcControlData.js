define(["config", "g_Home"], function (con, g_Home) {
    return {
        /***************************图层控制*****************************/
        layerControlData: [
            { "menu": "1", "layer": "10", "menuNM": "社区综合", "layerNM": "传感器", "func": "require('iPad').layerSocietyControl('10');" },

            { "menu": "1", "layer": "11", "menuNM": "社区综合", "layerNM": "摄像头", "func": "require('iPad').layerSocietyControl('11');" },
            { "menu": "1", "layer": "12", "menuNM": "社区综合", "layerNM": "无人机", "func": "require('iPad').layerSocietyControl('12');" },
            { "menu": "1", "layer": "13", "menuNM": "社区综合", "layerNM": "村居工作站", "func": "require('iPad').layerSocietyControl('13');" },
            { "menu": "1", "layer": "14", "menuNM": "社区综合", "layerNM": "海岸线", "func": "require('iPad').layerSocietyControl('14');" },
            { "menu": "1", "layer": "15", "menuNM": "社区综合", "layerNM": "事件", "func": "require('iPad').layerSocietyControl('15');" },
            { "menu": "1", "layer": "26", "menuNM": "社区综合", "layerNM": "工地", "func": "require('iPad').layerSocietyControl('26');" },

            { "menu": "2", "layer": "1", "menuNM": "景区管理", "layerNM": "人流热力图", "func": "require('t_Main').showLayer(0);" },
            /*{ "menu": "2", "layer": "2", "menuNM": "景区管理", "layerNM": "实时路况", "func": "require('iPad').layerSocietyControl('2');" },*/
            { "menu": "2", "layer": "3", "menuNM": "景区管理", "layerNM": "摄像头", "func": "require('t_Main').showLayer(1);" },
            { "menu": "2", "layer": "4", "menuNM": "景区管理", "layerNM": "无人机", "func": "require('t_Main').showLayer(2);" },
            { "menu": "2", "layer": "5", "menuNM": "景区管理", "layerNM": "停车场", "func": "require('t_Main').showLayer(3);" },
            { "menu": "2", "layer": "6", "menuNM": "景区管理", "layerNM": "公交", "func": "require('t_Main').showLayer(4);" },
            { "menu": "2", "layer": "7", "menuNM": "景区管理", "layerNM": "事件", "func": "require('t_Main').showLayer(5);" },
            { "menu": "2", "layer": "8", "menuNM": "景区管理", "layerNM": "人流预测", "func": "require('t_Main').showLayer(6);" },
            { "menu": "2", "layer": "9", "menuNM": "景区管理", "layerNM": "交通仿真", "func": "require('t_Main').showLayer(7);" },
            //{ "menu": "2", "layer": "1", "menuNM": "景区管理", "layerNM": "人流热力图", "func": "require('iPad').layerSocietyControl('1');" },
            //{ "menu": "2", "layer": "2", "menuNM": "景区管理", "layerNM": "实时路况", "func": "require('iPad').layerSocietyControl('2');" },
            //{ "menu": "2", "layer": "3", "menuNM": "景区管理", "layerNM": "摄像头", "func": "require('iPad').layerSocietyControl('3');" },
            //{ "menu": "2", "layer": "4", "menuNM": "景区管理", "layerNM": "无人机", "func": "require('iPad').layerSocietyControl('4');" },
            //{ "menu": "2", "layer": "5", "menuNM": "景区管理", "layerNM": "停车场", "func": "require('iPad').layerSocietyControl('5');" },
            //{ "menu": "2", "layer": "6", "menuNM": "景区管理", "layerNM": "公交", "func": "require('iPad').layerSocietyControl('6');" },
            //{ "menu": "2", "layer": "7", "menuNM": "景区管理", "layerNM": "事件", "func": "require('iPad').layerSocietyControl('7');" },
            //{ "menu": "2", "layer": "8", "menuNM": "景区管理", "layerNM": "人流预测", "func": "require('iPad').layerSocietyControl('8');" },
            //{ "menu": "2", "layer": "9", "menuNM": "景区管理", "layerNM": "交通仿真", "func": "require('iPad').layerSocietyControl('9');" },


            { "menu": "3", "layer": "16", "menuNM": "产业发展", "layerNM": "产业信息", "func": "require('iPad').layerIndustryControl('16');" },
            { "menu": "3", "layer": "17", "menuNM": "产业发展", "layerNM": "象限图谱", "func": "require('iPad').layerIndustryControl('17');" },
            { "menu": "3", "layer": "18", "menuNM": "产业发展", "layerNM": "人员分布", "func": "require('iPad').layerIndustryControl('18');" },
            { "menu": "3", "layer": "19", "menuNM": "产业发展", "layerNM": "园区信息", "func": "require('iPad').layerIndustryControl('19');" },

            { "menu": "3", "layer": "20", "menuNM": "产业发展", "layerNM": "楼宇", "func": "require('iPad').layerIndustryControl('20');" },
            { "menu": "3", "layer": "21", "menuNM": "产业发展", "layerNM": "停车", "func": "require('iPad').layerIndustryControl('21');" },
            { "menu": "3", "layer": "22", "menuNM": "产业发展", "layerNM": "无人驾驶接驳车", "func": "require('iPad').layerIndustryControl('22');" },
            { "menu": "3", "layer": "23", "menuNM": "产业发展", "layerNM": "事件", "func": "require('iPad').layerIndustryControl('23');" },
            { "menu": "3", "layer": "24", "menuNM": "产业发展", "layerNM": "产业信息", "func": "require('iPad').layerIndustryControl('24');" },
        ],

        /***************************POI控制*****************************/
        poiControlData: [
            //{ "menu": "0", "layer": "1", "menuNM": "社区综合", "layerNM": "传感器", "func": "require('iPad').layerSocietyControl('1');" },
            //{ "menu": "3", "layer": "16", "menuNM": "产业发展", "layerNM": "产业信息", "func": "require('iPad').layerIndustryControl('16');" },
            //{ "menu": "3", "layer": "17", "menuNM": "产业发展", "layerNM": "象限图谱", "func": "require('iPad').layerIndustryControl('17');" },
            //{ "menu": "3", "layer": "18", "menuNM": "产业发展", "layerNM": "人员分布", "func": "require('iPad').layerIndustryControl('18');" },
            { "menu": "1", "layer": "12", "menuNM": "社区综合", "layerNM": "无人机", "func": "require('sl_Drone').loadDroneDetail('*');" },
            { "menu": "3", "layer": "19", "menuNM": "产业发展", "layerNM": "园区信息", "func": "require('iPad').poiIndustryControl('*');" },
            { "menu": "3", "layer": "20", "menuNM": "产业发展", "layerNM": "园区信息-楼宇POI", "func": "require('iPad').poiIndustryControl('*');" },
            { "menu": "3", "layer": "21", "menuNM": "产业发展", "layerNM": "园区信息-停车POI", "func": "require('iPad').poiIndustryControl('*');" },
            { "menu": "3", "layer": "22", "menuNM": "产业发展", "layerNM": "园区信息-无人车POI", "func": "require('iPad').poiIndustryControl('*');" },
            { "menu": "3", "layer": "23", "menuNM": "产业发展", "layerNM": "园区信息-事件POI", "func": "require('iPad').poiIndustryControl('*');" },
        ],

        /************************UI事件************************/
        poiWinControlData: [
        { "menu": "1", "layer": "12", "menuNM": "社区综合", "layerNM": "无人机", POISTR: "Drone", "command": "close", "func": "require('sl_Drone').closeCameraDetial();" },//无人机视频窗口关闭

        { "menu": "3", "layer": "19", "menuNM": "产业发展", "layerNM": "代表企业", POISTR: "POIIndustryGTopCompany", "command": "open", "func": "$('.cy-qy-navbar').removeClass('active');require('gl_TopCompany').flyToBuilding();" },//花展开
        { "menu": "3", "layer": "19", "menuNM": "产业发展", "layerNM": "代表企业", POISTR: "POIIndustryGTopCompany", "command": "close", "func": "require('gl_TopCompany').closeTopCompanyInfo();$('.cy-qy-menu-close').click();" },//花隐藏
       

        //{ "menu": "", "layer": "", "menuNM": "", "layerNM": "", POISTR: "POITourCamera", "command": "open", "func": 'require("tl_Camera").loadCameraDetial(nodename);' },
        //{ "menu": "", "layer": "", "menuNM": "", "layerNM": "", POISTR: "POITourCamera", "command": "close", "func": 'require("tl_Camera").closeCameraDetial();$(".vex-dialog-button-primary").click();' },
        // { "menu": "3", "layer": "7", "menuNM": "", "layerNM": "事件", POISTR: "POITourEvent", "command": "open", "func": 'require("tl_Event").loadEventDetial(nodename)' },
        //{ "menu": "3", "layer": "7", "menuNM": "", "layerNM": "事件", POISTR: "POITourEvent", "command": "close", "func": 'require("tl_Event").closeDetail();' },

        //{ "menu": "2", "layer": "9", "menuNM": "", "layerNM": "仿真", POISTR: "", "command": "open", "func": ' require("tl_TrafficSimulation").loadCamera();' },
        //{ "menu": "2", "layer": "9", "menuNM": "", "layerNM": "仿真", POISTR: "", "command": "close", "func": ' require("tl_TrafficSimulation").closeCameraDetial();' },

        //{ "menu": "2", "layer": "4", "menuNM": "", "layerNM": "无人机视频窗口", POISTR: "", "command": "open", "func": ' require("tl_Drone").loadDroneCamera();' },
        //{ "menu": "2", "layer": "4", "menuNM": "", "layerNM": "无人机视频窗口", POISTR: "", "command": "close", "func": ' require("tl_Drone").closeCameraDetial();' },
        ],

        /************************UI Button事件*******************************/
        UIButtonControlData: [
            { "menu": "3", "layer": "19", "menuNM": "产业发展", "layerNM": "代表企业", type: "flowerClk", "func": "$('.cy-qy-menu a')[*].click();" },  //花瓣显示隐藏
            { "menu": "3", "layer": "20", "menuNM": "产业发展", "layerNM": "楼宇", type: "buildingFloor", "func": "require('b_BuildingFloor').openFloor(*);" },//揭楼层
        ],
    }
})