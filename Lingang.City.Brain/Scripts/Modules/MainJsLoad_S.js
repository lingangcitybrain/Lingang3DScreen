define(['config','common', 's_Echart', 's_Main', 't_Main', "e_Main", "g_Main", "b_Main", "t_Home", "s_Home", "e_Home"],
function (con, com, s_Echart, s_Main, t_Main, e_Main, g_Main, b_Main, t_Home, s_Home, e_Home) {
    return {
        loadJs: function () {
            return;
        },
        commonAlert: function (text) {
            require("common").alert(text);
        },
    }
})