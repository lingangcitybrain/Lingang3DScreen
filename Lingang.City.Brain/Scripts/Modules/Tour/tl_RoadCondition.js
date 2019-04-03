define(["config", "common"], function (con, com) {
    return {
        //实时路况
        loadRoadCondition: function () {
            //默认视口
            require("mainMenu").LayerFlyto(2)
        },
        //清空
        Revert: function () {

        }
    }
})