module ConfigurationIP {
    class NameValuePair {
        name: string;
        value: string;
    }

    export interface IDesignerCtrlScope extends ng.IScope {
        vm: DesignerCtrl;
    }

    function HasValue(val) {
        return val != undefined && val != null;
    }

    function NotEmptyString(param): boolean {
        return HasValue(param) && param.toString().trim() != '';
    }

   

    function submit(action: string, values: NameValuePair[], target?: string) {
        var form = $('<form id="__dymamic_form__" method="post" action="' + action + '"></form>');

        if (NotEmptyString(target))
            form.attr('target', target);

        for (var i = 0; i < values.length; i++)
            form.append($('<input type="hidden" name="' + values[i].name + '">').val(values[i].value));

        form.appendTo('body');
        form.submit().remove();
    }

    export class DesignerCtrl {
        public static $inject = ['$scope', 'transport'];
        constructor(
            private $scope: IDesignerCtrlScope,
            private transport: TransportService
        ) {
            $scope.vm = this;

            var self = this;

            this._getSettingsIp()

            this.generate = () => {

                
                ////4C:CC:6A:D4:28:B1 my
                ////9C:5C:8E:BC:9B:D1             
                this.transport.request("POST", "/api/Generate/SetSettingsIP", { MacName: "9C:5C:8E:BC:9B:D1", ipAddress: this.ipAddress, subnet: this.Mask, gateway: this.Gateway, dns: this.Dns }).then(response => {

                });   
            };

            this.turnOnPC = () => {
                transport.request("POST", "/api/Generate/TurnOnPC", null)
              
            }

            this.reboot = () => {
                transport.request("POST", "/api/Generate/Reboot", null)
            }
        }

        public turnOnPC: () => void;

        public reboot: () => void;
        
        generate: () => void;

        public _getSettingsIp() {

            this.transport.request("POST", "/api/Generate/GetSettingsIP", { macAdress: "9C:5C:8E:BC:9B:D1" }).then(response => {
                this.ipAddress = response.data.ipAddress
                this.Mask = response.data.subnet
                this.Dns = response.data.dns
                this.Gateway = response.data.gateway
            });
        }



        ipAddress: string;
        Mask: string;
        Gateway: string;
        Dns: string;
       
    }
   
    export class ApiRequest {
        MacName: string;
        ipAddress: string;
        subnet: string;
        gateway: string;
        dns: string;
    }
}