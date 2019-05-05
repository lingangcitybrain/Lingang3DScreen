define(["config", "common", "util", "e_LayerMenuData", "gl_GardenBuildingAjax"], function (con, com, util, e_LayerMenuData, gl_GardenBuildingAjax) {
    /****************************龙头企业****************************/
    return {
        LayerType: null,//龙头企业POI属性
        POIData: null,//龙头企业POI详情数据
        LastPOI_Clk: null,
        CompanyList: new util.HashMap,
        CompanyID: null,
        clickBoolean:false,
        //加载龙头企业
        loadTopCompanyPOI: function () {
            require("g_Main").Revert();
            this.LayerType = require("g_Main").LayerCatalog.TopCompany;

            //require("gl_TopCompany").POIData = e_LayerMenuData.TopCompany.Data;
            gl_GardenBuildingAjax.getTopCompanyList(function (data) {
                require("gl_TopCompany").POIData = data;
                var areaName = con.AreaName;
                var icon = require("gl_TopCompany").LayerType.UnChooseIcon;
                var pois = [];
                for (var i = 0; i < require("gl_TopCompany").POIData.length; i++) {

                    var row = require("gl_TopCompany").POIData[i];
                    //var buildingID = row.buildingID;
                    var poiName = "POIIndustryG" + require("gl_TopCompany").LayerType.Name + "_" + row.id;//POIIOT_01
                    var iconSize = Q3D.vector2(72, 76);

                    var poiPOS = e_LayerMenuData.GardenPOI.Data[row.buildingID];
                    //var Coordinate = com.gcj02towgs84(row.lng, row.lat);//高德坐标转百度坐标
                    //var pos = Coordinate + ",0";

                    //var pos = row.lng + "," + row.lat + ",15";
                    var pos = "";
                    if (poiPOS) {
                        pos = poiPOS.lng + "," + poiPOS.lat + ",15";
                    }
                    if (pos != "") {
                        var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

                        var poi = { POIName: poiName, Position: position, Text: row.companyName, Icon: icon, IconSize: iconSize, FontColor: "#00ff00", FontSize: 8 };
                        var node = map.getSceneNode(areaName + "/" + poiName);
                        if (node) {
                            node.setVisible(1);//显示当前父节点
                        } else {
                            pois.push(poi);
                            require("gl_TopCompany").CompanyList.put(row.id, row)
                        }
                    }
                }
                com.InitPois(areaName, pois);
            })
        },
        //隐藏POI
        clearTopCompanyPOI: function () {
            var areaName = con.AreaName;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var layername = this.LastPOI_Clk.split('_')[0].replace("POIIndustryG", "");
                var level = this.LayerType.Level;
                var icon = this.LayerType.UnChooseIcon;
                var lastNode = map.getSceneNode(areaName, this.LastPOI_Clk);
                if (lastNode) {
                    lastNode.asPOI().setIcon(icon);
                    //lastNode.setVisible(0);
                }
            }
            this.LastPOI_Clk = "";

            var data = this.POIData;
            //设置POI隐藏
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    var name = this.LayerType.Name;

                    var poiname = "POIIndustryG" + name + "_" + data[i].id;
                    var node = map.getSceneNode(areaName + "/" + poiname);
                    if (node) {
                        //map.getArea(areaName).destroySceneNode(poiname);
                        node.setVisible(0);
                    }
                }
                this.LayerType = null;
                this.POIData = null;
            }
        },

        //
        loadCompanyMain: function (nodeName)
        {
            //require("gl_TopCompany").conrolFlower();
            var id = nodeName.split("_")[1];
            this.CompanyID = id;
            //$("#left_second_01").empty();
            //$("#left_second_02").empty();
            //$("#left_second_03").empty();            
            this.loadLeftCompanyScore(id)
            this.loadLeftCompanyInfo(id)
            this.loadTopCompanyDetial(nodeName)
            this.closeOtherUi();
            com.openCloseBigDigital('close'); // 收起大数字
        },
        conrolFlower: function () {
            /*********************控制花瓣显示隐藏********************/
            $(".cy-qy-navbar").addClass("active").children(".cy-qy-menu").css({ "transition": "transform .2s" });
            $(".cy-qy-navbar").find(".cy-qy-title").each(function () {
                $(this).css({
                    "transition-delay": "1s",
                    "transition-duration": ".3s",
                    "opacity": 1,
                    "padding": ".1rem .4rem",
                })
            })
            $(".cy-qy-navbar").find(".cy-qy-menu-close").addClass("active");
            /*****************************************/
        },
        //企业综合评分雷达图页面
        loadLeftCompanyScore: function (id) {
            //var url = con.HtmlUrl + 'Industry/Building/Left_Second_01.html';
            //require(['text!' + url], function (template) {
            //    $("#left_second_01").html(template);
            //    $("#left_second_01").show('drop', 1000);//左侧

            //    require("gl_TopCompany").qyzhpfldt(id);
            //})

            var option = {
                aniDom: "#left02_01",
                htmlDom: "#left_second_01",
                url: con.HtmlUrl + 'Industry/Building/Left_Second_01.html'
            }
            com.UIControlAni(option, function () {
                require("gl_TopCompany").qyzhpfldt(id);
            });
        },
        //企业综合评分雷达图
        qyzhpfldt: function (id)
        {
            if ($("#qyzhpfldt-chart").length <= 0) { return false; }
            var qyzhpfldtChart = document.getElementById('qyzhpfldt-chart');
            var myChartqyzhpfldt = echarts.init(qyzhpfldtChart);

            qyzhpfldtOption = {
                title: {

                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    show: false
                },
                radar: [
                    {
                        indicator: [
                            { text: '产业聚集性', max: 100 },
                            { text: '产业前瞻性', max: 100 },
                            { text: '产业均衡性', max: 100 },
                            { text: '技术领先性', max: 100 },
                            { text: '规模竞争力', max: 100 }
                        ],
                        name: {
                            formatter: '{value}',
                            textStyle: {
                                color: '#0ff',
                                fontSize: 20
                            }
                        },
                        radius: 80,
                        center: ['25%', '64%'],
                        axisLine: {
                            lineStyle: {
                                width: 2,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                width: 2,
                            },
                        },
                        splitArea: {
                            areaStyle: {
                                color: "transparent",
                            },
                        },
                    },
                    {
                        indicator: [
                            { text: '污染防治', max: 100 },
                            { text: '污染控制', max: 100 },
                            { text: '环境管理', max: 100 },
                            { text: '生态保护', max: 100 }
                        ],
                        name: {
                            formatter: '{value}',
                            textStyle: {
                                color: '#0ff',
                                fontSize: 20
                            }
                        },
                        radius: 80,
                        center: ['75%', '64%'],
                        axisLine: {
                            lineStyle: {
                                width: 2,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                width: 2,
                            },
                        },
                        splitArea: {
                            areaStyle: {
                                color: "transparent",
                            },
                        },
                    }

                ],
                series: [
                    {
                        type: 'radar',
                        tooltip: {
                            trigger: 'item'
                        },
                        itemStyle: {
                            normal: {
                                areaStyle: {
                                    type: 'default'
                                }
                            }
                        },
                        data: [
                            {
                                value: [70, 65, 80, 75, 78],
                                areaStyle: {
                                    normal: {
                                        color: 'rgba(235,182,0,.4)'
                                    }
                                },
                                lineStyle: {
                                    normal: {
                                        width: 4,
                                        color: "rgba(235,182,0,1)"
                                    }
                                }
                            }
                        ],
                    },
                    {
                        type: 'radar',
                        radarIndex: 1,
                        tooltip: {
                            trigger: 'item'
                        },
                        itemStyle: {
                            normal: {
                                areaStyle: {
                                    type: 'default'
                                }
                            }
                        },
                        data: [
                            {
                                value: [60, 73, 85, 40],
                                areaStyle: {
                                    normal: {
                                        color: 'rgba(26,234,187,.4)'
                                    }
                                },
                                lineStyle: {
                                    normal: {
                                        width: 4,
                                        color: "rgba(26,234,187,1)"
                                    }
                                }

                            }
                        ]
                    },


                ]
            };
            myChartqyzhpfldt.setOption(qyzhpfldtOption);
        },
        //企业基本信息
        loadLeftCompanyInfo: function (id) {
            //var url = con.HtmlUrl + 'Industry/Building/Left_Second_02.html';
            //require(['text!' + url], function (template) {
            //    $("#left_second_02").html(template);
            //    $("#left_second_02").show('drop', 1000);//左侧

            //    //显示公司详情
            //    require("gl_TopCompany").loadCompanyInfo(id);
            //})


            var option = {
                aniDom: "#left02_02",
                htmlDom: "#left_second_02",
                url: con.HtmlUrl + 'Industry/Building/Left_Second_02.html'
            }
            com.UIControlAni(option, function () {
                require("gl_TopCompany").loadCompanyInfo(id); //显示公司详情
            });
        },
        closeOtherUi: function(){
            //左侧第2列第3个
            var optionL23 = {
                aniDom: "#left02_03",
                htmlDom: "#left_second_03",
                url: '',
                leftOrRight: 'left'
            }
            com.UIControlAni(optionL23, null);
        },
        //加载企业详情
        loadCompanyInfo: function (id)
        {
            var data = this.CompanyList.get(id);
            if (data != null)
            {
                var name = data.companyName;   //公司名称
                var createtime = data.updateTime;//成立时间
                var companytype = " ";//data.companytype;//公司类型
                var zczb = " "//data.zczb;//注册资本

                //var hy = data.hy;//行业
                //var jyfw = data.jyfw;//经营范围
                //var zt = data.zt;//状态
                var preYearOutputValue = data.preYearOutputValue;
                var preYearTax = data.preYearTax;
                var dwtz = "";//data.dwtz;//对外投资
                var address = data.buildingName;


                //if (jyfw.length > 20) { jyfw = jyfw.substring(0, 20)+"..." }
              

                var html = "";
                html += '<li class="qyjbxx-li"><div>公司名称：</div><span>' + name + '</span></li>';
                //html += '<li class="qyjbxx-li"><div>成立日期：</div><span>' + createtime + '</span></li>';
                html += '<li class="qyjbxx-li"><div>公司类型：</div><span>' + companytype + '</span></li>';
                html += '<li class="qyjbxx-li"><div>注册资本：</div><span>' + zczb + '</span></li>';
                html += '<li class="qyjbxx-li"><div>上年度产值：</div><span>' + preYearOutputValue + '</span></li>';
                html += '<li class="qyjbxx-li"><div>上年度税收：</div><span>' + preYearTax + '</span></li>';
                //html += '<li class="qyjbxx-li"><div>所属行业：</div><span>' + hy + '</span></li>';
                //html += '<li class="qyjbxx-li"><div>经营范围：</div><span>' + jyfw + '</span></li>';
                //html += '<li class="qyjbxx-li"><div>状态：</div><span>' + zt + '</span></li>';
                html += '<li class="qyjbxx-li"><div>对外投资数：</div><span>' + dwtz + '</span></li>';
                html += '<li class="qyjbxx-li"><div>所在楼号：</div><span>' + address + '</span></li>';
                html += '<li class="qyjbxx-li"><div>更新日期：</div><span>' + createtime + '</span></li>';

                $("#Industry_CompanyInfo").empty();
                $("#Industry_CompanyInfo").html(html);
            }
        },
        //加载龙头企业 POI 和 花蕾图
        loadTopCompanyDetial: function (nodeName) {
            //POI样式调整
            var areaName = con.AreaName;
            this.LayerType = require("g_Main").LayerCatalog.TopCompany;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var icon = this.LayerType.UnChooseIcon;
                var lastNode = map.getSceneNode(areaName, this.LastPOI_Clk);
                if (lastNode) {
                    lastNode.asPOI().setIcon(icon);
                    //lastNode.setVisible(0);
                }
            }
            this.LastPOI_Clk = nodeName;
            var node = map.getSceneNode(areaName, nodeName);
            if (node != null) {
                var poi = node.asPOI();
                var icon = this.LayerType.ChooseIcon;
                poi.setIcon(icon);
            }

            //隐藏其他POI
            for (var i = 0; i < require("gl_TopCompany").POIData.length; i++) {
                var row = require("gl_TopCompany").POIData[i];
                var poiName = "POIIndustryG" + require("gl_TopCompany").LayerType.Name + "_" + row.id;//POIIOT_01
                if (poiName != nodeName) {
                    var node = map.getSceneNode(areaName + "/" + poiName);
                    if (node) {
                        node.setVisible(0);//隐藏其他POI
                    }
                }
            }
            //显示花蕾图
            require("gl_TopCompany").TopCompanyInfo()
        },
        //加载企业花蕾图信息
        TopCompanyInfo: function () {
            var url = con.HtmlUrl + 'Industry/Garden/TopCompanyInfo.html';
            require(['text!' + url], function (template) {
                $("#center_02").html(template);
                $("#center_02").show('drop', 1000);//左侧

                require("gl_TopCompany").loadFun();
                //显示花蕾图
                require("gl_TopCompany").conrolFlower();
            })
        },
        //关闭花蕾图
        closeTopCompanyInfo: function () {
            require("b_BuildingFloor").resetHideLayer();
            //POI样式调整
            var areaName = con.AreaName;
            require("gl_TopCompany").LayerType = require("g_Main").LayerCatalog.TopCompany;
            if (require("gl_TopCompany").LastPOI_Clk && require("gl_TopCompany").LastPOI_Clk != "") {
                var icon = require("gl_TopCompany").LayerType.UnChooseIcon;
                var lastNode = map.getSceneNode(areaName, require("gl_TopCompany").LastPOI_Clk);
                if (lastNode) {
                    lastNode.asPOI().setIcon(icon);
                    //lastNode.setVisible(0);
                }
            }
            //显示POI
            for (var i = 0; i < require("gl_TopCompany").POIData.length; i++) {
                var row = require("gl_TopCompany").POIData[i];
                var poiName = "POIIndustryG" + require("gl_TopCompany").LayerType.Name + "_" + row.id;//POIIOT_01
                var node = map.getSceneNode(areaName + "/" + poiName);
                if (node) {
                    node.setVisible(1);//显示POI
                }
            }

            //显示招商漏斗
            require("g_Main").loadLeftSecond1();//加载左侧第二列第一个div
            require("g_Main").loadLeftSecond2();//
            require("g_Main").loadLeftSecond3();//
            com.openCloseBigDigital('open'); // 显示大数字
            //进入龙头企业视角
            com.LayerFlyto(311, function () {               

            });
        },
        //绑定事件
        loadFun: function () {
            //if (require("gl_TopCompany").clickBoolean==null) {
            //    require("gl_TopCompany").clickBoolean = false;
            //}
            var clickBoolean = false;
            //$(".cy-qy-navbar").click(function (ev) {
            //    if (ev.target && ev.target == $(".cy-qy-navbar")[0]) {
            //        //console.log(ev.target)
            //        clickBoolean = !clickBoolean;
            //        if (clickBoolean && require("gl_TopCompany").clickBoolean) { //true，true
            //            $(this).addClass("active");
            //            require("gl_TopCompany").clickBoolean = false;
            //        }
            //        else if ((!clickBoolean) == false && require("gl_TopCompany").clickBoolean == false) {  //false，false
            //            $(this).addClass("active");
            //            require("gl_TopCompany").clickBoolean = true;
            //        }
            //        //else if (clickBoolean == false && require("gl_TopCompany").clickBoolean == true && (!$(this).hasClass("active"))==true) {  //false，false
            //        //    $(this).addClass("active");
            //        //    require("gl_TopCompany").clickBoolean = true;
            //        //}
            //        else {
            //            $(this).removeClass("active");
            //            require("gl_TopCompany").clickBoolean = true;
            //            //点击入驻企业操作
            //            require("gl_TopCompany").flyToBuilding();
            //        }
            //        //if ($(this).hasClass("active")) {
            //        //    $(this).removeClass("active");
            //        //    require("gl_TopCompany").flyToBuilding();
            //        //} else {
            //        //    $(this).addClass("active");
            //        //}
            //    }
            //})

            //$(".cy-qy-menu a").each(function (index, element) {
            //    var clickBtnABoolean = false;
            //    $(this).click(function (ev) {
            //        if (ev.target && ev.target == $(this)[0]) {
            //            clickBtnABoolean = !clickBtnABoolean;
            //            if (clickBtnABoolean) {
            //                $(this).addClass("active");
            //                $(this).find(".cy-qy-divcont") && $(this).find(".cy-qy-divcont").css({ display: "block" })
            //            } else {
            //                $(this).removeClass("active");
            //                $(this).find(".cy-qy-divcont") && $(this).find(".cy-qy-divcont").css({ display: "none" })
            //            }
            //        }
            //    })
            //})


            //setTimeout(function () {
            //    $(".cy-qy-navbar").click();
            //}, 200);
        },
        flyToBuilding: function () {
            //飞楼栋
            var companyInfo = require("gl_TopCompany").CompanyList.get(require("gl_TopCompany").CompanyID);

            if (companyInfo) {
                //var str = companyInfo.buildingName;  //"海立方一期/12号楼/12#-5", 海立方一期/14号楼/14# //14#代表楼，-5代表公司所在层，没有-，表示整栋楼都是该公司
                //var index = str.lastIndexOf("\/");
                //var floor = str.substring(index + 1, str.length);
                var floor = "12-4";
                if (floor.indexOf("-") > -1) {//表示公司在某层，否则整栋楼都是该公司
                    require("b_BuildingFloor").buildingID = companyInfo.buildingID;
                    require("b_BuildingFloor").openFloor(floor.split("-")[1]);
                } else {
                    var node = map.getSceneNode("hcy_baimo/hcy_baimo_" + companyInfo.buildingID + "#rooftop");//飞到公司所属楼栋的指定节点位置
                    if (node) {
                        //飞行位置暂定
                        var viewPos = " -67.65904235839844,57.3547477722168,63.98405456542969".toVector3();
                        Q3D.globalCamera().flyToNode(node, viewPos, 1, function () {
                            //b_BuildingFloor.buildingOperation(nodename);

                        })

                    }
                }
            }
        },
        //清空div内容
        clearTopCompanyInfo: function () {
            $("#center_02").empty();
        },
        //清空还原
        Revert: function () {
            this.clearTopCompanyPOI();
            this.clearTopCompanyInfo();
        }
    }
})