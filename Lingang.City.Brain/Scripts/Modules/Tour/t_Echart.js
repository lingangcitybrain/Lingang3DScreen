define(["config", "common"], function (con, com) {
    var rycltjdata1 = [], rycltjdata2 = [];
    function xData() {//获取近6月日期
        var dataArr = [];
        var data = new Date();
        var year = data.getFullYear();
        data.setMonth(data.getMonth() + 1)//获取到当前月份,设置月份
        for (var i = 0; i < 6; i++) {
            data.setMonth(data.getMonth() - 1);//每次循环一次 月份值减1
            dataArr.push(data.getMonth() + 1 + '月')
        }
        return dataArr.reverse();
    }
        function MyDate(n){
        var n = n;
        var d = new Date();
        var year = d.getFullYear();
        var mon=d.getMonth()+1;
        var day=d.getDate();
        if(day <= n){
                if(mon>1) {
                mon=mon-1;
                }
            else {
                year = year-1;
                mon = 12;
                }
            }
            d.setDate(d.getDate()-n);
            year = d.getFullYear();
            mon=d.getMonth()+1;
            //   day=d.getDate();      s = year+"-"+(mon<10?('0'+mon):mon)+"-"+(day<10?('0'+day):day);//日期类型2019-03-07
            day=d.getDate();      s = year+(mon<10?('0'+mon):mon)+(day<10?('0'+day):day);//日期类型20190307(字符串)
            
            return s;
            
            } console.log(MyDate(1));//昨天的日期
            console.log(MyDate(7));//前七天的日期
            
    return {
            myChartykfx:null,                //游客分析
            myChartykqsfx:null,              //游客趋势分析
            myChartyqfx:null,                //舆情分析
            myChartwrj:null,                 //无人机
            myChartjtxx:null,                //交通信息 
            myChartrycltj:null,              //人员车辆统计
            myCharttccsyqk:null,             //停车场使用情况
            myChartjwrsjtj:null,             //近五日事件统计
        //加载图表
        loadEcharts:function()
        {
            //alert("loadechart")
        this.ykfx();                //游客分析
        this.ykhx();                //游客画像
        this.ykqsfx();              //游客趋势分析
        this.yqfx();                //舆情分析
        this.yqxxs();               //舆情信息数 话题数
        this.yqlxtj();              //舆情类型统计
        this.wrj();                 //无人机
        this.jtxx();                //交通信息 
        this.rycltj();              //人员车辆统计
        this.tccsyqk();             //停车场使用情况
        this.jwrsjtj();             //近五日事件统计
        this.yqsjlb();              //园区事件列表  园区事件统计  
        this.jtxxtj();              //交通信息统计
        this.dh();                  //动画
        this.rq();                  //日期

        },
        

        //园区预警指标动画
        dh: function () {

            function yqyjLevelFun(yqsjNum, yqsjMaxNum){

               var yqsjLevel = [0, 28000, 33000, 45000];
               var yqsjMaxNum = yqsjMaxNum? yqsjMaxNum : 50000;

                $(".yqyj-levelbox>.yqyj-level").each(function(index, element){
                  $(this).css({ left: "calc( (100% - .4rem) * "+ (yqsjLevel[index] / yqsjMaxNum).toFixed(2) +" + .2rem)"})
                })

                $(".yqyj-levelbg").width( (yqsjNum / yqsjMaxNum).toFixed(4) * 100 + "%");

                var numLittle = 0;
                if(yqsjNum >= yqsjLevel[0]){
                  do{
                    numLittle++;
                  }while(yqsjNum > yqsjLevel[numLittle])
                  numLittle--;
                  $(".yqyj-levelbox>.yqyj-level").eq(numLittle).addClass("active").siblings().removeClass("active");
                  $(".yqyj-levelbox>.yqyj-level").eq(numLittle).css({ left: (yqsjNum / yqsjMaxNum).toFixed(4) * 100 + "%" })
                }

            }

           yqyjLevelFun( 10000);


            // 园区事件统计
            var yqsjNum = 0;
            var yqsjTimer = null;
            var yqsjTranFnTimer = null;

            yqsjFn();

            // 园区事件统计 定时器
            function yqsjFn() {
                yqsjTimer = setTimeout(function () {
                    yqsjNum++;
                    yqsjNum = yqsjNum > 1 ? 0 : yqsjNum;
                    yqsjTranFn(yqsjNum);
                }, 3000)
            }

            function yqsjTranFn(yqsjNum) {
                if (yqsjNum == 0) {
                    $(".yqsj-tabitemul").css({ transform: "translateX(0)" })
                                        .children().eq(0).css({ opacity: 1 })
                                        .siblings().css({ opacity: 0 });
                } else {
                    $(".yqsj-tabitemul").css({ transform: "translateX(-50%)" })
                                        .children().eq(0).css({ opacity: 0 })
                                        .siblings().css({ opacity: 1 });
                }
                $(".yqsj .jtxx-tabbox>.jtxx-tab").eq(yqsjNum).addClass("active").siblings().removeClass("active");

                yqsjTranFnTimer = setTimeout(function () {
                    clearTimeout(yqsjTranFnTimer);
                    yqsjFn()
                }, 500)
            }

            // 点击事件
            $(".yqsj .jtxx-tabbox>.jtxx-tab").each(function (index, element) {
                $(this).click(function () {
                    clearTimeout(yqsjTimer);
                    clearTimeout(yqsjTranFnTimer);
                    yqsjNum = index;
                    console.log(yqsjNum, yqsjTranFn())
                    yqsjTranFn(yqsjNum);
                })
            })

        },
        //人员车辆统计日期
        rq: function () {
             function MyDate(n){
        var n = n;
        var d = new Date();
        var year = d.getFullYear();
        var mon=d.getMonth()+1;
        var day=d.getDate();
        if(day <= n){
                if(mon>1) {
                mon=mon-1;
                }
            else {
                year = year-1;
                mon = 12;
                }
            }
            d.setDate(d.getDate()-n);
            year = d.getFullYear();
            mon=d.getMonth()+1;
            //day = d.getDate(); s = (mon < 10 ? ('0' + mon) : mon) + "月" + (day < 10 ? ('0' + day+'日') : day);//日期类型2019-03-07
            day = d.getDate(); s = mon + "月" + day + "日";
            //day=d.getDate();      s = year+(mon<10?('0'+mon):mon)+(day<10?('0'+day):day);//日期类型20190307(字符串)
            
                return s;
            } console.log(MyDate(0));//昨天的日期
            console.log(MyDate(7));//前七天的日期
            var html = '';
            html += '<a class="jtxx-tab active">'+MyDate(6)+'</a>';
            html += '<a class="jtxx-tab active">'+MyDate(5)+'</a>';
            html += '<a class="jtxx-tab">'+MyDate(4)+'</a>';
            html += '<a class="jtxx-tab">'+MyDate(3)+'</a>';
            html += '<a class="jtxx-tab">'+MyDate(2)+'</a>';
            html += '<a class="jtxx-tab">'+MyDate(1)+'</a>';
            html += '<a class="jtxx-tab">' + MyDate(0) + '</a>';
            $('#rq').html(html)
        },
        //游客分析
        ykfx: function () {
            $.ajax({
                type: 'POST',
                url:con.InterfaceUrl+'v1/park/userAgeDistribute',
                cache: false,
                dataType: 'json',
                success: function (data) {                        
                    //console.log(data);
                    var ykfxChart = document.getElementById('ykfx-chart');
                    var ykfxdata = [], ykfxage = [];
                    for (var i = 0; i < data.data.length; i++) {
                        ykfxdata.push(data.data[i].value);
                    }
                    ykfxage.push(data.data[1].name, data.data[0].name, data.data[2].name, data.data[3].name, data.data[4].name, data.data[5].name, data.data[6].name);
                    require("t_Echart").myChartykfx = echarts.init(ykfxChart);
                    ykfxOption = {

                        legend: {
                            show: false
                        },
                        color: ['#3398DB'],
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                                type: 'shadow',       //阴影指示器  默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        grid: {
                            left: '1%',   // grid 组件离容器左侧的距离。
                            right: '2%',
                            bottom: '2%',
                            height: "90%",
                            containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
                        },
                        xAxis: {
                            type: 'category',
                            data: ykfxage,
                            boundaryGap: ['20%', '20%'],
                            nameTextStyle: {     //  坐标轴标题
                                color: "#00d7fe",
                                fontSize: 16,
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "rgba(80,172,254,.6)"
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    fontSize: 18,
                                    color: "#00d7fe"
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: "rgba(80,172,254,.6)"
                                }
                            }
                        },
                        yAxis: {
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "rgba(80,172,254,.6)",
                                }
                            },
                            //interval :1000,
                            axisLabel: {
                                textStyle: {
                                    fontSize: 18,
                                    color: "#00d7fe",
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: "rgba(80,172,254,.6)"
                                }
                            }
                        },
                        series: [
                        {
                            type: 'bar',
                            barWidth: 60,
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

                            data: ykfxdata,
                        }
                        ]
                    };
                    require("t_Echart").myChartykfx.setOption(ykfxOption);
                },
                error: function () {
                    console.log('错误')
                }
            })
        },
        //游客画像
        ykhx: function () {
            $.ajax({
                type: 'POST',
                url: con.InterfaceUrl+'v1/park/userProfile',
                cache: false,

                dataType: 'json',
                success: function (data) {
                    //console.log(data);
                    var html = '';
                    for (var i = 0; i < data.data.length; i++) {
                        html+='<li class="cgq-li">';
                        html+='<div class="item-l" data-text="3"></div>';
                        html += '<div class="item-r"><div class="item-r-name">' + data.data[i].Name + '</div><div class="item-r-data"><span class="testAerial">' + data.data[i].Value + '</span>%</div></div>';
                        html += '</li>';
                    }
                    $('.ykhx-ul').html(html)
                },
                error: function () {
                    console.log('错误')
                }
            })
        },
        //游客趋势分析
        ykqsfx: function () {
            var montharr=xData() 
            var post_data = {
            "Timenow":"2019-03-01 12:00:00",
            }
            $.ajax({
                type:'POST',
                url:con.InterfaceUrl+'v1/park/person/futureVisitorTraffic',
                cache: false,
                data:post_data,
                dataType:'json',
                success:function(data){


                    //console.log(data);

                    var ykqsfxChart = document.getElementById('ykqsfx-chart');
                    var ykqsfxdata = [], ykqsfxtime = [];
                    for (var i = 0; i < data.data.length; i++) {
                        ykqsfxdata.push(data.data[i].visnumber);
                        
                    }
                    require("t_Echart").myChartykqsfx = echarts.init(ykqsfxChart);
                    ykqsfxOption = {
                        legend: {
                            show: false
                        },
                        color: ['#3398DB'],
                        grid: {
                            left: '1%',   // grid 组件离容器左侧的距离。
                            right: '1%',
                            bottom: '2%',
                            height: "90%",
                            containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                label: {
                                    show: false,
                                }

                            },
                        },
                        xAxis: {
                            type: 'category',
                            data: montharr,
                            boundaryGap: false,
                            nameTextStyle: {
                                color: "#00d7fe",
                                fontSize: 16,
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: "rgba(80,172,254,0.5)"
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    fontSize: 18,
                                    color: "#00d7fe"
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: "rgba(80,172,254,0.5)"
                                }
                            }

                        },
                        yAxis: {
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: "rgba(80,172,254,0.5)"
                                }
                            },
                            //interval: 150,
                            axisLabel: {
                                textStyle: {
                                    fontSize: 18,
                                    color: "#00d7fe"
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    color: "rgba(80,172,254,0.5)",
                                }
                            }
                        },
                        series: [
		                  {
		                      type: 'line',
		                      //smooth:true,
		                      color: "rgba(7,196,230,1)",
		                      lineStyle: {
		                          width: 2,
		                      },
		                      symbolSize: 10,
		                      data: ykqsfxdata
		                  }
                        ]
                    };
                    require("t_Echart").myChartykqsfx.setOption(ykqsfxOption);

                },
                error:function(){
                    console.log('错误')
                }
            })
	        


        },
        //舆情分析
        yqfx: function () {
            $.ajax({
                type: 'POST',
                url: con.InterfaceUrl+'v1/park/publicSentimentSourceByType',
                cache: false,
                
                // data:post_data,
                dataType: 'json',
                success: function (data) {
                    //console.log(data);
                var yqfxChart = document.getElementById('yqfx-chart');

                require("t_Echart").myChartyqfx = echarts.init(yqfxChart);

            yqfxOption = {
                tooltip: {
                    show: false,
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    show: false,
                },
                color: ["#ce580a", "#08a59c", "#3045c7", "#103698", "#22990a"],
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '70%',
                        minAngle: 15,//最小角度
                        startAngle:45, //起始角度
                        center: ["center", "center"],
                        data: [
                            { value: data.data[0].value, name: data.data[0].name },
                            { value: data.data[1].value, name: data.data[1].name },
                            { value: data.data[2].value, name: data.data[2].name },
                            { value: data.data[3].value, name: data.data[3].name },
                            { value: data.data[4].value, name: data.data[4].name },
                            { value: data.data[5].value, name: data.data[4].name }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        labelLine: {
                            normal: {
                                length: 20,
                                length2: 100,
                                lineStyle: {
                                    width: 2,
                                    color: "#0996d1"
                                }
                            }
                        },
                        label: {
                            normal: {
                                fontSize: 20,
                                formatter: '{b|{b}}{per|{d}}%\n\n',
                                padding: [0, -90],
                                //color:"#0996d1",
                                rich: {
                                    b: {
                                        fontSize: 20,
                                        lineHeight: 36,
                                        //color:"#fff",
                                    },
                                    per: {
                                        fontSize: 20,
                                        // color:"#0996d1",
                                        fontFamily: "Aerial",
                                    },
                                    center: {
                                        position: "center",
                                    }
                                }
                            }
                        },
                    }
                ]
            };

            require("t_Echart").myChartyqfx.setOption(yqfxOption);
                },
                error: function () {
                    console.log('错误')
                }
            })
            

        },
        //舆情信息数 话题数
        yqxxs: function () {
           $.ajax({
            type:'POST',
            url: con.InterfaceUrl+'v1/park/publicSentimentByType',
            cache: false,
            
            // data:post_data,
            dataType:'json',
            success:function(data){
                //console.log(data);
                $('#yqxxs').html(data.data[0].fiCount)
                $('#rmhts').html(data.data[1].fiCount)
            },
            error:function(){
                console.log('错误')
            }
        })
        },
        //舆情类型统计
        yqlxtj: function () {
           $.ajax({
            type:'POST',
            url:  con.InterfaceUrl+'v1/park/publicSentiment',
            cache: false,
            
            // data:post_data,
            dataType:'json',
            success:function(data){
                //console.log(data);
                var html = '';
                    
                        //html += '<a class="charttab">' + data.data[b].fsProperty + '<span style="color: #22990a;">' + '('+data.data[b].fsPercent+'%'+')' + '</span></a>'
                        html += '<a class="charttab">' + data.data[0].fsProperty + '<span style="color: #22990a;">' + '(' + data.data[0].fsPercent + '%' + ')' + '</span></a>';
                        html += '<a class="charttab">' + data.data[1].fsProperty + '<span style="color: #2961f1;">' + '(' + data.data[1].fsPercent + '%' + ')' + '</span></a>';
                        html += '<a class="charttab">' + data.data[2].fsProperty + '<span style="color: #fb5301;">' + '(' + data.data[2].fsPercent + '%' + ')' + '</span></a>';
                    
                    $('.charttabbox').html(html);
            },
            error:function(){
                console.log('错误')
            }
        })
        },
        //无人机
        wrj:function(){
            var wrjChart = document.getElementById('wrj-chart');
            $.ajax({
                type:'POST',
                url:con.InterfaceUrl+'v1/drone/droneInfo',
                cache: false,
            
                // data:post_data,
                dataType:'json',
                success:function(data){
                  
               

                    require("t_Echart").myChartwrj = echarts.init(wrjChart);

                    wrjOption = {
                        title: {
                            text: data.data[0].wrj_cnt,
                            subtext: '总数',
                            x: 'center',
                            y: '38%',
                            textStyle: {
                                color: '#ea6604',
                                fontSize: 24,
                                fontFamily: "Aerial"
                            },
                            subtextStyle: {
                                color: '#fff',
                                fontSize: 20
                            }
                        },
                        tooltip: {},
                        legend: {
                            show: false
                        },
                        color: ["#09d10e", "#0024fe", "#7d43f3"],
                        series: [
                            {
                                type: 'pie',
                                radius: ['50%', '64%'],
                                center: ["center", "center"],
                                itemStyle: {
                                    borderWidth: 0,
                                    borderColor: "#000",
                                },
                                labelLine: {
                                    normal: {
                                        length: 20,
                                        length2: 80,
                                        lineStyle: {
                                            width: 2,
                                            color: "#0996d1"
                                        }
                                    }
                                },
                                label: {
                                    normal: {
                                        fontSize: 20,
                                        formatter: '{b|{b}}\n{per|{d}}%',
                                        padding: [0, -70],
                                        color: "#0996d1",
                                        rich: {
                                            b: {
                                                fontSize: 20,
                                                lineHeight: 36,
                                                color: "#fff",
                                            },
                                            per: {
                                                fontSize: 20,
                                                color: "#0996d1",
                                                fontFamily: "Aerial",
                                            },
                                            center: {
                                                position: "center",
                                            }
                                        }
                                    }
                                },
                                data: [
                                    { value: data.data[0].wrj_flying_cnt, name: '执飞中' },
                                    { value: data.data[0].wrj_charging_cnt, name: '充电中' },
                                    { value: data.data[0].wrj_idle_cnt, name: '待命中' }
                                ]
                            }
                        ]
                    };
                    require("t_Echart").myChartwrj.setOption(wrjOption);
                        
                },
                error:function(){
                    console.log('错误')
                }
            })},
        //交通信息
        jtxx: function () {  //交通信息-实时人流量
            var jtxxChart = document.getElementById('jtxx-chart');

            var rq_data = [];//日期

            var jtxxdata1 = [], jtxxdata2 = [], jtxxdata3 = [];//地铁，公交，停车场

            var sum = 6;//索引查找七天前日期
            var temp = 0, temp1 = 0, temp2 = 0;          //存储总人数的变量

            

            var post_data = //申请的数据
            {
                "count": "400",
                "date_d": MyDate(sum)
            }

            for (var i = 0; i < 7; i++) { //循环7次 调用7次当日地铁总人数

                post_data.date_d = MyDate(sum);//将申请的日期更改
                rq_data.push(MyDate(sum))    //将日期数存在数组中
                sum--;              //日期递增
                $.ajax({
                    type: 'POST',
                    url: con.InterfaceUrl + 'v1/park/vehicle/metroStatistic',
                    cache: false,
                    data: post_data,
                    dataType: 'json',
                    success: function (data) {                                     //数据请求成功
                        for (var i = 0; i < data.data.length; i++) {               //遍历数组人数
                            temp += data.data[i].cnt                               //temp存储总人数
                        }
                        jtxxdata1.push(temp)                                       //将当日总人数存入地铁数组中
                        //console.log(temp);

                        tb(jtxxdata1, rq_data, jtxxdata3, jtxxdata2);               //向图表传入参数
                        temp = 0;
                        //    return jtxxdata1
                    },
                    error: function () {
                        console.log('错误')
                    }
                })
            };

            sum = 6;

            for (var i = 0; i < 7; i++) {//循环7次 调用7次当日进出车辆总数
                post_data.date_d = MyDate(sum);//将申请的日期更改
                sum--;
                $.ajax({
                    type: 'POST',
                    url: con.InterfaceUrl + 'v1/park/vehicle/parkVehicleStatistic',
                    cache: false,
                    data: post_data,
                    dataType: 'json',
                    success: function (data) {
                        for (var i = 0; i < data.data.length; i++) {
                            temp1 += data.data[i].cnt
                        }
                        jtxxdata2.push(temp1)
                        tb(jtxxdata1, rq_data, jtxxdata3, jtxxdata2);
                        temp1 = 0;
                    },
                    error: function () {
                        console.log('错误')
                    }
                })
            };

            sum = 6;

            for (var i = 0; i < 7; i++) {//循环7次 调用7次当日停车场总人数
                post_data.date_d = MyDate(sum);//将申请的日期更改
                sum--;
                $.ajax({
                    type: 'POST',
                    url: con.InterfaceUrl + 'v1/park/vehicle/parkingLotsStatistic',
                    cache: false,
                    data: post_data,
                    dataType: 'json',
                    success: function (data) {
                        for (var i = 0; i < data.data.length; i++) {
                            temp2 += data.data[i].cnt
                        }
                        jtxxdata3.push(temp2)
                        //console.log(temp1 + "temp");

                        tb(jtxxdata1, rq_data, jtxxdata3, jtxxdata2);
                        temp2 = 0;
                    },
                    error: function () {
                        console.log('错误')
                    }
                })

            };
          
             //tb(jtxxdata1, rq_data, jtxxdata3, jtxxdata2);
            function tb(jtxxdata1, rq_data, jtxxdata3, jtxxdata2)//图表绘制
            {
                require("t_Echart").myChartjtxx = echarts.init(jtxxChart);
                jtxxOption = {
                    title: {
                        text: "人/车流量",
                        left: "1%",
                        top: "5%",
                        textStyle: {
                            fontSize: 30,
                            color: "#00fddc"
                        },
                    },
                    legend: {
                        left: '25%',
                        top: " 5%",
                        data: ['地铁', '进出港车辆', '停车场'],
                        icon: 'rect',
                        itemWidth: 26,
                        itemHeight: 26,
                        textStyle: {
                            fontSize: 28,
                            color: "#fff"
                        },
                    },
                    color: ['#3398DB'],
                    grid: {
                        left: '1%',   // grid 组件离容器左侧的距离。
                        right: '1%',
                        bottom: '2%',
                        height: "76%",
                        containLabel: true   //grid 区域是否包含坐标轴的刻度标签。
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                show: false,
                            }
                        },
                    },
                    xAxis: {
                        type: 'category',
                        data: rq_data,
                        boundaryGap: true,
                        nameTextStyle: {
                            color: "#00d7fe",
                            fontSize: 16,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.5)"
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: 18,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: "rgba(80,172,254,0.5)"
                            }
                        }

                    },
                    yAxis: {
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.5)"
                            }
                        },
                        // interval: 1000,
                        axisLabel: {
                            textStyle: {
                                fontSize: 18,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: "rgba(80,172,254,0.5)",
                            }
                        }
                    },
                    series: [
                    {
                        type: 'line',
                        color: "rgba(253,238,0,.5)",
                        lineStyle: {
                            width: 3,
                        },
                        symbolSize: 0,
                        name: "地铁",
                        data: jtxxdata1
                    },
                    {
                        type: 'line',
                        color: "rgba(11,239,215,.5)",
                        lineStyle: {
                            width: 3,
                        },
                        symbolSize: 0,
                        name: "进出港车辆",
                        data: jtxxdata2
                    },
                    {
                        type: 'line',
                        color: "rgba(195,70,2,.8)",
                        lineStyle: {
                            width: 3,
                        },
                        symbolSize: 0,
                        name: "停车场",
                        data: jtxxdata3
                    }
                    ]
                };
                require("t_Echart").myChartjtxx.setOption(jtxxOption);
            }

        },
        //人员车辆统计
        rycltj: function () {
            
            var sum = 6;
            var post_data1 = {
                "count": "72",
                "date_d": Number(MyDate(sum)),
                "offset": "0"
            }
            var post_data2 = {
                "count": "72",
                "date_d": Number(MyDate(sum-1)),
                "offset": "0"
            }
            $.ajax({
                type: 'POST',
                url:  con.InterfaceUrl+'v1/park/person/peopleStatistic',
                cache: false,
                data: post_data1,
                dataType: 'json',
                success: function (data) {
                    //console.log(data);
                    var rycltjChart = document.getElementById('rycltj-chart');
                    
                    for (var i = 0; i < data.data.length; i++) {
                        if(data.data[i].sjlx=="入园"&&data.data[i].cnt!==0){rycltjdata1.push(data.data[i].cnt)};
                    }
                    tb(rycltjdata1, rycltjdata2)
                },
                error: function () {
                    console.log('错误')
                }
            })
            $.ajax({
                type: 'POST',
                url: con.InterfaceUrl + 'v1/park/person/peopleStatistic',
                cache: false,
                data: post_data2,
                dataType: 'json',
                success: function (data) {
                    //console.log(data);
                    var rycltjChart = document.getElementById('rycltj-chart');

                    for (var i = 0; i < data.data.length; i++) {
                        if (data.data[i].sjlx == "入园" && data.data[i].cnt !== 0) { rycltjdata2.push(data.data[i].cnt) };
                    }
                    tb(rycltjdata1, rycltjdata2)
                },
                error: function () {
                    console.log('错误')
                }
            })
            function tb(rycltjdata1, rycltjdata2) {
                var rycltjChart = document.getElementById('rycltj-chart');
                require("t_Echart").myChartrycltj = echarts.init(rycltjChart);
                rycltjOption = {
                    legend: {
                        show: false,
                    },
                    color: ['#3398DB'],
                    //backgroundColor: "rgba(74,128,244,.15)",
                    grid: {
                        left: '1%',
                        right: '1%',
                        bottom: '2%',
                        height: "90%",
                        containLabel: true,   //grid 区域是否包含坐标轴的刻度标签。
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                show: false,
                            }

                        },
                    },
                    xAxis: {
                        type: 'category',
                        data: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
                        boundaryGap: false,
                        nameTextStyle: {
                            color: "#00d7fe",
                            fontSize: 16,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.5)"
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: 18,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: "rgba(80,172,254,0.5)"
                            }
                        }

                    },
                    yAxis: {
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.5)"
                            }
                        },
                        //interval: 1500,
                        axisLabel: {
                            textStyle: {
                                fontSize: 18,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: "rgba(80,172,254,0.5)",
                            }
                        }
                    },
                    series: [
                      {
                          type: 'line',
                          color: "#4085ed",
                          lineStyle: {
                              width: 2,
                          },
                          symbolSize: 10,
                          data: rycltjdata1
                      },
                      {
                          type: 'line',
                          color: "#13cf79",
                          lineStyle: {
                              width: 2,
                          },
                          symbolSize: 10,
                          data: rycltjdata2
                      }
                    ]
                };
                require("t_Echart").myChartrycltj.setOption(rycltjOption);
            }
            tb();
            $('.rycltj-tabbox').on('click', 'button', function () { $(this).addClass('active').siblings().removeClass("active") })


        },
        //停车场使用情况
        tccsyqk: function () {
            var num = 7;
            
            var rq_data = [];
            var tccsyqkdata=[],tccsyqkdata1 = [], tccsyqkdata2 = [], tccsyqkdata3 = [], tccsyqkdata4 = [];
            
            for (var a = 0; a < 7; a++) {
                num--;
                var post_data = {       //将申请的日期更改
                    "count": "100",
                    "offset": "0",
                    "date_d": Number(MyDate(num))
                }                    
                rq_data.push(Number(MyDate(num)))    //将日期数存在数组中
                $.ajax({
                    type: 'POST',
                    url: con.InterfaceUrl + 'v1/park/vehicle/parkingLotsStatistic',
                    cache: false,
                    data: post_data,
                    dataType: 'json',
                    success: function (data) {
                        //    //console.log(data);
                        for (var i = 0; i < 4; i++) { tccsyqkdata.push(data.data[i].cnt); }
                        //console.log(tccsyqkdata)
                        if (tccsyqkdata.length == 28) {
                            tccsyqkdata1.push(tccsyqkdata[0], tccsyqkdata[1], tccsyqkdata[2], tccsyqkdata[3],tccsyqkdata[4], tccsyqkdata[5], tccsyqkdata[6])
                            tccsyqkdata2.push(tccsyqkdata[7], tccsyqkdata[8], tccsyqkdata[9], tccsyqkdata[10], tccsyqkdata[11],tccsyqkdata[12], tccsyqkdata[13])
                            tccsyqkdata3.push(tccsyqkdata[14], tccsyqkdata[15],tccsyqkdata[16], tccsyqkdata[17],tccsyqkdata[18], tccsyqkdata[19],tccsyqkdata[20])
                            tccsyqkdata4.push(tccsyqkdata[21], tccsyqkdata[22], tccsyqkdata[23], tccsyqkdata[24], tccsyqkdata[25], tccsyqkdata[26], tccsyqkdata[27])
                        }
                        var tccsyqkChart = document.getElementById('tccsyqk-chart');
                        require("t_Echart").myCharttccsyqk = echarts.init(tccsyqkChart);

                        tccsyqkOption = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                }
                            },
                            legend: [
                                {
                                    left: '4%',
                                    bottom: " 2%",
                                    icon: 'rect',
                                    itemWidth: 20,
                                    itemHeight: 20,
                                    textStyle: {
                                        fontSize: 22,
                                        color: "#0296d4"
                                    },
                                    data: ['海昌公园停车场']
                                },
                                {
                                    left: '27%',
                                    bottom: " 2%",
                                    icon: 'rect',
                                    itemWidth: 20,
                                    itemHeight: 20,
                                    textStyle: {
                                        fontSize: 22,
                                        color: "#0296d4"
                                    },
                                    data: ['雪绒花停车场']
                                },
                                {
                                    left: '50%',
                                    bottom: " 2%",
                                    icon: 'rect',
                                    itemWidth: 20,
                                    itemHeight: 20,
                                    textStyle: {
                                        fontSize: 22,
                                        color: "#0296d4"
                                    },
                                    data: ['临港大道停车场']
                                },
                                {
                                    left: '75%',
                                    bottom: " 2%",
                                    icon: 'rect',
                                    itemWidth: 20,
                                    itemHeight: 20,
                                    textStyle: {
                                        fontSize: 22,
                                        color: "#0296d4"
                                    },
                                    data: ['港城新天地停车场']
                                },
                            ],
                            grid: {
                                left: '1%',
                                right: '1%',
                                top: '6%',
                                containLabel: true
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    data: rq_data,
                                    nameTextStyle: {
                                        color: "#00d7fe",
                                        fontSize: 16,
                                    },
                                    axisTick: {
                                        show: false,
                                    },
                                    axisLine: {
                                        show: true,
                                        lineStyle: {
                                            color: "rgba(80,172,254,0.5)"
                                        }
                                    },
                                    axisLabel: {
                                        textStyle: {
                                            fontSize: 18,
                                            color: "#00d7fe"
                                        }
                                    },
                                    splitLine: {
                                        show: false,
                                        lineStyle: {
                                            color: "rgba(80,172,254,0.5)"
                                        }
                                    }
                                }
                            ],
                            yAxis: [
                                {
                                    type: 'value',
                                    axisTick: {
                                        show: false,
                                    },
                                    axisLine: {
                                        show: true,
                                        lineStyle: {
                                            color: "rgba(80,172,254,0.5)"
                                        }
                                    },
                                    //interval: 1000,
                                    axisLabel: {
                                        textStyle: {
                                            fontSize: 18,
                                            color: "#00d7fe"
                                        }
                                    },
                                    splitLine: {
                                        lineStyle: {
                                            color: "rgba(80,172,254,0.5)",
                                        }
                                    }
                                }
                            ],
                            series: [
                                {
                                    name: '海昌公园停车场',
                                    type: 'bar',
                                    barWidth: 14,
                                    itemStyle: {
                                        normal: {
                                            barBorderRadius: 3,
                                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#fffd00'
                                            }, {
                                                offset: 1,
                                                color: '#ff6f02'
                                            }]),
                                        }
                                    },
                                    data: tccsyqkdata1
                                },
                                {
                                    name: '雪绒花停车场',
                                    type: 'bar',
                                    barWidth: 14,
                                    itemStyle: {
                                        normal: {
                                            barBorderRadius: 3,
                                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#02fdf6'
                                            }, {
                                                offset: 1,
                                                color: '#00a3ff'
                                            }]),
                                        }
                                    },
                                    data: tccsyqkdata2
                                },
                                {
                                    name: '临港大道停车场',
                                    type: 'bar',
                                    barWidth: 14,
                                    itemStyle: {
                                        normal: {
                                            barBorderRadius: 3,
                                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#ace419'
                                            }, {
                                                offset: 1,
                                                color: '#5aad0b'
                                            }]),
                                        }
                                    },
                                    data: tccsyqkdata3
                                },
                                {
                                    name: '港城新天地停车场',
                                    type: 'bar',
                                    barWidth: 14,
                                    itemStyle: {
                                        normal: {
                                            barBorderRadius: 3,
                                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#d9d9d9'
                                            }, {
                                                offset: 1,
                                                color: '#808080'
                                            }]),
                                        }
                                    },
                                    data: tccsyqkdata4
                                }
                            ]
                        };
                        require("t_Echart").myCharttccsyqk.setOption(tccsyqkOption);

                    },
                    error: function () {
                        console.log('错误')
                    }
                })
            }
        },
        //近五日事件统计
        jwrsjtj: function () {
            var jwrsjtjChart = document.getElementById('jwrsjtj-chart');
            function MyDate2(n) {
                var n = n;
                var d = new Date();
                var year = d.getFullYear();
                var mon = d.getMonth() + 1;
                var day = d.getDate();
                if (day <= n) {
                    if (mon > 1) {
                        mon = mon - 1;
                    }
                    else {
                        year = year - 1;
                        mon = 12;
                    }
                }
                d.setDate(d.getDate() - n);
                year = d.getFullYear();
                mon = d.getMonth() + 1;
                day = d.getDate(); s = year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day);//日期类型2019-03-07
                //  day = d.getDate(); s = year + (mon < 10 ? ('0' + mon) : mon) + (day < 10 ? ('0' + day) : day);//日期类型20190307(字符串)

                return s;
            }
            var num = 5;
            //五种数据的每日统计
            var jwrsjtjdata1 = [], jwrsjtjdata2 = [], jwrsjtjdata3 = [], jwrsjtjdata4 = [], jwrsjtjdata5 = [];
         
            //累计数
            var count = 0;
            // var number=[jwrsjtjdata1,jwrsjtjdata2,jwrsjtjdata3,jwrsjtjdata4,jwrsjtjdata5]          //将五日数据存起来，用于图表

            var starttime = [];      //请求数据的日期
            var sjtjname = ["停车场爆满", "大客流预警", "拉横幅", "车辆拥堵", "黑车徘徊"]                    //五种数据存起来
            for (var i = 0; i < 5; i++) { //循环5次请求5日数据
                //console.log(i)
                num--;
                starttime.push(MyDate2(num))
                var post_data = {
                    "pageIndex": "1",
                    "pageSize": "1",
                    "starttime": starttime[i],        //请求5日数据
                }
                ajaxFun(i);
            }
            function ajaxFun(i) {
                $.ajax({
                    type: 'POST',
                    url: con.InterfaceUrl + 'v1/park/affair/eventNumberByType',   //请求的服务平台地址
                    cache: false,
                    async: false,
                    data: post_data,
                    dataType: 'json',
                    success: function (data) {                               //请求成功
                       
                        for (var j = 0; j < sjtjname.length; j++) {       //循环遍历五种数据 
                             //console.log(data[starttime[i]][sjtjname[j]])
                            switch (j) {                                  

                                case 0: jwrsjtjdata1.push(data[starttime[i]][sjtjname[j]])//j为0时只将数据车辆拥堵的值存入

                                    break;
                                case 1: jwrsjtjdata2.push(data[starttime[i]][sjtjname[j]])//j为1时只将数据大客流预警的值存入

                                    break;
                                case 2: jwrsjtjdata3.push(data[starttime[i]][sjtjname[j]])//j为2时只将数据黑车徘徊的值存入

                                    break;
                                case 3: jwrsjtjdata4.push(data[starttime[i]][sjtjname[j]])//j为3时只将数据停车场爆满的值存入

                                    break;
                                case 4: jwrsjtjdata5.push(data[starttime[i]][sjtjname[j]])//j为4时只将数据拉横幅的值存入

                                    break;


                            }

                            //  //console.log(data[starttime[i]][sjtjname[j]]+"---------------------");   
                            //number[i].push(data[starttime[i]][sjtjname[j]])  

                            // numberMap[i].push(data[starttime[i]][sjtjname[j]]);//将每日的五种数据存入number用于图表的数据中
                            count++;

                        }
                        //console.log(number[i]);   
                        if (count == 25) {
                            sjtj();
                            count = 0;
                        }
                      
                    },
                    error: function () {
                        console.log('错误')
                    }
                })
            }
            //图表
            function sjtj() {
                require("t_Echart").myChartjwrsjtj = echarts.init(jwrsjtjChart);
                jwrsjtjOption = {
                    legend: [
                         {
                             left: '2%',
                             bottom: " 2%",
                             icon: 'circle',
                             itemWidth: 20,
                             itemHeight: 20,
                             textStyle: {
                                 fontSize: 22,
                                 color: "#0296d4"
                             },
                             data: [sjtjname[0]]
                         },
                         {
                             left: '20%',
                             bottom: " 2%",
                             icon: 'circle',
                             itemWidth: 20,
                             itemHeight: 20,
                             textStyle: {
                                 fontSize: 22,
                                 color: "#0296d4"
                             },
                             data: [sjtjname[1]]
                         },
                         {
                             left: '40%',
                             bottom: " 2%",
                             icon: 'circle',
                             itemWidth: 20,
                             itemHeight: 20,
                             textStyle: {
                                 fontSize: 22,
                                 color: "#0296d4"
                             },
                             data: [sjtjname[2]]
                         },
                         {
                             left: '60%',
                             bottom: " 2%",
                             icon: 'circle',
                             itemWidth: 20,
                             itemHeight: 20,
                             textStyle: {
                                 fontSize: 22,
                                 color: "#0296d4"
                             },
                             data: [sjtjname[3]]
                         },
                         {
                             left: '80%',
                             bottom: " 2%",
                             icon: 'circle',
                             itemWidth: 20,
                             itemHeight: 20,
                             textStyle: {
                                 fontSize: 22,
                                 color: "#0296d4"
                             },
                             data: [sjtjname[4]]
                         },


                    ],
                    color: ['#3398DB'],
                    grid: {
                        left: '1%',
                        right: '1%',
                        top: '6%',
                        containLabel: true,   //grid 区域是否包含坐标轴的刻度标签。
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                show: false,
                            }

                        },
                    },
                    xAxis: {
                        type: 'category',
                        data: starttime,
                        boundaryGap: false,
                        nameTextStyle: {
                            color: "#00d7fe",
                            fontSize: 16,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.5)"
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: 18,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: "rgba(80,172,254,0.5)"
                            }
                        }

                    },
                    yAxis: {
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(80,172,254,0.5)"
                            }
                        },
                        // interval :5,
                        axisLabel: {
                            textStyle: {
                                fontSize: 18,
                                color: "#00d7fe"
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: "rgba(80,172,254,0.5)",
                            }
                        }
                    },
                    series: [
                      {
                          type: 'line',
                          name: sjtjname[0],
                          color: "#02e32c",
                          lineStyle: {
                              width: 2,
                          },
                          symbolSize: 10,
                          data: jwrsjtjdata1
                      },
                      {
                          type: 'line',
                          name: sjtjname[1],
                          color: "#02d8e3",
                          lineStyle: {
                              width: 2,
                          },
                          symbolSize: 10,
                          data: jwrsjtjdata2
                      },
                      {
                          type: 'line',
                          name: sjtjname[2],
                          color: "#e3a102",
                          lineStyle: {
                              width: 2,
                          },
                          symbolSize: 10,
                          data: jwrsjtjdata3
                      },
                      {
                          type: 'line',
                          name: sjtjname[3],
                          color: "#025ce3",
                          lineStyle: {
                              width: 2,
                          },
                          symbolSize: 10,
                          data: jwrsjtjdata4
                      },
                      {
                          type: 'line',
                          name: sjtjname[4],
                          color: "#5702e3",
                          lineStyle: {
                              width: 2,
                          },
                          symbolSize: 10,
                          data: jwrsjtjdata5
                      }
                    ]
                };
                require("t_Echart").myChartjwrsjtj.setOption(jwrsjtjOption);
            }

        },
        //园区事件列表  园区事件统计
        yqsjlb: function () {
            var post_data = {
                "startTime": "20190212",
                "endTime": "20190213"
            }
            $.ajax({
                type: 'POST',
                url: con.InterfaceUrl + 'v1/park/affair/getEventList',
                cache: false,

                data:post_data,
                dataType: 'json',
                success: function (data) {
                    //console.log(data);
                    $('.yqsjlb-list').empty(); $('.yqsj-list').empty();
                    var html = '';
                    var html2 = '';
                    for (var i = 0; i < data.data.length; i++) {
                        html += '<li class="yqsjlb-item clearfix">';
                        html += '<div class="item-l"></div>';
                        html += '<div class="item-r">';
                        html += '<div>拍照时间：' + data.data[i].sbsj + '</div>';
                        html += '<div>处理状态：' + data.data[i].DICTNAME + '<span>处置人：李立群</span></div>';
                        html += '<div>事件详情：' + data.data[i].sjms + '</div>';
                        html += '</div>';
                        html +='</li>';
                    };
                     for (var i = 1; i < data.data.length; i++) {
                        html2+='<li class="yqsj-item">';
                        html2+='<div class="yqsj-itemdiv"><span>00'+i+'</span>'+data.data[i].sj+'（<em class="testAerial">2</em>）</div>';
                        html2+='</li>';
                     }
                    $('.yqsj-list').html(html2);
                    $('.yqsjlb-list').html(html);
                },
                error: function () {
                    console.log('错误')
                }
            })
        },
        //交通信息统计
        jtxxtj: function () {
            
            var sum = MyDate(0);//索引查找第一天日期
            var temp1 = 0;
            var temp2 = 0;
            var temp3 = 0;
            var post_data = {
                "count": "400",
                "date_d": sum,
            }
            $.ajax({//地铁
                type: 'POST',
                url: con.InterfaceUrl + 'v1/park/vehicle/metroStatistic',
                cache: false,
                data: post_data,
                dataType: 'json',
                success: function (data) {
                    for (var i = 0; i < data.data.length; i++) {
                        temp1 += data.data[i].cnt;
                    }
                    //console.log(temp1)
                    $('#subway').html(temp1)
                },
                error: function () {
                    console.log('错误')
                }
            })
            $.ajax({//进出车辆
                type: 'POST',
                url: con.InterfaceUrl + 'v1/park/vehicle/parkVehicleStatistic',
                cache: false,
                data: post_data,
                dataType: 'json',
                success: function (data) {
                    for (var i = 0; i < data.data.length; i++) {
                        temp2 += data.data[i].cnt;
                    }
                    //console.log(temp1)
                    $('#car').html(temp2)
                },
                error: function () {
                    console.log('错误')
                }
            })

            $.ajax({//停车场
                type: 'POST',
                url: con.InterfaceUrl + 'v1/park/vehicle/parkingLotsStatistic',
                cache: false,
                data: post_data,
                dataType: 'json',
                success: function (data) {
                    for (var i = 0; i < data.data.length; i++) {
                        temp3 += data.data[i].cnt;
                    }
                    //console.log(temp3)
                    $('#park').html(temp3)
                },
                error: function () {
                    console.log('错误')
                }
            })
        },
        
     
        
        
   


            //清空
        Revert: function () {
            //游客趋势分析
            if (require("t_Echart").myChartykqsfx != null && require("t_Echart").myChartykqsfx != "" && require("t_Echart").myChartykqsfx != undefined) {
                require("t_Echart").myChartykqsfx.dispose();
            }
            //舆情分析
            if (require("t_Echart").myChartyqfx != null && require("t_Echart").myChartyqfx != "" && require("t_Echart").myChartyqfx != undefined) {
                require("t_Echart").myChartyqfx.dispose();
            }
            //无人机
            if (require("t_Echart").myChartwrj != null && require("t_Echart").myChartwrj != "" && require("t_Echart").myChartwrj != undefined) {
                require("t_Echart").myChartwrj.dispose();
            }
            //交通信息
            if (require("t_Echart").myChartjtxx != null && require("t_Echart").myChartjtxx != "" && require("t_Echart").myChartjtxx != undefined) {
                require("t_Echart").myChartjtxx.dispose();
            }
            //人员车辆统计
            if (require("t_Echart").myChartrycltj != null && require("t_Echart").myChartrycltj != "" && require("t_Echart").myChartrycltj != undefined) {
                require("t_Echart").myChartrycltj.dispose();
            }
            //停车场使用情况
            if (require("t_Echart").myCharttccsyqk != null && require("t_Echart").myCharttccsyqk != "" && require("t_Echart").myCharttccsyqk != undefined) {
                require("t_Echart").myCharttccsyqk.dispose();
            }
            //近五日事件统计
            if (require("t_Echart").myChartjwrsjtj != null && require("t_Echart").myChartjwrsjtj != "" && require("t_Echart").myChartjwrsjtj != undefined) {
                require("t_Echart").myChartjwrsjtj.dispose();
            }
        },
    }
}) 