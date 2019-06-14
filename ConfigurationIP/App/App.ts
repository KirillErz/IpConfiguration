module ConfigurationIP {



    angular.module("ConfigurationIP", [])
        //.service("urls", UrlsService)
        //.service("user", UserService)
        //.service("transport", TransportService)
        //.service("search", SearchService)
        //.service("breadcrumb", BreadcrumbService)
        //.service("basket", BasketService)
        //.service("notify", NotifyService)
        //.service("stickyNotifications", StickyNotificationsService)
        //.service("dialog", DialogService)
        //.service("notificationProcessor", NotificationProcessorService)
        //.service("errorHandler", ErrorHandlerService)
        //.service("download", DownloadService)
        .service("transport", TransportService)
        .controller("controller", <any>MainCtrl)       
        //.config(MelfaConfig)
        //.run(MelfaRun)
        .directive("designer", () => {
                return <any>{
                    templateUrl: '/App/Designer/designer_view.html',
                    controller: DesignerCtrl,
                    scope: { 'model': '=' },
                    restrict: 'E',
                    replace: true
                }
            })
        //.filter(Filters)
        //.value('currencyCodes',
        //    {
        //        643: "\u20BD",
        //        840: "$",
        //        978: "€"
        //})
        ;
}