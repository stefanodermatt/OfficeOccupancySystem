(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['ExampleService'];

    function HomeController(ExampleService) {
        var vm = this;
        vm.items = ExampleService.getSomething();
    }

})();