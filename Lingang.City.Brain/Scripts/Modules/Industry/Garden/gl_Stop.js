define(["config", "common"], function (con, com) {
    /****************************停车位图层****************************/
    return {
            Revert: function () {

        },
        //停车位图层
        loadStop: function () {
            
            require("g_Main").loadLeftFirst1();//加载左侧第一列第一个div
            require("g_Main").loadLeftFirst2();//

            require("g_Main").loadLeftSecond1();//加载左侧第二列第一个div
            require("g_Main").loadLeftSecond2();//
            require("g_Main").loadLeftSecond3();//
            require("mainMenu").LayerFlyto(21);
            require("reset").ClearDivHtmlOnCenter();

        },
    }
})