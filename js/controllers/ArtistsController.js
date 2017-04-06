(function () {
  angular.module('spotifyApp')
  .controller('selectArtistaController', function($scope, SpotifyFactory){
    $scope.artistas = "Artistas";
    $scope.$on('artistaFactory', function (event, data) {
      $scope.artistasFac = data;
      $scope.albumSelect = function () {

      for (i = 0; i < $scope.artistasFac.length; i++) {

        if($scope.artistasFac[i].name == $scope.select) {

          $scope.idArtista = $scope.artistasFac[i].id;
        }
      }

        SpotifyFactory.getAlbum($scope.idArtista)
        .then(function (albumesApi) {

              $scope.albumes = albumesApi;
              console.log($scope.albumes);

              });
      }
    })

    $scope.singleSelect = function(id) {

      SpotifyFactory.getInfoAlbum(id)
      .then(function (infoAlbumes) {

            $scope.singleAlbum = infoAlbumes;
            console.log($scope.singleAlbum);

            });

      $('.modal').modal('toggle');
    }


  })
})()