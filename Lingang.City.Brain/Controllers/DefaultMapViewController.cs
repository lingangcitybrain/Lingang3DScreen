using System;
using System.Collections.Generic;
using System.Web.Mvc;
using Lingang.City.Brain.Web.Model;

namespace Lingang.City.Brain.Web.Controllers
{
    public class DefaultMapViewController : Controller
    {
        /// <summary>
        /// 图层默认飞行视口
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult getDefaultMapLayerView()
        {
            // string strModel = JsonConvert.SerializeObject(layerViewList);

            //logger.Trace("图层默认飞行视口：" + strModel);
            return Json(layerViewList, JsonRequestBehavior.AllowGet);
        }


        public static List<defaultLayerView> layerViewList
        {
            get
            {
                List<defaultLayerView> _layerViewList = new List<defaultLayerView>();
                defaultLayerView dv = new defaultLayerView();

                #region //大客流
                //大客流 - 人流热力图 
                dv.layer = "1";
                dv.xyz = "394870.5738522915,7008.926544189453,-3420415.5552295353";
                dv.angle = "-90.00004577636719,0.0050831143744289875,-0.32675692439079284";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //大客流 - 实时路况 
                dv.layer = "2";
                dv.xyz = "395023.9364001676,2498.8970947265625,-3417097.0141836153";
                dv.angle = "-35.416873931884766,1.0140297412872314,0.7147700190544128";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //大客流 - 摄像头
                dv.layer = "3";
                dv.xyz = "395254.391486874,3153.331085205078,-3416470.0779346134";
                dv.angle = "-43.316864013671875,1.1675350666046142,1.0936801433563232";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //大客流 - 无人机
                dv.layer = "4";
                dv.xyz = "397157.7611081509,3584.342315673828,-3412973.1274951603";
                dv.angle = "-35.102210998535156,-0.5161258578300476,-0.3689616620540619";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //大客流 - 停车场
                dv.layer = "5";
                dv.xyz = "395238.1440732388,1366.5558166503906,-3417071.866020551";
                dv.angle = "-27.294002532958984,-4.8544416427612305,-2.5060527324676513";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //大客流 - 公交
                dv.layer = "6";
                dv.xyz = "395129.3017566129,1526.4840087890625,-3416315.5947500216";
                dv.angle = "-26.95455551147461,0.7597221732139587,0.3806189298629761";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //大客流 - 事件
                dv.layer = "7";
                dv.xyz = "396193.2763209223,2455.5052490234375,-3414941.825302117";
                dv.angle = "-33.804222106933594,2.423363447189331,1.6155235767364502";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //大客流 - 人流预测
                dv.layer = "8";
                dv.xyz = "393750.44543310353,948.0017395019531,-3420406.09687873";
                dv.angle = "-66.67697143554687,-51.693138122558594,-61.2198371887207";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();


                //大客流 - 交通仿真
                dv.layer = "9";
                dv.xyz = "394897.05795209534,132.43765258789062,-3418861.3937148973";
                dv.angle = "-36.51231002807617,-39.7012825012207,-25.314157485961914";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();
                #endregion  大客流

                #region //社区综治
                //社区综治 - 传感器
                dv.layer = "10";
                dv.xyz = "395572.42299627343,208.2465362548828,-3417078.5220264103";
                dv.angle = "-40.798133850097656,-7.188042163848877,-6.170652866363525";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //社区综治 - 摄像头
                dv.layer = "11";
                dv.xyz = "395586.4050900845,207.34756469726562,-3417018.356987348";
                dv.angle = "-33.260929107666016,-14.466686248779296,-9.31148624420166";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //社区综治 - 无人机
                dv.layer = "12";
                dv.xyz = "397157.7611081509,3584.342315673828,-3412973.1274951603";
                dv.angle = "-35.10221481323242,-0.5161258578300476,-0.3689616620540619";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //社区综治 - 无人机轨迹视口
                dv.layer = "121";
                dv.xyz = "395782.1388318447,296.55035400390625,-3416802.294975629";
                dv.angle = "-36.60127639770508,-1.8613184690475463,-1.3881678581237793";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //社区综治 - 村居工作站
                dv.layer = "13";
                dv.xyz = "394323.3159177212,1119.3957824707031,-3416798.824272504";
                dv.angle = "-32.47450637817383,-43.42644119262695,-23.634958267211914";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //社区综治 - 工地
                dv.layer = "26";
                dv.xyz = "395515.2966303197,2102.016876220703,-3416717.4205162576";
                dv.angle = "-30.969675064086914,0.03673381730914116,0.016093820333480835";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //社区综治 - 海岸线
                dv.layer = "14";
                dv.xyz = "400241.18164037744,5766.835235595703,-3412548.697319379";
                dv.angle = "-54.53913116455078,4.805853366851807,6.699832916259766";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();


                //社区综治 - 网格
                dv.layer = "281";//281 2：第二类8 第八个图层 第一个视角
                dv.xyz = "391795.11621040315,7838.283966064453,-3409089.1495202775";
                dv.angle = "-40.1541862487793,2.3011507987976074,1.9333412647247314";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //社区综治 - 事件
                dv.layer = "15";
                dv.xyz = "395931.5621030239,2970.174835205078,-3414895.4717334416";
                dv.angle = "-41.4705810546875,1.69364595413208,1.489303469657898";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //社区综治 - 管线
                dv.layer = "29";
                dv.xyz = "396223.84460424346,234.9145050048828,-3417793.3727343944";
                dv.angle = "-15.524556159973144,6.861627578735352,1.895534873008728";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                dv.layer = "151";
                dv.xyz = "397603.622070058,773.3681945800781,-3419747.60735346";
                dv.angle = "-157.92388916015625,42.9118537902832,164.55755615234375";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                dv.layer = "152";
                dv.xyz = "398003.52563450904,915.6036376953125,-3418587.077812423";
                dv.angle = "-105.54027557373047,68.87680053710937,106.59446716308594";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();
                #endregion

                #region //产业园区
                //产业园区 - 产业信息
                dv.layer = "16";
                //dv.xyz = "394642.8522937873,3209.713165283203,-3413493.8146643136";
                //dv.angle = "-31.067066192626953,-0.7014108896255493,-0.42847681045532226";
                dv.xyz = "389970.86779627704,6901.003463745117,-3410253.3970463993";
                dv.angle = "-34.15617370605469,5.401404857635498,3.6480162143707275";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();


                //产业园区 - 象限图谱
                dv.layer = "17";
                dv.xyz = "397695.34911989414,5243.811279296875,-3412415.8676992403";
                dv.angle = "-42.68328094482422,7.522124290466309,6.877229690551758";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //产业园区 - 人员分布
                dv.layer = "18";
                dv.xyz = "395753.26867623196,3777.094039916992,-3414002.5784754283";
                dv.angle = "-44.36472702026367,1.7292908430099487,1.683502197265625";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //产业园区 - 园区信息
                dv.layer = "19";
                dv.xyz = "395376.8200678197,1900.5349426269531,-3413686.7950279764";
                dv.angle = "-48.22105407714844,0.9432302117347717,1.0484989881515503";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //产业园区 - 楼宇
                dv.layer = "20";
                //dv.xyz = "394491.40771437535,2433.478759765625,-3413016.138535169";
                //dv.angle = "-33.278480529785156,-22.345548629760742,-14.016658782958984";

                dv.xyz = "395660.8374018093,2317.844757080078,-3414629.636336642";
                dv.angle = "-72.49905395507812,0.19299274682998657,0.5963961482048035";

                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //产业园区 - 停车场
                dv.layer = "21";
                dv.xyz = "395628.5283197855,1078.3955535888672,-3414016.739852351";
                dv.angle = "-32.878875732421875,-2.1184558868408203,-1.374848484992981";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //产业园区 - 无人驾驶接驳车
                dv.layer = "22";
                dv.xyz = "395782.5136713505,324.5149230957031,-3415414.265243051";
                dv.angle = "-84.19971466064453,51.36701202392578,82.58428192138672";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //产业园区 - 事件
                dv.layer = "23";
                dv.xyz = "395460.22082289843,1121.4976654052734,-3414513.735285068";
                dv.angle = "-47.426998138427734,0.4275389611721039,0.45841851830482483";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //产业园区 - 产业信息
                dv.layer = "24";
                dv.xyz = "395706.50733923283,629.7989501953125,-3417006.9540788573";
                dv.angle = "-65.41295623779297,0.3581889867782593,0.770550549030304";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();

                //产业园区 - 龙头企业视角
                dv.layer = "311";
                dv.xyz = "395664.2445517874,163.41207885742187,-3415325.750311557";
                dv.angle = "-78.47508239746094,57.53562545776367,76.40765380859375";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();
                #endregion

                #region //其他
                //其他 - 企业
                dv.layer = "25";
                dv.xyz = "397173.4528186246,8304.819702148437,-3414903.068382834";
                dv.angle = "-65.4129638671875,0.3581889867782593,0.770550549030304";
                _layerViewList.Add(dv);
                dv = new defaultLayerView();
                #endregion

                return _layerViewList;
            }
            set { }
        }

    }
}