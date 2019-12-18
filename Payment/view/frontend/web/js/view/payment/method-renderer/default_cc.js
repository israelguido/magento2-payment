define([
        'jquery',
        'Magento_Payment/js/view/payment/cc-form'
    ],
    function ($, Component) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Israel_Payment/payment/default_cc'
            },

            context: function() {
                return this;
            },

            getCode: function() {
                return 'israel_payment';
            },

            isActive: function() {
                return true;
            }
        });
    }
);
