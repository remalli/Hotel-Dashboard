
var todos = angular.module('app');

todos.controller('custController', function($scope) {
   $scope.filteredTodos = []
  ,$scope.currentPage = 1
  ,$scope.numPerPage = 10
  ,$scope.maxSize = 5;
    
   
   
  $scope.makeTodos = function() {
    
  
    $scope.todos = [
       { 
            userpic:"img/avatars/1.jpg",
            name: 'Suresh',
            checkin: 'Cust Info',
            checkout: 'Jan 11', 
            review: 'Good One!',
            status:"Waiting",
            paid:'100'
        },
          { 
             userpic:"img/avatars/2.jpg",
            name: 'Krishna pani',
            checkin: 'Cust Info',
            checkout: 'Jan 12', 
            review: 'Nice Once!',
            status:'checkedOut',
            paid:'200'
        },  
        { 
           userpic:"img/avatars/3.jpg",
            name: 'Jagannadham',
            checkin: 'Cust Info',
            checkout: 'mar 11', 
            review: 'Good One!',
            status:'CheckIn',
            paid:'10000'
        },
          { 
             userpic:'../img/avatars/4.jpg',
            name: 'Arjun',
            checkin: 'Cust Info',
            checkout: 'mar 12', 
            review: 'Nice Once!',
            status:'In Progress',
            paid:'2000'
        },
          { 
             userpic:'../img/avatars/1.jpg',
            name: 'Purushotham',
            checkin: 'Cust Info',
            checkout: 'Jan 12', 
            review: 'Nice Once!',
            status:'Pending',
            paid:'200'
        },
          { 
            userpic:'../img/avatars/6.jpg',
            name: 'Akilesh',
            checkin: 'Cust Info',
            checkout: 'Jan 11', 
            review: 'Good One!',
            status:'Removed',
            paid:'100'
        },
          { 
            
            userpic:'../img/avatars/7.jpg',  
            name: 'Nihal',
            checkin: 'Cust Info',
            checkout: 'Jan 12', 
            review: 'Nice Once!',
            status:"Waiting",
            paid:'200'
        },  
        { 
            userpic:'../img/avatars/2.jpg', 
            name: 'Murali',
            checkin: 'Cust Info',
            checkout: 'mar 11', 
            review: 'Good One!',
            status:"Check In",
            paid:'10000'
        },
          { 
            userpic:'../img/avatars/1.jpg', 
            name: 'Rama',
            checkin: 'Cust Info',
            checkout: 'mar 12', 
            review: 'Nice Once!',
              status:"In Progress",
            paid:'2000'
        },
          { 
             userpic:'../img/avatars/2.jpg',
            name: 'Ramu',
            checkin: 'Cust Info',
            checkout: 'Jan 12', 
            review: 'Nice Once!',
            status:"Pending",
            paid:'200'
        },{ 
             userpic:'../img/avatars/3.jpg',
            name: 'Sudheer',
            checkin: 'Cust Info',
            checkout: 'Jan 11', 
            review: 'Good One!',
            status:"Reject",
            paid:'100'
     
        },
          { 
            userpic:'../img/avatars/4.jpg',
            name: 'Suneel',
            checkin: 'Cust Info',
            checkout: 'mar 12', 
            review: 'Nice Once!',
            paid:'2000'
        },
          { 
             userpic:'../img/avatars/7.jpg',
            name: 'Karthik',
            checkin: 'Cust Info',
            checkout: 'Jan 12', 
            review: 'Nice Once!',
            paid:'200'
        },
          { 
             userpic:'../img/avatars/6.jpg',
            name: 'Sudarshan',
            checkin: 'Cust Info',
            checkout: 'Jan 11', 
            review: 'Good One!',
            paid:'100'
        },
          { 
             userpic:'../img/avatars/7.jpg',
            name: 'Chaitanya',
            checkin: 'Cust Info',
            checkout: 'Jan 12', 
            review: 'Nice Once!',
            paid:'200'
        },  
        { 
             userpic:'../img/avatars/4.jpg',
            name: 'Peter',
            checkin: 'Cust Info',
            checkout: 'mar 11', 
            review: 'Good One!',
            paid:'10000'
        },
          { 
            userpic:'../img/avatars/1.jpg',
            name: 'Kennedy',
            checkin: 'mar 10',
            checkout: 'mar 12', 
            review: 'Nice Once!',
            paid:'2000'
        },
          { 
            userpic:'../img/avatars/2.jpg',
            name: 'Lisa',
            checkin: 'jan 10',
            checkout: 'Jan 12', 
            review: 'Nice Once!',
            paid:'200'
        },
        
        
        
      
      ];
    
    for (i=1;  i<= todos.length;i++) {
      
      $scope.todos.push({ text: todos, done:false});
    }
    
    
  };
  $scope.makeTodos(); 
  
  $scope.$watch('currentPage + numPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    , end = begin + $scope.numPerPage;
    
    $scope.filteredTodos = $scope.todos.slice(begin, end);
  });
    
    
    function btnclick(){
//        var x=document.controller('TodoController');
//        if(x.style.display === 'none'){
//            x.style.display ='block';
//        }
//        else{
//            x.style.display = 'none';
//        }
//        window.location.href="http://www.google.com";
//    }
        
        alert('you are clicking button');
    }
    
//     $scope.data = [{"name":"Bell","id":"K0H 2V5"},{"name":"Octavius","id":"X1E 6J0"},{"name":"Alexis","id":"N6E 1L6"},{"name":"Colton","id":"U4O 1H4"},{"name":"Abdul","id":"O9Z 2Q8"},{"name":"Ian","id":"Q7W 8M4"},{"name":"Eden","id":"H8X 5E0"},{"name":"Britanney","id":"I1Q 1O1"},{"name":"Ulric","id":"K5J 1T0"},{"name":"Geraldine","id":"O9K 2M3"},{"name":"Hamilton","id":"S1D 3O0"},{"name":"Melissa","id":"H9L 1B7"},{"name":"Remedios","id":"Z3C 8P4"},{"name":"Ignacia","id":"K3B 1Q4"},{"name":"Jaime","id":"V6O 7C9"},{"name":"Savannah","id":"L8B 8T1"},{"name":"Declan","id":"D5Q 3I9"},{"name":"Skyler","id":"I0O 4O8"},{"name":"Lawrence","id":"V4K 0L2"},{"name":"Yael","id":"R5E 9D9"},{"name":"Herrod","id":"V5W 6L3"},{"name":"Lydia","id":"G0E 2K3"},{"name":"Tobias","id":"N9P 2V5"},{"name":"Wing","id":"T5M 0E2"},{"name":"Callum","id":"L9P 3W5"},{"name":"Tiger","id":"R9A 4E4"},{"name":"Summer","id":"R4B 4Q4"},{"name":"Beverly","id":"M5E 4V4"},{"name":"Xena","id":"I8G 6O1"},{"name":"Yael","id":"L1K 5C3"},{"name":"Stacey","id":"A4G 1S4"},{"name":"Marsden","id":"T1J 5J3"},{"name":"Uriah","id":"S9S 8I7"},{"name":"Kamal","id":"Y8Z 6X0"},{"name":"MacKensie","id":"W2N 7P9"},{"name":"Amelia","id":"X7A 0U3"},{"name":"Xavier","id":"B8I 6C9"},{"name":"Whitney","id":"H4M 9U2"},{"name":"Linus","id":"E2W 7U1"},{"name":"Aileen","id":"C0C 3N2"},{"name":"Keegan","id":"V1O 6X2"},{"name":"Leonard","id":"O0L 4M4"},{"name":"Honorato","id":"F4M 8M6"},{"name":"Zephr","id":"I2E 1T9"},{"name":"Karen","id":"H8W 4I7"},{"name":"Orlando","id":"L8R 0U4"},{"name":"India","id":"N8M 8F4"},{"name":"Luke","id":"Q4Y 2Y8"},{"name":"Sophia","id":"O7F 3F9"},{"name":"Faith","id":"B8P 1U5"},{"name":"Dara","id":"J4A 0P3"},{"name":"Caryn","id":"D5M 8Y8"},{"name":"Colton","id":"A4Q 2U1"},{"name":"Kelly","id":"J2E 2L3"},{"name":"Victor","id":"H1V 8Y5"},{"name":"Clementine","id":"Q9R 4G8"},{"name":"Dale","id":"Q1S 3I0"},{"name":"Xavier","id":"Z0N 0L5"},{"name":"Quynn","id":"D1V 7B8"},{"name":"Christine","id":"A2X 0Z8"},{"name":"Matthew","id":"L1H 2I4"},{"name":"Simon","id":"L2Q 7V7"},{"name":"Evan","id":"Z8Y 6G8"},{"name":"Zachary","id":"F4K 8V9"},{"name":"Deborah","id":"I0D 4J6"},{"name":"Carl","id":"X7H 3J3"},{"name":"Colin","id":"C8P 0O1"},{"name":"Xenos","id":"K3S 1H5"},{"name":"Sonia","id":"W9C 0N3"},{"name":"Arsenio","id":"B0M 2G6"},{"name":"Angela","id":"N9X 5O7"},{"name":"Cassidy","id":"T8T 0Q5"},{"name":"Sebastian","id":"Y6O 0A5"},{"name":"Bernard","id":"P2K 0Z5"},{"name":"Kerry","id":"T6S 4T7"},{"name":"Uriel","id":"K6G 5V2"},{"name":"Wanda","id":"S9G 2E5"},{"name":"Drake","id":"G3G 8Y2"},{"name":"Mia","id":"E4F 4V8"},{"name":"George","id":"K7Y 4L4"},{"name":"Blair","id":"Z8E 0F0"},{"name":"Phelan","id":"C5Z 0C7"},{"name":"Margaret","id":"W6F 6Y5"},{"name":"Xaviera","id":"T5O 7N5"},{"name":"Willow","id":"W6K 3V0"},{"name":"Alden","id":"S2M 8C1"},{"name":"May","id":"L5B 2H3"},{"name":"Amaya","id":"Q3B 7P8"},{"name":"Julian","id":"W6T 7I6"},{"name":"Colby","id":"N3Q 9Z2"},{"name":"Cole","id":"B5G 0V7"},{"name":"Lana","id":"O3I 2W9"},{"name":"Dieter","id":"J4A 9Y6"},{"name":"Rowan","id":"I7E 9U4"},{"name":"Abraham","id":"S7V 0W9"},{"name":"Eleanor","id":"K7K 9P4"},{"name":"Martina","id":"V0Z 5Q7"},{"name":"Kelsie","id":"R7N 7P2"},{"name":"Hedy","id":"B7E 7F2"},{"name":"Hakeem","id":"S5P 3P6"}];
//  $scope.viewby = 10;
//  $scope.totalItems = $scope.data.length;
//  $scope.currentPage = 4;
//  $scope.itemsPerPage = $scope.viewby;
//  $scope.maxSize = 5; //Number of pager buttons to show
//
//  $scope.setPage = function (pageNo) {
//    $scope.currentPage = pageNo;
//  };
//
//  $scope.pageChanged = function() {
//    console.log('Page changed to: ' + $scope.currentPage);
//  };
//
//$scope.setItemsPerPage = function(num) {
//  $scope.itemsPerPage = num;
//  $scope.currentPage = 1; //reset to first paghe
//}
    
});

function TodoController(){
    var vm = this;
    vm.name=app.name;
}

// Graph Visuvalization code  //


google.charts.load('current', { 'packages': ['corechart'] });

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    
    var daysPerMonth = [
        [new Date(2016, 0, 1), 150],
	    [new Date(2016, 1, 1), 150],
	    [new Date(2016, 2, 1), 160],
	    [new Date(2016, 3, 1), 310],
        [new Date(2016, 4, 1), 156],
	    [new Date(2016, 5, 1), 214],
	    [new Date(2016, 6, 1), 220],
        [new Date(2016, 7, 1), 120],
	    [new Date(2016, 8, 1), 161],
	    [new Date(2016, 9, 1), 222],
        [new Date(2016, 10, 1), 420],
	    [new Date(2016, 11, 1), 176],
	    [new Date(2016, 12, 1), 410] 
    ];

   
    var data = google.visualization.arrayToDataTable(daysPerMonth, true);

    var options = {
        title: 'Roomy Client',
        animation: { startup: true,duration:2000 },
        legend: { position: 'vertical' },
        width: 500,
        height: 350,
//        attr:('y',function(drawChart){
//        return height -drawChart;
//    })
    };

    var chart = new google.visualization.LineChart(document.getElementById('RChart'));
    chart.draw(data, options);

}
