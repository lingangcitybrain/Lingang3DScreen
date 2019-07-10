define(["config", "common", "s_layerMenuData", "s_Main", "s_EchartAjax"], function (con, com, s_layerMenuData, s_Main, s_EchartAjax) {
    /**************************************海岸线**************************************/
    return {
        //海岸线图层打开或关闭
        layerSeaboard: function () {
            this.Revert();
            this.createSeaboardLine();

            //Q3D.globalCamera().flyTo(("395745.0747468388,400.4260559082031,-3416851.1637498084").toVector3d(), ("-46.74321365356445,0.5860398411750793,0.615364134311676").toVector3(), 1, null);
            com.LayerFlyto(14)


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
        //loadLeftSecond: function () {
        //    var url = con.HtmlUrl + 'SocietyNew/Left_Second_EventSeaBoard.html';
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
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventSeaBoard1.html'
            }
            com.UIControlAni(option, function () {
                require("sl_SeaboardLine").loadRecentFlight();
            });
        },
        //加载第二列的div2
        loadLeftSecond2: function () {
            var option = {
                aniDom: "#left02_02",
                htmlDom: "#left_second_02",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventSeaBoard2.html'
            }
            com.UIControlAni(option, function () {
                require("sl_SeaboardLine").loadMonthlyRecentFlight();
            });
        },
        //加载第二列的div3
        loadLeftSecond3: function () {
            var option = {
                aniDom: "#left02_03",
                htmlDom: "#left_second_03",
                url: con.HtmlUrl + 'SocietyNew/Left_Second_EventSeaBoard3.html'
            }
            com.UIControlAni(option, function () {
                require("sl_SeaboardLine").loadCostlineTideData({ "page": 1, "rows": 10});
                require("sl_IOT").Scrolldiv();
            });
        },

        //海岸线无人机最近一次飞行统计
        loadRecentFlight: function () {
            s_EchartAjax.getRecentFlightData(function (result) {
                if (require("s_Echart").recentFlightData == null) { return false; }
                var data = require("s_Echart").recentFlightData;
                $("#recent-flight").html(data.coastDistance);
                $("#recent-flight-mess>li").eq(0).find("span").html(data.flightCount)
                $("#recent-flight-mess>li").eq(1).find("span").html(data.visitor + '%')
                $("#recent-flight-mess>li").eq(2).find("span").html(data.garbage)
                $("#recent-flight-mess>li").eq(3).find("span").html(data.stall)

                require("s_Main").loadRecentFlyVideo(data.url[0])
            });
        },

        //海岸线无人机最近一个月飞行统计
        loadMonthlyRecentFlight: function () {
            s_EchartAjax.getMonthlyRecentFlightData(function (result) {
                if (require("s_Echart").monthlyRecentFlightData == null) { return false; }
                var data = require("s_Echart").monthlyRecentFlightData;
                $("#recent-monthflight>li").eq(0).find("em").html(data.totalDistance)
                $("#recent-monthflight>li").eq(1).find("em").html(data.flightNumber)
                $("#recent-monthflight>li").eq(2).find("em").html(data.coastDistance)

                $("#recent-monthflight-mess>li").eq(0).find("span").html(data.flightCount)
                $("#recent-monthflight-mess>li").eq(1).find("span").html(data.visitor + '%')
                $("#recent-monthflight-mess>li").eq(2).find("span").html(data.garbage)
                $("#recent-monthflight-mess>li").eq(3).find("span").html(data.stall)

                require("s_Main").loadMonthlyRecentFlyVideo(data.url[0])

            });
        },


        //潮汐时间表
        loadCostlineTideData: function (post_data) {
            s_EchartAjax.getCostlineTideData(post_data, function (result) {
                if (require("s_Echart").costlineTideData == null) { return false; }
                var data = require("s_Echart").costlineTideData;
                data = data.data;

                for (var i = 0; i < data.length; i++) {
                    $("#costline-tide").append(
                        '<li class="sqzz-hax-lr3-li">'
                          + '<table cellpadding="0" cellspacing="0" class="table">'
                               + '<thead><tr><td>日期</td><td>退潮</td><td>涨潮</td></tr></thead>'
                               + '<tbody>'
                                   + '<tr><td rowspan="2"><div class="sqzz-hax-lr3-date">' + data[i].date.split("-")[2] + '</div></td><td>' + (data[i].lower[1]?data[i].lower[0]:"") + '</td><td>' + data[i].high[0] + '</td></tr>'
                                   + '<tr><td>' + (data[i].lower[1] ? data[i].lower[1] : data[i].lower[0]) + '</td><td>' + (data[i].high[1] ? data[i].high[1] : "") + '</td></tr>'
                               + '</tbody>'
                           + '</table>'
                        + '</li>'
                    )
                }
            });
        },


        Revert: function () {
            this.clearSeaboardLine();
        }
    }
})