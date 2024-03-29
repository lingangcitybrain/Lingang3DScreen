﻿
define(["config", "common", "e_EchartData", "e_LayerMenuData"], function (con, common, e_EchartData, e_LayerMenuData) {
    return {
        /*************************产业-园区Echart********************************/
        //产业竞争力
        cyjzl: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_DataStation + 'v1/industrial/matchIndex',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("e_Echart").cyjzlData = data;
                        callback(data);
                    },
                    error: function () {
                        console.log("产业竞争力数据传输错误,调用本地数据");
                        require("e_Echart").cyjzlData = e_EchartData.cyjzlData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("e_Echart").cyjzlData = e_EchartData.cyjzlData;
                callback();
            }
        },

        //企业变化趋势
        qybhqs: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_DataStation + 'v1/industrial/companyTrendByYear',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("e_Echart").qybhqsData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        require("e_Echart").qybhqsData = e_EchartData.qybhqsData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("e_Echart").qybhqsData = e_EchartData.qybhqsData;
                callback();
            }
        },

        //税收变化趋势
        ssbhqs: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_DataStation + 'v1/industrial/taxTrendByYear',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("e_Echart").ssbhqsData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        require("e_Echart").ssbhqsData = e_EchartData.ssbhqsData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("e_Echart").ssbhqsData = e_EchartData.ssbhqsData;
                callback();
            }
        },

        //固投变化趋势
        gtbhqs: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl + 'v1/industrial/investmentInfo',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("e_Echart").gtbhqsData = data.data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        require("e_Echart").gtbhqsData = e_EchartData.gtbhqsData.data;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("e_Echart").gtbhqsData = e_EchartData.gtbhqsData.data;
                callback();
            }
        },

        //就业机会变化趋势
        jyjhbhqs: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_estate + 'v1/industrial/jobChance',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("e_Echart").jyjhbhqsData = data.data;
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

        //薪资水平变化趋势
        xzspbhqs: function (postdata, callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_estate + 'v1/industrial/salaryChange',
                    cache: false,
                    data: { type: postdata },
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("e_Echart").xzspbhqsData = data.data;
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

        //高层次人才变化趋势
        gccrcbhqs: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_estate + 'v1/industrial/eliteDistrbution',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("e_Echart").gccrcbhqsData = data.data;
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
        },
        //象限图谱数据
        getAtlasData: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    //url: con.InterfaceUrl + 'v1/industrial/dclineCompanyInfo',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        //require("e_Echart").gccrcbhqsData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        //require("e_Echart").gccrcbhqsData = e_EchartData.gccrcbhqsData.data;

                        callback(e_LayerMenuData.AtlasPOI.Data);
                    }
                });
            }
            else {//执行本地

                callback(e_LayerMenuData.AtlasPOI.Data);
            }
        },
        //获取战略新兴产业
        getzlxxcyData: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_DataStation + 'v1/industrial/zhlgzlxxcyjg',
                    cache: false,
                    //data: { year: year },
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("e_Echart").zlxxcyData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        require("e_Echart").zlxxcyData = e_EchartData.zlxxcyData;
                        callback();
                    }
                })
            }
            else {//执行本地
                require("e_Echart").zlxxcyData = e_EchartData.zlxxcyData;
                callback();
            }
        },
        //战略新兴产业结构
        getzlxxcyjgData: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_estate + 'v1/industrial/zhlgzlxxcyjg',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("e_Echart").zlxxcyjgData = data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                        require("e_Echart").zlxxcyjgData = e_EchartData.zlxxcyjgData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("e_Echart").zlxxcyjgData = e_EchartData.zlxxcyjgData;
                callback();
            }
        },
        //风控雷达
        getfkldData: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_DataStation + 'v1/risk/fkldjyfx',//原接口InterfaceUrl_estate
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("e_Echart").fkldData = data;
                        callback(data);
                    },
                    error: function () {
                        require("e_Echart").fkldData = e_EchartData.fkldData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("e_Echart").fkldData = e_EchartData.fkldData;
                callback();
            }
        },
        //中间数字
        centernumberajax: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "GET",      //data 传送数据类型。post 传递 
                    //url: con.InterfaceUrl_estate + 'v1/industrial/companyStatistics',
                    //url: con.InterfaceUrl_DataStation + 'v1/industrial/zhlgzqys',
                    url: con.InterfaceUrl_TourEvent + 'api/v1/industryBriefing',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("e_Echart").centernumberData = data;
                        callback(data);
                    },
                    error: function () {
                        require("e_Echart").centernumberData = e_EchartData.centernumberData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("e_Echart").centernumberData = e_EchartData.centernumberData;
                callback();
            }
        },
        
        //产业简报企业列表
        getCyjbList: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "GET",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_TourEvent + 'api/v1/industryMonthly',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("e_Echart").cyjbListData = data;
                        callback(data);
                    },
                    error: function () {
                        require("e_Echart").cyjbListData = e_EchartData.cyjbListData;
                        callback();
                    }
                });
            }
            else {//执行本地
                require("e_Echart").cyjbListData = e_EchartData.cyjbListData;
                callback();
            }
        },




    }
});