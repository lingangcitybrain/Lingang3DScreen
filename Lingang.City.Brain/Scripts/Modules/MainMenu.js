define(['config','common', 's_Echart', 's_Main', 't_Main', "e_Main", "g_Main", "b_Main", "t_Home", "s_Home", "e_Home"],
function (con, com, s_Echart, s_Main, t_Main, e_Main, g_Main, b_Main, t_Home, s_Home, e_Home) {
    return {
        //切换大的产业
        loadMenu: function () {
            $("#bj_backgroud").show()
            $("#header_menu").show()
            $("#header_timetemp").show()
            //底部图层
            $("#bottom_menu").show();

            //顶部菜单
            $("#header_menu div button").each(function (index) {
                $(this).click(function () {//点击触发事件
                    require('mainMenu').mainMenuSelect(index);
                });
            });

            //日景夜景菜单
            $("#header_timetemp span button").each(function (index) {
                $(this).click(function () {//点击触发事件
                    require('mainMenu').dayNightMenuSelect(index);
                });
            });

            s_Home.loadMain();
        },

        mainMenuSelect: function (index) {
            $("#header_menu div button").removeClass("active");//删除当前元素的样式
            $("button").eq(index).addClass("active");//添加当前元素的样式

            var menuname = $("button").eq(index).text();
            require("reset").Revert();

            //默认夜景模式
            require("specialEff").nighttime();

            //加载div数据
            switch (menuname) {
                case "社区综合":// 社区综合
                    s_Home.loadMain();
                    break;
                case "景区管理"://旅游 大客流
                    t_Home.loadMain();
                    break;
                case "产业发展"://产业
                    e_Home.loadMain();
                    break;
                case "产业推演"://产业               
                    e_Home.openUnity3dWin();
                    break;
                default:
            }
        },

        dayNightMenuSelect: function (index) {
            $("#header_timetemp span button").removeClass("active");//删除当前元素的样式
            $("#header_timetemp span button").eq(index).addClass("active");//添加当前元素的样式

            var menuname = $("#header_timetemp span button").eq(index).text();

            //加载div数据
            switch (menuname) {
                case "实景":
                    s_Home.dayNightMenuChange("实景");
                    break;
                case "夜景":
                    s_Home.dayNightMenuChange("夜景");
                    break;
                default:
            }
        },
    }
})