﻿define(["config"], function (con) {
    return {
        //地铁站、公交车站、停车场点位数据
        StationData: [
                { id: "1", pos: "121.925563,30.90983658,0.000122", stationname: "滴水湖地铁站", stationtype: "1" },
                { id: "2", pos: "121.906183,30.92654566,0.000122", stationname: "临港大道地铁站", stationtype: "1" },

                { id: "3", pos: "121.8989564,30.92145585,0.000122", stationname: "沪城环路杞青路", stationtype: "2" },
                { id: "4", pos: "121.9056808,30.9263962,0.000122", stationname: "临港大道沪城环路", stationtype: "2" },
                { id: "5", pos: "121.9088196,30.92500654,0.000122", stationname: "临港大道地铁站公交车站", stationtype: "2" },

                { id: "6", pos: "121.9007788,30.89721564,0.000122", stationname: "港城新天地停车场", stationtype: "3" },
                { id: "7", pos: "121.9077025,30.92536302,0.000122", stationname: "临港大道停车场", stationtype: "3" },
                { id: "8", pos: "121.9143566,30.91002489,0.000122", stationname: "雪绒花停车场", stationtype: "3" }

                //{ id: "9", pos: "121.901958,30.915565,-1.000122", stationname: "海昌海洋公园", stationtype: "4" }
        ],
        BusData: {
            "auth": {},
            "data": [{
                "dz": "上海市浦东新区沪城环路银飞路（公交站）",
                "zdmc": "沪城环路银飞路",
                "jd": "121.901505",
                "id": "62181",
                "dir": "正向",
                "wd": "30.91674",
                "gcbc": "140"
            }, { "dz": "上海市浦东新区沪城环路杞青路（公交站）", "zdmc": "沪城环路杞青路", "jd": "121.903831", "id": "62182", "dir": "正向", "wd": "30.9202", "gcbc": "140" }, { "dz": "上海市浦东新区临港大道沪城环路（公交站）", "zdmc": "临港大道沪城环路", "jd": "121.90984", "id": "62183", "dir": "正向", "wd": "30.924106", "gcbc": "140" }, { "dz": "上海市浦东新区环湖西三路临港大道（公交站）", "zdmc": "环湖西三路临港大道", "jd": "121.922867", "id": "62184", "dir": "正向", "wd": "30.911476", "gcbc": "140" }, { "dz": "上海市浦东新区雪绒花路夏栎路（公交站）", "zdmc": "雪绒花路夏栎路", "jd": "121.919807", "id": "62185", "dir": "正向", "wd": "30.910004", "gcbc": "140" }, { "dz": "上海市浦东新区银飞路D港公交枢纽站（公交站）", "zdmc": "银飞路D港公交枢纽站", "jd": "121.903976", "id": "62180", "dir": "正向", "wd": "30.915356", "gcbc": "140" }, { "dz": "上海市浦东新区银飞路D港公交枢纽站（公交站）", "zdmc": "银飞路D港公交枢纽站", "jd": "121.903911", "id": "62190", "dir": "反向", "wd": "30.915316", "gcbc": "140" }, { "dz": "上海市浦东新区上元路沪城环路（共享区）（公交站）", "zdmc": "上元路沪城环路（共享区）", "jd": "121.903542", "id": "62221", "dir": "正向", "wd": "30.882353", "gcbc": "116" }, { "dz": "上海市浦东新区方竹路沪城环路（公交站）", "zdmc": "方竹路沪城环路", "jd": "121.900528", "id": "62247", "dir": "正向", "wd": "30.894318", "gcbc": "116" }, { "dz": "上海市浦东新区方竹路茉莉路（公交站）", "zdmc": "方竹路茉莉路", "jd": "121.905417", "id": "62240", "dir": "正向", "wd": "30.894299", "gcbc": "116" }], "errCode": 0, "errMsg": "SUCCESS"
        },
        BusstopData:{
            'data': [
                {
                  "id": 1,
                  "zdmc": "沪城环路银飞路",
                  "direction": "正向",
                  "name": "1135路",
                  "stopdis": "1",
                  "distance": "586",
                  "time": "77",
                  "lineid": "180926",
                  "rksj": "2019-08-31 11:08:00",
                  "jd": "121.89742340509501",
                  "wd": "30.91911198675658"
                },
                {
                  "id": 2,
                  "zdmc": "沪城环路杞青路",
                  "direction": "正向",
                  "name": "1135路",
                  "stopdis": "1",
                  "distance": "322",
                  "time": "42",
                  "lineid": "180926",
                  "rksj": "2019-08-31 11:14:00",
                  "jd": "121.89974992881908",
                  "wd": "30.922569843472534"
                },
                {
                  "id": 3,
                  "zdmc": "临港大道沪城环路",
                  "direction": "正向",
                  "name": "1135路",
                  "stopdis": "2",
                  "distance": "1122",
                  "time": "148",
                  "lineid": "180926",
                  "rksj": "2019-08-31 11:14:00",
                  "jd": "121.90575940331541",
                  "wd": "30.92647216905818"
                },
                {
                  "id": 4,
                  "zdmc": "环湖西三路临港大道",
                  "direction": "正向",
                  "name": "1135路",
                  "stopdis": "1",
                  "distance": "129",
                  "time": "17",
                  "lineid": "180926",
                  "rksj": "2019-08-31 11:14:00",
                  "jd": "121.91878268475439",
                  "wd": "30.913841105716788"
                },
                {
                  "id": 5,
                  "zdmc": "雪绒花路夏栎路",
                  "direction": "正向",
                  "name": "1135路",
                  "stopdis": "2",
                  "distance": "729",
                  "time": "96",
                  "lineid": "180926",
                  "rksj": "2019-08-31 11:14:00",
                  "jd": "121.91572471380768",
                  "wd": "30.912372664124078"
                },
                {
                  "id": 6,
                  "zdmc": "方竹路茉莉路",
                  "direction": "反向",
                  "name": "临港4路",
                  "stopdis": "5",
                  "distance": "2802",
                  "time": "348",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:14:01",
                  "jd": "121.9036937550597",
                  "wd": "30.89670638341082"
                },
                {
                  "id": 7,
                  "zdmc": "茉莉路方竹路",
                  "direction": "正向",
                  "name": "临港4路",
                  "stopdis": "1",
                  "distance": "105",
                  "time": "14",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:02:00",
                  "jd": "121.9026755651726",
                  "wd": "30.89767106707947"
                },
                {
                  "id": 8,
                  "zdmc": "茉莉路申港大道",
                  "direction": "正向",
                  "name": "临港4路",
                  "stopdis": "2",
                  "distance": "505",
                  "time": "70",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:02:00",
                  "jd": "121.9026753047917",
                  "wd": "30.900884178181656"
                },
                {
                  "id": 9,
                  "zdmc": "竹柏路茉莉路",
                  "direction": "正向",
                  "name": "临港4路",
                  "stopdis": "3",
                  "distance": "1005",
                  "time": "140",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:02:00",
                  "jd": "121.89970649171919",
                  "wd": "30.903134320567453"
                },
                {
                  "id": 10,
                  "zdmc": "竹柏路沪城环路",
                  "direction": "正向",
                  "name": "临港4路",
                  "stopdis": "1",
                  "distance": "409",
                  "time": "57",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:06:00",
                  "jd": "121.895172661374",
                  "wd": "30.903136282265553"
                },
                {
                  "id": 11,
                  "zdmc": "沪城环路花柏路",
                  "direction": "正向",
                  "name": "临港4路",
                  "stopdis": "1",
                  "distance": "567",
                  "time": "79",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:08:00",
                  "jd": "121.89367537095887",
                  "wd": "30.90880173594819"
                },
                {
                  "id": 12,
                  "zdmc": "银飞路沪城环路（海洋公园）",
                  "direction": "正向",
                  "name": "临港4路",
                  "stopdis": "1",
                  "distance": "226",
                  "time": "31",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:10:00",
                  "jd": "121.89872508183103",
                  "wd": "30.91673236801854"
                },
                {
                  "id": 13,
                  "zdmc": "银飞路沪城环路（海洋公园）",
                  "direction": "反向",
                  "name": "临港4路",
                  "stopdis": "1",
                  "distance": "469",
                  "time": "58",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:08:01",
                  "jd": "121.89872508183103",
                  "wd": "30.91673236801854"
                },
                {
                  "id": 14,
                  "zdmc": "铃兰路杞青路",
                  "direction": "正向",
                  "name": "临港4路",
                  "stopdis": "1",
                  "distance": "891",
                  "time": "124",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:12:01",
                  "jd": "121.90795099361243",
                  "wd": "30.917002871449046"
                },
                {
                  "id": 15,
                  "zdmc": "临港大道铃兰路",
                  "direction": "正向",
                  "name": "临港4路",
                  "stopdis": "1",
                  "distance": "658",
                  "time": "91",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:14:01",
                  "jd": "121.91328413835774",
                  "wd": "30.921610050066796"
                },
                {
                  "id": 16,
                  "zdmc": "临港大道地铁站",
                  "direction": "正向",
                  "name": "临港4路",
                  "stopdis": "2",
                  "distance": "1158",
                  "time": "161",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:14:01",
                  "jd": "121.90857825419187",
                  "wd": "30.92492188914868"
                },
                {
                  "id": 17,
                  "zdmc": "铃兰路临港大道",
                  "direction": "反向",
                  "name": "临港4路",
                  "stopdis": "1",
                  "distance": "962",
                  "time": "119",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:04:00",
                  "jd": "121.91176280528724",
                  "wd": "30.920469739164535"
                },
                {
                  "id": 18,
                  "zdmc": "铃兰路杞青路",
                  "direction": "反向",
                  "name": "临港4路",
                  "stopdis": "2",
                  "distance": "1362",
                  "time": "169",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:04:01",
                  "jd": "121.90885276266972",
                  "wd": "30.918050818648464"
                },
                {
                  "id": 19,
                  "zdmc": "杞青路铃兰路",
                  "direction": "反向",
                  "name": "临港4路",
                  "stopdis": "1",
                  "distance": "495",
                  "time": "61",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:06:01",
                  "jd": "121.90793799362184",
                  "wd": "30.917024864428893"
                },
                {
                  "id": 20,
                  "zdmc": "沪城环路花柏路",
                  "direction": "反向",
                  "name": "临港4路",
                  "stopdis": "1",
                  "distance": "1139",
                  "time": "141",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:12:01",
                  "jd": "121.89307217526395",
                  "wd": "30.90669586613953"
                },
                {
                  "id": 21,
                  "zdmc": "竹柏路沪城环路",
                  "direction": "反向",
                  "name": "临港4路",
                  "stopdis": "1",
                  "distance": "1302",
                  "time": "162",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:14:01",
                  "jd": "121.89547181390353",
                  "wd": "30.903138311136072"
                },
                {
                  "id": 22,
                  "zdmc": "竹柏路茉莉路",
                  "direction": "反向",
                  "name": "临港4路",
                  "stopdis": "2",
                  "distance": "1702",
                  "time": "211",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:14:01",
                  "jd": "121.90041968535363",
                  "wd": "30.903124250134887"
                },
                {
                  "id": 23,
                  "zdmc": "茉莉路竹柏路",
                  "direction": "反向",
                  "name": "临港4路",
                  "stopdis": "3",
                  "distance": "2102",
                  "time": "261",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:14:01",
                  "jd": "121.90253717204457",
                  "wd": "30.902284384757653"
                },
                {
                  "id": 24,
                  "zdmc": "茉莉路申港大道",
                  "direction": "反向",
                  "name": "临港4路",
                  "stopdis": "4",
                  "distance": "2502",
                  "time": "311",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:14:01",
                  "jd": "121.90251643703296",
                  "wd": "30.89897733434296"
                },
                {
                  "id": 25,
                  "zdmc": "方竹路沪城环路",
                  "direction": "反向",
                  "name": "临港4路",
                  "stopdis": "6",
                  "distance": "3402",
                  "time": "423",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:14:01",
                  "jd": "121.89567443596415",
                  "wd": "30.896705111935095"
                },
                {
                  "id": 26,
                  "zdmc": "沪城环路橄榄路",
                  "direction": "反向",
                  "name": "临港4路",
                  "stopdis": "7",
                  "distance": "4102",
                  "time": "510",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:14:01",
                  "jd": "121.89625717893205",
                  "wd": "30.890972517465496"
                },
                {
                  "id": 27,
                  "zdmc": "上元路沪城环路（共享区）",
                  "direction": "反向",
                  "name": "临港4路",
                  "stopdis": "8",
                  "distance": "5302",
                  "time": "660",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:14:01",
                  "jd": "121.89910180573102",
                  "wd": "30.88464221629974"
                },
                {
                  "id": 28,
                  "zdmc": "方竹路茉莉路",
                  "direction": "正向",
                  "name": "临港4路",
                  "stopdis": "2",
                  "distance": "600",
                  "time": "83",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:00:02",
                  "jd": "121.9036937550597",
                  "wd": "30.89670638341082"
                },
                {
                  "id": 29,
                  "zdmc": "方竹路沪城环路",
                  "direction": "正向",
                  "name": "临港4路",
                  "stopdis": "1",
                  "distance": "0",
                  "time": "0",
                  "lineid": "803111",
                  "rksj": "2019-08-31 11:00:02",
                  "jd": "121.89644780221332",
                  "wd": "30.89670316604484"
                },
                {
                  "id": 30,
                  "zdmc": "临港大道沪城环路",
                  "direction": "反向",
                  "name": "临港4路",
                  "stopdis": "1",
                  "distance": "796",
                  "time": "99",
                  "lineid": "803111",
                  "rksj": "2019-08-31 07:48:01",
                  "jd": "121.90575940331541",
                  "wd": "30.92647216905818"
                }
              ]
        },
        //地铁
        MetroData: {
            "Result": 2,
            "Data": [
                        { "id": "1", "type": "2", "zdmc": "滴水湖地铁站", "lng": "121.925602", "lat": "30.909453" },
                        { "id": "2", "type": "2", "zdmc": "临港大道地铁站", "lng": "121.906298", "lat": "30.92632" },
            ]
        },
        //事件
        EventData: {
            "auth": {},
            "data": [
    {
        "sjfl_id": 823,
        "sbsj": "2019-03-17 23:54:12",
        "lng": "121.912777",
        "snapshoturiwithrect": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_cropped/03d/20190317/20190317-e91e005f-0a580a000b66-0000003d-00020d62.jpg",
        "sj": "非法停车",
        "sjms": "海洋小区78单元与79单元中间绿化带上，靠近小区院墙处车辆违停,车牌号:无",
        "id": 657104,
        "state": "100",
        "snapshoturi": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_panoramic/00f/20190317/20190317-e8d05a53-0a580a000580-0000000f-00041857.jpg",
        "flmc": "非法停车",
        "DICTNAME": "待处置",
        "lat": "30.882309"
    },
    {
        "sjfl_id": 819,
        "sbsj": "2019-03-17 23:41:00",
        "lng": "121.909533",
        "snapshoturiwithrect": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_cropped/041/20190317/20190317-4fa1b04b-0a580a000ae9-00000041-0000841d.jpg",
        "sj": "疑似黑车",
        "sjms": "松萝路1号杆1号机周边疑似黑车,车牌号:沪C821PD",
        "id": 657101,
        "state": "100",
        "snapshoturi": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_panoramic/041/20190317/20190317-4f7f95ac-0a580a00084b-00000041-0003f032.jpg",
        "flmc": "疑似黑车",
        "DICTNAME": "待处置",
        "lat": "30.91182"
    },
    {
        "sjfl_id": 819,
        "sbsj": "2019-03-17 23:41:00",
        "lng": "121.908573",
        "snapshoturiwithrect": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_cropped/07e/20190317/20190317-4e130898-0a580a000e5e-0000007e-000098a5.jpg",
        "sj": "疑似黑车",
        "sjms": "临港大道/沪城环路 东向西周边疑似黑车,车牌号:沪C913PJ",
        "id": 657102,
        "state": "100",
        "snapshoturi": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_panoramic/07e/20190317/20190317-4e113724-0a580a000b66-0000007e-000334fe.jpg",
        "flmc": "疑似黑车",
        "DICTNAME": "待处置",
        "lat": "30.925196"
    },
    {
        "sjfl_id": 819,
        "sbsj": "2019-03-17 23:41:00",
        "lng": "121.900061",
        "snapshoturiwithrect": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_cropped/02f/20190317/20190317-2d2a504c-0a580a000f62-0000002f-00007350.jpg",
        "sj": "疑似黑车",
        "sjms": "沪城环路1号杆2号机周边疑似黑车,车牌号:沪C990KH",
        "id": 657103,
        "state": "100",
        "snapshoturi": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_panoramic/02f/20190317/20190317-2d12e54e-0a580a000d42-0000002f-0004bfc2.jpg",
        "flmc": "疑似黑车",
        "DICTNAME": "待处置",
        "lat": "30.914834"
    },
    {
        "sjfl_id": 819,
        "sbsj": "2019-03-17 23:11:05",
        "lng": "121.909533",
        "snapshoturiwithrect": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_cropped/041/20190317/20190317-4fa1b04b-0a580a000ae9-00000041-0000841d.jpg",
        "sj": "疑似黑车",
        "sjms": "松萝路1号杆1号机周边疑似黑车,车牌号:沪C821PD",
        "id": 657100,
        "state": "100",
        "snapshoturi": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_panoramic/041/20190317/20190317-4f7f95ac-0a580a00084b-00000041-0003f032.jpg",
        "flmc": "疑似黑车",
        "DICTNAME": "待处置",
        "lat": "30.91182"
    },
    {
        "sjfl_id": 819,
        "sbsj": "2019-03-17 23:01:50",
        "lng": "121.900061",
        "snapshoturiwithrect": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_cropped/02f/20190317/20190317-2d2a504c-0a580a000f62-0000002f-00007350.jpg",
        "sj": "疑似黑车",
        "sjms": "沪城环路1号杆2号机周边疑似黑车,车牌号:沪C990KH",
        "id": 657098,
        "state": "100",
        "snapshoturi": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_panoramic/02f/20190317/20190317-2d12e54e-0a580a000d42-0000002f-0004bfc2.jpg",
        "flmc": "疑似黑车",
        "DICTNAME": "待处置",
        "lat": "30.914834"
    },
    {
        "sjfl_id": 819,
        "sbsj": "2019-03-17 23:01:50",
        "lng": "121.908573",
        "snapshoturiwithrect": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_cropped/07e/20190317/20190317-4e130898-0a580a000e5e-0000007e-000098a5.jpg",
        "sj": "疑似黑车",
        "sjms": "临港大道/沪城环路 东向西周边疑似黑车,车牌号:沪C913PJ",
        "id": 657099,
        "state": "100",
        "snapshoturi": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_panoramic/07e/20190317/20190317-4e113724-0a580a000b66-0000007e-000334fe.jpg",
        "flmc": "疑似黑车",
        "DICTNAME": "待处置",
        "lat": "30.925196"
    },
    {
        "sjfl_id": 823,
        "sbsj": "2019-03-17 22:54:11",
        "lng": "121.912777",
        "snapshoturiwithrect": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_cropped/066/20190317/20190317-863cd809-0a580a000c6b-00000066-00024583.jpg",
        "sj": "非法停车",
        "sjms": "海洋小区78单元与79单元中间绿化带上，靠近小区院墙处车辆违停,车牌号:无",
        "id": 657097,
        "state": "100",
        "snapshoturi": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_panoramic/066/20190317/20190317-8632847c-0a580a000d42-00000066-00043bf5.jpg",
        "flmc": "非法停车",
        "DICTNAME": "待处置",
        "lat": "30.882309"
    },
    {
        "sjfl_id": 823,
        "sbsj": "2019-03-17 22:43:08",
        "lng": "121.912777",
        "snapshoturiwithrect": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_cropped/069/20190317/20190317-fb2113fd-0a580a000950-00000069-0001b31d.jpg",
        "sj": "非法停车",
        "sjms": "海洋小区78单元与79单元中间绿化带上，靠近小区院墙处车辆违停,车牌号:无",
        "id": 657096,
        "state": "100",
        "snapshoturi": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_panoramic/069/20190317/20190317-fb13e02c-0a580a000b66-00000069-00035893.jpg",
        "flmc": "非法停车",
        "DICTNAME": "待处置",
        "lat": "30.882309"
    },
    {
        "sjfl_id": 819,
        "sbsj": "2019-03-17 22:40:42",
        "lng": "121.909533",
        "snapshoturiwithrect": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_cropped/041/20190317/20190317-4fa1b04b-0a580a000ae9-00000041-0000841d.jpg",
        "sj": "疑似黑车",
        "sjms": "松萝路1号杆1号机周边疑似黑车,车牌号:沪C821PD",
        "id": 657095,
        "state": "100",
        "snapshoturi": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf/video_automobile_panoramic/041/20190317/20190317-4f7f95ac-0a580a00084b-00000041-0003f032.jpg",
        "flmc": "疑似黑车",
        "DICTNAME": "待处置",
        "lat": "30.91182"
    },
    {
        "sjfl_id": 835,
        "sbsj": "2019-03-20 08:03:36",
        "lng": "121.924381",
        "snapshoturiwithrect": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf-truck/video_automobile_cropped/06a/20190320/20190320-9ad34628-0a580a000d42-0000006a-000112eb.jpg",
        "sj": "疑似渣土车",
        "sjms": "临港大道环湖西三路以东250米疑似渣土车,车牌号:沪DB6977",
        "id": 667439,
        "state": "100",
        "snapshoturi": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf-truck/video_automobile_panoramic/06a/20190320/20190320-9ad0a99e-0a580a000f62-0000006a-00045047.jpg",
        "flmc": "疑似渣土车",
        "DICTNAME": "待处置",
        "lat": "30.911361"
    },
    {
        "sjfl_id": 835,
        "sbsj": "2019-03-20 08:19:50",
        "lng": "121.924767",
        "snapshoturiwithrect": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf-truck/video_automobile_cropped/037/20190320/20190320-df2ba6f3-0a580a000950-00000037-0001226e.jpg",
        "sj": "疑似渣土车",
        "sjms": "临港大道环湖西三路以东250米疑似渣土车,车牌号:沪DB6977",
        "id": 667452,
        "state": "100",
        "snapshoturi": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf-truck/video_automobile_panoramic/037/20190320/20190320-df2e223a-0a580a00068f-00000037-0003fc89.jpg",
        "flmc": "疑似渣土车",
        "DICTNAME": "待处置",
        "lat": "30.911573"
    },
    {
        "sjfl_id": 835,
        "sbsj": "2019-03-20 08:35:07",
        "lng": "121.92451",
        "snapshoturiwithrect": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf-truck/video_automobile_cropped/068/20190320/20190320-017c5169-0a580a00084b-00000068-0000c240.jpg",
        "sj": "疑似渣土车",
        "sjms": "临港大道环湖西三路路口以北190米疑似渣土车,车牌号:沪DB6977",
        "id": 667487,
        "state": "100",
        "snapshoturi": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf-truck/video_automobile_panoramic/068/20190320/20190320-01c1144b-0a580a000ae9-00000068-0002fa7b.jpg",
        "flmc": "疑似渣土车",
        "DICTNAME": "待处置",
        "lat": "30.912988"
    },
    {
        "sjfl_id": 835,
        "sbsj": "2019-03-20 08:35:43",
        "lng": "121.924542",
        "snapshoturiwithrect": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf-truck/video_automobile_cropped/071/20190320/20190320-16fad1ca-0a580a00068f-00000071-000126da.jpg",
        "sj": "疑似渣土车",
        "sjms": "临港大道环湖西三路以东250米疑似渣土车,车牌号:沪DB6977",
        "id": 667489,
        "state": "100",
        "snapshoturi": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf-truck/video_automobile_panoramic/071/20190320/20190320-17405102-0a580a000c6b-00000071-00043a50.jpg",
        "flmc": "疑似渣土车",
        "DICTNAME": "待处置",
        "lat": "30.911444"
    },
    {
        "sjfl_id": 835,
        "sbsj": "2019-03-20 08:35:44",
        "lng": "121.924381",
        "snapshoturiwithrect": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf-truck/video_automobile_cropped/040/20190320/20190320-183c3290-0a580a000ae9-00000040-000111f8.jpg",
        "sj": "疑似渣土车",
        "sjms": "临港大道环湖西三路以东250米疑似渣土车,车牌号:沪DB6977",
        "id": 667490,
        "state": "100",
        "snapshoturi": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf-truck/video_automobile_panoramic/06e/20190320/20190320-17ec44d1-0a580a00068f-0000006e-00046500.jpg",
        "flmc": "疑似渣土车",
        "DICTNAME": "待处置",
        "lat": "30.911361"
    },
    {
        "sjfl_id": 835,
        "sbsj": "2019-03-20 09:53:29",
        "lng": "121.917975",
        "snapshoturiwithrect": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf-truck/video_automobile_cropped/06f/20190320/20190320-f4182e8b-0a580a00084b-0000006f-0000dd33.jpg",
        "sj": "疑似渣土车",
        "sjms": "花柏路环湖西三路路口北侧疑似渣土车,车牌号:沪DB6977",
        "id": 667647,
        "state": "100",
        "snapshoturi": "http://101.132.114.31/vcs/picsearch/pictureProxy/zhlingang-stsf-truck/video_automobile_panoramic/06f/20190320/20190320-f4591738-0a580a000ae9-0000006f-00047f32.jpg",
        "flmc": "疑似渣土车",
        "DICTNAME": "待处置",
        "lat": "30.904752"
    }
            ]
        },
        //摄像头
        CameraData: {
            "offball": 162,
            "data": [{
                "qy_id": 570,
                "azdz": "滴水湖地铁站1号门",
                "dqjj": "",
                "lng": 121.93053,
                "dqjd": "",
                "qysj": "",
                "xgrq_dt": "2019-03-20 22:54:02",
                "cjrq_dt": "",
                "spy_url": "",
                "sxjjkfw": "",
                "sbbm": "31011900081326012005",
                "sbmc": "滴水湖地铁1号口",
                "ipv4": "172.101.1.226",
                "id": 7278,
                "sbzt": "ON",
                "sxjlx": 2,
                "lat": 30.907178
            }, { "qy_id": 570, "azdz": "滴水湖地铁站2号门", "dqjj": "", "lng": 121.929689, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326012006", "sbmc": "滴水湖地铁2号口", "ipv4": "172.101.1.227", "id": 7279, "sbzt": "ON", "sxjlx": 2, "lat": 30.906457 }, { "qy_id": 570, "azdz": "滴水湖地铁站下沉广场", "dqjj": "", "lng": 121.929583, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326012007", "sbmc": "滴水湖地铁下沉广场出入口1号机", "ipv4": "172.101.1.228", "id": 7280, "sbzt": "OFF", "sxjlx": 2, "lat": 30.907245 }, { "qy_id": 499, "azdz": "滴水湖地铁站下沉广场", "dqjj": "", "lng": 121.929583, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326012008", "sbmc": "滴水湖地铁下沉广场出入口2号机", "ipv4": "172.101.1.229", "id": 7281, "sbzt": "OFF", "sxjlx": 2, "lat": 30.907245 }, { "qy_id": 566, "azdz": "临港大道地铁1号口", "dqjj": "", "lng": 121.911798, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326012001", "sbmc": "临港大道地铁1号口", "ipv4": "172.101.1.230", "id": 7282, "sbzt": "ON", "sxjlx": 2, "lat": 30.923152 }, { "qy_id": 566, "azdz": "临港大道地铁2号口", "dqjj": "", "lng": 121.911145, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326012002", "sbmc": "临港大道地铁2号口", "ipv4": "172.101.1.231", "id": 7283, "sbzt": "ON", "sxjlx": 2, "lat": 30.922648 }, { "qy_id": 499, "azdz": "临港大道地铁3号口", "dqjj": "", "lng": 121.909731, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326012003", "sbmc": "临港大道地铁3号口", "ipv4": "172.101.1.232", "id": 7284, "sbzt": "OFF", "sxjlx": 2, "lat": 30.923843 }, { "qy_id": 499, "azdz": "临港大道地铁4号口", "dqjj": "", "lng": 121.910384, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326012004", "sbmc": "临港大道地铁4号口", "ipv4": "172.101.1.233", "id": 7285, "sbzt": "OFF", "sxjlx": 2, "lat": 30.92444 }, { "qy_id": 499, "azdz": "松萝路与杞青路交叉口", "dqjj": "", "lng": 121.910061, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326011001", "sbmc": "松萝路与杞青路交叉口1号机", "ipv4": "172.101.2.244", "id": 7286, "sbzt": "ON", "sxjlx": 2, "lat": 30.913208 }, { "qy_id": 499, "azdz": "松萝路与杞青路交叉口", "dqjj": "", "lng": 121.910147, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326011002", "sbmc": "松萝路与杞青路交叉口2号机", "ipv4": "172.101.2.245", "id": 7287, "sbzt": "ON", "sxjlx": 2, "lat": 30.912913 }, { "qy_id": 499, "azdz": "松萝路海洋公园办公区域宿舍入口处", "dqjj": "", "lng": 121.909533, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326013001", "sbmc": "松萝路1号杆1号机", "ipv4": "172.101.2.246", "id": 7288, "sbzt": "ON", "sxjlx": 2, "lat": 30.91182 }, { "qy_id": 499, "azdz": "松萝路海洋公园办公区域宿舍入口处", "dqjj": "", "lng": 121.909533, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326013002", "sbmc": "松萝路1号杆2号机", "ipv4": "172.101.2.247", "id": 7289, "sbzt": "ON", "sxjlx": 2, "lat": 30.91182 }, { "qy_id": 499, "azdz": "松萝路03地块公园旁", "dqjj": "", "lng": 121.910413, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326013003", "sbmc": "松萝路2号杆1号机", "ipv4": "172.101.2.248", "id": 7290, "sbzt": "ON", "sxjlx": 2, "lat": 30.90939 }, { "qy_id": 499, "azdz": "松萝路03地块公园旁", "dqjj": "", "lng": 121.910413, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326013004", "sbmc": "松萝路2号杆2号机", "ipv4": "172.101.2.249", "id": 7291, "sbzt": "ON", "sxjlx": 2, "lat": 30.90939 }, { "qy_id": 499, "azdz": "杞青路与麦冬路路口", "dqjj": "", "lng": 121.907796, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326011003", "sbmc": "杞青路与麦冬路路口1号机", "ipv4": "172.101.2.250", "id": 7292, "sbzt": "OFF", "sxjlx": 2, "lat": 30.915194 }, { "qy_id": 499, "azdz": "杞青路与麦冬路路口", "dqjj": "", "lng": 121.907796, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326011004", "sbmc": "杞青路与麦冬路路口2号机", "ipv4": "172.101.2.251", "id": 7293, "sbzt": "OFF", "sxjlx": 2, "lat": 30.915194 }, { "qy_id": 499, "azdz": "麦冬路与夏栎路路口", "dqjj": "", "lng": 121.912391, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326011005", "sbmc": "麦冬路与夏栎路路口1号机", "ipv4": "172.101.1.234", "id": 7294, "sbzt": "ON", "sxjlx": 2, "lat": 30.917819 }, { "qy_id": 499, "azdz": "麦冬路与夏栎路路口", "dqjj": "", "lng": 121.912237, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326011006", "sbmc": "麦冬路与夏栎路路口2号机", "ipv4": "172.101.1.235", "id": 7295, "sbzt": "ON", "sxjlx": 2, "lat": 30.917743 }, { "qy_id": 499, "azdz": "沪城环路与杞青路路口", "dqjj": "", "lng": 121.902723, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326013005", "sbmc": "沪城环路与杞青路路口1号机", "ipv4": "172.101.1.236", "id": 7296, "sbzt": "ON", "sxjlx": 2, "lat": 30.919289 }, { "qy_id": 499, "azdz": "沪城环路与杞青路路口", "dqjj": "", "lng": 121.903042, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326013006", "sbmc": "沪城环路与杞青路路口2号机", "ipv4": "172.101.1.237", "id": 7297, "sbzt": "ON", "sxjlx": 2, "lat": 30.919104 }, { "qy_id": 499, "azdz": "沪城环路公交站旁往沪城环路方向约80米", "dqjj": "", "lng": 121.902945, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326013007", "sbmc": "杞青路1号杆1号机", "ipv4": "172.101.1.238", "id": 7298, "sbzt": "ON", "sxjlx": 2, "lat": 30.919239 }, { "qy_id": 499, "azdz": "沪城环路公交站旁往沪城环路方向约80米", "dqjj": "", "lng": 121.902945, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326013008", "sbmc": "杞青路1号杆2号机", "ipv4": "172.101.1.239", "id": 7299, "sbzt": "ON", "sxjlx": 2, "lat": 30.919239 }, { "qy_id": 499, "azdz": "杞青路与银飞路路口", "dqjj": "", "lng": 121.904348, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326014001", "sbmc": "杞青路与银飞路路口1号机", "ipv4": "172.101.1.240", "id": 7300, "sbzt": "ON", "sxjlx": 2, "lat": 30.915511 }, { "qy_id": 499, "azdz": "杞青路与银飞路路口", "dqjj": "", "lng": 121.904348, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326014002", "sbmc": "杞青路与银飞路路口2号机", "ipv4": "172.101.1.241", "id": 7301, "sbzt": "ON", "sxjlx": 2, "lat": 30.915511 }, { "qy_id": 499, "azdz": "杞青路与沪城环路交叉口往杞青路约50米", "dqjj": "", "lng": 121.903763, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326011007", "sbmc": "杞青路2号杆1号机", "ipv4": "172.101.1.242", "id": 7302, "sbzt": "ON", "sxjlx": 2, "lat": 30.918452 }, { "qy_id": 499, "azdz": "杞青路与沪城环路交叉口往杞青路约50米", "dqjj": "", "lng": 121.903763, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326011008", "sbmc": "杞青路2号杆2号机", "ipv4": "172.101.1.243", "id": 7303, "sbzt": "ON", "sxjlx": 2, "lat": 30.918452 }, { "qy_id": 499, "azdz": "沪城环路银飞路公交站斜对面约20米", "dqjj": "", "lng": 121.900061, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326014003", "sbmc": "沪城环路1号杆1号机", "ipv4": "172.101.1.244", "id": 7304, "sbzt": "ON", "sxjlx": 2, "lat": 30.914834 }, { "qy_id": 499, "azdz": "沪城环路银飞路公交站斜对面约20米", "dqjj": "", "lng": 121.900061, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326014004", "sbmc": "沪城环路1号杆2号机", "ipv4": "172.101.1.245", "id": 7305, "sbzt": "ON", "sxjlx": 2, "lat": 30.914834 }, { "qy_id": 499, "azdz": "银飞路公交枢纽天桥旁约30米", "dqjj": "", "lng": 121.903976, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326014005", "sbmc": "银飞路2号杆1号机", "ipv4": "172.101.1.246", "id": 7306, "sbzt": "ON", "sxjlx": 2, "lat": 30.915356 }, { "qy_id": 499, "azdz": "银飞路公交枢纽天桥旁约30米", "dqjj": "", "lng": 121.903976, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326014006", "sbmc": "银飞路2号杆2号机", "ipv4": "172.101.1.247", "id": 7307, "sbzt": "ON", "sxjlx": 2, "lat": 30.915356 }, { "qy_id": 499, "azdz": "银飞路与杞青路交叉口往银飞路约30米", "dqjj": "", "lng": 121.905036, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326014007", "sbmc": "银飞路1号杆1号机", "ipv4": "172.101.1.248", "id": 7308, "sbzt": "ON", "sxjlx": 2, "lat": 30.916509 }, { "qy_id": 499, "azdz": "银飞路与杞青路交叉口往银飞路约30米", "dqjj": "", "lng": 121.905036, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326014008", "sbmc": "银飞路1号杆2号机", "ipv4": "172.101.1.249", "id": 7309, "sbzt": "ON", "sxjlx": 2, "lat": 30.916509 }, { "qy_id": 495, "azdz": "银飞路与沪城环路交叉口往银飞路约20米", "dqjj": "", "lng": 121.901667, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326015001", "sbmc": "银飞路3号杆1号机", "ipv4": "172.101.1.250", "id": 7310, "sbzt": "OFF", "sxjlx": 2, "lat": 30.91383 }, { "qy_id": 495, "azdz": "银飞路与沪城环路交叉口往银飞路约20米", "dqjj": "", "lng": 121.901667, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326015002", "sbmc": "银飞路3号杆2号机", "ipv4": "172.101.1.251", "id": 7311, "sbzt": "OFF", "sxjlx": 2, "lat": 30.91383 }, { "qy_id": 495, "azdz": "方竹路与上海科技学校", "dqjj": "", "lng": 121.885353, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001170", "sbmc": "方竹/科技学校1", "ipv4": "172.101.1.170", "id": 7312, "sbzt": "ON", "sxjlx": 1, "lat": 30.894397 }, { "qy_id": 495, "azdz": "沪城环路与杞青路往南200米（微卡立杆）", "dqjj": "", "lng": 121.90353, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001196", "sbmc": "沪城环/杞青路南7", "ipv4": "172.101.1.196", "id": 7313, "sbzt": "ON", "sxjlx": 1, "lat": 30.91869 }, { "qy_id": 495, "azdz": "环湖北二路与临港大道往东800米（微卡立杆）", "dqjj": "", "lng": 121.934786, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001198", "sbmc": "环湖北二/临港东7", "ipv4": "172.101.1.198", "id": 7314, "sbzt": "OFF", "sxjlx": 1, "lat": 30.91278 }, { "qy_id": 495, "azdz": "铃兰路杞青路交叉口往北300米（微卡立杆）", "dqjj": "", "lng": 121.915185, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001200", "sbmc": "铃兰/杞青北5", "ipv4": "172.101.1.200", "id": 7315, "sbzt": "ON", "sxjlx": 1, "lat": 30.917408 }, { "qy_id": 495, "azdz": "麦东路临港大道交叉口往南300米（微卡立杆）", "dqjj": "", "lng": 121.91226, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001201", "sbmc": "临港/麦冬南3", "ipv4": "172.101.1.201", "id": 7316, "sbzt": "OFF", "sxjlx": 1, "lat": 30.917832 }, { "qy_id": 499, "azdz": "R2路平均分布4号（微卡立杆）", "dqjj": "", "lng": 121.900759, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001202", "sbmc": "银飞路西段路南球", "ipv4": "172.101.1.202", "id": 7317, "sbzt": "ON", "sxjlx": 1, "lat": 30.913975 }, { "qy_id": 500, "azdz": "R2路平均分布6号（微卡立杆）", "dqjj": "", "lng": 121.900663, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001203", "sbmc": "银飞路西段路北球", "ipv4": "172.101.1.203", "id": 7318, "sbzt": "ON", "sxjlx": 1, "lat": 30.91368 }, { "qy_id": 495, "azdz": "雪绒花路与杞青路交叉口", "dqjj": "", "lng": 121.917877, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001193", "sbmc": "雪绒花/杞青", "ipv4": "172.101.1.193", "id": 7319, "sbzt": "ON", "sxjlx": 1, "lat": 30.90734 }, { "qy_id": 495, "azdz": "环湖西一路与申港大道北", "dqjj": "", "lng": 121.926486, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001094", "sbmc": "环湖西一/申港北", "ipv4": "172.101.1.94", "id": 7320, "sbzt": "OFF", "sxjlx": 1, "lat": 30.898219 }, { "qy_id": 495, "azdz": "环湖西一路与临港软件园南门", "dqjj": "", "lng": 121.92685, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001095", "sbmc": "软件园南门", "ipv4": "172.101.1.95", "id": 7321, "sbzt": "OFF", "sxjlx": 1, "lat": 30.899737 }, { "qy_id": 495, "azdz": "环湖西一路与临港软件园北门", "dqjj": "", "lng": 121.927207, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001096", "sbmc": "软件园北门", "ipv4": "172.101.1.96", "id": 7322, "sbzt": "OFF", "sxjlx": 1, "lat": 30.900949 }, { "qy_id": 495, "azdz": "环湖西一路与南绿丽港路交叉口", "dqjj": "", "lng": 121.927536, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001097", "sbmc": "环湖西一/南绿丽港", "ipv4": "172.101.1.97", "id": 7323, "sbzt": "OFF", "sxjlx": 1, "lat": 30.901838 }, { "qy_id": 495, "azdz": "环湖西一路与北绿丽港路交叉口", "dqjj": "", "lng": 121.927843, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001098", "sbmc": "环湖西一/北绿丽港", "ipv4": "172.101.1.98", "id": 7324, "sbzt": "OFF", "sxjlx": 1, "lat": 30.902493 }, { "qy_id": 495, "azdz": "环湖西一路与石松路交叉口", "dqjj": "", "lng": 121.929458, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001099", "sbmc": "环湖西一/石松路", "ipv4": "172.101.1.99", "id": 7325, "sbzt": "OFF", "sxjlx": 1, "lat": 30.904807 }, { "qy_id": 495, "azdz": "环湖西一路临港大道南路", "dqjj": "", "lng": 121.930085, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001100", "sbmc": "环湖西一/临港南路", "ipv4": "172.101.1.100", "id": 7326, "sbzt": "OFF", "sxjlx": 1, "lat": 30.905581 }, { "qy_id": 495, "azdz": "环湖西一路临港大道北路", "dqjj": "", "lng": 121.931456, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001101", "sbmc": "环湖西一/临港北路", "ipv4": "172.101.1.101", "id": 7327, "sbzt": "ON", "sxjlx": 1, "lat": 30.90679 }, { "qy_id": 495, "azdz": "环湖东一路与东港大道交叉口", "dqjj": "", "lng": 121.955068, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001102", "sbmc": "环湖东一/东港", "ipv4": "172.101.1.102", "id": 7328, "sbzt": "ON", "sxjlx": 1, "lat": 30.897506 }, { "qy_id": 495, "azdz": "环湖东一路与小桉路交叉口", "dqjj": "", "lng": 121.953967, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001103", "sbmc": "环湖东一/小桉", "ipv4": "172.101.1.103", "id": 7329, "sbzt": "ON", "sxjlx": 1, "lat": 30.892693 }, { "qy_id": 495, "azdz": "环湖西一路与海港大道交叉口", "dqjj": "", "lng": 121.93064, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001104", "sbmc": "环湖西一/海港", "ipv4": "172.101.1.104", "id": 7330, "sbzt": "ON", "sxjlx": 1, "lat": 30.888643 }, { "qy_id": 495, "azdz": "环湖西一路与南黄日港路交叉口", "dqjj": "", "lng": 121.927798, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001105", "sbmc": "环湖西一/南黄日港", "ipv4": "172.101.1.105", "id": 7331, "sbzt": "OFF", "sxjlx": 1, "lat": 30.892409 }, { "qy_id": 495, "azdz": "环湖西一路与北黄日港路交叉口", "dqjj": "", "lng": 121.927479, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001106", "sbmc": "环湖西一/北黄日港", "ipv4": "172.101.1.106", "id": 7332, "sbzt": "OFF", "sxjlx": 1, "lat": 30.89308 }, { "qy_id": 495, "azdz": "水芸路与瑞木路交叉口", "dqjj": "", "lng": 121.925361, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001107", "sbmc": "水芸/瑞木路", "ipv4": "172.101.1.107", "id": 7333, "sbzt": "OFF", "sxjlx": 1, "lat": 30.89898 }, { "qy_id": 495, "azdz": "水芸路与水松路交叉口", "dqjj": "", "lng": 121.927443, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001108", "sbmc": "水芸/水松", "ipv4": "172.101.1.108", "id": 7334, "sbzt": "OFF", "sxjlx": 1, "lat": 30.904253 }, { "qy_id": 495, "azdz": "水芸路与石松路交叉口", "dqjj": "", "lng": 121.928513, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001109", "sbmc": "水芸/石松", "ipv4": "172.101.1.109", "id": 7335, "sbzt": "OFF", "sxjlx": 1, "lat": 30.905588 }, { "qy_id": 495, "azdz": "水芸路与临港大道南路交叉口", "dqjj": "", "lng": 121.929366, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001110", "sbmc": "水芸/临港南路", "ipv4": "172.101.1.110", "id": 7336, "sbzt": "ON", "sxjlx": 1, "lat": 30.906089 }, { "qy_id": 495, "azdz": "水芸路与临港大道北路交叉口", "dqjj": "", "lng": 121.930641, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001111", "sbmc": "水芸/临港北路", "ipv4": "172.101.1.111", "id": 7337, "sbzt": "ON", "sxjlx": 1, "lat": 30.907578 }, { "qy_id": 495, "azdz": "水芸路与香竹路交叉口", "dqjj": "", "lng": 121.925619, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001112", "sbmc": "水芸/香竹", "ipv4": "172.101.1.112", "id": 7338, "sbzt": "OFF", "sxjlx": 1, "lat": 30.89461 }, { "qy_id": 495, "azdz": "水芸路与北黄日港路交叉口", "dqjj": "", "lng": 121.92625, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001113", "sbmc": "水芸/北黄日港路", "ipv4": "172.101.1.113", "id": 7339, "sbzt": "OFF", "sxjlx": 1, "lat": 30.892657 }, { "qy_id": 495, "azdz": "云鹃路与瑞木路交叉口", "dqjj": "", "lng": 121.923538, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001114", "sbmc": "云鹃/瑞木", "ipv4": "172.101.1.114", "id": 7340, "sbzt": "OFF", "sxjlx": 1, "lat": 30.899383 }, { "qy_id": 495, "azdz": "云鹃路与南绿丽港路交叉口", "dqjj": "", "lng": 121.924551, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001115", "sbmc": "云鹃/南绿丽港", "ipv4": "172.101.1.115", "id": 7341, "sbzt": "OFF", "sxjlx": 1, "lat": 30.902895 }, { "qy_id": 495, "azdz": "云鹃路与石松路交叉口", "dqjj": "", "lng": 121.927033, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001116", "sbmc": "云鹃/石松", "ipv4": "172.101.1.116", "id": 7342, "sbzt": "OFF", "sxjlx": 1, "lat": 30.906601 }, { "qy_id": 495, "azdz": "云鹃路与龙竹路交叉口", "dqjj": "", "lng": 121.923532, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001117", "sbmc": "云鹃/龙竹", "ipv4": "172.101.1.117", "id": 7343, "sbzt": "OFF", "sxjlx": 1, "lat": 30.895469 }, { "qy_id": 495, "azdz": "云鹃路与临港软件园西南门", "dqjj": "", "lng": 121.923863, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001118", "sbmc": "云鹃/软件园西南门", "ipv4": "172.101.1.118", "id": 7344, "sbzt": "OFF", "sxjlx": 1, "lat": 30.900617 }, { "qy_id": 495, "azdz": "云鹃路与临港软件园西北门", "dqjj": "", "lng": 121.924126, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001119", "sbmc": "云鹃/软件园西北门", "ipv4": "172.101.1.119", "id": 7345, "sbzt": "OFF", "sxjlx": 1, "lat": 30.901404 }, { "qy_id": 495, "azdz": "环湖西二路与临港行政中心南门", "dqjj": "", "lng": 121.922152, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001120", "sbmc": "环湖西二/行政中心南门", "ipv4": "172.101.1.120", "id": 7346, "sbzt": "ON", "sxjlx": 1, "lat": 30.898427 }, { "qy_id": 495, "azdz": "环湖西二路与临港行政中心北门", "dqjj": "", "lng": 121.922335, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001121", "sbmc": "环湖西二/行政中心北门", "ipv4": "172.101.1.121", "id": 7347, "sbzt": "ON", "sxjlx": 1, "lat": 30.899864 }, { "qy_id": 495, "azdz": "环湖西二路与瑞木路交叉口", "dqjj": "", "lng": 121.922313, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001122", "sbmc": "环湖西二/瑞木", "ipv4": "172.101.1.122", "id": 7348, "sbzt": "ON", "sxjlx": 1, "lat": 30.899612 }, { "qy_id": 495, "azdz": "环湖西二路与临港大道北路交叉口", "dqjj": "", "lng": 121.927515, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001123", "sbmc": "环湖西二/临港北路", "ipv4": "172.101.1.123", "id": 7349, "sbzt": "OFF", "sxjlx": 1, "lat": 30.908952 }, { "qy_id": 495, "azdz": "环湖北二路陆家嘴广场", "dqjj": "", "lng": 121.930862, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001124", "sbmc": "环湖北二/陆家嘴广场", "ipv4": "172.101.1.124", "id": 7350, "sbzt": "ON", "sxjlx": 1, "lat": 30.910935 }, { "qy_id": 495, "azdz": "环湖北二路与滨港大道交叉口", "dqjj": "", "lng": 121.953818, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001125", "sbmc": "环湖北二/滨港", "ipv4": "172.101.1.125", "id": 7351, "sbzt": "ON", "sxjlx": 1, "lat": 30.9088 }, { "qy_id": 495, "azdz": "环湖东二路与东港大道交叉口", "dqjj": "", "lng": 121.959555, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001126", "sbmc": "环湖东二/东港", "ipv4": "172.101.1.126", "id": 7352, "sbzt": "ON", "sxjlx": 1, "lat": 30.897359 }, { "qy_id": 495, "azdz": "环湖东二路与小桉路交叉口", "dqjj": "", "lng": 121.958039, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001127", "sbmc": "环湖东二/小桉", "ipv4": "172.101.1.127", "id": 7353, "sbzt": "ON", "sxjlx": 1, "lat": 30.891273 }, { "qy_id": 495, "azdz": "南汇嘴观海公园1号", "dqjj": "", "lng": 121.973729, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001128", "sbmc": "观海公园1号", "ipv4": "172.101.1.128", "id": 7354, "sbzt": "ON", "sxjlx": 1, "lat": 30.883539 }, { "qy_id": 495, "azdz": "南汇嘴观海公园2号", "dqjj": "", "lng": 121.973104, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001129", "sbmc": "观海公园2号", "ipv4": "172.101.1.129", "id": 7355, "sbzt": "ON", "sxjlx": 1, "lat": 30.882859 }, { "qy_id": 495, "azdz": "南汇嘴观海公园3号", "dqjj": "", "lng": 121.972892, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001130", "sbmc": "观海公园3号", "ipv4": "172.101.1.130", "id": 7356, "sbzt": "ON", "sxjlx": 1, "lat": 30.882468 }, { "qy_id": 495, "azdz": "环湖南二路与海港大道交叉口", "dqjj": "", "lng": 121.927478, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001131", "sbmc": "环湖南二/海港", "ipv4": "172.101.1.131", "id": 7357, "sbzt": "ON", "sxjlx": 1, "lat": 30.885934 }, { "qy_id": 495, "azdz": "环湖西二路与南黄日港路交叉口", "dqjj": "", "lng": 121.923625, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001132", "sbmc": "环湖西二/南黄日港", "ipv4": "172.101.1.132", "id": 7358, "sbzt": "ON", "sxjlx": 1, "lat": 30.89097 }, { "qy_id": 495, "azdz": "环湖西二路与北黄日港路交叉口", "dqjj": "", "lng": 121.923291, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001133", "sbmc": "环湖西二/北黄日港", "ipv4": "172.101.1.133", "id": 7359, "sbzt": "ON", "sxjlx": 1, "lat": 30.891653 }, { "qy_id": 495, "azdz": "环湖西二路与香竹路交叉口", "dqjj": "", "lng": 121.922482, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001134", "sbmc": "环湖西二/香竹", "ipv4": "172.101.1.134", "id": 7360, "sbzt": "ON", "sxjlx": 1, "lat": 30.89392 }, { "qy_id": 495, "azdz": "环湖西二路与龙竹路交叉口", "dqjj": "", "lng": 121.922217, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001135", "sbmc": "环湖西二/龙竹", "ipv4": "172.101.1.135", "id": 7361, "sbzt": "ON", "sxjlx": 1, "lat": 30.895266 }, { "qy_id": 495, "azdz": "申港大道与南汇新城镇政府1号门口1", "dqjj": "", "lng": 121.919599, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001136", "sbmc": "申港/政府1号门1", "ipv4": "172.101.1.136", "id": 7362, "sbzt": "ON", "sxjlx": 1, "lat": 30.897674 }, { "qy_id": 495, "azdz": "申港大道与南汇新城镇政府1号门口2", "dqjj": "", "lng": 121.919841, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001137", "sbmc": "申港/政府1号门2", "ipv4": "172.101.1.137", "id": 7363, "sbzt": "ON", "sxjlx": 1, "lat": 30.897696 }, { "qy_id": 495, "azdz": "环湖西三路与杞青路交叉口", "dqjj": "", "lng": 121.919428, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001138", "sbmc": "环湖西三/杞青", "ipv4": "172.101.1.138", "id": 7364, "sbzt": "ON", "sxjlx": 1, "lat": 30.906821 }, { "qy_id": 495, "azdz": "环湖西三路与夏栎路交叉口", "dqjj": "", "lng": 121.921215, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001139", "sbmc": "环湖西三/夏栎", "ipv4": "172.101.1.139", "id": 7365, "sbzt": "ON", "sxjlx": 1, "lat": 30.90979 }, { "qy_id": 495, "azdz": "环湖西三路税务局门口", "dqjj": "", "lng": 121.916675, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001140", "sbmc": "环湖西三/税务局", "ipv4": "172.101.1.140", "id": 7366, "sbzt": "ON", "sxjlx": 1, "lat": 30.896516 }, { "qy_id": 495, "azdz": "环湖西三路与临港行政中心2号门", "dqjj": "", "lng": 121.916732, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001141", "sbmc": "环湖西三/行政中心2号门", "ipv4": "172.101.1.141", "id": 7367, "sbzt": "ON", "sxjlx": 1, "lat": 30.898788 }, { "qy_id": 495, "azdz": "环湖西三路与临港行政中心3号门", "dqjj": "", "lng": 121.916838, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001142", "sbmc": "环湖西三/行政中心3号门", "ipv4": "172.101.1.142", "id": 7368, "sbzt": "ON", "sxjlx": 1, "lat": 30.899885 }, { "qy_id": 495, "azdz": "海港大道与康乃馨路交叉口", "dqjj": "", "lng": 121.922584, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001143", "sbmc": "海港/康乃馨", "ipv4": "172.101.1.143", "id": 7369, "sbzt": "ON", "sxjlx": 1, "lat": 30.881876 }, { "qy_id": 495, "azdz": "海港大道与美人蕉路交叉口", "dqjj": "", "lng": 121.921543, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001144", "sbmc": "海港/美人蕉", "ipv4": "172.101.1.144", "id": 7370, "sbzt": "ON", "sxjlx": 1, "lat": 30.880991 }, { "qy_id": 495, "azdz": "古棕路与康乃馨路交叉口", "dqjj": "", "lng": 121.919342, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001145", "sbmc": "古棕/康乃馨", "ipv4": "172.101.1.145", "id": 7371, "sbzt": "ON", "sxjlx": 1, "lat": 30.88525 }, { "qy_id": 495, "azdz": "茉莉路与橄榄路交叉口", "dqjj": "", "lng": 121.9066, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001146", "sbmc": "茉莉/橄榄", "ipv4": "172.101.1.146", "id": 7372, "sbzt": "ON", "sxjlx": 1, "lat": 30.889735 }, { "qy_id": 495, "azdz": "茉莉路与方竹路交叉口", "dqjj": "", "lng": 121.906856, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001147", "sbmc": "茉莉/方竹", "ipv4": "172.101.1.147", "id": 7373, "sbzt": "ON", "sxjlx": 1, "lat": 30.894416 }, { "qy_id": 495, "azdz": "茉莉路与竹柏路交叉口", "dqjj": "", "lng": 121.906529, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001148", "sbmc": "茉莉/竹柏", "ipv4": "172.101.1.148", "id": 7374, "sbzt": "ON", "sxjlx": 1, "lat": 30.900781 }, { "qy_id": 495, "azdz": "茉莉路与花柏路交叉口", "dqjj": "", "lng": 121.906892, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001149", "sbmc": "茉莉/花柏", "ipv4": "172.101.1.149", "id": 7375, "sbzt": "ON", "sxjlx": 1, "lat": 30.905338 }, { "qy_id": 495, "azdz": "公安大楼门口", "dqjj": "", "lng": 121.917443, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001150", "sbmc": "公安大楼门口", "ipv4": "172.101.1.150", "id": 7376, "sbzt": "ON", "sxjlx": 1, "lat": 30.891901 }, { "qy_id": 495, "azdz": "紫荆花路与方竹路交叉口", "dqjj": "", "lng": 121.915436, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001151", "sbmc": "紫荆花/方竹", "ipv4": "172.101.1.151", "id": 7377, "sbzt": "ON", "sxjlx": 1, "lat": 30.894301 }, { "qy_id": 495, "azdz": "紫荆花路与申港大道交叉口", "dqjj": "", "lng": 121.915184, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001152", "sbmc": "紫荆花/申港", "ipv4": "172.101.1.152", "id": 7378, "sbzt": "ON", "sxjlx": 1, "lat": 30.897606 }, { "qy_id": 495, "azdz": "紫荆花路与竹柏路交叉口", "dqjj": "", "lng": 121.915455, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001153", "sbmc": "紫荆花/竹柏", "ipv4": "172.101.1.153", "id": 7379, "sbzt": "ON", "sxjlx": 1, "lat": 30.900714 }, { "qy_id": 495, "azdz": "紫荆花路与花柏路交叉口", "dqjj": "", "lng": 121.916509, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001154", "sbmc": "紫荆花/花柏", "ipv4": "172.101.1.154", "id": 7380, "sbzt": "ON", "sxjlx": 1, "lat": 30.90447 }, { "qy_id": 495, "azdz": "雪绒花路与夏栎路交叉口", "dqjj": "", "lng": 121.920297, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001155", "sbmc": "雪绒花/夏栎", "ipv4": "172.101.1.155", "id": 7381, "sbzt": "ON", "sxjlx": 1, "lat": 30.91073 }, { "qy_id": 495, "azdz": "竹柏路宜浩家园幼儿园", "dqjj": "", "lng": 121.909594, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001156", "sbmc": "竹柏/宜浩幼儿园", "ipv4": "172.101.1.156", "id": 7382, "sbzt": "ON", "sxjlx": 1, "lat": 30.90069 }, { "qy_id": 495, "azdz": "竹柏路宜浩公寓东门", "dqjj": "", "lng": 121.913871, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001157", "sbmc": "竹柏/宜浩公寓", "ipv4": "172.101.1.157", "id": 7383, "sbzt": "ON", "sxjlx": 1, "lat": 30.900657 }, { "qy_id": 495, "azdz": "沪城环路与杞青路交叉口", "dqjj": "", "lng": 121.902879, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001158", "sbmc": "沪城环/杞青", "ipv4": "172.101.1.158", "id": 7384, "sbzt": "ON", "sxjlx": 1, "lat": 30.919199 }, { "qy_id": 495, "azdz": "铃兰路临港大道交叉口", "dqjj": "", "lng": 121.916652, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001159", "sbmc": "铃兰/临港", "ipv4": "172.101.1.159", "id": 7385, "sbzt": "ON", "sxjlx": 1, "lat": 30.91874 }, { "qy_id": 495, "azdz": "铃兰路夏栎路交叉口", "dqjj": "", "lng": 121.913708, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001160", "sbmc": "铃兰/夏栎", "ipv4": "172.101.1.160", "id": 7386, "sbzt": "ON", "sxjlx": 1, "lat": 30.916362 }, { "qy_id": 495, "azdz": "铃兰路杞青路交叉口", "dqjj": "", "lng": 121.910071, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001161", "sbmc": "铃兰/杞青", "ipv4": "172.101.1.161", "id": 7387, "sbzt": "ON", "sxjlx": 1, "lat": 30.91295 }, { "qy_id": 495, "azdz": "麦东路临港大道交叉口", "dqjj": "", "lng": 121.914734, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001162", "sbmc": "麦东/临港", "ipv4": "172.101.1.162", "id": 7388, "sbzt": "ON", "sxjlx": 1, "lat": 30.919841 }, { "qy_id": 495, "azdz": "麦东路杞青路交叉口", "dqjj": "", "lng": 121.907641, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001163", "sbmc": "麦东/杞青", "ipv4": "172.101.1.163", "id": 7389, "sbzt": "ON", "sxjlx": 1, "lat": 30.915111 }, { "qy_id": 495, "azdz": "麦东路夏栎路交叉口", "dqjj": "", "lng": 121.911483, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001164", "sbmc": "麦东/夏栎", "ipv4": "172.101.1.164", "id": 7390, "sbzt": "ON", "sxjlx": 1, "lat": 30.917043 }, { "qy_id": 561, "azdz": "L5路1号", "dqjj": "", "lng": 121.910473, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001165", "sbmc": "L5路1号", "ipv4": "172.101.1.165", "id": 7391, "sbzt": "ON", "sxjlx": 1, "lat": 30.925122 }, { "qy_id": 561, "azdz": "L5路2号", "dqjj": "", "lng": 121.90958, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001166", "sbmc": "L5路2号", "ipv4": "172.101.1.166", "id": 7392, "sbzt": "ON", "sxjlx": 1, "lat": 30.91192 }, { "qy_id": 495, "azdz": "申港大道与水华路", "dqjj": "", "lng": 121.887626, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001167", "sbmc": "申港/水华", "ipv4": "172.101.1.167", "id": 7393, "sbzt": "ON", "sxjlx": 1, "lat": 30.897566 }, { "qy_id": 495, "azdz": "方竹路剑桥学院北门", "dqjj": "", "lng": 121.892231, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001168", "sbmc": "剑桥北门", "ipv4": "172.101.1.168", "id": 7394, "sbzt": "OFF", "sxjlx": 1, "lat": 30.894731 }, { "qy_id": 495, "azdz": "方竹路水华路", "dqjj": "", "lng": 121.887104, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001169", "sbmc": "方竹/水华", "ipv4": "172.101.1.169", "id": 7395, "sbzt": "ON", "sxjlx": 1, "lat": 30.894475 }, { "qy_id": 495, "azdz": "水华路与剑桥学院西门", "dqjj": "", "lng": 121.88673, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001171", "sbmc": "剑桥西门", "ipv4": "172.101.1.171", "id": 7396, "sbzt": "ON", "sxjlx": 1, "lat": 30.891859 }, { "qy_id": 495, "azdz": "水华路与上海电机学院北1门", "dqjj": "", "lng": 121.887009, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001172", "sbmc": "电机学院北1门", "ipv4": "172.101.1.172", "id": 7397, "sbzt": "ON", "sxjlx": 1, "lat": 30.892434 }, { "qy_id": 495, "azdz": "水华路与上海电机学院东门", "dqjj": "", "lng": 121.887937, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001173", "sbmc": "电机学院东门", "ipv4": "172.101.1.173", "id": 7398, "sbzt": "ON", "sxjlx": 1, "lat": 30.889345 }, { "qy_id": 495, "azdz": "水华路与橄榄路交叉口", "dqjj": "", "lng": 121.891301, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001174", "sbmc": "水华/橄榄", "ipv4": "172.101.1.174", "id": 7399, "sbzt": "ON", "sxjlx": 1, "lat": 30.88598 }, { "qy_id": 495, "azdz": "橄榄路海洋大学北门", "dqjj": "", "lng": 121.895508, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001175", "sbmc": "海洋大学北门", "ipv4": "172.101.1.175", "id": 7400, "sbzt": "ON", "sxjlx": 1, "lat": 30.888596 }, { "qy_id": 495, "azdz": "橄榄路上海电机学院南门", "dqjj": "", "lng": 121.889412, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001176", "sbmc": "电机学院南门", "ipv4": "172.101.1.176", "id": 7401, "sbzt": "ON", "sxjlx": 1, "lat": 30.884396 }, { "qy_id": 495, "azdz": "沪城环路与上元路交叉口", "dqjj": "", "lng": 121.904097, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001177", "sbmc": "沪城环/上元", "ipv4": "172.101.1.177", "id": 7402, "sbzt": "ON", "sxjlx": 1, "lat": 30.882948 }, { "qy_id": 495, "azdz": "临港大道与雪绒花路交叉口", "dqjj": "", "lng": 121.922753, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001178", "sbmc": "临港/雪绒花", "ipv4": "172.101.1.178", "id": 7403, "sbzt": "ON", "sxjlx": 1, "lat": 30.913121 }, { "qy_id": 495, "azdz": "雪绒花路停车场北门", "dqjj": "", "lng": 121.919729, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001179", "sbmc": "雪绒花停车场北门", "ipv4": "172.101.1.179", "id": 7404, "sbzt": "ON", "sxjlx": 1, "lat": 30.910045 }, { "qy_id": 495, "azdz": "雪绒花路停车场南门", "dqjj": "", "lng": 121.918692, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001180", "sbmc": "雪绒花停车场南门", "ipv4": "172.101.1.180", "id": 7405, "sbzt": "ON", "sxjlx": 1, "lat": 30.908634 }, { "qy_id": 495, "azdz": "东海大道环湖北三路", "dqjj": "", "lng": 121.933131, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001181", "sbmc": "东海/环湖北三", "ipv4": "172.101.1.181", "id": 7406, "sbzt": "ON", "sxjlx": 1, "lat": 30.917629 }, { "qy_id": 495, "azdz": "沪城环路与临港大道交叉口", "dqjj": "", "lng": 121.908756, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001182", "sbmc": "沪城环/临港", "ipv4": "172.101.1.182", "id": 7407, "sbzt": "OFF", "sxjlx": 1, "lat": 30.925285 }, { "qy_id": 495, "azdz": "沪城环路与杞青路交叉口往北400米", "dqjj": "", "lng": 121.903829, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001184", "sbmc": "沪城环/杞青路北", "ipv4": "172.101.1.184", "id": 7408, "sbzt": "ON", "sxjlx": 1, "lat": 30.920325 }, { "qy_id": 495, "azdz": "沪城环路与申港大道交叉口", "dqjj": "", "lng": 121.897874, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001186", "sbmc": "沪城环/申港", "ipv4": "172.101.1.186", "id": 7409, "sbzt": "ON", "sxjlx": 1, "lat": 30.897619 }, { "qy_id": 495, "azdz": "沪城环路与花柏路交叉口往北400米", "dqjj": "", "lng": 121.897762, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001187", "sbmc": "沪城环/花柏北", "ipv4": "172.101.1.187", "id": 7410, "sbzt": "ON", "sxjlx": 1, "lat": 30.90687 }, { "qy_id": 495, "azdz": "沪城环路与花柏路交叉口", "dqjj": "", "lng": 121.897739, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001188", "sbmc": "沪城环/花柏", "ipv4": "172.101.1.188", "id": 7411, "sbzt": "ON", "sxjlx": 1, "lat": 30.9051 }, { "qy_id": 495, "azdz": "沪城环路与花柏路交叉口往西100米", "dqjj": "", "lng": 121.896526, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001189", "sbmc": "沪城环/花柏西", "ipv4": "172.101.1.189", "id": 7412, "sbzt": "ON", "sxjlx": 1, "lat": 30.905352 }, { "qy_id": 495, "azdz": "塘下公路与花柏路交叉口", "dqjj": "", "lng": 121.889922, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001190", "sbmc": "塘下/花柏", "ipv4": "172.101.1.190", "id": 7413, "sbzt": "OFF", "sxjlx": 1, "lat": 30.90608 }, { "qy_id": 499, "azdz": "R2路平均分布7号", "dqjj": "", "lng": 121.903177, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001191", "sbmc": "海昌公交站入口", "ipv4": "172.101.1.191", "id": 7414, "sbzt": "ON", "sxjlx": 1, "lat": 30.914395 }, { "qy_id": 501, "azdz": "临港大道/沪城环路 东向西", "dqjj": "", "lng": 121.908573, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900001180003001", "sbmc": "临港大道/沪城环路 东向西", "ipv4": "172.16.2.6", "id": 7415, "sbzt": "ON", "sxjlx": 2, "lat": 30.925196 }, { "qy_id": 560, "azdz": "临港大道/沪城环路 西向东", "dqjj": "", "lng": 121.908289, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900001180003002", "sbmc": "临港大道沪城环路西向东", "ipv4": "172.16.2.7", "id": 7416, "sbzt": "ON", "sxjlx": 2, "lat": 30.925412 }, { "qy_id": 501, "azdz": "申港大道/沪城环路 东向西", "dqjj": "", "lng": 121.897781, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900001180003003", "sbmc": "申港大道/沪城环路 东向西", "ipv4": "172.16.2.22", "id": 7417, "sbzt": "ON", "sxjlx": 2, "lat": 30.897388 }, { "qy_id": 501, "azdz": "申港大道/沪城环路 西向东", "dqjj": "", "lng": 121.897359, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900001180003004", "sbmc": "申港大道/沪城环路 西向东", "ipv4": "172.16.2.23", "id": 7418, "sbzt": "ON", "sxjlx": 2, "lat": 30.89767 }, { "qy_id": 501, "azdz": "方竹路/沪城环路 东向西", "dqjj": "", "lng": 121.898446, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900001180003005", "sbmc": "方竹路/沪城环路 东向西", "ipv4": "172.16.2.36", "id": 7419, "sbzt": "ON", "sxjlx": 2, "lat": 30.89433 }, { "qy_id": 501, "azdz": "方竹路/沪城环路 西向东", "dqjj": "", "lng": 121.898081, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900001180003006", "sbmc": "方竹路/沪城环路 西向东", "ipv4": "172.16.2.37", "id": 7420, "sbzt": "ON", "sxjlx": 2, "lat": 30.89433 }, { "qy_id": 501, "azdz": "橄榄路/沪城环路 西向东", "dqjj": "", "lng": 121.899694, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900001180003007", "sbmc": "橄榄路/沪城环路 西向东", "ipv4": "172.16.2.54", "id": 7421, "sbzt": "ON", "sxjlx": 2, "lat": 30.889772 }, { "qy_id": 501, "azdz": "橄榄路/沪城环路 东向西", "dqjj": "", "lng": 121.900161, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900001180003008", "sbmc": "橄榄路/沪城环路 东向西", "ipv4": "172.16.2.55", "id": 7422, "sbzt": "ON", "sxjlx": 2, "lat": 30.889528 }, { "qy_id": 501, "azdz": "方竹路/塘下公路 东向西", "dqjj": "", "lng": 121.882819, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900001180003009", "sbmc": "方竹路/塘下公路 东向西", "ipv4": "172.16.2.68", "id": 7423, "sbzt": "ON", "sxjlx": 2, "lat": 30.894403 }, { "qy_id": 501, "azdz": "方竹路/塘下公路 西向东", "dqjj": "", "lng": 121.882738, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900001180003010", "sbmc": "方竹路/塘下公路 西向东", "ipv4": "172.16.2.69", "id": 7424, "sbzt": "ON", "sxjlx": 2, "lat": 30.894371 }, { "qy_id": 496, "azdz": "临港大道环湖西三路以东250米", "dqjj": "", "lng": 121.924885, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201002", "sbmc": "临港大道环湖西三路以东250米+D2:U2", "ipv4": "10.118.224.6", "id": 7425, "sbzt": "ON", "sxjlx": 2, "lat": 30.911655 }, { "qy_id": 496, "azdz": "临港大道环湖西三路以东250米", "dqjj": "", "lng": 121.924767, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201001", "sbmc": "临港大道环湖西三路以东250米", "ipv4": "10.118.224.7", "id": 7426, "sbzt": "ON", "sxjlx": 2, "lat": 30.911573 }, { "qy_id": 496, "azdz": "临港大道环湖西三路以东250米", "dqjj": "", "lng": 121.924542, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201003", "sbmc": "临港大道环湖西三路以东250米", "ipv4": "10.118.224.9", "id": 7427, "sbzt": "ON", "sxjlx": 2, "lat": 30.911444 }, { "qy_id": 496, "azdz": "临港大道环湖西三路以东250米", "dqjj": "", "lng": 121.924381, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201004", "sbmc": "临港大道环湖西三路以东250米", "ipv4": "10.118.224.10", "id": 7428, "sbzt": "ON", "sxjlx": 2, "lat": 30.911361 }, { "qy_id": 558, "azdz": "临港大道环湖西三路路口以北190米", "dqjj": "", "lng": 121.924661, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201005", "sbmc": "临港大道环湖西三路路口以北190米", "ipv4": "10.118.224.12", "id": 7429, "sbzt": "ON", "sxjlx": 2, "lat": 30.912813 }, { "qy_id": 558, "azdz": "临港大道环湖西三路路口以北190米", "dqjj": "", "lng": 121.924747, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201006", "sbmc": "临港大道环湖西三路路口以北190米", "ipv4": "10.118.224.13", "id": 7430, "sbzt": "ON", "sxjlx": 2, "lat": 30.912739 }, { "qy_id": 558, "azdz": "临港大道环湖西三路路口以北190米", "dqjj": "", "lng": 121.924532, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201007", "sbmc": "临港大道环湖西三路路口以北190米", "ipv4": "10.118.224.15", "id": 7431, "sbzt": "ON", "sxjlx": 2, "lat": 30.912933 }, { "qy_id": 558, "azdz": "临港大道环湖西三路路口以北190米", "dqjj": "", "lng": 121.92451, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201008", "sbmc": "临港大道环湖西三路路口以北190米", "ipv4": "10.118.224.16", "id": 7432, "sbzt": "ON", "sxjlx": 2, "lat": 30.912988 }, { "qy_id": 496, "azdz": "临港大道铃兰路以东170米", "dqjj": "", "lng": 121.918482, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201009", "sbmc": "临港大道铃兰路以东170米", "ipv4": "10.118.224.18", "id": 7433, "sbzt": "ON", "sxjlx": 2, "lat": 30.917176 }, { "qy_id": 496, "azdz": "临港大道铃兰路以东170米", "dqjj": "", "lng": 121.918353, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201010", "sbmc": "临港大道铃兰路以东170米", "ipv4": "10.118.224.19", "id": 7434, "sbzt": "ON", "sxjlx": 2, "lat": 30.917093 }, { "qy_id": 496, "azdz": "临港大道铃兰路以东170米", "dqjj": "", "lng": 121.918181, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201011", "sbmc": "临港大道铃兰路以东170米", "ipv4": "10.118.224.21", "id": 7435, "sbzt": "ON", "sxjlx": 2, "lat": 30.917029 }, { "qy_id": 496, "azdz": "临港大道铃兰路以东170米", "dqjj": "", "lng": 121.918074, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201012", "sbmc": "临港大道铃兰路以东170米", "ipv4": "10.118.224.22", "id": 7436, "sbzt": "OFF", "sxjlx": 2, "lat": 30.9169 }, { "qy_id": 496, "azdz": "临港大道玲兰路以西268米", "dqjj": "", "lng": 121.913407, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201013", "sbmc": "临港大道玲兰路以西268米", "ipv4": "10.118.224.24", "id": 7437, "sbzt": "ON", "sxjlx": 2, "lat": 30.920959 }, { "qy_id": 496, "azdz": "临港大道玲兰路以西268米", "dqjj": "", "lng": 121.913461, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201014", "sbmc": "临港大道玲兰路以西268米", "ipv4": "10.118.224.25", "id": 7438, "sbzt": "ON", "sxjlx": 2, "lat": 30.921006 }, { "qy_id": 496, "azdz": "临港大道玲兰路以西268米", "dqjj": "", "lng": 121.913675, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201015", "sbmc": "临港大道玲兰路以西268米", "ipv4": "10.118.224.27", "id": 7439, "sbzt": "ON", "sxjlx": 2, "lat": 30.921153 }, { "qy_id": 496, "azdz": "临港大道玲兰路以西268米", "dqjj": "", "lng": 121.913825, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201016", "sbmc": "临港大道玲兰路以西268米", "ipv4": "10.118.224.28", "id": 7440, "sbzt": "ON", "sxjlx": 2, "lat": 30.921134 }, { "qy_id": 558, "azdz": "临港大道宾果路以西250 米", "dqjj": "", "lng": 121.90343, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201017", "sbmc": "临港大道宾果路以西250米1", "ipv4": "10.118.224.30", "id": 7441, "sbzt": "ON", "sxjlx": 2, "lat": 30.930169 }, { "qy_id": 558, "azdz": "临港大道宾果路以西250 米", "dqjj": "", "lng": 121.903215, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201018", "sbmc": "临港大道宾果路以西250米2", "ipv4": "10.118.224.31", "id": 7442, "sbzt": "ON", "sxjlx": 2, "lat": 30.930031 }, { "qy_id": 558, "azdz": "临港大道宾果路以西250 米", "dqjj": "", "lng": 121.903087, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201019", "sbmc": "临港大道宾果路以西250米3", "ipv4": "10.118.224.33", "id": 7443, "sbzt": "ON", "sxjlx": 2, "lat": 30.929976 }, { "qy_id": 496, "azdz": "临港大道宾果路以西250 米", "dqjj": "", "lng": 121.902979, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201020", "sbmc": "临港大道宾果路以西250米4", "ipv4": "10.118.224.34", "id": 7444, "sbzt": "ON", "sxjlx": 2, "lat": 30.929884 }, { "qy_id": 558, "azdz": "临港大道塘下公路以东400米", "dqjj": "", "lng": 121.901006, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201021", "sbmc": "临港大道塘下公路以东400米", "ipv4": "10.118.224.36", "id": 7445, "sbzt": "OFF", "sxjlx": 2, "lat": 30.932098 }, { "qy_id": 496, "azdz": "临港大道塘下公路以东400米", "dqjj": "", "lng": 121.900813, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201022", "sbmc": "临港大道塘下公路以东400米", "ipv4": "10.118.224.37", "id": 7446, "sbzt": "OFF", "sxjlx": 2, "lat": 30.931997 }, { "qy_id": 558, "azdz": "临港大道塘下公路以东400米", "dqjj": "", "lng": 121.900684, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201023", "sbmc": "临港大道塘下公路以东400米", "ipv4": "10.118.224.39", "id": 7447, "sbzt": "OFF", "sxjlx": 2, "lat": 30.931923 }, { "qy_id": 496, "azdz": "临港大道塘下公路以东400米", "dqjj": "", "lng": 121.90122, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201024", "sbmc": "临港大道塘下公路以东400米", "ipv4": "10.118.224.40", "id": 7448, "sbzt": "OFF", "sxjlx": 2, "lat": 30.932236 }, { "qy_id": 496, "azdz": "临港大道两港大道以东200米", "dqjj": "", "lng": 121.891235, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201025", "sbmc": "临港大道两港大道以东200米", "ipv4": "10.118.224.42", "id": 7449, "sbzt": "ON", "sxjlx": 2, "lat": 30.940624 }, { "qy_id": 496, "azdz": "临港大道两港大道以东200米", "dqjj": "", "lng": 121.891063, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201026", "sbmc": "临港大道两港大道以东200米", "ipv4": "10.118.224.43", "id": 7450, "sbzt": "ON", "sxjlx": 2, "lat": 30.940486 }, { "qy_id": 496, "azdz": "临港大道两港大道以东200米", "dqjj": "", "lng": 121.890956, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201027", "sbmc": "临港大道两港大道以东200米", "ipv4": "10.118.224.45", "id": 7451, "sbzt": "ON", "sxjlx": 2, "lat": 30.940468 }, { "qy_id": 496, "azdz": "临港大道两港大道以东200米", "dqjj": "", "lng": 121.89145, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201028", "sbmc": "临港大道两港大道以东200米", "ipv4": "10.118.224.46", "id": 7452, "sbzt": "ON", "sxjlx": 2, "lat": 30.94056 }, { "qy_id": 495, "azdz": "临港大道两港大道规划路以东180米", "dqjj": "", "lng": 121.891111, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201029", "sbmc": "临港大道两港大道规划路以东180米", "ipv4": "10.118.224.48", "id": 7453, "sbzt": "OFF", "sxjlx": 2, "lat": 30.940849 }, { "qy_id": 495, "azdz": "临港大道两港大道规划路以东180米", "dqjj": "", "lng": 121.890958, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201030", "sbmc": "临港大道两港大道规划路以东180米", "ipv4": "10.118.224.49", "id": 7454, "sbzt": "OFF", "sxjlx": 2, "lat": 30.940679 }, { "qy_id": 495, "azdz": "临港大道两港大道规划路以东180米", "dqjj": "", "lng": 121.890851, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201031", "sbmc": "临港大道两港大道规划路以东180米", "ipv4": "10.118.224.51", "id": 7455, "sbzt": "OFF", "sxjlx": 2, "lat": 30.940605 }, { "qy_id": 495, "azdz": "临港大道两港大道规划路以东180米", "dqjj": "", "lng": 121.890786, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326201032", "sbmc": "临港大道两港大道规划路以东180米", "ipv4": "10.118.224.52", "id": 7456, "sbzt": "OFF", "sxjlx": 2, "lat": 30.940495 }, { "qy_id": 495, "azdz": "临港大道两港大道规划路以西400米", "dqjj": "", "lng": 121.88762, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202005", "sbmc": "临港大道两港大道规划路以西400米", "ipv4": "10.118.224.54", "id": 7457, "sbzt": "OFF", "sxjlx": 2, "lat": 30.943091 }, { "qy_id": 495, "azdz": "临港大道两港大道规划路以西400米", "dqjj": "", "lng": 121.887534, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202006", "sbmc": "临港大道两港大道规划路以西400米", "ipv4": "10.118.224.55", "id": 7458, "sbzt": "OFF", "sxjlx": 2, "lat": 30.943009 }, { "qy_id": 495, "azdz": "临港大道两港大道规划路以西400米", "dqjj": "", "lng": 121.887352, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202007", "sbmc": "临港大道两港大道规划路以西400米", "ipv4": "10.118.224.57", "id": 7459, "sbzt": "OFF", "sxjlx": 2, "lat": 30.942834 }, { "qy_id": 495, "azdz": "临港大道两港大道规划路以西400米", "dqjj": "", "lng": 121.887266, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202008", "sbmc": "临港大道两港大道规划路以西400米", "ipv4": "10.118.224.58", "id": 7460, "sbzt": "OFF", "sxjlx": 2, "lat": 30.94277 }, { "qy_id": 495, "azdz": "临港大道上三灶港北路以西205米", "dqjj": "", "lng": 121.86874, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202009", "sbmc": "临港大道上三灶港北路以西205米", "ipv4": "10.118.224.60", "id": 7461, "sbzt": "OFF", "sxjlx": 2, "lat": 30.951334 }, { "qy_id": 495, "azdz": "临港大道上三灶港北路以西205米", "dqjj": "", "lng": 121.868696, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202010", "sbmc": "临港大道上三灶港北路以西205米", "ipv4": "10.118.224.61", "id": 7462, "sbzt": "OFF", "sxjlx": 2, "lat": 30.951292 }, { "qy_id": 495, "azdz": "临港大道上三灶港北路以西205米", "dqjj": "", "lng": 121.868642, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202011", "sbmc": "临港大道上三灶港北路以西205米", "ipv4": "10.118.224.63", "id": 7463, "sbzt": "OFF", "sxjlx": 2, "lat": 30.951204 }, { "qy_id": 495, "azdz": "临港大道上三灶港北路以西205米", "dqjj": "", "lng": 121.868599, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202012", "sbmc": "临港大道上三灶港北路以西205米", "ipv4": "10.118.224.64", "id": 7464, "sbzt": "OFF", "sxjlx": 2, "lat": 30.951131 }, { "qy_id": 495, "azdz": "临港大道老芦公路以西200米", "dqjj": "", "lng": 121.864075, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202013", "sbmc": "临港大道老芦公路以西200米", "ipv4": "10.118.224.66", "id": 7465, "sbzt": "OFF", "sxjlx": 2, "lat": 30.953443 }, { "qy_id": 495, "azdz": "临港大道老芦公路以西200米", "dqjj": "", "lng": 121.864037, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202014", "sbmc": "临港大道老芦公路以西200米", "ipv4": "10.118.224.67", "id": 7466, "sbzt": "OFF", "sxjlx": 2, "lat": 30.953434 }, { "qy_id": 495, "azdz": "临港大道老芦公路以西200米", "dqjj": "", "lng": 121.863877, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202015", "sbmc": "临港大道老芦公路以西200米", "ipv4": "10.118.224.69", "id": 7467, "sbzt": "OFF", "sxjlx": 2, "lat": 30.95324 }, { "qy_id": 495, "azdz": "临港大道老芦公路以西200米", "dqjj": "", "lng": 121.863882, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202016", "sbmc": "临港大道老芦公路以西200米", "ipv4": "10.118.224.70", "id": 7468, "sbzt": "OFF", "sxjlx": 2, "lat": 30.953208 }, { "qy_id": 495, "azdz": "临港大道上雪南路以东230米", "dqjj": "", "lng": 121.854118, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202017", "sbmc": "临港大道上雪南路以东230米", "ipv4": "10.118.224.72", "id": 7469, "sbzt": "OFF", "sxjlx": 2, "lat": 30.957894 }, { "qy_id": 495, "azdz": "临港大道上雪南路以东230米", "dqjj": "", "lng": 121.85407, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202018", "sbmc": "临港大道上雪南路以东230米", "ipv4": "10.118.224.73", "id": 7470, "sbzt": "OFF", "sxjlx": 2, "lat": 30.957844 }, { "qy_id": 495, "azdz": "临港大道上雪南路以东230米", "dqjj": "", "lng": 121.853973, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202019", "sbmc": "临港大道上雪南路以东230米", "ipv4": "10.118.224.75", "id": 7471, "sbzt": "OFF", "sxjlx": 2, "lat": 30.957641 }, { "qy_id": 495, "azdz": "临港大道上雪南路以东230米", "dqjj": "", "lng": 121.85393, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202020", "sbmc": "临港大道上雪南路以东230米", "ipv4": "10.118.224.76", "id": 7472, "sbzt": "OFF", "sxjlx": 2, "lat": 30.957609 }, { "qy_id": 495, "azdz": "临港大道上书院地铁站停车场以西250米", "dqjj": "", "lng": 121.849163, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202021", "sbmc": "临港大道上书院地铁站停车场以西250米", "ipv4": "10.118.224.78", "id": 7473, "sbzt": "OFF", "sxjlx": 2, "lat": 30.960092 }, { "qy_id": 495, "azdz": "临港大道上书院地铁站停车场以西250米", "dqjj": "", "lng": 121.849115, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202022", "sbmc": "临港大道上书院地铁站停车场以西250米", "ipv4": "10.118.224.79", "id": 7474, "sbzt": "OFF", "sxjlx": 2, "lat": 30.960037 }, { "qy_id": 495, "azdz": "临港大道上书院地铁站停车场以西250米", "dqjj": "", "lng": 121.848948, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202023", "sbmc": "临港大道上书院地铁站停车场以西250米", "ipv4": "10.118.224.81", "id": 7475, "sbzt": "OFF", "sxjlx": 2, "lat": 30.95983 }, { "qy_id": 495, "azdz": "临港大道上书院地铁站停车场以西250米", "dqjj": "", "lng": 121.848927, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202024", "sbmc": "临港大道上书院地铁站停车场以西250米", "ipv4": "10.118.224.82", "id": 7476, "sbzt": "OFF", "sxjlx": 2, "lat": 30.959775 }, { "qy_id": 495, "azdz": "临港大道上三三公路以东250米", "dqjj": "", "lng": 121.840196, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202025", "sbmc": "临港大道上三三公路以东250米", "ipv4": "10.118.224.84", "id": 7477, "sbzt": "OFF", "sxjlx": 2, "lat": 30.964063 }, { "qy_id": 495, "azdz": "临港大道上三三公路以东250米", "dqjj": "", "lng": 121.840137, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202026", "sbmc": "临港大道上三三公路以东250米", "ipv4": "10.118.224.85", "id": 7478, "sbzt": "OFF", "sxjlx": 2, "lat": 30.963999 }, { "qy_id": 495, "azdz": "临港大道上三三公路以东250米", "dqjj": "", "lng": 121.840148, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202027", "sbmc": "临港大道上三三公路以东250米", "ipv4": "10.118.224.87", "id": 7479, "sbzt": "OFF", "sxjlx": 2, "lat": 30.963967 }, { "qy_id": 495, "azdz": "临港大道上三三公路以东250米", "dqjj": "", "lng": 121.840025, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202028", "sbmc": "临港大道上三三公路以东250米", "ipv4": "10.118.224.88", "id": 7480, "sbzt": "OFF", "sxjlx": 2, "lat": 30.963847 }, { "qy_id": 495, "azdz": "临港大道上万牧路以东200米", "dqjj": "", "lng": 121.82453, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202001", "sbmc": "临港大道上万牧路以东200米", "ipv4": "10.118.224.90", "id": 7481, "sbzt": "OFF", "sxjlx": 2, "lat": 30.970879 }, { "qy_id": 495, "azdz": "临港大道上万牧路以东200米", "dqjj": "", "lng": 121.824358, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202002", "sbmc": "临港大道上万牧路以东200米", "ipv4": "10.118.224.91", "id": 7482, "sbzt": "OFF", "sxjlx": 2, "lat": 30.970705 }, { "qy_id": 495, "azdz": "临港大道上万牧路以东200米", "dqjj": "", "lng": 121.82439, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202003", "sbmc": "临港大道上万牧路以东200米", "ipv4": "10.118.224.93", "id": 7483, "sbzt": "OFF", "sxjlx": 2, "lat": 30.970677 }, { "qy_id": 495, "azdz": "临港大道上万牧路以东200米", "dqjj": "", "lng": 121.824347, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202004", "sbmc": "临港大道上万牧路以东200米", "ipv4": "10.118.224.94", "id": 7484, "sbzt": "OFF", "sxjlx": 2, "lat": 30.970668 }, { "qy_id": 495, "azdz": "临港大道万和路以东200米", "dqjj": "", "lng": 121.820585, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202029", "sbmc": "临港大道万和路以东200米", "ipv4": "10.118.224.96", "id": 7485, "sbzt": "OFF", "sxjlx": 2, "lat": 30.972644 }, { "qy_id": 495, "azdz": "临港大道万和路以东200米", "dqjj": "", "lng": 121.820413, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202030", "sbmc": "临港大道万和路以东200米", "ipv4": "10.118.224.97", "id": 7486, "sbzt": "OFF", "sxjlx": 2, "lat": 30.972484 }, { "qy_id": 495, "azdz": "临港大道万和路以东200米", "dqjj": "", "lng": 121.820585, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202031", "sbmc": "临港大道万和路以东200米", "ipv4": "10.118.224.99", "id": 7487, "sbzt": "OFF", "sxjlx": 2, "lat": 30.972631 }, { "qy_id": 495, "azdz": "临港大道万和路以东200米", "dqjj": "", "lng": 121.820413, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326202032", "sbmc": "临港大道万和路以东200米", "ipv4": "10.118.224.100", "id": 7488, "sbzt": "OFF", "sxjlx": 2, "lat": 30.972428 }, { "qy_id": 495, "azdz": "临港大道祥凯路以东200米", "dqjj": "", "lng": 121.814629, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203009", "sbmc": "临港大道祥凯路以东200米", "ipv4": "10.118.224.102", "id": 7489, "sbzt": "OFF", "sxjlx": 2, "lat": 30.975244 }, { "qy_id": 495, "azdz": "临港大道祥凯路以东200米", "dqjj": "", "lng": 121.814602, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203010", "sbmc": "临港大道祥凯路以东200米", "ipv4": "10.118.224.103", "id": 7490, "sbzt": "OFF", "sxjlx": 2, "lat": 30.975226 }, { "qy_id": 495, "azdz": "临港大道祥凯路以东200米", "dqjj": "", "lng": 121.814516, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203011", "sbmc": "临港大道祥凯路以东200米", "ipv4": "10.118.224.105", "id": 7491, "sbzt": "OFF", "sxjlx": 2, "lat": 30.975042 }, { "qy_id": 495, "azdz": "临港大道祥凯路以东200米", "dqjj": "", "lng": 121.814473, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203012", "sbmc": "临港大道祥凯路以东200米", "ipv4": "10.118.224.106", "id": 7492, "sbzt": "OFF", "sxjlx": 2, "lat": 30.975006 }, { "qy_id": 496, "azdz": "申港大道环湖西二路以西距西二路230米", "dqjj": "", "lng": 121.919087, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203013", "sbmc": "申港大道环湖西二路以西距西二路230米", "ipv4": "10.118.224.108", "id": 7493, "sbzt": "ON", "sxjlx": 2, "lat": 30.897725 }, { "qy_id": 496, "azdz": "申港大道环湖西二路以西距西二路230米", "dqjj": "", "lng": 121.919087, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203014", "sbmc": "申港大道环湖西二路以西距西二路230米", "ipv4": "10.118.224.109", "id": 7494, "sbzt": "ON", "sxjlx": 2, "lat": 30.897629 }, { "qy_id": 496, "azdz": "申港大道环湖西二路以西距西二路230米", "dqjj": "", "lng": 121.919098, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203015", "sbmc": "申港大道环湖西二路以西距西二路230米", "ipv4": "10.118.224.111", "id": 7495, "sbzt": "OFF", "sxjlx": 2, "lat": 30.897339 }, { "qy_id": 496, "azdz": "申港大道环湖西二路以西距西二路230米", "dqjj": "", "lng": 121.919055, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203016", "sbmc": "申港大道环湖西二路以西距西二路230米", "ipv4": "10.118.224.112", "id": 7496, "sbzt": "ON", "sxjlx": 2, "lat": 30.897293 }, { "qy_id": 558, "azdz": "申港大道茉莉路以东距茉莉路口206米", "dqjj": "", "lng": 121.91015, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203017", "sbmc": "申港大道茉莉路以东距茉莉路口206米", "ipv4": "10.118.224.114", "id": 7497, "sbzt": "ON", "sxjlx": 2, "lat": 30.897705 }, { "qy_id": 495, "azdz": "申港大道茉莉路以东距茉莉路口206米", "dqjj": "", "lng": 121.910118, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203018", "sbmc": "申港大道茉莉路以东距茉莉路口206米", "ipv4": "10.118.224.115", "id": 7498, "sbzt": "OFF", "sxjlx": 2, "lat": 30.897613 }, { "qy_id": 558, "azdz": "申港大道茉莉路以东距茉莉路口206米", "dqjj": "", "lng": 121.91014, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203019", "sbmc": "申港大道茉莉路以东距茉莉路口206米", "ipv4": "10.118.224.117", "id": 7499, "sbzt": "ON", "sxjlx": 2, "lat": 30.897364 }, { "qy_id": 558, "azdz": "申港大道茉莉路以东距茉莉路口206米", "dqjj": "", "lng": 121.910108, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203020", "sbmc": "申港大道茉莉路以东距茉莉路口206米", "ipv4": "10.118.224.118", "id": 7500, "sbzt": "ON", "sxjlx": 2, "lat": 30.897282 }, { "qy_id": 496, "azdz": "申港大道茉莉路以西距茉莉路口250米", "dqjj": "", "lng": 121.90329, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203021", "sbmc": "申港大道茉莉路以西距茉莉路口250米", "ipv4": "10.118.224.120", "id": 7501, "sbzt": "ON", "sxjlx": 2, "lat": 30.897704 }, { "qy_id": 496, "azdz": "申港大道茉莉路以西距茉莉路口250米", "dqjj": "", "lng": 121.903269, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203022", "sbmc": "申港大道茉莉路以西距茉莉路口250米", "ipv4": "10.118.224.121", "id": 7502, "sbzt": "ON", "sxjlx": 2, "lat": 30.897603 }, { "qy_id": 496, "azdz": "申港大道茉莉路以西距茉莉路口250米", "dqjj": "", "lng": 121.903269, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203023", "sbmc": "申港大道茉莉路以西距茉莉路口250米", "ipv4": "10.118.224.123", "id": 7759, "sbzt": "ON", "sxjlx": 2, "lat": 30.897391 }, { "qy_id": 496, "azdz": "申港大道茉莉路以西距茉莉路口250米", "dqjj": "", "lng": 121.90328, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203024", "sbmc": "申港大道茉莉路以西距茉莉路口250米", "ipv4": "10.118.224.124", "id": 7760, "sbzt": "OFF", "sxjlx": 2, "lat": 30.897299 }, { "qy_id": 496, "azdz": "申港大道水华路以东250米", "dqjj": "", "lng": 121.891175, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203025", "sbmc": "申港大道水华路以东250米", "ipv4": "10.118.224.126", "id": 7761, "sbzt": "ON", "sxjlx": 2, "lat": 30.8977 }, { "qy_id": 496, "azdz": "申港大道水华路以东250米", "dqjj": "", "lng": 121.891164, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203026", "sbmc": "申港大道水华路以东250米", "ipv4": "10.118.224.127", "id": 7762, "sbzt": "ON", "sxjlx": 2, "lat": 30.897646 }, { "qy_id": 496, "azdz": "申港大道水华路以东250米", "dqjj": "", "lng": 121.891143, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203027", "sbmc": "申港大道水华路以东250米", "ipv4": "10.118.224.129", "id": 7763, "sbzt": "ON", "sxjlx": 2, "lat": 30.897466 }, { "qy_id": 496, "azdz": "申港大道水华路以东250米", "dqjj": "", "lng": 121.891153, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203028", "sbmc": "申港大道水华路以东250米", "ipv4": "10.118.224.130", "id": 7764, "sbzt": "ON", "sxjlx": 2, "lat": 30.897438 }, { "qy_id": 495, "azdz": "申港大道塘下公路以西200米", "dqjj": "", "lng": 121.882132, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203001", "sbmc": "申港大道塘下公路以西200米", "ipv4": "10.118.224.132", "id": 7765, "sbzt": "OFF", "sxjlx": 2, "lat": 30.897632 }, { "qy_id": 495, "azdz": "申港大道塘下公路以西200米", "dqjj": "", "lng": 121.882124, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203002", "sbmc": "申港大道塘下公路以西200米", "ipv4": "10.118.224.134", "id": 7766, "sbzt": "ON", "sxjlx": 2, "lat": 30.897545 }, { "qy_id": 495, "azdz": "申港大道塘下公路以西550米", "dqjj": "", "lng": 121.88213, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203003", "sbmc": "申港大道塘下公路以西550米", "ipv4": "10.118.224.136", "id": 7767, "sbzt": "ON", "sxjlx": 2, "lat": 30.897504 }, { "qy_id": 495, "azdz": "申港大道塘下公路以西550米", "dqjj": "", "lng": 121.882124, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203004", "sbmc": "申港大道塘下公路以西550米", "ipv4": "10.118.224.138", "id": 7768, "sbzt": "ON", "sxjlx": 2, "lat": 30.897707 }, { "qy_id": 561, "azdz": "申港大道上S3匝道", "dqjj": "", "lng": 0.1, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203005", "sbmc": "申港大道上S3匝道", "ipv4": "10.118.224.140", "id": 7769, "sbzt": "ON", "sxjlx": 2, "lat": 0.1 }, { "qy_id": 496, "azdz": "夏栎路环湖西三路路口北侧", "dqjj": "", "lng": 121.921733, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203006", "sbmc": "夏栎路环湖西三路路口北侧", "ipv4": "10.118.224.142", "id": 7770, "sbzt": "ON", "sxjlx": 2, "lat": 30.910314 }, { "qy_id": 496, "azdz": "夏栎路环湖西三路路口北侧", "dqjj": "", "lng": 121.921679, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203007", "sbmc": "夏栎路环湖西三路路口北侧", "ipv4": "10.118.224.143", "id": 7771, "sbzt": "ON", "sxjlx": 2, "lat": 30.910332 }, { "qy_id": 496, "azdz": "夏栎路环湖西三路路口北侧", "dqjj": "", "lng": 121.921883, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203008", "sbmc": "夏栎路环湖西三路路口北侧", "ipv4": "10.118.224.145", "id": 7772, "sbzt": "OFF", "sxjlx": 2, "lat": 30.910231 }, { "qy_id": 496, "azdz": "夏栎路环湖西三路路口北侧", "dqjj": "", "lng": 121.921915, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203029", "sbmc": "夏栎路环湖西三路路口北侧", "ipv4": "10.118.224.146", "id": 7773, "sbzt": "ON", "sxjlx": 2, "lat": 30.910185 }, { "qy_id": 496, "azdz": "花柏路环湖西三路路口北侧", "dqjj": "", "lng": 121.918126, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203030", "sbmc": "花柏路环湖西三路路口北侧", "ipv4": "10.118.224.148", "id": 7774, "sbzt": "ON", "sxjlx": 2, "lat": 30.904752 }, { "qy_id": 496, "azdz": "花柏路环湖西三路路口北侧", "dqjj": "", "lng": 121.917975, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203031", "sbmc": "花柏路环湖西三路路口北侧", "ipv4": "10.118.224.149", "id": 7775, "sbzt": "ON", "sxjlx": 2, "lat": 30.904752 }, { "qy_id": 496, "azdz": "花柏路环湖西三路路口北侧", "dqjj": "", "lng": 121.918254, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203032", "sbmc": "花柏路环湖西三路路口北侧", "ipv4": "10.118.224.151", "id": 7776, "sbzt": "ON", "sxjlx": 2, "lat": 30.904688 }, { "qy_id": 496, "azdz": "花柏路环湖西三路路口北侧", "dqjj": "", "lng": 121.918351, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326203033", "sbmc": "花柏路环湖西三路路口北侧", "ipv4": "10.118.224.152", "id": 7777, "sbzt": "ON", "sxjlx": 2, "lat": 30.904678 }, { "qy_id": 496, "azdz": "沪城环路杞青路北侧310米", "dqjj": "", "lng": 121.905008, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204001", "sbmc": "沪城环路杞青路北侧310米", "ipv4": "10.118.224.196", "id": 7778, "sbzt": "ON", "sxjlx": 2, "lat": 30.921845 }, { "qy_id": 496, "azdz": "沪城环路杞青路北侧310米", "dqjj": "", "lng": 121.905212, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204002", "sbmc": "沪城环路杞青路北侧310米", "ipv4": "10.118.224.197", "id": 7779, "sbzt": "ON", "sxjlx": 2, "lat": 30.921707 }, { "qy_id": 496, "azdz": "沪城环路杞青路北侧310米", "dqjj": "", "lng": 121.904901, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204003", "sbmc": "沪城环路杞青路北侧310米", "ipv4": "10.118.224.199", "id": 7780, "sbzt": "ON", "sxjlx": 2, "lat": 30.921946 }, { "qy_id": 496, "azdz": "沪城环路杞青路北侧310米", "dqjj": "", "lng": 121.904794, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204004", "sbmc": "沪城环路杞青路北侧310米", "ipv4": "10.118.224.200", "id": 7781, "sbzt": "ON", "sxjlx": 2, "lat": 30.921965 }, { "qy_id": 496, "azdz": "沪城环路杞青路南侧200米", "dqjj": "", "lng": 121.902479, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204005", "sbmc": "沪城环路杞青路南侧200米", "ipv4": "10.118.224.155", "id": 7782, "sbzt": "ON", "sxjlx": 2, "lat": 30.918258 }, { "qy_id": 495, "azdz": "沪城环路杞青路南侧200米", "dqjj": "", "lng": 121.90243, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204006", "sbmc": "沪城环路杞青路南侧200米", "ipv4": "10.118.224.156", "id": 7783, "sbzt": "ON", "sxjlx": 2, "lat": 30.918286 }, { "qy_id": 496, "azdz": "沪城环路杞青路南侧200米", "dqjj": "", "lng": 121.902141, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204007", "sbmc": "沪城环路杞青路南侧200米", "ipv4": "10.118.224.158", "id": 7784, "sbzt": "ON", "sxjlx": 2, "lat": 30.918433 }, { "qy_id": 496, "azdz": "沪城环路杞青路南侧200米", "dqjj": "", "lng": 121.902098, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204008", "sbmc": "沪城环路杞青路南侧200米", "ipv4": "10.118.224.159", "id": 7785, "sbzt": "ON", "sxjlx": 2, "lat": 30.918438 }, { "qy_id": 496, "azdz": "沪城环路花柏路北侧 230米", "dqjj": "", "lng": 121.898082, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204009", "sbmc": "沪城环路花柏路北侧 230米", "ipv4": "10.118.224.161", "id": 7786, "sbzt": "ON", "sxjlx": 2, "lat": 30.908017 }, { "qy_id": 496, "azdz": "沪城环路花柏路北侧 230米", "dqjj": "", "lng": 121.898012, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204010", "sbmc": "沪城环路花柏路北侧 230米", "ipv4": "10.118.224.162", "id": 7787, "sbzt": "ON", "sxjlx": 2, "lat": 30.908027 }, { "qy_id": 496, "azdz": "沪城环路花柏路北侧 230米", "dqjj": "", "lng": 121.89776, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204011", "sbmc": "沪城环路花柏路北侧 230米", "ipv4": "10.118.224.164", "id": 7788, "sbzt": "ON", "sxjlx": 2, "lat": 30.908082 }, { "qy_id": 496, "azdz": "沪城环路花柏路北侧 230米", "dqjj": "", "lng": 121.897696, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204012", "sbmc": "沪城环路花柏路北侧 230米", "ipv4": "10.118.224.165", "id": 7789, "sbzt": "ON", "sxjlx": 2, "lat": 30.908073 }, { "qy_id": 500, "azdz": "R2路", "dqjj": "", "lng": 121.903416, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204013", "sbmc": "R2路", "ipv4": "10.118.224.167", "id": 7790, "sbzt": "ON", "sxjlx": 2, "lat": 30.914794 }, { "qy_id": 500, "azdz": "R2路", "dqjj": "", "lng": 121.90347, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204014", "sbmc": "R2路", "ipv4": "10.118.224.168", "id": 7791, "sbzt": "ON", "sxjlx": 2, "lat": 30.914748 }, { "qy_id": 500, "azdz": "R2路", "dqjj": "", "lng": 121.903518, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204015", "sbmc": "R2路", "ipv4": "10.118.224.170", "id": 7792, "sbzt": "ON", "sxjlx": 2, "lat": 30.914721 }, { "qy_id": 496, "azdz": "杞青路铃兰路以西150米", "dqjj": "", "lng": 121.908526, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204017", "sbmc": "杞青路铃兰路以西150米", "ipv4": "10.118.224.173", "id": 7793, "sbzt": "ON", "sxjlx": 2, "lat": 30.914769 }, { "qy_id": 496, "azdz": "杞青路铃兰路以西150米", "dqjj": "", "lng": 121.908419, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204018", "sbmc": "杞青路铃兰路以西150米", "ipv4": "10.118.224.174", "id": 7794, "sbzt": "ON", "sxjlx": 2, "lat": 30.914705 }, { "qy_id": 496, "azdz": "杞青路铃兰路以西150米", "dqjj": "", "lng": 121.908215, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204019", "sbmc": "杞青路铃兰路以西150米", "ipv4": "10.118.224.176", "id": 7795, "sbzt": "ON", "sxjlx": 2, "lat": 30.914627 }, { "qy_id": 496, "azdz": "杞青路铃兰路以西150米", "dqjj": "", "lng": 121.908231, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204020", "sbmc": "杞青路铃兰路以西150米", "ipv4": "10.118.224.177", "id": 7796, "sbzt": "ON", "sxjlx": 2, "lat": 30.914553 }, { "qy_id": 496, "azdz": "沪城环路花柏路南侧200米", "dqjj": "", "lng": 121.897398, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204021", "sbmc": "沪城环路花柏路南侧200米", "ipv4": "10.118.224.179", "id": 7797, "sbzt": "ON", "sxjlx": 2, "lat": 30.902641 }, { "qy_id": 496, "azdz": "沪城环路花柏路南侧200米", "dqjj": "", "lng": 121.897457, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204022", "sbmc": "沪城环路花柏路南侧200米", "ipv4": "10.118.224.180", "id": 7798, "sbzt": "ON", "sxjlx": 2, "lat": 30.902635 }, { "qy_id": 496, "azdz": "沪城环路花柏路南侧200米", "dqjj": "", "lng": 121.897125, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204023", "sbmc": "沪城环路花柏路南侧200米", "ipv4": "10.118.224.182", "id": 7799, "sbzt": "ON", "sxjlx": 2, "lat": 30.902644 }, { "qy_id": 496, "azdz": "沪城环路花柏路南侧200米", "dqjj": "", "lng": 121.897023, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204024", "sbmc": "沪城环路花柏路南侧200米", "ipv4": "10.118.224.183", "id": 7800, "sbzt": "ON", "sxjlx": 2, "lat": 30.902658 }, { "qy_id": 496, "azdz": "铃兰路夏栎路以南280米", "dqjj": "", "lng": 121.911905, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204025", "sbmc": "铃兰路夏栎路以南280米", "ipv4": "10.118.224.185", "id": 7801, "sbzt": "ON", "sxjlx": 2, "lat": 30.914497 }, { "qy_id": 496, "azdz": "铃兰路夏栎路以南280米", "dqjj": "", "lng": 121.911765, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204026", "sbmc": "铃兰路夏栎路以南280米", "ipv4": "10.118.224.188", "id": 7802, "sbzt": "ON", "sxjlx": 2, "lat": 30.914613 }, { "qy_id": 496, "azdz": "菘萝路花柏路以北320米", "dqjj": "", "lng": 121.910362, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204027", "sbmc": "菘萝路花柏路以北320米", "ipv4": "10.118.224.191", "id": 7803, "sbzt": "ON", "sxjlx": 2, "lat": 30.909217 }, { "qy_id": 496, "azdz": "菘萝路花柏路以北320米", "dqjj": "", "lng": 121.910416, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326204028", "sbmc": "菘萝路花柏路以北320米", "ipv4": "10.118.224.194", "id": 7804, "sbzt": "ON", "sxjlx": 2, "lat": 30.909203 }, { "qy_id": 496, "azdz": "水松路环湖西二路", "dqjj": "", "lng": 121.925546, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205001", "sbmc": "水松路环湖西二路", "ipv4": "10.118.225.6", "id": 7805, "sbzt": "ON", "sxjlx": 2, "lat": 30.906491 }, { "qy_id": 496, "azdz": "水松路环湖西二路", "dqjj": "", "lng": 121.925384, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205003", "sbmc": "水松路环湖西二路", "ipv4": "10.118.225.7", "id": 7806, "sbzt": "ON", "sxjlx": 2, "lat": 30.906634 }, { "qy_id": 496, "azdz": "水松路环湖西二路", "dqjj": "", "lng": 121.925491, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205004", "sbmc": "水松路环湖西二路", "ipv4": "10.118.225.8", "id": 7807, "sbzt": "ON", "sxjlx": 2, "lat": 30.906523 }, { "qy_id": 495, "azdz": "水松路环湖西二路", "dqjj": "", "lng": 121.925438, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205005", "sbmc": "水松路环湖西二路", "ipv4": "10.118.225.9", "id": 7808, "sbzt": "ON", "sxjlx": 2, "lat": 30.906634 }, { "qy_id": 496, "azdz": "沪城环路花柏路", "dqjj": "", "lng": 121.897638, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205006", "sbmc": "沪城环路花柏路", "ipv4": "10.118.225.16", "id": 7809, "sbzt": "ON", "sxjlx": 2, "lat": 30.904863 }, { "qy_id": 496, "azdz": "沪城环路花柏路", "dqjj": "", "lng": 121.897536, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205007", "sbmc": "沪城环路花柏路", "ipv4": "10.118.225.17", "id": 7810, "sbzt": "ON", "sxjlx": 2, "lat": 30.904863 }, { "qy_id": 496, "azdz": "沪城环路花柏路", "dqjj": "", "lng": 121.897472, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205008", "sbmc": "沪城环路花柏路", "ipv4": "10.118.225.18", "id": 7811, "sbzt": "ON", "sxjlx": 2, "lat": 30.904872 }, { "qy_id": 496, "azdz": "沪城环路花柏路", "dqjj": "", "lng": 121.897375, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205009", "sbmc": "沪城环路花柏路", "ipv4": "10.118.225.19", "id": 7812, "sbzt": "ON", "sxjlx": 2, "lat": 30.904891 }, { "qy_id": 496, "azdz": "沪城环路花柏路", "dqjj": "", "lng": 121.89729, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205010", "sbmc": "沪城环路花柏路", "ipv4": "10.118.225.20", "id": 7813, "sbzt": "ON", "sxjlx": 2, "lat": 30.904863 }, { "qy_id": 496, "azdz": "沪城环路花柏路", "dqjj": "", "lng": 121.897156, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205011", "sbmc": "沪城环路花柏路", "ipv4": "10.118.225.21", "id": 7814, "sbzt": "ON", "sxjlx": 2, "lat": 30.904845 }, { "qy_id": 496, "azdz": "沪城环路花柏路", "dqjj": "", "lng": 121.897177, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205012", "sbmc": "沪城环路花柏路", "ipv4": "10.118.225.22", "id": 7815, "sbzt": "ON", "sxjlx": 2, "lat": 30.904882 }, { "qy_id": 496, "azdz": "沪城环路花柏路", "dqjj": "", "lng": 121.897145, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205013", "sbmc": "沪城环路花柏路", "ipv4": "10.118.225.23", "id": 7816, "sbzt": "ON", "sxjlx": 2, "lat": 30.904863 }, { "qy_id": 496, "azdz": "茉莉路花柏路", "dqjj": "", "lng": 121.906958, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205014", "sbmc": "茉莉路花柏路", "ipv4": "10.118.225.34", "id": 7817, "sbzt": "ON", "sxjlx": 2, "lat": 30.905331 }, { "qy_id": 496, "azdz": "茉莉路花柏路", "dqjj": "", "lng": 121.906977, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205015", "sbmc": "茉莉路花柏路", "ipv4": "10.118.225.35", "id": 7818, "sbzt": "ON", "sxjlx": 2, "lat": 30.905248 }, { "qy_id": 495, "azdz": "茉莉路花柏路", "dqjj": "", "lng": 121.906977, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205016", "sbmc": "茉莉路花柏路", "ipv4": "10.118.225.36", "id": 7819, "sbzt": "ON", "sxjlx": 2, "lat": 30.905202 }, { "qy_id": 496, "azdz": "茉莉路花柏路", "dqjj": "", "lng": 121.906945, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205017", "sbmc": "茉莉路花柏路", "ipv4": "10.118.225.37", "id": 7820, "sbzt": "ON", "sxjlx": 2, "lat": 30.905193 }, { "qy_id": 496, "azdz": "茉莉路花柏路", "dqjj": "", "lng": 121.906956, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205018", "sbmc": "茉莉路花柏路", "ipv4": "10.118.225.38", "id": 7821, "sbzt": "ON", "sxjlx": 2, "lat": 30.905138 }, { "qy_id": 496, "azdz": "茉莉路花柏路", "dqjj": "", "lng": 121.906741, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205019", "sbmc": "茉莉路花柏路", "ipv4": "10.118.225.39", "id": 7822, "sbzt": "ON", "sxjlx": 2, "lat": 30.905294 }, { "qy_id": 495, "azdz": "茉莉路花柏路", "dqjj": "", "lng": 121.906838, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205020", "sbmc": "茉莉路花柏路", "ipv4": "10.118.225.40", "id": 7823, "sbzt": "ON", "sxjlx": 2, "lat": 30.905101 }, { "qy_id": 496, "azdz": "茉莉路竹柏路", "dqjj": "", "lng": 121.906188, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205021", "sbmc": "茉莉路竹柏路", "ipv4": "10.118.225.50", "id": 7824, "sbzt": "ON", "sxjlx": 2, "lat": 30.900883 }, { "qy_id": 496, "azdz": "茉莉路竹柏路", "dqjj": "", "lng": 121.906184, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205022", "sbmc": "茉莉路竹柏路", "ipv4": "10.118.225.51", "id": 7825, "sbzt": "ON", "sxjlx": 2, "lat": 30.900746 }, { "qy_id": 496, "azdz": "茉莉路竹柏路", "dqjj": "", "lng": 121.9062, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205024", "sbmc": "茉莉路竹柏路", "ipv4": "10.118.225.52", "id": 7826, "sbzt": "ON", "sxjlx": 2, "lat": 30.900649 }, { "qy_id": 496, "azdz": "茉莉路竹柏路", "dqjj": "", "lng": 121.90619, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205023", "sbmc": "茉莉路竹柏路", "ipv4": "10.118.225.53", "id": 7827, "sbzt": "ON", "sxjlx": 2, "lat": 30.900796 }, { "qy_id": 496, "azdz": "紫荆花路竹柏路", "dqjj": "", "lng": 121.9155, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205025", "sbmc": "紫荆花路竹柏路", "ipv4": "10.118.225.60", "id": 7828, "sbzt": "ON", "sxjlx": 2, "lat": 30.900724 }, { "qy_id": 496, "azdz": "紫荆花路竹柏路", "dqjj": "", "lng": 121.915446, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205026", "sbmc": "紫荆花路竹柏路", "ipv4": "10.118.225.61", "id": 7829, "sbzt": "ON", "sxjlx": 2, "lat": 30.900716 }, { "qy_id": 496, "azdz": "紫荆花路竹柏路", "dqjj": "", "lng": 121.915489, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205027", "sbmc": "紫荆花路竹柏路", "ipv4": "10.118.225.62", "id": 7830, "sbzt": "ON", "sxjlx": 2, "lat": 30.900647 }, { "qy_id": 496, "azdz": "紫荆花路竹柏路", "dqjj": "", "lng": 121.915435, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205028", "sbmc": "紫荆花路竹柏路", "ipv4": "10.118.225.63", "id": 7831, "sbzt": "ON", "sxjlx": 2, "lat": 30.900647 }, { "qy_id": 496, "azdz": "花柏路环湖西三路", "dqjj": "", "lng": 121.918179, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205029", "sbmc": "花柏路环湖西三路", "ipv4": "10.118.225.70", "id": 7832, "sbzt": "ON", "sxjlx": 2, "lat": 30.904711 }, { "qy_id": 496, "azdz": "花柏路环湖西三路", "dqjj": "", "lng": 121.918179, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205030", "sbmc": "花柏路环湖西三路", "ipv4": "10.118.225.71", "id": 7833, "sbzt": "ON", "sxjlx": 2, "lat": 30.904711 }, { "qy_id": 496, "azdz": "花柏路环湖西三路", "dqjj": "", "lng": 121.918313, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205031", "sbmc": "花柏路环湖西三路", "ipv4": "10.118.225.72", "id": 7834, "sbzt": "ON", "sxjlx": 2, "lat": 30.904675 }, { "qy_id": 496, "azdz": "花柏路环湖西三路", "dqjj": "", "lng": 121.918093, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205032", "sbmc": "花柏路环湖西三路", "ipv4": "10.118.225.73", "id": 7835, "sbzt": "ON", "sxjlx": 2, "lat": 30.904721 }, { "qy_id": 496, "azdz": "花柏路环湖西三路", "dqjj": "", "lng": 121.918061, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205033", "sbmc": "花柏路环湖西三路", "ipv4": "10.118.225.74", "id": 7836, "sbzt": "ON", "sxjlx": 2, "lat": 30.904739 }, { "qy_id": 495, "azdz": "花柏路环湖西三路", "dqjj": "", "lng": 121.918018, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326205034", "sbmc": "花柏路环湖西三路", "ipv4": "10.118.225.75", "id": 7837, "sbzt": "OFF", "sxjlx": 2, "lat": 30.904753 }, { "qy_id": 496, "azdz": "铃兰路杞青路", "dqjj": "", "lng": 121.910241, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206001", "sbmc": "铃兰路杞青路", "ipv4": "10.118.225.84", "id": 7838, "sbzt": "ON", "sxjlx": 2, "lat": 30.909226 }, { "qy_id": 496, "azdz": "铃兰路杞青路", "dqjj": "", "lng": 121.91037, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206002", "sbmc": "铃兰路杞青路", "ipv4": "10.118.225.85", "id": 7839, "sbzt": "ON", "sxjlx": 2, "lat": 30.909185 }, { "qy_id": 496, "azdz": "铃兰路杞青路", "dqjj": "", "lng": 121.910322, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206003", "sbmc": "铃兰路杞青路", "ipv4": "10.118.225.86", "id": 7840, "sbzt": "ON", "sxjlx": 2, "lat": 30.909199 }, { "qy_id": 558, "azdz": "铃兰路杞青路", "dqjj": "", "lng": 121.910279, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206004", "sbmc": "铃兰路杞青路", "ipv4": "10.118.225.87", "id": 7841, "sbzt": "ON", "sxjlx": 2, "lat": 30.909203 }, { "qy_id": 496, "azdz": "铃兰路杞青路", "dqjj": "", "lng": 121.910236, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206005", "sbmc": "铃兰路杞青路", "ipv4": "10.118.225.88", "id": 7842, "sbzt": "ON", "sxjlx": 2, "lat": 30.909171 }, { "qy_id": 496, "azdz": "铃兰路杞青路", "dqjj": "", "lng": 121.910359, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206006", "sbmc": "铃兰路杞青路", "ipv4": "10.118.225.89", "id": 7843, "sbzt": "ON", "sxjlx": 2, "lat": 30.909153 }, { "qy_id": 561, "azdz": " 夏栎路铃兰路", "dqjj": "", "lng": 121.913753, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206007", "sbmc": " 夏栎路铃兰路", "ipv4": "10.118.225.98", "id": 7844, "sbzt": "ON", "sxjlx": 2, "lat": 30.916145 }, { "qy_id": 561, "azdz": " 夏栎路铃兰路", "dqjj": "", "lng": 121.913737, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206008", "sbmc": " 夏栎路铃兰路", "ipv4": "10.118.226.24", "id": 7845, "sbzt": "ON", "sxjlx": 2, "lat": 30.916099 }, { "qy_id": 561, "azdz": " 夏栎路铃兰路", "dqjj": "", "lng": 121.91393, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206009", "sbmc": " 夏栎路铃兰路", "ipv4": "10.118.225.99", "id": 7846, "sbzt": "ON", "sxjlx": 2, "lat": 30.916486 }, { "qy_id": 561, "azdz": " 夏栎路铃兰路", "dqjj": "", "lng": 121.913978, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206010", "sbmc": " 夏栎路铃兰路", "ipv4": "10.118.225.100", "id": 7847, "sbzt": "ON", "sxjlx": 2, "lat": 30.91615 }, { "qy_id": 496, "azdz": "夏栎路雪绒花路", "dqjj": "", "lng": 121.920602, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206011", "sbmc": "夏栎路雪绒花路", "ipv4": "10.118.225.106", "id": 7848, "sbzt": "ON", "sxjlx": 2, "lat": 30.925107 }, { "qy_id": 496, "azdz": "夏栎路雪绒花路", "dqjj": "", "lng": 121.920881, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206012", "sbmc": "夏栎路雪绒花路", "ipv4": "10.118.225.107", "id": 7849, "sbzt": "ON", "sxjlx": 2, "lat": 30.925375 }, { "qy_id": 496, "azdz": "夏栎路雪绒花路", "dqjj": "", "lng": 121.92086, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206013", "sbmc": "夏栎路雪绒花路", "ipv4": "10.118.225.108", "id": 7850, "sbzt": "ON", "sxjlx": 2, "lat": 30.924951 }, { "qy_id": 496, "azdz": "夏栎路雪绒花路", "dqjj": "", "lng": 121.921418, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206014", "sbmc": "夏栎路雪绒花路", "ipv4": "10.118.225.109", "id": 7851, "sbzt": "ON", "sxjlx": 2, "lat": 30.925227 }, { "qy_id": 496, "azdz": "临港大道沪城环路", "dqjj": "", "lng": 121.908323, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206015", "sbmc": "临港大道沪城环路", "ipv4": "10.118.225.116", "id": 7852, "sbzt": "ON", "sxjlx": 2, "lat": 30.925074 }, { "qy_id": 496, "azdz": "临港大道沪城环路", "dqjj": "", "lng": 121.908474, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206016", "sbmc": "临港大道沪城环路", "ipv4": "10.118.225.117", "id": 7853, "sbzt": "ON", "sxjlx": 2, "lat": 30.924899 }, { "qy_id": 496, "azdz": "临港大道沪城环路", "dqjj": "", "lng": 121.908109, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206017", "sbmc": "临港大道沪城环路", "ipv4": "10.118.225.118", "id": 7854, "sbzt": "ON", "sxjlx": 2, "lat": 30.925194 }, { "qy_id": 496, "azdz": "临港大道沪城环路", "dqjj": "", "lng": 121.908045, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206018", "sbmc": "临港大道沪城环路", "ipv4": "10.118.225.119", "id": 7855, "sbzt": "ON", "sxjlx": 2, "lat": 30.92523 }, { "qy_id": 496, "azdz": "临港大道沪城环路", "dqjj": "", "lng": 121.907937, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206019", "sbmc": "临港大道沪城环路", "ipv4": "10.118.226.26", "id": 7856, "sbzt": "ON", "sxjlx": 2, "lat": 30.92523 }, { "qy_id": 496, "azdz": "临港大道沪城环路", "dqjj": "", "lng": 121.907959, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206020", "sbmc": "临港大道沪城环路", "ipv4": "10.118.226.27", "id": 7857, "sbzt": "ON", "sxjlx": 2, "lat": 30.925046 }, { "qy_id": 496, "azdz": "临港大道南路云鹃路", "dqjj": "", "lng": 121.927998, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206022", "sbmc": "临港大道南路云鹃路", "ipv4": "10.118.225.127", "id": 7858, "sbzt": "ON", "sxjlx": 2, "lat": 30.907507 }, { "qy_id": 496, "azdz": "临港大道南路云鹃路", "dqjj": "", "lng": 121.927976, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206023", "sbmc": "临港大道南路云鹃路", "ipv4": "10.118.225.128", "id": 7859, "sbzt": "ON", "sxjlx": 2, "lat": 30.907608 }, { "qy_id": 496, "azdz": "临港大道北路云鹃路", "dqjj": "", "lng": 121.92788, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206024", "sbmc": "临港大道北路云鹃路", "ipv4": "10.118.225.134", "id": 7860, "sbzt": "ON", "sxjlx": 2, "lat": 30.907553 }, { "qy_id": 496, "azdz": "临港大道北路云鹃路", "dqjj": "", "lng": 121.92796, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206026", "sbmc": "临港大道北路云鹃路", "ipv4": "10.118.225.136", "id": 7861, "sbzt": "ON", "sxjlx": 2, "lat": 30.907475 }, { "qy_id": 496, "azdz": "临港大道南路水芸路", "dqjj": "", "lng": 121.92935, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206028", "sbmc": "临港大道南路水芸路", "ipv4": "10.118.225.143", "id": 7862, "sbzt": "ON", "sxjlx": 2, "lat": 30.906449 }, { "qy_id": 496, "azdz": "临港大道南路水芸路", "dqjj": "", "lng": 121.929393, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206029", "sbmc": "临港大道南路水芸路", "ipv4": "10.118.225.144", "id": 7863, "sbzt": "ON", "sxjlx": 2, "lat": 30.906439 }, { "qy_id": 496, "azdz": "临港大道北路水芸路", "dqjj": "", "lng": 121.930629, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206030", "sbmc": "临港大道北路水芸路", "ipv4": "10.118.225.150", "id": 7864, "sbzt": "ON", "sxjlx": 2, "lat": 30.907602 }, { "qy_id": 496, "azdz": "临港大道北路水芸路", "dqjj": "", "lng": 121.930715, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206031", "sbmc": "临港大道北路水芸路", "ipv4": "10.118.225.151", "id": 7865, "sbzt": "ON", "sxjlx": 2, "lat": 30.907511 }, { "qy_id": 496, "azdz": "临港大道北路水芸路", "dqjj": "", "lng": 121.930667, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326206032", "sbmc": "临港大道北路水芸路", "ipv4": "10.118.225.152", "id": 7866, "sbzt": "ON", "sxjlx": 2, "lat": 30.907566 }, { "qy_id": 496, "azdz": "临港大道滨果路西侧", "dqjj": "", "lng": 121.903062, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207001", "sbmc": "临港大道滨果路西侧", "ipv4": "10.118.225.158", "id": 7867, "sbzt": "OFF", "sxjlx": 2, "lat": 30.930467 }, { "qy_id": 496, "azdz": "临港大道滨果路西侧", "dqjj": "", "lng": 121.902998, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207002", "sbmc": "临港大道滨果路西侧", "ipv4": "10.118.225.159", "id": 7868, "sbzt": "OFF", "sxjlx": 2, "lat": 30.930423 }, { "qy_id": 496, "azdz": "临港大道滨果路西侧", "dqjj": "", "lng": 121.902853, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207003", "sbmc": "临港大道滨果路西侧", "ipv4": "10.118.225.160", "id": 7869, "sbzt": "OFF", "sxjlx": 2, "lat": 30.930289 }, { "qy_id": 496, "azdz": "临港大道滨果路西侧", "dqjj": "", "lng": 121.902746, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207004", "sbmc": "临港大道滨果路西侧", "ipv4": "10.118.225.161", "id": 7870, "sbzt": "OFF", "sxjlx": 2, "lat": 30.930248 }, { "qy_id": 496, "azdz": "临港大道-环湖西三路往西500米(人行过街)", "dqjj": "", "lng": 121.923109, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207005", "sbmc": "临港大道-环湖西三路往西500米(人行过街)", "ipv4": "10.118.225.168", "id": 7871, "sbzt": "ON", "sxjlx": 2, "lat": 30.913214 }, { "qy_id": 496, "azdz": "临港大道-环湖西三路往西500米(人行过街)", "dqjj": "", "lng": 121.923014, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207006", "sbmc": "临港大道-环湖西三路往西500米(人行过街)", "ipv4": "10.118.225.169", "id": 7872, "sbzt": "ON", "sxjlx": 2, "lat": 30.913334 }, { "qy_id": 496, "azdz": "临港大道南/公交枢纽", "dqjj": "", "lng": 121.911304, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207007", "sbmc": "临港大道南/公交枢纽", "ipv4": "10.118.225.174", "id": 7873, "sbzt": "ON", "sxjlx": 2, "lat": 30.923047 }, { "qy_id": 496, "azdz": "临港大道南/公交枢纽", "dqjj": "", "lng": 121.911261, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207008", "sbmc": "临港大道南/公交枢纽", "ipv4": "10.118.225.175", "id": 7874, "sbzt": "ON", "sxjlx": 2, "lat": 30.923001 }, { "qy_id": 495, "azdz": "花柏路（环湖西三路和茉莉路之间）", "dqjj": "", "lng": 121.912301, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207009", "sbmc": "花柏路（环湖西三路和茉莉路之间）", "ipv4": "10.118.226.180", "id": 7875, "sbzt": "ON", "sxjlx": 2, "lat": 30.905259 }, { "qy_id": 495, "azdz": "花柏路（环湖西三路和茉莉路之间）", "dqjj": "", "lng": 121.912301, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207010", "sbmc": "花柏路（环湖西三路和茉莉路之间）", "ipv4": "10.118.226.181", "id": 7876, "sbzt": "ON", "sxjlx": 2, "lat": 30.905122 }, { "qy_id": 496, "azdz": "杞青路--铃兰路至雪绒花路之间1", "dqjj": "", "lng": 121.912163, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207011", "sbmc": "杞青路--铃兰路至雪绒花路之间1", "ipv4": "10.118.225.186", "id": 7877, "sbzt": "ON", "sxjlx": 2, "lat": 30.911529 }, { "qy_id": 496, "azdz": "杞青路--铃兰路至雪绒花路之间1", "dqjj": "", "lng": 121.911885, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207012", "sbmc": "杞青路--铃兰路至雪绒花路之间1", "ipv4": "10.118.225.187", "id": 7878, "sbzt": "ON", "sxjlx": 2, "lat": 30.911364 }, { "qy_id": 496, "azdz": "杞青路--铃兰路至雪绒花路之间2", "dqjj": "", "lng": 121.915472, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207013", "sbmc": "杞青路--铃兰路至雪绒花路之间2", "ipv4": "10.118.225.192", "id": 7879, "sbzt": "ON", "sxjlx": 2, "lat": 30.908552 }, { "qy_id": 561, "azdz": "杞青路--铃兰路至雪绒花路之间3", "dqjj": "", "lng": 121.911556, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207014", "sbmc": "杞青路--铃兰路至雪绒花路之间3", "ipv4": "10.118.225.193", "id": 7880, "sbzt": "ON", "sxjlx": 2, "lat": 30.91167 }, { "qy_id": 496, "azdz": "沪城环路银飞路", "dqjj": "", "lng": 121.900098, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207015", "sbmc": "沪城环路银飞路", "ipv4": "10.118.225.198", "id": 7881, "sbzt": "ON", "sxjlx": 2, "lat": 30.913826 }, { "qy_id": 496, "azdz": "沪城环路银飞路", "dqjj": "", "lng": 121.900012, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207016", "sbmc": "沪城环路银飞路", "ipv4": "10.118.225.199", "id": 7882, "sbzt": "ON", "sxjlx": 2, "lat": 30.913877 }, { "qy_id": 496, "azdz": "沪城环路银飞路", "dqjj": "", "lng": 121.899835, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207017", "sbmc": "沪城环路银飞路", "ipv4": "10.118.225.200", "id": 7883, "sbzt": "ON", "sxjlx": 2, "lat": 30.913914 }, { "qy_id": 496, "azdz": "沪城环路银飞路", "dqjj": "", "lng": 121.899679, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207018", "sbmc": "沪城环路银飞路", "ipv4": "10.118.225.201", "id": 7884, "sbzt": "ON", "sxjlx": 2, "lat": 30.913946 }, { "qy_id": 495, "azdz": "杞青路银飞路", "dqjj": "", "lng": 121.905451, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207027", "sbmc": "杞青路银飞路", "ipv4": "10.118.225.210", "id": 7885, "sbzt": "ON", "sxjlx": 2, "lat": 30.917284 }, { "qy_id": 495, "azdz": "杞青路银飞路", "dqjj": "", "lng": 121.905398, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207028", "sbmc": "杞青路银飞路", "ipv4": "10.118.226.54", "id": 7886, "sbzt": "ON", "sxjlx": 2, "lat": 30.917249 }, { "qy_id": 495, "azdz": "杞青路银飞路", "dqjj": "", "lng": 121.905339, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207029", "sbmc": "杞青路银飞路", "ipv4": "10.118.225.211", "id": 7887, "sbzt": "ON", "sxjlx": 2, "lat": 30.917207 }, { "qy_id": 495, "azdz": "杞青路银飞路", "dqjj": "", "lng": 121.905307, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207030", "sbmc": "杞青路银飞路", "ipv4": "10.118.225.212", "id": 7888, "sbzt": "ON", "sxjlx": 2, "lat": 30.917203 }, { "qy_id": 495, "azdz": "杞青路银飞路", "dqjj": "", "lng": 121.905398, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207031", "sbmc": "杞青路银飞路", "ipv4": "10.118.226.55", "id": 7889, "sbzt": "ON", "sxjlx": 2, "lat": 30.917069 }, { "qy_id": 496, "azdz": "临港大道环湖西二路", "dqjj": "", "lng": 121.92771, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207019", "sbmc": "临港大道环湖西二路", "ipv4": "10.118.225.218", "id": 7890, "sbzt": "ON", "sxjlx": 2, "lat": 30.908982 }, { "qy_id": 496, "azdz": "临港大道环湖西二路", "dqjj": "", "lng": 121.927793, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207020", "sbmc": "临港大道环湖西二路", "ipv4": "10.118.225.219", "id": 7891, "sbzt": "ON", "sxjlx": 2, "lat": 30.90892 }, { "qy_id": 496, "azdz": "临港大道环湖西二路", "dqjj": "", "lng": 121.927643, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207021", "sbmc": "临港大道环湖西二路", "ipv4": "10.118.225.220", "id": 7892, "sbzt": "ON", "sxjlx": 2, "lat": 30.908855 }, { "qy_id": 496, "azdz": "临港大道环湖西二路", "dqjj": "", "lng": 121.927847, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207022", "sbmc": "临港大道环湖西二路", "ipv4": "10.118.225.221", "id": 7893, "sbzt": "ON", "sxjlx": 2, "lat": 30.908874 }, { "qy_id": 496, "azdz": "临港大道环湖西二路", "dqjj": "", "lng": 121.927535, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207023", "sbmc": "临港大道环湖西二路", "ipv4": "10.118.225.222", "id": 7894, "sbzt": "ON", "sxjlx": 2, "lat": 30.908869 }, { "qy_id": 496, "azdz": "临港大道环湖西二路", "dqjj": "", "lng": 121.927594, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207025", "sbmc": "临港大道环湖西二路", "ipv4": "10.118.225.224", "id": 7895, "sbzt": "ON", "sxjlx": 2, "lat": 30.908782 }, { "qy_id": 496, "azdz": "临港大道环湖西二路", "dqjj": "", "lng": 121.92746, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326207026", "sbmc": "临港大道环湖西二路", "ipv4": "10.118.225.225", "id": 7896, "sbzt": "ON", "sxjlx": 2, "lat": 30.908814 }, { "qy_id": 495, "azdz": "临港大道南路环湖西一路", "dqjj": "", "lng": 121.93029, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210001", "sbmc": "临港大道南路环湖西一路", "ipv4": "10.118.225.236", "id": 7897, "sbzt": "OFF", "sxjlx": 2, "lat": 30.905672 }, { "qy_id": 495, "azdz": "临港大道南路环湖西一路", "dqjj": "", "lng": 121.930399, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210002", "sbmc": "临港大道南路环湖西一路", "ipv4": "10.118.225.237", "id": 7898, "sbzt": "OFF", "sxjlx": 2, "lat": 30.905598 }, { "qy_id": 495, "azdz": "临港大道南路环湖西一路", "dqjj": "", "lng": 121.930055, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210003", "sbmc": "临港大道南路环湖西一路", "ipv4": "10.118.225.238", "id": 7899, "sbzt": "OFF", "sxjlx": 2, "lat": 30.905543 }, { "qy_id": 495, "azdz": "临港大道南路环湖西一路", "dqjj": "", "lng": 121.930184, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210004", "sbmc": "临港大道南路环湖西一路", "ipv4": "10.118.225.239", "id": 7900, "sbzt": "OFF", "sxjlx": 2, "lat": 30.90546 }, { "qy_id": 495, "azdz": "临港大道南路环湖西一路", "dqjj": "", "lng": 121.930141, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210005", "sbmc": "临港大道南路环湖西一路", "ipv4": "10.118.225.240", "id": 7901, "sbzt": "OFF", "sxjlx": 2, "lat": 30.905534 }, { "qy_id": 495, "azdz": "临港大道两港大道", "dqjj": "", "lng": 121.889579, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210006", "sbmc": "临港大道两港大道", "ipv4": "10.118.225.248", "id": 7902, "sbzt": "OFF", "sxjlx": 2, "lat": 30.94113 }, { "qy_id": 495, "azdz": "临港大道两港大道", "dqjj": "", "lng": 121.889858, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210007", "sbmc": "临港大道两港大道", "ipv4": "10.118.225.249", "id": 7903, "sbzt": "OFF", "sxjlx": 2, "lat": 30.941269 }, { "qy_id": 495, "azdz": "临港大道两港大道", "dqjj": "", "lng": 121.889525, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210008", "sbmc": "临港大道两港大道", "ipv4": "10.118.225.250", "id": 7904, "sbzt": "OFF", "sxjlx": 2, "lat": 30.941499 }, { "qy_id": 495, "azdz": "临港大道两港大道", "dqjj": "", "lng": 121.889268, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210009", "sbmc": "临港大道两港大道", "ipv4": "10.118.225.251", "id": 7905, "sbzt": "OFF", "sxjlx": 2, "lat": 30.941665 }, { "qy_id": 495, "azdz": "临港大道两港大道", "dqjj": "", "lng": 121.889504, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210010", "sbmc": "临港大道两港大道", "ipv4": "10.118.225.252", "id": 7906, "sbzt": "OFF", "sxjlx": 2, "lat": 30.941793 }, { "qy_id": 495, "azdz": "临港大道两港大道", "dqjj": "", "lng": 121.889214, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210011", "sbmc": "临港大道两港大道", "ipv4": "10.118.225.253", "id": 7907, "sbzt": "OFF", "sxjlx": 2, "lat": 30.941895 }, { "qy_id": 495, "azdz": "临港大道两港大道", "dqjj": "", "lng": 121.889557, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210012", "sbmc": "临港大道两港大道", "ipv4": "10.118.226.197", "id": 7908, "sbzt": "OFF", "sxjlx": 2, "lat": 30.94195 }, { "qy_id": 495, "azdz": "临港大道两港大道", "dqjj": "", "lng": 121.889246, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210013", "sbmc": "临港大道两港大道", "ipv4": "10.118.226.198", "id": 7909, "sbzt": "OFF", "sxjlx": 2, "lat": 30.942116 }, { "qy_id": 495, "azdz": "两港大道孙桥种源基地", "dqjj": "", "lng": 121.86646, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210014", "sbmc": "两港大道孙桥种源基地", "ipv4": "10.118.226.209", "id": 7910, "sbzt": "OFF", "sxjlx": 2, "lat": 31.023889 }, { "qy_id": 495, "azdz": "两港大道孙桥种源基地", "dqjj": "", "lng": 121.866396, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210015", "sbmc": "两港大道孙桥种源基地", "ipv4": "10.118.226.210", "id": 7911, "sbzt": "OFF", "sxjlx": 2, "lat": 31.023866 }, { "qy_id": 495, "azdz": "两港大道孙桥种源基地", "dqjj": "", "lng": 121.86639, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210016", "sbmc": "两港大道孙桥种源基地", "ipv4": "10.118.226.211", "id": 7912, "sbzt": "OFF", "sxjlx": 2, "lat": 31.023917 }, { "qy_id": 495, "azdz": "两港大道孙桥种源基地", "dqjj": "", "lng": 121.866508, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210017", "sbmc": "两港大道孙桥种源基地", "ipv4": "10.118.226.212", "id": 7913, "sbzt": "OFF", "sxjlx": 2, "lat": 31.023866 }, { "qy_id": 561, "azdz": "书塘公路", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210018", "sbmc": "书塘公路", "ipv4": "10.118.226.219", "id": 7914, "sbzt": "OFF", "sxjlx": 2, "lat": 0 }, { "qy_id": 561, "azdz": "书塘公路", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210019", "sbmc": "书塘公路", "ipv4": "10.118.226.220", "id": 7915, "sbzt": "OFF", "sxjlx": 2, "lat": 0 }, { "qy_id": 561, "azdz": "书塘公路", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210020", "sbmc": "书塘公路", "ipv4": "10.118.226.221", "id": 7916, "sbzt": "OFF", "sxjlx": 2, "lat": 0 }, { "qy_id": 561, "azdz": "书塘公路", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210021", "sbmc": "书塘公路", "ipv4": "10.118.226.222", "id": 7917, "sbzt": "OFF", "sxjlx": 2, "lat": 0 }, { "qy_id": 561, "azdz": "书塘公路", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210022", "sbmc": "书塘公路", "ipv4": "10.118.226.223", "id": 7918, "sbzt": "OFF", "sxjlx": 2, "lat": 0 }, { "qy_id": 561, "azdz": "书塘公路", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210023", "sbmc": "书塘公路", "ipv4": "10.118.226.224", "id": 7919, "sbzt": "OFF", "sxjlx": 2, "lat": 0 }, { "qy_id": 561, "azdz": "杞青路麦冬路", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210024", "sbmc": "杞青路麦冬路", "ipv4": "10.118.226.233", "id": 7920, "sbzt": "OFF", "sxjlx": 2, "lat": 0 }, { "qy_id": 561, "azdz": "杞青路麦冬路", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210025", "sbmc": "杞青路麦冬路", "ipv4": "10.118.226.234", "id": 7921, "sbzt": "OFF", "sxjlx": 2, "lat": 0 }, { "qy_id": 561, "azdz": "杞青路麦冬路", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210026", "sbmc": "杞青路麦冬路", "ipv4": "10.118.226.235", "id": 7922, "sbzt": "OFF", "sxjlx": 2, "lat": 0 }, { "qy_id": 561, "azdz": "杞青路麦冬路", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900071326210027", "sbmc": "杞青路麦冬路", "ipv4": "10.118.226.236", "id": 7923, "sbzt": "OFF", "sxjlx": 2, "lat": 0 }, { "qy_id": 561, "azdz": "环湖北一路北岛处（微卡立杆）", "dqjj": "", "lng": 121.945013, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001197", "sbmc": "环湖北一/北岛5", "ipv4": "172.101.1.197", "id": 7924, "sbzt": "ON", "sxjlx": 1, "lat": 30.90909 }, { "qy_id": 561, "azdz": "春花秋色公园公交站（微卡立杆）", "dqjj": "", "lng": 121.951645, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001199", "sbmc": "春花秋色公交站7", "ipv4": "172.101.1.199", "id": 7925, "sbzt": "ON", "sxjlx": 1, "lat": 30.884173 }, { "qy_id": 495, "azdz": "雪绒花停车场", "dqjj": "", "lng": 121.91864, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002215", "sbmc": "雪绒花停车场1", "ipv4": "172.101.2.215", "id": 7926, "sbzt": "ON", "sxjlx": 1, "lat": 30.908189 }, { "qy_id": 495, "azdz": "雪绒花停车场", "dqjj": "", "lng": 121.918779, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002216", "sbmc": "雪绒花停车场2", "ipv4": "172.101.2.216", "id": 7927, "sbzt": "ON", "sxjlx": 1, "lat": 30.908357 }, { "qy_id": 495, "azdz": "雪绒花停车场", "dqjj": "", "lng": 121.918576, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002217", "sbmc": "雪绒花停车场3", "ipv4": "172.101.2.217", "id": 7928, "sbzt": "ON", "sxjlx": 1, "lat": 30.908108 }, { "qy_id": 495, "azdz": "雪绒花停车场", "dqjj": "", "lng": 121.920646, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002218", "sbmc": "雪绒花停车场4", "ipv4": "172.101.2.218", "id": 7929, "sbzt": "ON", "sxjlx": 1, "lat": 30.909494 }, { "qy_id": 495, "azdz": "雪绒花停车场", "dqjj": "", "lng": 121.920099, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002219", "sbmc": "雪绒花停车场5", "ipv4": "172.101.2.219", "id": 7930, "sbzt": "ON", "sxjlx": 1, "lat": 30.908826 }, { "qy_id": 495, "azdz": "雪绒花停车场", "dqjj": "", "lng": 121.91996, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002220", "sbmc": "雪绒花停车场6", "ipv4": "172.101.2.220", "id": 7931, "sbzt": "ON", "sxjlx": 1, "lat": 30.909701 }, { "qy_id": 495, "azdz": "雪绒花停车场", "dqjj": "", "lng": 121.919595, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002221", "sbmc": "雪绒花停车场7", "ipv4": "172.101.2.221", "id": 7932, "sbzt": "ON", "sxjlx": 1, "lat": 30.908186 }, { "qy_id": 495, "azdz": "雪绒花停车场", "dqjj": "", "lng": 121.919042, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002222", "sbmc": "雪绒花停车场8", "ipv4": "172.101.2.222", "id": 7933, "sbzt": "ON", "sxjlx": 1, "lat": 30.907639 }, { "qy_id": 495, "azdz": "临港新天地西侧停车场", "dqjj": "", "lng": 121.904107, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002223", "sbmc": "新天地西停车场1", "ipv4": "172.101.2.223", "id": 7934, "sbzt": "ON", "sxjlx": 1, "lat": 30.894575 }, { "qy_id": 495, "azdz": "临港新天地西侧停车场", "dqjj": "", "lng": 121.904144, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002224", "sbmc": "新天地西停车场2", "ipv4": "172.101.2.224", "id": 7935, "sbzt": "ON", "sxjlx": 1, "lat": 30.895335 }, { "qy_id": 495, "azdz": "临港大道P+R停车场", "dqjj": "", "lng": 121.892222, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002225", "sbmc": "P+R停车场1", "ipv4": "172.101.2.225", "id": 7936, "sbzt": "ON", "sxjlx": 1, "lat": 30.940372 }, { "qy_id": 495, "azdz": "临港大道P+R停车场", "dqjj": "", "lng": 121.892147, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002226", "sbmc": "P+R停车场2", "ipv4": "172.101.2.226", "id": 7937, "sbzt": "ON", "sxjlx": 1, "lat": 30.940427 }, { "qy_id": 495, "azdz": "临港大道P+R停车场", "dqjj": "", "lng": 121.892136, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002227", "sbmc": "P+R停车场3", "ipv4": "172.101.2.227", "id": 7938, "sbzt": "ON", "sxjlx": 1, "lat": 30.940496 }, { "qy_id": 499, "azdz": "杞青路与R2路交叉口（鹰眼立杆）", "dqjj": "", "lng": 121.905463, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001194", "sbmc": "杞青银飞", "ipv4": "172.101.1.194", "id": 7939, "sbzt": "ON", "sxjlx": 1, "lat": 30.916834 }, { "qy_id": 510, "azdz": "R2路平均分布5号（鹰眼立杆）", "dqjj": "", "lng": 121.903776, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001195", "sbmc": "银飞路海昌门口", "ipv4": "172.101.1.195", "id": 7940, "sbzt": "ON", "sxjlx": 5, "lat": 30.915254 }, { "qy_id": 499, "azdz": "R2路平均分布8号", "dqjj": "", "lng": 121.902316, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316001192", "sbmc": "海昌公交站出口", "ipv4": "172.101.1.192", "id": 7941, "sbzt": "ON", "sxjlx": 1, "lat": 30.913906 }, { "qy_id": 561, "azdz": "靠近海昌", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002228", "sbmc": "03公园1", "ipv4": "172.101.2.228", "id": 7942, "sbzt": "ON", "sxjlx": 1, "lat": 0 }, { "qy_id": 561, "azdz": "北1", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002229", "sbmc": "03公园2", "ipv4": "172.101.2.229", "id": 7943, "sbzt": "ON", "sxjlx": 1, "lat": 0 }, { "qy_id": 561, "azdz": "桥", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002230", "sbmc": "03公园3", "ipv4": "172.101.2.230", "id": 7944, "sbzt": "OFF", "sxjlx": 1, "lat": 0 }, { "qy_id": 561, "azdz": "北3", "dqjj": "", "lng": 121.914233, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002231", "sbmc": "03公园4", "ipv4": "172.101.2.231", "id": 7945, "sbzt": "ON", "sxjlx": 1, "lat": 30.909369 }, { "qy_id": 561, "azdz": "宜浩", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002232", "sbmc": "03公园5", "ipv4": "172.101.2.232", "id": 7946, "sbzt": "OFF", "sxjlx": 1, "lat": 0 }, { "qy_id": 561, "azdz": "雪绒花", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002233", "sbmc": "03公园6", "ipv4": "172.101.2.233", "id": 7947, "sbzt": "ON", "sxjlx": 1, "lat": 0 }, { "qy_id": 561, "azdz": "东", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002234", "sbmc": "03公园7", "ipv4": "172.101.2.234", "id": 7948, "sbzt": "ON", "sxjlx": 1, "lat": 0 }, { "qy_id": 561, "azdz": "南", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002235", "sbmc": "03公园8", "ipv4": "172.101.2.235", "id": 7949, "sbzt": "ON", "sxjlx": 1, "lat": 0 }, { "qy_id": 561, "azdz": "水边", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002236", "sbmc": "03公园9", "ipv4": "172.101.2.236", "id": 7950, "sbzt": "OFF", "sxjlx": 1, "lat": 0 }, { "qy_id": 561, "azdz": "", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002237", "sbmc": "03公园10", "ipv4": "172.101.2.237", "id": 7951, "sbzt": "OFF", "sxjlx": 1, "lat": 0 }, { "qy_id": 561, "azdz": "", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002238", "sbmc": "03公园11", "ipv4": "172.101.2.238", "id": 7952, "sbzt": "OFF", "sxjlx": 1, "lat": 0 }, { "qy_id": 561, "azdz": "", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002239", "sbmc": "03公园12", "ipv4": "172.101.2.239", "id": 7953, "sbzt": "OFF", "sxjlx": 1, "lat": 0 }, { "qy_id": 561, "azdz": "", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081316002240", "sbmc": "03公园13", "ipv4": "172.101.2.240", "id": 7954, "sbzt": "OFF", "sxjlx": 1, "lat": 0 }, { "qy_id": 565, "azdz": "银飞路沪城环路口车道横杆向公园方向车辆卡口1", "dqjj": "", "lng": 121.900531, "dqjd": "83", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326015003", "sbmc": "银飞路沪城环路口车辆1", "ipv4": "172.101.3.201", "id": 8516, "sbzt": "ON", "sxjlx": 2, "lat": 30.913914 }, { "qy_id": 565, "azdz": "银飞路沪城环路口车道横杆向公园方向车辆卡口2", "dqjj": "", "lng": 121.900513, "dqjd": "82", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326015004", "sbmc": "银飞路沪城环路口车辆2", "ipv4": "172.101.3.202", "id": 8517, "sbzt": "ON", "sxjlx": 2, "lat": 30.913778 }, { "qy_id": 565, "azdz": "银飞路D港公交枢纽站（申港4路） 北侧自天桥向北侧公交站点", "dqjj": "", "lng": 121.902719, "dqjd": "77", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326015005", "sbmc": "银飞路护城环路公交车北站台", "ipv4": "172.101.0.212", "id": 8518, "sbzt": "ON", "sxjlx": 2, "lat": 30.914134 }, { "qy_id": 565, "azdz": "银飞路D港公交枢纽站（申港4路） 南侧自天桥向南侧公交站点", "dqjj": "", "lng": 121.902665, "dqjd": "79", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326015006", "sbmc": "银飞路护城环路公交车南站台", "ipv4": "172.101.0.213", "id": 8519, "sbzt": "ON", "sxjlx": 2, "lat": 30.914224 }, { "qy_id": 565, "azdz": "银飞路公交站对马路隔离带南侧自天桥向隔离带", "dqjj": "", "lng": 121.902705, "dqjd": "84", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326015007", "sbmc": "银飞路天桥马路隔离带", "ipv4": "172.101.0.214", "id": 8520, "sbzt": "ON", "sxjlx": 2, "lat": 30.914173 }, { "qy_id": 565, "azdz": "银飞路过街天桥朝南人脸", "dqjj": "", "lng": 121.902633, "dqjd": "83", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326015008", "sbmc": "银飞路过街天桥朝南人脸", "ipv4": "172.101.0.210", "id": 8521, "sbzt": "ON", "sxjlx": 2, "lat": 30.914224 }, { "qy_id": 565, "azdz": "银飞路过街天桥朝北人脸", "dqjj": "", "lng": 121.902696, "dqjd": "82", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326016001", "sbmc": "银飞路过街天桥朝北人脸", "ipv4": "172.101.0.211", "id": 8522, "sbzt": "ON", "sxjlx": 2, "lat": 30.914107 }, { "qy_id": 565, "azdz": "海昌公园广场碗口正面1中央区域", "dqjj": "", "lng": 121.902916, "dqjd": "84", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326016002", "sbmc": "海昌公园广场正面左侧", "ipv4": "172.101.3.219", "id": 8523, "sbzt": "ON", "sxjlx": 2, "lat": 30.914471 }, { "qy_id": 565, "azdz": "海昌公园广场碗口正面2左侧区域", "dqjj": "", "lng": 121.902916, "dqjd": "83", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326016003", "sbmc": "海昌公园广场正面中央", "ipv4": "172.101.3.220", "id": 8524, "sbzt": "ON", "sxjlx": 2, "lat": 30.914471 }, { "qy_id": 565, "azdz": "海昌公园广场碗口正面3右侧区域", "dqjj": "", "lng": 121.902916, "dqjd": "83", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326016004", "sbmc": "海昌公园广场正面右侧", "ipv4": "172.101.3.221", "id": 8525, "sbzt": "ON", "sxjlx": 2, "lat": 30.914471 }, { "qy_id": 565, "azdz": "滴水湖地铁站1号口对公交广场方向对人行道中间", "dqjj": "", "lng": 121.93066, "dqjd": "87", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326016005", "sbmc": "滴水湖地铁站1号口1号机", "ipv4": "172.101.3.203", "id": 8526, "sbzt": "ON", "sxjlx": 2, "lat": 30.907296 }, { "qy_id": 565, "azdz": "滴水湖地铁站1号口对东北方向对对面人行道", "dqjj": "", "lng": 121.93066, "dqjd": "81", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326016006", "sbmc": "滴水湖地铁站1号口2号机", "ipv4": "172.101.3.204", "id": 8527, "sbzt": "ON", "sxjlx": 2, "lat": 30.907296 }, { "qy_id": 565, "azdz": "滴水湖地铁站2号口向西南方向对对面人行道", "dqjj": "", "lng": 121.92947, "dqjd": "81", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326016007", "sbmc": "滴水湖地铁站2号口1号机", "ipv4": "172.101.3.205", "id": 8528, "sbzt": "ON", "sxjlx": 2, "lat": 30.906344 }, { "qy_id": 565, "azdz": "滴水湖地铁站2号口向西北方向对地铁入口方向", "dqjj": "", "lng": 121.92947, "dqjd": "80", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326016008", "sbmc": "滴水湖地铁站2号口2号机", "ipv4": "172.101.3.206", "id": 8529, "sbzt": "ON", "sxjlx": 2, "lat": 30.906344 }, { "qy_id": 565, "azdz": "临港大道北侧人行道临港大道地铁站4号口向进站方向", "dqjj": "", "lng": 121.910392, "dqjd": "84", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326017001", "sbmc": "临港大道地铁站4号口", "ipv4": "172.101.3.209", "id": 8530, "sbzt": "OFF", "sxjlx": 2, "lat": 30.924394 }, { "qy_id": 565, "azdz": "临港大道北侧人行道临港大道地铁站2号口向进站方向", "dqjj": "", "lng": 121.911309, "dqjd": "78", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326017002", "sbmc": "临港大道地铁站2号口", "ipv4": "172.101.3.210", "id": 8531, "sbzt": "ON", "sxjlx": 2, "lat": 30.922473 }, { "qy_id": 565, "azdz": "临港大道南侧人行道临港大道地铁站3号口向进站方向", "dqjj": "", "lng": 121.909714, "dqjd": "79", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326017003", "sbmc": "临港大道地铁站3号口", "ipv4": "172.101.3.211", "id": 8532, "sbzt": "OFF", "sxjlx": 2, "lat": 30.923833 }, { "qy_id": 565, "azdz": "临港大道南侧人行道临港大道地铁站1号口人行道向P+R停车场出口", "dqjj": "", "lng": 121.912589, "dqjd": "65", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326017004", "sbmc": "临港大道地铁站公交车站人行道", "ipv4": "172.101.3.212", "id": 8533, "sbzt": "ON", "sxjlx": 2, "lat": 30.922322 }, { "qy_id": 565, "azdz": "临港大道南侧人行道临港大道地铁站1号口公交枢纽外立杆向公交枢纽人行南出口", "dqjj": "", "lng": 121.912342, "dqjd": "83", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326017005", "sbmc": "临港大道地铁站1号口", "ipv4": "172.101.3.213", "id": 8534, "sbzt": "ON", "sxjlx": 2, "lat": 30.922481 }, { "qy_id": 565, "azdz": "临港大道南侧人行道临港大道地铁站1号口公交枢纽外立杆向公交枢纽人行北出口", "dqjj": "", "lng": 121.912342, "dqjd": "78", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326017006", "sbmc": "临港大道枢纽外人行道", "ipv4": "172.101.3.214", "id": 8535, "sbzt": "ON", "sxjlx": 2, "lat": 30.922481 }, { "qy_id": 565, "azdz": "临港大道南侧人行道临港大道地铁站1号口公交枢纽外立杆向2号口人行道方向", "dqjj": "", "lng": 121.911798, "dqjd": "80", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326017007", "sbmc": "临港大道地铁站公交车站入口", "ipv4": "172.101.3.215", "id": 8536, "sbzt": "ON", "sxjlx": 2, "lat": 30.922954 }, { "qy_id": 565, "azdz": "雪绒花停车场3号门人脸1", "dqjj": "", "lng": 121.919342, "dqjd": "81", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326017008", "sbmc": "雪绒花停车场3号门人脸1", "ipv4": "172.101.3.216", "id": 8537, "sbzt": "ON", "sxjlx": 2, "lat": 30.909551 }, { "qy_id": 565, "azdz": "雪绒花停车场3号门人脸2", "dqjj": "", "lng": 121.919342, "dqjd": "82", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326018001", "sbmc": "雪绒花停车场3号门人脸2", "ipv4": "172.101.3.217", "id": 8538, "sbzt": "ON", "sxjlx": 2, "lat": 30.909551 }, { "qy_id": 565, "azdz": "雪绒花停车场1号门人脸1", "dqjj": "", "lng": 121.918423, "dqjd": "79", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326018002", "sbmc": "雪绒花停车场1号门人脸1", "ipv4": "172.101.3.218", "id": 8539, "sbzt": "ON", "sxjlx": 2, "lat": 30.908259 }, { "qy_id": 565, "azdz": "雪绒花停车场1135公交站点（雪绒花路夏栎路）雪绒花停车场1号", "dqjj": "", "lng": 121.918423, "dqjd": "88", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326018003", "sbmc": "雪绒花停车场1135公交站点", "ipv4": "172.101.3.222", "id": 8540, "sbzt": "ON", "sxjlx": 2, "lat": 30.908259 }, { "qy_id": 565, "azdz": "港城新天地申港4路公交站点（茉莉路申港大道）港城新天地停车场入口立杆向公交站台", "dqjj": "", "lng": 121.906601, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326018004", "sbmc": "", "ipv4": "172.101.3.223", "id": 8541, "sbzt": "OFF", "sxjlx": 2, "lat": 30.896584 }, { "qy_id": 565, "azdz": "海基六路科技创业园区南门1人脸1", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326018005", "sbmc": "", "ipv4": "100.90.80.2", "id": 8542, "sbzt": "ON", "sxjlx": 2, "lat": 0 }, { "qy_id": 565, "azdz": "海基六路科技创业园区南门1人脸2", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326018006", "sbmc": "", "ipv4": "100.90.80.3", "id": 8543, "sbzt": "ON", "sxjlx": 2, "lat": 0 }, { "qy_id": 565, "azdz": "海基六路科技创业园区南门1车辆卡口1", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326018007", "sbmc": "", "ipv4": "100.90.80.4", "id": 8544, "sbzt": "ON", "sxjlx": 2, "lat": 0 }, { "qy_id": 565, "azdz": "海基六路科技创业园区南门1车辆卡口2", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326018008", "sbmc": "", "ipv4": "100.90.80.5", "id": 8545, "sbzt": "ON", "sxjlx": 2, "lat": 0 }, { "qy_id": 565, "azdz": "海基六路科技创业园区北门2人脸1", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326018009", "sbmc": "", "ipv4": "100.90.80.6", "id": 8546, "sbzt": "ON", "sxjlx": 2, "lat": 0 }, { "qy_id": 565, "azdz": "海基六路科技创业园区北门2人脸2", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326018010", "sbmc": "", "ipv4": "100.90.80.7", "id": 8547, "sbzt": "ON", "sxjlx": 2, "lat": 0 }, { "qy_id": 565, "azdz": "海基六路科技创业园区北门2车辆卡口1", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326018011", "sbmc": "", "ipv4": "100.90.80.8", "id": 8548, "sbzt": "ON", "sxjlx": 2, "lat": 0 }, { "qy_id": 565, "azdz": "海基六路科技创业园区北门2车辆卡口2", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326018012", "sbmc": "", "ipv4": "100.90.80.9", "id": 8549, "sbzt": "ON", "sxjlx": 2, "lat": 0 }, { "qy_id": 565, "azdz": "海基六路科技创业园区正门3人脸1", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326018013", "sbmc": "", "ipv4": "100.90.80.10", "id": 8550, "sbzt": "ON", "sxjlx": 2, "lat": 0 }, { "qy_id": 565, "azdz": "海基六路科技创业园区正门3人脸2", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326018014", "sbmc": "", "ipv4": "100.90.80.11", "id": 8551, "sbzt": "ON", "sxjlx": 2, "lat": 0 }, { "qy_id": 565, "azdz": "海基六路科技创业园区正门3车辆卡口1", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326018015", "sbmc": "", "ipv4": "100.90.80.12", "id": 8552, "sbzt": "ON", "sxjlx": 2, "lat": 0 }, { "qy_id": 565, "azdz": "海基六路科技创业园区正门3车辆卡口2", "dqjj": "", "lng": 0, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900081326018016", "sbmc": "", "ipv4": "100.90.80.13", "id": 8553, "sbzt": "ON", "sxjlx": 2, "lat": 0 }, { "qy_id": 493, "azdz": "海洋小区44栋门栋对面绿化带上", "dqjj": "", "lng": 121.913702, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328031001", "sbmc": "海洋小区44栋门栋摄像机", "ipv4": "100.90.80.44", "id": 8579, "sbzt": "ON", "sxjlx": 2, "lat": 30.881322 }, { "qy_id": 493, "azdz": "海洋小区45栋门栋对面绿化带上", "dqjj": "", "lng": 121.913514, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328031002", "sbmc": "海洋小区45栋门栋摄像机", "ipv4": "100.90.80.45", "id": 8580, "sbzt": "ON", "sxjlx": 2, "lat": 30.881357 }, { "qy_id": 493, "azdz": "海洋小区46栋门栋对面绿化带上", "dqjj": "", "lng": 121.913945, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328031003", "sbmc": "海洋小区46栋门栋摄像机", "ipv4": "100.90.80.46", "id": 8581, "sbzt": "ON", "sxjlx": 2, "lat": 30.881527 }, { "qy_id": 493, "azdz": "海洋小区47栋门栋对面绿化带上", "dqjj": "", "lng": 121.913711, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328031004", "sbmc": "海洋小区47栋门栋摄像机", "ipv4": "100.90.80.47", "id": 8582, "sbzt": "ON", "sxjlx": 2, "lat": 30.881612 }, { "qy_id": 493, "azdz": "海洋小区48栋门栋对面绿化带上", "dqjj": "", "lng": 121.913509, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328031005", "sbmc": "海洋小区48栋门栋摄像机", "ipv4": "100.90.80.48", "id": 8583, "sbzt": "ON", "sxjlx": 2, "lat": 30.881597 }, { "qy_id": 493, "azdz": "海洋小区49栋门栋对面绿化带上", "dqjj": "", "lng": 121.913199, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328031006", "sbmc": "海洋小区49栋门栋摄像机", "ipv4": "100.90.80.49", "id": 8584, "sbzt": "ON", "sxjlx": 2, "lat": 30.881806 }, { "qy_id": 493, "azdz": "海洋小区50栋门栋对面绿化带上", "dqjj": "", "lng": 121.914183, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328031007", "sbmc": "海洋小区50栋门栋摄像机", "ipv4": "100.90.80.50", "id": 8585, "sbzt": "ON", "sxjlx": 2, "lat": 30.882031 }, { "qy_id": 493, "azdz": "海洋小区51栋门栋对面绿化带上", "dqjj": "", "lng": 121.913976, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328031008", "sbmc": "海洋小区51栋门栋摄像机", "ipv4": "100.90.80.51", "id": 8586, "sbzt": "ON", "sxjlx": 2, "lat": 30.882034 }, { "qy_id": 493, "azdz": "海洋小区52栋门栋对面绿化带上", "dqjj": "", "lng": 121.913684, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328031009", "sbmc": "海洋小区52栋门栋摄像机", "ipv4": "100.90.80.52", "id": 8587, "sbzt": "ON", "sxjlx": 2, "lat": 30.881794 }, { "qy_id": 493, "azdz": "海洋小区53栋门栋对面绿化带上", "dqjj": "", "lng": 121.913451, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328031010", "sbmc": "海洋小区53栋门栋摄像机", "ipv4": "100.90.80.53", "id": 8588, "sbzt": "ON", "sxjlx": 2, "lat": 30.88181 }, { "qy_id": 493, "azdz": "海洋小区54栋门栋对面绿化带上", "dqjj": "", "lng": 121.913199, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328031011", "sbmc": "海洋小区54栋门栋摄像机", "ipv4": "100.90.80.54", "id": 8589, "sbzt": "ON", "sxjlx": 2, "lat": 30.881833 }, { "qy_id": 493, "azdz": "海洋小区55栋门栋对面绿化带上", "dqjj": "", "lng": 121.912957, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328031012", "sbmc": "海洋小区55栋门栋摄像机", "ipv4": "100.90.80.55", "id": 8590, "sbzt": "ON", "sxjlx": 2, "lat": 30.881814 }, { "qy_id": 493, "azdz": "海洋小区56栋门栋对面绿化带上", "dqjj": "", "lng": 121.914708, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328031013", "sbmc": "海洋小区56栋门栋摄像机", "ipv4": "100.90.80.56", "id": 8591, "sbzt": "ON", "sxjlx": 2, "lat": 30.882294 }, { "qy_id": 493, "azdz": "海洋小区57栋门栋对面绿化带上", "dqjj": "", "lng": 121.914497, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328031014", "sbmc": "海洋小区57栋门栋摄像机", "ipv4": "100.90.80.57", "id": 8592, "sbzt": "ON", "sxjlx": 2, "lat": 30.882383 }, { "qy_id": 493, "azdz": "海洋小区58栋门栋对面绿化带上", "dqjj": "", "lng": 121.914223, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328031015", "sbmc": "海洋小区58栋门栋摄像机", "ipv4": "100.90.80.58", "id": 8593, "sbzt": "ON", "sxjlx": 2, "lat": 30.882278 }, { "qy_id": 493, "azdz": "海洋小区59栋门栋对面绿化带上", "dqjj": "", "lng": 121.914003, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328031016", "sbmc": "海洋小区59栋门栋摄像机", "ipv4": "100.90.80.59", "id": 8594, "sbzt": "ON", "sxjlx": 2, "lat": 30.882282 }, { "qy_id": 493, "azdz": "海洋小区60栋门栋对面绿化带上", "dqjj": "", "lng": 121.913671, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328032001", "sbmc": "海洋小区60栋门栋摄像机", "ipv4": "100.90.80.60", "id": 8595, "sbzt": "ON", "sxjlx": 2, "lat": 30.882275 }, { "qy_id": 493, "azdz": "海洋小区61栋门栋对面绿化带上", "dqjj": "", "lng": 121.913437, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328032002", "sbmc": "海洋小区61栋门栋摄像机", "ipv4": "100.90.80.61", "id": 8596, "sbzt": "ON", "sxjlx": 2, "lat": 30.882275 }, { "qy_id": 493, "azdz": "海洋小区62栋门栋对面绿化带上", "dqjj": "", "lng": 121.913181, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328032003", "sbmc": "海洋小区62栋门栋摄像机", "ipv4": "100.90.80.62", "id": 8597, "sbzt": "ON", "sxjlx": 2, "lat": 30.882286 }, { "qy_id": 493, "azdz": "海洋小区63栋门栋对面绿化带上", "dqjj": "", "lng": 121.912943, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328032004", "sbmc": "海洋小区63栋门栋摄像机", "ipv4": "100.90.80.63", "id": 8598, "sbzt": "ON", "sxjlx": 2, "lat": 30.882298 }, { "qy_id": 493, "azdz": "海洋小区64栋门栋对面绿化带上", "dqjj": "", "lng": 121.912557, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328032005", "sbmc": "海洋小区64栋门栋摄像机", "ipv4": "100.90.80.64", "id": 8599, "sbzt": "ON", "sxjlx": 2, "lat": 30.882282 }, { "qy_id": 493, "azdz": "海洋小区65栋门栋对面绿化带上", "dqjj": "", "lng": 121.914362, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328032006", "sbmc": "海洋小区65栋门栋摄像机", "ipv4": "100.90.80.65", "id": 8600, "sbzt": "ON", "sxjlx": 2, "lat": 30.88248 }, { "qy_id": 493, "azdz": "海洋小区66栋门栋对面绿化带上", "dqjj": "", "lng": 121.914133, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328032007", "sbmc": "海洋小区66栋门栋摄像机", "ipv4": "100.90.80.66", "id": 8601, "sbzt": "ON", "sxjlx": 2, "lat": 30.882499 }, { "qy_id": 493, "azdz": "海洋小区67栋门栋对面绿化带上", "dqjj": "", "lng": 121.913949, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328032008", "sbmc": "海洋小区67栋门栋摄像机", "ipv4": "100.90.80.67", "id": 8602, "sbzt": "ON", "sxjlx": 2, "lat": 30.882499 }, { "qy_id": 493, "azdz": "海洋小区68栋门栋对面绿化带上", "dqjj": "", "lng": 121.913707, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328032009", "sbmc": "海洋小区68栋门栋摄像机", "ipv4": "100.90.80.68", "id": 8603, "sbzt": "ON", "sxjlx": 2, "lat": 30.88234 }, { "qy_id": 493, "azdz": "海洋小区69栋门栋对面绿化带上", "dqjj": "", "lng": 121.913415, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328032010", "sbmc": "海洋小区69栋门栋摄像机", "ipv4": "100.90.80.69", "id": 8604, "sbzt": "ON", "sxjlx": 2, "lat": 30.882329 }, { "qy_id": 493, "azdz": "海洋小区70栋门栋对面绿化带上", "dqjj": "", "lng": 121.913231, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328032011", "sbmc": "海洋小区70栋门栋摄像机", "ipv4": "100.90.80.70", "id": 8605, "sbzt": "ON", "sxjlx": 2, "lat": 30.88234 }, { "qy_id": 493, "azdz": "海洋小区71栋门栋对面绿化带上", "dqjj": "", "lng": 121.912979, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328032012", "sbmc": "海洋小区71栋门栋摄像机", "ipv4": "100.90.80.71", "id": 8606, "sbzt": "ON", "sxjlx": 2, "lat": 30.882329 }, { "qy_id": 493, "azdz": "海洋小区72栋门栋对面绿化带上", "dqjj": "", "lng": 121.91275, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328032013", "sbmc": "海洋小区72栋门栋摄像机", "ipv4": "100.90.80.72", "id": 8607, "sbzt": "ON", "sxjlx": 2, "lat": 30.882573 }, { "qy_id": 493, "azdz": "海洋小区73栋门栋对面绿化带上", "dqjj": "", "lng": 121.91253, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328032014", "sbmc": "海洋小区73栋门栋摄像机", "ipv4": "100.90.80.73", "id": 8608, "sbzt": "ON", "sxjlx": 2, "lat": 30.882554 }, { "qy_id": 493, "azdz": "海洋小区74栋门栋对面绿化带上", "dqjj": "", "lng": 121.912323, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328032015", "sbmc": "海洋小区74栋门栋摄像机", "ipv4": "100.90.80.74", "id": 8609, "sbzt": "ON", "sxjlx": 2, "lat": 30.882585 }, { "qy_id": 493, "azdz": "海洋小区75栋门栋对面绿化带上", "dqjj": "", "lng": 121.914255, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328032016", "sbmc": "海洋小区75栋门栋摄像机", "ipv4": "100.90.80.75", "id": 8610, "sbzt": "ON", "sxjlx": 2, "lat": 30.882534 }, { "qy_id": 493, "azdz": "海洋小区76栋门栋对面绿化带上", "dqjj": "", "lng": 121.913949, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328033001", "sbmc": "海洋小区76栋门栋摄像机", "ipv4": "100.90.80.76", "id": 8611, "sbzt": "ON", "sxjlx": 2, "lat": 30.882523 }, { "qy_id": 493, "azdz": "海洋小区77栋门栋对面绿化带上", "dqjj": "", "lng": 121.913803, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328033002", "sbmc": "海洋小区77栋门栋摄像机", "ipv4": "100.90.80.77", "id": 8612, "sbzt": "ON", "sxjlx": 2, "lat": 30.882877 }, { "qy_id": 493, "azdz": "海洋小区78栋门栋对面绿化带上", "dqjj": "", "lng": 121.913543, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328033003", "sbmc": "海洋小区78栋门栋摄像机", "ipv4": "100.90.80.78", "id": 8613, "sbzt": "ON", "sxjlx": 2, "lat": 30.882877 }, { "qy_id": 493, "azdz": "海洋小区79栋门栋对面绿化带上", "dqjj": "", "lng": 121.91322, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328033004", "sbmc": "海洋小区79栋门栋摄像机", "ipv4": "100.90.80.79", "id": 8614, "sbzt": "ON", "sxjlx": 2, "lat": 30.882819 }, { "qy_id": 493, "azdz": "海洋小区80栋门栋对面绿化带上", "dqjj": "", "lng": 121.913004, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328033005", "sbmc": "海洋小区80栋门栋摄像机", "ipv4": "100.90.80.80", "id": 8615, "sbzt": "ON", "sxjlx": 2, "lat": 30.882823 }, { "qy_id": 493, "azdz": "海洋小区81栋门栋对面绿化带上", "dqjj": "", "lng": 121.912708, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328033006", "sbmc": "海洋小区81栋门栋摄像机", "ipv4": "100.90.80.81", "id": 8616, "sbzt": "ON", "sxjlx": 2, "lat": 30.882846 }, { "qy_id": 493, "azdz": "海洋小区82栋门栋对面绿化带上", "dqjj": "", "lng": 121.912537, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328033007", "sbmc": "海洋小区82栋门栋摄像机", "ipv4": "100.90.80.82", "id": 8617, "sbzt": "ON", "sxjlx": 2, "lat": 30.882854 }, { "qy_id": 493, "azdz": "海洋小区83栋门栋对面绿化带上", "dqjj": "", "lng": 121.912384, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328033008", "sbmc": "海洋小区83栋门栋摄像机", "ipv4": "100.90.80.83", "id": 8618, "sbzt": "ON", "sxjlx": 2, "lat": 30.882854 }, { "qy_id": 493, "azdz": "海洋小区84栋门栋对面绿化带上", "dqjj": "", "lng": 121.913197, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328033009", "sbmc": "海洋小区84栋门栋摄像机", "ipv4": "100.90.80.84", "id": 8619, "sbzt": "ON", "sxjlx": 2, "lat": 30.882776 }, { "qy_id": 493, "azdz": "海洋小区85栋门栋对面绿化带上", "dqjj": "", "lng": 121.912964, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328033010", "sbmc": "海洋小区85栋门栋摄像机", "ipv4": "100.90.80.85", "id": 8620, "sbzt": "ON", "sxjlx": 2, "lat": 30.882765 }, { "qy_id": 493, "azdz": "海洋小区86栋门栋对面绿化带上", "dqjj": "", "lng": 121.912622, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328033011", "sbmc": "海洋小区86栋门栋摄像机", "ipv4": "100.90.80.86", "id": 8621, "sbzt": "ON", "sxjlx": 2, "lat": 30.883121 }, { "qy_id": 493, "azdz": "海洋小区87栋门栋对面绿化带上", "dqjj": "", "lng": 121.913628, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328033012", "sbmc": "海洋小区87栋门栋摄像机", "ipv4": "100.90.80.87", "id": 8622, "sbzt": "ON", "sxjlx": 2, "lat": 30.883191 }, { "qy_id": 493, "azdz": "海洋小区88栋门栋对面绿化带上", "dqjj": "", "lng": 121.913408, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328033013", "sbmc": "海洋小区88栋门栋摄像机", "ipv4": "100.90.80.88", "id": 8623, "sbzt": "ON", "sxjlx": 2, "lat": 30.88321 }, { "qy_id": 493, "azdz": "海洋小区90栋门栋对面绿化带上", "dqjj": "", "lng": 121.913206, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328033014", "sbmc": "海洋小区90栋门栋摄像机", "ipv4": "100.90.80.90", "id": 8624, "sbzt": "ON", "sxjlx": 2, "lat": 30.88333 }, { "qy_id": 493, "azdz": "海洋小区91栋门栋对面绿化带上", "dqjj": "", "lng": 121.913008, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328033015", "sbmc": "海洋小区91栋门栋摄像机", "ipv4": "100.90.80.91", "id": 8625, "sbzt": "ON", "sxjlx": 2, "lat": 30.883326 }, { "qy_id": 493, "azdz": "海洋小区92栋门栋对面绿化带上", "dqjj": "", "lng": 121.913229, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328033016", "sbmc": "海洋小区92栋门栋摄像机", "ipv4": "100.90.80.92", "id": 8626, "sbzt": "ON", "sxjlx": 2, "lat": 30.883237 }, { "qy_id": 493, "azdz": "海洋小区93栋门栋对面绿化带上", "dqjj": "", "lng": 121.912932, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328034001", "sbmc": "海洋小区93栋门栋摄像机", "ipv4": "100.90.80.93", "id": 8627, "sbzt": "ON", "sxjlx": 2, "lat": 30.883249 }, { "qy_id": 493, "azdz": "海洋小区95栋门栋对面绿化带上", "dqjj": "", "lng": 121.912687, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328034002", "sbmc": "海洋小区95栋门栋摄像机", "ipv4": "100.90.80.95", "id": 8628, "sbzt": "ON", "sxjlx": 2, "lat": 30.881171 }, { "qy_id": 493, "azdz": "海洋小区96栋门栋对面绿化带上", "dqjj": "", "lng": 121.912364, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328034003", "sbmc": "海洋小区96栋门栋摄像机", "ipv4": "100.90.80.96", "id": 8629, "sbzt": "ON", "sxjlx": 2, "lat": 30.881186 }, { "qy_id": 493, "azdz": "海洋小区97栋门栋对面绿化带上", "dqjj": "", "lng": 121.912894, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328034004", "sbmc": "海洋小区97栋门栋摄像机", "ipv4": "100.90.80.97", "id": 8630, "sbzt": "ON", "sxjlx": 2, "lat": 30.881411 }, { "qy_id": 493, "azdz": "海洋小区98栋门栋对面绿化带上", "dqjj": "", "lng": 121.912669, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328034005", "sbmc": "海洋小区98栋门栋摄像机", "ipv4": "100.90.80.98", "id": 8631, "sbzt": "ON", "sxjlx": 2, "lat": 30.881407 }, { "qy_id": 493, "azdz": "海洋小区99栋门栋对面绿化带上", "dqjj": "", "lng": 121.912292, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328034006", "sbmc": "海洋小区99栋门栋摄像机", "ipv4": "100.90.80.99", "id": 8632, "sbzt": "ON", "sxjlx": 2, "lat": 30.881395 }, { "qy_id": 493, "azdz": "海洋小区100栋门栋对面绿化带上", "dqjj": "", "lng": 121.912058, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328034007", "sbmc": "海洋小区100栋门栋摄像机", "ipv4": "100.90.80.100", "id": 8633, "sbzt": "ON", "sxjlx": 2, "lat": 30.881411 }, { "qy_id": 493, "azdz": "海洋小区101栋门栋对面绿化带上", "dqjj": "", "lng": 121.912768, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328034008", "sbmc": "海洋小区101栋门栋摄像机", "ipv4": "100.90.80.101", "id": 8634, "sbzt": "ON", "sxjlx": 2, "lat": 30.88167 }, { "qy_id": 493, "azdz": "海洋小区102栋门栋对面绿化带上", "dqjj": "", "lng": 121.912579, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328034009", "sbmc": "海洋小区102栋门栋摄像机", "ipv4": "100.90.80.102", "id": 8635, "sbzt": "ON", "sxjlx": 2, "lat": 30.881651 }, { "qy_id": 493, "azdz": "海洋小区103栋门栋对面绿化带上", "dqjj": "", "lng": 121.912355, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328034010", "sbmc": "海洋小区103栋门栋摄像机", "ipv4": "100.90.80.103", "id": 8636, "sbzt": "ON", "sxjlx": 2, "lat": 30.881666 }, { "qy_id": 493, "azdz": "海洋小区104栋门栋对面绿化带上", "dqjj": "", "lng": 121.912148, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328034011", "sbmc": "海洋小区104栋门栋摄像机", "ipv4": "100.90.80.104", "id": 8637, "sbzt": "ON", "sxjlx": 2, "lat": 30.881663 }, { "qy_id": 493, "azdz": "海洋小区105栋门栋对面绿化带上", "dqjj": "", "lng": 121.911861, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328034012", "sbmc": "海洋小区105栋门栋摄像机", "ipv4": "100.90.80.105", "id": 8638, "sbzt": "ON", "sxjlx": 2, "lat": 30.881647 }, { "qy_id": 493, "azdz": "海洋小区106栋门栋对面绿化带上", "dqjj": "", "lng": 121.912463, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328034013", "sbmc": "海洋小区106栋门栋摄像机", "ipv4": "100.90.80.106", "id": 8639, "sbzt": "ON", "sxjlx": 2, "lat": 30.881883 }, { "qy_id": 493, "azdz": "海洋小区107栋门栋对面绿化带上", "dqjj": "", "lng": 121.912283, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328034014", "sbmc": "海洋小区107栋门栋摄像机", "ipv4": "100.90.80.107", "id": 8640, "sbzt": "ON", "sxjlx": 2, "lat": 30.881899 }, { "qy_id": 493, "azdz": "海洋小区108栋门栋对面绿化带上", "dqjj": "", "lng": 121.912081, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328034015", "sbmc": "海洋小区108栋门栋摄像机", "ipv4": "100.90.80.108", "id": 8641, "sbzt": "ON", "sxjlx": 2, "lat": 30.881899 }, { "qy_id": 493, "azdz": "海洋小区109栋门栋对面绿化带上", "dqjj": "", "lng": 121.911933, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328034016", "sbmc": "海洋小区109栋门栋摄像机", "ipv4": "100.90.80.109", "id": 8642, "sbzt": "ON", "sxjlx": 2, "lat": 30.881899 }, { "qy_id": 493, "azdz": "海洋小区110栋门栋对面绿化带上", "dqjj": "", "lng": 121.91165, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328035001", "sbmc": "海洋小区110栋门栋摄像机", "ipv4": "100.90.80.110", "id": 8643, "sbzt": "ON", "sxjlx": 2, "lat": 30.881891 }, { "qy_id": 493, "azdz": "海洋小区111栋门栋对面绿化带上", "dqjj": "", "lng": 121.912171, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328035002", "sbmc": "海洋小区111栋门栋摄像机", "ipv4": "100.90.80.111", "id": 8644, "sbzt": "ON", "sxjlx": 2, "lat": 30.882096 }, { "qy_id": 493, "azdz": "海洋小区112栋门栋对面绿化带上", "dqjj": "", "lng": 121.912004, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328035003", "sbmc": "海洋小区112栋门栋摄像机", "ipv4": "100.90.80.112", "id": 8645, "sbzt": "ON", "sxjlx": 2, "lat": 30.882131 }, { "qy_id": 493, "azdz": "海洋小区113栋门栋对面绿化带上", "dqjj": "", "lng": 121.911636, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328035004", "sbmc": "海洋小区113栋门栋摄像机", "ipv4": "100.90.80.113", "id": 8646, "sbzt": "ON", "sxjlx": 2, "lat": 30.882104 }, { "qy_id": 493, "azdz": "海洋小区114栋门栋对面绿化带上", "dqjj": "", "lng": 121.911465, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328035005", "sbmc": "海洋小区114栋门栋摄像机", "ipv4": "100.90.80.114", "id": 8647, "sbzt": "ON", "sxjlx": 2, "lat": 30.882124 }, { "qy_id": 493, "azdz": "海洋小区115栋门栋对面绿化带上", "dqjj": "", "lng": 121.911897, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328035006", "sbmc": "海洋小区115栋门栋摄像机", "ipv4": "100.90.80.115", "id": 8648, "sbzt": "ON", "sxjlx": 2, "lat": 30.88212 }, { "qy_id": 493, "azdz": "海洋小区116栋门栋对面绿化带上", "dqjj": "", "lng": 121.911753, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328035007", "sbmc": "海洋小区116栋门栋摄像机", "ipv4": "100.90.80.116", "id": 8649, "sbzt": "ON", "sxjlx": 2, "lat": 30.882139 }, { "qy_id": 493, "azdz": "海洋小区117栋门栋对面绿化带上", "dqjj": "", "lng": 121.911322, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328035008", "sbmc": "海洋小区117栋门栋摄像机", "ipv4": "100.90.80.117", "id": 8650, "sbzt": "ON", "sxjlx": 2, "lat": 30.882364 }, { "qy_id": 493, "azdz": "海洋小区118栋门栋对面绿化带上", "dqjj": "", "lng": 121.910967, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328035009", "sbmc": "海洋小区118栋门栋摄像机", "ipv4": "100.90.80.118", "id": 8651, "sbzt": "ON", "sxjlx": 2, "lat": 30.882364 }, { "qy_id": 493, "azdz": "海洋小区119栋门栋对面绿化带上", "dqjj": "", "lng": 121.911573, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328035010", "sbmc": "海洋小区119栋门栋摄像机", "ipv4": "100.90.80.119", "id": 8652, "sbzt": "ON", "sxjlx": 2, "lat": 30.882573 }, { "qy_id": 493, "azdz": "海洋小区120栋门栋对面绿化带上", "dqjj": "", "lng": 121.911326, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328035011", "sbmc": "海洋小区120栋门栋摄像机", "ipv4": "100.90.80.120", "id": 8653, "sbzt": "ON", "sxjlx": 2, "lat": 30.882588 }, { "qy_id": 493, "azdz": "海洋小区121栋门栋对面绿化带上", "dqjj": "", "lng": 121.910922, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328035012", "sbmc": "海洋小区121栋门栋摄像机", "ipv4": "100.90.80.121", "id": 8654, "sbzt": "ON", "sxjlx": 2, "lat": 30.882608 }, { "qy_id": 493, "azdz": "海洋小区122栋门栋对面绿化带上", "dqjj": "", "lng": 121.91067, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328035013", "sbmc": "海洋小区122栋门栋摄像机", "ipv4": "100.90.80.122", "id": 8655, "sbzt": "ON", "sxjlx": 2, "lat": 30.882596 }, { "qy_id": 493, "azdz": "海洋小区123栋门栋对面绿化带上", "dqjj": "", "lng": 121.911724, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328035014", "sbmc": "海洋小区123栋门栋摄像机", "ipv4": "100.90.80.123", "id": 8656, "sbzt": "OFF", "sxjlx": 2, "lat": 30.882823 }, { "qy_id": 493, "azdz": "海洋小区124栋门栋对面绿化带上", "dqjj": "", "lng": 121.911517, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328035015", "sbmc": "海洋小区124栋门栋摄像机", "ipv4": "100.90.80.124", "id": 8657, "sbzt": "ON", "sxjlx": 2, "lat": 30.882854 }, { "qy_id": 493, "azdz": "海洋小区125栋门栋对面绿化带上", "dqjj": "", "lng": 121.911266, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328035016", "sbmc": "海洋小区125栋门栋摄像机", "ipv4": "100.90.80.125", "id": 8658, "sbzt": "ON", "sxjlx": 2, "lat": 30.882838 }, { "qy_id": 493, "azdz": "海洋小区126栋门栋对面绿化带上", "dqjj": "", "lng": 121.910992, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328036001", "sbmc": "海洋小区126栋门栋摄像机", "ipv4": "100.90.80.126", "id": 8659, "sbzt": "OFF", "sxjlx": 2, "lat": 30.882796 }, { "qy_id": 493, "azdz": "海洋小区127栋门栋对面绿化带上", "dqjj": "", "lng": 121.910794, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328036002", "sbmc": "海洋小区127栋门栋摄像机", "ipv4": "100.90.80.127", "id": 8660, "sbzt": "OFF", "sxjlx": 2, "lat": 30.8828 }, { "qy_id": 493, "azdz": "海洋小区128栋门栋对面绿化带上", "dqjj": "", "lng": 121.911989, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328036003", "sbmc": "海洋小区128栋门栋摄像机", "ipv4": "100.90.80.128", "id": 8661, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883055 }, { "qy_id": 493, "azdz": "海洋小区129栋门栋对面绿化带上", "dqjj": "", "lng": 121.911648, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328036004", "sbmc": "海洋小区129栋门栋摄像机", "ipv4": "100.90.80.129", "id": 8662, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883075 }, { "qy_id": 493, "azdz": "海洋小区130栋门栋对面绿化带上", "dqjj": "", "lng": 121.911499, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328036005", "sbmc": "海洋小区130栋门栋摄像机", "ipv4": "100.90.80.130", "id": 8663, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883075 }, { "qy_id": 493, "azdz": "海洋小区131栋门栋对面绿化带上", "dqjj": "", "lng": 121.911324, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328036006", "sbmc": "海洋小区131栋门栋摄像机", "ipv4": "100.90.80.131", "id": 8664, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883079 }, { "qy_id": 493, "azdz": "海洋小区132栋门栋对面绿化带上", "dqjj": "", "lng": 121.911144, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328036007", "sbmc": "海洋小区132栋门栋摄像机", "ipv4": "100.90.80.132", "id": 8665, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883082 }, { "qy_id": 493, "azdz": "海洋小区133栋门栋对面绿化带上", "dqjj": "", "lng": 121.912097, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328036008", "sbmc": "海洋小区133栋门栋摄像机", "ipv4": "100.90.80.133", "id": 8666, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883288 }, { "qy_id": 493, "azdz": "海洋小区134栋门栋对面绿化带上", "dqjj": "", "lng": 121.911904, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328036009", "sbmc": "海洋小区134栋门栋摄像机", "ipv4": "100.90.80.134", "id": 8667, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883299 }, { "qy_id": 493, "azdz": "海洋小区135栋门栋对面绿化带上", "dqjj": "", "lng": 121.911594, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328036010", "sbmc": "海洋小区135栋门栋摄像机", "ipv4": "100.90.80.135", "id": 8668, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883299 }, { "qy_id": 493, "azdz": "海洋小区136栋门栋对面绿化带上", "dqjj": "", "lng": 121.911383, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328036011", "sbmc": "海洋小区136栋门栋摄像机", "ipv4": "100.90.80.136", "id": 8669, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883319 }, { "qy_id": 493, "azdz": "海洋小区137栋门栋对面绿化带上", "dqjj": "", "lng": 121.911796, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328036012", "sbmc": "海洋小区137栋门栋摄像机", "ipv4": "100.90.80.137", "id": 8670, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883315 }, { "qy_id": 493, "azdz": "海洋小区138栋门栋对面绿化带上", "dqjj": "", "lng": 121.91167, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328036013", "sbmc": "海洋小区138栋门栋摄像机", "ipv4": "100.90.80.138", "id": 8671, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883346 }, { "qy_id": 493, "azdz": "海洋小区139栋门栋对面绿化带上", "dqjj": "", "lng": 121.912627, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328036014", "sbmc": "海洋小区139栋门栋摄像机", "ipv4": "100.90.80.139", "id": 8672, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883667 }, { "qy_id": 493, "azdz": "海洋小区140栋门栋对面绿化带上", "dqjj": "", "lng": 121.912371, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328036015", "sbmc": "海洋小区140栋门栋摄像机", "ipv4": "100.90.80.140", "id": 8673, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883605 }, { "qy_id": 493, "azdz": "海洋小区141栋门栋对面绿化带上", "dqjj": "", "lng": 121.912842, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328036016", "sbmc": "海洋小区141栋门栋摄像机", "ipv4": "100.90.80.141", "id": 8674, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883907 }, { "qy_id": 493, "azdz": "海洋小区142栋门栋对面绿化带上", "dqjj": "", "lng": 121.912631, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328037001", "sbmc": "海洋小区142栋门栋摄像机", "ipv4": "100.90.80.142", "id": 8675, "sbzt": "ON", "sxjlx": 2, "lat": 30.883946 }, { "qy_id": 493, "azdz": "海洋小区143栋门栋对面绿化带上", "dqjj": "", "lng": 121.912326, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328037002", "sbmc": "海洋小区143栋门栋摄像机", "ipv4": "100.90.80.143", "id": 8676, "sbzt": "ON", "sxjlx": 2, "lat": 30.883857 }, { "qy_id": 493, "azdz": "海洋小区144栋门栋对面绿化带上", "dqjj": "", "lng": 121.912092, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328037003", "sbmc": "海洋小区144栋门栋摄像机", "ipv4": "100.90.80.144", "id": 8677, "sbzt": "ON", "sxjlx": 2, "lat": 30.883861 }, { "qy_id": 493, "azdz": "海洋小区145栋门栋对面绿化带上", "dqjj": "", "lng": 121.912514, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328037004", "sbmc": "海洋小区145栋门栋摄像机", "ipv4": "100.90.80.145", "id": 8678, "sbzt": "ON", "sxjlx": 2, "lat": 30.883954 }, { "qy_id": 493, "azdz": "海洋小区146栋门栋对面绿化带上", "dqjj": "", "lng": 121.912425, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328037005", "sbmc": "海洋小区146栋门栋摄像机", "ipv4": "100.90.80.146", "id": 8679, "sbzt": "ON", "sxjlx": 2, "lat": 30.883962 }, { "qy_id": 493, "azdz": "海洋小区147栋门栋对面绿化带上", "dqjj": "", "lng": 121.912344, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328037006", "sbmc": "海洋小区147栋门栋摄像机", "ipv4": "100.90.80.147", "id": 8680, "sbzt": "ON", "sxjlx": 2, "lat": 30.883915 }, { "qy_id": 493, "azdz": "海洋小区96单元与99单元中间绿化带上", "dqjj": "", "lng": 121.911928, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328037007", "sbmc": "海洋小区道路摄像机1", "ipv4": "100.90.80.148", "id": 8681, "sbzt": "ON", "sxjlx": 2, "lat": 30.881399 }, { "qy_id": 493, "azdz": "海洋小区100单元与104单元中间绿化带上", "dqjj": "", "lng": 121.912507, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328037008", "sbmc": "海洋小区道路摄像机2", "ipv4": "100.90.80.149", "id": 8682, "sbzt": "ON", "sxjlx": 2, "lat": 30.88124 }, { "qy_id": 493, "azdz": "海洋小区主干道绿化带上，靠近101单元与106单元中间", "dqjj": "", "lng": 121.912777, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328037009", "sbmc": "海洋小区道路摄像机3", "ipv4": "100.90.80.150", "id": 8683, "sbzt": "ON", "sxjlx": 2, "lat": 30.881655 }, { "qy_id": 493, "azdz": "海洋小区主干道绿化带上，靠近101单元与106单元中间", "dqjj": "", "lng": 121.911825, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328037010", "sbmc": "海洋小区道路摄像机4", "ipv4": "100.90.80.151", "id": 8684, "sbzt": "ON", "sxjlx": 2, "lat": 30.882619 }, { "qy_id": 493, "azdz": "海洋小区主干道绿化带上，靠近101单元与106单元中间", "dqjj": "", "lng": 121.911793, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328037011", "sbmc": "海洋小区道路摄像机5", "ipv4": "100.90.80.152", "id": 8685, "sbzt": "ON", "sxjlx": 2, "lat": 30.882108 }, { "qy_id": 493, "azdz": "海洋小区105单元与110单元中间绿化带上", "dqjj": "", "lng": 121.912512, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328037012", "sbmc": "海洋小区道路摄像机6", "ipv4": "100.90.80.153", "id": 8686, "sbzt": "ON", "sxjlx": 2, "lat": 30.881891 }, { "qy_id": 493, "azdz": "海洋小区113单元与110单元中间绿化带上", "dqjj": "", "lng": 121.911398, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328037013", "sbmc": "海洋小区道路摄像机7", "ipv4": "100.90.80.154", "id": 8687, "sbzt": "ON", "sxjlx": 2, "lat": 30.881883 }, { "qy_id": 493, "azdz": "海洋小区主干道绿化带上，靠近111单元与115单元中间", "dqjj": "", "lng": 121.911906, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328037014", "sbmc": "海洋小区道路摄像机8", "ipv4": "100.90.80.155", "id": 8688, "sbzt": "ON", "sxjlx": 2, "lat": 30.882124 }, { "qy_id": 493, "azdz": "海洋小区主干道绿化带上，靠近111单元与115单元中间", "dqjj": "", "lng": 121.91226, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328037015", "sbmc": "海洋小区道路摄像机9", "ipv4": "100.90.80.156", "id": 8689, "sbzt": "ON", "sxjlx": 2, "lat": 30.882151 }, { "qy_id": 493, "azdz": "海洋小区主干道绿化带上，靠近111单元与115单元中间", "dqjj": "", "lng": 121.91231, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328037016", "sbmc": "海洋小区道路摄像机10", "ipv4": "100.90.80.157", "id": 8690, "sbzt": "ON", "sxjlx": 2, "lat": 30.8821 }, { "qy_id": 493, "azdz": "海洋小区114单元与116单元中间绿化带上", "dqjj": "", "lng": 121.911465, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328038001", "sbmc": "海洋小区道路摄像机11", "ipv4": "100.90.80.158", "id": 8691, "sbzt": "OFF", "sxjlx": 2, "lat": 30.882147 }, { "qy_id": 493, "azdz": "海洋小区125单元与129单元中间绿化带上", "dqjj": "", "lng": 121.911158, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328038002", "sbmc": "海洋小区道路摄像机12", "ipv4": "100.90.80.159", "id": 8692, "sbzt": "OFF", "sxjlx": 2, "lat": 30.882865 }, { "qy_id": 493, "azdz": "海洋小区130单元与136单元中间绿化带上", "dqjj": "", "lng": 121.911122, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328038003", "sbmc": "海洋小区道路摄像机13", "ipv4": "100.90.80.160", "id": 8693, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883137 }, { "qy_id": 493, "azdz": "海洋小区76单元与128单元中间绿化带上", "dqjj": "", "lng": 121.911064, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328038004", "sbmc": "海洋小区道路摄像机14", "ipv4": "100.90.80.161", "id": 8694, "sbzt": "OFF", "sxjlx": 2, "lat": 30.882869 }, { "qy_id": 493, "azdz": "海洋小区137单元与135单元中间绿化带上", "dqjj": "", "lng": 121.911432, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328038005", "sbmc": "海洋小区道路摄像机15", "ipv4": "100.90.80.162", "id": 8695, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883338 }, { "qy_id": 493, "azdz": "海洋小区138单元与144单元中间绿化带上", "dqjj": "", "lng": 121.910902, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328038006", "sbmc": "海洋小区道路摄像机16", "ipv4": "100.90.80.163", "id": 8696, "sbzt": "OFF", "sxjlx": 2, "lat": 30.882877 }, { "qy_id": 493, "azdz": "海洋小区145单元与144单元中间绿化带上", "dqjj": "", "lng": 121.911984, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328038007", "sbmc": "海洋小区道路摄像机17", "ipv4": "100.90.80.164", "id": 8697, "sbzt": "OFF", "sxjlx": 2, "lat": 30.88383 }, { "qy_id": 493, "azdz": "海洋小区143单元与142单元中间绿化带上", "dqjj": "", "lng": 121.912568, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328038008", "sbmc": "海洋小区道路摄像机18", "ipv4": "100.90.80.165", "id": 8698, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883927 }, { "qy_id": 493, "azdz": "海洋小区143单元与142单元中间绿化带上", "dqjj": "", "lng": 121.912919, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328038009", "sbmc": "海洋小区道路摄像机19", "ipv4": "100.90.80.166", "id": 8699, "sbzt": "OFF", "sxjlx": 2, "lat": 30.88364 }, { "qy_id": 493, "azdz": "海洋小区140单元与141单元中间绿化带上", "dqjj": "", "lng": 121.912213, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328038010", "sbmc": "海洋小区道路摄像机20", "ipv4": "100.90.80.167", "id": 8700, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883098 }, { "qy_id": 493, "azdz": "海洋小区140单元与141单元中间绿化带上", "dqjj": "", "lng": 121.912227, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328038011", "sbmc": "海洋小区道路摄像机21", "ipv4": "100.90.80.168", "id": 8701, "sbzt": "OFF", "sxjlx": 2, "lat": 30.88302 }, { "qy_id": 493, "azdz": "海洋小区140单元与141单元中间绿化带上", "dqjj": "", "lng": 121.912326, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328038012", "sbmc": "海洋小区道路摄像机22", "ipv4": "100.90.80.169", "id": 8702, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883044 }, { "qy_id": 493, "azdz": "海洋小区主干道绿化带上，靠近133单元与139单元中间", "dqjj": "", "lng": 121.912416, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328038013", "sbmc": "海洋小区道路摄像机23", "ipv4": "100.90.80.170", "id": 8703, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883245 }, { "qy_id": 493, "azdz": "海洋小区主干道绿化带上，靠近133单元与139单元中间", "dqjj": "", "lng": 121.912532, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328038014", "sbmc": "海洋小区道路摄像机24", "ipv4": "100.90.80.171", "id": 8704, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883253 }, { "qy_id": 493, "azdz": "海洋小区主干道绿化带上，靠近133单元与139单元中间", "dqjj": "", "lng": 121.912743, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328038015", "sbmc": "海洋小区道路摄像机25", "ipv4": "100.90.80.172", "id": 8705, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883408 }, { "qy_id": 493, "azdz": "海洋小区主干道绿化带上，靠近91单元与94单元中间", "dqjj": "", "lng": 121.912802, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328038016", "sbmc": "海洋小区道路摄像机26", "ipv4": "100.90.80.173", "id": 8706, "sbzt": "OFF", "sxjlx": 2, "lat": 30.883462 }, { "qy_id": 493, "azdz": "海洋小区主干道绿化带上，靠近91单元与94单元中间", "dqjj": "", "lng": 121.913125, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328039001", "sbmc": "海洋小区道路摄像机27", "ipv4": "100.90.80.174", "id": 8707, "sbzt": "ON", "sxjlx": 2, "lat": 30.883605 }, { "qy_id": 493, "azdz": "海洋小区主干道绿化带上，靠近91单元与94单元中间", "dqjj": "", "lng": 121.912851, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328039002", "sbmc": "海洋小区道路摄像机28", "ipv4": "100.90.80.175", "id": 8708, "sbzt": "ON", "sxjlx": 2, "lat": 30.883036 }, { "qy_id": 493, "azdz": "海洋小区主干道绿化带上，靠近91单元与94单元中间", "dqjj": "", "lng": 121.913435, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328039003", "sbmc": "海洋小区道路摄像机29", "ipv4": "100.90.80.176", "id": 8709, "sbzt": "ON", "sxjlx": 2, "lat": 30.883288 }, { "qy_id": 493, "azdz": "海洋小区92单元与93单元中间绿化带上", "dqjj": "", "lng": 121.913494, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328039004", "sbmc": "海洋小区道路摄像机30", "ipv4": "100.90.80.177", "id": 8710, "sbzt": "ON", "sxjlx": 2, "lat": 30.883206 }, { "qy_id": 493, "azdz": "海洋小区92单元与87单元中间绿化带上", "dqjj": "", "lng": 121.912108, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328039005", "sbmc": "海洋小区道路摄像机31", "ipv4": "100.90.80.178", "id": 8711, "sbzt": "OFF", "sxjlx": 2, "lat": 30.882596 }, { "qy_id": 493, "azdz": "海洋小区82单元与83单元中间绿化带上", "dqjj": "", "lng": 121.91204, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328039006", "sbmc": "海洋小区道路摄像机32", "ipv4": "100.90.80.179", "id": 8712, "sbzt": "OFF", "sxjlx": 2, "lat": 30.882577 }, { "qy_id": 493, "azdz": "海洋小区82单元与83单元中间绿化带上", "dqjj": "", "lng": 121.912108, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328039007", "sbmc": "海洋小区道路摄像机33", "ipv4": "100.90.80.180", "id": 8713, "sbzt": "OFF", "sxjlx": 2, "lat": 30.882534 }, { "qy_id": 493, "azdz": "海洋小区82单元与83单元中间绿化带上", "dqjj": "", "lng": 121.912739, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328039008", "sbmc": "海洋小区道路摄像机34", "ipv4": "100.90.80.181", "id": 8714, "sbzt": "ON", "sxjlx": 2, "lat": 30.882838 }, { "qy_id": 493, "azdz": "海洋小区81单元与80单元中间绿化带上", "dqjj": "", "lng": 121.913381, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328039009", "sbmc": "海洋小区道路摄像机35", "ipv4": "100.90.80.182", "id": 8715, "sbzt": "ON", "sxjlx": 2, "lat": 30.882858 }, { "qy_id": 493, "azdz": "海洋小区主干道绿化带上，靠近67单元与76单元中间", "dqjj": "", "lng": 121.912256, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328039010", "sbmc": "海洋小区道路摄像机36", "ipv4": "100.90.80.183", "id": 8716, "sbzt": "ON", "sxjlx": 2, "lat": 30.882538 }, { "qy_id": 493, "azdz": "海洋小区71单元与64单元中间绿化带上", "dqjj": "", "lng": 121.91293, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:01", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328039011", "sbmc": "海洋小区道路摄像机37", "ipv4": "100.90.80.184", "id": 8717, "sbzt": "ON", "sxjlx": 2, "lat": 30.882526 }, { "qy_id": 493, "azdz": "海洋小区70单元、77单元、80单元夹角绿化带上", "dqjj": "", "lng": 121.913846, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328039012", "sbmc": "海洋小区道路摄像机38", "ipv4": "100.90.80.185", "id": 8718, "sbzt": "ON", "sxjlx": 2, "lat": 30.882519 }, { "qy_id": 493, "azdz": "海洋小区70单元、77单元、80单元夹角绿化带上", "dqjj": "", "lng": 121.913837, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:57", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328039013", "sbmc": "海洋小区道路摄像机39", "ipv4": "100.90.80.186", "id": 8719, "sbzt": "ON", "sxjlx": 2, "lat": 30.882461 }, { "qy_id": 493, "azdz": "海洋小区70单元、77单元、80单元夹角绿化带上", "dqjj": "", "lng": 121.912382, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328039014", "sbmc": "海洋小区道路摄像机40", "ipv4": "100.90.80.187", "id": 8720, "sbzt": "ON", "sxjlx": 2, "lat": 30.882294 }, { "qy_id": 493, "azdz": "海洋小区78单元与79单元中间绿化带上，靠近小区院墙处", "dqjj": "", "lng": 121.912777, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328039015", "sbmc": "海洋小区道路摄像机41", "ipv4": "100.90.80.188", "id": 8721, "sbzt": "ON", "sxjlx": 2, "lat": 30.882309 }, { "qy_id": 493, "azdz": "海洋小区66单元与58单元中间绿化带上", "dqjj": "", "lng": 121.912867, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328039016", "sbmc": "海洋小区道路摄像机42", "ipv4": "100.90.80.189", "id": 8722, "sbzt": "ON", "sxjlx": 2, "lat": 30.882352 }, { "qy_id": 493, "azdz": "海洋小区66单元与58单元中间绿化带上", "dqjj": "", "lng": 121.912858, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328040001", "sbmc": "海洋小区道路摄像机43", "ipv4": "100.90.80.190", "id": 8723, "sbzt": "ON", "sxjlx": 2, "lat": 30.882267 }, { "qy_id": 493, "azdz": "海洋小区66单元与58单元中间绿化带上", "dqjj": "", "lng": 121.914789, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328040002", "sbmc": "海洋小区道路摄像机44", "ipv4": "100.90.80.191", "id": 8724, "sbzt": "ON", "sxjlx": 2, "lat": 30.88229 }, { "qy_id": 493, "azdz": "海洋小区78单元与61单元中间绿化带上", "dqjj": "", "lng": 121.912889, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328040003", "sbmc": "海洋小区道路摄像机45", "ipv4": "100.90.80.192", "id": 8725, "sbzt": "ON", "sxjlx": 2, "lat": 30.882046 }, { "qy_id": 493, "azdz": "海洋小区53单元、60单元、61单元夹角绿化带上", "dqjj": "", "lng": 121.912786, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328040004", "sbmc": "海洋小区道路摄像机46", "ipv4": "100.90.80.193", "id": 8726, "sbzt": "ON", "sxjlx": 2, "lat": 30.881883 }, { "qy_id": 493, "azdz": "海洋小区主干道绿化带上，59单元与106单元中间，靠近59单元处", "dqjj": "", "lng": 121.913213, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328040005", "sbmc": "海洋小区道路摄像机47", "ipv4": "100.90.80.194", "id": 8727, "sbzt": "ON", "sxjlx": 2, "lat": 30.882069 }, { "qy_id": 493, "azdz": "海洋小区主干道绿化带上，59单元与106单元中间，靠近59单元处", "dqjj": "", "lng": 121.913365, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328040006", "sbmc": "海洋小区道路摄像机48", "ipv4": "100.90.80.195", "id": 8728, "sbzt": "ON", "sxjlx": 2, "lat": 30.882019 }, { "qy_id": 493, "azdz": "海洋小区51单元与56单元中间绿化带上", "dqjj": "", "lng": 121.913774, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328040007", "sbmc": "海洋小区道路摄像机49", "ipv4": "100.90.80.196", "id": 8729, "sbzt": "ON", "sxjlx": 2, "lat": 30.882031 }, { "qy_id": 493, "azdz": "海洋小区51单元与56单元中间绿化带上", "dqjj": "", "lng": 121.913307, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328040008", "sbmc": "海洋小区道路摄像机50", "ipv4": "100.90.80.197", "id": 8730, "sbzt": "ON", "sxjlx": 2, "lat": 30.881984 }, { "qy_id": 493, "azdz": "海洋小区51单元与56单元中间绿化带上", "dqjj": "", "lng": 121.913823, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328040009", "sbmc": "海洋小区道路摄像机51", "ipv4": "100.90.80.198", "id": 8731, "sbzt": "ON", "sxjlx": 2, "lat": 30.881899 }, { "qy_id": 493, "azdz": "海洋小区50单元、55单元、54单元夹角绿化带上", "dqjj": "", "lng": 121.913828, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328040010", "sbmc": "海洋小区道路摄像机52", "ipv4": "100.90.80.199", "id": 8732, "sbzt": "ON", "sxjlx": 2, "lat": 30.881705 }, { "qy_id": 493, "azdz": "海洋小区50单元、55单元、54单元夹角绿化带上", "dqjj": "", "lng": 121.91447, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328040011", "sbmc": "海洋小区道路摄像机53", "ipv4": "100.90.80.200", "id": 8733, "sbzt": "ON", "sxjlx": 2, "lat": 30.882418 }, { "qy_id": 493, "azdz": "海洋小区50单元、55单元、54单元夹角绿化带上", "dqjj": "", "lng": 121.913271, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328040012", "sbmc": "海洋小区道路摄像机54", "ipv4": "100.90.80.201", "id": 8734, "sbzt": "ON", "sxjlx": 2, "lat": 30.881566 }, { "qy_id": 493, "azdz": "海洋小区主干道绿化带上，52单元与48单元中间，靠近52单元处", "dqjj": "", "lng": 121.913859, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328040013", "sbmc": "海洋小区道路摄像机55", "ipv4": "100.90.80.202", "id": 8735, "sbzt": "ON", "sxjlx": 2, "lat": 30.881527 }, { "qy_id": 493, "azdz": "海洋小区主干道绿化带上，52单元与48单元中间，靠近52单元处", "dqjj": "", "lng": 121.913837, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328040014", "sbmc": "海洋小区道路摄像机56", "ipv4": "100.90.80.203", "id": 8736, "sbzt": "ON", "sxjlx": 2, "lat": 30.881333 }, { "qy_id": 493, "azdz": "海洋小区主干道绿化带上，52单元与48单元中间，靠近52单元处", "dqjj": "", "lng": 121.912871, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328040015", "sbmc": "海洋小区道路摄像机57", "ipv4": "100.90.80.204", "id": 8737, "sbzt": "ON", "sxjlx": 2, "lat": 30.881612 }, { "qy_id": 493, "azdz": "海洋小区50单元与47单元中间绿化带上", "dqjj": "", "lng": 121.912523, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328040016", "sbmc": "海洋小区道路摄像机58", "ipv4": "100.90.80.205", "id": 8738, "sbzt": "ON", "sxjlx": 2, "lat": 30.883675 }, { "qy_id": 493, "azdz": "海洋小区入口车闸处", "dqjj": "", "lng": 121.91354, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:56:58", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328041001", "sbmc": "海洋小区入口人脸识别机1", "ipv4": "100.90.80.11", "id": 8739, "sbzt": "ON", "sxjlx": 2, "lat": 30.881225 }, { "qy_id": 493, "azdz": "海洋小区入口车闸处", "dqjj": "", "lng": 121.913455, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328041002", "sbmc": "海洋小区入口人脸识别机2", "ipv4": "100.90.80.12", "id": 8740, "sbzt": "ON", "sxjlx": 2, "lat": 30.881124 }, { "qy_id": 493, "azdz": "海洋小区入口车闸处", "dqjj": "", "lng": 121.913406, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328041003", "sbmc": "海洋小区入口人脸识别机3", "ipv4": "100.90.80.13", "id": 8741, "sbzt": "ON", "sxjlx": 2, "lat": 30.881341 }, { "qy_id": 493, "azdz": "海洋小区入口车闸处", "dqjj": "", "lng": 121.913298, "dqjd": "", "qysj": "", "xgrq_dt": "2019-03-20 22:54:02", "cjrq_dt": "", "spy_url": "", "sxjjkfw": "", "sbbm": "31011900011328041004", "sbmc": "海洋小区入口人脸识别机4", "ipv4": "100.90.80.14", "id": 8742, "sbzt": "ON", "sxjlx": 2, "lat": 30.881252 }], "auth": {}, "offgun": 0, "errMsg": "SUCCESS", "onother": 0, "ongun": 1, "total": 623, "offTotal": 162, "errCode": 0, "onball": 460, "onTotal": 461, "offother": 0
        },
        //停车场
        ParkingLot: {
            "Result": 2,
            "Data": [
                {
                    id: "1",pid:"P0001",lotnum:1445, pos: "121.899980,30.917453,1", textname: "海昌公园停车场", status: "正常",
                    blockcordinate: "121.900234,30.917696,-0.000305;121.899472,30.917033,-0.000183;121.899484,30.916954,-0.000244;121.900072,30.916390,-0.000244;121.900244,30.916421,-0.000275;121.900840,30.916410,-0.000214;121.900896,30.916310,-0.000244;121.901479,30.916711,-0.000244;121.901474,30.916809,-0.000244;121.900353,30.917776,-0.000397"
                },
                {
                    id: "2", pid: "P0002",lotnum:1500, pos: "121.919760,30.916221,1", textname: "雪绒花停车场", status: "正常",
                    blockcordinate: "121.920795,30.917002,-0.000580;121.920081,30.916506,-0.000641;121.919155,30.915802,-0.000641;121.919295,30.915591,-0.000580;121.919911,30.915163,-0.000336;121.920714,30.915717,9.998138;121.920827,30.915777,9.998138;121.922162,30.916647,9.998322;121.922221,30.916846,-0.000397;121.921482,30.917441,-0.000580"
                },
                {
                    id: "3", pid: "P0003",lotnum:977, pos: "121.907803,30.925581,1", textname: "临港大道停车场", status: "正常",
                    blockcordinate: "121.905956,30.927166,0.000427;121.907996,30.925441,0.000366;121.908143,30.925571,0.000427;121.908347,30.925663,0.000366;121.907898,30.926084,0.000366;121.906290,30.927460,0.000488"
                },
                {
                    id: "4", pid: "P0004", lotnum:857, pos: "121.901151,30.896859,1", textname: "港城新天地停车场", status: "正常",
                    blockcordinate: "121.900253,30.898251,0.000092;121.900276,30.896846,0.000031;121.901247,30.896863,-0.000092;121.901299,30.898388,-0.000183;121.900334,30.898412,-0.000153"
                },
                /*
                    P0001  海昌公园    1445     1392
                    P0002  雪绒花路    1500     856
                    P0003  临港大道    977      961
                    P0004  港城新天地  857      818               
                */
            ]
        },
        //空余车位数
        FreeParkingLot: {
            "auth": {},
            "data": [{
                    "parkState": 0,
                    "total": 1250,
                    "occupyNum": 344,
                    "level": 3,
                    "cmdType": 2,
                    "freeNum": 906,
                    "fdtTime": 1561000139000,
                    "id": "P0001"
                },
                {
                    "parkState": 0,
                    "total": 857,
                    "occupyNum": 1,
                    "level": 3,
                    "cmdType": 2,
                    "freeNum": 856,
                    "fdtTime": 1561000166000,
                    "id": "P0002"
                },
                {
                    "parkState": 0,
                    "total": 977,
                    "occupyNum": 23,
                    "level": 3,
                    "cmdType": 2,
                    "freeNum": 954,
                    "fdtTime": 1560908028000,
                    "id": "P0003"
                },
                {
                    "parkState": 0,
                    "total": 857,
                    "occupyNum": 78,
                    "level": 3,
                    "cmdType": 2,
                    "freeNum": 779,
                    "fdtTime": 1561000212000,
                    "id": "P0004"
                },
                {
                    "parkState": 0,
                    "total": 1250,
                    "occupyNum": 154,
                    "level": 0,
                    "cmdType": 0,
                    "freeNum": 1096,
                    "fdtTime": 1556885684000,
                    "id": "P020"
                }
            ],
            "errCode": 0,
            "errMsg": "SUCCESS"
        },
        //无人机库
        DroneHangarData: {          
	    "auth": {},
            "data": [{
                "ktjs": 1,
                "jkbbh": "UH_MK2_V1",
                "qy_id": "",
                "lng": 121.895836,
                "lat_84": 121.891766,
                "jkmc": "书塘站机库",
                "jkdz": "上海市浦东新区南汇新城沪城环路2011号",
                "jkzt": "启用",
                "qysj": "",
                "xgrq_dt": "",
                "cjrq_dt": "2018-11-03 10:43:15",
                "xh": "",
                "gdms": "220V供电/电池供电",
                "cdzs": "",
                "id": 174,
                "jkbm": "CH1-20011234561680000001",
                "lat": 30.90593,
                "lng_84": 30.908329,
                "zxrws": ""
            }, {
                "ktjs": 1,
                "jkbbh": "UH_MK3_V1.0.1",
                "qy_id": "",
                "lng": 121.915734,
                "lat_84": 121.891766,
                "jkmc": "海科站机库",
                "jkdz": "上海市浦东新区南汇新城海洋一路399号",
                "jkzt": "启用",
                "qysj": "",
                "xgrq_dt": "",
                "cjrq_dt": "2019-01-14 16:00:27",
                "xh": "",
                "gdms": "220V供电/电池供电",
                "cdzs": "",
                "id": 238,
                "jkbm": "CH2_20011234561680000002",
                "lat": 30.87445,
                "lng_84": 30.908329,
                "zxrws": ""
            }, {
                "ktjs": 1,
                "jkbbh": "UH_MK3_V1.0.1",
                "qy_id": "",
                "lng": 121.923712,
                "lat_84": 121.891766,
                "jkmc": "A2泵站机库",
                "jkdz": "上海市浦东新区南汇新城环湖西三路与临港大道交叉口附近",
                "jkzt": "启用",
                "qysj": "",
                "xgrq_dt": "",
                "cjrq_dt": "2019-02-13 11:06:21",
                "xh": "",
                "gdms": "220V供电/电池供电",
                "cdzs": "",
                "id": 240,
                "jkbm": "CH3_20011234561680000003",
                "lat": 30.910946,
                "lng_84": 30.908329,
                "zxrws": ""
            }, {
                "ktjs": 1,
                "jkbbh": "UH_MK3_V1.0.1",
                "qy_id": "",
                "lng": 121.964498,
                "lat_84": 121.891766,
                "jkmc": "临闸站机库",
                "jkdz": "上海市浦东新区堤顶路",
                "jkzt": "启用",
                "qysj": "",
                "xgrq_dt": "",
                "cjrq_dt": "2019-02-13 11:07:40",
                "xh": "",
                "gdms": "220V供电/电池供电",
                "cdzs": "",
                "id": 241,
                "jkbm": "CH4_20011234561680000004",
                "lat": 30.878193,
                "lng_84": 30.908329,
                "zxrws": ""
            }, {
                "ktjs": 1,
                "jkbbh": "UH_MK3_V1.0.1",
                "qy_id": "",
                "lng": 121.908289,
                "lat_84": 121.908289,
                "jkmc": "A3泵站机库",
                "jkdz": "上海市浦东新区南汇新城铁塔A3泵站",
                "jkzt": "禁用",
                "qysj": "2019-03-28 17:54:06",
                "xgrq_dt": "2019-03-28 17:57:25",
                "cjrq_dt": "2019-02-13 11:06:21",
                "xh": "",
                "gdms": "220V供电/电池供电",
                "cdzs": "",
                "id": 242,
                "jkbm": "CH5_20011234561680000005",
                "lat": 30.925412,
                "lng_84": 30.925412,
                "zxrws": ""
            }, {
                "ktjs": 1,
                "jkbbh": "UH_MK3_V1.0.1",
                "qy_id": "",
                "lng": 121.879071,
                "lat_84": 121.879071,
                "jkmc": "同汇路站",
                "jkdz": "上海市浦东新区南汇新城临港产业服务中心",
                "jkzt": "禁用",
                "qysj": "2019-03-28 17:54:10",
                "xgrq_dt": "2019-03-28 17:57:30",
                "cjrq_dt": "2019-02-13 11:06:21",
                "xh": "",
                "gdms": "220V供电/电池供电",
                "cdzs": "",
                "id": 243,
                "jkbm": "CH6_20011234561680000006",
                "lat": 30.878598,
                "lng_84": 30.878598,
                "zxrws": ""
            }, {
                "ktjs": 1,
                "jkbbh": "UH_MK3_V1.0.1",
                "qy_id": "",
                "lng": 121.508081,
                "lat_84": 121.508081,
                "jkmc": "申能站",
                "jkdz": "上海市浦东新区南汇新城申能集团大楼",
                "jkzt": "禁用",
                "qysj": "2019-03-28 17:54:16",
                "xgrq_dt": "2019-03-28 17:57:34",
                "cjrq_dt": "2019-02-13 11:06:21",
                "xh": "",
                "gdms": "220V供电/电池供电",
                "cdzs": "",
                "id": 244,
                "jkbm": "CH7_20011234561680000007",
                "lat": 31.239163,
                "lng_84": 31.239163,
                "zxrws": ""
            }],
            "errCode": 0,
            "errMsg": "SUCCESS"
        },
        //无人机
        DroneData: {
            "auth": {},
            "data": [{
                "pp": "",
                "sccj": "",
                "dj": "",
                "zyrq": "2019-04-10 16:48:11",
                "qysj": "",
                "playUrl": "http://rtmp-play.video.vldc.org.cn/citybrain/CH1.flv?auth_key=1553924644-8cef4b7c75bc435985c070b92a5c3757-0-011f3821e9f4c872887d66d489c56801&onlyvideo=true",
                "sbmc": "书塘站无人机",
                "zcrq": "2019-04-10 16:48:11",
                "spfblhx": 0,
                "id": 364,
                "jikuid": 174,
                "bxjzrq": "",
                "cckrl": 0,
                "spfblzx": 0,
                "xgrq_dt": "2019-04-02 10:35:04",
                "cjrq_dt": "2019-02-16 15:35:00",
                "zpcd": 0,
                "sbbm": "20010000001680000001",
                "token": "",
                "xh": "",
                "ccrq": "",
                "zpkd": 0,
                "wrjlx": "",
                "bxqsrq": "",
                "sbzt": ""
            }, {
                "pp": "DJI",
                "sccj": "",
                "dj": "",
                "zyrq": "2019-05-17 11:59:27",
                "qysj": "",
                "playUrl": "http://rtmp-play.video.vldc.org.cn/citybrain/CH2.flv?auth_key=1553924751-e453d2120f814f5cb2a274465f99768a-0-f457de0e0ca8005156a4c1ca389a13ae&onlyvideo=true",
                "sbmc": "海科站无人机",
                "zcrq": "2019-05-17 11:59:27",
                "spfblhx": 1280,
                "id": 365,
                "jikuid": 238,
                "bxjzrq": "",
                "cckrl": 12100,
                "spfblzx": 720,
                "xgrq_dt": "2019-04-15 10:15:05",
                "cjrq_dt": "2019-03-02 13:23:13",
                "zpcd": 3,
                "sbbm": "20010000001680000002",
                "token": "",
                "xh": "",
                "ccrq": "",
                "zpkd": 2,
                "wrjlx": "",
                "bxqsrq": "",
                "sbzt": ""
            }, {
                "pp": "",
                "sccj": "",
                "dj": "",
                "zyrq": "2019-05-10 10:19:44",
                "qysj": "",
                "playUrl": "",
                "sbmc": "临闸站无人机",
                "zcrq": "2019-05-10 10:19:44",
                "spfblhx": 0,
                "id": 366,
                "jikuid": 241,
                "bxjzrq": "",
                "cckrl": 0,
                "spfblzx": 0,
                "xgrq_dt": "2019-04-15 10:15:25",
                "cjrq_dt": "2019-03-05 09:48:17",
                "zpcd": 0,
                "sbbm": "ceshi_001",
                "token": "",
                "xh": "",
                "ccrq": "",
                "zpkd": 0,
                "wrjlx": "",
                "bxqsrq": "",
                "sbzt": ""
            }, {
                "pp": "1",
                "sccj": "1",
                "dj": "",
                "zyrq": "2019-03-29 00:00:00",
                "qysj": "",
                "playUrl": "",
                "sbmc": "A2泵站机库",
                "zcrq": "2019-03-29 00:00:00",
                "spfblhx": 1,
                "id": 377,
                "jikuid": 240,
                "bxjzrq": "",
                "cckrl": 1,
                "spfblzx": 1,
                "xgrq_dt": "2019-04-02 10:33:44",
                "cjrq_dt": "2019-03-22 17:12:24",
                "zpcd": 1,
                "sbbm": "SkySys_0004",
                "token": "",
                "xh": "",
                "ccrq": "",
                "zpkd": 1,
                "wrjlx": "two",
                "bxqsrq": "",
                "sbzt": ""
            }, {
                "pp": "",
                "sccj": "",
                "dj": "",
                "zyrq": "2019-04-24 14:50:30",
                "qysj": "",
                "playUrl": "",
                "sbmc": "A3泵站机库",
                "zcrq": "2019-04-24 14:50:30",
                "spfblhx": 0,
                "id": 378,
                "jikuid": 242,
                "bxjzrq": "",
                "cckrl": 0,
                "spfblzx": 0,
                "xgrq_dt": "2019-04-16 16:36:35",
                "cjrq_dt": "2019-03-29 14:14:26",
                "zpcd": 0,
                "sbbm": "SkySys_0005",
                "token": "",
                "xh": "",
                "ccrq": "",
                "zpkd": 0,
                "wrjlx": "one",
                "bxqsrq": "",
                "sbzt": ""
            }, {
                "pp": "",
                "sccj": "",
                "dj": "",
                "zyrq": "2019-05-24 11:01:01",
                "qysj": "",
                "playUrl": "",
                "sbmc": "同汇路站无人机",
                "zcrq": "2019-05-24 11:01:01",
                "spfblhx": 0,
                "id": 379,
                "jikuid": 243,
                "bxjzrq": "",
                "cckrl": 0,
                "spfblzx": 0,
                "xgrq_dt": "2019-04-15 10:15:51",
                "cjrq_dt": "2019-03-29 14:15:33",
                "zpcd": 0,
                "sbbm": "31011900081326013004",
                "token": "",
                "xh": "",
                "ccrq": "",
                "zpkd": 0,
                "wrjlx": "",
                "bxqsrq": "",
                "sbzt": ""
            }, {
                "pp": "",
                "sccj": "",
                "dj": "",
                "zyrq": "2019-04-24 00:00:00",
                "qysj": "",
                "playUrl": "",
                "sbmc": "申能站无人机",
                "zcrq": "2019-04-24 00:00:00",
                "spfblhx": 0,
                "id": 380,
                "jikuid": 244,
                "bxjzrq": "",
                "cckrl": 0,
                "spfblzx": 0,
                "xgrq_dt": "2019-05-20 17:51:35",
                "cjrq_dt": "2019-03-29 16:17:30",
                "zpcd": 0,
                "sbbm": "31011900081326012004",
                "token": "",
                "xh": "",
                "ccrq": "",
                "zpkd": 0,
                "wrjlx": "two",
                "bxqsrq": "",
                "sbzt": ""
            }, {
                "pp": "星罗",
                "sccj": "大疆",
                "dj": "",
                "zyrq": "2019-05-21 13:22:22",
                "qysj": "",
                "playUrl": "http://rtmp-play.video.vldc.org.cn/citybrain/CH2.flv?auth_key=1553924751-e453d2120f814f5cb2a274465f99768a-0-f457de0e0ca8005156a4c1ca389a13ae&onlyvideo=true",
                "sbmc": "智选站无人机",
                "zcrq": "2019-05-21 13:22:22",
                "spfblhx": 1,
                "id": 381,
                "jikuid": 246,
                "bxjzrq": "",
                "cckrl": 512,
                "spfblzx": 1,
                "xgrq_dt": "2019-05-20 17:51:22",
                "cjrq_dt": "2019-05-13 14:32:38",
                "zpcd": 1,
                "sbbm": "20010000001680000003",
                "token": "",
                "xh": "",
                "ccrq": "",
                "zpkd": 1,
                "wrjlx": "one",
                "bxqsrq": "",
                "sbzt": ""
            }],
            "errCode": 0,
            "errMsg": "SUCCESS"
        },
        DronePosList: {
            "auth": {},
            "data": [{
                "creator": "",
                "wrj_id": 364,
                "lng": 121.89602,
                "create_time": "2019-02-16 15:35:00",
                "gps_count": "",
                "modify_time": "2019-03-28 18:17:40",
                "is_delete": "0",
                "remaining_time": "",
                "bat": 0,
                "v_speed": 0,
                "angle1": -125,
                "angle2": 65,
                "h_speed": 0,
                "lat": 30.90591,
                "height": 0,
                "status": "NaN"
            }, {
                "creator": "",
                "wrj_id": 365,
                "lng": "",
                "create_time": "2019-03-02 13:23:14",
                "gps_count": "",
                "modify_time": "2019-03-28 18:17:40",
                "is_delete": "0",
                "remaining_time": "",
                "bat": 98,
                "v_speed": 0,
                "angle1": 131,
                "angle2": 0,
                "h_speed": 0,
                "lat": "",
                "height": 0.1,
                "status": "NaN"
            }, {
                "creator": "",
                "wrj_id": 366,
                "lng": 121.9645,
                "create_time": "2019-03-05 09:48:18",
                "gps_count": "",
                "modify_time": "2019-03-28 18:17:40",
                "is_delete": "0",
                "remaining_time": "",
                "bat": "",
                "v_speed": "",
                "angle1": "",
                "angle2": "",
                "h_speed": "",
                "lat": 30.878193,
                "height": "",
                "status": "NaN"
            }, {
                "creator": "",
                "wrj_id": 377,
                "lng": 121.92371,
                "create_time": "2019-03-22 17:12:25",
                "gps_count": "",
                "modify_time": "2019-03-28 18:17:40",
                "is_delete": "0",
                "remaining_time": "",
                "bat": "",
                "v_speed": "",
                "angle1": "",
                "angle2": "",
                "h_speed": "",
                "lat": 30.910946,
                "height": "",
                "status": "NaN"
            }],
            "errCode": 0,
            "errMsg": "SUCCESS"
        },
        //公交线路数据
        BusLineData: [
            { id: "1", linename: "洋山专线", linecolor: "#00a600", status: 0, coordinate: "" },
            { id: "2", linename: "申港1路", linecolor: "#00a600", status: 0, coordinate: "" },
            { id: "3", linename: "申港3路", linecolor: "#00a600", status: 0, coordinate: "" },
            { id: "4", linename: "浦东33路", linecolor: "#00a600", status: 0, coordinate: "" },
            { id: "5", linename: "1009路", linecolor: "#00a600", status: 0, coordinate: "" },
            { id: "6", linename: "1043路", linecolor: "#00a600", status: 0, coordinate: "" },
            { id: "7", linename: "1096路", linecolor: "#00a600", status: 0, coordinate: "" },
            { id: "8", linename: "1077路", linecolor: "#00a600", status: 0, coordinate: "121.908578,30.924922|121.908186,30.924647|121.904476,30.927879|121.902643,30.926094|121.899539,30.922668|121.897207,30.919093|121.894517,30.913320|121.893223,30.907928|121.892868,30.903317|121.893529,30.899111|121.895155,30.893641|121.896758,30.890339|121.899547,30.893715|121.900025,30.890612|121.897468,30.889010|121.899748,30.885784|121.899464,30.884745" },
            { id: "9", linename: "1078路", linecolor: "#00a600", status: 0, coordinate: "" },
            { id: "10", linename: "浦东29路", linecolor: "#00a600", status: 0, coordinate: "" },
            { id: "11", linename: "临港4路", linecolor: "#00a600", status: 1, coordinate: "121.906298,30.926320|121.912144,30.921174|121.906905,30.916608|121.905773,30.915715|121.901635,30.919293|121.899947,30.918126|121.898671,30.916702|121.897364,30.916273|121.895932,30.916527|121.894019,30.912000|121.893214,30.908272|121.892906,30.906282|121.892941,30.903170|121.902446,30.903137|121.902460,30.896820|121.894205,30.896780|121.895139,30.893699|121.897640,30.888707|121.899838,30.885703|121.899464,30.884745" },
            { id: "12", linename: "1135路", linecolor: "#D8201E", status: 1, coordinate: "121.906240,30.926278|121.904490,30.927778|121.901363,30.924803|121.899249,30.922218|121.897034,30.918632|121.895902,30.916186|121.897370,30.916133|121.899488,30.917112|121.900755,30.918464|121.901718,30.919239|121.908373,30.913446|121.910894,30.911174|121.914227,30.909639|121.915657,30.911873|121.915725,30.912373|121.916726,30.913407|121.917527,30.912666|121.919150,30.914212|121.919767,30.914794|121.912813,30.920702|121.906298,30.926320" }
        ],
        //渣土车线路数据
        TruckLineData: [
            { id: "1", linename: "1135路", linecolor: "#D8201E", status: 1, coordinate: "121.920744,30.913749|121.919793,30.914583|121.917651,30.912545|121.915754,30.910143|121.915074,30.909186|121.914023,30.907003|121.913764,30.906481|121.910412,30.907493|121.902731,30.907600" }
        ],

        /*坐标用的是高德*/
        //人流预测 15分钟 stationtype  1: 地铁  2:公交 3：停车场
        //PeopleIn15Data: {
        //    "quotiety": 0.8,
        //    "totals": 4512,//5872
        //    "data": [
        //        { id: "1", pos: "121.90572,30.917018", values: 1423, adress: "杞青路银飞路", v3pos: "50,60,0", iconimg: "Texture/Common/15-01.png" },
        //        { id: "2", pos: "121.900098,30.913826", values: 1528, adress: "沪城环路银飞路", v3pos: "50,60,0", iconimg: "Texture/Common/15-02.png" },
        //        { id: "3", pos: "121.910061,30.913208", values: 1459, adress: "杞青路松萝路", v3pos: "20,60,0", iconimg: "Texture/Common/15-03.png" },
        //        { id: "4", pos: "121.903014,30.919055", values: 1462, adress: "沪城环路杞青路", v3pos: "50,60,0", iconimg: "Texture/Common/15-04.png" },
        //    ]
        //},
        PeopleIn15Data: {
            "quotiety": 0.8,
            "totals": 248,//295
            "data": [
                { id: "1", pos: "121.90572,30.917018", values: 87,percent:0.351,adress: "杞青路银飞路", v3pos: "50,60,0", iconimg: "Texture/Common/15-01.png" },
                { id: "2", pos: "121.900098,30.913826", values: 46,percent:0.185,adress: "沪城环路银飞路", v3pos: "50,60,0", iconimg: "Texture/Common/15-02.png" },
                { id: "3", pos: "121.910061,30.913208", values: 73,percent:0.294,adress: "杞青路松萝路", v3pos: "20,60,0", iconimg: "Texture/Common/15-03.png" },
                { id: "4", pos: "121.903014,30.919055", values: 89,percent:0.359,adress: "沪城环路杞青路", v3pos: "50,60,0", iconimg: "Texture/Common/15-04.png" },
            ]
        },

        //人流预测 30分钟   stationtype  1: 地铁  2:公交 3：停车场
        //PeopleIn30Data: {
        //    "quotiety": 0.8,
        //    "totals": 7869,//7946
        //    "data": [
        //        { id: "1", pos: "121.905117,30.915474", values: 798, adress: "海昌公园停车场", v3pos: "350, 300, 0", iconimg: "Texture/Common/30-01.png" },
        //        { id: "2", pos: "121.91864,30.908189", values: 921, adress: "雪绒花停车场", v3pos: "200, 280, 0", iconimg: "Texture/Common/30-02.png" },
        //        //{ id: "3", pos: "121.911484,30.923343",values: 897, adress: "临港大道停车场", v3pos: "200, 300, 0", iconimg: "Texture/Common/30-03.png" },
        //        { id: "4", pos: "121.902508,30.894638", values: 798, adress: "港城新天地停车场", v3pos: "250, 280, 0", iconimg: "Texture/Common/30-04.png" },
        //        { id: "5", pos: "121.910851,30.923519", values: 932, adress: "临港大道地铁站", v3pos: "300, 310, 0", iconimg: "Texture/Common/30-05.png" },
        //        { id: "6", pos: "121.929583,30.907245", values: 963, adress: "滴水湖地铁站", v3pos: "200, 300, 0", iconimg: "Texture/Common/30-06.png" },
        //        { id: "7", pos: "121.903542,30.882353", values: 855, adress: "上元路沪城环路", v3pos: "250, 250, 0", iconimg: "Texture/Common/30-07.png" },
        //        { id: "8", pos: "121.905417,30.894299", values: 893, adress: "方竹路茉莉路", v3pos: "350, 270, 0", iconimg: "Texture/Common/30-08.png" },
        //        { id: "9", pos: "121.917366,30.919245", values: 889, adress: "临港大道铃兰路", v3pos: "200, 300, 0", iconimg: "Texture/Common/30-09.png" }
        //    ]
        //},

        PeopleIn30Data: {
            "quotiety": 0.8,
            "totals": 1026,//1501
            "data": [
                { id: "1", pos: "121.905117,30.915474", values: 168,percent:0.164, adress: "海昌公园停车场", v3pos: "350, 300, 0", iconimg: "Texture/Common/30-01.png" },
                { id: "2", pos: "121.91864,30.908189", values: 150,percent:0.146, adress: "雪绒花停车场", v3pos: "200, 280, 0", iconimg: "Texture/Common/30-02.png" },
                //{ id: "3", pos: "121.911484,30.923343",values: 267,percent:0.260, adress: "临港大道停车场", v3pos: "200, 300, 0", iconimg: "Texture/Common/30-03.png" },
                { id: "4", pos: "121.902508,30.894638", values: 89,percent:0.087, adress: "港城新天地停车场", v3pos: "250, 280, 0", iconimg: "Texture/Common/30-04.png" },
                { id: "5", pos: "121.910851,30.923519", values: 254,percent:0.345, adress: "临港大道地铁站", v3pos: "300, 310, 0", iconimg: "Texture/Common/30-05.png" },
                { id: "6", pos: "121.929583,30.907245", values: 105,percent:0.102, adress: "滴水湖地铁站", v3pos: "200, 300, 0", iconimg: "Texture/Common/30-06.png" },
                { id: "7", pos: "121.903542,30.882353", values: 154,percent:0.150, adress: "上元路沪城环路", v3pos: "250, 250, 0", iconimg: "Texture/Common/30-07.png" },
                { id: "8", pos: "121.905417,30.894299", values: 122,percent:0.119, adress: "方竹路茉莉路", v3pos: "350, 270, 0", iconimg: "Texture/Common/30-08.png" },
                { id: "9", pos: "121.917366,30.919245", values: 92,percent:0.089, adress: "临港大道铃兰路", v3pos: "200, 300, 0", iconimg: "Texture/Common/30-09.png" }
            ]
        },

        //248,1026,
        //人流预测 60分钟   stationtype  1: 地铁  2:公交 3：停车场
        //PeopleIn60Data: {
        //    "quotiety": 0.8,
        //    "totals": 29869,//31611
        //    "data": [
        //       { id: "1", pos: "121.908289,30.925412", values: 6209, adress: "临港大道沪城环路", v3pos: "250, 250, 0", iconimg: "Texture/Common/60-01.png" },
        //       { id: "2", pos: "121.897359,30.89767", values: 6207, adress: "申港大道沪城环路", v3pos: "350, 250, 0", iconimg: "Texture/Common/60-02.png" },
        //       { id: "3", pos: "121.898081,30.89433", values: 6965, adress: "方竹路沪城环路", v3pos: "350, 250, 0", iconimg: "Texture/Common/60-03.png" },
        //       { id: "4", pos: "121.899694,30.889772", values: 5876, adress: "橄榄路沪城环路", v3pos: "400, 280, 0", iconimg: "Texture/Common/60-04.png" },
        //       { id: "5", pos: "121.882738,30.894371", values: 6354, adress: "方竹路塘下公路", v3pos: "400, 280, 0", iconimg: "Texture/Common/60-05.png" }
        //    ]
        //},
        PeopleIn60Data: {
            "quotiety": 0.8,
            "totals": 1232,//841
            "data": [
               { id: "1", pos: "121.908289,30.925412", values: 301, percent: 0.244, adress: "临港大道沪城环路", v3pos: "250, 250, 0", iconimg: "Texture/Common/60-01.png" },
               { id: "2", pos: "121.897359,30.89767", values: 269, percent: 0.218, adress: "申港大道沪城环路", v3pos: "350, 250, 0", iconimg: "Texture/Common/60-02.png" },
               { id: "3", pos: "121.898081,30.89433", values: 268, percent: 0.217, adress: "方竹路沪城环路", v3pos: "350, 250, 0", iconimg: "Texture/Common/60-03.png" },
               { id: "4", pos: "121.899694,30.889772", values: 298, percent: 0.242, adress: "橄榄路沪城环路", v3pos: "400, 280, 0", iconimg: "Texture/Common/60-04.png" },
               { id: "5", pos: "121.882738,30.894371", values: 306, percent: 0.248, adress: "方竹路塘下公路", v3pos: "400, 280, 0", iconimg: "Texture/Common/60-05.png" }
            ]
        },
 
        //人流预测 360分钟   stationtype  1: 地铁  2:公交 3：停车场
        //PeopleIn360Data: {
        //    "quotiety": 0.8,
        //    "totals": 34151,//35448
        //    "data": [
        //        { id: "1", pos: "121.908289,30.925412", values: 6847, adress: "临港大道沪城环路", v3pos: "250, 250, 0", iconimg: "Texture/Common/60-01.png" },
        //       { id: "2", pos: "121.897359,30.89767", values: 6987, adress: "申港大道沪城环路", v3pos: "350, 250, 0", iconimg: "Texture/Common/60-02.png" },
        //       { id: "3", pos: "121.898081,30.89433", values: 6543, adress: "方竹路沪城环路", v3pos: "350, 250, 0", iconimg: "Texture/Common/60-03.png" },
        //       { id: "4", pos: "121.899694,30.889772", values: 7428, adress: "橄榄路沪城环路", v3pos: "400, 280, 0", iconimg: "Texture/Common/60-04.png" },
        //       { id: "5", pos: "121.882738,30.894371", values: 7643, adress: "方竹路塘下公路", v3pos: "400, 280, 0", iconimg: "Texture/Common/60-05.png" }
        //    ]
        //},

        PeopleIn360Data: {
            "quotiety": 0.8,
            "totals": 2116,//2204
            "data": [
               { id: "1", pos: "121.908289,30.925412", values: 412, percent: 0.195, adress: "临港大道沪城环路", v3pos: "250, 250, 0", iconimg: "Texture/Common/60-01.png" },
               { id: "2", pos: "121.897359,30.89767", values: 448, percent: 0.212, adress: "申港大道沪城环路", v3pos: "350, 250, 0", iconimg: "Texture/Common/60-02.png" },
               { id: "3", pos: "121.898081,30.89433", values: 526, percent: 0.249, adress: "方竹路沪城环路", v3pos: "350, 250, 0", iconimg: "Texture/Common/60-03.png" },
               { id: "4", pos: "121.899694,30.889772", values: 416, percent: 0.197, adress: "橄榄路沪城环路", v3pos: "400, 280, 0", iconimg: "Texture/Common/60-04.png" },
               { id: "5", pos: "121.882738,30.894371", values: 502, percent: 0.237, adress: "方竹路塘下公路", v3pos: "400, 280, 0", iconimg: "Texture/Common/60-05.png" }
            ]
        },

        //人流预测 明日人流预测数   stationtype  1: 地铁  2:公交 3：停车场
        //PeopleIn1000Data: {
        //    "quotiety": 0.8,
        //    "totals": 46267,//47884
        //    "data": [
        //       { id: "1", pos: "121.908289,30.925412", values: 8627, adress: "临港大道沪城环路", v3pos: "250, 250, 0", iconimg: "Texture/Common/60-01.png" },
        //       { id: "2", pos: "121.897359,30.89767", values: 9750, adress: "申港大道沪城环路", v3pos: "350, 250, 0", iconimg: "Texture/Common/60-02.png" },
        //       { id: "3", pos: "121.898081,30.89433", values: 9954, adress: "方竹路沪城环路", v3pos: "350, 250, 0", iconimg: "Texture/Common/60-03.png" },
        //       { id: "4", pos: "121.899694,30.889772", values: 9769, adress: "橄榄路沪城环路", v3pos: "400, 280, 0", iconimg: "Texture/Common/60-04.png" },
        //       { id: "5", pos: "121.882738,30.894371", values: 9784, adress: "方竹路塘下公路", v3pos: "400, 280, 0", iconimg: "Texture/Common/60-05.png" }
        //    ]
        //},
        PeopleIn1000Data: {
            "quotiety": 0.8,
            "totals": 4502,//4632
            "data": [
               { id: "1", pos: "121.908289,30.925412", values: 823, percent: 0.183, adress: "临港大道沪城环路", v3pos: "250, 250, 0", iconimg: "Texture/Common/60-01.png" },
               { id: "2", pos: "121.897359,30.89767", values: 864, percent: 0.192, adress: "申港大道沪城环路", v3pos: "350, 250, 0", iconimg: "Texture/Common/60-02.png" },
               { id: "3", pos: "121.898081,30.89433", values: 1241, percent: 0.276, adress: "方竹路沪城环路", v3pos: "350, 250, 0", iconimg: "Texture/Common/60-03.png" },
               { id: "4", pos: "121.899694,30.889772", values: 841, percent: 0.187, adress: "橄榄路沪城环路", v3pos: "400, 280, 0", iconimg: "Texture/Common/60-04.png" },
               { id: "5", pos: "121.882738,30.894371", values: 863, percent: 0.191, adress: "方竹路塘下公路", v3pos: "400, 280, 0", iconimg: "Texture/Common/60-05.png" }
            ]
        },

        TourTotalsNo:{"estimateOuterParkPeopleNo":109,"currentPopulation":643,"currentCarNum":28,"estimate30mParkVehicleNo":28,"outerPeople":109},

        /***************************Echart数据*****************************/
        //游客分析（用户年龄分布）
        TouristAnalysisData: {
            "auth": {},
            "data":
                [
                    { "name": "20岁以下", "value": 50238 },
                    { "name": "20-29岁", "value": 281614 },
                    { "name": "30-39岁", "value": 454902 },
                    { "name": "40-49岁", "value": 335935 },
                    { "name": "50-60岁", "value": 195250 },
                    { "name": "60岁以上", "value": 53956 }
                ],
            "errCode": 0, "errMsg": "SUCCESS"
        },
        FutureVisitorTrafficData: {
            "auth": {},
            "data": [
                { "month": 2, "visnumber": 74122, "year": 2019 },
                { "month": 3, "visnumber": 1298733, "year": 2019 }
            ],
            "errCode": 0,
            "errMsg": "SUCCESS"
        },
    }
})





