define(["config", "g_EchartData"], function (con, g_EchartData) {
    return {
       
        //中间大数字
        getBigNum: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_garden + 'ywtb/dsparkdata/DsparkDetial',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("g_Echart").bigNumData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            }
            else {//执行本地
                require("g_Echart").bigNumData = g_EchartData.bigNumData;
                callback();
            }
        },
        //招商简报  //招商雷达
        getzsldDataFun: function (post_data, callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_DataStation + 'v1/BusinessBriefing/projectCockpitVM',//'v1/BusinessRadar/getRadar',
                    cache: false,
                    data: post_data,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("g_Echart").zsldData = data;
                        callback(data);
                    },
                    error: function () {
                        console.log("招商雷达接口数据传输错误，调用本地数据")
                        require("g_Echart").zsldData = g_EchartData.zsldData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("g_Echart").zsldData = g_EchartData.zsldData;
                callback();
            }
        },

        //企业top10列表
        getTopTenData: function (post_data, callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/industrial/topTen',
                    cache: false,
                    data: post_data,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("g_Echart").topTenData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            }
            else {//执行本地
                require("g_Echart").topTenData = g_EchartData.topTenData;
                callback();
            }
        },

        //招商漏斗
        getZsFunnel: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_DataStation + "v1/BusinessBriefing/totalConvertPercent",//con.InterfaceUrl_garden + 'ywtb/dsparkdata/DsparkDetial',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("g_Echart").zsFunnelData = data;
                        callback(data);
                    },
                    error: function () {
                        require("g_Echart").zsFunnelData = g_EchartData.zsFunnelData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("g_Echart").zsFunnelData = g_EchartData.zsFunnelData;
                callback();
            }
        },
        //停车服务
        getTcfw: function (post_data, callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_parking + 'parklotInfo',
                    cache: false,
                    data: post_data,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("g_Echart").tcfwData = data;
                        callback(data);
                    },
                    error: function () {
                        require("g_Echart").tcfwData = g_EchartData.tcfwData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("g_Echart").tcfwData = g_EchartData.tcfwData;
                callback();
            }
        },

        //无人驾驶接驳车
        getWrjsjb: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "GET",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_HeatMap + 'screen/uav/status',
                   // url: con.InterfaceUrl_parking + 'parklotInfo',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("g_Echart").wrjsjbData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            }
            else {//执行本地
                require("g_Echart").wrjsjbData = g_EchartData.wrjsjbData;
                callback();
            }
        },

        //智慧物业维修
        getZhwyRepair: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_DataStation + 'v1/repair/list',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("g_Echart").zhwyRepairData = data;
                        callback(data);
                    },
                    error: function () {
                        require("g_Echart").zhwyRepairData = g_EchartData.zhwyRepairData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("g_Echart").zhwyRepairData = g_EchartData.zhwyRepairData;
                callback();
            }
        },

        //智慧物业巡检 
        getZhwInspect: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_DataStation + "v1/patrol/list",//'v1/inspection/lastest',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("g_Echart").zhwyInspectData = data;
                        callback(data);
                    },
                    error: function () {
                        console.log("智慧物业巡检数据传输错误，调用本地数据")
                        require("g_Echart").zhwyInspectData = g_EchartData.zhwyInspectData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("g_Echart").zhwyInspectData = g_EchartData.zhwyInspectData;
                callback();
            }
        },

        //智慧能耗
        getZhnh: function (post_data,callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_DataStation + 'v1/power/lastest',
                    cache: false,
                    data: {datatime:post_data},  //传送的数据
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("g_Echart").zhnhData = data;
                        callback(data);
                    },
                    error: function () {
                        require("g_Echart").zhnhData = g_EchartData.zhnhData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("g_Echart").zhnhData = g_EchartData.zhnhData;
                callback();
            }
        },
        //事件统计
        getSjtj: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_Event+'getParkEvents',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("g_Echart").sjtjData = data;
                        callback(data);
                    },
                    error: function () {
                        require("g_Echart").sjtjData = g_EchartData.sjtjData;
                        callback();
                    }
                });
            } 
            else {//执行本地
                require("g_Echart").sjtjData = g_EchartData.sjtjData;
                callback();
            }
        },
    }
    })