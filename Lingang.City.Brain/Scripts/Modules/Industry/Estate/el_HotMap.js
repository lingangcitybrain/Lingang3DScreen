define(["config", "common"], function (con, com) {
    /****************************人员分布热力图图层****************************/
    return {
        //加载人员分布热力图
        loadHotMap:function()
        {
            require("mainMenu").LayerFlyto(18)
        
        },
        //清空
        Revert: function () {

        }
    }
})