define(["config"], function (con) {
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


            { "menu": "3", "layer": "16", "menuNM": "产业发展", "layerNM": "产业信息", "func": "require('iPad').layerIndustryControl('16');" },
            { "menu": "3", "layer": "17", "menuNM": "产业发展", "layerNM": "象限图谱", "func": "require('iPad').layerIndustryControl('17');" },
            { "menu": "3", "layer": "18", "menuNM": "产业发展", "layerNM": "人员分布", "func": "require('iPad').layerIndustryControl('18');" },
            { "menu": "3", "layer": "19", "menuNM": "产业发展", "layerNM": "园区信息", "func": "require('iPad').layerIndustryControl('19');" },
        ],

        /***************************POI控制*****************************/
        poiControlData: [
            //{ "menu": "0", "layer": "1", "menuNM": "社区综合", "layerNM": "传感器", "func": "require('iPad').layerSocietyControl('1');" },
            //{ "menu": "3", "layer": "16", "menuNM": "产业发展", "layerNM": "产业信息", "func": "require('iPad').layerIndustryControl('16');" },
            //{ "menu": "3", "layer": "17", "menuNM": "产业发展", "layerNM": "象限图谱", "func": "require('iPad').layerIndustryControl('17');" },
            //{ "menu": "3", "layer": "18", "menuNM": "产业发展", "layerNM": "人员分布", "func": "require('iPad').layerIndustryControl('18');" },
            { "menu": "1", "layer": "12", "menuNM": "社区综合", "layerNM": "无人机", "func": "require('sl_Drone').loadDroneDetail('*');" },
            { "menu": "3", "layer": "19", "menuNM": "产业发展", "layerNM": "园区信息", "func": "require('iPad').poiIndustryControl('*');" },
        ],
    }
})