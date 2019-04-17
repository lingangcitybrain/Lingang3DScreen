using System.Web;
using System.Web.Optimization;

namespace Lingang.City.Brain.Web
{
    public class BundleConfig
    {
        // 有关绑定的详细信息，请访问 http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                       "~/Scripts/Tools/divscroll.js",
                        "~/Scripts/Tools/echarts.min.js",
                        "~/Scripts/Tools/raphael.min.js",
                        "~/Scripts/Tools/jqplug/jquery-1.11.0.min.js",
                        "~/Scripts/Tools/Weather.js"
                         ));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include("~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/signalR").Include("~/Scripts/jquery.signalR-{version}.js"));


            // 使用要用于开发和学习的 Modernizr 的开发版本。然后，当你做好
            // 生产准备时，请使用 http://modernizr.com 上的生成工具来仅选择所需的测试。
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include("~/Scripts/modernizr-*"));
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include());
            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/animsition.min.css",
                      "~/Content/common.css",
                       "~/Content/jqueryui/jquery-ui.min.css",
                      "~/Content/page.css",
                      "~/Content/styleNew.css",
                      "~/Scripts/Tools/vedio/video-js.css",
                      "~/Scripts/Tools/vex/css/vex.css",
                      "~/Scripts/Tools/vex/css/vex-theme-default.css"));
        }
    }
}
