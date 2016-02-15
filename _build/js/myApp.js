(function(){

  'use strict'

  angular.module('myApp')
    .controller('myCtrl', function(){

        numbers = {
          price: 125,
          subtotal: 125,
          tax: 122,
          taxRate: 12,
          tip: 12,
          tipPercent: 12,
          totalPrice: 12,
          tipTotal: 123,
          mealCount: 125,
          tipAverage: 125
        }
      }

});

});

//.controller('earnings', function($scope, totaEarnings){
  //$scope.numbers = totalEarnings;

  //$scope.reset = function(){
    //totalEarnings.tipTotal = 0;
    //totalEarnings.tableCount = 0;
    //totalEarnings.averageTip = 0;
    //$scope.numbers = totalEarnings;
  //}
//})

$scope.reset = function() {
  initializeForm();
  $scope.tableForm.$setPristine();
}

$scope.addTable = function(){
  var table = $scope.numbers;
  table.tax = table.taxRate * table.price / 100;
  table.subtotal = table.price + table.tax;
  table.tip = table.subtotal * table.tipPercent;
  table.totalPrice = table.subtotal + table.tip;
  table.tipTotal = table.tipTotal += table.tip;
  table.mealCount++;
  table.tipAverage = table.tipTotal / table.mealCount;

  totalEarnings.tipTotal = totalEarnings.tipTotal += table.tip;
  totalEarnings.mealCount++;
  totalEarnings.averageTip = totalEarnings.tipTotal / totalEarnings.mealCount;

  $scope.tableForm.$setPristine();
}


//$scope.cancel = function(){
//clear();
//$scope.tableForm.$setPristine();
//};

var clear = function(){
  $scope.submitted = false;
  $scope.numbers = {
    price: 0,
    subtotal: 0,
    tax: 0,
    taxRate: 0,
    tip: 0,
    tipPercent: 0,
    totalPrice: 0,
    tipTotal: 0,
    mealCount: 0,
    tipAverage: 0
  }
}

var Meal = function(price, tax, tip){
  this.price = price;
  this.tax = tax;
  this.tip = tip;
}
