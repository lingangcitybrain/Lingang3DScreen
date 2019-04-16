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
                    callback(data)
                },
                error: function () {
                }
            });
        },
    }
});