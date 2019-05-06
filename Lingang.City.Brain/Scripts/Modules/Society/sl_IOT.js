define(["config", "common", "s_layerMenuData", "s_LayerMenuAjax"], function (con, com, s_layerMenuData,s_LayerMenuAjax) {
    /**************************************传感器**************************************/
    return {
        LayerType: null,//选择传感器
        POIData: null,//POI详情数据
        LastPOI_Clk: null,//鼠标选中POI

        //加载传感器IOT
        loadIOT: function () {
            this.Revert();
            this.LayerType = require("s_Main").LayerCatalog.IOT;

            //默认视口
            //Q3D.globalCamera().flyTo(("395748.56013082625,291.2252960205078,-3416845.9814377967").toVector3d(), ("-32.5178108215332,4.200603485107422,2.6675448417663574").toVector3(), 1, null);
            com.LayerFlyto(10)


            var post_data = {"communityId": "s012","type":""}

            require("s_LayerMenuAjax").getSensorList(post_data, function (result) {
                //require("sl_IOT").POIData = result.list;

                var areaName = con.AreaName;
                var pois = [];
                for (var i = 0; i < require("sl_IOT").POIData.length; i++) {
                    var row = require("sl_IOT").POIData[i];
                    var icon = require("sl_IOT").LayerType.List[row.sensorType].UnChooseIcon;
                    var poiName = "POISociety" + require("sl_IOT").LayerType.List[row.sensorType].Name + "_" + row.id;//POIIOT_01
                    var iconSize = Q3D.vector2(41, 45);
                    var pos = row.wgs84Lng + "," + row.wgs84Lat + ",0";
                    var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

                    var poi = { POIName: poiName, Position: position, Text: "", Icon: icon, IconSize: iconSize };

                    var node = map.getSceneNode(areaName + "/" + poiName);
                    if (node) {
                        node.setVisible(1);
                    } else {
                        pois.push(poi);

                    }
                }
                com.InitPois(areaName, pois);
            })
            

            
        },
        //传感器点击事件
        loadIOTDetial: function (nodeName) {
            var areaName = con.AreaName;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var layername = this.LastPOI_Clk.split('_')[0].replace("POISociety", "");
                var level = this.LayerType.Level;
                var type = this.LastPOI_Clk.split('_')[1];
                var icon = this.LayerType.List[type].UnChooseIcon;

                var lastNode = map.getSceneNode(areaName, this.LastPOI_Clk);
                if (lastNode) {
                    lastNode.asPOI().setIcon(icon);
                    //lastNode.setVisible(0);
                }
            }

            this.LastPOI_Clk = nodeName;
            var node = map.getSceneNode(areaName, nodeName);
            if (node != null) {
                //Q3D.globalCamera().flyToNode(node, con.ViewOri.toVector3(), 2, function () {
                var poi = node.asPOI();

                var layername = nodeName.split('_')[0].replace("POISociety", "");
                var level = this.LayerType.Level;
                var type = nodeName.split('_')[1];
                var icon = this.LayerType.List[type].ChooseIcon;

                poi.setIcon(icon);
                //});
            }
        },
        //清空传感器POI
        clearIOTPOI: function () {
            var data = this.POIData;
            var areaName = con.AreaName;
            //设置POI隐藏
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    var name = this.LayerType.List[data[i].sensorType].Name;

                    var poiname = "POISociety" + name + "_" + data[i].id;
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

        //加载第二列的div
        loadLeftSecond: function () {
            var url = con.HtmlUrl + 'SocietyNew/Left_Second_EventIOT.html';
            require(['text!' + url], function (template) {
                $("#left_second_01").html(template);

                require("sl_IOT").loadSocietyCarchart();//
                require("sl_IOT").loadCirclediv();
            })
        },
        //加载第二列的div
        loadLeftSecond: function () {
            this.loadLeftSecond1();
            this.loadLeftSecond2();
            this.loadLeftSecond3();
            this.loadLeftSecond4();
        },
        //加载第二列的div
        loadLeftSecond1: function () {
            var option = {
                aniDom: "#left02_01",
                htmlDom: "#left_second_01",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventIOT1.html'
            }
            com.UIControlAni(option, function () { return null });
        },
        //加载第二列的div
        loadLeftSecond2: function () {
            var option = {
                aniDom: "#left02_02",
                htmlDom: "#left_second_02",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventIOT2.html'
            }
            com.UIControlAni(option, function () { require("sl_IOT").loadSocietyCarchart(); });
        },
        //加载第二列的div
        loadLeftSecond3: function () {
            var option = {
                aniDom: "#left02_03",
                htmlDom: "#left_second_03",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventIOT3.html'
            }
            com.UIControlAni(option, function () { require("sl_IOT").loadCirclediv(); });
        },
        //加载第二列的div
        loadLeftSecond4: function () {
            var option = {
                aniDom: "#left02_04",
                htmlDom: "#left_second_04",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventIOT4.html'
            }
            com.UIControlAni(option, function () {return null;});
        },
        //加载社区车辆图表
        loadSocietyCarchart: function ()
        {
           if ($("#sqcl-chart").length <= 0) { return false; }

	       // echart
	        var sqclChart = document.getElementById('sqcl-chart');
	        var sqcldata = [531,485,462,136,8];
	        
	        var myChartsqcl = echarts.init(sqclChart);
	                sqclOption = {
		                legend:{
			                show:false	
		                },
		                color: ['#3398DB'],
		                tooltip : {
			                trigger: 'axis',
			                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				                type : 'shadow' ,       //阴影指示器  默认为直线，可选为：'line' | 'shadow'
			                }
		                },
		                grid: {
		                  left: '1%',   // grid 组件离容器左侧的距离。
		                  right: '2%',
		                  bottom: '2%',
		                  height: "90%",
		                  containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
		                },
		                xAxis : {
			                type : 'category',
			                data : ['进入车辆', '出去车辆', '小区车辆', '外来车辆', '异常车辆'],
			                boundaryGap: ['20%', '20%'],
			                axisTick:{
				                show:false,
			                },
			                axisLine:{
				                lineStyle:{
					                color:"rgba(80,172,254,.2)"
				                }
			                },
			                axisLabel:{
				                textStyle:{
					                fontSize:25,
					                color:"#00d7fe"
				                }
			                },
			                splitLine:{
				                lineStyle:{
					                color:"rgba(80,172,254,.2)"
				                }
			                }
	                  },
		                yAxis : {
			                axisTick:{
				                show:false,
			                },
			                axisLine:{
				                lineStyle:{
					                color:"rgba(80,172,254,.2)",
				                }
			                },
			                interval :100,
			                min:0,
			                max:600,
			                axisLabel:{
				                textStyle:{
					                fontSize:25,
					                color:"#00d7fe",
				                }
			                },
			                splitLine:{
				                lineStyle:{
					                color:"rgba(80,172,254,.2)"
				                }
			                }
	                  },
		                series : [
		                  {
				                type:'bar',
				                barWidth: 50,
				                itemStyle: {
				                    normal: {
				                        barBorderRadius: 10,
				                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				                            offset: 0,
				                            color: '#04cafc'
				                        }, {
				                            offset: 1,
				                            color: '#0e4abc'
				                        }]),
				                    }
				                },

				                data:sqcldata,
		                  }
		                ]
	                };
	                myChartsqcl.setOption(sqclOption);
        },

        loadCirclediv: function ()
        {
            // 摄像头圆圈
            if ($("body").width() == 7680) {
                $("html").css({ fontSize: "90px" });
                $(".sxt-circlediv").each(function () { $(this).empty() })
                com.loopFun($('.sxt-circlediv')[0], 40, '#071956', '#0078ff', 'transparent', '20px', 6, 40, 1000);
                com.loopFun($('.sxt-circlediv')[1], 60, '#075612', '#00f81f', 'transparent', '20px', 6, 40, 1000);
                com.loopFun($('.sxt-circlediv')[2], 90, '#564009', '#f7b001', 'transparent', '20px', 6, 40, 1000);
                com.loopFun($('.sxt-circlediv')[3], 40, '#071956', '#0078ff', 'transparent', '20px', 6, 40, 1000);
                com.loopFun($('.sxt-circlediv')[4], 60, '#075612', '#00f81f', 'transparent', '20px', 6, 40, 1000);
                com.loopFun($('.sxt-circlediv')[5], 90, '#564009', '#f7b001', 'transparent', '20px', 6, 40, 1000);
                //com.loopFun($('.sj-circlediv')[0], 35, '#564009', '#f7b001', 'transparent', '20px', 15, 30, 1000);
                //com.loopFun($('.sj-circlediv')[1], 80, '#564009', '#098bdc', 'transparent', '20px', 15, 30, 1000);
            } else if ($("body").width() == 11520) {
                $("html").css({ fontSize: "130px" });
                $(".sxt-circlediv").each(function () { $(this).empty() })
                com.loopFun($('.sxt-circlediv')[0], 40, '#071956', '#0078ff', 'transparent', '20px', 10, 65, 1000);
                com.loopFun($('.sxt-circlediv')[1], 60, '#075612', '#00f81f', 'transparent', '20px', 10, 65, 1000);
                com.loopFun($('.sxt-circlediv')[2], 90, '#564009', '#f7b001', 'transparent', '20px', 10, 65, 1000);
                com.loopFun($('.sxt-circlediv')[3], 40, '#071956', '#0078ff', 'transparent', '20px', 10, 65, 1000);
                com.loopFun($('.sxt-circlediv')[4], 60, '#075612', '#00f81f', 'transparent', '20px', 10, 65, 1000);
                com.loopFun($('.sxt-circlediv')[5], 90, '#564009', '#f7b001', 'transparent', '20px', 10, 65, 1000);
                //com.loopFun($('.sj-circlediv')[0], 35, '#564009', '#f7b001', 'transparent', '20px', 20, 45, 1000);
                //com.loopFun($('.sj-circlediv')[1], 80, '#564009', '#098bdc', 'transparent', '20px', 20, 45, 1000);
            }      
        },

        Scrolldiv: function(){
            $('.scrolldiv').perfectScrollbar({ cursorwidth: 10, cursorcolor: "rgba(0, 126, 179, .6)", });
        },
        
        Revert: function () {
            this.clearIOTPOI();
        }
    }
})