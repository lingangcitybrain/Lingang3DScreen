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

        //街面\工地巡查员信息
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
        }
    }
})





