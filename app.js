var app = angular.module('myShoppingList', []);

app.controller('myCtrl', function($scope) {
   $scope.products = ["Milk", "Bread", "Chicken" ] ;
   
    $scope.addItem = function() {
        
         $scope.errorText = "";
    if(!$scope.addMe){
  
        return;
    } 
    if($scope.products.indexOf($scope.addMe) == -1){
        $scope.products.push($scope.addMe);
 
    } else {
        $scope.errorText = "Item already in the list";

    }
    
       
   }
   
   
    $scope.removeItem = function(index) {
        $scope.errorText = "";
        $scope.products.splice(index, 1);
    }
});