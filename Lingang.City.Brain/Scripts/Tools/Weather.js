//天气
WeatherSevenData: null;//七天天气数据

function WeatherFromInternet() {
    if (this.WeatherData == null)
        $.ajax({
            type: 'GET',
            url: 'https://www.tianqiapi.com/api/',
            data: 'version=v1&style=1001&city=',
            dataType: 'JSON',
                    
            error: function () {
                //alert('网络错误');
            },
            success: function (res) {
                WeatherSevenData = res;
                this.WeatherData = res.data[0];
                AppendWeatherData(this.WeatherData);
                //callback(res);
            }
        });
    else {
        AppendWeatherData(this.WeatherData)
    }
};

//页面上加载天气信息
function AppendWeatherData(data) {
    if (data != null) {
        var WeatherData = data;
        var tem = WeatherData.tem      //气温
        var wea = WeatherData.wea      //天气
        var wea_img = WeatherData.wea_img
       // var weaimg = "https://cdn.huyahaha.com/tianqiapi/skin/qq/" + wea_img + ".png" //GetWeatherImg(wea) //天气图标
        var weaimg = "Content/weather/" + GetWeatherImg("多云"); //GetWeatherImg(wea) //天气图标
        var imghtml = "<img src='" + weaimg + "'>";

       //$("#header_tempimg").html(imghtml);
       // $("#header_temp").html(tem);
    }
};

//根据天气情况获取图片
function GetWeatherImg(wea) {
    var img = "3.gif"

    switch (wea) {
        case "未知":
            img = "nothing.gif";
            break;
        case "晴":
            img = "0.gif";
            break;
        case "多云":
            img = "1.gif";
            break;
        case "阴":
            img = "2.gif";
            break;
        case "阵雨":
            img = "3.gif";
            break;
        case "雷阵雨":
            img = "4.gif";
            break;
        case "雷阵雨并伴有冰雹":
            img = "5.gif";
            break;
        case "雨夹雪":
            img = "6.gif";
            break;
        case "小雨":
            img = "7.gif";
            break;
        case "中雨":
            img = "8.gif";
            break;
        case "大雨":
            img = "9.gif";
            break;
        case "暴雨":
            img = "10.gif";
            break;
        case "大暴雨":
            img = "11.gif";
        case "特大暴雨":
            img = "12.gif";
            break;
        case "阵雪":
            img = "13.gif";
            break;
        case "小雪":
            img = "14.gif";
            break;
        case "中雪":
            img = "15.gif";
            break;
        case "大雪":
            img = "16.gif";
            break;
        case "暴雪":
            img = "17.gif";
            break;
        case "雾":
            img = "18.gif";
            break;
        case "冻雨":
            img = "19.gif";
        case "沙尘暴":
            img = "20.gif";
        case "小雨-中雨":
            img = "21.gif";
            break;
        case "中雨-大雨":
            img = "22.gif";
            break;
        case "大雨-暴雨":
            img = "23.gif";
            break;
        case "暴雨-大暴雨":
            img = "24.gif";
            break;
        case "大暴雨-特大暴雨":
            img = "25.gif";
            break;
        case "小雪-中雪":
            img = "26.gif";
            break;
        case "中雪-大雪":
            img = "27.gif";
            break;
        case "大雪-暴雪":
            img = "28.gif";
            break;
        case "浮尘":
            img = "29.gif";
            break;
        case "扬沙":
            img = "30.gif";
            break;
        case "强沙尘暴":
            img = "31.gif";
            break;
        case "小到中雨":
            img = "21.gif";
            break;
        case "中到大雨":
            img = "22.gif";
            break;
        case "大到暴雨":
            img = "23.gif";
            break;
        case "小到中雪":
            img = "26.gif";
            break;
        case "中到大雪":
            img = "27.gif";
            break;
        case "大到暴雪":
            img = "28.gif";
            break;
        case "小阵雨":
            img = "3.gif";
            break;
        case "阴天":
            img = "2.gif";
            break;
        case "霾":
            img = "18.gif";
            break;
        case "雾霾":
            img = "18.gif";
            break;
        default:
            img = "0.gif";

    }

    img = "a_" + img;
    return img;
};