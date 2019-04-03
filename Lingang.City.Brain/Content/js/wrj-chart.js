// JavaScript Document
// echart
var wrjChart = document.getElementById('wrj-chart');

var myChartwrj = echarts.init(wrjChart);

wrjOption = {
    title: {
        text: '600',
        subtext: '总数',
        x: 'center',
        y: '38%',
        textStyle : {
            color : '#ea6604',
            fontSize : 20,
            fontFamily:"Aerial"
        },
        subtextStyle : {
            color : '#fff',
            fontSize : 16
        }
    },
    tooltip: {},
    legend: {
        show:false
    },
    color:["#09d10e", "#0024fe", "#7d43f3"],
    series: [
        {
            type:'pie',
            radius: ['44%', '55%'],
            center:["center", "center"],
            itemStyle:{
                borderWidth:0, 
                borderColor:"#000",
            },
            labelLine:{
                normal:{
                    length:20,
                    length2:80,
                    lineStyle:{
                        width:2,
                        color:"#0996d1"
                    }
                }
            },
            label: {
                normal: {
                    fontSize:18,
                    formatter: '{b|{b}}\n{per|{d}}%',
                    padding:[0, -70],
                    color:"#0996d1",
                    rich:{
                        b: {
                            fontSize: 18,
                            lineHeight:36,
                            color:"#fff",
                        },
                        per: {
                            fontSize: 18,
                            color:"#0996d1",
                            fontFamily:"Aerial",
                        },
                        center:{
                            position:"center",
                        }
                    }
                }
            },
            data:[
                {value:210, name:'执飞中'},
                {value:240, name:'充电中'},
                {value:150, name:'待命中'}
            ]
        }
    ]
};

 myChartwrj.setOption(wrjOption);
