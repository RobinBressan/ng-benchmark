({
    baseUrl: "../src",
    name: "../bower_components/almond/almond.js",
    include: ['ng-benchmark'],
    insertRequire: ['ng-benchmark'],
    wrap: {
        startFile: '../build/start.frag',
        endFile: '../build/end.frag'
    },
    out: '../ng-benchmark.min.js'
})
