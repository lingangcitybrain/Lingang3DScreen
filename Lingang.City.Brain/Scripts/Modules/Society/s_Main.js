define(["config", 's_LeftLayer', 's_RightLayer', 's_Echart', 'sl_IOT', 'sl_Camera', 'sl_Drone', 'sl_Event', 'sl_SeaboardLine', 'sl_WorkSite', 'sl_WorkStation', 'sl_Street', 'sl_Grid'],
function (con, s_LeftLayer, s_RightLayer, s_Echart, sl_IOT, sl_Camera, sl_Drone, sl_Event, sl_SeaboardLine, sl_WorkSite, sl_WorkStation, sl_Street, sl_Grid) {
    return {
        LayerCatalog: {
            IOT: {
                Id: 1, TextName: "传感器", Name: "IOT", Level: 2,
                List: {
                    1: { Id: 1001, TextName: "无线烟感", Name: "IOT_1", Type: 1, ChooseIcon: "Texture/Common/IOT1_hover.png", UnChooseIcon: "Texture/Common/IOT1.png", },
                    2: { Id: 1002, TextName: "电梯传感器", Name: "IOT_2", Type: 2, ChooseIcon: "Texture/Common/IOT2_hover.png", UnChooseIcon: "Texture/Common/IOT2.png" },
                    3: { Id: 1003, TextName: "无线门磁", Name: "IOT_3", Type: 3, ChooseIcon: "Texture/Common/IOT3_hover.png", UnChooseIcon: "Texture/Common/IOT3.png", },
                    4: { Id: 1004, TextName: "微信开门", Name: "IOT_4", Type: 4, ChooseIcon: "Texture/Common/IOT4_hover.png", UnChooseIcon: "Texture/Common/IOT4.png" },
                    5: { Id: 1005, TextName: "电子围栏", Name: "IOT_5", Type: 5, ChooseIcon: "Texture/Common/IOT5_hover.png", UnChooseIcon: "Texture/Common/IOT5.png", },
                    6: { Id: 1006, TextName: "井盖传感器", Name: "IOT_6", Type: 6, ChooseIcon: "Texture/Common/IOT6_hover.png", UnChooseIcon: "Texture/Common/IOT6.png" },
                    7: { Id: 1007, TextName: "地磁", Name: "IOT_7", Type: 7, ChooseIcon: "Texture/Common/IOT7_hover.png", UnChooseIcon: "Texture/Common/IOT7.png" }
                }
            },
            Camera: { Id: 2, TextName: "摄像头", Name: "Camera", Level: 1, ChooseIcon: "Texture/Common/camera_hover.png", UnChooseIcon: "Texture/Common/camera.png" },
            WorkStation: { Id: 3, TextName: "村居工作站", Name: "WorkStation", Level: 1, ChooseIcon: "Texture/Common/station_hover.png", UnChooseIcon: "Texture/Common/station.png" },
            WorkSite: { Id: 4, TextName: "工地", Name: "WorkSite", Level: 1, ChooseIcon: "Texture/Common/worksite_hover.png", UnChooseIcon: "Texture/Common/worksite.png" },
            Event: { Id: 5, TextName: "事件", Name: "Event", Level: 1, ChooseIcon: "Texture/Common/event_hover.png", UnChooseIcon: "Texture/Common/event.png" }
        },
        loadMain: function () {
            this.Revert();
            s_LeftLayer.Revert();//视频清空
            //左侧
            s_LeftLayer.loadLeftHtml();//加载左侧DIV
            //s_LeftLayer.loadLeft2Html();//加载左侧第二列DIV

            //加载中间DIV
            this.loadCenterHtml();

            //右侧
            s_RightLayer.loadRithHtml();//加载右侧DIV


            this.loadBottomHtml();//加载底部DIV

            //this.loadHeadMenuHtml();//加载头部菜单div

            setTimeout(function () {
                s_Echart.loadEcharts();//加载图表
            }, 1500);
        },

        //加载头部菜单
        loadHeadMenuHtml: function () {
            var url = con.HtmlUrl + 'Society/header_menu.html';
            require(['text!' + url], function (template) {
                $("#header_menu").html(template);
                $("#header_menu").show('drop', 1000);//左侧
            })
        },

        //加载中间DIV
        loadCenterHtml: function () {
            var url = con.HtmlUrl + 'Society/Centre_Container.html';
            require(['text!' + url], function (template) {
                $("#centre_01").html(template);
                $("#centre_01").show('drop', 1000);//左侧
            })
        },

        //加载底部DIV
        loadBottomHtml: function () {
            var url = con.HtmlUrl + 'Society/Bottom_Container.html';
            require(['text!' + url], function (template) {
                $("#bottom_menu").html(template);
                $("#bottom_menu").show('drop', 1000);//左侧
                require("s_Main").ChangeLayer();
            })
        },
        //点击底部的菜单
        ChangeLayer: function () {
            //社区综治
            $("#bottom_menu ul li").each(function (index) {//便利对象
                $(this).click(function () {//点击触发事件
                    $("li").removeClass("active");//删除当前元素的样式
                    $("li").eq(index).addClass("active");//添加当前元素的样式
                    var menuname = $("li").eq(index).text();
                    require("s_Main").showLayer(menuname);
                });
            });
        },

        //切换显示图层
        showLayer: function (menuname) {
            this.Revert();
            switch (menuname)   {
                case "传感器":
                    require("s_Home").loadIOT();                    
                    break;
                case "摄像头":
                    require("s_Home").loadCamera();
                    break;
                case "无人机":
                    require("s_Home").loadDrone();
                    break;
                case "村居工作站":
                    require("s_Home").loadWorkStation();
                    break;
                case "海岸线":
                    require("s_Home").layerSeaboard();
                    break;
                case "工地":
                    // sl_WorkSite.loadWorkSite();
                    require("s_Home").loadWorkSite();
                    break;
                case "街面":
                   // sl_Street.loadWorkSite();
                    sl_Street.loadLeftSecond();
                    //this.loadCenter1Info();
                    break;
                case "网格":
                   // sl_Grid.loadGridPOI();
                    sl_Grid.loadLeftSecond();
                    //this.loadCenter1Info();
                    break;
                case "事件":
                    //Q3D.globalCamera().flyTo(("395683.8080060399,286.4911804199219,-3416926.616417045").toVector3d(), ("-42.453548431396484,-2.83009672164917,-2.5931613445281982").toVector3(), 1, null);
                    require("s_Home").loadEvent();
                    break;
                default:
            }
        },
        //POI事件响应
        PoiEvent: function (nodename) {
            var str = nodename
            var poitype = "";
            var id = "";
            if (str.indexOf("_") > -1) {
                poitype = str.split("_")[0];
                poitype = poitype.replace("POISociety", "")

                id = str.split("_")[1];
            }

            switch (poitype) {
                case "IOT": //传感器
                    sl_IOT.loadIOTDetial(nodename)
                    break;
                case "Camera": //摄像头
                    sl_Camera.loadCameraDetial(nodename)
                    break;
                case "WorkStation": //村居工作站  

                    break;
                case "WorkSite": //工地

                    break;
                case "Event": //事件
                    sl_Event.loadEventDetial(id)
                    break;
                default:
            }
        },
        Revert: function () {
           
            sl_IOT.Revert();
            sl_Camera.Revert();
            sl_Drone.Revert();
            sl_Event.Revert();
            sl_SeaboardLine.Revert();
            sl_WorkSite.Revert();
            sl_WorkStation.Revert();
            //sl_Street.Revert();
            //sl_Grid.Revert();

        }
    }
});