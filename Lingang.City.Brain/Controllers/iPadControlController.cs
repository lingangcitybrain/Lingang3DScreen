using System.Web.Mvc;
using NLog;
using Newtonsoft.Json;
using Lingang.City.Brain.Web.rtHub;
using Lingang.City.Brain.Web.Model;

namespace Lingang.City.Brain.Web.Controllers
{
    public class iPadControlController : Controller
    {
        Logger logger = LogManager.GetCurrentClassLogger();

        /// <summary>
        /// 地图操作控制
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult mapcontrol(mapControlModel model)
        {
            string strModel = JsonConvert.SerializeObject(model);

            ControlHub control = new ControlHub();
            control.SendMapControl(strModel);

            logger.Trace("地图操作控制：" + strModel);


            //Response.write("<script language='javascript'>text('" + 这里写变量 + "')</script>");

            return Json(new returnResultModel() { code = "1", message = "success" }, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// 菜单控制
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult menucontrol(menuControlModel model)
        {
            string strModel = JsonConvert.SerializeObject(model);

            ControlHub control = new ControlHub();
            control.SendMenuControl(strModel);

            logger.Trace("菜单操作控制：" + strModel);
            return Json(new returnResultModel() { code = "1", message = "success" }, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// 图表控制
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult echartcontrol(echartControlModel model)
        {
            string strModel = JsonConvert.SerializeObject(model);

            ControlHub control = new ControlHub();
            control.SendEchartControl(strModel);
            logger.Trace("图表操作控制：" + strModel);
            return Json(new returnResultModel() { code = "1", message = "success" }, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// 图层控制
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult layercontrol(layerControlModel model)
        {
            string strModel = JsonConvert.SerializeObject(model);

            ControlHub control = new ControlHub();
            control.SendLayerControl(strModel);

            logger.Trace("图层操作控制：" + strModel);
            return Json(new returnResultModel() { code = "1", message = "success" }, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// POI控制
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult poicontrol(poiControlModel model)
        {
            string strModel = JsonConvert.SerializeObject(model);

            ControlHub control = new ControlHub();
            control.SendPoiControl(strModel);

            logger.Trace("POI操作控制：" + strModel);
            return Json(new returnResultModel() { code = "1", message = "success" }, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// POI信息框控制
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult poiinfocontrol(poiinfoControlModel model)
        {
            string strModel = JsonConvert.SerializeObject(model);

            ControlHub control = new ControlHub();
            control.SendPoiInfoControl(strModel);

            logger.Trace("POI信息框操作控制：" + strModel);
            return Json(new returnResultModel() { code = "1", message = "success" }, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// 信息窗按钮控制
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult buttoncontrol(buttoninfoControlModel model)
        {
            string strModel = JsonConvert.SerializeObject(model);

            ControlHub control = new ControlHub();
            control.sendButtonInfoControl(strModel);

            logger.Trace("POI信息框按钮操作控制：" + strModel);
            return Json(new returnResultModel() { code = "1", message = "success" }, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// 分页按钮控制
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult pagebuttoncontrol(pagenationControlModel model)
        {
            string strModel = JsonConvert.SerializeObject(model);

            ControlHub control = new ControlHub();
            control.sendPageButtonInfoControl(strModel);

            logger.Trace("分页按钮按钮操作控制：" + strModel);
            return Json(new returnResultModel() { code = "1", message = "success" }, JsonRequestBehavior.AllowGet);
        }
    }
}