(function () {
  angular.module('spotifyApp')
    .controller('buscarArtistaController',function($scope,SpotifyFactory) {
  	$scope.submitArtist = function(event) {
    event.preventDefault();
    SpotifyFactory.getArtist($scope.nameArtist).then(function (infoArtista) {
          $scope.infoArtistaSelect = infoArtista;
          $scope.nameArtist = "";

          });
  }



})
})()
