/**
 * socketio处理工具类
 * */

var windowCallFunMap = {};
var onlineIp = null;
var onlinePort = null;
//$(function () {
//	//socketInit();
//	// onlineCountInit();//获取在线用户数量
//});

function socketInit() {
	// var baseConf = UI.control.getDataById("baseConf");
	// console.log("baseConf");
	// console.log(baseConf);
	// onlineIp = baseConf.ONLINE_SERVER_IP;
	// onlinePort = baseConf.ONLINE_SERVER_PORT;
	// if(baseConf && baseConf.SOCKETIO_SERVERIP && baseConf.SOCKETIO_SERVERIP !=""){
	// console.log("连接socketio服务端IP["+ baseConf.SOCKETIO_SERVERIP +"]端口["+baseConf.SOCKETIO_PORT +"]");
	var settings = {
		serverIP: '10.188.83.20' || baseConf.SOCKETIO_SERVERIP,
		port: '8060' || baseConf.SOCKETIO_PORT,
		connect: function () {
			//initSubscribe(); //index.js实时告警方法
		}
	}
	UI.socketio.init(settings);
	// }
};

//获取在线用户数量
function onlineCountInit() {
	var userInfo = UI.control.getUserInfo();
	var url = '//' + onlineIp + ':' + onlinePort + '?userCode=' + userInfo.code;
	var socket = io.connect(url);

	socket.on('connect', function () {
		//发送心跳
		//socket.emit("HEARTBEAT_EVENT", JSON.stringify({userCode:userInfo.code}));
		$(".online-count").removeClass("hide");
	});

	socket.on('HEARTBEAT_EVENT', function (data) {
		console.log("====================HEARTBEAT_EVENT===========================");
		console.log(data);
		if ($(".online-num").length > 0) {
			$(".online-num").text("在线数: " + data.ONLINE_NUM);
		}
	});
}

function initSubscribe() {
	// var userInfo = UI.control.getUserInfo();

	// console.log(userInfo);
	var data = {
		type: "subscribe", //订阅类型：subscribe
		operate: "reset", //操作：reset、add、del
		source: "PC", //数据来源：PC,C#客户端等
		data: {
			// userCode: userInfo.code,
			deviceList: []
		}
	};
	//发送gps订阅消息
	UI.socketio.emit("GPS_EVENT", JSON.stringify(data));

	//订阅gps数据
	UI.socketio.on("GPS_EVENT", function (data) {
		//		console.log("处理服务端返回的gps数据");
		//		console.log(data);

		//		if(data.gpsId == undefined) {
		data = eval("(" + data + ")");
		//		} else {
		//			data = data;
		//		}

		if (typeof $("#controlMainContent")[0].contentWindow.updateGPSMsg == 'function') {
			$("#controlMainContent")[0].contentWindow.updateGPSMsg(data);
		}
	});

	//发送告警订阅消息	//实时告警权限
	//	if(menu["EFACE_realTimeAlarmPc"]) {
	UI.socketio.emit("ALARM_EVENT", JSON.stringify(data));

	UI.socketio.on("ALARM_EVENT", function (data) {
		console.log("处理服务端返回的告警数据");
		data = eval("(" + data + ")");
		console.log(data);
		if ($('#controlMainContent')[0] && $('#controlMainContent')[0].contentWindow.initSubscribeInfo && typeof $('#controlMainContent')[0].contentWindow.initSubscribeInfo == 'function') {
			$('#controlMainContent')[0].contentWindow.initSubscribeInfo(data);
		}

		var windowObject = window.frames["controlMainContent"].window.frames["ARmainContentFrame"];
		// 社区管控告警信息
		if (windowObject && typeof windowObject.initAlarmSubscribeInfo == 'function') {
			windowObject.initAlarmSubscribeInfo(data);
		}
		var realFaceContent = $(window.frames["realAlarm"]).find("iframe")[0];
		if (realFaceContent && realFaceContent.contentWindow.initSubscribeInfo && typeof realFaceContent.contentWindow.initSubscribeInfo == 'function') {
			realFaceContent.contentWindow.initSubscribeInfo(data);
		}

	});
	//	}


	UI.socketio.on("chatevent", function (data) {
		//		console.log("处理服务端返回的数据采集数据");
		data = eval("(" + data + ")");
		//		console.log(data);
		var DEVICE_ID = data.DEVICE_ID;
		if (windowCallFunMap[DEVICE_ID] && typeof windowCallFunMap[DEVICE_ID] == "function") {
			windowCallFunMap[DEVICE_ID].call(this, data);
		}
	});


	//发送飞识告警订阅消息
	UI.socketio.emit("FEISHI_ALARM_EVENT", JSON.stringify(data));

	//接收飞识告警订阅消息
	UI.socketio.on("FEISHI_ALARM_EVENT", function (data) {
		console.log("处理服务端返回飞识的告警数据");
		data = eval("(" + data + ")");
		console.log(data);
		if (window.frames["controlMainContent"].window.frames["ARmainContentFrame"] && typeof window.frames["controlMainContent"].window.frames["ARmainContentFrame"].feishiAlarmSubscribeInfo == 'function') {
			window.frames["controlMainContent"].window.frames["ARmainContentFrame"].feishiAlarmSubscribeInfo(data);
		}
		if (typeof $('#controlMainContent')[0].contentWindow.initSubscribeInfo == 'function') {
			$('#controlMainContent')[0].contentWindow.initFsSubscribeInfo(data);
		}
	});
}

function datacollectSubscribe(DEVICE_ID, callback) {
	console.log("向socketio服务端订阅数据采集[" + DEVICE_ID + "]");
	windowCallFunMap[DEVICE_ID] = callback;

	// var userInfo = UI.control.getUserInfo();
	var data = {
		type: "subscribe", //订阅类型：subscribe
		operate: "add", //操作：reset、add、del
		source: "PC", //数据来源：PC,C#客户端等
		data: {
			// userCode: userInfo.code,
			deviceList: [DEVICE_ID]
		}
	};
	//发送告警订阅消息
	UI.socketio.emit("DATACOLLECT_EVENT", JSON.stringify(data));
}

function datacollectCancelSubscribe(DEVICE_ID) {
	console.log("向socketio服务端取消订阅数据采集[" + DEVICE_ID + "]");

	delete windowCallFunMap[DEVICE_ID];

	// var userInfo = UI.control.getUserInfo();
	var data = {
		type: "subscribe", //订阅类型：subscribe
		operate: "del", //操作：reset、add、del
		source: "PC", //数据来源：PC,C#客户端等
		data: {
			// userCode: userInfo.code,
			deviceList: [DEVICE_ID]
		}
	};
	//发送告警订阅消息
	UI.socketio.emit("DATACOLLECT_EVENT", JSON.stringify(data));
}
//社区管控多设备人脸抓拍和车辆抓拍
function captureCollectSubscribe(DEVICE_ID, callback) {
	console.log("向socketio服务端订阅数据采集[" + DEVICE_ID.join(",") + "]");
	for (var i = 0; i < DEVICE_ID.length; i++) {
		windowCallFunMap[DEVICE_ID[i]] = callback
	}

	// var userInfo = UI.control.getUserInfo();
	var data = {
		type: "subscribe", //订阅类型：subscribe
		operate: "add", //操作：reset、add、del
		source: "PC", //数据来源：PC,C#客户端等
		data: {
			// userCode: userInfo.code,
			deviceList: DEVICE_ID
		}
	};
	//发送告警订阅消息
	//UI.socketio.emit("DATACOLLECT_EVENT", JSON.stringify(data));
    UI.socketio.emit("FACE_CAPTURE", JSON.stringify(data));

    UI.socketio.on("FACE_CAPTURE", function (data) {
        console.log("处理服务端返回的gps数据");
        console.log(data);

        //		if(data.gpsId == undefined) {
        data = eval("(" + data + ")");
        //		} else {
        //			data = data;
        //		}

    });

}

function captureCollectCancelSubscribe(DEVICE_ID) {
	console.log("向socketio服务端取消订阅数据采集[" + DEVICE_ID.join(",") + "]");
	for (var i = 0; i < DEVICE_ID.length; i++) {
		delete windowCallFunMap[DEVICE_ID[i]]
	}
	// var userInfo = UI.control.getUserInfo();
	var data = {
		type: "subscribe", //订阅类型：subscribe
		operate: "del", //操作：reset、add、del
		source: "PC", //数据来源：PC,C#客户端等
		data: {
			// userCode: userInfo.code,
			deviceList: DEVICE_ID
		}
	};
	//发送告警订阅消息
	UI.socketio.emit("FACE_CAPTURE", JSON.stringify(data));
}