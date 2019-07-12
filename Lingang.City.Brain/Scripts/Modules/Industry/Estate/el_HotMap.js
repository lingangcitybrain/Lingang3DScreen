define(["config", "common"], function (con, com) {
    /****************************人员分布热力图图层****************************/
    return {
        freeParkData: [],//园区数据
        nodeFollowingPath: [],//节点跟随路径
        detailWindowId: 0,//当前窗口id
        //加载人员分布热力图
        loadHotMap:function()
        {
            //require('tl_VisitorsMap').loadVisitorsMap();
            com.LayerFlyto(18);
            require("el_HotMap").loadFlowRateBar();
        },
        //清空
        Revert: function () {
            //require('tl_VisitorsMap').Revert();
            this.closeParkDetailWindow();
        },
        PassengerFlowRate: [
            { "id": 1, "name": "海洋科创区", "lng": "121.875375", "lat": "30.864058", "nm": "pfr01", "height": 200, "xyz": "394467.431640,-0.023651,-3417319.670220" },
            { "id": 2, "name": "装备制造区", "lng": "121.813723", "lat": "30.872233", "nm": "pfr02", "height": 700, "xyz": "396033.298401,0.719513,-3417706.279595" },
            { "id": 3, "name": "国际未来城", "lng": "121.931142", "lat": "30.915337", "nm": "pfr03", "height": 500, "xyz": "395306.046997,-0.018524,-3418583.476128" },
            //{ "id": 4, "name": "", "nm": "pfr04", "height": "40", "xyz": "499643.4884643549,-1.5000762939453125,-2560646.696472168" },
            //{ "id": 5, "name": "", "nm": "pfr05", "height": "100", "xyz": "499556.8154907221,-1.5001373291015625,-2560582.9660949707" },            
        ],
        loadFlowRateBar: function () {
            var data = require("el_HotMap").PassengerFlowRate;
            this.freeParkData=data;
            for (var i = 0; i < data.length; i++) {
                require("el_HotMap").createFlowRateBar(data[i]);
            }
        },

        createFlowRateBar: function (data) {
            var nodePath = con.AreaName + '/' + data.nm;
            var poiName = con.AreaName + '/poi_' + data.nm;
            var pos = data.lng + "," + data.lat + ",0";
            var pos = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(con.AreaName));
            var node = map.getSceneNode(nodePath);
            if (node) {
                node.setVisible(1);
            } else {


                var option = {
                    Material: ["Material/earth.mtr", "Material/Default.mtr", "Material/moon.mtr"],//null, //设置圆柱底面、立面、顶面三个材质，如果只有一个设置成相同的数值
                    SpecialTransparent: true, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                    Color: Q3D.colourValue("#0000FF", 1), //颜色材质使用的颜色
                    Alpha: 1, //颜色材质使用的透明度
                    Center: pos, //底面中心坐标 Vector3        
                    Anchor: null,//顶面中心坐标 Vector3，非垂直情况下可设置
                    Radius: 80, //半径
                    Height: parseInt(data.height * 20),//1000,//高度
                    Pieces: 360, //设置生成圆面的面个数    
                    OnCylinderCreated: function () {//加载结束回调
                       
                    },

                }

                map.createCylinder(nodePath, option);

            }

            //创建窗口信息显示
            require("el_HotMap").loadParkDetailWindow(nodePath, data.id);
            for (var i = 1; i <= data.height; i++) {
                require("el_HotMap").setHeightAni({ 'node': nodePath, 'poi': poiName, 'pos': data.lng + "," + data.lat + ",0" }, i);
            }
        },

        setHeightAni: function (v, h) {
            setTimeout(function () {
                var pos = v.pos.split(',');
                var height = parseFloat(pos[2]) + h;
                //var pos = (pos[0] + ',' + height.toString() + ',' + xyz[2]).toVector3d().toLocalPos(con.AreaName);
                var pos = Q3D.vector3((pos[0] + ',' + pos[1] + ',' + height.toString()).toGlobalVec3d().toLocalPos(con.AreaName));
                if (h > 100 && h < 150) {
                    map.getSceneNode(v.node).asVecModel().getMaterial(0).setDiffuseColor(Q3D.colourValue("#fcfc00", 1).revise().get());
                }
                else if (h > 150) {
                    map.getSceneNode(v.node).asVecModel().getMaterial(0).setDiffuseColor(Q3D.colourValue("#ff0000", 1).revise().get());
                }

                map.getSceneNode(v.node).asVecModel().getVecModel().asCylinder().setHeight(h);
                //map.getSceneNode(v.poi).asPoi().setText(h);
                //map.getSceneNode(v.poi).setPosition(pos);
            }, 50 * h);
        },
        loadParkDetailWindow: function (nodeName, pid) {
            var data = null;
            require("el_HotMap").freeParkData.forEach(function (e) {
                if (e.id == pid) {
                    data = e;
                }
            });

            var url = con.HtmlUrl + 'Industry/Estate/ParkDetail.html';

            require("el_HotMap").detailWindowId = require("el_HotMap").detailWindowId + 1;
            var domWinName = 'detail_' + require("el_HotMap").detailWindowId;

            require(['text!' + url], function (template) {
                $("#" + domWinName).show();
                $("#" + domWinName).html(template);

                require("el_HotMap").openWinDetail(domWinName, data);

            });

            var nodePath = nodeName;
            var nodeObject = { "nodePath": nodePath, "nodeDom": domWinName };

            require("el_HotMap").nodeFollowingPath.push(nodeObject);

            map.enableNodeFollowing(nodePath, function (node, v2i) {
                require("el_HotMap").nodeFolowing(node, v2i);
            });
        },
        nodeFolowing: function (node, v2i) {
            require("el_HotMap").nodeFollowingPath.forEach(function (e) {
                if (node.getFullName() == e.nodePath) {
                    document.getElementById(e.nodeDom).style.left = v2i.x + "px";
                    document.getElementById(e.nodeDom).style.top = v2i.y - 100 + "px";
                }
            });
        },
        openWinDetail: function (domWinName, data) {
            var html = '<div class="poi-box-num2"  style="z-index:980; pointer-events: none;">'+
                            '<div class="poi-box-num-value">' + data.height + '</div>' +
                            '<div class="poi-box-num-text">'+data.name+'</div>' +
                        '</div>';

            $("#" + domWinName).html(html);
        },
        closeParkDetailWindow: function () {
            var currentWinId = require("el_HotMap").detailWindowId;

            while (currentWinId > 0) {
                var domDetail = $("#detail_" + currentWinId);
                domDetail.empty();
                domDetail.hide();
                currentWinId = currentWinId - 1;
            }

            require("el_HotMap").detailWindowId = 0;

            require("el_HotMap").nodeFollowingPath.forEach(function (e) {
                map.disableNodeFollowing(e.nodePath, true);
            });

            require("el_HotMap").nodeFollowingPath = [];
        },
    }
})