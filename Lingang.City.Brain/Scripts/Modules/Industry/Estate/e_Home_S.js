define(["config", "common", "e_Main", "g_Main", "e_Echart", "el_EstateInfo", "el_AtlasChart", "el_HotMap"], function (con, com, e_Main, g_Main, e_Echart, el_EstateInfo, el_AtlasChart, el_HotMap) {
    return {
        loadMain: function () {
            //e_Main.loadMain(function () {
            //    setTimeout(function () { $('.chartzoomin').hide() }, 1000);
            //});
            e_Main.loadMain();  //e_Main.loadMain没有回调函数
            //setTimeout(function () {
                $('.chartzoomin').hide()
            //}, 1000);
        },
        openUnity3dWin: function () {
            e_Main.openUnity3dWin(con.TyHref_S);
        },
    }
});