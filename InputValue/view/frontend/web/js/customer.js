define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
    'use strict';
    return Component.extend({
        defaults: {
            template: 'ChatGpt_InputValue/customer'
        },
        initialize: function () {
            this._super();
            this.customerName = ko.observableArray([]);
            this.customerData = ko.observable('');
        },
        addNewCustomer: function () {
            this.customerName.push({name:this.customerData()});
            this.customerData('');
        }
    });
}
);