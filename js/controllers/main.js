//main.js
angular
    .module('app')
    .controller('dashBoardCtrl',dashBoardCtrl);

//mock json for dashboard
//injections
dashBoardCtrl.$inject = ['$scope'];

function dashBoardCtrl($scope)
{
  var vm =this;
  $scope.revenue={"chartType":"line"};
  vm.dashBoardObj={
    "hotelId": "QWEXTY122",
    "hotelInfo": {
      "name": "Avasa",
      "hotel_address": "madhapur,hyderabad,500084",
      "latitude": 32.86082,
      "longitude": -96.8893,
      "type": "5 "
    },
    "roomsInfo": {
      "numberOfRooms": 500,
      "numberOfRoomsAvailable": 200,
      "months":["7AM-8AM","8AM-9AM","9AM-10AM","10AM-11Am","12Am-1PM"],
      "data":[18,29,19,10,1],
      "roomTypeId": "R7890",
      "description": "AC "
    },
    "revenue": {
      "revenueId": "R892002",
      "revenueTotal": "2000",
      "revenueCurrentPerMonth": 45,
      "revenueCurrentYear": 800,
      "months":["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],
      "data":[60,40,70,35,33,60,60,40,70,35,33,60]
    },
    "ratings": {
      "ratingId": "rt88383",
      "critcsRating": 4,
      "months":["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],
      "data":[2,1,4,5,6,7,8,9,9,9,9,9]  },
    "customers": {
      "totalCusomers": 500000,
      "months":["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"],
      "data":[2,1,4,5,6,7,8,9,9,9,9,9] ,
      "recentCustomers": [
        {
          "name": "johnson",
          "feedback": "goodquality",
          "checkIn":"02-07-2017",
          "checkOut":"02-07-2017",
          "address":"madhapur,hyderabad",
          avatar: '1.jpg'
        },
        {
          "name": "David",
          "feedback": "goodquality",
          "checkIn":"03-07-2017",
          "checkOut":"04-07-2017",
          "address":"jublihils,hyderabad",
          avatar: '2.jpg'
        }
      ]
    }
  };

  $scope.roomOptions=getRoomChartOptions(vm.dashBoardObj.roomsInfo.data);
  $scope.ratingOptions=getRatingOptions(vm.dashBoardObj.ratings.data);
  $scope.custmerOptions=getCustomerOptions(vm.dashBoardObj.customers.data);
  $scope.labels = vm.dashBoardObj.revenue.months;

  $scope.data = [vm.dashBoardObj.revenue.data];

  $scope.colors = [{
    backgroundColor: 'rgba(255,255,255,.3)',
    borderWidth: 0
  }];
  $scope.options = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6
      }],
      yAxes: [{
        display: false
      }]
    },
  }

}

//convert Hex to RGBA
function convertHex(hex,opacity){
  hex = hex.replace('#','');
  r = parseInt(hex.substring(0,2), 16);
  g = parseInt(hex.substring(2,4), 16);
  b = parseInt(hex.substring(4,6), 16);

  result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
  return result;
}

function getCustomerOptions(data) {


  return {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, data) - 5,
          max: Math.max.apply(Math, data) + 5,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  }
}


function getRoomChartOptions(data) {
  return {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math,data) - 5,
          max: Math.max.apply(Math,data) + 5
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },

    },
  }
}

function getRatingOptions() {

  return {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  }
}

function random(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}
