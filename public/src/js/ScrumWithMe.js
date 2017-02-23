/**
 * Created by Nick Largent on 5/19/14.
 * Modified by Hector Santana on 2/23/17.
 */
var app = angular.module('ScrumWithMe', ['ngCookies']);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

app.run(['$rootScope', function($rootScope) {
    $rootScope.appName = "scrumwithme.ps.pri";
    $rootScope.appVersion = "{{APP.VERSION}}";
}]);