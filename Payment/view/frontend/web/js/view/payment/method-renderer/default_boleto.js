define([
        'jquery',
        'Magento_Checkout/js/view/payment/default',
    ],
    function ($, Component) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Israel_Payment/payment/default_boleto'
            },

            context: function() {
                return this;
            },

            getCode: function() {
                return 'israel_boleto';
            },

            isActive: function() {
                return true;
            }
        });
    }
);
