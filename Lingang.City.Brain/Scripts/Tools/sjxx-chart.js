// JavaScript Document
// echart
var chartBox1 = document.getElementById('sjxx-chart');

function resizeChart(chartObj){
  chartObj.style.width = $(chartObj).parents(".sjxx-chartdiv").width();
  chartObj.style.height = $(chartObj).parents(".sjxx-chartdiv").height();
}

//resizeChart(chartBox1);

var myChart1 = echarts.init(chartBox1);

option1 = {
    tooltip: {
        show:false
    },
    legend: {
        show:false
    },
    color:["#f96b02", "#789611", "#119637", "#11966f", "#119196", "#116f96", "#114696", "#113096"],
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['34%', '50%'],
            center:["40%", "center"],
            itemStyle:{
                borderWidth:5, //设置border的宽度有多大
                borderColor:"#000",
            },
            labelLine:{
                normal:{
                    length:100,
                    length2:150
                }
            },
            label: {
                normal: {
                    fontSize:30,
                    formatter: '{b|{b}}\n{per|{d}%}',
                    padding:[0, -140],
                    rich:{
                        b: {
                            fontSize: 32,
                            lineHeight:50
                        },
                        per: {
                            fontSize: 45,
                            fontWeight:"bold",
                        }
                    }
                }
            },
            data:[
                {value:335, name:'摄像头'},
                {value:310, name:'烟雾感应'},
                {value:534, name:'烟雾感'},
                {value:335, name:'烟雾应'},
                {value:448, name:'烟感应'},
                {value:351, name:'雾感应'},
                {value:247, name:'烟雾感应1'},
                {value:302, name:'烟雾感应2'}
            ]
        }
    ]
};
 myChart1.setOption(option1);
