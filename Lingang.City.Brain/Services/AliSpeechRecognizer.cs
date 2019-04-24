using System;
using System.Net.Http;
using System.IO;
using Newtonsoft.Json.Linq;

namespace Lingang.City.Brain.Web.Services
{
    public class AliSpeechRecognizer
    {
        private string token;
        private string appkey;
        public AliSpeechRecognizer(string appkey, string token)
        {
            this.appkey = appkey;
            this.token = token;
        }
        public string process(string fileName, string format, int sampleRate,
            bool enablePunctuationPrediction,
            bool enableInverseTextNormalization,
            bool enableVoiceDetection)
        {
            /**
             * 设置HTTP REST POST请求
             * 1.使用http协议
             * 2.语音识别服务域名：nls-gateway.cn-shanghai.aliyuncs.com
             * 3.语音识别接口请求路径：/stream/v1/asr
             * 4.设置必须请求参数：appkey、format、sample_rate，
             * 5.设置可选请求参数：enable_punctuation_prediction、enable_inverse_text_normalization、enable_voice_detection
             */
            string url = "http://nls-gateway.cn-shanghai.aliyuncs.com/stream/v1/asr";
            url = url + "?appkey=" + appkey;
            url = url + "&format=" + format;
            url = url + "&sample_rate=" + sampleRate;
            if (enablePunctuationPrediction)
            {
                url = url + "&enable_punctuation_prediction=" + true;
            }
            if (enableInverseTextNormalization)
            {
                url = url + "&enable_inverse_text_normalization=" + true;
            }
            if (enableVoiceDetection)
            {
                url = url + "&enable_voice_detection=" + true;
            }
            System.Console.WriteLine("URL: " + url);
            HttpClient client = new HttpClient();
            /**
             * 设置HTTP 头部字段
             * 鉴权参数
             */
            client.DefaultRequestHeaders.Add("X-NLS-Token", token);
            if (!File.Exists(fileName))
            {
                System.Console.WriteLine("The audio file dose not exist");
                return "文件不存在";
            }
            byte[] audioData = File.ReadAllBytes(fileName);
            /**
             * 设置HTTP Body
             * 音频二进制数据
             * Content-Type：application/octet-stream
             */
            ByteArrayContent content = new ByteArrayContent(audioData);
            content.Headers.Add("Content-Type", "application/octet-stream");
            /**
             * 发送HTTP POST请求，处理服务端的响应
             */
            HttpResponseMessage response = client.PostAsync(url, content).Result;
            string responseBodyAsText = response.Content.ReadAsStringAsync().Result;
            System.Console.WriteLine("Response: " + responseBodyAsText);
            if (response.IsSuccessStatusCode)
            {
                JObject obj = JObject.Parse(responseBodyAsText);
                string result = obj["result"].ToString();
                System.Console.WriteLine("识别结果： " + result);

                return result;
            }
            else
            {
                System.Console.WriteLine("Response status code and reason phrase: " +
                    response.StatusCode + " " + response.ReasonPhrase);
                System.Console.WriteLine("识别失败！");

                return "识别失败";
            }
        }
    }
}