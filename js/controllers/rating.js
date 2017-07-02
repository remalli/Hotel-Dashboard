
var custrating = angular.module('app',);

custrating.controller('ratingController', function($scope) {
   $scope.filteredTodos = []
  ,$scope.currentPage = 1
  ,$scope.numPerPage = 10
  ,$scope.maxSize = 5;
    
    
   $scope.ButtonClick = function(currentUserObj){
       $scope.selectedUserObj = currentUserObj;
   }
  
  
  $scope.makeTodos = function() {
    
  
    $scope.custrating = [
       { 
            userpic:"/img/avatars/4.jpg",
            name: 'John',
            checkin: 'jan 09',
            checkout: 'Jan 11', 
            review: 'Review now',
            paid:'100'
        },
          { 
             userpic:"img/avatars/2.jpg",
            name: 'ABC',
            checkin: 'jan 10',
            checkout: 'Jan 12', 
            review: 'Review now',
            paid:'200'
        },  
        { 
           userpic:"img/avatars/3.jpg",
            name: 'ramu',
            checkin: 'Feb 12',
            checkout: 'mar 11', 
            review: 'in Review',
            paid:'10000'
        },
          { 
             userpic:'img/avatars/4.jpg',
            name: 'MKO',
            checkin: 'mar 10',
            checkout: 'mar 12', 
            review: 'Review now',
            paid:'2000'
        },
          { 
             userpic:'../img/avatars/1.jpg',
            name: 'XYZ',
            checkin: 'jan 10',
            checkout: 'Jan 12', 
            review: 'in Review',
            paid:'200'
        },
          { 
            userpic:'../img/avatars/6.jpg',
            name: 'John',
            checkin: 'jan 09',
            checkout: 'Jan 11', 
            review: 'Reviewed',
            paid:'100'
        },
          { 
            
            userpic:'../img/avatars/7.jpg',  
            name: 'nihal',
            checkin: 'jan 10',
            checkout: 'Jan 12', 
            review: 'in Review',
            paid:'200'
        },  
        { 
            userpic:'../img/avatars/2.jpg', 
            name: 'murali',
            checkin: 'Feb 12',
            checkout: 'mar 11', 
            review: 'Reviewed',
            paid:'10000'
        },
          { 
            userpic:'../img/avatars/1.jpg', 
            name: 'ramu',
            checkin: 'mar 10',
            checkout: 'mar 12', 
            review: 'Reviewed',
            paid:'2000'
        },
          { 
             userpic:'../img/avatars/2.jpg',
            name: 'mohan',
            checkin: 'jan 10',
            checkout: 'Jan 12', 
            review: 'in Review',
            paid:'200'
        },{ 
             userpic:'../img/avatars/3.jpg',
            name: 'John',
            checkin: 'jan 09',
            checkout: 'Jan 11', 
            review: 'Review now',
            paid:'100'
     
        },
          { 
            userpic:'../img/avatars/4.jpg',
            name: 'ABC',
            checkin: 'mar 10',
            checkout: 'mar 12', 
            review: 'Review now',
            paid:'2000'
        },
          { 
             userpic:'../img/avatars/7.jpg',
            name: 'LOPI',
            checkin: 'jan 10',
            checkout: 'Jan 12', 
            review: 'Reviewed',
            paid:'200'
        },
          { 
             userpic:'../img/avatars/6.jpg',
            name: 'Lappp',
            checkin: 'jan 09',
            checkout: 'Jan 11', 
            review: 'in Review',
            paid:'100'
        },
          { 
             userpic:'../img/avatars/7.jpg',
            name: 'URM',
            checkin: 'jan 10',
            checkout: 'Jan 12', 
            review: 'Nice Once!',
            paid:'200'
        },  
        { 
             userpic:'../img/avatars/4.jpg',
            name: 'ABC',
            checkin: 'Feb 12',
            checkout: 'mar 11', 
            review: 'Good One!',
            paid:'10000'
        },
          { 
            userpic:'../img/avatars/1.jpg',
            name: 'NML',
            checkin: 'mar 10',
            checkout: 'mar 12', 
            review: 'Nice Once!',
            paid:'2000'
        },
          { 
            userpic:'../img/avatars/2.jpg',
            name: 'LOP',
            checkin: 'jan 10',
            checkout: 'Jan 12', 
            review: 'Nice Once!',
            paid:'200'
        },
        
        
        
      
      ];
    
    for (i=1;  i<= todos.length;i++) {
      
      $scope.custrating.push({ text: custrating, done:false});
    }
    
    
  };
  $scope.makeTodos(); 
  
  $scope.$watch('currentPage + numPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    , end = begin + $scope.numPerPage;
    
    $scope.filteredTodos = $scope.custrating.slice(begin, end);
  });
});



