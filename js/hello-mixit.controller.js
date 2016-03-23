(function() {
    'use strict';

    angular
        .module('hello-mixit', [])
        .controller('HelloMixitCtrl', HelloMixitCtrl);

    function HelloMixitCtrl() {
        var vm = this;

        vm.greetings = "Hello World !";

    }

})();
