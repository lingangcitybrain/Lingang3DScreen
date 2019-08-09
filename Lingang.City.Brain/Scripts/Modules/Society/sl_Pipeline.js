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
            if (con.currStatus == 1) { //夜景
                map.getSceneNode('beijing/beijing_shuimian').setVisible(0);
                map.getSceneNode('beijing/beijing_dikuai').setVisible(0);
                map.getSceneNode('beijing/beijing_luwang').setVisible(0);
            } else if (con.currStatus == 0) { //日景
                var terrainMgr = map.getOcx().getTerrainManager();
                terrainMgr.hideTerrain("osgb_version_1");
                terrainMgr.hideTerrain("new_gaoqing_version_1");
                terrainMgr.hideTerrain("pudong_version_1");
                terrainMgr.setTransparency("lgbig_version_1", 0.8);
            }
            require('sl_Pipeline').isOpenedPipeline = true;
        },

        hidePipeline: function(){
            if (con.currStatus == 1) { //夜景
                map.getSceneNode('beijing/beijing_shuimian').setVisible(1);
                map.getSceneNode('beijing/beijing_dikuai').setVisible(1);
                map.getSceneNode('beijing/beijing_luwang').setVisible(1);
            }

            if(require('sl_Pipeline').isOpenedPipeline == true && con.currStatus == 0){    
                var terrainMgr = map.getOcx().getTerrainManager();
                terrainMgr.showTerrain("osgb_version_1");
                terrainMgr.showTerrain("new_gaoqing_version_1");
                terrainMgr.showTerrain("pudong_version_1");
                terrainMgr.setTransparency("lgbig_version_1", 1);                
            }

            require('sl_Pipeline').isOpenedPipeline = false;
        },

        Revert: function () {
            this.hidePipeline();
        }
    }
})