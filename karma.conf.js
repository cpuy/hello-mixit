module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'js/*.js'
        ],
        browsers: ['PhantomJS'],

        reporters: ['progress', 'junit'],

        junitReporter: {
            outputDir: 'build'
        }
    })
};
