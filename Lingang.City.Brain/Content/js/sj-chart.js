// JavaScript Document
// echart
var sjChart = document.getElementById('sj-chart');

var myChartsj = echarts.init(sjChart);

sjOption = {
    tooltip: {
        show:false,
    },
    legend: {
        show:false
    },
    color:["#04c6fa", "#dc4804"],
    series: [
        {
            type:'pie',
            radius: ['55%', '86%'],
            center:["center", "center"],
            itemStyle:{
                borderWidth:5, 
                borderColor:"rgba(1,6,28,.6)",
            },
            labelLine:{
                show:false,
            },
            label: {
                show:false,
            },
            data:[
                {value:160, name:'1'},
                {value:40, name:'2'},
            ]
        }
    ]
};
 myChartsj.setOption(sjOption);
