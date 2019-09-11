define(["config","g_EchartData"], function (con,g_EchartData) {
    return {
       
        //入驻企业统计
        getCompanyStatisticsData: function (callback) {
            if (con.IsInterface)//执行接口
            {
                $.ajax({
                    type: "GET",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_DataStation + 'v2/ywtb/parkData',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        //require("g_Echart").tcfwData = data.data;
                        callback(data.data);
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
        //入驻企业统计
        getCompanyData: function (callback) {
            $.ajax({
                type: "get",//"POST",      //data 传送数据类型。post 传递 
                url: con.InterfaceUrl_DataStation + "v2/ywtb/companyData",//con.InterfaceUrl_garden + 'ywtb/dsbuildingcompanyinfo/companyDetails',
                cache: false,
                dataType: 'json',  // 返回数据的数据类型json
                success: function (data) {
                    //require("g_Echart").tcfwData = data.data;
                    callback(data.data);
                },
                error: function () {
                    //alert("数据传输错误");
                }
            });
        },
        //获取停车场信息
        getParkingInfo: function (time,callback) {
            $.ajax({
                type: "POST",      //data 传送数据类型。post 传递 
                url: con.InterfaceUrl_DataStation + 'parklotInfo',
                cache: false,
                data: { datetime:time},
                dataType: 'json',  // 返回数据的数据类型json
                success: function (data) {
                    require("g_Echart").tcfwData = data;
                    callback(data);
                },
                error: function () {
                    //alert("数据传输错误");
                }
            });
        },

        //获取龙头企业列表
        getTopCompanyList: function (callback) {
            $.ajax({
                type: "POST",      //data 传送数据类型。post 传递 
                url: con.InterfaceUrl_garden + 'ywtb/dstopcompany/topCompnay',
                cache: false,
                dataType: 'json',  // 返回数据的数据类型json
                success: function (data) {
                    //require("g_Echart").tcfwData = data.data;
                    callback(data);
                },
                error: function () {
                    //alert("数据传输错误");
                    //callback(require("e_LayerMenuData").TopCompany.Data);
                }
            });
        },
        //获取产业政策
        getPolicyIndustryInfo: function (callback) {
            $.ajax({
                type: "POST",      //data 传送数据类型。post 传递 
                url: con.InterfaceUrl_DataStation + 'v1/industrial/specialPolicy',
                cache: false,
                dataType: 'json',  // 返回数据的数据类型json
                success: function (data) {
                    //require("g_Echart").tcfwData = data.data;
                    callback(data);
                },
                error: function () {
                    //alert("数据传输错误");
                    //callback(require("e_LayerMenuData").TopCompany.Data);
                }
            });
        },
        //获取园区事件列表
        getParkEvent: function (callback) {
            $.ajax({
                type: "POST",      //data 传送数据类型。post 传递 
                url: con.InterfaceUrl_Event + 'getParkEvents',
                cache: false,
                dataType: 'json',  // 返回数据的数据类型json
                success: function (data) {
                    //require("g_Echart").tcfwData = data.data;
                    callback(data.data);
                },
                error: function () {
                    //alert("数据传输错误");
                    //callback(require("e_LayerMenuData").TopCompany.Data);
                }
            });
        },
        //获取无人驾驶接驳车数据
        getUnmannedCarInfo: function (callback) {
            $.ajax({
                type: "get",      //data 传送数据类型。post 传递 
                url: con.InterfaceUrl_HeatMap + 'screen/uav/uavLists',
                cache: false,
                dataType: 'json',  // 返回数据的数据类型json
                success: function (data) {
                    //require("g_Echart").tcfwData = data.data;
                    callback(data);
                },
                error: function () {
                    //alert("数据传输错误");
                    //callback(require("e_LayerMenuData").TopCompany.Data);
                }
            });
        },
        
        //获取园区信息
        getGardenInfo: function (callback) {
            $.ajax({
                type: "POST",      //data 传送数据类型。post 传递 
                url: con.InterfaceUrl_DataStation + 'v1/industrial/getMainIndustryAreaPoints',
                cache: false,
                dataType: 'json',  // 返回数据的数据类型json
                success: function (data) {
                    ///require("gl_GardenBuilding").GardenPOIData = data;
                    //require("g_Echart").tcfwData = data.data;
                    callback(data);
                },
                error: function () {
                    //alert("数据传输错误");
                    //callback(require("e_LayerMenuData").TopCompany.Data);
                }
            });
        },
    }
    })