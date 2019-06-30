define(["config", "load", "qmap3d", "qmap3dcustom","mevent"], function (config, load, qmap3d, qmap3dcustom,mevent) {
    //同触屏相关的代码
    //只支持两点触摸
    pointers = {};
    ptcnt = 0;
    function onPointerDown(e) {
        e.preventDefault();

        //如果已有手指信息，要判断时间间隔超过1s，需要删除
        if (ptcnt > 0) {
            var currtt = (new Date()).getTime();
            for (var val in pointers) {
                if (currtt - pointers[val].timestamp > 1000) {
                    delete pointers[val];
                    ptcnt--;
                    console.log("delete  pointerId : " + val);
                }
            }
        }

        pointers[e.pointerId] = {
            x: e.clientX,
            y: e.clientY,
            pointerType: e.pointerType,
            pointerId: e.pointerId,
            timestamp: (new Date()).getTime()

        };
        //console.log(e.pointerType+ " pointerId : "+e.pointerId+" x:"+e.x+" y:"+e.y);

        var x1, y1, x2 = 0, y2 = 0, count = 0;
        for (var val in pointers) {
            count++;
            if (count == 1) {
                x1 = Math.floor(pointers[val].x);
                y1 = Math.floor(pointers[val].y);
            } else if (count == 2) {
                x2 = Math.floor(pointers[val].x);
                y2 = Math.floor(pointers[val].y);
            }
        }
        if (count > 0 && count < 3) {
            Q3D.inputManager().get().setTouchEvent(count, x1, y1, x2, y2, 2);
            console.log("down: " + e.pointerId + ', current: ' + count + ',' + x1 + ',' + y1 + ',' + x2 + ',' + y2);
        }
        ptcnt++;//有新的手指按下

    }

    function onPointerMove(e) {
        e.preventDefault();

        // Prevent the browser from doing its default thing (scroll, zoom)
        var pointer = pointers[e.pointerId];
        if (pointer) {
            pointer.x = e.clientX;
            pointer.y = e.clientY;
        }
        var x1, y1, x2 = 0, y2 = 0, count = 0;
        for (var val in pointers) {
            count++;
            if (count == 1) {
                x1 = Math.floor(pointers[val].x);
                y1 = Math.floor(pointers[val].y);
            } else if (count == 2) {
                x2 = Math.floor(pointers[val].x);
                y2 = Math.floor(pointers[val].y);
            }
        }
        if (count > 0 && count < 3) {
            Q3D.inputManager().get().setTouchEvent(count, x1, y1, x2, y2, 8);
            console.log("move: " + e.pointerId + ', current: ' + count + ',' + x1 + ',' + y1 + ',' + x2 + ',' + y2);
        }
    }

    function onPointerUp(e) {
        e.preventDefault();

        var x1, y1, x2 = 0, y2 = 0, count = 0;
        for (var val in pointers) {
            count++;
            if (count == 1) {
                x1 = Math.floor(pointers[val].x);
                y1 = Math.floor(pointers[val].y);
            } else if (count == 2) {
                x2 = Math.floor(pointers[val].x);
                y2 = Math.floor(pointers[val].y);
            }
        }
        if (count > 0 && count < 3) {
            Q3D.inputManager().get().setTouchEvent(count, x1, y1, x2, y2, 4);
            delete pointers[e.pointerId];
            ptcnt--;//有手指释放
            console.log("up: " + e.pointerId + ', current: ' + count + ',' + x1 + ',' + y1 + ',' + x2 + ',' + y2);
        }
    }
    return {
        initMap: function () {
            try {
                window.map = Q3D.map('MapWrapper', {
                    SERVER_PATH: config.SERVER_PATH,
                    CONFIG_NAME: config.CONFIG_NAME,
                    LICENSE_SVR: config.LICENSE_SVR,
                    WINDOWLESS: true,
                    //TOUCH: true,
                    OnLoadEnd: function () {
                        load.Onload();
                        //$('#MapWrapper')[0].addEventListener("pointerdown", onPointerDown);
                        //$('#MapWrapper')[0].addEventListener("pointerup", onPointerUp);
                        //$('#MapWrapper')[0].addEventListener("pointermove", onPointerMove);
                        //$('#MapWrapper')[0].addEventListener("pointercancel", onPointerUp);
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