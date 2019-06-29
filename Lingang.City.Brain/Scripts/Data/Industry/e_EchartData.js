define(["config"], function (con) {
    return {
        /***************************产业-Echart数据*****************************/
        //产业竞争力
        cyjzlData: {
            "auth": {},
            "data": [{
                "score": "67",
                "model_item_code": "1",
                "model_item_name": "产业聚集性",
                "stand_all_score": "56",
                "region_co": "1",
                "id": 1
            }, {
                "score": "35",
                "model_item_code": "2",
                "model_item_name": "规模竞争力",
                "stand_all_score": "56",
                "region_co": "1",
                "id": 4
            }, {
                "score": "40",
                "model_item_code": "3",
                "model_item_name": "技术领先性",
                "stand_all_score": "56",
                "region_co": "1",
                "id": 7
            }, {
                "score": "35",
                "model_item_code": "4",
                "model_item_name": "产业均衡性",
                "stand_all_score": "56",
                "region_co": "1",
                "id": 10
            }, {
                "score": "42",
                "model_item_code": "5",
                "model_item_name": "产业前瞻性",
                "stand_all_score": "56",
                "region_co": "1",
                "id": 13
            }],
            "errCode": 0,
            "errMsg": "SUCCESS"
        },
        //企业变化趋势
        qybhqsData: {
            "auth": {},
            "data": [{
                "year": 2014,
                "COUNT": 19289
            }, {
                "year": 2015,
                "COUNT": 29964
            }, {
                "year": 2016,
                "COUNT": 43602
            }, {
                "year": 2017,
                "COUNT": 58440
            }, {
                "year": 2018,
                "COUNT": 67825
            }],
            "errCode": 0,
            "errMsg": "SUCCESS"
        },
        //税收变化趋势数据
        ssbhqsData: {
            "auth": {},
            "data": [{
                "year": 2014,
                "SUM(ent.total_tax)": 0
            }, {
                "year": 2015,
                "SUM(ent.total_tax)": 2.59550824845E9
            }, {
                "year": 2016,
                "SUM(ent.total_tax)": 4.45556773133E9
            }, {
                "year": 2017,
                "SUM(ent.total_tax)": 6.04873637627E9
            }, {
                "year": 2018,
                "SUM(ent.total_tax)": 7.00211749584E9
            }],
            "errCode": 0,
            "errMsg": "SUCCESS"
        },
        //固投变化趋势数据
        gtbhqsData: {
            "errorCode": "0",
            "errorMessage": "成功",
            "resultType": "0",
            "data": {
                "investmentInfo": {
                    "2010年": "1045301万元",
                    "2011年": "1237896万元",
                    "2012年": "1424350万元",
                    "2013年": "1315789万元",
                    "2014年": "1159981万元",
                    "2015年": "1125426万元",
                    "2016年": "1132626万元",
                    "2017年": "1217097万元",
                    "2009年": "1000957万元"
                }
            }
        },
        //就业机会数据
        jyjhbhqsData: {
            "auth": {},
            "data": [{
                "year": 2014,
                "totality": 19289
            }, {
                "year": 2015,
                "totality": 29964
            }, {
                "year": 2016,
                "totality": 43602
            }, {
                "year": 2017,
                "totality": 58440
            }, {
                "year": 2018,
                "totality": 67825
            }],
            "errCode": 0,
            "errMsg": "SUCCESS"
        }
,
        //薪资水平数据
        xzspbhqsData: {
            "auth": {},
            "data": [{
                "year": 2018,
                "salaryTotality": 1995445.8016
            }, {
                "year": 2017,
                "salaryTotality": 1906987.5516
            }, {
                "year": 2016,
                "salaryTotality": 1571281.5315
            }, {
                "year": 2015,
                "salaryTotality": 1158501.9221
            }, {
                "year": 2014,
                "salaryTotality": 851601.9574
            }],
            "errCode": 0,
            "errMsg": "SUCCESS"
        },
        //高层次人才数据
        gccrcbhqsData: {
            "auth": {},
            "data": [{
                "年份": 2014,
                "高层次人才数": 6
            }, {
                "年份": 2015,
                "高层次人才数": 8
            }, {
                "年份": 2016,
                "高层次人才数": 12
            }, {
                "年份": 2017,
                "高层次人才数": 12
            }, {
                "年份": 2018,
                "高层次人才数": 17
            }],
            "errCode": 0,
            "errMsg": "SUCCESS"
        },
        //战略新兴产业结构
        zlxxcyjgData: [{
            "2019": [{
                "rate": 0.014766201804757998,
                "industry": "数字创意产业",
                "entConut": 36
            }, {
                "rate": 0.26538146021328957,
                "industry": "新一代信息技术产业",
                "entConut": 647
            }, {
                "rate": 0.07957342083675144,
                "industry": "新材料产业",
                "entConut": 194
            }, {
                "rate": 0.013535684987694831,
                "industry": "新能源产业",
                "entConut": 33
            }, {
                "rate": 0.05701394585726005,
                "industry": "新能源汽车产业",
                "entConut": 139
            }, {
                "rate": 0.3490566037735849,
                "industry": "生物产业",
                "entConut": 851
            }, {
                "rate": 0.006562756357670222,
                "industry": "相关服务业",
                "entConut": 16
            }, {
                "rate": 0.05701394585726005,
                "industry": "节能环保产业",
                "entConut": 139
            }, {
                "rate": 0.15709598031173092,
                "industry": "高端装备制造产业",
                "entConut": 383
            }]
        }],
        //风控雷达
        fkldData:{
	        "totalRecords": 231934,
	        "舆情风险": {
		        "business": 279,
		        "records": 588,
		        "list": [{
			        "business": 26,
			        "records": 41,
			        "name": "公司品牌"
		        }, {
			        "business": 33,
			        "records": 42,
			        "name": "企业高管"
		        }, {
			        "business": 117,
			        "records": 284,
			        "name": "产品品质"
		        }, {
			        "business": 103,
			        "records": 221,
			        "name": "服务质量"
		        }]
	        },
	        "经营风险": {
		        "business": 27973,
		        "records": 163390,
		        "list": [{
			        "business": 24976,
			        "records": 142790,
			        "name": "工商变更"
		        }, {
			        "business": 1,
			        "records": 10574,
			        "name": "经营异常"
		        }, {
			        "business": 1,
			        "records": 23,
			        "name": "股权冻结"
		        }, {
			        "business": 140,
			        "records": 372,
			        "name": "股权质押"
		        }, {
			        "business": 2625,
			        "records": 9323,
			        "name": "欠税公告"
		        }, {
			        "business": 217,
			        "records": 281,
			        "name": "纳税非正常户"
		        }, {
			        "business": 13,
			        "records": 27,
			        "name": "涉税处罚"
		        }]
	        },
	        "totalBusiness": 68573,
	        "税收异常": {
		        "business": 33111,
		        "records": 35070,
		        "list": [{
			        "business": 5826,
			        "records": 6422,
			        "name": "企业所得税"
		        }, {
			        "business": 11960,
			        "records": 13003,
			        "name": "增值税异常"
		        }, {
			        "business": 1554,
			        "records": 1574,
			        "name": "营业税异常"
		        }, {
			        "business": 10,
			        "records": 10,
			        "name": "消费税"
		        }, {
			        "business": 327,
			        "records": 334,
			        "name": "房产税"
		        }, {
			        "business": 99,
			        "records": 99,
			        "name": "车船使用税"
		        }, {
			        "business": 5705,
			        "records": 5970,
			        "name": "印花税"
		        }, {
			        "business": 7630,
			        "records": 7658,
			        "name": "城建税"
		        }]
	        },
	        "司法监管": {
		        "business": 7210,
		        "records": 32886,
		        "list": [{
			        "business": 728,
			        "records": 2044,
			        "name": "失信信息"
		        }, {
			        "business": 2613,
			        "records": 8907,
			        "name": "执行信息"
		        }, {
			        "business": 752,
			        "records": 2741,
			        "name": "案件流程"
		        }, {
			        "business": 1362,
			        "records": 7349,
			        "name": "裁判文书"
		        }, {
			        "business": 35,
			        "records": 44,
			        "name": "查封冻结"
		        }, {
			        "business": 179,
			        "records": 778,
			        "name": "法院公告"
		        }, {
			        "business": 1526,
			        "records": 10993,
			        "name": "开庭公告"
		        }, {
			        "business": 15,
			        "records": 30,
			        "name": "海关处罚"
		        }]
	        }
        },
        centernumberData: {
	            total: 123452,
	            potential: 1221,
	            invested: 23232,
	            abnormal: 1
            }
    }
})





