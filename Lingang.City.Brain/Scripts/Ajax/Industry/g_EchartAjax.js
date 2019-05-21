define(["config","g_EchartData"], function (con,g_EchartData) {
    return {
       
        //中间大数字
        bigNum: function (callback) {
            if (con.IsInterface)//执行接口
            {
                //$.ajax({
                //    type: "POST",      //data 传送数据类型。post 传递 
                //    //url: con.InterfaceUrl + 'v1/park/userAgeDistribute',
                //    cache: false,
                //    dataType: 'json',  // 返回数据的数据类型json
                //    success: function (data) {
                //        require("g_Echart").tcfwData = data.data;
                //        callback(data);
                //    },
                //    error: function () {
                //        //alert("数据传输错误");
                //    }
                //});
            }
            else {//执行本地
                require("g_Echart").tcfwData = g_EchartData.tcfwData.data;
                callback();
            }
        },
        //招商雷达
        getzsldDataFun: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/BusinessRadar/getRadar',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("g_Echart").zsldData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        //require("g_Echart").zsldData = g_EchartData.zsldData;
                        //callback();
                    }
                });
            }
            else {//执行本地
                require("g_Echart").zsldData = g_EchartData.zsldData;
                callback();
            }
        },
        //招商漏斗
        getZsFunnel: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'ywtb/dsparkdata/DsparkDetial',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("g_Echart").zsFunnelData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        //require("g_Echart").zsFunnelData = g_EchartData.zsFunnelData;
                        //callback();
                    }
                });
            }
            else {//执行本地
                require("g_Echart").zsFunnelData = g_EchartData.zsFunnelData;
                callback();
            }
        },
        //停车服务
        tcfw: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    //url: con.InterfaceUrl + 'v1/park/userAgeDistribute',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("g_Echart").tcfwData = data.data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            }
            else {//执行本地
                require("g_Echart").tcfwData = g_EchartData.tcfwData.data;
                callback();
            }
        },
        //无人驾驶接驳车
        wrjs: function (callback) {
            if (con.IsInterface)//执行接口
            {
                //$.ajax({
                //    type: "POST",      //data 传送数据类型。post 传递 
                //    //url: con.InterfaceUrl + 'v1/park/userAgeDistribute',
                //    cache: false,
                //    dataType: 'json',  // 返回数据的数据类型json
                //    success: function (data) {
                //        require("g_Echart").wrjsData = data.data;
                //        callback(data);
                //    },
                //    error: function () {
                //        //alert("数据传输错误");
                //    }
                //});
            }
            else {//执行本地
                require("g_Echart").wrjsData = g_EchartData.wrjsData.data;
                callback();
            }
        },
        //智慧物业维修
        getZhwyRepair: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/repair/lastest',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("g_Echart").zhwyRepairData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        //require("g_Echart").zhwyRepairData = g_EchartData.zhwyRepairData;
                        //callback();
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
                    url: con.InterfaceUrl + 'v1/inspection/lastest',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("g_Echart").zhwyInspectData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        //require("g_Echart").zhwyInspectData = g_EchartData.zhwyInspectData;
                        //callback();
                    }
                });
            }
            else {//执行本地
                require("g_Echart").zhwyInspectData = g_EchartData.zhwyInspectData;
                callback();
            }
        },

        //智慧能耗
        getZhnh: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/power/lastest',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("g_Echart").zhnhData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        //require("g_Echart").zhnhData = g_EchartData.zhnhData;
                        //callback();
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
                    url: con.InterfaceUrl + 'ywtb/dsparkevent/eventList',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("g_Echart").sjtjData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        //require("g_Echart").sjtjData = g_EchartData.sjtjData;
                        //callback();
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