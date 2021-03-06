﻿// Code goes here

var app = angular.module('app');

app.controller('MainController', function ($scope, $interval, $log, $routeParams, $location) {

    $scope.countdown = 10;

    var decrementCountdown = function () {
        $scope.countdown -= 1;
        if ($scope.countdown < 1) {
            $scope.search($scope.username);
        }
    };

    var countdownInterval = null;
    var startCountdown = function () {
        // runs the decrementCountdown function, every 1000ms, runs the number of times equal to $scope.countdown, when it is 0 the interval function stops running
        //countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };

    $scope.search = function (username) {
        if (countdownInterval) {
            $interval.cancel(countdownInterval);
            $scope.countdown = null;
            //$('#countdown').hide();
        }
        $location.path("/user/" + username);
    };

    //startCountdown();

});


/* LOGGING ******
    $log.log("Testing $log.log");
    $log.info("Testing $log.info");
    $log.error("Testing $log.error");
    $log.warn("Testing $log.warn");
    $log.debug("Testing $log.debug");
    */