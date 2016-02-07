(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('DataService', DataService);

    DataService.$inject = ['$http'];
    /* @ngInject */

    function DataService($http) {

        var service = {
            getWeeklyData: function getWeeklyData(){
                return $http.get('https://api.thingspeak.com/channels/61942/fields/2.json?results=7').then(function(response) {
                    return response.data;
                });
            }
        };

        return service;

        function getTestData()
        {
            var data = {

                lineChart : [
                    {
                        date  : '2006-02-22',
                        label : 'foo',
                        value : 950
                    },
                    {
                        date  : '2006-08-22',
                        label : 'bar',
                        value : 1000
                    },
                    {
                        date  : '2007-01-11',
                        label : 'baz',
                        value : 700
                    },
                    {
                        date  : '2008-10-01',
                        label : 'boing',
                        value : 534
                    },
                    {
                        date  : '2009-02-24',
                        label : 'loool',
                        value : 1423
                    },
                    {
                        date  : '2010-12-30',
                        label : 'YEAH',
                        value : 1222
                    },
                    {
                        date  : '2011-05-15',
                        label : 'Hurray',
                        value : 948
                    },
                    {
                        date  : '2012-04-02',
                        label : 'WTF',
                        value : 1938
                    },
                    {
                        date  : '2013-08-19',
                        label : 'OMG',
                        value : 1245
                    },
                    {
                        date  : '2013-11-11',
                        label : 'ROFL',
                        value : 888
                    }
                ],
                pieChart: [
                    {
                        color       : 'red',
                        description : 'Ipsem lorem text goes here. And foo goes bar goes baz. That\'s up!!!',
                        title       : 'flowers',
                        value       : 0.62
                    },
                    {
                        color       : 'blue',
                        description : 'Another ipsem text goes here. And baz goes bar goes foo. Oh yeah, whazzz up?',
                        title       : 'trains',
                        value       : 0.38
                    }]};

            return data
        }

        /*
         function getAvengers() {
         return $http.get('/api/maa')
         .then(getAvengersComplete)
         .catch(function(message) {
         exception.catcher('XHR Failed for getAvengers')(message);
         $location.url('/');
         });

         function getAvengersComplete(data, status, headers, config) {
         return data.data[0].data.results;
         }
         }

         function getAvengerCount() {
         var count = 0;
         return getAvengersCast()
         .then(getAvengersCastComplete)
         .catch(exception.catcher('XHR Failed for getAvengerCount'));

         function getAvengersCastComplete (data) {
         count = data.length;
         return $q.when(count);
         }
         }

         function getAvengersCast() {
         var cast = [
         {name: 'Robert Downey Jr.', character: 'Tony Stark / Iron Man'},
         {name: 'Chris Hemsworth', character: 'Thor'},
         {name: 'Chris Evans', character: 'Steve Rogers / Captain America'},
         {name: 'Mark Ruffalo', character: 'Bruce Banner / The Hulk'},
         {name: 'Scarlett Johansson', character: 'Natasha Romanoff / Black Widow'},
         {name: 'Jeremy Renner', character: 'Clint Barton / Hawkeye'},
         {name: 'Gwyneth Paltrow', character: 'Pepper Potts'},
         {name: 'Samuel L. Jackson', character: 'Nick Fury'},
         {name: 'Paul Bettany', character: 'Jarvis'},
         {name: 'Tom Hiddleston', character: 'Loki'},
         {name: 'Clark Gregg', character: 'Agent Phil Coulson'}
         ];
         return $q.when(cast);
         }
         */

    }

})();




// this worked:
/*
var app = angular.module('myApp', []);

app.controller('DataService', function($scope, dataSrv) {

    dataSrv.getStuff($scope.foo)
        .then(function (data) {
            $scope.test = data.data;
        });
    //function DataService(){//$http)
});

app.factory('dataSrv', function($http){
    function getStuff(formData){
        return $http.post('../randomAPICall', formData).then(function(data){return data;});
    }

    return {
        getStuff : getStuff
    };
});


 */