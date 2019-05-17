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
        //招商漏斗
        zsFunnel: function (callback) {
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
        //智慧物业
        zhwy: function (callback) {
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
        //智慧能耗
        zhnh: function (callback) {
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
        //事件统计
        sjtj: function (callback) {
            if (con.IsInterface)//执行接口
            {
                //$.ajax({
                //    type: "POST",      //data 传送数据类型。post 传递 
                //    //url: con.InterfaceUrl + 'v1/park/userAgeDistribute',
                //    cache: false,
                //    dataType: 'json',  // 返回数据的数据类型json
                //    success: function (data) {
                //        require("g_Echart").sjtjData = data.data;
                //        callback(data);
                //    },
                //    error: function () {
                //        //alert("数据传输错误");
                //    }
                //});
            }
            else {//执行本地
                require("g_Echart").sjtjData = g_EchartData.sjtjData.data;
                callback();
            }
        },
    }
    })