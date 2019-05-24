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
                require("gl_TopCompany").flyToBuilding();
                require("gl_TopCompany").loadPolicyIndustryInfo();
                //require("gl_TopCompany").loadFun();
                //显示花蕾图
                require("gl_TopCompany").conrolFlower();
            })
        },
        //关闭花蕾图
        closeTopCompanyInfo: function () {
            require("b_BuildingFloor").resetBuildingMaterial();
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
                var location = companyInfo.location;

                var floor = 12,
                    room="0";//
                if (location.length > 0) { 
                    //企业可能有多个办公地点,默认飞到第一个楼层
                    if (parseInt(location[0].level) > 0) {
                        floor = location[0].level;
                    }                   
                    room = location[0].room;
                }
                require("b_BuildingFloor").buildingID = companyInfo.buildingID;               
                require("b_BuildingFloor").openFloor(floor,room);//最高六层，不揭楼层
                
                //else {
                    //var node = map.getSceneNode("hcy_baimo/hcy_baimo_" + companyInfo.buildingID + "#rooftop");//飞到公司所属楼栋的指定节点位置
                    //if (node) {
                    //    //飞行位置暂定
                    //    var viewPos = " -67.65904235839844,57.3547477722168,63.98405456542969".toVector3();
                    //    Q3D.globalCamera().flyToNode(node, viewPos, 1, function () {
                    //        //b_BuildingFloor.buildingOperation(nodename);

                    //    })

                    //}
               // }
            }
        },
        //加载花瓣的企业政策信息
        loadPolicyIndustryInfo: function () {
            gl_GardenBuildingAjax.getPolicyIndustryInfo(function (data) {
                //ul-PolicyIndustry 产业政策  ul-personnel人才  ul-tax 税收  ul-finance金融 ul-other 其他
                if(data.length>0){
                    var html_PolicyIndustry="",html_personnel="",html_tax="",html_finance="",html_other="";
                    for (var i = 0; i < data.length; i++) {
                        switch(data[i].policy_category_id){
                            case "2"://"人才政策":
                                html_personnel+='<li class="cy-qy-zcli"><p onclick="window.open(\''+data[i].policy_url+'\')">'+data[i].policy_name+'</p></li>';
                                break;
                            case "1"://"产业政策":产业扶持
                                html_PolicyIndustry+='<li class="cy-qy-zcli"><p onclick="window.open(\''+data[i].policy_url+'\')">'+data[i].policy_name+'</p></li>';
                                break;
                            case "5":   //产业政策  产业项目
                                html_PolicyIndustry+='<li class="cy-qy-zcli"><p onclick="window.open(\''+data[i].policy_url+'\')">'+data[i].policy_name+'</p></li>';
                                break;
                            case "财政税收政策":
                                html_tax+='<li class="cy-qy-zcli"><p onclick="window.open(\''+data[i].policy_url+'\')">'+data[i].policy_name+'</p></li>';
                                break;
                            case "金融政策":
                                html_finance+='<li class="cy-qy-zcli"><p onclick="window.open(\''+data[i].policy_url+'\')">'+data[i].policy_name+'</p></li>';
                                break;
                            case "6"://"其他":
                                html_other+='<li class="cy-qy-zcli"><p onclick="window.open(\''+data[i].policy_url+'\')">'+data[i].policy_name+'</p></li>';
                                break;
                        }
                    }
                    if(html_PolicyIndustry==""){
                        $("#ul-PolicyIndustry").parent().parent().parent().html('<div class="cy-qy-title">产业政策/div>');
                        //$("#ul-PolicyIndustry").parent().parent().parent().attr('disabled', "true");
                    }
                    if (html_personnel == "") {
                        $("#ul-personnel").parent().parent().parent().html('<div class="cy-qy-title">人才政策</div>');
                        //$("#ul-personnel").parent().parent().parent().attr('disabled', "true");
                    }
                    if (html_tax == "") {
                        $("#ul-tax").parent().parent().parent().html('<div class="cy-qy-title">财政税收政策</div>');
                        //$("#ul-tax").parent().parent().parent().attr('disabled', "true");
                    }
                    if (html_finance == "") {
                        $("#ul-finance").parent().parent().parent().html('<div class="cy-qy-title">金融政策</div>');
                        //$("#ul-finance").parent().parent().parent().attr('disabled', "true");
                    }
                    if (html_other == "") {
                        $("#ul-other").parent().parent().parent().html('<div class="cy-qy-title">其他</div>');
                        //$("#ul-other").parent().parent().parent().attr('disabled', "true");
                    }
                    $("#ul-PolicyIndustry").html(html_PolicyIndustry);
                    $("#ul-personnel").html(html_personnel);
                    $("#ul-tax").html(html_tax);
                    $("#ul-finance").html(html_finance);
                    $("#ul-other").html(html_other);
                }
            })
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


//[
//    {"policy_industry_co":"31,67,20,64,94,12,16,214,35,9,63,8,215,252,216,30,22,78,217,17,218,98,109,37","policy_industry_name":"智能制造,双特,基础装备,生产性服务业,高层次人才,工程机械,轨道交通,新兴产业,产城融合,高端数控机床,深远海洋工程装备,高端能源装备,产业化专项,重大工程,新能源汽车,智能汽车,交通运输装备,新一代信息技术,新能源装备,海洋工程装备,动力装备,高技能人才,千人计划,城市地下综合管廊","policy_url":"http://shlgservice.com/lg/dualPolicy/dualPolicy_2242.html","year":2018,"policy_category_id":"6","policy_publish_time":"2018-06-21 00:00:00","policy_name":"关于深化完善“双特”政策支持临港地区新一轮发展的若干意见","policy_impact_exponent":8,"policy_co":"1336","policy_keyword_tag":"{\"人才\":3.379961,\"资金\":2.2947826,\"智能\":2.3697023,\"临港\":13.666584,\"装备\":2.367452,\"浦东\":2.258773,\"交通\":2.5517771,\"文化\":1.4881933,\"土地\":2.1146786}","region_co":"1","region_name":"上海临港","id":4,"policy_category_name":"其他"},{"policy_industry_co":"67","policy_industry_name":"双特","policy_url":"http://shlgservice.com/lg/personPolicy/personPolicy_2662.html","year":2018,"policy_category_id":"2","policy_publish_time":"2018-07-13 00:00:00","policy_name":"关于印发《上海市临港地区公共租赁住房 供应管理实施细则》的通知","policy_impact_exponent":4,"policy_co":"1341","policy_keyword_tag":"{\"人才\":0.57602054,\"临港\":1.4034251,\"住房\":1.0536494}","region_co":"1","region_name":"上海临港","id":7,"policy_category_name":"人才政策"},
//    {"policy_industry_co":"107","policy_industry_name":"领军型人才","policy_url":"http://shlgservice.com/lg/policyExplain/policyExplain_1961.html","year":2018,"policy_category_id":"2","policy_publish_time":"2018-01-10 00:00:00","policy_name":"一图读懂《上海市临港地区领军型人才直接贡献奖励实施细则》","policy_impact_exponent":4,"policy_co":"1343","policy_keyword_tag":"{\"人才\":1.2410488,\"临港\":0.9673494,\"港人\":1.1366848,\"自贸区\":0.724148}","region_co":"1","region_name":"上海临港","id":8,"policy_category_name":"人才政策"},
//    {"policy_industry_co":"109,67,89,108,94,95,106,31,107,226,97,113,98,92,115","policy_industry_name":"千人计划,双特,百人计划,企业家人才,高层次人才,高端人才,两院院士,智能制造,领军型人才,临港工匠,高级技师,应届毕业生,高技能人才,博士后,院士","policy_url":"http://shlgservice.com/lg/personPolicy/personPolicy_1875.html","year":2018,"policy_category_id":"2","policy_publish_time":"2018-06-06 00:00:00","policy_name":"关于实施临港地区新一轮“双特”人才配套政策的通知","policy_impact_exponent":6,"policy_co":"1348","policy_keyword_tag":"{\"人才\":6.862549,\"资金\":1.1554904,\"临港\":6.1768923,\"毕业生\":1.1980386,\"居住证\":1.3065051,\"资源\":1.7335725,\"补贴\":1.4184135,\"技师\":1.202247}","region_co":"1","region_name":"上海临港","id":10,"policy_category_name":"人才政策"},{"policy_industry_co":"107,31,223,109,67,106,33,89,94","policy_industry_name":"领军型人才,智能制造,跨国公司,千人计划,双特,两院院士,百千万人才工程,百人计划,高层次人才","policy_url":"http://shlgservice.com/lg/personPolicy/personPolicy_1854.html","year":2018,"policy_category_id":"2","policy_publish_time":"2018-06-04 00:00:00","policy_name":"上海市临港地区领军型人才直接贡献奖励实施细则","policy_impact_exponent":6,"policy_co":"1359","policy_keyword_tag":"{\"人才\":4.547376,\"临港\":4.402955,\"申请人\":1.1947597,\"浦东\":1.1894789}","region_co":"1","region_name":"上海临港","id":14,"policy_category_name":"人才政策"},
//    {"policy_industry_co":"130,230","policy_industry_name":"创业,港澳台居民","policy_url":"http://shlgservice.com/lg/policyExplain/policyExplain_2672.html","year":2018,"policy_category_id":"1","policy_publish_time":"2018-12-05 00:00:00","policy_name":"金白银得实惠！本市迎来创业带动就业政策“升级版”！","policy_impact_exponent":6,"policy_co":"1360","policy_keyword_tag":"{\"医疗\":0.89287025,\"人才\":1.2340279,\"新政策\":1.5156552,\"社会保险费\":1.3494508,\"群体\":1.1920516,\"助推器\":0.89319134,\"房租\":1.0809633,\"补贴\":4.41784}","region_co":"1","region_name":"上海临港","id":15,"policy_category_name":"产业扶持政策"},{"policy_industry_co":"109,94,106,33,89,67,36","policy_industry_name":"千人计划,高层次人才,两院院士,百千万人才工程,百人计划,双特,产学研","policy_url":"http://shlgservice.com/lg/personPolicy/personPolicy_1874.html","year":2018,"policy_category_id":"2","policy_publish_time":"2018-06-05 00:00:00","policy_name":"上海市临港地区高层次人才奖励实施办法","policy_impact_exponent":4,"policy_co":"1369","policy_keyword_tag":"{\"人才\":4.6226397,\"资金\":1.6258607,\"临港\":6.284089,\"申请人\":2.16303,\"高等院校\":0.99515015,\"院士\":1.1355094,\"人民币\":1.1239822,\"导向\":0.94764346,\"科研\":2.0880077,\"技术\":1.0758579}","region_co":"1","region_name":"上海临港","id":21,"policy_category_name":"人才政策"},{"policy_industry_co":"94,109,92,115,67,226,82,106,33,89,107","policy_industry_name":"高层次人才,千人计划,博士后,院士,双特,临港工匠,优质教育,两院院士,百千万人才工程,百人计划,领军型人才","policy_url":"http://shlgservice.com/lg/policyExplain/policyExplain_1962.html","year":2018,"policy_category_id":"2","policy_publish_time":"2018-02-24 00:00:00","policy_name":"最热图形化政策：临港人才政策图解全集","policy_impact_exponent":5,"policy_co":"1370","policy_keyword_tag":"{\"人才\":4.8487697,\"大学生\":1.0314242,\"浦东\":1.0017078,\"租期\":0.9015767,\"英才\":0.91465414,\"补贴\":2.9479742,\"临港\":2.9628956,\"博士后\":0.9332554,\"院士\":1.3160301,\"港人\":1.2244663,\"证书\":1.2082264,\"科研\":0.9421556}","region_co":"1","region_name":"上海临港","id":22,"policy_category_name":"人才政策"},
//    {"policy_industry_co":"220,90,77,73,75,31,46,228,24,42,44,53,18,29","policy_industry_name":"创业园,本科,新兴金融,物联网,下一代通讯,智能制造,高端研发,新材料,民用航空,电子商务,服务业,航运,航空,新能源","policy_url":"http://shlgservice.com/lg/policyExplain/policyExplain_2396.html","year":2018,"policy_category_id":"5","policy_publish_time":"2018-08-16 00:00:00","policy_name":"上海各区创业扶持政策大盘点｜浦东篇","policy_impact_exponent":5,"policy_co":"1371","policy_keyword_tag":"{\"劳动力\":1.4029561,\"人才\":2.187924,\"户籍\":2.1285443,\"毕业生\":1.1645455,\"浦东\":5.66848,\"创业者\":1.9464725,\"金融\":1.3379306,\"资源\":1.627009,\"房租\":1.0629574,\"补贴\":3.8215275,\"居住证\":1.2632517,\"贷款\":1.1887742}","region_co":"1","region_name":"上海临港","id":23,"policy_category_name":"产业项目政策"},
//    {"policy_industry_co":"67,98,114","policy_industry_name":"双特,高技能人才,优秀人才","policy_url":"http://shlgservice.com/lg/personPolicy/personPolicy_2233.html","year":2018,"policy_category_id":"2","policy_publish_time":"2018-06-03 00:00:00","policy_name":"上海市临港地区“临港英才”评选奖励办法","policy_impact_exponent":4,"policy_co":"1372","policy_keyword_tag":"{\"匠心\":1.0598695,\"人才\":3.776045,\"资金\":1.1576694,\"临港\":7.2002106,\"评委\":1.5971847,\"英才\":3.8100276,\"营业执照\":1.3323399,\"技术\":2.0924213}","region_co":"1","region_name":"上海临港","id":24,"policy_category_name":"人才政策"}