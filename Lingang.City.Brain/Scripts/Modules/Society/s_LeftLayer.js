define(["config", "common", "util"], function (con, com, util) {
    /**************************************左侧侧显示图层**************************************/
    return {
        camera01_player: null,
        camera02_player: null,
        camera03_player: null,
        left02_video01: null,
        left02_video01: null,
        left02_video01: null,
        loadLeftHtml: function () {
            this.Revert();
            var url = con.HtmlUrl + 'Society/Left01_Container.html';
            require(['text!' + url], function (template) {
                $("#left_01").html(template);
                $("#left_01").show('drop', 1000);//左侧

                require("s_LeftLayer").loadCameraUrl();
            })
        },
        loadLeft2Html: function () {
            var url = con.HtmlUrl + 'Society/Left02_Container.html';
            require(['text!' + url], function (template) {
                $("#left_02").html(template);
                $("#left_02").show('drop', 1000);//左侧
                ;
            })
        },
        //摄像头轮循列表
        loadCameraList: function () {
            $("#left_CamearList").hide();
            var url = con.HtmlUrl + 'Society/L_CameraList.html';
            require(['text!' + url], function (template) {
                $("#left_CamearList").html(template);
                $("#left_CamearList").slideDown("fast");
                $("#left_CamearList").stop().animate({ right: "0px" }, 300);


            })
        },
        //给摄像头赋值
        loadCameraUrl: function () {
            var videowidth = $(".sxt-videoli").width();
            var videoheight = $(".sxt-videoli").height();
            if (require("s_LeftLayer").left02_video01) { require("s_LeftLayer").left02_video01.dispose(); }
            if (require("s_LeftLayer").left02_video02) { require("s_LeftLayer").left02_video02.dispose(); }
            if (require("s_LeftLayer").left02_video03) { require("s_LeftLayer").left02_video03.dispose(); }
            $("#left02_video01").empty();
            require(['aliplayer'], function (data) {
                require("s_LeftLayer").left02_video01 = new Aliplayer({
                    "id": "left01_video01",
                    "source": "http://106.14.152.119:8082/videoGetStream/103.214.87.67:11937/citybrain/31011900011328031001.flv?vhost=cb.alivecdn.com",
                    "width": videowidth + "px",
                    "height": videoheight + "px",
                    "autoplay": true,
                    "isLive": true,
                    "rePlay": false,
                    "showBuffer": true,
                    "snapshot": false,
                    "showBarTime": 5000,
                    "useFlashPrism": true,

                }, function (player) {
                    //加载成功,清空错误提示
                    $(".prism-ErrorMessage").empty()
                })
                require("s_LeftLayer").left02_video02 = new Aliplayer({
                    "id": "left01_video02",
                    "source": "http://106.14.152.119:8082/videoGetStream/103.214.87.67:11937/citybrain/31011900011328031001.flv?vhost=cb.alivecdn.com",
                    "width": videowidth + "px",
                    "height": videoheight + "px",
                    "autoplay": true,
                    "isLive": true,
                    "rePlay": false,
                    "showBuffer": true,
                    "snapshot": false,
                    "showBarTime": 5000,
                    "useFlashPrism": true,

                }, function (player) {
                    $(".prism-ErrorMessage").empty()
                })
                require("s_LeftLayer").left02_video03 = new Aliplayer({
                    "id": "left01_video03",
                    "source": "http://106.14.152.119:8082/videoGetStream/103.214.87.67:11937/citybrain/31011900011328031001.flv?vhost=cb.alivecdn.com",
                    "width": videowidth + "px",
                    "height": videoheight + "px",
                    "autoplay": true,
                    "isLive": true,
                    "rePlay": false,
                    "showBuffer": true,
                    "snapshot": false,
                    "showBarTime": 5000,
                    "useFlashPrism": true,

                }, function (player) {
                    $(".prism-ErrorMessage").empty()
                });
            });
        },
        //产生随机数函数
        RndNum: function (n) {
            var rnd = "";
            for (var i = 0; i < n; i++)
                rnd += Math.floor(Math.random() * 10);
            return rnd;
        },
        Revert: function () {
            if (require("s_LeftLayer").left02_video01) { require("s_LeftLayer").left02_video01.dispose(); }
            if (require("s_LeftLayer").left02_video02) { require("s_LeftLayer").left02_video02.dispose(); }
            if (require("s_LeftLayer").left02_video03) { require("s_LeftLayer").left02_video03.dispose(); }
        }
    }
});