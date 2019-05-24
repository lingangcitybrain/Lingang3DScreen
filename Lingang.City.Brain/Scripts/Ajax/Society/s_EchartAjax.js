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
                    url: con.InterfaceUrl + 'v1/camera/comunity/illeagalPeopleCount',
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

        //社区人口
        getSocietyPersonData: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/camera/comunity/peopleStatistic',
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").societyPersonData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").societyPersonData = s_EchartData.societyPersonData;
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


        //社综--传感器事件大数字
        getCgqBigNum: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/communities/communityCounts',              
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").cgqBigNumData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").cgqBigNumData = s_EchartData.cgqBigNumData;
                callback();
            }
        },

        //******************************************************************************************/
        //街面无人机数据
        getJmDroneData: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/drone/communityDroneOverviewo',
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").jmDroneData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").jmDroneData = s_EchartData.jmDroneData;
                callback();
            }
        },

        //街面巡查员信息
        getJmXcyData: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/buildingsites/inspectorInfo',
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

        //海岸线无人机最近一次飞行统计
        getDroneRecentFlightData: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/drone/communityDroneRecentFlight',
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").droneRecentFlightData = data;
                        callback(data)
                    },
                    error: function () {
                        console.log("RecentFlightData--error")
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").droneRecentFlightData = s_EchartData.droneRecentFlightData;
                callback();
            }
        },

        //海岸线无人机最近一个月飞行统计
        getDroneRecentMonthFlightData: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/drone/communityDroneRecentFlightMonthly',
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").droneRecentMonthFlightData = data;
                        callback(data)
                    },
                    error: function () {
                        console.log("RecentMonthFlightData--error")
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").droneRecentMonthFlightData = s_EchartData.droneRecentMonthFlightData;
                callback();
            }
        },

        //海岸线潮汐时间表
        getCostlineTideData: function (post_data, callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/costlines/tide',
                    cache: false,
                    data: post_data,  //传送的数据
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

        //工地施工单位
        getWorkSiteBuilderData: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/buildingsites/siteeInfo',
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").workSiteBuilderData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").workSiteBuilderData = s_EchartData.workSiteBuilderData;
                callback();
            }
        },

        //工地无人机
        getWorkSiteWrjData: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/drone/constructionSite',
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").workSiteWrjData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").workSiteWrjData = s_EchartData.workSiteWrjData;
                callback();
            }
        },

        //工地天气预报
        getWorkSiteWeatherData: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/weather/city5d3h',
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").workSiteWeatherData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").workSiteWeatherData = s_EchartData.workSiteWeatherData;
                callback();
            }
        },

        //网格处置案件数量
        getDealTaskNumData: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/affairs/getDealTaskNum',
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").dealTaskNumData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").dealTaskNumData = s_EchartData.dealTaskNumData;
                callback();
            }
        },

        //网格处置案件类别
        getDealTaskTypeData: function (callback) {
            if (con.IsInterface) {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/affairs/getDealTaskType',
                    cache: false,
                    //data: post_data,  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("s_Echart").dealTaskTypeData = data;
                        callback(data)
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            } else {//执行本地
                require("s_Echart").dealTaskTypeData = s_EchartData.dealTaskTypeData;
                callback();
            }
        },




    }
});