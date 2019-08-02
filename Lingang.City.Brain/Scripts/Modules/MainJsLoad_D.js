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
        commonConfirm: function () {
            $(".header-cancel").click(function () {
                vex.dialog.confirm({
                    message: '是否关闭系统！',
                    callback: function (value) {
                        if (value) {
                            window.open('', '_self', ''); window.close();
                            var jsondata = {
                                "menu": "103",
                                "xyz": "",
                                "angle": "",
                            };
                            control_Ajax.sendMenuControlInfo(jsondata); //发送控制命令 
                        }
                        else {
                            var jsondata = {
                                "menu": "104",
                                "xyz": "",
                                "angle": "",
                            };
                            control_Ajax.sendMenuControlInfo(jsondata); //发送控制命令 
                            return null;
                        }
                    },
                    className: 'vex-theme-default'
                });

                var jsondata = {
                    "menu": "102",
                    "xyz": "",
                    "angle": "",
                };
                control_Ajax.sendMenuControlInfo(jsondata); //发送控制命令 
            })
        },

        /******************分页点击事件*****************/
        pageIndex: 0,
        pagination: function (domID, length, optInit,pageindex) {
            $("#" + domID).pagination(length, optInit);
            //顶部菜单
            $("#" + domID + " a").each(function (index) {
                $(this).click(function () {//点击触发事件
                    //require('mainMenu').mainMenuSelect(index);
                    console.info($(this).index());
                    require("mainJsLoad").EnventPagenationClckFunc(domID, index);
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


        /******************图表中间大数字收缩*******************/
        statisticslidebtn: function () {
            $(".statistic-slidebtn").each(function () {
                var thisClick = false;
                $(this).click(function () {
                    thisClick = !thisClick;
                    if (thisClick) {
                        $(this).css({ transform: 'rotate(0)' }).siblings(".statistic-slidediv").slideUp();
                        var jsondata = {
                            "menu": "all",
                            "layer": "all",
                            "type": "dszss",
                            "id": "",
                            "xyz": "",
                            "angle": "",
                        };
                        control_Ajax.sendButtoncontrolInfo(jsondata); //发送控制命令
                    } else {
                        $(this).css({ transform: 'rotate(180deg)' }).siblings(".statistic-slidediv").slideDown();
                        var jsondata = {
                            "menu": "all",
                            "layer": "all",
                            "type": "dszss",
                            "id": "",
                            "xyz": "",
                            "angle": "",
                        };
                        control_Ajax.sendButtoncontrolInfo(jsondata); //发送控制命令
                    }
                })
            })
        },
    }
})


//$(".statistic-slidebtn").click()

//$(".statistic-slidebtn").css({ transform: 'rotate(0)' }).siblings(".statistic-slidediv").slideUp();
//$(".statistic-slidebtn").css({ transform: 'rotate(180deg)' }).siblings(".statistic-slidediv").slideDown();