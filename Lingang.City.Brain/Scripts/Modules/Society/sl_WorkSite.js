define(["config", "common", "s_layerMenuData", "s_EchartAjax","s_LayerMenuAjax", "util"], function (con, com, s_layerMenuData, s_EchartAjax,s_LayerMenuAjax, util) {
    /**************************************WorkSite**************************************/
    return {
        LayerType: null,//选择传感器
        POIData: null,//POI详情数据
        LastPOI_Clk: null,//鼠标选中POI
        WorkSiteList: new util.HashMap,
        changeDroneInterval:null,
        //加载工地POI
        loadWorkSite: function () {
            this.Revert();
            this.LayerType = require("s_Main").LayerCatalog.WorkSite;
            s_LayerMenuAjax.getWorkSieList(function (result) { 
                require("sl_WorkSite").POIData = result;//s_layerMenuData.WorkSiteData.Data;
            var areaName = con.AreaName;
            var icon = require("sl_WorkSite").LayerType.UnChooseIcon;
            var pois = [];
            for (var i = 0; i < require("sl_WorkSite").POIData.length; i++) {
                var row = require("sl_WorkSite").POIData[i];
                require("sl_WorkSite").WorkSiteList.put(i,row);
                var poiName = "POISociety" + require("sl_WorkSite").LayerType.Name + "_" + i//row.id;//POIIOT_01
                var iconSize = Q3D.vector2(41, 45);

                var Coordinate = com.gcj02towgs84(parseFloat(row.lat),parseFloat(row.lng));//高德坐标转wgs84  经纬度反了
                var pos = Coordinate + ",0";
                var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

                var poi = { POIName: poiName, Position: position, Text: "", Icon: icon, IconSize: iconSize };
                pois.push(poi);
            }
            com.InitPois(areaName, pois);
            })
        },
        //工地点击事件
        loadWorkSiteDetial: function (nodeName) {
            var areaName = con.AreaName;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var layername = this.LastPOI_Clk.split('_')[0].replace("POISociety", "");
                var level = require("sl_WorkSite").LayerType.Level;
                var icon = require("sl_WorkSite").LayerType.UnChooseIcon;
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
                var layername = nodeName.split('_')[0].replace("POISociety", "");
                var level = require("sl_WorkSite").LayerType.Level;
                var icon = require("sl_WorkSite").LayerType.ChooseIcon;
                poi.setIcon(icon);
                //POI放在中间
                Q3D.globalCamera().flyToByClick('MapWrapper', Q3D.vector3d(map.getSceneNode(areaName, nodeName).getAbsPos()), 0.5);
                require("sl_WorkSite").WorkSiteDetialInfo(nodeName);
            }
        },
        WorkSiteDetialInfo: function (nodeName) {          
            s_LayerMenuAjax.getWorkSieInfoList(function (result) {
                var key = nodeName.split("_")[1];
                var info = require("sl_WorkSite").WorkSiteList.get(key);
                for (var i = 0; i < result.length; i++) {
                    var data = result[i];
                    if (info && data) {
                        if (info.siteName.indexOf(data.constructionSite) > -1) {
                            //详情页面
                            var option = {
                                aniDom: "#center01_01",
                                htmlDom: "#center_01",
                                url: con.HtmlUrl + 'SocietyNew/WorkSiteDetail.html'
                            }
                            com.UIControlAni(option, function () {
                                $("#workSite_builder").html(data.builder);
                                $("#workSite_year").html(data.buildTime);
                                $("#workSite_use").html(data.forUse);

                                //联动
                                $("#worksite_startTime").html(data.buildTime);
                                $("#worksite_builder").html(data.builder);
                                $("#worksite_usefor").html(data.forUse);
                            });
                            break;
                        }
                    }
                }
            })
        },
        //清空工地POI
        clearWorkSitePOI: function () {
            var data = this.POIData;
            var areaName = con.AreaName;
            //设置POI隐藏
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    var name = this.LayerType.Name;

                    var poiname = "POISociety" + name + "_" + i; //data[i].id;
                    var node = map.getSceneNode(areaName + "/" + poiname);
                    if (node) {
                        map.getArea(areaName).destroySceneNode(poiname);
                    }
                }
                this.LayerType = null;
                this.POIData = null;
            }

        },

        //加载第二列的div
        //loadLeftSecond: function () {
        //    var url = con.HtmlUrl + 'SocietyNew/Left_Second_EventWorkSite.html';
        //    require(['text!' + url], function (template) {
        //        $("#left_second_01").html(template);
        //    })
        //},


        //加载第二列的div
        loadLeftSecond: function () {
            this.loadLeftSecond1();
            this.loadLeftSecond2();
            this.loadLeftSecond3();
            this.loadLeftSecond4();
        },
        //加载第二列的div1
        loadLeftSecond1: function () {
            var option = {
                aniDom: "#left02_01",
                htmlDom: "#left_second_01",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventWorkSite1.html'
            }
            com.UIControlAni(option, function () {
                require("sl_WorkSite").loadWorkSiteBuilderData();
            });
        },
        //加载第二列的div2
        loadLeftSecond2: function () {
            var option = {
                aniDom: "#left02_02",
                htmlDom: "#left_second_02",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventWorkSite2.html'
            }
            com.UIControlAni(option, function () {
                require("sl_WorkSite").loadWorkSiteWrjData();

            });
        },
        //加载第二列的div3
        loadLeftSecond3: function () {
            var option = {
                aniDom: "#left02_03",
                htmlDom: "#left_second_03",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventWorkSite3.html'
            }
            com.UIControlAni(option, function () {
            	require("sl_WorkSite").loadWorkSiteWeatherData("worksite");
            });
        },
        //加载第二列的div4
        loadLeftSecond4: function () {
            var option = {
                aniDom: "#left02_04",
                htmlDom: "#left_second_04",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventWorkSite4.html'
            }
            com.UIControlAni(option, function () {
            	require("sl_WorkSite").loadGdXcyData({id:1});
                require("sl_IOT").Scrolldiv();
            });
        },

        //工地施工单位
        loadWorkSiteBuilderData: function () {
            s_EchartAjax.getWorkSiteBuilderData(function (result) {
                if (require("s_Echart").workSiteBuilderData == null) { return false; }
                var data = require("s_Echart").workSiteBuilderData;
                data = data[0];

                $("#worksite_startTime").html(data.startTime.replace(data.startTime.slice(4, 6), "-" + data.startTime.slice(4, 6) + "-"))
                $("#worksite_builder").html(data.builder)
                $("#worksite_usefor").html(data.usage)

            });
        },

        //工地无人机
        loadWorkSiteWrjData: function () {
            s_EchartAjax.getWorkSiteWrjData(function (result) {
                if (require("s_Echart").workSiteWrjData == null) { return false; }
                var data = require("s_Echart").workSiteWrjData;
                //data = data.data.communityDetail;

                $("#worksite_wrj_flightCounts").html(data.flightCounts);
                $("#worksite_wrj_eventCounts").html(data.eventCounts);
                $("#worksite_wrj_communityCarNums").html(data.flightDuration);//.html(data.communityCarNums.replace("h", ""));
                $("#worksite_wrj_communityGrade").html(data.siteGrade);//.html(data.communityGrade.replace("(m2)", ""));
                //图片轮播
                try {
                    if (data.imageUrl && data.imageUrl!="") {
                        var picArr = data.imageUrl.split(',');
                        if (picArr.length > 0) {
                            //require("sl_WorkSite").changeDroneInterval = window.setInterval(function () {
                            for (var i = 0; i < picArr.length; i++) {
                                $("#WorkSiteWrjVideo").append('<li class="wrj-li prism-player" style="display:none;background:url(' + picArr[i] + ');backgroundSize:100% 100%;"></li>');
                                    $("#WorkSiteWrjVideo").css({ background: "url(" + picArr[i] + ")", backgroundSize: "100% 100%" });
                                    //if (i == picArr.length-1) {
                                    //    i = -1;
                                    //}
                                }
                            //}, 60000)
                        }
                    }
                } catch (e) {

                }
                //setTimeout(function () {
                    require("sl_WorkSite").AutoChangeDroneIMG();
               // }, 2000)
                
            	// require("s_Main").loadWorkSiteWrjVideo("https://vku.youku.com/live/ilpshare?id=8018484")

            });
            //s_EchartAjax.getVideoPic(function (result) {
            //	if (require("s_Echart").videoPicData == null) { return false; }
            //	var data = require("s_Echart").videoPicData;

            //	for (var i = 0; i < data.length; i++) {
            //		if (data[i].eventType === "construction") {
            //			$("#WorkSiteWrjVideo").css({ background: "url(" + data[i].imageUrl + ")", backgroundSize: "100% 100%" });
            //		}
            //	}

            //});

        },
        AutoChangeDroneIMG: function () {
            var pics = $("#WorkSiteWrjVideo").find("li");
            var index = 0;
            //开始播放轮播图
            function startAutoPlay(){
                require("sl_WorkSite").changeDroneInterval = setInterval(function () {
                    index++;
                    if(index>pics.length){
                        index = 0;
                    }
                    changeImg();
                },10000);
            }
            
            //改变轮播图
            function changeImg(){
                for(var i=0;i<pics.length;i++){
                    pics[i].style.display = "none";
                }
                pics[index].style.display = "block";
                //$("#WorkSiteWrjVideo li")[index].();
            }
            startAutoPlay();
        },
    	//添加天气图片
        getWeatherIcon: function (str) {
        	var picNum = "";
        	switch (str) {
        		case "晴":
        			picNum = 0;
        			break;
        		case "多云转晴":
        		case "阴转晴":
        		case "晴转多云":
        		case "晴转阴":
        		case "多云":
        			picNum = 1;
        			break;
        		case "阴":
        		case "阴转多云":
        		case "多云转阴":
        			picNum = 2;
        			break;
        		case "小雨":
        		case "小雨转多云":
        		case "多云转小雨":
        			picNum = 7;
        			break;
        		case "中雨转小雨":
        		case "小雨转中雨":
        		case "中雨":
        			picNum = 8;
        			break;
        		case "小雨转大雨":
        		case "中雨转大雨":
        		case "大雨转中雨":
        		case "大雨转小雨":
        		case "大雨":
        			picNum = 9;
        			break;
        		case "中雨转阵雨":
        		case "大雨转阵雨":
        		case "阵雨转大雨":
        		case "阵雨转中雨":
        		case "阵雨":
        			picNum = 3;
        			break;
        		case "阵雨转雷阵雨":
        		case "大雨转雷阵雨":
        		case "雷阵雨转阵雨":
        		case "雷阵雨转大雨":
        		case "雷阵雨":
        			picNum = 4;
        			break;
        		case "雨夹雪":
        			picNum = 6;
        			break;
        		case "小雪":
        			picNum = 14;
        			break;
        		case "小雪转中雪":
        		case "中雪转小雪":
        		case "中雪":
        			picNum = 15;
        			break;
        		case "小雪转大雪":
        		case "中雪转大雪":
        		case "大雪转小雪":
        		case "大雪转中雪":
        		case "大雪":
        			picNum = 16;
        			break;
        		case "中雪转阵雪":
        		case "大雪转阵雪":
        		case "阵雪转中雪":
        		case "阵雪转大雪":
        		case "阵雪":
        			picNum = 17;
        			break;
        		default:
        			picNum = "";
        			break;
        	}
			
        	if (picNum === "") {
        		if ("晴".test(str)) {
        			picNum = 0;
        		} else if ("多云".test(str)) {
        			picNum = 1;
        		} else if ("阴".test(str)) {
        			picNum = 2;
        		}else if ("小雨".test(str)) {
        			picNum = 7;
        		}else if ("中雨".test(str)) {
        			picNum = 8;
        		}else if ("大雨".test(str)) {
        			picNum = 9;
        		} else if ("阵雨".test(str)) {
        			picNum = 3;
        		} else if ("雷阵雨".test(str)) {
        			picNum = 4;
        		} else if ("小雪".test(str)) {
        			picNum = 14;
        		} else if ("中雪".test(str)) {
        			picNum = 15;
        		} else if ("大雪".test(str)) {
        			picNum = 16;
        		} else if ("阵雪".test(str)) {
        			picNum = 17;
        		} else if ("冰雹".test(str)) {
        			picNum = 19;
        		} else {
        			picNum = 3;
        		}        		
        	}
        	return picNum;

        },

    	//添加空气质量指数
        getAirText: function (num) {
        	var str = "";
        	if (num === "" || num === null || num === undefined) {
        		str = ["空", "#666"]//灰

        	} else if (num >= 0 && num <= 50 || num === "优") {
        		str = ["优", "#0f0"]//绿色

        	} else if (num >= 51 && num <= 100 || num === "良") {
        		str = ["良", "#a0a000"]//黄色 

        	} else if (num >= 101 && num <= 150 || num === "轻度污染") {
        		str = ["轻度污染", "#fe9100"]//橙色 

        	} else if (num >= 151 && num <= 200 || num === "中度污染") {
        		str = ["中度污染", "#f00"]//红色 

        	} else if (num >= 201 && num <= 300 || num === "重度污染") {
        		str = ["重度污染", "#b0008f"]//紫红色 

        	} else if (num > 300 || num === "严重污染") {
        		str = ["严重污染", "#8b0000"]//暗红色 

        	}
        	return str;

        },

        //工地天气预报
        loadWorkSiteWeatherData: function (domId) {
            s_EchartAjax.getWorkSiteWeatherData(function (result) {
                if (require("s_Echart").workSiteWeatherData == null) { return false; }
                var data = require("s_Echart").workSiteWeatherData;
                var nowDate = new Date().getDate();
                var nowDay = new Date().getDay();

                //function getDayFun(nowDaystr) {
                //	var str = '';
                //	switch (nowDaystr % 7) {
                //		case 0:
                //			str = "周日";
                //			break;
                //		case 1:
                //			str = "周一";
                //			break;
                //		case 2:
                //			str = "周二";
                //			break;
                //		case 3:
                //			str = "周三";
                //			break;
                //		case 4:
                //			str = "周四";
                //			break;
                //		case 5:
                //			str = "周五";
                //			break;
                //		case 6:
                //			str = "周六";
                //			break;
                //	}
                //	return str;
                //}
				
				
                $("#" + domId + "_weather .sqzz-wrj-lr2-temp").html(data[0].zc + "（今天，实时：" + data[0].wd_min + "）");
               
                var html = '<table cellspacing=\"0\" cellpadding=\"0\" class=\"table sqzz-wrj-lr2-table\">' +
						'<tbody>' +
						'	<tr>' +
						'		<td rowspan=\"2\">' +
						'			<div><img src=\"Content/weather/' + require("sl_WorkSite").getWeatherIcon(data[0].tqms) + '.gif\" style=\"width: 1.1rem\"/></div>' +
						'		</td>' +
						'		<td>' + data[1].zc + '</td>' +
						'		<td>' + data[2].zc + '</td>' +
						'		<td>' + data[3].zc + '</td>' +
						'	</tr>' +
						'	<tr>' +
						'		<td><div><img src=\"Content/weather/' + require("sl_WorkSite").getWeatherIcon(data[1].tqms) + '.gif\" style=\"width: .8rem\"/></div></td>' +
						'		<td><div><img src=\"Content/weather/' + require("sl_WorkSite").getWeatherIcon(data[2].tqms) + '.gif\" style=\"width: .8rem\"/></div></td>' +
						'		<td><div><img src=\"Content/weather/' + require("sl_WorkSite").getWeatherIcon(data[3].tqms) + '.gif\" style=\"width: .8rem\"/></div></td>' +
						'	</tr>' +
						'	<tr>' +
						'		<td style=\"font-size: .4rem;\">' + data[0].wd_min + '-' + data[0].wd_max + '</td>' +
						'		<td></td>' +
						'		<td></td>' +
						'		<td></td>' +
						'	</tr>' +
						'	<tr>' +
						'		<td>' + data[0].tqms + '</td>' +
						'		<td>' + data[1].wd_min + '-' + data[1].wd_max + '</td>' +
						'		<td>' + data[2].wd_min + '-' + data[2].wd_max + '</td>' +
						'		<td>' + data[3].wd_min + '-' + data[3].wd_max + '</td>' +
						'	</tr>' +
						'	<tr>' +
						'		<td>' + data[0].fxfs + '</td>' +
						'		<td>' + data[1].tqms + '</td>' +
						'		<td>' + data[2].tqms + '</td>' +
						'		<td>' + data[3].tqms + '</td>' +
						'	</tr>' +
						'	<tr>' +
						'		<td>空气质量：' + (isNaN(data[0].kqzl) ? '' : data[0].kqzl) + '<span class=\"sqzz-wrj-lr2-air\" style=\" background:' + require("sl_WorkSite").getAirText(data[0].kqzl)[1] + '\" >' + require("sl_WorkSite").getAirText(data[0].kqzl)[0] + '</span></td>' +
						'		<td>' + data[1].fxfs + '</td>' +
						'		<td>' + data[2].fxfs + '</td>' +
						'		<td>' + data[3].fxfs + '</td>' +
						'	</tr>' +
					'	</tbody>' +
					'</table>' +
					'<span class=\"linear-gradient\"></span>' +
					'<span class=\"linear-gradient linear-gradient2\"></span>';

                $("#" + domId + "_tablediv").html(html);



            });
        },

        //工地巡查员
        loadGdXcyData: function (post_data) {
        	s_EchartAjax.getWorkSiteInspectorData(post_data, function (result) {
        		if (require("s_Echart").workSiteInspectorData == null) { return false; }
                var data = require("s_Echart").workSiteInspectorData;
                for(var i=0; i<data.length; i++){
                    $("#worksite-xcy").append(
                        '<li class=\"sqzz-xcyxx-li\">'
                           + '<div class=\"item-l\"><img src=\"' + data[i].photoUrl + '\" style=\"width:1.4rem !important; height:1.7rem !important;\"></div>'
                           + '<div class=\"item-r\">'
                               + '<ul class=\"sqzz-xcyxx-liul\">'
                                   + '<li><div>接单员：</div><span>' + data[i].inspectorName + '</span></li>'
                                   + '<li><div>性&nbsp;别：</div><span>' + data[i].sex + '</span></li>'
                                   + '<li><div>职&nbsp;位：</div><span>' + data[i].position + '</span></li>'
                               + '</ul>'
                           + '</div>'
                       + '</li>'
                    )
                }
            });
        },



        Revert: function () {
            this.clearWorkSitePOI();
            if (require("sl_WorkSite").changeDroneInterval) {
                window.clearInterval(require("sl_WorkSite").changeDroneInterval);
            }
        }
    }
})