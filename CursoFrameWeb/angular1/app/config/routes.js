angular.module('primeiraApp')
    .config(RoutesConfig)

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "dashboard/dashboard.html"
        })

        .state('billingCycle', {
        url: "/billingCycles?page",
        templateUrl: "billingCycle/tabs.html"
    })

    $urlRouterProvider.otherwise('/dashboard')
}

