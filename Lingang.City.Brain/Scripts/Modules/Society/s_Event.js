define(["config", "common"], function (con, com) {
    return {
        //根据事件加载社区信息
        loadCommunity: function ()
        {
            $("#society_twocolright").show();
        },
        //清空社区信息
        clearCommunity:function()
        {
            $("#society_twocolright").hide();
        },  
        //还原
        Revert: function ()
        {
            require("s_Event").clearCommunity();           
        },
    }
})