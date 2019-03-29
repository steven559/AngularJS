var app = angular.module("monAppli", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider

        .when('/log', {
            templateUrl: "log.html",
            controller: "inscriController"
        })
        .when('/login', {
            templateUrl: "login.html",
            controller: 'connectController'
        })
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
app.controller('connectController',
    function ($scope, $http, $httpParamSerializer, $location) {
        /*$scope.username = "";
        $scope.password = "";*/


        $scope.select = function () {
            var test = {
                'username': $scope.username,
                'password': $scope.password
            };
            $http({
                method: "POST",

                url: "login.php",

                data: $httpParamSerializer(test),

                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).then(function Success(response) {
                if ('username' === $scope.username) {

                    $location.path('/');
                }

            })
        }

    });

app.controller('inscriController',
    function ($scope, $http, $httpParamSerializer, $location) {
        $scope.username = "";
        $scope.password = "";


        $scope.insert = function () {

            let test2 = {
                'username': $scope.username,
                'password': $scope.password
            };

            $http({

                method: "POST",

                url: "log.php",

                data: $httpParamSerializer(test2),

                headers: {'Content-Type': 'application/x-www-form-urlencoded'}


            }).then(function Success(response) {
                console.log(response.data);
                $location.path('/login');

            })
        }


    });

app.controller('filmsControlleur',
    function ($scope, $http) {
        $scope.films = [];
        $http({
            method: "POST",

            url: "angular.php",

            data: "nouveauFilm=" + $scope.ajoutFilm,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}


        }).then(function Success(response) {

            let test = response.data;
            let test2 = [];


            for (let i = 0; i < test.length; i++) {

                test2.push(test[i]);

            }

            console.log(test2);


            var test3 = [];

            for (var i = 0; i < test2.length; i++) {

                if (test2[i].films && test2[i].films != 'undefined') {

                    test3.push(test2[i]);

                }

            }

            $scope.films = test3;
            console.log(test3);
        });

        $scope.ajouterFilm = function () {
            $scope.films.push($scope.ajoutFilm);

            $http({

                method: "POST",

                url: "angular.php",

                data: "nouveauFilm=" + $scope.ajoutFilm,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).then(function Success(response) {


                },

                function Error(response) {
                    alert(response.statusText);

                })
        }
    });


app.controller('jeuxvideosControlleur',
    function ($scope, $http) {
        $scope.jeuxVideos = [];
        $http({
            method: "POST",

            url: "angular.php",

            data: "nouveaujeux=" + $scope.ajoutJeuxvideo,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}


        }).then(function Success(response) {


            let test = response.data;
            let test2 = [];


            for (let i = 0; i < test.length; i++) {

                test2.push(test[i]);

            }

            console.log(test2);


            var test3 = [];

            for (var i = 0; i < test2.length; i++) {

                if (test2[i].jeuxVideos && test2[i].jeuxVideos != 'undefined') {

                    test3.push(test2[i]);

                }

            }

            $scope.jeuxVideos = test3;
            console.log(test3);

        });

        $scope.ajouterJeuxvideo = function () {
            $scope.jeuxVideos.push($scope.ajoutJeuxvideo);


            $http({

                method: "POST",

                url: "angular.php",

                data: "nouveaujeux=" + $scope.ajoutJeuxvideo,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).then(function Success(response) {


                },

                function Error(response) {
                    alert(response.statusText);

                })
        }
    });

app.controller('livresControlleur',
    function ($scope, $http) {
        $scope.Livres = [];
        $http({
            method: "POST",

            url: "angular.php",

            data: "nouveauLivres=" + $scope.ajoutLivres,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}


        }).then(function Success(response) {


            let test = response.data;
            let test2 = [];


            for (let i = 0; i < test.length; i++) {

                test2.push(test[i]);

            }

            console.log(test2);


            var test3 = [];

            for (var i = 0; i < test2.length; i++) {

                if (test2[i].livres && test2[i].livres != 'undefined') {

                    test3.push(test2[i]);

                }

            }

            $scope.Livres = test3;
            console.log($scope.Livres);
        });


        $scope.ajouterLivres = function () {

            $scope.Livres.push($scope.ajoutLivres);

            $http({

                method: "POST",

                url: "angular.php",

                data: "nouveauLivres=" + $scope.ajoutLivres,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).then(function Success(response) {


                },

                function Error(response) {
                    alert(response.statusText);

                })
        }
    });