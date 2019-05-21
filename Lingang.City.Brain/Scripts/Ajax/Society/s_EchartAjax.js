define(["config", "common", "s_EchartData"], function (con, common, s_EchartData) {
    return {
        /*************************社区综治-Echart********************************/

        //社区综治无人机
        getSocietyWrj: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/drone/droneInfo',
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").wrjData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            }
            else {//执行本地
                require("s_Echart").wrjData = s_EchartData.wrjData;
                callback();
            }
        },
        //社区综治传感器
        getSocietyCgq: function (callback) {
            if (con.IsInterface)
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/iot/comunity/sensorNum',
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").cgqData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").cgqData = s_EchartData.cgqData;
                callback();
            }
        },


        //进出车辆人员数据
        getCarPersonInOutData: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/comunity/people/personCarStatistics',
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").carPersonInOutData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").carPersonInOutData = s_EchartData.carPersonInOutData;
                callback();
            }
        },


        //摄像头--摄像头
        getSxtCameraData: function (post_data, callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/camera/comunity/camerasList',
                    cache: false,
                    data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").sxtCameraData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                        //require("s_Echart").sxtCameraData = s_EchartData.sxtCameraData;
                        //callback();
                    }
                });
            } else {//执行本地
                require("s_Echart").sxtCameraData = s_EchartData.sxtCameraData;
                callback();
            }
        },

        //摄像头--车辆
        getSxtCarData: function (post_data, callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/camera/comunity/vehicleStatistics',
                    cache: false,
                    data: post_data,   //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").sxtCarData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").sxtCarData = s_EchartData.sxtCarData;
                callback();
            }
        },

        //摄像头--人员
        getSxtPersonData: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/camera/comunity/vehicleStatistics',
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").sxtPersonData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").sxtPersonData = s_EchartData.sxtPersonData;
                callback();
            }
        },

        //主责部门
        getSocietyZzbm: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/affair/comunity/taskOverview',
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").zzbmData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").zzbmData = s_EchartData.zzbmData;
                callback();
            }
        },

        //事件信息
        getSocietySj: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",    
                    url: con.InterfaceUrl + 'v1/affair/comunity/dealOvertime',
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").societySjData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").societySjData = s_EchartData.societySjData;
                callback();
            }
        },

        //事件处理成功
        getSocietySjcg: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",
                    url: con.InterfaceUrl + 'v1/affair/comunity/taskSuccessInfo',
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").societySjcgData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").societySjcgData = s_EchartData.societySjcgData;
                callback();
            }
        },

        //中间大数字
        getSocietyBigNum: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    // 同社区事件数据  
                    // url: con.InterfaceUrl + 'v1/comunity/people/communityPopulationData',
                    url: con.InterfaceUrl + 'v1/communities/communitySummary',                  
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").societyBigNumData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").societyBigNumData = s_EchartData.societyBigNumData;
                callback();
            }
        },

        //******************************************************************************************/
        //街面无人机数据

        //巡查员信息
        getJmXcyData: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + '/v1/buildingsites/inspectorInfo',
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").jmXcyData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").jmXcyData = s_EchartData.jmXcyData;
                callback();
            }
        },

        //巡查员信息
        getCostlineTideData: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/costlines/tide',
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").costlineTideData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").costlineTideData = s_EchartData.costlineTideData;
                callback();
            }
        },






    }
});