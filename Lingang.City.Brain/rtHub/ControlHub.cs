using System;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace Lingang.City.Brain.Web.rtHub
{
    [HubName("LingangCityBrainControl")]
    public class ControlHub : Hub
    {
        private readonly Control _control;

        public ControlHub()
            : this(Control.Instance)
        {

        }
        public ControlHub(Control control)
        {
            _control = control;
        }

        // 地图控制信息
        public void SendMapControl(string msg)
        {
            try
            {
                _control.SendMapControlInfo("", msg);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // 菜单控制信息
        public void SendMenuControl(string msg)
        {
            try
            {
                _control.SendMenuControlInfo("", msg);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // 图层控制信息
        public void SendLayerControl(string msg)
        {
            try
            {
                _control.SendLayerControlInfo("", msg);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // 图表控制信息
        public void SendEchartControl(string msg)
        {
            try
            {
                _control.SendEchartControlInfo("", msg);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // POI控制信息
        public void SendPoiControl(string msg)
        {
            try
            {
                _control.SendPoiControlInfo("", msg);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // POI信息窗口信息
        public void SendPoiInfoControl(string msg)
        {
            try
            {
                _control.SendPoiInfoControlInfo("", msg);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}