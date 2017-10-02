angular.module('primeiraApp').component('authField', {
    bindings: {
        id: '@',
        label: '@',
        type: '@',
        grid: '@',
        icon: '@',
        model: '=',
        placeholder: '@',
        hide: '<'
    },
    controller: function() {
        this.$onInit = () => {
            this.iconClasses = `glyphicon glyphicon-${this.icon} form-controlfeedback`
        }
    },
    templateUrl: 'common/components/authField.html'
})