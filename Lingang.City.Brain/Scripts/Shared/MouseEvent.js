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
                            s_Main.PoiEvent(nodename);
                        }
                        else if(nodename.indexOf("POITour") > -1) {   //大客流POI
                            t_Main.PoiEvent(nodename);
                        } else if (nodename.indexOf("POIIndustryG") > -1) {   //产业园区
                            Q3D.globalCamera().flyToAxisView(node, 200, 1, function () {
                                 g_Main.PoiEvent(nodename);
                            })
                        }
                    }
                }
            });
        },

        
    }
})