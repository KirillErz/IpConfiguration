using System.Web;
using System.Web.Optimization;

namespace ConfigurationIP
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {


            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            Bundle angularBundle = new ScriptBundle("~/bundles/angularjs")
                .Include("~/Scripts/angular.js")
                //.Include("~/Scripts/angular-ui-router.min.js")
                //.Include("~/Scripts/angular-ui/ui-bootstrap.min.js")
                //.Include("~/Scripts/angular-ui/ui-bootstrap-tpls.min.js")
                ;

            bundles.Add(angularBundle);

            Bundle otherBundle = new ScriptBundle("~/bundles/other")
                    .Include("~/Scripts/linq.min.js")
                //.Include("~/Scripts/angular-ui-router.min.js")
                //.Include("~/Scripts/angular-ui/ui-bootstrap.min.js")
                //.Include("~/Scripts/angular-ui/ui-bootstrap-tpls.min.js")
                ;

            bundles.Add(otherBundle);

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            var bootstrap = new StyleBundle("~/bootstrap")
                .Include("~/Content/bootstrap.css");

            var main = new StyleBundle("~/main")
               .Include("~/Content/main.css");

            bundles.Add(bootstrap);
            bundles.Add(main);

           
           

            Bundle appBundle = new ScriptBundle("~/bundles/app")
                //.IncludeDirectory("~/ApiReferenceClient/api", "*.js", true)
                //.Include("~/ApiReferenceClient/api/_api_Module.js")
                //.IncludeDirectory("~/App/_dto", "*.js", true)
                //.IncludeDirectory("~/App/_services", "*ServiceBase.js", true)
                .IncludeDirectory("~/App/_services", "*.js", true)
                .IncludeDirectory("~/App", "*Ctrl.js", true)
                //.IncludeDirectory("~/App/Controls", "*.js", true)
                //.Include("~/App/States.js")
                //.Include("~/App/Directives.js")
                .Include("~/App/App.js");

            bundles.Add(appBundle);
        }
    }
}
