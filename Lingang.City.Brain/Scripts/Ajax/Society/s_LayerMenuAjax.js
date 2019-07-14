define(["config", "s_layerMenuData"], function (con, s_layerMenuData) {
    return {
        //获取传感器数据
        getSensorList: function (post_data, callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    //url: con.InterfaceUrl + "v1/iot/comunity/sensorListByType",
                    //20190630更改
                    url: con.InterfaceUrl_DataStation + "v1/iot/comunity/sensorListByType",//"v2/sensor",
                    cache: false,
                    data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        //require("sl_IOT").POIData = data.data.list;
                        require("sl_IOT").POIData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            }
            else {//执行本地
                require("sl_IOT").POIData = s_layerMenuData.IOTData.list;
                callback();
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
                        require("sl_Drone").DroneData = data.data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                        console.log('景区管理---获取无人机列表失败')
                        require("sl_Drone").DroneData = s_LayerMenuData.DroneData.data;
                    }
                });
            }
            else {//执行本地
                require("sl_Drone").DroneData = s_LayerMenuData.DroneData.data;
                callback();
            }
        },
        //获取摄像头数据
        getCameraList: function (post_data, callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递
                    url: con.InterfaceUrl + "v1/camera/comunity/cameraListByType",  // yii 控制器/方法   
                    //contentType: 'application/json;charset=UTF-8',
                    cache: false,
                    data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("sl_Camera").POIData = data.data.list;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            }
            else {//执行本地
                require("sl_Camera").POIData = s_layerMenuData.CameraData.cameraBaseInfos;
                callback();
            }
        },
        //根据sbbm获取视频地址
        getCameraUrlById: function (post_data, callback) {
            //var post_data = { "sbbm": "31011900081326012006" }
            $.ajax({
                type: "POST",      //data 传送数据类型。post 传递 
                url: con.InterfaceUrl + "v1/videoPlay/playing",//"v1/uav/list",http://47.102.116.141:8082/ 上新地址//"v1/videoPlay/playing",
                cache: false,
                data: post_data,  //传送的数据
                dataType: 'json',  // 返回数据的数据类型json
                success: function (data) {
                    callback(data)
                },
                error: function () {
                    //alert("数据传输错误");
                }
            });
        },
        //获取所有事件数据
        getEventList: function (post_data, callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递
                    url: con.InterfaceUrl_DataStation + "v1/affairs/list",  // yii 控制器/方法   
                    cache: false,
                    data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("sl_Event").POIData = data;//.data.list;
                        if ($.isFunction(callback))
                            callback()

                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            }
            else {//执行本地
                require("sl_Event").POIData = s_layerMenuData.EventData.list;
                if ($.isFunction(callback))
                    callback()
            }
        },
        //获取巡查员列表
        getInspectorList: function (callback) {
            if(con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递
                    //url: con.InterfaceUrl + "v1/buildingsites/inspectorInfo",  //数据多的无“康新” 
                    url: con.InterfaceUrl + "v1/communities/communityInspectors",  // yii 控制器/方法   
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("sl_Event").InspectorData = data;
                        if ($.isFunction(callback))
                            callback()
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            }
            else {//执行本地
                require("sl_Event").InspectorData = s_layerMenuData.InspectorData.data;
                 if ($.isFunction(callback))
                            callback()
            }
        },
        //获取无人机库列表
        getDroneHangarList: function (post_data, callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递
                    url: con.InterfaceUrl + "v1/drone/hangers/list",  // yii 控制器/方法   
                    cache: false,
                    data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("sl_Drone").POIData = data.data;
                        if ($.isFunction(callback))
                            callback(data.data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            }
            else {//执行本地
                require("sl_Drone").POIData = s_layerMenuData.DroneHangarData.data;
                 if ($.isFunction(callback))
                     callback(s_layerMenuData.DroneHangarData.data)
            }
        },
        //获取无人机点位数据
        getDronePosList: function (post_data, callback) {
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
        //获取无人机视频
        getDroneVideo: function (post_data, callback) {
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
        //获取社区工作站列表
        getWorkStationList: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递
                    url: con.InterfaceUrl +"v1/station/list",  // yii 控制器/方法   
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("sl_WorkStation").POIData = data.data;
                         if ($.isFunction(callback))
                             callback(data.data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            }
            else {//执行本地
                require("sl_WorkStation").POIData = s_layerMenuData.WorkStationData;
                if ($.isFunction(callback))
                    callback(s_layerMenuData.WorkStationData)
            }
        },
    }
})