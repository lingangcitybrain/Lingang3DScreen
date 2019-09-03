define(["config", "common", "e_Main", "control_Ajax", "g_Main", "e_Echart", "el_EstateInfo", "el_AtlasChart", "el_HotMap"], function (con, com, e_Main, control_Ajax, g_Main, e_Echart, el_EstateInfo, el_AtlasChart, el_HotMap) {
    return {
        loadMain: function () {
            com.LayerFlyto(16, function () {

            })
            e_Main.loadMain();
            var jsondata = {
                "menu": "3",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendMenuControlInfo(jsondata); //发送控制命令
        },
        openUnity3dWin: function () {
            e_Main.openUnity3dWin(con.TyHref_D);

            var jsondata = {
                "menu": "4",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendMenuControlInfo(jsondata); //发送控制命令
        },
        ////////////////////////图表控制/////////////////////////////////////
        loadBigChart: function (divname) {
            require("e_Echart").loadBigChart(divname);
            var jsondata = {
                'menu': '3',
                'seat': divname,
                'command': 'open',
            };
            control_Ajax.sendEchartControlInfo(jsondata); //发送控制命令
        },
        closeBigChart: function () {
            require("e_Echart").closeBigChart()
            var jsondata = {
                'menu': '3',
                'seat': '',
                'command': 'close',
            };
            control_Ajax.sendEchartControlInfo(jsondata); //发送控制命令
        },
        ///////////////////////////////end////////////////////////////////////
    }
});