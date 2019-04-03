define(["common", "t_Echart", "s_Echart", "e_Echart", "g_Echart", "b_Echart"], function (com, t_Echart, s_Echart, e_Echart, g_Echart, b_Echart) {
    return {
        Revert: function () {
            

            require("t_Main").clearVideo(); //大客流视频清空
            require("s_Main").clearVideo(); //社区综治视频清空
            require("t_Main").closeBottomVideo();
            require("s_Main").closeBottomVideo();

            //require("t_Main").htmlRevert(); //大客流还原
            require("t_Main").Revert(); //大客流还原
            require("t_Main").clearIntervalTime();



            //require("s_Main").htmlRevert(); //社区综治视频清空
            require("s_Main").Revert(); //社区综治还原
            require("e_Main").Revert(); //产业-产业
            require("g_Main").Revert(); //产业-园区
            require("b_Main").Revert(); //产业-楼宇

            require("t_Echart").Revert(); //大客流旅游的图表
            require("s_Echart").Revert(); //社区综治的图表
            //产业的图表
            require("e_Echart").Revert();
            require("g_Echart").Revert();
            require("b_Echart").Revert();




        },
    }
})