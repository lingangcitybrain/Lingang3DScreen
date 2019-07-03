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

            Q3D.globalCamera().flyTo(("395811.04410528304,286.2732696533203,-3416789.683830375").toVector3d(), ("-31.37611198425293,8.757302284240722,5.298542022705078").toVector3(), 1, null);


            var areaName = con.AreaName;
            var icon = this.LayerType.UnChooseIcon;
            var pois = [];
            for (var i = 0; i < this.POIData.length; i++) {
                var row = this.POIData[i];
                var poiName = "POISociety" + this.LayerType.Name + "_" + row.id;//POIIOT_01
                var iconSize = Q3D.vector2(41, 45);
                var pos = row.pos;
                var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

                var poi = { POIName: poiName, Position: position, Text: "", Icon: icon, IconSize: iconSize };
                pois.push(poi);
            }
            com.InitPois(areaName, pois);

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
        clearWorkSitePOI: function () {
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
            this.loadLeftSecond4();
        },
        //加载第二列的div1
        loadLeftSecond1: function () {
            var option = {
                aniDom: "#left02_01",
                htmlDom: "#left_second_01",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventWorkSite1.html'
            }
            com.UIControlAni(option, function () {
                require("sl_WorkSite").loadWorkSiteBuilderData();
            });
        },
        //加载第二列的div2
        loadLeftSecond2: function () {
            var option = {
                aniDom: "#left02_02",
                htmlDom: "#left_second_02",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventWorkSite2.html'
            }
            com.UIControlAni(option, function () {
                require("sl_WorkSite").loadWorkSiteWrjData();

            });
        },
        //加载第二列的div3
        loadLeftSecond3: function () {
            var option = {
                aniDom: "#left02_03",
                htmlDom: "#left_second_03",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventWorkSite3.html'
            }
            com.UIControlAni(option, function () { return null });
            // com.UIControlAni(option, function () { require("sl_IOT").loadCirclediv(); });
        },
        //加载第二列的div4
        loadLeftSecond4: function () {
            var option = {
                aniDom: "#left02_04",
                htmlDom: "#left_second_04",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventWorkSite4.html'
            }
            com.UIControlAni(option, function () {
            	require("sl_WorkSite").loadGdXcyData({id:1});
                require("sl_IOT").Scrolldiv();
            });
        },

        //工地施工单位
        loadWorkSiteBuilderData: function () {
            s_EchartAjax.getWorkSiteBuilderData(function (result) {
                if (require("s_Echart").workSiteBuilderData == null) { return false; }
                var data = require("s_Echart").workSiteBuilderData;
                data = data[0];

                $("#worksite_startTime").html(data.startTime.replace(data.startTime.slice(4, 6), "-" + data.startTime.slice(4, 6) + "-"))
                $("#worksite_builder").html(data.builder)
                $("#worksite_usefor").html(data.usage)

            });
        },

        //工地无人机
        loadWorkSiteWrjData: function () {
            s_EchartAjax.getWorkSiteWrjData(function (result) {
                if (require("s_Echart").workSiteWrjData == null) { return false; }
                var data = require("s_Echart").workSiteWrjData;
                data = data.data.communityDetail;

                $("#worksite_wrj_flightCounts").html(data.flightCounts);
                $("#worksite_wrj_eventCounts").html(data.eventCounts);
                $("#worksite_wrj_communityCarNums").html(data.communityCarNums.replace("h", ""));
                $("#worksite_wrj_communityGrade").html(data.communityGrade.replace("(m2)", ""));

                require("s_Main").loadWorkSiteWrjVideo("https://vku.youku.com/live/ilpshare?id=8018484")

            });
        },

        //工地天气预报
        loadWorkSiteWeatherData: function () {
            s_EchartAjax.getWorkSiteWeatherData(function (result) {
                if (require("s_Echart").workSiteWeatherData == null) { return false; }
                var data = require("s_Echart").workSiteWeatherData;
                data = data.list;

                $("#worksite-weather")

            });
        },

        //工地巡查员
        loadGdXcyData: function (post_data) {
        	s_EchartAjax.getWorkSiteInspectorData(post_data, function (result) {
        		if (require("s_Echart").workSiteInspectorData == null) { return false; }
                var data = require("s_Echart").workSiteInspectorData;
                for(var i=0; i<data.length; i++){
                    $("#worksite-xcy").append(
                        '<li class=\"sqzz-xcyxx-li\">'
                           + '<div class=\"item-l\"><img src=\"' + data[i].photoUrl + '\" style=\"width:1.4rem !important; height:1.7rem !important;\"></div>'
                           + '<div class=\"item-r\">'
                               + '<ul class=\"sqzz-xcyxx-liul\">'
                                   + '<li><div>接单员：</div><span>' + data[i].inspectorName + '</span></li>'
                                   + '<li><div>性&nbsp;别：</div><span>' + data[i].sex + '</span></li>'
                                   + '<li><div>职&nbsp;位：</div><span>' + data[i].position + '</span></li>'
                               + '</ul>'
                           + '</div>'
                       + '</li>'
                    )
                }
            });
        },



        Revert: function () {
            this.clearWorkSitePOI();
        }
    }
})