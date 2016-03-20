(function () {
    'use strict';

    angular
        .module('app.home')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'modules/home/home.tpl.html',
                controller: 'HomeController',
                controllerAs: 'vm',
                data: {
                    requiresLogin: false
                }
            });
    }

})();