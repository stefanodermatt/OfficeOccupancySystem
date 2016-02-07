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
                    //return response.data;
                    return getTestData();
                });
            }
        };

        return service;

        function convertRawData(thingSpeakData){


        }

        function getTestData()
        {
            var data = {
                lineChart : [
                    {
                        date  : '2016-02-01',
                        label : 'Mon @ 09:00',
                        value : 74
                    },
                    {
                        date  : '2016-02-02',
                        label : 'Tue @ 11:00',
                        value : 54
                    },
                    {
                        date  : '2016-02-03',
                        label : 'Wed @ 18:00',
                        value : 64
                    },
                    {
                        date  : '2016-02-04',
                        label : 'Thu @ 15:00',
                        value : 34
                    },
                    {
                        date  : '2016-02-05',
                        label : 'Fri @ 13:24',
                        value : 56
                    },
                    {
                        date  : '2016-02-06',
                        label : 'Sat @ 09:21',
                        value : 3
                    },
                    {
                        date  : '2016-02-07',
                        label : 'Sun @ 00:00',
                        value : 0
                    },
                    {
                        date  : '2016-02-08',
                        label : 'Mon @ 10:39',
                        value : 48
                    },
                    {
                        date  : '2016-02-09',
                        label : 'Tue @ 09:37',
                        value : 32
                    },
                    {
                        date  : '2016-02-10',
                        label : 'Wed @ 12:56',
                        value : 54
                    },
                    {
                        date  : '2016-02-11',
                        label : 'Thu @ 15:34',
                        value : 23
                    },
                    {
                        date  : '2016-02-12',
                        label : 'Fri @ 11:54',
                        value : 45
                    },
                    {
                        date  : '2016-02-13',
                        label : 'Sat @ 11:14',
                        value : 10
                    },
                    {
                        date  : '2016-02-14',
                        label : 'Sun @ 00:00',
                        value : 0
                    }
                ],
                pieChart: [
                    {
                        color       : 'red',
                        description : 'Occupied',
                        title       : 'occupied',
                        value       : 0.48
                    },
                    {
                        color       : 'blue',
                        description : 'free space',
                        title       : 'free',
                        value       : 0.52
                    }]};
            return data
        }
    }
})();

