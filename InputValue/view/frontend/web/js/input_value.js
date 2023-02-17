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
            this.getInputValue();
            return this;
        },

        getInputValue: function() {
            this.inputValue($('#input_component').val());
        },

        initObservable: function () {
            this._super();
            this.observe('inputValue', 'displayValue');
            return this;
        },
    });
});