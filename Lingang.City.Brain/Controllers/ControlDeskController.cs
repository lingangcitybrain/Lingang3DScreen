using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Lingang.City.Brain.Web.Services;
using Lingang.City.Brain.Web.Model;

namespace Lingang.City.Brain.Web.Controllers
{
    public class ControlDeskController : Controller
    {
        // GET: ControlDesk
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// 获取语音识别结果
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public string getSpeechRecongnizerResult(aliSpeechRecognizerModel json)
        {
            string token = json.token;
            string appkey = json.appkey;
            AliSpeechRecognizer ali = new AliSpeechRecognizer(appkey, token);

            string fileName = json.fileName;
            string format = json.format;
            int sampleRate = json.sampleRate;

            bool enablePunctuationPrediction = json.enablePunctuationPrediction;
            bool enableInverseTextNormalization = json.enableInverseTextNormalization;
            bool enableVoiceDetection = json.enableVoiceDetection;
            string result = ali.process(fileName, format, sampleRate,
                enablePunctuationPrediction, enableInverseTextNormalization, enableVoiceDetection);


            return result;
        }
    }
}