using System.Web.Mvc;
using NLog;

namespace Lingang.City.Brain.Web.Controllers
{

    public class HomeController : Controller
    {
        Logger logger = LogManager.GetCurrentClassLogger();
        
        public ActionResult Index()
        {
            return View();
        }

        //public ActionResult ApiTest()
        //{
        //    return View();
        //}

    }
}