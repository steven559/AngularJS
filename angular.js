var app = angular.module("monAppli", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "index2.html"
        })
        .when("/films", {
            templateUrl: "angular.html",
            controller: "filmsControlleur"
        })
        .when("/livres", {
            templateUrl: "livres.html",
            controller: "livresControlleur"
        })
        .when("/jeuxvideos", {
            templateUrl: "jeuxvideos.html",
            controller: "jeuxvideosControlleur"
        });

});

app.controller('filmsControlleur',
    function ($scope, $http) {
        $scope.films = $http({
            method: "GET",
            url: "angular.php",


        })
    .then(function Success(response) {
                alert(response.data);
                console.log(response.data);
            },

            function Error(response) {
                alert(response.statusText);

            });

        $scope.ajouterFilm = function () {
            $scope.films.push($scope.ajoutFilm);

            $http({

                method: "POST",

                url: "angular.php",

                data: "nouveauFilm=" + $scope.ajoutFilm,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).then(function Success(response) {
                    alert(response.data);
                },

                function Error(response) {
                    alert(response.statusText);

                })
        }        /* $scope.film1 =
         $scope.film2 = "Fargo";*/
    });


app.controller('jeuxvideosControlleur',
    function ($scope, $http) {
        $scope.jeuxVideos = $scope.jeuxVideos = $http({
            method: "GET",
            url: "angular.php",


        })
            .then(function Success(response) {
                    alert(response.data);
                    console.log(response.data);
                },

                function Error(response) {
                    alert(response.statusText);

                });

        $scope.ajouterJeuxvideo = function () {
            $scope.jeuxVideos.push($scope.ajoutJeuxvideo);


            $http({

                method: "POST",

                url: "angular.php",

                data: "nouveaujeux=" + $scope.ajoutJeuxvideo,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).then(function Success(response) {
                    alert(response.data);
                },

                function Error(response) {
                    alert(response.statusText);

                })
        }        /* $scope.film1 =
         $scope.film2 = "Fargo";*/
    });

app.controller('livresControlleur',
    function ($scope, $http) {
        $scope.Livres = $scope.Livres= $http({
            method: "GET",
            url: "angular.php",


        })
            .then(function Success(response) {
                    alert(response.data);
                    console.log(response.data);
                },

                function Error(response) {
                    alert(response.statusText);

                });


        $scope.ajouterLivres = function () {

            $scope.Livres.push($scope.ajoutLivres);

            $http({

                method: "POST",

                url: "angular.php",

                data: "nouveauLivres=" + $scope.ajoutLivres,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).then(function Success(response) {
                    alert(response.data);
                },

                function Error(response) {
                    alert(response.statusText);

                })
        }
    });