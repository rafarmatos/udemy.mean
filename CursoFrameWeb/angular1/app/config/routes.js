angular.module('primeiraApp')
    .config(RoutesConfig)
    .run(RoutesRun)

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider,$httpProvider) {
    $stateProvider
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "dashboard/dashboard.html"
        })

        .state('billingCycle', {
            url: "/billingCycles?page",
            templateUrl: "billingCycle/tabs.html"
        })
    $httpProvider.interceptors.push('handleResponseError')
}

RoutesRun.$inject = ['$rootScope', '$http', '$location', '$window', 'auth']
function RoutesRun($rootScope, $http, $location, $window, auth) {
    validateUser()
    $rootScope.$on('$locationChangeStart', () => validateUser())

    function validateUser() {
        const user = auth.getUser()
        const authPage = '/auth.html'
        const isAuthPage = $window.location.href.includes(authPage)
        if (!user && !isAuthPage) {
            $window.location.href = authPage
        } else if (user && !user.isValid) {
            auth.validateToken(user.token, (err, valid) => {
                if (!valid) {
                    $window.location.href = authPage
                } else {
                    user.isValid = true
                    $http.defaults.headers.common.Authorization = user.token
                    isAuthPage ? $window.location.href = '/' : $location.path('/dashboard')
                }
            })
        }
    }
}

