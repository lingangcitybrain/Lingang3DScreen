define(["util"], function (util) {
    return {
        WebServiceUrl: "http://" + location.host + "/LingangCityBrain/",
        WebServiceUrlForControl: "http://192.168.1.222/LingangCityBrain/",
        HtmlUrl: "/LingangCityBrain/View/",
        InterfaceUrl: "http://47.101.181.131:8091/",  //原接口地址
        InterfaceUrl_DataStation: "http://47.102.116.141:8082/",  //数据中台接口地址
        InterfaceUrl_SQJQ:"http://47.102.116.141:8082/",   //社区景区接口地址
        InterfaceUrl_estate:"http://47.101.181.131:8081/",
        InterfaceUrl_garden: "http://47.101.181.131:8095/",  //接口地址
        InterfaceUrl_parking: "http://47.101.181.131:8093/", 
        InterfaceUrl_HeatMap: "http://47.101.181.131:8094/",  //接口地址
        InterfaceUrl_Event: "http://47.101.181.131:8096/",//园区事件获取接口
        InterfaceUrl_TourEvent: "http://47.101.181.131:9090/",//景区事件获取接口        
        IsInterface: true,//是否走接口true:接口false本地
        AreaName: "gwh_xilou",
        CONFIG_NAME: "Example",
        SERVER_PATH: "http://" + location.host + "/mapdata3d/LingangCityBrain20190321",
    	//SERVER_PATH: "http://192.168.3.199/mapdata3d/LingangCityBrain20190321",
        //SERVER_PATH: "http://192.168.1.195/mapdata3d/LingangCityBrain20190321",
        //LICENSE_SVR: "http://www.q-map.com.cn:8280/",
        //LICENSE_SVR: "http://192.168.1.222/",
        VideoInitialSize: null,//视频初始大小
        VideoInitialPosition: null,//视频初始位置
        isMonitorURL_service: false,
        outTime: 2000,
        terrainsName: "version_1_new5",//场景Terrains文件夹中子文件名
        ajaxTimeout: 5000,
        ViewPos: "395706.50733923283,629.7989501953125,-3417006.9540788573",//初始摄像机位置
        ViewOri: "-65.41295623779297,0.3581889867782593,0.770550549030304",//初始摄像机视口 
        dayContainer: null, //白天模式的容器
        nightContainer: null,//夜景模式的容器
        //夜景模式的子场景清单
        nightAreaList: ["hcy_baimo", "yingshe", "faguangdongxian", "beijing", "xiankuang", "yiqi_baimo", "erqi_baimo", "roadname_night"],
        //白天模式下的子场景清单   
        dayAreaList: ["yiqi", "hcy", "gwh_d_def", "gwh_d_abc", "erqi", "roadname"],
        //当前场景状态 实景 或夜景
        currStatus: 1, //0:白天 1 夜景

        TyHref_S: 'ME-SRE://1920,1080,0,0#{I/DPZJ2nKwh4LSzuco/cQkvXVlgp+TDvjq/cNLLkrjreGqbjCMrRauMS6zwQ327fX5A/CScvo4CnCmUWy4Qb5KX+tkPCMvUiD2TztEDdNx8rd1zLpkN8aDtEk23jcGaL}', //产业推演地址定向（大屏）
        TyHref_D: 'ME-SRE://1920,1080,0,0#{I/DPZJ2nKwh4LSzuco/cQkvXVlgp+TDvjq/cNLLkrjreGqbjCMrRauMS6zwQ327fX5A/CScvo4CnCmUWy4Qb5KX+tkPCMvUiD2TztEDdNx8rd1zLpkN8aDtEk23jcGaL}', //产业推演地址定向（控制台）

        /***************************常用方法***************************/
        //获取当前时间，格式YYMMDDHHMMSS
        getNowFormatDateYYMMDDHHMMSS: function () {
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            var hours = date.getHours();
            var minute = date.getMinutes();
            var second = date.getSeconds();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }

            if (hours >= 1 && hours <= 9) {
                hours = "0" + hours;
            }
            if (minute >= 1 && minute <= 9) {
                minute = "0" + minute;
            }
            if (second >= 1 && second <= 9) {
                second = "0" + second;
            }
            var currentdate = year + "" + month + "" + strDate + "" + hours + "" + minute + "" + second;
            return currentdate;
        },
        //获取当前时间，格式YYYY-MM-DD hh:mm:ss  getNowFormatDate
        getNowFormatDate:function (str) {
            var date = new Date(str);
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            var hours = date.getHours();
            var minute = date.getMinutes();
            var second = date.getSeconds();

            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + "-" + month + "-" + strDate + " "+ hours + ":" + minute + ":" + second;
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
            var ss = now.getSeconds();          //秒
            var ms = now.getMilliseconds();     //毫秒

            return Date.UTC(year, month, day, hh, mm, ss, ms);
        },
    };
});