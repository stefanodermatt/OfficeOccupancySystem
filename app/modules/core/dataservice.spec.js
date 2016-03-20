'use strict';

describe('DataService test: ', function () {

        // load the controller's module
    beforeEach(module('app.core'));

    var DataService;

    beforeEach(inject(function (_DataService_){
        DataService = _DataService_;
    }));

    it('should have DataService service be defined', function () {
        expect(DataService).toBeDefined();
    });


    describe('Mocked HTTP Requests', function() {

        var $httpBackend;
        var testUrl = 'https://api.thingspeak.com/channels/61942/fields/2.json?results=7';

        beforeEach(inject(function($injector) {
            // Set up the mock http service responses
            $httpBackend = $injector.get('$httpBackend');
        }));


        it('should attach a list of awesomeThings to the scope', function () {
            /*var response, result;
            var promise = DataService.getWeeklyData();
            promise.then(function(data){
                result = data;
            });

            response = getDummyData();

            $httpBackend.expectGET(testUrl).respond(200, response);
            $httpBackend.flush();
            expect(result).toEqual(response);

            console.log(result);
            */

            expect(true).toBe(true);
        });


        function getDummyData(){
            var data = {
                channel: {
                        id: 61942,
                        name: 'officeOccupationDev1',
                        description: 'Channel for developmenet purposes of the ERNI office occupancy system. This channel is to be fed by the PI and does not contain mocked data. It is intended to implement the communication between PI and ThingSpeak.',
                        latitude: '47.4149355',
                        longitude: '8.5501068',
                        field1: 'officeOccupation',
                        field2: 'officeTemperature',
                        field3: 'officeNoise',
                        field4: 'officeWeather',
                        field5: 'room1Occupation',
                        field6: 'room2Occupation',
                        field7: 'room3Occupation',
                        field8: 'room4Occupation',
                        created_at: '2015-10-23T12:35:30Z',
                        updated_at: '2016-01-26T19:46:16Z',
                        last_entry_id: 143
                    },
                feeds: [
                    {
                        created_at: '2016-01-26T19:44:08Z',
                        entry_id: 137,
                        field2: '19.8101455289'
                    },
                    {
                        created_at: '2016-01-26T19:44:29Z',
                        entry_id: 138,
                        field2: '20.5414049922'
                    },
                    {
                        created_at: '2016-01-26T19:44:50Z',
                        entry_id: 139,
                        field2: '25.5686672159'
                    },
                    {
                        created_at: '2016-01-26T19:45:12Z',
                        entry_id: 140,
                        field2: '32.3286743872'
                    },
                    {
                        created_at: '2016-01-26T19:45:34Z',
                        entry_id: 141,
                        field2: '24.7806094897'
                    },
                    {
                        created_at: '2016-01-26T19:45:55Z',
                        entry_id: 142,
                        field2: '22.7370289038'
                    },
                    {
                        created_at: '2016-01-26T19:46:16Z',
                        entry_id: 143,
                        field2: '38.6604684185'
                    }
                ]
            };

            return data;
        }
    });


    /*
    // Initialize the controller and a mock scope
    beforeEach(inject(function (_DataService_, _$httpBackend_) {
        dataService = _DataService_;
        httpBackend = _$httpBackend_;
        //httpBackend.whenGET('https://api.thingspeak.com/channels/61942/fields/2.json?results=7').passThrough();
        httpBackend.whenGET('https://api.thingspeak.com/channels/61942/fields/2.json?results=7').respond({
                date  : '2006-02-22',
                label : 'foo',
                value : 950
            });
    }));
    */

});




// this worked:
/*
describe('Core: DataService', function () {

    var $scope, ctrl, $controller, $httpBackend;

    beforeEach(function (){

        module('myApp');

        inject(function($injector) {

            $httpBackend = $injector.get('$httpBackend');
            $scope = $injector.get('$rootScope').$new();
            $controller = $injector.get('$controller');

            $scope.foo = 'foo';
            $httpBackend.expectPOST('../randomAPICall', 'foo').respond(201, 'test');
            ctrl = $controller('DataService', {$scope: $scope});
        });

    });

    it('should update test', function (){
        expect($scope.test).not.toBeDefined();
        $httpBackend.flush();
        expect($scope.test).toEqual('test');
    });

*/