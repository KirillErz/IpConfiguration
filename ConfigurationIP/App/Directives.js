var ConfigurationIP;
(function (ConfigurationIP) {
    var Directives = /** @class */ (function () {
        function Directives() {
        }
        Directives.designer = [
            function () {
                return {
                    templateUrl: '/App/Designer/designer_view.html',
                    controller: ConfigurationIP.DesignerCtrl,
                    scope: { 'model': '=' },
                    restrict: 'E',
                    replace: true
                };
            }
        ];
        return Directives;
    }());
    ConfigurationIP.Directives = Directives;
})(ConfigurationIP || (ConfigurationIP = {}));
//# sourceMappingURL=Directives.js.map