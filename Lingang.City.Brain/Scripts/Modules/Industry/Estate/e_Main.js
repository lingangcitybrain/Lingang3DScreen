define(["config", "common", "g_Main", "e_Echart", "el_EstateInfo", "el_AtlasChart", "el_HotMap"], function (con, com, g_Main, e_Echart, el_EstateInfo, el_AtlasChart, el_HotMap) {
    /****************************产业****************************/
    return {
        LayerCatalog: {
            Estate: {
                Id: 1, TextName: "产业信息", Name: "Estate", Level: 1, ChooseIcon: "Texture/Common/cy_hover.png", UnChooseIcon: "Texture/Common/cy_link.png"
            },
            Atlas: {
                Id: 1, TextName: "象限图谱", Name: "Atlas", Level: 2,
                List: {
                    1: { Id: 1001, TextName: "衰退型企业", Name: "Atlas_1", Type: 1, ChooseIcon: "Texture/Common/Atlas01.png", UnChooseIcon: "Texture/Common/Atlas01.png", },
                    2: { Id: 1002, TextName: "潜力型企业", Name: "Atlas_2", Type: 2, ChooseIcon: "Texture/Common/Atlas02.png", UnChooseIcon: "Texture/Common/Atlas02.png" },
                    3: { Id: 1003, TextName: "明星型企业", Name: "Atlas_3", Type: 3, ChooseIcon: "Texture/Common/Atlas03.png", UnChooseIcon: "Texture/Common/Atlas03.png", },
                    4: { Id: 1004, TextName: "待扶持型企业", Name: "Atlas_4", Type: 4, ChooseIcon: "Texture/Common/Atlas04.png", UnChooseIcon: "Texture/Common/Atlas04.png" },
                }
            },
        },
        openUnity3dWin:function(){
            window.location(con.TyHref);
        },
        loadMain: function () {

            setTimeout(function () {
                //el_AtlasChart.loadAtlasChart();
                 require("el_EstateInfo").loadEstateInfo();
            }, 1000);
           
            this.loadBottomMenu();//加载底部图层

            this.loadLeftFirst1();//加载左侧第一列第一个div
            this.loadLeftFirst2();//


            this.loadLeftSecond1();//加载左侧第二列第一个div
            this.loadLeftSecond2();//
            this.loadLeftSecond3();//

            this.loadCenter1();//加载中间列

            this.loadRightFirst1();//加载右侧第一列第一个div
            this.loadRightFirst2();//
            this.loadRightFirst3();//

            this.loadRightSecond1();//加载右侧第二列第一个div
            this.loadRightSecond2();//

            this.closeOtherUi();

        },

        /*****************************图层*****************************/
        //加载底部图层
        loadBottomMenu: function () {
            var url = con.HtmlUrl + 'Industry/Estate/Bottom_Menu.html';
            require(['text!' + url], function (template) {
                $("#bottom_menu").html(template);
                $("#bottom_menu").show('drop', 1000);//左侧
                require("e_Main").ChangeLayer();
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
                    require("e_Main").showLayer(menuname);
                   

                });
            });
        },

        //切换显示图层
        showLayer: function (menuname) {
            this.Revert();
            switch (menuname) {
                case "产业信息":
                    el_EstateInfo.loadEstateInfo();
                    break;
                case "象限图谱":
                    el_AtlasChart.loadAtlasChart();
                    break;
                case "人员分布":
                    el_HotMap.loadHotMap();
                    break;
                case "园区信息": 
                    require("g_Main").loadMain();
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
                url: con.HtmlUrl + 'Industry/Estate/Left_First_01.html'
            }
            com.UIControlAni(option, function () {
                require("e_Echart").cyjzl()
            });
        },
        //加载第二个div
        loadLeftFirst2: function () {
            var option = {
                aniDom: "#left01_02",
                htmlDom: "#left_first_02",
                url: con.HtmlUrl + 'Industry/Estate/Left_First_02.html'
            }
            com.UIControlAni(option, function () { });
            //require("e_Echart").zlxxcy()
        },
        /*****************************左侧第二列*****************************/
        //加载第一个div
        loadLeftSecond1: function () {
            var option = {
                aniDom: "#left02_01",
                htmlDom: "#left_second_01",
                url: con.HtmlUrl + 'Industry/Estate/Left_Second_01.html'
            }
            com.UIControlAni(option, function () { require("e_Echart").qybhqs() });

        },
        //加载第二个div
        loadLeftSecond2: function () {
            var option = {
                aniDom: "#left02_02",
                htmlDom: "#left_second_02",
                url: con.HtmlUrl + 'Industry/Estate/Left_Second_02.html'
            }
            com.UIControlAni(option, function () { require("e_Echart").ssbhqs() });

        },
        //加载第三个div
        loadLeftSecond3: function () {
            var option = {
                aniDom: "#left02_03",
                htmlDom: "#left_second_03",
                url: con.HtmlUrl + 'Industry/Estate/Left_Second_03.html'
            }
            com.UIControlAni(option, function () { require("e_Echart").gtbhqs() });

        },
        // 关闭其他的
        closeOtherUi: function () {
            var optionL13 = {
                aniDom: "#left01_03",
                htmlDom: "#left_first_03",
                url: ''
            }
            com.UIControlAni(optionL13, null);

            var optionL14 = {
                aniDom: "#left01_04",
                htmlDom: "#left_first_04",
                url: ''
            }
            com.UIControlAni(optionL14, null);

            var optionL24 = {
                aniDom: "#left02_04",
                htmlDom: "#left_second_04",
                url: ''
            }
            com.UIControlAni(optionL24, null);

            var optionR14 = {
                aniDom: "#right01_04",
                htmlDom: "#right_first_04",
                url: ''
            }
            com.UIControlAni(optionR14, null);

            var optionR23 = {
                aniDom: "#right02_03",
                htmlDom: "#right_second_03",
                url: '',
                leftOrRight: 'right'
            }
            com.UIControlAni(optionR23, null);

            var optionR24 = {
                aniDom: "#right02_04",
                htmlDom: "#right_second_04",
                url: '',
                leftOrRight: 'right'
            }
            com.UIControlAni(optionR24, null);

        },
        /*****************************中间*****************************/
        loadCenter1: function () {
            var url = con.HtmlUrl + 'Industry/Estate/Center_01.html';
            require(['text!' + url], function (template) {
                $("#center_01").html(template);
                $("#center_01").show('drop', 1000);//左侧

                require('e_Main').numberAni();
            })
        },
        /*****************************右侧第一列*****************************/
        //加载第一个div
        loadRightFirst1: function () {
            var option = {
                aniDom: "#right01_01",
                htmlDom: "#right_first_01",
                url: con.HtmlUrl + 'Industry/Estate/Right_First_01.html',
                leftOrRight: 'right'
            }
            com.UIControlAni(option, function () { require("e_Echart").jyjh() });
        },
        //加载第二个div
        loadRightFirst2: function () {
            var option = {
                aniDom: "#right01_02",
                htmlDom: "#right_first_02",
                url: con.HtmlUrl + 'Industry/Estate/Right_First_02.html',
                leftOrRight: 'right'
            }
            com.UIControlAni(option, function () { require("e_Echart").xzsp() });
        },
        //加载第三个div
        loadRightFirst3: function () {
            var option = {
                aniDom: "#right01_03",
                htmlDom: "#right_first_03",
                url: con.HtmlUrl + 'Industry/Estate/Right_First_03.html',
                leftOrRight: 'right'
            }
            com.UIControlAni(option, function () {
                require("e_Echart").gccrc()
            });
        },
        /*****************************右侧第二列*****************************/
        //加载第一个div
        loadRightSecond1: function () {
            var option = {
                aniDom: "#right02_01",
                htmlDom: "#right_second_01",
                url: con.HtmlUrl + 'Industry/Estate/Right_Second_01.html',
                leftOrRight: 'right'
            }
            com.UIControlAni(option, function () {
                return null
            });
        },
        //加载第二个div
        loadRightSecond2: function () {
            var option = {
                aniDom: "#right02_02",
                htmlDom: "#right_second_02",
                url: con.HtmlUrl + 'Industry/Estate/Right_Second_02.html',
                leftOrRight: 'right'
            }
            com.UIControlAni(option, function () {
                clearInterval(require("e_Echart").fkldInterval);//清空计时器
                require("e_Echart").fkld();
            });
        },
        numberAni: function () {
            com.numberAnimation($('#e_qyzs'), 66159 - 200, 66159, 2000);
            com.numberAnimation($('#e_zlxxqys'), 2309 - 200, 2309, 2000);
            com.numberAnimation($('#e_ssgs'), 117 - 20, 117, 2000);
            com.numberAnimation($('#e_ydqys'), 22678 - 200, 22678, 2000);
        },
        //清空图层
        Revert: function () {
            //e_Echart.Revert();
            el_EstateInfo.Revert();
            el_AtlasChart.Revert();
            el_HotMap.Revert();
        }
    }
})
