'use strict';

describe('Controller: HomeController', function () {

    var HomeController;

    // load the controller's module
    beforeEach(module('app.home'));

    // Initialize the controller
    beforeEach(inject(function ($controller) {
        HomeController = $controller('HomeController');
    }));

    it('should contain one array of items with 1 element', function () {
        expect(HomeController.items.length).toBe(4);
    });
});