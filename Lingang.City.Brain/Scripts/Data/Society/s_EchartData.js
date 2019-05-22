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

        cgqBigNumData:{
	        "peopleCount": "2348",
	        "carCounts": "231",
	        "occupy": "0.8",
	        "grade": "0.7"
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

        //摄像头--摄像头
        sxtCameraData: {
	        "errorCode": "0",
	        "errorMessage": "成功",
	        "resultType": "0",
	        "data": {
		        "pagination": {
			        "pageSize": 5,
			        "current": 0,
			        "total": 164
		        },
		        "total": 164,
		        "list": [{
			        "id": 8742,
			        "globalNumber": "31011900011328041004",
			        "pointCorrespondingNumber": null,
			        "channelName": "海洋小区入口人脸识别机4",
			        "communityId": "S012",
			        "verticalBarCoding": "海洋小区入口车闸处",
			        "lng": "121.913298",
			        "lat": "30.881252",
			        "vupperUnion": null,
			        "upperLinkOlt": null,
			        "ipAddress": "100.90.80.14",
			        "bitStream": "4096Kbps",
			        "nvrIpAddress": "100.90.80.14",
			        "account": "admin",
			        "password": "a123456",
			        "nvrChannel": null,
			        "nvrDeviceId": "31011900011188034000",
			        "nvrChannelId": null,
			        "cameraId": null,
			        "gbId": "31011900011328041004",
			        "registeredPorts": null,
			        "nationalStandardGatewayIp": null,
			        "deviceType": "枪击",
			        "cameraHeight": "3m",
			        "cameraAngle": "79.55",
			        "cameraType": "普通枪击",
			        "resolutionRatio": "1920*1080p",
			        "directionLaneNumber": null,
			        "updateTime": "2019-05-21T02:04:01.000+0000",
			        "updateUser": "admin",
			        "type": "3",
			        "sbzt": "ON",
			        "sxjlx": "2",
			        "communityName": "海洋小区",
			        "address": "上海市浦东新区南汇新城镇古棕路438弄",
			        "committee": "临港家园",
			        "communityOwn": "申港社区",
			        "longitude": null,
			        "laititude": null,
			        "occupancyRate": 60.86,
			        "totalPeoples": 1239,
			        "totalCars": null,
			        "videoUrl": null,
			        "carInCount": null,
			        "date": null,
			        "carOutCount": null,
			        "x": 0,
			        "y1": 0,
			        "y2": 0
		        }, {
			        "id": 8741,
			        "globalNumber": "31011900011328041003",
			        "pointCorrespondingNumber": null,
			        "channelName": "海洋小区入口人脸识别机3",
			        "communityId": "S012",
			        "verticalBarCoding": "海洋小区入口车闸处",
			        "lng": "121.913406",
			        "lat": "30.881341",
			        "vupperUnion": null,
			        "upperLinkOlt": null,
			        "ipAddress": "100.90.80.13",
			        "bitStream": "4096Kbps",
			        "nvrIpAddress": "100.90.80.13",
			        "account": "admin",
			        "password": "a123456",
			        "nvrChannel": null,
			        "nvrDeviceId": "31011900011188034000",
			        "nvrChannelId": null,
			        "cameraId": null,
			        "gbId": "31011900011328041003",
			        "registeredPorts": null,
			        "nationalStandardGatewayIp": null,
			        "deviceType": "枪击",
			        "cameraHeight": "3m",
			        "cameraAngle": "79.55",
			        "cameraType": "普通枪击",
			        "resolutionRatio": "1920*1080p",
			        "directionLaneNumber": null,
			        "updateTime": "2019-05-21T02:04:01.000+0000",
			        "updateUser": "admin",
			        "type": "3",
			        "sbzt": "ON",
			        "sxjlx": "2",
			        "communityName": "海洋小区",
			        "address": "上海市浦东新区南汇新城镇古棕路438弄",
			        "committee": "临港家园",
			        "communityOwn": "申港社区",
			        "longitude": null,
			        "laititude": null,
			        "occupancyRate": 60.86,
			        "totalPeoples": 1239,
			        "totalCars": null,
			        "videoUrl": null,
			        "carInCount": null,
			        "date": null,
			        "carOutCount": null,
			        "x": 0,
			        "y1": 0,
			        "y2": 0
		        }, {
			        "id": 8740,
			        "globalNumber": "31011900011328041002",
			        "pointCorrespondingNumber": null,
			        "channelName": "海洋小区入口人脸识别机2",
			        "communityId": "S012",
			        "verticalBarCoding": "海洋小区入口车闸处",
			        "lng": "121.913455",
			        "lat": "30.881124",
			        "vupperUnion": null,
			        "upperLinkOlt": null,
			        "ipAddress": "100.90.80.12",
			        "bitStream": "4096Kbps",
			        "nvrIpAddress": "100.90.80.12",
			        "account": "admin",
			        "password": "a123456",
			        "nvrChannel": null,
			        "nvrDeviceId": "31011900011188034000",
			        "nvrChannelId": null,
			        "cameraId": null,
			        "gbId": "31011900011328041002",
			        "registeredPorts": null,
			        "nationalStandardGatewayIp": null,
			        "deviceType": "枪击",
			        "cameraHeight": "3m",
			        "cameraAngle": "79.55",
			        "cameraType": "普通枪击",
			        "resolutionRatio": "1920*1080p",
			        "directionLaneNumber": null,
			        "updateTime": "2019-05-21T02:04:01.000+0000",
			        "updateUser": "admin",
			        "type": "3",
			        "sbzt": "ON",
			        "sxjlx": "2",
			        "communityName": "海洋小区",
			        "address": "上海市浦东新区南汇新城镇古棕路438弄",
			        "committee": "临港家园",
			        "communityOwn": "申港社区",
			        "longitude": null,
			        "laititude": null,
			        "occupancyRate": 60.86,
			        "totalPeoples": 1239,
			        "totalCars": null,
			        "videoUrl": null,
			        "carInCount": null,
			        "date": null,
			        "carOutCount": null,
			        "x": 0,
			        "y1": 0,
			        "y2": 0
		        }, {
			        "id": 8739,
			        "globalNumber": "31011900011328041001",
			        "pointCorrespondingNumber": null,
			        "channelName": "海洋小区入口人脸识别机1",
			        "communityId": "S012",
			        "verticalBarCoding": "海洋小区入口车闸处",
			        "lng": "121.91354",
			        "lat": "30.881225",
			        "vupperUnion": null,
			        "upperLinkOlt": null,
			        "ipAddress": "100.90.80.11",
			        "bitStream": "4096Kbps",
			        "nvrIpAddress": "100.90.80.11",
			        "account": "admin",
			        "password": "a123456",
			        "nvrChannel": null,
			        "nvrDeviceId": "31011900011188034000",
			        "nvrChannelId": null,
			        "cameraId": null,
			        "gbId": "31011900011328041001",
			        "registeredPorts": null,
			        "nationalStandardGatewayIp": null,
			        "deviceType": "枪击",
			        "cameraHeight": "3m",
			        "cameraAngle": "79.55",
			        "cameraType": "普通枪击",
			        "resolutionRatio": "1920*1080p",
			        "directionLaneNumber": null,
			        "updateTime": "2019-05-21T02:04:02.000+0000",
			        "updateUser": "admin",
			        "type": "3",
			        "sbzt": "ON",
			        "sxjlx": "2",
			        "communityName": "海洋小区",
			        "address": "上海市浦东新区南汇新城镇古棕路438弄",
			        "committee": "临港家园",
			        "communityOwn": "申港社区",
			        "longitude": null,
			        "laititude": null,
			        "occupancyRate": 60.86,
			        "totalPeoples": 1239,
			        "totalCars": null,
			        "videoUrl": null,
			        "carInCount": null,
			        "date": null,
			        "carOutCount": null,
			        "x": 0,
			        "y1": 0,
			        "y2": 0
		        }, {
			        "id": 8738,
			        "globalNumber": "31011900011328040016",
			        "pointCorrespondingNumber": null,
			        "channelName": "海洋小区道路摄像机58",
			        "communityId": "S012",
			        "verticalBarCoding": "海洋小区50单元与47单元中间绿化带上",
			        "lng": "121.912523",
			        "lat": "30.883675",
			        "vupperUnion": null,
			        "upperLinkOlt": null,
			        "ipAddress": "100.90.80.205",
			        "bitStream": "4096Kbps",
			        "nvrIpAddress": "100.90.80.205",
			        "account": "admin",
			        "password": "a123456",
			        "nvrChannel": null,
			        "nvrDeviceId": "31011900011188034000",
			        "nvrChannelId": null,
			        "cameraId": null,
			        "gbId": "31011900011328040016",
			        "registeredPorts": null,
			        "nationalStandardGatewayIp": null,
			        "deviceType": "枪击",
			        "cameraHeight": "3m",
			        "cameraAngle": "79.55",
			        "cameraType": "普通枪击",
			        "resolutionRatio": "1920*1080p",
			        "directionLaneNumber": null,
			        "updateTime": "2019-05-21T02:04:01.000+0000",
			        "updateUser": "admin",
			        "type": "2",
			        "sbzt": "ON",
			        "sxjlx": "2",
			        "communityName": "海洋小区",
			        "address": "上海市浦东新区南汇新城镇古棕路438弄",
			        "committee": "临港家园",
			        "communityOwn": "申港社区",
			        "longitude": null,
			        "laititude": null,
			        "occupancyRate": 60.86,
			        "totalPeoples": 1239,
			        "totalCars": null,
			        "videoUrl": null,
			        "carInCount": null,
			        "date": null,
			        "carOutCount": null,
			        "x": 0,
			        "y1": 0,
			        "y2": 0
		        }]
	        }
        },

        //摄像头--车辆
        sxtCarData: {
	        "errorCode": "0",
            "errorMessage": "成功",
            "resultType": "0",
            "data": {
                "owner": 65,
                "total": 83,
                "illegally": 3,
                "foreign": 15
            }
        },

        //摄像头--人员
        sxtPersonData: {
           "count":"28",
           "total":"1289"
        },

        //进出车辆人员数据
        carPersonInOutData:{
	        "errorCode": "0",
	        "errorMessage": "成功",
	        "resultType": "0",
	        "data": {
		        "carInOutCount": ["42", "62", "53", "37", "47", "128", "94", "23", "6", "2", "3", "6", "4", "7", "15", "18", "28", "52", "36", "80", "124", "108", "67", "18"],
		        "personInOutCount": [351, 304, 506, 502, 523, 1107, 1019, 312, 155, 21, 13, 2, 8, 6, 41, 37, 54, 53, 86, 187, 619, 1697, 762, 190],
		        "dateLists": ["2019-05-16 13", "2019-05-16 12", "2019-05-16 11", "2019-05-16 10", "2019-05-16 09", "2019-05-16 08", "2019-05-16 07", "2019-05-16 06", "2019-05-16 05", "2019-05-16 04", "2019-05-16 03", "2019-05-16 02", "2019-05-16 01", "2019-05-16 00", "2019-05-15 23", "2019-05-15 22", "2019-05-15 21", "2019-05-15 20", "2019-05-15 19", "2019-05-15 18", "2019-05-15 17", "2019-05-15 16", "2019-05-15 15", "2019-05-15 14"]
	        }
        },

        //社区人口
        societyPersonData: {
            "realTimeCount": "2348",
            "visitor": "173",
            "total": "6987",
            "peopleFlow": 7794
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

        //事件处理成功数
        societySjcgData:{
            "errorCode": "0",
            "errorMessage": "成功",
            "resultType": "0",
            "data": {
                "taskInfo": [{
                    "months": "1",
                    "counts": "6918"
                }, {
                    "months": "2",
                    "counts": "5547"
                }, {
                    "months": "3",
                    "counts": "5971"
                }, {
                    "months": "4",
                    "counts": "2897"
                }, {
                    "months": "5",
                    "counts": "68"
                }, {
                    "months": "6",
                    "counts": "73"
                }, {
                    "months": "7",
                    "counts": "2762"
                }, {
                    "months": "8",
                    "counts": "4096"
                }, {
                    "months": "9",
                    "counts": "3652"
                }, {
                    "months": "10",
                    "counts": "4061"
                }, {
                    "months": "11",
                    "counts": "3244"
                }, {
                    "months": "12",
                    "counts": "4412"
                }]
            }
        },

        //街面无人机
        jmDroneData:{
            flightNumber: 1,
            flightCount: 2,
            flightTime: 30,
            url: "https://vku.youku.com/live/ilpshare?id=8018484"
        },

        //街面巡查员信息
        jmXcyData:{
	        "errorCode": "0",
            "errorMessage": "成功",
            "resultType": "0",
            "data": {
                "data": [{
                    "id": 1,
                    "inspectorName": "杨育峰",
                    "sex": "男",
                    "belongCommunities": "综合社区",
                    "position": "组长",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/yangyufeng.jpg"
                }, {
                    "id": 2,
                    "inspectorName": "周勇",
                    "sex": "男",
                    "belongCommunities": "综合社区",
                    "position": "组员",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/zhouyong.jpg"
                }, {
                    "id": 3,
                    "inspectorName": "范欢欢",
                    "sex": "女",
                    "belongCommunities": "申港社区",
                    "position": "组长",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/fanhuanhuan.jpg"
                }, {
                    "id": 4,
                    "inspectorName": "吴春丽",
                    "sex": "女",
                    "belongCommunities": "申港社区",
                    "position": "组员",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/wuchunli.jpg"
                }, {
                    "id": 5,
                    "inspectorName": "孙小红",
                    "sex": "女",
                    "belongCommunities": "申港社区",
                    "position": "组长",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/sunxiaohong.jpg"
                }, {
                    "id": 6,
                    "inspectorName": "康红霞",
                    "sex": "女",
                    "belongCommunities": "申港社区",
                    "position": "组员",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/kanghongxia.jpg"
                }, {
                    "id": 7,
                    "inspectorName": "黄海玉",
                    "sex": "女",
                    "belongCommunities": "申港社区",
                    "position": "组长",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/huanghaiyu.jpg"
                }, {
                    "id": 8,
                    "inspectorName": "袁承相",
                    "sex": "男",
                    "belongCommunities": "申港社区",
                    "position": "组员",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/yuanchengxiang.jpg"
                }, {
                    "id": 9,
                    "inspectorName": "朱红",
                    "sex": "女",
                    "belongCommunities": "申港社区",
                    "position": "组长",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/zhuhong.jpg"
                }, {
                    "id": 10,
                    "inspectorName": "李波",
                    "sex": "男",
                    "belongCommunities": "申港社区",
                    "position": "组员",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/libo.jpg"
                }, {
                    "id": 11,
                    "inspectorName": "孙琴芳",
                    "sex": "女",
                    "belongCommunities": "芦潮港社区",
                    "position": "组长",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/sunqinfang.jpg"
                }, {
                    "id": 12,
                    "inspectorName": "康叶红",
                    "sex": "女",
                    "belongCommunities": "芦潮港社区",
                    "position": "组员",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/kangyehong.jpg"
                }, {
                    "id": 13,
                    "inspectorName": "陆新苗",
                    "sex": "女",
                    "belongCommunities": "芦潮港社区",
                    "position": "组员",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/luxinmiao.jpg"
                }, {
                    "id": 14,
                    "inspectorName": "潘虹",
                    "sex": "女",
                    "belongCommunities": "芦潮港社区",
                    "position": "组员",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/panhong.jpg"
                }, {
                    "id": 15,
                    "inspectorName": "苏小平",
                    "sex": "男",
                    "belongCommunities": "芦潮港社区",
                    "position": "组长",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/suxiaoping.jpg"
                }, {
                    "id": 16,
                    "inspectorName": "姚中华",
                    "sex": "男",
                    "belongCommunities": "芦潮港社区",
                    "position": "组员",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/yaozhonghua.jpg"
                }, {
                    "id": 17,
                    "inspectorName": "袁中华",
                    "sex": "女",
                    "belongCommunities": "芦潮港社区",
                    "position": "组员",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/yuanzhonghua.jpg"
                }, {
                    "id": 18,
                    "inspectorName": "姚伟",
                    "sex": "男",
                    "belongCommunities": "芦潮港社区",
                    "position": "组长",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/yaowei.jpg"
                }, {
                    "id": 19,
                    "inspectorName": "樊玲芳",
                    "sex": "女",
                    "belongCommunities": "芦潮港社区",
                    "position": "组员",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/fanlingfang.jpg"
                }, {
                    "id": 20,
                    "inspectorName": "施文彬",
                    "sex": "男",
                    "belongCommunities": "芦潮港社区",
                    "position": "组员",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/shiwenbing.jpg"
                }, {
                    "id": 21,
                    "inspectorName": "张燕",
                    "sex": "女",
                    "belongCommunities": "芦潮港社区",
                    "position": "组员",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/zhangyan.jpg"
                }, {
                    "id": 22,
                    "inspectorName": "季天恩",
                    "sex": "男",
                    "belongCommunities": "芦潮港社区",
                    "position": "组员",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/jitianen.jpg"
                }, {
                    "id": 23,
                    "inspectorName": "董萍萍",
                    "sex": "女",
                    "belongCommunities": "芦潮港社区",
                    "position": "组长",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/dongpingping.jpg"
                }, {
                    "id": 24,
                    "inspectorName": "陈萍",
                    "sex": "女",
                    "belongCommunities": "芦潮港社区",
                    "position": "组员",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/chenping.jpg"
                }, {
                    "id": 25,
                    "inspectorName": "张亚萍",
                    "sex": "女",
                    "belongCommunities": "芦潮港社区",
                    "position": "组长",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/zhangyaping.jpg"
                }, {
                    "id": 26,
                    "inspectorName": "袁莉",
                    "sex": "女",
                    "belongCommunities": "芦潮港社区",
                    "position": "组员",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/yuanli.jpg"
                }, {
                    "id": 27,
                    "inspectorName": "茅鲜敏",
                    "sex": "女",
                    "belongCommunities": "芦潮港社区",
                    "position": "组长",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/maoxianmin.jpg"
                }, {
                    "id": 28,
                    "inspectorName": "施君玲",
                    "sex": "女",
                    "belongCommunities": "芦潮港社区",
                    "position": "组员",
                    "photoUrl": "http://106.14.149.153/bigScreen/image/shijunling.jpg"
                }]
            }
        },

        //海岸线涨潮
        costlineTideData:{
	        "errorCode": "0",
            "errorMessage": "成功",
            "resultType": "0",
            "data": {
                "pagination": {
                    "pageSize": 5,
                    "current": 0,
                    "total": 193
                },
                "total": 193,
                "list": [{
                    "id": 1,
                    "hrs": "2019-02-12T16:00:00.000+0000",
                    "tideheight": 144.0,
                    "flag": 0
                }, {
                    "id": 2,
                    "hrs": "2019-02-12T17:00:00.000+0000",
                    "tideheight": 219.0,
                    "flag": 0
                }, {
                    "id": 3,
                    "hrs": "2019-02-12T18:00:00.000+0000",
                    "tideheight": 298.0,
                    "flag": 0
                }, {
                    "id": 4,
                    "hrs": "2019-02-12T19:00:13.000+0000",
                    "tideheight": 357.0,
                    "flag": 0
                }, {
                    "id": 5,
                    "hrs": "2019-02-12T20:00:00.000+0000",
                    "tideheight": 382.0,
                    "flag": 0
                }]
            }
        },

        //工地施工单位
        workSiteBuilderData:[{
	        "name": "测试工地",
	        "startTime": "20190520",
	        "builder": "测试1",
	        "usage": "商业"
        }],

        //工地无人机
        workSiteWrjData: {
            "errorCode": "0",
            "errorMessage": "成功",
            "resultType": "0",
            "data": {
                "communityDetail": {
                    "flightCounts": "10",
                    "communityCarNums": "3.3h",
                    "communityGrade": "113712(m2)",
                    "eventCounts": "7"
                }
            }
        },

        //工地天气预报
        workSiteWeatherData: {
	        "cod": "200",
            "message": 0.0061,
            "cnt": 40,
            "list": [{
                "dt": 1558440000,
                "main": {
                    "temp": 296.29,
                    "temp_min": 294.829,
                    "temp_max": 296.29,
                    "pressure": 1010.45,
                    "sea_level": 1010.45,
                    "grnd_level": 1009.77,
                    "humidity": 43,
                    "temp_kf": 1.46
                },
                "weather": [{
                    "id": 801,
                    "main": "Clouds",
                    "description": "晴，少云",
                    "icon": "02n"
                }],
                "clouds": {
                    "all": 17
                },
                "wind": {
                    "speed": 5.01,
                    "deg": 151.226
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-05-21 12:00:00"
            }, {
                "dt": 1558450800,
                "main": {
                    "temp": 294.72,
                    "temp_min": 293.627,
                    "temp_max": 294.72,
                    "pressure": 1010.8,
                    "sea_level": 1010.8,
                    "grnd_level": 1010.67,
                    "humidity": 47,
                    "temp_kf": 1.1
                },
                "weather": [{
                    "id": 804,
                    "main": "Clouds",
                    "description": "阴，多云",
                    "icon": "04n"
                }],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.12,
                    "deg": 175.662
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-05-21 15:00:00"
            }, {
                "dt": 1558461600,
                "main": {
                    "temp": 293.87,
                    "temp_min": 293.139,
                    "temp_max": 293.87,
                    "pressure": 1010.02,
                    "sea_level": 1010.02,
                    "grnd_level": 1009.77,
                    "humidity": 52,
                    "temp_kf": 0.73
                },
                "weather": [{
                    "id": 804,
                    "main": "Clouds",
                    "description": "阴，多云",
                    "icon": "04n"
                }],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.32,
                    "deg": 187.033
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-05-21 18:00:00"
            }, {
                "dt": 1558472400,
                "main": {
                    "temp": 292.97,
                    "temp_min": 292.6,
                    "temp_max": 292.97,
                    "pressure": 1009.6,
                    "sea_level": 1009.6,
                    "grnd_level": 1009.21,
                    "humidity": 55,
                    "temp_kf": 0.37
                },
                "weather": [{
                    "id": 802,
                    "main": "Clouds",
                    "description": "多云",
                    "icon": "03d"
                }],
                "clouds": {
                    "all": 40
                },
                "wind": {
                    "speed": 3.4,
                    "deg": 204.628
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-21 21:00:00"
            }, {
                "dt": 1558483200,
                "main": {
                    "temp": 294.288,
                    "temp_min": 294.288,
                    "temp_max": 294.288,
                    "pressure": 1010.45,
                    "sea_level": 1010.45,
                    "grnd_level": 1010.15,
                    "humidity": 51,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 801,
                    "main": "Clouds",
                    "description": "晴，少云",
                    "icon": "02d"
                }],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 3.07,
                    "deg": 240.54
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-22 00:00:00"
            }, {
                "dt": 1558494000,
                "main": {
                    "temp": 296.831,
                    "temp_min": 296.831,
                    "temp_max": 296.831,
                    "pressure": 1010.16,
                    "sea_level": 1010.16,
                    "grnd_level": 1009.79,
                    "humidity": 46,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "晴",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.84,
                    "deg": 261.852
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-22 03:00:00"
            }, {
                "dt": 1558504800,
                "main": {
                    "temp": 298.789,
                    "temp_min": 298.789,
                    "temp_max": 298.789,
                    "pressure": 1009.04,
                    "sea_level": 1009.04,
                    "grnd_level": 1008.49,
                    "humidity": 45,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "晴",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.25,
                    "deg": 128.024
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-22 06:00:00"
            }, {
                "dt": 1558515600,
                "main": {
                    "temp": 299.7,
                    "temp_min": 299.7,
                    "temp_max": 299.7,
                    "pressure": 1008.17,
                    "sea_level": 1008.17,
                    "grnd_level": 1007.6,
                    "humidity": 40,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "晴",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 5.07,
                    "deg": 130.566
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-22 09:00:00"
            }, {
                "dt": 1558526400,
                "main": {
                    "temp": 296.4,
                    "temp_min": 296.4,
                    "temp_max": 296.4,
                    "pressure": 1008.95,
                    "sea_level": 1008.95,
                    "grnd_level": 1008.79,
                    "humidity": 39,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "晴",
                    "icon": "01n"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 6.72,
                    "deg": 169.997
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-05-22 12:00:00"
            }, {
                "dt": 1558537200,
                "main": {
                    "temp": 295.2,
                    "temp_min": 295.2,
                    "temp_max": 295.2,
                    "pressure": 1010.11,
                    "sea_level": 1010.11,
                    "grnd_level": 1009.93,
                    "humidity": 46,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "晴",
                    "icon": "01n"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 6.03,
                    "deg": 186.46
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-05-22 15:00:00"
            }, {
                "dt": 1558548000,
                "main": {
                    "temp": 294.542,
                    "temp_min": 294.542,
                    "temp_max": 294.542,
                    "pressure": 1010.16,
                    "sea_level": 1010.16,
                    "grnd_level": 1009.68,
                    "humidity": 50,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "晴",
                    "icon": "01n"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 5.03,
                    "deg": 209.174
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-05-22 18:00:00"
            }, {
                "dt": 1558558800,
                "main": {
                    "temp": 294.078,
                    "temp_min": 294.078,
                    "temp_max": 294.078,
                    "pressure": 1010.43,
                    "sea_level": 1010.43,
                    "grnd_level": 1010.17,
                    "humidity": 56,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "晴",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.81,
                    "deg": 234.558
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-22 21:00:00"
            }, {
                "dt": 1558569600,
                "main": {
                    "temp": 296.085,
                    "temp_min": 296.085,
                    "temp_max": 296.085,
                    "pressure": 1011.9,
                    "sea_level": 1011.9,
                    "grnd_level": 1011.53,
                    "humidity": 52,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "晴",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.75,
                    "deg": 239.165
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-23 00:00:00"
            }, {
                "dt": 1558580400,
                "main": {
                    "temp": 299.542,
                    "temp_min": 299.542,
                    "temp_max": 299.542,
                    "pressure": 1012.24,
                    "sea_level": 1012.24,
                    "grnd_level": 1011.74,
                    "humidity": 40,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "晴",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.26,
                    "deg": 266.602
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-23 03:00:00"
            }, {
                "dt": 1558591200,
                "main": {
                    "temp": 300.293,
                    "temp_min": 300.293,
                    "temp_max": 300.293,
                    "pressure": 1010.95,
                    "sea_level": 1010.95,
                    "grnd_level": 1010.3,
                    "humidity": 42,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "晴",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.44,
                    "deg": 295.87
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-23 06:00:00"
            }, {
                "dt": 1558602000,
                "main": {
                    "temp": 301.412,
                    "temp_min": 301.412,
                    "temp_max": 301.412,
                    "pressure": 1009.97,
                    "sea_level": 1009.97,
                    "grnd_level": 1009.12,
                    "humidity": 41,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "晴",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.58,
                    "deg": 159.137
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-23 09:00:00"
            }, {
                "dt": 1558612800,
                "main": {
                    "temp": 299.712,
                    "temp_min": 299.712,
                    "temp_max": 299.712,
                    "pressure": 1011.24,
                    "sea_level": 1011.24,
                    "grnd_level": 1010.92,
                    "humidity": 40,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "晴",
                    "icon": "01n"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 5.66,
                    "deg": 186.129
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-05-23 12:00:00"
            }, {
                "dt": 1558623600,
                "main": {
                    "temp": 296.924,
                    "temp_min": 296.924,
                    "temp_max": 296.924,
                    "pressure": 1012.37,
                    "sea_level": 1012.37,
                    "grnd_level": 1012.22,
                    "humidity": 47,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "晴",
                    "icon": "01n"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 5.2,
                    "deg": 190.049
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-05-23 15:00:00"
            }, {
                "dt": 1558634400,
                "main": {
                    "temp": 296.329,
                    "temp_min": 296.329,
                    "temp_max": 296.329,
                    "pressure": 1011.72,
                    "sea_level": 1011.72,
                    "grnd_level": 1011.53,
                    "humidity": 41,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "晴",
                    "icon": "01n"
                }],
                "clouds": {
                    "all": 3
                },
                "wind": {
                    "speed": 4.98,
                    "deg": 202.135
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-05-23 18:00:00"
            }, {
                "dt": 1558645200,
                "main": {
                    "temp": 295.415,
                    "temp_min": 295.415,
                    "temp_max": 295.415,
                    "pressure": 1011.9,
                    "sea_level": 1011.9,
                    "grnd_level": 1011.63,
                    "humidity": 42,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 802,
                    "main": "Clouds",
                    "description": "多云",
                    "icon": "03d"
                }],
                "clouds": {
                    "all": 27
                },
                "wind": {
                    "speed": 4.33,
                    "deg": 203.744
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-23 21:00:00"
            }, {
                "dt": 1558656000,
                "main": {
                    "temp": 297.015,
                    "temp_min": 297.015,
                    "temp_max": 297.015,
                    "pressure": 1012.89,
                    "sea_level": 1012.89,
                    "grnd_level": 1012.75,
                    "humidity": 39,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 801,
                    "main": "Clouds",
                    "description": "晴，少云",
                    "icon": "02d"
                }],
                "clouds": {
                    "all": 18
                },
                "wind": {
                    "speed": 4.15,
                    "deg": 196.108
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-24 00:00:00"
            }, {
                "dt": 1558666800,
                "main": {
                    "temp": 300.815,
                    "temp_min": 300.815,
                    "temp_max": 300.815,
                    "pressure": 1012.79,
                    "sea_level": 1012.79,
                    "grnd_level": 1012.46,
                    "humidity": 29,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 802,
                    "main": "Clouds",
                    "description": "多云",
                    "icon": "03d"
                }],
                "clouds": {
                    "all": 29
                },
                "wind": {
                    "speed": 6.15,
                    "deg": 181.518
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-24 03:00:00"
            }, {
                "dt": 1558677600,
                "main": {
                    "temp": 301.759,
                    "temp_min": 301.759,
                    "temp_max": 301.759,
                    "pressure": 1010.52,
                    "sea_level": 1010.52,
                    "grnd_level": 1010.09,
                    "humidity": 28,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 801,
                    "main": "Clouds",
                    "description": "晴，少云",
                    "icon": "02d"
                }],
                "clouds": {
                    "all": 19
                },
                "wind": {
                    "speed": 7.53,
                    "deg": 170.246
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-24 06:00:00"
            }, {
                "dt": 1558688400,
                "main": {
                    "temp": 300.461,
                    "temp_min": 300.461,
                    "temp_max": 300.461,
                    "pressure": 1009.35,
                    "sea_level": 1009.35,
                    "grnd_level": 1008.97,
                    "humidity": 34,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 802,
                    "main": "Clouds",
                    "description": "多云",
                    "icon": "03d"
                }],
                "clouds": {
                    "all": 25
                },
                "wind": {
                    "speed": 7.13,
                    "deg": 159.331
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-24 09:00:00"
            }, {
                "dt": 1558699200,
                "main": {
                    "temp": 297.712,
                    "temp_min": 297.712,
                    "temp_max": 297.712,
                    "pressure": 1010.05,
                    "sea_level": 1010.05,
                    "grnd_level": 1009.75,
                    "humidity": 41,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 802,
                    "main": "Clouds",
                    "description": "多云",
                    "icon": "03n"
                }],
                "clouds": {
                    "all": 50
                },
                "wind": {
                    "speed": 7.4,
                    "deg": 160.745
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-05-24 12:00:00"
            }, {
                "dt": 1558710000,
                "main": {
                    "temp": 296.5,
                    "temp_min": 296.5,
                    "temp_max": 296.5,
                    "pressure": 1010.82,
                    "sea_level": 1010.82,
                    "grnd_level": 1010.53,
                    "humidity": 47,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 804,
                    "main": "Clouds",
                    "description": "阴，多云",
                    "icon": "04n"
                }],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 8.08,
                    "deg": 165.94
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-05-24 15:00:00"
            }, {
                "dt": 1558720800,
                "main": {
                    "temp": 295.592,
                    "temp_min": 295.592,
                    "temp_max": 295.592,
                    "pressure": 1009.57,
                    "sea_level": 1009.57,
                    "grnd_level": 1009.45,
                    "humidity": 57,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 804,
                    "main": "Clouds",
                    "description": "阴，多云",
                    "icon": "04n"
                }],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 8.29,
                    "deg": 168.479
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-05-24 18:00:00"
            }, {
                "dt": 1558731600,
                "main": {
                    "temp": 295.2,
                    "temp_min": 295.2,
                    "temp_max": 295.2,
                    "pressure": 1009.08,
                    "sea_level": 1009.08,
                    "grnd_level": 1008.76,
                    "humidity": 60,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 804,
                    "main": "Clouds",
                    "description": "阴，多云",
                    "icon": "04d"
                }],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 8.76,
                    "deg": 163.288
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-24 21:00:00"
            }, {
                "dt": 1558742400,
                "main": {
                    "temp": 295.857,
                    "temp_min": 295.857,
                    "temp_max": 295.857,
                    "pressure": 1009.76,
                    "sea_level": 1009.76,
                    "grnd_level": 1009.13,
                    "humidity": 60,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 804,
                    "main": "Clouds",
                    "description": "阴，多云",
                    "icon": "04d"
                }],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 10.17,
                    "deg": 166.208
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-25 00:00:00"
            }, {
                "dt": 1558753200,
                "main": {
                    "temp": 297.7,
                    "temp_min": 297.7,
                    "temp_max": 297.7,
                    "pressure": 1009.3,
                    "sea_level": 1009.3,
                    "grnd_level": 1008.46,
                    "humidity": 52,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 804,
                    "main": "Clouds",
                    "description": "阴，多云",
                    "icon": "04d"
                }],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 10.53,
                    "deg": 168.306
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-25 03:00:00"
            }, {
                "dt": 1558764000,
                "main": {
                    "temp": 296.5,
                    "temp_min": 296.5,
                    "temp_max": 296.5,
                    "pressure": 1007.74,
                    "sea_level": 1007.74,
                    "grnd_level": 1007.26,
                    "humidity": 63,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "小雨",
                    "icon": "10d"
                }],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 8.18,
                    "deg": 165.069
                },
                "rain": {
                    "3h": 0.75
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-25 06:00:00"
            }, {
                "dt": 1558774800,
                "main": {
                    "temp": 295.4,
                    "temp_min": 295.4,
                    "temp_max": 295.4,
                    "pressure": 1006.31,
                    "sea_level": 1006.31,
                    "grnd_level": 1005.85,
                    "humidity": 76,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 501,
                    "main": "Rain",
                    "description": "中雨",
                    "icon": "10d"
                }],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 9.34,
                    "deg": 160.302
                },
                "rain": {
                    "3h": 4.625
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-25 09:00:00"
            }, {
                "dt": 1558785600,
                "main": {
                    "temp": 295.4,
                    "temp_min": 295.4,
                    "temp_max": 295.4,
                    "pressure": 1006.64,
                    "sea_level": 1006.64,
                    "grnd_level": 1006.4,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "小雨",
                    "icon": "10n"
                }],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 9.64,
                    "deg": 165.618
                },
                "rain": {
                    "3h": 1.125
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-05-25 12:00:00"
            }, {
                "dt": 1558796400,
                "main": {
                    "temp": 295.2,
                    "temp_min": 295.2,
                    "temp_max": 295.2,
                    "pressure": 1006.97,
                    "sea_level": 1006.97,
                    "grnd_level": 1006.82,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "小雨",
                    "icon": "10n"
                }],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 9.76,
                    "deg": 173.925
                },
                "rain": {
                    "3h": 0.75
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-05-25 15:00:00"
            }, {
                "dt": 1558807200,
                "main": {
                    "temp": 295,
                    "temp_min": 295,
                    "temp_max": 295,
                    "pressure": 1004.96,
                    "sea_level": 1004.96,
                    "grnd_level": 1004.45,
                    "humidity": 77,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "小雨",
                    "icon": "10n"
                }],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 9.24,
                    "deg": 172.423
                },
                "rain": {
                    "3h": 1.5
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-05-25 18:00:00"
            }, {
                "dt": 1558818000,
                "main": {
                    "temp": 294.6,
                    "temp_min": 294.6,
                    "temp_max": 294.6,
                    "pressure": 1004.56,
                    "sea_level": 1004.56,
                    "grnd_level": 1004.39,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "小雨",
                    "icon": "10d"
                }],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 8.39,
                    "deg": 173.975
                },
                "rain": {
                    "3h": 1.125
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-25 21:00:00"
            }, {
                "dt": 1558828800,
                "main": {
                    "temp": 293.913,
                    "temp_min": 293.913,
                    "temp_max": 293.913,
                    "pressure": 1005.09,
                    "sea_level": 1005.09,
                    "grnd_level": 1004.87,
                    "humidity": 92,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 502,
                    "main": "Rain",
                    "description": "大雨",
                    "icon": "10d"
                }],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 6.99,
                    "deg": 173.341
                },
                "rain": {
                    "3h": 17.125
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-26 00:00:00"
            }, {
                "dt": 1558839600,
                "main": {
                    "temp": 294.7,
                    "temp_min": 294.7,
                    "temp_max": 294.7,
                    "pressure": 1004.64,
                    "sea_level": 1004.64,
                    "grnd_level": 1004.4,
                    "humidity": 90,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 502,
                    "main": "Rain",
                    "description": "大雨",
                    "icon": "10d"
                }],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 7.48,
                    "deg": 204.142
                },
                "rain": {
                    "3h": 13.375
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-26 03:00:00"
            }, {
                "dt": 1558850400,
                "main": {
                    "temp": 294.573,
                    "temp_min": 294.573,
                    "temp_max": 294.573,
                    "pressure": 1003.48,
                    "sea_level": 1003.48,
                    "grnd_level": 1003.63,
                    "humidity": 92,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 501,
                    "main": "Rain",
                    "description": "中雨",
                    "icon": "10d"
                }],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.87,
                    "deg": 214.039
                },
                "rain": {
                    "3h": 9.375
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-26 06:00:00"
            }, {
                "dt": 1558861200,
                "main": {
                    "temp": 295.1,
                    "temp_min": 295.1,
                    "temp_max": 295.1,
                    "pressure": 1003.4,
                    "sea_level": 1003.4,
                    "grnd_level": 1003.24,
                    "humidity": 90,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "小雨",
                    "icon": "10d"
                }],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.74,
                    "deg": 198.504
                },
                "rain": {
                    "3h": 1.25
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-05-26 09:00:00"
            }],
            "city": {
                "id": 1798524,
                "name": "Pudong",
                "coord": {
                    "lat": 31.2218,
                    "lon": 121.5387
                },
                "country": "CN",
                "population": 1000
            }
        }



    }
})





