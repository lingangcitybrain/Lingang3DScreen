define(["config", "common","tl_Drone", "s_Main", "control_Ajax", 's_LayerMenuAjax', 's_LeftLayer', 's_RightLayer', 's_Echart', 'sl_IOT', 'sl_Camera', 'sl_Drone', 'sl_Event', 'sl_SeaboardLine', 'sl_WorkSite', 'sl_WorkStation', 'sl_Street', 'sl_Grid', 'sl_Pipeline'],
function (con, com,tl_Drone, s_Main, control_Ajax, s_LayerMenuAjax, s_LeftLayer, s_RightLayer, s_Echart, sl_IOT, sl_Camera, sl_Drone, sl_Event, sl_SeaboardLine, sl_WorkSite, sl_WorkStation, sl_Street, sl_Grid, sl_Pipeline) {
    return {
        layerNO: null,
        POIName:null,
        loadMain: function () {
            s_Main.loadMain();

            var jsondata = {
                "menu": "1",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendMenuControlInfo(jsondata); //发送控制命令
        },
        dayNightMenuChange: function (type) {
            var jsondata = {
                "menu": "11",
                "xyz": "",
                "angle": "",
            };
            switch (type) {
                case "实景":
                    com.ChangeLight(1);
                    jsondata.menu = "11";
                    break;
                case "夜景":
                    com.ChangeLight(0);
                    jsondata.menu = "12";
                    break;
                default:
            }
            if(require('sl_Pipeline').isOpenedPipeline == true){
                require('sl_Pipeline').displayPipeline();
            }

            control_Ajax.sendMenuControlInfo(jsondata); //发送控制命令
        },
        loadIOT: function ()
        {

            this.layerNO = 10;
            sl_IOT.loadIOT();
            sl_IOT.loadLeftSecond();
            require("s_Main").loadCenter1Info();  //当中大数字显示
            var jsondata = {
                "menu": "1",
                "layer": "10",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadCamera: function () {
            this.layerNO = 11;
            sl_Camera.loadCamera();
            sl_IOT.loadLeftSecond();
            require("s_Main").loadCenter1Info();
            var jsondata = {
                "menu": "1",
                "layer": "11",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadDrone: function () {
            this.layerNO = 12;
            sl_Drone.loadDrone();
            sl_Drone.loadLeftSecond();
            require("s_Main").loadCenter1Info();
            var jsondata = {
                "menu": "1",
                "layer": "12",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadWorkStation: function () {
            this.layerNO = 13;
            sl_WorkStation.loadWorkStation();
            sl_IOT.loadLeftSecond();
            require("s_Main").loadCenter1Info();
            var jsondata = {
                "menu": "1",
                "layer": "13",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        layerSeaboard: function () {
            com.LayerFlyto(14)
            this.layerNO = 14;
            sl_SeaboardLine.layerSeaboard();
            sl_SeaboardLine.loadLeftSecond();
            //require("s_Main").loadCenter1Info();
            require("s_Main").loadCenter1();
            var jsondata = {
                "menu": "1",
                "layer": "14",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadWorkSite: function () {

            Q3D.globalCamera().flyTo(("396108.71569771634,2102.016891479492,-3414150.4402918345").toVector3d(), ("-30.96967124938965,0.03673381358385086,0.016093820333480835").toVector3(), 1, null);
            this.layerNO = 26;
            sl_WorkSite.loadWorkSite();
            sl_WorkSite.loadLeftSecond();
           // require("s_Main").loadCenter1Info();
            require("s_Main").loadCenter1();
            var jsondata = {
                "menu": "1",
                "layer": "26",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadEvent: function () {
            com.LayerFlyto(15, function () { });
        this.layerNO = 15;
            sl_Event.loadEvent();
            sl_IOT.loadLeftSecond();
            require("s_Main").loadCenter1();
            var jsondata = {
                "menu": "1",
                "layer": "15",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadStreet: function () {
            Q3D.globalCamera().flyTo(("395990.1351315872,502.45323181152343,-3416512.159721699").toVector3d(), ("-31.376115798950195,8.757302284240722,5.298542499542236").toVector3(), 1, function () {
                require("sl_Street").createStreetLine();
            });
            this.layerNO = 27;
            sl_Street.loadWorkSite();
            sl_Street.loadLeftSecond();
            require("s_Main").loadCenter1();
            var jsondata = {
                "menu": "1",
                "layer": "27",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadGrid: function () {
            com.LayerFlyto(281, function () {

            });
            this.layerNO = 28;
            sl_Grid.loadGridInfo();
            sl_Grid.loadLeftSecond();
            require("s_Main").loadCenter1();
            var jsondata = {
                "menu": "1",
                "layer": "28",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadPipeline: function () {
            this.layerNO = 29;
            sl_Pipeline.openPipeline();
            var jsondata = {
                "menu": "1",
                "layer": "29",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        ////////////////////////图表控制/////////////////////////////////////
        loadBigChart: function (divname) {
            require("s_Echart").loadBigChart(divname);
            var jsondata = {
                'menu': '1',
                'seat': divname,
                'command': 'open',
            };
            control_Ajax.sendEchartControlInfo(jsondata); //发送控制命令
        },
        closeBigChart: function () {
            require("s_Echart").closeBigChart()
            var jsondata = {
                'menu': '1',
                'seat': '',
                'command': 'close',
            };
            control_Ajax.sendEchartControlInfo(jsondata); //发送控制命令
        },
        ///////////////////////////////end////////////////////////////////////
        /*******************************POI操作********************************************/

        PoiEvent: function (nodename) {
            this.POIName = nodename;
            s_Main.PoiEvent(nodename);
            var jsondata = {
                "menu": "1",
                "layer": this.layerNO,
                "id": nodename,
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIControlInfo(jsondata); //发送控制命令
        },

        /***********************************END****************************************************/

        /**********************UI事件****************************/
        //无人机实时视频窗口
        closeDroneCameraDetial: function () {
            require('sl_Drone').closeCameraDetial();
            var jsondata = {
                "menu": "1",
                "layer": this.layerNO,
                "id": this.POIName,
                "command": "close",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
        },
        //摄像头视频窗口
        closeCameraDetial: function () {
            require('sl_Camera').closeCameraDetial();
            var jsondata = {
                "menu": "1",
                "layer": this.layerNO,
                "id": this.POIName,
                "command": "close",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
        },
        //关闭事件详情
        closeDetail: function () {
            require('sl_Event').closeDetail();
            var jsondata = {
                "menu": "1",
                "layer": this.layerNO,
                "id": this.POIName,
                "command": "close",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
        },
        //关闭事件派单详情
        closeEventPaidan: function () {
            require('sl_Event').closeEventPaidan();
            var jsondata = {
                "menu": "1",
                "layer": this.layerNO,
                "id": "paidan01",
                "command": "close",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
        },
        //关闭楼栋视频
        closeBuildVideo: function () {
            require('sl_Event').closeBuildVideo();
            var jsondata = {
                "menu": "1",
                "layer": this.layerNO,
                "id": "paidan01",
                "command": "close",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
        },
        //关闭事件无人机视频
        closeEventDrone: function () {
            require('sl_Event').closeEventDrone();
            var jsondata = {
                "menu": "1",
                "layer": this.layerNO,
                "id": "paidan01",
                "command": "close",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
        },

        //关闭传感器详情
        closeIOTDetail: function () {
            require('sl_IOT').closeIOTDetail();
            var jsondata = {
                "menu": "1",
                "layer": this.layerNO,
                "id": this.POIName,
                "command": "close",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
        },
        /**********************END******************************/
    }
});