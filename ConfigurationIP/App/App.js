var ConfigurationIP;
(function (ConfigurationIP) {
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
        .service("transport", ConfigurationIP.TransportService)
        .controller("controller", ConfigurationIP.MainCtrl)
        //.config(MelfaConfig)
        //.run(MelfaRun)
        .directive("designer", function () {
        return {
            templateUrl: '/App/Designer/designer_view.html',
            controller: ConfigurationIP.DesignerCtrl,
            scope: { 'model': '=' },
            restrict: 'E',
            replace: true
        };
    });
})(ConfigurationIP || (ConfigurationIP = {}));
//# sourceMappingURL=App.js.map