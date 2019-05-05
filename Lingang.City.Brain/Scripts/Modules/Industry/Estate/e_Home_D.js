﻿define(["config", "common", "e_Main", "control_Ajax", "g_Main", "e_Echart", "el_EstateInfo", "el_AtlasChart", "el_HotMap"], function (con, com, e_Main, control_Ajax, g_Main, e_Echart, el_EstateInfo, el_AtlasChart, el_HotMap) {
    return {
        loadMain: function () {
            e_Main.loadMain();
            var jsondata = {
                "menu": "3",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendMenuControlInfo(jsondata); //发送控制命令
        },
        openUnity3dWin: function () {
            e_Main.openUnity3dWin();
        },
    }
});