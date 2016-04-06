describe('hello mixit controller', function() {

    var controller;

    beforeEach(module('hello-mixit'));

    beforeEach(inject(function($controller) {
        controller = $controller('HelloMixitCtrl');
    }));

    it('should say hello to the world', function() {

        controller.sayHello();
        
        expect(controller.greetings).toBe('Hello Mix-it !');
    });
});
