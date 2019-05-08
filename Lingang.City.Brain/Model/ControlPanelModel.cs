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

    public class echartControlModel
    {
        public string menu { get; set; }
        public string seat { get; set; }
        public string command { get; set; }
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

    public class buttoninfoControlModel
    {
        public string menu { get; set; }
        public string layer { get; set; }
        public string id { get; set; }
        public string type { get; set; }
        public string xyz { get; set; }
        public string angle { get; set; }
    }

    public class returnResultModel
    {
        public string code { get; set; }
        public string message { get; set; }
    }

    public class aliSpeechRecognizerModel
    {
        public string token { get; set; }
        public string appkey { get; set; }
        public string fileName { get; set; }
        public string format { get; set; }
        public int sampleRate { get; set; }
        public bool enablePunctuationPrediction { get; set; }
        public bool enableInverseTextNormalization { get; set; }
        public bool enableVoiceDetection { get; set; }
    }
}