define(["config", "common", "util","s_layerMenuData", "s_LayerMenuAjax"], function (con, com,util, s_layerMenuData, s_LayerMenuAjax) {
    /**************************************右侧显示图层**************************************/
    return {
        EventData: new util.HashMap,
        //加载右侧DIV
        loadRithHtml: function () {
            var url = con.HtmlUrl + 'Society/Right_Container.html';
            require(['text!' + url], function (template) {
                $("#right_02").html(template);
                $("#right_02").show('drop', 1000);//左侧
                ;

                require("s_RightLayer").loadEventList();//加载事件列表
            })
    },
        //加载事件列表
        loadEventList: function (){
            $("#right_EventList").hide();
            var url = con.HtmlUrl + 'Society/R_EventList.html';
            require(['text!' + url], function (template) {
                $("#right_EventList").html(template);
                $("#right_EventList").slideDown("fast");
                //$("#right_EventList").stop().animate({ right: "0px" }, 300);

                require("s_RightLayer").generateEventList();
            })
        },
        //生成事件列表

        generateEventList: function (post_data) {
            require("s_LayerMenuAjax").getEventList(post_data, function (result) {
                var data = require("sl_Event").POIData;
                var html = '';
                var num = 0;
                for (var i = 0; i < data.length; i++) {
                    num++;
                    html +=
                       '<li class="sjxx-li" onclick="require(&apos;s_RightLayer&apos;).loadEventDetail(' + data[i].id + ')">' +
                        '<div class="sjxx-li-line1">' +
                            '<span class="sjxx-id counter">' + num + '</span>' +
                            '<span class="sjxx-event">' + data[i].eventName + '</span>' +
                            '<span class="fr sjxx-state">' + data[i].statusName + '</span>' +
                        '</div>' +
                        '<div class="sjxx-address">' + data[i].address +
                            '<span class="fr sjxx-time">' + con.getNowFormatDate(data[i].createTime) + '<span>' + data[i].dealPerson + '</span></span>' +
                        '</div>' +
                    '</li>';
                    require("s_RightLayer").EventData.put(data[i].id, data[i]);
                }
                $("#ul_eventlist").html(html);
            });
        },

        loadEventDetail: function (id)
        {
            //显示左侧社区页面
            $("#society_twocolright").hide()
            $("#society_twocolright").show('drop', 1000);
            //var data = this.EventData.get(id);


            //图层选中事件
            $("#full_container #bottom_menu ul li").removeClass("active");
            $("#full_container #bottom_menu ul li").eq(6).addClass("active");

            //加载事件POI和事件详情
            require("sl_Event").loadEvent();
            setTimeout(function () {
                require("sl_Event").loadEventDetial(id)
            }, 1500);         
        },
        loadEventPOI: function (nodename) {

        }
    }
});