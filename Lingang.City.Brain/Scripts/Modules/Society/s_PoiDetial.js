define(["config", "common"], function (con, com) {
    return {
        //加载摄像头详情信息
        loadCameraDetial: function ()
        {

            $("#detail_01").show();
            var vlc = document.getElementById("vlc");
            //var videourl = "http://47.100.165.10/videoGetStream/103.214.87.69:11937/citybrain/31011900081316001159.flv?vhost=cb.alivecdn.com"
            var videourl = "http://106.14.152.119:8082/videoGetStream/103.214.87.67:11937/citybrain/31011900011328037014.flv?vhost=cb.alivecdn.com"
           
            vlc.playlist.add(videourl);// 添加播放地址
            vlc.playlist.play(); // 播放


            $("#bj_video").hide();
            $("#bj_video").show('drop', 1000);  


            //var url = con.HtmlUrl + 'Society/VideoTest.html?ver='+Math.random();
            //require(['text!' + url], function (template) {
            //    $("#detail_01").html(template);
            //    $("#detail_01").show('slide', { direction: 'left' }, 500);
            //    $("#bj_video").hide();
            //    $("#bj_video").show('drop', 800);                
            //})
        },
        //
        closeCameraDetial: function ()
        {
            var vlc = document.getElementById("vlc");
            vlc.playlist.stop(); // 播放
            $("#detail_01").hide();
        },
        Revert: function () {
            this.closeCameraDetial();
        },

    }
})