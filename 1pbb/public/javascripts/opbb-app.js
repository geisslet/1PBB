var opbb = angular
	.module('opbb', ['ngRoute','pascalprecht.translate','mgcrea.ngStrap'])
	.controller('mainCtrl', mainCtrl)
	.config(route);


mainCtrl.$inject = ['$log'];
function mainCtrl($log){
	$log.debug('opbb.mainCtrl init.');

	var vm = this;


}

function route($routeProvider){

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
            templateUrl: 'javascripts/quappe.statement.detail.html',
        })
        .otherwise({
            templateUrl: 'javascripts/home/HomePartial.html'
        });
}
