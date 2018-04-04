/**
 * Created by smetshile on 2018/02/27.
 */
var app = angular.module('myApp', []);
app.controller('mainController', function ($scope, $http) {
    $http({
        method:'GET',
        url: 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=b67b6380e06549899dca93db6a2e97f6',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(function (response) {
        $scope.news = response.data;
    });

});