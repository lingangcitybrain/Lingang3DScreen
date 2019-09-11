define(["config", "common", "t_LayerMenuData"], function (con,com,t_LayerMenuData) {
    /******************************大客流********************************/
    return {
        ///v1/park/vehicle/parkingLots
        //获取停车场信息，目前该停车场信息没有相应的经纬度坐标
        getParkingLots: function (post_data, callback)
        {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_DataStation + "v1/park/vehicle/parkingLots",
                    cache: false,
                    data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (res) {
                        var data = res;
                        callback(data);
                    },
                    error: function () {
                        console.log('景区管理---停车场空余车辆数据获取失败');
                        //alert("数据传输错误");
                    }
                });
            }
            else {//执行本地
                var data= t_LayerMenuData.FreeParkingLot.data;
                callback(data);
            }       
        },
        //获取摄像头数据
        getCameraList: function (post_data, callback) {
            if (con.IsInterface)//执行接口
            {

                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_DataStation + "v1/park/camera",
                    cache: false,
                    data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("tl_Camera").POIData = data.list;
                        if ($.isFunction(callback))
                            callback(data.list);
                    },
                    error: function () {
                        console.log('景区管理---获取摄像头点位数据失败')
                        //alert("数据传输错误");
                    }
                });
            }
            else {//执行本地
                require("tl_Camera").POIData = t_LayerMenuData.CameraData.data;
                if ($.isFunction(callback))
                    callback();
            }
        },
        //根据sbbm获取视频地址
        getCameraUrlById: function (post_data, callback) {
            //var post_data = { "sbbm": "31011900081326012006" }
            $.ajax({
                type: "POST",      //data 传送数据类型。post 传递 
                url: con.InterfaceUrl + "v1/videoPlay/playing",//"v1/uav/list",//http://47.102.116.141:8082/ 上新地址  //"v1/videoPlay/playing",
                cache: false,
                data: post_data,  //传送的数据
                dataType: 'json',  // 返回数据的数据类型json
                success: function (data) {
                    callback(data)
                },
                error: function () {
                    //alert("数据传输错误");
                    console.log('景区管理---根据sbbm获取视频地址失败')
                    //alert("数据传输错误");
                    //com.alert("数据传输错误");
                }
            });
        },
        //获取事件数据
        getEventList: function (post_data, callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",
                    //url: con.InterfaceUrl_DataStation + "v1/park/affair/list",
                    url: con.InterfaceUrl_TourEvent + 'v1/park/affair',
                    cache: false,
                    data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("tl_Event").POIData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        console.log('景区管理---获取事件数据失败')
                    }
                });
            }
            else {//执行本地
                require("tl_Event").POIData = t_LayerMenuData.EventData.data;
                callback();
            }
        },
        //根据车牌获取车辆轨迹
        getEventTruckTrace: function (post_data, callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",
                    url: con.InterfaceUrl + "v1/park/affair/getEventCarTrace",
                    cache: false,
                    data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("tl_Event").POITruckTraceData = data.trace;
                        callback(data.trace)
                    },
                    error: function () {
                        //alert("数据传输错误");
                        console.log('景区管理---获取车辆轨迹失败')
                    }
                });
            }
            else {//执行本地
                callback();
            }
        },
        //获取公交数据
        getbusList: function (post_data, callback) {
            if (con.IsInterface)//执行接口
            {
                //var post_data = { "offset": "0", "count": "1000"}
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_DataStation + "v1/park/vehicle/busStopInfo",
                    //contentType: 'application/json;charset=UTF-8',
                    cache: false,
                    data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("tl_Bus").POIData = data;
                        callback(data); 
                    },
                    error: function () {
                        //alert("数据传输错误");
                        console.log('景区管理---获取公交数据失败')
                    }
                });
            }
            else {//执行本地
                require("tl_Bus").POIData = t_LayerMenuData.BusData.data;
                callback();
            }
        },
        //获取公交站数据
        getbusstopList: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "GET",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_DataStation + "six/digit/busstop",
                    //contentType: 'application/json;charset=UTF-8',
                    cache: false,
                    data: null,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("tl_Bus").POIData = data;
                        callback(data); 
                    },
                    error: function () {
                        //alert("数据传输错误");
                        console.log('景区管理---获取公交车站数据失败');
                    }
                });
            }
            else {//执行本地
                require("tl_Bus").POIData = t_LayerMenuData.BusstopData.data;
                callback();
            }
        },
        //获取无人机库列表
        getDroneHangarList: function (post_data, callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "get",//"POST",      //data 传送数据类型。post 传递
                    url: con.InterfaceUrl_DataStation + "six/manage/warehouse/list",//"v1/drone/hangers/list",  // yii 控制器/方法   
                    cache: false,
                    data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("tl_Drone").POIData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        console.log('景区管理---获取无人机库列表失败');
                        require("tl_Drone").POIData = t_LayerMenuData.DroneHangarData.data;
                    }
                });
            }
            else {//执行本地
                require("tl_Drone").POIData = t_LayerMenuData.DroneHangarData.data;
                callback(t_LayerMenuData.DroneHangarData.data);
            }
        },
        //获取无人机列表
        getDroneList: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递
                    url: con.InterfaceUrl + "/v1/drone/list",  // yii 控制器/方法   
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("tl_Drone").DroneData = data.data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                        console.log('景区管理---获取无人机列表失败')
                        require("tl_Drone").DroneData = t_LayerMenuData.DroneData.data;
                    }
                });
            }
            else {//执行本地
                require("tl_Drone").DroneData = t_LayerMenuData.DroneData.data;
                callback();
            }
        },
        //获取无人机视频
        getDroneVideo:function(post_data, callback)
        {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递
                    url: con.InterfaceUrl + "v1/videoPlay/playing",//"v1/uav/list",//http://47.102.116.141:8082/ 上新地址  //"v1/videoPlay/playing",  // yii 控制器/方法   
                    //url: con.InterfaceUrl + "/v1/drone/list",

                    cache: false,
                    data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        callback(data.data)
                        //var url = "http://rtmp-play.video.vldc.org.cn/citybrain/CH1.flv?auth_key=1553843201-ea7c473093a2407293f303920ee4adc2-0-12efb95aa0c9f22ff88a6bed38cd52d2&onlyvideo=true";
                        //callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                        console.log('景区管理---获取无人机视频数据失败')
                    }
                });
            }
            else {//执行本地
                //require("tl_Drone").DroneVideoUrl = con.WebServiceUrl + "/Content/video/CH2.flv";
                var url = con.WebServiceUrl + "/Content/video/CH2.flv"
                callback(url);
            }
        },
        //获取无人机点位数据
        getDronePosList:function(post_data, callback){        
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递
                     url: con.InterfaceUrl + "v1/drone/location/list",  //POST /v1/drone/virtualPath
                    //url: con.InterfaceUrl + "v1/drone/virtualPath",
                    cache: false,
                    data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        callback(data.data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                        console.log('景区管理---获取无人机坐标数据失败')
                    }
                });
            }
            else {//执行本地
                var data = t_LayerMenuData.DronePosList.data;

                callback(data);
            }
        },
        //景区管理 当中汇总数据获取失败
        getCenterTotalsData: function (post_data, callback)
        {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_DataStation + "v1/park/getData",
                    cache: false,
                    data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        /*
                        返回结果数据格式
                                {
                                "result": 1,
                                "message": "成功",
                                "data": {
                                    "insidePersons": 23412, 
                                    "insideCars": 1029,
                                    "insideFutureCars": 1233,
                                    "outsidePersons": 769,
                                    "outsideFuturePersons": 5019
                                    }
                                }                                             
                        */
                        callback(data);
                    },
                    error: function () {
                        console.log('景区管理---当中汇总数据获取失败')
                    }
                });
            }
            else {//执行本地  
                //{
                //    "estimateOuterParkPeopleNo":109,//景区周边未来30分钟预测人数
                //    "currentPopulation":643, //景区总人数
                //    "currentCarNum":28, //景区内车辆
                //    "estimate30mParkVehicleNo":28,//景区内未来30分钟预测车辆
                //    "outerPeople":109//景区周边人数
                //}
                var data = t_LayerMenuData.TourTotalsNo

                callback(data);
            }
        },
        //获取人流热力图
        getHeatMapData: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递
                    url: con.InterfaceUrl_HeatMap + "screen/bdGdBasevistor/visitorInfo",  // yii 控制器/方法   
                    cache: false,
                    data: null,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                        console.log('景区管理---获取人流热力图失败')
                    }
                });
            }
            else {//执行本地
                callback();
            }
        },
        //获取人流预测数据
        getFlowRatePredictionData: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",
                    url: con.InterfaceUrl + "v1/park/person/estimatedPeopleInPark",
                    cache: false,
                    data: null,
                    dataType: 'json',
                    success: function (data) {
                        callback(data);
                    },
                    error: function (error) {
                        console.log('景区管理---获取人流预测数据失败' + error);
                    }
                });
            } else {
                callback();
            }
        },
    }
});