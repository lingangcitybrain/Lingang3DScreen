define(["config", "common", 's_Main', 't_Main', 'b_Main','g_Main'], function (con, com, s_Main, t_Main, b_Main,g_Main) {
    return {
        init: function () {
            require("mevent").MouseLButtonClick();        
        },
        //鼠标单击响应
        MouseLButtonClick: function () {
            map.attachMouseEvent('OnLButtonDown', "MouseLButtonClick", function (option) {
                if (option.GroundCoord != null) {
                    var node = option.NearestNode;
                    if (node != null) {
                        var nodename = node != null ? node.getName() : '';
                        var areaname = node != null ? node.getArea().getName() : '';

                        
                        if (nodename.indexOf("POISociety") > -1) {   //社会综治POI
                            require("s_Home").PoiEvent(nodename);
                            //s_Main.PoiEvent(nodename);
                        }
                        else if(nodename.indexOf("POITour") > -1) {   //大客流POI
                            require("t_Home").PoiEvent(nodename);
                        } else if (nodename.indexOf("POIIndustryG") > -1) {   //产业园区
                        //注释飞行动作，单独去poi时间里面飞行
                            //Q3D.globalCamera().flyToAxisView(node, 200, 1, function () {
                            require("g_Home").PoiEvent(nodename);//g_Main.PoiEvent(nodename);
                            //})
                        }else if(nodename.indexOf("UmmannedCarPOI")>-1){//无人车POI
                            require("g_Home").showUnmannedCarTrajectors(nodename);
                        }
                    }
                }
            });
        },

        
    }
})