define(function(require) {
    'use strict';

    function benchmark ($cacheFactory, $window) {
        var benchmarks = $cacheFactory('benchmarks'),
            benchmarkName;

        $window.benchmarks = benchmarks;

        return {
            restrict: 'A',
            compile: function(element, attrs, transclude) {
                benchmarkName = attrs['benchmark'];

                var benchs;

                if (!benchmarks.get(benchmarkName)) {
                    benchs = [];
                    benchmarks.put(benchmarkName, benchs);
                } else {
                    benchs = benchmarks.get(benchmarkName);
                }

                var bench = {
                    element: element,
                    attrs: attrs,
                    compile: new Date().getTime(),
                    link: [],
                    ready: null,
                    load: null
                };

                benchs.push(bench);

                element.ready(function() {
                    bench.ready = new Date().getTime();
                });

                element.on('load', function() {
                    bench.load = new Date().getTime();
                });

                return function(scope) {
                    bench.link.push(new Date().getTime());
                }
            }
        };
    };

    benchmark.$inject = ['$cacheFactory', '$window'];

    return benchmark;
});
