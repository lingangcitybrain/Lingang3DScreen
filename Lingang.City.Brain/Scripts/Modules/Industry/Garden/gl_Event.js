define(["config", "common", "gl_GardenBuildingAjax", "nicescroll", "pagination", "util"], function (con, com, gl_GardenBuildingAjax, nicescroll, pagination, util) {
    /****************************事件图层****************************/
    return {
        EventData: new util.HashMap,
        //事件图层
        loadEvent: function () {
            require("reset").ClearDivHtmlOnCenter();
            com.LayerFlyto(23)
            //this.loadEvnetList(0);

        },
        Revert: function () {

        },
        //加载事件列表
        loadEvnetList: function (pageindex) {
            //var items_per_page = 15;                            //每页显示的条数
            //var edge_entries = 2;                               //后面显示的页码数
            //var display_entries = 3;
            //gl_GardenBuildingAjax.getParkEvent(function (data) {
            //    var html = '';
            //    var maxLength = pageindex * items_per_page + items_per_page;
            //    var minLength = pageindex * items_per_page;
            //    //var cnt_processed = 0, cnt_Untreated = 0,cnt_inprocess=0;
            //    if (data.length > 0) {
            //        for (var i = minLength; i < data.length; i++) {
            //            if (maxLength < i + 1) {
            //                break;
            //            } else {   //前面显示的页码数  
            //                require("gl_Event").EventData.put(data[i].eventid, data[i])
            //                html += '<li class="cy-ly-rr1-li active" style="cursor:pointer;" onclick="require(\'g_Home\').PoiEvent(\'POIIndustryGEvent_' + data[i].eventid + '\')">' +
            //                            '<div class="cy-ly-rr1-lidiv clearfix active">' +
            //                                '<span class="cy-ly-rr1-num">' + (i + 1) + '</span>' +
            //                                '<span class="cy-ly-rr1-name">' + data[i].eventname + '</span>' +
            //                                //'<span class="cy-ly-rr1-date">' + myTime(data[i].eventTime) + '</span>' +
            //                                //'<span class="cy-ly-rr1-date">' + data[i].eventTime + '</span>' +
            //                            '</div>' +
            //                            '<div class="cy-ly-rr1-state">' + data[i].status + '</div>' +
            //                            '<span class="cy-ly-rr1-date">' + data[i].timestamp + '</span>' +
            //                        '</li>';
            //            }
            //        }
            //        $("#ul-parkingEnvent").html(html);
            //        $('.scrolldiv').perfectScrollbar({ cursorwidth: 10, cursorcolor: "rgba(0, 126, 179, .6)", });
            //        //加载分页控件内容 
            //        if (pageindex == 0) {
            //            var optInit = com.GetOptionsFrom(require("gl_Event").loadEvnetList, items_per_page, items_per_page, display_entries, edge_entries);     // Create pagination element with options from form
            //            $("#pagination-parkingEnvent").pagination(data.length, optInit);
            //        }

            //    }

            //})
        },
        showEventDetail: function (nodename) {
            //加载页面内容
            var url = con.HtmlUrl + 'Industry/Garden/Center_EventDetail.html';
            require(['text!' + url], function (template) {
                $("#center_02").html(template);
                $("#center_02").show('slide', { direction: 'left' }, 500);
                var eventID = nodename.split("_")[1];
                var data = require("gl_Event").EventData.get(eventID);
                if (data) {
                    var html = "";
                    //var carNumber = '无';
                    //if (data.cardNo != null)
                    //    carNumber = data.cardNo;
                    html += '<div class=\"box-top\">' +
                            '    事件-' + data.eventid +
                            '    <button type=\"button\" class=\"box-close\"  onclick=\"require(\'g_Home\').closeEventDetail()\"></button>' +
                            '</div>' +
                            '<div class=\"boxcont\">' +
                           // '<div class=\"box-leftpic\" style = \"text-align:center\"><img src=\"' + data.snapshoturiwithrect + '\"></div>' +
                            '<dic class=\"box-rightinfo\">' +
                            '    <ul>' +
                            '    <li><span>事件时间：</span><em>' + data.timestamp + '</em></li>' +
                            '    <li><span>事件描述：</span><em>' + data.eventname + '</em></li>' +
                            //'   <li><span>车牌号：</span><em>' + carNumber + '</em></li>' +
                            '   <li><span>事件状态：</span><em>' + data.status + '</em></li>' +
                            '    </ul>' +
                            //'    <button type=\"button\" class=\"btn\">事件处置</button>' +
                            '</dic>' +
                            '</div>';
                    $("#ul_eventdetail").empty();
                    $("#ul_eventdetail").html(html);
                }



                $("#ul_eventdetail").hide()
                $("#ul_eventdetail").show('drop', 1000);


                //  节点信息窗跟随测试
                //var areaName = con.AreaName;
                //var nodeName = "POITour" + require("tl_Event").LayerType.Name + "_" + data.id;//POIIOT_01
                //var nodePath = areaName + '/' + nodeName;

                //if (require("tl_Event").nodeFollowingPath != null) {
                //    map.disableNodeFollowing(require("tl_Event").nodeFollowingPath, true);
                //}

                //require("tl_Event").nodeFollowingPath = nodePath;
                //map.enableNodeFollowing(nodePath, function (node, v2i) {
                //    if (node.getFullName() == nodePath) {
                //        document.getElementById("ul_eventdetail").style.left = v2i.x + "px";
                //        document.getElementById("ul_eventdetail").style.top = v2i.y + "px";
                //    }
                //});
            })
        },
        closeEventDetail: function () {
            $("#center_02").html("");
            //var areaName = con.AreaName;
            //if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
            //    var layername = this.LastPOI_Clk.split('_')[0].replace("POITour", "");
            //    var level = require("tl_Event").LayerType.Level;
            //    var icon = require("tl_Event").LayerType.UnChooseIcon;
            //    var lastNode = map.getSceneNode(areaName, this.LastPOI_Clk);
            //    if (lastNode) {
            //        lastNode.asPOI().setIcon(icon);
            //        //lastNode.setVisible(0);
            //    }
            //}
        },
    }
})

function myTime(date) {
    var arr = date.split("T");
    var d = arr[0];
    var darr = d.split('-');

    var t = arr[1];
    var tarr = t.split('.000');
    var marr = tarr[0].split(':');

    var dd = parseInt(darr[0]) + "/" + parseInt(darr[1]) + "/" + parseInt(darr[2]) + " " + addZero(parseInt(marr[0])) + ":" + addZero(parseInt(marr[1])) + ":" + addZero(parseInt(marr[2]));
    return dd;
}

// 数字补0操作
function addZero(num) {
    return num < 10 ? '0' + num : num;
}
