define([
    'jquery',
    'uiComponent',
    'ko'
], function ($, Component, ko) {
    'use strict';

    return Component.extend({
        defaults: {
            //template: 'ChatGpt_InputValue/input_value'
        },
        initialize: function () {
            this._super();
            var self = this;
            this.inputValue = ko.observable('');
            this.displayValue = ko.computed(function() {
                return 'El valor ingresado es: ' + self.inputValue();
            });
            this.getInputValue();
        },

        getInputValue: function(){
            var self = this;
            $('#input_component').on('change', function() {
                console.log('entraa');
                self.inputValue(this.value);
            });
            return function (config, element) {
                ko.applyBindings({
                    displayValue: self.displayValue
                }, element);
            };
        }
    });
});