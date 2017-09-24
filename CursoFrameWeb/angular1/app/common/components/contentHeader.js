angular.module('primeiraApp')
.component('contentHeader', {
    bindings :{
        name: '@',
        small: '@'
    },
    templateUrl : 'common/components/contentHeader.html'
})