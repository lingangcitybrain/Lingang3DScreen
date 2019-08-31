define(["config", "common", "g_Main", "e_Echart", "el_EstateInfo", "el_AtlasChart", "el_HotMap","e_EchartAjax"], function (con, com, g_Main, e_Echart, el_EstateInfo, el_AtlasChart, el_HotMap,e_EchartAjax) {
    /****************************产业****************************/
    return {
        zlxxcyRightTimer : null,
        zlxxcyRightTimer2 : null,

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
        openUnity3dWin:function(tyHref){
            window.location(tyHref);
        },
        loadMain: function () {

            //setTimeout(function () {
                //el_AtlasChart.loadAtlasChart();
                 require("el_EstateInfo").loadEstateInfo();
            //}, 1000);
           
            //this.loadBottomMenu();//加载底部图层

            this.loadLeftFirst1();//加载左侧第一列第一个div
            this.loadLeftFirst2();//


            this.loadLeftSecond1();//加载左侧第二列第一个div
            this.loadLeftSecond2();//
            this.loadLeftSecond3();//

            this.loadCenter1();//加载中间列

            // this.loadRightFirst1();//加载右侧第一列第一个div
            // this.loadRightFirst2();//
            // this.loadRightFirst3();//

            this.loadRightSecond1();//加载右侧第二列第一个div
            this.loadRightSecond2();//

            this.closeOtherUi();

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
            com.UIControlAni(option, function () {
                require("e_Main").getzlxxcyData()
            });
            //require("e_Echart").zlxxcy()
        },
        getzlxxcyData: function () {
            e_EchartAjax.getzlxxcyData(function(data){
                if (require("e_Echart").zlxxcyData == null) { return false; }
                var data = require("e_Echart").zlxxcyData;

                var dataEntCountArr = [];    //entConut数据数组
                var dataIndustryArr = [];    //industry数据数组
                var dataYearArr = [];        //年份

                for (var key in data[0]) {
                    for(var i=0; i<data[0][key].length; i++){
                        dataIndustryArr.push(data[0][key][i].industry);
                    }
                }
    
                // 获取下面 Top10Data  所需数据
                for(var i=0; i<data.length; i++){
                    for (var key in data[i]) {
                        dataYearArr.push(key);
                        for(var j=0; j<data[i][key].length; j++){
                            dataEntCountArr.push(data[i][key][j].entConut);
                        }
                    }
                };
                
                var Top10Data = [];
                var Top10TextData = [
                    "临港地区限价商品住房供应管理工作实施方案",
                    "高新技术企业职工教育经费税前扣除政策",
                    "临港地区建立特别机制和实行特殊政策的三十条实施政策",
                    "图解：上海自贸区服务业扩大开发措施",
                    "金白银得实惠！本市迎来创业带动就业政策“升级版”！",
                ];

                for(var i=0; i<dataYearArr.length; i++){
                    Top10Data.push(
                        {
                            "year": dataYearArr[dataYearArr.length - 1 - i],
                            "value": dataEntCountArr.slice(dataIndustryArr.length * (dataYearArr.length - 1 - i), dataIndustryArr.length * (dataYearArr.length - i)),
                            "text": Top10TextData[i]
                        }
                    )
                }


                // var arr = [];
                // for (var i = 0; i < data[4][2015].length; i++) {
                //     arr.push(data[4][2015][i].entConut)
                // }
                // for (var i = 0; i < data[3][2016].length; i++) {
                //     arr.push(data[3][2016][i].entConut)
                // }
                // for (var i = 0; i < data[2][2017].length; i++) {
                //     arr.push(data[2][2017][i].entConut)
                // }
                // for (var i = 0; i < data[1][2018].length; i++) {
                //     arr.push(data[1][2018][i].entConut)
                // }
                // for (var i = 0; i < data[0][2019].length; i++) {
                //     arr.push(data[0][2019][i].entConut)
                // }
                // var Top10Data = [
                //     { year: 2015, value: dataValueArr.slice(0, 9), text: '临港地区限价商品住房供应管理工作实施方案' },
                //     { year: 2016, value: dataValueArr.slice(9, 18), text: '高新技术企业职工教育经费税前扣除政策' },
                //     { year: 2017, value: dataValueArr.slice(18, 27), text: '临港地区建立特别机制和实行特殊政策的三十条实施政策' },
                //     { year: 2018, value: dataValueArr.slice(27, 36), text: '图解：上海自贸区服务业扩大开发措施' },
                //     { year: 2019, value: dataValueArr.slice(36, 45), text: '金白银得实惠！本市迎来创业带动就业政策“升级版”！' },
                // ]
                // 

                    var Top10DataLargestNumArr = [];
                    var Top10DataLargestNum = 0;
                    var Top10DataTotalYearNum = [];
                    var yearIndex = -1;

                    for (var i = 0; i < Top10Data.length; i++) {
                        Top10DataLargestNumArr.push(Math.max.apply(null, Top10Data[i].value))
                        Top10DataTotalYearNum[i] = sum(Top10Data[i].value)
                    }

                    Top10DataLargestNum = Math.max.apply(null, Top10DataLargestNumArr)

                    function zlxxcySetDataFun() {
                        $(".zlxxcy-li").each(function (index, element) {
                            $(this).find(".zlxxcy-bar").css({ transition: '1.5s width linear' }).width(Top10Data[yearIndex].value[index] * 100 / Top10DataLargestNum + '%');
                            $(this).find(".zlxxcy-num").html(Top10Data[yearIndex].value[index]);
                            $(this).find(".zlxxcy-per").html((Top10Data[yearIndex].value[index] / Top10DataTotalYearNum[yearIndex] * 100).toFixed(2) + '%');
                        })
                        $(".zlxxcy-year").html(Top10Data[yearIndex].year);
                        $(".zlxxcy-mess").html(Top10Data[yearIndex].text);

                        require("e_Main").zlxxcyRightTimer = setTimeout(function () {
                            clearTimeout(require("e_Main").zlxxcyRightTimer)
                            require("e_Main").zlxxcyRightTimer = null;
                            zlxxcyLoopFun();
                        }, 2500)
                    }

                    function zlxxcyLoopFun() {
                        yearIndex++;
                        if (yearIndex < Top10Data.length) {
                            zlxxcySetDataFun()
                        } else {
                            clearTimeout(require("e_Main").zlxxcyRightTimer)
                            require("e_Main").zlxxcyRightTimer = null;
                            yearIndex = -1;

                           require("e_Main").zlxxcyRightTimer2 = setTimeout(function () {
                                clearInterval(require("e_Main").zlxxcyRightTimer2)
                                require("e_Main").zlxxcyRightTimer2 = null;
                                $(".zlxxcy-li").each(function (index, element) {
                                    $(this).find(".zlxxcy-bar").css({ transition: '.3s width linear' }).width(0);
                                    $(this).find(".zlxxcy-num").html('');
                                    $(this).find(".zlxxcy-per").html('0%');
                                })
                                $(".zlxxcy-year").html('');
                                $(".zlxxcy-mess").html('');

                                require("e_Main").zlxxcyRightTimer = setTimeout(function () {
                                    clearTimeout(require("e_Main").zlxxcyRightTimer)
                                    require("e_Main").zlxxcyRightTimer = null;
                                    zlxxcyLoopFun();
                                }, 1500)

                            }, 4000)

                        }
                    }

                    require("e_Main").zlxxcyRightTimer = setTimeout(function () {
                        clearTimeout(require("e_Main").zlxxcyRightTimer)
                        require("e_Main").zlxxcyRightTimer = null;
                        zlxxcyLoopFun();
                    }, 1500)


                    function sum(arr) {
                        return eval(arr.join("+"));
                    };


                })
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

            var optionR11 = {
                aniDom: "#right01_01",
                htmlDom: "#right_first_01",
                url: '',
                leftOrRight: 'right'
            }
            com.UIControlAni(optionR11, null);

            var optionR12 = {
                aniDom: "#right01_02",
                htmlDom: "#right_first_02",
                url: '',
                leftOrRight: 'right'
            }
            com.UIControlAni(optionR12, null);

            var optionR13 = {
                aniDom: "#right01_03",
                htmlDom: "#right_first_03",
                url: '',
                leftOrRight: 'right'
            }
            com.UIControlAni(optionR13, null);
        },
        /*****************************中间*****************************/
        loadCenter1: function () {
            var url = con.HtmlUrl + 'Industry/Estate/Center_01.html';
            require(['text!' + url], function (template) {
                $("#center_01").html(template);
                $("#center_01").show('drop', 1000);//左侧
                require("e_Echart").centernumber()
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
                //return null;
                require("e_Echart").zlxxcyjg()
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
            com.numberAnimation($('#e_qyzs'), 123452 - 200, 123452, 2000);
            com.numberAnimation($('#e_zlxxqys'), 1221 - 200, 1221, 2000);
            com.numberAnimation($('#e_ssgs'), 23232 - 20, 23232, 2000);
            com.numberAnimation($('#e_ydqys'), 1 - 200, 1, 2000);
        },
        //清空图层
        Revert: function () {
            //e_Echart.Revert();
            el_EstateInfo.Revert();
            el_AtlasChart.Revert();
            el_HotMap.Revert();
            if (require("e_Main").zlxxcyRightTimer) clearTimeout(require("e_Main").zlxxcyRightTimer);
            if (require("e_Main").zlxxcyRightTimer2) clearTimeout(require("e_Main").zlxxcyRightTimer2);
        }
    }
})
