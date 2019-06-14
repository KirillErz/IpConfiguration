var ConfigurationIP;
(function (ConfigurationIP) {
    var TransportService = /** @class */ (function () {
        function TransportService($http) {
            this.$http = $http;
        }
        TransportService.prototype.request = function (method, url, data) {
            var httpPromise = this.$http({
                url: url,
                method: method,
                data: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });
            return httpPromise;
        };
        TransportService.prototype.Submit = function (action, values) {
            var form = $('<form id="__dymamic_form__" method="post" action="' + action + '"></form>');
            for (var i = 0; i < values.length; i++)
                form.append($('<input type="hidden" name="' + values[i].name + '">').val(values[i].value));
            form.appendTo('body');
            form.submit().remove();
        };
        TransportService.prototype.DownloadData = function (url, data) {
            this.Submit('/api/' + url, [
                //{ name: "SessionId", value: user.sessionId }, TODO Продумать проброс сессии в скачку
                { name: "RequestData", value: JSON.stringify(data) }
            ]);
        };
        TransportService.$inject = ['$http'];
        return TransportService;
    }());
    ConfigurationIP.TransportService = TransportService;
})(ConfigurationIP || (ConfigurationIP = {}));
//# sourceMappingURL=TransportService.js.map