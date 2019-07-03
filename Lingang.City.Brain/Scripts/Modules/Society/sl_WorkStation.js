define(["config", "common", "s_layerMenuData"], function (con, com, s_layerMenuData) {
    /**************************************村居工作站**************************************/
    return {
        LayerType: null,//选择传感器
        POIData: null,//POI详情数据
        LastPOI_Clk: null,//鼠标选中POI
        WorkStationDetailData:null,
        freeWorkStationData: [],//停车场数据
        nodeFollowingPath: [],//节点跟随路径
        detailWindowId: 0,//当前窗口id
        //加载村居工作站POI
        loadWorkStation: function () {
            this.Revert();
            this.LayerType = require("s_Main").LayerCatalog.WorkStation;
            //this.POIData = s_layerMenuData.WorkStationData;

            //Q3D.globalCamera().flyTo(("395687.1677625096,257.72499084472656,-3416907.1926804725").toVector3d(), ("-36.82597732543945,-2.9202616214752197,-2.19104266166687").toVector3(), 1, null);
             com.LayerFlyto(13)
            //村居工作站数据
             require("s_LayerMenuAjax").getWorkStationList(function (result) {
                 require("sl_WorkStation").freeWorkStationData = result;

                 require("sl_WorkStation").loadParkingLotPOI();
             })

        },
        loadParkingLotPOI:function(){
            var areaName = con.AreaName;
            var icon = require("sl_WorkStation").LayerType.UnChooseIcon;
            var iconSize = Q3D.vector2(41, 45);

            for (var i = 0; i < require("sl_WorkStation").POIData.length; i++) {
                var row = require("sl_WorkStation").POIData[i];
                var Coordinate = com.gcj02towgs84(parseFloat(row.lat), parseFloat(row.lng));//高德坐标转84坐标
                var pos = Coordinate + ",0";
                var position = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaName));

                var poiName = "POISociety" + require("sl_WorkStation").LayerType.Name + "_" + row.siteName;//POIIOT_01
                //创建POI
                var options = {
                    Position: position,//封装Vector3对象
                    Orientation: null,//封装Vector3对象
                    OrientationType: Q3D.Enums.nodeOrientationType.Self,
                    Scale: Q3D.vector3(1, 1, 1),//封装Vector3对象
                    POIOptions: {
                        FontSize: 14,
                        FontName: "微软雅黑",
                        FontColor: Q3D.colourValue("#00caca", 1),//封装ColourValue对象
                        CharScale: 1.0,
                        Text: "",
                        Icon: icon,
                        IconSize: iconSize,//封装Vector2对象
                        POILayout: Q3D.Enums.poiLayOut.Bottom,
                        POILayoutCustom: null,	//支持负数，取值0相当于LeftTop，1.0相当于LeftBottom，0.5相当于Left；只对POILayout为LeftCustom、TopCustom、RightCustom、BottomCustom时有效
                        UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
                        IconAlphaEnabled: true,
                        FontOutLine: 0, //同描边有关
                        FontEdgeColor: Q3D.colourValue("#000000", 1),//封装ColourValue对象
                        AlphaTestRef: null,
                        Location: Q3D.Enums.poiImagePositionType.POI_LOCATE_BOTTOM,
                        LocationOffset: null, //当Location为POI_LOCATE_CUSTOM起作用，封装Vector2对象
                        BackFrameBorderSize: null, //同边框有关
                        BackBorderColor: null,//封装ColourValue对象
                        BackFillColor: null,//封装ColourValue对象
                        LabelMargin: null,//封装Vector2对象
                        IconLabelMargin: null,//封装Vector2对象，左右布局X分量有效，上下布局的Y分量有效
                        SpecialTransparent: true,
                        AlwaysOnScreen: true,
                        AbsPriority: null,
                        RelPriority: null,
                    },
                    OnLoaded: function () {//加载结束回调
                        //创建窗口信息显示
                        require("sl_WorkStation").loadWorkStationDetailWindow(poiName, row.siteName);
                    },
                }
                map.createPOI(areaName + "/" + poiName, options)
            }
        },

        loadWorkStationDetailWindow: function (nodeName, siteName) {
            var data = null;
            require("sl_WorkStation").freeWorkStationData.forEach(function (e) {
                if (e.siteName == siteName) {
                    data = e;
                }
            });

            var url = con.HtmlUrl + 'SocietyNew/Bottom_WorkStationDetail.html';

            require("sl_WorkStation").detailWindowId = require("sl_WorkStation").detailWindowId + 1;
            var domWinName = 'detail_' + require("sl_WorkStation").detailWindowId;

            require(['text!' + url], function (template) {
                $("#" + domWinName).show();
                $("#" + domWinName).html(template);

                require("sl_WorkStation").openWinDetail(domWinName, data);

            });

            var nodePath = con.AreaName + '/' + nodeName;
            var nodeObject = { "nodePath": nodePath, "nodeDom": domWinName };

            require("sl_WorkStation").nodeFollowingPath.push(nodeObject);

            map.enableNodeFollowing(nodePath, function (node, v2i) {
                require("sl_WorkStation").nodeFolowing(node, v2i);
            });
        },
        nodeFolowing: function (node, v2i) {
            require("sl_WorkStation").nodeFollowingPath.forEach(function (e) {
                if (node.getFullName() == e.nodePath) {
                    document.getElementById(e.nodeDom).style.left = v2i.x + "px";
                    document.getElementById(e.nodeDom).style.top = v2i.y - 100 + "px";
                }
            });
        },
        openWinDetail: function (domWinName, data) {
            var workName = '';
            this.WorkStationDetailData = require("s_layerMenuData").WorkStationDetailData.list;

            var html = "";
            for (var i = 0; i < require("sl_WorkStation").WorkStationDetailData.length; i++) {
                var row = require("sl_WorkStation").WorkStationDetailData[i];
                if (data.siteName == row.name)
                {
                    html += '<div class=\"poi-box poi-box1\" style=\"z-index:980; width: 4rem;\">'
                     + '<div class=\"poi-title\">' + row.name + '</div>'
                     + '<div class=\"poi-cont\">'
                     + '<ul class=\"poi-ul\">'
                     + '<li class=\"poi-li\"><i>' + row.address + '</i></li>'
                     + '<li class=\"poi-li\"><span>联系电话：</span><em><i>' + row.tel + '</i></em></li>'
                     + '<li class=\"poi-li\"><span>服务时间：</span><em><i>' + row.servicetime + '</i></em></li>'
                     + '</ul>'
                     + '</div>'
                     + '</div>';
                }
            }
            $("#" + domWinName).html(html);
        },
        closeWorkStationDetailWindow: function () {
            var currentWinId = require("sl_WorkStation").detailWindowId;

            while (currentWinId > 0) {
                var domDetail = $("#detail_" + currentWinId);
                domDetail.empty();
                domDetail.hide();
                currentWinId = currentWinId - 1;
            }

            require("sl_WorkStation").detailWindowId = 0;

            require("sl_WorkStation").nodeFollowingPath.forEach(function (e) {
                map.disableNodeFollowing(e.nodePath, true);
            });

            require("sl_WorkStation").nodeFollowingPath = [];
        },

        //村居工作站点击事件
        loadWorkStationDetial: function (nodeName) {
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
        //清空村居工作站POI
        clearWorkStationPOI: function () {
            var data = this.POIData;
            var areaName = con.AreaName;
            //设置POI隐藏
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    var name = this.LayerType.Name;

                    var poiname = "POISociety" + name + "_" + data[i].siteName;
                    var node = map.getSceneNode(areaName + "/" + poiname);
                    if (node) {
                        map.getArea(areaName).destroySceneNode(poiname);
                    }

                    /*详情*/
                    var fullNodePath = areaName + "/PoiWorkStationInfo" + data[i].id;
                    if (map.getSceneNode(fullNodePath)) {
                        map.getArea(areaName).destroySceneNode(fullNodePath);
                    }
                }
                this.LayerType = null;
                this.POIData = null;
            }

        },

        //加载第二列的div
        loadLeftSecond: function () {
            var url = con.HtmlUrl + 'SocietyNew/Left_Second_EventWorkStation.html';
            require(['text!' + url], function (template) {
                $("#left_second_01").html(template);

                require("sl_IOT").loadSocietyCarchart();
            })
        },

        Revert: function () {
            this.clearWorkStationPOI();
            this.closeWorkStationDetailWindow();
        }
    }
})