define([
    'jquery',
    'uiComponent',
    'ko'
], function ($, Component, ko) {
    'use strict';

    return Component.extend({
        defaults: {
        },

        inputValue: ko.observable(''),

        displayValue: ko.computed(function() {
            return 'El valor ingresado es: ' + this.inputValue();
        }),

        initialize: function () {
            this._super();
            var input = $('#input_component');
            input.change(this.getInputValue());
            ko.applyBindings(this, input[0]);
        },

        getInputValue: function() {
            this.inputValue($('#input_component').val());
            var self = this;
            return function () {
                self.inputValue(this.value);
            };
        },
    });
});