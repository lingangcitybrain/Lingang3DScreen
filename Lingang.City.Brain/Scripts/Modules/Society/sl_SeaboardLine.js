define(["config", "common", "s_layerMenuData", "s_Main"], function (con, com, s_layerMenuData,s_Main) {
    /**************************************海岸线**************************************/
    return {
        //海岸线图层打开或关闭
        layerSeaboard: function () {
            this.Revert();
            this.createSeaboardLine();

            //Q3D.globalCamera().flyTo(("395745.0747468388,400.4260559082031,-3416851.1637498084").toVector3d(), ("-46.74321365356445,0.5860398411750793,0.615364134311676").toVector3(), 1, null);
            require("mainMenu").LayerFlyto(14)


            //if (require("s_LayerMenu").layer_seaboard == false) {
            //    require("s_LayerMenu").createSeaboardLine()
            //    require("s_LayerMenu").layer_seaboard = true;
            //} else {
            //    require("s_LayerMenu").lineSeaboardSet(0);
            //    require("s_LayerMenu").layer_seaboard = false;
            //}
        },
        //创建海岸线
        createSeaboardLine: function () {
            var points = s_layerMenuData.seaboardlinePoints;
            var besselPoints = new Array()
            var AreaName = con.AreaName;  //"cs2"

            //画连接线
            for (var i = 0; i < points.length; i++) {
                var coordinate = points[i]
                var lng = parseFloat(coordinate.split(",")[0])
                var lat = parseFloat(coordinate.split(",")[1])
                var hgt = parseFloat(coordinate.split(",")[2])
                var position = Q3D.globalVec3d(lng, lat, hgt).toGlobalPos();

                var point = Q3D.vector3(Q3D.globalVec3d(lng, lat, hgt).toLocalPos(AreaName))
                besselPoints.push(point)
            }


            var linname = "seaboardline"
            var nodePath = AreaName + "/" + linname;

            var createOptions = {
                Material: "Material/linered.mtr",
                SpecialTransparent: true, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                LinePoints: [besselPoints], //一维数组,由Vector3坐标组成
                OffsetDist: [],//偏移距离，单位米，用于贝塞尔曲线的控制点计算
                LineOptions: {
                    Subdivision: 20, //设置生成曲线细分程度
                    LineWidth: 10,
                    WrapLen: 10,
                    //以下用于动态创建的材质
                    Color: Q3D.colourValue("#0000FF", 1), //线的颜色
                    Alpha: 1, //线的透明度
                },
                OnLineCreated: null
            }

            var linenode = map.getSceneNode(AreaName, linname)
            if (linenode) {
                //map.destroySceneNode(AreaName, linname)
                this.lineSeaboardSet(1);
            } else {
                map.createPolyLine(nodePath, createOptions);
            }
        },
        //海岸线显示隐藏或显示
        lineSeaboardSet: function (flag) {
            var linname = "seaboardline";
            var node = map.getSceneNode(con.AreaName, linname)
            if (node) {
                node.setVisible(flag)
            }
        },
        //清除海岸线
        clearSeaboardLine: function () {
            var linname = "seaboardline"
            var node = map.getSceneNode(con.AreaName, linname)
            if (node) {
                map.destroySceneNode(con.AreaName, linname);
            }
        },

        //加载第二列的div
        loadLeftSecond: function () {
            var url = con.HtmlUrl + 'SocietyNew/Left_Second_EventSeaBoard.html';
            require(['text!' + url], function (template) {
                $("#left_second_01").html(template);


            })
        },

        Revert: function () {
            this.clearSeaboardLine();
        }
    }
})