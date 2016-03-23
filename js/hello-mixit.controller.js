(function() {
    'use strict';

    angular
        .module('hello-mixit', [])
        .controller('HelloMixitCtrl', HelloMixitCtrl);

    function HelloMixitCtrl() {
        this.greetings = "Hello World !";
    }

})();
