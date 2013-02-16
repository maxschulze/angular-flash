// Testacular configuration
// Generated on Sat Jan 05 2013 18:18:26 GMT-0800 (PST)


// base path, that will be used to resolve files and exclude
basePath = './';


// list of files / patterns to load in the browser
files = [
    JASMINE,
    JASMINE_ADAPTER,
    'components/jQuery/jquery.js',
    'components/underscore/underscore.js',
    'components/underscore.string/lib/underscore.string.js',
    'test/libs/angular/angular.js',
    'test/libs/angular/angular-mocks.js',
    ANGULAR_SCENARIO,
    ANGULAR_SCENARIO_ADAPTER,
    'src/services/*.js',
    'src/directives/*.js',
    'test/e2e/**/*-test.js'
];


// list of files to exclude
exclude = [

];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 8080;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 5000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
