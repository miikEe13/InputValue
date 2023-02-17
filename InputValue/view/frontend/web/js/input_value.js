/**
 * Este es un componente de Magento que muestra el valor ingresado en un input y lo muestra en pantalla.
 *
 * @module ChatGpt_InputValue/input_value
 * @see {@link https://github.com/miikEe13/InputValue}
 * @exports ChatGpt_InputValue/js/input_value
 */
define([
    'jquery',
    'uiComponent',
    'ko'
], function ($, Component, ko) {
    'use strict';

    /**
     * El componente de input.
     *
     * @class
     * @extends uiComponent
     * @param {Object} config - Configuración del componente
     * @param {string} config.template - Plantilla del componente
     * @param {Object} element - Elemento del DOM del componente
     */
    return Component.extend({
        defaults: {
            template: 'ChatGpt_InputValue/input_value'
        },

        /**
         * @type {Observable<string>}
         */
        inputValue: ko.observable(''), // Almacena el valor del input

        /**
         * @type {Observable<string>}
         */
        displayValue: ko.observable(''), // Almacena el valor que se muestra en pantalla

        /**
         * Función que se ejecuta cuando cambia el valor del input.
         * 
         * @function getInputValue
         */
        getInputValue: function () {
            this.displayValue('El valor ingresado es: ' + this.inputValue());
        },

        /**
         * Función que se ejecuta al inicializar el componente.
         * 
         * @function initialize
         */
        initialize: function () {
            this._super();
        }
    });
});