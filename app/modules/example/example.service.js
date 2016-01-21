(function () {
    'use strict';

    angular
        .module('app.example')
        .factory('ExampleService', ExampleService);

    function ExampleService() {

        var service = {
            getSomething: getSomething
        };

        return service;

        ////////////

        function getSomething() {
            return [
                {value: 'thank'},
                {value: 'you'},
                {value: 'for'},
                {value: 'trying'}
            ];
        }

    }
})();

