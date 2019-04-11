define(["config", "common", "mainMenu", "g_Echart", "gl_GardenBuilding", "gl_Stop", "gl_UnmannedCar", "gl_Event", "gl_TopCompany","b_BuildingFloor"], function (con, com, mainMenu, g_Echart, gl_GardenBuilding, gl_Stop, gl_UnmannedCar, gl_Event,gl_TopCompany,b_BuildingFloor) {
    /****************************园区****************************/
    return {
        LayerCatalog: {
            Garden: {
                Id: 1, TextName: "园区", Name: "Garden", Level: 1, ChooseIcon: "Texture/Common/garden.png", UnChooseIcon: "Texture/Common/garden.png"
            },
            TopCompany: {
                Id: 2, TextName: "龙头企业", Name: "TopCompany", Level: 1, ChooseIcon: "Texture/Common/topcompany_hover.png", UnChooseIcon: "Texture/Common/topcompany.png"
            },
            Building: {
                Id: 3, TextName: "楼宇", Name: "Building", Level: 1, ChooseIcon: "Texture/Common/building_hover.png", UnChooseIcon: "Texture/Common/building.png"
            },
        },
        loadMain: function () {
            //require("mainMenu").ClearAllDiv(); //清空div内容


            this.loadBottomMenu();//加载底部图层

            this.loadLeftFirst1();//加载左侧第一列第一个div
            this.loadLeftFirst2();//

            this.loadLeftSecond1();//加载左侧第二列第一个div
            this.loadLeftSecond2();//
            this.loadLeftSecond3();//

            this.loadCenter1();//加载中间列

            this.loadRightFirst1();//加载右侧第一列第一个div
            this.loadRightFirst2();//

            this.loadRightSecond1();//加载右侧第二列第一个div

            require("gl_GardenBuilding").loadGardenBuilding();
            //setTimeout(function () {
            //    //加载图表
            //    g_Echart.loadEcharts();
            //}, 2000);

            this.closeOtherUi();
        },
        
        //POI事件响应
        PoiEvent: function (nodename) {
            var str = nodename
            var poitype = "";
            var id = "";
            if (str.indexOf("_") > -1) {
                poitype = str.split("_")[0];
                poitype = poitype.replace("POIIndustryG", "")

                id = str.split("_")[1];
            }

            switch (poitype) {
                case "Garden": //园区
                    gl_GardenBuilding.loadGardenDetial(nodename);
                    break;
                case "TopCompany": //龙头企业
                    require("gl_TopCompany").loadCompanyMain(nodename);
                    break;
                case "Building": //楼宇
                    //tl_Camera.loadCameraDetial(nodename)
                    var node = map.getSceneNode(con.AreaName, nodename);
                    if (node) {
                        //飞行位置暂定
                        Q3D.globalCamera().flyToAxisView(node, 30, 1, function () {
                            b_BuildingFloor.loadBuidingDetail(nodename);
                       })
                        
                    }
                    break;
                default:
            }
        },
        /*****************************图层*****************************/
        //加载底部图层
        loadBottomMenu: function () {
            var url = con.HtmlUrl + 'Industry/Garden/Bottom_Menu.html';
            require(['text!' + url], function (template) {
                $("#bottom_menu").html(template);
                $("#bottom_menu").show('drop', 1000);//左侧
                require("g_Main").ChangeLayer();
            })
        },
        //点击底部的菜单
        ChangeLayer: function () {
            //产业
            $("#bottom_menu ul li").each(function (index) {//便利对象
                $(this).click(function () {//点击触发事件
                    $("li").removeClass("active");//删除当前元素的样式
                    $("li").eq(index).addClass("active");//添加当前元素的样式
                    var menuname = $("li").eq(index).text();
                    require("g_Main").showLayer(menuname);
                   
                });
            });
        },

        //切换显示图层
        showLayer: function (menuname) {
            this.Revert();
            switch (menuname) {
                case "楼宇":
                    gl_GardenBuilding.loadBuilding();
                    break;
                case "停车":
                    gl_Stop.loadStop();
                    break;
                case "无人驾驶接驳车":
                    gl_UnmannedCar.loadUnmannedCar();
                    break;
                case "事件":
                    gl_Event.loadEvent();
                    break;
                case "产业信息":
                    require("e_Main").loadMain();
                    break;
                default:
            }
        },
        /*****************************左侧第一列*****************************/

        //加载第一个div
        loadLeftFirst1: function () {
            var option = {
                aniDom: "#left01_01",
                htmlDom: "#left_first_01",
                url: con.HtmlUrl + 'Industry/Garden/Left_First_01.html'
            }
            com.UIControlAni(option, function () {
                clearInterval(require("g_Echart").zsldInterval);//清空计时器
                require("g_Echart").zsld(); //招商雷达 
            });
        },
        //加载第二个div
        loadLeftFirst2: function () {
            var option = {
                aniDom: "#left01_02",
                htmlDom: "#left_first_02",
                url: con.HtmlUrl + 'Industry/Garden/Left_First_02.html'
            }
            com.UIControlAni(option, function () {
                return null;
            });

        },

        /*****************************左侧第二列*****************************/
        //加载第一个div
        loadLeftSecond1: function () {
            var option = {
                aniDom: "#left02_01",
                htmlDom: "#left_second_01",
                url: con.HtmlUrl + 'Industry/Garden/Left_Second_01.html'
            }
            com.UIControlAni(option, function () {
                require("g_Echart").zsFunnel()
            });
        },
        //加载第二个div
        loadLeftSecond2: function () {
            var option = {
                aniDom: "#left02_02",
                htmlDom: "#left_second_02",
                url: con.HtmlUrl + 'Industry/Garden/Left_Second_02.html'
            }
            com.UIControlAni(option, function () {
                require("g_Echart").tcfw(); //停车服务图表
            });
        },
        //加载第三个div
        loadLeftSecond3: function () {
            var option = {
                aniDom: "#left02_03",
                htmlDom: "#left_second_03",
                url: con.HtmlUrl + 'Industry/Garden/Left_Second_03.html'
            }
            com.UIControlAni(option, function () {
                require("g_Echart").wrjsjbc();//无人驾驶接驳车图表
            });
        },
        /*****************************中间*****************************/
        loadCenter1: function () {
            var url = con.HtmlUrl + 'Industry/Garden/Center_01.html';
            require(['text!' + url], function (template) {
                $("#center_01").html(template);
                $("#center_01").show('drop', 1000);//左侧

                require('g_Main').numberAni();
            })
        },
        /*****************************右侧第一列*****************************/
        //加载第一个div
        loadRightFirst1: function () {
            var option = {
                aniDom: "#right01_01",
                htmlDom: "#right_first_01",
                url: con.HtmlUrl + 'Industry/Garden/Right_First_01.html',
                leftOrRight: 'right'
            }
            com.UIControlAni(option, function () {
                require("g_Echart").zhwy()
            });
        },
        //加载第二个div
        loadRightFirst2: function () {
            var option = {
                aniDom: "#right01_02",
                htmlDom: "#right_first_02",
                url: con.HtmlUrl + 'Industry/Garden/Right_First_02.html',
                leftOrRight: 'right'
            }
            com.UIControlAni(option, function () {
                require("g_Echart").zhnh()
            });
        },

        /*****************************右侧第二列*****************************/
        //加载第一个div
        loadRightSecond1: function () {
            var option = {
                aniDom: "#right02_01",
                htmlDom: "#right_second_01",
                url: con.HtmlUrl + 'Industry/Garden/Right_Second_01.html',
                leftOrRight: 'right'
            }
            com.UIControlAni(option, function () {
                require("g_Echart").sjtj();
                return null;
            });
        },
        // 关闭其他的
        closeOtherUi: function () {
            //左侧第1列第3个
            var optionL13 = {
                aniDom: "#left01_03",
                htmlDom: "#left_first_03",
                url: '',
                leftOrRight: 'left'
            }
            com.UIControlAni(optionL13, null);
            //左侧第1列第4个
            var optionL14 = {
                aniDom: "#left01_04",
                htmlDom: "#left_first_04",
                url: '',
                leftOrRight: 'left'
            }
            com.UIControlAni(optionL14, null);
            //左侧第2列第4个
            var optionL24 = {
                aniDom: "#left02_04",
                htmlDom: "#left_second_04",
                url: '',
                leftOrRight: 'left'
            }
            com.UIControlAni(optionL24, null);
            //右侧第1列第3个
            var optionR13 = {
                aniDom: "#right01_03",
                htmlDom: "#right_first_03",
                url: '',
                leftOrRight: 'right'
            }
            com.UIControlAni(optionR13, null);
            //右侧第1列第4个
            var optionR14 = {
                aniDom: "#right01_04",
                htmlDom: "#right_first_04",
                url: '',
                leftOrRight: 'right'
            }
            com.UIControlAni(optionR14, null);
            //右侧第2列第2个
            var optionR22 = {
                aniDom: "#right02_02",
                htmlDom: "#right_second_02",
                url: '',
                leftOrRight: 'right'
            }
            com.UIControlAni(optionR22, null);
            //右侧第2列第3个
            var optionR23 = {
                aniDom: "#right02_03",
                htmlDom: "#right_second_03",
                url: '',
                leftOrRight: 'right'
            }
            com.UIControlAni(optionR23, null);
            //右侧第2列第4个
            var optionR24 = {
                aniDom: "#right02_04",
                htmlDom: "#right_second_04",
                url: '',
                leftOrRight: 'right'
            }
            com.UIControlAni(optionR24, null);

        },
        numberAni: function () {
            com.numberAnimation($('#g_zcqys'), 2764 - 20, 2764, 2000);
            com.numberAnimation($('#g_rzqys'), 61 - 20, 61, 2000);
            com.numberAnimation($('#g_gdzctz'), 5702.93 - 200, 5702.93, 2000);
            com.numberAnimation($('#g_cz'), 520687.98 - 200, 520687.98, 2000);
            com.numberAnimation($('#g_ss'), 18554.5 - 100, 18554.5, 2000);
        },
        //清空图层
        Revert: function () {
            gl_TopCompany.Revert();
            gl_GardenBuilding.Revert();
            gl_Stop.Revert();
            gl_UnmannedCar.Revert();
            gl_Event.Revert();
        }
    }
})