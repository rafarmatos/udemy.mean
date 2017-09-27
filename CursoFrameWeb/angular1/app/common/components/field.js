(function () {
   angular.module('primeiraApp')
       .component('field', {
           bindings : {
               id: '@',
               label: '@',
               grid: '@',
               placeholder: '@',
               type: '@',
               model: '=',
           },
           controller: [
               'gridSystem',
               function(gridSystem) {
                   this.$onInit =  function () {
                       this.gridClasses = gridSystem.toCssClasses(this.grid)
                   }
               }
           ],
           templateUrl: 'common/components/field.html'
       })
})()