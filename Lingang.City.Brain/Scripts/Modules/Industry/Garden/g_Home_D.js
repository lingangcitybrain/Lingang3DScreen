define(["config", "common", "g_Main", "e_Main", "control_Ajax", "gl_GardenBuilding", "gl_Stop", "g_Echart", "gl_UnmannedCar", "gl_Event", "el_EstateInfo", "el_AtlasChart", "el_HotMap", "b_BuildingFloor", "pagination"], function (con, com, g_Main, e_Main, control_Ajax, gl_GardenBuilding, gl_Stop, g_Echart, gl_UnmannedCar, gl_Event, el_EstateInfo, el_AtlasChart, el_HotMap, b_BuildingFloor, pagination) {
    /****************************园区****************************/
    return {
        layerNO: null,
        POIName_Clk:null,
        //FlowerClickIndex: 0,
        //floor:1,
        /**********************************底部菜单操作********************************************/
        loadMain_e_Main: function () {
            com.LayerFlyto(16, function () {

            })
            e_Main.loadMain();
            this.layerNO = 16;
            var jsondata = {
                "menu":"3",
                "layer": "16",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadEstateInfo: function () {
            com.LayerFlyto(16, function () {

        })
            el_EstateInfo.loadEstateInfo();
            this.layerNO = 16;
            var jsondata = {
                "menu": "3",
                "layer": "16",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadAtlasChart: function () {
        com.LayerFlyto(17, function () {
                
            })
            el_AtlasChart.loadAtlasChart();
            this.layerNO = 17;
            var jsondata = {
                "menu": "3",
                "layer": "17",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadHotMap: function () {
            com.LayerFlyto(18);
            el_HotMap.loadHotMap();
            this.layerNO = 18;
            var jsondata = {
                "menu": "3",
                "layer": "18",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadMain_g_Main: function () {
            //飞行到园区视角
            com.LayerFlyto(19, function () {

            })
            g_Main.loadMain();
            this.layerNO = 19;
            var jsondata = {
                "menu": "3",
                "layer": "19",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadBuilding: function () {
            //飞行到园区视角
            com.LayerFlyto(311, function () {

            })
            g_Main.loadMain(false);
            b_BuildingFloor.loadBuilding();
            this.layerNO = 20;
            var jsondata = {
                "menu": "3",
                "layer": "20",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadStop: function () {
            com.LayerFlyto(21);
            g_Main.loadMain(false);
            gl_Stop.loadStop();
            this.layerNO = 21;
            var jsondata = {
                "menu": "3",
                "layer": "21",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadUnmannedCar: function () {
            com.LayerFlyto(22, function () {

                })
            gl_UnmannedCar.loadUnmannedCar();
            this.layerNO = 22;
            var jsondata = {
                "menu": "3",
                "layer": "22",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        loadEvent: function () {
            com.LayerFlyto(23)
            g_Main.loadMain(false);
            gl_Event.loadEvent();
            this.layerNO = 23;
            var jsondata = {
                "menu": "3",
                "layer": "23",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendLayerControlInfo(jsondata); //发送控制命令
        },
        /************************************END*******************************************/

        ////////////////////////图表控制/////////////////////////////////////
        loadBigChart: function (divname) {
            require("g_Echart").loadBigChart(divname);
            var jsondata = {
                'menu': '31',
                'seat': divname,
                'command': 'open',
            };
            control_Ajax.sendEchartControlInfo(jsondata); //发送控制命令
        },
        closeBigChart: function () {
            require("g_Echart").closeBigChart()
            var jsondata = {
                'menu': '31',
                'seat': '',
                'command': 'close',
            };
            control_Ajax.sendEchartControlInfo(jsondata); //发送控制命令
        },
        ///////////////////////////////end////////////////////////////////////

        /*******************************POI操作********************************************/

        PoiEvent: function (nodename) {
            g_Main.PoiEvent(nodename);
            this.POIName_Clk=nodename;
            var jsondata = {
                "menu": "3",
                "layer": this.layerNO,
                "id":nodename,
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIControlInfo(jsondata); //发送控制命令
        },
        //无人车poi点击
        showUnmannedCarTrajectors: function (nodename) {
            require("gl_UnmannedCar").showUnmannedCarTrajectors(nodename);
            var jsondata = {
                "menu": "3",
                "layer": this.layerNO,
                "id": nodename,
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIControlInfo(jsondata); //发送控制命令
        },
        showParkingLotDetail: function (nodename) {
            this.POIName_Clk = nodename;
            require("gl_Stop").showParkingLotDetail(nodename);
            var jsondata = {
                "menu": "3",
                "layer": this.layerNO,
                "id": nodename,
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIControlInfo(jsondata); //发送控制命令
        },
        /*************************************END******************************************/

        /*****************************UI窗口交互******************************************/
        //关闭代表企业花瓣窗口
        closeTopCompanyInfo: function () {
            require('gl_TopCompany').closeTopCompanyInfo();
            var jsondata = {
                "menu": "3",
                "layer": this.layerNO,
                "id": require("gl_TopCompany").LastPOI_Clk,
                "command":"close",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
        },

        //点击进入企业详情
        clickCompany: function () {
            //require("gl_TopCompany").conrolFlower();
            $(".cy-qy-navbar").removeClass("active");
            //点击入驻企业操作
            require("gl_TopCompany").flyToBuilding();
            var jsondata = {
                "menu": "3",
                "layer": this.layerNO,
                "id": require("gl_TopCompany").LastPOI_Clk, //+ "/" + require("gl_TopCompany").clickBoolean,
                "command": "open",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
        },

        //花瓣点击事件
        FlowerClickFn: function (index) {
            //this.FlowerClickIndex = index;
            var jsondata = {
                "menu": "3",
                "layer": this.layerNO,
                "type":"flowerClk",
                "id": index,
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendButtoncontrolInfo(jsondata); //发送控制命令
        },
      
        //楼宇揭楼层
        openFloor: function (floor) {
            //this.floor = floor;
            require("b_BuildingFloor").openFloor(floor);
            var jsondata = {
                "menu": "3",
                "layer": this.layerNO,
                "type": "buildingFloor",
                "id": floor,
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendButtoncontrolInfo(jsondata); //发送控制命令
        },
        //关闭楼宇详情
        closeBuildingDetail: function () {
            require('b_BuildingFloor').closeBuidingDetail();
            var jsondata = {
                "menu": "3",
                "layer":this.layerNO,
                "id": require("b_BuildingFloor").POINodeClk,
                "command": "close",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
        },
        //关闭事件窗口
            closeEventDetail: function () {
                require('gl_Event').closeEventDetail();
                var jsondata = {
                    "menu": "3",
                    "layer": this.layerNO,
                    "id": this.POIName_Clk,
                    "command": "close",
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
            },
            closeParkingDetail: function () {
                require('gl_Stop').closeEventDetail();
                var jsondata = {
                    "menu": "3",
                    "layer": this.layerNO,
                    "id": this.POIName_Clk,
                    "command": "close",
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendPOIWinControlInfo(jsondata); //发送控制命令
            },
        /*********************************END*********************************************/


    }

})