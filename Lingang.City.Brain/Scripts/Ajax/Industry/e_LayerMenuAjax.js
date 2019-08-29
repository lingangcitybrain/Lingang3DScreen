define(["config", "e_LayerMenuData"], function (con, e_LayerMenuData) {
    return {
      
        //产业区域信息
        getIndustryData: function (callback) {
            if (con.InterfaceUrl)//执行接口
            {
                $.ajax({
                    type: "get",      //data 传送数据类型。post 传递 
                    url: con.InterfaceUrl_DataStation + 'six/digit/industrDistribute',
                    cache: false,
                    dataType: 'json',  // 返回数据的数据类型json
                    success: function (data) {
                        require("el_EstateInfo").POIData = data;
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
    }
    })