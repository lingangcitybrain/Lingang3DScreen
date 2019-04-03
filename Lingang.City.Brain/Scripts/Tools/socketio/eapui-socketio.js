/**
 * sokcetio工具类
 * 此工具依赖于 /ui/plugins/socket/socket.io.js
 * 此客户端会有自动重连机制
 * @author zwl
 */
UI.socketio = new function(){
	
	var hasInitialized = false;
	
	var _self = this;
	
	var _socket = null;
	
	var settings = {
		serverIP:'127.0.0.1',
		port:8060,
		connect:function(){},
		disconnect:function(){},
		ping:function(){},
		pong:function(){},
		connect_error:function(){},
		error:function(){
			if(_socket){
				 _socket.disconnect();
			}
		}
	}
	/**
	 * socketio初始化
	 * options：{
	 * 	serverIP:sokcetio服务ip
		port:sokcetio服务端口
		connect: 连接后回调
		disconnect: 断开连接后回调
		ping: 连接时ping回调
		pong: 连接时pong回调
		connect_error: 连接错误时回调
		error: 错误时回调
	 * }
	 */
	this.init = function(options){
		settings = $.extend({}, settings, options);
		JL().info("[client-ui]初始化socket连接，服务端ip[" + settings.serverIP + "],端口[" + settings.port + "]");
		var socketUrl = '//' + settings.serverIP + ':' + settings.port;
		io = io || UI.io; //UI.io 在eapui-map初始化，避免地图与socket同时引入冲突问题
		_socket =  io(socketUrl, 
			{
				reconnectionAttempts : 10// number of reconnection attempts before giving up
		});
		_socket.on('connect', function() {
			JL().info("[client-ui] The client has connected to the server!, socket.id:" + _socket.id);
			settings.connect.call(_self);
		});
		_socket.on('disconnect', function() {
			JL().info("[client-ui] The client has disconnected!");
			settings.disconnect.call(_self);
		});
		_socket.on('ping', function() {
			JL().info("[client-ui] a ping packet is written out to the server!");
			settings.ping.call(_self);
		});
		_socket.on('pong', function() {
			JL().info("[client-ui] a pong is received from the server!");
			settings.pong.call(_self);
		});
		_socket.on('connect_error', function() {
			JL().info("[client-ui] a connection error!");
			settings.connect_error.call(_self);
		});
		_socket.on('error', function() {
		    JL().info("[client-ui] an error occurs!");
			settings.error.call(_self);
		});
	}
	
	/**
	 * 发送数据
	 * eventName：事件名称
	 * data ：发送的数据
	 */
	this.emit = function(eventName, data){
		JL().info("[client-ui]发送数据，事件["+ eventName +"];数据："+JSON.stringify(data));
		if(_socket){
			_socket.emit(eventName, data);	
		}else{
			JL().info("[client-ui]socketio未连接");
		}
	}
	
	/**
	 * 绑定指定事件
	 * eventName：事件名称
	 * callback：事件返回数据函数
	 */
	this.on = function(eventName, callback){
		JL().info("[client-ui]绑定["+ eventName +"]事件");
		if(_socket){
			_socket.on(eventName, function(data){
				if(callback){
					JL().info("socket id：" + _socket.id);
					callback.call(_self, data);
				}
			});
		}else{
			JL().info("[client-ui]socketio未连接");
		}
	}
}
