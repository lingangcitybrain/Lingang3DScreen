define(["config", "common", "e_EchartData"], function (con, common, e_EchartData) {
    return {
        /*************************产业-园区Echart********************************/
        qybhqs:function(callback){
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    //url: con.InterfaceUrl + 'v1/industrial/companyTrendByYear',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("e_Echart").qybhqsData = data.data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        require("e_Echart").qybhqsData = e_EchartData.qybhqsData.data;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("e_Echart").qybhqsData = e_EchartData.qybhqsData.data;
                callback();
            }
        },
        ssbhqs:function(callback){
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    //url: con.InterfaceUrl + 'v1/industrial/companyTrendByYear',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("e_Echart").ssbhqsData = data.data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        require("e_Echart").ssbhqsData = e_EchartData.ssbhqsData.data;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("e_Echart").ssbhqsData = e_EchartData.ssbhqsData.data;
                callback();
            }
        },
        gtbhqs: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    //url: con.InterfaceUrl + 'v1/industrial/investmentInfo',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("e_Echart").gtbhqsData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        require("e_Echart").gtbhqsData = e_EchartData.gtbhqsData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("e_Echart").gtbhqsData = e_EchartData.gtbhqsData;
                callback();
            }
        },
        jyjhbhqs: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    //url: con.InterfaceUrl + 'v1/industrial/investmentInfo',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("e_Echart").jyjhbhqsData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        require("e_Echart").jyjhbhqsData = e_EchartData.jyjhbhqsData.data;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("e_Echart").jyjhbhqsData = e_EchartData.jyjhbhqsData.data;
                callback();
            }
        },
        xzspbhqs: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    //url: con.InterfaceUrl + 'v1/industrial/investmentInfo',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("e_Echart").xzspbhqsData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        require("e_Echart").xzspbhqsData = e_EchartData.xzspbhqsData.data;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("e_Echart").xzspbhqsData = e_EchartData.xzspbhqsData.data;
                callback();
            }
        },
        gccrcbhqs: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    //url: con.InterfaceUrl + 'v1/industrial/investmentInfo',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("e_Echart").gccrcbhqsData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        require("e_Echart").gccrcbhqsData = e_EchartData.gccrcbhqsData.data;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("e_Echart").gccrcbhqsData = e_EchartData.gccrcbhqsData.data;
                callback();
            }
        }
    }
});