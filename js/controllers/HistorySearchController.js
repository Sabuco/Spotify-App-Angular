(function () {
  angular.module('spotifyApp')
    .controller('historiaInput', function($scope){
    $scope.busquedas = [];

    $scope.$on('historicoFac', function (event, data) {
      console.log(data);
      $scope.busquedas.push(data);
      console.log($scope.busquedas);
    });




  })
})()
