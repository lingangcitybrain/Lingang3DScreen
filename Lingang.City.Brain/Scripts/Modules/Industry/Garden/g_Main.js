define(["config", "common", "mainMenu", "g_Echart", "gl_GardenBuilding", "gl_Stop", "gl_UnmannedCar", "gl_Event", "gl_TopCompany", "b_BuildingFloor", "e_LayerMenuData", "g_EchartAjax"], function (con, com, mainMenu, g_Echart, gl_GardenBuilding, gl_Stop, gl_UnmannedCar, gl_Event, gl_TopCompany, b_BuildingFloor, e_LayerMenuData, g_EchartAjax) {
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
            //this.loadBottomMenu();//加载底部图层

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
            var nodes = map.getSceneNode(con.AreaName, nodename);
            switch (poitype) {
                case "Garden": //园区
                    if (nodes) {
                        //Q3D.globalCamera().flyToAxisView(nodes, 200, 1, function () {
                            gl_GardenBuilding.loadGardenDetial(nodename);
                        //})
                    }
                    break;
                case "TopCompany": //龙头企业
                    if (nodes) {
                        require("gl_TopCompany").loadCompanyMain(nodename);
                        Q3D.globalCamera().flyToAxisView(nodes, 200, 1, function () {
                            
                        })
                    }
                    break;
                case "Building": //楼宇
                    //tl_Camera.loadCameraDetial(nodename)                   
                    b_BuildingFloor.buildingOperation(nodename);
                    var areaName = con.AreaName;
                    var poiNode = map.getSceneNode(con.AreaName, nodename);
                    //var POIName = "POIIndustryGBuilding_" + id;
                    //var poiNode = map.getSceneNode(areaName, POIName);
                    if (poiNode) {
                        var a = poiNode.getPosition();
                        //var pos = (a.x + 2) + "," + (a.y + 20) + "," + (a.z + 10);
                        var pos = ((a.x + 60) + "," + (a.y + 25) + "," + (a.z + 15)).toVector3().toGlobalPos(areaName);
                        var viewPos = " -67.65904235839844,57.3547477722168,63.98405456542969".toVector3();
                        Q3D.globalCamera().flyTo((pos.x + "," + pos.y + "," + pos.z).toVector3d(), viewPos, 1, function () { })
                    }

                    break;
                default:
            }
        },
        /*****************************图层*****************************/

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
                require("g_Echart").topTen({"offset":1, "count":10});
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
                require("g_Echart").zsFunnel();
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
                require("g_Echart").tcfw({ "datetime": "20190522110000" }); //停车服务图表
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

                require('g_Main').bigNum();
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
                require("g_Echart").zhwyRepair();
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
                // yyyyMMddHHmmss   这里 20190501120000 表示时间 2019-05-01 12:00:00 
                require("g_Echart").zhnh({ "datetime": "20190520110000" })
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
                require("g_Echart").sjtj(0);
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

        // 中间大数字
        bigNum: function () {
            g_EchartAjax.getBigNum(function (result) {
                if (require("g_Echart").bigNumData == null) { return false; }
                var data = require("g_Echart").bigNumData;
                data = data[0];

                com.numberAnimation($('#g_zcqys'), data.companyCount - 20, data.companyCount, 2000);
                com.numberAnimation($('#g_gdzctz'), data.investmentValue - 200, data.investmentValue, 2000);
                com.numberAnimation($('#g_cz'), data.outputValue - 200, data.outputValue, 2000);
                com.numberAnimation($('#g_ss'), data.tax - 100, data.tax, 2000);

            });
        },

        //清空图层
        Revert: function () {
            gl_TopCompany.Revert();
            gl_GardenBuilding.Revert();
            gl_Stop.Revert();
            gl_UnmannedCar.Revert();
            gl_Event.Revert();
            b_BuildingFloor.Revert();
        }
    }
})