$(document).ready(function () {

    //加载广播推送
    $(function () {

        var control = null;
        try{
            control = $.connection.LingangCityBrainControl;
        }
        catch (e) {
            //alert(e);
            //setTimeout(function () { window.location.reload(); }, 1000);
        }

        if (control != null) {
            //地图控制信息
            control.client.broadcastMapControlInfo = function (message) {
              
                require(["iPad"], function (iPad) {
                    iPad.mapControl(message)
                })

                //var json = $.parseJSON(message);
                //var xyz    = json.xyz
                //var angle  = json.angle
                //Q3D.globalCamera().flyTo((xyz).toString().toVector3d(), (angle).toVector3(), 1, null);

                //console.log(xyz)
                //console.log(angle)

                //if (xyz != null || angle != null)
                //{
                //    Q3D.globalCamera().flyTo((xyz).toString().toVector3d(), (angle).toVector3(), 1, null);
                //}
            };

            //菜单控制信息
            control.client.broadcastMenuControlInfo = function (message) {
                require(["iPad"], function (iPad) {
                    iPad.menuControl(message)
                })
            };

            //图层控制信息
            control.client.broadcastLayerControlInfo = function (message) {
                require(["iPad"], function (iPad) {
                    iPad.layerControl(message)
                })
            };

            //POI控制信息
            control.client.broadcastPoiControlInfo = function (message) {
                require(["iPad"], function (iPad) {
                    iPad.poiControl(message)
                })
            };

            //POI信息窗口控制信息
            control.client.broadcastPoiInfoControlInfo = function (message) {
                require(["iPad"], function (iPad) {
                    iPad.poiInfoControl(message)
                })
            };
        }
        if ($.connection != "undefined" && $.connection != undefined) {
            $.connection.hub.logging = true;
            $.connection.hub.start();

            $.connection.hub.disconnected(function () {
                setTimeout(function () {
                    $.connection.hub.start();
                }, 5000);
            });
        }
    })
})