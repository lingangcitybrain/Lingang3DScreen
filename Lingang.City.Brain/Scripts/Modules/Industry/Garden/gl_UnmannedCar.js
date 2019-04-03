define(["config", "common"], function (con, com) {
    /****************************无人车图层****************************/
    return {
        //加载无人车图层
        loadUnmannedCar: function () {
            require("mainMenu").LayerFlyto(22)

        },
        //
        Revert: function () {

        }
    }
})