using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Lingang.City.Brain.Web.Model
{
    public class ControlPanelModel
    {
    }

    public class mapControlModel
    {
        public string xyz { get; set; }
        public string angle { get; set; }
    }

    public class menuControlModel
    {
        public string menu { get; set; }
        public string xyz { get; set; }
        public string angle { get; set; }
    }

    public class layerControlModel
    {
        public string menu { get; set; }
        public string layer { get; set; }
        public string xyz { get; set; }
        public string angle { get; set; }
    }

    public class poiControlModel
    {
        public string menu { get; set; }
        public string layer { get; set; }
        public string id { get; set; }
        public string xyz { get; set; }
        public string angle { get; set; }
    }

    public class poiinfoControlModel
    {
        public string menu { get; set; }
        public string layer { get; set; }
        public string id { get; set; }
        public string command { get; set; }
        public string xyz { get; set; }
        public string angle { get; set; }
    }

    public class returnResultModel
    {
        public string code { get; set; }
        public string message { get; set; }
    }
}