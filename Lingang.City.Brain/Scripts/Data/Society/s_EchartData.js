define(["config"], function (con) {
    return {
        /***************************社区综治-Echart数据*****************************/
        //无人机统计
        wrjData: {
            "auth": {},
            "data": [
                {
                    "wrj_flying_cnt": 1,
                    "wrj_idle_cnt": 3,
                    "wrj_cnt": 4,
                    "wrj_charging_cnt": 0
                }
            ],
            "errCode": 0,
            "errMsg": "SUCCESS"
        },
        //传感器
        cgqData: {//传感器类型 1 无线烟感 2 电梯传感器 3 无线门磁 4 微信开门 5 电子围栏 6 井盖传感器 7 地磁
            "1": {
                "normal": 479,
                "total": 480,
                "lost": 1
            },
            "2": {
                "normal": 8,
                "total": 8,
                "lost": 0
            },
            "3": {
                "normal": 99,
                "total": 102,
                "lost": 3
            },
            "4": {
                "normal": 0,
                "total": 88,
                "lost": 88
            },
            "5": {
                "normal": 7,
                "total": 8,
                "lost": 1
            },
            "6": {
                "normal": 100,
                "total": 102,
                "lost": 2
            },
            "7": {
                "normal": 6,
                "total": 6,
                "lost": 0
            }
        },
        //事件处理成功
        sjcgData: {
            "data": [2220, 2510, 2791, 3055, 3856, 3230, 2910, 3521, 4404, 3254, 2680, 4254]
        },
        //中间大数字
        bigNumberData: {
            "inspectorCount": 28,   //巡查总数
            "uavCount": "4",       //无人机总数
            "cameraCount": "739",  //摄像头总数
            "loopRate": 99.35,      //闭环率 
            "totalCount": "46,874", //案件累计数
            "monthCount": "4,690",  //当月案件数
            "dispatchRate": "83",   //智能派单率
            "autoRate": 15.9,       //主动发现率 
        }

    }
})





