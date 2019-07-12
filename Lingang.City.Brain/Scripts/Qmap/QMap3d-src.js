/*
 QMap3DJS_2.0+, A JS library Encapsulation for QMap3D OCX Engine.
 (c) 2013-2017 QMAP
*/
(function (window, document, undefined) {﻿
    var Q3D = {
        version: "2.0+"
    };
    
    function expose() {
        var oldL = window.Q3D;
    
        Q3D.noConflict = function () {
            window.Q3D = oldL;
            return this;
        };
    
        window.Q3D = Q3D;
    }
    
    // define QMap3DJS for Node module pattern loaders, including Browserify
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = Q3D;
    
    // define QMap3DJS as an AMD module
    } else if (typeof define === 'function' && define.amd) {
        define(Q3D);
    }
    
    // define QMap3DJS as a global Q3D variable, saving the original Q3D to restore later if needed
    if (typeof window !== 'undefined') {
        expose();
    }
    
    
    
    ///QMapV2引擎枚举
    Q3D.Enums = {
        
        //引擎值类型对象的CLSID
        ValueTypeCLSID: {
            QVector2: "8974ca38-d123-4516-9f49-c35ab5038a8b",
            QVector2I: "b8d6c462-0d1e-41cb-ab4c-0c0bdf090356",
            QVector3: "406e2212-9d78-45db-a2d5-cb326e9e7f3f",
            QVector3d: "8c53eb01-4520-4793-a4a6-0d1f61e8b51c",
            QGlobalVec3d: "bd2e69e3-8bec-46c4-a7db-35944c51bc3d",
            QColourValue: "2d90ae9b-31c8-45df-99f3-5af1687e035f",
        },
        
        //设备枚举值
        device: {
            KEYBOARD: 0,            //键盘
            MOUSE: 1,                  //鼠标
            MULTITOUCH: 2       //平板
        },
        
        //鼠标枚举值
        mouse: {
            LBUTTON: 0,                 //左键
            MBUTTON: 1,               //中键
            RBUTTON: 2,                //右键
            WHEEL: 4,                     //滚轮
            LDCLICK: 5,                  //左键双击
            RDCLICK: 6                  //右键双击
        },
        
        //平板枚举值
        multiTouch: {
            TRANS: 1,                   //平移
            CLOSETO: 2,               //贴近
            RAMBLE: 3,                //漫游
            YPS: 4                         //导航俯仰缩放
        },
        
        //键盘枚举值
        keyboard: {
            ALL:{ctrlId: -1, wparam: -1},
            NUM_0: {ctrlId: 0, wparam: 48},
            NUM_1: {ctrlId: 1, wparam: 49},
            NUM_2: {ctrlId: 2, wparam: 50},
            NUM_3: {ctrlId: 3, wparam: 51},
            NUM_4: {ctrlId: 4, wparam: 52},
            NUM_5: {ctrlId: 5, wparam: 53},
            NUM_6: {ctrlId: 6, wparam: 54},
            NUM_7: {ctrlId: 7, wparam: 55},
            NUM_8: {ctrlId: 8, wparam: 56},
            NUM_9: {ctrlId: 9, wparam: 57},
    
            A: {ctrlId: 10, wparam: 65},
            B: {ctrlId: 11, wparam: 66},
            C: {ctrlId: 12, wparam: 67},
            D: {ctrlId: 13, wparam: 68},
            E: {ctrlId: 14, wparam: 69},
            F: {ctrlId: 15, wparam: 70},
            G: {ctrlId: 16, wparam: 71},
            H: {ctrlId: 17, wparam: 72},
            I: {ctrlId: 18, wparam: 73},
            J: {ctrlId: 19, wparam: 74},
            K: {ctrlId: 20, wparam: 75},
            L: {ctrlId: 21, wparam: 76},
            M: {ctrlId: 22, wparam: 77},
            N: {ctrlId: 23, wparam: 78},
            O: {ctrlId: 24, wparam: 79},
            P: {ctrlId: 25, wparam: 80},
            Q: {ctrlId: 26, wparam: 81},
            R: {ctrlId: 27, wparam: 82},
            S: {ctrlId: 28, wparam: 83},
            T: {ctrlId: 29, wparam: 84},
            U: {ctrlId: 30, wparam: 85},
            V: {ctrlId: 31, wparam: 86},
            W: {ctrlId: 32, wparam: 87},
            X: {ctrlId: 33, wparam: 88},
            Y: {ctrlId: 34, wparam: 89},
            Z: {ctrlId: 35, wparam: 90},
    
            F1: {ctrlId: 36, wparam: 112},
            F2: {ctrlId: 37, wparam: 113},
            F3: {ctrlId: 38, wparam: 114},
            F4: {ctrlId: 39, wparam: 115},
            F5: {ctrlId: 40, wparam: 116},
            F6: {ctrlId: 41, wparam: 117},
            F7: {ctrlId: 42, wparam: 118},
            F8: {ctrlId: 43, wparam: 119},
            F9: {ctrlId: 44, wparam: 120},
            F10: {ctrlId: 45, wparam: 121},
            F11: {ctrlId: 46, wparam: 122},
            F12: {ctrlId: 47, wparam: 123},
    
            ESCAPE: {ctrlId: 48, wparam: 27},
            ACCENT: {ctrlId: 49, wparam: 192},
            BACK: {ctrlId: 50, wparam: 0},
            ENTER: {ctrlId: 51, wparam: 13},
            SPACE: {ctrlId: 52, wparam: 32},
    
            LCTRL: {ctrlId: 53, wparam: 17},
            RCTRL: {ctrlId: 54, wparam: 17},
            LALT: {ctrlId: 55, wparam: 0},
            RALT: {ctrlId: 56, wparam: 0},
            LSHIFT: {ctrlId: 57, wparam: 16},
            RSHIFT: {ctrlId: 58, wparam: 16},
    
            INSERT: {ctrlId: 59, wparam: 45},
            DELETE: {ctrlId: 60, wparam: 46},
            HOME: {ctrlId: 61, wparam: 36},
            END: {ctrlId: 62, wparam: 35},
            PAGEUP: {ctrlId: 63, wparam: 33},
            PAGEDOWN : {ctrlId: 64, wparam: 34},
    
            LEFT: {ctrlId: 65, wparam: 37},
            RIGHT: {ctrlId: 66, wparam: 39},
            UP: {ctrlId: 67, wparam: 38},
            DOWN: {ctrlId: 68, wparam: 40},
            
            KP_0: {ctrlId: 69, wparam: 96},
            KP_1: {ctrlId: 70, wparam: 97},
            KP_2: {ctrlId: 71, wparam: 98},
            KP_3: {ctrlId: 72, wparam: 99},
            KP_4: {ctrlId: 73, wparam: 100},
            KP_5: {ctrlId: 74, wparam: 101},
            KP_6: {ctrlId: 75, wparam: 102},
            KP_7: {ctrlId: 76, wparam: 103},
            KP_8: {ctrlId: 77, wparam: 104},
            KP_9: {ctrlId: 78, wparam: 105},
            
        },
        
        //操作类型
        actionType: {
            //键盘控制
            TRANS_LEFTX: 6,// 左移
            TRANS_RIGHT: 7,// 右移
            TRANS_FORTH: 9,// 前进
            TRANS_BACKX: 10,// 后退
            TRANS_UPXXX: 11,// 上升
            TRANS_DOWNX: 12,// 下降
            
            //平移
            TRANS_UDLRX: 25,// 平移摄像机，场景无关，需要设置平移速度( 整个屏幕对角线对应的实际移动距离 )
            TRANS_SCENE: 14,//平移场景( 拖拽 )，与场景相关，需要设置一个默认的拖拽平面供没有抓住任何东西时使用。可设置参数：严格拖拽临界角度；临界角范围外的映射距离；仰视拖拽的处理方式
            TRANS_EARTH: 34,// 拖拽球体
            TRANS_ORTHO: 38,// 正交模式下拖拽场景
            
            //缩放 ( D:Dynamic; S:Static )
            SCALED_CENTER: 26,// 缩放：方向按屏幕中心方向；速度按拾取线段长度比例，如果未拾取到任何东西，退化为STATIC参数处理
            SCALES_CENTER: 27,// 缩放：方向按屏幕中心方向；速度按固定设置参数
            SCALED_SCREEN: 13,// 缩放：方向按( Eye，ScreenPnt )射线方向；速度按拾取线段长度比例，如果未拾取到任何东西，退化为STATIC参数处理
            SCALES_SCREEN: 28,// 缩放：方向按( Eye，ScreenPnt )射线方向；速度按固定设置参数
            SCALEE_SCREEN: 36, // 缩放球体，按屏幕点方向缩放
            SCALEE_CENTER: 37,// 缩放球体，按屏幕中心点方向缩放
            SCALEX_ORTHOX: 40,// 正交模式下缩放场景
            CAMERA_CLOSETO: 22,// 贴近
            
            //旋转 ( S:Separately; T:Together )
            ROTATES_CAMERA: 15,   // 旋转摄像机，yaw,pitch分离，每次操作只取其一
            ROTATET_CAMERA: 29,   // 旋转摄像机，yaw,pitch融合
            ROTATES_SCREEN: 21,   // 旋转场景，以拾取点为旋转基点,Separately
            ROTATET_SCREEN: 30,   // 旋转场景，以拾取点为旋转基点,Together
            ROTATES_CENTER: 31,   // 旋转场景，以屏幕中心点在basePlane上的拾取点为基点,Separately
            ROTATET_CENTER: 32,   // 旋转场景，以屏幕中心点在basePlane上的拾取点为基点,Together
            ROTATES_FIXPNT: 45,	// 绕固定点旋转，yaw,pitch分离
            ROTATET_FIXPNT: 46,	// 绕固定点旋转，yaw,pitch融合
            ROTATES_EARTHX: 35,   // 旋转球体( reserved )
            ROTATET_EARTHX: 36,	// 旋转球体( reserved )
            ROTATEX_ORTHOX: 39,   // 正交模式下旋转摄像机
            
            //漫游
            RAMBLE_KEEPORI: 20,   // 漫游：方位不变( 第三人称 )
            RAMBLE_HEADUPX: 33,   // 漫游：开车( 第一人称 )( reserved )
    
            //模型编辑
            OBJECTSELECT_MOVAUX: 17,       
            OBJECTSELECT_ROTAUX: 18,        
            OBJECTSELECT_SCAAUX: 19,     
    
            //移动设备( YPS:YawPitchScale, S:Separately, T:Together )
            YPSS_CENTER: 41,	// 分离操作，以屏幕中心为旋转基点和缩放方向
            YPSS_SCREEN: 23,	// 分离操作，以屏幕点为旋转基点和缩放方向
            YPST_CENTER: 43,	// 融合操作，以屏幕中心为旋转基点和缩放方向
            YPST_SCREEN: 44,	// 融合操作，以屏幕点为旋转基点和缩放方向
            
            //第三人称操作
            THIRD_ROTATE: 100,
            THIRD_WHEEL: 101,
            THIRD_MOVELEFT: 102,//左移
            THIRD_MOVERIGHT: 103,//右移
            THIRD_MOVEFORTH: 104,//前进
            THIRD_MOVEBACK: 105,//后退
            THIRD_MOVEUP: 106,//上升
            THIRD_MOVEDOWN: 107,//下降
            THIRD_MOVETO: 108,//点击移动
            THIRD_CAMERAROTATE: 109,//转动镜头
            THIRD_TURNLEFT: 110,//左转
            THIRD_TURNRIGHT: 111,//右转
            THIRD_LOOKUP: 112,//抬头
            THIRD_LOOKDOWN: 113,//低头
        
        },
    
        //操作消息
        actionMsg: {
            //选择操作限定
            LIMIT_AUX: 1,               
            LIMIT_SELECT: 2,
            //所有操作
            SWITCH_INERTIA: 3,    //惯性开关
            SWITCH_LOCATOR: 4,    //操作定位器开关
            SET_INERTIA_PARAMETER: 5,    //设置惯性参数( 一个结构体，暂未提供接口 )
            SET_INERTIA_DURATION: 6,    //设置惯性持续时间( 惯性参数中比较常用的一个参数 )
    
            //平移
            SET_TRANS_LIMITDRAGANGLE: 7,    //设置严格拖拽的极限角度
            SET_TRANS_LIMITMAPDISTANCE: 8,    //设置非严格拖拽区域的映射距离( 单位：摄像机到拖拽平面的距离d )
            SET_TRANS_LOOKUPMODE: 9,    //设置仰视拖拽的模式
            SET_TRANS_SHORTESTDISTANCE: 10,    //设置摄像机到拖拽平面的最小距离( 避免摄像机位于拖拽平面上时完全拖不动 )
            SET_TRANS_LIMITDRAGDISTANCE: 11,    //设置拖拽点离摄像机的极限距离
            SET_TRANS_STATICSPEED: 12,    //设置摄像机平移的固定速度( 米/对角像素 )
                                              
            //缩放
            SET_SCALE_STATICSPEED: 13,   //设置缩放的静态速度( m/每次缩放 )   
            SET_SCALE_DYNAMICSPEED: 14,   //设置缩放的动态速度( 与拾取射线到交点线段长度的比例 )
            SET_SCALE_FORWARDSPEEDBUMP: 15,   //前减速带距离
            SET_SCALE_BACKWARDSPEEDBUMP: 16,   //后减速带距离
            SET_SCALE_SPEEDBUMPRATE: 17,   //减速带减速效率(0,1)
            SET_SCALE_BACKWARDLIMIT: 18,   //后退极限距离
            SET_YPS_SCALERATIO: 19,   //触屏缩放速度调控比例
                                              
            //旋转
            SET_PITCHMIN: 20,   //俯仰最小角度
            SET_PITCHMAX: 21,   //俯仰最大角度
            SET_YAW_SPEED: 22,  //偏航速度
            SET_PITCH_SPEED: 23,   //俯仰速度
            SWITCH_PITCH: 24,   //俯仰开关
            SET_FIXPNT: 25,  //旋转固定支点  
                                            
            //漫游
            SET_RAMBLE_TRANSLATESPEED: 26,   //设置漫游平移速度
            SET_RAMBLE_ROTATESPEED: 27,   //设置漫游旋转速度
    
            SWITCH_USAGE: 28
        },
        
        //节点类型
        sceneNodeType: {
            SNODE_Invalid: -1, //无效类型
            SNODE_Group: 0, //空节点， 用于作为父节点挂接其他节点
            SNODE_LocalCamera: 3, //局部摄像机
            SNODE_Light: 4, //灯光
            SNODE_Model: 5, //模型
            SNODE_ParticleSystem: 6, //粒子
            SNODE_Billboard: 8, //公告板
            SNODE_POI: 14, //POI元素
            SNODE_EnvMap: 17, //环境贴图
            SNODE_Line: 19, //线元素
            SNODE_LocalViewCamera: 20, //局部摄像机,用于子窗口
            SNODE_VecModel: 24, //矢量模型
            SNODE_CullAreaNode: 26, //裁剪区域结点
            SNODE_CullPlane: 30, //剖面元素
            SNODE_Traffic: 31, //交通信号结点
            SNODE_Decal: 32 //贴花结点
        },
        
        lightType: {
            Point: 0,/** 点光源 */
            Parallel: 1,/** 平行光 */
            Spotlight: 2/** 聚光灯 */
        },
        
        //矢量对象类型枚举
        vecModelType: {
            QPolygon: 0, //平面多边形
            QBuilding: 1, //建筑
            QPyramid: 2, //棱锥
            QCylinder: 3, //圆柱
            QCone: 4, //圆锥
            QPipe: 5, //管道
            QSphere: 6, //球
            QArrow: 7, //箭头
            QJunction: 8, //路口
            QRoadway: 9, //道路
            QRailway: 10, //铁路
            QWalls: 11, //墙体
            QPrism: 12 //棱柱
        },
        //资源类型
        resourceType: {
            MESH: 0, //网格类型
            GEOMETRY: 1,
            SKELETON: 2, //骨骼动画类型
            ANINODE: 3,// 动画节点类型
            ANISKIN: 4,
            ANITEX: 5,
            PARTISYS: 6,
            MATERIAL: 7,//材质类型
            TEXTURE: 8,//纹理贴图类型
            ANICLR: 9,
            MAX: 10,
            VIDEO: 16, // 视频类型
        },
        //贴花类型
        decalModeType: {
            OpBlendAlpha: 0, 
            OpBlendColor: 1,
            OpAdd: 2, 
            OpModulate: 3,
            DestTarget: 0 << 8,
            DestGBuffer: 1 << 8,
        },
        decalNormalFlipMode: {
            None: 0,
            X: 1,
            Y: 2,
            XY: 0x1 | 0x2
        },
        
        //旋转方向基准点类型
        orientationType: {
            Self: 0,//相对于本身原点旋转
            Parent: 1,//相对于父节点旋转
            World: 2//相对于世界旋转
        },
        
        //动画轨迹类型
        actorTrackType: {
            TransformMove: 0,
            TransformRotate: 1,
            TransformScale: 2,
            ColorDiffuse: 3,
            ColorDiffuseIntensity: 4,
            ColorSpecular: 5,
            ColorEmissive: 6,
            ColorAlpha: 7,
            Visible: 8,
            VisibleDerived: 9,
            TransformMoveAbs: 10,
            TransformRotateAbs: 11,
            Order: 12
        },
        
        //动画关键帧数值类型
        actorKeyType: {
            KeyAuto: 0,
            KeyFloat: 1,
            KeyVector2: 2,
            KeyVector3: 3,
            KeyQuaternion: 4,
            KeyColourValue: 5,
            VecLine: 6,
            VecCircle: 7,
            KeyVector3d: 8
        },
    
        //曲线控制类型
        curveCtrlType: {
            Point: 0,//点
            Linear: 1,//线性插值
            Bessel: 2//贝塞尔差值
        },
        
        //时间控制类型
        timeCtrlType: {
            Linear: 0,//线性过渡
            EaseIn: 1,//缓进过渡
            EaseOut: 2//缓出过渡
        },
        
        //扮演者类型
        playerType: {
            Node: 0,//节点
            Material: 1,//材质
            Sky: 2, //天空盒
            Environment: 3	//环境
        },
        
        //显示隐藏变化类型
        fadeType: {
            fadeIn: 0,
            fadeOut: 1,
            fadeFlash: 2,
        },
        
        //节点容器类型
        nodeContainerType: {
            Alpha: 0,
            Color: 1,
            Visible: 2,
            Material: 3,
        },
        
        //材质应用模式
        materialApplyMode: {
            Multiply: 0,
            Add: 1,
            Subtract: 2,
            Replace: 3,
        },
        
        //贴图类型
        textureUnit : {
            DIFFUSE: 1684629094,// 漫反射贴图 
            SPECULAR: 1936745827,//镜面反射贴图 
            NORMAL: 1852797549,// 正常贴图 
            LIGHT: 1818847080,// 灯光贴图
            EDGE: 1701078885,
            EMISSIVE: 1701669235//自发光
        },  
        
        //POI图标中心点位置枚举
        poiImagePositionType: {
            POI_LOCATE_NONE: 0, // 默认值，在整个 POI 对象中心
            POI_LOCATE_LEFT: 1,// 在 ICON 的左边
            POI_LOCATE_HCENTER: 2, // 在 ICON 的水平中间
            POI_LOCATE_RIGHT: 3,// 在 ICON 的右边 
            POI_LOCATE_TOP: 256, // 在 ICON 的上边 
            POI_LOCATE_VCENTER: 512,// 在 ICON 的垂直中间
            POI_LOCATE_BOTTOM: 768,// 在 ICON 的下边 
            POI_LOCATE_LEFTTOP: 257,// 在 ICON 的左上
            POI_LOCATE_LEFTBOTTOM: 769,// 在 ICON 的左下
            POI_LOCATE_RIGHTTOP: 259,// 在 ICON 的右上
            POI_LOCATE_RIGHTBOTTOM: 771,// 在 ICON 的右下
            POI_LOCATE_CUSTOM: -1   // 可使用 setLocationOffset调整 
        },
        
        //节点旋转类型定义
        nodeOrientationType: {
            Self: 0,
            Parent: 1,
            World: 2,
        },
        
        //POI文字位置枚举
        poiLayOut: {
            Left: 0,//图标在左
            Top: 1,//图标在上
            Right: 2,// 图标在右
            Bottom: 3,//图标在下
            Center: 4, //文字在图标中间
            
            LeftTop: 0|768,
            LeftBottom: 0|1024,
            RightTop: 2|768,
            RightBottom: 2|1024,
            TopLeft: 1|256,
            TopRight: 1|512,
            BottomLeft: 3|256,
            BottomRight: 3|512,
            
            LeftCustom: 0|1280,
            TopCustom: 1|1280,
            RightCustom: 2|1280,
            BottomCustom: 3|1280
        },
        
       
        
        poiUIType: {
            Normal: 0, //普通模型
            CameraOriented: 1, //面向摄像机
            CameraOrientedKeepSize: 2, //面向摄像机且保持大小一致
        },
        
        //编辑模式枚举
        auxControlType : {
            AXIS_X: 1,
            AXIS_Y: 2,
            AXIS_Z: 4,
            PLANE_XOY: 16,
            PLANE_YOZ: 32,
            PLANE_ZOX: 64
        },
    
        //编辑操作枚举
        auxOperateType : {
            Hide: 0,
            Translate: 1,
            Rotate: 2,
            Scale: 3,
        },    
        
        //线对象线形枚举
        lineType: {
            StraightLine: 0,//直线
            Bessel: 1,//贝塞尔曲线
            Parabola: 2, //抛物线
        },
    
        //摄像机视图枚举
        camViewType : {
            Front: 0,//正视
            Top: 1,//俯视
            Side: 2,//侧视
            Axis: 3,//轴侧
        },    
        
        //UI中视频类型枚举
        videoSourceType: {
            VIDSRC_LOCAL: 0,//本地视频
            VIDSRC_NETSTREAM: 1,//网络实时视频流
        },
        
        //退出节点编辑模式类型枚举
        exitType: {
            SaveAndExit: 1,
            DeleteAndExit: 2,
            ResetAndExit: 3,
        },
        
        //热力图算法类型枚举
        heatMapCalcType: {
            NearBy: 1, //就近算法
            Average: 2, //平均算法
            SquaredWeighted: 3, //反平方加权算法
            RangeAttenuation: 4, //加限制域衰减算法        
        },
        
        //贴花纹理填充类型枚举
        DecalTexFillMode: {
            FillOnly: 1, //单填充
            FrameOnly: 2, //单描边
            FillAndFrame: 3, //填充+描边 
        },
        
        //贴花生成模式枚举
        DecalMode: {
            OpBlendAlpha: 0, //源与目标alpha混合
            OpBlendColor: 1, //源与目标颜色混合
            OpAdd: 3, //源与目标加法合成
            OpModulate: 4, //源与目标乘法合成
        },
        
        //量测拾取模式枚举
        PickUpType: {
            Plane: 1, //水平面上拾取
            Spatial: 2, //空间拾取
            Surface: 3, //贴地拾取
        },
       
    };
    
    
    
    ﻿/*
     * @namespace Util
     *
     *  提供内部使用的各种工具函数
     */
    
    Q3D.Util = {
    
        // @function extend(dest: Object, src?: Object): Object
        //  将 src 对象属性合并到 dest 对象中，并返回 dest 对象，支持 `Q3D.extend()`  快捷写法
        extend: function (dest) {
            var i, j, len, src;
    
            for (j = 1, len = arguments.length; j < len; j++) {
                src = arguments[j];
                for (i in src) {                
                    dest[i] = src[i];
                }
            }
            return dest;
        },
        
        deepExtend : function(target, options) {  
            for (name in options) {  
                copy = options[name];  
                if (copy instanceof Array) {  
                    this.deepExtend(target[name], copy);  
                } else if (copy instanceof Object) {  
                    this.deepExtend(target[name], copy);  
                } else {  
                    target[name] = options[name];  
                }  
            }  
            return target;  
        }, 
        
        deepCopy: function(source) {
            var result = {};
            for (var key in source) {
                result[key] = typeof source[key] === 'object' ? this.deepCopy(source[key]) : source[key];
            }
            return result;
        },
    
        
        //模仿jquery的$.extend实现浅/深度拷贝
        jQueryExtend: function(){
            // 为与源码的下标对应上，我们把第一个参数称为`第0个参数`，依次类推
            var options, name, src, copy, 
                target = arguments[0] || {}, // 默认第0个参数为目标参数
                i = 1,    // i表示从第几个参数凯斯想目标参数进行合并，默认从第1个参数开始向第0个参数进行合并
                length = arguments.length,
                deep = false;  // 默认为浅度拷贝
            
            // 判断第0个参数的类型，若第0个参数是boolean类型，则获取其为true还是false
            // 同时将第1个参数作为目标参数，i从当前目标参数的下一个
            // Handle a deep copy situation
            if ( typeof target === "boolean" ) {
                deep = target;        
                // Skip the boolean and the target
                target = arguments[ i ] || {};
                i++;
            }
            
            //  判断目标参数的类型，若目标参数既不是object类型，也不是function类型，则为目标参数重新赋值 
            // Handle case when target is a string or something (possible in deep copy)
            if ( typeof target !== "object" && !this.isFunction(target) ) {
                target = {};
            }
            
            // 若目标参数后面没有参数了，如$.extend({_name:'wenzi'}), $.extend(true, {_name:'wenzi'})
            // 则目标参数即为jQuery本身，而target表示的参数不再为目标参数
            // Extend jQuery itself if only one argument is passed
            if ( i === length ) {
                target = this;
                i--;
            }
            
            // 从第i个参数开始
            for ( ; i < length; i++ ) {
                // 获取第i个参数，且该参数不为null，
                // 比如$.extend(target, {}, null);中的第2个参数null是不参与合并的
                // Only deal with non-null/undefined values
                if ( (options = arguments[ i ]) != null ) {
            
                    // 使用for~in获取该参数中所有的字段
                    // Extend the base object
                    for ( name in options ) {
                        src = target[ name ];   // 目标参数中name字段的值
                        copy = options[ name ]; // 当前参数中name字段的值
            
                        // 若参数中字段的值就是目标参数，停止赋值，进行下一个字段的赋值
                        // 这是为了防止无限的循环嵌套，我们把这个称为，在下面进行比较详细的讲解
                        // Prevent never-ending loop
                        if ( target === copy ) {
                            continue;
                        }
            
                        // 若deep为true，且当前参数中name字段的值存在且为object类型或Array类型，则进行深度赋值
                        // Recurse if we're merging plain objects or arrays
                        //if ( deep && copy && ( this.isPlainObject(copy) || (copyIsArray = this.isArray(copy)) ) ) {
                        if ( deep && copy && typeof copy == "object" && !copy.nodeType ) {
                            
                            // 若当前参数中name字段的值为Array类型
                            // 判断目标参数中name字段的值是否存在，若存在则使用原来的，否则进行初始化
                            if (  this.isArray(copy) ) {
                                //clone = src && this.isArray(src) ? src : [];
                                target[ name ] = copy.concat();
                            }
                            else if ( this.isQMapObj(copy) )
                            {
                                target[ name ] = copy;
                            } else {
                                // 若原对象存在，则直接进行使用，而不是创建
                                //clone = src && this.isPlainObject(src) ? src : {};
                                //进行深拷贝
                                target[ name ] = this.jQueryExtend( deep, (src || {}), copy);
                            }
            
                            // 递归处理，此处为2.2
                            // Never move original objects, clone them                      
                            //target[ name ] = this.jQueryExtend( deep, clone, copy );                           
            
                        // deep为false，则表示浅度拷贝，直接进行赋值
                        // 若copy是简单的类型且存在值，则直接进行赋值
                        // Don't bring in undefined values
                        } else if ( copy !== undefined ) {
                            // 若原对象存在name属性，则直接覆盖掉；若不存在，则创建新的属性
                            target[ name ] = copy;
                        }
                    }
                }
            }
            
            // 返回修改后的目标参数
            // Return the modified object
            return target;
            
        
        },
    
        // @function create(proto: Object): Object
        // 对象创建
        create: Object.create || (function () {
            function F() {}
            return function (proto) {
                F.prototype = proto;
                return new F();
            };
        })(),
    
        // @function bind(fn: Function, …): Function
        //  返回一个绑定了传入参数的新函数，支持 `Q3D.bind()`  快捷写法
        bind: function (fn, obj) {
            var slice = Array.prototype.slice;
    
            if (fn.bind) {
                return fn.bind.apply(fn, slice.call(arguments, 1));
            }
    
            var args = slice.call(arguments, 2);
    
            return function () {
                return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
            };
        },
    
        // @function stamp(obj: Object): Number
        //  为对象指派唯一ID，并返回该ID
        stamp: function (obj) {
            /*eslint-disable */
            obj._qmap3d_id = obj._qmap3d_id || ++Q3D.Util.lastId;
            return obj._qmap3d_id;
            /*eslint-enable */
        },
    
        // @property lastId: Number
        //  当前分配的唯一对象ID
        lastId: 0,
    
        // 
        // Returns a function which executes function `fn` with the given scope `context`
        // (so that the `this` keyword refers to `context` inside `fn`'s code). The function
        // `fn` will be called no more than one time per given amount of `time`. The arguments
        // received by the bound function will be any arguments passed when binding the
        // function, followed by any arguments passed when invoking the bound function.
        // Has an `Q3D.bind` shortcut.
        throttle: function (fn, time, context) {
            var lock, args, wrapperFn, later;
    
            later = function () {
                // reset lock and call if queued
                lock = false;
                if (args) {
                    wrapperFn.apply(context, args);
                    args = false;
                }
            };
    
            wrapperFn = function () {
                if (lock) {
                    // called too soon, queue to call later
                    args = arguments;
    
                } else {
                    // call and lock until later
                    fn.apply(context, arguments);
                    setTimeout(later, time);
                    lock = true;
                }
            };
    
            return wrapperFn;
        },
    
        // 
        //  Returns the number `num` modulo `range` in such a way so it lies within
        // `range[0]` and `range[1]`. The returned value will be always smaller than
        // `range[1]` unless `includeMax` is set to `true`.
        wrapNum: function (x, range, includeMax) {
            var max = range[1],
                min = range[0],
                d = max - min;
            return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
        },
    
        // @function falseFn(): Function
        //  返回一个函数，总是 returns `false`.
        falseFn: function () { return false; },
    
        // @function formatNum(num: Number, digits?: Number): Number
        //  返回将 `num`  四舍五入到 `digits`  位数，或缺省 5 位数
        formatNum: function (num, digits) {
            var pow = Math.pow(10, digits || 5);
            return Math.round(num * pow) / pow;
        },
    
        // @function trim(str: String): String
        // 删除首尾空格后返回
        trim: function (str) {
            return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
        },
    
        // @function splitWords(str: String): String[]
        //  删除首尾空格后将字符串按空格分隔成多个字符串，并返回字符串数组
        splitWords: function (str) {
            return Q3D.Util.trim(str).split(/\s+/);
        },
    
        // @function setOptions(obj: Object, options: Object): Object
        //  合并给定属性到  `obj`  对象的 `options`  中，并返回最终的选项，支持 `Q3D.setOptions`  快捷写法
        setOptions: function (obj, options) {
            if (!obj.hasOwnProperty('options')) {
                obj.options = obj.options ? Q3D.Util.create(obj.options) : {};
            }
            for (var i in options) {
                obj.options[i] = options[i]; 
            }
            return obj.options;
        },
    
            
        // @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
        //  将一个对象转换成 URL 参数串的形式，如 `{a: "foo", b: "bar"}` 转换成  '?a=foo&b=bar'`
        // 如果设置  existingUrl`  转换后的参数串将添加到末尾；如果设置 `uppercase`  参数串被转换为大写形式
        getParamString: function (obj, existingUrl, uppercase) {
            var params = [];
            for (var i in obj) {
                params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
            }
            return ((!existingUrl || existingUrl.indexOf('?') === -1) ? '?' : '&') + params.join('&');
        },
    
        // @function template(str: String, data: Object): String
        // 简单模板工具，接受一个模板字符串格式 `'Hello {a}, {b}'`  和 一个数据对象 `{a: 'foo', b: 'bar'}`，可返回计算后的字符串
        // ('Hello foo, bar')`。也可以用指定函数代替数据对象中的数值
        template: function (str, data) {
            return str.replace(Q3D.Util.templateRe, function (str, key) {
                var value = data[key];
    
                if (value === undefined) {
                    throw new Error('No value provided for variable ' + str);
    
                } else if (typeof value === 'function') {
                    value = value(data);
                }
                return value;
            });
        },
    
        templateRe: /\{ *([\w_\-]+) *\}/g,
    
        // @function isArray(obj): Boolean
        // 判断对象是否数组类型
        isArray: Array.isArray || function (obj) {
            return (Object.prototype.toString.call(obj) === '[object Array]');
        },
        // @function isFunction(obj): Boolean
        // 判断对象是否函数类型    
        isFunction: function( obj ) {
            return typeof  obj === "function";
        },
        // @function isNumber(obj): Boolean
        // 判断对象是否可转化为数值类型
        isNumber: function(obj) {
            return typeof obj === 'number' && isFinite(obj);
        },
        // @function isInteger(obj): Boolean
        // 判断对象是否整数类型
        isInteger: function(obj) {
            return typeof obj === 'number' && obj % 1 === 0;
        },
        // @function isDefined(obj): Boolean
        // 判断对象是否定义
        isDefined: function(obj) {
            return typeof obj !== 'undefined';
        },
        isQMapObj: function(obj, clsID) {
            try {
                if (typeof obj.getCLSID() == "string") {
                    if (clsID === undefined)
                        return true;
                    if (typeof (clsID) == "string" && obj.getCLSID() == clsID)
                        return true;
                    else
                        return false;
                } 
            } catch (e) {}
            return false;
        },
        isJson: function(obj) {  
            return typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;  
        },
    
        // @function indexOf(array: Array, el: Object): Number
        //  判断对象在数组中是否存在，若存在返回索引，否则返回 -1
        indexOf: function (array, el) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] === el) { return i; }
            }
            return -1;
        },
        
        // 
        // Data URI string containing a base64-encoded empty GIF image.
        // Used as a hack to free memory from unused images on WebKit-powered
        // mobile devices (by setting image `src` to this string).
        emptyImageUrl: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
    };
    
    (function () {
        // inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    
        function getPrefixed(name) {
            return window['webkit' + name] || window['moz' + name] || window['ms' + name];
        }
    
        var lastTime = 0;
    
        // fallback for IE 7-8
        function timeoutDefer(fn) {
            var time = +new Date(),
                timeToCall = Math.max(0, 16 - (time - lastTime));
    
            lastTime = time + timeToCall;
            return window.setTimeout(fn, timeToCall);
        }
    
        var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer,
            cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') ||
                       getPrefixed('CancelRequestAnimationFrame') || function (id) { window.clearTimeout(id); };
    
    
        // 
        // Schedules `fn` to be executed when the browser repaints. `fn` is bound to
        // `context` if given. When `immediate` is set, `fn` is called immediately if
        // the browser doesn't have native support for
        // [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
        // otherwise it's delayed. Returns a request ID that can be used to cancel the request.
        Q3D.Util.requestAnimFrame = function (fn, context, immediate) {
            if (immediate && requestFn === timeoutDefer) {
                fn.call(context);
            } else {
                return requestFn.call(window, Q3D.bind(fn, context));
            }
        };
    
        // 
        // Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
        Q3D.Util.cancelAnimFrame = function (id) {
            if (id) {
                cancelFn.call(window, id);
            }
        };
    })();
    
    // shortcuts for most used utility functions
    Q3D.extend = Q3D.Util.extend;
    Q3D.bind = Q3D.Util.bind;
    Q3D.stamp = Q3D.Util.stamp;
    Q3D.setOptions = Q3D.Util.setOptions;
    
    
    
    ﻿/*
     * @namespace DomUtil
     *
     * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
     * tree, used by QMap3dJS internally.
     *
     * Most functions expecting or returning a `HTMLElement` also work for
     * SVG elements. The only difference is that classes refer to CSS classes
     * in HTML and SVG classes in SVG.
     */
    
    Q3D.DomUtil = {
    
        // @function get(id: String|HTMLElement): HTMLElement
        // Returns an element given its DOM id, or returns the element itself
        // if it was passed directly.
        get: function (id) {
            return typeof id === 'string' ? document.getElementById(id) : id;
        },
        
        getIdByScript: function (e) {
            var scripts = document.getElementsByTagName("script");
            for (var i = scripts.length - 1; i >= 0 ; i--) {
                if (scripts[i]["event"].indexOf(e) > -1)
                    return scripts[i].getAttribute("for");
            }
            return null;
        },
    
        // @function getStyle(el: HTMLElement, styleAttrib: String): String
        // Returns the value for a certain style attribute on an element,
        // including computed values or values set through CSS.
        getStyle: function (el, style) {
    
            var value = el.style[style] || (el.currentStyle && el.currentStyle[style]);
    
            if ((!value || value === 'auto') && document.defaultView) {
                var css = document.defaultView.getComputedStyle(el, null);
                value = css ? css[style] : null;
            }
    
            return value === 'auto' ? null : value;
        },
    
        // @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
        // Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
        create: function (tagName, className, container) {
    
            var el = document.createElement(tagName);
            el.className = className || '';
    
            if (container) {
                container.appendChild(el);
            }
    
            return el;
        },
    
        // @function remove(el: HTMLElement)
        // Removes `el` from its parent element
        remove: function (el) {
            var parent = el.parentNode;
            if (parent) {
                parent.removeChild(el);
            }
        },
    
        // @function empty(el: HTMLElement)
        // Removes all of `el`'s children elements from `el`
        empty: function (el) {
            while (el.firstChild) {
                el.removeChild(el.firstChild);
            }
        },
    
        // @function toFront(el: HTMLElement)
        // Makes `el` the last children of its parent, so it renders in front of the other children.
        toFront: function (el) {
            el.parentNode.appendChild(el);
        },
    
        // @function toBack(el: HTMLElement)
        // Makes `el` the first children of its parent, so it renders back from the other children.
        toBack: function (el) {
            var parent = el.parentNode;
            parent.insertBefore(el, parent.firstChild);
        },
    
        // @function hasClass(el: HTMLElement, name: String): Boolean
        // Returns `true` if the element's class attribute contains `name`.
        hasClass: function (el, name) {
            if (el.classList !== undefined) {
                return el.classList.contains(name);
            }
            var className = Q3D.DomUtil.getClass(el);
            return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
        },
    
        // @function addClass(el: HTMLElement, name: String)
        // Adds `name` to the element's class attribute.
        addClass: function (el, name) {
            if (el.classList !== undefined) {
                var classes = Q3D.Util.splitWords(name);
                for (var i = 0, len = classes.length; i < len; i++) {
                    el.classList.add(classes[i]);
                }
            } else if (!Q3D.DomUtil.hasClass(el, name)) {
                var className = Q3D.DomUtil.getClass(el);
                Q3D.DomUtil.setClass(el, (className ? className + ' ' : '') + name);
            }
        },
    
        // @function removeClass(el: HTMLElement, name: String)
        // Removes `name` from the element's class attribute.
        removeClass: function (el, name) {
            if (el.classList !== undefined) {
                el.classList.remove(name);
            } else {
                Q3D.DomUtil.setClass(el, Q3D.Util.trim((' ' + Q3D.DomUtil.getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
            }
        },
    
        // @function setClass(el: HTMLElement, name: String)
        // Sets the element's class.
        setClass: function (el, name) {
            if (el.className.baseVal === undefined) {
                el.className = name;
            } else {
                // in case of SVG element
                el.className.baseVal = name;
            }
        },
    
        // @function getClass(el: HTMLElement): String
        // Returns the element's class.
        getClass: function (el) {
            return el.className.baseVal === undefined ? el.className : el.className.baseVal;
        },
    
        // @function setOpacity(el: HTMLElement, opacity: Number)
        // Set the opacity of an element (including old IE support).
        // `opacity` must be a number from `0` to `1`.
        setOpacity: function (el, value) {
    
            if ('opacity' in el.style) {
                el.style.opacity = value;
    
            } else if ('filter' in el.style) {
                Q3D.DomUtil._setOpacityIE(el, value);
            }
        },
    
        _setOpacityIE: function (el, value) {
            var filter = false,
                filterName = 'DXImageTransform.Microsoft.Alpha';
    
            // filters collection throws an error if we try to retrieve a filter that doesn't exist
            try {
                filter = el.filters.item(filterName);
            } catch (e) {
                // don't set opacity to 1 if we haven't already set an opacity,
                // it isn't needed and breaks transparent pngs.
                if (value === 1) { return; }
            }
    
            value = Math.round(value * 100);
    
            if (filter) {
                filter.Enabled = (value !== 100);
                filter.Opacity = value;
            } else {
                el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
            }
        },
    
        // @function testProp(props: String[]): String|false
        // Goes through the array of style names and returns the first name
        // that is a valid style name for an element. If no such name is found,
        // it returns false. Useful for vendor-prefixed styles like `transform`.
        testProp: function (props) {
    
            var style = document.documentElement.style;
    
            for (var i = 0; i < props.length; i++) {
                if (props[i] in style) {
                    return props[i];
                }
            }
            return false;
        },
    
        // @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
        // Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
        // and optionally scaled by `scale`. Does not have an effect if the
        // browser doesn't support 3D CSS transforms.
        setTransform: function (el, offset, scale) {
            var pos = offset || new Q3D.Point(0, 0);
    
            el.style[Q3D.DomUtil.TRANSFORM] =
                (Q3D.Browser.ie3d ?
                    'translate(' + pos.x + 'px,' + pos.y + 'px)' :
                    'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') +
                (scale ? ' scale(' + scale + ')' : '');
        },
    
        // @function setPosition(el: HTMLElement, position: Point)
        // Sets the position of `el` to coordinates specified by `position`,
        // using CSS translate or top/left positioning depending on the browser
        // (used by Leaflet internally to position its layers).
        setPosition: function (el, point) { // (HTMLElement, Point[, Boolean])
    
            /*eslint-disable */
            el._leaflet_pos = point;
            /*eslint-enable */
    
            if (Q3D.Browser.any3d) {
                Q3D.DomUtil.setTransform(el, point);
            } else {
                el.style.left = point.x + 'px';
                el.style.top = point.y + 'px';
            }
        },
    
        // @function getPosition(el: HTMLElement): Point
        // Returns the coordinates of an element previously positioned with setPosition.
        getPosition: function (el) {
            // this method is only used for elements previously positioned using setPosition,
            // so it's safe to cache the position for performance
    
            return el._leaflet_pos || new Q3D.Point(0, 0);
        }
    };
    
    
    (function () {
        // prefix style property names
    
        // @property TRANSFORM: String
        // Vendor-prefixed fransform style name (e.g. `'webkitTransform'` for WebKit).
        Q3D.DomUtil.TRANSFORM = Q3D.DomUtil.testProp(
                ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']);
    
    
        // webkitTransition comes first because some browser versions that drop vendor prefix don't do
        // the same for the transitionend event, in particular the Android 4.1 stock browser
    
        // @property TRANSITION: String
        // Vendor-prefixed transform style name.
        var transition = Q3D.DomUtil.TRANSITION = Q3D.DomUtil.testProp(
                ['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);
    
        Q3D.DomUtil.TRANSITION_END =
                transition === 'webkitTransition' || transition === 'OTransition' ? transition + 'End' : 'transitionend';
    
        // @function disableTextSelection()
        // Prevents the user from generating `selectstart` DOM events, usually generated
        // when the user drags the mouse through a page with text. Used internally
        // by Leaflet to override the behaviour of any click-and-drag interaction on
        // the map. Affects drag interactions on the whole document.
    
        // @function enableTextSelection()
        // Cancels the effects of a previous [`Q3D.DomUtil.disableTextSelection`](#domutil-disabletextselection).
        if ('onselectstart' in document) {
            Q3D.DomUtil.disableTextSelection = function () {
                Q3D.DomEvent.on(window, 'selectstart', Q3D.DomEvent.preventDefault);
            };
            Q3D.DomUtil.enableTextSelection = function () {
                Q3D.DomEvent.off(window, 'selectstart', Q3D.DomEvent.preventDefault);
            };
    
        } else {
            var userSelectProperty = Q3D.DomUtil.testProp(
                ['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);
    
            Q3D.DomUtil.disableTextSelection = function () {
                if (userSelectProperty) {
                    var style = document.documentElement.style;
                    this._userSelect = style[userSelectProperty];
                    style[userSelectProperty] = 'none';
                }
            };
            Q3D.DomUtil.enableTextSelection = function () {
                if (userSelectProperty) {
                    document.documentElement.style[userSelectProperty] = this._userSelect;
                    delete this._userSelect;
                }
            };
        }
    
        // @function disableImageDrag()
        // As [`Q3D.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
        // for `dragstart` DOM events, usually generated when the user drags an image.
        Q3D.DomUtil.disableImageDrag = function () {
            Q3D.DomEvent.on(window, 'dragstart', Q3D.DomEvent.preventDefault);
        };
    
        // @function enableImageDrag()
        // Cancels the effects of a previous [`Q3D.DomUtil.disableImageDrag`](#domutil-disabletextselection).
        Q3D.DomUtil.enableImageDrag = function () {
            Q3D.DomEvent.off(window, 'dragstart', Q3D.DomEvent.preventDefault);
        };
    
        // @function preventOutline(el: HTMLElement)
        // Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
        // of the element `el` invisible. Used internally by Leaflet to prevent
        // focusable elements from displaying an outline when the user performs a
        // drag interaction on them.
        Q3D.DomUtil.preventOutline = function (element) {
            while (element.tabIndex === -1) {
                element = element.parentNode;
            }
            if (!element || !element.style) { return; }
            Q3D.DomUtil.restoreOutline();
            this._outlineElement = element;
            this._outlineStyle = element.style.outline;
            element.style.outline = 'none';
            Q3D.DomEvent.on(window, 'keydown', Q3D.DomUtil.restoreOutline, this);
        };
    
        // @function restoreOutline()
        // Cancels the effects of a previous [`Q3D.DomUtil.preventOutline`]().
        Q3D.DomUtil.restoreOutline = function () {
            if (!this._outlineElement) { return; }
            this._outlineElement.style.outline = this._outlineStyle;
            delete this._outlineElement;
            delete this._outlineStyle;
            Q3D.DomEvent.off(window, 'keydown', Q3D.DomUtil.restoreOutline, this);
        };
    })();
    
    
    
    ﻿/*
     * @namespace Browser
     * @aka Q3D.Browser
     *
     * 本命名空间提供静态属性用于浏览器及其特征的检测
     *
     * @example
     *
     * ```js
     * if (Q3D.Browser.ielt9) {
     *   alert('请升级浏览器版本!');
     * }
     * ```
     */
    
    (function () {
    
        var ua = navigator.userAgent.toLowerCase(),
            //doc = document.documentElement,
    
            ie = 'ActiveXObject' in window,
    
            webkit    = ua.indexOf('webkit') !== -1,
            //phantomjs = ua.indexOf('phantom') !== -1,
            chrome    = ua.indexOf('chrome') !== -1,
            gecko     = ua.indexOf('gecko') !== -1  && !webkit && !window.opera && !ie,
    
            win = navigator.platform.indexOf('Win') === 0,
    
            msPointer = !window.PointerEvent && window.MSPointerEvent,
            pointer = window.PointerEvent || msPointer;
    
    
        var touch = !window.L_NO_TOUCH && (pointer || 'ontouchstart' in window ||
                (window.DocumentTouch && document instanceof window.DocumentTouch));
    
        Q3D.Browser = {
    
            // @property ie: Boolean
            //  判断是否 I E 浏览器（不包括 Edge）
            ie: ie,
    
            // @property ielt9: Boolean
            // `true`  表示 IE 浏览器版本 < 9
            ielt9: ie && !document.addEventListener,
            
            // @property ie11: Boolean
            // `true`  表示 IE 11
            ie11: ie && !document.attachEvent,
    
            // @property edge: Boolean
            // `true`  表示 Edge 浏览器
            edge: 'msLaunchUri' in navigator && !('documentMode' in document),
    
            // @property webkit: Boolean
            // `true`  表示基于 webkit 内核浏览器，如 Chrome 和 Safari （包括移动版本）
            webkit: webkit,
    
            // @property gecko: Boolean
            // `true`  表示基于 gecko 内核浏览器， 如 Firefox
            gecko: gecko,
            
            // @property chrome: Boolean
            // `true`  表示 Chrome 浏览器
            chrome: chrome,
    
            // @property safari: Boolean
            // `true`  表示 Safari 浏览器
            safari: !chrome && ua.indexOf('safari') !== -1,
    
            // @property win: Boolean
            // `true`  表示运行在 Windows 平台上的浏览器
            win: win,
    
        // @property touch: Boolean
            // `true`  表示所有支持触屏事件的浏览器
            touch: !!touch,
    
            // 
            // `true` for browsers implementing the Microsoft touch events model (notably IE10).
            msPointer: !!msPointer,
    
            // 
            // `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).
            pointer: !!pointer
        };
    
    }());
    
    
    
    ﻿
    // @class Class
    // @aka Q3D.Class
    
    // @section
    // @uninheritable
    
    Q3D.Class = function () {};
    
    Q3D.Class.extend = function (props) {
    
        // @function extend(props: Object): Function
        // [扩展当前的类](#class-inheritance)  给定属性将被包含进来
        // 返回一个 Javascript 函数用于类的构造器 (使用 `new`  时调用) 
        var NewClass = function () {
    
            // call the constructor
            if (this.initialize) {
                this.initialize.apply(this, arguments);
            }
    
            // call all constructor hooks
            this.callInitHooks();
        };
    
        var parentProto = NewClass.__super__ = this.prototype;
    
        var proto = Q3D.Util.create(parentProto);
        proto.constructor = NewClass;
    
        NewClass.prototype = proto;
    
        // inherit parent's statics
        for (var i in this) {
            if (this.hasOwnProperty(i) && i !== 'prototype') {
                NewClass[i] = this[i];
            }
        }
    
        // mix static properties into the class
        if (props.statics) {
            Q3D.extend(NewClass, props.statics);
            delete props.statics;
        }
    
        // mix includes into the prototype
        if (props.includes) {
            Q3D.Util.extend.apply(null, [proto].concat(props.includes));
            delete props.includes;
        }
    
        // merge options
        if (proto.options) {
            props.options = Q3D.Util.extend(Q3D.Util.create(proto.options), props.options);
        }
    
        // mix given properties into the prototype
        Q3D.extend(proto, props);
    
        proto._initHooks = [];
    
        // add method for calling all hooks
        proto.callInitHooks = function () {
    
            if (this._initHooksCalled) { return; }
    
            if (parentProto.callInitHooks) {
                parentProto.callInitHooks.call(this);
            }
    
            this._initHooksCalled = true;
    
            for (var i = 0, len = proto._initHooks.length; i < len; i++) {
                proto._initHooks[i].call(this);
            }
        };
    
        return NewClass;
    };
    
    
    // @function include(properties: Object): this
    // [包含一个混合对象](#class-includes) 到当前的类中
    Q3D.Class.include = function (props) {
        Q3D.extend(this.prototype, props);
        return this;
    };
    
    // @function mergeOptions(options: Object): this
    // [合并 `options`](#class-options) 到类的缺省项中
    Q3D.Class.mergeOptions = function (options) {
        Q3D.extend(this.prototype.options, options);
        return this;
    };
    
    // 
    // Adds a [constructor hook](#class-constructor-hooks) to the class.
    Q3D.Class.addInitHook = function (fn) { // (Function) || (String, args...)
        var args = Array.prototype.slice.call(arguments, 1);
    
        var init = typeof fn === 'function' ? fn : function () {
            this[fn].apply(this, args);
        };
    
        this.prototype._initHooks = this.prototype._initHooks || [];
        this.prototype._initHooks.push(init);
        return this;
    };
    
    
    
    ﻿
    /*
     * @class Evented
     * @aka Q3D.Evented
     * @inherits Class
     *
     * 通常当与对象相关的某些特定事件发生会允许执行一些函数，Evented类提供了这样一套共享的方法，可用于所有继承的类，如 Map
     *
     * @example
     *
     * ```js
     * map.on('onCreateArea', function(area) {
     * 	alert(area.getName());
     * } );
     * ```
     *
     * QMap3DJS 中引擎事件的处理，可以随时添加或删除一个监听事件:
     *
     * ```js
     * function onCreateAreaFn(area) { ... }
     *
     * map.on('onCreateAreaFn', onCreateAreaFn);
     * map.off('onCreateAreaFn', onCreateAreaFn);
     * ```
     * QMap3DJS 中对键盘事件的处理:
     *
     * ```js
     * //定义事件：wparam为按键代码，lparam表示同时按下功能键（1: Ctrl , 2: Alt, 4: Shift）
     * //注意不要使用浏览器自带的快捷键 ，同时也不要使用引擎预定义的按键（包括方向键）
     * function onKeyUpFn(wparam,lparam) { ... }
     *
     * //绑定事件
     * map.attachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.O, onKeyUpFn);
     * // 移除指定键值对应事件
     * map.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.O);
     * //移除指定类型的事件
     * map.detachKeyEvent("OnKeyUp");
     * //设置事件状态是开启还是停止
     * map.setKeyEvent("OnKeyUp", Q3D.Enums.keyboard.O, false);  
      * //接受所有键值
     * mapDiv.attachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.ALL, onKeyUpFn );       
     * ```
     *
     * QMap3DJS 中对鼠标事件的处理:
     *
     * ```js
     * function onMouseFn1(options) { ... }
     * function onMouseFn2(options) { ... }
     *
     * //绑定第一个事件
     * map.attachMouseEvent("OnLButtonDown", "test1", onMouseFn1);
     * //绑定第二个事件，此时第一个事件的响应不再有效
     * map.attachMouseEvent("OnLButtonDown", "test2", onMouseFn2);
     * //恢复第一个事件
     * map.attachMouseEvent("OnLButtonDown", "test1");
     * //停止第一个事件响应
     * map.setMouseEvent("OnLButtonDown", "test1", false);
     * //移除第二个事件响应
     * map.detachMouseEvent("OnLButtonDown", "test2"); 
     * //移除所有事件响应
     * map.detachMouseEvent("OnLButtonDown"); 
     * ```
     *
     * QMap3DJS 中对UI事件的处理:
     *
     * ```js
     * function onUIBtnFn1(widget) { ... }
     *
     * //绑定事件
     * map.attachUIEvent("onNotifyMouseButtonClick", "innerUI_Alert", onUIBtnFn1);
     * //移除事件响应
     * map.detachUIEvent("onNotifyMouseButtonClick","innerUI_Alert"); 
     * ```
     */
     
    Q3D.Evented = Q3D.Class.extend({    
        
        _keyUpFn:function (wparam, lparam) {
            var typeListeners = mapObj._keyEvents["OnKeyUp"];
            if (!typeListeners) return;
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].key.wparam == wparam) {
                    if (typeListeners[i].enabled)
                        typeListeners[i].fn(wparam, lparam);
                    break;//return;
                }
            }   
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].key.wparam == -1) {
                    if (typeListeners[i].enabled)
                        typeListeners[i].fn(wparam, lparam);
                    return;
                }
            }         
        },
        
        _keyDownFn:function (wparam, lparam) {
            //debugger;
            var typeListeners = mapObj._keyEvents["OnKeyDown"];
            if (!typeListeners) return;
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].key.wparam == wparam) {
                    if (typeListeners[i].enabled)
                        typeListeners[i].fn(wparam, lparam);
                    break;//return;
                }
            }     
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].key.wparam == -1) {
                    if (typeListeners[i].enabled)
                        typeListeners[i].fn(wparam, lparam);
                    return;
                }
            }       
        },
        
        _notifyMouseButtonClickFn:function (widget) {
            //debugger;
            var typeListeners = mapObj._widgetEvents["onNotifyMouseButtonClick"];
            if (!typeListeners) return;
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].key == widget.getName()) {
                    if (typeListeners[i].enabled)
                        typeListeners[i].fn(widget);
                    return;
                }
            }                
        },
        
        _movieClipInstancePassFrameFn:function (mci, frameIdx) {
            //debugger;
            var typeListeners = mapObj._widgetEvents["onMovieClipInstancePassFrame"];
            if (!typeListeners) return;
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].key == (mci.getCName()+"/"+frameIdx)) {
                    if (typeListeners[i].enabled)
                        typeListeners[i].fn(mci, frameIdx);
                    return;
                }
            }                
        },
         
        _actCtrlObjAniEnd:function (aco) {
            //debugger;
            var typeListeners = mapObj._widgetEvents["onActCtrlObjAniEnd"];
            if (!typeListeners) return;
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].key == (aco.getBinderAsNode().getName())) {
                    if (typeListeners[i].enabled)
                        typeListeners[i].fn(aco);
                    return;
                }
            }                
        },
        
        _widgetCloseFn:function (widget) {
            //debugger;
            var typeListeners = mapObj._widgetEvents["onWidgetClose"];
            if (!typeListeners) return;
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].key == widget) {
                    if (typeListeners[i].enabled) 
                        typeListeners[i].fn(widget);
                    mapObj.detachUIEvent("onWidgetClose", widget);
                    mapObj.detachUIEvent("onUserNotifyEX", widget);
                    return;
                }
            }                
        },
        
        _videoCtrlCloseFn:function (video) {
            //debugger;
            var typeListeners = mapObj._widgetEvents["onVideoCtrlClose"];
            if (!typeListeners) return;
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].key == video) {
                    if (typeListeners[i].enabled) 
                        typeListeners[i].fn(video);
                    mapObj.detachUIEvent("onVideoCtrlClose", video);
                    return;
                }
            }                
        },
        
        _sceneNodeAllResourceCompletedFn:function (node) {
            //debugger;
            var typeListeners = mapObj._widgetEvents["onSceneNodeAllResourceCompleted"];
            if (!typeListeners) return;
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].key == mapObj.getSceneNodeFullName(node)) {
                    if (typeListeners[i].enabled) 
                        typeListeners[i].fn(node);
                    mapObj.detachUIEvent("onSceneNodeAllResourceCompleted", mapObj.getSceneNodeFullName(node));
                    return;
                }
            }                
        },   
       
        _userNotifyEXFn:function (widget, type, value) {
            //debugger;
            var typeListeners = mapObj._widgetEvents["onUserNotifyEX"];
            if (!typeListeners) return;
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].key == widget) {
                    if (typeListeners[i].enabled) 
                        typeListeners[i].fn(widget,type, value);                
                    return;
                }
            }                
        },
        
        _processInputParam:function (wparam, logx, logy, grdx, grdy, grdz) {
            var shiftPressDown = false;
            var ctrlPressDown = false;
            switch (wparam) {            
                case 5:
                case 6:
                case 20:
                    shiftPressDown = true;
                    ctrlPressDown = false;
                    break;
                case 9:
                case 10:
                case 24:
                    shiftPressDown = false;
                    ctrlPressDown = true;
                    break;
                case 13:
                case 14:
                case 28:
                    shiftPressDown = true;
                    ctrlPressDown = true;
                    break;            
            }
            var screenCoord = Q3D.vector2I(logx, logy).get();
            var mainCam = mapObj._map3d.getWorldManager().getMainCamera(0);
            var groundCoord = mainCam.getCrossCoord(screenCoord,65);//实体+矢量模型
            var nearestNode = mainCam.pickNearsetSceneNode(screenCoord, 65);
            var areaCoord =  (nearestNode == null || groundCoord == null) ? null : nearestNode.getArea().toLocalPos(groundCoord);
            var options = {
                        logX: logx,
                        logY: logy,
                        groundX: groundCoord == null ? 0 : groundCoord.x,
                        groundY: groundCoord == null ? 0 : groundCoord.y,
                        groundZ: groundCoord == null ? 0 : groundCoord.z,
                        NearestNode: nearestNode,
                        ScreenCoord: screenCoord,
                        GroundCoord: groundCoord,
                        AreaCoord: areaCoord,
                        ShiftPressDown: shiftPressDown,
                        CtrlPressDown: ctrlPressDown
            };
            if (mapObj._enableDebug && console) {
                        console.log("========================================================================================");
                        var operateTime = new Date();
                        console.log("操作时间：" + operateTime.getHours() + ":" + operateTime.getMinutes() + ":" + operateTime.getSeconds());
                        if (options.GroundCoord != null) {
                            console.log("当前点击位置平面坐标：" + options.GroundCoord.x.toFixed(6) + "," + options.GroundCoord.y.toFixed(6) + "," + options.GroundCoord.z.toFixed(6));
                            //console.log("当前点击位置经纬度坐标：" + options.GroundCoord.toQGlobalVec3d().toString());
                            var v3d = Q3D.vector3d(options.GroundCoord);
                            var  gv3d = Q3D.globalVec3d(v3d.toGlobalVec3d());
                            console.log("当前点击位置经纬度坐标：" + gv3d.longitude.toFixed(6) + "," + gv3d.latitude.toFixed(6) + "," + gv3d.height.toFixed(6));
                            
                        }
                        if (options.NearestNode != null) {
                            console.log("当前区域：" + options.NearestNode.getArea().getName());
                            console.log("当前点击选中节点："  + "(\"" + options.NearestNode.getArea().getName() + "/" + options.NearestNode.getName() + "\")");
                            console.log("当前点击选中节点父节点：" + (options.NearestNode.getParent() == null ? "节点为根节点" : "(\"" + options.NearestNode.getParent().getArea().getName() + "/" + options.NearestNode.getParent().getName() + "\")"));
                        }
                        console.log("========================================================================================");
            }
    
            return options;
        },
        
        _OnLButtonDownFn:function (wparam, logx, logy, grdx, grdy, grdz) {
            //debugger;
            var typeListeners = mapObj._mouseEvents["OnLButtonDown"];
            if (!typeListeners) return;
            
            var options = mapObj._processInputParam(wparam, logx, logy, grdx, grdy, grdz);
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].name == mapObj._mouseEventNames["OnLButtonDown"]) {
                    if (typeListeners[i].enabled)
                        typeListeners[i].fn(options);
                    return;
                }
            }                
        },
        
        _OnRButtonDownFn:function (wparam, logx, logy, grdx, grdy, grdz) {
            //debugger;
            var typeListeners = mapObj._mouseEvents["OnRButtonDown"];
            if (!typeListeners) return;
            
            var options = mapObj._processInputParam(wparam, logx, logy, grdx, grdy, grdz);
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].name == mapObj._mouseEventNames["OnRButtonDown"]) {
                    if (typeListeners[i].enabled)
                        typeListeners[i].fn(options);
                    return;
                }
            }                
        },
        
        _OnMButtonDownFn:function (wparam, logx, logy, grdx, grdy, grdz) {
            //debugger;
            var typeListeners = mapObj._mouseEvents["OnMButtonDown"];
            if (!typeListeners) return;
            
            var options = mapObj._processInputParam(wparam, logx, logy, grdx, grdy, grdz);
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].name == mapObj._mouseEventNames["OnMButtonDown"]) {
                    if (typeListeners[i].enabled)
                        typeListeners[i].fn(options);
                    return;
                }
            }                
        },
        
        _OnLButtonUpFn:function (wparam, logx, logy, grdx, grdy, grdz) {
            //debugger;
            var typeListeners = mapObj._mouseEvents["OnLButtonUp"];
            if (!typeListeners) return;
            
            var options = mapObj._processInputParam(wparam, logx, logy, grdx, grdy, grdz);
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].name == mapObj._mouseEventNames["OnLButtonUp"]) {
                    if (typeListeners[i].enabled)
                        typeListeners[i].fn(options);
                    return;
                }
            }                
        },
        
        _OnRButtonUpFn:function (wparam, logx, logy, grdx, grdy, grdz) {
            //debugger;
            var typeListeners = mapObj._mouseEvents["OnRButtonUp"];
            if (!typeListeners) return;
            
            var options = mapObj._processInputParam(wparam, logx, logy, grdx, grdy, grdz);
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].name == mapObj._mouseEventNames["OnRButtonUp"]) {
                    if (typeListeners[i].enabled)
                        typeListeners[i].fn(options);
                    return;
                }
            }                
        },
        
        _OnMButtonUpFn:function (wparam, logx, logy, grdx, grdy, grdz) {
            //debugger;
            var typeListeners = mapObj._mouseEvents["OnMButtonUp"];
            if (!typeListeners) return;
            
            var options = mapObj._processInputParam(wparam, logx, logy, grdx, grdy, grdz);
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].name == mapObj._mouseEventNames["OnMButtonUp"]) {
                    if (typeListeners[i].enabled)
                        typeListeners[i].fn(options);
                    return;
                }
            }                
        },
        
        _OnLButtonDblClkFn:function (wparam, logx, logy, grdx, grdy, grdz) {
            //debugger;
            var typeListeners = mapObj._mouseEvents["OnLButtonDblClk"];
            if (!typeListeners) return;
            
            var options = mapObj._processInputParam(wparam, logx, logy, grdx, grdy, grdz);
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].name == mapObj._mouseEventNames["OnLButtonDblClk"]) {
                    if (typeListeners[i].enabled)
                        typeListeners[i].fn(options);
                    return;
                }
            }                
        },
        _OnRButtonDblClkFn:function (wparam, logx, logy, grdx, grdy, grdz) {
            //debugger;
            var typeListeners = mapObj._mouseEvents["OnRButtonDblClk"];
            if (!typeListeners) return;
            
            var options = mapObj._processInputParam(wparam, logx, logy, grdx, grdy, grdz);
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].name == mapObj._mouseEventNames["OnRButtonDblClk"]) {
                    if (typeListeners[i].enabled)
                        typeListeners[i].fn(options);
                    return;
                }
            }                
        },
        
         _OnMouseWheelFn:function (wparam, logx, logy, grdx, grdy, grdz) {
            
            var typeListeners = mapObj._mouseEvents["OnMouseWheel"];
            if (!typeListeners) return;
            
            var options = mapObj._processInputParam(wparam, logx, logy, grdx, grdy, grdz);
            for (var i = 0, len = typeListeners.length; i < len; i++) {
                if (typeListeners[i].name == mapObj._mouseEventNames["OnMouseWheel"]) {
                    if (typeListeners[i].enabled)
                        typeListeners[i].fn(options);
                    return;
                }
            }                
        },    
        
        _mouseMoveMethod: function(params){
            var typeListeners = mapObj._mouseEvents["OnMouseMove"];
                if (!typeListeners) return;
                
                var args = params.split(',');
                var options = mapObj._processInputParam(parseInt(args[0]), parseInt(args[1]), parseInt(args[2]), parseInt(args[3]), parseInt(args[4]), parseInt(args[5]));
                for (var i = 0, len = typeListeners.length; i < len; i++) {
                    if (typeListeners[i].name == mapObj._mouseEventNames["OnMouseMove"]) {
                        if (typeListeners[i].enabled)
                            typeListeners[i].fn(options);
                        return;
                    }
                }    
          },
          
         _OnMouseMoveFn:function (wparam, logx, logy, grdx, grdy, grdz) {
           //debugger;
            var now = new Date().getTime();
            if(now - mapObj._lastMousemoveTime <= mapObj._mousemoveTime) {
              return;
            }
            mapObj._lastMousemoveTime = now;
            setTimeout( "mapObj._mouseMoveMethod('" + wparam + "," + logx + "," + logy + "," + grdx + "," + grdy + "," + grdz + "')", 
                mapObj._mousemoveTime);      
    
        },
      
    
        //IE11下事件绑定：for event方式
        _attachEventForIE11: function (obj, _strEventId, _functionCallback) {       
            var nameFromToStringRegex = /^function\s?([^\s(]*)/;
            var paramsFromToStringRegex = /\(\)|\(.+\)/;
            //在_functionCallback中添加换行符号
            var params = _functionCallback.toString().replace('{', '\r\n{').match(paramsFromToStringRegex)[0];
            var functionName = _functionCallback.name;
            if (!functionName) {   
                var names =_functionCallback.toString().match(nameFromToStringRegex);   
                functionName = (names  && names.length > 1) ? names[1] : "";
            }
            var handler;
            try {
                handler = document.createElement("script");
                handler.setAttribute("for", obj.id);
            }
            catch(ex) {
                handler = document.createElement('<script for="' + obj.id + '">');
            }
            handler.event = _strEventId + params;
            if (functionName == "") 
            {
                //var funcText = "var " + _strEventId + "=" + _functionCallback + ";" + _strEventId + params + ";";
                //handler.appendChild(document.createTextNode(funcText));
               handler.appendChild(document.createTextNode("(" + _functionCallback + ")" + params + ";"));
            }
            else
                handler.appendChild(document.createTextNode(functionName + params + ";"));
            document.body.appendChild(handler);
            return handler;
        },
        
        //IE11下事件卸载：for event方式
        _detachEventForIE11: function (obj, _strEventId, _functionCallback) {
            var scripts = document.getElementsByTagName("script");
            for (var i = scripts.length - 1; i >= 0 ; i--) {
                if (scripts[i].getAttribute("for")===obj.id && scripts[i]["event"].indexOf(_strEventId) > -1)
                    Q3D.DomUtil.remove(scripts[i]);
            }
        },
        
        //引擎事件绑定
        _eventBind: function (flag, type, fn, context) {
            var newFn = fn;       
            //判断事件的类型
            var eventType = type.toUpperCase();
            switch(eventType) {
                case "ONKEYUP": newFn = this._keyUpFn; break;
                case "ONKEYDOWN": newFn = this._keyDownFn; break;
                case "ONLBUTTONDOWN": newFn = this._OnLButtonDownFn; break;
                case "ONRBUTTONDOWN": newFn = this._OnRButtonDownFn; break;
                case "ONMBUTTONDOWN": newFn = this._OnMButtonDownFn; break;
                case "ONLBUTTONUP": newFn = this._OnLButtonUpFn; break;
                case "ONRBUTTONUP": newFn = this._OnRButtonUpFn; break;
                case "ONMBUTTONUP": newFn = this._OnMButtonUpFn; break;
                case "ONLBUTTONDBLCLK": newFn = this._OnLButtonDblClkFn; break;
                case "ONRBUTTONDBLCLK": newFn = this._OnRButtonDblClkFn; break;
                case "ONMOUSEWHEEL": newFn = this._OnMouseWheelFn; break;
                case "ONMOUSEMOVE": newFn = this._OnMouseMoveFn;   this._lastMousemoveTime = 0; this._mousemoveTime = 100; break;
                case "ONNOTIFYMOUSEBUTTONCLICK": newFn = this._notifyMouseButtonClickFn; break;
                case "ONWIDGETCLOSE": newFn = this._widgetCloseFn; break;
                case "ONUSERNOTIFYEX": newFn = this._userNotifyEXFn; break;
                case "ONMOVIECLIPINSTANCEPASSFRAME": newFn = this._movieClipInstancePassFrameFn; break;
                case "ONACTCTRLOBJANIEND": newFn = this._actCtrlObjAniEnd; break;		
                case "ONVIDEOCTRLCLOSE": newFn = this._videoCtrlCloseFn; break;	
                case "ONSCENENODEALLRESOURCECOMPLETED": newFn = this._sceneNodeAllResourceCompletedFn; break;	       
            }
            
            if (flag) {
                //挂接事件
                if(Q3D.Browser.ie) {
                    if (context.attachEvent) {
                        context.attachEvent(type, newFn);
                    } else {
                        this._attachEventForIE11(context, type, newFn);
                    }
                }
                else{
                    eval("window." + type + " = " + newFn);
                }
            } else {
                //卸载事件
                if(Q3D.Browser.ie) {
                    if (context.detachEvent) {
                        context.detachEvent(type, newFn);
                    } else {
                        this._detachEventForIE11(context, type, newFn);
                    }
                }
                else{
                    eval("window." + type + " = null; ");
                }
            }       
           
        },
        
        /* @method on(type: String, fn: Function): this
         * 为引擎对象添加一个特定的监听事件。
         *
         * @alternative
         * @method on(eventMap: Object): this
         * 添加一组类型/监听对，如 `{onCreateArea: onCreateAreaFn, onCameraFlyToEnd: onCameraFlyToEndFn}`
         */
        on: function (types, fn, context) {
    
            // types can be a map of types/handlers
            if (typeof types === 'object') {
                for (var type in types) {
                    // we don't process space-separated events here for performance;
                    // it's a hot path since Layer uses the on(obj) syntax
                    this._on(type, types[type], fn);
                }
    
            } else {
                // types can be a string of space-separated words
                types = Q3D.Util.splitWords(types);
    
                for (var i = 0, len = types.length; i < len; i++) {
                    this._on(types[i], fn, context);
                }
            }
    
            return this;
        },
    
        /* @method off(type: String, fn?: Function): this
         *  移除先前添加的监听函数。如果未指定删除的函数对象，将移除该事件对应的所有监听函数
         *
         * @alternative
         * @method off(eventMap: Object): this
         * 移除一组类型/监听对
         *
         */
        off: function (types, fn, context) {
    
            if (!types) {
                // clear all listeners if called without arguments
                delete this._events;
    
            } else if (typeof types === 'object') {
                for (var type in types) {
                    this._off(type, types[type], fn);
                }
    
            } else {
                types = Q3D.Util.splitWords(types);
    
                for (var i = 0, len = types.length; i < len; i++) {
                    this._off(types[i], fn, context);
                }
            }
    
            return this;
        },
    
        // attach listener (without syntactic sugar now)
        _on: function (type, fn, context) {
            this._events = this._events || {};
    
            /* get/init listeners for type */
            var typeListeners = this._events[type];
            if (!typeListeners) {
                typeListeners = [];
                this._events[type] = typeListeners;
            }
    
            if (context === this) {
                // Less memory footprint.
                context = undefined;
            } else {
                context = mapObj._map3d;//默认为引擎对象
            }
                      
            var newListener = {fn: fn, ctx: context},
                listeners = typeListeners;
    
            // check if fn already there
            /*
            var newfn = fn.toString().replace(/\s+/g,"").replace(/[\r\n]/g,"").toLowerCase(); //剔除多余的空格和换行符
            for (var i = 0, len = listeners.length; i < len; i++) {            
                var oldfn = listeners[i].fn.toString().replace(/\s+/g,"").replace(/[\r\n]/g,"").toLowerCase(); //剔除多余的空格和换行符
                if (newfn === oldfn && listeners[i].ctx === context) {
                    return;
                }            
            }
            */
    
            if (listeners.length)
                this._off(type, listeners[0].fn, listeners[0].ctx)
            
            listeners.push(newListener);        
            //挂接事件
            this._eventBind(true, type, newListener.fn, newListener.ctx);              
        },
    
        _off: function (type, fn, context) {
            var listeners,
                i,
                len;
                
            if (!this._events) { return; }
    
            listeners = this._events[type];
    
            if (!listeners) {
                return;
            }
            
            if (context === this) {
                context = undefined;
            } else {
                context = mapObj._map3d;//默认为引擎对象
            }
    
            if (!fn) {
                // Set all removed listeners to noop so they are not called if remove happens in fire
                for (i = 0, len = listeners.length; i < len; i++) {
                    //卸载每个事件
                    this._eventBind(false, type, listeners[i].fn, context);
                    //listeners[i].fn = Q3D.Util.falseFn;                
                }
                // clear all listeners for a type if function isn't specified
                delete this._events[type];
                return;
            }
        
    
            if (listeners) {
    
                // find fn and remove it
                var newfn = fn.toString().replace(/\s+/g,"").replace(/[\r\n]/g,"").toLowerCase(); //剔除多余的空格和换行符            
                for (i = 0, len = listeners.length; i < len; i++) {
                    var l = listeners[i];
                    var oldfn = listeners[i].fn.toString().replace(/\s+/g,"").replace(/[\r\n]/g,"").toLowerCase(); //剔除多余的空格和换行符
                    if (l.ctx !== context) { continue; }
                    if (oldfn === newfn) {
                        //卸载事件
                        this._eventBind(false, type, l.fn, context);
                        
                        // set the removed listener to noop so that's not called if remove happens in fire
                        l.fn = Q3D.Util.falseFn;
    
                        if (this._firingCount) {
                            /* copy array in case events are being fired */
                            this._events[type] = listeners = listeners.slice();
                        }
                        listeners.splice(i, 1);
    
                        return;
                    }
                }
            }
        },
    
        // 
        // Fires an event of the specified type. You can optionally provide an data
        // object — the first argument of the listener function will contain its
        // properties. The event might can optionally be propagated to event parents.
        fire: function (type, data, propagate) {
            if (!this.listens(type, propagate)) { return this; }
    
            var event = Q3D.Util.extend({}, data, {type: type, target: this});
    
            if (this._events) {
                var listeners = this._events[type];
    
                if (listeners) {
                    this._firingCount = (this._firingCount + 1) || 1;
                    for (var i = 0, len = listeners.length; i < len; i++) {
                        var l = listeners[i];
                        l.fn.call(l.ctx || this, event);
                    }
    
                    this._firingCount--;
                }
            }
    
            if (propagate) {
                // propagate the event to parents (set with addEventParent)
                this._propagateEvent(event);
            }
    
            return this;
        },
    
        // @method listens(type: String): Boolean
        //  如果特定的事件类型已经有挂接的监听函数，则返回 `true` 
        listens: function (type, propagate) {
            var listeners = null;
            var eventType = type.toUpperCase();
            switch(eventType) {
                case "ONKEYUP": 
                case "ONKEYDOWN": listeners = this._keyEvents && this._keyEvents[type]; break;
                case "ONLBUTTONDOWN": 
                case "ONRBUTTONDOWN": 
                case "ONMBUTTONDOWN": 
                case "ONLBUTTONUP": 
                case "ONRBUTTONUP": 
                case "ONMBUTTONUP": 
                case "ONLBUTTONDBLCLK": 
                case "ONRBUTTONDBLCLK": 
                case "ONMOUSEWHEEL": 
                case "ONMOUSEMOVE": listeners = this._mouseEvents && this._mouseEvents[type]; break;
                case "ONNOTIFYMOUSEBUTTONCLICK": 
                case "ONWIDGETCLOSE": 
                case "ONVIDEOCTRLCLOSE": 
                case "ONMOVIECLIPINSTANCEPASSFRAME": 
                case "ONACTCTRLOBJANIEND": 
                case "ONUSERNOTIFYEX": listeners = this._widgetEvents && this._widgetEvents[type]; break;
                default: listeners = this._events && this._events[type];
            }
            if (listeners && listeners.length) { return true; }		
            return false;
        },
    
        // 
        // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
        once: function (types, fn, context) {
    
            if (typeof types === 'object') {
                for (var type in types) {
                    this.once(type, types[type], fn);
                }
                return this;
            }
    
            var handler = Q3D.bind(function () {
                this
                    .off(types, fn, context)
                    .off(types, handler, context);
            }, this);
    
            // add a listener that's executed once and removed after that
            return this
                .on(types, fn, context)
                .on(types, handler, context);
        },
    
        /* @method attachKeyEvent(type: String, key: String, fn: Function): this
         * 为引擎对象添加一个特定的键盘监听事件。
         *
         */
        attachKeyEvent: function (type, key, fn) {
            this._keyEvents = this._keyEvents || {};
     
            /* get/init listeners for type */
            var typeListeners = this._keyEvents[type];        
            if (!typeListeners) {
                typeListeners = [];
                this._keyEvents[type] = typeListeners;
            }
            
            var newListener = {key: key, fn: fn, enabled: true},
                listeners = typeListeners;
    
            // check if key already there
            for (var i = 0, len = listeners.length; i < len; i++) {
                if (listeners[i].key === key) {
                    return;
                }            
            }
            
            if(listeners.length == 0) {
                //挂接事件只挂接一次
                this._eventBind(true, type, newListener.fn, mapObj._map3d); 
            }
    
            listeners.push(newListener);
            //typeListeners.count++;
            return this;
            
        },
        /* @method detachKeyEvent(type: String, key?: String): this
         * 为引擎对象移除一个特定的键盘监听事件。
         *
         */
        detachKeyEvent: function (type, key) {
            var listeners,
                i,
                len;
                
            if (!this._keyEvents) { return; }
    
            listeners = this._keyEvents[type];
    
            if (!listeners || !listeners.length) {
                return;
            }
    
            if (!key) {
                // Set all removed listeners to noop so they are not called if remove happens in fire
                /*
                for (i = 0, len = listeners.length; i < len; i++) {                
                    listeners[i].fn = Q3D.Util.falseFn;                
                }*/
                //卸载事件
                this._eventBind(false, type, type == "OnKeyUp" ? this._keyUpFn:this._keyDownFn, mapObj._map3d);
                // clear all listeners for a type if function isn't specified
                delete this._keyEvents[type];                 
                return;
            }
    
            if (listeners) {
    
                // find key and remove it
                for (i = 0, len = listeners.length; i < len; i++) {
                    var l = listeners[i];
                    if (l.key === key) {                  
                        // set the removed listener to noop so that's not called if remove happens in fire
                        //l.fn = Q3D.Util.falseFn;
                        if (listeners.length == 1) {
                            //卸载事件
                            this._eventBind(false, type, type == "OnKeyUp" ? this._keyUpFn:this._keyDownFn, mapObj._map3d);
                        }
                        listeners.splice(i, 1);                   
                        return;
                    }
                }
            }
            
            return this;
        },
        /* @method setKeyEvent(type: String, key: String, valid: Boolean): this
         * 设置给定键盘事件的状态是启用还是停止
         *
         */
        setKeyEvent: function (type, key, valid) {
            var listeners,
                i,
                len;
                
            if (!this._keyEvents) { return; }
    
            listeners = this._keyEvents[type];
    
            if (!listeners) {
                return;
            }
    
            // find key and remove it
            for (i = 0, len = listeners.length; i < len; i++) {
                var l = listeners[i];
                if (l.key === key) {      
                    l.enabled = valid;				                
                    return;
                }
            }
            
            return this;
        },
        /* @method getKeyEventStatus(type: String, key: String): Boolean
         * 获取给定键盘事件的状态
         *
         */
        getKeyEventStatus: function (type, key) {
            var listeners,
                i,
                len;
                
            if (!this._keyEvents) { return null; }
    
            listeners = this._keyEvents[type];
    
            if (!listeners) {
                return false;
            }
    
            // find key and remove it
            for (i = 0, len = listeners.length; i < len; i++) {
                var l = listeners[i];
                if (l.key === key) {      		                
                    return l.enabled;
                }
            }
            return false;		
        },
        /* @method attachUIEvent(type: String, widgetName: String, fn: Function): this
         * 为引擎内部UI组件对象添加一个特定的监听事件。
         *
         */
        attachUIEvent: function (type, widgetName, fn) {
            this._widgetEvents = this._widgetEvents || {};
     
            /* get/init listeners for type */
            var typeListeners = this._widgetEvents[type];        
            if (!typeListeners) {
                typeListeners = [];
                this._widgetEvents[type] = typeListeners;
            }
            
            var newListener = {key: widgetName, fn: fn, enabled: true},
                listeners = typeListeners;
    
            // check if key already there
            for (var i = 0, len = listeners.length; i < len; i++) {
                if (listeners[i].key === widgetName) {
                    return;
                }            
            }
            
            if(listeners.length == 0) {
                //挂接事件只挂接一次
                this._eventBind(true, type, newListener.fn, mapObj._map3d); 
            }
    
            listeners.push(newListener);
            //typeListeners.count++;
            return this;
            
        },
        /* @method detachUIEvent(type: String, widgetName?: String): this
         * 为引擎对象移除一个特定的UI监听事件。
         *
         */
        detachUIEvent: function (type, widgetName) {
            var listeners,
                i,
                len;
                
            if (!this._widgetEvents) { return; }
    
            listeners = this._widgetEvents[type];
    
            if (!listeners || !listeners.length) {
                return;
            }
            
            //卸载事件
            var _fn = null;
            switch(type) {
                case "onNotifyMouseButtonClick": _fn = this._notifyMouseButtonClickFn; break;
                case "onWidgetClose": _fn = this._widgetCloseFn; break;
                case "onUserNotifyEX": _fn = this._userNotifyEXFn; break;
                case "onMovieClipInstancePassFrame": _fn = this._movieClipInstancePassFrameFn; break;
                case "onActCtrlObjAniEnd": _fn = this._actCtrlObjAniEnd; break;
                case "onVideoCtrlClose": _fn = this._videoCtrlCloseFn; break;
                case "onSceneNodeAllResourceCompleted": _fn = this._sceneNodeAllResourceCompletedFn; break;	         
            }
    
            if (!widgetName) {
                // Set all removed listeners to noop so they are not called if remove happens in fire
                /*
                for (i = 0, len = listeners.length; i < len; i++) {                
                    listeners[i].fn = Q3D.Util.falseFn;                
                }
                */
                
                this._eventBind(false, type, _fn, mapObj._map3d);
                // clear all listeners for a type if function isn't specified
                delete this._widgetEvents[type];                 
                return;
            }
    
            if (listeners) {
    
                // find key and remove it
                for (i = 0, len = listeners.length; i < len; i++) {
                    var l = listeners[i];
                    if (l.key === widgetName) {                  
                        // set the removed listener to noop so that's not called if remove happens in fire
                        //l.fn = Q3D.Util.falseFn;
                        if (listeners.length == 1) {
                            //卸载事件
                            this._eventBind(false, type, _fn, mapObj._map3d);
                        }
                        listeners.splice(i, 1);                   
                        return;
                    }
                }
            }
            
            return this;
        },
        
        /* @method attachMouseEvent(type: String, key: String, fn?: Function): this
         * 为引擎对象添加一个特定的鼠标监听事件。
         *
         */
        attachMouseEvent: function (type, name, fn) {
            this._mouseEvents = this._mouseEvents || {};
            
            this._mouseEventNames = this._mouseEventNames || {};
            //设置当前注册事件对应的名称
            this._mouseEventNames[type] = name;
     
            /* get/init listeners for type */
            var typeListeners = this._mouseEvents[type];        
            if (!typeListeners) {
                typeListeners = [];
                this._mouseEvents[type] = typeListeners;
            }
                    
            var newListener = {fn: fn, name:name, enabled: true},
                listeners = typeListeners;            
            
            // check if name already there
              for (var i = 0, len = listeners.length; i < len; i++) {
                 if (listeners[i].name === name) {
                    if(!fn) {
                        newListener.fn = listeners[i].fn;
                        break;
                    }
                    return;
                }            
            } 
    
            if(listeners.length == 0) {
                //挂接事件只挂接一次
                this._eventBind(true, type, newListener.fn, mapObj._map3d); 
            }
            
            if (fn)
                listeners.push(newListener);
            return this;
        },
        
        /* @method detachMouseEvent(type: String, evtname?: String): this
         * 为引擎对象移除一个特定的鼠标监听事件。
         *
         */
        detachMouseEvent: function (type,name) {
            var listeners,
                i,
                len;
                
            if (!this._mouseEvents) { return; }
    
            listeners = this._mouseEvents[type];
    
            if (!listeners || !listeners.length) {
                return;
            }
            
            //卸载所有该类型事件
            if (!name) {
                // Set all removed listeners to noop so they are not called if remove happens in fire
                /*
                for (i = 0, len = listeners.length; i < len; i++) {                
                    listeners[i].fn = Q3D.Util.falseFn;       
                    if (listeners[i].name == this._mouseEventNames[type])
                        break;
                }
                */
                //卸载事件
                this._eventBind(false, type, listeners[0].fn, mapObj._map3d);
                // clear all listeners for a type if function isn't specified
                delete this._mouseEvents[type];                 
                return;
            }
            
            if (listeners) {
                // find name and remove it
                for (i = 0, len = listeners.length; i < len; i++) {
                    var l = listeners[i];
                    if (l.name === name) {                  
                        // set the removed listener to noop so that's not called if remove happens in fire
                        //l.fn = Q3D.Util.falseFn;
                        //判断当前name是否为有效事件名称
                        if (this._mouseEventNames[type]==name) {
                               if (listeners.length == 1) {
                                    //卸载事件
                                    this._eventBind(false, type, listeners[i].fn, mapObj._map3d);
                                    delete this._mouseEvents[type]; 
                                } else {
                                    var curPos = i;
                                    curPos = --curPos < 0 ? curPos + listeners.length : curPos;
                                    this._mouseEventNames[type] = listeners[curPos].name; //切换到第一个事件名称
                                }
                        }
                        
                        listeners.splice(i, 1);       
                        if (listeners.length == 0)
                            delete listeners; 
                        return;
                    }
                }
            }
            return this;
        },   
        
         /* @method getMouseEventStatus(type: String, evtname: String): Boolean
         * 获取给定鼠标事件的状态
         *
         */
        getMouseEventStatus: function (type, name) {
            var listeners,
                i,
                len;
                
            if (!this._mouseEvents) { return null; }
    
            listeners = this._mouseEvents[type];
    
            if (!listeners) {
                return null;
            }
    
            // find key and remove it
            for (i = 0, len = listeners.length; i < len; i++) {
                var l = listeners[i];
                if (l.name === name) {      		                
                    return l.enabled;
                }
            }
            return null;
        },
        /* @method setMouseEvent(type: String, evtname: String, valid: Boolean): this
         * 设置给定鼠标事件的状态是启用还是停止
         *
         */
        setMouseEvent: function (type, name, valid) {
            var listeners,
                i,
                len;
                
            if (!this._mouseEvents) { return; }
    
            listeners = this._mouseEvents[type];
    
            if (!listeners) {
                return;
            }
    
            // find key and remove it
            for (i = 0, len = listeners.length; i < len; i++) {
                var l = listeners[i];
                if (l.name === name) {      
                    l.enabled = valid;				                
                    return;
                }
            }
            return this;
        },
    });
    
    
    
    ﻿/*
     * @class Map
     * @aka Q3D.Map
     * @inherits Evented
     *
     * 引擎封装对象 — 用于在页面上创建一个三维引擎窗口并进行操作。
     *
     * @example
     *
     * ```js
     * // 以 "map" 这个 div 作为容器初始化一个引擎封装对象，以JSON对象方式传递初始化参数。
     * var map = Q3D.map('map', {
     * 	SERVER_PATH: "http://" + location.host + "/mapdata3d/xihongqiao",
     * 	CONFIG_NAME: "Example"
     * });
     * ```
     *
     */
    
    window.mapObj = null;
    
    Q3D.Map = Q3D.Evented.extend({
    
            options: {
    
                //引擎对象DOM节点ID
                Id: "map",
                // @option SERVER_PATH: String = null
                // 服务器数据 url 地址
                SERVER_PATH: null,
                // @option DATA_PATH: String = null
                // 本地数据目录，不设置自动保存至 IE 临时目录
                DATA_PATH: null,
                // 表示数据采用在线还是离线离线方式，"REAL"表示在线，"SIMULATION"表示离线
                DOWNLOAD_TYPE: "REAL",
                // @option CONFIG_NAME: String = null
                // 场景 root 文件名称
                CONFIG_NAME: null,
                // @option LICENSE_SVR: String = null
                // 共享授权服务器 url 地址
                LICENSE_SVR: null,
                // @option PRELOAD_GRP: String = null
                // 预加载资源组文件, 如 ResGroup/holder.rgp
                PRELOAD_GRP: null,
                // @option WINDOWLESS: Boolen = false
                // 是否无窗口控件类型
                WINDOWLESS: false,            
                // @option LOADING: Boolen = true
                // 是否显示加载进度条
                LOADING: true,
                // @option OPACITY: Number = 1.0
                // 加载进度条画面透明度，无窗口模式有效
                OPACITY: 1.0,
                // @option MarginRightBottom: Array = [0,0]
                // 设置布局参数：引擎距离页面右边框和底边框的像素距离
                MarginRightBottom: [0,0],
                // 资源组文件名，2.3+版本增加启动资源组概念，可以不用单独设置
                // ResourceGroupName: null,
                // @option OnLoadBefore: Function = null
                // 自定义初始化开始事件，用于开启必要的监听
                OnLoadBefore: null,
                // @option OnLoadEnd: Function = null
                // 自定义初始化完成事件
                OnLoadEnd: null,
                // @option OnUIInitEnd: Function = null
                // 自定义UI初始化完成事件，可用于加载菜单或工具条等内部UI对象
                OnUIInitEnd: null,
                //引擎默认鼠标事件
                DefaultMouseEvent: {},
                //初始化失败回调
                OnInitialFail: null,
                //最低版本要求
                LowestEngineVersionNeed: {
                    version: "2, 8, 0, 0",
                    callback: null
                }
            },
    
            initialize: function (id, options) { // (HTMLElement or String, Object)
                this.options = Q3D.setOptions(this, options);
    
                //判断场景root文件
                if (this.options.CONFIG_NAME == null) {
                    throw new Error('没有设置配置文件');
                }
    
                //判断场景数据下载地址
                if (this.options.SERVER_PATH == null) {
                    throw new Error('没有设置场景文件下载地址');
                }
    
                //初始化控件DOM
                this._initContainer(id);
    
                //得到引擎对象的Jquery对象，用于显示加载进度条，这里需要Jquery和JqueryUI
                if (this.options.LOADING) {
                    this._mapUI = new Q3D.QMapV2Custom($("#" + this._map3d.id));
                    this._mapUI.ProcessLoading(this.options.MarginRightBottom);
                }            
    
                setTimeout((function () {
                    try{
                        //设置初始化参数
                        this._map3d.logo = 0;
                        this._map3d.setInitPara("SERVER_PATH", this.options.SERVER_PATH);
                        this._map3d.setInitPara("CONFIG_NAME", this.options.CONFIG_NAME);
                        this._map3d.setInitPara("DOWNLOAD_TYPE", this.options.DOWNLOAD_TYPE);
                        this._map3d.setInitPara("THREAD_COUNT", 4);
                        if (this.options.LICENSE_SVR != null) {
                            this._map3d.setLicenseSvr(this.options.LICENSE_SVR);
                        }
                                            
                        if (this.options.LOADING) {
                            //设置休眠状态的等待时间：取消休眠
                            this._map3d.setHibernateTime(0);
                            
                            //设置侦听地区创建事件, 设置后可接收onCreateArea事件
                            this._map3d.setCreateAreaListener();
    
                            //开启UI侦听，设置后可接受onQUISystemInit事件
                            this._map3d.setUISystemEventListener();
    
                            //开启资源加载侦听
                            this._map3d.setEngineListener();
                        }
                        
                        this.on("onCreateArea", function (area) {
                            area.loadAllNodes();
                        });
    
                        //引擎初始化
                        var initStatus = this._map3d.init();                 
                        //判断初始化状态
                        if (initStatus != 1 && !Q3D.Browser.gecko) {
                            this.showNotice("提示", "引擎初始化失败，请检查参数设置后关闭已经开启的引擎页面后重试");                        
                            return;
                        }
    
                        //判断最低版本要求
                        if (parseInt(this.options.LowestEngineVersionNeed.version.replace(new RegExp(/,| |，/g), "")) > parseInt(this._map3d.getVersion().replace(new RegExp(/, /g), ""))) {
                            if (Q3D.Util.isFunction(this.options.LowestEngineVersionNeed.callback)) {
                                this.options.LowestEngineVersionNeed.callback();
                            }
                            this.showNotice("提示", "您的引擎版本过低，请下载安装最新版本");
                            mapObj._mapUI.InitHelpDiaLog({ MessageHTML: "引擎初始化失败，请关闭已经开启的引擎页面后重试。", NeedSetup:true });
                            mapObj._mapUI.ShowHelpDialog();
                            return;
                        }
    
                        //初始化调用前事件，用于开启必要的监听和事件
                        if (Q3D.Util.isFunction(this.options.OnLoadBefore)) {
                            this.options.OnLoadBefore();
                        }
                        
                        if (Q3D.Util.isFunction(this.options.OnUIInitEnd)) {
                            this.on("onQUISystemInit", function () { 
                                mapObj.options.OnUIInitEnd();
                                mapObj.off("onQUISystemInit");
                            });     
                        }                  
    
                        //引擎相关操作键值设置
                        var im = this._map3d.getInputManager();
                        
                        //键盘控制
                        im.createActionEx(Q3D.Enums.actionType.TRANS_LEFTX); // 左移
                        im.createActionEx(Q3D.Enums.actionType.TRANS_RIGHT); // 右移
                        im.createActionEx(Q3D.Enums.actionType.TRANS_FORTH); // 前进
                        im.createActionEx(Q3D.Enums.actionType.TRANS_BACKX); // 后退
                        im.createActionEx(Q3D.Enums.actionType.TRANS_UPXXX); // 上升
                        im.createActionEx(Q3D.Enums.actionType.TRANS_DOWNX); // 下降
                        
                        //平移
                        im.createActionEx(Q3D.Enums.actionType.TRANS_UDLRX); //平移摄像机
                        im.createActionEx(Q3D.Enums.actionType.TRANS_SCENE); //平移场景( 拖拽 )
                        
                         //缩放 ( D:Dynamic; S:Static )
                        im.createActionEx(Q3D.Enums.actionType.SCALED_CENTER); // 缩放：方向按屏幕中心方向；速度按拾取线段长度比例，如果未拾取到任何东西，退化为STATIC参数处理
                        im.createActionEx(Q3D.Enums.actionType.SCALES_CENTER); // 缩放：方向按屏幕中心方向；速度按固定设置参数
                        im.createActionEx(Q3D.Enums.actionType.SCALED_SCREEN); // 缩放：方向按( Eye，ScreenPnt )射线方向；速度按拾取线段长度比例，如果未拾取到任何东西，退化为STATIC参数处理
                        im.createActionEx(Q3D.Enums.actionType.SCALES_SCREEN);// 缩放：方向按( Eye，ScreenPnt )射线方向；速度按固定设置参数
                        im.createActionEx(Q3D.Enums.actionType.CAMERA_CLOSETO); // 贴近       
                        
                        //旋转 ( S:Separately; T:Together )
                        im.createActionEx(Q3D.Enums.actionType.ROTATES_CAMERA); // 旋转摄像机，yaw,pitch分离，每次操作只取其一
                        im.createActionEx(Q3D.Enums.actionType.ROTATET_CAMERA); // 旋转摄像机，yaw,pitch融合
                        im.createActionEx(Q3D.Enums.actionType.ROTATES_SCREEN); // 旋转场景，以拾取点为旋转基点,Separately
                        im.createActionEx(Q3D.Enums.actionType.ROTATET_SCREEN); //旋转场景，以拾取点为旋转基点,Together
                        im.createActionEx(Q3D.Enums.actionType.ROTATES_CENTER);// 旋转场景，以屏幕中心点在basePlane上的拾取点为基点,Separately
                        im.createActionEx(Q3D.Enums.actionType.ROTATET_CENTER);// 旋转场景，以屏幕中心点在basePlane上的拾取点为基点,Together
                        im.createActionEX(Q3D.Enums.actionType.ROTATES_FIXPNT);// 绕固定点旋转，yaw,pitch分离
                        im.createActionEX(Q3D.Enums.actionType.ROTATET_FIXPNT); //绕固定点旋转，yaw,pitch融合
                        
                        //漫游
                        im.createActionEx(Q3D.Enums.actionType.RAMBLE_KEEPORI); //漫游：方位不变( 第三人称 )
                        
                        //模型编辑
                        im.createActionEx(Q3D.Enums.actionType.OBJECTSELECT_MOVAUX);
                        im.createActionEx(Q3D.Enums.actionType.OBJECTSELECT_ROTAUX);
                        im.createActionEx(Q3D.Enums.actionType.OBJECTSELECT_SCAAUX);                    
                        
                         //移动设备( YPS:YawPitchScale, S:Separately, T:Together )                    
                        im.createActionEx(Q3D.Enums.actionType.YPSS_SCREEN); // 分离操作，以屏幕点为旋转基点和缩放方向
                        im.createActionEx(Q3D.Enums.actionType.YPST_SCREEN);// 融合操作，以屏幕点为旋转基点和缩放方向
                        im.createActionEx(Q3D.Enums.actionType.YPSS_CENTER);// 分离操作，以屏幕中心为旋转基点和缩放方向
                        im.createActionEx(Q3D.Enums.actionType.YPST_CENTER);// 融合操作，以屏幕中心为旋转基点和缩放方向
                        
                        //第三人称
                        im.createActionEx(Q3D.Enums.actionType.THIRD_ROTATE); //
                        im.createActionEx(Q3D.Enums.actionType.THIRD_WHEEL); //
                        im.createActionEx(Q3D.Enums.actionType.THIRD_MOVELEFT); //
                        im.createActionEx(Q3D.Enums.actionType.THIRD_MOVERIGHT); //
                        im.createActionEx(Q3D.Enums.actionType.THIRD_MOVEFORTH); //
                        im.createActionEx(Q3D.Enums.actionType.THIRD_MOVEBACK); //
                        im.createActionEx(Q3D.Enums.actionType.THIRD_MOVEUP); //
                        im.createActionEx(Q3D.Enums.actionType.THIRD_MOVEDOWN); //
                        im.createActionEx(Q3D.Enums.actionType.THIRD_MOVETO); //点击移动
                        im.createActionEx(Q3D.Enums.actionType.THIRD_CAMERAROTATE); //转动镜头
                        im.createActionEx(Q3D.Enums.actionType.THIRD_TURNLEFT);
                        im.createActionEx(Q3D.Enums.actionType.THIRD_TURNRIGHT);
                        im.createActionEx(Q3D.Enums.actionType.THIRD_LOOKUP);
                        im.createActionEx(Q3D.Enums.actionType.THIRD_LOOKDOWN);
    
                        //取消默认的键盘绑定操作
                        /*
                        im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.A.ctrlId, Q3D.Enums.actionType.TRANS_LEFTX);
                        im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.D.ctrlId, Q3D.Enums.actionType.TRANS_RIGHT);
                        im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.W.ctrlId, Q3D.Enums.actionType.TRANS_FORTH);
                        im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.S.ctrlId, Q3D.Enums.actionType.TRANS_BACKX);
                        im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.Q.ctrlId, Q3D.Enums.actionType.TRANS_DOWNX);
                        im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.E.ctrlId, Q3D.Enums.actionType.TRANS_UPXXX);
                        im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.SPACE.ctrlId, Q3D.Enums.actionType.CAMERA_CLOSETO);
                        */
                        im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.LEFT.ctrlId, Q3D.Enums.actionType.TRANS_LEFTX);
                        im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.RIGHT.ctrlId, Q3D.Enums.actionType.TRANS_RIGHT);
                        im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.UP.ctrlId, Q3D.Enums.actionType.TRANS_FORTH);
                        im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.DOWN.ctrlId, Q3D.Enums.actionType.TRANS_BACKX);                    
    
                        //鼠标绑定
                        
                        im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.LBUTTON, Q3D.Enums.actionType.TRANS_SCENE);
                        im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.MBUTTON, Q3D.Enums.actionType.RAMBLE_KEEPORI);
                        im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.RBUTTON, Q3D.Enums.actionType.ROTATES_SCREEN);
                        im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.WHEEL, Q3D.Enums.actionType.SCALED_SCREEN);
                       
                       /* 用于场景比较复杂的情况
                        im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.LBUTTON, Q3D.Enums.actionType.TRANS_UDLRX);
                        im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.MBUTTON, Q3D.Enums.actionType.RAMBLE_KEEPORI);
                        im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.RBUTTON, Q3D.Enums.actionType.ROTATES_CENTER);
                        im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.WHEEL, Q3D.Enums.actionType.SCALES_CENTER);
                        */
    
                        //平板绑定
                        im.bindControlAction(Q3D.Enums.device.MULTITOUCH, Q3D.Enums.multiTouch.TRANS, Q3D.Enums.actionType.TRANS_SCENE);
                        //im.bindControlAction(Q3D.Enums.device.MULTITOUCH, Q3D.Enums.multiTouch.CLOSETO, Q3D.Enums.actionType.CAMERA_CLOSETO);
                        im.bindControlAction(Q3D.Enums.device.MULTITOUCH, Q3D.Enums.multiTouch.RAMBLE, Q3D.Enums.actionType.RAMBLE_KEEPORI);
                        im.bindControlAction(Q3D.Enums.device.MULTITOUCH, Q3D.Enums.multiTouch.YPS, Q3D.Enums.actionType.YPSS_SCREEN);
    
                        /*采用新的监听策略*/
                        if (this.options.LOADING) {
                            // 注意 root 文件中要设置启动资源组文件才会触发该事件，该事件在 loadSln 前注册有效
                            this.on("onPreGroupPrepare", function (group) {
                                //console.log(new Date() + ":onPreGroupPrepare...");
                                mapObj._mapUI.TriggerLoading(null, "系统配置文件解析完毕...", 2, 100);
                                mapObj._map3d.setResourceGroupListener(group);
                            });
                            this.on("onAllSceneFilesFirstLoadCompleted", function (wId) {
                                //console.log(new Date() + ":onAllSceneFilesFirstLoadCompleted...");                        
                                mapObj._mapUI.TriggerLoading(null, "场景文件解析完毕...", 90, 100);	                            
                            });
                            this.on("onAreasFirstLoadProcess", function (wId, currCnt, allCnt) {
                                //console.log(new Date() + ":onAreasFirstLoadProcess..." + currCnt + "/" + allCnt);         
                                mapObj._mapUI.TriggerLoading(null, "正在加载场景节点...", 90 + currCnt / allCnt * 5, 100);                                             
                            });
                            this.on("onAllAreasFirstLoadCompleted", function (wId, isTimeout) {
                                //console.log(new Date() + ":onAllAreasFirstLoadCompleted...");                        
                                if (isTimeout)
                                    mapObj._mapUI.TriggerLoading(null, "加载时间过长，将直接进入界面...", 100, 100);
                                else
                                    mapObj._mapUI.TriggerLoading(null, "加载完成，将直接进入界面...", 100, 100);
                                                       
                                mapObj.off("onResourceLoaded");
                                mapObj.off("onResourceGroupFailed");
                                mapObj.off("onResourceGroupPackResLoaded");
                                mapObj.off("onResourceGroupPackResFailed");
                                mapObj.off("onResourceGroupAllCompleted");
                                mapObj.off("onAllSceneFilesFirstLoadCompleted");
                                mapObj.off("onAreasFirstLoadProcess");
                                mapObj.off("onAllAreasFirstLoadCompleted");
                                mapObj.off("onPreGroupPrepare");
                                
                                //开启休眠
                                mapObj._map3d.setHibernateTime(300);
                                //开启资源组预加载
                                if(mapObj.options.PRELOAD_GRP) {
                                    var _repGroup = mapObj._map3d.getResourceManager().registerGroup(mapObj.options.PRELOAD_GRP);
                                    _repGroup.load(0);
                                    _repGroup.loadGroup();
                                }
                                
                                if (Q3D.Util.isFunction(mapObj.options.OnLoadEnd)) {
                                    mapObj.options.OnLoadEnd();
                                } 
                            });
                            
                            // 注册同资源相关的事件，用于加载进度条                    
                            this.on("onResourceLoaded", function (group, res, currentCompleted, totalNumber) {
                                mapObj._mapUI.TriggerLoading(group, res.getName(), 5 + currentCompleted / totalNumber * 80, 100);
                                //console.log(new Date() + ":onResourceLoaded..." + currentCompleted + "/" + totalNumber);
                            });
                            this.on("onResourceGroupFailed", function (group, res) {
                                mapObj._mapUI.TriggerLoadingFailed(group, res.getName());
                                //console.log(new Date() + ":onResourceGroupFailed...");
                            });
                            this.on("onResourceGroupPackResLoaded", function (group, name, currentCompleted, totalNumber) {
                                mapObj._mapUI.TriggerLoading(group, name, 5 + currentCompleted / totalNumber * 80, 100);
                                //console.log(new Date() + ":onResourceGroupPackResLoaded..." + currentCompleted + "/" + totalNumber);
                            });
                            this.on("onResourceGroupPackResFailed", function (group, name, currentCompleted, totalNumber) {
                                mapObj._mapUI.TriggerLoadingFailed(group, name);
                                //console.log(new Date() + ":onResourceGroupPackResFailed...");
                            });					
                            this.on("onResourceGroupAllCompleted", function (group, currLoadNum, currentFailed, totalNumber) {
                                //console.log(new Date() + ":onResourceGroupAllCompleted..." + currLoadNum + "/" + totalNumber);
                                mapObj._mapUI.TriggerLoading(group, "所有资源文件解析完毕...", 85, 100);
                            });
    
                            mapObj._mapUI.TriggerLoading(null, "系统启动...", 1, 100);
                        }
                   
                        var IsLoadSuccess = this._map3d.loadSln();
                        if (IsLoadSuccess == 1) {
                            //console.log(new Date() + ":loadSln...");
                            
                            //显示加载进度条
                            if (this.options.LOADING) {
                                //mapObj._mapUI.ProcessLoading();
                                mapObj._mapUI.TriggerLoading(null, "系统配置文件解析完毕...", 5, 100);
                                 if (this.options.WINDOWLESS) { //修改position属性
                                     document.getElementById("progressbarWrapper").style.position = "absolute";
                                     document.getElementById("progressbarWrapper").style.opacity = this.options.OPACITY;
                                 }
                            }
    
                            //添加常用键事件
                            //绑定 Ctrl + Y 键开启FPS
                            this.attachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.Y, (function (wParam, lParam) {
                                    if (lParam == 1) { //同时按下Ctrl
                                        var wm = this._map3d.getWorldManager();
                                        if (wm.isFpsEnabled() == 1) {
                                            wm.disableFps();                                        
                                        }
                                        else {
                                            wm.enableFps();
                                                            
                                        }
                                    }
                                }).bind(this));
    
                            //绑定Ctrl + F2键开启版本信息：第二个参数 1: ctrl , 2: alt,  4: shift
                            this.attachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.F2, (function (wParam, lParam) {
                                    if (lParam == 1) //同时按下Ctrl
                                        this.showNotice("提示", "当前控件版本号：V" + this._map3d.getVersion());
                                }).bind(this));
    
                            //绑定Ctrl + F9开启DeBug模式
                            this.attachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.F9, (function (wParam, lParam) {
                                    if (lParam == 1) { //同时按下Ctrl
                                        this._enableDebug = this._enableDebug ? false : true;
                                        if (console) {
                                            console.log("调试模式" + (this._enableDebug ? "开启" : "关闭"))
                                        }
                                        if (this._enableDebug) {
                                            //打开鼠标点击测试功能
                                            this.attachMouseEvent("OnLButtonDown", "_justfortest_", function(options){});   
                                        } else {
                                            this.detachMouseEvent("OnLButtonDown", "_justfortest_");   
                                        }
                                            
                                    }
                                }).bind(this));
    
                            //绑定F8显示当前主摄像机位置角度信息
                            this.attachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.F8, (function (wParam, lParam) {
                                    if (this._enableDebug && console) {
                                        console.log("===================当前主摄像机信息开始===================");
                                        var operateTime = new Date();
                                        var wm = this._map3d.getWorldManager();
                                        var cam = wm.getMainCamera(0);
                                        var campos = Q3D.vector3d(cam.getAbsPos());
                                        var  gv3d = Q3D.globalVec3d(campos.toGlobalVec3d());
                                        var camori = cam.getOrientation(2);
                                        console.log("操作时间 : " + operateTime.getHours() + ":" + operateTime.getMinutes() + ":" + operateTime.getSeconds());
                                        console.log("主摄像机当前位置(平面坐标) : " + campos.x + "," + campos.y + "," + campos.z);
                                        console.log("主摄像机当前位置(经纬度坐标) : " + gv3d.longitude.toFixed(6) + "," + gv3d.latitude.toFixed(6) + "," + gv3d.height.toFixed(6));
                                        console.log("主摄像机当前角度 : " + camori.x + "," + camori.y + "," + camori.z);
                                        console.log("主摄像机当前俯仰偏航角 : " + cam.fetchRotPitch() + "," + cam.fetchRotYaw() );
                                        console.log("===================当前主摄像机信息结束===================");
                                    }
                                }).bind(this));
    
                            // 老的监听策略时使用
                            /*
                            if (Q3D.Util.isFunction(this.options.OnLoadEnd)) {
                            this.options.OnLoadEnd();
                            }
                             */
                             /*
                              //绑定关闭时提前释放，降低崩溃率                          
                            window.onbeforeunload = function () {
                                
                                if (mapObj != null) {
                                    mapObj.getOcx().enable(0);
                                    mapObj.getOcx().shutdown();
                                }
                                //return "a";
                            }
                            */
                            // 监听窗口最小化处理
                            // 各种浏览器兼容
                            var hidden,
                            state,
                            visibilityChange;
                            if (typeof document.hidden !== "undefined") {
                                hidden = "hidden";
                                visibilityChange = "visibilitychange";
                                state = "visibilityState";
                            } else if (typeof document.mozHidden !== "undefined") {
                                hidden = "mozHidden";
                                visibilityChange = "mozvisibilitychange";
                                state = "mozVisibilityState";
                            } else if (typeof document.msHidden !== "undefined") {
                                hidden = "msHidden";
                                visibilityChange = "msvisibilitychange";
                                state = "msVisibilityState";
                            } else if (typeof document.webkitHidden !== "undefined") {
                                hidden = "webkitHidden";
                                visibilityChange = "webkitvisibilitychange";
                                state = "webkitVisibilityState";
                            }
    
                            // 添加监听器，支持IE10/IE11/FF/Chrome
                            document.addEventListener(visibilityChange, function () {
                                //document.title = document[state];
                                if ("hidden" === document[state])
                                    mapObj._map3d.enable(0);
                                else
                                    mapObj._map3d.enable(1);
                            }, false);
    
                        } else {
                            this.showNotice("提示", "引擎加载失败，请检查参数设置后关闭已经开启的引擎页面后重试");
                            return;
                        }
                    } catch (e) {
                        mapObj._mapUI.InitHelpDiaLog({ MessageHTML: "引擎初始化失败，请关闭已经开启的引擎页面后重试。", NeedSetup:true });
                        mapObj._mapUI.ShowHelpDialog();
                    }
                    finally {
                        return;
                    }
                    }).bind(this), 500);
                    
            },
    
            _initContainer: function (id) {
                var container = this._container = Q3D.DomUtil.get(id);
    
                if (!container) {
                    throw new Error('Map container not found.');
                } else if (container._qmap3d_id) {
                    throw new Error('Map container is already initialized.');
                }
    
                this._containerId = Q3D.Util.stamp(container);
                //获取div容器当前的宽高
                var mapDomId = id + "_qmap3d";
    
                var axhtmlstr = null;
                if (Q3D.Browser.ie) {
                    axhtmlstr = this.AC_AX_RunContent("id", mapDomId,
                            "classid", "CLSID:DB7C6663-F12F-4BEC-960D-194E6EB3BDAA",
                            "width", "100%", //container.clientWidth.toString(),
                            "height", "100%",
                            "WindowLess", this.options.WINDOWLESS ? "1" : "0" );
                } else {
                    axhtmlstr = this.AC_AX_RunContent("id", mapDomId,
                            "clsid", "{DB7C6663-F12F-4BEC-960D-194E6EB3BDAA}",
                            "type", "application/QMap-activex",
                            "width", "100%", //container.clientWidth.toString(),
                            "height", "100%", //container.clientHeight.toString(),
                            "WindowLess", this.options.WINDOWLESS ? "1" : "0" ,
                            'event_OnLButtonDown', 'OnLButtonDown',
                            'event_OnLButtonUp', 'OnLButtonUp',
                            'event_OnRButtonDown', 'OnRButtonDown',
                            'event_OnRButtonUp', 'OnRButtonUp',
                            'event_OnLButtonDblClk', 'OnLButtonDblClk',
                            'event_OnMouseMove', 'OnMouseMove',
                            'event_OnMouseWheel', 'OnMouseWheel',
                            'event_OnRButtonDblClk', 'OnRButtonDblClk',
                            'event_OnMButtonDown', 'OnMButtonDown',
                            'event_OnMButtonUp', 'OnMButtonUp',
                            'event_OnKeyUp', 'OnKeyUp',
                            'event_OnKeyDown', 'OnKeyDown',
                            'event_onCreateArea', 'onCreateArea',
                            'event_onCreateSceneNode', 'onCreateSceneNode',
                            'event_onBuildSceneNode', 'onBuildSceneNode',
                            'event_onDestroySceneNode', 'onDestroySceneNode',
                            'event_onResourceAllCompleted', 'onResourceAllCompleted',
                            'event_onResourceAlreadyAllCompleted', 'onResourceAlreadyAllCompleted',
                            'event_onAnimationEnd', 'onAnimationEnd',
                            'event_onCameraCircleAniEnd', 'onCameraCircleAniEnd',
                            'event_onAnimationKeyFrame', 'onAnimationKeyFrame',
                            'event_onPreGroupPrepare', 'onPreGroupPrepare',
                            'event_onGroupFileComplete', 'onGroupFileComplete',
                            'event_onResourceLoaded', 'onResourceLoaded',
                            'event_onResourceGroupFailed', 'onResourceGroupFailed',
                            'event_onResourceGroupPackResLoaded', 'onResourceGroupPackResLoaded',
                            'event_onResourceGroupPackResFailed', 'onResourceGroupPackResFailed',
                            'event_onResourceGroupAllCompleted', 'onResourceGroupAllCompleted',
                            'event_onAreasFirstLoadProcess', 'onAreasFirstLoadProcess',
                            'event_onAllAreasFirstLoadCompleted', 'onAllAreasFirstLoadCompleted',
                            'event_onTimeTrigger', 'onTimeTrigger',
                            'event_onCameraFlyToEnd', 'onCameraFlyToEnd',
                            'event_onCameraUpdate', 'onCameraUpdate',
                            'event_onSceneNodeAllResourceCompleted', 'onSceneNodeAllResourceCompleted',
                            'event_onSceneNodeDestroyed', 'onSceneNodeDestroyed',
                            'event_OnDestroy', 'OnDestroy',
                            'event_onWidgetClose', 'onWidgetClose',
                            'event_onVideoCtrlClose', 'onVideoCtrlClose',
                            'event_onUserNotify', 'onUserNotify',
                            'event_onUserNotifyEX', 'onUserNotifyEX',
                            'event_onQUISystemInit', 'onQUISystemInit',
                            'event_onNotifyMouseButtonClick', 'onNotifyMouseButtonClick',
                            'event_onMovieClipInstancePassFrame', 'onMovieClipInstancePassFrame',
                            'event_onMovieClipInstanceRewind', 'onMovieClipInstanceRewind',
                            'event_onMovieClipInstanceStop', 'onMovieClipInstanceStop',
                            'event_onActCtrlObjAniEnd', 'onActCtrlObjAniEnd');
                }
    
                if (this._container && axhtmlstr) {
                    this._container.innerHTML = axhtmlstr;
                    this._map3d = Q3D.DomUtil.get(id + "_qmap3d");
                }
            },
    
            //ocx控件生成通用方法
            //开始
    
            AC_AddExtension: function (src, ext) {
                if (src.indexOf('?') != -1)
                    return src.replace(/\?/, ext + '?');
                else
                    return src + ext;
            },
    
            AC_Generateobj: function (objAttrs, params, embedAttrs) {
                var str = '<object ';
                for (var i in objAttrs)
                    str += i + '="' + objAttrs[i] + '" ';
                str += '>';
                for (var i in params)
                    str += '<param name="' + i + '" value="' + params[i] + '" /> ';
                str += '<embed ';
                for (var i in embedAttrs)
                    str += i + '="' + embedAttrs[i] + '" ';
                str += ' ></embed></object>';
                return str;
                //document.write(str);
            },
    
            AC_GetArgs: function (args, ext, srcParamName, classid, mimeType) {
                var ret = new Object();
                ret.embedAttrs = new Object();
                ret.params = new Object();
                ret.objAttrs = new Object();
                for (var i = 0; i < args.length; i = i + 2) {
                    var currArg = args[i].toLowerCase();
    
                    switch (currArg) {
                    case "classid":
                        break;
                    case "pluginspage":
                        ret.embedAttrs[args[i]] = args[i + 1];
                        break;
                    case "src":
                    case "movie":
                        args[i + 1] = AC_AddExtension(args[i + 1], ext);
                        ret.embedAttrs["src"] = args[i + 1];
                        ret.params[srcParamName] = args[i + 1];
                        break;
                    case "onafterupdate":
                    case "onbeforeupdate":
                    case "onblur":
                    case "oncellchange":
                    case "onclick":
                    case "ondblClick":
                    case "ondrag":
                    case "ondragend":
                    case "ondragenter":
                    case "ondragleave":
                    case "ondragover":
                    case "ondrop":
                    case "onfinish":
                    case "onfocus":
                    case "onhelp":
                    case "onmousedown":
                    case "onmouseup":
                    case "onmouseover":
                    case "onmousemove":
                    case "onmouseout":
                    case "onkeypress":
                    case "onkeydown":
                    case "onkeyup":
                    case "onload":
                    case "onlosecapture":
                    case "onpropertychange":
                    case "onreadystatechange":
                    case "onrowsdelete":
                    case "onrowenter":
                    case "onrowexit":
                    case "onrowsinserted":
                    case "onstart":
                    case "onscroll":
                    case "onbeforeeditfocus":
                    case "onactivate":
                    case "onbeforedeactivate":
                    case "ondeactivate":
                    case "type":
                    case "codebase":
                        ret.objAttrs[args[i]] = args[i + 1];
                        break;
                    case "width":
                    case "height":
                    case "align":
                    case "vspace":
                    case "hspace":
                    case "class":
                    case "title":
                    case "accesskey":
                    case "name":
                    case "id":
                    case "tabindex":
                        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i + 1];
                        break;
                    default:
                        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i + 1];
                    }
                }
                ret.objAttrs["classid"] = classid;
                if (mimeType)
                    ret.embedAttrs["type"] = mimeType;
                return ret;
            },
    
            AC_AX_RunContent: function () {
                var ret = this.AC_AX_GetArgs(arguments);
                return this.AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
            },
    
            AC_AX_GetArgs: function (args) {
                var ret = new Object();
                ret.embedAttrs = new Object();
                ret.params = new Object();
                ret.objAttrs = new Object();
                for (var i = 0; i < args.length; i = i + 2) {
                    var currArg = args[i].toLowerCase();
    
                    switch (currArg) {
                    case "pluginspage":
                    case "src":
                        ret.embedAttrs[args[i]] = args[i + 1];
                        break;
                    case "data":
                    case "codebase":
                    case "classid":
                    case "id":
                    case "onafterupdate":
                    case "onbeforeupdate":
                    case "onblur":
                    case "oncellchange":
                    case "onclick":
                    case "ondblClick":
                    case "ondrag":
                    case "ondragend":
                    case "ondragenter":
                    case "ondragleave":
                    case "ondragover":
                    case "ondrop":
                    case "onfinish":
                    case "onfocus":
                    case "onhelp":
                    case "onmousedown":
                    case "onmouseup":
                    case "onmouseover":
                    case "onmousemove":
                    case "onmouseout":
                    case "onkeypress":
                    case "onkeydown":
                    case "onkeyup":
                    case "onload":
                    case "onlosecapture":
                    case "onpropertychange":
                    case "onreadystatechange":
                    case "onrowsdelete":
                    case "onrowenter":
                    case "onrowexit":
                    case "onrowsinserted":
                    case "onstart":
                    case "onscroll":
                    case "onbeforeeditfocus":
                    case "onactivate":
                    case "onbeforedeactivate":
                    case "ondeactivate":
                    case "type":
                    case "clsid":
                        ret.objAttrs[args[i]] = args[i + 1];
                        break;
                    case "width":
                    case "height":
                    case "align":
                    case "vspace":
                    case "hspace":
                    case "class":
                    case "title":
                    case "accesskey":
                    case "name":
                    case "tabindex":
                        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i + 1];
                        break;
                    default:
                        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i + 1];
                    }
                }
                return ret;
            },
    
            //ocx控件生成通用方法
    
            // @method getOcx(): Object
            // 返回原生3D引擎对象
            getOcx: function () {
                return mapObj._map3d ? mapObj._map3d : null;
            },
    
            // @method showNotice(title: String, msg: String): this
            // 显示自定义提示信息
            showNotice: function (title, msg) {
                var Notification = window.Notification || window.mozNotification || window.webkitNotification;
                if (Notification) {
                    Notification.requestPermission(function (status) {
                        //status默认值'default'等同于拒绝 'denied' 意味着用户不想要通知 'granted' 意味着用户同意启用通知
                        if ("granted" != status) {
                            return;
                        } else {
                            var tag = "_qmap3d_" + Math.random();
                            var notify = new Notification(
                                    title, {
                                    dir: 'auto',
                                    lang: 'zh-CN',
                                    tag: tag, //实例化的notification的id
                                    //icon:'http://www.yinshuajun.com/static/img/favicon.ico',//通知的缩略图,//icon 支持ico、png、jpg、jpeg格式
                                    body: msg //通知的具体内容
                                });
                            notify.onclick = function () {
                                //如果通知消息被点击,通知窗口将被激活
                                window.focus();
                            },
                            notify.onerror = function () {
                                console.log("HTML5桌面消息出错！！！");
                            };
                            notify.onshow = function () {
                                setTimeout(function () {
                                    notify.close();
                                }, 2000)
                            };
                            notify.onclose = function () {
                                console.log("HTML5桌面消息关闭！！！");
                            };
                        }
                    });
                } else {
                    console.log("您的浏览器不支持桌面消息");
                    alert(msg);
                }
                return this;
            },
    
            // @method toggleFPS(): this
            // 切换场景相关参数是否显示：帧率、三角面数、占用内存等
            toggleFPS: function () {
                var _wm = mapObj._map3d.getWorldManager();
                if (_wm.isFpsEnabled() == 1) {
                    _wm.disableFps();
                } else {
                    _wm.enableFps();
                }
                return this;
            },
            
            // @method loadArea(areaName: String): this
            // 加载指定区域，该区域在 root 文件中对应的 manualLoad = true
            loadArea: function (areaName) {
                mapObj._map3d.getWorldManager().loadIndieArea(0, areaName);
                return this;
            },
            
            // @method unloadArea(areaName: String): this
            // 卸载指定区域，该区域在 root 文件中对应的 manualLoad = true
            unloadArea: function (areaName) {
                mapObj._map3d.getWorldManager().unloadIndieArea(0, areaName);
                return this;
            },
            
            // @method getArea(areaName: String): QAreaSceneManager
            // 获得区域对象，返回 QAreaSceneManager 原生对象
            getArea: function (areaName) {
                return mapObj._map3d.getWorldManager().getArea(areaName);
            },
    
            // @method getSceneNode(areaName: String, nodeName?: String): QSceneNode
            // 获得场景节点对象，如果只输入一个参数，该参数必须可表示节点的完整信息。返回 QSceneNode 原生对象
            getSceneNode: function (areaName, nodeName) {
                var nodeFullName = (nodeName === undefined) ? areaName : areaName + '/' + nodeName;
                return mapObj._map3d.getWorldManager().getSceneNode(nodeFullName);
            },
            
            // @method getSceneNodeFullName(node: QSceneNode): String
            // 获得场景节点对象的完整名称
            getSceneNodeFullName: function (node) {
                var areaName = node.getArea().getName();
                var nodeName = node.getName();
                return areaName + '/' + nodeName;
            },
            
            // @method getAllSceneNodeNames(searchStr: String): Array
            // 根据别名搜索场景节点（大小写敏感），返回匹配的节点名称数组
            getAllSceneNodeNames: function (searchStr) {
                var nodeNames = [];
                var poilist = mapObj._map3d.getWorldManager().findSceneNodeList(searchStr);
                var obj = poilist.firstNode();
                while(obj) {
                    nodeNames.push(obj.getFullName());
                    obj = poilist.nextNode();
                }
                poilist.release();
                return nodeNames;
            },
           
            // @method destroySceneNode(areaName: String, nodeName?: String, isDelay?: Boolean): this
            // 动态删除场景中的节点对象，优先支持延迟删除
            destroySceneNode: function (areaName, nodeName, isDelay) {
    
                if (typeof nodeName === 'undefined') {
                    var path = areaName.split("/");
                    nodeName = path[path.length - 1];
                    areaName = path[0];
                }            
                var area = this.getArea(areaName);
                if (!area)
                    return null;
                
                isDelay = isDelay || false;
                if ("destroySceneNodeDelay" in area && isDelay)
                    area.destroySceneNodeDelay(nodeName);//延迟删除
                else
                    area.destroySceneNode(nodeName);
                return this;
            },
    
            // @method createCommonNode(nodePath: String, nodeType: Q3D.Enums.sceneNodeType): QSceneNode
            // 动态创建通用的节点对象，Node路径"区域/[父节点名称]/要创建的节点名称"，当出现父节点名称时要确保该节点已存在。
            // 若待创建节点已存在或父节点不存在时，返回 null；创建成功返回 QSceneNode 原生对象
            createCommonNode: function (nodePath, nodeType) {
                var path = nodePath.split("/");
                var pathNodeCount = path.length;
                if (pathNodeCount < 2 || pathNodeCount > 3)
                    return null;
    
                var areaName = path[0];
                var area = this.getArea(areaName);
                if (!area) //判断场景名称是否存在
                    return null;
    
                var parentNodeName = null,
                    nodeName = null;
                if (pathNodeCount == 2)
                    nodeName = path[1];
                else {
                    parentNodeName = path[1];
                    nodeName = path[2];
                }
    
                if ((this.getSceneNode(areaName, nodeName) != null) || //要创建的节点已存在
                    (pathNodeCount == 3 && !this.getSceneNode(areaName, parentNodeName))) //父节点不存在
                    return null;
    
                var vecNodeCreated = null;
                if (pathNodeCount == 2) {
                    vecNodeCreated = area.createTopNode(nodeType, nodeName);
                } else {
                    var parentNode = this.getSceneNode(areaName, parentNodeName);
                    vecNodeCreated = parentNode.createChildNode(nodeType, nodeName, 0);
                }
    
                return vecNodeCreated;
            },
    
            // @method enableEditMode(nodePath: String, initEditMode?: Q3D.Enums.auxOperateType, options?: Edit options): this
            // 开启节点编辑模式（默认为节点移动）。当节点处于编辑模式下，键盘数字 1、2、3 可用于切换不同编辑态（移动、旋转、缩放）；
            // 同时，键盘按下 ESCAPE 键可取消当前编辑状态；按下 DELETE 键删除被编辑的节点；按下 ENTER 键确认当前编辑结果
            enableEditMode: function (nodePath, initEditMode, options) {
    
                var defaultEditModeOption = {
                    CustomEditAuxEnable: false,//开启自定义模型编辑图标
                    CustomEditAux: {//自定义模型编辑图标设定
                        Translate: {
                            AXIS_X: true,
                            AXIS_Y: true,
                            AXIS_Z: true,
                            PLANE_XOY: true,
                            PLANE_YOZ: true,
                            PLANE_ZOX: true
                        },
                        Rotate: {
                            AXIS_X: true,
                            AXIS_Y: true,
                            AXIS_Z: true,
                            PLANE_XOY: true,
                            PLANE_YOZ: true,
                            PLANE_ZOX: true
                        },
                        Scale: {
                            AXIS_X: true,
                            AXIS_Y: true,
                            AXIS_Z: true,
                            PLANE_XOY: true,
                            PLANE_YOZ: true,
                            PLANE_ZOX: true
                        }
                    },
                    OnSaved: null, //模型保存事件
                    OnCanceled: null, //模型编辑取消事件
                    OnDeleted: null, //模型隐藏事件
                }
                Q3D.Util.jQueryExtend(true,defaultEditModeOption, options);
                
                try {
                    var node = this.getSceneNode(nodePath);
                    if (!node)
                        return null;
                    
                    if(!this._editedNodeName)
                        this.exitEditMode(Q3D.Enums.exitType.SaveAndExit);
                    
                    //将当前处于编辑状态下的节点名称保存起来
                    this._editedNodePath = nodePath;
                    //这里通过绑定新的事件来限制只能选中该node
                    this.attachMouseEvent("OnLButtonDown", "_showNode", (function (options) {
                        var im = this._map3d.getInputManager();
                        if (options.NearestNode != null && options.NearestNode.getName().indexOf(this._editedNodePath.split('/')[1]) > -1) {                        
                            im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.LBUTTON, this._editedMode);
                            im.sendActionMsg(this._editedMode, Q3D.Enums.actionMsg.LIMIT_AUX, 1, 0);
                        } else {
                            im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.LBUTTON, Q3D.Enums.actionType.TRANS_SCENE);
                        }
                    }).bind(this));
    
                    //设置节点是否显示编辑模式        
                    initEditMode = initEditMode || Q3D.Enums.auxOperateType.Translate;
                    switch(initEditMode) {
                        case Q3D.Enums.auxOperateType.Translate:
                            this._editedMode = Q3D.Enums.actionType.OBJECTSELECT_MOVAUX; break;
                        case Q3D.Enums.auxOperateType.Rotate:
                            this._editedMode = Q3D.Enums.actionType.OBJECTSELECT_ROTAUX; break;
                        case Q3D.Enums.auxOperateType.Scale:
                            this._editedMode = Q3D.Enums.actionType.OBJECTSELECT_SCAAUX; break;
                    }
                                    
                    if (defaultEditModeOption.CustomEditAuxEnable) {
                        var currentAuxTypeObj = null;
                        var  mask = null;
                        switch (initEditMode) {
                            case 1:
                                currentAuxTypeObj = defaultEditModeOption.CustomEditAux.Translate;
                                break;
                            case 2:
                                currentAuxTypeObj = defaultEditModeOption.CustomEditAux.Rotate;
                                break;
                            case 3:
                                currentAuxTypeObj = defaultEditModeOption.CustomEditAux.Scale;
                                break;
                            default:
                                break;
                        }
                        if (currentAuxTypeObj != null) {
                            for (var i in currentAuxTypeObj) {
                                if (currentAuxTypeObj[i]) {
                                    mask += Q3D.Enums.auxControlType[i];
                                }
                            }
                            node.showAuxEx(initEditMode, mask, 1);
                        }
                        
                    } else {
                        node.showAux(initEditMode, 1);
                    }
    
                    var im = this._map3d.getInputManager();
                    im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.LBUTTON, Q3D.Enums.actionType.OBJECTSELECT_MOVAUX);
                    im.sendActionMsg(this._editedMode, Q3D.Enums.actionMsg.LIMIT_AUX, 1, 0);
                    var currentstatus = {
                        Translate: node.getPosition(),
                        Rotate: node.getOrientation(0),
                        Scale: node.getScale(0)
                    }
                    //键盘绑定
                    this.attachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.NUM_1, (function (wParam, lParam) {
                            node.showAux(Q3D.Enums.auxOperateType.Translate, 1);
                            this._editedMode = Q3D.Enums.actionType.OBJECTSELECT_MOVAUX;
                            //var im = this._map3d.getInputManager();
                            //im.bindControlAction( Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.LBUTTON, Q3D.Enums.actionType.OBJECTSELECT_MOVAUX );
                        }).bind(this));
                    this.attachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.NUM_2, (function (wParam, lParam) {
                            node.showAux(Q3D.Enums.auxOperateType.Rotate, 1);
                            this._editedMode = Q3D.Enums.actionType.OBJECTSELECT_ROTAUX;
                            //var im = this._map3d.getInputManager();
                            //im.bindControlAction( Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.LBUTTON, Q3D.Enums.actionType.OBJECTSELECT_ROTAUX );
                        }).bind(this));
                    this.attachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.NUM_3, (function (wParam, lParam) {
                            node.showAux(Q3D.Enums.auxOperateType.Scale, 1);
                            this._editedMode = Q3D.Enums.actionType.OBJECTSELECT_SCAAUX;
                            //var im = this._map3d.getInputManager();
                            //im.bindControlAction( Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.LBUTTON, Q3D.Enums.actionType.OBJECTSELECT_SCAAUX );
                        }).bind(this));
    
                    this.attachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.ESCAPE, (function (wParam, lParam) {
                            node.showAux(Q3D.Enums.auxOperateType.Hide, 1);
                            //还原位置
                            node.setPosition(currentstatus.Translate);
                            node.setOrientation(currentstatus.Rotate, 0);
                            node.setScale(currentstatus.Scale);
                            im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.LBUTTON, Q3D.Enums.actionType.TRANS_SCENE);
                            this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.NUM_1);
                            this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.NUM_2);
                            this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.NUM_3);
                            this.detachMouseEvent("OnLButtonDown", "_showNode");
                            this._editedNodeName = null;
                            if (Q3D.Util.isFunction(defaultEditModeOption.OnCanceled)) {
                                defaultEditModeOption.OnCanceled(node);
                            }
                            setTimeout((function () {
                                    this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.ESCAPE);
                                    this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.DELETE);
                                    this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.ENTER);
                                }).bind(this), 50);
                        }).bind(this));
                    this.attachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.DELETE, (function (wParam, lParam) {
                            node.showAux(Q3D.Enums.auxOperateType.Hide, 1);
                            //node.setVisible(0); //节点隐藏
                            this.destroySceneNode(node.getArea().getName(),node.getName());
                            im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.LBUTTON, Q3D.Enums.actionType.TRANS_SCENE);
                            this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.NUM_1);
                            this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.NUM_2);
                            this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.NUM_3);
                            this.detachMouseEvent("OnLButtonDown", "_showNode");
                            this._editedNodeName = null;
                            if (Q3D.Util.isFunction(defaultEditModeOption.OnDeleted)) {
                                defaultEditModeOption.OnDeleted(node);
                            }
                            setTimeout((function () {
                                    this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.ESCAPE);
                                    this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.DELETE);
                                    this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.ENTER);
                                }).bind(this), 50);
                        }).bind(this));
                    this.attachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.ENTER, (function (wParam, lParam) {
                            node.showAux(Q3D.Enums.auxOperateType.Hide, 1);
                            im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.LBUTTON, Q3D.Enums.actionType.TRANS_SCENE);
                            this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.NUM_1);
                            this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.NUM_2);
                            this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.NUM_3);
                            this.detachMouseEvent("OnLButtonDown", "_showNode");
                            this._editedNodeName = null;
                            if (Q3D.Util.isFunction(defaultEditModeOption.OnSaved)) {
                                defaultEditModeOption.OnSaved(node);
                            }
                            setTimeout((function () {
                                    this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.ESCAPE);
                                    this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.DELETE);
                                    this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.ENTER);
                                }).bind(this), 50);
                        }).bind(this));
    
                } catch (e) {
                    return null;
                }
                return this;
            },
    
            // @method exitEditMode(exitType: Q3D.Enums.sceneNodeType.exitType, oldSts?: Object): this
            // 退出节点编辑模式。提供三种退出方式：SaveAndExit - 保存并退出； DeleteAndExit - 删除并退出；ResetAndExit - 复位并退出
            exitEditMode: function (exitType, oldSts) {
                var editedNodePath = this._editedNodePath;
                if (!editedNodePath)
                    return null;
    
                var node = this.getSceneNode(editedNodePath);
                if (!node)
                    return null;
    
                if (mapObj.getMouseEventStatus("OnLButtonDown", "_showNode")) {
                    if (exitType == Q3D.Enums.exitType.SaveAndExit) {
                        node.showAux(Q3D.Enums.auxOperateType.Hide, 1);
                    } else if (exitType == Q3D.Enums.exitType.DeleteAndExit) {
                        var path = editedNodePath.split("/");
                        this.destroySceneNode(path[0], path[1]);
                    } else if(exitType == Q3D.Enums.exitType.ResetAndExit) {
                        node.showAux(Q3D.Enums.auxOperateType.Hide, 1);
                        //还原位置					 
                        node.setPosition(oldSts.Translate);
                        node.setOrientation(oldSts.Rotate, 0);
                        node.setScale(oldSts.Scale);
                    }
                    
                    this._map3d.getInputManager().bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.LBUTTON, Q3D.Enums.actionType.TRANS_SCENE);
                    this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.NUM_1);
                    this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.NUM_2);
                    this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.NUM_3);
                    this.detachMouseEvent("OnLButtonDown", "_showNode");
                    this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.ESCAPE);
                    this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.DELETE);
                    this.detachKeyEvent("OnKeyUp", Q3D.Enums.keyboard.ENTER);
                }
                return this;
            },
    
            // @method getHtmlWidget(htmlWidgetName: String): QHtmlWidget
            // 获得指定名字的QHtmlWidget原生对象
            getHtmlWidget: function (htmlWidgetName) {
                if (!htmlWidgetName)
                    return null;
                var extUI = mapObj._map3d.getExternUIWidgetSys();
                if(!extUI)
                    return  null;
                
                if ("getHtmlWidget" in extUI)
                    return extUI.getHtmlWidget(htmlWidgetName);
                else
                    return extUI.createHtmlWidget(htmlWidgetName, "", "");
            },
            
            // @method destroyMovieClipInstance(mciName: String): this
            // 删除给定名称的动画剪辑实例对象
            destroyMovieClipInstance: function (mciName) {
                mapObj._map3d.getWorldManager().destroyMovieClipInstance(mciName);
                return this;
            },
            
            // @method destroyAllMovieClipInstances(): this
            // 删除所有的动画剪辑实例对象
            destroyAllMovieClipInstances: function () {
                mapObj._map3d.getWorldManager().destroyAllMovieClipInstances();
                return this;
            },
            
            // @method destroyMovieClip(mcName: String): this
            // 删除给定名称的动画剪辑对象
            destroyMovieClip: function (mcName) {
                mapObj._map3d.getWorldManager().destroyMovieClip(mcName);
                return this;
            },
            
            // @method destroyAllMovieClips(): this
            // 删除所有的动画剪辑对象
            destroyAllMovieClips: function () {
                mapObj._map3d.getWorldManager().destroyAllMovieClips();
                return this;
            },
            
            // @method destroyContainer(ctnName: String): this
            // 删除给定名称的容器对象
            destroyContainer: function (ctnName) {
                mapObj._map3d.getWorldManager().destroyContainer(ctnName);
                return this;
            },
            
            // @method destroyAllContainers(): this
            // 删除所有的容器对象
            destroyAllContainers: function () {
                mapObj._map3d.getWorldManager().destroyAllContainer();
                return this;
            },
            
            // @method addPOIByJson(pois: String): this
            // 根据传入的JSON格式串批量添加POI，JSON串格式参见用户指南
        /*  JSON串格式如下：
            {
            "AreaName": "XHQ",
            "FontSize": 20,
            "FontName": "宋体",
            "FontColor": "#000000",
            "CharScale": 1.0,
            "POILayout": 0,
            "UIType": 2,
            "IconAlphaEnabled": true,
            "FontOutLine": null,
            "FontEdgeColor": null,
            "AlphaTestRef": null,
            "Location": 768,
            "LocationOffset": null,
            "BackFrameBorderSize": null,    
            "BackBorderColor": null,
            "BackFillColor": null,
            "LabelMargin": null,
            "IconLabelMargin": null,
            "SpecialTransparent": true,
            "AlwaysOnScreen": false,
            "POIS": [
                {
                    "Name": "POI1",
                    "FontColor": "#ff0000",
                    "Text": "TESTPOI1",
                    "Icon": "Texture/dx_dz_16.png",
                    "IconSize": [48,48],
                    "Position": [0,0,0]
                },
                {
                    "Name": "POI2",
                    "FontColor": "#ff00ff",
                    "Text": "TESTPOI2",
                    "Icon": "Texture/dx_dz_16.png",
                    "IconSize": [48,48],
                    "Position": [0,20,0]
                },
                {
                            "Name": "Group/POI3",
                            "FontColor": "#ff00ff",
                            "Text": "TESTPOI3",
                            "Icon": "Texture/dx_dz_16.png",
                            "IconSize": [48,48],
                            "Position": [0,20,0]
                        }
                    ]
                }
                注明：
                1）接口提供了一套通用默认设置；            2）每个POI通常添加到场景的根节点下，也可支持名称二级定义，如"Group/POI3"，此时Group为组节点名称，需要事先创建，新创建的POI挂接到该组节点下；
                3）每个POI允许有自己的属性定义，此时覆盖通用定义。
        */
            addPOIByJson: function (pois) {
                mapObj._map3d.addPOIByJson(pois);
                return this;
            },
            
            // @method addContainerByJson(ctnName: String, jsonStr: String): NodeContainer
            // 一次性创建多节点容器对象，JSON串格式参见用户指南。返回封装的节点容器对象
            /*JSON串格式如下：
             {
            "Name": "myContainer", //容器名称
            "Type": 0,		//目前支持的几种类型：Alpha: 0,Color: 1,Visible: 2,Material: 3
            "TargetValue": "0.2",	//根据Type而改变，如Alpha:0.2,Color:"#000000",Visible:"true/false",Material:"Material/xy_xy_cao_580.mtr"
            "NODES": ["XHQ/node_1","XHQ/node_2"]
            }
            */
            addContainerByJson: function (ctnName, jsonStr) {
                mapObj._map3d.addContainerByJson(jsonStr);
                return Q3D.nodeContainer(ctnName);
            },        
            
            // @method saveImageAsBase64(isJpg: Boolean): String
            // 获取当前视口截图，包括引擎上叠加的UI。以Base64编码方式输出。支持：png和jpg两种格式图片
            saveImageAsBase64: function (isJpg) {
                var imgTypeStr = isJpg ? "jpg" : "png";
                var strImg = "data:image/" + imgTypeStr + ";base64," + mapObj._map3d.saveImageEx(imgTypeStr);
                return strImg.replace(/\r\n/g,'');
            },
            
            // @method saveImageAsFile(fileName: String): String
            // 获取当前视口截图，包括引擎上叠加的UI，写入本地文件，支持：png和jpg两种格式图片，另外注意文件路径中的斜杠符号用'/'
            saveImageAsFile: function (fileName) {
                return mapObj._map3d.saveImage(fileName);
            },
            
            // @method saveFrameAsBase64(isJpg: Boolean): String
            // 获取当前引擎帧截图，以Base64编码方式输出。支持：png和jpg两种格式图片
            saveFrameAsBase64: function (isJpg) {
                var imgTypeStr = isJpg ? "jpg" : "png";
                var strImg = "data:image/" + imgTypeStr + ";base64," + mapObj._map3d.saveCurrentFrameAsBase64(imgTypeStr);
                return strImg.replace(/\r\n/g,'');
            },
            
            // @method saveFrameAsFile(fileName: String): String
            // 获取当前引擎帧截图并写入本地文件，支持：png和jpg两种格式图片，另外注意文件路径中的斜杠符号用'/'
            saveFrameAsFile: function (fileName) {
                return mapObj._map3d.saveCurrentFrameAsFile(fileName);
            },
    
            // @method queryByRay(stPt: Vector3d, edPt: Vector3d): Number
            // 传入两个平面坐标点判断是否两点连线与其他场景中的节点对象相交，返回结果如下：
            // 0：无相交；-1：有相交且交点在连线的一端；1：有相交交点在连线上
            // 要求场景开启物理。root文件中参考设置如下：
            // `<Physics enabled="true" mainEnabled="true" acsEnabled="false">`
            //      `<PhyWorld meshAutoSetup="true" fPRoamType="0" id="0" />`
            // `</Physics>`
            queryByRay: function (stPt, edPt) {
                var _dirPacked3d = edPt.clone().subtract(stPt);
                var _totalLen = _dirPacked3d.distanceTo(Q3D.vector3d(0, 0, 0));
                _dirPacked3d.divide(Q3D.vector3d(_totalLen, _totalLen, _totalLen));
                var _dir = Q3D.vector3(_dirPacked3d.x, _dirPacked3d.y, _dirPacked3d.z);
                var _cross = Q3D.vector3d(0, 0, 0).get();
                _cross = mapObj._map3d.getWorldManager().pickNearestSceneNodeByRayEx(0, stPt.get(), _dir.get(), -1);
                if (!_cross) return 0; //交点不存在
                
                var _crossPacked3d = Q3D.vector3d(_cross.x, _cross.y, _cross.z);
                if (_crossPacked3d.x != 0 || _crossPacked3d.y != 0 || _crossPacked3d.z != 0) {
                    //var _crossPacked3d = Q3D.vector3d(_cross.x, _cross.y, _cross.z);
                    //先判断点的位置是否有重合
                    if (edPt.equals(_crossPacked3d, 0.1) || stPt.equals(_crossPacked3d, 0.1)) {
                        return -1; //相交节点在连线的一端
                    } else { //判断长度
                        var _crossLen = _crossPacked3d.subtract(stPt).distanceTo(Q3D.vector3d(0, 0, 0));
                        if (_crossLen < _totalLen)
                            return 1; //两点连线有相交节点
                    }
                }
                return false;
            },
            
            // @method enableTooltip(waitTime: Number, fn: Function): this
            //  打开Tooltip侦听。waitTime为判断等待时间，单位毫秒；fn为回调函数，第一个参数为查询到的QSceneNode对象
            enableTooltip: function (waitTime, fn) {
                var wt = waitTime || 500;
                if (fn) {
                    mapObj._map3d.setTooltipListener(wt);
                    mapObj.on('onSceneNodeTooltip', fn);
                }
                return this;
            },
            // @method disableTooltip(): this
            // 关闭Tooltip侦听
            disableTooltip: function () {
                mapObj._map3d.removeTooltipListener();
                mapObj.off('onSceneNodeTooltip');     
                return this;
            },
        });
    
    // @section
    
    // @factory Q3D.map(id: String, options: Map Init Options)
    // 利用给定的 一个 `<div>`  元素的 DOM ID 来实例化一个引擎窗口对象
    //
    // @alternative
    // @factory Q3D.map(el: HTMLElement, options: Map Init Options)
    // 利用给定的 一个 `<div>`  HTML元素的实例 来构建一个引擎窗口对象
    Q3D.map = function (id, options) {
        window.mapObj = new Q3D.Map(id, options);
        return window.mapObj; //
    };
    
    
    /* @class Vector2
     * @aka Q3D.Vector2
     *
     * 表示二维平面坐标点（浮点类型）
     *
     * @example
     *
     * ```
     * var v2 = Q3D.vector2(50.5, 30.2);
     * ```
     *
     * 其他的创建方式：
     *
     * ```
     * var v2 = Q3D.vector2([50.5, 30.2]);
     * v2 = Q3D.vector2({x:50.5, y:30.2})
     * ```
     */
    
    Q3D.Vector2 = function (x, y) {
        if (!mapObj) {
            throw new Error('无效的引擎对象，引擎对象未初始化！');
        }
        if (isNaN(x) || isNaN(y)) {
            throw new Error('无效的QVector2对象: (' + x + ', ' + y + ')');
        }    
        
        // @property x: Number
        // 坐标 x
        this.x = +x;
        // @property y: Number
        // 坐标 y
        this.y = +y;
    
    };
    
    Q3D.Vector2.prototype = {
                
        // @method get(): QVector2
        // 返回对应的原生 QVector2 对象
        get: function() {
            this.update();
            return this._qVector2 ;
        },
        // @method equals(otherVector2: Vector2, maxMargin?: Number): Boolean
        // 在给定的精度范围内比较两个 `Vector2` 对象是否相等
        equals: function (obj, maxMargin) {
            if (!obj) { return false; }
    
            var margin = Math.max(
                    Math.abs(this.x - obj.x),
                    Math.abs(this.y - obj.y));
    
            return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
        },
    
        // @method toString(): String
        // 返回对象的字符串表示，常用于调试目的
        toString: function (precision) {
            return 'QVector2(' +
                    Q3D.Util.formatNum(this.x, precision) + ', ' +
                    Q3D.Util.formatNum(this.y, precision) + ')';
        },
    
        // @method distanceTo(otherVector2: Vector2): Number
        // 计算两个 `Vector2` 对象之间的距离（米）
        distanceTo: function (other) {
            if (other)
            {
                var dx = other.x - this.x,
                dy = other.y - this.y;
    
                return Math.sqrt(dx * dx + dy * dy);
            }
            return null;
        },
        
        // @method add(otherVector2: Vector2): this
        // 两个 `Vector2` 对象相加
        add: function (other) {
            if (other)
            {
                this.x += other.x; 
                this.y += other.y; 
            }
            return this;
        },
    
        // @method subtract(otherVector2: Vector2): this
        // 两个 `Vector2` 对象相减
        subtract: function (other) {
            if (other)
            {
                this.x -= other.x;
                this.y -= other.y;         
            }
            return this;
        },
        // @method multiply(otherVector2: Vector2): this
        // 两个 `Vector2` 对象相乘
        multiply: function (other) {
            if (other)
            {
                this.x *= other.x; 
                this.y *= other.y;          
            }
            return this;
        },
        // @method divide(otherVector2: Vector2): this
        // 两个 `Vector2` 对象相除
        divide: function (other) {
            if (other)
            {
                if (other.x == 0 || other.y == 0)
                    throw new Error('除数为0');
    
                this.x /= other.x; 
                this.y /= other.y;       
    
            }
            return this;
        },
       
       // @method clone(): Vector2
        // 克隆一个新的 `Vector2` 对象
        clone: function () {
            return new Q3D.Vector2(this.x, this.y);
        },
        
        // @method update(): this
        // 将属性值回写到原生 QVector2 对象
        update: function () {        
            if (this._qVector2 == null)
                this._qVector2 = mapObj._map3d.createObject("QMap3DCtl.QVector2");
            this._qVector2.x = this.x;
            this._qVector2.y = this.y;
            return this;
        }
    };
    
    
    
    // @factory Q3D.vector2(a: Number, b: Number): Vector2
    // 创建一个二维平面坐标点
    
    // @alternative
    // @factory Q3D.vector2(coords: Array): Vector2
    // 传入参数可以采用数组方式： `[Number, Number]` 
    
    // @alternative
    // @factory Q3D.vector2(coords: Object): Vector2
    // 传入参数可以采用对象方式 `{x: Number, y: Number}`
    // 或者原生的  QVector2 对象
    
    // @alternative
    // @factory Q3D.vector2(): Vector2
    // 传入参数为空，对象成员默认为0
    
    Q3D.vector2 = function (a, b) {
    
        if (a instanceof Q3D.Vector2) {
            return a; //直接返回传入对象的引用
        }
        
        if (Q3D.Util.isArray(a) && typeof a[0] !== 'object') {		
            if (a.length === 2) {
                return new Q3D.Vector2(a[0], a[1]);
            }
            return null;
        }
        
        if (typeof a === 'object' && 'x' in a && 'y' in a) {
            return new Q3D.Vector2(a.x, a.y);
        }    
       
        if  (arguments.length == 2 && typeof a === 'number' && typeof  b === 'number') {
            return new Q3D.Vector2(a, b);
        }       
    
        return new Q3D.Vector2(0, 0);
    };
    
    // @method toVector2(): Vector2
    // 逗号分隔的字符串与引擎值类型对象转换：
    // ```js
    // var v2 = "50.5, 30.2".toVector2();
    // ``` 
    String.prototype.toVector2 = function () {
        try {
            return Q3D.vector2(parseFloat(this.split(",")[0]), parseFloat(this.split(",")[1]));
        }
        catch (e) {
            return null;
        }
    }
    
    
    
    /* @class Vector2I
     * @aka Q3D.Vector2I
     *
     * 表示二维平面像素坐标点
     *
     * @example
     *
     * ```
     * var v2I = Q3D.vector2I(50, 30);
     * ```
     *
     * 其他的创建方式：
     *
     * ```
     * var v2I = Q3D.vector2I([50, 30]);
     * v2I = Q3D.vector2I({x:50, y:30})
     * ```
     */
    
    Q3D.Vector2I = function (x, y) {
        if (!mapObj) {
            throw new Error('无效的引擎对象，引擎对象未初始化！');
        }
        if (!Q3D.Util.isInteger(x) || !Q3D.Util.isInteger(y)) {
            throw new Error('无效的QVector2I对象: (' + x + ', ' + y + ')');
        }    
        // @property x: Number
        // 坐标 x
        this.x = +x;
        // @property y: Number
        // 坐标 y
        this.y = +y;
    
    };
    
    Q3D.Vector2I.prototype = {
        
        
         // @method get(): QVector2I
        // 返回对应的原生 QVector2I 对象
         get: function() {
             this.update();
            return this._qVector2I ;
        },
    
        // @method equals(otherVector2I: Vector2I, maxMargin?: Number): Boolean
        // 在给定的精度范围内比较两个 `Vector2I` 对象是否相等
        equals: function (obj, maxMargin) {
            if (!obj) { return false; }
    
            var margin = Math.max(
                    Math.abs(this.x - obj.x),
                    Math.abs(this.y - obj.y));
    
            return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
        },
    
        // @method toString(): String
                  // 返回对象的字符串表示，常用于调试目的
        toString: function (precision) {
            return 'QVector2I(' +
                    Q3D.Util.formatNum(this.x, precision) + ', ' +
                    Q3D.Util.formatNum(this.y, precision) + ')';
        },
    
        // @method distanceTo(otherVector2I: Vector2I): Number
                // 计算两个 `Vector2I` 对象之间的距离（米）
        distanceTo: function (other) {
            if (other)
            {
                var dx = other.x - this.x,
                dy = other.y - this.y;
    
                return Math.sqrt(dx * dx + dy * dy);
            }
            return null;
        },
        
         // @method add(otherVector2I: Vector2I): this
         // 两个 `Vector2I` 对象相加
        add: function (other) {
            if (other)
            {
                this.x += other.x;
                this.y += other.y;            
            }
            return this;
        },
    
         // @method subtract(otherVector2I: Vector2I): this
         // 两个 `Vector2I` 对象相减
        subtract: function (other) {
            if (other)
            {
                this.x -= other.x;
                this.y -= other.y;            
            }
            return this;
        },
         // @method multiply(otherVector2I: Vector2I): this
         // 两个 `Vector2I` 对象相乘   
        multiply: function (other) {
            if (other)
            {
                this.x *= other.x;
                this.y *= other.y;            
            }
            return this;
        },    
        // @method divide(otherVector2I: Vector2I): this
        // 两个 `Vector2I` 对象相除
        divide: function (other) {
            if (other)
            {
                if (other.x == 0 || other.y == 0)
                    throw new Error('除数为0');
    
                this.x /= other.x;
                this.y /= other.y;         
    
            }
            return this;
        },
       
       // @method clone(): Vector2I
        // 克隆一个新的 `Vector2I` 对象
        clone: function () {
            return new Q3D.Vector2I(this.x, this.y);
        },
        
        // @method update(): this
        // 将属性值回写到原生 QVector2I 对象
        update: function () {        
            if (this._qVector2I == null)
                this._qVector2I = mapObj._map3d.createObject("QMap3DCtl.QVector2I");
            this._qVector2I.x = this.x;
            this._qVector2I.y = this.y;
            return this;
        }
    };
    
    
    
    // @factory Q3D.vector2I(a: Number, b: Number): Vector2I
    // 创建一个二维平面像素坐标点
    
    // @alternative
    // @factory Q3D.vector2I(coords: Array): Vector2I
    // 传入参数可以采用数组方式： `[Number, Number]` 
    
    // @alternative
    // @factory Q3D.vector2I(coords: Object): Vector2I
    // 传入参数可以采用对象方式 `{x: Number, y: Number}`
    // 或者原生的  QVector2I 对象
    
    // @alternative
    // @factory Q3D.vector2I(): Vector2I
    // 传入参数为空，对象成员默认为0
    
    Q3D.vector2I = function (a, b) {
    
        if (a instanceof Q3D.Vector2I) {
            return a;
        }
        
        if (Q3D.Util.isArray(a) && typeof a[0] !== 'object') {		
            if (a.length === 2) {
                return new Q3D.Vector2I(a[0], a[1]);
            }
            return null;
        }
        
        if (typeof a === 'object' && 'x' in a && 'y' in a) {
            return new Q3D.Vector2I(a.x, a.y);
        }
        
        if  (arguments.length == 2 && typeof a === 'number' && typeof  b === 'number') {
            return new Q3D.Vector2I(a, b);
        } 
        
        return new Q3D.Vector2I(0, 0);
    };
    // @method toVector2I(): Vector2I
    // 逗号分隔的字符串与引擎值类型对象转换：
    // ```js
    // var v2I = "50, 30".toVector2I();
    // ```
    String.prototype.toVector2I = function () {
        try {
            return Q3D.vector2I(parseInt(this.split(",")[0]), parseInt(this.split(",")[1]));
        }
        catch (e) {
            return null;
        }
    }
    
    
    
    /* @class Vector3
     * @aka Q3D.Vector3
     *
     * 表示三维相对坐标点，其中 y 分量表示高度差
     *
     * @example
     *
     * ```
     * var v3 = Q3D.vector3(50.3, 5.0, 30.5);
     * ```
     *
     * 其他的创建方式：
     *
     * ```
     * var v3 = Q3D.vector3([50.3, 5.0, 30.5]);
     * v3 = Q3D.vector3({x:50.3, y:5.0, z:30.5})
     * ```
     */
    
    Q3D.Vector3 = function (x, y, z) {
        if (!mapObj) {
            throw new Error('无效的引擎对象，引擎对象未初始化！');
        }
        if (isNaN(x) || isNaN(y) || isNaN(z)) {
            throw new Error('无效的QVector3对象: (' + x + ', ' + y +  ', ' + z + ')');
        }
    
        // @property x: Number
        // 坐标 x
        this.x = +x;
        // @property y: Number
        // 坐标 y
        this.y = +y;
        // @property z: Number
        // 坐标 z
        this.z = +z;
    
    };
    
    Q3D.Vector3.prototype = {	
        
         // @method get(): QVector3
        // 返回对应的原生 QVector3 对象    
         get: function() {
            this.update();//将封装对象的属性回写到原生对象中
            return this._qVector3 ;
        },
        // @method equals(otherVector3: Vector3, maxMargin?: Number): Boolean
        // 在给定的精度范围内比较两个 `Vector3` 对象是否相等
        equals: function (obj, maxMargin) {
            if (!obj) { return false; }
    
            //obj = Q3D.vector3(obj);
    
            var margin = Math.max(
                    Math.abs(this.x - obj.x),
                    Math.abs(this.y - obj.y),
                    Math.abs(this.z - obj.z));
    
            return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
        },
    
        // @method toString(): String
        // 返回对象的字符串表示，常用于调试目的
        toString: function (precision) {
            return 'QVector3(' +
                    Q3D.Util.formatNum(this.x, precision) + ', ' +
                    Q3D.Util.formatNum(this.y, precision) + ', ' +
                    Q3D.Util.formatNum(this.z, precision) + ')';
        },
    
        // @method distanceTo(otherVector3: Vector3): Number
        // 计算两个 `Vector3` 对象之间的空间距离（米）
        distanceTo: function (other) {
            if (other)
            {
                var dx = other.x - this.x,
                dy = other.y - this.y,
                dz = other.z - this.z;
    
                return Math.sqrt(dx * dx + dy * dy + dz * dz);
            }
            return null;
        },
        
        // @method add(otherVector3: Vector3): this
        // 两个 `Vector3` 对象相加
        add: function (other) {
            if (other)
            {
                this.x += other.x;
                this.y += other.y;    
                this.z += other.z;                
            }
            return this;
        },
    
        // @method subtract(otherVector3: Vector3): this
        // 两个 `Vector3` 对象相减
        subtract: function (other) {
            if (other)
            {
                this.x -= other.x;
                this.y -= other.y;  
                this.z -= other.z;             
            }
            return this;
        },
        
        // @method multiply(otherVector3: Vector3): this
        // 两个 `Vector3` 对象相乘
        multiply: function (other) {
            if (other)
            {
                this.x *= other.x;
                this.y *= other.y;            
                this.z *= other.z;    
            }
            return this;
        },
        
        // @method divide(otherVector3: Vector3): this
        // 两个 `Vector3` 对象相除
        divide: function (other) {
            if (other)
            {
                if (other.x == 0 || other.y == 0 || other.z == 0)
                    throw new Error('除数为0');
    
                this.x /= other.x;
                this.y /= other.y;   
                this.z /= other.z;   
    
            }
            return this;
        },
       
        // @method clone(): Vector3
        // 克隆一个新的 `Vector3` 对象
        clone: function () {
            return new Q3D.Vector3(this.x, this.y, this.z);
        },
        
        // @method toGlobalPos(areaName: String): QVector3d
        // 返回相对指定场景的平面坐标：QVector3d 原生对象
        toGlobalPos: function (areaName) {
            var area = mapObj._map3d.getWorldManager().getArea(areaName);
            if (area) {
                return area.toGlobalPos(this.get());
            } 
            return null;        
        },   
        // @method toGlobalVec3d(areaName: String): QGlobalVec3d
        // 返回相对指定场景的经纬度坐标：QGlobalVec3d 原生对象
        toGlobalVec3d: function (areaName) {
            var area = mapObj._map3d.getWorldManager().getArea(areaName);
            if (area) {
                var  v3d = area.toGlobalPos(this.get());
                var math = mapObj._map3d.getMath();
                return math.vec3DToGlobalVec3D(v3d);
            } 
            return null;        
        },       
        
        // @method update(): this
        // 将属性值回写到原生 QVector3 对象
        update: function () {    
            if (this._qVector3 == null)
                this._qVector3 = mapObj._map3d.createObject("QMap3DCtl.QVector3");    
            this._qVector3.x = this.x;
            this._qVector3.y = this.y;
            this._qVector3.z = this.z;
            return this;
        }
    };
    
    
    
    // @factory Q3D.vector3(a: Number, b: Number, c: Number): Vector3
    // 创建一个三维相对坐标点
    
    // @alternative
    // @factory Q3D.vector3(coords: Array): Vector3
    // 传入参数可以采用数组方式： `[Number, Number, Number]` 
    
    // @alternative
    // @factory Q3D.vector3(coords: Object): Vector3
    // 传入参数可以采用对象方式 `{x: Number, y: Number, z: Number}`
    // 或者原生的  QVector3 对象
    
    // @alternative
    // @factory Q3D.vector3(): Vector3
    // 传入参数为空，对象成员默认为0
    
    Q3D.vector3 = function (a, b, c) {
    
        if (a instanceof Q3D.Vector3) {
            return a;
        }
        
        if (Q3D.Util.isArray(a) && typeof a[0] !== 'object') {		
            if (a.length === 3) {
                return new Q3D.Vector3(a[0], a[1], a[2]);
            }
            return null;
        }
        
        if (typeof a === 'object' && 'x' in a && 'y' in a && 'z' in a) {
            return new Q3D.Vector3(a.x, a.y, a.z);
        }
        
        if  (arguments.length == 3 && typeof a === 'number' && typeof  b === 'number' && typeof c === 'number') {
            return new Q3D.Vector3(a, b, c);
        } 
        
        return new Q3D.Vector3(0, 0, 0);
    };
    
    // @method toVector3(): Vector3
    // 逗号分隔的字符串与引擎值类型对象转换：
    // ```js
    // var v3 = "50.3, 5.0, 30.5".toVector3();
    // ``` 
    String.prototype.toVector3 = function () {
        try {
            return Q3D.vector3(parseFloat(this.split(",")[0]), parseFloat(this.split(",")[1]), parseFloat(this.split(",")[2]));
        }
        catch (e) {
            return null;
        }
    }
    
    
    
    
    /* @class Vector3d
     * @aka Q3D.Vector3d
     *
     * 表示三维平面坐标点，其中 y 分量通常表示高度
     *
     * @example
     *
     * ```
     * var v3 = Q3D.vector3d(50.34343, 5.02342, 30.52324);
     * ```
     *
     * 其他的创建方式：
     *
     * ```
     * var v3 = Q3D.vector3d([50.34343, 5.02342, 30.52324]);
     * v3 = Q3D.vector3d({x:50.34343, y:5.02342, z:30.52324})
     * ```
     */
    
    Q3D.Vector3d = function (x, y, z) {
        if (!mapObj) {
            throw new Error('无效的引擎对象，引擎对象未初始化！');
        }
        if (isNaN(x) || isNaN(y) || isNaN(z)) {
            throw new Error('无效的QVector3d对象: (' + x + ', ' + y +  ', ' + z + ')');
        }    
        // @property x: Number
        // 坐标 x
        this.x = +x;
        // @property y: Number
        // 坐标 y
        this.y = +y;
        // @property z: Number
        // 坐标 z
        this.z = +z;
    
    };
    
    Q3D.Vector3d.prototype = {
    
        // @method get(): QVector3d
        // 返回对应的原生 QVector3d 对象    
        get: function() {
            this.update();
            return this._qVector3d ;
        },
        // @method equals(otherVector3d: Vector3d, maxMargin?: Number): Boolean
        // 在给定的精度范围内比较两个 `Vector3d` 对象是否相等
        equals: function (obj, maxMargin) {
            if (!obj) { return false; }
    
            var margin = Math.max(
                    Math.abs(this.x - obj.x),
                    Math.abs(this.y - obj.y),
                    Math.abs(this.z - obj.z));
    
            return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
        },
    
        // @method toString(): String
        // 返回对象的字符串表示，常用于调试目的
        toString: function (precision) {
            return 'QVector3d(' +
                    Q3D.Util.formatNum(this.x, precision) + ', ' +
                    Q3D.Util.formatNum(this.y, precision) + ', ' +
                    Q3D.Util.formatNum(this.z, precision) + ')';
        },
    
        // @method distanceTo(otherVector3d: Vector3d): Number
        // 计算两个 `Vector3d` 对象之间的空间距离（米）
        distanceTo: function (other) {
            if (other)
            {
                var dx = other.x - this.x,
                dy = other.y - this.y,
                dz = other.z - this.z;
    
                return Math.sqrt(dx * dx + dy * dy + dz * dz);
            }
            return null;
        },
        
        // @method add(otherVector3d: Vector3d): this
        // 两个 `Vector3d` 对象相加
        add: function (other) {
            if (other)
            {
                this.x += other.x;
                this.y += other.y;    
                this.z += other.z;                
            }
            return this;
        },
    
        // @method subtract(otherVector3d: Vector3d): this
        // 两个 `Vector3d` 对象相减
        subtract: function (other) {
            if (other)
            {
                this.x -= other.x;
                this.y -= other.y;  
                this.z -= other.z;             
            }
            return this;
        },
        
        // @method multiply(otherVector3d: Vector3d): this
        // 两个 `Vector3d` 对象相乘
        multiply: function (other) {
            if (other)
            {
                this.x *= other.x;
                this.y *= other.y;            
                this.z *= other.z;    
            }
            return this;
        },
        
        // @method divide(otherVector3d: Vector3d): this
        // 两个 `Vector3d` 对象相除
        divide: function (other) {
            if (other)
            {
                if (other.x == 0 || other.y == 0 || other.z == 0)
                    throw new Error('除数为0');
    
                this.x /= other.x;
                this.y /= other.y;   
                this.z /= other.z;   
            }
            return this;
        },
       
        // @method clone(): Vector3d
        // 克隆一个新的 `Vector3d` 对象
        clone: function () {
            return new Q3D.Vector3d(this.x, this.y, this.z);
        },    
        // @method toLocalPos(areaName: String): QVector3
        // 返回相对指定场景的相对坐标：QVector3 原生对象
        toLocalPos: function (areaName) {
            var area = mapObj._map3d.getWorldManager().getArea(areaName);
            if (area) {
                return area.toLocalPos(this.get());
            } 
            return null;        
        },      
        // @method toGlobalVec3D(): QGlobalVec3d
        // 返回相对指定场景的经纬度坐标：QGlobalVec3d 原生对象
        toGlobalVec3d: function () {
            var math = mapObj._map3d.getMath();
            return math.vec3DToGlobalVec3D(this.get());        
        },      
    
        // @method update(): this
        // 将属性值回写到原生 QVector3d 对象
        update: function () {      
            if (this._qVector3d == null)
                this._qVector3d = mapObj._map3d.createObject("QMap3DCtl.QVector3d");  
            this._qVector3d.x = this.x;
            this._qVector3d.y = this.y;
            this._qVector3d.z = this.z;
            return this;
        }
    };
    
    
    
    // @factory Q3D.vector3d(a: Number, b: Number, c: Number): Vector3d
    // 创建一个三维平面坐标点
    
    // @alternative
    // @factory Q3D.vector3d(coords: Array): Vector3d
    // 传入参数可以采用数组方式： `[Number, Number, Number]` 
    
    // @alternative
    // @factory Q3D.vector3d(coords: Object): Vector3d
    // 传入参数可以采用对象方式 `{x: Number, y: Number, z: Number}`
    // 或者原生的  QVector3d 对象
    
    // @alternative
    // @factory Q3D.vector3d(): Vector3d
    // 传入参数为空，对象成员默认为0
    
    Q3D.vector3d = function (a, b, c) {
    
        if (a instanceof Q3D.Vector3d) {
            return a;
        }
        
        if (Q3D.Util.isArray(a) && typeof a[0] !== 'object') {		
            if (a.length === 3) {
                return new Q3D.Vector3d(a[0], a[1], a[2]);
            }
            return null;
        }
        
        if (typeof a === 'object' && 'x' in a && 'y' in a && 'z' in a) {
            return new Q3D.Vector3d(a.x, a.y, a.z);
        }
        
        if  (arguments.length == 3 && typeof a === 'number' && typeof  b === 'number' && typeof c === 'number') {
            return new Q3D.Vector3d(a, b, c);
        } 
        
        return new Q3D.Vector3d(0, 0, 0);
    };
    // @method toVector3d(): Vector3d
    // 逗号分隔的字符串与引擎值类型对象转换：
    // ```js
    // var v3d = "50.34343, 5.02342, 30.52324".toVector3d();
    // ``` 
    String.prototype.toVector3d = function () {
        try {
            return Q3D.vector3d(parseFloat(this.split(",")[0]), parseFloat(this.split(",")[1]), parseFloat(this.split(",")[2]));
        }
        catch (e) {
            return null;
        }
    }
    
    
    /* @class GlobalVec3d
     * @aka Q3D.GlobalVec3d
     *
     * 表示三维空间的经纬度坐标点
     *
     * @example
     *
     * ```
     * var v3 = Q3D.globalVec3d(121.343345, 31.023422, 10);
     * ```
     *
     * 其他的创建方式：
     *
     * ```
     * var v3 = Q3D.globalVec3d([121.343345, 31.023422, 10]);
     * v3 = Q3D.globalVec3d({longitude:121.343345, latitude:31.023422, height:10})
     * ```
     */
    
    Q3D.GlobalVec3d = function (_lon, _lat, _height) {
        if (!mapObj) {
            throw new Error('无效的引擎对象，引擎对象未初始化！');
        }
        if (isNaN(_lon) || isNaN(_lat) || isNaN(_height)) {
            throw new Error('无效的QGlobalVec3d对象: (' + _lon + ', ' + _lat +  ', ' + _height + ')');
        }
        
        // @property longitude: Number
        // 经度 longitude
        this.longitude = +_lon;
        // @property latitude: Number
        // 纬度 latitude
        this.latitude = +_lat;
        // @property height: Number
        // 高度 height
        this.height = +_height;
    
    };
    
    Q3D.GlobalVec3d.prototype = {
        
       
        // @method get(): QGlobalVec3d
        // 返回对应的原生 QGlobalVec3d 对象    
        get: function() {
            this.update();
            return this._qGlobalVec3d ;
        },
        // @method equals(otherGlobalVec3d: GlobalVec3d, maxMargin?: Number): Boolean
        // 在给定的精度范围内比较两个 `GlobalVec3d` 对象是否相等
        equals: function (obj, maxMargin) {
            if (!obj) { return false; }
    
            var margin = Math.max(
                    Math.abs(this.longitude - obj.longitude),
                    Math.abs(this.latitude - obj.latitude),
                    Math.abs(this.height - obj.height));
    
            return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
        },
    
        // @method toString(): String
        // 返回对象的字符串表示，常用于调试目的
        toString: function (precision) {
            return 'QGlobalVec3d(' +
                    Q3D.Util.formatNum(this.longitude, precision) + ', ' +
                    Q3D.Util.formatNum(this.latitude, precision) + ', ' +
                    Q3D.Util.formatNum(this.height, precision) + ')';
        },   
        
        // @method toGlobalPos(): QVector3d
        // 返回相对指定场景的平面坐标：QVector3d 原生对象
        toGlobalPos: function () {
            var math = mapObj._map3d.getMath();
            return math.globalVec3DtoVec3D(this.get());
        },       
        // @method toLocalPos(areaName: String): QVector3
        // 返回相对指定场景的相对坐标：QVector3 原生对象
        toLocalPos: function (areaName) {
            var math = mapObj._map3d.getMath();       
            var v3d = math.globalVec3DtoVec3D(this.get());
            var area = mapObj._map3d.getWorldManager().getArea(areaName);
            if (area) {
                return area.toLocalPos(v3d);
            } 
            return null;        
        },       
       
       // @method clone(): GlobalVec3d
        // 克隆一个新的 `GlobalVec3d` 对象
        clone: function () {
            return new Q3D.GlobalVec3d(this.longitude, this.latitude, this.height);
        },
        
        // @method update(): this
        // 将属性值回写到原生 QGlobalVec3d 对象
        update: function () {        
            if (this._qGlobalVec3d == null)
                this._qGlobalVec3d = mapObj._map3d.createObject("QMap3DCtl.QGlobalVec3d");
            this._qGlobalVec3d.longitude = this.longitude;
            this._qGlobalVec3d.latitude = this.latitude;
            this._qGlobalVec3d.height = this.height;
            return this;
        }
    };
    
    
    
    // @factory Q3D.globalVec3d(a: Number, b: Number, c: Number): GlobalVec3d
    // 创建一个三维空间的经纬度坐标点，传入参数按经度、纬度、高度的顺序
    
    // @alternative
    // @factory Q3D.globalVec3d(coords: Array): GlobalVec3d
    // 传入参数可以采用数组方式： `[Number, Number, Number]` 
    
    // @alternative
    // @factory Q3D.globalVec3d(coords: Object): GlobalVec3d
    // 传入参数可以采用对象方式 `{longitude: Number, latitude: Number, height: Number}`
    // 或者原生的  QGlobalVec3d 对象
    Q3D.globalVec3d = function (a, b, c) {
    
        if (a instanceof Q3D.GlobalVec3d) {
            return a;
        }
        
        if (Q3D.Util.isArray(a) && typeof a[0] !== 'object') {		
            if (a.length === 3) {
                return new Q3D.GlobalVec3d(a[0], a[1], a[2]);
            }
            return null;
        }
        
        if (typeof a === 'object' && 'longitude' in a && 'latitude' in a && 'height' in a) {
            return new Q3D.GlobalVec3d(a.longitude, a.latitude, a.height);
        }   
        
        if  (arguments.length == 3 && typeof a === 'number' && typeof  b === 'number' && typeof c === 'number') {
            return new Q3D.GlobalVec3d(a, b, c);
        } 
        
        return new Q3D.GlobalVec3d(0, 0, 0);
    };
    // @method toGlobalVec3d(): GlobalVec3d
    // 逗号分隔的字符串与引擎值类型对象转换：
    // ```js
    // var gv3d = "121.343345, 31.023422, 10".toGlobalVec3d();
    // ``` 
    String.prototype.toGlobalVec3d = function () {
        try {
            return Q3D.globalVec3d(parseFloat(this.split(",")[0]), parseFloat(this.split(",")[1]), parseFloat(this.split(",")[2]));
        }
        catch (e) {
            return null;
        }
    }
    
    
    
    /* @class ColourValue
     * @aka Q3D.ColourValue
     *
     * 表示颜色值，传入参数按 r，g，b，a的顺序
     *
     * @example
     *
     * ```
     * var clr = Q3D.colourValue(1,0,1,1);
     * ```
     *
     * 其他的创建方式：
     *
     * ```
     * var clr = Q3D.colourValue([1,0,1,1]);
     * clr = Q3D.colourValue({r:1, g:0, b:1, a:1});
     * clr = Q3D.colourValue('#ffff00',0.5);
     * ```
     */
    
    Q3D.ColourValue = function (r, g, b, a) {
        if (!mapObj) {
            throw new Error('无效的引擎对象，引擎对象未初始化！');
        }
        if (isNaN(r) || isNaN(g) || isNaN(b) || isNaN(a)) {
            throw new Error('无效的QColourValue对象: (' + r + ', ' + g +  ', ' + b + ', ' + a + ')');
        }
        
        // @property r: Number
        // r 分量[0~1]
        this.r = +r;
        // @property g: Number
        // g 分量[0~1]
        this.g = +g;
        // @property b: Number
        // b 分量[0~1]
        this.b = +b;
        // @property a: Number
        // a 透明度[0~1]
        this.a = +a;
    
    };
    
    Q3D.ColourValue.prototype = {	
        //将一个数字转化成16进制字符串形式
        _toHex: function(num){
            return num<16?"0"+num.toString(16).toUpperCase() : num.toString(16).toUpperCase();
        },
        
         // @method get(): QColourValue
        // 返回对应的原生 QColourValue 对象    
         get: function() {
            this.update();
            return this._qColurValue ;
        },
        
        // @method toString(): String
        // 返回对象的字符串表示，常用于调试目的
        toString: function (precision) {
            return 'QColourValue(' +
                    Q3D.Util.formatNum(this.r, precision) + ', ' +
                    Q3D.Util.formatNum(this.g, precision) + ', ' +
                    Q3D.Util.formatNum(this.b, precision) + ', ' +
                    Q3D.Util.formatNum(this.a, precision) + ')';
        },
        
        
        // @method toWebColor(): String
        // 返回16进制颜色的字符串表示
        toWebColor: function () {
            return "#" + this._toHex(parseInt(this.r * 255)) + this._toHex(parseInt(this.g * 255)) + this._toHex(parseInt(this.b * 255));
        },
       
       // @method clone(): ColurValue
        // 克隆一个新的 `ColurValue` 对象
        clone: function () {
            return new Q3D.ColourValue(this.r, this.g, this.b, this.a);
        },
        
        // @method revise(): this
        // 修订 `ColurValue`  对象的颜色分量
        revise: function () {
            this.r = Math.pow(this.r, 1/2.2);
            this.g = Math.pow(this.g, 1/2.2);
            this.b = Math.pow(this.b, 1/2.2);
            return this;
        },
        
        // @method update(): this
        // 将属性值回写到原生 QColourValue 对象
        update: function () {   
            if (this._qColurValue == null)
                this._qColurValue = mapObj._map3d.createObject("QMap3DCtl.QColourValue");
            this._qColurValue.r = this.r;
            this._qColurValue.g = this.g;
            this._qColurValue.b = this.b;
            this._qColurValue.a = this.a;
            return this;
        }
    };
    
    
    
    // @factory Q3D.colourValue(a: Number, b: Number, c: Number, d: Number): ColourValue
    // 创建一个带有r，g，b，a分量的颜色值
    
    // @alternative
    // @factory Q3D.colourValue(rgba: Array): ColourValue
    // 传入参数可以采用数组方式： `[Number, Number, Number, Number]` 
    
    // @alternative
    // @factory Q3D.colourValue(rgba: Object): ColourValue
    // 传入参数可以采用对象方式 `{r: Number, g: Number, b: Number, a: Number}`
    // 或者原生的  QColourValue 对象
    
    // @alternative
    // @factory Q3D.colourValue(rgb: String, a: Number): ColourValue
    // 传入参数可以采用字符串和数值混合方式 
    Q3D.colourValue = function (a, b, c, d) {
    
        if (a instanceof Q3D.ColourValue) {
            return a;
        }
        
        if (Q3D.Util.isArray(a) && typeof a[0] !== 'object') {		
            if (a.length === 4) {
                return new Q3D.ColourValue(a[0], a[1], a[2], a[3]);
            }
            return null;
        }
        
        if (typeof a === 'object' && 'r' in a && 'g' in a && 'b' in a && 'a' in a) {
            return new Q3D.ColourValue(a.r, a.g, a.b, a.a);
        }
        
        if (arguments.length == 2 && typeof (arguments[0]) === "string" && !isNaN (arguments[1]) ) //只定义了a和b
        {
            var clrStr = a.indexOf("#") != -1 ? a.replace(/#/g, "") : a;
            var rVal = parseInt(clrStr.substr(0, 2), 16) / 255;
            var gVal = parseInt(clrStr.substr(2, 2), 16) / 255;
            var bVal = parseInt(clrStr.substr(4, 2), 16) / 255;
            return new Q3D.ColourValue(rVal, gVal, bVal, b);
        }
        
        if  (arguments.length == 4 && typeof a === 'number' && typeof  b === 'number' && typeof c === 'number' && typeof d === 'number') {
            return new Q3D.ColourValue(a, b, c, d);
        } 
        
        return new Q3D.ColourValue(0, 0, 0, 1);
    };
    // @method toColourValue(): ColourValue
    // 逗号分隔的字符串与引擎值类型对象转换：
    // ```js
    // var clr = "1,0,1".toColourValue();
    // ``` 
    String.prototype.toColourValue = function () {
        try {
            return Q3D.colourValue(this.toString(), 1);
        }
        catch (e) {
            return null;
        }
    }
    
    
    
    /* @class ArcVertex
     * @aka Q3D.ArcVertex
     *
     * 用于管道、 道路、 铁路等矢量对象的弧度坐标点（浮点类型）
     *
     * @example
     *
     * ```
     * var av = Q3D.arcVertex(50.5, 30.2, 100.5, 1.2, 10);
     * ```
     *
     * 其他的创建方式：
     *
     * ```
     * var av = Q3D.arcVertex([50.5, 30.2, 100.5, 1.2, 10]);
     * av = Q3D.arcVertex({x:50.5, y:30.2, z:100.5, r:1.2, d:10});
     * ```
     */
    
    Q3D.ArcVertex = function (x, y, z, r, d) {
        if (!mapObj) {
            throw new Error('无效的引擎对象，引擎对象未初始化！');
        }
        if (isNaN(x) || isNaN(y) || isNaN(z) || isNaN(r) || isNaN(d)) {
            throw new Error('无效的QArcVertex对象: (' + x + ', ' + y  + ', ' + z  + ', ' + r  + ', ' + d+ ')');
        }
        if (+r < 1.0 || +d < 0) {
            throw new Error('无效的QArcVertex对象: (' + x + ', ' + y  + ', ' + z  + ', ' + r  + ', ' + d+ ')');
        }  
        
        
        // @property x: Number
        // 坐标 x
        this.x = x;
        // @property y: Number
        // 坐标 y
        this.y = y;
        // @property z: Number
        // 坐标 z
        this.z = z;
        // @property r: Number
        // 拐弯半径 r，默认=1.0，要求>=1.0
        this.r = r;
        // @property d: Number
        //拐弯精度 d，默认=10°
        this.d = d;
    
    };
    
    Q3D.ArcVertex.prototype = {
                
        // @method get(): QArcVertex
        // 返回对应的原生 QArcVertex 对象
        get: function() {
            this.update();
            return this._qArcVertex ;
        },
        
        // @method getRadius(): Number
        // 返回拐弯半径
        getRadius: function() {
            return this.r ;
        },
        
        // @method getdAngle(): Number
        // 返回弯曲度
        getdAngle: function() {
            return this.d ;
        },
        
        // @method getPos(): QVector3
        // 返回坐标
        getPos: function() {
            return  Q3D.vector3(this.x, this.y, this.z).get() ;
        },
        
        // @method equals(otherArcVertex: ArcVertex, maxMargin?: Number): Boolean
        // 在给定的精度范围内比较两个 `ArcVertex` 对象是否相等
        equals: function (obj, maxMargin) {
            if (!obj) { return false; }
    
            var margin = Math.max(
                    Math.abs(this.x - obj.x),
                    Math.abs(this.y - obj.y),
                    Math.abs(this.z - obj.z),
                    Math.abs(this.r - obj.r),
                    Math.abs(this.d - obj.d));
    
            return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
        },
    
        // @method toString(): String
        // 返回对象的字符串表示，常用于调试目的
        toString: function (precision) {
            return 'QArcVertex(' +
                    Q3D.Util.formatNum(this.x, precision) + ', ' +
                    Q3D.Util.formatNum(this.y, precision) + ', ' +
                    Q3D.Util.formatNum(this.z, precision) + ', ' +
                    Q3D.Util.formatNum(this.r, precision) + ', ' +
                    Q3D.Util.formatNum(this.d, precision) + ')';
        },	
        
        // @method add(otherArcVertex: ArcVertex): this
        // 两个 `ArcVertex` 对象相加
        add: function (other) {
            if (other)
            {
                this.x += other.x;
                this.y += other.y;    
                this.z += other.z;        
            }
            return this;
        },
    
        // @method subtract(otherArcVertex: ArcVertex): this
        // 两个 `ArcVertex` 对象相减
        subtract: function (other) {
            if (other)
            {
                this.x -= other.x;
                this.y -= other.y;    
                this.z -= other.z;               
            }
            return this;
        },
        
        // @method multiply(otherArcVertex: ArcVertex): this
        // 两个 `ArcVertex` 对象相乘
        multiply: function (other) {
            if (other)
            {
                this.x *= other.x;
                this.y *= other.y;    
                this.z *= other.z;        
            }
            return this;
        },
        
        // @method divide(otherArcVertex: ArcVertex): this
        // 两个 `ArcVertex` 对象相除
        divide: function (other) {
            if (other)
            {
                if (other.x == 0 || other.y == 0 || other.z == 0)
                    throw new Error('除数为0');
    
                this.x /= other.x;
                this.y /= other.y;    
                this.z /= other.z;       
    
            }
            return this;
        },
       
        // @method clone(): ArcVertex
        // 克隆一个新的 `ArcVertex` 对象
        clone: function () {
            return new Q3D.arcVertex(this.x, this.y, this.z, this.r, this.d);
        },   
        
        // @method update(): this
        // 将属性值回写到原生 QArcVertex 对象
        update: function () {     
            if (this._qArcVertex == null)
                this._qArcVertex = mapObj._map3d.createObject("QMap3DCtl.QArcVertex");
            this._qArcVertex.setPos(Q3D.vector3(this.x, this.y, this.z).get());
            this._qArcVertex.setRadius(this.r);
            this._qArcVertex.setdAngle(this.d);    
    
            return this;
        }
    };
    
    
    
    // @factory Q3D.arcVertex(a: Number, b: Number, c: Number, d: Number, e: Number): ArcVertex
    // 创建一个三维弧度坐标点
    
    // @alternative
    // @factory Q3D.arcVertex(coords: Array): ArcVertex
    // 传入参数可以采用数组方式： `[Number, Number, Number, Number, Number]` 
    
    // @alternative
    // @factory Q3D.arcVertex(coords: Object): ArcVertex
    // 传入参数可以采用对象方式 `{x: Number, y: Number, z: Number, r: Number, d: Number}`
    
    Q3D.arcVertex = function (a, b, c, d, e) {
    
        if (a instanceof Q3D.ArcVertex) {
            return a; //直接返回传入对象的引用
        }
        
        if (Q3D.Util.isArray(a) && typeof a[0] !== 'object') {		
            if (a.length === 5) {
                return new Q3D.ArcVertex(a[0], a[1], a[2], a[3], a[4]);
            }
            return null;
        }
        
        if (typeof a === 'object' && 'x' in a && 'y' in a && 'z' in a && 'r' in a && 'd' in a) {
            return new Q3D.ArcVertex(a.x, a.y, a.z, a.r, a.d);
        }
        
        if (arguments.length < 5) {
            //throw new Error('无效的 QVector2 输入参数' );
            return null;
        }
        return new Q3D.ArcVertex(a, b, c, d, e);
    };
    
    // @method toArcVertex(): ArcVertex
    // 逗号分隔的字符串与引擎值类型对象转换：
    // ```js
    // var av= "50.5, 30.2, 100.5, 1.2, 10".toArcVertex();
    // ``` 
    String.prototype.toArcVertex = function () {
        try {
            return Q3D.arcVertex(parseFloat(this.split(",")[0]), parseFloat(this.split(",")[1]), parseFloat(this.split(",")[2]), parseFloat(this.split(",")[3]), parseFloat(this.split(",")[4]));
        }
        catch (e) {
            return null;
        }
    }
    
    
    
      /* @class GlobalCamera
     * @aka Q3D.GlobalCamera
     *
     * 表示全局摄像机对象，可用于普通的飞行操作
     *
     * @example
     *
     * ```
     * var gc = Q3D.globalCamera();
     * ``` 
     */
    Q3D.GlobalCamera = function () {    
        if (!mapObj) {
            throw new Error('无效的引擎对象，引擎对象未初始化！');
        }
        this._gc = mapObj._map3d.getWorldManager().getMainCamera(0);
    };
    
    Q3D.GlobalCamera.prototype = {
        
        //创建包围盒：传入场景的aabb参数,相对于场景中心点
        _addBox: function(areaName, boxName, aabbMin, aabbMax)  {
            if (mapObj.getSceneNode(areaName, boxName) != null)
                mapObj.destroySceneNode(areaName, boxName);
           
           var lineArray = [];
            lineArray.push(Q3D.vector3(aabbMin.x, aabbMin.y, aabbMin.z));
            lineArray.push(Q3D.vector3(aabbMax.x, aabbMin.y, aabbMin.z));
            lineArray.push(Q3D.vector3(aabbMax.x, aabbMin.y, aabbMax.z));
            lineArray.push(Q3D.vector3(aabbMin.x, aabbMin.y, aabbMax.z));
            return mapObj.createPrism(areaName + "/" + boxName, {
                Points: lineArray,
                WallAlpha: 0,
                CeilAlpha: 0,
                Height: aabbMax.y - aabbMin.y ,
            });              
        },	
        
        // @method get(): QGlobalCamera
        // 返回对应的原生 QGlobalCamera 对象    
        get:function() {
            return this._gc;
        },
        
        // @method getAbsPos(): QVector3d
        //获取主摄像机当前位置，用原生的 QVector3d 原生对象表示
        getAbsPos: function() {
            return this._gc.getAbsPos(); 
        },
        
        // @method getOrientation(): QVector3   
        //获取主摄像机当前角度，用原生的 QVector3 原生对象表示
        getOrientation: function() {
            return this._gc.getOrientation(Q3D.Enums.orientationType.World); 
        },    
        
        // @method setFOVy(fovVal: Number): this   
        //设置主摄像机视角大小，一般为45°
        setFOVy: function(fovVal) {
            this._gc.setFOVy(fovVal);
            return this;
        },    
        
        // @method setClipDistance(nearDist: Number, farDist: Number): this   
        //设置主摄像机近、远截面距离
        setClipDistance: function(nearDist, farDist) {
            this._gc.setNearClipDistance(nearDist);
            this._gc.setFarClipDistance(farDist);
            return this;
        },
        
        // @method getCameraInfo(): Array   
        //获取主摄像机视角大小和截面距离参数
        getCameraInfo: function() {
            var fovy = parseInt(this._gc.getFOVy());
            var nearDist = this._gc.getNearClipDistance();
            var farDist = this._gc.getFarClipDistance();
            return [fovy,nearDist, farDist]; 
        },
            
        // @method flyTo(v3d: Vector3d, v3?: Vector3, flyTime?: Number, fn?: Function): this   
        // 按给定角度飞行到给定坐标位置，可以设置飞行动作结束后的回调函数
        flyTo: function(v3d, v3, flyTime, fn) {
            mapObj.off("onCameraFlyToEnd");
            if (fn && Q3D.Util.isFunction(fn)) {
                mapObj._map3d.setFlyToListener(this._gc);            
                mapObj.on("onCameraFlyToEnd", fn);
            }
            v3 = v3 || Q3D.vector3(this.getOrientation());
            flyTime = Q3D.Util.isNumber(flyTime) ? flyTime : 0;
            
            this._gc.flyTo(v3d.get(), v3.get(), flyTime);
            return this;
        },
        
        // @method flyToByDistance(targetPosV3d: Vector3d, distToTargetPos?: Number, viewDirV3?: Vector3, flyTime?: Number, fn?: Function): this
        // 按给定角度飞行到某一位置，该位置与给定坐标位置的距离为指定值，可以设置飞行动作结束后的回调函数
        flyToByDistance: function(targetPosV3d, distToTargetPos, viewDirV3, flyTime, fn) {
            viewDirV3 = viewDirV3 || Q3D.vector3(this.getOrientation());
            distToTargetPos = Q3D.Util.isNumber(distToTargetPos) ? distToTargetPos : 20;
            var v3 = mapObj._map3d.getMath().eulerToDirection(viewDirV3.get());
            var eyePosV3d = Q3D.vector3d(v3.x * distToTargetPos + targetPosV3d.x, v3.y * distToTargetPos + targetPosV3d.y, v3.z * distToTargetPos + targetPosV3d.z);
            this.flyTo(eyePosV3d, viewDirV3, flyTime, fn);		
        },	
        
        // @method flyToByClick(domName: String, clickPosV3d: Vector3d, flyTime?: Number, fn?: Function): this
        // 保持当前摄像机角度和高度飞到给定目标位置，并使得该坐标位于窗口中心位置。可以设置飞行动作结束后的回调函数
        flyToByClick: function(domName, clickPosV3d, flyTime, fn) {
            var w = document.getElementById(domName).clientWidth;
            var h = document.getElementById(domName).clientHeight;
            var v2_enter = Q3D.vector2I(w / 2, h / 2);//容器中心的屏幕坐标
            var v3d_oc = Q3D.vector3d(this._gc.getCrossCoord(v2_enter.get(),-1));//页面中心的交点坐标
            var v3 = Q3D.vector3(this.getOrientation()); //相机角度
            var v3d_cam = Q3D.vector3d(this.getAbsPos());//相机位置
            var v3d_diff = v3d_cam.clone().subtract(v3d_oc);
            var v3d_eyepos = clickPosV3d.clone().add(v3d_diff);
            this.flyTo(v3d_eyepos, v3, flyTime, fn);	     
        },	
        
        // @method flyToPos(lng: Number, lat: Number, hgt?: Number, pitch?: Number, yaw?: Number, flyTime?: Number, fn?: Function): this   
        // 飞行到给定经度、纬度、高度、俯仰角和偏航角对应的位置，可以设置飞行动作结束后的回调函数
        //  这里俯角[0,-90°]，仰角[0,90°]，偏航角正北为0°，逆时针方向旋转
        flyToPos: function(lng, lat, hgt, pitch, yaw, flyTime, fn) {
            mapObj.off("onCameraFlyToEnd");
            if (fn && Q3D.Util.isFunction(fn)) {
                mapObj._map3d.setFlyToListener(this._gc);            
                mapObj.on("onCameraFlyToEnd", fn);
            }
    
            hgt = Q3D.Util.isNumber(hgt) ? hgt : 50;
            pitch = Q3D.Util.isNumber(pitch) ? pitch : -45;
            yaw = Q3D.Util.isNumber(yaw) ? yaw : 0;
            flyTime = Q3D.Util.isNumber(flyTime) ? flyTime : 0;
                    
            var v3d = Q3D.globalVec3d(lng, lat, hgt).toGlobalPos();
            var v3 = this._gc.makeRotByYawPitch(pitch, yaw);        
            this._gc.flyTo(v3d, v3, flyTime);
            
            return this;
        },
        
        // @method flyToNode(node: QSceneNode, v3?: Vector3, flyTime?: Number, fn?: Function): this    
        //飞行到给定节点前，方向和角度自动调整，可以设置飞行动作结束后的回调函数
        //可以在场景编辑器中设置节点的固定观察位置和视角
        flyToNode: function(node, v3, flyTime, fn) {
            mapObj.off("onCameraFlyToEnd");
            if (fn && Q3D.Util.isFunction(fn)) {
                mapObj._map3d.setFlyToListener(this._gc);            
                mapObj.on("onCameraFlyToEnd", fn);
            }
            v3 = v3 || Q3D.vector3(this.getOrientation());
            flyTime = Q3D.Util.isNumber(flyTime) ? flyTime : 0;
            this._gc.flyToNode(node, v3.get(), flyTime);
            return this;
        },
        
        // @method flyToAxisView(node: QSceneNode, diff?: Number, flyTime?: Number, fn?: Function): this    
        //按轴视图方式飞行到给定节点前，可指定投射到坐标轴上的差值，可以设置飞行动作结束后的回调函数
        flyToAxisView: function(node, diff, flyTime, fn) {
            mapObj.off("onCameraFlyToEnd");
            if (fn && Q3D.Util.isFunction(fn)) {
                mapObj._map3d.setFlyToListener(this._gc);            
                mapObj.on("onCameraFlyToEnd", fn);
            }
            
            diff = Q3D.Util.isNumber(diff) ? diff : 10;
            flyTime = Q3D.Util.isNumber(flyTime) ? flyTime : 0;
      
            var targetPos = Q3D.vector3d(node.getAbsPos());
            var eyePos = targetPos.clone().add(Q3D.vector3d(diff,diff,diff));
            this._gc.flyToViaLookAt(eyePos.get(), targetPos.get(), Q3D.vector3(0,1,0).get(), flyTime);
                    
            return this;
        },
        
        // @method flyToCamView(areaName: String, aabbMin: Vector3, aabbMax: Vector3, camViewType?: Q3D.Enums.camViewType, flyTime?: Number, fn?: Function): this   
        //飞行到给定包围盒范围的不同固定视角，包括正视图、俯视图、侧视图、轴侧视图等，可以设置飞行动作结束后的回调函数    
        flyToCamView: function(areaName, aabbMin, aabbMax, camViewType, flyTime, fn) {
            mapObj.off("onCameraFlyToEnd");
            if (fn && Q3D.Util.isFunction(fn)) {
                mapObj._map3d.setFlyToListener(this._gc);            
                mapObj.on("onCameraFlyToEnd", fn);
            }
            
            camViewType = camViewType || Q3D.Enums.camViewType.Front; 
            flyTime = Q3D.Util.isNumber(flyTime) ? flyTime : 0;
            
            //添加不可见包围盒
            this._addBox(areaName, "#Box", aabbMin, aabbMax);
            var _wm = mapObj._map3d.getWorldManager();
            var _am = _wm.getArea(areaName);
            var nodeList = _wm.createEmptySceneNodeList();
            nodeList.addNode(mapObj.getSceneNode(areaName, "#Box"));     
            //计算摄像机位置
            var campos = null, direciton = null;
            switch(camViewType) {
                case Q3D.Enums.camViewType.Front:
                    direciton = Q3D.vector3(0,0,0).get();
                    campos = this._gc.calcFullVisiblePos(nodeList,direciton,0);
                    this._gc.flyTo(campos, direciton, flyTime); 
                    break;
                case Q3D.Enums.camViewType.Top:
                    direciton = Q3D.vector3(-90,0,0).get();
                    campos = this._gc.calcFullVisiblePos(nodeList,direciton,0);
                    this._gc.flyTo(campos, direciton, flyTime);    
                    break;
                case Q3D.Enums.camViewType.Side:
                    direciton = Q3D.vector3(0,90,0).get();
                    campos = this._gc.calcFullVisiblePos(nodeList,direciton,0);
                    this._gc.flyTo(campos, direciton, flyTime);   
                    break;
                case Q3D.Enums.camViewType.Axis:
                    var q3d = _am.toGlobalPos(aabbMin.get());
                    var minPt = Q3D.vector3d(q3d);
                    q3d = _am.toGlobalPos(aabbMax.get());
                    var maxPt = Q3D.vector3d(q3d);
                    var sub = maxPt.subtract(minPt);
                    var diffVec = Q3D.vector3d(sub.x, sub.y, sub.z).multiply(Q3D.vector3d(1.2,1.2,1.2));
                    var eyePos = minPt.clone().add(diffVec);
                    this._gc.flyToViaLookAt(eyePos.get(), minPt.get(), Q3D.vector3(0,1,0).get(), flyTime);
                    break;                
            }                 
            nodeList.release();
            mapObj.destroySceneNode(areaName, "#Box");
            return this;
        },    
        
        // @method flyToCamViewEx(targetPos: Vector3d, camViewType?: Q3D.Enums.camViewType, diff?: Number, flyTime?: Number, fn?: Function): this   
        //按摄像机到观察点给定距离方式飞行，可以设置飞行动作结束后的回调函数
        flyToCamViewEx: function(targetPos, camViewType, diff, flyTime, fn) {
            mapObj.off("onCameraFlyToEnd");
            if (fn && Q3D.Util.isFunction(fn)) {
                mapObj._map3d.setFlyToListener(this._gc);            
                mapObj.on("onCameraFlyToEnd", fn);
            }
            camViewType = camViewType || Q3D.Enums.camViewType.Front; 
            diff = Q3D.Util.isNumber(diff) ? diff : 10;
            flyTime = Q3D.Util.isNumber(flyTime) ? flyTime : 0;
            
            //计算摄像机位置
            var spotPos = targetPos.clone();
            var eyePos = null;
            switch(camViewType) {
                case Q3D.Enums.camViewType.Front:
                    eyePos = spotPos.clone().add(Q3D.vector3d(0,0,diff));
                    this._gc.flyToViaLookAt(eyePos.get(), spotPos.get(), Q3D.vector3(0,1,0).get(), flyTime);
                    break;
                case Q3D.Enums.camViewType.Top:
                    eyePos = spotPos.clone().add(Q3D.vector3d(0,diff,0));
                    this._gc.flyToViaLookAt(eyePos.get(), spotPos.get(), Q3D.vector3(0,0,1).get(), flyTime);
                    break;
                case Q3D.Enums.camViewType.Side:
                    eyePos = spotPos.clone().add(Q3D.vector3d(diff,0,0));
                    this._gc.flyToViaLookAt(eyePos.get(), spotPos.get(), Q3D.vector3(0,1,0).get(), flyTime);  
                    break;
                case Q3D.Enums.camViewType.Axis:
                    eyePos = spotPos.clone().add(Q3D.vector3d(diff/Math.sqrt(2),diff/Math.sqrt(2),diff/Math.sqrt(2)));
                    this._gc.flyToViaLookAt(eyePos.get(), spotPos.get(), Q3D.vector3(0,1,0).get(), flyTime);  
                    break;                
            }
                    
            return this;
        },    
        
        // @method flyToBy3Steps(v3d: Vector3d, v3: Vector3, flyTime: Number Or Array, flyHeight: Number, fn?: Function): this   
        // 分三个步骤飞行到给定角度和给定坐标位置: step 1: 从当前位置垂直飞行到指定高度； Step 2: 水平飞行到目标位置上空； Step 3: 垂直飞行到目标位置，同时调整方向为目标角度
        // flyTime为number时，为总时间, 每个步骤的时间按照距离长短平均分配； flyTime为Array时，为各个步骤的用时，单位为秒
        flyToBy3Steps: function(v3d, v3, flyTime, flyHeight, fn) {
            var startPosV3d = Q3D.vector3d(this.getAbsPos());
            
            mapObj._flyToByStepData = mapObj._flyToByStepData || {};
            var flyHeight = Q3D.Util.isNumber(flyHeight) ? flyHeight : 1000;
            
            if(Q3D.Util.isArray(flyTime)) {
                if(flyTime.length !== 3) {
                    console.log("飞行时间参数个数不正确");
                    return;
                }
                mapObj._flyToByStepData._times = flyTime;
            }
            else {
                var distanceForStep1 = Math.abs(startPosV3d.y - flyHeight),
                distanceForStep2 = Math.sqrt((v3d.x - startPosV3d.x) * (v3d.x - startPosV3d.x) + (v3d.z - startPosV3d.z) * (v3d.z - startPosV3d.z)),
                distanceForStep3 = Math.abs(v3d.y - flyHeight),
                totalDist = distanceForStep1 + distanceForStep2 + distanceForStep3;
                
                if(totalDist < 1.0E-9 || flyTime < 0.001) {
                    this.flyTo(v3d, v3, flyTime, fn);
                    return this;
                }
                mapObj._flyToByStepData._times = [Math.max(distanceForStep1/totalDist * flyTime, 0.5), Math.max(distanceForStep2/totalDist * flyTime, 0.5), Math.max(distanceForStep3/totalDist * flyTime, 0.5)];
            }
                
            mapObj._flyToByStepData._targetPosV3d = v3d;
            mapObj._flyToByStepData._targetOri = v3;
            mapObj._flyToByStepData._fn = fn;
            
            startPosV3d.y = flyHeight;
            var yaw = this.get().fetchRotYaw();
            var oriForStep1 = Q3D.vector3(this.get().makeRotByYawPitch(-30, yaw));
            this.flyTo(startPosV3d, oriForStep1, mapObj._flyToByStepData._times[0], function(){
                setTimeout(function(){												
                    var mainCamera = Q3D.globalCamera(),
                        currPosV3d = mainCamera.getAbsPos(),
                        targetPosV3d = mapObj._flyToByStepData._targetPosV3d,					
                        targetPosV3dForStep2 = Q3D.vector3d(targetPosV3d.x, currPosV3d.y, targetPosV3d.z);
                        
                    mainCamera.flyTo(targetPosV3dForStep2, Q3D.vector3(mainCamera.getOrientation()), mapObj._flyToByStepData._times[1], function(){										
                        setTimeout(function(){
                            var mainCamera = Q3D.globalCamera(),
                                targetPosV3d = mapObj._flyToByStepData._targetPosV3d,
                                targetOri = mapObj._flyToByStepData._targetOri;
                                        
                            mainCamera.flyTo(targetPosV3d, targetOri, mapObj._flyToByStepData._times[2], function(){
                                var fn = mapObj._flyToByStepData._fn;
                                if (fn && Q3D.Util.isFunction(fn)) {
                                    fn();
                                }
                                mapObj.off("onCameraFlyToEnd");
                                delete mapObj._flyToByStepData;
                            });					
                        }, 100);															
                    });																				
                }, 100);
            });			
            return this;
        },
            
        // @method flyToBy4Steps(v3d: Vector3d, v3: Vector3, flyTime: Number Or Array, flyHeight: Number, fn?: Function): this   
        // 分四个步骤飞行到给定角度和给定坐标位置: step 1: 从当前位置垂直飞行到指定高度； Step 2: 水平飞行到目标位置上空； Step 3: 垂直飞行到目标位置； Step 4: 原地调整方向为目标角度
        // flyTime为number时，为总时间, 每个步骤的时间按照距离长短平均分配； flyTime为Array时，为各个步骤的用时，单位为秒
        flyToBy4Steps: function(v3d, v3, flyTime, flyHeight, fn) {
            var startPosV3d = Q3D.vector3d(this.getAbsPos());
            
            mapObj._flyToByStepData = mapObj._flyToByStepData || {};
            var flyHeight = Q3D.Util.isNumber(flyHeight) ? flyHeight : 1000;
            
            if(Q3D.Util.isArray(flyTime)) {
                if(flyTime.length !== 4) {
                    console.log("飞行时间参数个数不正确");
                    return;
                }
                mapObj._flyToByStepData._times = flyTime;
            }
            else {
                var distanceForStep1 = Math.abs(startPosV3d.y - flyHeight),
                    distanceForStep2 = Math.sqrt((v3d.x - startPosV3d.x) * (v3d.x - startPosV3d.x) + (v3d.z - startPosV3d.z) * (v3d.z - startPosV3d.z)),
                    distanceForStep3 = Math.abs(v3d.y - flyHeight),
                    minDist = Math.min(distanceForStep1, distanceForStep2, distanceForStep3),
                    totalDist = distanceForStep1 + distanceForStep2 + distanceForStep3 + minDist; //step4 没有位移距离，用前面三段中的最小距离代替
                
                if(totalDist < 1.0E-9 || flyTime < 0.001) {
                    this.flyTo(v3d, v3, flyTime, fn);
                    return this;
                }
                mapObj._flyToByStepData._times = [Math.max(distanceForStep1/totalDist * flyTime, 0.5), Math.max(distanceForStep2/totalDist * flyTime, 0.5), Math.max(distanceForStep3/totalDist * flyTime, 0.5), Math.max(minDist/totalDist * flyTime, 0.5)];	
            }
                    
            mapObj._flyToByStepData._targetPosV3d = v3d;
            mapObj._flyToByStepData._targetOri = v3;
            mapObj._flyToByStepData._fn = fn;
            
            startPosV3d.y = flyHeight;
            var yaw = this.get().fetchRotYaw();
            var oriForStep1 = Q3D.vector3(this.get().makeRotByYawPitch(-30, yaw));
            this.flyTo(startPosV3d, oriForStep1, mapObj._flyToByStepData._times[0], function(){
                setTimeout(function(){
                    var mainCamera = Q3D.globalCamera(),
                        currPosV3d = mainCamera.getAbsPos(),
                        targetPosV3d = mapObj._flyToByStepData._targetPosV3d,					
                        targetPosV3dForStep2 = Q3D.vector3d(targetPosV3d.x, currPosV3d.y, targetPosV3d.z);
                    mainCamera.flyTo(targetPosV3dForStep2, Q3D.vector3(mainCamera.getOrientation()), mapObj._flyToByStepData._times[1], function(){
                        setTimeout(function(){
                            var mainCamera = Q3D.globalCamera(),
                                targetPosV3d = mapObj._flyToByStepData._targetPosV3d;					
                            mainCamera.flyTo(targetPosV3d, Q3D.vector3(mainCamera.getOrientation()), mapObj._flyToByStepData._times[2], function(){	
                                setTimeout(function(){
                                    var mainCamera = Q3D.globalCamera(),
                                        targetPosV3d = mapObj._flyToByStepData._targetPosV3d,
                                        targetOri = mapObj._flyToByStepData._targetOri;
    
                                        mainCamera.flyTo(targetPosV3d, targetOri, mapObj._flyToByStepData._times[3], function(){
                                            var fn = mapObj._flyToByStepData._fn;
                                            if (fn && Q3D.Util.isFunction(fn)) {
                                                fn();
                                            }
                                            mapObj.off("onCameraFlyToEnd");
                                            delete mapObj._flyToByStepData;
                                        });									
                                }, 100);
                            });
                        }, 100);
                    });
                }, 100);
            });
                
            return this;
        },	
        
        // @method flyToMakeSureVisible(sceneNodeNameArray: Array, viewDirV3?: Vector3, offsetLen?:Number, flyTime: Number, fn?: Function): this   
        // 飞行到某一位置，使得所有sceneNodeNameArray中的节点都在视口范围内，可以设置飞行动作结束后的回调函数
        // 参数viewDirV3为null，自动取视角垂直往下
        flyToMakeSureVisible: function(sceneNodeArray, viewDirV3, offsetLen, flyTime, fn) {
            
            var sNodeList = mapObj._map3d.getWorldManager().createEmptySceneNodeList();
            for(var i = 0; i < sceneNodeArray.length; ++i) {
                sNodeList.addNode(mapObj.getSceneNode(sceneNodeArray[i]));
            }
            
            var gCamera = this._gc;
            offsetLen = Q3D.Util.isNumber(offsetLen) ? offsetLen : 0;		
            
            //当前主摄像机视角
            var  currViewDirV3 =  !viewDirV3 ? Q3D.vector3(-90,0,0): viewDirV3;	//视角垂直往下
            //这里的offsetLen是在计算得到的位置基础上进行距离叠加
            var  currEyePosV3d = gCamera.calcFullVisiblePos(sNodeList, currViewDirV3.get(), offsetLen);
            this.flyTo(Q3D.vector3d(currEyePosV3d), currViewDirV3, flyTime, fn);
            sNodeList.release();
            
            return this;
        },
        
        // @method startCircleFly(eyePos: Vector3d, targetPos: Vector3d, timePerCircle?: Number, rounds?:Number, isLoop?:Boolean, fn?: Function): this   
        // 围绕固定点飞行（rounds为负数逆时针方向旋转），可以设置飞行动作结束后的回调函数
        startCircleFly: function(eyePos, targetPos, timePerCircle, rounds, isLoop, fn) {
            mapObj.off("onCameraCircleAniEnd");
            if (fn && Q3D.Util.isFunction(fn)) {
                mapObj._map3d.setFlyToListener(this._gc);            
                mapObj.on("onCameraCircleAniEnd", fn);
            }
            timePerCircle = Q3D.Util.isNumber(timePerCircle) ? timePerCircle : 1.0;
            rounds = Q3D.Util.isNumber(rounds) ? rounds : 1;
            isLoop = isLoop ? 1 : 0;      
            this._gc.playCircleAni(eyePos.get(), targetPos.get(), timePerCircle * Math.abs(rounds), rounds, isLoop);
            return this;
        },
        // @method stopCircleFly(): this   
        // 停止围绕飞行
        stopCircleFly: function() {
            this._gc.stopCircleAni();
            return this;
        },
        
        // @method startCircleFlyEx(eyePos: Vector3d, targetPos: Vector3d, timePerCircle?: Number, rounds?:Number, isLoop?:Boolean): MovieClipInstance   
        // 围绕固定点自定义飞行（rounds为负数逆时针方向旋转），返回动画剪辑对象封装实例
        startCircleFlyEx: function(eyePos, targetPos, timePerCircle, rounds, isLoop) {
            
            timePerCircle = Q3D.Util.isNumber(timePerCircle) ? timePerCircle : 1.0;
            rounds = Q3D.Util.isNumber(rounds) ? rounds : 1;
            isLoop = isLoop ? 1 : 0;      
            var aniName = "circlefly_" + this._gc.getFullName() + "_movieclip";
            var instName = "circlefly_" + this._gc.getFullName() + "_movieclip_inst";       
            
            var _mc = Q3D.movieClip(aniName,50);
            var _mcInst = Q3D.movieClipInstance(instName,_mc);
            
            var mc = _mc.get();
            var actor = mc.addIActor("circlefly");
            var track = actor.addITrack( Q3D.Enums.actorTrackType.TransformMoveAbs, Q3D.Enums.actorKeyType.VecCircle ).asVecCircleTrack();
            track.setCircleCenter( targetPos.get() );
            track.setStartPos( eyePos.get() );
            track.lockOrientation( 1 );
            track.setBeginFrame( 0 );
            track.setFrames( timePerCircle * Math.abs(rounds) * 50 );
            track.setRounds( rounds );
            
            _mcInst.get().setPlayer( "circlefly", Q3D.Enums.playerType.Node, this._gc.getFullName()); 
            _mcInst.get().setLoop(isLoop);
            return _mcInst;
        },
        
        // @method stopCircleFlyEx(): this   
        // 停止自定义围绕飞行
        stopCircleFlyEx: function() {
            var _wm = mapObj._map3d.getWorldManager();
            var _mcInst = _wm.getMovieClipInstance("circlefly_" + this._gc.getFullName() + "_movieclip_inst");
            if (_mcInst) {
                _mcInst.stop();
                _mcInst.gotoFrame(0);
                var _mcName = _mcInst.getMovieClipCName();
                _wm.destroyMovieClipInstance(_mcInst.getCName());            
                _wm.destroyMovieClip(_mcName);       
            }        
            return this;
        },
          
        // @method onCameraUpdate(enabled: Boolean, fn?: Function, interval?: Number): this   
        // 绑定摄像机更新事件，其中interval为每次更新调用时间间隔
        onCameraUpdate: function(enabled, fn, interval) {
            if (fn && !Q3D.Util.isFunction(fn)) {
                throw new Error('无效的回调函数');
            }
            if (enabled) {
                mapObj._map3d.setCameraListener(this._gc);         
                if(!mapObj._lastCameraUpdateTime) {
                    mapObj._lastCameraUpdateTime = 0;
                    mapObj._cbFn = fn;
                    mapObj._interval = interval;
                   }   
                mapObj.on("onCameraUpdate", function() {  
                    var now = new Date().getTime();
                    if(now - mapObj._lastCameraUpdateTime <= mapObj._interval) {
                          return;
                    }
                    mapObj._lastCameraUpdateTime = now;
                    if (Q3D.Util.isDefined(mapObj._cbFn)) mapObj._cbFn();  
                });            
                
            } else {
                mapObj._map3d.removeCameraListener(this._gc);             
                mapObj.off("onCameraUpdate",fn);
                delete mapObj._lastCameraUpdateTime;
                delete mapObj._cbFn;
                delete mapObj._interval;
            }   
            return this;
        },  
        
        // @method calRelativePos(nodePath: String): QVector3   
        // 计算当前主摄像机相对于目标节点的位置。如果只输入一个参数，该参数必须可表示节点的完整信息
        calRelativePos: function(nodePath) {
            var relativePos = mapObj.getSceneNode(nodePath).toLocalPos(this.getAbsPos());
            console.log("当前主摄像机相对于目标节点的位置: " + relativePos.x + "," + relativePos.y + "," + relativePos.z);
            return relativePos;
        },
    };
    // @factory Q3D.globalCamera(): GlobalCamera
    // 获取引擎的全局摄像机对象
    Q3D.globalCamera = function () {
        return new Q3D.GlobalCamera();
    };
    
    
    
    
    /* @class InputManager
     * @aka Q3D.InputManager
     *
     * 表示操作管理器对象，可用于设置惯性、俯仰角、默认平面、定位器、限制区域；调节缩放、漫游的移动速度等
     *
     * @example
     *
     * ```
     * var im = Q3D.inputManager();
     * ```
     */
    Q3D.InputManager = function () {
        if (!mapObj) {
            throw new Error('无效的引擎对象，引擎对象未初始化！');
        }
        this._im = mapObj._map3d.getInputManager();
    };
    
    Q3D.InputManager.prototype = {
    
        // @method get(): QInputManager
        // 返回对应的原生 QInputManager 对象
        get: function () {
            return this._im;
        },
    
        // @method setLocator(enabled: Boolean): this
        // 定位器显示开关
        setLocator: function (enabled) {
            if (enabled) {
                this._im.showLocator();
            } else {
                this._im.hideLocator();
            }
            return this;
        },
        
        // @method setInertia(enabled: Boolean, duration: Number): this
        // 设置惯性和惯性时间(默认1s)
        setInertia: function (enabled, duration) {
            if (enabled) {
                this._im.enableInertia();
                this._im.setInertiaDuration(isNaN(duration) ? 1 : duration);
            } else {
                this._im.disableInertia();
            }
            return this;
        },
        
        // @method setPitch(enabled: Boolean, range: Array): this
        // 设置俯仰和俯仰范围(默认[-90,+90])
        setPitch: function (enabled, range) {
            if (enabled) {
                var oldpitch = Q3D.globalCamera().get().fetchRotPitch();
                this._im.enablePitch();
                if (Q3D.Util.isArray(range) && range.length === 2) {
                    range.sort(function(a,b){return a>b?1:-1});//从小到大排序
                    range[0] = Math.max(range[0] , -90);
                    range[1] = Math.min(range[1] , +90);
                    var newpitch = oldpitch;
                    if(parseInt(range[0]) == parseInt(range[1])) {
                        newpitch = range[0];
                    } else {
                        if (oldpitch < range[0])
                            newpitch = range[0];
                        else  {
                            if (oldpitch > range[1])
                                newpitch = range[1];
                        }     
                    }             
                    var yaw = Q3D.globalCamera().get().fetchRotYaw();
                    var ori = Q3D.globalCamera().get().makeRotByYawPitch(newpitch, yaw);
                    var campos = Q3D.globalCamera().getAbsPos();
                    Q3D.globalCamera().get().flyTo(campos, ori, 0.5); 
                    this._im.setPitchRange(range[0], range[1]);
                } else {
                    this._im.setPitchRange(-90, +90);
                }
    
            } else {
                this._im.disablePitch();
            }
            return this;
        },
        
        // @method setDefaultPlaneHeight(height: Number): this
        // 设置默认平面高度(默认0m)
        setDefaultPlaneHeight: function (height) {
            this._im.setActionBaseplaneHeight(isNaN(height) ? 0 : height);
            return this;
        },
        
        // @method setDynamicSpeed(scaleSpd: Number, rambleSpd: Number): this
        // 设置缩放（默认=0.2）和漫游的动态速度（默认=1.0）
        setDynamicSpeed: function (scaleSpd, rambleSpd) {
            this._im.sendActionMsg(Q3D.Enums.actionType.SCALED_SCREEN, Q3D.Enums.actionMsg.SET_SCALE_DYNAMICSPEED, 0, isNaN(scaleSpd) ? 0.2 : scaleSpd);
            this._im.sendActionMsg(Q3D.Enums.actionType.RAMBLE_KEEPORI, Q3D.Enums.actionMsg.SET_RAMBLE_TRANSLATESPEED, 0, isNaN(rambleSpd) ? 1.0 : rambleSpd);
            return this;
        },
    
        // @method setKeyboardMoveSpeed(moveSpd: Number): this
        // 设置键盘移动速度
        setKeyboardMoveSpeed: function (moveSpd) {
            this._im.setSpeed(moveSpd);
            return this;
        },
        
         // @method setCommonSpeed(actType: Number, paramType: Number, value: Number): this
        // 动态设置操作的动态、静态速度，角度，距离等信息
        setCommonSpeed: function (actType, paramType, value) {
            this._im.sendActionMsg(actType, paramType, 0, isNaN(value) ? 0.1 : value);
            return this;
        },
    
        // @method setLimitBox(enabled: Boolean, boxId: Number): this
        // 限制区域开关和指定当前限制区域
        setLimitBox: function (enabled, boxId) {
            var rm = mapObj._map3d.getInputActionRestrictionManager();
            if (enabled) {
                rm.setCurRestriction(boxId);
            } else {
                rm.setCurRestriction(-1);
            }
            rm = null;
            return this;
        },
        
        // @method setFixedPointRotate(enabled: Boolean, fixPnt: Vector3d): this
        //切换当前右键旋转操作为绕指定点旋转
        setFixedPointRotate: function (enabled, fixPnt) {
            if (enabled) {
                this._im.sendActionMsg(Q3D.Enums.actionType.ROTATET_FIXPNT, Q3D.Enums.actionMsg.SET_FIXPNT, 0, fixPnt.get());
                this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.RBUTTON, Q3D.Enums.actionType.ROTATET_FIXPNT);
            } else {
                this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.RBUTTON, Q3D.Enums.actionType.ROTATET_SCREEN);
            }
            return this;
        },
    
        // @method setFirstPersonRotate(enabled: Boolean): this
        // 切换当前鼠标右键旋转操作模式：旋转摄像机模式还是旋转场景模式
        setFirstPersonRotate: function (enabled) {
            if (enabled) {
                this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.RBUTTON, Q3D.Enums.actionType.ROTATET_CAMERA);
            } else {
                this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.RBUTTON, Q3D.Enums.actionType.ROTATET_SCREEN);
            }
            return this;
        },
    
        // @method setThirdPersonOperation(enabled: Boolean,meshName: String, aniName: String): this
        // 开启第三人称操作模式，绑定鼠标和部分键盘操作，可用于控制人物行走
        // 鼠标左键：转动镜头；鼠标中键：点击移动；鼠标右键：场景旋转
        // 键盘 ASDW ：左右移动，前进后退
        // 键盘 箭头 ： 左转右转，抬头低头
        setThirdPersonOperation: function (enabled, meshName, aniName) {
            if (enabled) {
                if (meshName === undefined) {
                    mapObj.showNotice("提示", "输入参数无效!");
                    return this;
                }
                aniName = aniName || "";
                this._im.setInputType(1, meshName, aniName);
                this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.LBUTTON, Q3D.Enums.actionType.THIRD_CAMERAROTATE);
                this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.MBUTTON, Q3D.Enums.actionType.THIRD_MOVETO);
                this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.RBUTTON, Q3D.Enums.actionType.THIRD_ROTATE);
                this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.WHEEL, Q3D.Enums.actionType.THIRD_WHEEL);
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.A.ctrlId, Q3D.Enums.actionType.THIRD_MOVELEFT);
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.D.ctrlId, Q3D.Enums.actionType.THIRD_MOVERIGHT);
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.W.ctrlId, Q3D.Enums.actionType.THIRD_MOVEFORTH);
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.S.ctrlId, Q3D.Enums.actionType.THIRD_MOVEBACK);
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.Q.ctrlId, Q3D.Enums.actionType.THIRD_MOVEDOWN);
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.E.ctrlId, Q3D.Enums.actionType.THIRD_MOVEUP);
    
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.LEFT.ctrlId, Q3D.Enums.actionType.THIRD_TURNLEFT);
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.RIGHT.ctrlId, Q3D.Enums.actionType.THIRD_TURNRIGHT);
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.DOWN.ctrlId, Q3D.Enums.actionType.THIRD_LOOKDOWN);
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.UP.ctrlId, Q3D.Enums.actionType.THIRD_LOOKUP);
    
            } else {
                
                this._im.setInputType(0, "", "");
                //键盘绑定
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.A.ctrlId, Q3D.Enums.actionType.TRANS_LEFTX);
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.D.ctrlId, Q3D.Enums.actionType.TRANS_RIGHT);
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.W.ctrlId, Q3D.Enums.actionType.TRANS_FORTH);
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.S.ctrlId, Q3D.Enums.actionType.TRANS_BACKX);
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.Q.ctrlId, Q3D.Enums.actionType.TRANS_DOWNX);
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.E.ctrlId, Q3D.Enums.actionType.TRANS_UPXXX);
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.LEFT.ctrlId, Q3D.Enums.actionType.TRANS_LEFTX);
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.RIGHT.ctrlId, Q3D.Enums.actionType.TRANS_RIGHT);
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.UP.ctrlId, Q3D.Enums.actionType.TRANS_FORTH);
                this._im.bindControlAction(Q3D.Enums.device.KEYBOARD, Q3D.Enums.keyboard.DOWN.ctrlId, Q3D.Enums.actionType.TRANS_BACKX);
    
                //鼠标绑定
                this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.LBUTTON, Q3D.Enums.actionType.TRANS_SCENE);
                this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.MBUTTON, Q3D.Enums.actionType.RAMBLE_KEEPORI);
                this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.RBUTTON, Q3D.Enums.actionType.ROTATET_SCREEN);
                this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.WHEEL, Q3D.Enums.actionType.SCALED_SCREEN);
            }
            return this;
        },
        
        // @method setThirdPersonBind(enabled: Boolean,nodePath: String): this
        // 开启第三人称绑定节点模式，绑定鼠标和部分键盘操作到指定的运动节点
        // 鼠标左键：转动镜头；鼠标中键：点击移动；鼠标右键：场景旋转
        // 键盘 ASDW ：左右移动，前进后退
        // 键盘 箭头 ： 左转右转，抬头低头
        setThirdPersonBind: function (enabled, nodePath) {
            var node = mapObj.getSceneNode(nodePath);
            if (!node)
                return this;
            
            if (enabled) {            
                this._im.bindNode(node);
                //鼠标绑定
                this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.LBUTTON, Q3D.Enums.actionType.THIRD_CAMERAROTATE);
                //this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.MBUTTON, Q3D.Enums.actionType.THIRD_MOVETO);
                this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.RBUTTON, Q3D.Enums.actionType.THIRD_ROTATE);
                this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.WHEEL, Q3D.Enums.actionType.THIRD_WHEEL);
    
            } else {
                this._im.unbindNode();
                //鼠标绑定
                this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.LBUTTON, Q3D.Enums.actionType.TRANS_SCENE);
                //this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.MBUTTON, Q3D.Enums.actionType.RAMBLE_KEEPORI);
                this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.RBUTTON, Q3D.Enums.actionType.ROTATET_SCREEN);
                this._im.bindControlAction(Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.WHEEL, Q3D.Enums.actionType.SCALED_SCREEN);
            }
            return this;
        },
    
        // @method enableAllActions(enabled: Boolean, actArray: Array): this
        // 启用或禁用所有常用操作
        enableAllActions: function (enabled, actArray) {
            actArray = actArray || [];
            var defaultActionArray = [
                Q3D.Enums.actionType.TRANS_LEFTX,
                Q3D.Enums.actionType.TRANS_RIGHT,
                Q3D.Enums.actionType.TRANS_FORTH,	
                Q3D.Enums.actionType.TRANS_BACKX,
                Q3D.Enums.actionType.TRANS_DOWNX,
                Q3D.Enums.actionType.TRANS_UPXXX,
                Q3D.Enums.actionType.CAMERA_CLOSETO,
                Q3D.Enums.actionType.TRANS_SCENE,
                Q3D.Enums.actionType.RAMBLE_KEEPORI,
                Q3D.Enums.actionType.ROTATES_SCREEN,
                Q3D.Enums.actionType.SCALED_SCREEN,
                Q3D.Enums.actionType.YPSS_SCREEN
            ];
            
            //合并两个数组，去重
            var _concat = function (arr1, arr2) {
                //不要直接使用var arr = arr1，这样arr只是arr1的一个引用，两者的修改会互相影响
                var arr = arr1.concat();
                //或者使用slice()复制，var arr = arr1.slice(0)
                for (var i = 0; i < arr2.length; i++) {
                    arr.indexOf(arr2[i]) === -1 ? arr.push(arr2[i]) : 0;
                }
                return arr;
            }
            
            var combinedActions = _concat(defaultActionArray,actArray)
            
            for(var i = 0, len = combinedActions.length; i < len; ++i) {
                this._im.enableAction(combinedActions[i], enabled);
            }
            return this;
        },
    
    };
    
    // @factory Q3D.inputManager(): InputManager
    // 获取引擎的操作管理器对象
    Q3D.inputManager = function () {
        return new Q3D.InputManager();
    };
    
    
    
      /* @class LayerGroup
     * @aka Q3D.LayerGroup
     *
     * 表示图层对象集合，可用于控制图层显示和隐藏，支持图层动态添加以及节点的图层添加或迁移等
     *
     * @example
     *
     * ```
     * var lg = Q3D.layerGroup();
     * ``` 
     */
    Q3D.LayerGroup = function () {    
        if (!mapObj) {
            throw new Error('无效的引擎对象，引擎对象未初始化！');
        }   
    };
    
    Q3D.LayerGroup.prototype = {
       
        // @method getLayer(layerName: String): QLayer  
        // 根据名称获取当前要操作的原生 QLayer 图层对象
        getLayer: function(layerName) {  
            return mapObj._map3d.getWorldManager().getLayer(layerName);        
        },
        
        // @method setLayerAttributes(layerName: String, options: LayerAttr options): this  
        // 设置图层属性：层次，高度范围，是否可选，是否可操作
        setLayerAttributes: function(layerName, options) {        
            var defaultOptions = {            
                ShowOrder: 0, //显示层次，默认为 0，用于控制绘制顺序防止共面
                IsHeightHideCtrl: false,//是否根据高度控制图层显示
                MinHeight: -5000,//最小隐藏高度
                MaxHeight: 5000, //最大隐藏高度
                IsForbidSelect: false,//是否禁止选择，默认允许
                IsForbidOperation: false, //是否禁止操作，默认允许
            }
            Q3D.extend(defaultOptions,options);
            
            var _dstLayer = this.getLayer(layerName);
            if (!_dstLayer) {  //如果不存在就返回       
                return false;
            }              
            _dstLayer.setOrder(defaultOptions.ShowOrder);
            if (defaultOptions.IsHeightHideCtrl) {
                _dstLayer.enableHideHeight(1);
                _dstLayer.setHideHeight(defaultOptions.MinHeight, defaultOptions.MaxHeight);
            } else {
                _dstLayer.enableHideHeight(0);
            }
            _dstLayer.setForbidSelect(defaultOptions.IsForbidSelect ? 1 : 0);
            _dstLayer.setForbidOperation(defaultOptions.IsForbidOperation ? 1 : 0);        
            
            return true;
        },
        
        // @method getAllLayerNames(): Array  
        // 返回所有图层名称列表
        getAllLayerNames: function() {
            var _layerNames = [];
            var _ll = mapObj._map3d.getWorldManager().getAllLayers();
            var _layer = _ll.firstLayer();
            if (_layer) {
                _layerNames.push(_layer.getLayerName());
                while (true) {
                    _layer = _ll.nextLayer();
                    if (!_layer) 
                        break;
                    _layerNames.push(_layer.getLayerName());
                }
            }
            _ll.release();
            return _layerNames;
        },    
        
        // @method getLayerAllNodeNames(layerName: String): Array  
        // 返回图层中所有节点名称列表
        getLayerAllNodeNames: function(layerName) {
            var _nodeNames = [];
            var _ll = this.getLayer(layerName);
            if (!_ll) {  //如果不存在就返回          
                return _nodeNames;
            }    
            var  _nodes = _ll.getLayerAllNodes();
            var _node = _nodes.firstNode();
            if (_node) {
                _nodeNames.push(_node.getFullName());
                while (true) {
                    _node = _nodes.nextNode();
                    if (!_node) 
                        break;
                    _nodeNames.push(_node.getFullName());
                }
            }
            _nodes.release();
            return _nodeNames;
        },
        
        // @method createLayers(layers: Array): Boolean  
        // 根据图层名数组，一次性创建多个新的图层，常用于管理动态添加的节点。如果图层名列表中存在已经创建过的图层，则本操作无效
        createLayers: function(layers) {
            if (!Q3D.Util.isArray(layers) || typeof layers[0] !== 'string') 
                return false;
            
            var _wm = mapObj._map3d.getWorldManager();        
            //判断要创建的图层中是否有已经存在的图层
            var _cnt = layers.length;
            layers.forEach( function(l) {   
                if (_wm.getLayer(l)) //图层已经存在
                    _cnt--;
            } ) ;
            if (_cnt < layers.length )
                return false;
            
            layers.forEach( function(l) {   
                _wm.createLayer(l);
            } ) ;
      
            return true;
        },
        
        // @method toggleLayers(layers: Array): this  
        // 批量切换图层的可见性
        toggleLayers: function(layers) {
            if (Q3D.Util.isArray(layers) && typeof layers[0] === 'string') {        
                var _wm = mapObj._map3d.getWorldManager();     
                layers.forEach( function(l) {   
                    var _layer = _wm.getLayer(l);
                    if (_layer) {
                        _layer.setVisible(_layer.isVisible() == 1 ? 0 : 1)
                    }            
                } ) ;
            }
            return this;
        },
        
        // @method setLayersVisible(layers: Array, isVisible: Boolean): this  
        // 批量控制图层是否可见
        setLayersVisible: function(layers, isVisible) {
            if (Q3D.Util.isArray(layers) && typeof layers[0] === 'string') {        
                var _wm = mapObj._map3d.getWorldManager();     
                layers.forEach( function(l) {   
                    var _layer = _wm.getLayer(l);
                    if (_layer) {
                        _layer.setVisible(isVisible ? 1 : 0);
                    }            
                } ) ;
            }
            return this;
        },
        
        // @method addSceneNodesToLayer(layerName: String, nodeNames: Array): this  
        // 将节点列表中所有节点添加到指定图层中，nodeName包括AreaName
        // 注：节点同时只能属于一个图层，所以被操作节点应不属于任何图层
        addSceneNodesToLayer: function(layerName, nodeNames) {
            var _dstLayer = this.getLayer(layerName);
            if (!_dstLayer) {  //如果不存在就创建一个          
                this.createLayers([layerName]);
                _dstLayer = this.getLayer(layerName);
            }        
            
            if (Q3D.Util.isArray(nodeNames) && typeof nodeNames[0] === 'string') {           
                nodeNames.forEach( function(nodeName) {  
                    var _node = mapObj._map3d.getWorldManager().getSceneNode(nodeName) ;
                    if (_node && _node.getLayerName() == "")
                        _dstLayer.addSceneNodebyName(nodeName);                          
                } ) ;
            }
            
            return this;
        },
        
        // @method removeSceneNodesFromLayer(layerName: String, nodeNames?: Array): this  
        // 从指定图层中删除节点列表中所有节点或全部删除，nodeName包括AreaName
        removeSceneNodesFromLayer: function(layerName, nodeNames) {
            var _dstLayer = this.getLayer(layerName);
            if (!_dstLayer) {  //如果不存在就返回          
                return false;
            }      
            
            if (typeof  nodeNames === "undefined")
                _dstLayer.removeAllNodes();
            else {        
                if (Q3D.Util.isArray(nodeNames) && typeof nodeNames[0] === 'string') {           
                    nodeNames.forEach( function(nodeName) {  
                        var _node = mapObj._map3d.getWorldManager().getSceneNode(nodeName) ;
                        if  (_node)
                            _dstLayer.removeNode(_node);                 
                    } ) ;
                }
            }        
            return true;
        },
        
        // @method moveSceneNodesBetweenLayers(srcLayerName: String, dstLayerName: String): Boolean 
        // 将一个图层中所有节点移动到另一个图层
        moveSceneNodesBetweenLayers: function(srcLayerName, dstLayerName) {
            var _srcLayer = this.getLayer(srcLayerName);
            var _dstLayer = this.getLayer(dstLayerName);
            if (!_srcLayer || !_dstLayer) 
                return false;
            
            var nodes = _srcLayer.getLayerAllNodes();
            return this.moveSceneNodesToLayer(nodes, dstLayerName);
        },
        
        // moveSceneNodesToLayer(nodes: QSceneNodeList, layerName: String): Boolean  
        // 将节点列表中所有节点移动到指定图层中
        moveSceneNodesToLayer: function(nodes, layerName) {
            var _dstLayer = this.getLayer(layerName);
            if (!_dstLayer) {
                this.createLayers([layerName]);
                _dstLayer = this.getLayer(layerName);
            }        
            var _node = nodes.firstNode();
            if (_node) {
                _dstLayer.moveSceneNode(_node);            
                while (true) {
                    _node = nodes.nextNode();
                    if (!_node)
                        break;
                    _dstLayer.moveSceneNode(_node);                
                }
            }
            nodes.release();
            return true;
        },
        
    };
    
    // @factory Q3D.layerGroup(): LayerGroup
    // 获取引擎的图层对象集合
    
    Q3D.layerGroup = function () {
        return new Q3D.LayerGroup();
    };
    
    
    
    
    /* @class MovieClip
     * @aka Q3D.MovieClip
     *
     * 表示动画剪辑对象，由多个动画角色对象组成。我们可以理解为一个剧本，含有很多个角色。传入参数为动画剪辑对象名称和动画帧率
     *
     * @example
     *
     * ```
     * var mc = Q3D.movieClip("movie_clip",50);
     * mc.addActorTranslateAnimation("carA1", [{Key:"0",Pos:q3},{Key:"200",Pos:q3}]);
     * mc.addActorTrackControlPoint("carA1", 0, q3, true);
     * mc.addActorRotateAnimation("carA1", [{Key:"0",Rotate:q3},{Key:"200",Rotate:q3}]);
     * mc.addActorScaleAnimation("carA1", [{Key:"0",Scale:q3},{Key:"200",Scale:q3}]);
     * ```
     *
     */
    Q3D.MovieClip = function (mcName, fps) {    
        if (!mapObj) {
            throw new Error('无效的引擎对象，引擎对象未初始化！');
        }            
        
        this._mcName = mcName;//记录剪辑名称
        var _wm = mapObj._map3d.getWorldManager();
        this._mc = _wm.getMovieClip(mcName);
        if (!this._mc) {
            this._mc = _wm.createMovieClip(mcName);//如果不存在则创建新的动画剪辑对象
        } 
        this._mc.setFPS(fps);   
        //this._mc.removeAllActors();    
    };
    
    Q3D.MovieClip.prototype = {
        
        // @method get(): QMovieClip
        // 返回对应的原生 QMovieClip 动画剪辑对象    
        get: function() {
            return this._mc ;
        },
        
        // @method getTotalFrameLength(): Number  
        // 返回总帧数
        getTotalFrameLength: function() {
            return this._mc.getTimeLength() * this._mc.getFPS();
        },
        
        // @method getFPS(): Number  
        // 返回动画帧率
        getFPS: function() {
            return this._mc.getFPS();
        },
        
        // @method getFrameFromTime(secs: Number): Number  
        // 根据时间返回对应的帧数，如果时间无效返回 -1
        getFrameFromTime: function(secs) {
            var totalTime = this._mc.getTimeLength();
            if (secs > totalTime || secs < 0) 
                return -1;
            return secs * this._mc.getFPS() ;
        },
        
        // @method getTimeFromFrame(frames: Number): Number  
        // 根据返回对应的时间，如果时间无效返回 -1
        getTimeFromFrame: function(frames) {
            var totalFrames = this.getTotalFrameLength();
            if (frames > totalFrames || frames < 0) 
                return -1;
            return frames / this._mc.getFPS();
        },
       
        // @method removeActor(acName: String): this  
        // 从动画剪辑对象中删除指定名称的动画角色
        removeActor: function(acName) {
            this._mc.removeActor(acName);
            return this;       
        },
        
        // @method removeAllActors(): this  
        // 删除所有的动画角色
        removeAllActors: function() {
            this._mc.removeAllActors();
            return this;
        },
        
        // @method hasActor(acName: String): Boolean  
        //从动画剪辑对象中判断动画角色是否存在
        hasActor: function(acName) {
            return this._mc.getIActor(acName) != null;
        },
        
        // @method addActorTranslateAnimation(acName:String, transInfo: Array): this  
        // 添加位移动画信息到指定动画剪辑对象中，位移动画信息有多个JSON对象组成，每个对象包含了关键帧和相对于父节点的Vector3坐标
        addActorTranslateAnimation: function(acName, transInfo) {
            //检查参数
            var _cnt = transInfo.length;
            if (_cnt < 2) return null;
            
            var _actor = this._mc.getIActor(acName);//该角色是否存在        
            if (!_actor) {
                _actor = this._mc.addIActor(acName);//添加该角色
            }
    
            var _trackMove = _actor.addITrack( Q3D.Enums.actorTrackType.TransformMove, Q3D.Enums.actorKeyType.KeyAuto ).asKeyTrack();
            for (var i = 0; i < transInfo.length; i++) {  
                var key = _trackMove.addIKey(transInfo[i].Key);
                if (!key) {
                    key = _trackMove.addIKey(transInfo[i].Key + 1); //往后推1帧
                }
                key.setKeyIPointAsQVector3(transInfo[i].Pos.get());
                if (i == 0)  { //起点                
                    key.setRightTimeCtrlType( Q3D.Enums.timeCtrlType.EaseIn );
                } else if (i == _cnt - 1) { //终点
                    key.setLeftTimeCtrlType( Q3D.Enums.timeCtrlType.EaseOut );
                } else {
                    //默认采用线性，不用给控制点坐标，后续如果有控制点会被覆盖
                    key.setLeftCurveCtrlType( Q3D.Enums.curveCtrlType.Linear ); 
                    key.setRightCurveCtrlType( Q3D.Enums.curveCtrlType.Linear );
                }
            } 
            return this;
        },
        
        _addActorTranslateGravityAnimation: function(acName, transInfo) {
            //检查参数
            var _cnt = transInfo.length;
            if (_cnt < 2) return null;
            
            var _actor = this._mc.getIActor(acName);//该角色是否存在        
            if (!_actor) {
                _actor = this._mc.addIActor(acName);//添加该角色
            }
    
            var _trackMove = _actor.addITrack( Q3D.Enums.actorTrackType.TransformMove, Q3D.Enums.actorKeyType.KeyAuto ).asKeyTrack();
            for (var i = 0; i < transInfo.length; i++) {  
                var key = _trackMove.addIKey(transInfo[i].Key);
                if (!key) {
                    key = _trackMove.addIKey(transInfo[i].Key + 1); //往后推1帧
                }
                key.setKeyIPointAsQVector3(transInfo[i].Pos.get());
                if (i % 2 == 0)  { //最高点               
                    key.setRightTimeCtrlType( Q3D.Enums.timeCtrlType.EaseIn );
                    if(i > 0)
                        key.setLeftTimeCtrlType( Q3D.Enums.timeCtrlType.EaseOut );
                } 
            } 
            return this;
        },
        
        // @method addActorTrackControlPoint(acName:String, keyIndex: Number, ctlPnt: Vector3, isRight: Boolean): this  
        // 修改位移动画中特定轨迹，添加贝塞尔控制点信息    
        addActorTrackControlPoint: function(acName, keyIndex, ctlPnt, isRight) {
             var _actor = this._mc.getIActor(acName);
             if (!_actor) return null;
             var _track = _actor.getITrack(Q3D.Enums.actorTrackType.TransformMove);
             if (!_track) return null;
             var _trackMove = _track.asKeyTrack();
             var _key = _trackMove.getIKey(keyIndex);
             if (!_key) return null;
             if (isRight) {
                 _key.setRightCurveCtrlType(Q3D.Enums.curveCtrlType.Bessel);
                 _key.setRightCtrlIPointAsQVector3(ctlPnt.get());
             } else {
                 _key.setLeftCurveCtrlType(Q3D.Enums.curveCtrlType.Bessel);
                 _key.setLeftCtrlIPointAsQVector3(ctlPnt.get());
             }
             return this;
        },
        
        // @method addActorRotateAnimation(acName:String, rotatesInfo: Array): this  
        // 添加旋转动画信息到指定动画剪辑对象中，旋转动画信息有多个JSON对象组成，每个对象包含了关键帧和旋转角度值
        addActorRotateAnimation: function(acName, rotatesInfo) {
            var _cnt = rotatesInfo.length;
            if (_cnt < 2) return null;
            
            var _actor = this._mc.getIActor(acName);
            if (!_actor) {
                _actor = this._mc.addIActor(acName);//添加该角色
            }
    
            var _trackRot = _actor.addITrack( Q3D.Enums.actorTrackType.TransformRotate, Q3D.Enums.actorKeyType.KeyAuto ).asKeyTrack();
            for(var i=0;i<rotatesInfo.length;i++){
                var key = _trackRot.addIKey(rotatesInfo[i].Key);
                if (!key) {
                    key = _trackRot.addIKey(rotatesInfo[i].Key + 1); //往后推1帧
                }
                key.setKeyIPointAsQVector3(rotatesInfo[i].Rotate.get());
                if (i == 0)  { //起点需要比较后一个
                    var currRot = rotatesInfo[i].Rotate.clone();
                    var nextRot = rotatesInfo[i+1].Rotate.clone();
                    if (currRot.equals(nextRot))
                        key.setRightCurveCtrlType( Q3D.Enums.curveCtrlType.Point );
                    else
                        key.setRightCurveCtrlType( Q3D.Enums.curveCtrlType.Linear );
                } else if (i == _cnt - 1) { //终点需要比较前一个
                    var currRot = rotatesInfo[i].Rotate.clone();
                    var prevRot = rotatesInfo[i-1].Rotate.clone();
                    if (currRot.equals(prevRot))
                        key.setLeftCurveCtrlType( Q3D.Enums.curveCtrlType.Point );
                    else
                        key.setLeftCurveCtrlType( Q3D.Enums.curveCtrlType.Linear );
                } else { //其他的点需要比较前后
                    var currRot = rotatesInfo[i].Rotate.clone();
                    var nextRot = rotatesInfo[i+1].Rotate.clone();
                    var prevRot = rotatesInfo[i-1].Rotate.clone();
                    if (currRot.equals(prevRot))
                        key.setLeftCurveCtrlType( Q3D.Enums.curveCtrlType.Point );
                    else
                        key.setLeftCurveCtrlType( Q3D.Enums.curveCtrlType.Linear );
                    
                    if (currRot.equals(nextRot))
                        key.setRightCurveCtrlType( Q3D.Enums.curveCtrlType.Point );
                    else
                        key.setRightCurveCtrlType( Q3D.Enums.curveCtrlType.Linear );                
                }
            }
            
            return this;        
        },
        
        // @method addActorScaleAnimation(acName:String, scalesInfo: Array): this  
        // 添加缩放动画信息到指定动画剪辑对象中，缩放动画信息有多个JSON对象组成，每个对象包含了关键帧和缩放值
        addActorScaleAnimation: function(acName, scalesInfo) {
            var _cnt = scalesInfo.length;
            if (_cnt < 2) return null;
            
            var _actor = this._mc.getIActor(acName);
            if (!_actor) {
                _actor = this._mc.addIActor(acName);
            }
            
            var _trackScale = _actor.addITrack( Q3D.Enums.actorTrackType.TransformScale, Q3D.Enums.actorKeyType.KeyAuto ).asKeyTrack();
            for(var i=0;i<scalesInfo.length;i++){
                var key = _trackScale.addIKey(scalesInfo[i].Key);
                if (!key) {
                    key = _trackScale.addIKey(scalesInfo[i].Key + 1); //往后推1帧
                }
                key.setKeyIPointAsQVector3(scalesInfo[i].Scale.get());
                if (i == 0)  { //起点比较后一个
                    var currScale = scalesInfo[i].Scale.clone();
                    var nextScale = scalesInfo[i+1].Scale.clone();
                    if (currScale.equals(nextScale))
                        key.setRightCurveCtrlType( Q3D.Enums.curveCtrlType.Point );
                    else
                        key.setRightCurveCtrlType( Q3D.Enums.curveCtrlType.Linear );
                } else if (i == _cnt - 1) { //终点比较前一个
                    var currScale = scalesInfo[i].Scale.clone();
                    var prevScale = scalesInfo[i-1].Scale.clone();
                    if (currScale.equals(prevScale))
                        key.setLeftCurveCtrlType( Q3D.Enums.curveCtrlType.Point );
                    else
                        key.setLeftCurveCtrlType( Q3D.Enums.curveCtrlType.Linear );
                } else { //其他的点需要比较前后
                    var currScale = scalesInfo[i].Scale.clone();
                    var nextScale = scalesInfo[i+1].Scale.clone();
                    var prevScale = scalesInfo[i-1].Scale.clone();
                    if (currScale.equals(prevScale))
                        key.setLeftCurveCtrlType( Q3D.Enums.curveCtrlType.Point );
                    else
                        key.setLeftCurveCtrlType( Q3D.Enums.curveCtrlType.Linear );
                    
                    if (currScale.equals(nextScale))
                        key.setRightCurveCtrlType( Q3D.Enums.curveCtrlType.Point );
                    else
                        key.setRightCurveCtrlType( Q3D.Enums.curveCtrlType.Linear );                
                }
            }
            
            return this;                
        },
        
        //  _addFadeInAnimation(acName:String, actTime: Number, alphaEnd: Number): this  
        // 添加渐显动画信息到指定动画剪辑对象中`
        _addFadeInAnimation: function(acName, actTime, alphaEnd) {
            var _actor = this._mc.getIActor(acName);
            if (!_actor) {
                _actor = this._mc.addIActor(acName);
            } else {
                _actor.destroyTrack(Q3D.Enums.actorTrackType.ColorAlpha);
            }        
            var _trackFadeIn = _actor.addITrack( Q3D.Enums.actorTrackType.ColorAlpha, Q3D.Enums.actorKeyType.KeyAuto ).asKeyTrack();
            var key = _trackFadeIn.addIKey( 0 );
            key.setKeyIPointAsFloat( 0.0 );
            key = _trackFadeIn.addIKey( actTime * this._mc.getFPS() );
            key.setKeyIPointAsFloat( alphaEnd || 1.0 );
            key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.EaseOut );        
            return this;
        },
        
        //  addFadeOutAnimation(acName:String, actTime: Number, alphaStart: Number): this  
        // 添加渐隐动画信息到指定动画剪辑对象中
        _addFadeOutAnimation: function(acName, actTime, alphaStart) {
            var _actor = this._mc.getIActor(acName);
            if (!_actor) {
                _actor = this._mc.addIActor(acName);
            } else {
                _actor.destroyTrack(Q3D.Enums.actorTrackType.ColorAlpha);
            }
    
            var _trackFadeIn = _actor.addITrack( Q3D.Enums.actorTrackType.ColorAlpha, Q3D.Enums.actorKeyType.KeyAuto ).asKeyTrack();
            var key = _trackFadeIn.addIKey( 0 );
            key.setKeyIPointAsFloat( alphaStart || 1.0 );
            key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.EaseIn);  
            key = _trackFadeIn.addIKey( actTime * this._mc.getFPS() );
            key.setKeyIPointAsFloat( 0.0 );
              
            return this;
        },
        
        //  _addTransparentFlashAnimation(acName:String, initAlpha: Number, actTime: Number, flashTimes: Number): this  
        // 添加透明度闪烁动画信息到指定动画剪辑对象中
        _addTransparentFlashAnimation: function(acName, initAlpha, actTime, flashTimes) {
            var _actor = this._mc.getIActor(acName);
            if (!_actor) {
                _actor = this._mc.addIActor(acName);
            } else {
                _actor.destroyTrack(Q3D.Enums.actorTrackType.ColorAlpha);
            }
    
            //var fps = this._mc.getFPS(); //基准帧率
            var _trackTransFlash = _actor.addITrack( Q3D.Enums.actorTrackType.ColorAlpha, Q3D.Enums.actorKeyType.KeyAuto ).asKeyTrack();
            var currKeyStart = 0;
            key = _trackTransFlash.addIKey( currKeyStart );
            key.setKeyIPointAsFloat( initAlpha );
            for (var i = 0; i < flashTimes; i++) {
                key = _trackTransFlash.addIKey( currKeyStart + actTime * this._mc.getFPS()  );
                key.setKeyIPointAsFloat( 0.0 );
                key = _trackTransFlash.addIKey( currKeyStart + actTime * 2 * this._mc.getFPS()  );
                key.setKeyIPointAsFloat( initAlpha );
                currKeyStart += actTime * 2 * this._mc.getFPS() ;
            }
           
            return this;
        },
        
        // 添加颜色闪烁动画信息到指定动画剪辑对象中   
        _addColorFlashAnimation: function(acName, initColor, targetColor, actTime, flashTimes,  isEmissiveColor) {
            var _actor = this._mc.getIActor(acName);
            var colorType = isEmissiveColor? Q3D.Enums.actorTrackType.ColorEmissive : Q3D.Enums.actorTrackType.ColorDiffuse;
            if (!_actor) {
                _actor = this._mc.addIActor(acName);
            } else {
                _actor.destroyTrack(colorType);
            }
    
            //var fps = this._mc.getFPS(); //基准帧率
            var _trackColorFlash = _actor.addITrack( colorType, Q3D.Enums.actorKeyType.KeyAuto ).asKeyTrack();
            var currKeyStart = 0;
            var key = _trackColorFlash.addIKey( currKeyStart );
            key.setKeyIPointAsQColourValue( initColor );
            for (var i = 0; i < flashTimes; i++) {           
                key = _trackColorFlash.addIKey( currKeyStart + actTime * this._mc.getFPS() );
                key.setKeyIPointAsQColourValue( targetColor );
                key = _trackColorFlash.addIKey( currKeyStart + actTime * 2 * this._mc.getFPS() );
                key.setKeyIPointAsQColourValue( initColor );
                currKeyStart += actTime * 2 * this._mc.getFPS();
            }
            
            return this;
        },   
           
    };
    
    // @factory Q3D.movieClip(mcName: String, fps: Number): QMovieClip
    // 创建一个动画剪辑对象，用于保存动画定义
    Q3D.movieClip = function (mcName, fps) {	
        return new Q3D.MovieClip(mcName,fps);
    };
    
    
    
    
    
    /* @class MovieClipInstance
     * @aka Q3D.MovieClipInstance
     *
     * 表示动画剪辑对象实例，总是关联一个动画剪辑对象，可以理解为剧本开拍。
     * 实例对象用于指定演出者（节点或材质）、控制动画的播放、注册帧动画事件等。
     *
     * @example
     *
     * ```
     * var mc = Q3D.movieClip("movie_clip",50);
     * var mcInst = Q3D.movieClipInstance("movie_clip_inst",mc);
     * ```
     *
     */
    Q3D.MovieClipInstance = function (mcInstName, mcObj) {    
        if (!mapObj) {
            throw new Error('无效的引擎对象，引擎对象未初始化！');
        }            
        
        var _wm = mapObj._map3d.getWorldManager();
        this._mcInst = _wm.getMovieClipInstance(mcInstName);
        if (!this._mcInst) {
            this._mcInst = _wm.createMovieClipInstance( mcInstName ); //如果不存在则创建
            this._mcInst.setMovieClip( mcObj.get().getCName() );  
            mapObj._map3d.setMovieClipInstanceEventListener(this._mcInst);//打开事件监听
        } else {
            this._mcInst.setMovieClip( mcObj.get().getCName() );  
            this._mcInst.gotoFrame(0);
            this._mcInst.clearAllPlayers();
        }     
        this._mc = mcObj;//保存mc封装对象的引用
        this._nodespos = {};//保存节点原先的位置
        this._nodesmat = [];//保存节点材质克隆的
    };
    
    Q3D.MovieClipInstance.prototype = {
        // @method get(): QMovieClipInstance
        // 返回对应的原生 QMovieClipInstance 动画剪辑实例对象    
        get: function() {
            return this._mcInst ;
        },
        
        // @method getMovieClip(): MovieClip
        // 返回对应的封装MovieClip 动画剪辑对象    
        getMovieClip: function() {
            return this._mc ;
        },
        
        // @method getCName(): String
        // 返回 QMovieClipInstance 对象的实例名称    
        getCName: function() {
            return this._mcInst.getCName() ;
        },
        
        // @method getMovieClipCName(): String
        // 返回 QMovieClipInstance 对象包含的 QMovieClip 名称   
        getMovieClipCName: function() {
            return this._mcInst.getMovieClipCName() ;
        },
        
        // @method init(): Null
        // 初始化    
        init: function() {
            this._mcInst.clearAllPlayers();
            this._mcInst.setLoop( 0 );
            this._mcInst.gotoFrame( 0 );  
            this._nodespos = {};
            this._nodesmat = [];        
        },
        
        // @method setTransformPlayer(acName: String, node: QSceneNode): Boolean
        // 为动画剪辑对象中的特定位移类动画角色指定扮演者(节点对象)：适用于移动，旋转、缩放
        // 可以预先定义好位移动画角色，再让节点充当扮演者；位移动画角色可以同时包含了移动、旋转和缩放动作（acName相同）
        setTransformPlayer: function(acName, node) {
            var nodeName = node.getFullName();//getArea().getName() + "/" + node.getName();
            for (var name in this._nodespos) {
                if (name == nodeName) //判断节点是否已经被指派过其他位移类角色
                    return false;
            }       
    
            this._mcInst.setPlayer( acName, Q3D.Enums.playerType.Node, nodeName );//一个角色同时只能由一个演员扮演
            this._nodespos[nodeName] = node.getPosition();   //记录原先的位置
            return true;
        },
        
        // @method setMaterialFadePlayer(node: QSceneNode, fadeType: Number, actTime: Number, flashTimes?: Number): Boolean
        // 为动画剪辑对象中的材质相关动画角色指定扮演者(节点的材质需要先克隆一份，注意这里节点的每个材质都要创建自己的Actor)
        // 本方法用于渐隐、渐现、透明闪烁动画实现
        // 对于材质相关的动画角色，定义和扮演者指派同时完成
        setMaterialFadePlayer: function(node, fadeType, actTime, flashTimes) {
            var nodeType = node.getNodeType();
            if (nodeType != Q3D.Enums.sceneNodeType.SNODE_Model && nodeType != Q3D.Enums.sceneNodeType.SNODE_VecModel)
                return false;
            
            var realNode = null;
            if (nodeType == Q3D.Enums.sceneNodeType.SNODE_Model)
                realNode = node.asModel();
            else
                realNode = node.asVecModel();        
           
            //realNode.makeAloneMaterials();
            realNode.makeAloneMaterialsEx(2);
            for (var i = 0; i <= realNode.getMaterialCount() - 1; i++)
            {
                var mat = realNode.getMaterial(i);    
                if(mat == null) continue;
                var initAlpha = mat.getAlpha();
                mat.setAlphaBlendEnable( 1 );
                if (fadeType == Q3D.Enums.fadeType.fadeIn)
                    this._mc._addFadeInAnimation( mat.getName(), actTime, initAlpha ); //添加一个对应材质的Actor
                else if (fadeType == Q3D.Enums.fadeType.fadeOut)
                    this._mc._addFadeOutAnimation( mat.getName(), actTime, initAlpha ); //添加一个对应材质的Actor
                else                 
                    this._mc._addTransparentFlashAnimation( mat.getName(), initAlpha, actTime, flashTimes ); //添加一个对应材质的Actor
                this._mcInst.setPlayer( mat.getName(), Q3D.Enums.playerType.Material, mat.getName() );
            }
            var nodeName = node.getFullName();//getArea().getName() + "/" + node.getName();
            if( this._nodesmat.indexOf(nodeName) == -1)
                this._nodesmat.push(nodeName);     //记录被材质克隆的节点
            
            return true;
        },
        
        // @method setMaterialColorFlashPlayer(node: QSceneNode, targetColor: ColourValue,actTime: Number, flashTimes: Number, isEmissiveColor?: Boolean): Boolean
        // 为动画剪辑对象中的材质相关动画角色指定扮演者(节点的材质需要先克隆一份，注意这里节点的每个材质都要创建自己的Actor)
        // 本方法用于颜色闪烁动画实现
        // 对于材质相关的动画角色，定义和扮演者指派同时完成    
        setMaterialColorFlashPlayer: function(node, targetColor, actTime, flashTimes, isEmissiveColor) {
            var nodeType = node.getNodeType();
            if (nodeType != Q3D.Enums.sceneNodeType.SNODE_Model && nodeType != Q3D.Enums.sceneNodeType.SNODE_VecModel)
                return false;
            
            var realNode = null;
            if (nodeType == Q3D.Enums.sceneNodeType.SNODE_Model)
                realNode = node.asModel();
            else
                realNode = node.asVecModel();        
           
            //realNode.makeAloneMaterials();
            realNode.makeAloneMaterialsEx(2);
            for (var i = 0; i <= realNode.getMaterialCount() - 1; i++)
            {
                var mat = realNode.getMaterial(i);    
                if(mat == null) continue;
                mat.setAlphaBlendEnable( 1 );
                
                var initColor = isEmissiveColor?  mat.getEmissiveColor() : mat.getDiffuseColor();
                this._mc._addColorFlashAnimation( mat.getName(), initColor, targetColor.get(), actTime, flashTimes, isEmissiveColor ); //添加一个对应材质的Actor
                this._mcInst.setPlayer( mat.getName(), Q3D.Enums.playerType.Material, mat.getName() );
            }
            var nodeName = node.getFullName();//getArea().getName() + "/" + node.getName();
            if( this._nodesmat.indexOf(nodeName) == -1)
                this._nodesmat.push(nodeName);     
            
            return true;
        },    
        
        // @method setPlayOptions(startFrame?: Number, isLoop?: Boolean): this
        // 设置播放参数：开始帧（默认=0）和是否循环标识（默认=false）
        setPlayOptions: function(startFrame, isLoop) {
            this._mcInst.stop();
            this._mcInst.setLoop( isLoop ? 1 : 0 );
            this._mcInst.gotoFrame( startFrame ? startFrame : 0 );           
            return this;
        },
        
        // @method play(): this
        // 播放动画
        play: function() {
            this._mcInst.play();   
            return this;
        },
        
        // @method pause(): this
        // 暂停播放动画
        pause: function() {
            this._mcInst.pause();   
            return this;
        },
        
        // @method replay(): this
        // 重新播放动画
        replay: function() {
            this._mcInst.replay();   
            return this;
        },
        
        // @method stop(): this
        // 停止播放动画
        stop: function() {
            this._mcInst.stop();   
            return this;
        },
        
         // @method currFrame(): Number
        // 返回当前的关键帧值
        currFrame: function() {
            return this._mcInst.getCurrFrameNo();
        },
         
        // @method currTime(): Number
        // 返回当前的时刻值
        currTime: function() {
            return this._mcInst.getCurrTickTime()
        },
        
        // @method nextFrame(frames?: Number): this
        // 前进指定帧数，默认=1
        nextFrame: function(frames) {
            var currFrame = this._mcInst.getCurrFrameNo();
            this._mcInst.gotoFrame(currFrame+(frames?frames:1));
            return this;
        },
        
        // @method nextTime(secs?: Number): this
        // 前进指定秒数，默认=1
        nextTime: function(secs) {
            var currTime = this._mcInst.getCurrTickTime();
            this._mcInst.gotoTime(currTime+(secs?secs:1));
            return this;
        },
        
        // @method prevFrame(frames?: Number): this
        // 后退指定帧数，默认=1
        prevFrame: function(frames) {
            var currFrame = this._mcInst.getCurrFrameNo();
            this._mcInst.gotoFrame(currFrame-(frames?frames:1));
            return this;
        },  
        
        // @method prevTime(secs?: Number): this
        // 后退指定秒数，默认=1
        prevTime: function(secs) {
            var currTime = this._mcInst.getCurrTickTime();
            this._mcInst.gotoTime(currTime-(secs?secs:1));
            return this;
        },
        
        // @method getFPS(): Number
        // 返回当前帧率，可保存作为基准帧率
        getFPS: function( ) {
            return this._mc.getFPS();
        },
        
        // @method changePlaySpeed(fps: Number): this
        // 改变正常播放速度
        changePlaySpeed: function(fps) {
            var currFrame = this._mcInst.getCurrFrameNo();
            this._mc.get().setFPS(fps);
            this._mcInst.gotoFrame(currFrame);
            return this;
        },
           
        // @method onMovieClipInstancePassFrame(keyIndex: Number, fn: Function): this
        // 注册帧事件
        onMovieClipInstancePassFrame: function(keyIndex, fn) {
            if (fn && Q3D.Util.isFunction(fn)) {        
                mapObj.attachUIEvent("onMovieClipInstancePassFrame", this._mcInst.getCName()+"/"+keyIndex, fn);
                this._mcInst.registerFrameEvent(keyIndex);//注册事件
            }        
            return this;
        },
        
        // @method clearMovieClipInstancePassFrame(keyIndex: Number): this
        // 清除帧事件
        clearMovieClipInstancePassFrame: function(keyIndex) {
            var mciName = this.getCName();
            if (mapObj._widgetEvents != undefined) {
                var typeListeners = mapObj._widgetEvents["onMovieClipInstancePassFrame"];
                if (typeListeners) {
                    for (var i = 0, len = typeListeners.length; i < len; i++) {
                        var keyArr = typeListeners[i].key.split("/");
                        if (keyArr[0] == mciName && keyArr[keyArr.length-1] == keyIndex) {
                                this._mcInst.unregisterFrameEvent(keyIndex);
                                mapObj.detachUIEvent("onMovieClipInstancePassFrame", typeListeners[i].key);
                                break;
                        }
                    }
                }
            }
            return this;
        },
        
        // 结束帧的处理
        _clearMovieClipInstanceOnLastFrame: function(endKey, endFn) {
            this.onMovieClipInstancePassFrame(endKey, function(mci,key){ 
                if (endFn && Q3D.Util.isFunction(endFn)) 
                    endFn(mci, key);
                var mciName = mci.getCName();
                setTimeout(function() {
                    mapObj.clearMovieClip(mciName, endKey, false);
                }, 100);
            });
        },
        
        // @method restoreAllNodes(): this
        // 停止动画播放，恢复节点的初始状态
        restoreAllNodes: function() {
            this._mcInst.stop();
            this._mcInst.gotoFrame( 0 );
            this._mcInst.clearAllPlayers();
            //恢复节点的位置
            var _wm = mapObj._map3d.getWorldManager();
            for (var name in this._nodespos) {
                _wm.getSceneNode(name).setPosition(this._nodespos[name]);
            }
            this._nodespos = {};
            //恢复节点的材质
            this._nodesmat.forEach( function(name) {   
                var node = _wm.getSceneNode(name);
                if (node.getNodeType() == Q3D.Enums.sceneNodeType.SNODE_Model)
                    node.asModel().restoreAloneMaterials();
                else
                    node.asVecModel().restoreAloneMaterials();
            } ) ;
            this._nodesmat = [];
            return this;
        },
        
    };
    
    // @factory Q3D.movieClipInstance(mcInstName: String, mcObj: MovieClip): MovieClipInstance
    // 创建一个动画剪辑实例对象
    Q3D.movieClipInstance = function (mcInstName, mcObj) {	  
        return new Q3D.MovieClipInstance(mcInstName, mcObj);
    };
    
    
    /* @class NodeContainer
     * @aka Q3D.NodeContainer
     *
     * 表示节点容器对象，容器中的对象可以是节点或材质，可用于批量动态修改容器中所包含材质的透明度、颜色或者节点的显隐、材质替换等效果。
     *
     * @example
     *
     * ```
     * var ncAlpha = Q3D.nodeContainer("nc_alpha");
     * ```
     *
     */
    Q3D.NodeContainer = function (ncName) {    
        if (!mapObj) {
            throw new Error('无效的引擎对象，引擎对象未初始化！');
        }          
    
        var _wm = mapObj._map3d.getWorldManager();
        this._nc = _wm.getContainer(ncName);
        if (this._nc == null) {
            this._nc = _wm.createContainer(ncName);//如果不存在则创建新的容器对象 
            //this._ncName = ncName;//记录容器名称
        }             
        this._targetVal = null;
        this._ncType = null;//记录容器类型
    };
    
    Q3D.NodeContainer.prototype = {
        
        // @method get(): QSceneContentContainer 
        // 返回对应的原生 QSceneContentContainer 节点容器对象    
        get: function() {
            return this._nc ;
        },
        
        //启动或停止节点容器操作
        _doAction: function(setFlag, matType) {
            if (matType != undefined)
                this._nc.setMaterialModifyMode (matType);
            if (this._ncType == Q3D.Enums.nodeContainerType.Alpha){
                if (setFlag) this._nc.setMaterialAlpha(this._targetVal);
                else this._nc.restoreAllMaterials();
            }
            else if (this._ncType == Q3D.Enums.nodeContainerType.Color) {
                if (setFlag) this._nc.setMaterialColor(this._targetVal.get());
                else this._nc.restoreAllMaterials();
            }
            else if (this._ncType == Q3D.Enums.nodeContainerType.Visible) {
                if (setFlag) this._nc.setNodeVisible(this._targetVal); 
                else this._nc.restoreAllNodeProperties();
            } else if (this._ncType == Q3D.Enums.nodeContainerType.Material) {
                if (setFlag) this._nc.setNodeReplaceMaterial(this._targetVal); 
                else this._nc.restoreAllNodeProperties();
            } else {
     
            }         
        },
        
        // @method setTargetVal(ncType: Number, val: Number, matMode?: Number): this  
        // 根据容器类型设置当前目标值，可能是透明度值（0~1.0）、是否可见（0-不可见;1-可见）、颜色值ColourValue
        setTargetVal: function(ncType, val, matMode) {
            this._ncType = ncType;
            this._targetVal = val;
            this._doAction(true, matMode);
            return this;
        },
        // @method addSceneNode(nodePath: String): this  
        // 向容器中添加节点，传入参数为地区名称和节点名称。如果已经调用过 setTargetVal，立即生效
        addSceneNode: function(nodePath) {
            this._nc.addSceneNode(nodePath);
            return this;
        },
     
        // @method addSceneNodeFromLayer(layerName: String): this  
        // 向容器中添加图层包含的所有节点，传入参数为图层名称。如果已经调用 setTargetVal，立即生效
        addSceneNodeFromLayer: function(layerName) {
            this._nc.addSceneNodeFromLayer(layerName);
            return this;
        },
        
        // @method addSceneNodeFromArea(areaName: String): this  
        // 向容器中添加节点，传入参数为地区名称。如果已经调用 setTargetVal，立即生效
        addSceneNodeFromArea: function(areaName) {
            this._nc.addSceneNodeFromArea(areaName);
            return this;
        },
        
        // @method loadFromFile(condFile: String, asyn: boolean): this  
        // 向容器中同步或异步添加节点，传入参数为容器文件相对路径。如果已经调用 setTargetVal，立即生效
        loadFromFile: function(condFile, asyn) {
            this._nc.loadFromFile(condFile, asyc ? 1 : 0);
            return this;
        },
        
        // @method removeSceneNode(nodePath: String): this  
        // 从容器中删除节点，传入参数为地区名称和节点名称
        removeSceneNode: function(nodePath) {
            this._nc.removeSceneNode(nodePath);
            return this;
        },
        
        // @method clear(): this  
        // 清除容器中所有节点，被清除节点恢复初始状态
        clear: function() {
            this._nc.clear();//节点清除同时不再起效果，必须重新调用setTargetVal
            return this;
        },
        // @method restore(): this  
        // 将容器中所有节点的状态恢复到初始情况        
        restore: function() {
            //this._doAction(false);//恢复节点初始状态，必须重新调用setTargetVal
            this._nc.restoreAllMaterials();
            this._nc.restoreAllNodeProperties();
            return this;
        },       
    };
    
    // @factory Q3D.nodeContainer(ncName: String): NodeContainer
    // 创建一个容器对象
    Q3D.nodeContainer = function (ncName) {
        return new Q3D.NodeContainer(ncName);
    };
    
    
    
    // @namespace Map
    // @section 动线漫游操作
    Q3D.Map.include({
        // @method cameraRoamByFile(areaName: String, aniFile: String, startPosition: Vector3, startOrientation: Vector3): QLocalCamera 
        // 通过绑定动画文件实现摄像机第一人称漫游 ，返回 QLocalCamera 原生对象
        cameraRoamByFile: function(areaName, aniFile, startPosition, startOrientation) {
            var _lcName = "TestLocalCamera_" + mapObj.guid();
            var _nodeCreated = this.createCommonNode(areaName+"/"+_lcName, Q3D.Enums.sceneNodeType.SNODE_LocalCamera);
            
            startPosition = startPosition || Q3D.vector3d(Q3D.globalCamera().getAbsPos());
            startOrientation = startOrientation || Q3D.vector3(Q3D.globalCamera().getOrientation());
            _nodeCreated.setPosition(startPosition.get());
            _nodeCreated.setOrientation(startOrientation.get(), Q3D.Enums.nodeOrientationType.World);
            
            if (_nodeCreated != null) {
                //将创建的局部摄像机对象保存起来，同时保存全局摄像机的当前位置角度参数
                var _gc = Q3D.globalCamera();
                mapObj._gcAbsPos = Q3D.vector3d(_gc.getAbsPos());
                mapObj._gcOrientation = Q3D.vector3(_gc.getOrientation());
                mapObj._localCamera = _nodeCreated.asCamera().asLocalCamera();
                mapObj._localCamera.setNodeAnimationName(aniFile);
                mapObj._localCamera.enableBind(1);
                
                var _aniState = _nodeCreated.getNodeAnimationState();
                if (_aniState == null) return;            
                _aniState.setLoop(0);
                _aniState.setAutoPlay(1);
                mapObj._map3d.setOnAnimationEndListener(_aniState);
                mapObj.off("onCameraFlyToEnd");
                mapObj.on("onAnimationEnd", function(aniState) { 
                    mapObj._localCamera.enableBind(0);
                    Q3D.globalCamera().flyTo(mapObj._gcAbsPos, mapObj._gcOrientation, 0.5);   
                    setTimeout(function() {
                        mapObj._localCamera.getArea().destroySceneNode(mapObj._localCamera.getName());
                        mapObj._localCamera = null;						
                        mapObj.off("onAnimationEnd");						
                    }, 100);			
                });
                _aniState.play();   
                return  mapObj._localCamera;
            }       
        },
        
        // @method stopCameraRoam(): this 
        // 停止绑定动画文件实现的摄像机第一人称漫游
        stopCameraRoam: function() {
            if (mapObj._localCamera) {
                mapObj._localCamera.getNodeAnimationState().stop();
                mapObj._localCamera.enableBind(0);
                Q3D.globalCamera().flyTo(mapObj._gcAbsPos, mapObj._gcOrientation, 0.5);
                mapObj.off("onAnimationEnd");
                mapObj._localCamera.getArea().destroySceneNode(mapObj._localCamera.getName());
                mapObj._localCamera	= null;		
            }
            return this;
        },
        
         // @method cameraRoamByMovieClipFile(areaName: String, mcFile: String, actorName: String): MovieClipInstance 
        // 通过绑定动画剪辑文件实现摄像机第一人称漫游 ，返回 MovieClipInstance 对象
        cameraRoamByMovieClipFile: function(areaName, mcFile, actorName) {
                    
            var fps = 50,
                    mcName = actorName + "_mc",
                    mcInstName = actorName + "_mci";
            this.clearMovieClip(mcInstName);
            
            var _wm = mapDiv.getOcx().getWorldManager();
            _wm.loadMovieClip(mcFile,0);
            var _mc = Q3D.movieClip(mcName,fps);
            var _mcInst = Q3D.movieClipInstance(mcInstName, _mc);
            
            var _actor = _mc.get().getIActor(actorName);
            var startPos = _actor.getITrack("0").asKeyTrack().getIKey(0).getKeyIPointAsQVector3();
            var startOri = _actor.getITrack("1").asKeyTrack().getIKey(0).getKeyIPointAsQVector3();       
            
             //创建一个局部摄像机         
            var _lcName = "_LocalCamera_RoamByCamera_";
            var _nodeCreated  = mapDiv.getSceneNode(areaName+"/"+_lcName);
            if (!_nodeCreated) {
                _nodeCreated = mapDiv.createCommonNode(areaName+"/"+_lcName, Q3D.Enums.sceneNodeType.SNODE_LocalCamera);      
                //将创建的局部摄像机对象保存起来，同时保存全局摄像机的当前位置角度参数
                var _gc = Q3D.globalCamera();
                mapObj._gcAbsPos = Q3D.vector3d(_gc.getAbsPos());
                mapObj._gcOrientation = Q3D.vector3(_gc.getOrientation());
                mapObj._localCamera = _nodeCreated.asCamera().asLocalCamera();
            }            
            _nodeCreated.setPosition(startPos);
            _nodeCreated.setOrientation(startOri, Q3D.Enums.nodeOrientationType.World);
            _mcInst.setTransformPlayer(actorName, _nodeCreated);      
            _nodeCreated.asCamera().asLocalCamera().enableBind(1);
            
            _mcInst._clearMovieClipInstanceOnLastFrame(_mc.getTotalFrameLength(),function(){
                mapObj._localCamera.enableBind(0);
                Q3D.globalCamera().flyTo(mapObj._gcAbsPos, mapObj._gcOrientation, 0.5);   
                setTimeout(function() {
                    mapObj._localCamera.getArea().destroySceneNode(mapObj._localCamera.getName());
                    mapObj._localCamera = null;									
                }, 100);			
            }); 	
            _mcInst.setPlayOptions(0, false);        
    
            return _mcInst;
        },
        
        // @method roamByPolyline(nodePath: String, options: Roam options): MovieClipInstance 
        // 根据给定路线坐标实现场景中节点的动画漫游功能
        roamByPolyline: function(nodePath, options) {
            var defaultOptions = {            
                CenterLine: [], //动线中心线，由Vector3坐标组成
                OffsetDist: [],//偏移距离，单位米，用于贝塞尔曲线的控制点计算
                TotalTime: 5,//路上用时，单位秒
                DelayTime: 0, //延迟出发，单位秒
                //startFrame: 0,//启动帧
                IsLoop: false,//是否循环播放，默认不循环执行
                IsAutoPlay: false, //是否自动播放，默认否
                IsEndDestroy: true, //是否结束后删除动画对象，默认是
                PitchAllowed: true, //是否允许俯仰
                OnAnimationEndFn: null, //动画结束回调事件
            }
            Q3D.extend(defaultOptions,options);
            try {                  
                //检查参数
                if (defaultOptions.CenterLine.length < 2 || (defaultOptions.CenterLine.length >= 3 && defaultOptions.CenterLine.length != defaultOptions.OffsetDist.length)) 
                    return null;			
                var node = this.getSceneNode(nodePath);            
                if (node == null) 
                    return null; 
    
                //先过滤相邻的重复的点
                var _cl = [defaultOptions.CenterLine[0]],
                    _od = [defaultOptions.OffsetDist[0]];
                for(var i = 1; i < defaultOptions.CenterLine.length; ++i) {                
                    if (defaultOptions.CenterLine[i].equals(defaultOptions.CenterLine[i - 1]))
                        continue;
                    
                    _cl.push(defaultOptions.CenterLine[i]);
                    _od.push(defaultOptions.OffsetDist[i]);		
                }
    
                //生成旋转动画使用的数据：_clForRot数组
                if(!defaultOptions.PitchAllowed) {
                    var _clForRot = [];
                    for(var i = 0; i < _cl.length; ++i) {
                        _clForRot[i] = Q3D.vector3(_cl[i].x, 0, _cl[i].z);  //旋转动画使用_clForRot数组，位移动画使用_cl数组
                    }
                }
                else {
                    var _clForRot = _cl;  //旋转动画使用_clForRot数组，位移动画使用_cl数组
                }
                
                var path = nodePath.split("/"),
                    nodeName = path[path.length - 1],
                    areaName = path[0];
                    
                var fps = 50,
                    timeForDirAdjustion = 0.5, //用于调整方向的时间，单位为秒
                    mcName = areaName + "_" + nodeName + "_MovieClip_RoamByPolyline",
                    mcInstName = areaName + "_" + nodeName + "_MovieClipInst_RoamByPolyline",
                    actorName = areaName + "_" + nodeName + "_Actor_RoamByPolyline";
    
                this.clearMovieClip(mcInstName);				
                var	_mc = Q3D.movieClip(mcName, fps), 
                    _tt = defaultOptions.TotalTime;	
                    
                //包含0.5s的调整角度时间和0.5s结束调整时间         
                var startFrameBase = parseInt(defaultOptions.DelayTime * fps),
                    startKey = parseInt(startFrameBase + timeForDirAdjustion * fps),
                    endKey = parseInt((defaultOptions.DelayTime + defaultOptions.TotalTime + timeForDirAdjustion*2 ) * fps);
                            
                if (_cl.length == 2) {//没有控制点                
                    var startPt = _cl[0],
                        endPt = _cl[1],
                        startPtForRot = _clForRot[0],
                        endPtForRot = _clForRot[1];
                    var endRot = mapObj._map3d.getMath().directionToEuler(endPtForRot.clone().subtract(startPtForRot).get());	
                    //定义一个旋转动画
                    _mc.addActorRotateAnimation(actorName, [
                        {Key:startFrameBase, Rotate:Q3D.vector3(node.getOrientation( Q3D.Enums.orientationType.World ))},
                        {Key:startKey, Rotate:Q3D.vector3(endRot)},
                        {Key:endKey, Rotate:Q3D.vector3(endRot)}
                    ]);               
                     //定义一个位移动画                 
                    _mc.addActorTranslateAnimation(actorName, [
                        {Key:startFrameBase, Pos:Q3D.vector3(node.getPosition())},
                        {Key:startKey, Pos:startPt},
                        {Key:endKey - fps * timeForDirAdjustion, Pos:endPt},
                        {Key:endKey, Pos:endPt}
                    ]);                        
                } 
                else { //3个点以上                
                    //先计算总距离
                    var sum = 0;
                    for (var j = 0; j < _cl.length - 1; j++) {
                        sum +=  _cl[j+1].distanceTo(_cl[j]);
                    }
                    //整理最终的KeyPos
                    var keyPosTra = [], keyPosRot = [], keyPosCtl = [];
                    var currDist = 0, endRot, currKeyIndex;
                    var startPt, endPt,startPtForRot, endPtForRot; 
                    var prevPt, currPt, nextPt, prevPtForRot, currPtForRot, nextPtForRot, distToPrev, distToNext;
                    var endRotPrev, endRotNext;
                    var coeff = Q3D.vector3(1/2, 1/2, 1/2);
                    keyPosTra.push({Key:startFrameBase, Pos:Q3D.vector3(node.getPosition())});
                    keyPosRot.push({Key:startFrameBase, Rotate:Q3D.vector3(node.getOrientation( Q3D.Enums.orientationType.World ))});
                    //处理第一个点
                    keyPosTra.push({Key:startKey, Pos:_cl[0]});						
                    startPtForRot = _clForRot[0];
                    endPtForRot = _clForRot[1];
                    endRot = mapObj._map3d.getMath().directionToEuler(endPtForRot.clone().subtract(startPtForRot).get());//返回startPt指向endPt的方向
                    keyPosRot.push({Key:startKey, Rotate:Q3D.vector3(endRot)}); 
                    //处理中间的点
                    for (var i = 1; i < _cl.length - 1; i++) {                  
                        prevPt = _cl[i-1];
                        currPt = _cl[i];
                        nextPt = _cl[i+1];			
                        prevPtForRot = _clForRot[i-1];
                        currPtForRot = _clForRot[i];
                        nextPtForRot = _clForRot[i+1];										
                        distToPrev = currPt.distanceTo(prevPt); 
                        distToNext = nextPt.distanceTo(currPt);
                        currDist += distToPrev;           
                        
                        endRotPrev = mapObj._map3d.getMath().directionToEuler(currPtForRot.clone().subtract(prevPtForRot).get());
                        endRotNext = mapObj._map3d.getMath().directionToEuler(nextPtForRot.clone().subtract(currPtForRot).get());
                        if (_od [i] > 0) { //插入一个控制点和两个位置点（包括旋转角度）
                            var offsetLen = 3 * _od [i] < distToPrev ?  _od [i] : distToPrev / 3;                        
                            var diffVec = prevPt.clone().subtract(currPt).multiply(Q3D.vector3(offsetLen/distToPrev,offsetLen/distToPrev,offsetLen/distToPrev));
                            var derivedLeftPt = currPt.clone().add(diffVec);
                            currKeyIndex = parseInt(startKey + (currDist - offsetLen) / sum * fps * _tt);
                            keyPosTra.push({Key:currKeyIndex, Pos:derivedLeftPt});                        
                            keyPosRot.push({Key:currKeyIndex, Rotate:Q3D.vector3(endRotPrev)});
                            keyPosCtl.push({Key:currKeyIndex, Pos:derivedLeftPt.clone().add(currPt).multiply(coeff)});
                            offsetLen = 3 * _od [i] < distToNext ?  _od [i] : distToNext / 3;
    
                            diffVec = nextPt.clone().subtract(currPt).multiply(Q3D.vector3(offsetLen/distToNext,offsetLen/distToNext,offsetLen/distToNext));
                            var derivedRightPt = currPt.clone().add(diffVec);
                            currKeyIndex = parseInt(startKey + (currDist + offsetLen) / sum * fps * _tt);
                            keyPosTra.push({Key:currKeyIndex, Pos:derivedRightPt});
                            keyPosRot.push({Key:currKeyIndex, Rotate:Q3D.vector3(endRotNext)});
                            keyPosCtl.push({Key:currKeyIndex, Pos:derivedRightPt.clone().add(currPt).multiply(coeff)});
                        }
                        else {
                            currKeyIndex = parseInt(startKey + currDist / sum * fps * _tt);
                            keyPosTra.push({Key:currKeyIndex, Pos:currPt});
                            keyPosRot.push({Key:currKeyIndex, Rotate:Q3D.vector3(endRotNext)});
                        }
                    }   
                    //处理最后一个点
                    currKeyIndex = parseInt(startKey + fps * _tt);
                    keyPosTra.push({Key:currKeyIndex, Pos:_cl[i]});
                    keyPosTra.push({Key:endKey, Pos:_cl[i]});						
                    startPtForRot = _clForRot[i-1];
                    endPtForRot = _clForRot[i];																		  
                    endRot = mapObj._map3d.getMath().directionToEuler(endPtForRot.clone().subtract(startPtForRot).get());     						
                    keyPosRot.push({Key:currKeyIndex, Rotate:Q3D.vector3(endRot)}); 
                    keyPosRot.push({Key:endKey, Rotate:Q3D.vector3(endRot)}); 				
                    //定义一个位移动画                 
                    _mc.addActorTranslateAnimation(actorName, keyPosTra);   
                    
                    //添加关键点
                    for (var k = 0; k < keyPosCtl.length; ) {
                        _mc.addActorTrackControlPoint(actorName, keyPosCtl[k].Key, keyPosCtl[k].Pos, true);//补充控制点
                        _mc.addActorTrackControlPoint(actorName, keyPosCtl[k+1].Key, keyPosCtl[k+1].Pos, false);   
                        k += 2;
                    }
                    //定义一个旋转动画
                    _mc.addActorRotateAnimation(actorName, keyPosRot);                      
                }          
                var _mcInst = Q3D.movieClipInstance(mcInstName, _mc);
                _mcInst.setTransformPlayer(actorName, node);       
                _mcInst.setPlayOptions(0, defaultOptions.IsLoop);  
            
                if (defaultOptions.IsEndDestroy) { //如果不保留动画对象，播放结束后清除相关动画对象
                    _mcInst._clearMovieClipInstanceOnLastFrame(endKey,defaultOptions.OnAnimationEndFn); 		
                }
                
                if (defaultOptions.IsAutoPlay)
                    _mcInst.play();
                
                return _mcInst;
    
            } catch (e) {
                this.showNotice("错误", "roamByPolyline: " + e.message);
                return null;
            }
            return null;
        },  
        
        // @method roamByGPSTrack(nodePath: String, options: Track options): MovieClipInstance 
        // 根据历史GPS轨迹实现场景中节点的动画漫游功能：建议初始创建对象在场景的基准点上
        roamByGPSTrack: function(nodePath, options) {
            var defaultOptions = {            
                CenterLine: [], //动线中心线，可以是GlobalVec3d或者Vector3
                SecsFromStart: [], //从起点开始计算的时间差，单位秒
                Heading: null,//每个位置上的水平偏转角度，若未提供该参数，则角度自动计算
                TotalTime: 5,//轨迹回放路上总用时，单位秒
                IsLoop: false,//是否循环播放，默认不循环执行
                IsAutoPlay: false, //是否自动播放，默认否
                IsEndDestroy: true, //是否结束后删除动画对象，默认是
                PitchAllowed: true, //是否允许俯仰
                BaseGlobalPos: null, //用于修正经纬度坐标, GlobalVec3d类型, 只对传入的中心线点为GlobalVec3d时有效
                OnAnimationEndFn: null, //动画结束回调事件
            }
            Q3D.extend(defaultOptions,options);
            try {          
                var _cltemp = defaultOptions.CenterLine,
                    _ss = defaultOptions.SecsFromStart,
                    _hd = defaultOptions.Heading,
                    _tt = defaultOptions.TotalTime;			        
                //检查参数
                if (_cltemp.length < 2 || (_cltemp.length >= 3 && _cltemp.length != _ss.length) || (_hd != null && _hd.length != _cltemp.length)) 
                    return null;		
                
                var node = this.getSceneNode(nodePath);            
                if (node == null) 
                    return null;          
                
                var path = nodePath.split("/"),
                    nodeName = path[path.length - 1],
                    areaName = path[0];
                
                if(Q3D.Util.isQMapObj(_cltemp[0].get(),Q3D.Enums.ValueTypeCLSID.QGlobalVec3d)) {
                    //处理修正用的经纬度坐标
                    var basePosV3 = Q3D.vector3(0, 0, 0);
                    if(defaultOptions.BaseGlobalPos) {
                       basePosV3 = Q3D.vector3(BaseGlobalPos.toLocalPos(areaName));
                    }            
                    
                    //QGlobalVec3d转换为QVector3
                    var _cl = [];
                    for(var i = 0; i < _cltemp.length; ++i) {
                        var v3 = Q3D.vector3(_cltemp[i].toLocalPos(areaName));					
                        _cl.push(v3.subtract(basePosV3));
                    }	
                }
                else {	//如果传入的为QVector3，则直接使用
                    var _cl = _cltemp;
                }		
                
                //准备旋转动画角度计算使用的数据：_clForRot数组
                if(!defaultOptions.PitchAllowed) {
                    var _clForRot = [];
                    for(var i = 0; i < _cl.length; ++i) {
                        _clForRot[i] = Q3D.vector3(_cl[i].x, 0, _cl[i].z);  //旋转动画使用_clForRot数组，位移动画使用_cl数组
                    }
                } else {
                    var _clForRot = _cl;  //旋转动画使用_clForRot数组，位移动画使用_cl数组
                }            
                
                //定义动画剪辑对象		
                var fps = 50,
                    timeForDirAdjustion = 0.02,	//用于调整方向的时间，单位为秒
                    scale = _tt / _ss[_ss.length - 1], 
                    mcName = areaName + "_" + nodeName + "_MovieClip_RoamByGPSTrack",
                    mcInstName = areaName + "_" + nodeName + "_MovieClipInst_RoamByGPSTrack",
                    actorName = areaName + "_" + nodeName + "_Actor_RoamByGPSTrack";
                    
                this.clearMovieClip(mcInstName);
                var	_mc = Q3D.movieClip(mcName, fps);             
                var keyPosTra = [], keyPosRot = [];
                var  startPtForRot, endPtForRot, endRot;
                if (_hd == null) {
                    //根据两点计算角度
                    for (var i = 0; i < _cl.length - 1; i++) {
                        //添加位移动画数据
                        keyPosTra.push({Key:parseInt(_ss[i] * fps * scale), Pos:_cl[i]});  
                        keyPosTra.push({Key:parseInt((_ss[i] + timeForDirAdjustion) * fps * scale), Pos:_cl[i]});
                        //添加旋转动画数据
                        keyPosRot.push({Key:parseInt(_ss[i] * fps * scale), Rotate: keyPosRot.length == 0 ? Q3D.vector3(node.getOrientation( Q3D.Enums.orientationType.World )) : keyPosRot[keyPosRot.length-1].Rotate});
                        startPtForRot = _clForRot[i];
                        endPtForRot = _clForRot[i+1];
                        //startPt和endPt相同时，将保持原来的方向
                        var dirV3 = endPtForRot.clone().subtract(startPtForRot);
                        endRot = (Math.abs(dirV3.x) < 1.0E-9 && Math.abs(dirV3.y) < 1.0E-9 && Math.abs(dirV3.z) < 1.0E-9)? keyPosRot[keyPosRot.length-1].Rotate : Q3D.vector3(mapObj._map3d.getMath().directionToEuler(dirV3.get()));//startPt指向endPt的方向					
                        keyPosRot.push({Key:parseInt((_ss[i] + timeForDirAdjustion) * fps * scale), Rotate:endRot}); 
                    }
                    //最后一个点单独处理
                    keyPosTra.push({Key:parseInt(_tt * fps), Pos:_cl[_cl.length - 1]});  
                    keyPosRot.push({Key:parseInt(_tt * fps), Rotate:endRot}); 
                } else {
                    //第一个点单独处理
                    node.setOrientation(Q3D.vector3(0,_hd[0],0).get(),Q3D.Enums.orientationType.World);
                    keyPosTra.push({Key:parseInt(_ss[0] * fps * scale), Pos:_cl[0]});
                    keyPosRot.push({Key:parseInt(_ss[0] * fps * scale), Rotate:Q3D.vector3(0,_hd[0],0)});
                    //利用参数中的角度
                    for (var i = 1; i < _cl.length; i++) {
                        //添加位移动画数据
                        keyPosTra.push({Key:parseInt((_ss[i] - timeForDirAdjustion) * fps * scale) , Pos:_cl[i]});
                        keyPosTra.push({Key:parseInt(_ss[i] * fps * scale), Pos:_cl[i]});                      
                        //添加旋转动画数据
                        keyPosRot.push({Key:parseInt((_ss[i] - timeForDirAdjustion) * fps * scale), Rotate:keyPosRot[keyPosRot.length-1].Rotate});
                        keyPosRot.push({Key:parseInt(_ss[i] * fps * scale), Rotate:Q3D.vector3(0,_hd[i],0)}); 
                    }
                }
                
                //定义一个位移动画                 
                _mc.addActorTranslateAnimation(actorName, keyPosTra);
                //定义一个旋转动画
                _mc.addActorRotateAnimation(actorName, keyPosRot);
                
                var _mcInst = Q3D.movieClipInstance(mcInstName, _mc);
                _mcInst.setTransformPlayer(actorName, node);       
                _mcInst.setPlayOptions(0, defaultOptions.IsLoop);  
            
                if (defaultOptions.IsEndDestroy) { //如果不保留动画对象，播放结束后清除相关动画对象
                    _mcInst._clearMovieClipInstanceOnLastFrame(parseInt(_tt * fps),defaultOptions.OnAnimationEndFn); 		
                }
                if (defaultOptions.IsAutoPlay)
                    _mcInst.play();
                return _mcInst;           
            } catch (e) {
                this.showNotice("错误", "roamByGPSTrack: " + e.message);
                return null;
            }
            return null;
        },
        
        // @method clearMovieClip(mciName: String, keyToStop?: Number, saveMC?: Boolean): this
        // 用于主动清除动画剪辑实例对象和注册的帧事件，可以选择是否保留动画剪辑对象
        clearMovieClip: function(mciName, keyToStop, saveMC) {
            var _mci = mapObj._map3d.getWorldManager().getMovieClipInstance(mciName);
            if (_mci == null) return null;
            
            _mci.stop();
            _mci.gotoFrame(keyToStop || 0);
                    
            if (this._widgetEvents != undefined) {
                var typeListeners = mapObj._widgetEvents["onMovieClipInstancePassFrame"];
                if (typeListeners) {
                    for (var i = 0, len = typeListeners.length; i < len; ) {
                        var keyArr = typeListeners[i].key.split("/");
                        if (keyArr[0] == mciName) {
                            _mci.unregisterFrameEvent(keyArr[keyArr.length-1]);
                            mapObj.detachUIEvent("onMovieClipInstancePassFrame", typeListeners[i].key);
                            len = len - 1;
                            continue;
                        }
                        ++i;
                    }
                }
            }
            
            var saveMC = saveMC || false;
            if (!saveMC) {
                var _mcName = _mci.getMovieClipCName();
                mapObj._map3d.getWorldManager().destroyMovieClip(_mcName);
            }
            mapObj._map3d.getWorldManager().destroyMovieClipInstance(mciName);
            return this;
            
        },
        
        // @method createRoamRoute(nodePath: String, options: RoamRoute options): QLineNode
        // 绘制场景中节点的指定路线漫游轨迹，返回原生 QLineNode 对象
        createRoamRoute: function(nodePath, options) {	
            var defaultCreateOption = {            
                Material: null,
                SpecialTransparent: true, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                LinePoints: [], //一维数组,由Vector3坐标组成
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
            };
            Q3D.Util.jQueryExtend(true, defaultCreateOption, options);			
                    
            //检查参数
            if (defaultCreateOption.LinePoints.length < 2 || (defaultCreateOption.LinePoints.length >= 3 && defaultCreateOption.LinePoints.length != defaultCreateOption.OffsetDist.length)) {
                return null;	
            }				
            //先过滤相邻的重复的点
            var _lp = [defaultCreateOption.LinePoints[0]],
                _od = [defaultCreateOption.OffsetDist[0]];
            for(var i = 1; i < defaultCreateOption.LinePoints.length; ++i) {
                if (defaultCreateOption.LinePoints[i].equals(defaultCreateOption.LinePoints[i - 1]))
                        continue;
                
                _lp.push(defaultCreateOption.LinePoints[i]);
                _od.push(defaultCreateOption.OffsetDist[i]);		
            }
            
            var prevPt, nextPt, currPt, derivedLeftPt, derivedRightPt, diffVec;
            var distToPrev, distToNext, offsetLen;
            var besselPoints = [];
            var coeff = Q3D.vector3(1/2, 1/2, 1/2);
            //处理原始点数据，生成用于画贝塞尔曲线的一系列点
            //第一个原始点和最后一个原始点单独处理，避免for循环中每次都要做判断
            besselPoints.push(_lp[0].clone());
            besselPoints.push(Q3D.vector3(_lp[0].x * 2/3, _lp[0].y * 2/3, _lp[0].z * 2/3));
            besselPoints.push(Q3D.vector3(_lp[0].x * 1/3, _lp[0].y * 1/3, _lp[0].z * 1/3));
            for(var i = 1, len = _lp.length; i < len - 1; ++i) {
                if(_od[i] > 0) {
                    prevPt = _lp[i-1];//Q3D.vector3(_lp[i-1].x, _lp[i-1].y, _lp[i-1].z);
                    currPt = _lp[i];//Q3D.vector3(_lp[i].x, _lp[i].y, _lp[i].z);
                    nextPt = _lp[i+1];//Q3D.vector3(_lp[i+1].x, _lp[i+1].y, _lp[i+1].z);	
                    distToPrev = currPt.distanceTo(prevPt); 						
                    offsetLen = 3 * _od[i] < distToPrev ?  _od[i] : distToPrev / 3;                        
                    diffVec = prevPt.clone().subtract(currPt).multiply(Q3D.vector3(offsetLen/distToPrev,offsetLen/distToPrev,offsetLen/distToPrev));
                    derivedLeftPt = currPt.clone().add(diffVec);				
                    distToNext = nextPt.distanceTo(currPt);
                    offsetLen = 3 * _od[i] < distToNext ?  _od[i] : distToNext / 3;
                    diffVec = nextPt.clone().subtract(currPt).multiply(Q3D.vector3(offsetLen/distToNext,offsetLen/distToNext,offsetLen/distToNext));			
                    derivedRightPt = currPt.clone().add(diffVec);	
                    
                    var num = besselPoints.length;
                    besselPoints[num - 2].add(Q3D.vector3(derivedLeftPt.x * 1/3, derivedLeftPt.y * 1/3, derivedLeftPt.z * 1/3).get());
                    besselPoints[num - 1].add(Q3D.vector3(derivedLeftPt.x * 2/3, derivedLeftPt.y * 2/3, derivedLeftPt.z * 2/3).get());				
                    besselPoints.push(derivedLeftPt);
                    besselPoints.push(derivedLeftPt.clone().add(currPt).multiply(coeff));
                    besselPoints.push(derivedRightPt.clone().add(currPt).multiply(coeff));
                    besselPoints.push(derivedRightPt);
                    besselPoints.push(Q3D.vector3(derivedRightPt.x * 2/3, derivedRightPt.y * 2/3, derivedRightPt.z * 2/3));
                    besselPoints.push(Q3D.vector3(derivedRightPt.x * 1/3, derivedRightPt.y * 1/3, derivedRightPt.z * 1/3));							
                }
                else {
                    var num = besselPoints.length;
                    besselPoints[num - 2].add(Q3D.vector3(_lp[i].x * 1/3, _lp[i].y * 1/3, _lp[i].z * 1/3));
                    besselPoints[num - 1].add(Q3D.vector3(_lp[i].x * 2/3, _lp[i].y * 2/3, _lp[i].z * 2/3));
                    besselPoints.push(_lp[i].clone());
                    besselPoints.push(Q3D.vector3(_lp[i].x * 2/3, _lp[i].y * 2/3, _lp[i].z * 2/3));
                    besselPoints.push(Q3D.vector3(_lp[i].x * 1/3, _lp[i].y * 1/3, _lp[i].z * 1/3));							
                }
            }
            var num = besselPoints.length,
                i = len - 1;
            besselPoints[num - 2].add(Q3D.vector3(_lp[i].x * 1/3, _lp[i].y * 1/3, _lp[i].z * 1/3));
            besselPoints[num - 1].add(Q3D.vector3(_lp[i].x * 2/3, _lp[i].y * 2/3, _lp[i].z * 2/3));
            besselPoints.push(_lp[i].clone());	
            //数据处理完毕，开始画线		
            var createOptions = {            
                Material: defaultCreateOption.Material,
                SpecialTransparent: defaultCreateOption.SpecialTransparent, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                LinePoints: [besselPoints],
                LineOptions: {
                    LineType: Q3D.Enums.lineType.Bessel,
                    BesselDim: 3, //贝塞尔曲线阶数
                    Subdivision: defaultCreateOption.LineOptions.Subdivision, //设置生成曲线细分程度
                    LineWidth: defaultCreateOption.LineOptions.LineWidth,
                    WrapLen: defaultCreateOption.LineOptions.WrapLen,
                    //以下用于动态创建的材质
                    Color: defaultCreateOption.LineOptions.Color, //线的颜色
                    Alpha: defaultCreateOption.LineOptions.Alpha, //线的透明度
                },
                OnLineCreated: defaultCreateOption.OnLineCreated
            }				
        
            return this.createPolyLine(nodePath, createOptions);		
        },
        
        // @method firstPersonView(nodePath: String, cameraName: String, options: FirstPerson options): QLocalCamera
        // 在动画播放过程中切换到第一人称漫游, 返回原生 QLocalCamera 对象
        firstPersonView: function(nodePath, cameraName, options) {	
            var defaultOptions = {
                Postion: Q3D.vector3(0, 0, 0),
                Orientation: Q3D.vector3(0, 180, 0),
                OrientationType: Q3D.Enums.nodeOrientationType.Self,
            };
            Q3D.Util.jQueryExtend(true, defaultOptions, options);
            
            var node = mapObj.getSceneNode(nodePath);
            if(!node) return null;
            
            var path = nodePath.split("/"),
               nodeName = path[path.length - 1],
               areaName = path[0];        
            
            var camFullName = areaName + "/" + nodeName + "/" + cameraName,
                localCamNode = mapObj.getSceneNode(areaName, cameraName);
            if(!localCamNode) {
                localCamNode = mapObj.createCommonNode(camFullName, Q3D.Enums.sceneNodeType.SNODE_LocalCamera);
            }
            var localCam = localCamNode.asCamera().asLocalCamera();
            localCam.setPosition(defaultOptions.Postion.get());
            localCam.setOrientation(defaultOptions.Orientation.get(), defaultOptions.OrientationType);
            
            var mainCamera = mapObj.getOcx().getWorldManager().getMainCamera(0);
            localCam.bindCamera(mainCamera);
            localCam.enableBind(1);	
            return localCamNode;
        },
        
        // @method thirdPersonView(areaName: String, cameraName: String): this
        // 在动画播放过程中切换回第三人称漫游
        thirdPersonView: function(areaName, cameraName) {	
            var localCamNode = mapObj.getSceneNode(areaName, cameraName);
            if(localCamNode != null) {
                localCamNode.asCamera().asLocalCamera().unbindCamera();
                mapObj.getArea(areaName).destroySceneNode(cameraName);
            }
            return this;
        },
        
        // @method startRealTimeTrack(nodePath: String, options: RealTimeTrack options): this
        // 实现节点实时追踪功能，在每次收到新的数据后调用
        startRealTimeTrack: function(nodePath, options) {
            var defaultOptions = {            
                TimeDiff: null, //本次数据上报时间差相对于追踪开始时间差，单位S
                Location: null, //当前位置坐标，Vector3或者GlobalVector3d对象
                Heading: null,//到达后的水平偏转角度，[-180,180]，0为正北方向顺时针为正，比如无人机，如果设置该参数则不再根据两点计算方向
                PitchAllowed: true, //是否允许俯仰            
            }
            Q3D.extend(defaultOptions,options);       
            
            //确保节点（通常是模型节点）已创建
            var node = this.getSceneNode(nodePath);
            if (node == null || node.getNodeType() != Q3D.Enums.sceneNodeType.SNODE_Model)
                return null;
            
            var path = nodePath.split("/"),
                nodeName = path[path.length - 1],
                areaName = path[0];        
            
            var mcName = areaName + "_" + nodeName + "_MovieClip_RealTimeGPSTrack",
                mcInstName = areaName + "_" + nodeName + "_MovieClipInst_RealTimeGPSTrack",
                actorName = areaName + "_" + nodeName + "_Actor_RealTimeGPSTrack",
                fps = 50,
                timeForDirAdjustion = 0.1,	//用于调整方向的时间，单位为秒
                wm = mapObj._map3d.getWorldManager();		
             
            //获取对应的MovieClip对象，如果不存在则创建
            var mc = wm.getMovieClip(mcName);		
            if (!mc) {
                mc = wm.createMovieClip(mcName);
                mc.setFPS(fps);
            } 
            //获取对应的MovieClipInstance对象，如果不存在则创建
            var mcInst = wm.getMovieClipInstance(mcInstName);
            if(!mcInst) {
                mcInst = wm.createMovieClipInstance(mcInstName);
                mcInst.setMovieClip(mcName);
                mapObj._map3d.setMovieClipInstanceEventListener(mcInst);	//打开事件监听
            }
            
            
            var transKeyTrack = null, 
                rotKeyTrack = null;
                
            var currPos = Q3D.Util.isQMapObj(defaultOptions.Location.get(),Q3D.Enums.ValueTypeCLSID.QVector3) ? defaultOptions.Location : Q3D.vector3(defaultOptions.Location.toLocalPos(areaName));	
            
            //获取对应的Actor对象，如果不存在则创建	
            var actor = mc.getIActor(actorName);
            if (actor == null) { //如果不存在
                mapObj._gTrackInfo = mapObj._gTrackInfo || {};
                mapObj._prevDirection = mapObj._prevDirection || {};	//保存上一次的方向
                actor = mc.addIActor(actorName);
                if(!actor) {
                    throw new Error("添加Actor失败");
                }
                transKeyTrack = actor.addITrack(Q3D.Enums.actorTrackType.TransformMove, Q3D.Enums.actorKeyType.KeyAuto).asKeyTrack();
                rotKeyTrack = actor.addITrack(Q3D.Enums.actorTrackType.TransformRotate, Q3D.Enums.actorKeyType.KeyAuto).asKeyTrack(); 	
                
                //添加第一个key位移动画
                var key = transKeyTrack.addIKey(0);
                key.setKeyIPointAsQVector3(currPos.get());                 
                key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.EaseOut);
                
                   //添加第一个key旋转动画
                var currRot = Q3D.vector3(node.getOrientation(0));
                if(defaultOptions.Heading != null) {
                    currRot.y = defaultOptions.Heading;
                }
                key = rotKeyTrack.addIKey(0);			
                key.setKeyIPointAsQVector3(currRot.get());
                key.setRightCurveCtrlType(Q3D.Enums.curveCtrlType.Point);    
                //保存所有的关键帧
                mapObj._gTrackInfo[mcName] = [0];
                //保存方向
                mapObj._prevDirection[mcName] = currRot;
                //绑定player并播放
                mcInst.setPlayer(actorName, Q3D.Enums.playerType.Node, areaName + "/" + nodeName);
                mcInst.setLoop(0); 
                mcInst.play();               
            } 
            else {
                // 取出track，添加新的key
                transKeyTrack = actor.getITrack(Q3D.Enums.actorTrackType.TransformMove).asKeyTrack();
                rotKeyTrack = actor.getITrack(Q3D.Enums.actorTrackType.TransformRotate).asKeyTrack();          
                //获取前一个key，即最近一次接收数据的时间
                var len = mapObj._gTrackInfo[mcName].length;
                var startKeyIndex = mapObj._gTrackInfo[mcName][len - 1],            
                    startTransKey = transKeyTrack.getIKey(startKeyIndex),            
                    startPt = startTransKey.getKeyIPointAsQVector3();
    
                var	startPtForRot = Q3D.vector3(startPt),          
                    endPtForRot = currPos.clone();		
                    
                if(!defaultOptions.PitchAllowed) {
                    startPtForRot.y = 0;
                    endPtForRot.y = 0;
                }
                
                var dirV3 = endPtForRot.clone().subtract(startPtForRot);
                var endRot = (Math.abs(dirV3.x) < 1.0E-9 && Math.abs(dirV3.y) < 1.0E-9 && Math.abs(dirV3.z) < 1.0E-9)? mapObj._prevDirection[mcName] : Q3D.vector3(mapObj._map3d.getMath().directionToEuler(dirV3.get()));//startPt指向endPt的方向	
                //调整方向      
                if (defaultOptions.TimeDiff * fps > startKeyIndex + timeForDirAdjustion * fps) {                
                    var key = null,
                        keyIndex = 0;
                    //添加用于调整方向的key
                    if (defaultOptions.Heading == null) {
                        keyIndex = Math.round(startKeyIndex + timeForDirAdjustion * fps);
                        //添加位移
                        key = transKeyTrack.addIKey(keyIndex);   
                        key.setKeyIPointAsQVector3(startPt);//同一个位置					
                        key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                        key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                        key.setLeftCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);
                        key.setRightCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);
                        //添加旋转
                        key = rotKeyTrack.addIKey(keyIndex);  
                        key.setKeyIPointAsQVector3(endRot.get());
                        key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear); 
                        key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                        key.setLeftCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);
                        key.setRightCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);
                        //保存关键帧
                        mapObj._gTrackInfo[mcName].push(keyIndex);
                    } else {
                        keyIndex = Math.round(defaultOptions.TimeDiff * fps - timeForDirAdjustion * fps);
                        //添加位移
                        key = transKeyTrack.addIKey(keyIndex);
                        key.setKeyIPointAsQVector3(currPos.get());//新的终点位置
                        key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                        key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                        key.setLeftCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);
                        key.setRightCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);					
                        //添加旋转
                        key = rotKeyTrack.addIKey(keyIndex);
                        key.setKeyIPointAsQVector3(mapObj._prevDirection[mcName].get()); 					
                        key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear); 
                        key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                        key.setLeftCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);
                        key.setRightCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);					
                        //保存关键帧
                        mapObj._gTrackInfo[mcName].push(keyIndex);
                    }                
    
                    // 添加下一个key
                    //添加位移
                    keyIndex = Math.round(defaultOptions.TimeDiff * fps);
                    key = transKeyTrack.addIKey(keyIndex);
                    key.setKeyIPointAsQVector3(currPos.get());
                    key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                    key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                    key.setLeftCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);
                    key.setRightCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);	
                    //添加旋转
                    if (defaultOptions.Heading == null) {
                        key = rotKeyTrack.addIKey(keyIndex);
                        key.setKeyIPointAsQVector3(endRot.get());
                        key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                        key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                        key.setLeftCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);
                        key.setRightCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);	
                    } else {
                        key = rotKeyTrack.addIKey(keyIndex);
                        endRot = mapObj._prevDirection[mcName];
                        endRot.y = defaultOptions.Heading;
                        key.setKeyIPointAsQVector3(endRot.get());
                        key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                        key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                        key.setLeftCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);
                        key.setRightCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);	
                    }
                    //保存关键帧
                    mapObj._gTrackInfo[mcName].push(keyIndex);
                    //保存方向
                    mapObj._prevDirection[mcName] = endRot;				
                }
                
                //删除无用的关键帧
                var currFrameNo = mcInst.getCurrFrameNo();
                for(var index = 0, len = mapObj._gTrackInfo[mcName].length; index < len; ++index) {
                    if(mapObj._gTrackInfo[mcName][index]  > currFrameNo) {
                        if(index === 0) break;
                                        
                        for(var j = 0; j < index - 1; ++j) {
                            var keyIndex = mapObj._gTrackInfo[mcName][j];
                            transKeyTrack.removeKey(keyIndex);
                            rotKeyTrack.removeKey(keyIndex);
                        }
                        mapObj._gTrackInfo[mcName].splice(0, index - 1);
                        break;
                    }
                }            
                mcInst.play();      
            }
            return this;
        },
        
        // @method startRealTimeTrackEx(nodePath: String, options: RealTimeTrack options): this
        // 实现节点实时追踪功能，在每次收到新的数据后调用,一次可传入多个点
        startRealTimeTrackEx: function(nodePath, options) {
            var defaultOptions = {            
                TimeDiff: null, //本次数据上报时间差相对于追踪开始时间差，单位S。（如果一次传入多个点，则以最后一个点的时间计算）
                LocationArr: null, //Vector3或者GlobalVector3d对象数组（也就是说可以一次传多个点，但是请注意，初始时刻只需传一个点）
                Heading: null,//到达后的水平偏转角度（数组，长度要与LocationArr一致），[-180,180]，0为正北方向顺时针为正，比如无人机，如果设置该参数则不再根据两点计算方向
                PitchAllowed: true, //是否允许俯仰            
            }
            Q3D.extend(defaultOptions,options);       
            
            if(defaultOptions.Heading != null && defaultOptions.Heading.length != defaultOptions.LocationArr.length) return null;	
            
            //确保节点（通常是模型节点）已创建
            var node = this.getSceneNode(nodePath);
            if (node == null || node.getNodeType() != Q3D.Enums.sceneNodeType.SNODE_Model)
                return null;
            
            var path = nodePath.split("/"),
                nodeName = path[path.length - 1],
                areaName = path[0];        
            
            var mcName = areaName + "_" + nodeName + "_MovieClip_RealTimeGPSTrack",
                mcInstName = areaName + "_" + nodeName + "_MovieClipInst_RealTimeGPSTrack",
                actorName = areaName + "_" + nodeName + "_Actor_RealTimeGPSTrack",
                fps = 50,
                timeForDirAdjustion = 0.04,	//用于调整方向的时间，单位为秒
                wm = mapObj._map3d.getWorldManager();		
             
            //获取对应的MovieClip对象，如果不存在则创建
            var mc = wm.getMovieClip(mcName);		
            if (!mc) {
                mc = wm.createMovieClip(mcName);
                mc.setFPS(fps);
            } 
            //获取对应的MovieClipInstance对象，如果不存在则创建
            var mcInst = wm.getMovieClipInstance(mcInstName);
            if(!mcInst) {
                mcInst = wm.createMovieClipInstance(mcInstName);
                mcInst.setMovieClip(mcName);
                mapObj._map3d.setMovieClipInstanceEventListener(mcInst);	//打开事件监听
            }   
            
            var transKeyTrack = null, 
                rotKeyTrack = null;
    
            //获取对应的Actor对象，如果不存在则创建	
            var actor = mc.getIActor(actorName);
            if (actor == null) { //如果不存在
                mapObj._gTrackInfo = mapObj._gTrackInfo || {};
                mapObj._prevDirection = mapObj._prevDirection || {};	//保存上一次的方向
                actor = mc.addIActor(actorName);
                if(!actor) {
                    throw new Error("添加Actor失败");
                }
                transKeyTrack = actor.addITrack(Q3D.Enums.actorTrackType.TransformMove, Q3D.Enums.actorKeyType.KeyAuto).asKeyTrack();
                rotKeyTrack = actor.addITrack(Q3D.Enums.actorTrackType.TransformRotate, Q3D.Enums.actorKeyType.KeyAuto).asKeyTrack(); 	
                
                var currPos = Q3D.Util.isQMapObj(defaultOptions.LocationArr[0].get(),Q3D.Enums.ValueTypeCLSID.QVector3) ? defaultOptions.LocationArr[0] : Q3D.vector3(defaultOptions.LocationArr[0].toLocalPos(areaName));	
                //添加第一个key位移动画
                var key = transKeyTrack.addIKey(0);
                key.setKeyIPointAsQVector3(currPos.get());                 
                key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.EaseOut);
                
                   //添加第一个key旋转动画
                var currRot = Q3D.vector3(node.getOrientation(0));
                if(defaultOptions.Heading != null) {
                    currRot.y = defaultOptions.Heading[0];
                }
                key = rotKeyTrack.addIKey(0);			
                key.setKeyIPointAsQVector3(currRot.get());
                key.setRightCurveCtrlType(Q3D.Enums.curveCtrlType.Point);    
                //保存所有的关键帧
                mapObj._gTrackInfo[mcName] = [0];
                //保存方向
                mapObj._prevDirection[mcName] = currRot;
                //绑定player并播放
                mcInst.setPlayer(actorName, Q3D.Enums.playerType.Node, areaName + "/" + nodeName);
                mcInst.setLoop(0); 
                mcInst.play();               
            } 
            else {
                // 取出track，添加新的key
                transKeyTrack = actor.getITrack(Q3D.Enums.actorTrackType.TransformMove).asKeyTrack();
                rotKeyTrack = actor.getITrack(Q3D.Enums.actorTrackType.TransformRotate).asKeyTrack();          
                //获取前一个key，即最近一次接收数据的时间
                var len = mapObj._gTrackInfo[mcName].length;
                var prevKeyIndex = mapObj._gTrackInfo[mcName][len - 1],            
                    prevTransKey = transKeyTrack.getIKey(prevKeyIndex),            
                    prevPt = prevTransKey.getKeyIPointAsQVector3(),
                    prevPtForRot = Q3D.vector3(prevPt),
                    endKeyIndex = defaultOptions.TimeDiff * fps,
                    deltaKeyIndex = endKeyIndex - prevKeyIndex;
                    
                var locArr = defaultOptions.LocationArr,
                    locArrLen = locArr.length;
            
                //计算每一段的距离，根据距离比例分配时间
                var dists = [locArr[0].distanceTo(prevPt)];	
                var sum = dists[0];
                for(var i = 0; i < locArrLen - 1; ++i) {
                    dists.push(locArr[i+1].distanceTo(locArr[i]));
                    sum += dists[i+1];
                }
        
                for(var i = 0; i < locArrLen; ++i) {
                    var currPt = Q3D.Util.isQMapObj(locArr[i].get(),Q3D.Enums.ValueTypeCLSID.QVector3) ? locArr[i] : Q3D.vector3(locArr[i].toLocalPos(areaName));
                    var currKeyIndex = prevKeyIndex + parseInt(dists[i] / sum * deltaKeyIndex);
                    
                    var currPtForRot = currPt.clone();
                    if(!defaultOptions.PitchAllowed) {
                        prevPtForRot.y = 0;
                        currPtForRot.y = 0;
                    }
                    
                    var dirV3 = currPtForRot.clone().subtract(prevPtForRot);
                    var currRot = (Math.abs(dirV3.x) < 1.0E-9 && Math.abs(dirV3.y) < 1.0E-9 && Math.abs(dirV3.z) < 1.0E-9)? mapObj._prevDirection[mcName] : Q3D.vector3(mapObj._map3d.getMath().directionToEuler(dirV3.get()));//startPt指向endPt的方向	
                    
                    if (currKeyIndex > prevKeyIndex + timeForDirAdjustion * fps) {                
                        var key = null,
                            keyIndex = 0;
                        //添加用于调整方向的key
                        if (defaultOptions.Heading == null) {
                            keyIndex = Math.round(prevKeyIndex + timeForDirAdjustion * fps);
                            //添加位移
                            key = transKeyTrack.addIKey(keyIndex);   
                            key.setKeyIPointAsQVector3(prevPt);//同一个位置					
                            key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                            key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                            key.setLeftCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);
                            key.setRightCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);
                            //添加旋转
                            key = rotKeyTrack.addIKey(keyIndex);  
                            key.setKeyIPointAsQVector3(currRot.get());
                            key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear); 
                            key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                            key.setLeftCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);
                            key.setRightCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);
                            //保存关键帧
                            mapObj._gTrackInfo[mcName].push(keyIndex);
                        } else {
                            keyIndex = Math.round(currKeyIndex - timeForDirAdjustion * fps);
                            //添加位移
                            key = transKeyTrack.addIKey(keyIndex);
                            key.setKeyIPointAsQVector3(currPt.get());//新的终点位置
                            key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                            key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                            key.setLeftCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);
                            key.setRightCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);					
                            //添加旋转
                            key = rotKeyTrack.addIKey(keyIndex);
                            key.setKeyIPointAsQVector3(mapObj._prevDirection[mcName].get()); 					
                            key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear); 
                            key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                            key.setLeftCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);
                            key.setRightCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);					
                            //保存关键帧
                            mapObj._gTrackInfo[mcName].push(keyIndex);
                        }                
    
                        // 添加下一个key
                        //添加位移
                        key = transKeyTrack.addIKey(currKeyIndex);
                        key.setKeyIPointAsQVector3(currPt.get());
                        key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                        key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                        key.setLeftCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);
                        key.setRightCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);	
                        //添加旋转
                        if (defaultOptions.Heading == null) {
                            key = rotKeyTrack.addIKey(currKeyIndex);
                            key.setKeyIPointAsQVector3(currRot.get());
                            key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                            key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                            key.setLeftCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);
                            key.setRightCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);	
                        } else {
                            key = rotKeyTrack.addIKey(currKeyIndex);
                            currRot = mapObj._prevDirection[mcName];
                            currRot.y = defaultOptions.Heading[i];
                            key.setKeyIPointAsQVector3(currRot.get());
                            key.setLeftTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                            key.setRightTimeCtrlType(Q3D.Enums.timeCtrlType.Linear);
                            key.setLeftCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);
                            key.setRightCurveCtrlType(Q3D.Enums.curveCtrlType.Linear);	
                        }
                        //保存关键帧
                        mapObj._gTrackInfo[mcName].push(currKeyIndex);
                        //保存方向
                        mapObj._prevDirection[mcName] = currRot;				
                    }
            
                    prevKeyIndex = currKeyIndex;
                    prevPtForRot = currPtForRot;
                    prevPt = currPt.get();		
                }
                            
                //删除无用的关键帧
                var currFrameNo = mcInst.getCurrFrameNo();
                for(var index = 0, len = mapObj._gTrackInfo[mcName].length; index < len; ++index) {
                    if(mapObj._gTrackInfo[mcName][index]  > currFrameNo) {					
                        if(index === 0) break;
                                        
                        for(var j = 0; j < index - 1; ++j) {
                            var keyIndex = mapObj._gTrackInfo[mcName][j];
                            transKeyTrack.removeKey(keyIndex);
                            rotKeyTrack.removeKey(keyIndex);
                        }
                        mapObj._gTrackInfo[mcName].splice(0, index - 1);
                        break;
                    }
                }		          
                mcInst.play();      
            }
            return this;
        },
        
        // @method stopRealTimeTrack(nodePath: String): this
        // 停止节点实时追踪功能
        stopRealTimeTrack: function(nodePath) {
            var path = nodePath.split("/"),
               nodeName = path[path.length - 1],
               areaName = path[0];
               
            var mcName = areaName + "_" + nodeName + "_MovieClip_RealTimeGPSTrack",
                mcInstName = areaName + "_" + nodeName + "_MovieClipInst_RealTimeGPSTrack";
            
            if(this.clearMovieClip(mcInstName)) {
                delete mapObj._gTrackInfo[mcName];
                delete mapObj._prevDirection[mcName];
            }        
            return this;
        },
        
        // @method drawTrackLine(nodePath: String, options?: TrackLine options): this
        // 实时绘制指定节点的动画轨迹拖尾线	
        drawTrackLine: function(nodePath, options) {
            var defaultOptions = {
                Material: null, //如果需要调用此方法创建大量polyline，建议使用已有材质，而不是动态创建的材质		
                Color: Q3D.colourValue("#FF0000", 1), //线的颜色，以下用于动态创建的材质
                Alpha: 1, //线的透明度
                LineWidth: 2, //线宽
                WrapLen: 2,
                SpecialTransparent: true, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                TimeInterval: 300,	//时间间隔，单位为毫秒
            };
            Q3D.Util.jQueryExtend(true, defaultOptions, options);
            
            var sNode = mapObj.getSceneNode(nodePath);
            if(!sNode) {
                return null;
            }
            
            var path = nodePath.split("/"),
                nodeName = path[path.length - 1],
                areaName = path[0];
            
            var lineNodeName = "TrackLineOf_" + areaName + "_" + nodeName,
                lineNodePath = areaName +"/" + lineNodeName;
                
            //删除线节点（如果已存在）
            this.stopAndRemoveTrackLine(nodePath);
            //创建线节点
            var lineNodeCreated = this.createCommonNode(lineNodePath, Q3D.Enums.sceneNodeType.SNODE_Line);
            if(!lineNodeCreated) {
                return null;
            }
            var lineAppend = lineNodeCreated.asLine();
            //判断材质是否存在，不存在则新建
            if (defaultOptions.Material != null) {
                lineAppend.setMaterial(defaultOptions.Material);
            }
            else {
                var tempMatName = "defaultMaterialForLine-" + this.guid(), //随机材质名称
                    material = this._map3d.getResourceManager().getResource(Q3D.Enums.resourceType.MATERIAL, tempMatName);
                    
                if (material == null) {
                    material = this.createSimpleMaterial(tempMatName, {
                        Alpha: defaultOptions.Alpha,
                        EmissiveColor: defaultOptions.Color,
                    });
                }
                else {
                    material = material.asMaterial();
                    material.setAlpha(defaultOptions.Alpha);
                    material.setEmissiveColor(defaultOptions.Color.get());
                }                 
                lineAppend.setMaterial(tempMatName);
            }
            var posV3d = sNode.getAbsPos();
            lineAppend.setAbsPos(posV3d);
            
            var line = lineAppend.addLine();
            line.setLineType(0);
            line.setLineWidth(defaultOptions.LineWidth);
            line.setWrapLen(defaultOptions.WrapLen);
            line.addPoint(Q3D.vector3(0, 0, 0).get());
            
            this._timeOutIdForTrackLine = this._timeOutIdForTrackLine || {};
            this._timeOutIdForTrackLine[lineNodeName] = setTimeout(function(){
                if(sNode.getName() === "") {
                    clearTimeout(mapObj._timeOutIdForTrackLine[lineNodeName]);
                    return this;
                }
                var currPosV3d = sNode.getAbsPos();
                currPosV3d.subtract(posV3d);
                var currPosV3 = Q3D.vector3(currPosV3d.x, currPosV3d.y, currPosV3d.z).get();
                //检查是否与前面的点重合，如果重合就不添加
                var count = line.getPointCount();
                var tempV3 = line.getPoint(count - 1);
                var margin = Math.max(Math.abs(currPosV3.x - tempV3.x), Math.abs(currPosV3.y - tempV3.y), Math.abs(currPosV3.z - tempV3.z));
                if(margin > 1.0E-9) {
                    line.addPoint(currPosV3);
                }	
                
                mapObj._timeOutIdForTrackLine[lineNodeName] = setTimeout(arguments.callee, defaultOptions.TimeInterval);
            }, defaultOptions.TimeInterval);	
            
            return this;
        },
    
        // @method stopDrawingTrackLine(nodePath: String): this
        // 停止绘制节点动画轨迹拖尾线
        stopDrawingTrackLine: function(nodePath) {
            var path = nodePath.split("/"),
                nodeName = path[path.length - 1],
                areaName = path[0];    
            var lineNodeName = "TrackLineOf_" + areaName + "_" + nodeName;		
            if(this._timeOutIdForTrackLine != undefined && this._timeOutIdForTrackLine[lineNodeName] != undefined) {
                clearTimeout(this._timeOutIdForTrackLine[lineNodeName]);
            }	
            return this;
        },
        
        //@method stopAndRemoveTrackLine(nodePath: String): this
        //停止绘制节点动画轨迹拖尾线，并清除已画的轨迹线
        stopAndRemoveTrackLine: function(nodePath) {
            var path = nodePath.split("/"),
                nodeName = path[path.length - 1],
                areaName = path[0];            
            var lineNodeName = "TrackLineOf_" + areaName + "_" + nodeName;
            if(this._timeOutIdForTrackLine != undefined && this._timeOutIdForTrackLine[lineNodeName] != undefined) {
                clearTimeout(this._timeOutIdForTrackLine[lineNodeName]);
                delete this._timeOutIdForTrackLine[lineNodeName];
            }				
            this.destroySceneNode(areaName, lineNodeName);
            return this;
        },
    
        // @method drawTrackLineByPipe(nodePath: String, options: TrackPipeLine options): this
        // 绘制指定节点的动画轨迹拖尾线(用管道方式实现)	
        drawTrackLineByPipe: function(nodePath, options) {
            var defaultOptions = {
                Material: null, 	//设置管道前、后、内、外四个材质，如果只有一个设置成相同的数值		
                Color: Q3D.colourValue("#FF0000", 1),	//用于动态创建的材质
                Alpha: 1, 			//透明度
                OuterRadius: 0.5, 	//管子外径，单位为米
                InnerRadius: 0.4,	//管子内径，单位为米
                Radius: 1,			//拐弯半径，单位为米
                Angle: 20,			//弯曲度（隔多少度一个截面），单位为度
                HeightOffset: 0, 	//管子整体抬高多少米
                TimeInterval: 500,	//时间间隔，单位为毫秒
            };
            Q3D.Util.jQueryExtend(true, defaultOptions, options);
            
            var sNode = mapObj.getSceneNode(nodePath);
            if(!sNode) {
                return null;
            }
            var path = nodePath.split("/"),
                nodeName = path[path.length - 1],
                areaName = path[0];            
            
            var pipeNodeName = "TrackLineByPipe_" + areaName + "_" + nodeName,
                pipeNodePath = areaName +"/" + pipeNodeName;
                
            //删除线节点（如果已存在）
            this.stopAndRemoveTrackLineByPipe(nodePath);
            //创建线节点
            var vecNodeCreated = this.createCommonNode(pipeNodePath, Q3D.Enums.sceneNodeType.SNODE_VecModel);
            if(!vecNodeCreated) {
                return null;
            }
            var vecNodeAppend = vecNodeCreated.asVecModel(),
                vecPipe = vecNodeAppend.createVecModel(Q3D.Enums.vecModelType.QPipe).asPipe();
                
            //判断材质是否存在，不存在则新建		
            if (defaultOptions.Material != null) {
                if (Q3D.Util.isArray(defaultOptions.Material)) {
                    for (var i = 0; i <= defaultOptions.Material.length; i++) {
                        vecNodeAppend.setMaterial(i, defaultOptions.Material[i]);
                        if ( i == 3) break;
                    }
                } else {
                    vecNodeAppend.setMaterial(0, defaultOptions.Material);
                    vecNodeAppend.setMaterial(1, defaultOptions.Material);
                    vecNodeAppend.setMaterial(2, defaultOptions.Material);
                    vecNodeAppend.setMaterial(3, defaultOptions.Material);
                }
            } else {
                var tempMatName = "defaultMaterialForPipe-" + this.guid(); //随机材质名称
                var _res = this._map3d.getResourceManager().getResource(Q3D.Enums.resourceType.MATERIAL, tempMatName);
                if (_res == null) {
                    var material = this.createSimpleMaterial(tempMatName, {
                            Alpha: defaultOptions.Alpha,
                            DiffuseColor: defaultOptions.Color,
                        });
                } else {
                    var material = _res.asMaterial();
                    material.setAlpha(defaultOptions.Alpha);
                    material.setEmissiveColor(defaultOptions.Color.get());
                }                 
                vecNodeAppend.setMaterial(0, tempMatName);
                vecNodeAppend.setMaterial(1, tempMatName);
                vecNodeAppend.setMaterial(2, tempMatName);
                vecNodeAppend.setMaterial(3, tempMatName);
            }		
            var posV3d = sNode.getAbsPos();
            vecNodeAppend.setAbsPos(posV3d);
            
            vecPipe.setRadiusInner(defaultOptions.InnerRadius);
            vecPipe.setRadiusOuter(defaultOptions.OuterRadius);
            vecPipe.setCrossPieces(24);		//设置生成管道圆面的面个数
            vecPipe.addPoint(Q3D.arcVertex(0, 0 + defaultOptions.HeightOffset, 0, defaultOptions.Radius, defaultOptions.Angle).get());
    
            this._timeOutIdForTrackLineByPipe = this._timeOutIdForTrackLineByPipe || {};
            this._timeOutIdForTrackLineByPipe[pipeNodeName] = setTimeout(function(){
                if(sNode.getName() === "") {
                    clearTimeout(mapObj._timeOutIdForTrackLineByPipe[pipeNodeName]);
                    return this;
                }
                var currPosV3d = sNode.getAbsPos();
                currPosV3d.subtract(posV3d);
                var currArcVer = Q3D.arcVertex(currPosV3d.x, currPosV3d.y + defaultOptions.HeightOffset, currPosV3d.z, defaultOptions.Radius, defaultOptions.Angle).get();
                //检查是否与前面的点重合，如果重合就不添加
                var count = vecPipe.getCount(),
                    currV3 = currArcVer.getPos(),
                    tempV3 = vecPipe.getPoint(count - 1).getPos();
                var margin = Math.max(Math.abs(currV3.x - tempV3.x), Math.abs(currV3.y - tempV3.y), Math.abs(currV3.z - tempV3.z));
                if(margin > 1.0E-9) {
                    vecPipe.addPoint(currArcVer);
                }	
                
                mapObj._timeOutIdForTrackLineByPipe[pipeNodeName] = setTimeout(arguments.callee, defaultOptions.TimeInterval);
            }, defaultOptions.TimeInterval);	
    
            return this;
        },
        
        // @method stopDrawingTrackLineByPipe(nodePath: String): this
        // 停止绘制节点动画轨迹拖尾线(用管道方式实现)	
        stopDrawingTrackLineByPipe: function(nodePath) {
            var path = nodePath.split("/"),
                nodeName = path[path.length - 1],
                areaName = path[0];        
            var pipeNodeName = "TrackLineByPipe_" + areaName + "_" + nodeName;		
            if(this._timeOutIdForTrackLineByPipe != undefined && this._timeOutIdForTrackLineByPipe[pipeNodeName] != undefined) {
                clearTimeout(this._timeOutIdForTrackLineByPipe[pipeNodeName]);
            }	
            return this;
        },
        
        //@method stopAndRemoveTrackLineByPipe(nodePath: String): this
        //停止绘制节点动画轨迹拖尾线(用管道方式实现)	，并清除已画的轨迹线.
        stopAndRemoveTrackLineByPipe: function(nodePath) {
            var path = nodePath.split("/"),
                nodeName = path[path.length - 1],
                areaName = path[0];            
            var pipeNodeName = "TrackLineByPipe_" + areaName + "_" + nodeName;
            if(this._timeOutIdForTrackLineByPipe != undefined && this._timeOutIdForTrackLineByPipe[pipeNodeName] != undefined) {
                clearTimeout(this._timeOutIdForTrackLineByPipe[pipeNodeName]);
                delete this._timeOutIdForTrackLineByPipe[pipeNodeName];
            }				
            this.destroySceneNode(areaName, pipeNodeName);
            return this;
        },
        
        // @method drawTrackLineByWall(nodePath: String, options?: TrackWall options): this
        // 画指定节点的动画轨迹线(用墙来实现)	
        drawTrackLineByWall: function(nodePath, options) {
            var defaultOptions = {
                Material: null, 	//设置墙体的5个通用材质：0 底面 1 顶面 2 左面 3 右面 4 断面，如果只有一个设置成相同的数值；如果多给的材质，可通过addMaterial添加 		
                Color: Q3D.colourValue("#FF0000", 1),	//用于动态创建的材质
                Alpha: 1, 			//透明度
                IgnoreFloor: true,
                IgnoreCeil: false,
                Height: 0.01,			//默认高度
                Width: 0.5,			//默认宽度
                HeightOffset: 0, 	//整体抬高多少米
                TimeInterval: 500,	//时间间隔，单位为毫秒
            };
            Q3D.Util.jQueryExtend(true, defaultOptions, options);
            
            var sNode = mapObj.getSceneNode(nodePath);
            if(!sNode) {
                return null;
            }
            
            var path = nodePath.split("/"),
                nodeName = path[path.length - 1],
                areaName = path[0];  
            
            var wallNodeName = "TrackLineByWall_" + areaName + "_" + nodeName,
                wallNodePath = areaName +"/" + wallNodeName;
                
            //删除节点（如果已存在）
            this.stopAndRemoveTrackLineByWall(nodePath);
            //创建线节点
            var vecNodeCreated = this.createCommonNode(wallNodePath, Q3D.Enums.sceneNodeType.SNODE_VecModel);
            if(!vecNodeCreated) {
                return null;
            }
            var vecNodeAppend = vecNodeCreated.asVecModel(),
                vecWall = vecNodeAppend.createVecModel(Q3D.Enums.vecModelType.QWalls).asWalls();
                
            //判断材质是否存在，不存在则新建		
            if (defaultOptions.Material != null) {
                if (Q3D.Util.isArray(defaultOptions.Material)) {
                    for(var i = 0; i <= defaultOptions.Material.length; i++) {
                        if (i <= 4) {
                            vecNodeAppend.setMaterial(i, defaultOptions.Material[i]);
                        }
                        else {
                            vecNodeAppend.addMaterial(defaultOptions.Material[i]);
                        }
                    }
                }
                else {				
                    for(var i = 0; i < 5; ++i) {
                        vecNodeAppend.setMaterial(i, defaultOptions.Material);
                    }
                }
            }
            else {
                var tempMatName = "defaultMaterialForWalls-" + this.guid(); //随机材质名称
                var _res = this._map3d.getResourceManager().getResource(Q3D.Enums.resourceType.MATERIAL, tempMatName);
                if (_res == null) {
                    var material = this.createSimpleMaterial(tempMatName, {
                            Alpha: defaultOptions.Alpha,
                            DiffuseColor: defaultOptions.Color,
                        });
                }
                else {
                    var material = _res.asMaterial();
                    material.setAlpha(defaultOptions.Alpha);
                    material.setEmissiveColor(defaultOptions.Color.get());
                }  
    
                for(var i = 0; i < 5; ++i) {
                    vecNodeAppend.setMaterial(i, tempMatName);
                }				
            }
            
            vecWall.setDefaultSize(defaultOptions.Width, defaultOptions.Height);
            if (defaultOptions.IgnoreCeil) {
                vecWall.ignoreCeil(1);
            }
            if (defaultOptions.IgnoreFloor) {
                vecWall.ignoreFloor(1);
            }
            
            var posV3d = sNode.getAbsPos();
            vecNodeAppend.setAbsPos(posV3d);
            vecWall.addCorner(0, Q3D.vector3(0, defaultOptions.HeightOffset, 0).get());
    
            this._timeOutIdForTrackLineByWall = this._timeOutIdForTrackLineByWall || {};
            this._timeOutIdForTrackLineByWall[wallNodeName] = setTimeout(function(){
                if(sNode.getName() === "") {
                    clearTimeout(mapObj._timeOutIdForTrackLineByWall[wallNodeName]);
                    return this;
                }
                var currPosV3d = sNode.getAbsPos();
                currPosV3d.subtract(posV3d);
                var currPosV3 = Q3D.vector3(currPosV3d.x, currPosV3d.y + defaultOptions.HeightOffset, currPosV3d.z).get();
                //检查是否与前面的点重合，如果重合就不添加
                var count = vecWall.getCornerCount(),
                    prevCornerID = vecWall.getCornerID(count - 1),
                    tempV3 = vecWall.getCornerPos(prevCornerID);
                var margin = Math.max(Math.abs(currPosV3.x - tempV3.x), Math.abs(currPosV3.y - tempV3.y), Math.abs(currPosV3.z - tempV3.z));
                if(margin > 1.0E-9) {
                    vecWall.addCorner(prevCornerID + 1, currPosV3);
                    vecWall.constructWall(count - 1, prevCornerID, prevCornerID + 1);
                }	
                
                mapObj._timeOutIdForTrackLineByWall[wallNodeName] = setTimeout(arguments.callee, defaultOptions.TimeInterval);
            }, defaultOptions.TimeInterval);	
    
            return this;
        },
        
        // @method stopDrawingTrackLineByWall(nodePath: String): this
        // 停止画轨迹线	
        stopDrawingTrackLineByWall: function(nodePath) {
            var path = nodePath.split("/"),
                nodeName = path[path.length - 1],
                areaName = path[0];     
            var wallNodeName = "TrackLineByWall_" + areaName + "_" + nodeName;		
            if(this._timeOutIdForTrackLineByWall != undefined && this._timeOutIdForTrackLineByWall[wallNodeName] != undefined) {
                clearTimeout(this._timeOutIdForTrackLineByWall[wallNodeName]);
            }	
            return this;
        },
        
        //@method stopAndRemoveTrackLineByWall(nodePath: String): this
        //停止画轨迹线，并清除已画的轨迹线.
        stopAndRemoveTrackLineByWall: function(nodePath) {
            var path = nodePath.split("/"),
                nodeName = path[path.length - 1],
                areaName = path[0];  
            var wallNodeName = "TrackLineByWall_" + areaName + "_" + nodeName;
            if(this._timeOutIdForTrackLineByWall != undefined && this._timeOutIdForTrackLineByWall[wallNodeName] != undefined) {
                clearTimeout(this._timeOutIdForTrackLineByWall[wallNodeName]);
                delete this._timeOutIdForTrackLineByWall[wallNodeName];
            }				
            this.destroySceneNode(areaName, wallNodeName);
            return this;
        },
            
            
        
        
        // _getRandomNum(min: Number, max: Number): Number
        //获取min和max之间的一个随机数
        _getRandomNum: function(min, max) {
            var range = max - min,  
                random = Math.random();     
            return (min + random * range);
        },
        
        // _addVehicle(nodePath: String, options: Vehicle options): this
        // 往车流动画系统中添加车辆，返回this对象
        _addVehicle: function(nodePath, options) {
            var defaultCreateOption = {
                Position: null,   //Vector3对象
                Orientation: null,   //Vector3对象
                OrientationType: Q3D.Enums.nodeOrientationType.Self,
                Mesh: null,
                RoutePtsV3Array: [],   //Vector3数组
                Velocity: 400/36,   //单位：米/秒
                StartTime: 0,   //开始时间，相对于基准时间，单位为秒
            };
            Q3D.Util.jQueryExtend(true, defaultCreateOption, options);		
            var sNodeCreated = this.createCommonNode(nodePath, Q3D.Enums.sceneNodeType.SNODE_Model);
            if(sNodeCreated != null) {
                var modelNode = sNodeCreated.asModel();
                if(defaultCreateOption.Position != null) {			
                    modelNode.setPosition(defaultCreateOption.Position.get());
                }
                if(defaultCreateOption.Orientation != null) {
                    modelNode.setOrientation(defaultCreateOption.Orientation.get(), defaultCreateOption.OrientationType);
                }
                if(defaultCreateOption.Mesh  != null) {
                    modelNode.setMesh(defaultCreateOption.Mesh);
                }
                var activeCtrlObj = modelNode.getActiveCtrlObj(),
                    velMeterPerSec = defaultCreateOption.Velocity;
                    
                //var areaName = nodePath.split("/")[0];
                
                activeCtrlObj.beginAddKey();
                for(var i = 0; i < defaultCreateOption.RoutePtsV3Array.length; ++i) {
                    if(i == 0) {					
                        activeCtrlObj.addKey(defaultCreateOption.StartTime, defaultCreateOption.RoutePtsV3Array[i].get());
                    }
                    else {
                        activeCtrlObj.addKeyByVel(velMeterPerSec, defaultCreateOption.RoutePtsV3Array[i].get());
                    }				
                }
                activeCtrlObj.endAddKey();
                activeCtrlObj.setLoop(1);
                mapObj._map3d.setActiveCtrlObjListener(activeCtrlObj);
            }
            else {
                return null;
            }
            return this;
        },  
        
        // _getTotalRoadLength(routePtsArray: Array): Number
        //获取道路总长,参数为Vector3数组
        _getTotalRoadLength: function(routePtsArray) {
            var totalLength = 0;
            for(var i = 1; i < routePtsArray.length; ++i) {
                var dx = routePtsArray[i].x - routePtsArray[i - 1].x,
                    dy = routePtsArray[i].y - routePtsArray[i - 1].y,
                    dz = routePtsArray[i].z - routePtsArray[i - 1].z;			
                totalLength += Math.sqrt(dx * dx + dy * dy + dz * dz);
            }
            return totalLength;
        },
        
        // @method createOneRoadwayTraffic(roadwayPath: String, options: Roadway options): Number
        //创建单车道的简单车流动画，返回跑完道路全程所需时间（单位为秒）
        createOneRoadwayTraffic: function(roadwayPath, options) {
            var defaultOptions = {
                Velocity: 40,            	//车速,单位为千米/小时
                RoutePtsGV3d: null,		 	//表示车道坐标，可以是分号分隔的经纬度坐标字符串或 GlobalVec3d 坐标数组。(注：RoutePtsGV3d和RoutePtsV3二选一)
                RoutePtsV3: null,			//表示车道坐标，可以是分号分隔的Vector3坐标数组,RoutePtsGV3d。(注：RoutePtsGV3d和RoutePtsV3二选一)
                AverageDistance: 5,		 	//平均车距，单位为米
                MinDistance: 5,			 	//最小车距,单位为米
                VehicleMeshArray: [],    	//车辆模型mesh数组
                BaseGlobalPos: null,		//用于修正经纬度坐标, 可以是经纬度坐标字符串或 GlobalVec3d 类型坐标
                IsLabeled: false, //是否添加POI
            };
            
            Q3D.Util.jQueryExtend(true, defaultOptions, options);
            //检查参数
            if((!defaultOptions.RoutePtsGV3d && !defaultOptions.RoutePtsV3) || !defaultOptions.VehicleMeshArray.length || !defaultOptions.MinDistance) return null;
            
            var path = roadwayPath.split("/"),
                roadwayName = path[path.length - 1],
                areaName = path[0];        
            
            var parentNodePath = areaName + "/" + roadwayName,
                parentNode = mapObj.createCommonNode(parentNodePath, Q3D.Enums.sceneNodeType.SNODE_Group);	
            if(!parentNode) return null;
    
            //车道坐标以Vector3形式给出
            if(defaultOptions.RoutePtsV3 != null){	
                var ptV3Arr = defaultOptions.RoutePtsV3;
            }	
            else if(defaultOptions.RoutePtsGV3d != null) {	//车道坐标以经纬度坐标形式给出
                var basePosV3 = Q3D.vector3(0, 0, 0);
                if(!!defaultOptions.BaseGlobalPos) {
                    if (typeof defaultOptions.BaseGlobalPos == "string") {
                        basePosV3 = Q3D.vector3(defaultOptions.BaseGlobalPos.toGlobalVec3d().toLocalPos(areaName));
                    } else {
                        basePosV3 = Q3D.vector3(defaultOptions.BaseGlobalPos.toLocalPos(areaName));
                    }
                }
                //将经纬度字符串转出Vector3数组
                var ptsStrArr = null, 
                    ptV3Arr = [],
                    ptV3 = null;
                if (typeof defaultOptions.RoutePtsGV3d == "string") {
                    ptsStrArr = defaultOptions.RoutePtsGV3d.split(";");
                    for(var i = 0; i < ptsStrArr.length; ++i) {
                        ptV3 = Q3D.vector3(ptsStrArr[i].toGlobalVec3d().toLocalPos(areaName));
                        ptV3.subtract(basePosV3);
                        ptV3Arr.push(ptV3);
                    }	
                } else {
                    for(var i = 0; i < defaultOptions.RoutePtsGV3d.length; ++i) {
                        ptV3 = Q3D.vector3(defaultOptions.RoutePtsGV3d[i].toLocalPos(areaName));
                        ptV3.subtract(basePosV3);
                        ptV3Arr.push(ptV3);
                    }	
                }        		
            }
                    
            //计算道路总长
            var totalRoadLen = this._getTotalRoadLength(ptV3Arr);	
            var averageDistance = defaultOptions.AverageDistance < defaultOptions.MinDistance ? defaultOptions.MinDistance : defaultOptions.AverageDistance;
            var velocity = defaultOptions.Velocity * 1000 / 3600,	            	//转换车速，从千米/小时转换成米/秒
                minTimeInterval = defaultOptions.MinDistance / velocity,         	//两辆车最小时间间隔
                averageTimeInterval = averageDistance / velocity,					//两辆车平均时间间隔
                totalTime = totalRoadLen / velocity,	                        	//跑完全程所需时间,单位为秒
                currTime = -minTimeInterval,
                minRandom = minTimeInterval,
                maxRandom = averageTimeInterval * 2 - minTimeInterval,
                id = 0;
            
            while(currTime < (totalTime - minRandom)) {
                //if(currTime < (totalTime - minRandom)) {
                var nodePath = parentNodePath + "/" + roadwayName + "Vehicle" + id;	
                if(currTime > totalTime - minRandom - maxRandom) {
                    currTime = totalTime - minRandom;
                }
                else {
                    currTime = currTime + this._getRandomNum(minRandom, maxRandom);
                }			
                var options = {
                    Position: Q3D.vector3(Q3D.globalVec3d(0, 0, 0).toLocalPos(areaName)),  //模型初始放在很远的地方
                    Orientation: Q3D.vector3(0, 0, 0),
                    OrientationType: Q3D.Enums.nodeOrientationType.Self,
                    Mesh: defaultOptions.VehicleMeshArray[Math.floor(Math.random() * defaultOptions.VehicleMeshArray.length)],
                    RoutePtsV3Array: ptV3Arr,   //QVector3数组
                    Velocity: velocity,    		//单位：米/秒
                    StartTime: currTime, 
                };							
                this._addVehicle(nodePath, options);
                if(defaultOptions.IsLabeled) {
                    var poiOptions = {
                        POIOptions: {
                            FontName: "Arial",
                            FontSize: 16,
                            FontColor: Q3D.colourValue("#ff0000", 1),
                            POILayout: Q3D.Enums.poiLayOut.Left,
                            CharScale: 1,
                            Text: "Vehicle" + id,
                            FontOutLine: 1, //文字描边宽度
                            FontEdgeColor: Q3D.colourValue(1, 1, 0.5, 1), //文字描边颜色
                        }
                    };	
                    this.createPOI(areaName + "/" + roadwayName + "Vehicle" + id + "/POI_" + roadwayName + "_Vehicle_" + id, poiOptions);
                }
                ++id;
            }
            return totalTime;
        },
        
        // @method clearOneRoadwayTraffic(roadwayPath: String): this
        //清除单车道的车流动画
        clearOneRoadwayTraffic: function(roadwayPath) {
            return mapObj.destroySceneNode(roadwayPath);
        },	
      
        // @method addVehicleByGPSInfo(nodePath: String, options: Vehicle options): QActiveCtrlObj
        // 根据GPS数据信息往车流动画系统中添加车辆，如果车辆已存在，则继续往后添加关键帧
        addVehicleByGPSInfo: function(nodePath, options) {
            var defaultOptions = {
                Position: null,      //Vector3对象
                Orientation: null,   //Vector3对象
                OrientationType: Q3D.Enums.nodeOrientationType.Self,
                Mesh: null,
                MeshType: 1,		// 1: .mesh文件； 2: .lodg文件
                RoutePtsV3Array: [],   //Vector3数组
                SecsFromStart: [],	  //从起点开始算起的时间差，单位秒
                OnActCtrlObjAniEnd: null,	//动画结束事件	
            };
            Q3D.Util.jQueryExtend(true, defaultOptions, options);
            //检查参数
            if(!defaultOptions.RoutePtsV3Array || !defaultOptions.SecsFromStart || defaultOptions.RoutePtsV3Array.length != defaultOptions.SecsFromStart.length) {	
                return null;
            }
        
            var path = nodePath.split("/"),
                areaName = path[0],
                nodeName = path[path.length - 1],
                nodeExist = true;
                
            var sNode = this.getSceneNode(areaName, nodeName);
            if(!sNode) {			
                sNode = this.createCommonNode(nodePath, Q3D.Enums.sceneNodeType.SNODE_Model);
                var modelNode = sNode.asModel();
                if(defaultOptions.Position != null) {			
                    modelNode.setPosition(defaultOptions.Position.get());
                }
                if(defaultOptions.Orientation != null) {
                    modelNode.setOrientation(defaultOptions.Orientation.get(), defaultOptions.OrientationType);
                }
                if(defaultOptions.Mesh != null) {
                    switch(defaultOptions.MeshType) {
                        case 1:
                            modelNode.setMesh(defaultOptions.Mesh);
                            break;
                        case 2:
                            modelNode.setLodGroup(defaultOptions.Mesh);
                            modelNode.loadAllResource();
                            //modelNode.setCombineType(4);
                            break;
                    }
                }
                nodeExist = false;
            }
    
            var activeCtrlObj = sNode.getActiveCtrlObj();			
            activeCtrlObj.beginAddKey();
            for(var i = 0; i < defaultOptions.RoutePtsV3Array.length; ++i) {
                activeCtrlObj.addKey(defaultOptions.SecsFromStart[i], defaultOptions.RoutePtsV3Array[i].get());				
            }
            activeCtrlObj.endAddKey();
            if(!nodeExist) {
                activeCtrlObj.setMaxKeyframeBufferSize(0);
                mapObj._map3d.setActiveCtrlObjListener(activeCtrlObj);
                if(defaultOptions.OnActCtrlObjAniEnd && Q3D.Util.isFunction(defaultOptions.OnActCtrlObjAniEnd)) {
                    mapObj.attachUIEvent("onActCtrlObjAniEnd", nodeName, defaultOptions.OnActCtrlObjAniEnd);
                }
            }
    
            return activeCtrlObj;
        },
    
        
        // @method addVehicleByGPSInfoEx(nodePath: String, options: VehicleEx options): QActiveCtrlObj
        // 根据GPS数据信息往车流动画系统中添加车辆，如果车辆已存在，则继续往后添加关键帧
        addVehicleByGPSInfoEx: function(nodePath, options) {
            var defaultOptions = {
                Position: null,      //Vector3对象
                Orientation: null,   //Vector3对象
                OrientationType: Q3D.Enums.nodeOrientationType.Self,
                Mesh: null,
                MeshType: 1,		// 1: .mesh文件； 2: .lodg文件
                LocInfos: null,   //时间和经纬度坐标数组,格式为：[["28808",117.384888,34.138813],["28809",117.384743,34.138821]]
                OnActCtrlObjAniEnd: null,	//动画结束事件	
            };
            Q3D.Util.jQueryExtend(true, defaultOptions, options);
            //检查参数
            if(!defaultOptions.LocInfos || defaultOptions.LocInfos.length == 0) {	
                return null;
            }
        
            var path = nodePath.split("/"),
                areaName = path[0],
                nodeName = path[path.length - 1],
                nodeExist = true;
                
            var sNode = this.getSceneNode(areaName, nodeName);
            if(!sNode) {			
                sNode = this.createCommonNode(nodePath, Q3D.Enums.sceneNodeType.SNODE_Model);
                var modelNode = sNode.asModel();
                if(defaultOptions.Position != null) {			
                    modelNode.setPosition(defaultOptions.Position.get());
                }
                if(defaultOptions.Orientation != null) {
                    modelNode.setOrientation(defaultOptions.Orientation.get(), defaultOptions.OrientationType);
                }
                if(defaultOptions.Mesh != null) {
                    switch(defaultOptions.MeshType) {
                        case 1:
                            modelNode.setMesh(defaultOptions.Mesh);
                            break;
                        case 2:
                            modelNode.setLodGroup(defaultOptions.Mesh);
                            modelNode.loadAllResource();
                            //modelNode.setCombineType(4);
                            break;
                    }
                }
                nodeExist = false;
            }
    
            var activeCtrlObj = sNode.getActiveCtrlObj();			
            activeCtrlObj.beginAddKey();
            for(var i = 0; i < defaultOptions.LocInfos.length; ++i) {
                var currLocInfo = defaultOptions.LocInfos[i];
                var v3 = Q3D.vector3(currLocInfo[1], 0, currLocInfo[2]).get();
                activeCtrlObj.addKey(parseFloat(currLocInfo[0]), v3);				
            }
            activeCtrlObj.endAddKey();
            if(!nodeExist) {
                activeCtrlObj.setMaxKeyframeBufferSize(0);
                mapObj._map3d.setActiveCtrlObjListener(activeCtrlObj);
                if(defaultOptions.OnActCtrlObjAniEnd && Q3D.Util.isFunction(defaultOptions.OnActCtrlObjAniEnd)) {
                    mapObj.attachUIEvent("onActCtrlObjAniEnd", nodeName, defaultOptions.OnActCtrlObjAniEnd);
                }
            }
    
            return activeCtrlObj;
        },	
        
        // @method removeVehicle(nodePath: String): this
        // 删除车流动画系统中的车辆（如果在回调事件中使用，请配合 setTimeout），返回this对象
        removeVehicle: function(nodePath) {
            var path = nodePath.split("/"),
                areaName = path[0],
                nodeName = path[path.length - 1];
                
            var sNode = this.getSceneNode(areaName, nodeName);
            if(!sNode)	return;
            var activeCtrlObj = sNode.getActiveCtrlObj();
            mapObj._map3d.removeActiveCtrlObjListener(activeCtrlObj);
            mapObj.detachUIEvent("onActCtrlObjAniEnd", nodeName);   //删除动画结束事件
            mapObj.destroySceneNode(areaName, nodeName);		
        },
    });
    
    
    
    // @namespace Map
    // @section UI调用接口
    
    Q3D.Map.include({ 
    
        //获取指定widget的所有子孙widget, 存放在offspringArray中
        getWidgetOffspring: function(widget, offspringArray) {
            var childWidgetList = widget.getChildren();
    
            if (childWidgetList !== null) {
                for(var i = childWidgetList.getItemSize() ; i > 0; --i) {
                    var currentChild = childWidgetList.getItem(i - 1);
                    offspringArray.push(currentChild);
                    this.getWidgetOffspring(currentChild, offspringArray);
                }
            }
        },
        
        //获取指定Layout的所有widget
        getLayoutAllWidgets: function(nameOfLayout) {
            var uiSystem = mapObj._map3d.getUISystem(),
                layout = uiSystem.getLayout(nameOfLayout),
                rootWidgetList = null,
                rootWidget = null,
                allWidgetsArray = [];
            
            if(layout !== null) {
                rootWidgetList = layout.getRootWidgets();
                for(var i = rootWidgetList.getItemSize(); i > 0; --i) {
                    rootWidget = rootWidgetList.getItem(i - 1);
                    allWidgetsArray.push(rootWidget);
                    this.getWidgetOffspring(rootWidget, allWidgetsArray);
                }			
            }		
            return allWidgetsArray;
        },
        
        // @method setLayoutVisible(nameOfLayout: String, isVisible: Boolean): this
        // 设置layout显示或隐藏
        setLayoutVisible: function(nameOfLayout, isVisible) {
            var uiSystem = mapObj._map3d.getUISystem(),
                layout = uiSystem.getLayout(nameOfLayout),
                rootWidgetList = null,
                rootWidget = null;
            
            if(layout === null) {
                return ;
            }
            
            rootWidgetList = layout.getRootWidgets();
            for (var i = rootWidgetList.getItemSize() ; i > 0; --i) {
                rootWidget = rootWidgetList.getItem(i - 1).setVisible(isVisible? 1:0);
            }
            return this;
        },
        
        // @method loadLayout(nameOfLayout: String, isVisible: Boolean, layoutfileName: String, left: Number, top: Number, width: Number, height: Number): QUILayout
        // 加载layout，并对layout中的button设置监听，返回 QUILayout 原生对象
        loadLayout: function(nameOfLayout, isVisible, layoutfileName, left, top, width, height) {
            var uiSystem = mapObj._map3d.getUISystem(),
                layout = uiSystem.getLayout(nameOfLayout);			
    
            if (layout === null) {
                var allWidgetsArray = [];
    
                layout = uiSystem.loadRootLayout(nameOfLayout, layoutfileName);					
                allWidgetsArray = this.getLayoutAllWidgets(nameOfLayout);
                //遍历所有widget，如果是button widget，就添加对它的监听
                allWidgetsArray.forEach(function(widget){
                    var widgetButton = widget.asButton();
                    if (widgetButton !== null && !!widgetButton.getName()){
                        mapObj._map3d.setUIMouseButtonClickEventListener(widgetButton);
                    }				
                });
            }
    
            if(typeof(left) == "number" && typeof(top) == "number") {
                layout.getMainWidget().setPosition(left, top);
            }
            
            if(typeof(width) == "number" && typeof(height) == "number") {
                layout.getMainWidget().setSize(width, height);
            }
            
            this.setLayoutVisible(nameOfLayout, isVisible);
            return layout;
        },
        
        // @method unloadLayout(nameOfLayout: String, time?: Number): this 
        // 卸载layout，并移除buttonWidget事件,time缺省时，没有fadeout效果   
        unloadLayout: function(nameOfLayout, time) {
            var uiSystem = mapObj._map3d.getUISystem(),
                layout = uiSystem.getLayout(nameOfLayout);			
    
            if (layout === null) {
                return;
            }
            else {
                var allWidgetsArray = [];				
                allWidgetsArray = this.getLayoutAllWidgets(nameOfLayout);
                //遍历所有widget，如果是button widget，则移除其上对应的事件
                allWidgetsArray.forEach(function(widget){
                    var widgetButton = widget.asButton();
                    if(widgetButton !== null && !!widgetButton.getName()) {
                        mapObj.detachUIEvent("onNotifyMouseButtonClick", widgetButton.getName());
                        mapObj._map3d.removeUIMouseButtonClickEventListener(widgetButton);
                    }			
                });	
                if(typeof time == "undefined") {
                    uiSystem.unloadLayout(nameOfLayout);
                }
                else {
                    uiSystem.fadeout(nameOfLayout, time);
                }
            }
            return this;
        },		
            
        // @method alertDialog(message: String, dialogTitle: String, dialogWidth?: Number, dialogHeight?: Number): this
        // 显示系统自带的 Alert 弹框效果  
        alertDialog: function(message, dialogTitle, dialogWidth, dialogHeight) {
            //目前，alertLayout的width = 380,height = 140 (以后会根据具体使用的layout调整，保证弹框出现在中间）
            dialogWidth = dialogWidth || 380;
            dialogHeight = dialogHeight || 140;
            var windowWidth = document.documentElement.clientWidth,
                windowHeight = document.documentElement.clientHeight;
            var defaultOptions = {
                left: (windowWidth > dialogWidth) ? Math.floor((windowWidth - dialogWidth)/2) : 0,
                top: (windowHeight > dialogHeight) ? Math.floor((windowHeight - dialogHeight)/2) : 0,
                message: "This is a message",
                dialogTitle: "Alert Dialog"
            };		
            var layout = this.loadLayout("_alertDialog", 1, "_alertDialog.layout", defaultOptions.left, defaultOptions.top),
                //maskLayout = this.loadLayout("_mask", 1, "_mask.layout"),
                messageBox = layout.getWidget("_editBoxMessageADialog").asTextBox(),
                windowTitle = layout.getWidget("_windowADialog").asTextBox();
            
            message = (typeof message === "undefined")? defaultOptions.message : message;
            dialogTitle = (typeof dialogTitle === "undefined")? defaultOptions.dialogTitle : dialogTitle;					
            messageBox.setCaption(message);
            windowTitle.setCaption(dialogTitle);	
            
            this.attachUIEvent("onNotifyMouseButtonClick", "_buttonOKADialog", function(widget){
                mapObj.unloadLayout("_mask");
                mapObj.unloadLayout("_alertDialog");	
            });	
            return this;
        },
        
        // @method confirmDialog(message: String, dialogTitle: String, okFn: Function, cancelFn: Function, dialogWidth?: Number, dialogHeight?: Number): this
        // 显示系统自带的 Confirm 弹框效果  
        confirmDialog: function(message, dialogTitle, okFn, cancelFn, dialogWidth, dialogHeight) {
            //目前，confirmLayout的width = 380,height = 140 (以后会根据具体使用的layout调整，保证弹框出现在中间）
            dialogWidth = dialogWidth || 380;
            dialogHeight = dialogHeight || 140;
            var windowWidth = document.documentElement.clientWidth,
                windowHeight = document.documentElement.clientHeight;
            var defaultOptions = {
                left: (windowWidth > dialogWidth) ? Math.floor((windowWidth - dialogWidth)/2) : 0,
                top: (windowHeight > dialogHeight) ? Math.floor((windowHeight - dialogHeight)/2) : 0,
                message: "This is a message",
                dialogTitle: "Confirm Dialog"
            };	
            var	layout = this.loadLayout("_confirmDialog", 1, "_confirmDialog.layout", defaultOptions.left, defaultOptions.top),
                //maskLayout = this.loadLayout("_mask", 1, "_mask.layout"),
                messageBox = layout.getWidget("_editBoxMessageCDialog").asTextBox(),
                windowTitle = layout.getWidget("_windowCDialog").asTextBox();
            
            message = (typeof message === "undefined")? defaultOptions.message : message;
            dialogTitle = (typeof dialogTitle === "undefined")? defaultOptions.dialogTitle : dialogTitle;		
            messageBox.setCaption(message);
            windowTitle.setCaption(dialogTitle);	
    
            this.attachUIEvent("onNotifyMouseButtonClick", "_buttonCancelCDialog", function(widget){			
                mapObj.unloadLayout("_confirmDialog");
                mapObj.unloadLayout("_mask");
                if (cancelFn() && Q3D.Util.isFunction(cancelFn())) {
                    cancelFn();
                }	
            });		
    
            this.attachUIEvent("onNotifyMouseButtonClick", "_buttonOKCDialog", function(widget){
                mapObj.unloadLayout("_confirmDialog");
                mapObj.unloadLayout("_mask");
                if (okFn && Q3D.Util.isFunction(okFn)) {
                    okFn();
                }	
            });	
            return this;
        },
        
        // @method promptDialog(inputTitle: String, dialogTitle: String, callback: Function, dialogWidth?: Number, dialogHeight?: Number): this
        // 显示系统自带的 Prompt 弹框效果，用户输入的信息会以参数的方式传给 callback 
        promptDialog: function(inputTitle, dialogTitle, callback, dialogWidth, dialogHeight) { 
            //目前，promptLayout的width = 380,height = 140 (以后会根据具体使用的layout调整，保证弹框出现在中间）
            dialogWidth = dialogWidth || 380;
            dialogHeight = dialogHeight || 140;
            var windowWidth = document.documentElement.clientWidth,
                windowHeight = document.documentElement.clientHeight;
            var defaultOptions = {
                left: (windowWidth > dialogWidth) ? Math.floor((windowWidth - dialogWidth)/2) : 0,
                top: (windowHeight > dialogHeight) ? Math.floor((windowHeight - dialogHeight)/2) : 0
            };	
            var	layout = this.loadLayout("_promptDialog", 1, "_promptDialog.layout", defaultOptions.left, defaultOptions.top),
                //maskLayout = this.loadLayout("_mask", 1, "_mask.layout"),
                inputTitleBox = layout.getWidget("_textBoxInputTitlePDialog").asTextBox(),
                windowTitle = layout.getWidget("_windowPDialog").asTextBox();	
                
            inputTitleBox.setCaption(inputTitle);
            windowTitle.setCaption(dialogTitle);
        
            this.attachUIEvent("onNotifyMouseButtonClick", "_buttonOKPDialog", function(widget){
                var uiSystem = mapObj._map3d.getUISystem(),
                    inputValue = uiSystem.getLayout("_promptDialog").getWidget("_editBoxInputPDialog").asTextBox().getCaption();
                
                mapObj.unloadLayout("_promptDialog");
                mapObj.unloadLayout("_mask");
                if (callback && Q3D.Util.isFunction(callback)) {
                    callback(inputValue);
                }							
            });	
            
            this.attachUIEvent("onNotifyMouseButtonClick", "_buttonCancelPDialog", function(widget){		
                mapObj.unloadLayout("_promptDialog");
                mapObj.unloadLayout("_mask");			
            });	
            return this;
        },	
        
        // @method videoDialog(videoCtrlName: String, options: Video options): this
        // 显示各种视频弹框效果
        videoDialog: function(videoCtrlName, options) {
            var defaultOptions = {
                VideoPath: null,
                VideoType: Q3D.Enums.videoSourceType.VIDSRC_NETSTREAM,          //设置视频类型：VIDSRC_NETSTREAM - 网络实时视频流；VIDSRC_LOCAL - 本地视频。
                Title: {                               							//设置窗口标题（文字、颜色、像素高度）
                    Text: "",
                    Color: Q3D.colourValue("#000000", 1),
                    Height: 20,
                },
                Left: document.documentElement.clientWidth - 200,						//设置窗口左上角位置 - 左（屏幕坐标）
                Top: 0,						                                    //设置窗口左上角位置 - 上（屏幕坐标）
                Width: 200,							  							//设置窗口宽度（屏幕坐标）
                Height: 200,							 						//设置窗口高度（屏幕坐标）
                TargetNode: null,					  							//设置目标节点(QSceneNode)
                TargetPosition: null,				  							//设置目标位置(QVector3d）
                AttachNode: null,					  							//附着到某个指定节点（窗口位置跟随某个节点调整,此时窗口不能被随意拖动,可以调整大小）
                IsIndicatrixVisible: true,										//设置指示线是否可见
                IndicatrixWidth: 2,					  							//设置指向线的线宽
                IndicatrixMatrial: "",			  							    //设置指向线的材质名
                IndicatrixLocation: 1,			  							    //设置指示线连接位置：0 - center; 1 - nearest corner
                Draggable: true,												//是否允许拖动
                OnVideoCtrlClose: null,     									//视频窗口关闭回调事件
            };		
            Q3D.Util.jQueryExtend(true, defaultOptions, options);
            var uiSystem = mapObj._map3d.getUISystem(),
                videoCtrl = uiSystem.createVideoCtrlWithName(videoCtrlName, defaultOptions.VideoPath, defaultOptions.VideoType);
    
            //如果videoCtrl对象已经存在，则返回
            if(!videoCtrl)	return;		
            videoCtrl.setTitle(defaultOptions.Title.Text, defaultOptions.Title.Color.get(), defaultOptions.Title.Height);
            videoCtrl.setLeftTop(defaultOptions.Left, defaultOptions.Top);
            videoCtrl.setSize(defaultOptions.Width, defaultOptions.Height);
            var hasSpecifiedNodeOrPos = false;      //记录是否有指定连接的节点或位置
            if(defaultOptions.TargetNode != null) {
                videoCtrl.targetNode(defaultOptions.TargetNode);
                hasSpecifiedNodeOrPos = true;
            }
            if(defaultOptions.TargetPosition != null) {
                videoCtrl.targetPosition(defaultOptions.TargetPosition);
                hasSpecifiedNodeOrPos = true;
            }
            if(defaultOptions.AttachNode != null) {
                videoCtrl.attachNode(defaultOptions.AttachNode);
                hasSpecifiedNodeOrPos = true;
            }
            if(!defaultOptions.Draggable)
                videoCtrl.disableDrag();
            
            if(defaultOptions.IsIndicatrixVisible && hasSpecifiedNodeOrPos) {	//当已经指定了连接的节点或位置，并且指示线设为可见
                videoCtrl.setIndicatrixVisible(1);
                videoCtrl.setIndicatrixWidth(defaultOptions.IndicatrixWidth);
                if(defaultOptions.IndicatrixMatrial != null) {
                    videoCtrl.setIndicatrixMatrial(defaultOptions.IndicatrixMatrial);		
                }
                videoCtrl.setIndicatrixLocation(defaultOptions.IndicatrixLocation);  
            }
            else {
                videoCtrl.setIndicatrixVisible(0);
            }
            
            if(defaultOptions.OnVideoCtrlClose !=null) {
                mapObj._map3d.setUIVideoCtrlListener(videoCtrl);
                mapObj.attachUIEvent("onVideoCtrlClose", videoCtrlName, defaultOptions.OnVideoCtrlClose);
            }
    
            return this;
        },
        
        // @method removeVideo(videoCtrlName: String): this
        // 移除指定视频弹框
        removeVideo: function(videoCtrlName) {
            var uiSystem = mapObj._map3d.getUISystem(),
                videoCtrl = uiSystem.getVideoCtrl(videoCtrlName);
            
            if(!videoCtrl) return;
            mapObj._map3d.removeUIVideoCtrlListener(videoCtrl);
            mapObj.detachUIEvent("onVideoCtrlClose", videoCtrlName);
            uiSystem.removeVideoCtrl(videoCtrlName);
            return this;
        },
        
        // @method getVideoCtrl(videoCtrlName: String): QVideoCtrl
        // 根据名称获取指定视频弹框，返回QVideoCtrl原生对象
        getVideoCtrl: function(videoCtrlName) {
            var uiSystem = mapObj._map3d.getUISystem();
            return uiSystem.getVideoCtrl(videoCtrlName);
        },
            
        // @method setUIBtnState(layoutName: String, widgetName: String, isSelected: Boolean): this
        // 设置buttonWidget的选中状态
        setUIBtnState: function(layoutName, widgetName, isSelected) {
            var uiSys = mapObj._map3d.getUISystem(),
                layout = uiSys.getLayout(layoutName);
    
            if (layout != null) {
                var btnWidget = layout.getWidget(widgetName).asButton();
                btnWidget.setStateSelected(isSelected? 1:0);
            }
            return this;
        },
            
        // @method createHtmlWidget(nodePath: String, options: HtmlWidget options): QHtmlWidget
        //创建html窗口对话框，支持添加链接三角块指向关注节点，返回 QHtmlWidget 原生对象
        //在引擎无窗口模式下，不支持该功能
        createHtmlWidget: function (nodePath, options) {
            var defaultOptions = {
                Name: null,
                BackImageUrl: "",
                TitleImageUrl: "",
                HtmlUrl: null,
                Layout: 0, //相对窗口位置：左上(0),右上(1),左下(2),右下(3),
                Position: null, //偏移量：Vector2对象
                Size: null,//窗口大小：Vector2对象
                ClientRectPosition: null,//客户区偏移量：Vector2对象
                ClientRectSize: null,//客户区大小：Vector2对象
                TitlePosition: null,//标题栏偏移量：Vector2对象
                TitleSize: null,//标题栏大小：Vector2对象
                CloseRectPosition: null,//关闭按钮偏移量：Vector2对象
                CloseRectSize: null,//关闭按钮大小：Vector2对象
                Alpha: 1,
                FadeIn: 0.5,
                ZOrder: null,
                TooltipOptions: {
                    TriFillColor: Q3D.colourValue("#000000", 1),
                    TriAlpha: 0.5,
                    EdgeColor: null,
                    EdgeWidth: 0,             
                },
                OnHtmlWidgetClosed: null,
                OnUserNotify: null,
            }
            Q3D.Util.jQueryExtend(true, defaultOptions, options);
            try {
                var extUI = mapObj._map3d.getExternUIWidgetSys();
                if(extUI == null) return null;
                
                //创建htmlWidget
                var htmlWidgetCreated = extUI.createHtmlWidget(defaultOptions.Name, defaultOptions.BackImageUrl, defaultOptions.TitleImageUrl);
                if (htmlWidgetCreated != null) {
                    htmlWidgetCreated.setLayout(defaultOptions.Layout);
                    if (defaultOptions.Position != null ) {
                        htmlWidgetCreated.setPos(defaultOptions.Position.x, defaultOptions.Position.y);
                    }
                    if (defaultOptions.Size != null ) {
                        htmlWidgetCreated.setSize(defaultOptions.Size.x, defaultOptions.Size.y);
                    }
                    if (defaultOptions.ClientRectPosition != null ) {
                        htmlWidgetCreated.setClientPos(defaultOptions.ClientRectPosition.x, defaultOptions.ClientRectPosition.y);
                    }
                    if (defaultOptions.ClientRectSize != null ) {
                        htmlWidgetCreated.setClientSize(defaultOptions.ClientRectSize.x, defaultOptions.ClientRectSize.y);
                    }
                    if (defaultOptions.TitlePosition != null ) {
                        htmlWidgetCreated.setTitlePos(defaultOptions.TitlePosition.x, defaultOptions.TitlePosition.y);
                    }
                    if (defaultOptions.TitleSize != null ) {
                        htmlWidgetCreated.setTitleSize(defaultOptions.TitleSize.x, defaultOptions.TitleSize.y);
                    }
                    if (defaultOptions.Alpha != null && typeof(defaultOptions.Alpha) == "number") {
                        htmlWidgetCreated.setAlpha(defaultOptions.Alpha);
                    }
                    if (defaultOptions.FadeIn != null && typeof(defaultOptions.FadeIn) == "number") {
                        htmlWidgetCreated.fadeIn(defaultOptions.FadeIn);
                    }
                    if (defaultOptions.ZOrder != null && typeof(defaultOptions.ZOrder) == "number") {
                        htmlWidgetCreated.setZOrder(defaultOptions.ZOrder);
                    }
                    if (defaultOptions.CloseRectPosition != null && defaultOptions.CloseRectSize != null ) {
                        htmlWidgetCreated.setCloseRect(defaultOptions.CloseRectPosition.x, defaultOptions.CloseRectPosition.y, defaultOptions.CloseRectSize.x, defaultOptions.CloseRectSize.y);
                    }
                    if (defaultOptions.HtmlUrl != null && typeof(defaultOptions.HtmlUrl) == "string") {
                        htmlWidgetCreated.setHtml(defaultOptions.HtmlUrl);
                    }
                    htmlWidgetCreated.setAutoUpdate(1);
                    htmlWidgetCreated.setReceiveInput(1);
                    
                    var node = this.getSceneNode(nodePath);
                    if (node != null) {
                        var tooltipWidget = htmlWidgetCreated.asTooltipWidget();
                        tooltipWidget.setTriFillColor(defaultOptions.TooltipOptions.TriFillColor.get());
                        tooltipWidget.setTriAlpha(defaultOptions.TooltipOptions.TriAlpha);                    
                        tooltipWidget.setEdgeWidth(defaultOptions.TooltipOptions.EdgeWidth);
                        if (defaultOptions.TooltipOptions.EdgeWidth > 0 && defaultOptions.TooltipOptions.EdgeColor != null) {
                            tooltipWidget.setEdgeColor(defaultOptions.TooltipOptions.EdgeColor.get());
                        }
                        tooltipWidget.createRectLinks(0, 0, defaultOptions.Size.x, defaultOptions.Size.y);
                        tooltipWidget.setAutoObserveObj(node);
                    }
    
                    setTimeout(function () {
                        if (Q3D.Util.isFunction(defaultOptions.OnHtmlWidgetClosed)) {
                            mapObj.attachUIEvent("onWidgetClose", defaultOptions.Name, defaultOptions.OnHtmlWidgetClosed);
                        }
                        if (Q3D.Util.isFunction(defaultOptions.OnUserNotify)) {
                            mapObj.attachUIEvent("onUserNotifyEX", defaultOptions.Name, defaultOptions.OnUserNotify);
                        }
                    }, 100);                
                }
                return htmlWidgetCreated;
            } catch (e) {
                return null;
            }
        }, 
        
        // @method createImageWidget(imgWidgetName: String, options: ImageWidget options): QHtmlWidget
        //创建Image图片对象，支持动画加载，可用于生成一个静态图片或用于视频纹理，返回 QImageWidget 原生对象
        createImageWidget: function (imgWidgetName, options) {
            var defaultOptions = {
                ImageUrl: "", //图片显示的内容
                LeftTop: Q3D.vector2(0, 0),            
                Size: Q3D.vector2(300, 200),
                Alpha: 1,
                ZOrder: 1,
                FadeIn: 0.5,
                Visible: true,
                LoadingOptions: {
                    ImageUrl: "",
                    FrameClip: Q3D.vector2(2, 2), 
                    Interval: 0.2   
                },
                VideoOptions: {
                    VideoPath: "",
                    VideoType: Q3D.Enums.videoSourceType.VIDSRC_NETSTREAM,   
                    IsLoop: true
                },
            }
            Q3D.Util.jQueryExtend(true, defaultOptions, options);
            try {
                var uiSys = this._map3d.getWorldManager().getUIWindowSys(0);
                var widget = uiSys.getWidget(imgWidgetName);
                if(!widget) {
                    widget = uiSys.createImageWidget(imgWidgetName);
                }             
                var imgWidget = widget.asImageWidget();
                
                if (defaultOptions.ImageUrl != "") {
                    imgWidget.setImage(defaultOptions.ImageUrl);
                }
                imgWidget.setMarginLeft(defaultOptions.LeftTop.x);
                imgWidget.setMarginTop(defaultOptions.LeftTop.y);
                imgWidget.setLayoutWidth(defaultOptions.Size.x);
                imgWidget.setLayoutHeight(defaultOptions.Size.y);
                imgWidget.setAlpha(defaultOptions.Alpha);
                imgWidget.setVisible(defaultOptions.Visible ? 1 : 0);
                imgWidget.setZOrder(defaultOptions.ZOrder);	
                imgWidget.fadeIn(defaultOptions.FadeIn);	
               
                if (defaultOptions.VideoOptions.VideoPath != "") {                
                     if (defaultOptions.LoadingOptions.ImageUrl != "") { //创建加载动画，配合视频使用
                        imgWidget.setImage(defaultOptions.LoadingOptions.ImageUrl);               
                        var mat = imgWidget.getMaterial();
                        var textureUnit = mat.getTextureUnit(Q3D.Enums.textureUnit.DIFFUSE);
                        textureUnit.setFrameXClip(defaultOptions.LoadingOptions.FrameClip.x);
                        textureUnit.setFrameYClip(defaultOptions.LoadingOptions.FrameClip.y);
                        textureUnit.setFrameInterval(defaultOptions.LoadingOptions.Interval);
                    }      
                    //创建新的材质
                    var videoName = imgWidgetName+"_videoSrc";
                    var _rm = this._map3d.getResourceManager();
                    var _qVideo = _rm.getResource(Q3D.Enums.resourceType.VIDEO, videoName);
                    if (_qVideo == null) {//若材质不存在就创建                
                        _qVideo = _rm.registerResource(Q3D.Enums.resourceType.VIDEO, videoName).asVideo();
                        _qVideo.createEmpty();
                    } else {
                        _qVideo = _qVideo.asVideo();          
                        _qVideo.stop();
                    }          
                    _qVideo.setVideoSource(defaultOptions.VideoOptions.VideoPath, defaultOptions.VideoOptions.VideoType);
                    _qVideo.setWidth(defaultOptions.Size.x);
                    _qVideo.setHeight(defaultOptions.Size.y);
                    _qVideo.setAutoPlay(1);
                    _qVideo.setLoop(defaultOptions.VideoOptions.IsLoop ? 1 : 0);                
                    _qVideo.play();   
                    
                    var mat = imgWidget.getMaterial();
                    var textureUnit = mat.getTextureUnit(Q3D.Enums.textureUnit.DIFFUSE);
                    textureUnit.setVideo(videoName, 1);
                }              
                return imgWidget;
            } catch (e) {
                return null;
            }
        }, 
        
        // @method createTooltipWidget(nodePath: String, options: TooltipWidget options): QHtmlWidget
        //创建Tooltip信息框组件，支持添加链接三角块指向关注节点，返回 QTooltipWidget 原生对象
        createTooltipWidget: function (nodePath, options) {
            var defaultOptions = {
                Name: null,
                Layout: 0, //相对窗口位置：左上(0),右上(1),左下(2),右下(3)
                Position: null, //偏移量：Vector2对象
                Size: Q3D.vector2(1,1),//窗口大小：Vector2对象            
                Alpha: 1,
                FadeIn: 0.5,
                ZOrder: null,
                TooltipOptions: {
                    TriFillColor: Q3D.colourValue("#000000", 1),
                    TriAlpha: 0.5,
                    EdgeColor: null,
                    EdgeWidth: 0,             
                },
            }
            Q3D.Util.jQueryExtend(true, defaultOptions, options);
            try {
                var uiSys = mapObj._map3d.getWorldManager().getUIWindowSys(0);
                if(uiSys == null) return null;
                
                //创建htmlWidget
                var tooltipWidget = uiSys.createTooltipWidget(defaultOptions.Name);
                if (tooltipWidget != null) {
                    if (defaultOptions.Position != null ) {
                        switch(defaultOptions.Layout) {
                            case 0://左上
                                tooltipWidget.setMarginLeft(defaultOptions.Position.x);
                                tooltipWidget.setMarginTop(defaultOptions.Position.y);
                                break;
                            case 1://右上
                                tooltipWidget.setMarginRight(defaultOptions.Position.x);
                                tooltipWidget.setMarginTop(defaultOptions.Position.y);
                                break;
                            case 2://左下
                                tooltipWidget.setMarginLeft(defaultOptions.Position.x);
                                tooltipWidget.setMarginBottom(defaultOptions.Position.y);
                                break;
                            case 3://右下
                                tooltipWidget.setMarginRight(defaultOptions.Position.x);
                                tooltipWidget.setMarginBottom(defaultOptions.Position.y);
                                break;
                        }
                    }
                    if (defaultOptions.Size != null ) {
                        tooltipWidget.setLayoutWidth(defaultOptions.Size.x);
                        tooltipWidget.setLayoutHeight(defaultOptions.Size.y);
                    }                
                    if (defaultOptions.Alpha != null && typeof(defaultOptions.Alpha) == "number") {
                        tooltipWidget.setAlpha(defaultOptions.Alpha)
                    }
                    if (defaultOptions.FadeIn != null && typeof(defaultOptions.FadeIn) == "number") {
                        tooltipWidget.fadeIn(defaultOptions.FadeIn);
                    }
                    if (defaultOptions.ZOrder != null && typeof(defaultOptions.ZOrder) == "number") {
                        tooltipWidget.setZOrder(defaultOptions.ZOrder);
                    }                
                    tooltipWidget.setVisible(1);
                    
                    var node = this.getSceneNode(nodePath);
                    if (node != null) {
                        tooltipWidget.setTriFillColor(defaultOptions.TooltipOptions.TriFillColor.get());
                        tooltipWidget.setTriAlpha(defaultOptions.TooltipOptions.TriAlpha);                    
                        tooltipWidget.setEdgeWidth(defaultOptions.TooltipOptions.EdgeWidth);
                        if (defaultOptions.TooltipOptions.EdgeWidth > 0 && defaultOptions.TooltipOptions.EdgeColor != null) {
                            tooltipWidget.setEdgeColor(defaultOptions.TooltipOptions.EdgeColor.get());
                        }
                        tooltipWidget.createRectLinks(0, 0, defaultOptions.Size.x, defaultOptions.Size.y);
                        tooltipWidget.setAutoObserveObj(node);
                    }                       
                }
                return tooltipWidget;
            } catch (e) {
                return null;
            }
        }, 
        
        // @method removeHtmlWidget(widgetName: String): this
        // 移除指定html窗口对话框
        removeHtmlWidget: function(widgetName) {
            var extUI = mapObj._map3d.getExternUIWidgetSys();
            if(extUI != null)
                extUI.destroyWidget(widgetName);
            return this;
        },
        
        // @method removeTooltipWidget(widgetName: String): this
        // 移除指定Tooltip信息框
        removeTooltipWidget: function(widgetName) {
            var uiSys = mapObj._map3d.getWorldManager().getUIWindowSys(0);
            uiSys.destroyTooltipWidget(widgetName);
            return this;
        },   
        
        // @method removeImageWidget(widgetName: String): this
        // 移除指定Image图像
        removeImageWidget: function(widgetName) {
            var uiSys = mapObj._map3d.getWorldManager().getUIWindowSys(0);
            uiSys.destroyWidget(widgetName);
            return this;
        },    
        
        // @method createHtmlWidgetToTexture(options: HtmlWidgetTexture options): QHtmlWidget
        //创建html窗口到材质纹理上，返回 QHtmlWidget 原生对象
        //创建好的材质可以被模型节点或矢量节点使用 ，引擎无窗口模式下不适用
        createHtmlWidgetToTexture: function (options) {
            var defaultOptions = {
                Name: null, //htmlWidget名称            
                HtmlUrl: null,//页面的url地址
                Size: null, //页面尺寸, Vector2对象  
                Material: null,//材质名称,若材质不存在就创建
            }
            Q3D.extend(defaultOptions, options);
            try {
                            
                var extUI = this._map3d.getExternUIWidgetSys();     
                if(extUI == null) return  null;    
                
                //处理材质
                //创建新的材质
                var _rm = this._map3d.getResourceManager();
                var _mat = _rm.getResource(Q3D.Enums.resourceType.MATERIAL, defaultOptions.Material);
                if (_mat == null) {//若材质不存在就创建                
                    _mat = _rm.registerResource(Q3D.Enums.resourceType.MATERIAL, defaultOptions.Material).asMaterial();
                    _mat.createEmpty();
                } else {
                    _mat = _mat.asMaterial();                
                }
                var _clr = Q3D.colourValue(1,1,1,1);
                _mat.setDiffuseColor(_clr.get());
                var _texUnit = _mat.getTextureUnit(Q3D.Enums.textureUnit.DIFFUSE);
    
                //创建htmlWidget
                var htmlWidgetCreated = extUI.createHtmlTextureWidget(defaultOptions.Name, _texUnit, defaultOptions.Size.x, defaultOptions.Size.y);
                if (htmlWidgetCreated != null) {                
                    htmlWidgetCreated.setAutoUpdate(1);
                    htmlWidgetCreated.setHtml(defaultOptions.HtmlUrl);     
                    htmlWidgetCreated.setReceiveInput(0);                                      
                }
                return htmlWidgetCreated;
            } catch (e) {
                return null;
            }
        },
        
        // @method createUILayoutToTexture(options: UITexture options): QUILayout
        // 用RTT方式将内部UI渲染到材质纹理上，返回 QUILayout 原生对象
        // 创建好的材质可以被模型节点或矢量节点使用 
        createUILayoutToTexture: function (options) {
            var defaultOptions = {
                Name: null, //layout名称   
                FileName: null, //layout文件名称   
                RTTName: null, //RTT对应xml配置文件中纹理名称            
                Material: null,//材质名称,若材质不存在就创建
                UIOptions: {
                    AlphaBlend: true,//是否透明处理
                    Alpha: 1, //设置透明度
                    DepthCheck: true, //是否开启深度检测
                    BackCull: false,//是否背面剔除                
                },
            }
            Q3D.Util.jQueryExtend(true, defaultOptions, options);
            try {
                //加载layout
                var _layoutRTT = this.loadLayout(defaultOptions.Name, true, defaultOptions.FileName, 0, 0);
                if (_layoutRTT == null)
                    return null;
                
                //创建新的材质
                var _rm = this._map3d.getResourceManager();
                var _mat = _rm.getResource(Q3D.Enums.resourceType.MATERIAL, defaultOptions.Material);
                if (_mat == null) {//若材质不存在就创建                
                    _mat = _rm.registerResource(Q3D.Enums.resourceType.MATERIAL, defaultOptions.Material).asMaterial();
                    _mat.createEmpty();
                } else {
                    _mat = _mat.asMaterial();                
                }
                var _clr = Q3D.colourValue(1,1,1,1);
                _mat.setDiffuseColor(_clr.get());
                var _texUnit = _mat.getTextureUnit(Q3D.Enums.textureUnit.DIFFUSE);
                
                //用RTT方式，将UI渲染到多边形材质上
                _texUnit.setTexture(defaultOptions.RTTName, 0);            
                _mat.setAlphaBlendEnable(defaultOptions.UIOptions.AlphaBlend?1:0); 
                if (defaultOptions.UIOptions.AlphaBlend)
                    _mat.setAlpha(defaultOptions.UIOptions.Alpha);
                _mat.setDepthCheck(defaultOptions.UIOptions.DepthCheck?1:0); //是否开启深度检测
                _mat.setCullMode(defaultOptions.UIOptions.BackCull?2:1); //是否背面剔除
                
                return _layoutRTT;
            } catch (e) {
                return null;
            }
        },
        
        // @method createIRHeatmap(name: String, options: Heatmap options): QHeatMapIrregular
        // 创建不规则热力图，返回 QHeatMapIrregular 原生对象
        createIRHeatmap: function (name, options) {
            var defaultOptions = {
                GridSize: Q3D.vector2(80,80), //设置网格大小
                HeatPoints: [], //添加热力点坐标数组：GlobalVec3D
                Range: 10, //影响范围
                ColorBandKey: [], //添加色带定义数组对：number1, number2,...
                ColorBandValue: [], //每个色带对应的颜色：ColourValue
                BaseHeight: 0, //设置整体高度
                IsContinuousColor: true, //是否渐变色
                IsPlane: true, //是否平面
                AlgType: Q3D.Enums.heatMapCalcType.SquaredWeighted, //算法类型
                BorderPoints: [], //设置边框区域，用于不规则形状裁剪：Vector3           
            }
            Q3D.Util.jQueryExtend(true, defaultOptions, options);
            try {
                var heatMapManager = mapObj._map3d.getHeatMapManager();
                var heatMap = heatMapManager.getHeatMapByID(name);
                if(heatMap != null) {
                    heatMapManager.destoryHeatMapByID(name); 
                }
                //创建heatmap
                heatMap = heatMapManager.createHeatMap(name, 3).asHeatMapIrregular();
                //设置网格大小
                heatMap.setNxNz(defaultOptions.GridSize.x,defaultOptions.GridSize.y);    
                /*
                if (defaultOptions.TopLeft != null) {
                    heatMap.setTopLeftPoint(defaultOptions.TopLeft);
                }
                if (defaultOptions.RightBottom != null) {
                    heatMap.SetBottomRightPoint(defaultOptions.RightBottom);
                }*/
                var i;
                for (i = 0; i < defaultOptions.HeatPoints.length; i++) {
                    var ptName = name + "_pi_" + i;
                    heatMap.addPoint(defaultOptions.HeatPoints[i].get(),defaultOptions.Range,ptName);
                }
                for (i = 0; i < defaultOptions.ColorBandKey.length; i++) {
                    heatMap.addColorBand(defaultOptions.ColorBandKey[i], defaultOptions.ColorBandValue[i].get());
                }
                heatMap.setUseContinuousColor(defaultOptions.IsContinuousColor ? 1 : 0);
                //设置整体高度
                heatMap.setHeight(defaultOptions.BaseHeight);
                //设置成平面效果
                heatMap.setScapple(defaultOptions.IsPlane ? 1 : 0);
                
                // 设置生成算法类型
                heatMap.setAlgType(defaultOptions.AlgType);
                heatMap.build();      
                
                //设置一下范围
                var v3list = mapObj._map3d.getWorldManager().createEmptyQVector3List();
                for (i = 0; i < defaultOptions.BorderPoints.length; i++) {
                    v3list.add(defaultOptions.BorderPoints[i].get());
                }
                if (defaultOptions.BorderPoints.length > 0) {
                    //设置限定区域
                    heatMap.setBorderPoints(v3list);
                     //渲染
                    heatMap.render();      
                }
                return heatMap;
            } catch (e) {
                return null;
            }
        },   
        
    });
    
    
    // @namespace Map
    // @section Mesh模型操作
    Q3D.Map.include({
        
        _restoreModelMaterial: function(nodePath) {
            var _node = this.getSceneNode(nodePath);
            if (_node == null)
                return null;   
            
            var _nodeType = _node.getNodeType();
            if (_nodeType != Q3D.Enums.sceneNodeType.SNODE_Model && _nodeType != Q3D.Enums.sceneNodeType.SNODE_VecModel)
                return null;
            
            var _realNode = null;
            if (_nodeType == Q3D.Enums.sceneNodeType.SNODE_Model)
                _realNode = _node.asModel();
            else
                _realNode = _node.asVecModel();        
            
            //恢复节点材质
            _realNode.restoreAloneMaterials();
            
            return this;
        },
        
        // @method createSimpleMaterial(resourceName: String, options: Colour material options): QMaterial
        // 创建简单材质，通常用于需要改变颜色的场合，返回原生 QMaterial 对象
        createSimpleMaterial: function (resourceName, options) {
            var DefaultCreateOption = {
                DiffuseColor: null,//ColourValue对象
                EmissiveColor: null,
                SpecularColor: null,
                Alpha: null,
            }
            Q3D.extend(DefaultCreateOption, options);
            //创建新的材质
            var _rm = this._map3d.getResourceManager();
            var _mat = _rm.getResource(Q3D.Enums.resourceType.MATERIAL, resourceName);
            if (_mat != null) //若材质存在直接返回
                return _mat;
            _mat = _rm.registerResource(Q3D.Enums.resourceType.MATERIAL, resourceName).asMaterial();
            _mat.createEmpty();
           
           _mat.setShadowFactor(1);//默认接受阴影
           _mat.setLightEnable(1);//默认接受光照
            if (DefaultCreateOption.DiffuseColor)
                _mat.setDiffuseColor(DefaultCreateOption.DiffuseColor.get());
            if (DefaultCreateOption.SpecularColor)
                _mat.setSpecularColor(DefaultCreateOption.SpecularColor.get());        
            if (DefaultCreateOption.EmissiveColor) {
                _mat.setEmissiveColor(DefaultCreateOption.EmissiveColor.get());
                _mat.setDiffuseColor(Q3D.colourValue("#000000", 1).get());
                _mat.setLightEnable(0);//不接受光照
            }
            if (DefaultCreateOption.Alpha && DefaultCreateOption.Alpha < 1.0) {
                _mat.setAlphaBlendEnable(1);
                _mat.setAlpha(DefaultCreateOption.Alpha);
                _mat.setDepthWriteEnable(0);//关闭深度写
                //_mat.setDepthCheck(1);
            }
            
            return _mat;
        },
    
        // @method createModel(nodePath: String, meshName: String, options: Model create options): QModelNode
        // 在场景根节点下动态创建模型，Node路径"区域/[父节点]/要创建的模型名称"，返回原生 QModelNode 对象
        // 注意模型所用的 Mesh 资源最好预先打包到资源组文件中
        createModel: function (nodePath, meshName, options) {
            var DefaultCreateOption = {
                Position: null, //封装Vector3对象
                Orientation: null,//封装Vector3对象
                OrientationType: Q3D.Enums.nodeOrientationType.Self,
                Scale: null,//封装Vector3对象
                SkeletonAnimation: null, //骨骼动画名称
                OnLoaded: null, //加载结束回调
            }
            Q3D.extend(DefaultCreateOption, options);
            try {           
                //创建模型节点
                var ModelNodeCreated = this.createCommonNode(nodePath, Q3D.Enums.sceneNodeType.SNODE_Model); 
                if (ModelNodeCreated != null) { //节点创建成功                
                       
    
                    var ModelAppend = ModelNodeCreated.asModel();
    
                    //以下设置参数
                    ModelAppend.setMesh(meshName);
                    if (DefaultCreateOption.Position != null) {
                        ModelAppend.setPosition(DefaultCreateOption.Position.get());
                    }
                    if (DefaultCreateOption.Orientation != null) {
                        ModelAppend.setOrientation(DefaultCreateOption.Orientation.get(), DefaultCreateOption.OrientationType);
                    }
                    if (DefaultCreateOption.Scale != null) {
                        ModelAppend.setScale(DefaultCreateOption.Scale.get());
                    }
                    
                    if (DefaultCreateOption.SkeletonAnimation != null)
                        ModelAppend.setSkeletonAnimation(DefaultCreateOption.SkeletonAnimation);
    
                    //如果有回调事件
                    if (DefaultCreateOption.OnLoaded) {
                        mapObj._map3d.setSceneNodeListener(ModelNodeCreated);
                        mapObj.attachUIEvent("onSceneNodeAllResourceCompleted", mapObj.getSceneNodeFullName(ModelNodeCreated), DefaultCreateOption.OnLoaded);
                    }                
                    ModelNodeCreated.trackAllResource();  
                    
                    //返回对象
                    return ModelAppend;
                } 
            } catch (e) {
                this.showNotice("错误", "createModel: " + e.message);
                return null;
            }
            return null;
        },
    
        // @method playModelSkeletonAnimation(nodePath: String, aniName?: String): this
        // 播放模型骨骼动画效果，可随时替换成新动画文件
        playModelSkeletonAnimation: function (nodePath, aniName) {
            var _node = this.getSceneNode(nodePath);
            if (_node == null || _node.getNodeType() != Q3D.Enums.sceneNodeType.SNODE_Model)
                return null;
            
            var _model = _node.asModel();
            if (aniName !== undefined) {          
                _model.setSkeletonAnimation(aniName);
                _model.loadAllResource();
            }
            var _aniState = _model.getSkeletonAnimationState();
            if (_aniState == null) 
                return null;
            _aniState.setLoop(1);
            _aniState.setAutoPlay(1);
            _aniState.play();        
            return this;
        },
        
        // @method stopModelSkeletonAnimation(nodePath: String): this
        // 停止播放模型骨骼动画效果
        stopModelSkeletonAnimation: function (nodePath) {
            var _node = this.getSceneNode(nodePath);
            if (_node == null || _node.getNodeType() != Q3D.Enums.sceneNodeType.SNODE_Model)
                return null;
    
            var _model = _node.asModel();
            var _aniState = _model.getSkeletonAnimationState();
            if (_aniState == null)
                return null;
            _aniState.stop();
            //_aniState.stopAndBack();
            return this;
        },
        
        // @method setModelHighlight(nodePath: String, highLightEnable: Boolean): this
        // 设置或关闭指定模型颜色高亮效果（采用材质克隆方式）
        setModelHighlight: function (nodePath, highLightEnable) {        
    
            var _node = this.getSceneNode(nodePath);
            if (_node == null)
                return null;
    
            var _nodeType = _node.getNodeType();
            if (_nodeType != Q3D.Enums.sceneNodeType.SNODE_Model && _nodeType != Q3D.Enums.sceneNodeType.SNODE_VecModel)
                return null;
    
            var _model = _nodeType == Q3D.Enums.sceneNodeType.SNODE_Model ? _node.asModel() : _node.asVecModel();  
            //_model.makeAloneMaterials();
            _model.makeAloneMaterialsEx(2);
            for (var i = 0; i <= _model.getMaterialCount() - 1; i++) {
                if (highLightEnable) {
                    _model.getMaterial(i).setEmissiveColor(Q3D.colourValue(1, 0, 1, 1).get());
                } else {
                    _model.getMaterial(i).setEmissiveColor(Q3D.colourValue(0, 0, 0, 0).get());
                }
            }
            if (!highLightEnable) {
                _model.restoreAloneMaterials();
            }
            return this;
        },
    
        // @method setModelColor(nodePath: String, newColor: ColourValue, colorEnable: Boolean): this
        // 设置或取消指定模型变色效果（采用容器方式实现，可对多个模型设置同一种颜色），不建议使用有可能会导致其他使用相同材质的模型也会变色    
        setModelColor: function (nodePath, newColor, colorEnable) {
            var ctnName = "model_color_" + newColor.toWebColor()
            var nc = Q3D.nodeContainer(ctnName);
            nc.setTargetVal(Q3D.Enums.nodeContainerType.Color,newColor);
            if (colorEnable) {
                nc.addSceneNode(nodePath);
            } else {
                nc.removeSceneNode(nodePath);
            }
            return this;
        },
        
        // @method clearModelsColor(clrArr: Array): this
        // 取消指定颜色数组对应的模型变色效果
        clearModelsColor: function (clrArr) {
            if (!Q3D.Util.isArray(clrArr)) 
                return null;
            clrArr.forEach( function(clr) {   
                var ctnName = "model_color_" + clr.toWebColor()
                Q3D.nodeContainer(ctnName).clear();
                mapObj._map3d.getWorldManager().destroyContainer(ctnName);
            } ) ;        
            return this;
        },
        
        // @method setBatchModelMaterial(nodeNames: Array, mtrName: String): this
        // 批量修改替换模型的材质（采用容器方式实现），注意使用的材质要确保存在
        setBatchModelMaterial: function(nodeNames, mtrName) {
            
            if (!Q3D.Util.isArray(nodeNames) || typeof nodeNames[0] !== 'string') 
                return null;       
    
            var nc = Q3D.nodeContainer("model_with_" + mtrName);
            nc.setTargetVal(Q3D.Enums.nodeContainerType.Material,mtrName);
            for (var j = 0 ; j < nodeNames.length; j++) {
                nc.addSceneNode(nodeNames[j]);
            }    
            return this;
        },
        
        // @method clearBatchModelMaterial(mtrName: String): this
        // 恢复被替换模型的材质
        clearBatchModelMaterial: function(mtrName) {
            Q3D.nodeContainer("model_with_" + mtrName).clear();
            mapObj._map3d.getWorldManager().destroyContainer("model_with_" + mtrName);
            return this;
        },   
        
        // @method setBatchModelColorFlash(nodeNames: Array, newColor: ColourValue, isEmissiveColor: Boolean, speed: Number, flashTimes?: Number): this
        // 批量设置模型同时变色闪烁若干次（采用动画剪辑对象实现），如果是持续闪烁的清除需要调用 clearModelColorFlash
        setBatchModelColorFlash: function (nodeNames, newColor, isEmissiveColor, speed, flashTimes) {   
            
            if (!Q3D.Util.isArray(nodeNames) || typeof nodeNames[0] !== 'string') 
                return null;    
            
            if(typeof this._clrFlashObj === "undefined")
                this._clrFlashObj = []; 				
            
            //如果目标节点正在进行颜色闪烁，则先清除当前的闪烁动画
            this.clearBatchModelColorFlash(nodeNames);	
    
            var framesPerSec = 50;
            for (var j = 0 ; j < nodeNames.length; j++) {
                var nodeExist = this.getSceneNode(nodeNames[j]);
                if (nodeExist == null) 
                    continue;        
    
                this._clrFlashObj.push(nodeNames[j]);   
                //创建新的MovieClip
                var _mc = Q3D.movieClip(nodeNames[j].replace("/","@^") + "_colorFlashMovieclip", framesPerSec);			
                //创建新的实例
                var _mcInst = Q3D.movieClipInstance(nodeNames[j].replace("/","@^") + "_colorFlashInstance", _mc);
                if (flashTimes === undefined) {
                    _mcInst.setMaterialColorFlashPlayer(nodeExist, newColor, speed, 1, isEmissiveColor);
                    _mcInst.setPlayOptions(0,true);  
                    _mcInst.play();
                } else {
                    _mcInst.setMaterialColorFlashPlayer(nodeExist, newColor, speed, flashTimes, isEmissiveColor);
                    _mcInst._clearMovieClipInstanceOnLastFrame(framesPerSec * speed * flashTimes * 2, function(mci, key) {
                        var mciName = mci.getCName(),
                            nodePath = mciName.substring(0, mciName.length - 19).replace("@^","/");
    
                        for (var i = 0; i < mapObj._clrFlashObj.length; i++) {
                            if(nodePath === mapObj._clrFlashObj[i]) {
                                mapObj._restoreModelMaterial(mapObj._clrFlashObj[i]);
                                mapObj._clrFlashObj.splice(i, 1);
                            }
                        } 	
                    });  
                    _mcInst.setPlayOptions(0,false);              
                    _mcInst.play();
                }
            }
    
            return this;
        },
        
        // @method clearBatchModelColorFlash(nodeNames?: Array): this
        // 清除模型颜色闪烁，如果没有给定参数，将清除所有模型的颜色闪烁
        clearBatchModelColorFlash: function (nodeNames) {
                    
            if(typeof this._clrFlashObj === "undefined" || this._clrFlashObj.length == 0)	
                return null;
            
            //var _wm = this._map3d.getWorldManager();		
            if(typeof nodeNames == "undefined")	
            {
                //清除所有模型颜色闪烁
                for (var i = 0; i < this._clrFlashObj.length; i++) {									
                    var nodePath = this._clrFlashObj[i],
                        instName = nodePath.replace("/","@^") + "_colorFlashInstance";
                    this._restoreModelMaterial(nodePath);          
                    this.clearMovieClip(instName, 0, false);
                }
                delete this._clrFlashObj;
            }
            else{
                if (!Q3D.Util.isArray(nodeNames) || typeof nodeNames[0] !== 'string') 
                    return null;    
                //清除指定模型颜色闪烁
                for(var j = 0; j < nodeNames.length ; j++) {
                    var currNodePath = nodeNames[j];
                    
                    for(var i = 0; i < this._clrFlashObj.length; i++) {
                        if(currNodePath === this._clrFlashObj[i]) {
                            this._restoreModelMaterial(currNodePath);
                            this.clearMovieClip(currNodePath.replace("/","@^") + "_colorFlashInstance", 0, false);
                            this._clrFlashObj.splice(i, 1);
                            break;
                        }
                    }				
                }
            }
                    
            return this;	
        },
       
        // @method setBatchModelTransparentFlash(nodeNames: Array, speed: Number, flashTimes?: Number): this
        // 批量设置模型透明闪烁（采用动画剪辑对象实现），如果是持续闪烁的清除需要调用 clearModelTransparentFlash
        setBatchModelTransparentFlash: function (nodeNames, speed, flashTimes) {
            
            if (!Q3D.Util.isArray(nodeNames) || typeof nodeNames[0] !== 'string') 
                return null;    
            
            if(typeof this._transFlashObj === "undefined")
                this._transFlashObj = [];  	        
    
            //如果目标节点正在进行透明闪烁，则先清除当前的透明闪烁动画	
            this.clearBatchModelTransparentFlash(nodeNames);
            
            var framesPerSec = 50;
            for (var j = 0 ; j < nodeNames.length; j++) {
                var nodeExist = this.getSceneNode(nodeNames[j]);
                if (nodeExist == null )
                    continue;
                this._transFlashObj.push(nodeNames[j]);
                //创建新的动画剪辑
                var _mc = Q3D.movieClip(nodeNames[j].replace("/","@^") + "_transparentFlashMovieclip", framesPerSec);
                //创建新的实例
                var _mcInst = Q3D.movieClipInstance(nodeNames[j].replace("/","@^") + "_transparentFlashInstance", _mc);
                if (flashTimes == undefined) {
                    _mcInst.setMaterialFadePlayer(nodeExist, Q3D.Enums.fadeType.fadeFlash, speed, 1);
                    _mcInst.setPlayOptions(0,true);  
                    _mcInst.play();
                } else {
                    _mcInst.setMaterialFadePlayer(nodeExist, Q3D.Enums.fadeType.fadeFlash, speed, flashTimes);
                    _mcInst._clearMovieClipInstanceOnLastFrame(framesPerSec * speed * flashTimes * 2, function(mci, key) {					
                        var mciName = mci.getCName(),
                            nodePath = mciName.substring(0, mciName.length - 25).replace("@^","/");
    
                        for (var i = 0; i < mapObj._transFlashObj.length; i++) {
                            if(nodePath === mapObj._transFlashObj[i]) {
                                mapObj._restoreModelMaterial(mapObj._transFlashObj[i]);
                                mapObj._transFlashObj.splice(i, 1);
                            }
                        } 
                    });  
                    _mcInst.setPlayOptions(0, false);  
                    _mcInst.play();            
                }
            }
            return this;
        },
        
        // @method clearBatchModelTransparentFlash(nodePaths: Array): this
        // 清除所有模型透明闪烁，如果没有给定参数，将清除所有模型的透明闪烁
        clearBatchModelTransparentFlash: function (nodePaths) {      
            if(typeof this._transFlashObj === "undefined" || this._transFlashObj.length == 0)	return null;
            
            //var _wm = this._map3d.getWorldManager();
            
            if(typeof nodePaths == "undefined")	
            {
                //清除所有模型颜色闪烁
                for (var i = 0; i < this._transFlashObj.length; i++) {									
                    var nodePath = this._transFlashObj[i],
                        instName = nodePath + "_transparentFlashInstance";
                    this._restoreModelMaterial(nodePath);          
                    this.clearMovieClip(instName, 0, false);
                }
                delete this._transFlashObj;
            }
            else{
                if (!Q3D.Util.isArray(nodePaths) || typeof nodePaths[0] !== 'string') 
                    return null;    
                //清除指定模型颜色闪烁
                for(var j = 0; j < nodePaths.length ; j++) {
                    var currNodePath = nodePaths[j];
                    
                    for(var i = 0; i < this._transFlashObj.length; i++) {
                        if(currNodePath === this._transFlashObj[i]) {
                            this._restoreModelMaterial(currNodePath);
                            this.clearMovieClip(currNodePath.replace("/","@^") + "_transparentFlashInstance", 0, false);
                            this._transFlashObj.splice(i, 1);
                            break;
                        }
                    }				
                }
            }
                    
            return this;
        },
        
        // @method setModelFadeIn(nodePath: String, speed: Number, restoreMaterial: Boolean): this
        // 设置模型渐显效果（采用动画剪辑对象实现）
        setModelFadeIn: function (nodePath, speed, restoreMaterial) {
            var _node = this.getSceneNode(nodePath);
            if (_node == null)
                return null;     
            
            var _nodeType = _node.getNodeType();
            if (_nodeType == Q3D.Enums.sceneNodeType.SNODE_Model)
                _node.asModel().setCastShadow(1);
            else 
                _node.asVecModel().setCastShadow(1);
            
            var _mc = Q3D.movieClip(nodePath.replace("/","@^")  + "_fadeInMovieclip", 50);
            var _mcInst = Q3D.movieClipInstance(nodePath.replace("/","@^")  + "_fadeInInstance", _mc);
    
            _mcInst.setMaterialFadePlayer(_node, Q3D.Enums.fadeType.fadeIn, speed, 1.0);
            _mcInst.onMovieClipInstancePassFrame(50 * speed, function(mci, key) {		
                var mciName = mci.getCName();			
                setTimeout(function() {
                    mapObj.clearMovieClip(mciName, key, false);
                    if(restoreMaterial) {
                        var nodePath = mciName.substring(0, mciName.length - 15);
                        mapObj._restoreModelMaterial(nodePath.replace("@^","/"));
                    }				
                }, 100);
            });
            
            _mcInst.setPlayOptions(0,false);  
            _mcInst.play();
            return this;
        },
        // @method setModelFadeOut(nodePath: String, speed: Number, restoreMaterial: Boolean): this
        // 设置模型渐隐效果（采用动画剪辑对象实现）
        setModelFadeOut: function (nodePath, speed, restoreMaterial) {
            var _node = this.getSceneNode(nodePath);
            if (_node == null)
                return null;
            
            var _nodeType = _node.getNodeType();
            if (_nodeType == Q3D.Enums.sceneNodeType.SNODE_Model)
                _node.asModel().setCastShadow(0);
            else 
                _node.asVecModel().setCastShadow(0);
            
            var _mc = Q3D.movieClip(nodePath.replace("/","@^") + "_fadeOutMovieclip", 50);
            var _mcInst = Q3D.movieClipInstance(nodePath.replace("/","@^")  + "_fadeOutInstance", _mc);
    
            _mcInst.setMaterialFadePlayer(_node, Q3D.Enums.fadeType.fadeOut, speed, 1.0);
            _mcInst.onMovieClipInstancePassFrame(50 * speed, function(mci, key) {	
                var mciName = mci.getCName();
                
                setTimeout(function() {
                    mapObj.clearMovieClip(mciName, key, false);
                    if(restoreMaterial) {
                        var nodePath = mciName.substring(0, mciName.length - 16);
                        mapObj._restoreModelMaterial(nodePath.replace("@^","/"));
                    }				
                }, 100);
            });
    
            _mcInst.setPlayOptions(0,false);  
            _mcInst.play();
            return this;
        },
        
        // @method proportionHeightStretching(nodePath: String, animationName: String, options: NodeAnimation options): QNodeAnimation
        // 等比例高度伸缩节点动画，返回原生 QNodeAnimation 节点动画对象 
        proportionHeightStretching: function (nodePath, animationName, options) {    
            var DefaultNodeAnimationOptions = {
                StartHeightScale: null, //动画开始时的节点高度缩放比例，为空则采用当前缩放比例
                EndHeightScale: 1.0,//高度方向上缩放值
                Duration: 5,//动画持续时间秒
                OnAnimationEnd: null //动画执行完成回调
            }      
    
            Q3D.Util.jQueryExtend(true, DefaultNodeAnimationOptions, options);
            
            var _node = this.getSceneNode(nodePath);
            if (_node == null) return null;        
            
            //获取节点当前参数
            var Current = {
                Translate: _node.getPosition(),
                Rotate: _node.getOrientation(1),
                Scale: _node.getScale(1)
            }
            _node.setNodeAnimationName("");           
            
            //创建或获取节点动画资源
            var _rm = this._map3d.getResourceManager();
            var _ani = _rm.getResource(Q3D.Enums.resourceType.ANINODE, animationName);        
            if (_ani == null) {
                _ani = _rm.registerResource(Q3D.Enums.resourceType.ANINODE, animationName).asNodeAnimation();
                _ani.createEmpty();
            } else {
                _ani = _ani.asNodeAnimation();
                _ani.removeAllKeyframes();
            }
            
            var startScale = Q3D.vector3(Current.Scale);
            if (DefaultNodeAnimationOptions.StartHeightScale) { //改变当前缩放比例
                startScale = Q3D.vector3(1.0,DefaultNodeAnimationOptions.StartHeightScale,1.0);
                _node.setScale(startScale.get());
            }
            //添加缩放动画关键帧       
            var targetScale = Q3D.vector3(startScale.x , startScale.y * DefaultNodeAnimationOptions.EndHeightScale, startScale.z );
            _ani.addKeyframe(Current.Translate, Current.Rotate, startScale.get(), 0);
            _ani.addKeyframe(Current.Translate, Current.Rotate, targetScale.get(), DefaultNodeAnimationOptions.Duration);
            //_ani.updateKey();
            _ani.setLineType(0,0,1);
            
            _node.setNodeAnimationName(animationName);
            _node.setAlwaysHoldResource(1);
            _node.loadAllResource();    
            
            var _aniState = _node.getNodeAnimationState();
            _aniState.setAutoPlay(1);
            _aniState.play();
            
            if (Q3D.Util.isFunction(DefaultNodeAnimationOptions.OnAnimationEnd)) {
                mapObj._map3d.setOnAnimationEndListener(_aniState);
                mapObj.on("onAnimationEnd", DefaultNodeAnimationOptions.OnAnimationEnd);
            }
            
            return _ani;        
        },
    });
    
    
    // @namespace Map
    // @section POI操作
    Q3D.Map.include({
        // @method createPOI(nodePath: String, options?: POI options): QPOINode
        // 在场景根节点下动态创建POI，Node路径"区域/[父节点]/要创建的POI节点名称"，返回原生 QPOINode 对象
        createPOI: function (nodePath, options) {
            var DefaultCreateOption = {
                Position: null,//封装Vector3对象
                Orientation: null,//封装Vector3对象
                OrientationType: Q3D.Enums.nodeOrientationType.Self,
                Scale: null,//封装Vector3对象
                POIOptions: {
                    FontSize: 20,
                    FontName: "宋体",
                    FontColor: Q3D.colourValue("#000000", 1),//封装ColourValue对象
                    CharScale: 1.0,
                    Text: null,
                    Icon: null,
                    IconSize: null,//封装Vector2对象
                    POILayout: Q3D.Enums.poiLayOut.Left,
                    POILayoutCustom: null,	//支持负数，取值0相当于LeftTop，1.0相当于LeftBottom，0.5相当于Left；只对POILayout为LeftCustom、TopCustom、RightCustom、BottomCustom时有效
                    UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
                    IconAlphaEnabled: true,
                    FontOutLine: null, //同描边有关
                    FontEdgeColor: null,//封装ColourValue对象
                    AlphaTestRef: null,
                    Location: Q3D.Enums.poiImagePositionType.POI_LOCATE_BOTTOM,
                    LocationOffset: null, //当Location为POI_LOCATE_CUSTOM起作用，封装Vector2对象
                    BackFrameBorderSize: null, //同边框有关
                    BackBorderColor: null,//封装ColourValue对象
                    BackFillColor: null,//封装ColourValue对象
                    LabelMargin: null,//封装Vector2对象
                    IconLabelMargin: null,//封装Vector2对象，左右布局X分量有效，上下布局的Y分量有效
                    SpecialTransparent: true,
                    AlwaysOnScreen: false,
                    AbsPriority: null,
                    RelPriority: null,
                },
                OnLoaded: null, //加载结束回调
            }
            Q3D.Util.jQueryExtend(true,DefaultCreateOption, options);
            try {
                
                var ModelNodeCreated = this.createCommonNode(nodePath, Q3D.Enums.sceneNodeType.SNODE_POI);              
                if (ModelNodeCreated != null) {              
                      
                    var ModelAppend = ModelNodeCreated.asPOI();
    
                    if (DefaultCreateOption.Position != null) {
                        ModelAppend.setPosition(DefaultCreateOption.Position.get());
                    }
                    
                    if (DefaultCreateOption.Orientation != null) {
                        ModelAppend.setOrientation(DefaultCreateOption.Orientation.get(), DefaultCreateOption.OrientationType);
                    }
                    
                    if (DefaultCreateOption.Scale != null) {
                        ModelAppend.setScale(DefaultCreateOption.Scale.get());
                    }
    
                    ModelAppend.setFontName(DefaultCreateOption.POIOptions.FontName);
                    ModelAppend.setFontSize(DefaultCreateOption.POIOptions.FontSize);
                    ModelAppend.setFontColor(DefaultCreateOption.POIOptions.FontColor.revise().get());
                    ModelAppend.setCharScale(DefaultCreateOption.POIOptions.CharScale);
                    
                     if (DefaultCreateOption.POIOptions.FontOutLine != null) {
                        ModelAppend.setFontOutLine(DefaultCreateOption.POIOptions.FontOutLine);
                        if (DefaultCreateOption.POIOptions.FontEdgeColor != null)
                            ModelAppend.setFontEdgeColor(DefaultCreateOption.POIOptions.FontEdgeColor.revise().get());
                    }
                    
                    if (DefaultCreateOption.POIOptions.Text != null) {
                        ModelAppend.setText(DefaultCreateOption.POIOptions.Text);
                    } else {
                        ModelAppend.setText(nodePath.split('/')[1]);
                    }
                    if (DefaultCreateOption.POIOptions.Icon != null) {
                        ModelAppend.setIcon(DefaultCreateOption.POIOptions.Icon);
                    }
                    if (DefaultCreateOption.POIOptions.IconSize != null) {
                        ModelAppend.setIconSize(DefaultCreateOption.POIOptions.IconSize.get());
                    }
                    ModelAppend.setPOILayout(DefaultCreateOption.POIOptions.POILayout);
                    if(DefaultCreateOption.POIOptions.POILayout >= Q3D.Enums.poiLayOut.LeftCustom &&  DefaultCreateOption.POIOptions.POILayout <= Q3D.Enums.poiLayOut.BottomCustom && DefaultCreateOption.POIOptions.POILayoutCustom != null)
                    {
                        ModelAppend.setPOILayoutCustom(DefaultCreateOption.POIOptions.POILayoutCustom);
                    }
                    ModelAppend.setUIType(DefaultCreateOption.POIOptions.UIType);
                    ModelAppend.setIconAlphaEnabled(DefaultCreateOption.POIOptions.IconAlphaEnabled);               
                   
                    if (DefaultCreateOption.POIOptions.AlphaTestRef != null) {
                        ModelAppend.setAlphaTestRef(DefaultCreateOption.POIOptions.AlphaTestRef);
                    }
                    
                    if (DefaultCreateOption.POIOptions.Location == Q3D.Enums.poiImagePositionType.POI_LOCATE_CUSTOM && DefaultCreateOption.POIOptions.LocationOffset != null) {
                        ModelAppend.setLocation(Q3D.Enums.poiImagePositionType.POI_LOCATE_CUSTOM);//此时[0,0]位于整个POI的中心位置
                        //var x = DefaultCreateOption.POIOptions.IconSize.x / 2 - DefaultCreateOption.POIOptions.LocationOffset.x;
                        //var y = DefaultCreateOption.POIOptions.LocationOffset.y - DefaultCreateOption.POIOptions.IconSize.y / 2;
                        ModelAppend.setLocationOffset(DefaultCreateOption.POIOptions.LocationOffset.get());//注意x水平右增加，y垂直上增加。[20,20]相当于将整个POI右上方移动若干像素
                    } else {
                        ModelAppend.setLocation(DefaultCreateOption.POIOptions.Location);
                    }
                    
                    if (DefaultCreateOption.POIOptions.BackFrameBorderSize != null) {
                        ModelAppend.showBackFrame(1);
                        ModelAppend.setBackFrameBorderSize(DefaultCreateOption.POIOptions.BackFrameBorderSize);
                        if (DefaultCreateOption.POIOptions.BackBorderColor != null)
                            ModelAppend.setBackBorderColor(DefaultCreateOption.POIOptions.BackBorderColor.revise().get());
                    }
                    if (DefaultCreateOption.POIOptions.BackFillColor != null) {
                        ModelAppend.setBackFillColor(DefaultCreateOption.POIOptions.BackFillColor.revise().get());
                    }
                    if (DefaultCreateOption.POIOptions.LabelMargin != null) {
                        ModelAppend.setLabelMargin(DefaultCreateOption.POIOptions.LabelMargin.get());
                    }
                    //注意水平排版x分量有效果；上下排版y分量有效
                    if (DefaultCreateOption.POIOptions.IconLabelMargin != null) {
                        ModelAppend.setIconLabelMargin(DefaultCreateOption.POIOptions.IconLabelMargin.get());
                    }                
    
                    if (DefaultCreateOption.POIOptions.SpecialTransparent) {
                        ModelAppend.setSpecialTransparent(DefaultCreateOption.POIOptions.SpecialTransparent ? 1 : 0);
                    }
                    if (DefaultCreateOption.POIOptions.AlwaysOnScreen) {
                        ModelAppend.setAlwaysOnScreen(DefaultCreateOption.POIOptions.AlwaysOnScreen ? 1 : 0);
                    }
                    if (Q3D.Util.isInteger(DefaultCreateOption.POIOptions.AbsPriority)) {
                        ModelAppend.setAbsPriority(DefaultCreateOption.POIOptions.AbsPriority);
                    }
                    if (Q3D.Util.isInteger(DefaultCreateOption.POIOptions.RelPriority)) {
                        ModelAppend.setRelPriority(DefaultCreateOption.POIOptions.RelPriority);
                    }    
                    
                    if (DefaultCreateOption.OnLoaded) {
                        mapObj._map3d.setSceneNodeListener(ModelNodeCreated);
                        mapObj.attachUIEvent("onSceneNodeAllResourceCompleted", mapObj.getSceneNodeFullName(ModelNodeCreated), DefaultCreateOption.OnLoaded);
                    }                
                    ModelNodeCreated.trackAllResource();   
                    
                    return ModelAppend;
                } 
            } catch (e) {
                this.showNotice("错误", "createPOI: " + e.message);
                return null;
            }
            return null;
        },      
         
    
        // @method setBatchPOIJump(nodeNames: Array, height: Number, jumpTimes?: Number, circleTime?: Number): this
        // 批量设置POI跳动若干次（采用动画剪辑对象实现），如果是持续跳动的清除需要调用 clearPOIJump
        setBatchPOIJump: function (nodeNames, height, jumpTimes, circleTime) {
            
            if(!!this._poiJumpObj) {
                this.clearPOIJump();
            }
            this._poiJumpObj = [];  
            
            var framesPerSec = 50;
            circleTime = circleTime || 1.0;
            var _mc = Q3D.movieClip("poi_jump_movieclip", framesPerSec);
            for (var j = 0 ; j < nodeNames.length; j++) {
                var nodeExist = this.getSceneNode(nodeNames[j]);
                if (nodeExist == null || nodeExist.getNodeType() != Q3D.Enums.sceneNodeType.SNODE_POI)
                    continue;
                var poiExist = nodeExist.asPOI();
                this._poiJumpObj.push(nodeNames[j]);  
                
                //创建新的实例
                var _mcInst = Q3D.movieClipInstance(nodeNames[j].replace("/","@^") + "_poiJumpInstance", _mc);
                //准备Actor定义
                var p0 = Q3D.vector3(poiExist.getPosition());
                var p1 = Q3D.vector3(p0.x, p0.y + height, p0.z);
                var keyPairs = [{
                        Key: 0,
                        Pos: p0
                    }, {
                        Key: circleTime * framesPerSec / 2,
                        Pos: p1
                    }, {
                        Key: circleTime * framesPerSec,
                        Pos: p0
                    }
                ];
                if (jumpTimes != undefined) {
                    for (var i = 2; i < jumpTimes * 2; i++) {
                        var tmp = {};
                        tmp.Key = (i + 1) * circleTime * framesPerSec / 2;
                        tmp.Pos = i % 2 == 0 ? p1 : p0;
                        keyPairs.push(tmp);
                    }
                }
                _mc.addActorTranslateAnimation("poi_jump_ani_" + j, keyPairs);
                _mcInst.setTransformPlayer("poi_jump_ani_" + j, poiExist);
                
                if (jumpTimes == undefined) {
                    _mcInst.setPlayOptions(0,true);  
                    _mcInst.play();
                } else {                
                    //如果不循环播放，播放结束后清除相关动画对象
                    var endKey = keyPairs[keyPairs.length-1].Key;
                    _mcInst._clearMovieClipInstanceOnLastFrame(endKey);      
                    _mcInst.setPlayOptions(0,false);  
                    _mcInst.play();                
                }
            }      
            return this;
        },
        
        // @method setBatchPOIGravityJump(nodeNames: Array, height: Number): this
        // 批量设置POI重力跳动效果（采用动画剪辑对象实现）
        setBatchPOIGravityJump: function (nodeNames, height) {
            
            //计算参数
            //_h1为初始上升到的高度，_h2,_h3,_h4为各次的回弹高度
            var _h1 = height, _h2 = _h1 / 7, _h3 = _h1 / 35, _h4 = _h1 / 105;        
            //根据t = Math.sqrt(2 * h/a)以及t1 + 2*t2 + 2*t3 + 2*t4 = 1，可算出：
            var t1 = 1 / 2.28917;
            //从而得出重力加速度
            var a = (2 * _h1) / (t1 * t1);
            //再求出t2,t3,t4
            var t2 = Math.sqrt(2 * _h2 / a);
            var t3 = Math.sqrt(2 * _h3 / a);
            var t4 = Math.sqrt(2 * _h4 / a);
                
            var framesPerSec = 50;
            var _mc = Q3D.movieClip("poi_gravity_jump_movieclip", framesPerSec);
            for (var j = 0 ; j < nodeNames.length; j++) {
                var nodeExist = this.getSceneNode(nodeNames[j]);
                if (nodeExist == null || nodeExist.getNodeType() != Q3D.Enums.sceneNodeType.SNODE_POI)
                    continue;
                var poiExist = nodeExist.asPOI();
                var suffixes = this.guid();
                //创建新的实例
                var _mcInst = Q3D.movieClipInstance("poi_gravity_jump_instance_" + suffixes, _mc);          
    
                //准备Actor定义
                var p0 = Q3D.vector3(poiExist.getPosition());
                var p1 = Q3D.vector3(p0.x, p0.y + _h1, p0.z);
                var p2 = Q3D.vector3(p0.x, p0.y + _h2, p0.z);
                var p3 = Q3D.vector3(p0.x, p0.y + _h3, p0.z);
                var p4 = Q3D.vector3(p0.x, p0.y + _h4, p0.z);
                
                var keyPairs = [{
                        Key: 0,
                        Pos: p1
                    }, {
                        Key: t1 * framesPerSec,
                        Pos: p0
                    }, {
                        Key: (t1 + t2) * framesPerSec,
                        Pos: p2
                    }, {
                        Key: (t1 + t2 * 2) * framesPerSec,
                        Pos: p0
                    }, {
                        Key: (t1 + t2 * 2 + t3) * framesPerSec,
                        Pos: p3
                    }, {
                        Key: (t1 + t2 * 2 + t3 * 2) * framesPerSec,
                        Pos: p0
                    }, {
                        Key: (t1 + t2 * 2 + t3 * 2 + t4) * framesPerSec,
                        Pos: p4
                    }, {
                        Key: framesPerSec,
                        Pos: p0
                    }
                ];
                
                _mc._addActorTranslateGravityAnimation("poi_gravity_ani_" + suffixes, keyPairs);
                _mcInst.setTransformPlayer("poi_gravity_ani_" + suffixes, poiExist);     
    
                //如果不循环播放，播放结束后清除相关动画对象
                _mcInst._clearMovieClipInstanceOnLastFrame(framesPerSec); 
                _mcInst.setPlayOptions(0,false);  
                _mcInst.play();    
    
            }      
            return this;
        },   
        
        // @method clearPOIJump(): this
        // 清除所有POI跳动效果
        clearPOIJump: function () {
            if(!this._poiJumpObj) return null;
            var _wm = mapObj._map3d.getWorldManager();
            for (var i = 0; i < this._poiJumpObj.length; i++) {
                var nodePath = this._poiJumpObj[i],
                    instName = nodePath.replace("/","@^") + "_poiJumpInstance";
                this.clearMovieClip(instName, 0, true);            
            }
            _wm.destroyMovieClip("poi_jump_movieclip");       
            delete this._poiJumpObj;   
            return this;		
        },
        
        // @method setPOIColorAni(nodePath: String, fromClr: ColourValue, toClr: ColourValue, timeSec: Number, isLoop?: Boolean): this
        // 设置给定POI颜色闪烁动画，isLoop 为 true 表示颜色循环：fromClr->toClr->fromClr，为false表示 fromClr->toClr
        setPOIColorAni: function(nodePath, fromClr, toClr, timeSec, isLoop) {
            var nodeExist = this.getSceneNode(nodePath);
            if (nodeExist == null || nodeExist.getNodeType() != Q3D.Enums.sceneNodeType.SNODE_POI) return null;
            var poiExist = nodeExist.asPOI();
        
            isLoop = isLoop || false;
            poiExist.setAlwaysOnScreen(1);
            if(!!poiExist.getText()) {
                poiExist.enableFontColorAni(1);
                poiExist.setFontColorAni(timeSec, fromClr.get(), toClr.get(), isLoop ? 1 : 0);
            }		
            if(!!poiExist.getIcon()) {		
                poiExist.enableIconColorAni(1);
                poiExist.setIconColorAni(timeSec, fromClr.get(), toClr.get(), isLoop ? 1 : 0);
            }
            return this;
        },
        
        // @method clearPOIColorAni(nodePath: String): this
        // 清除当前POI颜色闪烁效果
        clearPOIColorAni: function (nodePath) {
            var nodeExist = this.getSceneNode(nodePath);
            if (nodeExist == null || nodeExist.getNodeType() != Q3D.Enums.sceneNodeType.SNODE_POI) return null;
            var poiExist = nodeExist.asPOI();
            
            poiExist.setAlwaysOnScreen(0);
            if(!!poiExist.getText()) {
                poiExist.enableFontColorAni(0);
            }
            if(!!poiExist.getIcon()) {	
                poiExist.enableIconColorAni(0);
            }
            return this;
        },
    
    });
    
    
    // @namespace Map
    // @section 常用工具操作
    Q3D.Map.include({
    
        // @method enableCullPlane(areaName: String, options?: CullPlane options): this
        // 实现剖面工具效果
        enableCullPlane: function (areaName, options) {  
            var defaultEditModeOption = { 
                VMin: null, //可设定AABB范围，如果没有设定，取Area的
                VMax: null,
                MeshHeight: 7.5,//操控节点距离盒子的距离, 通常是模型大小的一半
                HandlerMesh: "Mesh/lxlan.mesh",//用于操控节点的模型名称 ，该模型当前高度为15           
                MeshScale: Q3D.vector3(1,1,1),//模型缩放 ，当模型的实际尺寸和操控节点距离盒子的距离不匹配时调用         
            }
            Q3D.extend(defaultEditModeOption,options);
            try {      
                var area = this.getArea(areaName);
                if (area == null) return null;
                
                if (defaultEditModeOption.VMin == null || defaultEditModeOption.VMax == null) {
                    var VMin = Q3D.vector3(0,0,0).get();
                    var VMax = Q3D.vector3(0,0,0).get();
                    area.getAABB(0, VMin, VMax);
                    defaultEditModeOption.VMin = Q3D.vector3(VMin);
                    defaultEditModeOption.VMax = Q3D.vector3(VMax);
                }
                
                this._map3d.createCullPlanes(areaName, defaultEditModeOption.VMin.get(), defaultEditModeOption.VMax.get(), 
                    defaultEditModeOption.MeshHeight, defaultEditModeOption.HandlerMesh, defaultEditModeOption.MeshScale.get());
                this.getSceneNode(areaName, "cullBox").enableQuery(0); //禁止查询
                    
                            
                this._cullMode = false;
                this.attachMouseEvent("OnLButtonDown", "_startCullPlanes", (function (options) {
                    var im = this._map3d.getInputManager(); 
                    if (options.NearestNode != null) {
                        options.NearestNode.showAux(0, 0);
                        if (options.NearestNode.getAlias() == "Handler") {
                            this._cullMode = true;
                            im.sendActionMsg( Q3D.Enums.actionType.OBJECTSELECT_MOVAUX, Q3D.Enums.actionMsg.SWITCH_USAGE, 0, 0 );
                            im.bindControlAction( Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.LBUTTON, Q3D.Enums.actionType.OBJECTSELECT_MOVAUX );	//绑定鼠标左键操作
                        }
                    }
                }).bind(this));
                this.attachMouseEvent("OnLButtonUp", "_endCullPlanes", (function (options) {
                    if (this._cullMode) {
                        this._map3d.updateCullPlanes();
                    }
                    this._cullMode = false;
                    var im = this._map3d.getInputManager(); 
                    im.bindControlAction( Q3D.Enums.device.MOUSE, Q3D.Enums.mouse.LBUTTON, Q3D.Enums.actionType.TRANS_SCENE  );	
                    im.sendActionMsg( Q3D.Enums.actionType.OBJECTSELECT_MOVAUX, Q3D.Enums.actionMsg.SWITCH_USAGE, 1, 0 );
                    
                }).bind(this));
                this.attachMouseEvent("OnMouseMove", "_updateCullPlanes", (function (options) {
                    if (this._cullMode) {
                        this._map3d.updateCullPlanes();
                    }                                
                }).bind(this));                 
            
            } catch (e) {
                this.showNotice("错误", "enableCullPlane: " + e.message);
                return null;
            }
            return  this;
        },
        // @method disableCullPlane(): this
        // 删除剖面工具效果
        disableCullPlane: function() {
            this._map3d.destroyCullPlanes();
            this.detachMouseEvent("OnLButtonDown", "_startCullPlanes"); 
            this.detachMouseEvent("OnLButtonUp", "_endCullPlanes"); 
            this.detachMouseEvent("OnMouseMove", "_updateCullPlanes"); 
            return this;
        },
        
        // @method enableLaserDistance(lineColor: ColourValue): this
        // 实现激光测距效果: 需要在引擎初始化前开启物理，root文件中参考设置如下
        //  `<Physics enabled="true" mainEnabled="true" acsEnabled="false">`
        //   ` <PhyWorld meshAutoSetup="true" fPRoamType="0" id="0" />`
        //  `</Physics>`
        enableLaserDistance: function(lineColor) {
            if (!lineColor) {
                lineColor = Q3D.colourValue('#ff0000', 1);
            }
            this._rulerColor = lineColor;
            this.attachMouseEvent("OnLButtonDown", "_laserDist", (function (options) {
                var v2 = Q3D.vector2I(options.logX, options.logY).get();
                this._map3d.getLaserDist(v2, this._rulerColor.get());
            }).bind(this));
            return this;
        },
        // @method enableRulerDistance(lineColor: ColourValue): this
        // 实现直尺测距效果
        enableRulerDistance: function(lineColor) {
            if (!lineColor) {
                lineColor = Q3D.colourValue('#ff0000', 1);
            }
            this._rulerColor = lineColor;
            this._rulerStatus = 1;
            this.attachMouseEvent("OnLButtonDown", "_rulerDist", (function (options) {
                var v2 = Q3D.vector2I(options.logX, options.logY).get();
                if (this._rulerStatus == 1) {
                    this._map3d.setRulerDistStart(v2, this._rulerColor.get(), -1);
                    this._rulerStatus = 2;
                } else if (this._rulerStatus == 2) {
                    this._map3d.rulerDist(v2, -1);
                    this._rulerStatus = 1;
                }
            }).bind(this));
            this.attachMouseEvent("OnMouseMove", "_rulerDist", (function (options) {
            var v2 = Q3D.vector2I(options.logX, options.logY).get();
                if (this._rulerStatus == 2) {
                    this._map3d.rulerDist(v2, -1);
                }                           
            }).bind(this)); 
            return this;
        },
        
        // @method drawPolyline(areaName: String, options?: Draw options): this
        // 实现多点连续画线并测距效果: 左键单击添加点； 右键双击结束； Ctrl+右键双击取消
        drawPolyline: function(areaName, options) {
            var defaultOptions = {
                Material: null, //如果需要调用此方法创建大量polyline，建议使用已有材质，而不是动态创建的材质		
                Color: Q3D.colourValue("#FF0000", 1), //线的颜色，以下用于动态创建的材质
                Alpha: 1, //线的透明度
                LineWidth: 2, //线宽
                POIOptions: {
                    Icon: null,
                    IconSize: null,
                    FontSize: 16, //文字大小
                    FontName: "宋体", //文字字体
                    FontColor: Q3D.colourValue("#FFFFFF", 1), //文字颜色
                    FontEdgeColor: Q3D.colourValue("#000000", 1), //文字描边颜色
                    FontOutLine: 1, //文字描边宽度
                },
                ShowDistance: true,  //是否显示距离
            };
            Q3D.Util.jQueryExtend(true, defaultOptions, options);
            //把所有创建的线和POI都放在同一父节点下，方便删除
            var parentNodeName = "_rulerPolylinesAndPOI",
                parentNodePath = areaName + "/" + parentNodeName,
                parentNode = this.getSceneNode(areaName, parentNodeName);		
            if(!parentNode) {
                parentNode = this.getArea(areaName).createTopNode(Q3D.Enums.sceneNodeType.SNODE_Group, parentNodeName);
            }
            //创建一个QLineNode节点，名字随机
            var lineNodeName = "_rulerPolyline" + this.guid(),
                lineNodePath = parentNodePath + "/" + lineNodeName,
                lineNodeCreated = this.createCommonNode(lineNodePath, Q3D.Enums.sceneNodeType.SNODE_Line);
                
            if(!lineNodeCreated) {
                return null;
            }	
            var polylineAppend = lineNodeCreated.asLine();		
            //判断材质是否存在，不存在则新建
            if (defaultOptions.Material != null) {
                polylineAppend.setMaterial(defaultOptions.Material);
            }
            else {
                var tempMatName = "defaultMaterialForLine-" + this.guid(), //随机材质名称
                    material = this._map3d.getResourceManager().getResource(Q3D.Enums.resourceType.MATERIAL, tempMatName);
                    
                if (material == null) {
                    material = this.createSimpleMaterial(tempMatName, {
                        Alpha: defaultOptions.Alpha,
                        EmissiveColor: defaultOptions.Color,
                    });
                }
                else {
                    material = material.asMaterial();
                    material.setAlpha(defaultOptions.Alpha);
                    material.setEmissiveColor(defaultOptions.Color.get());
                }                 
                polylineAppend.setMaterial(tempMatName);
            }						
    
            //删除鼠标事件
            this.detachMouseEvent("OnLButtonDown", "_drawRulerPolyline");
            this.detachMouseEvent("OnMouseMove", "_drawRulerPolyline");
            this.detachMouseEvent("OnRButtonDblClk", "_drawRulerPolyline");
            this.detachMouseEvent("OnRButtonDown", "_drawRulerPolyline");	
            this._drawPolyLineStatus = 0;
            //绑定鼠标左键事件
            this.attachMouseEvent("OnLButtonDown", "_drawRulerPolyline", function(options){
                if(options.GroundCoord != null) {				
                    var area = mapObj.getArea(areaName),
                        currPosV3 = area.toLocalPos(options.GroundCoord);	
                    //给定POI的各项参数
                    var poiOptions = {
                        Position: null,       
                        POIOptions: {
                            Icon: defaultOptions.POIOptions.Icon,
                            IconSize: defaultOptions.POIOptions.IconSize,
                            Text: "",
                            FontSize: defaultOptions.POIOptions.FontSize,
                            FontName: defaultOptions.POIOptions.FontName,
                            FontColor: defaultOptions.POIOptions.FontColor,
                            UIType: Q3D.Enums.poiUIType.CameraOrientedKeepSize,
                            POILayout: Q3D.Enums.poiLayOut.Left,
                            Location: Q3D.Enums.poiImagePositionType.POI_LOCATE_VCENTER,
                            FontOutLine: defaultOptions.POIOptions.FontOutLine,
                            FontEdgeColor: defaultOptions.POIOptions.FontEdgeColor, 
                            AlwaysOnScreen: true,
                        }	
                    };
                    //_drawPolyLineStatus: 0 - 初始化； 1 - 开始新的测距； 2 - 测距进行中
                    switch(mapObj._drawPolyLineStatus) {
                        case 0:
                            //设置QLineNode的位置
                            polylineAppend.setPosition(currPosV3);
                            //初始化全局变量参数
                            mapObj._currentLine = null;		
                            //修改状态
                            //mapObj._drawPolyLineStatus = 1;
                            //break;
                        case 1: 
                            //添加线，并设置线类型和线宽
                            mapObj._currentLine = polylineAppend.addLine();
                            var line = mapObj._currentLine;
                            line.setLineType(0);
                            line.setLineWidth(defaultOptions.LineWidth);					
                            //添加点，点坐标相对于QLineNode节点		
                            var tempPosV3 = Q3D.vector3(currPosV3),
                                nodePos = Q3D.vector3(polylineAppend.getPosition());
                            tempPosV3.subtract(nodePos);							
                            line.addPoint(tempPosV3.get());
                            line.addPoint(tempPosV3.get());
                            //创建一个节点作为当前Polyline的POI的父节点
                            mapObj._poiParentName = "_rulerPOIParent" + mapObj.guid();
                            mapObj.createCommonNode(parentNodePath + "/" + mapObj._poiParentName, Q3D.Enums.sceneNodeType.SNODE_Group);					
                            //创建"起点"POI
                            poiOptions.Position = Q3D.vector3(currPosV3);
                            if(defaultOptions.ShowDistance) {
                                poiOptions.POIOptions.Text = "起点";
                            }
                            poiOptions.POIOptions.AlwaysOnScreen = true;
                            mapObj.createPOI(areaName + "/" + mapObj._poiParentName + "/_rulerPOI" + mapObj.guid(), poiOptions);
                            //创建"双击结束"POI
                            poiOptions.Position = Q3D.vector3(currPosV3);
                            poiOptions.POIOptions.Text = "右键双击结束";
                            poiOptions.POIOptions.AlwaysOnScreen = false;
                            mapObj.createPOI(areaName + "/" + mapObj._poiParentName + "/" + mapObj._poiParentName + "_end", poiOptions);	
                            //修改状态
                            mapObj._drawPolyLineStatus = 2;
                            break;
                        case 2:
                            var line = mapObj._currentLine,
                                tempPosV3 = Q3D.vector3(currPosV3),
                                nodePos = Q3D.vector3(polylineAppend.getPosition());
                            tempPosV3.subtract(nodePos);
                            line.addPoint(tempPosV3.get());
                            var count = line.getPointCount();
                            line.setPoint(count - 2, tempPosV3.get());
                            if(defaultOptions.ShowDistance) {						
                                //计算两点间距离
                                var sartPt = line.getPoint(count - 3),
                                    endPt = line.getPoint(count - 2);
                                var dx = endPt.x - sartPt.x,
                                    dy = endPt.y - sartPt.y,
                                    dz = endPt.z - sartPt.z;					
                                var distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                                //设置POI的文字
                                poiOptions.POIOptions.Text = Q3D.Util.formatNum(distance, 2) + " 米";
                            }
                            //添加POI					
                            poiOptions.Position = Q3D.vector3(currPosV3);
                            mapObj.createPOI(areaName + "/" + mapObj._poiParentName + "/_rulerPOI" + mapObj.guid(), poiOptions);														
                            break;
                    }
                }	
            });	
            
            //鼠标移动事件
            this.attachMouseEvent("OnMouseMove", "_drawRulerPolyline", function(options){						
                if(mapObj._drawPolyLineStatus === 2 && options.GroundCoord != null ) {					
                    var area = mapObj.getArea(areaName),
                        currPosV3 = area.toLocalPos(options.GroundCoord);						
                    //更新line终点的位置
                    var line = mapObj._currentLine,
                        tempPosV3 = Q3D.vector3(currPosV3),
                        nodePos = Q3D.vector3(polylineAppend.getPosition()),
                        count = line.getPointCount();
                    tempPosV3.subtract(nodePos);
                    line.setPoint(count - 1, tempPosV3.get());
                    //更新POI的位置
                    var poiEndAppend = mapObj.getSceneNode(areaName, mapObj._poiParentName + "_end");
                    if(poiEndAppend != null) {
                        poiEndAppend.setPosition(currPosV3);
                    }				
                }
            });		
            
            //右键双击结束
            this.attachMouseEvent("OnRButtonDblClk", "_drawRulerPolyline", function(options){
                if(mapObj._drawPolyLineStatus === 2 && options.GroundCoord != null) {					
                    var area = mapObj.getArea(areaName),
                        currPosV3 = area.toLocalPos(options.GroundCoord);						
                    //暂时禁用鼠标移动事件
                    mapObj.setMouseEvent("OnMouseMove", "_drawRulerPolyline", false);
                    //更新line最后一个点的位置					
                    var line = mapObj._currentLine,
                        tempPosV3 = Q3D.vector3(currPosV3),
                        nodePos = Q3D.vector3(polylineAppend.getPosition()),
                        count = line.getPointCount();
                    tempPosV3.subtract(nodePos);
                    line.setPoint(count - 1, tempPosV3.get());
                    //更新最后一个点的POI的text值
                    var text = "";
                    if(defaultOptions.ShowDistance) {																											
                        var distance = 0;
                        for(var i = 1; i <= count - 1; ++i) {		
                            var sartPt = line.getPoint(i - 1),
                                endPt = line.getPoint(i);
                            var dx = endPt.x - sartPt.x,
                                dy = endPt.y - sartPt.y,
                                dz = endPt.z - sartPt.z;
                            distance += Math.sqrt(dx * dx + dy * dy + dz * dz);
                        }
                        text = "总长：" + Q3D.Util.formatNum(distance, 2) + " 米";
                    }								
                    var poiEndAppend = mapObj.getSceneNode(areaName, mapObj._poiParentName + "_end");
                    if(poiEndAppend != null) {
                        poiEndAppend.setPosition(currPosV3);
                        poiEndAppend.asPOI().setAlwaysOnScreen(1);
                        poiEndAppend.asPOI().setText(text);
                    }
                    //全局变量恢复初始值
                    mapObj._currentLine = null;
                    mapObj._poiParentName = "";
                    mapObj._drawPolyLineStatus = 1;
                    //恢复鼠标移动事件
                    mapObj.setMouseEvent("OnMouseMove", "_drawRulerPolyline", true);
                }					
            });
        
            //Ctrl+右键点击取消
            this.attachMouseEvent("OnRButtonDown", "_drawRulerPolyline", function(options){
                if(mapObj._drawPolyLineStatus === 2 && options.CtrlPressDown) {
                    var lineCount = polylineAppend.getLineCount(),
                        line = mapObj._currentLine;
                    //删除线
                    if(lineCount > 0) {
                        if(line != null) {
                            line.removeAll();
                        }
                        polylineAppend.removeLine(lineCount - 1);
                    }	
                    //删除POI
                    mapObj.destroySceneNode(areaName, mapObj._poiParentName);
                    //全局变量恢复初始值
                    mapObj._currentLine = null;
                    mapObj._poiParentName = "";
                    mapObj._drawPolyLineStatus = 1;
                }
            });
        },
        
        // @method clearPolyline(areaName: String): this
        // 删除drawPolyline的效果
        clearPolyline: function(areaName) {
            //删除线和POI
            this.destroySceneNode(areaName, "_rulerPolylinesAndPOI");
            //卸载鼠标事件
            this.detachMouseEvent("OnLButtonDown", "_drawRulerPolyline");
            this.detachMouseEvent("OnMouseMove", "_drawRulerPolyline");
            this.detachMouseEvent("OnRButtonDblClk", "_drawRulerPolyline");
            this.detachMouseEvent("OnRButtonDown", "_drawRulerPolyline");
            //删除全局变量
            delete this._currentLine;
            delete this._poiParentName;
            delete this._drawPolyLineStatus;
            return this;
        },
        
        // @method disableDistanceTool(): this
        // 删除所有测距效果
        disableDistanceTool: function() {
            this._map3d.clearDist();
            this.detachMouseEvent("OnLButtonDown", "_laserDist"); 
            this.detachMouseEvent("OnLButtonDown", "_rulerDist"); 
            this.detachMouseEvent("OnMouseMove", "_rulerDist");
            return this;
        },
        
        // @method createEagleEyeMap(nodePath: String, options: EagleEye options): this
        // 创建鹰眼图
        createEagleEyeMap: function(nodePath, options) {		
            var defaultOptions = {
                EagleEyePosition: null,		//鹰眼位置，Vector3。两种方式，任选其一。
                EagleEyeAbsPos: null,		//鹰眼位置，Vector3d。两种方式，任选其一。	
                EagleEyeOrient: null,		//鹰眼方向，Vector3
                IndicatorOptions: {
                    Icon: "",				//指示箭头图标
                    IconSize: null,			//图标大小，Vector2
                    Scale: null				//图标缩放比例，Vector3
                },
                ViewPortOptions: {
                    Left: 0,			//左边距百分比
                    Top: 0.70,			//上边距百分比
                    Width: 0.3,			//宽度，百分比
                    Height: 0.3,		//高度，百分比
                    ZOrder: 2				
                },
                InvisibleIDArray: null,		//子窗口中不可见节点的visID数组
                BackgroundColor: null,		//ColourValue    
            };
            
            Q3D.Util.jQueryExtend(true, defaultOptions, options);		
    
            var path = nodePath.split("/"),
                nodeName = path[path.length - 1],
                areaName = path[0];    
                
            //创建localViewportCamera
            var cam = this.createCommonNode(areaName + "/" + nodeName, Q3D.Enums.sceneNodeType.SNODE_LocalViewCamera);
            if(!cam) return;
            cam = cam.asCamera();
            var localViewCam = cam.asLocalViewCamera();
            if(defaultOptions.EagleEyePosition != null) {
                localViewCam.setPosition(defaultOptions.EagleEyePosition.get());
            }
            else if(defaultOptions.EagleEyeAbsPos != null) {
                localViewCam.setAbsPos(defaultOptions.EagleEyeAbsPos.get());
            }
            
            if(defaultOptions.EagleEyeOrient != null) {
                localViewCam.setOrientation(defaultOptions.EagleEyeOrient.get(), Q3D.Enums.orientationType.World);
            }
            //添加Viewport
            var rtManager = this._map3d.getRenderTargetManager();
            rtManager.getMainTarget().addViewport(localViewCam, defaultOptions.ViewPortOptions.Left, defaultOptions.ViewPortOptions.Top, defaultOptions.ViewPortOptions.Width, defaultOptions.ViewPortOptions.Height, defaultOptions.ViewPortOptions.ZOrder);
            //设置ViewPort的背景颜色
            var viewport = cam.getViewport();
            if(defaultOptions.BackgroundColor != null) {
                viewport.setBackgroundColour(defaultOptions.BackgroundColor.get());
            }
            //创建指示图标（用POI实现）
            var mainCamera = this._map3d.getWorldManager().getMainCamera(0),
                posV3d = mainCamera.getAbsPos(),
                orientation = mainCamera.getOrientation(Q3D.Enums.orientationType.World);
                
            this._map3d.setCameraListener(mainCamera);	
            posV3d.y = 5; 
        
            var poiOptions = {
                Position: Q3D.vector3(Q3D.vector3d(posV3d).toLocalPos(areaName)),
                Orientation: Q3D.vector3(-90, 0, orientation.z),
                OrientationType: Q3D.Enums.nodeOrientationType.World,
                Scale: defaultOptions.IndicatorOptions.Scale,
                POIOptions: {
                    Icon: defaultOptions.IndicatorOptions.Icon,
                    IconSize: defaultOptions.IndicatorOptions.IconSize,
                    Text: "",
                    POILayout: Q3D.Enums.poiLayOut.Center,
                    UIType: Q3D.Enums.poiUIType.Normal,
                    Location: Q3D.Enums.poiImagePositionType.POI_LOCATE_NONE,
                    AlwaysOnScreen: true,
                }
            };
        
            var pathOfPOI = areaName + "/" + nodeName + "_eagleEyeIndicator";
            var poiNode = this.createPOI(pathOfPOI, poiOptions);
            poiNode.setObjectVisibleID(0);
            mainCamera.enableVisID(0, 0);
            //设置子窗口中某些节点不可见
            if(defaultOptions.InvisibleIDArray != null) {
                for(var i = 0, len = defaultOptions.InvisibleIDArray.length; i < len; ++i) {
                    localViewCam.enableVisID(defaultOptions.InvisibleIDArray[i], 0);
                }
            }
            //保存保存POI节点的路径，以便主摄像机更新事件中使用
            this._eagleEyeIndicatorPath = pathOfPOI;		
            //定义主摄像机更新事件
            this.on("OnCameraUpdate", function() {
                var eagleEyeIndicator = mapObj.getSceneNode(mapObj._eagleEyeIndicatorPath);
                if(eagleEyeIndicator != null) {
                    var mainCamera = mapObj._map3d.getWorldManager().getMainCamera(0),
                        posV3d = mainCamera.getAbsPos(),
                        orientation = mainCamera.getOrientation(Q3D.Enums.orientationType.World);
                    posV3d.y = 10;
                    eagleEyeIndicator.setAbsPos(posV3d);
                    eagleEyeIndicator.setOrientation(Q3D.vector3(-90, 0, orientation.z).get(), Q3D.Enums.nodeOrientationType.World)
                }	
            });	
            
            return this;
        },
        
        // @method removeEagleEyeMap(nodePath: String): this
        // 删除鹰眼图
        removeEagleEyeMap: function(nodePath) {	
            var sNode = this.getSceneNode(nodePath);
            if(!sNode) return;
            
            var path = nodePath.split("/"),
                nodeName = path[path.length - 1],
                areaName = path[0];
            
            this.off("OnCameraUpdate");
            //删除Viewport
            var rtManager = this._map3d.getRenderTargetManager();
            rtManager.getMainTarget().removeViewport(sNode.asCamera());
                                
            this.destroySceneNode(areaName, nodeName);
            this.destroySceneNode(areaName, nodeName + "_eagleEyeIndicator");
            delete this._eagleEyeIndicatorPath;	
            return this;
        },
    });
    
    
    // @namespace Map
    // @section 矢量模型操作
    Q3D.Map.include({        
        
        // @method rayCasting(polygon: Array, p: Vector3): String
        // 射线法判断点q与多边形polygon的位置关系，要求polygon为简单多边形
        // 返回：'on'表示在多边形上；'in'表示在多边形内；'out'表示在多边形外
        rayCasting: function(poly, p) {
            //检查参数            
            if ( !Q3D.Util.isArray(poly) || poly.length < 3)
                return null;
            var px = p.x,
                py = p.z,
                flag = false;
    
            for (var i = 0, l = poly.length, j = l - 1; i < l; j = i, i++) {
                var sx = poly[i].x,
                    sy = poly[i].z,
                    tx = poly[j].x,
                    ty = poly[j].z;
    
                    // 点与多边形顶点重合
                    if ((sx === px && sy === py) || (tx === px && ty === py)) {
                        return 'on';
                    }
    
                    // 判断线段两端点是否在射线两侧
                    if ((sy < py && ty >= py) || (sy >= py && ty < py)) {
                        // 线段上与射线 Y 坐标相同的点的 X 坐标
                        var x = sx + (py - sy) * (tx - sx) / (ty - sy);
    
                            // 点在多边形的边上
                            if (x === px) {
                                return 'on';
                            }
    
                            // 射线穿过多边形的边界
                            if (x > px) {
                                flag = !flag;
                            }
                    }
            }
    
            // 射线穿过多边形边界的次数为奇数时点在多边形内
            return flag ? 'in' : 'out';        
        },
        
        // @method windingNumber(polygon: Array, p: Vector3): String
        // 回转数法判断点是否在多边形内部
        // 返回：'on'表示在多边形上；'in'表示在多边形内；'out'表示在多边形外
        windingNumber: function(poly,p) {
             //检查参数            
            if ( !Q3D.Util.isArray(poly) || poly.length < 3)
                return null;
            var px = p.x,
                py = p.z,
                sum = 0;
    
                for (var i = 0, l = poly.length, j = l - 1; i < l; j = i, i++) {
                    var sx = poly[i].x,
                    sy = poly[i].z,
                    tx = poly[j].x,
                    ty = poly[j].z;
    
                        // 点与多边形顶点重合或在多边形的边上
                        if ((sx - px) * (px - tx) >= 0 && (sy - py) * (py - ty) >= 0 && (px - sx) * (ty - sy) === (py - sy) * (tx - sx)) {
                            return 'on';
                        }
    
                        // 点与相邻顶点连线的夹角
                        var angle = Math.atan2(sy - py, sx - px) - Math.atan2(ty - py, tx - px);
    
                        // 确保夹角不超出取值范围（-π 到 π）
                        if (angle >= Math.PI) {
                            angle = angle - Math.PI * 2;
                        } else if (angle <= -Math.PI) {
                            angle = angle + Math.PI * 2;
                        }
    
                        sum += angle;
                }
    
                // 计算回转数并判断点和多边形的几何关系
                return Math.round(sum / Math.PI) === 0 ? 'out' : 'in';
        },
        
        //创建GUID值串
        guid: function() {
            function S4() {
               return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            }
            return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
        },
        
        // @method createPolyLine(nodePath: String, options: Polyline options): QLineNode
        // 在场景根节点下动态创建折线段，Node路径"区域/[父节点]/要创建的折线名称"，返回原生 QLineNode 对象
        createPolyLine: function (nodePath, options) {
            var defaultCreateOption = {            
                Material: null,
                SpecialTransparent: false, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                LinePoints: [],
                LineOptions: {
                    LineType: Q3D.Enums.lineType.StraightLine,
                    BesselDim: 2, //贝塞尔曲线阶数
                    Subdivision: 20, //设置生成曲线细分程度，用于贝塞尔曲线
                    LineWidth: 2,
                    WrapLen: 2,//特殊材质有效
                    //以下用于动态创建的材质
                    Color: Q3D.colourValue("#0000FF", 1), //线的颜色
                    Alpha: 1, //线的透明度
                },
                OnLineCreated: null
            }
            Q3D.Util.jQueryExtend(true, defaultCreateOption, options);
            
            try {
                
                //检查参数            
                if ( defaultCreateOption.LinePoints.length < 1)
                    return null;
                for (var i = 0; i < defaultCreateOption.LinePoints.length; i++) {
                    if (defaultCreateOption.LinePoints[i].length < 2)
                        return null;
                }            
                
                var nodeCreated = this.createCommonNode(nodePath, Q3D.Enums.sceneNodeType.SNODE_Line);
                if (nodeCreated != null) {               
          
                    var polylineAppend = nodeCreated.asLine();
                    polylineAppend.setSpecialTransparent(defaultCreateOption.SpecialTransparent ? 1 : 0);
                    
                    //如果提供了材质名称
                    var material = null;
                    var _rm = this._map3d.getResourceManager();
                    if (defaultCreateOption.Material != null) {
                        polylineAppend.setMaterial(defaultCreateOption.Material);
                    } else {
                        var tempMatName = "defaultMaterialForLine-" + this.guid(); //随机材质名称
                        var _res = _rm.getResource(Q3D.Enums.resourceType.MATERIAL, tempMatName);
                        if (_res == null) {
                            material = this.createSimpleMaterial(tempMatName, {
                                    Alpha: defaultCreateOption.LineOptions.Alpha,
                                    EmissiveColor: defaultCreateOption.LineOptions.Color,
                                });
                        } else {
                            material = _res.asMaterial();
                            material.setAlpha(defaultCreateOption.LineOptions.Alpha);
                            material.setEmissiveColor(defaultCreateOption.LineOptions.Color.get());
                        }                 
                        polylineAppend.setMaterial(tempMatName);
                    }
                    
                    var Lines = [];
                    //总是把第一个点作为setPosition位置点，其他点都计算同第一个点的相对坐标
                    var startPt = null;                
                    for (var i = 0; i < defaultCreateOption.LinePoints.length; i++) {
                        var Line = polylineAppend.addLine();
                        Line.setLineType(defaultCreateOption.LineOptions.LineType);
                        if (defaultCreateOption.LineOptions.LineType == Q3D.Enums.lineType.Bessel) {
                            Line.setBesselDim(defaultCreateOption.LineOptions.BesselDim);
                            Line.setSubdivision(defaultCreateOption.LineOptions.Subdivision);
                        }
                        
                        Line.setLineWidth(defaultCreateOption.LineOptions.LineWidth);
                        Line.setWrapLen(defaultCreateOption.LineOptions.WrapLen);
                        var currentLinePoints = defaultCreateOption.LinePoints[i];                    
                        for (var j = 0; j < currentLinePoints.length; j++) {
                            var currPt = null;
                            if (typeof(currentLinePoints[j]) == "string") {
                                currPt = currentLinePoints[j].toVector3();
                            } else {
                                currPt = currentLinePoints[j];                            
                            } 
                            if ( i == 0 && j == 0){
                                startPt = currPt.clone();
                            }
                            Line.addPoint(currPt.subtract(startPt).get());
                        }
                        Lines.push(Line);
                    }
                    if (startPt != null) {
                        polylineAppend.setPosition( startPt.get() );
                        polylineAppend.centralize();
                    }
                    
                    if (defaultCreateOption.OnLineCreated) {
                        mapObj._map3d.setSceneNodeListener(nodeCreated);
                        mapObj.attachUIEvent("onSceneNodeAllResourceCompleted", mapObj.getSceneNodeFullName(nodeCreated), defaultCreateOption.OnLineCreated);
                    }                
                    nodeCreated.trackAllResource(); 
                    
                    return polylineAppend;
                } else {
                    return null;
                }
            } catch (e) {
                this.showNotice("错误", "createPolyLine: " + e.message);    
                return null;
            }
            return null;
        },
        
        // @method createPolygon(nodePath: String, options: Polygon options): QVecModelNode
        // 在场景根节点下动态创建多边形，Node路径"区域/[父节点]/要创建的多边形名称"，返回原生 QVecModelNode 对象
        createPolygon: function (nodePath, options) {
            var defaultCreateOption = {
                Material: null,
                SpecialTransparent: false, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                Points: [],//注意要剔除收尾相等的点
                Color: Q3D.colourValue("#0000FF", 1), 
                Alpha: 1, //填充透明度
                Direction: 1, //默认逆时针方向
                OnPolygonCreated: null
            }
            Q3D.Util.jQueryExtend(true, defaultCreateOption, options);
            try {
                
                //检查参数            
                if ( defaultCreateOption.Points.length < 3)
                    return null;
                
                var vecNodeCreated = this.createCommonNode(nodePath, Q3D.Enums.sceneNodeType.SNODE_VecModel);  
                if (vecNodeCreated != null) {
                                    
                    var vecNodeAppend = vecNodeCreated.asVecModel();               
                    var vecPolygon = vecNodeAppend.createVecModel(Q3D.Enums.vecModelType.QPolygon).asPolygon();
                    vecNodeAppend.setSpecialTransparent(defaultCreateOption.SpecialTransparent ? 1 : 0);
                    var startPt = null;         
                    
                    //剔除收尾相同点
                    var ptCnt = defaultCreateOption.Points.length;
                   // if (defaultCreateOption.Points[0].equals(defaultCreateOption.Points[ptCnt-1]))
                   //     ptCnt--;
                        
                    for (var i = 0; i < ptCnt; i++) {
                        var currPt = null;
                        if (typeof(defaultCreateOption.Points[i]) == "string") {
                            currPt = defaultCreateOption.Points[i].toVector3();
                        } else {
                            currPt = defaultCreateOption.Points[i];                            
                        } 
                        if ( i == 0){
                            startPt = currPt.clone();
                        } else if ( i == ptCnt - 1 ) {
                            if (startPt.equals(currPt)) //剔除收尾相同点
                                continue;
                        }
                        vecPolygon.addPoint(currPt.subtract(startPt).get());   
                    }
                    if (startPt != null)
                        vecNodeAppend.setPosition( startPt.get() );
                    vecPolygon.setDirection( defaultCreateOption.Direction ); //设置为逆时针    
                    vecNodeAppend.resetCenter();
                    
                    //如果提供了材质名称
                    var material = null;
                    var _rm = this._map3d.getResourceManager();
                    if (defaultCreateOption.Material != null) {
                        vecNodeAppend.setMaterial(0, defaultCreateOption.Material);
                    } else {
                        var tempMatName = "defaultMaterialForPolygon-" + this.guid(); //随机材质名称
                        var _res = _rm.getResource(Q3D.Enums.resourceType.MATERIAL, tempMatName);
                        if (_res == null) {
                            material = this.createSimpleMaterial(tempMatName, {
                                    Alpha: defaultCreateOption.Alpha,
                                    EmissiveColor: defaultCreateOption.Color,
                                });
                        } else {
                            material = _res.asMaterial();
                            material.setAlpha(defaultCreateOption.Alpha);
                            material.setEmissiveColor(defaultCreateOption.Color.get());
                        }                 
                        vecNodeAppend.setMaterial(0,tempMatName);
                    }
                    
                     if (defaultCreateOption.OnPolygonCreated) {
                        mapObj._map3d.setSceneNodeListener(vecNodeCreated);
                        mapObj.attachUIEvent("onSceneNodeAllResourceCompleted", mapObj.getSceneNodeFullName(vecNodeCreated), defaultCreateOption.OnPolygonCreated);
                    }                
                    vecNodeCreated.trackAllResource();  
    
                    return vecNodeAppend;
                }
            } catch (e) {
                this.showNotice("错误", "createPolygon: " + e.message);
                return null;
            }
            return null;
        },
        
        // @method createPrism(nodePath: String, options: Prism options): QVecModelNode
        // 在场景根节点下动态创建创建棱柱对象，Node路径"区域/[父节点]/要创建的棱柱名称"，返回原生 QVecModelNode 对象   
        createPrism: function (nodePath, options) {
            var defaultCreateOption = {
                Material: null,//设置棱柱的三个通用材质：0 底面 1 立面 2 顶面，如果只有一个设置成相同的数值
                SpecialTransparent: false, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                Color: Q3D.colourValue("#0000FF", 1), //颜色材质使用的颜色
                Alpha: 1, //颜色材质使用的透明度
                Points: [],//底面坐标数组，底面中心自动计算
                Anchor: null,//顶面中心坐标 Vector3，非垂直情况下可设置            
                IgnoreFloor: true,
                Height: 5,
                OnPrismCreated: null
            }
            Q3D.Util.jQueryExtend(true, defaultCreateOption, options);
            try {
                
                //检查参数            
                if ( defaultCreateOption.Points.length < 3)
                    return null;
    
                var vecNodeCreated = this.createCommonNode(nodePath, Q3D.Enums.sceneNodeType.SNODE_VecModel);
                if (vecNodeCreated != null) {
       
                    var vecNodeAppend = vecNodeCreated.asVecModel();               
                    var vecPrism = vecNodeAppend.createVecModel(Q3D.Enums.vecModelType.QPrism).asPrism();
                    vecNodeAppend.setSpecialTransparent(defaultCreateOption.SpecialTransparent ? 1 : 0);
                    var startPt = null;         
                    for (var i = 0; i < defaultCreateOption.Points.length; i++) {
                        var currPt = null;
                        if (typeof(defaultCreateOption.Points[i]) == "string") {
                            currPt = defaultCreateOption.Points[i].toVector3();
                        } else {
                            currPt = defaultCreateOption.Points[i];                            
                        } 
                        if ( i == 0){
                            startPt = currPt.clone();
                        }
                        vecPrism.addPoint(currPt.subtract(startPt).get());   
                    }
                    if (startPt != null)
                        vecNodeAppend.setPosition( startPt.get() );
                    vecNodeAppend.resetCenter();
                    
                    //如果定义了Anchor
                    if (defaultCreateOption.Anchor) {
                        vecPrism.setAnchor(defaultCreateOption.Anchor.get());
                    } else {
                        vecPrism.keepVertical();
                        vecPrism.setHeight(defaultCreateOption.Height);
                    }      
                    
                    vecPrism.ignoreFloor(defaultCreateOption.IgnoreFloor);                
                    
                    //如果提供了材质名称
                    var material = null;
                    var _rm = this._map3d.getResourceManager();
                    if (defaultCreateOption.Material != null) {
                        if (Q3D.Util.isArray(defaultCreateOption.Material)) {
                            for (var i = 0; i <= defaultCreateOption.Material.length; i++) {
                                vecNodeAppend.setMaterial(i, defaultCreateOption.Material[i]);
                                if ( i == 2) break;
                            }
                        } else {
                            vecNodeAppend.setMaterial(0, defaultCreateOption.Material);
                            vecNodeAppend.setMaterial(1, defaultCreateOption.Material);
                            vecNodeAppend.setMaterial(2, defaultCreateOption.Material);
                        }
                    } else {
                        var tempMatName = "defaultMaterialForPrism-" + this.guid(); //随机材质名称
                        var _res = _rm.getResource(Q3D.Enums.resourceType.MATERIAL, tempMatName);
                        if (_res == null) {
                            material = this.createSimpleMaterial(tempMatName, {
                                    Alpha: defaultCreateOption.Alpha,
                                    DiffuseColor: defaultCreateOption.Color,
                                });
                        } else {
                            material = _res.asMaterial();
                            material.setAlpha(defaultCreateOption.Alpha);
                            material.setEmissiveColor(defaultCreateOption.Color.get());
                        }                 
                        vecNodeAppend.setMaterial(0, tempMatName);
                        vecNodeAppend.setMaterial(1, tempMatName);
                        vecNodeAppend.setMaterial(2, tempMatName);
                    }
                    
                                    
                    if (defaultCreateOption.OnPrismCreated) {
                        mapObj._map3d.setSceneNodeListener(vecNodeCreated);
                        mapObj.attachUIEvent("onSceneNodeAllResourceCompleted", mapObj.getSceneNodeFullName(vecNodeCreated), defaultCreateOption.OnPrismCreated);
                    }                
                    vecNodeCreated.trackAllResource();
    
                    return vecNodeAppend;
                }
            } catch (e) {
                this.showNotice("错误", "createPrism: " + e.message);
                return null;
            }
            return null;
        },
        
        // @method createPipe(nodePath: String, options: Pipe options): QVecModelNode
        // 在场景根节点下动态创建管道对象，Node路径"区域/[父节点]/要创建的管道名称"，返回原生 QVecModelNode 对象   
        createPipe: function (nodePath, options) {
            var defaultCreateOption = {
                Material: null, //设置管道前、后、内、外四个材质，如果只有一个设置成相同的数值
                SpecialTransparent: false, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                Color: Q3D.colourValue("#0000FF", 1), //颜色材质使用的颜色
                Alpha: 1, //颜色材质使用的透明度
                Points: [],
                Radius: [],//设置管道内径和外径，如果只有一个值，设为外径，如果有两个值，小的为内径，大的为外径    
                CrossPieces: 24, //设置生成管道圆面的面个数            
                OnPipeCreated: null
            }
            Q3D.Util.jQueryExtend(true, defaultCreateOption, options);
            try {
                
                //检查参数            
                if ( defaultCreateOption.Points.length < 2 || defaultCreateOption.Radius.length == 0 || defaultCreateOption.Radius.length > 2)
                    return null;
    
                var vecNodeCreated = this.createCommonNode(nodePath, Q3D.Enums.sceneNodeType.SNODE_VecModel);           
                if (vecNodeCreated != null) {
    
                    var vecNodeAppend = vecNodeCreated.asVecModel();               
                    var vecPipe = vecNodeAppend.createVecModel(Q3D.Enums.vecModelType.QPipe).asPipe();     
                    vecNodeAppend.setSpecialTransparent(defaultCreateOption.SpecialTransparent ? 1 : 0);
                    
                    var startPt = null;         
                    for (var i = 0; i < defaultCreateOption.Points.length; i++) {
                        var currPt = null;
                        if (typeof(defaultCreateOption.Points[i]) == "string") {
                            currPt = defaultCreateOption.Points[i].toArcVertex();
                        } else {
                            currPt = defaultCreateOption.Points[i];
                        } 
                        if ( i == 0){
                            startPt = currPt.clone();
                        }
                        vecPipe.addPoint(currPt.subtract(startPt).get());   
                    }
                    if (startPt != null)
                        vecNodeAppend.setPosition( startPt.getPos() );
                    vecNodeAppend.resetCenter();
                    
                    if (defaultCreateOption.Radius.length == 1) {
                        vecPipe.setRadiusInner(0);
                        vecPipe.setRadiusOuter(defaultCreateOption.Radius[0]);
                    } else {
                        vecPipe.setRadiusInner( Math.min(+defaultCreateOption.Radius[0], +defaultCreateOption.Radius[1]) );
                        vecPipe.setRadiusOuter( Math.max(+defaultCreateOption.Radius[0], +defaultCreateOption.Radius[1]) );
                    }
                    vecPipe.setCrossPieces(defaultCreateOption.CrossPieces);
                    
                    //如果提供了材质名称
                    var material = null;
                    var _rm = this._map3d.getResourceManager();
                    if (defaultCreateOption.Material != null) {
                        if (Q3D.Util.isArray(defaultCreateOption.Material)) {
                            for (var i = 0; i <= defaultCreateOption.Material.length; i++) {
                                vecNodeAppend.setMaterial(i, defaultCreateOption.Material[i]);
                                if ( i == 3) break;
                            }
                        } else {
                            vecNodeAppend.setMaterial(0, defaultCreateOption.Material);
                            vecNodeAppend.setMaterial(1, defaultCreateOption.Material);
                            vecNodeAppend.setMaterial(2, defaultCreateOption.Material);
                            vecNodeAppend.setMaterial(3, defaultCreateOption.Material);
                        }
                    } else {
                        var tempMatName = "defaultMaterialForPipe-" + this.guid(); //随机材质名称
                        var _res = _rm.getResource(Q3D.Enums.resourceType.MATERIAL, tempMatName);
                        if (_res == null) {
                            material = this.createSimpleMaterial(tempMatName, {
                                    Alpha: defaultCreateOption.Alpha,
                                    DiffuseColor: defaultCreateOption.Color,
                                });
                        } else {
                            material = _res.asMaterial();
                            material.setAlpha(defaultCreateOption.Alpha);
                            material.setEmissiveColor(defaultCreateOption.Color.get());
                        }                 
                        vecNodeAppend.setMaterial(0, tempMatName);
                        vecNodeAppend.setMaterial(1, tempMatName);
                        vecNodeAppend.setMaterial(2, tempMatName);
                        vecNodeAppend.setMaterial(3, tempMatName);
                    }
                    
                    if (defaultCreateOption.OnPipeCreated) {
                        mapObj._map3d.setSceneNodeListener(vecNodeCreated);
                        mapObj.attachUIEvent("onSceneNodeAllResourceCompleted", mapObj.getSceneNodeFullName(vecNodeCreated), defaultCreateOption.OnPipeCreated);
                    }                
                    vecNodeCreated.trackAllResource();   
    
                    return vecNodeAppend;
                }
            } catch (e) {
                this.showNotice("错误", "createPipe: " + e.message);
                return null;
            }
            return null;
        },   
        // @method createWalls(nodePath: String, options: Walls options): QVecModelNode
        // 在场景根节点下动态创建墙体对象，Node路径"区域/[父节点]/要创建的墙体名称"，返回原生 QVecModelNode 对象   
        createWalls: function (nodePath, options) {
            var defaultCreateOption = {
                Material: null,//设置墙体的5个通用材质：0 底面 1 顶面 2 左面 3 右面 4 断面，如果只有一个设置成相同的数值；如果多给的材质，可通过addMaterial添加 
                SpecialTransparent: false, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果   
                Color: Q3D.colourValue("#0000FF", 1), //颜色材质使用的颜色
                Alpha: 1, //颜色材质使用的透明度            
                IgnoreFloor: false,
                IgnoreCeil: false,
                Height: 5,//默认高度
                Width: 2,//默认宽度
                 //每段wall都可以有自己的宽高和材质
                Corners: [],//所有坐标点Vector3坐标数组
                IsClosed: false,//是否闭合标志
                SizeOfWalls: [],//每段wall的自己宽高，如{wallID:1,width:1.0, height:2.5}，其中wallID为起始坐标点在坐标数组的序号
                MatOfWalls: [],//每段wall的自己材质，如{wallID:1,data:[{compID:1, mtrID:2},{compID:2, mtrID:2}]}
                OnWallsCreated: null
            }
            Q3D.Util.jQueryExtend(true, defaultCreateOption, options);
            try {            
                
                //检查参数            
                if ( defaultCreateOption.Corners.length < 2 )
                    return null;
    
                var vecNodeCreated = this.createCommonNode(nodePath, Q3D.Enums.sceneNodeType.SNODE_VecModel);           
                if (vecNodeCreated != null) {
    
                    var vecNodeAppend = vecNodeCreated.asVecModel();
                    var vecWalls = vecNodeAppend.createVecModel(Q3D.Enums.vecModelType.QWalls).asWalls();
                    vecNodeAppend.setSpecialTransparent(defaultCreateOption.SpecialTransparent ? 1 : 0);
                    vecWalls.setDefaultSize(defaultCreateOption.Width, defaultCreateOption.Height);
                    if (defaultCreateOption.IgnoreCeil) {
                        vecWalls.ignoreCeil(1);
                    }
                    if (defaultCreateOption.IgnoreFloor) {
                        vecWalls.ignoreFloor(1);
                    }
                    
                    //管理材质          
                    var material = null;
                    var _rm = this._map3d.getResourceManager();                
                    if (defaultCreateOption.Material != null) {
                        if (Q3D.Util.isArray(defaultCreateOption.Material)) {
                            for (var i = 0; i <= defaultCreateOption.Material.length; i++) {
                                if (i <= 4)
                                    vecNodeAppend.setMaterial(i, defaultCreateOption.Material[i]);
                                else
                                    vecNodeAppend.addMaterial(defaultCreateOption.Material[i]);
                            }
                        } else {
                            vecNodeAppend.setMaterial(0, defaultCreateOption.Material);
                            vecNodeAppend.setMaterial(1, defaultCreateOption.Material);
                            vecNodeAppend.setMaterial(2, defaultCreateOption.Material);
                            vecNodeAppend.setMaterial(3, defaultCreateOption.Material);
                            vecNodeAppend.setMaterial(4, defaultCreateOption.Material);
                        }
                    } else {
                        var tempMatName = "defaultMaterialForWalls-" + this.guid(); //随机材质名称
                        var _res = _rm.getResource(Q3D.Enums.resourceType.MATERIAL, tempMatName);
                        if (_res == null) {
                            material = this.createSimpleMaterial(tempMatName, {
                                    Alpha: defaultCreateOption.Alpha,
                                    DiffuseColor: defaultCreateOption.Color,
                                });
                        } else {
                            material = _res.asMaterial();
                            material.setAlpha(defaultCreateOption.Alpha);
                            material.setEmissiveColor(defaultCreateOption.Color.get());
                        }                 
                        vecNodeAppend.setMaterial(0, tempMatName);
                        vecNodeAppend.setMaterial(1, tempMatName);
                        vecNodeAppend.setMaterial(2, tempMatName);
                        vecNodeAppend.setMaterial(3, tempMatName);   
                        vecNodeAppend.setMaterial(4, tempMatName);   
                    }
                    
                    //根据坐标构建墙体：注意闭合标志的影响
                    var startPt = null;         
                    for (var i = 0; i < defaultCreateOption.Corners.length; i++) {
                        var currPt = null;
                        if (typeof(defaultCreateOption.Corners[i]) == "string") {
                            currPt = defaultCreateOption.Corners[i].toVector3();
                        } else {
                            currPt = defaultCreateOption.Corners[i];                            
                        } 
                        if ( i == 0){
                            startPt = currPt.clone();
                        }
                        vecWalls.addCorner(i, currPt.subtract(startPt).get());   
                        
                        if (i > 0) {
                            vecWalls.constructWall(i - 1, i - 1, i);
                        }                    
                    }
                    if(defaultCreateOption.IsClosed) {
                        vecWalls.constructWall(defaultCreateOption.Corners.length - 1,defaultCreateOption.Corners.length - 1,0);
                    }
                    if (startPt != null)
                        vecNodeAppend.setPosition( startPt.get() );
                    vecNodeAppend.resetCenter();
                    
                    //如果需要单独设置墙体的尺寸和材质
                    if (defaultCreateOption.SizeOfWalls.length > 0) {
                        for (var j = 0; j < defaultCreateOption.SizeOfWalls.length; j++) { 
                            var wall = defaultCreateOption.SizeOfWalls[j];
                            vecWalls.setWallSize(wall.wallID, wall.width, wall.height);
                        }
                    }
                    if (defaultCreateOption.MatOfWalls.length > 0) {
                        for (var j = 0; j < defaultCreateOption.MatOfWalls.length; j++) { 
                            var mat = defaultCreateOption.MatOfWalls[j];
                            var wallID = mat.wallID;
                            var data = mat.data;
                            for (var k = 0; k < data.length; k++) {
                                vecWalls.setWallMaterial(wallID, data[k].compID, data[k].mtrID);
                            }
                            
                        }
                    }                
                    
                     if (defaultCreateOption.OnWallsCreated) {
                        mapObj._map3d.setSceneNodeListener(vecNodeCreated);
                        mapObj.attachUIEvent("onSceneNodeAllResourceCompleted", mapObj.getSceneNodeFullName(vecNodeCreated), defaultCreateOption.OnWallsCreated);
                    }                
                    vecNodeCreated.trackAllResource(); 
    
                    return vecNodeAppend;
                }
            }
            catch (e) {
                this.showNotice("错误", "createWalls: " + e.message);
                return null;
            }
            return null;
        },
        
        // @method createCylinder(nodePath: String, options: Cylinder options): QVecModelNode
        // 在场景根节点下动态创建圆柱对象，Node路径"区域/[父节点]/要创建的圆柱名称"，返回原生 QVecModelNode 对象   
        createCylinder: function (nodePath, options) {
            var defaultCreateOption = {            
                Material: null, //设置圆柱底面、立面、顶面三个材质，如果只有一个设置成相同的数值
                SpecialTransparent: false, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                Color: Q3D.colourValue("#0000FF", 1), //颜色材质使用的颜色
                Alpha: 1, //颜色材质使用的透明度
                Center: null, //底面中心坐标 Vector3        
                Anchor: null,//顶面中心坐标 Vector3，非垂直情况下可设置
                Radius: 10, //半径
                Height: 50,//高度
                Pieces: 36, //设置生成圆面的面个数    
                OnCylinderCreated: null
            }
            Q3D.Util.jQueryExtend(true, defaultCreateOption, options);
            try {
                
                var vecNodeCreated = this.createCommonNode(nodePath, Q3D.Enums.sceneNodeType.SNODE_VecModel);               
                if (vecNodeCreated != null) {              
    
                    var vecNodeAppend = vecNodeCreated.asVecModel();               
                    var vecCylinder = vecNodeAppend.createVecModel(Q3D.Enums.vecModelType.QCylinder).asCylinder();    
                    vecNodeAppend.setSpecialTransparent(defaultCreateOption.SpecialTransparent ? 1 : 0);
    
                    if (defaultCreateOption.Center) {
                        vecNodeCreated.setPosition(defaultCreateOption.Center.get());
                    }
                    
                    //如果定义了Anchor
                    if (defaultCreateOption.Anchor) {
                        vecCylinder.setAnchor(defaultCreateOption.Anchor.get());
                    } else {
                        vecCylinder.keepVertical();
                        vecCylinder.setHeight(defaultCreateOption.Height);
                    }          
                    vecCylinder.setRadius(defaultCreateOption.Radius);
                    vecCylinder.setPieces(defaultCreateOption.Pieces);                
                    
                    //如果提供了材质名称
                    var material = null;
                    var _rm = this._map3d.getResourceManager();
                    if (defaultCreateOption.Material != null) {
                        if (Q3D.Util.isArray(defaultCreateOption.Material)) {
                            for (var i = 0; i <= defaultCreateOption.Material.length; i++) {
                                vecNodeAppend.setMaterial(i, defaultCreateOption.Material[i]);
                                if ( i == 2) break;
                            }
                        } else {
                            vecNodeAppend.setMaterial(0, defaultCreateOption.Material);
                            vecNodeAppend.setMaterial(1, defaultCreateOption.Material);
                            vecNodeAppend.setMaterial(2, defaultCreateOption.Material);
                        }
                    } else {
                        var tempMatName = "defaultMaterialForCylinder-" + this.guid(); //随机材质名称
                        var _res = _rm.getResource(Q3D.Enums.resourceType.MATERIAL, tempMatName);
                        if (_res == null) {
                            material = this.createSimpleMaterial(tempMatName, {
                                    Alpha: defaultCreateOption.Alpha,
                                    DiffuseColor: defaultCreateOption.Color,
                                });
                        } else {
                            material = _res.asMaterial();
                            material.setAlpha(defaultCreateOption.Alpha);
                            material.setEmissiveColor(defaultCreateOption.Color.get());
                        }                 
                        vecNodeAppend.setMaterial(0, tempMatName);
                        vecNodeAppend.setMaterial(1, tempMatName);
                        vecNodeAppend.setMaterial(2, tempMatName);
                    }
                    
                    if (defaultCreateOption.OnCylinderCreated) {
                        mapObj._map3d.setSceneNodeListener(vecNodeCreated);
                        mapObj.attachUIEvent("onSceneNodeAllResourceCompleted", mapObj.getSceneNodeFullName(vecNodeCreated), defaultCreateOption.OnCylinderCreated);
                    }                
                    vecNodeCreated.trackAllResource(); 
    
                    return vecNodeAppend;
                }
            } catch (e) {
                this.showNotice("错误", "createCylinder: " + e.message);
                return null;
            }
            
            return  null;
        },   
        
        // @method createSphere(nodePath: String, options: Sphere options): QVecModelNode
        // 动态创建球对象，Node路径"区域/[父节点]/要创建的球名称"，返回原生 QVecModelNode 对象   
        createSphere: function (nodePath, options) {
            var defaultCreateOption = {            
                Material: null, //设置球面材质
                SpecialTransparent: false, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                Color: Q3D.colourValue("#0000FF", 1), //颜色材质使用的颜色
                Alpha: 1, //颜色材质使用的透明度
                Center: null,  //球心坐标，Vector3，(约定：节点与球心重合)
                Radius: 10, //半径
                OnSphereCreated: null
            }
            Q3D.Util.jQueryExtend(true, defaultCreateOption, options);
            try {       
                var vecNodeCreated = this.createCommonNode(nodePath, Q3D.Enums.sceneNodeType.SNODE_VecModel);               
                if (vecNodeCreated != null) {               
    
                    var vecNodeAppend = vecNodeCreated.asVecModel();               
                    var vecSphere = vecNodeAppend.createVecModel(Q3D.Enums.vecModelType.QSphere).asSphere();  
                    vecNodeAppend.setSpecialTransparent(defaultCreateOption.SpecialTransparent ? 1 : 0);
                    if(defaultCreateOption.Center != null) {
                        vecNodeCreated.setPosition(defaultCreateOption.Center.get());
                    }				
                    vecSphere.setRadius(defaultCreateOption.Radius);                            
                    //如果提供了材质名称
                    var material = null;
                    var _rm = this._map3d.getResourceManager();
                    if (defaultCreateOption.Material != null) {
                        vecNodeAppend.setMaterial(0, defaultCreateOption.Material);   
                    } else {
                        var tempMatName = "defaultMaterialForSphere-" + this.guid(); //随机材质名称
                        var _res = _rm.getResource(Q3D.Enums.resourceType.MATERIAL, tempMatName);
                        if (_res == null) {
                            material = this.createSimpleMaterial(tempMatName, {
                                    Alpha: defaultCreateOption.Alpha,
                                    DiffuseColor: defaultCreateOption.Color,
                                });
                        } else {
                            material = _res.asMaterial();
                            material.setAlpha(defaultCreateOption.Alpha);
                            material.setEmissiveColor(defaultCreateOption.Color.get());
                        }                 
                        vecNodeAppend.setMaterial(0, tempMatName);
                    }
                    
                    if (defaultCreateOption.OnSphereCreated) {
                        mapObj._map3d.setSceneNodeListener(vecNodeCreated);
                        mapObj.attachUIEvent("onSceneNodeAllResourceCompleted", mapObj.getSceneNodeFullName(vecNodeCreated), defaultCreateOption.OnSphereCreated);
                    }                
                    vecNodeCreated.trackAllResource();
    
                    return vecNodeAppend;
                }
            } catch (e) {
                this.showNotice("错误", "createSphere: " + e.message);
                return null;
            }
            
            return  null;
        },  
        
        // @method createCone(nodePath: String, options: Cone options): QVecModelNode
        // 在场景根节点下动态创建圆锥对象，Node路径"区域/[父节点]/要创建的圆锥名称"，返回原生 QVecModelNode 对象   
        createCone: function (nodePath, options) {
            var defaultCreateOption = {            
                Material: null, //设置圆锥底面、立面二个材质，如果只有一个设置成相同的数值
                SpecialTransparent: false, //设置是否开启特殊透明效果，若开启，则线被物体遮挡时会显示透明效果
                Color: Q3D.colourValue("#0000FF", 1), //颜色材质使用的颜色
                Alpha: 1, //颜色材质使用的透明度
                Center: null, //底面中心坐标 Vector3        
                Anchor: null,//顶面中心坐标 Vector3，非垂直情况下可设置
                Radius: 10, //半径
                Height: 50,//高度
                Pieces: 36, //设置生成圆面的面个数    
                OnConeCreated: null
            }
            Q3D.Util.jQueryExtend(true, defaultCreateOption, options);
            try {
                
                var vecNodeCreated = this.createCommonNode(nodePath, Q3D.Enums.sceneNodeType.SNODE_VecModel);               
                if (vecNodeCreated != null) {
                    
                    var vecNodeAppend = vecNodeCreated.asVecModel();               
                    var vecCone = vecNodeAppend.createVecModel(Q3D.Enums.vecModelType.QCone).asCone();    
                    vecNodeAppend.setSpecialTransparent(defaultCreateOption.SpecialTransparent ? 1 : 0);
    
                    if (defaultCreateOption.Center) {
                        vecNodeCreated.setPosition(defaultCreateOption.Center.get());
                    }
                    
                    //如果定义了Anchor
                    if (defaultCreateOption.Anchor) {
                        vecCone.setAnchor(defaultCreateOption.Anchor.get());
                    } else {
                        vecCone.keepVertical();
                        vecCone.setHeight(defaultCreateOption.Height);
                    }          
                    vecCone.setRadius(defaultCreateOption.Radius);
                    vecCone.setPieces(defaultCreateOption.Pieces);                
                    
                    //如果提供了材质名称
                    var material = null;
                    var _rm = this._map3d.getResourceManager();
                    if (defaultCreateOption.Material != null) {
                        if (Q3D.Util.isArray(defaultCreateOption.Material)) {
                            for (var i = 0; i <= defaultCreateOption.Material.length; i++) {
                                vecNodeAppend.setMaterial(i, defaultCreateOption.Material[i]);
                                if ( i == 2) break;
                            }
                        } else {
                            vecNodeAppend.setMaterial(0, defaultCreateOption.Material);
                            vecNodeAppend.setMaterial(1, defaultCreateOption.Material);
                        }
                    } else {
                        var tempMatName = "defaultMaterialForCone-" + this.guid(); //随机材质名称
                        var _res = _rm.getResource(Q3D.Enums.resourceType.MATERIAL, tempMatName);
                        if (_res == null) {
                            material = this.createSimpleMaterial(tempMatName, {
                                    Alpha: defaultCreateOption.Alpha,
                                    DiffuseColor: defaultCreateOption.Color,
                                });
                        } else {
                            material = _res.asMaterial();
                            material.setAlpha(defaultCreateOption.Alpha);
                            material.setEmissiveColor(defaultCreateOption.Color.get());
                        }                 
                        vecNodeAppend.setMaterial(0, tempMatName);
                        vecNodeAppend.setMaterial(1, tempMatName);
                    }   
                    
                    if (defaultCreateOption.OnConeCreated) {
                        mapObj._map3d.setSceneNodeListener(vecNodeCreated);
                        mapObj.attachUIEvent("onSceneNodeAllResourceCompleted", mapObj.getSceneNodeFullName(vecNodeCreated), defaultCreateOption.OnCylinderCreated);
                    }                
                    vecNodeCreated.trackAllResource();   
                    
                    return vecNodeAppend;
                }
            } catch (e) {
                this.showNotice("错误", "createCone: " + e.message);
                return null;
            }
            
            return  null;
        },   
        
        // @method createParticle(nodePath: String, options: Particle options): QParticleNode
        // 从文件添加粒子效果，Node路径"区域/[父节点]/要创建的粒子名称"，返回原生 QParticleNode 对象   
        createParticle: function (nodePath, options) {
            var defaultCreateOption = {
                Position: null, //粒子节点的位置 Vector3
                Orientation: null,
                OrientationType: Q3D.Enums.nodeOrientationType.Self,
                ParticleFile: null, //粒子文件路径，如Particle/fire.par
                OnParticleCreated: null
            }
            Q3D.Util.jQueryExtend(true, defaultCreateOption, options);
    
            try {
                
                var ParticleNodeCreated = this.createCommonNode(nodePath, Q3D.Enums.sceneNodeType.SNODE_ParticleSystem);              
                if (ParticleNodeCreated != null) {
                    
                    var ParticleAppend = ParticleNodeCreated.asParticle();
                    ParticleAppend.loadParticleSystem(defaultCreateOption.ParticleFile);
    
                    if (defaultCreateOption.Position != null) {
                        ParticleAppend.setPosition(defaultCreateOption.Position.get());
                    }
                    
                    if (defaultCreateOption.Orientation != null) {
                        ParticleAppend.setOrientation(defaultCreateOption.Orientation, defaultCreateOption.OrientationType);
                    }                
                    
                    if (defaultCreateOption.OnParticleCreated) {
                        mapObj._map3d.setSceneNodeListener(ParticleNodeCreated);
                        mapObj.attachUIEvent("onSceneNodeAllResourceCompleted", mapObj.getSceneNodeFullName(ParticleNodeCreated), defaultCreateOption.OnParticleCreated);
                    }                
                    ParticleNodeCreated.trackAllResource();
                    
                    return ParticleAppend;
                } 
            } catch (e) {
                this.showNotice("错误", "createParticle: " + e.message);
                return null;
            }
            return null;
        },
        
        // createDirectLight(nodePath: String, options: Light options): QLightNode
        // 创建平行光源，Node路径"区域/[父节点]/要创建的灯光名称"，返回原生 QLightNode 对象   
        createDirectLight: function (nodePath, options) {
            var defaultCreateOption = {
                OnDirectLightCreated: null
            }
            Q3D.Util.jQueryExtend(true, defaultCreateOption, options);
    
            try {            
                var LightNodeCreated = this.createCommonNode(nodePath, Q3D.Enums.sceneNodeType.SNODE_Light);              
                if (LightNodeCreated != null) {
                    
                    if (defaultCreateOption.OnDirectLightCreated) {
                        mapObj._map3d.setSceneNodeListener(LightNodeCreated);
                        mapObj.attachUIEvent("onSceneNodeAllResourceCompleted", mapObj.getSceneNodeFullName(LightNodeCreated), defaultCreateOption.OnDirectLightCreated);
                    }                
                    LightNodeCreated.trackAllResource();
                    
                    var LightAppend = LightNodeCreated.asLight();
                    LightAppend.setLightType(Q3D.Enums.lightType.Parallel);
                    
                    /*
                    if ($.isFunction(defaultCreateOption.OnDirectLightCreated)) {
                        setTimeout(function () {
                            defaultCreateOption.OnDirectLightCreated(LightAppend);
                        }, 100)
                    }       
                    */
                    return LightAppend;
                } 
            } catch (e) {
                this.showNotice("错误", "createDirectLight: " + e.message);
                return null;
            }
            return null;
        },
        
        // @method createDecal(nodePath: String, options: PolygonDecal options): QDecalNode
        // 在场景根节点下动态创建多边形贴花节点，Node路径"区域/[父节点]/要创建的贴花名称"，返回原生 QDecalNode 对象
        createDecal: function (nodePath, options) {
            var defaultCreateOption = {
                Points: [],//Vector3坐标数组
                Resolution: 1.0, //像素分辨率，单位米/像素
                MaxHeight: 100, //多边形区域内最大高度值
                BackColor: null, //背景填充色，默认为null
                FillColor: Q3D.colourValue("#0000FF", 0.6), //多边形填充颜色和透明值
                LineColor: Q3D.colourValue("#0000FF", 1.0), //多边形边框颜色和透明值
                LineWidth: 1, //多边形轮廓线宽
                FillMode: Q3D.Enums.DecalTexFillMode.FillAndFrame, //填充方式
                OnDecalCreated: null
            }
            Q3D.Util.jQueryExtend(true, defaultCreateOption, options);
            try {
                
                //检查参数            
                if ( defaultCreateOption.Points.length < 3)
                    return null;
                
                var _pts = defaultCreateOption.Points.slice();
                var _minX = _pts[0].x, _maxX = _pts[0].x, _minY = _pts[0].z, _maxY = _pts[0].z;
                for (var i = 1; i < _pts.length; i++) {
                    _minX = Math.min(_minX, _pts[i].x);
                    _minY = Math.min(_minY, _pts[i].z);
                    _maxX = Math.max(_maxX, _pts[i].x);
                    _maxY = Math.max(_maxY, _pts[i].z);
                }
                var _sizeX = _maxX- _minX, _sizeY = _maxY - _minY;
                var _pos = Q3D.vector3((_maxX+_minX) / 2, defaultCreateOption.MaxHeight, (_maxY+_minY) / 2);
                var _v3list = this._map3d.getWorldManager().createEmptyQVector3List();//用于表示v2list
                for (var i = 0; i < _pts.length; i++) {
                    _v3list.add(Q3D.vector3((_pts[i].x - _minX) / defaultCreateOption.Resolution,
                    (_pts[i].z - _minY) / defaultCreateOption.Resolution,0).get());
                }            
                //创建纹理
                var _imageX = _sizeX / defaultCreateOption.Resolution, _imageY = _sizeY / defaultCreateOption.Resolution;
                var _rm = this._map3d.getResourceManager();
                var _resourceName = "DecalTexture-" + this.guid();
                var _tex = _rm.registerResource(Q3D.Enums.resourceType.TEXTURE, _resourceName).asTexture();
                var _canvas = _tex.createEmpty2DWithCanvas(_imageX, _imageY);
                if(defaultCreateOption.BackColor != null)
                    _canvas.clear(defaultCreateOption.BackColor.get());
                _canvas.setFillColor(defaultCreateOption.FillColor.get());
                _canvas.setLineColor(defaultCreateOption.LineColor.get());
                _canvas.setFillMode(defaultCreateOption.FillMode);
                _canvas.setLineWidth(defaultCreateOption.LineWidth);
                _canvas.drawPolygon(_v3list);
                _tex.flushCanvas();
                //_canvas.save("d:/test.png");
                
                var decalNodeCreated = this.createCommonNode(nodePath, Q3D.Enums.sceneNodeType.SNODE_Decal);  
                if (decalNodeCreated != null) {
    
                    var decalNodeAppend = decalNodeCreated.asDecal();            
                    decalNodeAppend.setPosition(_pos.get());
                    decalNodeAppend.pitch(-90,0);
                    decalNodeAppend.setWidth(_sizeX);
                    decalNodeAppend.setHeight(_sizeY);
                    decalNodeAppend.setLength(defaultCreateOption.MaxHeight+10);
                    decalNodeAppend.setMode(Q3D.Enums.DecalMode.OpBlendAlpha);
                    decalNodeAppend.setMainTexture(_resourceName);
                    if (defaultCreateOption.OnDecalCreated) {
                        mapObj._map3d.setSceneNodeListener(decalNodeCreated);
                        mapObj.attachUIEvent("onSceneNodeAllResourceCompleted", mapObj.getSceneNodeFullName(decalNodeCreated), defaultCreateOption.OnDecalCreated);
                    }             
                    decalNodeCreated.trackAllResource(); 				
                    decalNodeAppend.loadAllResource();
                    return decalNodeAppend;
                }
            } catch (e) {
                this.showNotice("错误", "createDecal: " + e.message);
                return null;
            }
            return null;
        },
        // @method createCircleDecal(nodePath: String, options: CircleDecal options): QDecalNode
        // 在场景根节点下动态创建圆形贴花节点，Node路径"区域/[父节点]/要创建的贴花名称"，返回原生 QDecalNode 对象
        createCircleDecal: function (nodePath, options) {
            var defaultCreateOption = {
                Center: Q3D.vector2(0,0),//Vector2中心坐标
                Radius: 10, //半径
                Resolution: 1.0, //像素分辨率，单位米/像素
                MaxHeight: 100, //多边形区域内最大高度值
                BackColor: null, //背景填充色，默认为null
                FillColor: Q3D.colourValue("#0000FF", 0.6), //多边形填充颜色和透明值
                LineColor: Q3D.colourValue("#0000FF", 1.0), //多边形边框颜色和透明值
                LineWidth: 1, //多边形轮廓线宽
                FillMode: Q3D.Enums.DecalTexFillMode.FillAndFrame, //填充方式
                OnDecalCreated: null
            }
            Q3D.Util.jQueryExtend(true, defaultCreateOption, options);
            try {
                            
                var _sizeX = defaultCreateOption.Radius * 2, _sizeY = _sizeX;            
                //创建纹理
                var _imageX = _sizeX / defaultCreateOption.Resolution, _imageY = _sizeY / defaultCreateOption.Resolution;
                var _rm = this._map3d.getResourceManager();
                var _resourceName = "DecalTexture-" + this.guid();
                var _tex = _rm.registerResource(Q3D.Enums.resourceType.TEXTURE, _resourceName).asTexture();
                var _canvas = _tex.createEmpty2DWithCanvas(_imageX, _imageY);
                if(defaultCreateOption.BackColor != null)
                    _canvas.clear(defaultCreateOption.BackColor.get());
                _canvas.setFillColor(defaultCreateOption.FillColor.get());
                _canvas.setLineColor(defaultCreateOption.LineColor.get());
                _canvas.setFillMode(defaultCreateOption.FillMode);
                _canvas.setLineWidth(defaultCreateOption.LineWidth);
                _canvas.drawCircle(Q3D.vector2(_imageX / 2,_imageX / 2).get(), _imageX / 2);
                _tex.flushCanvas();
                //_canvas.save("d:/test.png");
                
                var decalNodeCreated = this.createCommonNode(nodePath, Q3D.Enums.sceneNodeType.SNODE_Decal);  
                if (decalNodeCreated != null) {               
                    var decalNodeAppend = decalNodeCreated.asDecal();            
                    decalNodeAppend.setPosition(Q3D.vector3(defaultCreateOption.Center.x, defaultCreateOption.MaxHeight, defaultCreateOption.Center.y).get());
                    decalNodeAppend.pitch(-90,0);
                    decalNodeAppend.setWidth(_sizeX);
                    decalNodeAppend.setHeight(_sizeY);
                    decalNodeAppend.setLength(defaultCreateOption.MaxHeight+10);
                    decalNodeAppend.setMode(Q3D.Enums.DecalMode.OpBlendAlpha);
                    decalNodeAppend.setMainTexture(_resourceName);
                    if (defaultCreateOption.OnDecalCreated) {
                        mapObj._map3d.setSceneNodeListener(decalNodeCreated);
                        mapObj.attachUIEvent("onSceneNodeAllResourceCompleted", mapObj.getSceneNodeFullName(decalNodeCreated), defaultCreateOption.OnDecalCreated);
                    }             
                    decalNodeCreated.trackAllResource(); 
                    decalNodeAppend.loadAllResource();
                    return decalNodeAppend;
                }
            } catch (e) {
                this.showNotice("错误", "createCircleDecal: " + e.message);
                return null;
            }
            return null;
        },
    });
    
    
    }(window, document));