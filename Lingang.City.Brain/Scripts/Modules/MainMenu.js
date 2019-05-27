define(['config','common', 's_Echart', 's_Main', 't_Main', "e_Main", "g_Main", "b_Main", "t_Home", "s_Home", "e_Home","el_EstateInfo","el_AtlasChart","el_HotMap","g_Home"],
function (con, com, s_Echart, s_Main, t_Main, e_Main, g_Main, b_Main, t_Home, s_Home, e_Home, el_EstateInfo, el_AtlasChart, el_HotMap, g_Home) {
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

            //默认加载社区综治底部菜单
            s_Home.loadMain();
            this.loadBottomMenu_smain();

            //t_Home.loadMain();
            //require('mainMenu').loadBottomMenu_tmain();

        },

        mainMenuSelect: function (index) {
            $("#header_menu div button").removeClass("active");//删除当前元素的样式
            $("button").eq(index).addClass("active");//添加当前元素的样式

            var menuname = $("button").eq(index).text();
            require("reset").Revert();

            //默认夜景模式
            require("specialEff").nighttime();
            //关闭放大图表
            require('mainMenu').closeBigChartHtml();
            //加载div数据
            switch (menuname) {
                case "社区综合":// 社区综合
                    s_Home.loadMain();
                    require('mainMenu').loadBottomMenu_smain();
                    break;
                case "景区管理"://旅游 大客流
                    t_Home.loadMain();
                    require('mainMenu').loadBottomMenu_tmain();
                    break;
                case "产业发展"://产业
                    e_Home.loadMain();
                    require('mainMenu').loadBottomMenu_e_Main();
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

        /*****************************图层--产业发展*****************************/
        //加载底部图层
        loadBottomMenu_e_Main: function () {
            var url = con.HtmlUrl + 'Industry/Estate/Bottom_Menu.html';
            require(['text!' + url], function (template) {
                $("#bottom_menu").html(template);
                $("#bottom_menu").show('drop', 1000);//左侧
                require("mainMenu").ChangeLayer_e_Main();
            })
        },
        //点击底部的菜单
        ChangeLayer_e_Main: function () {
            //产业
            $("#bottom_menu ul li").each(function (index) {//便利对象
                $(this).click(function () {//点击触发事件                                        
                    require("mainMenu").showLayer_e_Main(index);
                });
            });
        },

        //切换显示图层
        showLayer_e_Main: function (index) {
            var menuname = $("li").eq(index).text();
            $("li").removeClass("active");//删除当前元素的样式
            $("li").eq(index).addClass("active");//添加当前元素的样式
            e_Main.Revert();
            //关闭放大图表
            require('mainMenu').closeBigChartHtml();

            switch (menuname) {
                case "产业信息":
                    require("g_Home").loadEstateInfo();
                    break;
                case "象限图谱":
                    require("g_Home").loadAtlasChart();
                    break;
                case "人员分布":
                    require("g_Home").loadHotMap();
                    break;
                case "园区信息":
                    require("g_Home").loadMain_g_Main();
                    require('mainMenu').loadBottomMenu_gMain();
                    break;
                default:
            }
        },

        /********************************园区-图层*******************************/
        //加载底部图层
        loadBottomMenu_gMain: function () {
            var url = con.HtmlUrl + 'Industry/Garden/Bottom_Menu.html';
            require(['text!' + url], function (template) {
                $("#bottom_menu").html(template);
                $("#bottom_menu").show('drop', 1000);//左侧
                require("mainMenu").ChangeLayer_gMain();
            })
        },
        //点击底部的菜单
        ChangeLayer_gMain: function () {
            //产业
            $("#bottom_menu ul li").each(function (index) {//便利对象
                $(this).click(function () {//点击触发事件
                    
                    require("mainMenu").showLayer_gMain(index);
                    //关闭放大图表
                    require('mainMenu').closeBigChartHtml();

                });
            });
        },

        //切换显示图层
        showLayer_gMain: function (index) {
            $("li").removeClass("active");//删除当前元素的样式
            $("li").eq(index).addClass("active");//添加当前元素的样式
            var menuname = $("li").eq(index).text();
            g_Main.Revert();
            switch (menuname) {
                case "楼宇":
                    require("g_Home").loadBuilding();
                    break;
                case "停车":
                    require("g_Home").loadStop();
                    break;
                case "无人驾驶接驳车":
                    require("g_Home").loadUnmannedCar();
                    break;
                case "事件":
                    require("g_Home").loadEvent();
                    break;
                case "产业信息":
                    require("g_Home").loadMain_e_Main();
                    require("mainMenu").loadBottomMenu_e_Main();
                    break;
                default:
            }
        },
        /*************************END***************************/

        /***************************社区综治*******************************/
        //加载底部图层
        loadBottomMenu_smain: function () {
            var url = con.HtmlUrl + 'SocietyNew/Bottom_Menu.html';
            require(['text!' + url], function (template) {
                $("#bottom_menu").html(template);
                $("#bottom_menu").show('drop', 1000);//左侧
                require("mainMenu").ChangeLayer_smain();
            })
        },
        //点击底部的菜单
        ChangeLayer_smain: function () {
            $("#bottom_menu ul li").each(function (index) {//遍历对象
                $(this).click(function () {//点击触发事件
                    //$("#bottom_menu ul li").removeClass("active");//删除当前元素的样式
                    //$(this).addClass("active");//添加当前元素的样式
                    //var menuname = $("li").eq(index).text();
                    require("mainMenu").showLayer_smain(index);

                });
            });
        },

        //切换显示图层
        showLayer_smain: function (index) {
            s_Main.Revert();
            require('mainMenu').closeBigChartHtml();
            var menuname = $("li").eq(index).text();
            $("li").removeClass("active");//删除当前元素的样式
            $("li").eq(index).addClass("active");//添加当前元素的样式
            switch (menuname) {
                case "传感器":
                    require("s_Home").loadIOT();
                    break;
                case "摄像头":
                    require("s_Home").loadCamera();
                    break;
                case "无人机":
                    require("s_Home").loadDrone();
                    break;
                case "村居工作站":
                    require("s_Home").loadWorkStation();
                    break;
                case "海岸线":
                    require("s_Home").layerSeaboard();
                    break;
                case "工地":
                    require("s_Home").loadWorkSite();
                    break;
                case "街面":
                    require("s_Home").loadStreet();
                    break;
                case "网格":
                    require("s_Home").loadGrid();
                    break;
                case "事件":
                    //Q3D.globalCamera().flyTo(("395683.8080060399,286.4911804199219,-3416926.616417045").toVector3d(), ("-42.453548431396484,-2.83009672164917,-2.5931613445281982").toVector3(), 1, null);
                    require("s_Home").loadEvent();
                    break;
                    //case "管网":
                    //    sl_Event.loadEvent();
                    //    sl_IOT.loadLeftSecond();
                    //    this.loadCenter1Info();
                    //    break;
                default:
            }
        },
        /********************************END*******************************/

        /*****************************景区管理 图层*****************************/
        //加载底部图层
        loadBottomMenu_tmain: function () {
            var url = con.HtmlUrl + 'TourNew/Bottom_Menu.html';
            require(['text!' + url], function (template) {
                $("#bottom_menu").html(template);
                $("#bottom_menu").show('drop', 1000);//左侧
                require("mainMenu").ChangeLayer_tmain();
            })
        },
        //点击底部的菜单
        ChangeLayer_tmain: function () {
            //旅游大客流
            $("#bottom_menu ul li").each(function (index) {//便利对象
                $(this).click(function () {//点击触发事件

                    require("mainMenu").showLayer_tmain(index);
                });
            });
        },

        //切换显示图层
        showLayer_tmain: function (index) {
            t_Main.Revert();
            $("li").removeClass("active");//删除当前元素的样式
            $("li").eq(index).addClass("active");//添加当前元素的样式
            var menuname = $("li").eq(index).text();
            switch (menuname) {
                case "人流热力图":
                    require("t_Home").loadVisitorsMap();
                    break;
                case "实时路况":
                    require("t_Home").loadRoadCondition();
                    break;
                case "摄像头":
                    require("t_Home").loadCamera();
                    break;
                case "无人机":
                    require("t_Home").loadDrone();
                    break;
                case "停车场":
                    require("t_Home").loadParkingLot();
                    break;
                case "公交":
                    require("t_Home").PublicTransportation();
                    break;
                case "事件":
                    require("t_Home").loadEvent();
                    break;
                case "人流预测":
                    require("t_Home").loadStream();
                    break;
                case "交通仿真":
                    require("t_Home").loadTrafficSimulation();
                    break;
                default:
            }
        },
        /********************************END*******************************/

        closeBigChartHtml: function () {
            require("s_Echart").closeBigChart();//关闭放大图表
            require("t_Echart").closeBigChart();
            require("g_Echart").closeBigChart();
            require("e_Echart").closeBigChart();
        },
    }
})