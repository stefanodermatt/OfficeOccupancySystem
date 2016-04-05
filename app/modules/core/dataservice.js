(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('DataService', DataService);

    DataService.$inject = ['$http', '$q'];
    /* @ngInject */

    function DataService($http, $q) {

        var fullOffice = 20;
        var numberOfHistoryDays = 7;
        var officeOccupancyUrl = 'https://api.thingspeak.com/channels/61942/fields/';
        var officeOccupancyHistoryUrl = 'https://api.thingspeak.com/channels/102828/fields/';
        var latestEntry = '1.json?results=1';
        var historyEntry = '.json?results=1';

        var service = {
            getPieData: function getPieData(){
                    return getPieChartArray();
            },
            getLineChartData: function getLineChartData(){
                return getLineChartArray();
            },
            getPieTestData: function getPieTestData(numberOfPeople, color){
                return getPieTestDataArray(numberOfPeople, color);
            }

        };

        return service;

        function getPieChartArray(){

            return $http.get(officeOccupancyUrl + latestEntry).then(function(response) {

                var pieChart = [
                    {
                        color       : 'blue',
                        description : 'Occupied',
                        title       : 'occupied',
                        value       : 0.48,
                        count       : 0
                    },
                    {
                        color       : 'grey',
                        description : 'free space',
                        title       : 'free',
                        value       : 0.52,
                        count       : 0
                    }];
                var peopleInTheOffice = response.data.feeds['0'].field1;
                pieChart[0].count = peopleInTheOffice;

                if(peopleInTheOffice < 0)
                    peopleInTheOffice = 0;
                else if(peopleInTheOffice > fullOffice)
                    peopleInTheOffice = fullOffice;

                var occupied = peopleInTheOffice/fullOffice;
                var free = 1 - occupied;

                pieChart[0].value = occupied;
                pieChart[1].value = free;

                return pieChart;
            });
        }

        function getPieTestDataArray(numberOfPeople, color){
            var pieChart = [
                {
                    color       : color,
                    description : 'Occupied',
                    title       : 'occupied',
                    value       : 0.48,
                    count       : 0
                },
                {
                    color       : 'grey',
                    description : 'free space',
                    title       : 'free',
                    value       : 0.52,
                    count       : 0
                }];
            var peopleInTheOffice = numberOfPeople;
            pieChart[0].count = peopleInTheOffice;

            if(peopleInTheOffice < 0)
                peopleInTheOffice = 0;
            else if(peopleInTheOffice > fullOffice)
                peopleInTheOffice = fullOffice;

            var occupied = peopleInTheOffice/fullOffice;
            var free = 1 - occupied;

            pieChart[0].value = occupied;
            pieChart[1].value = free;

            return pieChart;
        }

        function getLineChartArray(){
            return getHistoryEvents();
        }

        function getHistoryEvents(){

            var data = [
                {
                    date  : '2016-02-01',
                    label : 'Mon @ 09:00',
                    value : 0
                },
                {
                    date  : '2016-02-02',
                    label : 'Tue @ 11:00',
                    value : 0
                },
                {
                    date  : '2016-02-03',
                    label : 'Wed @ 18:00',
                    value : 0
                },
                {
                    date  : '2016-02-04',
                    label : 'Thu @ 15:00',
                    value : 0
                },
                {
                    date  : '2016-02-05',
                    label : 'Fri @ 13:24',
                    value : 0
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
                }
            ];

            var promises = getHistoryUrlFunctionArray();

            return $q.all(promises).then(function(/*values*/){
                var i;
                for(i=0;i < numberOfHistoryDays;i++){
                    //if(values[i].data.feeds['0'].field1 === null){
                        data[i].value = Math.floor(Math.random()*20)+1;
                    /*}else{
                        data[i].value = values[i].data.feeds['0'].field1;
                    }*/
                }
                return data;
            });
        }

        function getHistoryUrlFunctionArray(){
            var urls = [];
            var index;
            var urlIndex;
            var d = new Date();
            var n = d.getDay() + 2; // 0 = Sunday, 1 = Monday, ...

            for(index=0; index < numberOfHistoryDays;index++){
                urlIndex = ((n + index) % 7) + 1;

                urls.push(createFunction(urlIndex));
            }

            return urls;
        }

        function createFunction(urlIndex){
            return (function(){
                var url = officeOccupancyHistoryUrl + urlIndex + historyEntry;
                return $http.get(url);
            }());
        }

    }
})();

