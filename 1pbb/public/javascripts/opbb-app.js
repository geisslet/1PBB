angular.module('opbb', [
    'ngRoute',
    'pascalprecht.translate',
    'mgcrea.ngStrap', 
    'ui.grid', 
    'ui.grid.edit', 
    'ui.grid.selection',
    'ngDialog'])
    .config(route);


function route($routeProvider){
    //$locationProvider.html5Mode(true);

    $routeProvider
        .when('/products',{
            templateUrl: 'javascripts/products/ProductsPartial.html',
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

