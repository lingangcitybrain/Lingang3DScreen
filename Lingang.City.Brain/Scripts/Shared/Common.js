define(["config"], function (con) {
    return {

        CloseHtmlwidget: function (dialogname) {
            //var htmlSys = map[0].getExternUIWidgetSys();
            var htmlSys = mapObj._map3d.getExternUIWidgetSys();
            htmlSys.destroyWidget(dialogname);
        },
        getUIWidget: function (layoutNm, widgetNm) {
            var uiSystem = mapObj._map3d.getUISystem(),
                layout = uiSystem.getLayout(layoutNm)

            return layout.getWidget(widgetNm);
            //mapObj._map3d.getUISystem().getLayout('Utility_menu').getWidget('ZTie_nav_icon1').setVisible(1);
        },
        showInfoHWbyConfig: function (config, paramStr, nodeName) {
            if (config != null) {
                var url;
                //if (!!config.ParamFormat) {
                if (!!paramStr) {
                    var params = paramStr.split(";");
                    var param = config.ParamFormat;
                    for (var i = 0; i < params.length; i++) {
                        var searchValue = params[i].split(",")[0];
                        var replaceValue = params[i].split(",")[1];
                        param = param.replace(searchValue, replaceValue);
                    }
                    url = con.WebServiceUrl + config.HtmlUrl + "?" + param;
                }
                else {
                    url = con.WebServiceUrl + config.HtmlUrl;
                }
                //}
                //else {
                //    url = con.WebServiceUrl + config.HtmlUrl;
                //}
                var options = {
                    Name: config.Name,
                    //背景图片
                    BackImageUrl: config.BackImageUrl == null ? "Texture/Common/box_xinxi.png" : config.BackImageUrl,
                    //设置TitleSize拖动时，必须为""
                    TitleImageUrl: "",
                    HtmlUrl: url,
                    Layout: config.Layout == null ? 0 : config.Layout,//0左上 1右上 2左下 3右下
                    //HtmlWidget对象坐标
                    Position: config.Position == null ? Q3D.vector2(100, 100) : Q3D.vector2(config.Position),
                    //HtmlWidget对象尺寸
                    Size: config.Size == null ? Q3D.vector2(380, 192) : Q3D.vector2(config.Size),
                    //html页面相对位置
                    ClientRectPosition: config.ClientRectPosition == null ? Q3D.vector2(6, 4) : Q3D.vector2(config.ClientRectPosition),
                    //html页面尺寸
                    ClientRectSize: config.ClientRectSize == null ? Q3D.vector2(367, 182) : Q3D.vector2(config.ClientRectSize),
                    //拖动区域相对位置
                    TitlePosition: config.TitlePosition == null ? Q3D.vector2(0, 0) : Q3D.vector2(config.TitlePosition),
                    //拖动区域尺寸
                    TitleSize: config.TitleSize == null ? Q3D.vector2(380, 192) : Q3D.vector2(config.TitleSize),
                    ////HtmlWidget对象关闭范围相对位置
                    //CloseRectPosition: Q3D.vector2(0, 0),
                    ////HtmlWidget对象关闭范围
                    //CloseRectSize: Q3D.vector2(380, 250),
                    Alpha: 1,
                    FadeIn: 0.5,
                    ZOrder: null,
                    TooltipOptions: {
                        TriFillColor: Q3D.colourValue("#0987a3", 1),//连接线边框填充色
                        TriAlpha: 0.5,
                        EdgeColor: Q3D.colourValue("#0987a3", 1),//连接线边框颜色
                        EdgeWidth: 1,
                    },
                    OnUserNotify: config.OnUserNotify,
                    OnHtmlWidgetClosed: config.OnHtmlWidgetClosed == null ? null : config.OnHtmlWidgetClosed,

                }
                map.createHtmlWidget(config.AreaName, nodeName, options);
            }
        },
        showModelInfoModel: function (option, node, url) {
            var defaultOption = {
                Name: '',
                //背景图片
                BackImageUrl: "Texture/Common/box_xinxi.png",
                //设置TitleSize拖动时，必须为""
                TitleImageUrl: "",
                HtmlUrl: url,
                Layout: 0,//0左上 1右上 2左下 3右下
                //HtmlWidget对象坐标
                Position: Q3D.vector2(500, 223),
                //HtmlWidget对象尺寸
                Size: Q3D.vector2(270, 350),
                //html页面相对位置
                ClientRectPosition: Q3D.vector2(0, 0),
                //html页面尺寸
                ClientRectSize: Q3D.vector2(270, 350),
                //拖动区域相对位置
                TitlePosition: Q3D.vector2(0, 0),
                //拖动区域尺寸
                TitleSize: Q3D.vector2(220, 50),
                ////HtmlWidget对象关闭范围相对位置
                //CloseRectPosition: Q3D.vector2(0, 0),
                ////HtmlWidget对象关闭范围
                //CloseRectSize: Q3D.vector2(380, 250),
                Alpha: 0.8,
                FadeIn: 0.5,
                ZOrder: null,
                TooltipOptions: {
                    TriFillColor: Q3D.colourValue("#2656ac", 1),//连接线边框填充色
                    TriAlpha: 0.8,
                    EdgeColor: Q3D.colourValue("#2889cd", 1),//连接线边框颜色
                    EdgeWidth: 2,
                },
                OnHtmlWidgetClosed: null,
                OnUserNotify: null,
            }
            $.extend(defaultOption, option);

            var nodeSplit = node.split('/');
            // AreaName,NodeName 为画线终端模型
            window.map.createHtmlWidget(nodeSplit[0], nodeSplit[1], defaultOption);
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
        /************************poi操作开始*******************************************************/
        /*
     *@根据data批量初始化poi -------无跳动效果
     *@method    InitPoi
     *areaName           {string}                 场景名称
     *data               {Object}                 场景名称
         - POIName       POI名称
         - Icon          图标
         - AbsPos        位置坐标
         - Text          文本
     */
        createPOI: function (areaName, data) {
            var nodeArr = [];
            for (i = 0; i < data.length; i++) {
                var pName = data[i].POIName;
                var fullNodePath = areaName + "/" + pName;
                nodeArr.push(fullNodePath);
                var node = map.getSceneNode(areaName, pName);
                if (node) {
                    node.setVisible(true);
                }
                else {
                    //给定POI参数		
                    var createOptions = {
                        Position: data[i].Position,//data[i].Position.toVector3(),
                        Orientation: null,
                        OrientationType: Q3D.Enums.nodeOrientationType.Self,
                        Scale: Q3D.vector3(1, 1, 1),
                        POIOptions: {
                            FontSize: data[i].FontSize == null ? 14 : data[i].FontSize,
                            FontName: "微软雅黑",
                            FontColor: Q3D.colourValue(data[i].FontColor, 1),
                            CharScale: 1,
                            Text: data[i].Text,
                            Icon: data[i].Icon,
                            IconSize: Q3D.vector2(data[i].IconSize == null ? [50, 50] : data[i].IconSize),
                            POILayout: Q3D.Enums.poiLayOut.Bottom,
                            UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
                            IconAlphaEnabled: true,
                            FontOutLine: 2, //同描边有关
                            FontEdgeColor: Q3D.colourValue("#80ffff", 1),
                            AlphaTestRef: null,
                            Location: Q3D.Enums.poiImagePositionType.POI_LOCATE_BOTTOM,
                            LocationOffset: null, //当Location为POI_LOCATE_CUSTOM起作用
                            BackFrameBorderSize: null,//2, //同边框有关 背景边框大小
                            BackBorderColor: null,//Q3D.colourValue("#80ffff", 1),//背景边框颜色
                            BackFillColor: null,//Q3D.colourValue("#80ffff", 1),//背景填充色
                            LabelMargin: null,
                            IconLabelMargin: null,
                            SpecialTransparent: true,
                            AlwaysOnScreen: true,
                        }
                    };

                    map.createPOI(fullNodePath, createOptions);
                }
            }
        },

        createFloorPoi: function (poiNm, position, option) {
            var fullNodePath = con.AreaName + "/" + poiNm;
            var defaultOption = {
                FontSize: 13,
                FontName: "微软雅黑",
                FontColor: Q3D.colourValue("#000000", 1),
                CharScale: 1.0,
                Text: "",
                Icon: 'Texture/Common/poi_floor_indicate3.png',
                IconSize: Q3D.vector2(180, 32),
                POILayout: Q3D.Enums.poiLayOut.Center,
                UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
                IconAlphaEnabled: true,
                FontOutLine: 2, //文字描边宽度
                FontEdgeColor: Q3D.colourValue("#54f5fb", 1),//文字描边颜色
                AlphaTestRef: null,
                Location: Q3D.Enums.poiImagePositionType.POI_LOCATE_LEFT, //设置POI对象中心点位置类型
                LocationOffset: Q3D.vector2(20, 180), //当Location为POI_LOCATE_CUSTOM起作用
                BackFrameBorderSize: null, //设置文字边框的宽度
                BackBorderColor: null,//Q3D.colourValue("#0000FF", 1), //设置文字边框线颜色
                BackFillColor: null,//Q3D.colourValue("#80ffff", 1), //设置文字边框内的填充颜色
                LabelMargin: null,
                IconLabelMargin: null,
                SpecialTransparent: true,
                AlwaysOnScreen: true,
            };
            $.extend(defaultOption, option);

            //给定 POI 参数
            var createOptions = {
                Position: map.getArea(con.AreaName).toLocalPos(position),
                Orientation: null,
                OrientationType: Q3D.Enums.nodeOrientationType.Parent,
                Scale: null,
                POIOptions: defaultOption
            };
            map.createPOI(fullNodePath, createOptions);
        },

        /*
        *@根据data批量创建PolyLine
        *@method    CreatePolyLine
        *areaName           {string}                 场景名称
        *data               {Object}                 场景名称
           - LineName      线名称
           - Material      材质文件路径
           - LineType      线对象线形
           - LineWidth     线宽度
           - Color         线颜色代码
           - LinePoints    关键点位置字符串，以';'分割
       */
        CreatePolyLine: function (areaName, data) {
            var area = map.getArea(areaName);

            //for (var i = 0; i < data.length; i++) {
            var nodePath = areaName + "/" + data.LineName;

            var node = window.map.getSceneNode(areaName, data.LineName);
            if (node) {
                node.setVisible(true);
            }
            else {

                //var linePoint = [];
                //var lps = data.LinePoints.split(",");
                //for (var j = 0; j < lps.length; j++) {
                //    if (lps[j] != "") {
                //        linePoint.push(this.ToLocalPos(area, lps[j]));
                //        //linePoint.push(lps[j].toVector3());
                //    }
                //}
                //[["-123.26383209228515,92.77953338623047,48.371185302734375", "-118.43550872802734,90.19148254394531,66.5167465209961"]]
                var createOptions = {
                    Material: data.Material,
                    SpecialTransparent: true, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                    LinePoints: [data.LinePoints],
                    LineOptions: {
                        LineType: data.LineType,
                        BesselDim: 2, //贝塞尔曲线阶数
                        Subdivision: 20, //设置生成曲线细分程度
                        LineWidth: data.LineWidth,
                        WrapLen: 2,
                        //以下用于动态创建的材质  
                        Color: Q3D.colourValue(data.Color, 1), //线的颜色
                        Alpha: data.Alpha == null ? 1 : data.Alpha, //线的透明度
                        //Dotted: false, //是否虚线, 配合Dynamic使用
                        //Dynamic: false, //是否动态线
                    },
                    OnLineCreated: function () {
                        //map.alertDialog("End of creating poly line");
                    }
                };

                window.map.createPolyLine(nodePath, createOptions);
                //}
            }
        },


        /*************************坐标转换*************************************************************/
        /*
         *@获取Vector3坐标
        *@method     ToLocalPos
        *area           {object}/{String}   区域对象/区域名称
        *options        {object}/{String}   Vector3d坐标对象
        */
        ToLocalPos: function (area, options) {
            try {
                if ($.type(area) == "string") {
                    if ($.type(options) == "string") {
                        return map.getArea(area).toLocalPos(options.toVector3d());
                    }
                    return map.getArea(area).toLocalPos(options);
                }
                else {
                    if ($.type(options) == "string") {
                        return area.toLocalPos(options.toVector3d());
                    }
                    return area.toLocalPos(options);
                }
            } catch (e) {
                this.DisposeErr(e);
            }

        },
        /*
        *@根据data批量初始化poi  --------------有跳动效果
        *@method    InitPoi
        *areaName           {string}                 场景名称
        *data               {Object}                 场景名称
            - POIName       POI名称
            - Icon          图标
            - AbsPos        位置坐标
            - Text          文本
        */
        InitPois: function (areaName, data) {
            var nodeArr = [];
            for (i = 0; i < data.length; i++) {
                var pName = data[i].POIName;
                var fullNodePath = areaName + "/" + pName;
                nodeArr.push(fullNodePath);
                var node = map.getSceneNode(areaName, pName);
                if (node) {
                    node.setVisible(true);
                }
                else {
                    //给定POI参数		
                    var createOptions = {
                        Position: data[i].Position,//data[i].Position.toVector3(),
                        Orientation: null,
                        OrientationType: Q3D.Enums.nodeOrientationType.Self,
                        Scale: Q3D.vector3(1, 1, 1),
                        POIOptions: {
                            FontSize: data[i].FontSize == null ? 14 : data[i].FontSize,
                            FontName: "微软雅黑",
                            FontColor: Q3D.colourValue(data[i].FontColor, 1),
                            CharScale: 1,
                            Text: data[i].Text,
                            Icon: data[i].Icon,
                            IconSize: Q3D.vector2(data[i].IconSize == null ? [50, 50] : data[i].IconSize),
                            POILayout: Q3D.Enums.poiLayOut.Bottom,
                            UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
                            IconAlphaEnabled: true,
                            FontOutLine: 0, //同描边有关
                            FontEdgeColor: Q3D.colourValue("#000000", 1),
                            AlphaTestRef: null,
                            Location: data[i].Location == null ? Q3D.Enums.poiImagePositionType.POI_LOCATE_BOTTOM : data[i].Location,
                            LocationOffset: data[i].LocationOffset == null ? null : data[i].LocationOffset, //当Location为POI_LOCATE_CUSTOM起作用
                            BackFrameBorderSize: null,//2, //同边框有关 背景边框大小
                            BackBorderColor: null,//Q3D.colourValue("#80ffff", 1),//背景边框颜色
                            BackFillColor: null,//Q3D.colourValue("#80ffff", 1),//背景填充色
                            LabelMargin: null,
                            IconLabelMargin: null,
                            SpecialTransparent: true,
                            AlwaysOnScreen: true,
                        }
                    };

                    map.createPOI(fullNodePath, createOptions);
                }
            }

            //map.setBatchPOIJump(nodeArr, 1, 2);
        },
        VideoDialog: function (videoDialogName, areaName, nodeName, option, type) {
            type = $.type(type) == "undefined" ? "TargetNode" : type;
            map.removeVideo(videoDialogName);
            var node, nodepos;
            if (type != "None") {
                node = map.getSceneNode(areaName, nodeName);
                nodepos = node.getAbsPos();
            }
            //var value = data.get(nodeName);
            // if (value) {
            var videoOptions = {
                VideoPath: option.VideoPath,
                //VideoPath: monitorURL.indexOf("rtsp://") > -1 ? monitorURL : con.WebServiceUrl + monitorURL,//con.WebServiceUrl + "content/video/" + value.Source,
                VideoType: Q3D.Enums.videoSourceType.VIDSRC_NETSTREAM,//本地视频
                Title: {
                    Text: option.Text,
                    Color: Q3D.colourValue("#FFFFFF", 1),
                    Height: option.TitleHeight == null ? 24 : option.TitleHeight,
                },
                Left: option.Left == null ? 100 : option.Left,
                Top: option.Top == null ? 100 : option.Top,
                Height: option.Height == null ? 300 : option.Height,
                Width: option.Width == null ? 400 : option.Width,
                IndicatrixLocation: option.IndicatrixLocation == null ? 1 : option.IndicatrixLocation,
                IsIndicatrixVisible: type == "None" ? false : true,
                TargetNode: type == "TargetNode" ? node : null,
                TargetPosition: type == "TargetPosition" ? nodepos : null,
                AttachNode: type == "AttachNode" ? node : null,
                IndicatrixMatrial: type == "None" ? null : "Material/videoline.mtr",
                OnVideoCtrlClose: function () {
                    //alert(1);
                    require("monitor").videoClose(nodeName);
                }
            };
            map.videoDialog(videoDialogName, videoOptions);
            //放大缩小事件监听
            var uiSystem = map.getOcx().getUISystem(),
            videoLayout = uiSystem.getLayout(videoDialogName);
            zoomInBtnWidget = videoLayout.getWidget("Park_ZoomInBtn").asButton();
            zoomOutBtnWidget = videoLayout.getWidget("Park_ZoomOutBtn").asButton();
            //zoomVideoCloseWidget = videoLayout.getWidget("_buttonClose").asButton();
            if (zoomInBtnWidget) {
                map.getOcx().setUIMouseButtonClickEventListener(zoomInBtnWidget);
            }
            if (zoomOutBtnWidget) {
                map.getOcx().setUIMouseButtonClickEventListener(zoomOutBtnWidget);
            }
            //if (zoomVideoCloseWidget) {
            //    map.getOcx().setUIMouseButtonClickEventListener(zoomVideoCloseWidget);
            //}
            //}
        },
        closeHtmlwidget: function (dialogname) {
            var htmlSys = mapObj._map3d.getExternUIWidgetSys();
            htmlSys.destroyWidget(dialogname);
        },
        // 模型压缩
        modelCompressAni: function (uporDown, targetAreaName, targetNode, speed, callback) {
            var ani = Q3D.movieClip("CompressAni", 25);
            ani.removeAllActors();
            var aniInst = Q3D.movieClipInstance("CompressAniInst", ani);

            if (uporDown == 'up') {
                var start = { x: 1, y: 0.1, z: 1 },
                    end = { x: 1, y: 1, z: 1 };
            }
            else if (uporDown == 'down') {
                var start = { x: 1, y: 1, z: 1 },
                    end = { x: 1, y: 0.1, z: 1 };
            }

            var dataArray = [],
                interval = {
                    dx: (end.x - start.x) / speed,
                    dy: (end.y - start.y) / speed,
                    dz: (end.z - start.z) / speed
                };

            for (var i = 0; i < speed; ++i) {
                var keyInfo = {
                    Key: i.toString(),
                    Scale: Q3D.vector3([start.x + interval.dx * i, start.y + interval.dy * i, start.z + interval.dz * i])
                };
                dataArray.push(keyInfo);
            }

            ani.addActorScaleAnimation("RoleAni", dataArray);
            var node = map.getSceneNode(targetAreaName, targetNode);
            aniInst.setTransformPlayer("RoleAni", node);
            aniInst.setPlayOptions(0, 0);
            aniInst.play();

            if (typeof callback == "function") {
                callback();
            }
            return aniInst;

        },
        SetHashMapStyle: function (areaName, hashMap, option) {
            if (hashMap.size() > 0) {
                for (var i = 0; i < hashMap.size() ; i++) {
                    var key = hashMap.keys()[i];
                    //var value = hashMap.get(key);
                    var node = map.getSceneNode(areaName, key);
                    if (node) {
                        var poi = node.asPOI();
                        //poi.setFontColor(Q3D.colourValue("#0000CC", 1));
                        poi.setIcon("Texture/Common/" + option.Icon);
                    }
                }
            }
        },
        //取小数点后六位（四舍五入）
        getFloat: function (number) {
            //n = n ? parseInt(n) : 0; 
            //if (n <= 0) return Math.round(number); 
            number = Math.round(number * Math.pow(10, 6)) / Math.pow(10, 6);
            return number;
        },
        createImageWidget: function () {
            var qUIWindowSysExtend = mapObj._map3d.getWorldManager().getUIWindowSys(0);
            if (arguments.length == 1 && typeof (arguments[0]) == "string") {
                var imageWidget = qUIWindowSysExtend.createImageWidget(arguments[0]);

                return qUIWindowSysExtend.getWidget(arguments[0]).asImageWidget();

            }
            else if (arguments.length == 2 && typeof (arguments[0]) == "string" && typeof (arguments[1]) == "object") {
                var imageWidgetDefaultSettings = {
                    Margin: {
                        top: null,
                        left: null,
                        bottom: null,
                        right: null
                    },
                    Layout: {
                        width: null,
                        height: null
                    },
                    Alpha: 0.8,
                    ZOrder: 1,
                    Image: "Texture/notice.png",
                    UVRect: "0,0,1,1"
                }
                $.extend(true, imageWidgetDefaultSettings, arguments[1]);
                var imageWidget = qUIWindowSysExtend.createImageWidget(arguments[0]);
                if (imageWidgetDefaultSettings.Margin.top != null) {
                    imageWidget.setMarginTop(imageWidgetDefaultSettings.Margin.top);
                }
                if (imageWidgetDefaultSettings.Margin.left != null) {
                    imageWidget.setMarginLeft(imageWidgetDefaultSettings.Margin.left);
                }
                if (imageWidgetDefaultSettings.Margin.bottom != null) {
                    imageWidget.setMarginBottom(imageWidgetDefaultSettings.Margin.bottom);
                }
                if (imageWidgetDefaultSettings.Margin.right != null) {
                    imageWidget.setMarginRight(imageWidgetDefaultSettings.Margin.right);
                }
                if (imageWidgetDefaultSettings.Layout.width != null) {
                    imageWidget.setLayoutWidth(imageWidgetDefaultSettings.Layout.width);
                }
                if (imageWidgetDefaultSettings.Layout.height != null) {
                    imageWidget.setLayoutHeight(imageWidgetDefaultSettings.Layout.height);
                }
                imageWidget.setAlpha(imageWidgetDefaultSettings.Alpha);
                imageWidget.setZOrder(imageWidgetDefaultSettings.ZOrder);
                if (imageWidgetDefaultSettings.Image != null) {
                    imageWidget.setImage(imageWidgetDefaultSettings.Image);
                    imageWidget.setUVRect(imageWidgetDefaultSettings.UVRect);
                }
                return imageWidget;
            }
            else {
                return null;
            }
        },
        destroyImageWidget: function (widgetName) {
            var uiWindowSys = map.getOcx().getWorldManager().getUIWindowSys(0);
            uiWindowSys.destroyWidget(widgetName);

        },
        /*
        *@ 84坐标转火星坐标        
        *@ lng {String} 经度
        *@ lat {String} 纬度
        */
        wgs84togcj02: function (lng, lat) {
            return wgs84togcj02(lng, lat);
        },

        //根据hashmap对象隐藏节点
        SetHashMapVisible: function (hashMap, isTrue, keyword) {
            if (hashMap.size() > 0) {
                for (i = 0; i < hashMap.size() ; i++) {
                    var key = hashMap.keys()[i];
                    var value = hashMap.get(key);
                    if (value) {
                        var POIName = value.POIName;
                        var areaName = value.AreaName;
                        if (keyword != null && keyword != "") {
                            if (POIName.indexOf(keyword) <= -1) continue;
                        }
                        var node = map.getSceneNode(areaName, POIName);//map.getSceneNode(areaName, key)
                        if (node) {
                            node.setVisible(isTrue);
                            //map.getArea(cfgobj.AreaName).destroySceneNode(key);
                        }
                    }

                    /*var key = hashMap.keys()[i];
                    //var value = hashMap.get(key);
                    var node = map.getSceneNode(areaName, key);
                    if (node) {
                        node.setVisible(isTrue);
                        //map.getArea(con.AreaName).destroySceneNode(key);
                    }*/
                }
                //hashMap.clear();
            }

        },

        //绘制模型到屏幕连线
        nodeLineToScreen: function (node, option) {
            var defaultOptions = {
                Name: 'lineTooltip01',
                Margin: {
                    left: 200, //窗口坐标x
                    top: 200, //窗口坐标y
                    bottom: null,
                    right: null
                },
                Layout: {
                    width: 219,//窗口宽
                    height: 123//窗口高
                },
                TooltipOptions: {
                    TriFillColor: Q3D.colourValue("#2656ac", 1).get(),//连接线边框填充色
                    TriAlpha: 0.8,
                    EdgeColor: Q3D.colourValue("#2889cd", 1).get(),//连接线边框颜色
                    EdgeWidth: 2,
                },
                OnUserNotify: null,
            }
            $.extend(defaultOptions, option);

            var qUIWindowSysExtend = mapObj._map3d.getWorldManager().getUIWindowSys(0);
            var tooltipWidget = qUIWindowSysExtend.createTooltipWidget(defaultOptions.Name);

            if (node != null && tooltipWidget != null) {
                tooltipWidget.setTriFillColor(defaultOptions.TooltipOptions.TriFillColor);
                tooltipWidget.setTriAlpha(defaultOptions.TooltipOptions.TriAlpha);
                tooltipWidget.setEdgeWidth(defaultOptions.TooltipOptions.EdgeWidth);
                if (defaultOptions.TooltipOptions.EdgeWidth > 0 && defaultOptions.TooltipOptions.EdgeColor != null) {
                    tooltipWidget.setEdgeColor(defaultOptions.TooltipOptions.EdgeColor);
                }
                tooltipWidget.locateAuto();
                tooltipWidget.setMarginTop(defaultOptions.Margin.top);
                tooltipWidget.setMarginLeft(defaultOptions.Margin.left);
                //tooltipWidget.setMarginRight(defaultOptions.Margin.Right);
                //tooltipWidget.setMarginBottom(defaultOptions.Margin.Bottom);
                //tooltipWidget.setLayoutWidth(defaultOptions.Layout.width);
                //tooltipWidget.setLayoutHeight(defaultOptions.Layout.height);
                tooltipWidget.createRectLinks(0, 0, defaultOptions.Layout.width, defaultOptions.Layout.height);
                tooltipWidget.setAutoObserveObj(node);
            }
        },

        //删除模型到屏幕连线
        delNodeLineToScreen: function (lineName) {
            if (mapObj) {
                var qUIWindowSysExtend = mapObj._map3d.getWorldManager().getUIWindowSys(0);
                qUIWindowSysExtend.destroyTooltipWidget(lineName);
            }
        },
        //翻页
        GetOptionsFrom: function (callback, items_per_page, items_per_page, display_entries, edge_entries) {
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

        // ********************* 批量采点操作说明 **********************************//
        // Ctrl  + F6        进入（离开）采点功能
        // Ctrl  + 左键单击  开始采点；如果已选中一个点，则修改该选中点的坐标
        // Shift + S         保存采点数据到本地文本文件
        // Shift + L         加载采点数据到场景
        // Delete            删除选中的点
        // 左键单击          单击选中一个点；再次单击取消选中该点
        // ********************* 批量采点操作说明 **********************************//        
        // 问题：目前无法做到覆盖保存，有同事可以完善下。
        collectXyzPoint: function () {
            // 配置项
            var div = $('#MapWrapper'); //所在div，使用三维地图DIV。
            var map3d = map;
            var areaName = con.AreaName;  // 域名
            // 变量
            var pointPrefix = 'xyz_point_'; // 点名称前缀
            var linePrefix = 'xyz_line_'
            var points = []; // 点集合
            var point = { "id": "", "xyz": "" }; // 点
            var currentPointId = 0; // 当前数字
            var lastPointId = 0;    // 最新的数字
            var selectedPoint = -1; // 已选中的点            
            var enableCollection = false; // 是否打开或关闭采点功能

            // 打开或关闭采点功能
            map3d.attachKeyEvent('OnKeyUp', Q3D.Enums.keyboard.F6, function (wParam, lParam) {
                if (lParam == 1) {
                    enableCollection = enableCollection ? false : true;
                    if (enableCollection) {
                        div.css('border', '10px solid red');
                        div.css('z-index', '9999');
                        div.css('border-radius', '30px');
                    }
                    else {
                        div.css('border', '0px solid red');
                        div.css('z-index', '200');
                        div.css('border-radius', '0px');
                    }
                    if (enableCollection) {
                        map3d.attachMouseEvent('OnLButtonDown', "mouseDownForCollection", function (option) {
                            // 标识采点
                            if (option.CtrlPressDown) {
                                var strPoint = option.groundX + ',' + option.groundY + ',' + option.groundZ;
                                var p1 = Q3D.vector3((option.groundX + ',' + option.groundY + ',' + option.groundZ).toVector3d().toLocalPos(areaName));
                                var p2 = Q3D.vector3((option.groundX + ',' + (option.groundY + 3.5) + ',' + option.groundZ).toVector3d().toLocalPos(areaName));
                                var p3 = Q3D.vector3((option.groundX + ',' + (option.groundY + 5) + ',' + option.groundZ).toVector3d().toLocalPos(areaName));

                                if (selectedPoint === -1) { // 如果没有被选中的点，则自增新点
                                    lastPointId++;
                                    currentPointId = lastPointId;
                                }
                                else {                      // 如果有被选中的点，则修改已被选中的点的位置
                                    currentPointId = selectedPoint;

                                    var poiSelected = areaName + '/' + pointPrefix + selectedPoint;
                                    var lineSelected = areaName + '/' + linePrefix + selectedPoint;
                                    if (map3d.getSceneNode(poiSelected)) {
                                        map3d.destroySceneNode(poiSelected);
                                    }
                                    if (map3d.getSceneNode(lineSelected)) {
                                        map3d.destroySceneNode(lineSelected);
                                    }
                                }

                                var poiName = areaName + '/' + pointPrefix + currentPointId;
                                var lineName = areaName + '/' + linePrefix + currentPointId;

                                //加POI点
                                var poiOption = {
                                    Position: p2,
                                    Orientation: null,
                                    OrientationType: Q3D.Enums.nodeOrientationType.Self,
                                    Scale: null,
                                    OnLoaded: function () { },
                                    POIOptions: {
                                        FontSize: 18,
                                        FontName: "微软雅黑",
                                        FontColor: Q3D.colourValue("#000000", 1),
                                        CharScale: 1.0,
                                        Text: currentPointId + ' 点', //Q3D.Util.formatNum(distance, 2) + " 米";
                                        Icon: null,
                                        IconSize: Q3D.vector2(181, 58),
                                        POILayout: Q3D.Enums.poiLayOut.Bottom,
                                        BackFrameBorderSize: 6,  //同边框有关 背景边框大小 POI不显示文字时需设为null否则出现点
                                        BackBorderColor: Q3D.colourValue("#ffd800", 1), //背景边框颜色
                                        BackFillColor: Q3D.colourValue("#ffd800", 1),//背景填充色
                                        SpecialTransparent: true,
                                        AlwaysOnScreen: true,
                                    },
                                }
                                var node = map3d.getSceneNode(poiName)
                                if (!node) {
                                    map3d.createPOI(poiName, poiOption) //POI不存在则创建

                                    point = { "id": currentPointId, "xyz": strPoint };
                                    points[currentPointId] = point;

                                } else {
                                    //node.setPosition(poiPosition)  //若存在则修改坐标值
                                }

                                var createOptions = {
                                    //Material "Material/linehuang.mtr",//如果材质存在 ，则使用该材质
                                    SpecialTransparent: true,//设置是否开启特殊透明效果 ，若开启 ，则线被物体遮挡时会显示
                                    LinePoints: [[p1, p3]],
                                    LineOptions: {
                                        LineType: Q3D.Enums.lineType.StraightLine,
                                        BesselDim: 2,//贝塞尔曲线阶数
                                        Subdivision: 20,//设置生成曲线细分程度 ，用于贝塞尔曲线
                                        LineWidth: 4,
                                        WrapLen: 5, //用于特殊材质
                                        //以下用于动态创建的材质
                                        Color: Q3D.colourValue("#23afea", 50),//线的颜色
                                        Alpha: 0,//线的透明度
                                    },
                                    OnLineCreated: function () {
                                    }
                                };
                                map3d.createPolyLine(lineName, createOptions);
                                selectedPoint = -1;
                            }

                            // 选中点
                            if (option.GroundCoord != null) {
                                var node = option.NearestNode;
                                if (node != null) {
                                    var nodename = node != null ? node.getName() : '';
                                    var areaname = node != null ? node.getArea().getName() : '';
                                    var nodePath = areaname + '/' + nodename;
                                    var lastSelectedNode = areaName + '/' + pointPrefix + selectedPoint;

                                    if (nodename.indexOf(pointPrefix) > -1 && nodename.indexOf(selectedPoint) > -1) { // 取消点的选中状态
                                        map3d.getSceneNode(lastSelectedNode).asPOI().setBackBorderColor(Q3D.colourValue("#ffd800", 1).revise().get());
                                        selectedPoint = -1;
                                    }
                                    else if (nodename.indexOf(pointPrefix) > -1) {
                                        if (map3d.getSceneNode(lastSelectedNode)) {  // 先取消上一个选中的点
                                            map3d.getSceneNode(lastSelectedNode).asPOI().setBackBorderColor(Q3D.colourValue("#ffd800", 1).revise().get());
                                        }                                          //  新选中一个点
                                        map3d.getSceneNode(nodePath).enableOutlineEffect(1);
                                        map3d.getSceneNode(nodePath).asPOI().setBackBorderColor(Q3D.colourValue("#23afea", 1).revise().get());
                                        selectedPoint = nodename.split('_')[2];
                                    }
                                }
                            }
                        });

                        // 删除选中的点
                        map3d.attachKeyEvent('OnKeyUp', Q3D.Enums.keyboard.DELETE, function (wParam, lParam) {
                            var poiSelected = areaName + '/' + pointPrefix + selectedPoint;
                            var lineSelected = areaName + '/' + linePrefix + selectedPoint;
                            if (map3d.getSceneNode(poiSelected)) {
                                map3d.destroySceneNode(poiSelected);
                            }

                            if (map3d.getSceneNode(lineSelected)) {
                                map3d.destroySceneNode(lineSelected);
                            }

                            points[selectedPoint] = '';
                            selectedPoint = -1;
                        });

                        // 保存已采集的点到本地文件
                        map3d.attachKeyEvent('OnKeyUp', Q3D.Enums.keyboard.S, function (wParam, lParam) {
                            if (lParam == 4) { //同时按下Shift 
                                var blob =
                                    Blob([JSON.stringify(points)], { type: 'text/csv' });
                                if (window.navigator.msSaveOrOpenBlob) {
                                    window.navigator.msSaveBlob(blob, 'points.txt');
                                }
                                else {
                                    var elem = window.document.createElement('a');
                                    elem.href = window.URL.createObjectURL(blob);
                                    elem.download = 'points.txt';
                                    document.body.appendChild(elem);
                                    elem.click();
                                    document.body.removeChild(elem);
                                }
                            }
                        });

                        // 从本地文件中重新导入采集的点
                        map3d.attachKeyEvent('OnKeyUp', Q3D.Enums.keyboard.L, function (wParam, lParam) {
                            if (lParam == 4) { //同时按下Shift
                                var fileSelector = document.createElement('input');
                                fileSelector.setAttribute('type', 'file');
                                fileSelector.setAttribute('id', 'fileSelector');
                                var object = div[0].appendChild(fileSelector);

                                // 打开文件选择窗口
                                $('#fileSelector').click();

                                // 通过FileReader读取文件
                                var reader = new FileReader();
                                reader.readAsText($('#fileSelector')[0].files[0]);
                                reader.onload = function (evt) {
                                    var fileString = evt.target.result;
                                    if (fileString != '') {
                                        var jsonFile = eval('[' + fileString + ']');
                                        points = jsonFile[0];

                                        for (var i = 0; i < points.length ; i++) {
                                            if (points[i]) {
                                                var strPoint = points[i].xyz.split(',');
                                                var p1 = Q3D.vector3((strPoint[0] + ',' + parseFloat(strPoint[1]).toString() + ',' + strPoint[2]).toVector3d().toLocalPos(areaName));
                                                var p2 = Q3D.vector3((strPoint[0] + ',' + (parseFloat(strPoint[1]) + 3.5).toString() + ',' + strPoint[2]).toVector3d().toLocalPos(areaName));
                                                var p3 = Q3D.vector3((strPoint[0] + ',' + (parseFloat(strPoint[1]) + 5).toString() + ',' + strPoint[2]).toVector3d().toLocalPos(areaName));

                                                currentPointId = points[i].id;
                                                lastPointId = currentPointId;

                                                var poiName = areaName + '/' + pointPrefix + currentPointId;
                                                var lineName = areaName + '/' + linePrefix + currentPointId;

                                                //加POI点
                                                var poiOption = {
                                                    Position: p2,
                                                    Orientation: null,
                                                    OrientationType: Q3D.Enums.nodeOrientationType.Self,
                                                    Scale: null,
                                                    OnLoaded: function () { },
                                                    POIOptions: {
                                                        FontSize: 18,
                                                        FontName: "微软雅黑",
                                                        FontColor: Q3D.colourValue("#000000", 1),
                                                        CharScale: 1.0,
                                                        Text: currentPointId + ' 点', //Q3D.Util.formatNum(distance, 2) + " 米";
                                                        Icon: null,
                                                        IconSize: Q3D.vector2(181, 58),
                                                        POILayout: Q3D.Enums.poiLayOut.Bottom,
                                                        BackFrameBorderSize: 6,  //同边框有关 背景边框大小 POI不显示文字时需设为null否则出现点
                                                        BackBorderColor: Q3D.colourValue("#ffd800", 1), //背景边框颜色
                                                        BackFillColor: Q3D.colourValue("#ffd800", 1),//背景填充色
                                                        SpecialTransparent: true,
                                                        AlwaysOnScreen: true,
                                                    },
                                                }
                                                var node = map3d.getSceneNode(poiName)
                                                if (!node) {
                                                    map3d.createPOI(poiName, poiOption) //POI不存在则创建
                                                } else {
                                                }

                                                var createOptions = {
                                                    //Material "Material/linehuang.mtr",//如果材质存在 ，则使用该材质
                                                    SpecialTransparent: true,//设置是否开启特殊透明效果 ，若开启 ，则线被物体遮挡时会显示
                                                    LinePoints: [[p1, p3]],
                                                    LineOptions: {
                                                        LineType: Q3D.Enums.lineType.StraightLine,
                                                        BesselDim: 2,//贝塞尔曲线阶数
                                                        Subdivision: 20,//设置生成曲线细分程度 ，用于贝塞尔曲线
                                                        LineWidth: 4,
                                                        WrapLen: 5, //用于特殊材质                                                        
                                                        Color: Q3D.colourValue("#23afea", 50),//线的颜色
                                                        Alpha: 0,//线的透明度
                                                    },
                                                    OnLineCreated: function () {
                                                    }
                                                };
                                                map3d.createPolyLine(lineName, createOptions)
                                            }
                                        }
                                    }
                                    else {
                                        alert('本地文件读取失败！');
                                    }
                                };
                                reader.onloadend = function (evt) {
                                };
                                reader.error = function (evt) {
                                    alert('导入错误！');
                                };
                            }
                        });
                    } else {
                        //关闭采点功能
                        map3d.detachMouseEvent("OnLButtonDown", "mouseDownForCollection");
                        map3d.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.DELETE);
                        map3d.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.S);
                        map3d.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.L);
                    }
                }
            });
        },
        //时间戳转时间格式
        timestampToTime: function (timestamp) {
            timestamp = parseFloat(timestamp);
            var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            if (timestamp < 1000000000000) {
                date = new Date(timestamp * 1000);
            }
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
            var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':';
            var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
            var s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
            return Y + M + D + h + m + s;
        },
        getfloor: function (floorname) {
            var floorname = "负2层";
            var floorInt = parseInt(floorname.replace(/[^0-9]/ig, ""));
            if (floorname == "负1层") {
                floorInt = -1;
            } else if (floorname == "负2层") {
                floorInt = -2;
            }
            return floorInt;
        },

        //数据库DateTime类型转时间格式
        FormatToDate: function (val) {
            if (val != null) {
                var date = new Date(parseInt(val.replace("/Date(", "").replace(")/", ""), 10));
                //月份为0-11，所以+1，月份小于10时补个0
                var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                var h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                var m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                var s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
                return date.getFullYear() + "-" + month + "-" + currentDate + " " + h + ":" + m + ":" + s;
            }
            return "";
        },

        //alert格式
        alert: function (message) {
            vex.dialog.alert({
                message: message,
                className: 'vex-theme-default'
            })
        },

        ajaxByLoading: function (options) {
            var defaultOptions = {
                url: '',
                type: 'post',
                dataType: 'json',
                ContentType: "application/json; charset=utf-8",
                data: null,
                callback: null,
                dom: $('#MapWrapper'),
            };

            $.extend(defaultOptions, options);

            var xhr = $.ajax({
                type: defaultOptions.type,
                url: defaultOptions.url,
                data: defaultOptions.data,
                timeout: con.ajaxTimeout,
                dataType: defaultOptions.dataType,
                ContentType: defaultOptions.ContentType,
                beforeSend: function (xhr) {
                    defaultOptions.dom.showLoading();
                },
                success: function (data) {
                    defaultOptions.dom.hideLoading();
                    if (defaultOptions.callback && $.isFunction(defaultOptions.callback)) {
                        defaultOptions.callback(data);
                    }
                },
                error: function (textStatus) {
                    defaultOptions.dom.hideLoading();
                    console.error(textStatus);
                },
                complete: function (XMLHttpRequest, status) {
                    defaultOptions.dom.hideLoading();
                    if (status == 'timeout') {
                        xhr.abort();
                    }
                }
            })
        },


        ////////////////////////////////////////////////////各种类型的坐标转换////////////////////////////////////////////////////////////
        //平面坐标转vector3； position 为字符串类型 如："500099.841209,4.885651,-3433691.619703" 
        planeToVector3: function (position, areaName) {
            var pos = "";
            if (position.indexOf(",") > -1) {
                pos = Q3D.vector3(position.toVector3d().toLocalPos(areaName));
            } else {
                pos = position;
            }

            return pos;
        },
        //经纬度坐标转vector3； position 为字符串类型 如："121.438399,31.024481,4.885635" 
        coordinateToVector3: function (coordinate, areaName) {
            var pos = "";
            if (coordinate.indexOf(",") > -1) {
                var lng = parseFloat(coordinate.split(",")[0])
                var lat = parseFloat(coordinate.split(",")[1])
                var hgt = parseFloat(coordinate.split(",")[2])

                pos = Q3D.vector3(Q3D.globalVec3d(lng, lat, hgt).toLocalPos(areaName));
            } else {
                pos = coordinate;
            }

            return pos;
        },
        //平面坐标转经纬度坐标, pos为字符串类型 如："500099.841209,4.885651,-3433691.619703" 
        planeToCoordinate: function (pos) {
            var gv3d = "";
            if (pos.indexOf(",") > -1) {
                var str = pos.split(",")
                var x = parseFloat(str[0])
                var y = parseFloat(str[1])
                var z = parseFloat(str[2])
                var v3d = Q3D.vector3d(x, y, z);
                gv3d = Q3D.globalVec3d(v3d.toGlobalVec3d());
            } else {
                gv3d = pos;
            }

            return gv3d;
        },
        //经纬度坐标转平面坐标 coordinate为字符串类型 如："121.438399,31.024481,4.885635" 
        coordinateToPlane: function (coordinate) {
            var position = "";
            if (coordinate.indexOf(",") > -1) {
                var lng = parseFloat(coordinate.split(",")[0])
                var lat = parseFloat(coordinate.split(",")[1])
                var hgt = parseFloat(coordinate.split(",")[2])

                position = Q3D.globalVec3d(lng, lat, hgt).toGlobalPos();

            } else {
                position = coordinate;
            }

            return position;
        },


        /**
        * GCJ02 转换为 WGS84
        * @param lng
        * @param lat
        * @returns {*[]}
        */
        gcj02towgs84: function (lng, lat) {
            var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
            var PI = 3.1415926535897932384626;
            var a = 6378245.0;
            var ee = 0.00669342162296594323;


            if (this.out_of_china(lng, lat)) {
                return [lng, lat]
            } else {
                var dlat = this.transformlat(lng - 105.0, lat - 35.0);
                var dlng = this.transformlng(lng - 105.0, lat - 35.0);
                var radlat = lat / 180.0 * PI;
                var magic = Math.sin(radlat);
                magic = 1 - ee * magic * magic;
                var sqrtmagic = Math.sqrt(magic);
                dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
                dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
                mglat = lat + dlat;
                mglng = lng + dlng;

                return [lng * 2 - mglng, lat * 2 - mglat]
            }

        },
        /** * 判断是否在国内，不在国内则不做偏移 * @param lng * @param lat * @returns {boolean} */
        out_of_china: function (lng, lat) {
            return (lng < 72.004 || lng > 137.8347) || ((lat < 0.8293 || lat > 55.8271) || false);
        },
        transformlat: function (lng, lat) {
            var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
            var PI = 3.1415926535897932384626;
            var a = 6378245.0;
            var ee = 0.00669342162296594323;



            var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
            ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
            ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;
            ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;
            return ret
        },
        transformlng: function (lng, lat) {
            var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
            var PI = 3.1415926535897932384626;
            var a = 6378245.0;
            var ee = 0.00669342162296594323;

            var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
            ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
            ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;
            ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;
            return ret
        },
        //统计数字千位分割符
        toThousands: function (num) {
            var result = '', counter = 0;
            num = (num || 0).toString();
            for (var i = num.length - 1; i >= 0; i--) {
                counter++;
                result = num.charAt(i) + result;
                if (!(counter % 3) && i != 0) { result = ',' + result; }
            }
            return result;

        },
        //圆圈图方法
        loopFun: function (el, val, bg, color, textColor, fontSize, size, r, time, easing) {
            try {

                var si = r + size / 2;
                var xy = r + size;
                if (val < 0 || val > 100) {
                    return alert('请输入0~100之间的数')
                }
                var paper = Raphael(el, (r + size) * 2, (r + size) * 2);
                paper.circle(xy, xy, r).attr({
                    'stroke-width': size,
                    stroke: bg
                });
                paper.customAttributes.arc = function (val) {
                    var v = 360 * val / 100,
                        s = -180,
                        e = s + v,
                        x = xy,
                        y = xy,
                        rad = Math.PI / 180,
                        x1 = x + r * Math.sin(-s * rad),
                        y1 = y + r * Math.cos(-s * rad),
                        x2 = x + r * Math.sin(-e * rad),
                        y2 = y + r * Math.cos(-e * rad),
                        path = [
                            ['M', x1, y1],
                            ['A', r, r, 0, +(e - s > 180), 1, x2, y2]
                        ];
                    return {
                        path: path
                    };
                };
                var an = paper.path().attr({
                    'stroke-width': size,
                    stroke: color,
                    arc: 0.01
                });
                an.animate({
                    stroke: color,
                    arc: val
                }, time, easing);
                setTimeout(function () {
                    if (val == 100) {
                        paper.circle(xy, xy, r).attr({
                            'stroke-width': size,
                            stroke: color
                        });
                    }
                }, time);
                paper.customAttributes.txt = function (val) {
                    return {
                        text: Math.floor(val * 100) / 100 + '%'
                    }
                };
                var l = paper.text(xy, xy).attr({
                    txt: 0,
                    'fill': textColor,
                    'font-size': fontSize,
                    'font-weight': 700
                });
                l.animate({
                    txt: val
                }, time);
            } catch (e)
            { }
        },

        // UI渐入渐出动画
        UIControlAni: function (option, callback) {
            var defaultOpt = {
                aniDom: null,
                htmlDom: null,
                url: '',
                leftOrRight: 'left',
                callback: null
            }

            $.extend(defaultOpt, option);

            if ($(defaultOpt.aniDom).length > 0) {

                var px = $(defaultOpt.aniDom).position().left;
                if (defaultOpt.leftOrRight == 'left')
                    var leftPx = px - 50;
                else
                    var leftPx = px + 50;

                $(defaultOpt.aniDom).animate({ left: leftPx, opacity: "0" }, 800, function () {
                    if ($.isFunction(callback)) {

                        require(['text!' + defaultOpt.url], function (template) {
                            $(defaultOpt.htmlDom).html(template);

                            $(defaultOpt.aniDom).css("opacity", "0.1");
                            $(defaultOpt.aniDom).offset({ left: leftPx });
                            $(defaultOpt.aniDom).animate({ left: px, opacity: "1" }, 800, function () {  });
                            callback();
                        })

                    }
                    else {
                        $(defaultOpt.aniDom).offset({ left: px });
                    }

                });
            }
            else {
                if ($.isFunction(callback)) {

                    require(['text!' + defaultOpt.url], function (template) {
                        $(defaultOpt.htmlDom).html(template);

                        var px = $(defaultOpt.aniDom).position().left;
                        if (defaultOpt.leftOrRight == 'left')
                            var leftPx = px - 50;
                        else
                            var leftPx = px + 50;

                        $(defaultOpt.aniDom).css("opacity", "0.1");
                        $(defaultOpt.aniDom).offset({ left: leftPx });
                        $(defaultOpt.aniDom).animate({ left: px, opacity: "1" }, 1600, function () {  });

                        callback();
                    })
                }
            }
        },

        UIControlAniOpenClose: function (option, callback) {
            var defaultOpt = {
                aniDom: null,
                htmlDom: null,
                url: '',
                leftOrRight: 'left',
                openOrClose: 'open'
            }

            $.extend(defaultOpt, option);

            if (defaultOpt.openOrClose == 'close') {

                var px = $(defaultOpt.aniDom).position().left;
                if (defaultOpt.leftOrRight == 'left')
                    var leftPx = px - 50;
                else
                    var leftPx = px + 50;

                $(defaultOpt.aniDom).animate({ left: leftPx, opacity: "0" }, 800, function () {
                    if ($.isFunction(callback)) {
                        callback();
                    }
                });
            }
            else {
                if (defaultOpt.url != '') {
                    require(['text!' + defaultOpt.url], function (template) {
                        $(defaultOpt.htmlDom).html(template);

                        var px = $(defaultOpt.aniDom).position().left;
                        if (defaultOpt.leftOrRight == 'left')
                            var leftPx = px - 50;
                        else
                            var leftPx = px + 50;

                        $(defaultOpt.aniDom).css("opacity", "0.1");
                        $(defaultOpt.aniDom).offset({ left: leftPx });
                        $(defaultOpt.aniDom).animate({ left: px, opacity: "1" }, 800, function () { });
                        if ($.isFunction(callback))
                            callback();
                    })
                }
            }
        },

        //获取当前的日期时间 格式“yyyy-MM-dd HH:MM:SS”
        getNowFormatDate: function () {
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

        //数字动画
        numberAnimation: function (dom, startNumber, endNumber, second) {
            if (dom.length > 0) {
                require(['animateNumber'], function () {
                    dom
                       .prop('number', startNumber)
                       .animateNumber(
                       {
                           number: endNumber,
                           numberStep: $.animateNumber.numberStepFactories.separator(','), //千位分割符,
                       },
                       second
                    );
                });
            }
        },

        numberAnimationAuto: function (dom, number1, number2, second, numberStep) {
            var timer_numAni = null;

            timer_numAni = setInterval(function () {
                var ranNum = Math.random() * 100;
                if (dom.length > 0) {
                    if (ranNum > 50) {
                        dom.stop().animateNumber({
                            number: number1,
                            numberStep: numberStep
                        }, second);
                    }
                    else {
                        dom.stop().animateNumber({
                            number: number2,
                            numberStep: numberStep
                        }, second);
                    }
                }
                else {
                    clearInterval(this.timer_numAni);
                }
            }, 1000)
        },
        //关闭打开大数字窗口
        openCloseBigDigital: function (openOrClose) {
            if (openOrClose == 'close')
                $('.statistic-slidebtn').css({ transform: 'rotate(0)' }).siblings(".statistic-slidediv").slideUp();
                //$('.statistic-slidebtn').click();
            else
                $('.statistic-slidebtn').css({ transform: 'rotate(0)' }).siblings(".statistic-slidediv").slideDown();
        },
         //数值区间取值
        random: function (lower, upper) {
            return Math.floor(Math.random() * (upper - lower)) + lower;
        },

        //时间差计算
        GetDateDiff: function (startTime, endTime, diffType) {
            //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式 
            startTime = startTime.replace(/\-/g, "/");
            endTime = endTime.replace(/\-/g, "/");
            //将计算间隔类性字符转换为小写
            diffType = diffType.toLowerCase();
            var sTime = new Date(startTime); //开始时间
            var eTime = new Date(endTime); //结束时间

            diffType = diffType.toLowerCase();
            //作为除数的数字
            var timeType = 1;
            switch (diffType) {
                case "second":
                    timeType = 1000;
                    break;
                case "minute":
                    timeType = 1000 * 60;
                    break;
                case "hour":
                    timeType = 1000 * 3600;
                    break;
                case "day":
                    timeType = 1000 * 3600 * 24;
                    break;
                default:
                    break;
            }
            return parseInt((eTime.getTime() - sTime.getTime()) / parseInt(timeType));
        },
    }
})