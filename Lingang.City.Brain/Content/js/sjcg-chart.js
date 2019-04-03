// JavaScript Document
	// echart
	var sjcgChart = document.getElementById('sjcg-chart');
	var data = [];
	for (var i = 1; i < 100; i++) {
		 data.push(Math.round((Math.random()*80 )));
	}
	var myChartsjcg = echarts.init(sjcgChart);
	sjcgOption = {
		title:{
			show:false,
			text:"接警次数(最近一年)",
			left:5,
			top:10,
			textStyle:{
				fontSize:24,
				color:"#fd8d1f"	
			},
		},
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
		  left: '2%',   // grid 组件离容器左侧的距离。
		  right: '2%',
		  bottom: '5%',
		  height: "90%",
		  containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
		},
		tooltip : {
			trigger: 'axis',
			axisPointer : {           
				type : 'cross' , 
				label:{
					show:false,	
				}     
				
			},
		},
		xAxis : {
			type : 'category',
			data : ['2018/1', '2018/2', '2018/3', '2018/4', '2018/5', '2018/6', '2018/7', '2018/8', '2018/9', '2018/10', '2018/11', '2018/12'],
			boundaryGap:false,
			nameTextStyle:{     //  坐标轴标题
				color:"#00d7fe",
				fontSize:16,
			},
			axisTick:{
				show:false,
			},
			axisLine:{
				show:true,
				lineStyle:{
					color:"rgba(80,172,254,0.5)"
				}
			},
			axisLabel:{
				textStyle:{
					fontSize:18,
					color:"#00d7fe"
				}
			},
			splitLine:{
				show:true,
				lineStyle:{
					color:"rgba(80,172,254,0.5)"
				}
			}

	  },
		yAxis : {
			axisTick:{
				show:false,
			},
			axisLine:{
				show:true,
				lineStyle:{
					color:"rgba(80,172,254,0.5)"
				}
			},
			interval :10,
			axisLabel:{
				textStyle:{
					fontSize:18,
					color:"#00d7fe"
				}
			},
			splitLine:{
				lineStyle:{
					color:"rgba(80,172,254,0.5)",
					//color:"#50acfe"
				}
			}
	  },
		series : [
		  {
				type:'line',
				smooth:true,
				color:"rgba(7,196,230,1)",
				areaStyle: {
					opacity:.18,
				},
				lineStyle:{
					width:2,	
				},
				symbolSize:0,
				data:data,
		  }
		]
	};
	myChartsjcg.setOption(sjcgOption);
	

