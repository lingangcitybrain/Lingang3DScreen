define(["config"], function (con) {
    return {
        /***************************图层控制*****************************/
        layerControlData: [
            { "menu": "0", "layer": "1", "menuNM": "社区综合", "layerNM": "传感器", "func": "require('iPad').layerSocietyControl('1');" },
            { "menu": "3", "layer": "16", "menuNM": "产业发展", "layerNM": "产业信息", "func": "require('iPad').layerIndustryControl('16');" },
            { "menu": "3", "layer": "17", "menuNM": "产业发展", "layerNM": "象限图谱", "func": "require('iPad').layerIndustryControl('17');" },
            { "menu": "3", "layer": "18", "menuNM": "产业发展", "layerNM": "人员分布", "func": "require('iPad').layerIndustryControl('18');" },
            { "menu": "3", "layer": "19", "menuNM": "产业发展", "layerNM": "园区信息", "func": "require('iPad').layerIndustryControl('19');" },
        ],

        /***************************POI控制*****************************/
        poiControlData: [
            { "menu": "0", "layer": "1", "menuNM": "社区综合", "layerNM": "传感器", "func": "require('iPad').layerSocietyControl('1');" },
            { "menu": "3", "layer": "16", "menuNM": "产业发展", "layerNM": "产业信息", "func": "require('iPad').layerIndustryControl('16');" },
            { "menu": "3", "layer": "17", "menuNM": "产业发展", "layerNM": "象限图谱", "func": "require('iPad').layerIndustryControl('17');" },
            { "menu": "3", "layer": "18", "menuNM": "产业发展", "layerNM": "人员分布", "func": "require('iPad').layerIndustryControl('18');" },
            { "menu": "3", "layer": "19", "menuNM": "产业发展", "layerNM": "园区信息", "func": "require('iPad').layerIndustryControl('19');" },
        ],
    }
})