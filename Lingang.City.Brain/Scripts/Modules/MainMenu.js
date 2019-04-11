define(['config', 's_Echart', 's_Main', 't_Main', "e_Main", "g_Main", "b_Main"],
function (con, s_Echart, s_Main, t_Main, e_Main, g_Main, b_Main) {
    return {
        WeatherData: null,//天气数据
        WeatherSevenData: null,//七天天气数据
        //隐藏所有图层
        HideAllDIV: function () {
            $("#bj_backgroud").hide()
            $("#header_menu").hide()
            $("#header_timetemp").hide()


            //底部图层
            $("#bottom_menu").hide();
            //左边第一列元素
            $("#left_first_01").hide();
            $("#left_first_02").hide();
            $("#left_first_03").hide();
            $("#left_first_04").hide();
            //左边第二列元素
            $("#left_second_01").hide();
            $("#left_second_02").hide();
            $("#left_second_03").hide();
            $("#left_second_04").hide();
            //右边第一列元素
            $("#right_first_01").hide();
            $("#right_first_02").hide();
            $("#right_first_03").hide();
            $("#right_first_04").hide();
            //右边第二列元素
            $("#right_second_01").hide();
            $("#right_second_02").hide();
            $("#right_second_03").hide();
            $("#right_second_04").hide();
            //当中的元素
            $("#center_01").hide();
            $("#center_02").hide();
            $("#center_03").hide();


            this.ClearAllDiv();
        },
        //
        ClearAllDiv: function () {
            ////////////////////////////////////////////////////////////////////////////
            //底部图层
            $("#bottom_menu").empty();
            //左边第一列元素
            $("#left_first_01").empty();
            $("#left_first_02").empty();
            $("#left_first_03").empty();
            $("#left_first_04").empty();
            //左边第二列元素
            $("#left_second_01").empty();
            $("#left_second_02").empty();
            $("#left_second_03").empty();
            $("#left_second_04").empty();
            //右边第一列元素
            $("#right_first_01").empty();
            $("#right_first_02").empty();
            $("#right_first_03").empty();
            $("#right_first_04").empty();
            //右边第二列元素
            $("#right_second_01").empty();
            $("#right_second_02").empty();
            $("#right_second_03").empty();
            $("#right_second_04").empty();
            //当中的元素
            $("#center_01").empty();
            $("#center_02").empty();
            $("#center_03").empty();
        },
        //显示所有图层
        ShowAllDIV: function () {
            $("#bj_backgroud").show()
            $("#header_menu").show()
            $("#header_timetemp").show()


            //底部图层
            $("#bottom_menu").show();
            //左边第一列元素
            $("#left_first_01").show();
            $("#left_first_02").show();
            $("#left_first_03").show();
            $("#left_first_04").show();
            //左边第二列元素
            $("#left_second_01").show();
            $("#left_second_02").show();
            $("#left_second_03").show();
            $("#left_second_04").show();
            //右边第一列元素
            $("#right_first_01").show();
            $("#right_first_02").show();
            $("#right_first_03").show();
            $("#right_first_04").show();
            //右边第二列元素
            $("#right_second_01").show();
            $("#right_second_02").show();
            $("#right_second_03").show();
            $("#right_second_04").show();
            //当中的元素
            $("#center_01").show();
            $("#center_02").show();
            $("#center_03").show();

        },
        //切换大的产业
        loadMenu: function () {
            $("#bj_backgroud").show()
            $("#header_menu").show()
            $("#header_timetemp").show()
            //底部图层
            $("#bottom_menu").show();

           
            ////顶部菜单
            //$("#header_menu div button").each(function (index) {
            //    $(this).click(function () {//点击触发事件
            //        $("#header_menu div button").removeClass("active");//删除当前元素的样式
            //        $("button").eq(index).addClass("active");//添加当前元素的样式
            //        var menuname = $("button").eq(index).text();

            //        require("reset").Revert();


            //        //默认夜景模式
            //        require("specialEff").nighttime();

            //        //加载div数据
            //        switch (menuname) {
            //            case "社区综合":// 社区综合
            //                s_Main.loadMain();
            //                break;
            //            case "景区管理"://旅游 大客流
            //                t_Main.loadMain();
            //                break;
            //            case "产业发展"://产业
            //                e_Main.loadMain();
            //                break;
            //            default:

            //        }
            //    });
            //});


            //顶部菜单
            $("#header_menu div button").each(function (index) {
                $(this).click(function () {//点击触发事件
                    var menuname = $("button").eq(index).text();
                    
                    //默认夜景模式
                    require("specialEff").nighttime();

                    //加载div数据
                    switch (menuname) {
                        case "社区综合":// 社区综合
                        $("#header_menu div button").removeClass("active");//删除当前元素的样式
                            $("button").eq(index).addClass("active");//添加当前元素的样式
                            s_Main.loadMain();
                            break;
                        case "景区管理"://旅游 大客流
                            $("#header_menu div button").removeClass("active");//删除当前元素的样式
                            $("button").eq(index).addClass("active");//添加当前元素的样式

                            //require("reset").Revert();

                            t_Main.loadMain();
                            break;
                        case "产业发展"://产业
                            $("#header_menu div button").removeClass("active");//删除当前元素的样式
                            $("button").eq(index).addClass("active");//添加当前元素的样式
                            e_Main.loadMain();
                            break;
                        default:

                    }
                });
            });



            //s_Main.loadMain();
            t_Main.loadMain();
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

        //天气
        Weather: function () {
            if (require("mainMenu").WeatherData == null)
                $.ajax({
                    type: 'GET',
                    url: 'https://www.tianqiapi.com/api/',
                    data: 'version=v1&style=1001&city=',
                    dataType: 'JSON',
                    
                    error: function () {
                        //alert('网络错误');
                    },
                    success: function (res) {
                        require("mainMenu").WeatherSevenData = res;
                        require("mainMenu").WeatherData = res.data[0];
                        require("mainMenu").AppendWeatherData(require("mainMenu").WeatherData);
                        //callback(res);
                    }
                });
            else {
                require("mainMenu").AppendWeatherData(require("mainMenu").WeatherData)
            }
        },
        //页面上加载天气信息
        AppendWeatherData: function (data) {
            if (data != null) {
                var WeatherData = data;
                var tem = WeatherData.tem      //气温
                var wea = WeatherData.wea      //天气
                var wea_img = WeatherData.wea_img
                var weaimg = "https://cdn.huyahaha.com/tianqiapi/skin/qq/" + wea_img + ".png" //require("mainMenu").GetWeatherImg(wea) //天气图标
                var imghtml = "<img src='" + weaimg + "'>";

                $("#header_tempimg").html(imghtml);
                $("#header_temp").html(tem);
            }
        },
        //根据天气情况获取图片
        GetWeatherImg: function (wea) {
            var img = "3.gif"

            switch (wea) {
                case "未知":
                    img = "nothing.gif";
                    break;
                case "晴":
                    img = "0.gif";
                    break;
                case "多云":
                    img = "1.gif";
                    break;
                case "阴":
                    img = "2.gif";
                    break;
                case "阵雨":
                    img = "3.gif";
                    break;
                case "雷阵雨":
                    img = "4.gif";
                    break;
                case "雷阵雨并伴有冰雹":
                    img = "5.gif";
                    break;
                case "雨夹雪":
                    img = "6.gif";
                    break;
                case "小雨":
                    img = "7.gif";
                    break;
                case "中雨":
                    img = "8.gif";
                    break;
                case "大雨":
                    img = "9.gif";
                    break;
                case "暴雨":
                    img = "10.gif";
                    break;
                case "大暴雨":
                    img = "11.gif";
                case "特大暴雨":
                    img = "12.gif";
                    break;
                case "阵雪":
                    img = "13.gif";
                    break;
                case "小雪":
                    img = "14.gif";
                    break;
                case "中雪":
                    img = "15.gif";
                    break;
                case "大雪":
                    img = "16.gif";
                    break;
                case "暴雪":
                    img = "17.gif";
                    break;
                case "雾":
                    img = "18.gif";
                    break;
                case "冻雨":
                    img = "19.gif";
                case "沙尘暴":
                    img = "20.gif";
                case "小雨-中雨":
                    img = "21.gif";
                    break;
                case "中雨-大雨":
                    img = "22.gif";
                    break;
                case "大雨-暴雨":
                    img = "23.gif";
                    break;
                case "暴雨-大暴雨":
                    img = "24.gif";
                    break;
                case "大暴雨-特大暴雨":
                    img = "25.gif";
                    break;
                case "小雪-中雪":
                    img = "26.gif";
                    break;
                case "中雪-大雪":
                    img = "27.gif";
                    break;
                case "大雪-暴雪":
                    img = "28.gif";
                    break;
                case "浮尘":
                    img = "29.gif";
                    break;
                case "扬沙":
                    img = "30.gif";
                    break;
                case "强沙尘暴":
                    img = "31.gif";
                    break;
                case "小到中雨":
                    img = "21.gif";
                    break;
                case "中到大雨":
                    img = "22.gif";
                    break;
                case "大到暴雨":
                    img = "23.gif";
                    break;
                case "小到中雪":
                    img = "26.gif";
                    break;
                case "中到大雪":
                    img = "27.gif";
                    break;
                case "大到暴雪":
                    img = "28.gif";
                    break;
                case "小阵雨":
                    img = "3.gif";
                    break;
                case "阴天":
                    img = "2.gif";
                    break;
                case "霾":
                    img = "18.gif";
                    break;
                case "雾霾":
                    img = "18.gif";
                    break;
                default:
                    img = "0.gif";

            }

            img = "a_" + img;
            return img;
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