define([
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (Component, rendererList) {
        'use strict';

        rendererList.push(
            {
                type: 'israel_payment',
                component: 'Israel_Payment/js/view/payment/method-renderer/default_cc'
            },
            {
                type: 'israel_boleto',
                component: 'Israel_Payment/js/view/payment/method-renderer/default_boleto'
            }
        );

        /** Add view logic here if needed */
        return Component.extend({});
    });