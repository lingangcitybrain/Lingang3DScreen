using System;
using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.AspNet.SignalR;

namespace Lingang.City.Brain.Web.rtHub
{
    public class Control
    {
        private readonly static Lazy<Control> _instance = new Lazy<Control>(
           () => new Control(GlobalHost.ConnectionManager.GetHubContext<ControlHub>().Clients));

        private Control(IHubConnectionContext<dynamic> clients)
        {
            Clients = clients;
        }

        private IHubConnectionContext<dynamic> Clients
        {
            get;
            set;
        }

        public static Control Instance
        {
            get
            {
                return _instance.Value;
            }
        }

        //发送信息
        public void SendMapControlInfo(string key, string msg)
        {
            BroadcastMapControlInfo(msg);
        }
        public void SendMenuControlInfo(string key, string msg) 
        {
            BroadcastMenuControlInfo(msg);
        }
        public void SendLayerControlInfo(string key, string msg)
        {
            BroadcastLayerControlInfo(msg);
        }
        public void SendPoiControlInfo(string key, string msg)
        {
            BroadcastPoiControlInfo(msg);
        }
        public void SendEchartControlInfo(string key, string msg)
        {
            BroadcastEchartControlInfo(msg);
        }
        public void SendPoiInfoControlInfo(string key, string msg)
        {
            BroadcastPoiInfoControlInfo(msg);
        }

        //广播
        private void BroadcastMapControlInfo(string message)
        {
            Clients.All.broadcastMapControlInfo(message);
        }
        private void BroadcastMenuControlInfo(string message)
        {
            Clients.All.broadcastMenuControlInfo(message);
        }
        private void BroadcastLayerControlInfo(string message)
        {
            Clients.All.broadcastLayerControlInfo(message);
        }
        private void BroadcastPoiControlInfo(string message)
        {
            Clients.All.broadcastPoiControlInfo(message);
        }
        private void BroadcastPoiInfoControlInfo(string message)
        {
            Clients.All.broadcastPoiInfoControlInfo(message);
        }
    }
}