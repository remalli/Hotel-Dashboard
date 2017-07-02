//chart.js
angular.module('app').controller('revenueCtrl', revenueCtrl)

revenueCtrl.$inject = ['$scope','$http'];
function revenueCtrl($scope,$http) {
    $http.get("js/mockdata/revenue.json")
        .then(function(response) {
        $scope.revenu = response.data;
        //centerDonut();

        //Total Revenue Objects
        $scope.revenueLocations = $scope.revenu.totalRevenue.locations;
        $scope.revenuedata =$scope.revenu.totalRevenue.revenue ;
        $scope.totalRevenue =$scope.revenuedata.reduce((a, b) => a + b, 0);
        $scope.revenueOptions = {
            legend: {
                display: true,
                position:'right',
                labels: {
                    boxWidth:10,
                    padding:20
                }
            },
            elements: {
                center: {
                    // the longest text that could appear in the center
                    maxText: '100%',
                    text: "₹"+ $scope.totalRevenue,
                    fontColor: '#000',
                    fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    fontStyle: 'normal',
                    fontSize: 30,
                    // if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
                    // if these are not specified either, we default to 1 and 256
                    minFontSize: 1,
                    maxFontSize: 150,
                }
            }
        }

        //Statistics
        $scope.statisticslables = $scope.revenu.statistics.week.lables;
        $scope.statisticsSeries = ['Current', 'Previous'];
        $scope.statisticsData = $scope.revenu.statistics.week.data;
        $scope.statisticsColors = [{
            backgroundColor: convertHex(brandPrimary,60),
            borderColor: brandPrimary,
            pointHoverBackgroundColor: '#fff'

        }, {
            backgroundColor: brandSuccess,
            borderColor: brandSuccess,
            pointHoverBackgroundColor: '#fff'
        }];
        $scope.statisticsOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        callback: function(value) {
                            return value.charAt(0);
                        }
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5

                    }
                }]
            },
            elements: {
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }
            },
        }

        //Last week Checkin and checkOut
        $scope.lastWeekLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        $scope.lastWeekSeries = ['Check in', 'Check out'];
        $scope.lastWeekData = [$scope.revenu.lastWeek.checkIn,$scope.revenu.lastWeek.checkOut];
        $scope.lastWeekColors = [{
            backgroundColor: convertHex(brandPrimary,10),
            borderColor: brandPrimary,
            pointHoverBackgroundColor: '#fff'

        }, {
            backgroundColor: convertHex(brandSuccess,10),
            borderColor: brandSuccess,
            pointHoverBackgroundColor: '#fff'
        }];
        $scope.lastWeekOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false,
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,

                    }
                }]
            },
            legend: {
                display: true,
                labels: {
                    boxWidth:10,
                    padding:20
                }
            },
            elements: {
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                }, line: {
                    tension: 0, // disables bezier curves
                }
            },
        }

        //Revenue by week
        $scope.byWeekLabels = $scope.revenu.revenuByWeek.lables;
        $scope.byWeekData =  $scope.revenu.revenuByWeek.data;
        $scope.byWeekOptions = {
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        var allData = data.datasets[tooltipItem.datasetIndex].data;
                        var tooltipLabel = data.labels[tooltipItem.index];
                        var tooltipData = allData[tooltipItem.index];
                        var total = 0;
                        for (var i in allData) {
                            total += allData[i];
                        }
                        var tooltipPercentage = Math.round((tooltipData / total) * 100);
                        return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
                    }
                }
            }, 
            responsive: true,
            legend: {
                display: true,
                position:'right',
                labels: {
                    boxWidth:10,
                    padding:20
                }
            }
        }


    });

    $scope.statisticsUpdate = function(statBy){
        $scope.statisticslables = $scope.revenu.statistics[statBy].lables;
        $scope.statisticsData = $scope.revenu.statistics[statBy].data;
    }


}

