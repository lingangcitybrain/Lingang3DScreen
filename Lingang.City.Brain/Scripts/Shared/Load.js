define(["config", 'common', "util", "reset", 'mevent', "specialEff", "mainMenu", "s_Main", "t_Main", "e_Main", "g_Main", "b_Main", "iPad", "mainJsLoad"],
    function (config, com, util, reset, mevent, specialEff, mainMenu, s_Main, t_Main, e_Main, g_Main, b_Main, iPad, mainJsLoad) {

        return {
            Onload: function () {
                this.pageStyle();  //大屏下设置

                //鼠标事件
                mevent.init();

                //三维设置不休眠
                map.getOcx().setHibernateTime(0);

                //远近裁面
                mapObj._map3d.getWorldManager().getMainCamera(0).setFarClipDistance(20000);
                mapObj._map3d.getWorldManager().getMainCamera(0).setNearClipDistance(5);

                //加载夜光模式   
                this.loadNightModel();


                //飞到一个最佳视口
                Q3D.globalCamera().flyTo(config.ViewPos.toVector3d(), config.ViewOri.toVector3(), 1, null);


                //时钟
                setInterval(com.Clock, 1000);

                //获取天气
                WeatherFromInternet();
                
                //获取默认视口数据，与ipad共用
                iPad.getDefaultLayerView();

                //更新热力图数据
                require('tl_VisitorsMap').updateHeatMapData();

                //加载主页面上的元素
                setTimeout(function () {
                    mainMenu.loadMenu(); //1 社区综治 2旅游大客流 3 产业
                    mainJsLoad.loadJs();
                }, 1000);
            },

            //加载夜光模式
            loadNightModel: function () {
               //生成容器
               specialEff.loadNightContainer(); //加载夜景容器
               specialEff.loadDayContainer(); //加载白天容器

                //创建从白天黑夜切换的动画
                specialEff.createDayToNightMovieClip();
                specialEff.createNightToDayMovieClip();

                //夜光效果
                specialEff.nighttime();
            },
            //大屏下设置
            pageStyle:function()
            {
                if ($(".wrapperbox").width() == 11520) {
                   // $("html").css({ fontSize: "160px" });
                }
            }
        };
    })