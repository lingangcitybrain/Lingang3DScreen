(function ($) {
    Q3D.QMapV2Custom = function (MapObj) {
        this.ProcessLoading = function (defaultOptions) {
            
            //获取窗口的尺寸
            this.hWin = $(window).height(), this.wWin = $(window).width();
            
            //获取div容器的偏移和实际尺寸
            var top = MapObj.parent().offset().top, left = MapObj.parent().offset().left;
            this.HeightInDiv = MapObj.parent()[0].clientHeight, this.WidthInDiv = MapObj.parent()[0].clientWidth;
            this.HeightInView = top + this.HeightInDiv > this.hWin ? this.hWin - top : this.HeightInDiv;
            this.WidthInView = left + this.WidthInDiv > this.wWin ? this.wWin - left : this.WidthInDiv;     

			//利用布局参数调整DIV的偏移值          
            if (defaultOptions[0] > 0) {
                this.WidthInView -= defaultOptions[0];
            	MapObj.parent().css('marginLeft',this.WidthInView - this.WidthInDiv);
            }
            if (defaultOptions[1] > 0) {
                this.HeightInView -= defaultOptions[1];
            	MapObj.parent().css('marginTop',this.HeightInView - this.HeightInDiv);
            }                
            
            $(window).resize(function(){        
				//if($("#progressbarWrapper").is(':visible')) { //如果进度条可见
                    //获取窗口的当前尺寸
                    var hWin = $(window).height(), wWin = $(window).width();
                    
                    //计算本次缩放的像素大小
                    var dWid = wWin - mapObj._mapUI.wWin;
                    var dHgt = hWin - mapObj._mapUI.hWin
                    mapObj._mapUI.wWin = wWin;
                    mapObj._mapUI.hWin = hWin;
                    
                    //重新计算DIV容器的偏移值
                    var top = MapObj.parent().offset().top + dHgt, left = MapObj.parent().offset().left + dWid;
                    mapObj._mapUI.WidthInView += dWid;
                    mapObj._mapUI.HeightInView += dHgt;
                    if (defaultOptions[0] > 0) {
                    	MapObj.parent().css('marginLeft',left);
                    	$("#progressbarWrapper").css('marginLeft',-left);
                    }
                    if (defaultOptions[1] > 0) {
                    	MapObj.parent().css('marginTop',top);
                    	$("#progressbarWrapper").css('marginTop',-top);  
                    }                        
                    
                    $("#progressbarWrapper").width(mapObj._mapUI.WidthInView).height(mapObj._mapUI.HeightInView);
            		$("#versionInfo").css("padding-top", mapObj._mapUI.HeightInView  / 2 - 40);
                //}
            });            
            
            MapObj.parent().prepend(
                //"<div id='progressbarWrapper' style='width:" + this.WidthInView + "px" + ";height:" + this.HeightInView + "px;background-image:url(http://" + location.host + "/LingangCityBrain/Content/images/pj-3d.png);background-color:#D2DCE9;background-repeat:no-repeat;overflow:hidden;background-position:top center;'>" +
                "<div id='progressbarWrapper' style='width:" + this.WidthInView + "px" + ";height:" + this.HeightInView + "px;background-color:#D2DCE9;background-repeat:no-repeat;overflow:hidden;background-position:top center;'>" +
                   "<div id='versionInfo'  style='text-align:center;color:#E27109;font-family: 微软雅黑; font-size: .8rem;'>&nbsp;</div>" +
                    "<div id='progressbar' style='position:relative;'>"+
                        "<div class='progress-label' style='text-align:center; line-height:2em; font-family:微软雅黑;font-weight:bold;font-size: inherit; text-shadow: 1px 1px 0 #fff;color: darkmagenta '>正在加载QMap3D V2.0引擎，请稍等,如果您是首次访问速度会较慢，请耐心等待</div>" +

                  "</div>" +
                    "<div id='LoadingInfo' style='text-align: center; font-family: 微软雅黑; font-size: .8rem;'></div>"+
                "</div>");
            var progressbar = $("#progressbar"),
				progressLabel = $(".progress-label");
            var forceComplete;        
            
            //利用布局参数调整          
            if (defaultOptions[0] > 0) {
                $("#progressbarWrapper").css('marginLeft',this.WidthInDiv - this.WidthInView);
            }
            if (defaultOptions[1] > 0) {
                $("#progressbarWrapper").css('marginTop',this.HeightInDiv - this.HeightInView);
            }
            
            progressbar.progressbar({
                value: false,
                create: function () {
                    $(".ui-progressbar-value").css("margin-top", "-2em");//
                    setTimeout(function () {
                         $("#versionInfo").css("padding-top", mapObj._mapUI.HeightInView  / 2 - 40);
                    }, 50);
                },
                change: function () {  
                },
                complete: function () {
                    progressLabel.text("加载完毕，正在打开!");    
                    $("#progressbarWrapper").fadeOut(1000);            
                }
            });
        }
        this.hWin = 0;
        this.wWin = 0;
        this.WidthInView = 0;
        this.HeightInView = 0;
        this.WidthInDiv = 0;
        this.HeightInDiv = 0;
        this.TotalFailed = 0;
        this.CurrentCompleted = 0;
        this.TotalNumber = 0;
        this.TriggerMessage = function (msg) {
            $(".progress-label").text(msg);
        }
        this.GetValue = function () {
            return $("#progressbar").progressbar("value");
        }
        this.TriggerLoading = function (group, name, currentCompleted, totalNumber) {            
            this.CurrentCompleted = currentCompleted;
            this.TotalNumber = totalNumber;
            //var current = parseInt(((this.CurrentCompleted + this.TotalFailed) / this.TotalNumber) * 100);
            if(currentCompleted == 1)
                $("#versionInfo").text("您当前的控件版本号: V" + MapObj[0].getVersion());
            var current = parseInt((currentCompleted / totalNumber) * 100);
            if ($("#progressbar").progressbar("value") != current) {
                $(".progress-label").text("正在加载 " + current + "%");
                $("#LoadingInfo").css("color", "green").text(name);
                $("#progressbar").progressbar("value", current);
            }
        }
        this.TriggerLoadingFailed = function (group, name) {
            $("#LoadingInfo").css("color", "red").text("资源加载失败:" + name);
        } 

		this.InitHelpDiaLog = function (HelperOption) {
            var defaultHelperOption = {
                DXUrl: "http://www.q-map.com.cn:8280/qmapjs/install/DXSETUP_Redist.zip",
                ControlUrl: "http://" + location.host +"/mapdata/QMap3DActiveX.exe",//"http://www.q-map.com.cn:8280/qmapjs/install/QMap3DALL-Rel.zip",
                TitleHTML: "提示信息",                
                MessageHTML: "", 
                NeedSetup: false
            }
            $.extend(defaultHelperOption, HelperOption);

            var DialogHTML = "<div id='dlgInitialEngine' title='" + defaultHelperOption.TitleHTML + "' style='visible:false;font-size:14px;'>" ;
            if (defaultHelperOption.NeedSetup)
                DialogHTML += "<p>&nbsp;请下载并安装最新的QMapV2引擎控件 <a style='color:blue' href='" + defaultHelperOption.ControlUrl + "' tartget='_blank'>QMapV2引擎控件</a>，安装后请刷新页面或重新进入!</p>" +
                                  "<p style='color:red'>&nbsp;* 如果您第一次安装引擎后加载失败，建议先下载并安装完整的DX运行环境 <a style='color:blue' href='" + defaultHelperOption.DXUrl + "' tartget='_blank'>DirectX完整安装包</a> *</p>" +
                                  "</p></div>";
            else
                DialogHTML += "<p>" + defaultHelperOption.MessageHTML + "</p></div>";
            
            $("body").append(DialogHTML);
        }
        this.ShowHelpDialog = function () {
            this.InitHelpDiaLog();
            $("#dlgInitialEngine").dialog({
                modal: true,
                maxWidth: 1000,
                width:800,
                buttons: {
                    "确定": function () {
                        $(this).dialog("close");
                    }
                }
            });
        }  
    }
})(jQuery);
