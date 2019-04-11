define(["config", "common"], function (con, com) {
    /****************************楼宇****************************/
    return {
        Revert: function () {

        },
         //加载楼栋信息
        loadBuidingDetail: function (nodename) {
            var option = {
                aniDom: "#center01_01",
                htmlDom: "#center_01",
                leftOrRight: 'right',
                url: con.HtmlUrl + 'Industry/Building/BuildingDetail.html'
            }
            com.UIControlAni(option, function () {
                //获取建筑信息
                var id = nodename.split("_")[1];
                var data = require("gl_GardenBuilding").BuildingListData.get(id);
                if (data) {
                    $("#buildingName_detail").html(data.buildingName);
                    $("#").html();
                    $("#buildingArea_detail").html(data.buildingArea);
                    var floors = parseInt(data.floors);
                    var floorHTML = "";
                    for (var i = 1; i <= floors; i++) {
                        floorHTML += "<option>"+i+"</option>";
                    }
                    $("#buildingFloors_detail").html(floorHTML);
                    $("#companyCount_detail").html(data.companyCount);
                    $("#occupancyRate_detail").html(data.occupancyRate);
                }
            });
            

        },
    }
})