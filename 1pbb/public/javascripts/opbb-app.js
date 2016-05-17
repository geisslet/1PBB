var opbb = angular
	.module('opbb', ['ngRoute','pascalprecht.translate','mgcrea.ngStrap', 'ui.grid', 'ui.grid.edit', 'ui.grid.selection'])
	.controller('mainCtrl', mainCtrl)
	.config(route);


mainCtrl.$inject = ['$log'];
function mainCtrl($log){
	$log.debug('opbb.mainCtrl init.');

	var vm = this;

}

function route($routeProvider){
    //$locationProvider.html5Mode(true);

    $routeProvider
        .when('/articles',{
            templateUrl: 'javascripts/articles/ArticlesPartial.html',
        })
        .when('/customers',{
            templateUrl: 'javascripts/customers/CustomersPartial.html'
        })
        .when('/bills',{
            templateUrl: 'javascripts/bills/BillsPartial.html',
        })
        .when('/offers',{
            templateUrl: 'javascripts/offers/OffersPartial.html',
        })
        .when('/statistics',{
            templateUrl: 'javascripts/statistics/StatisticsPartial.html',
        })
        .when('/print',{
            templateUrl: 'javascripts/',
        })
        .when('/home',{
            templateUrl: 'javascripts/home/HomePartial.html',
        })
        .otherwise({
            templateUrl: 'javascripts/home/HomePartial.html'
        });
}
