define(['config','common', 's_Echart', 's_Main', 't_Main', "e_Main", "g_Main", "b_Main", "t_Home", "s_Home", "e_Home","pagination"],
function (con, com, s_Echart, s_Main, t_Main, e_Main, g_Main, b_Main, t_Home, s_Home, e_Home,pagination) {
    return {
        thisClick:false,   //大数字收缩相关
        loadJs: function () {
            return;
        },
        commonAlert: function (text) {
            require("common").alert(text);
        },
        commonConfirm: function () {
            //$(".header-cancel").click(function () {
                vex.dialog.confirm({
                    message: '关闭系统大屏？',
                    callback: function (value) {
                        if (value) {
                            window.open('', '_self', ''); window.close();
                        }
                        else {
                            //return null;
                        }
                    },
                    className: 'vex-theme-default'
                });               
            //})
        },
        /******************分页点击事件*****************/
        pagination: function (domID, length, optInit,pageindex) {
        $("#" + domID).pagination(length, optInit);
    },
        /******************图表中间大数字收缩*******************/
        statisticslidebtn: function () {

                    if (!this.thisClick) {
                        $('.statistic-slidebtn').css({ transform: 'rotate(0)' }).siblings(".statistic-slidediv").slideUp();
                        this.thisClick = true;
                    } else {
                        $('.statistic-slidebtn').css({ transform: 'rotate(180deg)' }).siblings(".statistic-slidediv").slideDown();
                        this.thisClick = false;
                    }
        },
    /*********************END*********************/
    }
})