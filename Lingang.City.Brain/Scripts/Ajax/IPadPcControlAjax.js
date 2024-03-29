﻿define(["config", "common"], function (con, com) {
    return {
        //地图位置同步
        sendMapControlInfo: function (post_data, callback) {
            $.ajax({
                type: "POST",      //data 传送数据类型。post 传递 
                url: con.WebServiceUrlForControl + "PCControl/mapcontrol",
                cache: false,
                data: post_data,  //传送的数据
                dataType: 'json',  // 返回数据的数据类型json
                success: function (res) {
                    if ($.isFunction(callback))
                        callback(res)
                },
                error: function () {
                }
            });
        },

        //菜单控制
        sendMenuControlInfo: function (post_data, callback) {
            $.ajax({
                type: "POST",      //data 传送数据类型。post 传递 
                url: con.WebServiceUrlForControl + "PCControl/menucontrol",
                cache: false,
                data: post_data,  //传送的数据
                dataType: 'json',  // 返回数据的数据类型json
                success: function (res) {
                    if ($.isFunction(callback))
                        callback(res)
                },
                error: function () {
                }
            });
        },

        //图层控制
        sendLayerControlInfo: function (post_data, callback) {
            $.ajax({
                type: "POST",      //data 传送数据类型。post 传递 
                url: con.WebServiceUrlForControl + "PCControl/layercontrol",
                cache: false,
                data: post_data,  //传送的数据
                dataType: 'json',  // 返回数据的数据类型json
                success: function (res) {
                    if ($.isFunction(callback))
                        callback(res)
                },
                error: function () {
                }
            });
        },

        //图表控制
        sendEchartControlInfo: function (post_data, callback) {
            $.ajax({
                type: "POST",      //data 传送数据类型。post 传递 
                url: con.WebServiceUrlForControl + "PCControl/echartcontrol",
                cache: false,
                data: post_data,  //传送的数据
                dataType: 'json',  // 返回数据的数据类型json
                success: function (res) {
                    if ($.isFunction(callback))
                        callback(res)
                },
                error: function () {
                }
            });
        },

        //POI控制
        sendPOIControlInfo: function (post_data, callback) {
            $.ajax({
                type: "POST",      //data 传送数据类型。post 传递 
                url: con.WebServiceUrlForControl + "PCControl/poicontrol",
                cache: false,
                data: post_data,  //传送的数据
                dataType: 'json',  // 返回数据的数据类型json
                success: function (res) {
                    if ($.isFunction(callback))
                        callback(res)
                },
                error: function () {
                }
            });
        },
        //POI信息窗口控制消息
        sendPOIWinControlInfo: function (post_data, callback) {
            $.ajax({
                type: "POST",      //data 传送数据类型。post 传递 
                url: con.WebServiceUrlForControl + "PCControl/poiinfocontrol",
                cache: false,
                data: post_data,  //传送的数据
                dataType: 'json',  // 返回数据的数据类型json
                success: function (res) {
                    if ($.isFunction(callback))
                        callback(res)
                },
                error: function () {
                }
            });
        },

        //窗口按钮控制
        sendButtoncontrolInfo: function (post_data, callback) {
            $.ajax({
                type: "POST",      //data 传送数据类型。post 传递 
                url: con.WebServiceUrlForControl + "PCControl/buttoncontrol",
                cache: false,
                data: post_data,  //传送的数据
                dataType: 'json',  // 返回数据的数据类型json
                success: function (res) {
                    if ($.isFunction(callback))
                        callback(res)
                },
                error: function () {
                }
            });
        },
        //窗口按钮控制
        sendPageButtoncontrolInfo: function (post_data, callback) {
            $.ajax({
                type: "POST",      //data 传送数据类型。post 传递 
                url: con.WebServiceUrlForControl + "PCControl/pagebuttoncontrol",
                cache: false,
                data: post_data,  //传送的数据
                dataType: 'json',  // 返回数据的数据类型json
                success: function (res) {
                    if ($.isFunction(callback))
                        callback(res)
                },
                error: function () {
                }
            });
        },
    }
});