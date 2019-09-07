define(["config", "common", "s_layerMenuData", "s_EchartAjax"], function (con, com, s_layerMenuData, s_EchartAjax) {
    /**************************************WorkSite**************************************/
    return {
        LayerType: null,//选择传感器
        POIData: null,//POI详情数据
        LastPOI_Clk: null,//鼠标选中POI

        //加载工地POI
        loadWorkSite: function () {
            this.Revert();
            this.LayerType = require("s_Main").LayerCatalog.WorkSite;
            this.POIData = s_layerMenuData.WorkSiteData.Data;

           

            //var areaName = con.AreaName;
            //var icon = this.LayerType.UnChooseIcon;
            //var pois = [];
            //for (var i = 0; i < this.POIData.length; i++) {
            //    var row = this.POIData[i];
            //    var poiName = "POISociety" + this.LayerType.Name + "_" + row.id;//POIIOT_01
            //    var iconSize = Q3D.vector2(41, 45);
            //    var pos = row.pos;
            //    var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

            //    var poi = { POIName: poiName, Position: position, Text: "", Icon: icon, IconSize: iconSize };
            //    pois.push(poi);
            //}
            //com.InitPois(areaName, pois);

        },
        //工地点击事件
        loadWorkSiteDetial: function (nodeName) {
            var areaName = con.AreaName;
            if (this.LastPOI_Clk && this.LastPOI_Clk != "") {
                var layername = this.LastPOI_Clk.split('_')[0].replace("POISociety", "");
                var level = this.LayerType.Level;
                var icon = this.LayerType.UnChooseIcon;
                var lastNode = map.getSceneNode(areaName, this.LastPOI_Clk);
                if (lastNode) {
                    lastNode.asPOI().setIcon(icon);
                    //lastNode.setVisible(0);
                }
            }
            this.LastPOI_Clk = nodeName;
            var node = map.getSceneNode(areaName, nodeName);
            if (node != null) {

                var poi = node.asPOI();

                var layername = nodeName.split('_')[0].replace("POISociety", "");
                var level = this.LayerType.Level;
                var icon = this.LayerType.ChooseIcon;
                poi.setIcon(icon);
                //});
            }
        },
        //清空工地POI
        clearStreetPOI: function () {
            var data = this.POIData;
            var areaName = con.AreaName;
            //设置POI隐藏
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    var name = this.LayerType.Name;

                    var poiname = "POISociety" + name + "_" + data[i].id;
                    var node = map.getSceneNode(areaName + "/" + poiname);
                    if (node) {
                        map.getArea(areaName).destroySceneNode(poiname);
                    }
                }
                this.LayerType = null;
                this.POIData = null;
            }

        },
        //创建街面路线
        createStreetLine: function () {
            var nodename = 'streetline'
            var nodePath = con.AreaName + "/" + nodename;
            var lineArray = '121.916344,30.888412|121.908869,30.881892|121.908665,30.881645|121.908483,30.881333|121.908265,30.880754|121.908049,30.880109|121.907367,30.878696'.split("|");
            var lineArrayV3 = new Array();
            for (var k = 0; k < lineArray.length; k++) {
                var pos = lineArray[k]
                var lng = parseFloat(pos.split(",")[0])
                var lat = parseFloat(pos.split(",")[1])
                var hgt = 8
                var position = Q3D.globalVec3d(lng, lat, hgt).toGlobalPos();
                var point = Q3D.vector3(Q3D.globalVec3d(lng, lat, hgt).toLocalPos(con.AreaName))
                lineArrayV3.push(point)
            }

            var createOptions = {
                //Material: "Material/linered.mtr",
                Material: null,
                SpecialTransparent: true, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                LinePoints: [lineArrayV3], //一维数组,由Vector3坐标组成
                OffsetDist: [],//偏移距离，单位米，用于贝塞尔曲线的控制点计算
                LineOptions: {
                    Subdivision: 20, //设置生成曲线细分程度
                    LineWidth: 10,
                    WrapLen: 10,
                    //以下用于动态创建的材质
                    Color: Q3D.colourValue('#00a600', 1), //线的颜色
                    Alpha: 1, //线的透明度
                },
                OnLineCreated: null
            }

            var linenode = map.getSceneNode(con.AreaName, nodename)
            if (linenode) {
                linenode.setVisible(1)
                //map.destroySceneNode(con.AreaName, nodename)
            } else {
                map.createPolyLine(nodePath, createOptions);
            }
        },
        //清除街面线路
        clearStreetLine: function () {
            var node = map.getSceneNode(con.AreaName + "/" + 'streetline');
            if (node) {
                node.setVisible(0);
            }
        },

        //加载第二列的div
        //loadLeftSecond: function () {
        //    var url = con.HtmlUrl + 'SocietyNew/Left_Second_EventWorkSite.html';
        //    require(['text!' + url], function (template) {
        //        $("#left_second_01").html(template);
        //    })
        //},


        //加载第二列的div
        loadLeftSecond: function () {
            this.loadLeftSecond1();
            this.loadLeftSecond2();
            this.loadLeftSecond3();

            //左侧第1列第4个
            var optionL14 = {
                aniDom: "#left02_04",
                htmlDom: "#left_second_04",
                url: '',
                leftOrRight: 'left'
            }
            com.UIControlAni(optionL14, null);

        },
        //加载第二列的div1
        loadLeftSecond1: function () {
            var option = {
                aniDom: "#left02_01",
                htmlDom: "#left_second_01",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventStreet1.html'
            }
            com.UIControlAni(option, function () {
                require("sl_Street").loadJmBasicInfo();
            });
        },
        //加载第二列的div2
        loadLeftSecond2: function () {
            var option = {
                aniDom: "#left02_02",
                htmlDom: "#left_second_02",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventStreet2.html'
            }
            com.UIControlAni(option, function () {
                require("sl_Street").loadJmDroneData();
            });
        },
        //加载第二列的div3
        loadLeftSecond3: function () {
            $("#left_second_03").html("");
            //var option = {
            //    aniDom: "#left02_03",
            //    htmlDom: "#left_second_03",
            //    url: con.HtmlUrl + 'SocietyNew/Left_Second_EventStreet3.html'
            //}
            //com.UIControlAni(option, function () {
            //    require("sl_Street").loadJmXcyData();
            //    require("sl_IOT").Scrolldiv();
            //});
        },
        //街面基本信息
        loadJmBasicInfo: function () {
            s_EchartAjax.getJmBasicInfoData(function (result) {
                if (require("s_Echart").jmBasicInfoData == null) { return false; }
                var data = require("s_Echart").jmBasicInfoData;

                $("#jm_basicinfo_1").html(data.businessCount);
                $("#jm_basicinfo_2").html(data.eventsCount);
                $("#jm_basicinfo_3").html(data.streelength+'公里');
                $("#jm_basicinfo_4").html(data.owner);
            })
        },
        //街面无人机
        loadJmDroneData: function () {
            s_EchartAjax.getJmDroneData(function (result) {
                if (require("s_Echart").jmDroneData == null) { return false; }
                var data = require("s_Echart").jmDroneData;
                $("#jm_drone1>.item-r-data").html(data.flightNumber);
                $("#jm_drone2>.item-r-data").html(data.flightCount);
                $("#jm_drone3>.item-r-data").html(data.flightTime);
                //加载视频
                require("s_Main").loadStreetWrjVideo(con.WebServiceUrl + "/Content/video/CH2.flv")

            })
            s_EchartAjax.getVideoPic(function (result) {
            	if (require("s_Echart").videoPicData == null) { return false; }
            	var data = require("s_Echart").videoPicData;

            	for (var i = 0; i < data.length; i++) {
            	    if (data[i].eventType === "sharedRegion") {
            	        $("#StreetWrjPic").css({ background: "url(" + data[i].imageUrl + ")", backgroundSize: "100% 100%" });
            	    }
            	}
            });


        },

        //街面巡查员
        loadJmXcyData:function(){
            s_EchartAjax.getJmXcyData(function (result) {
                if (require("s_Echart").jmXcyData == null) { return false; }
                var data = require("s_Echart").jmXcyData;
                data = data.data.data;

                for(var i=0; i<data.length; i++){
                    $("#stree-xcy").append(
                        '<li class=\"sqzz-xcyxx-li\">'
                            + '<div class=\"item-l\"><img src=\"' + data[i].photoUrl + '\" style=\"height:1.4rem !important;\"></div>'
                            + '<div class="item-r" style=\"margin-top:.2rem;\">'
                                + '<ul class=\"sqzz-xcyxx-liul\">'
                                    + '<li><div>姓名：</div><span>' + data[i].inspectorName + '</span></li>'
                                    + '<li><div>单位：</div><span>' + data[i].belongCommunities + '</span></li>'
                                + '</ul>'
                            + '</div>'
                        + '</li>'
                    )
                }

            });
        },

        Revert: function () {
            this.clearStreetPOI();
            this.clearStreetLine();
        }
    }
})