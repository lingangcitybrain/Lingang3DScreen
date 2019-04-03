/**
 * ui插件和框架
 * @author zhc 
 */

var UI = {};
//引入基本样式和弹出框样式
/*document.write('<link href="/ui/plugins/eapui/css/eapui.css" rel="stylesheet" type="text/css" />');
document.write('<script src="/ui/plugins/eapui/keepalive.js" type="text/javascript"></script>');
document.write('<script src="/ui/plugins/eapui/fdfs.js" type="text/javascript"></script>');
//导入基础js
document.write('<script src="/ui/plugins/eapui/frame/json2.js" type="text/javascript"></script>');
document.write('<script src="/ui/plugins/eapui/frame/tmpl.js" type="text/javascript"></script>');
document.write('<script src="/ui/plugins/eapui/frame/dateformat.js" type="text/javascript"></script>');
document.write('<script src="/ui/plugins/util/placeholder.js" type="text/javascript"></script>');
document.write('<script src="/ui/plugins/eapui/util/jquery.md5.js" type="text/javascript"></script>');


//导入插件
var UI_PLUGINS = ["eapui-base", "eapui-slider", "eapui-autocomplete", "eapui-dialog", "eapui-dropdown", 
                  "eapui-filtertag", "eapui-notify", "eapui-popupdialog", "eapui-switch", "eapui-rating",
                  "eapui-dropdownSelect","eapui-dropDownIconText"];

for(var i = 0; i < UI_PLUGINS.length; i++){
	document.write('<script src="/ui/plugins/eapui/plugins/'+UI_PLUGINS[i]+'.js" type="text/javascript"></script>');
}

//导入基本的UI框架
document.write('<script src="/ui/plugins/eapui/main/eapui-util.js" type="text/javascript"></script>');
document.write('<script src="/ui/plugins/eapui/main/eapui-control.js" type="text/javascript"></script>');
document.write('<script src="/ui/plugins/eapui/main/eapui-frame.js" type="text/javascript"></script>');

document.write('<script src="/ui/plugins/flexpush/swfobject.js" type="text/javascript"></script>');
document.write('<script src="/ui/plugins/flexpush/jquery.pushlet.js" type="text/javascript"></script>');
document.write('<script src="/ui/plugins/eapui/main/eapui-pushlet.js" type="text/javascript"></script>');

//导入组件
var UI_COMPONENTS = ["eapui-event", "eapui-compbase", "eapui-databind", "eapui-formbind", "eapui-submit", "eapui-listview",
                     "eapui-treeview", "eapui-scrollview", "eapui-dictview", "eapui-dropdowntree", "eapui-router", "eapui-stateMachine","eapui-tags"];

for(var i = 0; i < UI_COMPONENTS.length; i++){
	document.write('<script src="/ui/plugins/eapui/component/'+UI_COMPONENTS[i]+'.js" type="text/javascript"></script>');
}

//前端开发组件加载
//document.write('<script src="/ui/plugins/jquery-ui/jquery.i18n.properties-min.js" type="text/javascript"></script>');
//document.write('<script src="/ui/plugins/eapui/mock-properties.js" type="text/javascript"></script>');

//前端mock组件扩展
if(typeof Mock == "object"){
	document.write('<script src="/ui/plugins/eapui/mock-extend.js" type="text/javascript"></script>');
}

//ie8兼容响应式布局
if(navigator.userAgent.indexOf("MSIE 8.0")>0){
	document.write('<script src="/ui/plugins/util/respond.src.js" type="text/javascript"></script>');
}

*/
//避免IE非debug模式下使用console对象报错
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];        
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
