define(['config', 'common', "control_Ajax", 's_Echart', 's_Main', 't_Main', "e_Main", "g_Main", "b_Main", "t_Home", "s_Home", "e_Home"],
function (con, com, control_Ajax, s_Echart, s_Main, t_Main, e_Main, g_Main, b_Main, t_Home, s_Home, e_Home) {
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
            })
        },
    }
})