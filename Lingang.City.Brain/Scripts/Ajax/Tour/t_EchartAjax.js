define(["config", "t_EchartData"], function (con, t_EchartData) {
    return {
        /*************************大客流-Echart********************************/
        //游客画像
        ykhx: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: 'POST',
                    //url: con.InterfaceUrl + 'v1/park/userProfile',
                    url: con.InterfaceUrl_DataStation + '/v1/park/getUserProfile',
                    cache: false,
                    dataType: 'json',
                    success: function (data) {
                        require("t_Echart").ykhxData = data;
                        callback(data);
                    },
                    error: function () {
                        require("t_Echart").ykhxData = t_EchartData.ykhxData;
                        callback();
                    }
                })
            }
            else {//执行本地
                require("t_Echart").ykhxData = t_EchartData.ykhxData;
                callback();
            }
        },
        //游客分析（用户年龄分布）
        getTouristAnalysis: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_DataStation + 'v1/park/userAgeDistribute',// url: con.InterfaceUrl + 'v1/park/userAgeDistribute',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("t_Echart").TouristAnalysisData = data.data;
                        callback(data);
                    },
                    error: function () {
                        require("t_Echart").TouristAnalysisData = t_EchartData.TouristAnalysisData.data;
                        callback();

                    }
                });
            }
            else {//执行本地
                require("t_Echart").TouristAnalysisData = t_EchartData.TouristAnalysisData.data;
                callback();
            }
        },
        //游客趋势分析（当前时间游客趋势分析）
        getfutureVisitorTraffic: function (post_data, callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    //url: con.InterfaceUrl + 'v1/park/person/futureVisitorTraffic',
                    url: con.InterfaceUrl_DataStation + '/v1/tourist/getFutureVisitorTraffic',
                    cache: false,
                    data: post_data,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("t_Echart").FutureVisitorTrafficData = data;
                        callback(data)
                    },
                    error: function () {
                        require("t_Echart").FutureVisitorTrafficData = t_EchartData.FutureVisitorTrafficData;
                        callback();

                    }
                });
            }
            else {//执行本地
                require("t_Echart").FutureVisitorTrafficData = t_EchartData.FutureVisitorTrafficData;
                callback();
            }
        },
        //big无人机（统计）
        getBigwrj: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: 'POST',
                    //url: con.InterfaceUrl + 'v1/drone/droneInfo',
                    url: con.InterfaceUrl_DataStation + 'v1/drone/droneInfo',
                    cache: false,

                    dataType: 'json',
                    success: function (data) {
                        if (data.errCode != 503) {
                            require("t_Echart").wrjData = data;
                            callback(data)
                        } else {
                            if (require("t_Echart").wrjData == null || require("t_Echart").wrjData == "") {
                                require("t_Echart").wrjData = t_EchartData.wrjData;
                            }
                            callback();
                        }

                    },
                    error: function () {
                        if (require("t_Echart").wrjData == null || require("t_Echart").wrjData == "") {
                            require("t_Echart").wrjData = t_EchartData.wrjData;
                        }
                        callback();
                    }
                });
            }
            else {//执行本地
                require("t_Echart").wrjData = t_EchartData.wrjData;
                callback();
            }
        },

        //舆情分析（统计图表）
        bigyqfx: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    //url: con.InterfaceUrl + 'v1/park/publicSentimentSourceByType',
                    url: con.InterfaceUrl_DataStation + '/v1/publicSentimentSourceStatistic',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("t_Echart").yqfxData = data;
                        callback(data)
                    },
                    error: function () {
                        require("t_Echart").yqfxData = t_EchartData.yqfxData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("t_Echart").yqfxData = t_EchartData.yqfxData;
                callback();
            }
        },
        //交通信息
        getJtxxData: function (callback) {//地铁
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                        type: 'POST',
                        url: con.InterfaceUrl + 'v1/park/vehicle/allTrafficInfo',
                        cache: false,
                        // data:post_data,
                        dataType: 'json',
                        success: function (data) {
                            //if (data.errCode != 503) {
                                require("t_Echart").jtxxData = data;
                                callback(data)
                            //} else {
                            //    require("t_Echart").jtxxData = t_EchartData.jtxxData;
                            //    callback();

                            //}
                        },
                        error: function () {
                                require("t_Echart").jtxxData = t_EchartData.jtxxData;
                                callback();
                        }
                    })
            }
            else {//执行本地
                require("t_Echart").jtxxData = t_EchartData.jtxxData;
                callback();
            }
        },


        //人员车辆统计
        bigrycltj: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: 'POST',
                    url: con.InterfaceUrl + 'v1/park/person/peopleStatistic',
                    cache: false,


                    dataType: 'json',
                    success: function (data) {
                        require("t_Echart").rycltjData = data;
                        callback(data)
                    },
                    error: function () {
                        require("t_Echart").rycltjData = t_EchartData.rycltjData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("t_Echart").rycltjData = t_EchartData.rycltjData;
                callback();
            }

        },
        bigrycltjdt: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: 'POST',
                    url: con.InterfaceUrl + 'v1/park/vehicle/metroStatistic',
                    //url: con.InterfaceUrl_DataStation + 'v1/park/vehicle/metroStatistic',
                    cache: false,
                    dataType: 'json',
                    success: function (data) {
                        require("t_Echart").rycltjdtData = data;
                        callback(data)
                    },
                    error: function () {
                        require("t_Echart").rycltjdtData = t_EchartData.rycltjdtData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("t_Echart").rycltjdtData = t_EchartData.rycltjdtData;
                callback();
            }

        },
        bigrycltjjccl: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: 'POST',
                    url: con.InterfaceUrl + 'v1/park/vehicle/parkVehicleStatistic',
                    //url: con.InterfaceUrl_DataStation + 'v1/park/vehicle/parkVehicleStatistic',
                    cache: false,
                    dataType: 'json',
                    success: function (data) {
                        require("t_Echart").rycltjjcclData = data;
                        callback(data)
                    },
                    error: function () {
                        require("t_Echart").rycltjjcclData = t_EchartData.rycltjjcclData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("t_Echart").rycltjjcclData = t_EchartData.rycltjjcclData;
                callback();
            }

        },
        //停车场使用情况
        bigtccsyqk: function (post_data, callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    //url: con.InterfaceUrl + 'v1/park/vehicle/parkingLotsStatistic',
                    url: con.InterfaceUrl_DataStation + '/v1/parkinglots/statistic',
                    cache: false,
                    data: post_data,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("t_Echart").tccsyqkData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                        require("t_Echart").tccsyqkData = t_EchartData.tccsyqkData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("t_Echart").tccsyqkData = t_EchartData.tccsyqkData;
                callback();
            }

        },
        //景区事件列表类型
        yqsjlblx: function (post_data, callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    //url: con.InterfaceUrl + 'v1/park/affair/jrsjlx',
                    url: con.InterfaceUrl_DataStation + 'v1/park/affair/jrsjlx',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("t_Echart").yqsjlblxData = data;
                        callback(data);
                    },
                    error: function () {
                        require("t_Echart").yqsjlblxData = t_EchartData.yqsjlblxData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("t_Echart").yqsjlblxData = t_EchartData.yqsjlblxData;
                callback();
            }
        },
        //景区事件列表区域
        yqsjlbqy: function (post_data, callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    //url: con.InterfaceUrl + 'v1/park/affair/jrsjqy',
                    url: con.InterfaceUrl_DataStation + 'v1/park/affair/jrsjqy',
                    cache: false,
                    data: post_data,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("t_Echart").yqsjlbqyData = data;
                        callback(data);
                    },
                    error: function () {
                        require("t_Echart").yqsjlbqyData = t_EchartData.yqsjlbqyData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("t_Echart").yqsjlbqyData = t_EchartData.yqsjlbqyData;
                callback();
            }
        },
        //景区事件列表统计----原来的
        //yqsjlbtj: function (post_data, callback) {
        //	if (con.IsInterface)//执行接口
        //	{
        //		$.ajax({
        //			type: "POST",      //data 传送数据类型。post 传递 
        //			url: con.InterfaceUrl + 'v1/park/affair/getEventList',
        //			cache: false,
        //			data: post_data,
        //			dataType: 'json',  // 返回数据的数据类型json
        //			success: function (data) {
        //				require("t_Echart").yqsjlbtjData = data;
        //				callback(data);
        //			},
        //			error: function () {
        //				require("t_Echart").yqsjlbtjData = t_EchartData.yqsjlbtjData;
        //				callback();
        //			}
        //		});
        //	}
        //	else {//执行本地
        //		require("t_Echart").yqsjlbtjData = t_EchartData.yqsjlbtjData;
        //		callback();
        //	}
        //},
        //景区事件列表统计
        yqsjlbCenterEvent: function (post_data, callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    //url: con.InterfaceUrl_TourEvent + 'v1/park/affair',
                    url: con.InterfaceUrl_DataStation + '/v1/park/affair/list',
                    cache: false,
                    data: post_data,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("t_Echart").yqsjlbCenterEventData = data;
                        callback(data);
                    },
                    error: function () {
                        require("t_Echart").yqsjlbCenterEventData = t_EchartData.yqsjlbCenterEventData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("t_Echart").yqsjlbCenterEventData = t_EchartData.yqsjlbCenterEventData;
                callback();
            }
        },
        

        //近五日事件统计
        getJwrsjtj: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: 'POST',
                    //url: con.InterfaceUrl + 'v1/park/affair/eventNumberByType',   //请求的服务平台地址
                    url: con.InterfaceUrl_DataStation + 'v1/park/affair/eventNumberByType',   //请求的服务平台地址
                    cache: false,
                    //async: false, //将ajax异步加载关闭
                    //data: post_data,
                    dataType: 'json',
                    success: function (data) {                               //请求成功
                        require("t_Echart").jwrsjtjData = data;

                        callback(data)
                    },
                    error: function () {
                        require("t_Echart").jwrsjtjData = t_EchartData.jwrsjtjData;
                        callback();
                    }
                })

            }
            else {//执行本地
                require("t_Echart").jwrsjtjData = t_EchartData.jwrsjtjData;
                callback();
            }
        },
    }

});