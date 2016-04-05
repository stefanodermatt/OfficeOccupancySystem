(function () {
    'use strict';

    angular
        .module('app.office2')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('baar', {
                url: '/baar',
                templateUrl: 'modules/office2/office2.tpl.html',
                controller: 'Office2Controller',
                controllerAs: 'vm',
                data: {
                    requiresLogin: false
                }
            });
    }

})();