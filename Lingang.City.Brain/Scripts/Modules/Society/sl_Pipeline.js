define(["config", "common", "s_layerMenuData", "s_Main", "s_EchartAjax"], function (con, com, s_layerMenuData, s_Main, s_EchartAjax) {
    /**************************************海岸线**************************************/
    return {
        isOpenedPipeline: false,
        openPipeline: function () {
            this.Revert();
            this.displayPipeline();
            com.LayerFlyto(29);
        },

        displayPipeline: function () {
            var terrainMgr = map.getOcx().getTerrainManager();
            if (con.currStatus == 1) { //夜景
                // map.getSceneNode('beijing/beijing_shuimian').setVisible(0);
                // map.getSceneNode('beijing/beijing_dikuai').setVisible(0);
                // map.getSceneNode('beijing/beijing_luwang').setVisible(0);
                // map.unloadArea("beijing");
                // map.unloadArea("faguangdongxian");

                var container = Q3D.nodeContainer("pipeContainer");
                container.addSceneNodeFromArea("beijing");
                container.addSceneNodeFromArea("faguangdongxian");
                container.setTargetVal(Q3D.Enums.nodeContainerType.Visible, 0, Q3D.Enums.materialApplyMode.Replace);                 
                terrainMgr.setTransparency("lgbig_version_1", 0.8);

            } else if (con.currStatus == 0) { //日景
                terrainMgr.hideTerrain("osgb_version_1");
                terrainMgr.hideTerrain("new_gaoqing_version_1");
                terrainMgr.hideTerrain("pudong_version_1");
                terrainMgr.setTransparency("lgbig_version_1", 0.8);
            }
            require('sl_Pipeline').isOpenedPipeline = true;
            // require('sl_Pipeline').startSectionAnalyst();
            mapObj._map3d.getWorldManager().enableAreaAutoLoad(1); //打开管线调度
        },

        hidePipeline: function(){
            var terrainMgr = map.getOcx().getTerrainManager();
            if (con.currStatus == 1) { //夜景
                // map.getSceneNode('beijing/beijing_shuimian').setVisible(1);
                // map.getSceneNode('beijing/beijing_dikuai').setVisible(1);
                // map.getSceneNode('beijing/beijing_luwang').setVisible(1);
                // map.loadArea("beijing");
                // map.loadArea("faguangdongxian");

                var container = Q3D.nodeContainer("pipeContainer");
                container.addSceneNodeFromArea("beijing");
                container.addSceneNodeFromArea("faguangdongxian");
                container.setTargetVal(Q3D.Enums.nodeContainerType.Visible, 1, Q3D.Enums.materialApplyMode.Replace);
                terrainMgr.setTransparency("lgbig_version_1", 1);    
            }

            if(require('sl_Pipeline').isOpenedPipeline == true && con.currStatus == 0){    
                terrainMgr.showTerrain("osgb_version_1");
                terrainMgr.showTerrain("new_gaoqing_version_1");
                terrainMgr.showTerrain("pudong_version_1");
                terrainMgr.setTransparency("lgbig_version_1", 1);                
            }

            require('sl_Pipeline').isOpenedPipeline = false;      
            // require('sl_Pipeline').endSectionAnalyst();      
            mapObj._map3d.getWorldManager().enableAreaAutoLoad(0); //关闭管线调度
        },

        //开始剖面分析
        startSectionAnalyst: function(){
            //隐藏除管线外的其他场景
            if (con.currStatus == 1) { //夜景
                map.unloadArea("yiqi_baimo");
                map.unloadArea("hcy_baimo");
                map.unloadArea("erqi_baimo");
                map.unloadArea("faguangdongxian");
                map.unloadArea("xiankuang");
            }
            else if (con.currStatus == 0) { //日景

            }
            map.unloadArea("yiqi_baimo");
            map.unloadArea("hcy_baimo");
            map.unloadArea("erqi_baimo");
            map.unloadArea("faguangdongxian");
            map.unloadArea("xiankuang");
            map.unloadArea("heiditu");
            //map.unloadArea("light_hdr");
            map.unloadArea("donghaidaqiao");
            map.unloadArea("gwh_xilou");
            map.unloadArea("gwh_d_def");            
            map.unloadArea("gwh_d_abc");
            //map.unloadArea("beijing");            
            //map.unloadArea("light_yeguang");

            mapObj._map3d.getWorldManager().enableAreaAutoLoad(1); //打开管线调度

            require('sl_Pipeline').drawSectionAnalyst();
            map.getSceneNode('$_analyst_area_/AnalystGroup').setVisibleDerived(1);
        },

        //结束剖面分析
        endSectionAnalyst: function () {
            //显示除管线外的其他场景
            if (con.currStatus == 1) { //夜景
                map.loadArea("yiqi_baimo");
                map.loadArea("hcy_baimo");
                map.loadArea("erqi_baimo");
                map.loadArea("faguangdongxian");
                map.loadArea("xiankuang");
            }
            else if (con.currStatus == 0) { //日景

            }
            map.loadArea("yiqi_baimo");
            map.loadArea("hcy_baimo");
            map.loadArea("erqi_baimo");
            map.loadArea("faguangdongxian");
            map.loadArea("xiankuang");
            map.loadArea("heiditu");
            //map.loadArea("light_hdr");
            map.loadArea("donghaidaqiao");
            map.loadArea("gwh_xilou");
            map.loadArea("gwh_d_def");            
            map.loadArea("gwh_d_abc");
            //map.loadArea("beijing");            
            //map.loadArea("light_yeguang");

            mapObj._map3d.getWorldManager().enableAreaAutoLoad(0); //关闭管线调度
            require('sl_Pipeline').closeSectionAnalyst();
        },

        //剖面分析
        drawSectionAnalyst: function(){
			map.getOcx().setGisAnalystListener(); //开启事件侦听
			map.getOcx().getGisAnalystManager().setStyle("line1", 1); //设置划线样式，line1在gisconfig.xml中定义
			map.getOcx().getGisAnalystManager().setPlaneHeight(1);
			map.getOcx().getGisAnalystManager().section("");
			map.on('onMeasureEnd', function (type, result) {
			    var jsonStr = map.getOcx().getGisAnalystManager().getJsonResult();
			    var jsonObj = JSON.parse(jsonStr);
			    if (jsonObj["analystType"] == "section") {
			        //获取base64编码的图片
			        var imageBase64 = "data:image/png;base64," + jsonObj["image"];
			        var url = con.HtmlUrl + 'SocietyNew/Center_Image.html';
			        require(['text!' + url], function (template) {
			            $("#detail_05").html(template);
			            $("#detail_05").show('slide', {
			                direction: 'left'
			            }, 500);

			            $("#center_image_detail").attr('src', imageBase64);

			        });
			    }
			});
        },

        //关闭剖面窗口
        closeSectionAnalyst: function(){
            $("#detail_05").empty();
            if(map.getSceneNode('$_analyst_area_/AnalystGroup'))
                map.getSceneNode('$_analyst_area_/AnalystGroup').setVisibleDerived(0); //隐藏划线。

        },

        Revert: function () {
            this.hidePipeline();
        }
    };
});