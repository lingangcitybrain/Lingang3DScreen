define(["config", "common", "gl_GardenBuildingAjax", "nicescroll", "pagination"], function (con, com, gl_GardenBuildingAjax, nicescroll, pagination) {
    /****************************事件图层****************************/
    return {
        //事件图层
        loadEvent:function()
        {
            com.LayerFlyto(23)
        
        },
        Revert: function () {
            
        },
        //加载事件列表
        loadEvnetList: function (pageindex) {
            var items_per_page = 15;                            //每页显示的条数
            var edge_entries = 2;                               //后面显示的页码数
            var display_entries = 3;
            gl_GardenBuildingAjax.getParkEvent(function (data) {
                var html = '';
                var maxLength = pageindex * items_per_page + items_per_page;
                var minLength = pageindex * items_per_page;
                //var cnt_processed = 0, cnt_Untreated = 0,cnt_inprocess=0;
                if (data.length > 0) {
                    for (var i = minLength; i < data.length; i++) {
                        if (maxLength < i + 1) {
                            break;
                        } else {                          //前面显示的页码数  
                           
                            html += '<li class="cy-ly-rr1-li active">'+
                    '<div class="cy-ly-rr1-lidiv clearfix active">'+
                        '<span class="cy-ly-rr1-num">'+(i+1)+'</span>'+
                        '<span class="cy-ly-rr1-name">' + data[i].eventname + '</span>' +
                        //'<span class="cy-ly-rr1-date">' + myTime(data[i].eventTime) + '</span>' +
                        //'<span class="cy-ly-rr1-date">' + data[i].eventTime + '</span>' +
                    '</div>' +
                    '<div class="cy-ly-rr1-state">' + data[i].status + '</div>' +
                    '<span class="cy-ly-rr1-date">' + data[i].timestamp + '</span>' +
                '</li>';
                        }
                    }
                    $("#ul-parkingEnvent").html(html);
                    $('.scrolldiv').perfectScrollbar({ cursorwidth: 10, cursorcolor: "rgba(0, 126, 179, .6)", });
                    //加载分页控件内容 
                    if (pageindex == 0) {
                        var optInit = com.GetOptionsFrom(require("gl_Event").loadEvnetList, items_per_page, items_per_page, display_entries, edge_entries);     // Create pagination element with options from form
                        $("#pagination-parkingEnvent").pagination(data.length, optInit);
                    }

                }
                
            })
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
