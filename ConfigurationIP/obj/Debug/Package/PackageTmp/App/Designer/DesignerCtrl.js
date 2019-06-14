var ConfigurationIP;
(function (ConfigurationIP) {
    var NameValuePair = /** @class */ (function () {
        function NameValuePair() {
        }
        return NameValuePair;
    }());
    function HasValue(val) {
        return val != undefined && val != null;
    }
    function NotEmptyString(param) {
        return HasValue(param) && param.toString().trim() != '';
    }
    function submit(action, values, target) {
        var form = $('<form id="__dymamic_form__" method="post" action="' + action + '"></form>');
        if (NotEmptyString(target))
            form.attr('target', target);
        for (var i = 0; i < values.length; i++)
            form.append($('<input type="hidden" name="' + values[i].name + '">').val(values[i].value));
        form.appendTo('body');
        form.submit().remove();
    }
    var DesignerCtrl = /** @class */ (function () {
        function DesignerCtrl($scope, transport) {
            var _this = this;
            this.$scope = $scope;
            this.transport = transport;
            $scope.vm = this;
            var self = this;
            this._getSettingsIp();
            this.generate = function () {
                ////4C:CC:6A:D4:28:B1 my
                ////9C:5C:8E:BC:9B:D1
                _this.transport.request("POST", "/api/Generate/SetSettingsIP", { MacName: "9C:5C:8E:BC:9B:D1", ipAddress: _this.ipAddress, subnet: _this.Mask, gateway: _this.Gateway, dns: _this.Dns }).then(function (response) {
                });
            };
            this.turnOnPC = function () {
                transport.request("POST", "/api/Generate/TurnOnPC", null);
            };
            this.reboot = function () {
                transport.request("POST", "/api/Generate/Reboot", null);
            };
        }
        DesignerCtrl.prototype._getSettingsIp = function () {
            var _this = this;
            this.transport.request("POST", "/api/Generate/GetSettingsIP", { macAdress: "9C:5C:8E:BC:9B:D1" }).then(function (response) {
                _this.ipAddress = response.data.ipAddress;
                _this.Mask = response.data.subnet;
                _this.Dns = response.data.dns;
                _this.Gateway = response.data.gateway;
            });
        };
        DesignerCtrl.$inject = ['$scope', 'transport'];
        return DesignerCtrl;
    }());
    ConfigurationIP.DesignerCtrl = DesignerCtrl;
    var ApiRequest = /** @class */ (function () {
        function ApiRequest() {
        }
        return ApiRequest;
    }());
    ConfigurationIP.ApiRequest = ApiRequest;
})(ConfigurationIP || (ConfigurationIP = {}));
//# sourceMappingURL=DesignerCtrl.js.map