define([
    'jquery', 
    'uiComponent', 
    'ko'
], function ($, Component, ko) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Chat_InputValue/input_value'
        },
        inputValue: ko.observable(''),
        displayValue: ko.computed(function() {
            return 'El valor ingresado es: ' + this.inputValue();
        }),

        getInputValue: function() {
            this.inputValue($('#input_component').val());
        },

        initialize: function () {
            this._super();
            var input = $('#input_component');
            input.change(this.getInputValue.bind(this));
            ko.applyBindings(this, input[0]);
        }
    });
});