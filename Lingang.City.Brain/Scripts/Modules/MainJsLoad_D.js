define(['config', 'common', "control_Ajax", 's_Echart', 's_Main', 't_Main', "e_Main", "g_Main", "b_Main", "t_Home", "s_Home", "e_Home", "pagination"],
function (con, com, control_Ajax, s_Echart, s_Main, t_Main, e_Main, g_Main, b_Main, t_Home, s_Home, e_Home, pagination) {
    return {
        loadJs: function () {
            require('mainJsLoad').mainCameraUpdate();
        },

        mainCameraUpdate: function () {
            Q3D.globalCamera().onCameraUpdate(1, function () {
                    var mainCamera = Q3D.globalCamera();
                    currPosV3d = mainCamera.getAbsPos();
                    currOriV3 = mainCamera.getOrientation()

                    var jsondata = {
                        "xyz": currPosV3d.x + ',' + currPosV3d.y + ',' + currPosV3d.z,
                        "angle": currOriV3.x + ',' + currOriV3.y + ',' + currOriV3.z,
                    };
                    control_Ajax.sendMapControlInfo(jsondata); //发送控制命令           
            },100)
        },
        commonAlert: function (text) {
            com.alert(text);
            $(".vex-dialog-buttons").click(function () {//点击触发事件
                require("mainJsLoad").CommonAlertCloseWindow();
            });
        },
        //关闭common.alert弹窗
        CommonAlertCloseWindow: function () {
            //$('.vex-dialog-button-primary').click();
            var jsondata = {
                "menu": "101",
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendMenuControlInfo(jsondata); //发送控制命令    
            
        },

        /******************分页点击事件*****************/
        pageIndex: 0,
        pagination: function (domID, length, optInit) {
            $("#" + domID).pagination(length, optInit);
            //顶部菜单
            $("#" + domID + " a").each(function (index) {
                $(this).click(function () {//点击触发事件
                    //require('mainMenu').mainMenuSelect(index);
                    console.info($(this).index());
                    require("g_Home").EnventPagenationClckFunc(domID, index);
                    $(this).addClass();
                });
            });
        },

        EnventPagenationClckFunc: function (domID, index) {
            var jsondata = {
                "id": domID,
                "index": index,
                "xyz": "",
                "angle": "",
            };
            control_Ajax.sendPageButtoncontrolInfo(jsondata); //发送控制命令
        },
        /*********************END*********************/
    }
})