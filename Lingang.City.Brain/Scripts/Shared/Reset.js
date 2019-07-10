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
        //清除中间div的html内容
        ClearDivHtmlOnCenter: function () {           
            $("#center_01").html("");
            $("#center_02").html("");
            $("#center_03").html("");
            $("#center_04").html("");
            $("#center_05").html("");
        },
        //清除右边div的html内容
        ClearDivHtmlOnRight: function () {
            
            $("#right_first_01").html("");
            $("#right_first_02").html("");
            $("#right_first_03").html("");
            $("#right_first_04").html("");

            $("#right_second_01").html("");
            $("#right_second_02").html("");
            $("#right_second_03").html("");
            $("#right_second_04").html("");

        },
        //清除左边div的html内容
        ClearDivHtmlOnLeft: function () {
            $("#left_first_01").html("");
            $("#left_first_02").html("");
            $("#left_first_03").html("");
            $("#left_first_04").html("");

            $("#left_second_01").html("");
            $("#left_second_02").html("");
            $("#left_second_03").html("");
            $("#left_second_04").html("");

        },
    }
})