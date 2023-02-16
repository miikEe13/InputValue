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

        inputValue: ko.observable(''),
        displayValue: ko.computed(function() {
            return 'El valor ingresado es: ' + this.inputValue();
        }),
        
        initialize: function () {
            this._super();
            this.getInputValue();
        },

        getInputValue: function() {
            $('#input_component').on('change', function() {
              this.inputValue(this.value);
            });
            ko.applyBindings({
              displayValue: this.displayValue
            }, document.getElementById('value_component'));
          }
    });
});