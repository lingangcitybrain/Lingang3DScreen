define(['config', 's_Echart', 's_Main', 't_Main', "e_Main", "g_Main", "b_Main"],
function (con, s_Echart, s_Main, t_Main, e_Main, g_Main, b_Main) {
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
                    $("#header_menu div button").removeClass("active");//删除当前元素的样式
                    $("button").eq(index).addClass("active");//添加当前元素的样式

                    var menuname = $("button").eq(index).text();
                    require("reset").Revert();

                    //默认夜景模式
                    require("specialEff").nighttime();

                    //加载div数据
                    switch (menuname) {
                        case "社区综合":// 社区综合
                            s_Main.loadMain();
                            break;
                        case "景区管理"://旅游 大客流
                            t_Main.loadMain();
                            break;
                        case "产业发展"://产业
                            e_Main.loadMain();
                            break;
                        case "产业推演"://产业                            
                            window.location(con.TyHref);
                            break;
                        default:
                    }
                });
            });

            s_Main.loadMain();
            //t_Main.loadMain();
            //e_Main.loadMain();
        },
        //时钟
        Clock: function () {
            var years, months, days, hours, week, minutes, seconds;
            var intYears, intMonths, intDays, intHours, intMinutes, intSeconds;
            var today;
            today = new Date(); //系统当前时间
            intYears = today.getFullYear(); //得到年份,getFullYear()比getYear()更普适
            intMonths = today.getMonth() + 1; //得到月份，要加1
            intDays = today.getDate(); //得到日期
            week = " 星期" + "日一二三四五六 ".charAt(today.getDay());//得到星期几
            intHours = today.getHours(); //得到小时
            intMinutes = today.getMinutes(); //得到分钟
            intSeconds = today.getSeconds(); //得到秒钟
            years = intYears + "/";
            if (intMonths < 10) {
                months = "0" + intMonths + ".";
            } else {
                months = intMonths + ".";
            }
            if (intDays < 10) {
                days = "0" + intDays + " ";
            } else {
                days = intDays + " ";
            }
            if (intHours == 0) {
                hours = "00:";
            } else if (intHours < 10) {
                hours = "0" + intHours + ":";
            } else {
                hours = intHours + ":";
            }
            if (intMinutes < 10) {
                minutes = "0" + intMinutes + ":";
            } else {
                minutes = intMinutes + ":";
            }
            if (intSeconds < 10) {
                seconds = "0" + intSeconds + " ";
            } else {
                seconds = intSeconds + " ";
            }
            timeString = hours + minutes + seconds;
            yearString = years + months + days;
            $('#pj-houre').html(timeString)
            $('#pj-year').html(yearString)
            //$('.pj-day').html(week)
        },

        
        //白天或夜景切换
        ChangeLight: function (flag) {
            $(".real-scene").removeClass("active")
            $(".night-scene").removeClass("active")

            //白天 场景
            if (flag == 1) {
                require(['specialEff'], function (data) { data.daytime(); })
                $(".real-scene").addClass("active")
            } else {
                //夜光 场景
                require(['specialEff'], function (data) { data.nighttime(); })
                $(".night-scene").addClass("active")
            }
        },

        //根据图层编号进行视口的切换
        LayerFlyto: function (code, callback, seconds) {
            if (seconds == null)
                seconds = 1;
            var data = require("dataCache").defaultLayerView.get(code);
            if (data != null) {
                var angle = data.angle;
                var xyz = data.xyz;

                try {

                    Q3D.globalCamera().flyTo((xyz).toVector3d(), (angle).toVector3(), seconds, callback);

                } catch (e) {

                }
            }
        },
    }
})