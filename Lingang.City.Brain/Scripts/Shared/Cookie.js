$.Common = {};

(function (XT) {
    $.extend(XT, {        
        /*
         *@ 设置Cookie
         *@ method     SetCookie
         *@ type       {String}   Cookie内容类别
         *@ value      {String}   Cookie内容    
        */
        SetCookie: function (type, value) {
            //
            var expDays = 180;
            var expTime = new Date();
            expTime.setTime(expTime.getTime() + expDays * 2 * 60 * 60 * 1000);

            document.cookie = type + "=" + escape(value) + ";expires=" + expTime.toGMTString() + ";path=/";

        },
        
        /*
         *@ 从Cookie中获取内容
         *@ method     GetCookie
         *@ type       {String}   Cookie内容类别         
       */
        GetCookie: function (type) {

            var value = document.cookie.match(new RegExp("(^|)" + type + "=([^;]*)(;|$)"));
            if (value != null)
                return unescape(value[2]);
        },
        /************************模型操作开始*******************************************************/
        /*
         *节点按照指定方向移动dr
                * @method     NodeDirectMove
                * @node          {QSceneNode}    节点对象   
                * @direction     {String}        "x","y","z"
                * @val           {int}           偏移值
                * @check         {bool}          是否检查碰撞
                */
        NodeDirectMove: function (node, direction, val, check) {
            try {
                var position = node.getPosition();
                var k = val ? val : 1;
                position[0][direction] += k;
                node.setPosition(position);
                if (check) {
                    this.CheckContactNode(node);
                }
            } catch (e) {
                this.DisposeErr(e);
            }
        },
        /*
         *节点按照指定方向旋转
                 * @method         NodeDirectMove
                 * @node          {QSceneNode}    节点对象   
                 * @direction     {String}        "x","y","z"
                 * @val           {int}           偏移值
                 * @param         {bool}          是否检查碰撞
                 */
        NodeRotate: function (node, direction, val, check) {
            try {
                var Orientation = node.getOrientation(2);
                var k = val ? val : 1;
                Orientation[0][direction] += k;
                node.setOrientation(Orientation, 2);
                if (check) {
                    this.CheckContactNode(node);
                }
            } catch (e) {
                this.DisposeErr(e);
            }
        },
        /*
         *@添加模型节点
                *@method     NodeAdd
                *@obj               {Object}        节点对象
                    - modelname    模型名称
                    - mesh         模型文件路径
                    - position     模型位置坐标
                    - scale        模型尺寸缩放
                    - orientation  模型旋转角度
                *@callback          {Function}   回调函数
                */
        NodeAdd: function (obj, areaname, callback) {
            try {
                if (obj) {
                    obj.mesh = "Mesh\\" + obj.mesh.replace(/^Mesh\\/, "");
                    map.createModel(areaname + "/" + obj.modelname, obj.mesh, {
                        Position: obj.position,
                        Scale: map.QVector3(obj.scale ? obj.scale : "1.0,1.0,1.0"),
                        Orientation: obj.orientation ? map.QVector3(obj.orientation) : null,
                        OrientationType: 0,
                        OnModelCreated: function (model) {
                            if (model) {
                                model.setCastShadow(true);
                                model.setVisible(true)
                                if (typeof callback === "function") {
                                    setTimeout(function () {
                                        callback(model);
                                    }, 200);
                                }
                            }
                        }
                    })
                }
            } catch (e) {
                this.DisposeErr(e);
            }
        },
        /*
         *@删除模型节点
                *@method     NodeDelByName
                *@areaname       {String}     区域名称
                *@nodename       {String}     节点名称
                *@callback       {Function}   回调函数
                */
        NodeDelByName: function (areaname, nodename, callback) {
            try {
                var node = map.QSceneNode(areaname, nodename);
                if (node) {
                    node.remove();
                    if (typeof callback == "function") {
                        callback(nodename);
                    }
                }
            } catch (e) {
                this.DisposeErr(e);
            }
        },
        /*
         *@隐藏指定名称的节点
               *@method     DisplayNodeByName
               *@areaname       {String}    区域名称
               *@nodename       {String}    节点名称
               *@isshow         {String}    是否显示
               *@callback       {Function}  回调函数
               */
        DisplayNodeByName: function (areaname, nodename, isshow, callback) {
            try {
                var node = map.QSceneNode(areaname, nodename);
                if (node) {
                    node.setVisible(isshow);
                    if (typeof callback == "function") {
                        callback(nodename);
                    }
                }
            } catch (e) {
                this.DisposeErr(e);
            }
        },
        /*
         *@模型闪烁
                *@method  FlashNode
                *@node         {QSceneNode}   节点对象
                *@isflash      {bool}         是否闪烁
                */
        FlashNode: function (node, isflash) {
            if (node && node.flash) {
                node = node.asModel();
                if (arguments.length == 1) {
                    node.flash(true);
                } else if (arguments.length == 2 && typeof bflash == "boolean") {
                    node.flash(isflash);
                }
            }
        },
        /*
        *@飞向指定节点
        *@method  FlyTo
        *@view         {String}   视角
        *@callback         {Function}       回调函数
        */
        FlyTo: function (view, callback) {
            var Camera = map ? map.QGlobalCamera(0) : null;
            if (Camera && view && /(-?\d+.\d+,){5}(-?\d+.\d+)/.test(view)) {
                Camera.flyTo(view);
                if (typeof callback == "function") {
                    callback();
                }
            }
        },
        /*
        *@飞向指定节点
        *@method  FlyToNode
        *@node         {QSceneNode}   节点对象
        *@view         {String}       视角
        */
        FlyToNode: function (node, view) {
            try {
                var Camera = map.QGlobalCamera(0);
                if (node && Camera && view) {
                    Camera.flyToNode(node, view, 1);
                }
            } catch (e) {
                this.DisposeErr(e);
            }
        },
        /*
         *@飞向指定节点
         *@method    FlyToNode
         *@areaname         {String}    区域名称
         *@nodename         {String}    节点名称
         *@view             {String}       视角
        */
        FlyToNodeByName: function (areaname, nodename, view) {
            try {
                var node = map.QSceneNode(areaname, nodename);
                if (node) {
                    this.FlyToNode(node, view)
                }
            } catch (e) {
                this.DisposeErr(e);
            }
        },
        ContactNode: function (node1, node2, node3) {

        },
        //获取当前视角
        GetCurrentView: function () {
            var view = map.eyePos().toString() + "|" + map.eyeOrient().toString();
            return view;
        },
        /*
         *@检测当前节点碰撞到的其他节点的
        *@method  CheckContactNode
        *node            {QSceneNode}            需要检测的当前节点的名称
        *nocheck         {Array}                 可以忽略的碰撞节点的名称集合
        *callback        {function}              回调函数
        */
        CheckContactNode: function (node, nocheck, callback) {
            var qworld = map.QWorldManager();
            var checklist = nocheck ? nocheck : [];
            if (node) {
                node = $.isQMapObject(arguments[0], QMapObject.QSceneNode) ? node : node.asSceneNode();
                var nodelist = qworld.contactTest(node);
                var hascontact = false;
                if (nodelist.List && nodelist.List.length > 0) {
                    nodelist.each(function (anode) {
                        if (anode.isVisible()) {//排除隐藏的模型
                            var nodename = anode.getName();
                            if ($.inArray(nodename, checklist) < 0) {//排除无需检测的模型
                                hascontact = true;
                                return false;
                            }
                        }
                    })
                }
                hascontact ? this.NoContacts(node) : this.HasContacts(node);
                if (typeof callback == "function") {
                    callback();
                }
            }
        },
        /*碰撞效果*/
        HasContacts: function (node) {
            map.stopKeyEvent("up", QMapKey.ENTER);
            if (node) {
                node.asModel().clearColor().setColor("#ff0000");
            }
        },
        /*无碰撞效果*/
        NoContacts: function (node) {
            if (node) {
                map.startKeyEvent("up", QMapKey.ENTER);
                node.asModel().clearColor();
            }
        },
        /*
        *@模型在指定位置按照指定参照节点集结 
         *@method        FlyToNode
         *@point            {String}       集合的坐标点LocalPos
         *@nodelist         {QScenceNode array}        组装节点集合
         *@nodelist         {QVertor3d   array}        组装节点默认位置集合
         *@speed            {int}          集结速度 秒
         *@callback         {function}     回调函数
        */
        //GMTB 158-50 Unloading pump  GMTB 200-100 Unloading pump  LAM12 Since the floating oil recovery machine
        GatherNodes: function (point, nodelist, nodehisposition, speed, callback) {
            try {
                var timer = 0;
                var len = nodelist && nodelist.length || 0;
                if (!len) {
                    return;
                }
                if (nodehisposition && nodehisposition.length) {
                    for (var i = 0; i < len; i++) {
                        this.NodeDirectMove(nodelist[i], "x", nodehisposition[i].x, false);
                        this.NodeDirectMove(nodelist[i], "y", nodehisposition[i].y, false);
                        this.NodeDirectMove(nodelist[i], "z", nodehisposition[i].z, false);
                    }
                }
                var pbase = nodelist[0].getPosition();
                var cp = map.QMath().valueTypeSubstract(point, pbase)
                var mx = cp[0].x;
                var my = cp[0].y;
                var mz = cp[0].z;
                this.NodeDirectMove(nodelist[0], "x", mx, false);
                this.NodeDirectMove(nodelist[0], "y", my, false);
                this.NodeDirectMove(nodelist[0], "z", mz, false);
                speed = speed ? 1 : speed;
                mmx = mx / speed;
                mmy = my / speed;
                mmz = mz / speed;

                var timerfunc = setInterval(function () {
                    for (var i = 1; i < len; i++) {
                        this.NodeDirectMove(nodelist[i], "x", mmx, false);
                        this.NodeDirectMove(nodelist[i], "y", mmy, false);
                        this.NodeDirectMove(nodelist[i], "z", mmz, false);
                    }
                    timer++;
                    if (timer >= speed) {
                        clearInterval(timerfunc);
                        if (typeof callback == "function") {
                            callback();
                        }
                    }
                }, 1000)


            } catch (e) {
                this.DisposeErr(e);
            }
        },
        //显示模型裁减楼层
        ShowCJFloor: function (floorName, flg) {
            var FloorMName = floorName + "_jg";
            var FloorCJName = floorName + "_jgcj";
            var cjf = false;
            if (!flg) { cjf = true }
            if (map.getWorldManager().findFirstSceneNode(FloorCJName)) {
                map.getWorldManager().findFirstSceneNode(FloorCJName).setVisible(cjf)
            }
            if (map.QModelNode($.Config.AreaName + "/" + FloorMName)) {
                map.QModelNode($.Config.AreaName + "/" + FloorMName).setVisible(flg);
            }
        },
        //设置楼层隐藏
        SetFloorNodeVisable: function (floorName, flg) {
            if (floorName == "") { return };
            if (!floorName) { return };

            //if (map.getWorldManager().findFirstSceneNode(floorName + "_jgcj")) {
            //    map.getWorldManager().findFirstSceneNode(floorName + "_jgcj").setVisible(false)
            //}

            var subNum = parseInt(floorName.replace(/[^0-9]/ig, ""));
            var nextNum = subNum + 1;
            var nextFloorName = floorName.replace(subNum, nextNum);
            var nextFloorMName = nextFloorName + "_jg";
            var nextFloorCJName = nextFloorName + "_jgcj";

            if (map.QModelNode($.Config.AreaName + "/" + nextFloorName)) {
                map.QLightNode("xy_q4", $.Config.LightNode).setShadowEnable(flg);
                map.QModelNode($.Config.AreaName + "/" + nextFloorName).setVisible(flg);

                if (flg) {
                    if (map.getWorldManager().findFirstSceneNode(nextFloorCJName)) {
                        map.getWorldManager().findFirstSceneNode(nextFloorCJName).setVisible(true)
                    }
                    if (map.QModelNode($.Config.AreaName + "/" + nextFloorMName)) { map.QModelNode($.Config.AreaName + "/" + nextFloorMName).setVisible(true); }
                } else {
                    if (map.QModelNode($.Config.AreaName + "/" + nextFloorMName)) { map.QModelNode($.Config.AreaName + "/" + nextFloorMName).setVisible(false); }

                    if (map.getWorldManager().findFirstSceneNode(nextFloorCJName)) {
                        map.getWorldManager().findFirstSceneNode(nextFloorCJName).setVisible(false)
                    }

                }



                var videoModelData = datacache.InfoAllPoiInfoList.list_YQ_Video

                for (var i in videoModelData) {
                    if (videoModelData[i].VideoFloor == nextFloorName) {
                        //debugger;
                        map.QModelNode($.Config.AreaName + "/VideoModel" + videoModelData[i].VID).setVisible(flg);
                        if (datacache.CameraPoiFlg == flg || !flg) {
                            map.QPOINode($.Config.AreaName + "/Video" + videoModelData[i].VID).setVisible(flg);
                            //setTimeout(function () { map.QPOINode($.Config.AreaName + "/Video" + videoModelData[i].VID).setVisible(flg); }, 100)
                        }
                    }
                }

                var guardModelData = datacache.InfoAllPoiInfoList.list_YQ_Guard
                for (var i in guardModelData) {
                    if (guardModelData[i].GuardFloor == nextFloorName) {
                        map.QPOINode($.Config.AreaName + "/Guard" + guardModelData[i].GID).setVisible(flg);
                        map.QModelNode($.Config.AreaName + "/GuardModel" + guardModelData[i].GID).setVisible(flg);
                    }
                }
                this.SetFloorNodeVisable(nextFloorName, flg);
            }
        },
        /************************模型操作结束*******************************************************/


        /************************场景操作开始*******************************************************/
        /*
         *@添加poi
                *@method    AddPoi
                *areaname            {string}                 区域名称
                *nodename            {string}                 节点名称
                *poipra              {string}                 poi参数
                *callback            {function}               回调函数
                */
        AddPoi: function (areaname, nodename, poipra, callback) {
            var defaultpra = {
                Text: "微软雅黑",
                FontName: "微软雅黑",
                FontColor: map.QColourValue(QMapColor.NAVY, 1),
                //Icon: "Texture/Common/1.png",
                IconSize: map.QVector2(50, 50),
                POILayout: 1,
                UIType: 2,
                Position: { x: 0, y: 0, z: 0 },
                LocationOffSet: map.QVector2(1, 63),
                BackFrameBorderSize: null,
                BackFillColor: null
            };
            $.extend(defaultpra, poipra);
            map.createPOI(areaname + "/" + nodename, {
                Position: defaultpra.Position,
                POIOptions: defaultpra,
                OnPOICreated: function (p) {
                    p[0].setIconAlphaEnabled(1);
                    p[0].setAlwaysOnScreen(1);//POI总是在前面 
                    //p.setVisible(true);
                    //if (typeof callback === "function") {
                    //    callback(p);
                    //}
                }
            });
        },

        AddAniPoi: function (areaname, nodename, poipra, jumpHeight, callback) {
            var defaultpra = {
                Text: "微软雅黑",
                FontName: "微软雅黑",
                FontColor: map.QColourValue(QMapColor.NAVY, 1),
                //Icon: "Texture/Common/1.png",
                IconSize: map.QVector2(50, 50),
                POILayout: 1,//0:图标在左 1:图标在上 2:图标在右 3:图标在下 4:文字在图标中间
                UIType: 2,
                Position: { x: 0, y: 0, z: 0 },
                LocationOffSet: map.QVector2(1, 63),
                BackFrameBorderSize: null,
                BackFillColor: null
            };
            $.extend(defaultpra, poipra);
            map.createPOI($.Config.AreaName + "/" + nodename, {
                Position: defaultpra.Position,
                POIOptions: defaultpra,
                OnPOICreated: function (p) {
                    p[0].setIconAlphaEnabled(1);
                    p[0].setAlwaysOnScreen(1);//POI总是在前面 
                    var aniFrameArray = new Array();
                    aniFrameArray.push({
                        Translate: map.QVector3(0, jumpHeight, 0),
                        Duration: 0.2
                    });
                    aniFrameArray.push({
                        Translate: map.QVector3(0, -jumpHeight, 0),
                        Duration: 0.3
                    });
                    aniFrameArray.push({
                        Translate: map.QVector3(0, jumpHeight, 0),
                        Duration: 0.5
                    });
                    aniFrameArray.push({
                        Translate: map.QVector3(0, -jumpHeight, 0),
                        Duration: 1
                    });

                    map.createNodeAnimation("NodeAniTest" + Math.random(), {
                        KeyFrameArray: aniFrameArray,
                        TargetNode: map.QSceneNode(areaname, nodename),
                        OnAnimationCreated: function (Animation, AnimationState) {
                            AnimationState.setLoop(false);
                            AnimationState.setAutoPlay(true);
                            AnimationState.play();
                        }
                    });
                }
            });
        },
        /*
        *@删除poi
        *@method    RemovePoi
        *poiName            {string}                 节点名称
        */
        RemovePoi: function (poiName) {
            try {
                if (map.QSceneNode($.Config.AreaName + "/" + poiName) != null) {
                    map.QSceneNode($.Config.AreaName + "/" + poiName).remove();
                }
            } catch (e) {
            }
        },
        /*
        *@隐藏poi
        *@method    RemovePoi
        *poiName            {string}                 节点名称
        */
        DisablePoi: function (poiName) {
            try {
                if (map.QSceneNode($.Config.AreaName + "/" + poiName) != null) {
                    map.QSceneNode($.Config.AreaName + "/" + poiName).setVisible(false);
                }
            } catch (e) {
            }
        },
        /*
        *@显示poi
        *@method    RemovePoi
        *poiName            {string}                 节点名称
        */
        EnablePoi: function (poiName) {
            try {
                if (map.QSceneNode($.Config.AreaName + "/" + poiName) != null) {
                    map.QSceneNode($.Config.AreaName + "/" + poiName).setVisible(true);
                }
            } catch (e) {
            }
        },
        /************************poi操作结束*******************************************************/


        /************************动画操作开始*******************************************************/
        /*
         *@为节点创建动画
                        *@method    CreateAnimation
                        *areaname            {string}                 区域名称
                        *nodename            {string}                 节点名称
                        *aniname             {string}                 动画名称
                        *anipra              {string}                 动画参数
                        *callback            {function}               回调函数
                        */
        CreateAnimation: function (nodename, aniname, aniheight, anipra, callback, aniendcallback) {
            var node = map.QSceneNode($.Config.AreaName, nodename);
            if (node) {
                node.setNodeAnimationName("");
            } else {
                return;
            }
            var s = node[0].getDimension();
            var p = node.getPosition();
            var defaultpra = {
                autoplay: true,
                loop: false
            };
            var aniArray = new Array();
            aniArray.push({
                Translate: map.QVector3(0, aniheight, 0),
                Duration: 0.5
            });
            aniArray.push({
                Translate: map.QVector3(0, -aniheight, 0),
                Duration: 0.5
            });
            aniArray.push({
                Translate: map.QVector3(0, aniheight, 0),
                Duration: 0.5
            });
            aniArray.push({
                Translate: map.QVector3(0, -aniheight, 0),
                Duration: 0.5
            });
            aniArray.push({
                Translate: map.QVector3(0, 0, 0),
                Duration: 0.5
            });
            defaultpra.KeyFrameArray = aniArray;
            $.extend(defaultpra, anipra);

            map.createNodeAnimation(aniname + Math.random(), {
                KeyFrameArray: defaultpra.KeyFrameArray,//defaultpra.framearr,
                TargetNode: map.QSceneNode($.Config.AreaName, nodename),
                OnAnimationCreated: function (Animation, AnimationState) {
                    AnimationState.setLoop(defaultpra.loop);
                    AnimationState.setAutoPlay(defaultpra.autoplay);
                    AnimationState.play();
                    if (typeof callback == "function") {
                        callback();
                    }
                },
                OnAnimationEnd: function (aniState, aniNode) {
                    //aniNode.removeAllKeyframes();
                    aniArray = new Array();
                    //aniState.setAutoPlay(false);
                    if (typeof aniendcallback == "function") {
                        aniendcallback(aniNode);
                    }
                }
            });

        },
        /*
         *@结束指定节点上的动画
                       *@method    StopAnimateByAnimateName
                       *node            {QScenceNode}                 节点对象
                       *callback        {Function}                    回调函数
                       */
        StopAnimateByAnimateName: function (node, callback) {
            if (node && ($.isQMapObject(node, QMapObject.QSceneNode) || $.isQMapObject(node, QMapObject.QModelNode))) {
                var ani = node.getNodeAnimationState();
                if (ani) {
                    ani.stopAndBack();
                }
                node.setNodeAnimationName("");
            }
            if (typeof callback == "function") {
                callback();
            }
        },

        /************************动画操作结束*******************************************************/



        /************************场景操作开始*******************************************************/
        /*
         *@设置包围盒
                 *@method  SetViewBox
                 *@min3d        {String}   坐标范围的最小值
                 *@max3d        {String}   坐标范围的最大值
                */
        SetViewBox: function (min3d, max3d) {
            try {
                if (min3d && max3d) {
                    var camera = map.QGlobalCamera(0);
                    var qmin3d = map.QVector3d(min3d);
                    var qmax3d = map.QVector3d(max3d);
                    camera.setLimitBound(qmin3d, qmax3d);
                }
            } catch (e) {
                this.DisposeErr(e);
            }
        },
        /************************场景操作结束*******************************************************/

        /************************线操作开始*******************************************************/
                /*
        *@绘制模型到屏幕的线
         *@method  NodeLineToScreen
         *@node        {QScenceNode}   节点对象
         *@x           {int}   屏幕x坐标
         *@y           {int}   屏幕y坐标
        */
        NodeLineToScreen: function (node, x, y, callback) {
            if (!node) {
                return;
            }
            var UISys = map.QUIWindowSysExtend(map.QUIWindowSys());
            UISys.destroyTooltipWidget("VideoTooltipWidget");
            var ToolTipPra = {
                name: "VideoTooltipWidget",
                Image: "Texture/texture/vedio_bj1.png",
                Alpha: 1,
                Margin: {
                    top: y,
                    left: x,
                    bottom: null,
                    right: null
                },
                ZOrder: 1,
                Layout: {
                    width: 150,
                    height: 80
                },
                ImageName: "Texture/texture/vedio_bj1.png",
                EdgeColor: map.QColourValue("#273349", 1),
                EdgeWidth:0,
                Observe: node,
                CenterOffset: map.QVector2(0, 0),
                LocateAuto: false,
                TriFillColor: map.QColourValue("#273349", 1),
                TriAlpha: 0.8,
                LineLink: null
            }
            //node.select();
            if (typeof callback == "function") {
                callback();
            }
            //$.CurrentVideoTarget = node.getName();
            return UISys.createTooltipWidget(ToolTipPra.name, ToolTipPra);
        },

        DelNodeLineToScreen: function ()
        {
            try{
                var UISys = map.QUIWindowSysExtend(map.QUIWindowSys());
                UISys.destroyTooltipWidget("VideoTooltipWidget");
            }
            catch(e){}
        },

        /*
        *@删除指示到屏幕的线段
           *@method  DeleteLineToScreenByName
           *@nodename        {string}   节点名称
          */
        DeleteLineToScreenByName: function (areaname, nodename) {
            var UISys = map.QUIWindowSysExtend(map.QUIWindowSys());
            UISys.destroyTooltipWidget(nodename);
            var node = map.QSceneNode(areaname, nodename);
            if (node) {
                node.unSelect();
            }
        },
        /*
          画线
        */
        DrawLine1: function (nodePath, lineMaterial, paramArray, lineWidth, lineColor, transparent, isDynamic, isDotted) {
            var lineArray = paramArray.split("|");
            var lineCoordsArray = new Array();
            for (var i = 0; i < lineArray.length; i++) {
                lineCoordsArray.push(map.QVector3d(lineArray[i]));
            }
            var LinePointsArray = [lineCoordsArray];
            map.createLine(nodePath, {
                Material: lineMaterial,
                LinePoints: LinePointsArray,
                LineOptions: {
                    LineType: QMapLineType.StraightLine, //StraightLine: 0 直线, Bessel: 1贝塞尔曲线, Parabola: 2抛物线            
                    BesselDim: 2,
                    Subdivision: 20,
                    LineWidth: lineWidth,
                    WrapLen: 1,
                    Color: lineColor, //线的颜色            
                    Transparent: transparent, ///线的透明度            
                    Dynamic: isDynamic, ///是否动态线
                    Dotted: isDotted, ///是否虚线
                    HeightFix: 0.1
                },

                OnLineCreated: function (line) {
                    line[0].setSpecialTransparent(true)
                }
            });
        },

        DrawLine: function (paramArray, LineNumber) {
            //debugger;
            var lineArray = paramArray.split("|");
            var lineCoordsArray = new Array();
            var sPnt = this.ToLocalPos(map.QVector3d(lineArray[0])[0]);
            lineCoordsArray.push(map.QVector3());
            for (var i = 1; i < lineArray.length; i++) {
                var ePnt = this.ToLocalPos(map.QVector3d(lineArray[i])[0]);
                var newEndPnt = map.QVector3(ePnt.x() - sPnt.x(), ePnt.y() - sPnt.y(), ePnt.z() - sPnt.z());
                lineCoordsArray.push(newEndPnt);
            }

            var LinePointsArray = [lineCoordsArray];

            //map.loadResourceByFile(QMapResourceType.MATERIAL, "Material\\line_static.mtr", function (res) {
            //    res.asMaterial().setDiffuseColor(map.QColourValue("#FF0000", 1)).setSpecularColor(map.QColourValue("#FF0000", 1)).setEmissiveColor(map.QColourValue("#FF0000", 1))
            //    .getTextureUnit(QMapTextureUnit.DIFFUSE).setRoll(map.QVector2(2, 0)).getAnimationState().setLoop(true).setAutoPlay(true).play();
            //});
            //map.QAreaSceneManager("AreaTest").createTopEmptyNode("WalkingRoot");

            map.createLine($.Config.AreaName + "/setting_line" + LineNumber,
                {
                    Material: "Material/line.mtr", //线材质
                    Position: sPnt,//线的起始点
                    LinePoints: LinePointsArray,//线组

                    LineOptions: {
                        LineType: 0, // 0 直线,  1贝塞尔曲线,  2抛物线            
                        BesselDim: 2,
                        Subdivision: 20,
                        LineWidth: 2,//线粗细
                        WrapLen: 3,
                        Color: "#FF0000", //线的颜色            
                        Transparent: 1, ///线的透明度            
                        Dynamic: true, ///是否动态线
                        Dotted: true, ///是否虚线
                        HeightFix: 0.1,
                        //SpecialTransparent: true
                    },
                    OnLineCreated: function (line) {
                        line[0].setSpecialTransparent(true)
                    }
                });
        },

        AddLine: function (nodeName, linePoints, drawOptions) {
            var points = [];
            for (var i = 0; i < linePoints.length; i++) {
                //QVector3
                points.push(linePoints[i]);
            }

            var lineOptions = {
                LineType: QMapLineType.StraightLine,
                BesselDim: 2,
                Subdivision: 20,
                LineWidth: 5,
                WrapLen: 5,
                Color: QMapColor.BLUE, ///线的颜色
                Transparent: 0.4, ///线的透明度
                Dynamic: false, ///是否动态线
                Dotted: false ///是否虚线
            }

            var defaultOptions = {
                LinePoints: [points],
                LineOptions: lineOptions
            }
            $.extend(true, defaultOptions, drawOptions);
            map.createLine($.Config.AreaName + "/" + nodeName, defaultOptions);
        },


        /************************线操作结束*******************************************************/

        /************************材质操作开始*******************************************************/

        /************************材质操作结束*******************************************************/


        /************************数据解析方法*******************************************************/
        /*
        *@获取对象中某种属性的种类数
        *@method  GetObjGroupByAttribute
        *@obj        {object}   待解析对象
        *@tag        {string}   需要判断的属性
        */
        GetObjGroupByAttribute: function (obj, tag) {
            if (!obj || !tag) {
                return [];
            }
            var arr = [], len, result = [], tempobj = {};
            for (var i in obj) {
                arr.push(obj[i][tag]);
            }
            len = arr && arr.length || 0;
            for (var i = 0; i < len; i++) {
                if (!tempobj[arr[i]]) {
                    tempobj[arr[i]] = true;
                    result.push(arr[i]);
                }

            }
            return result;
        },
        /*
        *@获取对象中某种属性为特定值的属性对象
        *@method  GetListByTagName
        *@obj        {object}   待解析对象
        *@tag        {string}   需要判断的属性
        *@typename   {string}   属性值
        */
        GetListByTagName: function (obj, tag, tagname) {
            if (!obj || !tag) {
                return {};
            }
            var newobj = {};
            for (var i in obj) {
                if (obj[i][tag] == tagname) {
                    newobj[i] = obj[i];
                }
            }
            return newobj;
        },
        /*
        *@获取对象中某种属性为特定值的属性对象
        *@method  GetListByTagName
        *@obj        {object}   待解析对象
        *@tag        {string}   需要判断的属性
        *@typename   {string}   属性值
        */
        GetListByTagName2: function (obj, tag, tagname) {
            if (!obj || !tag) {
                return {};
            }
            var newobj = {};
            for (var i in obj) {
                for (var j in obj[i]) {
                    if (obj[i][j][tag].replace("\\\\", "\\") == tagname) {
                        return obj[i][j];
                    }
                }

            }
            return newobj;
        },
        /************************数据解析方法*******************************************************/


        /*************************坐标转换*************************************************************/
        /*
         *@检测当前节点碰撞到的其他节点的
        *@method     ToLocalPos
        *areaname       {String}            区域名称
        *options        {object}            坐标对象
        */
        ToLocalPos: function (options) {
            try {
                if (options.type == "QVector3d")
                { return map.QAreaSceneManager($.Config.AreaName).toLocalPos(options); }

                return map.QAreaSceneManager($.Config.AreaName).toLocalPos(map.QVector3d(options.x, options.y, options.z));
            } catch (e) {
                this.DisposeErr(e);
            }
        },
        /*统一抛出错误*/
        DisposeErr: function (err) {
            /*
            if (typeof err === "object") {
                if (console && console.log) {
                    console.log("异常信息开始--------------------------");
                    for (var i in err) {
                        console.log(i + ":" + err[i]);
                    }
                    console.log("异常信息结束--------------------------");
                }

            }
            */

        },
        //检测IE8
        TestIE8: function () {
            if (navigator.userAgent.indexOf("MSIE 8.0") > 0) {
                // console.log("ie8in");
                return true;
            } else {
                return false;
            }
        },
        ConvertTime: function (timer) {
            if (!!!timer) {
                return "";
            }
            if (typeof timer == "string") {
                var a = new Date(timer);
                return arguments.callee(a);
            } else {
                var m = timer.getMonth() + 1;
                if (m < 10) {
                    m = "0" + m;
                }
                var d = timer.getDate();
                if (d < 10) {
                    d = "0" + d;
                }
                return timer.getFullYear().toString() + "-" + m + "-" + d;
            }
        },
        FilterSpecialChar: function (str) {
            if (str) {
                return str.replace(/["',{}+=&():]/g, "");
            }
            return "";
        },
        //上传图片 f是fileinput的id 
        UploadImg: function (f, callback, reg) {
            var errtag = reg.toString().replace(/[()\/]|i$/g, "");
            // 创建一个上传参数
            var uploadOption =
        {
            // 提交目标
            action: $.Config.WebServiceUrl + "Home/UploadFileAjax",
            // 自动提交
            autoSubmit: true,
            // 选择文件之后…
            onChange: function (file, extension) {
                var newreg = reg ? reg : /(jpg)|(jpeg)|(bmp)|(gif)|(png)|(swf)|(docx?)|(pdf)/i;
                if (new RegExp(newreg).test(extension)) {
                    //$('#' + f).val(file);
                    // $("#" + p).val(file);
                    //$("#" + s).html("上传成功")
                    $("#load").show();

                } else {
                    $("#" + f).next().html("限制格式" + errtag);
                    //alert("只限上传图片或者flash文件，请重新选择！");
                    return false;
                }
            },
            // 开始上传文件
            onSubmit: function (file, extension) {
                //$("#fileQueue").val("正在上传" + file + "..");
                // $("#fileToUpload").val("正在上传" + file + "..")
                $("#load").show();
            },

            // 开始上传文件
            onSubmit: function (file, extension) {
                //$("#fileQueue").val("正在上传" + file + "..");
                // $("#fileToUpload").val("正在上传" + file + "..")
            },
            // 上传完成之后
            onComplete: function (file, response) {
                var newreg = reg ? reg : /(jpg)|(jpeg)|(bmp)|(gif)|(png)|(swf)|(docx?)|(pdf)/i;
                if (response == "fail") {
                    alert("上传失败！");
                    $("#load").hide();
                }
                else if (newreg.test(response)) {
                    if (typeof callback == "function") {
                        callback(response);
                        $("#load").hide();
                    }
                } else {
                    $("#" + f).next().html("限制格式" + errtag);
                    $("#load").hide();
                    //alert("只限上传图片文件，请重新选择！");
                }
            }

        }

            // 初始化图片上传框
            var oAjaxUpload = new AjaxUpload('#' + f, uploadOption);



        },
        /************************通用的画立方体方法开始 add by tangdeng 2015/02/04*******************************************************/
        /*
        *@画立方体
        *@method             AddPrsim
        *nodePath            {string}                 区域名称
        *mosueTrack          {bool}                   鼠标是否跟踪
        *EditAfterCreate     {bool}                   能否通过中间调整模型高度
        *RollingStep         {float}                  高度调整幅度
        *Alpha               {float}                  材质透明度
        *Color               {string}                 材质颜色
        *Height              {float}                  矢量模型高度
        */
        AddPrsim: function (nodePath, mouseTrack, EditAfterCreate, RollingStep, Alpha, Color, Height, callback) {
            var drawOptions = {
                MouseTrack: mouseTrack,
                EditAfterCreate: EditAfterCreate,
                RollingStep: RollingStep
            };
            var prismOptions = {
                Alpha: Alpha,
                Color: Color,
                Height: Height
            };
            XT.CommonBusiness.drawPrism(nodePath, drawOptions, prismOptions, callback);
        },
        /*
        *@编辑立方体
        *@method             EditPrism
        *prismName            {string}                 节点名
        *Alpha               {float}                  材质透明度
        *Color               {string}                 材质颜色
        *Height              {float}                  矢量模型高度
        */
        EditPrism: function (prismName, Alpha, Color, Height) {
            var sceneNode = map.QSceneNode($.Config.AreaName, prismName);
            var selectNode = sceneNode.asVecModel().getVecModelObj();

            selectNode.setHeight(Height);//改变棱柱高度

            var qMaterial = sceneNode.asVecModel().getMaterial(0);
            var qColor = map.QColourValue(Color, 1);
            qMaterial.setDiffuseColor(qColor);//改变材质颜色

            qMaterial.setAlpha(Alpha);//改变材质透明度

            //更新键值对数组中对应节点名的内容
            XT.PrismValues[prismName] = {
                Alpha: Alpha,
                Color: Color,
                Height: Height
            };
        },
        //初始化加载出已有的矢量模型
        AddPrismInit: function (nodeName, Points, Color) {
            var newArrayPoints = new Array();
            for (var i = 0; i < Points.length; i++) {
                newArrayPoints.push(Points[i].toQVector3d(map));
            }
            var material = map.QMaterial("PrismMaterial") == null ? map.createMaterial("PrismMaterial" + Math.random(), { Alpha: 0.9, AlphaBlendEnable: true, DiffuseColor: map.QColourValue(Color, 1) }) : map.QMaterial("PrismMaterial");
            if (map.QSceneNode($.Config.AreaName + "/" + nodeName) != null) {
                map.QSceneNode($.Config.AreaName + "/" + nodeName).setVisible(true);
            } else {

                map.createPrism($.Config.AreaName + "/" + nodeName, {
                    Position: null,
                    Orientation: null,
                    Scale: null,
                    OrientationType: 0,
                    Material: [material.getName(), material.getName(), material.getName()],//["PrismMaterial", "PrismMaterial", "PrismMaterial"],
                    PrismOptions: {
                        keepVertical: true,
                        Points: newArrayPoints,
                        Anchor: map.QVector3(1, 1, 1),
                        Height: 2
                    },
                    OnPrismCreated: function () {

                    }
                });
            }
        },

        //根据状态获取矢量模型材质颜色
        getVecModelColorByProgressAndState: function (progress, state) {
            var data = $.Config.VecModelColorData;
            for (var i = 0; i < data.length; i++) {
                if (data[i].progress == progress && data[i].state == state) {
                    return (data[i].color);
                }
            }

        },
        /************************通用的画立方体方法结束*******************************************************/

        /*弹框*/
        OpenHtmlwidget: function (dialogname, url, divwidth, divheight, posx, posy, cwidth, cheight, cposx, cposy, alpha, png1, png2) {

            var htmlSys = map[0].getExternUIWidgetSys();
            widget = htmlSys.createHtmlWidget(dialogname, png1, png2)
            widget.setAlpha(alpha);
            widget.setPos(posx, posy);
            widget.setSize(divwidth, divheight);
            widget.setClientPos(cposx, cposy);
            widget.setClientSize(cwidth, cheight);
            widget.setHtml(url);
            widget.setAutoUpdate(true);
            widget.setReceiveInput(true);
            widget.fadeIn(0.05);
            widget = null;
        },

        CloseHtmlwidget: function (dialogname) {
            var htmlSys = map[0].getExternUIWidgetSys();
            htmlSys.destroyWidget(dialogname);
        },


        /*************************数据转换*********************************************/
        /*
        *@将字符串转化为json对象
        *@method             parseJson
        *data            {string}                 json格式字符串
        */
        parseJson: function (data) {
            try {
                if (data == "" || data == undefined) {
                    return null;
                }
                if (window.JSON && window.JSON.parse) {
                    return window.JSON.parse(data);
                } else {
                    return (new Function("return " + newobj))()
                }
                throw new Error("Invalid JSON: " + data);
            } catch (e) {
                //    return {};
            }

        },
        /*************************字符过滤*********************************************/
        filterSpecialChar: function (str, reg) {
            if (str) {
                var regStr = reg ? reg : /[()?&":]/g
                return str.replace(regStr, "");
            } else {
                return "";
            }
        },
        isNullStr: function (str) {
            if (!str && typeof (str) != "undefined" && str != 0) {
                return "";
            }
            else {
                return str;
            }
        },
        /*************************数据验证*********************************************/
        isNullObject: function (obj) {
            for (var i in obj) {
                return false;
            }
            return true;
        },
        /*******************************HashMap******************************************/
        HashMap: function () {
            /** Map 大小 **/
            var size = 0;
            /** 对象 **/
            var entry = new Object();

            /** 存 **/
            this.put = function (key, value) {
                if (!this.containsKey(key)) {
                    size++;
                }
                entry[key] = value;
            }

            /** 取 **/
            this.get = function (key) {
                return this.containsKey(key) ? entry[key] : null;
            }

            /** 删除 **/
            this.remove = function (key) {
                if (this.containsKey(key) && (delete entry[key])) {
                    size--;
                }
            }

            /** 是否包含 Key **/
            this.containsKey = function (key) {
                return (key in entry);
            }

            /** 是否包含 Value **/
            this.containsValue = function (value) {
                for (var prop in entry) {
                    if (entry[prop] == value) {
                        return true;
                    }
                }
                return false;
            }

            /** 所有 Value **/
            this.values = function () {
                var values = new Array();
                for (var prop in entry) {
                    values.push(entry[prop]);
                }
                return values;
            }

            /** 所有 Key **/
            this.keys = function () {
                var keys = new Array();
                for (var prop in entry) {
                    keys.push(prop);
                }
                return keys;
            }

            /** Map Size **/
            this.size = function () {
                return size;
            }

            /* 清空 */
            this.clear = function () {
                size = 0;
                entry = new Object();
            }
        },
        /***********************************************计算旋转角度*********************************************************/
        aniFace: function (start, end, excur) {
            var x = start.longitude();
            var y = start.latitude();
            var z = start.height();
            var x1 = end.longitude();
            var y1 = end.latitude();
            var z1 = end.height();

            if (!excur && excur != 0) excur = 90;
            if (x == x1 && y == y1) {
                return 0;
            }
            var angle = (180 * Math.asin((x1 - x) / (Math.sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y)))) / Math.PI);

            if (((x1 - x) < 0 && (y1 - y) < 0) || ((x1 - x) > 0 && (y1 - y) < 0)) {
                angle = angle - 180 - excur;
            } else {
                angle = -angle - excur;
            }
            return angle;
        },
        //For 小人模型
        aniFace1: function (start, end, excur) {
            var x = start.x();
            var z = start.z();
            var x1 = end.x();
            var z1 = end.z();

            if (!excur && excur != 0) excur = 90;
            if (x == x1 && z == z1) {
                return 0;
            }
            //计算同x轴正向的旋转角度, 逆时针方向
            var angle = (180 * Math.asin((z1 - z) / (Math.sqrt((x1 - x) * (x1 - x) + (z1 - z) * (z1 - z)))) / Math.PI);
            if (x1 - x > 0) //x增加时，无论z是否增加
                angle = -angle; //角度取反
            else {
                if (z1 - z > 0) //z增加
                    angle = -angle + 180;
                else
                    angle = angle + 180;
            }

            return angle + excur;
        },
        //For 汽车模型
        aniFace2: function (start, end, excur) {
            var x = start.x();
            var z = start.z();
            var x1 = end.x();
            var z1 = end.z();

            if (!excur && excur != 0) excur = 90;
            if (x == x1 && z == z1) {
                return 0;
            }
            //计算同x轴正向的旋转角度, 逆时针方向
            var angle = (180 * Math.asin((z1 - z) / (Math.sqrt((x1 - x) * (x1 - x) + (z1 - z) * (z1 - z)))) / Math.PI);
            if (x1 - x > 0) //x增加时，无论z是否增加
                angle = -angle; //角度取反
            else
                angle = angle + 180;

            return angle + excur;
        },
        /******************************************************性能方法**************************************************/
        /*
       *@延迟执行高频方法
       *@method             throttle
       *@fn                 function              执行方法
       *interval            {int}                 延迟的时间
       */
        throttle: function (fn, interval) {
            var _self = fn,
                timer,
                firstTime;
            return function () {
                var _me = this;
                var args = _me.arguments;
                if (firstTime) {
                    _self.apply(_me, args);
                    firstTime = false;
                }
                if (timer) {
                    return false;
                }
                timer = setTimeout(function () {

                    clearTimeout(timer);
                    timer = null;
                    _self.apply(_me, args);
                }, interval || 50);


            }
        },

        //Json时间转换
        JsonDateFormat: function (jsonDate) {
            try {
                var date = new Date(parseInt(jsonDate.replace("/Date(", "").replace(")/", ""), 10));
                var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var seconds = date.getSeconds();
                var milliseconds = date.getMilliseconds();
                return date.getFullYear() + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
                //return date.getFullYear() + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds + "." + milliseconds;
            } catch (ex) {
                return "";
            }
        },

        //翻页
        GetOptionsFrom: function GetOptionsFrom(callback, items_per_page, display_entries, edge_entries) {
            var opt = { callback: callback }; //数据加载方法
            opt["items_per_page"] = items_per_page;
            opt["num_display_entries"] = display_entries;
            opt["num_edge_entries"] = edge_entries;
            opt["prev_text"] = "上一页";
            opt["next_text"] = "下一页";

            var htmlspecialchars = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }
            $.each(htmlspecialchars, function (k, v) {
                opt.prev_text = opt.prev_text.replace(k, v);
                opt.next_text = opt.next_text.replace(k, v);
            })
            return opt;
        },

        //场景等比压缩
        CreateCompressAnimation: function CreateCompressAnimation(upOrdown, callback) {
            var aniFrameArray = new Array();
            if (upOrdown == "up") {//恢复
                aniFrameArray.push({
                    Scale: map.QVector3(1, 1, 1),
                    Duration: 0.5
                });                
            }
            else if (upOrdown == "down") {//压缩
                aniFrameArray.push({
                    Scale: map.QVector3(1, 0.1, 1),
                    Duration: 0.5
                });                
            }

            map.createNodeAnimation($.Config.AreaName + "/NodeAni" + Math.random(), {
                KeyFrameArray: aniFrameArray,
                TargetNode: map.QSceneNode($.Config.AreaName, "group_14"),
                OnAnimationCreated: function (animation, animationState) {
                    animationState.setLoop(false);
                    animationState.setAutoPlay(true);
                    animationState.play();
                },
                OnAnimationEnd: function (animationState, node) {
                    animationState.setAutoPlay(false); 
                    if (typeof callback == "function") {
                        callback();
                    }
                }
            });
        },
        
        RotationStart: function() {
            //setTimeout(function () { 
            var node = map.QSceneNode($.Config.AreaName + "/" + "empty");
            if (!node) {
                node = map.createNode(0, $.Config.AreaName, "empty"); //空的根节点
            }                
            var logx = map.width() / 2;
            var logy = map.height() / 2;
            var screenCoord = map.QVector2I(logx, logy);
            var groundCoord = map.QGlobalCamera(0).getCrossCoord(screenCoord,-1);
                
            var qVector3 = map.QAreaSceneManager(con.AreaName).toLocalPos(groundCoord);
            node.setPosition(qVector3);                
            var offsetLen = CommonBusiness.getDistance(groundCoord, map.eyePos());
            CommonBusiness.Hover(node, offsetLen);
            //}, 100);            
        },

        RotationEnd: function () {
            CommonBusiness.StopHoverAround();
        },

        DrawPolygon: function (nodeName, polygonOptions, areaCoordsArray) {
            var defaultPolygonOptions = {
                Alpha: 0.4,
                Color: QMapColor.YELLOW
            }            
            $.extend(defaultPolygonOptions, polygonOptions);


            var lineArray = areaCoordsArray.split("|");
            var lineCoordsArray = new Array();
            var sPnt = this.ToLocalPos(map.QVector3d(lineArray[0])[0]);

            lineCoordsArray.push(map.QVector3());
            for (var i = 1; i < lineArray.length; i++) {
                var ePnt = this.ToLocalPos(map.QVector3d(lineArray[i])[0]);
                var newEndPnt = map.QVector3(ePnt.x() - sPnt.x(), ePnt.y() - sPnt.y(), ePnt.z() - sPnt.z());
                lineCoordsArray.push(newEndPnt);
            }

            var material = map.createMaterial("VecMaterialPoly" + Math.random(), { Alpha: defaultPolygonOptions.Alpha, DiffuseColor: map.QColourValue(defaultPolygonOptions.Color, 1), SpecularColor: map.QColourValue(defaultPolygonOptions.Color, 1), EmissiveColor: map.QColourValue(defaultPolygonOptions.Color, 1) });

            map.createPolygon($.Config.AreaName + "/" + nodeName,
            {
                Position: sPnt,
                Orientation: null,
                OrientationType: 0,
                Scale: null,
                Material: material.getName(),
                Points: lineCoordsArray,
                OnPolygonCreated: function (obj) {
                    
                }
            });
        },

        RemovePolygon: function (nodeName) {
            map.QAreaSceneManager($.Config.AreaName).destroySceneNode(nodeName);
        },

        // 突显目标模型
        TargetModel: function (targetNodeName) {
            var i = 0, qModel, k1 = 0;
            map.QLayer("cz_jianzhu").getLayerAllNodes().each(function (sceneNode) {
                qModel = sceneNode.asModel();
                k1 = qModel.getMaterialCount();
                i = 0;
                if (k1 > 0) {
                    for (; i < k1 ; i++) {
                        qModel.makeAloneMaterials();
                        qModel.setMaterial(i, "Material/cztouming02.mtr");

                    }
                }
                qModel.setTransparent(0.7, true)
                if (qModel.getName() == targetNodeName) {
                    qModel.restoreAloneMaterials();
                }
            });
        },

        // 取消突显目标模型
        CancelTargetModel: function (callback) {
            var i = 0, qModel, k1 = 0;
            map.QLayer("cz_jianzhu").getLayerAllNodes().each(function (sceneNode) {
                qModel = sceneNode.asModel();
                qModel.restoreAloneMaterials();
            });
            if (typeof callback == "function") {
                callback();
            }
        },

        // 取消地形效果
        CancelTargetDiXingModel: function (callback) {
            var i = 0, qModel, k1 = 0;
            map.QLayer("dixing").getLayerAllNodes().each(function (sceneNode) {
                qModel = sceneNode.asModel();
                qModel.restoreAloneMaterials();
            });
            if (typeof callback == "function") {
                callback();
            }
        },

        SetLimitViewBox: function (minheight, maxheight) {
            if (arguments.length == 0) { 
                var boxLimit = ["13350449,50,-3525076.0", "13356486,2000,-3528552.0"];
            } else {
                var boxLimit = ["13350449," + minheight + ",-3525076.0", "13356486," + maxheight + ",-3528552.0"];
            }
            
            var qmin3d = map.QVector3d(boxLimit[0]);
            var qmax3d = map.QVector3d(boxLimit[1]);
            map.QGlobalCamera(0)[0].setLimitBoundEX(qmin3d[0], qmax3d[0], 0, 1);            
            map.QGlobalCamera(0)[0].setPitchRange(20, 90);
        },

        GetNowFormatDate: function () {
            var date = new Date();
            var seperator1 = "-";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                    + " " + date.getHours() + seperator2 + date.getMinutes()
                    + seperator2 + date.getSeconds();
            return currentdate;
        },

        // 创建无人机动画
        createNodeDronesAnimation: function (modelName, posXYZ) {
            
            var modelFullName = $.Config.AreaName + "/" + modelName;
            var childrenName = modelFullName + "/Circle" + modelName;

            if (map.QSceneNode(modelFullName) != null) {
                map.QSceneNode(modelFullName).remove();
            }
            var meshName = "dajiangm600.mesh"
            var meshAnimation = "wlry_Take 001.animation"
            var meshScale = "10,10,10"

            // 添加带骨骼动画模型		
            if (map.QSceneNode(modelFullName) == null) {

                map.createModel(modelFullName, "Mesh/" + meshName, {
                    Position: map.QVector3(posXYZ),
                    Orientation: map.QVector3(0, 0, 0),
                    OrientationType: 2,
                    Scale: map.QVector3(meshScale), //模型缩小
                    OnModelCreated: function (model) {
                        //模型原地走动
                        model.setSkeletonAnimation("Mesh/" + meshAnimation).getSkeletonAnimationState().setLoop(true).setAutoPlay(true).play();
                        model.loadAllResource();

                        //开启模型移动
                        model.getNodeAnimationState().setLoop(false).setAutoPlay(true);
                    },
                });

                //光圈效果                
                map.createModel(childrenName, "Mesh\\quan.mesh", {
                    Position: map.QVector3("0,0,0"),
                    Orientation: null,
                    OrientationType: 1,
                    Scale: map.QVector3("1,1,1"),
                    OnModelCreated: function () {
                    }
                });
                
                //添加关键帧 用于模型  
                var p1 = map.QVector3(posXYZ);
                var p2 = map.QVector3(posXYZ);

                $.PublicData.LastPosXYZ = map.QVector3(posXYZ);                

                var aniFrameArray = new Array();
                aniFrameArray.push({
                    Translate: posXYZ,
                    Rotate: map.QVector3(0, $.Common.aniFace1(p1, p2, 90), 0),
                    Scale: meshScale,
                    Duration: 0//$.Data.CurrentDuration
                });
                aniFrameArray.push({
                    Translate: posXYZ,
                    Rotate: map.QVector3(0, $.Common.aniFace1(p1, p2, 90), 0),
                    Scale: meshScale,
                    Duration: 0//$.Data.CurrentDuration
                });

                //var nodeStr = $.Config.AreaName + "/RoamWalker";

                //var sceneNodeObj = map.QSceneNode(nodeStr);
                ////$.Common.createModleAnimation(sceneNodeObj, aniFrameArray);

                //if (map.QSceneNode("AreaTest/TestLocalRoamCamera") != null) {
                //    map.QSceneNode("AreaTest/TestLocalRoamCamera").remove();
                //}
            }
        },

        //创建模型动画
        createModleAnimation: function (sceneNodeObj, coordArray, nodeAniName) {

            if (sceneNodeObj != null) {

                var objAnimation = map.QResource(3, nodeAniName);
                var objNodeAnimation;
                var objState = sceneNodeObj.getNodeAnimationState();
                if (objAnimation == null) {
                    map.createNodeAnimation(nodeAniName, {
                        TargetNode: sceneNodeObj,
                    });
                    objAnimation = map.QResource(3, nodeAniName);
                    sceneNodeObj.setNodeAnimationName(nodeAniName);
                    objNodeAnimation = objAnimation.asNodeAnimation()
                    objNodeAnimation.removeAllKeyframes();
                    for (i = 0; i < coordArray.length ; i++) {
                        objNodeAnimation.addKeyframe(coordArray[i].Translate, coordArray[i].Rotate, map.QVector3(coordArray[i].Scale), coordArray[i].Duration);
                    }
                }
                else {
                    sceneNodeObj.setNodeAnimationName(nodeAniName);
                    objNodeAnimation = objAnimation.asNodeAnimation()
                    objNodeAnimation.removeAllKeyframes();
                    for (i = 0; i < coordArray.length ; i++) {
                        objNodeAnimation.addKeyframe(coordArray[i].Translate, coordArray[i].Rotate, map.QVector3(coordArray[i].Scale), coordArray[i].Duration);
                    }
                }

                if (objState != null) { objState.play(); }

                return objState;
            }
        },

        GetAniFrameArray: function () {
            if (arguments.length == 6) {
                var aniFace = map.QVector3(0, $.Common.aniFace1(arguments[1], arguments[2], 90), 0);
            }
            if (arguments.length == 7 && typeof (arguments[6]) == "number") {
                var aniFace = map.QVector3(0, arguments[6], 0);
            }

            var pos1, pos2
            pos1 = map.QAreaSceneManager($.Config.AreaName).toGlobalPos(arguments[1])
            pos2 = map.QAreaSceneManager($.Config.AreaName).toGlobalPos(arguments[2])
            var duration = map.QMath().getDistance(pos1, pos2) / parseInt(arguments[5] < 1 ? 2 : arguments[5] + 2);

            //第一个点进入第二个点
            arguments[0].push({
                Translate: arguments[1],
                Rotate: map.QVector3(0, 0, 0),//aniFace,
                Scale: arguments[3],
                Duration: arguments[4] + 0
            });
            arguments[0].push({
                Translate: arguments[2],
                Rotate: map.QVector3(0, 0, 0),//aniFace,
                Scale: arguments[3],
                Duration: arguments[4] + parseInt(duration < 1 ? 1 : duration) + 0
            });
            
            $.PublicData.LastPosXYZ = arguments[2];
            var currentDuration = parseInt(arguments[4]) + (duration < 1 ? 1 : duration) + 1;

            return { "aniFrameArray": arguments[0], "duration": currentDuration };
        },

        SetLimitViewBox: function (minheight, maxheight) {
            if (arguments.length == 0) {
                //var boxLimit = ["11821763.294433593,30,-4283134.538818358", "11828383.739257812,1500,-4290311.805419921"];
                var boxLimit = ["11829729.900184625,30,-4292063.913972855", "11809696.203918451,1500,-4279951.286958694"];
            } else {
                var boxLimit = ["13350449," + minheight + ",-3525076.0", "13356486," + maxheight + ",-3528552.0"];
            }

            var qmin3d = map.QVector3d(boxLimit[0]);
            var qmax3d = map.QVector3d(boxLimit[1]);
            map.QGlobalCamera(0)[0].setLimitBoundEX(qmin3d[0], qmax3d[0], 0, 1);
            map.QGlobalCamera(0)[0].setPitchRange(-90, 90);
        },

        //高斯坐标转换
        GaussTransform: function (gpslist) {
            //**************** 高斯坐标转换
            var basex = $.Config.basex;
            var basey = $.Config.basey;

            var poslist = new Array();

            for (i = 0; i < gpslist.length; i++) {
                var gpsx = gpslist[i].clatitude;
                var gpsy = gpslist[i].clongitude;

                var qx = -(gpsx - basex);
                var qy = gpsy - basey;

                poslist.push(qy + "," + gpslist[i].altitude + "," + qx);
            }

            return poslist;
            //**************** 高斯坐标转换
        },

        //高斯坐标转换
        QVector32Gauss: function (y, x) {

            var basex = $.Config.basex;
            var basey = $.Config.basey;

            var gpsx = x;
            var gpsy = y;

            var qx = parseFloat(basex) - parseFloat(gpsx);
            var qy = parseFloat(gpsy) + parseFloat(basey);

            return { "lng": qx, "lat": qy };

        },

        //高斯坐标转换
        Gauss2QVector3: function (x,y,z) {
            //**************** 高斯坐标转换
            var basex = $.Config.basex;
            var basey = $.Config.basey;

            var poslist = new Array();

            var gpsx = x;
            var gpsy = y;

            var qx = -(gpsx - basex);
            var qy = gpsy - basey;

            return (qy + "," + z + "," + qx);
            //**************** 高斯坐标转换
        },
        //
        SetFormatTime: function (start, end, t) {
            var _date = new Date();
            //前天
            if (t == -2) {
                var e_date = new Date();
                e_date.setDate(_date.getDate() - 1);
                var _y1 = e_date.getFullYear();
                var _m1 = e_date.getMonth() + 1;
                var _d1 = e_date.getDate();

                if (_m1 < 10) {
                    _m1 = "0" + _m1;
                }
                if (_d1 < 10) {
                    _d1 = "0" + _d1;
                }
                end.val(_y1 + "/" + _m1 + "/" + _d1 + " " + "00:00");

                var s_date = new Date();
                s_date.setDate(_date.getDate() - 2);
                var _y2 = s_date.getFullYear();
                var _m2 = s_date.getMonth() + 1;
                var _d2 = s_date.getDate();

                if (_m2 < 10) {
                    _m2 = "0" + _m2;
                }
                if (_d2 < 10) {
                    _d2 = "0" + _d2;
                }
                start.val(_y2 + "/" + _m2 + "/" + _d2 + " " + "00:00");
            }
            //昨天
            if (t == -1) {
                var _y2 = _date.getFullYear();
                var _m2 = _date.getMonth() + 1;
                var _d2 = _date.getDate();

                if (_m2 < 10) {
                    _m2 = "0" + _m2;
                }
                if (_d2 < 10) {
                    _d2 = "0" + _d2;
                }
                end.val(_y2 + "/" + _m2 + "/" + _d2 + " " + "00:00");

                _date.setDate(_date.getDate() - 1);
                var _y1 = _date.getFullYear();
                var _m1 = _date.getMonth() + 1;
                var _d1 = _date.getDate();

                if (_m1 < 10) {
                    _m1 = "0" + _m1;
                }
                if (_d1 < 10) {
                    _d1 = "0" + _d1;
                }
                start.val(_y1 + "/" + _m1 + "/" + _d1 + " " + "00:00");
            }
            //今天
            if (t == 0) {
                var _y1 = _date.getFullYear();
                var _m1 = _date.getMonth() + 1;
                var _d1 = _date.getDate();
                if (_m1 < 10) {
                    _m1 = "0" + _m1;
                }
                if (_d1 < 10) {
                    _d1 = "0" + _d1;
                }
                start.val(_y1 + "/" + _m1 + "/" + _d1 + " " + "00:00");

                _date.setDate(_date.getDate() + 1);
                var _y2 = _date.getFullYear();
                var _m2 = _date.getMonth() + 1;
                var _d2 = _date.getDate();
                if (_m2 < 10) {
                    _m2 = "0" + _m2;
                }
                if (_d2 < 10) {
                    _d2 = "0" + _d2;
                }
                end.val(_y2 + "/" + _m2 + "/" + _d2 + " " + "00:00");
            }
            //本周
            if (t == 1) {
                //本周第一天
                var nowDayOfWeek = _date.getDay();//今天本周的第几天 
                var s_date = new Date();
                s_date.setDate(s_date.getDate() - nowDayOfWeek);
                var s_y = s_date.getFullYear();
                var s_m = s_date.getMonth() + 1;
                var s_d = s_date.getDate();
                if (s_m < 10) {
                    s_m = "0" + s_m;
                }
                if (s_d < 10) {
                    s_d = "0" + s_d;
                }
                start.val(s_y + "/" + s_m + "/" + s_d + " " + "00:00");

                //本周最后一天的下一天（下周第一天）
                var e_date = new Date();
                e_date.setDate(e_date.getDate() + (7 - nowDayOfWeek));
                var e_y = e_date.getFullYear();
                var e_m = e_date.getMonth() + 1;
                var e_d = e_date.getDate();
                if (e_m < 10) {
                    e_m = "0" + e_m;
                }
                if (e_d < 10) {
                    e_d = "0" + e_d;
                }
                end.val(e_y + "/" + e_m + "/" + e_d + " " + "00:00");
            }
            //本月
            if (t == 2) {
                var s_y = _date.getFullYear();
                var s_m = _date.getMonth() + 1;
                start.val(s_y + "/" + s_m + "/" + 1 + " " + "00:00");
                //本月最后一天的下一天（下月第一天）
                _date.setDate(_date.getMonth() + 1);
                var e_y = _date.getFullYear();
                var e_m = _date.getMonth() + 1;
                end.val(e_y + "/" + (e_m + 1) + "/" + 1 + " " + "00:00");
            }
        },

        AddPipe: function () {

            var material = null;
            if (map.QMaterial("defaultMaterialForPipe") == null) {
                material = map.createMaterial("defaultMaterialForPipe", { Alpha: 0.6, EmissiveColor: map.QColourValue("#ff0000", 1), LightEnable: false });
            }
            else {
                material = map.QMaterial("defaultMaterialForPipe");
                material.setAlpha(0.8);
                material.setEmissiveColor(map.QColourValue("#ffff00", 1));
            }

            var lineArray = new Array();

            var v3 = map.QAreaSceneManager("XHQ").toLocalPos(map.QVector3d(13501831.075169, 10, -3469376.213263));
            lineArray.push(map.QArcVertex({ Pos: v3, Radius: 1.0, DAngle: 10 }));
            v3 = map.QAreaSceneManager("XHQ").toLocalPos(map.QVector3d(13501839.926174, 10, -3469389.571796));
            lineArray.push(map.QArcVertex({ Pos: v3, Radius: 1.0, DAngle: 10 }));
            v3 = map.QAreaSceneManager("XHQ").toLocalPos(map.QVector3d(13501843.733015, 10, -3469379.519093));
            lineArray.push(map.QArcVertex({ Pos: v3, Radius: 1.0, DAngle: 10 }));

            var linePointsArray = [lineArray];
            map.createPipe("XHQ/testPipe", {
                Material: "defaultMaterialForPipe",
                PipeOptions: {
                    CrossPieces: 24,
                    RadiusInner: 0,
                    RadiusOuter: 1.0,
                    Points: lineArray
                },
                OnPipeCreated: function (VectorNodeAppend) {
                    //LineNode.showLinePointAux(true);
                    //map.disableDefaultMouseEvent(QMapMouseEvent.OnLButtonDown);
                    VectorNodeAppend[0].resetCenter();
                }
            });

        },
    })

}($.Common || {}))
