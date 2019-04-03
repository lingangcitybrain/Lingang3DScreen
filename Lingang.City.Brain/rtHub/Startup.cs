using Microsoft.AspNet.Identity;
using Microsoft.Owin;
using Microsoft.Owin.Security.Cookies;
using Owin;

[assembly: OwinStartup("SignalRConfiguration", typeof(Lingang.City.Brain.Web.Startup))]
namespace Lingang.City.Brain.Web
{
    public class Startup
    {
        // 有关配置身份验证的详细信息，请访问 http://go.microsoft.com/fwlink/?LinkId=301864
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}