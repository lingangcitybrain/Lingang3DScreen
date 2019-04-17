define(["config", "common"], function (con, com) {
    return {
        Trafficdetail_player: null,
        //交通仿真
        loadTrafficSimulation: function () {
            //com.ChangeLight(1) //实景

            //切换视口
            com.LayerFlyto(9, null, 2);
            require("tl_TrafficSimulation").loadCamera();
            //try {
            //    var areaname = "road_fangzhen";

            //    //加载空场景
            //    map.loadArea(areaname);

            //    //加载交通仿真数据
            //    DATACHANNEL.SetQMObj3D(map._map3d);

            //    DATACHANNEL.SetTcpServer("www.q-map.com.cn", 20002);
            //    DATACHANNEL.SetAreaName(areaname);

            //    DATACHANNEL.setRTMesh(1, "Mesh/car_jiaoche001.lodg");
            //    DATACHANNEL.setRTMesh(2, "Mesh/car_gongjiaoche001.lodg");
            //    DATACHANNEL.setRTMesh(3, "Mesh/car_chuzuche001.lodg");
            //    DATACHANNEL.setRTMesh(4, "Mesh/car_gongjiaoche002.lodg");
            //    DATACHANNEL.setMsg(0);

            //    DATACHANNEL.TcpStart();
            //} catch (e) {
            //}
        },
        //交通仿真清理
        clearTrafficSimulation: function () {
            try {
                DATACHANNEL.TcpStop();
            } catch (e) {
            }

            //map.unloadArea("road");
        },
        //加载交通仿真视频
        loadCamera: function () {
            this.closeCameraDetial();
            var url = con.HtmlUrl + 'TourNew/Bottom_TrafficCamera.html';
            require(['text!' + url], function (template) {
                $("#detail_tourplayer").html(template);
                $("#detail_tourplayer").show('slide', { direction: 'left' }, 500);
                var videowidth = $(".video-js").width();
                var videoheight = $(".video-js").height();
                //加载视频

                require(['aliplayer'], function (data) {
                    require("tl_TrafficSimulation").Trafficdetail_player = new Aliplayer({
                        "id": "bottom_cameradetail",
                        "source": con.WebServiceUrl + "/Content/video/交通示例模拟01.flv",
                        //"width": videowidth + "px",
                        //"height": videoheight + "px",
                        "autoplay": true,
                        "isLive": false,
                        "rePlay": true,
                        "showBuffer": true,
                        "snapshot": false,
                        "showBarTime": 5000,
                        "useFlashPrism": true,
                        "mediaType": "audio"

                    }, function (player) {
                        //加载成功,清空错误提示
                        $(".prism-ErrorMessage").empty();
                    })
                });
            });
        },
        closeCameraDetial: function () {
            if (require("tl_TrafficSimulation").Trafficdetail_player) {
            require("tl_TrafficSimulation").Trafficdetail_player.loadByUrl("");
                require("tl_TrafficSimulation").Trafficdetail_player.dispose();
                require("tl_TrafficSimulation").Trafficdetail_player = null;
            }
            $("#detail_tourplayer").html("");
        },
        //清空
        Revert: function () {

            require("tl_TrafficSimulation").closeCameraDetial();
            require("tl_TrafficSimulation").clearTrafficSimulation();
        }
    }
})