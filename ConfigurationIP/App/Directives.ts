module ConfigurationIP {
    export class Directives {
        static designer = [
            () => {
                return {
                    templateUrl: '/App/Designer/designer_view.html',
                    controller: DesignerCtrl,
                    scope: { 'model': '=' },
                    restrict: 'E',
                    replace: true
                }
            }];
    }
}