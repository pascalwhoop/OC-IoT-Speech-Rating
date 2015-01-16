'use strict';

angular.module('IoTWorkshopWebApp')
    .controller('RatingCtrl', function ($scope, $http, $timeout ) {

        $scope.participant = {};
        $scope.participant.id = localStorage.getItem("id");

        if($scope.participant.id == null){
            console.log("no user, generating random number");
            $scope.participant.id = "user" + Math.floor((Math.random() * 10000000)+1);
            localStorage.setItem("id", $scope.participant.id);
        }

        $scope.successTimeout = false;

        var triggerSuccessTimeout = function(){
            $scope.successTimeout = true;

            $timeout(function () {
                //after 3 seconds show comment box again
                $scope.successTimeout = false;
            }, 3000);
        }

        //we register the user with the server
        $scope.registerUserWithServer = function () {
            $http.post("/api/user/" + $scope.participant.id).then(function (response) {
            });
        };
        $scope.registerUserWithServer();

        // -1 = slower... 0 = OK .... +1 = faster
        $scope.submitSpeedRequest = function(speed){
            $http.put("/api/user/" + $scope.participant.id + "/speed/" + speed)
                .then(function (response) {
                    triggerSuccessTimeout();
                });
        }


    });
