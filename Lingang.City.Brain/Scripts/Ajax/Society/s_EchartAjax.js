﻿define(["config", "common", "s_EchartData"], function (con, common, s_EchartData) {
    return {
        /*************************社区综治-Echart********************************/
        getcgq: function (post_data, callback) {

            $.ajax({
                url: con.InterfaceUrl + 'v1/iot/comunity/sensorNum',
                type: "post",
                async: false,
                data: post_data,
                success: function (result) {
                    callback(result);
                },
                error: function (result) {
                    callback(result);
                    //alert('数据传输错误')
                }
            })
        },
        getsqsj: function (callback) {          
            $.ajax({
                type: 'post',
                url: con.InterfaceUrl + 'v1/affair/comunity/list?communityId=S012',
                casync: false,
                contentType: 'application/json;charset=UTF-8',
                dataType: 'json',
                success: function (data) {
                    //console.log(data);
                    callback(data)
                },
                error: function () {
                    //console.log('错误')
                }
            })
        },
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
                    // 同社区事件数据   'v1/communities/communitySummary '
                    url: con.InterfaceUrl + 'v1/comunity/people/communityPopulationData',
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