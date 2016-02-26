
myApp.controller("earningsCtrl", function($scope) {

    $scope.reset = function(){

    };
  })
  .controller("myCtrl", function($scope){
    initializeForm();

    $scope.addMeal = function(){
      if (!$scope.mealForm.$valid){
        return;
      }
      var meal = $scope.data;
      meal.tax = meal.taxRate * meal.price / 100;
      meal.subtotal = meal.price + meal.tax;
      meal.tip = meal.subtotal * (meal.tipPercentage / 100);
      meal.totalPrice = meal.subtotal + meal.tip;

      //totalEarnings.add(meal.tip);

      $scope.mealForm.$setPristine();


    };

    $scope.cancel = function(){
      initializeForm();
      $scope.mealForm.$setPristine();
      //var meal = $scope.data;
      //meal.price = 0;
      //meal.taxRate = 0;
      //meal.tipPercentage = 0;
      //$scope.mealForm.taxRate = 0;
      //$scope.mealForm.$setPristine();
    };

    function initializeForm(){
      $scope.submitted = false;
      $scope.data = {
        price: '',
        taxRate: '',
        tipPercentage: '',
        tax: 0,
        subtotal: 0,
        tip: 0,
        totalPrice: 0
      };
    }
  });
