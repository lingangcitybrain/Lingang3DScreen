define(["config"], function (con) {
    return {
        /***************************社区综治-Echart数据*****************************/
        //无人机统计
        wrjData: {
            "wrj_flying_cnt": 0,
            "wrj_idle_cnt": 7,
            "wrj_lost_cnt": 0,
            "wrj_cnt": 7,
            "wrj_charging_cnt": 0
        },

        //事件处理成功
        sjcgData: {
            "data": [2220, 2510, 2791, 3055, 3856, 3230, 2910, 3521, 4404, 3254, 2680, 4254]
        },
        //中间大数字
        societyBigNumData: {
	        "errorCode": "0",
            "errorMessage": "成功",
            "resultType": "0",
            "data": {
                "inspectorCount": 28,  //巡查总数
                "uavCount": "4",       //无人机总数
                "cameraCount": "739",  //摄像头总数
                "loopRate": 99.35,     //闭环率 
                "totalCount": "55266", //案件累计数
                "monthCount": "62",    //当月案件数
                "dispatchRate": "83",  //智能派单率
                "autoRate": 15.9       //主动发现率 
            }
        },

        //主责部门
        zzbmData:{
	        "errorCode": "0",
	        "errorMessage": "成功",
	        "resultType": "0",
	        "data": {
		        "dealDeptList": [{
			        "executeDeptname": "南汇新城镇",
			        "infoScname": "乱涂写、乱张贴、乱刻画",
			        "taskNums": "25206"
		        }, {
			        "executeDeptname": "城发公司",
			        "infoScname": "雨水井盖",
			        "taskNums": "894"
		        }, {
			        "executeDeptname": "临港集团",
			        "infoScname": "雨水井盖",
			        "taskNums": "792"
		        }, {
			        "executeDeptname": "芦卫清运",
			        "infoScname": "暴露垃圾",
			        "taskNums": "327"
		        }, {
			        "executeDeptname": "浦东网格中心",
			        "infoScname": "路灯",
			        "taskNums": "177"
		        }, {
			        "executeDeptname": "城投集团",
			        "infoScname": "雨水井盖",
			        "taskNums": "101"
		        }, {
			        "executeDeptname": "芦潮港社区平台部门",
			        "infoScname": "暴露垃圾",
			        "taskNums": "100"
		        }, {
			        "executeDeptname": "南汇新城非联网单位",
			        "infoScname": "架空线坠落、乱设",
			        "taskNums": "75"
		        }]
	        }
        },

        //传感器  社区IOT
        cgqData: {
	        "errorCode": "0",
	        "errorMessage": "成功",
	        "resultType": "0",
	        "data": {
	            "sensorNumList": [
	                {
			            "sensorCount": 5,
			            "OnlineSensorCount": 5,
			            "LossSensorCount": 0,
			            "sensorName": "人体红外传感",
			            "sensorType": "11",
			            "alarmSensorCount": 0
		            }, {
			            "sensorCount": 30,
			            "OnlineSensorCount": 30,
			            "LossSensorCount": 0,
			            "sensorName": "停车地磁",
			            "sensorType": "7",
			            "alarmSensorCount": 5
		            }, {
			            "sensorCount": 445,
			            "OnlineSensorCount": 445,
			            "LossSensorCount": 0,
			            "sensorName": "微信开门",
			            "sensorType": "4",
			            "alarmSensorCount": 0
		            }, {
			            "sensorCount": 510,
			            "OnlineSensorCount": 500,
			            "LossSensorCount": 10,
			            "sensorName": "无线门磁",
			            "sensorType": "3",
			            "alarmSensorCount": 0
		            }, {
			            "sensorCount": 515,
			            "OnlineSensorCount": 515,
			            "LossSensorCount": 0,
			            "sensorName": "智能井盖",
			            "sensorType": "6",
			            "alarmSensorCount": 0
		            }, {
			            "sensorCount": 40,
			            "OnlineSensorCount": 40,
			            "LossSensorCount": 0,
			            "sensorName": "智能电梯",
			            "sensorType": "2",
			            "alarmSensorCount": 0
		            }, {
			            "sensorCount": 2405,
			            "OnlineSensorCount": 2390,
			            "LossSensorCount": 15,
			            "sensorName": "烟感感应",
			            "sensorType": "1",
			            "alarmSensorCount": 0
		            }, {
			            "sensorCount": 5,
			            "OnlineSensorCount": 0,
			            "LossSensorCount": 5,
			            "sensorName": "燃气报警",
			            "sensorType": "10",
			            "alarmSensorCount": 0
		            }, {
			            "sensorCount": 40,
			            "OnlineSensorCount": 35,
			            "LossSensorCount": 5,
			            "sensorName": "电子围栏",
			            "sensorType": "5",
			            "alarmSensorCount": 15
		            }, {
			            "sensorCount": 100,
			            "OnlineSensorCount": 0,
			            "LossSensorCount": 100,
			            "sensorName": "电子巡更",
			            "sensorType": "8",
			            "alarmSensorCount": 0
		            }, {
			            "sensorCount": 5,
			            "OnlineSensorCount": 0,
			            "LossSensorCount": 5,
			            "sensorName": "睡眠看护仪",
			            "sensorType": "9",
			            "alarmSensorCount": 0
		            }, {
			            "sensorCount": 2,
			            "OnlineSensorCount": 2,
			            "LossSensorCount": 0,
			            "sensorName": "智能车闸",
			            "sensorType": "8",
			            "alarmSensorCount": 0
		            }
                ]
	        }
        },

        //事件信息
        societySjData: {
            "errorCode": "0",
            "errorMessage": "成功",
            "resultType": "0",
            "data": {
                "dealDeptList": [{
                    "eventCounts": "3219",
                    "saveTime": "1341.25小时",
                    "accuracyRate": "83%",
                    "autoRate": "35%"
                }]
            }
        },

    }
})





