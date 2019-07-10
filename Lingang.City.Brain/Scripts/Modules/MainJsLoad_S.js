define(['config','common', 's_Echart', 's_Main', 't_Main', "e_Main", "g_Main", "b_Main", "t_Home", "s_Home", "e_Home","pagination"],
function (con, com, s_Echart, s_Main, t_Main, e_Main, g_Main, b_Main, t_Home, s_Home, e_Home,pagination) {
    return {
        loadJs: function () {
            return;
        },
        commonAlert: function (text) {
            require("common").alert(text);
        },
        commonConfirm: function () {
            $(".header-cancel").click(function () {
                vex.dialog.confirm({
                    message: '是否关闭系统！',
                    callback: function (value) {
                        if (value) {
                            window.open('', '_self', ''); window.close();
                        }
                        else {
                            return null;
                        }
                    },
                    className: 'vex-theme-default'
                });               
            })
        },
        /******************分页点击事件*****************/
        pagination: function (domID, length, optInit,pageindex) {
        $("#" + domID).pagination(length, optInit);
    },

    /*********************END*********************/
    }
})