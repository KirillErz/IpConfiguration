module ConfigurationIP {
    export interface IMainCtrlScope extends ng.IScope {
        vm: MainCtrl;
    }

    export class MainCtrl {
        constructor(
            private $scope: IMainCtrlScope,
        ) {
            $scope.vm = this;
        }

        test = "Тест!";
    }
}