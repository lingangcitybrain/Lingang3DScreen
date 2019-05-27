define(["config", "load", "qmap3d", "qmap3dcustom"], function (config, load) {

    return {
        initMap: function () {
            try {
                window.map = Q3D.map('MapWrapper', {
                    SERVER_PATH: config.SERVER_PATH,
                    CONFIG_NAME: config.CONFIG_NAME,
                    //LICENSE_SVR: config.LICENSE_SVR,
                    WINDOWLESS: true,
                    OnLoadEnd: function () {
                        load.Onload();
                    }
                });
            }
            catch (err) {
                alert(err.message);
                return;
            }
        }
    }
})