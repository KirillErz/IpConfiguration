module ConfigurationIP {

    export class TransportService {
        public static $inject = ['$http'];

        constructor(
            private $http: ng.IHttpService,
            ) { }

        

        public request(method: string, url: string, data: any): ng.IHttpPromise<any>{
            var httpPromise = this.$http({
                url: url,
                method: method,
                data: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });

            return httpPromise;

        }

        public Submit(action: string, values: any[]) {
            var form = $('<form id="__dymamic_form__" method="post" action="' + action + '"></form>');

            for (var i = 0; i < values.length; i++)
                form.append($('<input type="hidden" name="' + values[i].name + '">').val(values[i].value));

            form.appendTo('body');
            form.submit().remove();
        }

        public DownloadData(url: string, data: any): void {
            this.Submit('/api/' + url, [
                //{ name: "SessionId", value: user.sessionId }, TODO Продумать проброс сессии в скачку
                { name: "RequestData", value: JSON.stringify(data) }
            ]);
        }
    }
}