define(["config","g_EchartData"], function (con,g_EchartData) {
    return {
       
        //入驻企业统计
        getCompanyStatisticsData: function (callback) {
            if (con.InterfaceUrl_garden)//执行接口
            {
                $.ajax({
                    type: "POST",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_garden + 'ywtb/dsparkdata/DsparkDetial',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        //require("g_Echart").tcfwData = data.data;
                        callback(data);
                    },
                    error: function () {
                        //alert("数据传输错误");
                    }
                });
            }
            //else {//执行本地
            //    require("g_Echart").tcfwData = g_EchartData.tcfwData.data;
            //    callback();
            //}
        },
        getBuildingListData: function (callback) {
            $.ajax({
                type: "POST",      //data 传送数据类型。post 传递 
                url: con.InterfaceUrl_garden + 'ywtb/dsbuildinginfo/buildingList',
                cache: false,
                dataType: 'json',  // 返回数据的数据类型json
                success: function (data) {
                    //require("g_Echart").tcfwData = data.data;
                    callback(data);
                },
                error: function () {
                    //alert("数据传输错误");
                }
            });
        },
        getCompanyData: function (callback) {
            $.ajax({
                type: "POST",      //data 传送数据类型。post 传递 
                url: con.InterfaceUrl_garden + 'ywtb/dsbuildingcompanyinfo/companyDetails',
                cache: false,
                dataType: 'json',  // 返回数据的数据类型json
                success: function (data) {
                    //require("g_Echart").tcfwData = data.data;
                    callback(data);
                },
                error: function () {
                    //alert("数据传输错误");
                }
            });
        },
        //获取停车场信息
        getParkingInfo: function (time) {
            $.ajax({
                type: "POST",      //data 传送数据类型。post 传递 
                url: con.InterfaceUrl_parking + 'parklotInfo',
                cache: false,
                data: { datetime:time},
                dataType: 'json',  // 返回数据的数据类型json
                success: function (data) {
                    //require("g_Echart").tcfwData = data.data;
                    callback(data);
                },
                error: function () {
                    //alert("数据传输错误");
                }
            });
        },
    }
    })