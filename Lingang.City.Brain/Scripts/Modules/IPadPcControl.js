define(["config", "common", "dataCache", "controlData"], function (con, com, dataCache, controlData) {
    return {
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
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //菜单控制    menu 社区综治：1；大客流：2；产业园区：3；日景：11；夜景：12；还原：100
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

                switch (menu) {
                    case "0"://数字星空
                        break;
                    case "1"://社区综治
                        require('mainMenu').mainMenuSelect(1);
                        break;
                    case "2"://大客流
                        require('mainMenu').mainMenuSelect(2);
                        break;
                    case "3"://产业园区
                        require('mainMenu').mainMenuSelect(3);
                        break;
                    case "4"://产业发展
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

        //社区综治图层控制
        layerSocietyControl: function(layercode)
        {
            switch (layercode) {
                case "10"://传感器
                    require("s_Main").showLayer('传感器');
                    break;
                case "11"://摄像头
                    require("s_Main").showLayer('摄像头');
                    break;
                case "12"://无人机
                    require("s_Main").showLayer('无人机');
                    break;
                case "13"://村居工作站
                    require("s_Main").showLayer('村居工作站');
                    break;
                case "14"://海岸线
                    require("s_Main").showLayer('海岸线');
                    break;
                case "26"://工地
                    require("s_Main").showLayer('工地');
                    break;
                case "15"://事件
                    require("s_Main").showLayer('事件');
                    break;
            }
        },
        //旅游大客流图层控制
        layerTourControl: function (layercode) {

            
            //try {
            //    var index = parseInt(layercode) - 1
            //    $("#bottom_menu ul li").removeClass("active");//删除当前元素的样式
            //    $("#bottom_menu ul li").eq(index).addClass("active");//添加当前元素的样式
            //} catch (e)
            //{}
         
            $("#bottom_menu ul li").removeClass("active");//删除当前元素的样式

            switch (layercode) {
                case "1"://人流热力图
                    require("t_Main").showLayer('人流热力图');
                    $("#bottom_menu ul li").eq(0).addClass("active");
                    break;
                //case "2"://实时路况
                //    require("t_Main").showLayer('实时路况');
                //    $("#bottom_menu ul li").eq(1).addClass("active");
                //    break;
                case "3"://摄像头
                    require("t_Main").showLayer('摄像头');
                    $("#bottom_menu ul li").eq(1).addClass("active");
                    break;
                case "4"://无人机
                    require("t_Main").showLayer('无人机');
                    $("#bottom_menu ul li").eq(2).addClass("active");
                    break;
                case "5"://停车场
                    require("t_Main").showLayer('停车场');
                    $("#bottom_menu ul li").eq(3).addClass("active");
                    break;
                case "6"://公交
                    require("t_Main").showLayer('公交');
                    $("#bottom_menu ul li").eq(4).addClass("active");
                    break;
                case "7"://事件
                    require("t_Main").showLayer('事件');
                    $("#bottom_menu ul li").eq(5).addClass("active");
                    break;
                case "8"://人流预测
                    require("t_Main").showLayer('人流预测');
                    $("#bottom_menu ul li").eq(6).addClass("active");
                    break;
                case "9"://交通仿真
                    require("t_Main").showLayer('交通仿真');
                    $("#bottom_menu ul li").eq(7).addClass("active");
                    break;
            }
        },
        //产业园区图层控制
        layerIndustryControl: function (layercode) {
            $("#bottom_menu ul li").removeClass("active");//删除当前元素的样式

            switch (layercode) {
                case "16":
                    //$("#bottom_menu ul li").eq(0).addClass("active");
                    //require("mainMenu").showLayer_e_Main("产业信息");
                    require("mainMenu").showLayer_e_Main(0);
                    break;
                case "17":
                    //$("#bottom_menu ul li").eq(1).addClass("active");
                    //require("mainMenu").showLayer_e_Main("象限图谱");  //没效果
                    require("mainMenu").showLayer_e_Main(1);
                    break;
                case "18":
                    //$("#bottom_menu ul li").eq(2).addClass("active");//没效果
                    //require("mainMenu").showLayer_e_Main("人员分布");
                    require("mainMenu").showLayer_e_Main(2);
                    break;
                case "19":
                    //$("#bottom_menu ul li").eq(3).addClass("active");
                    //require("mainMenu").showLayer_e_Main("园区信息");
                    require("mainMenu").showLayer_e_Main(3);
                    break;
                case "20"://楼宇
                    require("mainMenu").showLayer_gMain(0);
                    //require("gl_GardenBuilding").loadBuilding();
                    //$("#bottom_menu ul li").eq(0).addClass("active");
                    break;
                case "21"://停车场
                    //require("mainMenu").showLayer_gMain('停车');//没效果
                    //$("#bottom_menu ul li").eq(1).addClass("active");
                    require("mainMenu").showLayer_gMain(1);
                    break;
                case "22"://无人驾驶接驳车
                    //require("mainMenu").showLayer_gMain('无人驾驶接驳车');
                    //$("#bottom_menu ul li").eq(2).addClass("active");
                    require("mainMenu").showLayer_gMain(2);
                    break;
                case "23"://事件
                    //require("mainMenu").showLayer_gMain('事件');
                    //$("#bottom_menu ul li").eq(3).addClass("active");
                    require("mainMenu").showLayer_gMain(3);
                    break;
                case "24"://产业信息
                    //require("mainMenu").showLayer_gMain('产业信息');
                    //$("#bottom_menu ul li").eq(4).addClass("active");
                    require("mainMenu").showLayer_gMain(4);
                    break;
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


                switch (menu) {
                    case "1"://社区综治
                        //this.layerSocietyControl(layer);
                        break;
                    case "2"://大客流
                        //this.layerTourControl(layer);
                        break;
                    case "3"://产业园区
                        this.poiIndustryControl(id);
                        break;
                }


                //if (id != null)
                //{
                //    var nodename = "POITourCamera_" + id;
                //    require("tl_Camera").loadCameraDetial(nodename)
                //}



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
        poiIndustryControl: function (id) {
            //switch (menu) {
            //    case "1"://社区综治
            //        //this.layerSocietyControl(layer);
            //        break;
                
            //        this.poiIndustryControl(id);
            //        break;
            //    default:
            //        require("g_Main").PoiEvent(id);
            //}
            if (id.indexOf("UmmannedCarPOI") > -1) { //无人车POI
                require("gl_UnmannedCar").showUnmannedCarTrajectors(id);
            }
            //else if (id.indexOf("POIIndustryGTopCompany") > -1) { //代表企业POI
            //    $(".cy-qy-navbar").click();
            //    //require("gl_UnmannedCar").showUnmannedCarTrajectors(id);
            //}
            else {
                require("g_Main").PoiEvent(id);
            }
            
        },
        poiSocietyControl: function (layer,id)
        {
            var res = { " code ": "", " message ": "", "xyz": "", "angle": "" }
            var result = 1;
            var message = "";
            var re_xyz = "";
            var re_angle = "";

            console.log(str)

            try {
                var json = $.parseJSON(str);
                var xyz = json.xyz
                var angle = json.angle
                var menu = json.menu
                var layer = json.layer
                var id = json.id


                //switch (menuname) {
                //    case "1"://社区综治
                //        //this.layerSocietyControl(layer);
                //        break;
                //    case "2"://大客流
                //        //this.layerTourControl(layer);
                //        break;
                //    case "3"://产业园区
                //        //this.layerIndustryControl(layer);
                //        break;
                //}


                if (id != null) {
                    var nodename = "POITourCamera_" + id;
                    require("tl_Camera").loadCameraDetial(nodename)
                }


                //视口切换
                //if (xyz != null || angle != null) {
                //    Q3D.globalCamera().flyTo((xyz).toString().toVector3d(), (angle).toVector3(), 0.1, null);
                //}

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
        //////////////////////////////////////////////////POI信息窗口控制/////////////////////////////////////////////////////
        //POI信息窗口控制
        poiInfoControl: function (str)
        {
            var res = { " code ": "", " message ": "" }
            var result = 1;
            var message = "";

            console.log(str)

            try {
                var json = $.parseJSON(str);
                var xyz = json.xyz
                var angle = json.angle
                var menu = json.menu
                var layer = json.layer
                var id = json.id
                var command = json.command

                if (id != null && id != "") {
                    if (command != null && command != "") {
                        if (command == "open") {
                            if (layer == 7) { //事件
                                var nodename = "POITourEvent_" + id;
                                require("tl_Event").loadEventDetial(nodename)
                            }
                            else if (layer == 19) {  //园区
                                if (id.indexOf("POIIndustryGTopCompany") > -1) {//代表企业POI（花瓣窗口，进入企业内部操作）
                                    //$(".cy-qy-navbar").click();
                                    $(".cy-qy-navbar").removeClass("active");
                                    require("gl_TopCompany").flyToBuilding();
                                } 
                            } else if (layer == 20) { //楼宇
                                if (id.indexOf("buildingFloor") > -1) { //楼宇UI楼层操作
                                    var floor = id.split("/")[1];
                                    require("b_BuildingFloor").openFloor(floor);
                                }
                            }
                            else {
                                var nodename = "POITourCamera_" + id;
                                require("tl_Camera").loadCameraDetial(nodename)
                            }
                        }

                        if (command == "close") {
                            if (layer == 7) {
                                //var nodename = "POITourEvent_" + id;
                                require("tl_Event").closeDetail()
                            } else if (layer == 19) {  //园区
                                if (id.indexOf("POIIndustryGTopCompany") > -1) {//代表企业POI（花瓣窗口）
                                    require('gl_TopCompany').closeTopCompanyInfo();//关闭当前花瓣窗口
                                    $(".cy-qy-menu-close").click();
                                }
                            }
                            else {
                                require("tl_Camera").closeCameraDetial();
                                $('.vex-dialog-button-primary').click();
                            }
                        }
                    }
                    else {  //单纯层级显示隐藏
                        if (id.indexOf("POIIndustryGTopCompany") > -1) {//代表企业POI（花瓣窗口）
                            //require('gl_TopCompany').closeTopCompanyInfo();//关闭当前花瓣窗口
                            //$(".cy-qy-menu-close").click();
                            var index = parseInt(id.split("/")[1]);
                            if (index>=0) {
                                $(".cy-qy-menu a")[index].click();
                            }
                        }
                    }
                }
                else {
                    if (command != null && command != "") {
                        if (command == "open") {                            
                            if (layer == 9 && menu == 2) { //仿真
                                require("tl_TrafficSimulation").loadCamera();
                            }
                            else if (layer == 4 && menu == 2) { //无人机视频窗口
                                //require("tl_Drone").openDroneVideo();

                                var nodename = "POITourDrone_wurenji364"
                                require("tl_Drone").loadDroneCamera(nodename);


                            }
                        }
                        else if (command == "close") {
                            if (layer == 9 && menu == 2) { //仿真
                                require("tl_TrafficSimulation").closeCameraDetial()
                            }
                            else if (layer == 4 && menu == 2) { //无人机视频窗口
                                require("tl_Drone").closeCameraDetial();
                            }
                        }
                    }
                }


                //视口切换
                //if (xyz != null || angle != null) {
                //    Q3D.globalCamera().flyTo((xyz).toString().toVector3d(), (angle).toVector3(), 0.1, null);
                //}

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