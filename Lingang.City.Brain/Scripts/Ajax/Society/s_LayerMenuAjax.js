define(["config", "s_layerMenuData"], function (con, s_layerMenuData) {
    return {
        //获取传感器数据
        getSensorList: function (post_data, callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + "v1/iot/comunity/sensorListByType",
                    cache: false,
                    data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("sl_IOT").POIData = data.list;
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
        //获取摄像头数据
        getCameraList: function (post_data, callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递
                    url: con.InterfaceUrl + "v1/camera/comunity/camerasList",  // yii 控制器/方法   
                    //contentType: 'application/json;charset=UTF-8',
                    cache: false,
                    data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("sl_Camera").POIData = data.cameraBaseInfos;
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
                url: "http://47.101.181.131:8091/videoPlay/playing",
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
        getEventList: function (post_data,callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递
                    url: con.InterfaceUrl + "v1/affairs/list",  // yii 控制器/方法   
                    cache: false,
                    data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("sl_Event").POIData = data.data.list;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            }
            else {//执行本地
                require("sl_Event").POIData = s_layerMenuData.EventData.list;
                callback();
            }
        },

        //获取无人机库列表
        getDroneList: function (post_data,callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递
                    url: con.InterfaceUrl + "v1/drone/droneHangerInfo",  // yii 控制器/方法   
                    cache: false,
                    data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("sl_Drone").POIData = data.data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            }
            else {//执行本地
                require("sl_Drone").POIData = s_layerMenuData.DroneData.data;
                callback();
            }
        },
    }
})