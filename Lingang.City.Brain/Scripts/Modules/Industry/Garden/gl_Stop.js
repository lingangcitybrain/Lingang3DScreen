define(["config", "common"], function (con, com) {
    /****************************停车位图层****************************/
    return {
            Revert: function () {

        },
        //停车位图层
        loadStop: function () {
            
            require("g_Main").loadLeftFirst1();//加载左侧第一列第一个div
            require("g_Main").loadLeftFirst2();//

            require("g_Main").loadLeftSecond1();//加载左侧第二列第一个div
            require("g_Main").loadLeftSecond2();//
            require("g_Main").loadLeftSecond3();//
            require("mainMenu").LayerFlyto(21);
            require("reset").ClearDivHtmlOnCenter();

        },
        loadParkingInfo: function () {
            var time = null;//不传，查历史记录可传
            require("gl_GardenBuildingAjax").getParkingInfo(time, function (data) {
                //var pos=data.
                var parkingLotPOS = Q3D.globalVec3d({ longitude: data.longitude, latitude: data.altitude, height: 0 });

            })
        },
    }
})