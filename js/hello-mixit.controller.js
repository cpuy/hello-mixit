(function() {
    'use strict';

    angular
        .module('hello-mixit', [])
        .controller('HelloMixitCtrl', HelloMixitCtrl);

    function HelloMixitCtrl() {
        this.sayHello = function() {
            this.greetings = 'Hello Mix-it !';
        }
    }

})();
