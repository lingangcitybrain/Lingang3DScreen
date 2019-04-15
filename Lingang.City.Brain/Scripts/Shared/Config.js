define(["util"], function (util) {
//define( function () {
    return {
        WebServiceUrl: "http://" + location.host + "/LingangCityBrainV3/", 
        HtmlUrl: "/LingangCityBrainV3/View/",
        InterfaceUrl: "http://47.101.181.131:8091/",  //接口地址
        InterfaceUrl_garden: "http://47.101.181.131:8095/",  //接口地址
        InterfaceUrl_parking: "http://47.101.181.131:8093/",
        InterfaceUrl_HeatMap: "http://47.101.181.131:8094/",  //接口地址
        IsInterface: true,//是否走接口true:接口false本地
        AreaName: "gwh_xilou",
        CONFIG_NAME: "Example",
        SERVER_PATH: "http://" + location.host + "/mapdata3d/LingangCityBrain20190321",
        //SERVER_PATH: "http://192.168.3.207/mapdata3d/LingangCityBrain20190321",
        //LICENSE_SVR: "http://www.q-map.com.cn:8280/",
        VideoInitialSize: null,//视频初始大小
        VideoInitialPosition: null,//视频初始位置
        isMonitorURL_service: false,
        outTime: 2000,
        VideoInitialSize: null,//视频初始大小
        VideoInitialPosition: null,//视频初始位置
        terrainsName: "version_1_new5",//场景Terrains文件夹中子文件名
        ajaxTimeout: 5000,

        ViewPos: "395706.50733923283,629.7989501953125,-3417006.9540788573",//初始摄像机位置
        ViewOri: "-65.41295623779297,0.3581889867782593,0.770550549030304",//初始摄像机视口 
        dayContainer:null, //白天模式的容器
        nightContainer: null,//夜景模式的容器
        ////夜景模式的子场景清单
        //nightAreaList: ["faguangdongxian", "yingshe", "beijing", "baimo_xiankuang","yiqi_baimo", "hcy_1_b", "hcy_2_b", "hcy_3_b", "hcy_4_b", "hcy_5_b", "hcy_6_b", "hcy_7_b", "hcy_8_b", "hcy_9_b", "hcy_10_b", "hcy_11_b", "hcy_12_b", "hcy_13_b", "hcy_14_b", "hcy_15_b", "hcy_16_b", "hcy_17_b", "hcy_24_b"],
        ////白天模式下的子场景清单   
        //dayAreaList: ["gwh_d_def", "gwh_xilou", "gwh_d_abc", "Road_Auxiliary", "yiqi", "hcy_1", "hcy_2", "hcy_3", "hcy_4", "hcy_5", "hcy_6", "hcy_7", "hcy_8", "hcy_9", "hcy_10", "hcy_11", "hcy_12", "hcy_13", "hcy_14", "hcy_15", "hcy_16", "hcy_17", "hcy_24"],
        
        ////夜景模式的子场景清单
        nightAreaList: ["hcy_baimo", "yingshe", "faguangdongxian", "beijing", "xiankuang", "yiqi_baimo", "erqi_baimo", "roadname_night"],
        ////白天模式下的子场景清单   
        dayAreaList: ["yiqi", "hcy", "gwh_d_def", "gwh_d_abc","erqi", "roadname"],

        //当前场景状态 实景 或夜景
        currStatus: 1, //0:白天 1 夜景
        /***************************常用方法***************************/
        //获取当前时间，格式YYYY-MM-DD 00:00:00
        getNowFormatDate: function () {
            var date = new Date();
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate+" 00:00:00";
            return currentdate;
        },
        //获取当前时间 格式YYYY-MM-DD HH:MM:SS
        CurentTime: function () {
            var now = new Date();
            var year = now.getFullYear();       //年
            var month = now.getMonth() + 1;     //月
            var day = now.getDate();            //日
            var hh = now.getHours();            //时
            var mm = now.getMinutes();          //分
            var ss = now.getSeconds();           //秒
            var clock = year + "-";
            if (month < 10)
                clock += "0";

            clock += month + "-";

            if (day < 10)
                clock += "0";

            clock += day + " ";

            if (hh < 10)
                clock += "0";

            clock += hh + ":";
            if (mm < 10) clock += '0';
            clock += mm + ":";

            if (ss < 10) clock += '0';
            clock += ss;
            return clock;
        },

        CurentTimeUTC: function () {
            var now = new Date();
            var year = now.getFullYear();       //年
            var month = now.getMonth() + 1;     //月
            var day = now.getDate();            //日
            var hh = now.getHours();            //时
            var mm = now.getMinutes();          //分
            var ss = now.getSeconds();           //秒
            var ms = now.getMilliseconds()//毫秒

            return Date.UTC(year, month, day, hh, mm, ss, ms);
        },
    }
})