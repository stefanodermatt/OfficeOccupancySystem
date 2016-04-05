(function () {
    'use strict';

    angular
        .module('app.office1')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('bern', {
                url: '/bern',
                templateUrl: 'modules/office1/office1.tpl.html',
                controller: 'Office1Controller',
                controllerAs: 'vm',
                data: {
                    requiresLogin: false
                }
            });
    }

})();