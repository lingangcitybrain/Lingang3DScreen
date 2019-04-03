define(["config", "common", "util"], function (con, com, util) {
    return {
        // POI特效，模型+POI的方式
        SpecialPOI1: function () {
            var targetPos = map.getSceneNode("danao/danao_zhdn").getAbsPos();
            map.getSceneNode("danao/danao_zhdn").getOrientation(0)
            //if (eyePos == null) {
            var eyePos = Q3D.vector3d(-60, 25, 0);
            eyePos.add(targetPos)
            //}
            var DeviceMovieClipInstance = Q3D.globalCamera().startCircleFlyEx(eyePos, targetPos, 18, -1, 0);
            DeviceMovieClipInstance.play();


            //Q3D.globalCamera().startCircleFly(eyePos, ta


            //Q3D.globalCamera().flyTo(("539772.4797821052,78.08745574951172,-3419865.6400878024").toVector3d(), ("-129.44952392578125,36.645999908447266,144.04421997070312").toVector3(), 1, null);

            //创建POI
            var AreaName = "cs2"; //con.AreaName;
            var POS = "121.908946,30.884288,14.962985"
            var icon = "Texture/Common/camera.png";
            var poiName = "SpecialPOI";
            var iconSize = Q3D.vector2(50, 52);
            var position = (POS).toGlobalVec3d().toLocalPos(AreaName)

            var createOptions = {
                Position: Q3D.vector3(position),
                Orientation: null,
                OrientationType: Q3D.Enums.nodeOrientationType.Self,
                Scale: Q3D.vector3(1, 1, 1),
                POIOptions: {
                    CharScale: 1,
                    Text: "",
                    Icon: icon,
                    IconSize: iconSize,
                    POILayout: Q3D.Enums.poiLayOut.Bottom,
                    UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
                    IconAlphaEnabled: true,
                    Location: Q3D.Enums.poiImagePositionType.POI_LOCATE_BOTTOM,
                    SpecialTransparent: true,
                    AlwaysOnScreen: true,
                    OnLoaded: function () {

                    },
                }
            };

            var node = map.getSceneNode(AreaName, poiName)
            if (node) {
                map.destroySceneNode(AreaName, poiName)
            } else {
                map.createPOI(AreaName + "/" + poiName, createOptions);
            }



            //加光圈
            var modelName = "quan";
            var quanMesh = "Mesh/quan.mesh"
            var modelPath = AreaName + "/" + poiName;
            var quanpath = modelPath + "/" + modelName;
            var quanmodelOptions = {
                Position: Q3D.vector3(0, -3, 0),
                Orientation: Q3D.vector3(0, 0, 0),
                OrientationType: Q3D.Enums.nodeOrientationType.Self,
                Scale: Q3D.vector3(5, 5, 5),
                SkeletonAnimation: null,
            };
            var modelnode = map.getSceneNode(AreaName, modelName)
            if (modelnode) {
                map.destroySceneNode(AreaName, modelName)
            } else {
                map.createModel(quanpath, quanMesh, quanmodelOptions);
            }



            //画连接线
            pos1 = "0,0,0"
            pos2 = "0,-3,0"

            var besselPoints = new Array()
            besselPoints.push(pos1)
            besselPoints.push(pos2)


            var linname = "poiline"
            var modelPath = AreaName + "/" + poiName;
            var nodePath = modelPath + "/" + linname;

            var createOptions = {
                Material: "Material/linered.mtr",
                SpecialTransparent: true, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                LinePoints: [besselPoints], //一维数组,由Vector3坐标组成
                OffsetDist: [],//偏移距离，单位米，用于贝塞尔曲线的控制点计算
                LineOptions: {
                    Subdivision: 20, //设置生成曲线细分程度
                    LineWidth: 2,
                    WrapLen: 2,
                    //以下用于动态创建的材质
                    Color: Q3D.colourValue("#0000FF", 1), //线的颜色
                    Alpha: 1, //线的透明度
                },
                OnLineCreated: null
            }

            var linenode = map.getSceneNode(AreaName, linname)
            if (linenode) {
                map.destroySceneNode(AreaName, linname)
            } else {
                map.createPolyLine(nodePath, createOptions);
            }
        },
        // POI特效，用gif 图片的方式
        SpecialPOI2: function () {




        },

        //无人机飞行 底下有漏斗的效果
        PlaneFly: function () {

        },

        /****************** 白天黑夜效果-START **********************/
        //require(['specialEff'], function (data) { data.daytime(); })白天
        //require(['specialEff'], function (data) { data.nighttime(); })晚上
        //用于存储自定义全局变量
        globalDataStorage: {
            currStatus: 0,				//0 - 白天； 1 - 夜间；
            initPos: null,				//主摄像机初始位置(注意，是封装对象)
            initOri: null,				//主摄像机初始视角(注意，是封装对象)
        },
        //白天
        daytime: function () {
            con.currStatus = 0;


            if (this.globalDataStorage.currStatus === 0) return;
            this.dituSet(1);//地图底图打开
            this.setContainer(1)

            //白天到黑夜动画
            var wm = mapObj._map3d.getWorldManager(),
                mcInstName = "mcInst_nightToDay",
                mcInst = wm.getMovieClipInstance(mcInstName);
            if (mcInst) {
                mcInst.replay();
            }

            //打开天空盒可见性
            mapObj._map3d.getWorldManager().getEnvironment(0).getSky("sky").setVisible(1);
            //开启白天雾
            wm.getEnvironment(0).setFog(1, Q3D.colourValue(0.407843, 0.615686, 0.890196, 1).get(), 13000, 20000);


            this.globalDataStorage.currStatus = 0;
        },
        //夜间
        nighttime: function () {
            con.currStatus = 1;
            if (this.globalDataStorage.currStatus === 1) return;
            this.dituSet(0);//地形关闭
            this.setContainer(0)

            var wm = mapObj._map3d.getWorldManager(),
                mcInstName = "mcInst_dayToNight",
                mcInst = wm.getMovieClipInstance(mcInstName);

            if (mcInst) {
                mcInst.replay();
            }

            //开启夜晚雾
            //wm.getEnvironment(0).setFog(1, Q3D.colourValue(0.00392157, 0.00784314, 0.0235294, 1).get(), 1500, 10000);
            wm.getEnvironment(0).setFog(1, Q3D.colourValue(0, 0.00784314, 0.0156862745, 1).get(), 13000, 20000);

            this.globalDataStorage.currStatus = 1;
        },

        //创建从白天过渡到夜间的动画
        createDayToNightMovieClip: function () {
            var mcName = "mc_dayToNight",
                mcInstName = "mcInst_dayToNight",
                actorNameForSky = "actorForSky_dayToNight",
                //actorNameForSkyNight = "actorForSkyNight_dayToNight",
                actorNameForEnv = "actorForEnv_dayToNight",
                actorNameForLight = "actorForLit_dayToNight",
                actorNameForSpecularColor = "actorForSpecularColor_dayToNight",
                fps = 50;

            var wm = mapObj._map3d.getWorldManager(),
                mc = wm.getMovieClip(mcName);

            if (!mc) {
                mc = wm.createMovieClip(mcName);
                mc.setFPS(fps);
            }

            mc.removeAllActors();

            //定义天空动画角色
            //白天天空盒
            var actSky = mc.addIActor(actorNameForSky);
            var trackAlpha = actSky.addITrack(Q3D.Enums.actorTrackType.ColorAlpha, Q3D.Enums.actorKeyType.KeyAuto).asKeyTrack();

            var key = trackAlpha.addIKey(0);
            key.setKeyIPointAsFloat(1.0);
            key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);

            key = trackAlpha.addIKey(50);
            key.setKeyIPointAsFloat(0.0);
            key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);

            /*
            //夜晚天空盒
            actSky = mc.addIActor( actorNameForSkyNight );	
            trackAlpha = actSky.addITrack( Q3D.Enums.actorTrackType.ColorAlpha, Q3D.Enums.actorKeyType.KeyAuto ).asKeyTrack();
        
            key = trackAlpha.addIKey( 0 );
            key.setKeyIPointAsFloat( 0.0 );
            key.setRightTimeCtrlType( Q3D.Enums.timeCtrlType.Linear );
                
            key = trackAlpha.addIKey( 50 );
            key.setKeyIPointAsFloat( 1.0 );
            key.setRightTimeCtrlType( Q3D.Enums.timeCtrlType.Linear );
            
            //调整天空盒order
            var trackOrder = actSky.addITrack( Q3D.Enums.actorTrackType.Order, Q3D.Enums.actorKeyType.KeyAuto ).asKeyTrack();
            key = trackOrder.addIKey( 0 );
            key.setKeyIPointAsFloat( 1.0 );
            key.setRightCurveCtrlType( Q3D.Enums.curveCtrlType.Linear );	
            
            key = trackOrder.addIKey( 50 );
            key.setKeyIPointAsFloat( 3.0 );	
            key.setLeftCurveCtrlType( Q3D.Enums.curveCtrlType.Linear );		
            */

            //定义环境光动画角色
            var actEnv = mc.addIActor(actorNameForEnv);
            var trackDiff = actEnv.addITrack(Q3D.Enums.actorTrackType.ColorDiffuse, Q3D.Enums.actorKeyType.KeyAuto).asKeyTrack();

            var color = Q3D.colourValue(0.184314, 0.286275, 0.329412, 1).get();
            key = trackDiff.addIKey(0);
            key.setKeyIPointAsQColourValue(color);
            key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);

            //color.r = 0.00784314;
            //color.g = 0.0156863;
            //color.b = 0.0666667;

            color.r = 0;
            color.g = 0.00784314;
            color.b = 0.05490196;



            key = trackDiff.addIKey(50);
            key.setKeyIPointAsQColourValue(color);
            key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);

            //光源
            //var mLightFullNames = ["light_hdr/light_2", "light_hdr/light_10", "light_hdr/light_12", "light_yeguang/yeguang_zhuguang", "light_yeguang/yeguang_fuguang01", "light_yeguang/yeguang_fuguang02"];
            var mLightFullNames = ["light_hdr/sun", "light_hdr/light_10", "light_hdr/light_12", "light_yeguang/yeguang_zhuguang", "light_yeguang/yeguang_fuguang01", "light_yeguang/yeguang_fuguang02"];

            var startIntensity = [1.5, 0.15, 0.15, 0, 0, 0];
            var endIntensity = [0, 0, 0, 1.0, 0.1, 0.1];

            for (var i = 0, len = mLightFullNames.length; i < len; ++i) {
                var actorName = actorNameForLight + "_" + mLightFullNames[i];

                var actLight = mc.addIActor(actorName);
                var trackDiffInt = actLight.addITrack(Q3D.Enums.actorTrackType.ColorDiffuseIntensity, Q3D.Enums.actorKeyType.KeyAuto).asKeyTrack();

                key = trackDiffInt.addIKey(0);
                key.setKeyIPointAsFloat(startIntensity[i]);
                key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);

                key = trackDiffInt.addIKey(50);
                key.setKeyIPointAsFloat(endIntensity[i]);
                key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
            }

            //高光
            actLight = mc.addIActor(actorNameForSpecularColor);
            var trackSpeColor = actLight.addITrack(Q3D.Enums.actorTrackType.ColorSpecular, Q3D.Enums.actorKeyType.KeyAuto).asKeyTrack();

            color.r = 1;
            color.g = 1;
            color.b = 1;
            key = trackSpeColor.addIKey(0);
            key.setKeyIPointAsQColourValue(color);
            key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);

            color.r = 0;
            color.g = 0;
            color.b = 0;
            key = trackSpeColor.addIKey(50);
            key.setKeyIPointAsQColourValue(color);
            key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);

            //创建实例
            var mcInst = wm.createMovieClipInstance(mcInstName);
            mcInst.setMovieClip(mcName);

            mcInst.setPlayer(actorNameForSky, Q3D.Enums.playerType.Sky, "sky");
            //mcInst.setPlayer(actorNameForSkyNight, Q3D.Enums.playerType.Sky, "skynight");
            mcInst.setPlayer(actorNameForEnv, Q3D.Enums.playerType.Environment, "");

            for (var i = 0, len = mLightFullNames.length; i < len; ++i) {
                mcInst.setPlayer(actorNameForLight + "_" + mLightFullNames[i], Q3D.Enums.playerType.Node, mLightFullNames[i]);
            }
            mcInst.setPlayer(actorNameForSpecularColor, Q3D.Enums.playerType.Node, mLightFullNames[0]);		//高光

            mcInst.setLoop(0);

            //定义动画结束帧事件
            var keyIndex = 49;
            map.getOcx().setMovieClipInstanceEventListener(mcInst);//打开事件监听
            map.attachUIEvent("onMovieClipInstancePassFrame", mcInstName + "/" + keyIndex, function () {
                mapObj._map3d.getWorldManager().getEnvironment(0).getSky("sky").setVisible(0);
                //隐藏地形
                //var terrainMgr = map.getOcx().getTerrainManager();
                //terrainMgr.hideTerrain("version_1");
            });
            mcInst.registerFrameEvent(keyIndex);//注册事件		
        },
        //创建从夜间过渡到白天的动画
        createNightToDayMovieClip: function () {

            var mcName = "mc_nightToDay",
                mcInstName = "mcInst_nightToDay",
                actorNameForSky = "actorForSky_nightToDay",
                //actorNameForSkyNight = "actorForSkyNight_nightToDay",
                actorNameForEnv = "actorForEnv_nightToDay",
                actorNameForLight = "actorForLight_nightToDay",
                actorNameForSpecularColor = "actorForSpecularColor_dayToNight",
                fps = 50;

            var wm = mapObj._map3d.getWorldManager(),
                mc = wm.getMovieClip(mcName);

            if (!mc) {
                mc = wm.createMovieClip(mcName);
                mc.setFPS(fps);
            }

            mc.removeAllActors();

            //定义天空动画角色
            //白天天空盒
            var actSky = mc.addIActor(actorNameForSky);
            var trackAlpha = actSky.addITrack(Q3D.Enums.actorTrackType.ColorAlpha, Q3D.Enums.actorKeyType.KeyAuto).asKeyTrack();

            var key = trackAlpha.addIKey(0);
            key.setKeyIPointAsFloat(0);
            key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);

            key = trackAlpha.addIKey(50);
            key.setKeyIPointAsFloat(1.0);
            key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);

            /*
            //夜晚天空盒
            actSky = mc.addIActor( actorNameForSkyNight );
            trackAlpha = actSky.addITrack( Q3D.Enums.actorTrackType.ColorAlpha, Q3D.Enums.actorKeyType.KeyAuto ).asKeyTrack();
        
            key = trackAlpha.addIKey( 0 );
            key.setKeyIPointAsFloat( 1.0 );
            key.setLeftTimeCtrlType( Q3D.Enums.timeCtrlType.Linear );
                
            key = trackAlpha.addIKey( 50 );
            key.setKeyIPointAsFloat( 0.0 );
            key.setLeftTimeCtrlType( Q3D.Enums.timeCtrlType.Linear );
            
            //调整天空盒order
            var trackOrder = actSky.addITrack( Q3D.Enums.actorTrackType.Order, Q3D.Enums.actorKeyType.KeyAuto ).asKeyTrack();
            key = trackOrder.addIKey( 0 );
            key.setKeyIPointAsFloat( 3.0 );
            key.setRightCurveCtrlType( Q3D.Enums.curveCtrlType.Linear );	
            
            key = trackOrder.addIKey( 50 );
            key.setKeyIPointAsFloat( 1.0 );	
            key.setLeftCurveCtrlType( Q3D.Enums.curveCtrlType.Linear );	
            */
            //定义环境光动画角色
            var actEnv = mc.addIActor(actorNameForEnv);
            var trackDiff = actEnv.addITrack(Q3D.Enums.actorTrackType.ColorDiffuse, Q3D.Enums.actorKeyType.KeyAuto).asKeyTrack();

            var color = Q3D.colourValue(0.00784314, 0.0156863, 0.0666667, 1).get();
            key = trackDiff.addIKey(0);
            key.setKeyIPointAsQColourValue(color);
            key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);

            color.r = 0.184314;
            color.g = 0.286275;
            color.b = 0.329412;
            key = trackDiff.addIKey(50);
            key.setKeyIPointAsQColourValue(color);
            key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);

            //光源	
            //var mLightFullNames = ["light_hdr/light_2", "light_hdr/light_10", "light_hdr/light_12", "light_yeguang/yeguang_zhuguang", "light_yeguang/yeguang_fuguang01", "light_yeguang/yeguang_fuguang02"];
            var mLightFullNames = ["light_hdr/sun", "light_hdr/light_10", "light_hdr/light_12", "light_yeguang/yeguang_zhuguang", "light_yeguang/yeguang_fuguang01", "light_yeguang/yeguang_fuguang02"];
            var startIntensity = [0, 0, 0, 1.0, 0.1, 0.1];
            var endIntensity = [1.5, 0.15, 0.15, 0, 0, 0];

            for (var i = 0, len = mLightFullNames.length; i < len; ++i) {
                var actorName = actorNameForLight + "_" + mLightFullNames[i];

                var actLight = mc.addIActor(actorName);
                var trackDiffInt = actLight.addITrack(Q3D.Enums.actorTrackType.ColorDiffuseIntensity, Q3D.Enums.actorKeyType.KeyAuto).asKeyTrack();

                key = trackDiffInt.addIKey(0);
                key.setKeyIPointAsFloat(startIntensity[i]);
                key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);

                key = trackDiffInt.addIKey(50);
                key.setKeyIPointAsFloat(endIntensity[i]);
                key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
            }

            //高光
            actLight = mc.addIActor(actorNameForSpecularColor);
            var trackSpeColor = actLight.addITrack(Q3D.Enums.actorTrackType.ColorSpecular, Q3D.Enums.actorKeyType.KeyAuto).asKeyTrack();

            color.r = 0;
            color.g = 0;
            color.b = 0;
            key = trackSpeColor.addIKey(0);
            key.setKeyIPointAsQColourValue(color);
            key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);

            color.r = 1;
            color.g = 1;
            color.b = 1;
            key = trackSpeColor.addIKey(50);
            key.setKeyIPointAsQColourValue(color);
            key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);

            //创建实例
            var mcInst = wm.createMovieClipInstance(mcInstName);
            mcInst.setMovieClip(mcName);

            mcInst.setPlayer(actorNameForSky, Q3D.Enums.playerType.Sky, "sky");
            //mcInst.setPlayer(actorNameForSkyNight, Q3D.Enums.playerType.Sky, "skynight");
            mcInst.setPlayer(actorNameForEnv, Q3D.Enums.playerType.Environment, "");

            for (var i = 0, len = mLightFullNames.length; i < len; ++i) {
                mcInst.setPlayer(actorNameForLight + "_" + mLightFullNames[i], Q3D.Enums.playerType.Node, mLightFullNames[i]);
            }
            mcInst.setPlayer(actorNameForSpecularColor, Q3D.Enums.playerType.Node, mLightFullNames[0]);		//高光

            mcInst.setLoop(0);
        },

        //地图底图显示或隐藏
        dituSet: function (flag) {
            var terrainmgr = mapObj._map3d.getTerrainManager();
            if (terrainmgr) {
                if (flag == 1) {
                    //terrainmgr.showTerrain("version_1");//显示地形
                    terrainmgr.showTerrain("new_gaoqing_version_1");
                    terrainmgr.showTerrain("pudong_version_1");
                    terrainmgr.showTerrain("osgb_version_1");

                    //terrainmgr.setTransparency("version_1", 1);
                } else {
                    //terrainmgr.hideTerrain("version_1");//隐藏地形
                    terrainmgr.hideTerrain("new_gaoqing_version_1");
                    terrainmgr.hideTerrain("pudong_version_1");
                    terrainmgr.hideTerrain("osgb_version_1");
                    //terrainmgr.setTransparency("version_1", 0.08);
                }
            }
        },

        //加载夜景的容器
        loadNightContainer: function () {
            var nightContainer = Q3D.nodeContainer("nightContainer")
            for (var i = 0; i < con.nightAreaList.length; i++) {
                var areaname = con.nightAreaList[i]
                nightContainer.addSceneNodeFromArea(areaname);
            }
            con.nightContainer = nightContainer;
        },
        //加载白天的容器
        loadDayContainer: function () {
            var dayContainer = Q3D.nodeContainer("dayContainer")
            for (var i = 0; i < con.dayAreaList.length; i++) {
                var areaname = con.dayAreaList[i]
                dayContainer.addSceneNodeFromArea(areaname);
            }

            con.dayContainer = dayContainer;
        },
        //白天或夜景模式设置
        setContainer: function (flag) {
            if (con.nightContainer == null) { this.loadNightContainer() }
            if (con.dayContainer == null) { this.loadDayContainer() }


            //夜景
            if (flag == 0) {
                con.nightContainer.setTargetVal(Q3D.Enums.nodeContainerType.Visible, 1, Q3D.Enums.materialApplyMode.Replace); //开启夜景模式
                con.dayContainer.setTargetVal(Q3D.Enums.nodeContainerType.Visible, 0, Q3D.Enums.materialApplyMode.Replace); //关闭白天模式
            } else {
                con.nightContainer.setTargetVal(Q3D.Enums.nodeContainerType.Visible, 0, Q3D.Enums.materialApplyMode.Replace); //关闭夜景模式
                con.dayContainer.setTargetVal(Q3D.Enums.nodeContainerType.Visible, 1, Q3D.Enums.materialApplyMode.Replace); //开启白天模式
            }
        },
        /****************** 白天黑夜效果-END **********************/

        //添加圆锥
        addCone: function () {
            var pos = "121.909119,30.883694,0";
            var areaname = "cs2";
            var Pos = Q3D.vector3(pos.toGlobalVec3d().toLocalPos(areaname));


            if (map.getSceneNode(areaname + "/TestCone"))
                map.getArea(areaname).destroySceneNode("TestCone");

            map.createCone(areaname + "/TestCone", {
                //Material: ["Material/xihongqiao2_dz01.mtr", "Materialne_static.mtr"],
                Alpha: 0.2,
                Color: Q3D.colourValue("#0000ff", 1), //线的颜色
                Center: Q3D.vector3(Pos),
                Radius: 10, //半径
                Height: 20.000053,//高度
                //Anchor: Q3D.vector3(20,10,10),            
            });
        },
        //删除圆锥
        removeCone: function () {
            if (map.getSceneNode(areaname + "/TestCone"))
                map.getArea(areaname).destroySceneNode("TestCone");
        },
        //添加无人机
        addDrone: function () {
            var modelName = "wrj";
            var AreaName = "cs2";
            var quanMesh = "Mesh/dajiangm600.mesh"
            var quanpath = AreaName + "/" + modelName;
            var POS = "121.908946,30.884288,100.962985"
            var position = (POS).toGlobalVec3d().toLocalPos(AreaName)

            var quanmodelOptions = {
                Position: Q3D.vector3(position),
                Orientation: Q3D.vector3(0, 0, 0),
                OrientationType: Q3D.Enums.nodeOrientationType.Self,
                Scale: Q3D.vector3(5, 5, 5),
                SkeletonAnimation: null,
            };
            var modelnode = map.getSceneNode(AreaName, modelName)
            if (modelnode) {
                map.destroySceneNode(AreaName, modelName)
            } else {
                map.createModel(quanpath, quanMesh, quanmodelOptions);
            }
        },

        //创建热力图
        createHeatmap: function (list) {
            var heatMapMgr = mapObj._map3d.getHeatMapManager();
            var heatMap = heatMapMgr.createHeatMap('EnergyHeatMap', 3).asHeatMapIrregular();
            var gv3 = mapObj._map3d.createObject("QMap3DCtl.QGlobalVec3D");
            var color = mapObj._map3d.createObject("QMap3DCtl.QColourValue");

            //设置网格大小
            var nx = 80;
            var nz = 80;
            heatMap.setNxNz(nx, nz);


            //添加热力点
            for (var i = 0; i < list.length; i++) {
                try {
                    if (list[i].CODE != "" && list[i].CODE != undefined) {
                        var coordinates = com.bd09togcj02(list[i].CODE.split(",")[0], list[i].CODE.split(",")[1]);
                        var value = list[i].VALUE;

                        gv3.longitude = coordinates.split(",")[0];
                        gv3.height = value;
                        gv3.latitude = coordinates.split(",")[1];
                        heatMap.addPoint(gv3, 100, i);
                    }
                }
                catch (e) { }
            }

            color.r = 1;
            color.g = 0;
            color.b = 1;
            color.a = 0.5;
            heatMap.addColorBand(4000, color);
            color.r = 0;
            color.g = 0;
            color.b = 1;
            color.a = 0.5;
            heatMap.addColorBand(4500, color);
            color.r = 0;
            color.g = 1;
            color.b = 1;
            color.a = 0.5;
            heatMap.addColorBand(4800, color);

            color.r = 0;
            color.g = 1;
            color.b = 0;
            color.a = 0.5;

            heatMap.addColorBand(4900, color);
            color.r = 1;
            color.g = 1;
            color.b = 0;
            color.a = 0.5;
            heatMap.addColorBand(5000, color);
            color.r = 1;
            color.g = 0.5;
            color.b = 0;
            color.a = 0.5;
            heatMap.addColorBand(5100, color);
            color.r = 1;
            color.g = 0;
            color.b = 0;
            color.a = 0.5;
            heatMap.addColorBand(5200, color);


            heatMap.setUseContinuousColor(1);

            //添加范围区域
            var v3list = mapObj._map3d.getWorldManager().createEmptyQVector3List();
            var list = []
            list[0] = "121.65393200,31.16142500";
            list[1] = "121.65190200,31.19579600";
            list[2] = "121.65302150,31.23681692";
            list[3] = "121.58368500,31.21536200";
            list[4] = "121.59236300,31.17574600";
            list[5] = "121.60122000,31.15366800";
            list[6] = "121.60912794,31.12089856";
            list[7] = "121.61621300,31.09153900";
            list[8] = "121.62042561,31.07227687";
            list[9] = "121.65243200,31.07336900";
            list[10] = "121.67564500,31.07349300";

            for (var k = 0; k < list.length; k++) {
                var Position = list[k];
                var lon = Position.split(",")[0];
                var lat = Position.split(",")[1];
                Position = com.bd09togcj02(lon, lat)
                var Position = Position + ",0";
                v3list.add((Position).toGlobalVec3d().toLocalPos(con.AreaName));
            }


            //v3list.add(("121.65393200,31.16142500,0").toGlobalVec3d().toLocalPos(con.AreaName));
            //v3list.add(("121.65190200,31.19579600,0").toGlobalVec3d().toLocalPos(con.AreaName));
            //v3list.add(("121.65302150,31.23681692,0").toGlobalVec3d().toLocalPos(con.AreaName));
            //v3list.add(("121.58368500,31.21536200,0").toGlobalVec3d().toLocalPos(con.AreaName));
            //v3list.add(("121.59236300,31.17574600,0").toGlobalVec3d().toLocalPos(con.AreaName));
            //v3list.add(("121.60122000,31.15366800,0").toGlobalVec3d().toLocalPos(con.AreaName));
            //v3list.add(("121.60912794,31.12089856,0").toGlobalVec3d().toLocalPos(con.AreaName));
            //v3list.add(("121.61621300,31.09153900,0").toGlobalVec3d().toLocalPos(con.AreaName));
            //v3list.add(("121.62042561,31.07227687,0").toGlobalVec3d().toLocalPos(con.AreaName));
            //v3list.add(("121.65243200,31.07336900,0").toGlobalVec3d().toLocalPos(con.AreaName));
            //v3list.add(("121.67564500,31.07349300,0").toGlobalVec3d().toLocalPos(con.AreaName));


            //设置限定区域
            heatMap.setBorderPoints(v3list);

            //设置整体高度
            heatMap.setHeight(0);

            //设置成平面效果
            heatMap.setScapple(1);

            // 设置生成算法类型
            heatMap.setAlgType(3);
            heatMap.build();
            heatMap.render();

            heatMap.setHeight(-920);
            require("heatmap").HeatMapObj = heatMap;
        },
    }

    //测试roamByGPSTrack
    function roamByGPSTrackTest1() {
        var areaName = "xydy",
            droneName = "HTDrone1";

        //创建一个无人机模型节点，并放在很远的地方
        var droneOptions = {
            Position: Q3D.vector3("0,0,0".toVector3d().toLocalPos(areaName)),    //放在平面坐标原点位置
            Orientation: Q3D.vector3(0, 0, 0),
            OrientationType: Q3D.Enums.nodeOrientationType.Self,
            Scale: Q3D.vector3(1.0, 1.0, 1.0),
        };
        createDrone(areaName, droneName, droneOptions, true);

        var hTrackOptions = {
            CenterLine: ["120.31528784,30.40218716,0".toGlobalVec3d(),	//动线中心线，由 QGlobalVec3d 坐标组成，表示每个位置点的实际经纬度
                        "120.31528784,30.40218716,5".toGlobalVec3d(),
                        "120.31669650,30.40200181,15".toGlobalVec3d(),
                        "120.31842689,30.40176299,20".toGlobalVec3d(),
                        "120.31845159,30.40183646,20".toGlobalVec3d(),
                        "120.31813660,30.40275297,15".toGlobalVec3d(),
                        "120.31804600,30.40285508,5".toGlobalVec3d(),
                        "120.31693983,30.40299614,0".toGlobalVec3d()
            ],
            SecsFromStart: [0, 10, 40, 60, 70, 100, 110, 140], //从起点开始算起的时间差，单位秒
            Heading: null,//每个位置上的水平偏转角度，若未提供该参数，则角度自动计算
            TotalTime: 140,//轨迹回放路上总用时，单位秒
            IsLoop: false,//是否循环播放，默认不循环执行
            IsAutoPlay: true, //是否自动播放，默认否
            PitchAllowed: false, //是否允许俯仰
            BaseGlobalPos: null,		//用于修正经纬度坐标, QGlobalVec3d类型
            OnAnimationEndFn: function () {
                mapDiv.destroySceneNode(areaName, droneName);
            },
        };
        var mcInst = mapDiv.roamByGPSTrack(areaName + "/" + droneName, hTrackOptions);
        if (typeof globalDataStorage.HTrackMcInsts == "undefined") globalDataStorage.HTrackMcInsts = [];
        globalDataStorage.HTrackMcInsts.push(mcInst);
    }
})