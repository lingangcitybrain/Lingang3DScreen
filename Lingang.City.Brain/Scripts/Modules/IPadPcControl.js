define(["config", "common", "dataCache", "controlData","t_Home"], function (con, com, dataCache, controlData,t_Home) {
    return {
        ///////////////////////////////////////////////////地图控制//////////////////////////////////////////////////////////////////
        //地图控制
        mapControl: function (str)
        {
            var res     = { " code ": "", " message ": "","xyz":"","angle":""}
            var result  = 1;
            var message = "";
            var re_xyz   = "";
            var re_angle = "";

            try
            {
                var json = $.parseJSON(str);
                var xyz = json.xyz
                var angle = json.angle

                //视口切换
                if (xyz != null && angle != null && xyz != "0.00000000000000,0.00000000000000,0.00000000000000") {
                    Q3D.globalCamera().flyTo((xyz).toString().toVector3d(), (angle).toVector3(), 0.1, null);
                }

                 result = 1;
                 message = "操作成功";
            }catch(e)
            {
                result = 0;
                message = "操作失败";            
            }

            var pos  = this.getCameraPos();
            re_xyz   = pos.split(",")[0];
            re_angle = pos.split(",")[1];

            res = { "code ": result, " message ": message, "xyz": re_xyz, "angle": re_angle }
            return res            
        },

        ///////////////////////////////////////////////////菜单控制//////////////////////////////////////////////////////////////////
        //菜单控制    menu 社区综治：1；大客流：2；产业园区：3；园区产业：4；日景：11；夜景：12；还原：100；alert窗口关闭：101；102:确认框;105:收放大数字
        menuControl: function (str) {
            var res = { " code ": "", " message ": "", "xyz": "", "angle": "" }
            var result = 1;
            var message = "";
            var re_xyz = "";
            var re_angle = "";

            try {
                var json = $.parseJSON(str);
                var xyz = json.xyz
                var angle = json.angle
                var menu = json.menu

                switch (menu) {   //数字星空,产业推演都隐藏了，故索引缩进
                    case "0"://数字星空
                        break;
                    case "1"://社区综治
                        //require('mainMenu').mainMenuSelect(1);
                        require('mainMenu').mainMenuSelect(0);
                        break;
                    case "2"://大客流
                        //require('mainMenu').mainMenuSelect(2);
                        require('mainMenu').mainMenuSelect(1);
                        break;
                    case "3"://园区产业
                        //require('mainMenu').mainMenuSelect(3);
                        require('mainMenu').mainMenuSelect(2);
                        break;
                    case "4"://产业推演
                        require('mainMenu').mainMenuSelect(4);
                        break;
                    case "11"://实景
                        require('mainMenu').dayNightMenuSelect(0);
                        break;
                    case "12"://夜景
                        require('mainMenu').dayNightMenuSelect(1);
                        break;
                    case "100"://还原
                        require("reset").Revert();
                        break;
                    case "101"://关闭alert窗口
                        $('.vex-dialog-button-primary').click();
                        break;
                    //case "102":
                    //    vex.dialog.confirm({
                    //        message: '是否关闭系统！',
                    //        callback: function (value) {
                    //            if (value) {
                    //                window.open('', '_self', ''); window.close();
                    //            }
                    //            else {
                    //                return null;
                    //            }
                    //        },
                    //        className: 'vex-theme-default'
                    //    });
                    //    break;
                    //case "103"://关闭系统
                    //    //window.open('', '_self', ''); window.close();
                    //    $(".vex-dialog-button-primary").click();
                    //    break;
                    //case "104":  //关闭确认框
                    //   // window.open('', '_self', ''); window.close();
                    //    $(".vex-dialog-button-secondary").click();
                    //    break;
                    //case "105":  //收缩大数字

                    //    $(".statistic-slidebtn").css({ transform: 'rotate(0)' }).siblings(".statistic-slidediv").slideUp();
                    //    //$(".statistic-slidebtn").css({ transform: 'rotate(180deg)' }).siblings(".statistic-slidediv").slideDown();
                    //    break;
                    default:
                }

                //视口切换
                if (xyz != null && angle != null && xyz != "0.00000000000000,0.00000000000000,0.00000000000000") {
                    Q3D.globalCamera().flyTo((xyz).toString().toVector3d(), (angle).toVector3(), 0.1, null);
                }

                result = 1;
                message = "操作成功";

            } catch (e) {
                result = 0;
                message = "操作失败";

            }

            var pos = this.getCameraPos();
            re_xyz = pos.split(",")[0];
            re_angle = pos.split(",")[1];

            res = { "code ": result, " message ": message, "xyz": re_xyz, "angle": re_angle }
            return res
        },

        /////////////////////////////////////////////////////////图层控制////////////////////////////////////////////////////////////
        //图层控制
        layerControl: function (str) {
            var json = $.parseJSON(str);
            var xyz = json.xyz
            var angle = json.angle
            var menu = json.menu
            var layer = json.layer

            var layerValue = $.grep(controlData.layerControlData, function (n, i) {
                if (n.menu == menu && n.layer == layer) {
                    eval(n.func);
                    return n;
                }
            });

            //视口切换
            if (xyz != null && angle != null && xyz != "0.00000000000000,0.00000000000000,0.00000000000000") {
                Q3D.globalCamera().flyTo((xyz).toString().toVector3d(), (angle).toVector3(), 0.1, null);
            }

        },

        /////////////////////////////////////////////////////////图表控制////////////////////////////////////////////////////////////
        //图表控制
        echartControl: function (str) {
            var json = $.parseJSON(str);
            var menu = json.menu
            var seat = json.seat
            var command = json.command
            if (menu == 1) {
                if (command == "open") {
                    require("s_Home").loadBigChart(seat)
                }
                else {
                    require('s_Home').closeBigChart()
                }
            }
            if (menu == 2) {
                if (command == "open") {
                    require("t_Home").loadBigChart(seat)
                }
                else {
                    require('t_Home').closeBigChart()
                }
            }
            else if (menu == 3) {
                if (command == "open") {
                    require("e_Home").loadBigChart(seat)
                }
                else {
                    require('e_Home').closeBigChart()
                }
            }
            else if (menu == 31) { //园区
                if (command == "open") {
                    require("g_Home").loadBigChart(seat)
                }
                else {
                    require('g_Home').closeBigChart()
                }
            }
            else if (menu == 32) { //楼宇
                if (command == "open") {
                    require("b_Home").loadBigChart(seat)
                }
                else {
                    require('b_Home').closeBigChart()
                }
            }
        },

        //////////////////////////////////////////////POI定位控制//////////////////////////////////////////////////////////
        //POI定位控制
        poiControl: function (str)
        {
            var res = { " code ": "", " message ": "", "xyz": "", "angle": "" }
            var result = 1;
            var message = "";
            var re_xyz = "";
            var re_angle = "";

            //console.log(str)

            try {
                var json = $.parseJSON(str);
                var xyz = json.xyz
                var angle = json.angle
                var menu = json.menu
                var layer = json.layer
                var id = json.id

                var layerValue = $.grep(controlData.poiControlData, function (n, i) {
                    if (n.menu == menu) {  //&& n.layer == layer
                    var funcStr = n.func.replace('*',id);
                    eval(funcStr);
                    return n;
                }
            });

                //视口切换
                if (xyz != null && angle != null && xyz != "0.00000000000000,0.00000000000000,0.00000000000000") {
                    Q3D.globalCamera().flyTo((xyz).toString().toVector3d(), (angle).toVector3(), 0.1, null);
                }

                result = 1;
                message = "操作成功";

            } catch (e) {
                result = 0;
                message = "操作失败";
            }

            res = { "code ": result, " message ": message }
            return res
        },
        //城区综治POI
        //poiSocietyControl: function (id) {

        //},
        //产业POI
        poiIndustryControl: function (id) {
            if (id.indexOf("UmmannedCarPOI") > -1) { //无人车POI
                require("gl_UnmannedCar").showUnmannedCarTrajectors(id);
            } else if (id.indexOf("parkinglotPOI") > -1) {
                require("gl_Stop").showParkingLotDetail(id);
            }
            else {
                require("g_Main").PoiEvent(id);
            }
            
        },
        
        //////////////////////////////////////////////////POI信息窗口控制//////////////////////////////////////////////////////
        //POI信息窗口控制
        poiInfoControl: function (str) {
            var res = { " code ": "", " message ": "" }
            var result = 1;
            var message = "";
            try {
                var json = $.parseJSON(str);
                var xyz = json.xyz
                var angle = json.angle
                var menu = json.menu
                var layer = json.layer
                var id = json.id
                var command = json.command

                var layerValue = $.grep(controlData.poiWinControlData, function (n, i) {
                    if (n.command == command && id.indexOf(n.POISTR)>-1&&n.layer==layer&&n.menu==menu) {//ss
                        eval(n.func);
                        return n;
                    }
            });

               
                result = 1;
                message = "操作成功";

            } catch (e) {
                result = 0;
                message = "操作失败";
            }

            var pos = this.getCameraPos();
            re_xyz = pos.split(",")[0];
            re_angle = pos.split(",")[1];

            res = { "code ": result, " message ": message, "xyz": re_xyz, "angle": re_angle }
            return res
        },

        UIButtonControl: function (str) {
            var res = { " code ": "", " message ": "" }
            var result = 1;
            var message = "";
            try {
                var json = $.parseJSON(str);
                var xyz = json.xyz
                var angle = json.angle
                var menu = json.menu
                var layer = json.layer
                var id = json.id
                var type = json.type

                var layerValue = $.grep(controlData.UIButtonControlData, function (n, i) {
                    if (n.type == type && n.layer == layer && n.menu == menu) {//ss
                        var funcStr = n.func.replace('*', id);
                        eval(funcStr);
                        //eval(n.func);
                        return n;
                    }
                });


                result = 1;
                message = "操作成功";

            } catch (e) {
                result = 0;
                message = "操作失败";
            }

            var pos = this.getCameraPos();
            re_xyz = pos.split(",")[0];
            re_angle = pos.split(",")[1];

            res = { "code ": result, " message ": message, "xyz": re_xyz, "angle": re_angle }
            return res
        },

        UIPageButtonControl: function (str) {
            var res = { " code ": "", " message ": "" }
            var result = 1;
            var message = "";
            try {
                var json = $.parseJSON(str);
                var xyz = json.xyz
                var angle = json.angle
                var index = json.index
                //var layer = json.layer
                var id = json.id
                //var type = json.type

                //var layerValue = $.grep(controlData.UIButtonControlData, function (n, i) {
                //    if (n.type == type && n.layer == layer && n.menu == menu) {//ss
                //        var funcStr = n.func.replace('*', id);
                //        eval(funcStr);
                //        //eval(n.func);
                //        return n;
                //    }
                //});
                //$("#"+id+" a")[index].click();
                $("#" + id + " a")[index].click();
                result = 1;
                message = "操作成功";

            } catch (e) {
                result = 0;
                message = "操作失败";
            }

            var pos = this.getCameraPos();
            re_xyz = pos.split(",")[0];
            re_angle = pos.split(",")[1];

            res = { "code ": result, " message ": message, "xyz": re_xyz, "angle": re_angle }
            return res
        },

        //获取当前的坐标和视口位置
        getCameraPos: function ()
        {
            var cam     = Q3D.globalCamera();
            var pos     = cam.getAbsPos();
            var ori     = cam.getOrientation();

            var re_pos = pos.x + "," + pos.y + "," + pos.z
            var re_ori = ori.x + "," + ori.y + "," + ori.z

            var result = re_pos + "|" + re_ori;
            return result
        },

        //获取默认视口数据
        getDefaultLayerView: function(){
            $.ajax({
                type: "POST",  
                url: con.WebServiceUrl + "DefaultMapView/getDefaultMapLayerView",
                cache: false,
                data: null,
                dataType: 'json',  // 返回数据的数据类型json
                success: function (data) {
                    for (var i in data) {
                        var key = data[i].layer;
                        dataCache.defaultLayerView.put(key, data[i]);
                    }
                },
                error: function () {

                }
            });
        }
    }
})