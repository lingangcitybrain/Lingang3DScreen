define(["config"], function (con) {
    return {
        /***************************产业-海创园-Echart数据*****************************/

        //招商雷达数据
        zsldData:{
	        "相关服务产业": {
		        "招商雷达": 26,
		        "产业数据": "{\"number\":0,\"industry\":\"相关服务产业\",\"region\":\"上海市\"}",
		        "主要投资机构": " ",
		        "明星企业": "上海浦海测绘有限公司,上海拔都资产管理有限公司,上海日熙国际货物运输代理有限公司"
	        },
	        "新能源产业": {
		        "招商雷达": 1,
		        "产业数据": "{\"number\":34,\"industry\":\"新能源产业\",\"region\":\"上海市\"}",
		        "主要投资机构": " ",
		        "明星企业": "上海雄淼船舶机械有限公司,电管家能源管理(上海)有限公司临港分公司,上海虔瑞电力工程有限公司"
	        },
	        "新能源汽车": {
		        "招商雷达": 5,
		        "产业数据": "{\"number\":131,\"industry\":\"新能源汽车\",\"region\":\"上海市\"}",
		        "主要投资机构": " ",
		        "明星企业": "上海新旺汽车配件厂,上海振东阀门有限公司,上海沃霸压缩机有限公司"
	        },
	        "生物产业": {
		        "招商雷达": 35,
		        "产业数据": "{\"number\":832,\"industry\":\"生物产业\",\"region\":\"上海市\"}",
		        "主要投资机构": " ",
		        "明星企业": "上海辰清表面技术有限公司,上海风羽电子信息科技有限公司,上海威诗信息科技有限公司"
	        },
	        "高端装备制造产业": {
		        "招商雷达": 15,
		        "产业数据": "{\"number\":365,\"industry\":\"高端装备制造产业\",\"region\":\"上海市\"}",
		        "主要投资机构": " ",
		        "明星企业": "上海才应五金机械厂,上海南汇成龙五金厂,上海奔究电子科技有限公司"
	        },
	        "信息技术产业": {
		        "招商雷达": 5,
		        "产业数据": "{\"number\":625,\"industry\":\"信息技术产业\",\"region\":\"上海市\"}",
		        "主要投资机构": "上海载和网络科技有限公司,上海遇象网络科技有限公司",
		        "明星企业": "上海汉禾庄译电子科技有限公司,上海友梅电子有限公司,上海智关信息科技有限公司"
	        },
	        "节能环保产业": {
		        "招商雷达": 5,
		        "产业数据": "{\"number\":134,\"industry\":\"节能环保产业\",\"region\":\"上海市\"}",
		        "主要投资机构": " ",
		        "明星企业": "上海同力水利工程有限公司,上海惠瀛制冷设备有限公司,上海品施税务师事务所有限公司"
	        },
	        "数字创意产业": {
		        "招商雷达": 1,
		        "产业数据": "{\"number\":36,\"industry\":\"数字创意产业\",\"region\":\"上海市\"}",
		        "主要投资机构": " ",
		        "明星企业": "上海秋霞圃文化传播有限公司,上海纪录者文化艺术有限公司,上海浦东新区彭镇影剧院"
	        },
	        "新材料产业": {
		        "招商雷达": 7,
		        "产业数据": "{\"number\":186,\"industry\":\"新材料产业\",\"region\":\"上海市\"}",
		        "主要投资机构": " ",
		        "明星企业": "上海耀圣新型墙体材料厂,上海肖奕电器设备厂,上海点创金属制品有限公司"
	        }
        },

        //招商漏斗数据
        zsFunnelData: [{
	        "id": 1,
	        "investmentValue": 5702.93,
	        "successedMerchantsProjects": 2764,
	        "totalMerchantsProjects": 3158,
	        "updateTime": "2019-03-12T11:13:38.000+0000",
	        "companyCount": "61",
	        "tax": 18554.5,
	        "servicesCount": 310,
	        "outputValue": 520687.98
        }],

        //停车服务数据
        tcfwData: {
            "auth": {},
            "data": [
                {
                    "date": "03/13",
                    "value": 7122
                },
                {
                    "date": "03/14",
                    "value": 6512
                },
                {
                    "date": "03/15",
                    "value": 4132
                },
                {
                    "date": "03/16",
                    "value": 6666
                },
                {
                    "date": "03/17",
                    "value": 5465
                },
                {
                    "date": "03/18",
                    "value": 4854
                },
                {
                    "date": "03/19",
                    "value": 7777
                },
                {
                    "date": "03/20",
                    "value": 5656
                }
            ],
            "errCode": 0,
            "errMsg": "SUCCESS"
        },
        //无人驾驶接驳车数据
        wrjsData: {
            "auth": {},
            "data": [
                {
                    "date": "03/13",
                    "value": 45
                },
                {
                    "date": "03/14",
                    "value": 30
                },
                {
                    "date": "03/15",
                    "value": 60
                },
                {
                    "date": "03/16",
                    "value": 20
                },
                {
                    "date": "03/17",
                    "value": 10
                },
                {
                    "date": "03/18",
                    "value": 70
                },
                {
                    "date": "03/19",
                    "value": 40
                },
                {
                    "date": "03/20",
                    "value": 60
                }
            ],
            "errCode": 0,
            "errMsg": "SUCCESS"
        },
        //中间大数字数据
        bigNumData: {},

        //智慧物业维修数据
        zhwyRepairData: {
            "appid": "8",
            "groupid": 1553961520429,
            "timestamp": 1553961520429,
            "todayapplycount": "73",
            "todayholdoncount": "50",
            "todaywaitrepaircount": "24",
            "yesterdayreoairdistribution": "[{\"count\":24,\"type\":1},{\"count\":25,\"type\":2},{\"count\":27,\"type\":3},{\"count\":30,\"type\":4}]",
            "todayrepaircount": "50"
        },   
        
        //智慧物业巡检数据
        zhwyInspectData: {
            "appid": "9",
            "groupid": 1553961520385,
            "timestamp": 1553961520385,
            "todayuncheck": "36",
            "todaychecked": "20",
            "lastdaycompleterate": "99",
            "todaycompleterate": "58",
            "weekaveragerate": "50.35"
        },

        //智慧能耗数据
        zhnhData: {
            "appid": "11",
            "groupid": 1553961520273,
            "timestamp": 1553961520273,
            "dailyenergy": "340",
            "monthenergy": "1000",
            "yearenergy": "10000",
            "dailyenergytop": "30",
            "lastdailyenergy": "[{\"energy\":\"10\",\"hour\":\"0\"},{\"energy\":\"10\",\"hour\":\"1\"},{\"energy\":\"10\",\"hour\":\"2\"},{\"energy\":\"10\",\"hour\":\"3\"},{\"energy\":\"10\",\"hour\":\"4\"},{\"energy\":\"15\",\"hour\":\"5\"},{\"energy\":\"15\",\"hour\":\"6\"},{\"energy\":\"15\",\"hour\":\"7\"},{\"energy\":\"15\",\"hour\":\"8\"},{\"energy\":\"15\",\"hour\":\"9\"},{\"energy\":\"20\",\"hour\":\"10\"},{\"energy\":\"30\",\"hour\":\"11\"},{\"energy\":\"20\",\"hour\":\"12\"},{\"energy\":\"20\",\"hour\":\"13\"},{\"energy\":\"15\",\"hour\":\"14\"},{\"energy\":\"15\",\"hour\":\"15\"},{\"energy\":\"15\",\"hour\":\"16\"},{\"energy\":\"15\",\"hour\":\"17\"},{\"energy\":\"15\",\"hour\":\"18\"},{\"energy\":\"10\",\"hour\":\"19\"},{\"energy\":\"10\",\"hour\":\"20\"},{\"energy\":\"10\",\"hour\":\"21\"},{\"energy\":\"10\",\"hour\":\"22\"},{\"energy\":\"10\",\"hour\":\"23\"}]",
            "lastmonthrank": "[{\"buildingname\":\"A\",\"energy\":\"100\"},{\"buildingname\":\"B\",\"energy\":\"90\"},{\"buildingname\":\"C\",\"energy\":\"80\"}]",
            "unitenergyrank": "[{\"buildingname\":\"A\",\"energy\":\"100\"},{\"buildingname\":\"B\",\"energy\":\"90\"},{\"buildingname\":\"C\",\"energy\":\"85\"}]",
            "commonsizeanalysis": "[{\"currentenergy\":\"950\",\"currentmonth\":\"1\",\"lastenergy\":\"900\",\"lastmonth\":\"1\"},{\"currentenergy\":\"990\",\"currentmonth\":\"2\",\"lastenergy\":\"880\",\"lastmonth\":\"2\"},{\"currentenergy\":\"1000\",\"currentmonth\":\"3\",\"lastenergy\":\"800\",\"lastmonth\":\"3\"}]",
            "chainratioanalysis": "[{\"energy\":\"950\",\"month\":\"1\"},{\"energy\":\"990\",\"month\":\"2\"},{\"energy\":\"1000\",\"month\":\"3\"}]"
        },


        //事件统计数据
        sjtjData: [
                {
                    "id": 1,
                    "category": "一卡通",
                    "eventName": "[一卡通] 申请开卡",
                    "eventTime": "2019-03-07T14:34:00.000+0000",
                    "eventNo": "FWD20190307174803",
                    "solutionTime": "2019-03-08T17:48:00.000+0000",
                    "inputTime": "2019-03-12T11:13:27.000+0000",
                    "solver": "刘青",
                    "updateTime": "2019-03-09T17:48:00.000+0000",
                    "status": "已完成"
                },
	            {
	                "id": 2,
	                "category": "企业开办",
	                "eventName": "[企业开办]上海凯来仪器有限公司",
	                "eventTime": "2019-03-07T14:00:00.000+0000",
	                "eventNo": "FWD20190307160038",
	                "solutionTime": "2019-03-08T16:00:00.000+0000",
	                "inputTime": "2019-03-12T11:13:27.000+0000",
	                "solver": "周爱国",
	                "updateTime": "2019-03-09T16:00:00.000+0000",
	                "status": "已完成"
	            },
	            {
	                "id": 3,
	                "category": "入驻审批",
	                "eventName": "[入驻审批] 上海钠威船舶工程有限公司",
	                "eventTime": "2019-01-31T14:13:00.000+0000",
	                "eventNo": "FWD20190131140337",
	                "solutionTime": "2019-02-01T14:03:00.000+0000",
	                "inputTime": "2019-03-12T11:13:27.000+0000",
	                "solver": "张瑞鑫",
	                "updateTime": "2019-02-02T14:03:00.000+0000",
	                "status": "已完成"
	            },
	            {
	                "id": 4,
	                "category": "入驻审批",
	                "eventName": "[入驻审批]禹奕智能科技（上海）有限公司",
	                "eventTime": "2018-12-10T10:00:00.000+0000",
	                "eventNo": "FWD20181210140034",
	                "solutionTime": "2018-12-11T14:00:00.000+0000",
	                "inputTime": "2019-03-12T11:13:27.000+0000",
	                "solver": "张瑞鑫",
	                "updateTime": "2018-12-12T14:00:00.000+0000",
	                "status": "已完成"
	            },
	            {
	                "id": 5,
	                "category": "装修申请",
	                "eventName": "[装修申请]装修办公区域",
	                "eventTime": "2018-11-15T09:20:00.000+0000",
	                "eventNo": "FWD20181115093046",
	                "solutionTime": "2018-11-16T09:30:00.000+0000",
	                "inputTime": "2019-03-12T11:13:27.000+0000",
	                "solver": "张晓明",
	                "updateTime": "2018-11-17T09:30:00.000+0000",
	                "status": "已完成"
	            },
	            {
	                "id": 6,
	                "category": "物业报修",
	                "eventName": "[物业报修]自用部分-天花板",
	                "eventTime": "2018-11-15T09:33:00.000+0000",
	                "eventNo": "FWD20181115093022",
	                "solutionTime": "2018-11-16T09:30:00.000+0000",
	                "inputTime": "2019-03-12T11:13:27.000+0000",
	                "solver": "李艳",
	                "updateTime": "2018-11-17T09:30:00.000+0000",
	                "status": "已完成"
	            },
	            {
	                "id": 7,
	                "category": "装修申请",
	                "eventName": "[装修申请]天花板装修",
	                "eventTime": "2018-11-14T15:36:00.000+0000",
	                "eventNo": "FWD20181114183644",
	                "solutionTime": "2018-11-15T18:36:00.000+0000",
	                "inputTime": "2019-03-12T11:13:27.000+0000",
	                "solver": "张瑞鑫",
	                "updateTime": "2018-11-16T18:36:00.000+0000",
	                "status": "已完成"
	            },
	            {
	                "id": 8,
	                "category": "一卡通",
	                "eventName": "[一卡通] 申请开卡",
	                "eventTime": "2018-11-14T18:31:00.000+0000",
	                "eventNo": "FWD20181114183523",
	                "solutionTime": "2018-11-15T18:35:00.000+0000",
	                "inputTime": "2019-03-12T11:13:27.000+0000",
	                "solver": "张瑞鑫",
	                "updateTime": "2018-11-16T18:35:00.000+0000",
	                "status": "已完成"
	            },
	            {
	                "id": 9,
	                "category": "企业开办",
	                "eventName": "[企业开办]上海宜澳海洋科技有限公司",
	                "eventTime": "2018-11-14T18:13:00.000+0000",
	                "eventNo": "FWD20181114183322",
	                "solutionTime": "2018-11-15T18:33:00.000+0000",
	                "inputTime": "2019-03-12T11:13:28.000+0000",
	                "solver": "张晓明",
	                "updateTime": "2018-11-16T18:33:00.000+0000",
	                "status": "已完成"
	            },
	            {
	                "id": 10,
	                "category": "入驻审批",
	                "eventName": "[入驻审批] 上海亚曼光电科技有限公司",
	                "eventTime": "2018-10-10T12:32:00.000+0000",
	                "eventNo": "FWD20181010113212",
	                "solutionTime": "2018-10-11T11:32:00.000+0000",
	                "inputTime": "2019-03-12T11:13:28.000+0000",
	                "solver": "刘青",
	                "updateTime": null,
	                "status": "处理中"
	            },
	            {
	                "id": 11,
	                "category": "装修申请",
	                "eventName": "[装修申请]装修办公区域",
	                "eventTime": "2018-08-30T14:20:00.000+0000",
	                "eventNo": "FWD20180830173011",
	                "solutionTime": "2018-08-31T17:30:00.000+0000",
	                "inputTime": "2019-03-12T11:13:28.000+0000",
	                "solver": "李明",
	                "updateTime": null,
	                "status": "处理中"
	            },
	            {
	                "id": 12,
	                "category": "物业报修",
	                "eventName": "[物业报修]公共区域-强电-指示牌灯灭",
	                "eventTime": "2019-02-27T12:45:00.000+0000",
	                "eventNo": "R20190227153615",
	                "solutionTime": "2019-02-28T15:36:00.000+0000",
	                "inputTime": "2019-03-12T11:13:28.000+0000",
	                "solver": "张清",
	                "updateTime": "2019-03-01T15:36:00.000+0000",
	                "status": "已完成"
	            },
	            {
	                "id": 13,
	                "category": "物业报修",
	                "eventName": "[物业报修]租赁区域-给排水-滴水",
	                "eventTime": "2019-02-27T15:11:00.000+0000",
	                "eventNo": "R20190227161101",
	                "solutionTime": "2019-02-28T16:11:00.000+0000",
	                "inputTime": "2019-03-12T11:13:28.000+0000",
	                "solver": "马立良",
	                "updateTime": null,
	                "status": "处理中"
	            },
	            {
	                "id": 14,
	                "category": "物业报修",
	                "eventName": "[物业报修]公共区域-强电-泛光照明坏",
	                "eventTime": "2019-02-27T20:14:00.000+0000",
	                "eventNo": "R20190227211407",
	                "solutionTime": "2019-02-28T21:14:00.000+0000",
	                "inputTime": "2019-03-12T11:13:28.000+0000",
	                "solver": "张清",
	                "updateTime": null,
	                "status": "处理中"
	            },
	            {
	                "id": 15,
	                "category": "物业报修",
	                "eventName": "[物业报修]公共区域-强电-强电",
	                "eventTime": "2019-02-28T10:12:00.000+0000",
	                "eventNo": "R20190228102828",
	                "solutionTime": "2019-03-01T10:28:00.000+0000",
	                "inputTime": "2019-03-12T11:13:28.000+0000",
	                "solver": "王报",
	                "updateTime": "2019-03-02T10:28:00.000+0000",
	                "status": "已完成"
	            },
	            {
	                "id": 16,
	                "category": "物业报修",
	                "eventName": "[物业报修]租赁区域-综合维修-综合维修",
	                "eventTime": "2019-02-28T11:34:00.000+0000",
	                "eventNo": "R20190228110236",
	                "solutionTime": "2019-03-01T11:02:00.000+0000",
	                "inputTime": "2019-03-12T11:13:28.000+0000",
	                "solver": "孙腾涛",
	                "updateTime": null,
	                "status": "处理中"
	            },
	            {
	                "id": 17,
	                "category": "物业报修",
	                "eventName": "[物业报修]公共区域-综合维修-综合维修",
	                "eventTime": "2019-02-28T11:34:00.000+0000",
	                "eventNo": "R20190228112447",
	                "solutionTime": "2019-03-01T11:24:00.000+0000",
	                "inputTime": "2019-03-12T11:13:28.000+0000",
	                "solver": "马立良",
	                "updateTime": "2019-03-02T11:24:00.000+0000",
	                "status": "已完成"
	            },
	            {
	                "id": 18,
	                "category": "物业报修",
	                "eventName": "[物业报修]公共区域-强电-强电",
	                "eventTime": "2019-02-28T12:53:00.000+0000",
	                "eventNo": "R20190228125223",
	                "solutionTime": "2019-03-01T12:52:00.000+0000",
	                "inputTime": "2019-03-12T11:13:28.000+0000",
	                "solver": "张清",
	                "updateTime": "2019-03-02T12:52:00.000+0000",
	                "status": "已完成"
	            },
	            {
	                "id": 19,
	                "category": "物业报修",
	                "eventName": "[物业报修]公共区域-给排水-给排水",
	                "eventTime": "2019-02-28T14:03:00.000+0000",
	                "eventNo": "R20190228140954",
	                "solutionTime": "2019-03-01T14:09:00.000+0000",
	                "inputTime": "2019-03-12T11:13:28.000+0000",
	                "solver": "马立良",
	                "updateTime": "2019-03-02T14:09:00.000+0000",
	                "status": "已完成"
	            },
	            {
	                "id": 20,
	                "category": "物业报修",
	                "eventName": "[物业报修]公共区域-给排水-坐便器堵",
	                "eventTime": "2019-02-28T15:17:00.000+0000",
	                "eventNo": "R20190228153742",
	                "solutionTime": "2019-03-01T15:37:00.000+0000",
	                "inputTime": "2019-03-12T11:13:28.000+0000",
	                "solver": "马立良",
	                "updateTime": "2019-03-02T15:37:00.000+0000",
	                "status": "已完成"
	            }
            ]
    }
})