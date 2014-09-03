'use strict';

angular.module('IoTWorkshopWebApp')
    .controller('RatingCtrl', function ($scope, $http, $timeout,  localStorageService) {

        $scope.participant = {};
        $scope.participant.name = localStorageService.getLocalStorageItem('participantName');

        $scope.resonance = {
            speed: 0,
            theory: 0,
            comment: ""
        }

        $scope.commentTimeout = false;


        $scope.speed = function(speed){
            $http.put("/api/user/" + $scope.participant.name + "/speed/" + speed);
        }

        $scope.theory = function(theoryAmount){
            $http.put("/api/user/" + $scope.participant.name + "/theory/" + theoryAmount);
        }

        $scope.postComment = function(comment){

            var payload = {text: comment};
            //post the comment to the backend
            $http({
                method: 'POST',
                url: "/api/user/" + $scope.participant.name + "/comment",
                data: payload,
                headers: {'Content-Type': 'application/json'}
            })
                //on success delete comment
                .then(function(response){
                    $scope.resonance.comment = "";

                    //hide comment field and submit box for 3 seconds and show success message
                    $scope.commentTimeout = true;

                    $timeout(function(){
                        //after 3 seconds show comment box again
                        $scope.commentTimeout = false;
                    }, 3000);

                }, function(err){
                    alert("some error occured: " + err.data + "\nBecause of: " + err.status);
                });
        }



    });
