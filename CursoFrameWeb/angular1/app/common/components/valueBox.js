angular.module('primeiraApp')
    .component('valueBox',{
        bindings :{
            grid : '@',
            colorClass: '@',
            value: '@',
            text: '@',
            iconClass: '@',
        },
        controller: [
            'gridSystem',
            function(gridSystem) {
                this.$onInit =  function () {
                    this.gridClasses = gridSystem.toCssClasses(this.grid)
                }
            }
        ],
        templateUrl: 'common/components/valueBox.html'
    })