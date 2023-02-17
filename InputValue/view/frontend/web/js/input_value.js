define([
    'jquery',
    'uiComponent',
    'ko'
], function ($, Component, ko) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'ChatGpt_InputValue/input_value'
        },
        inputValue: ko.observable(''),
        displayValue: ko.observable(''),

        getInputValue: function () {
            this.displayValue('El valor ingresado es: ' + this.inputValue());
        },

        initialize: function () {
            this._super();
        }
    });
});