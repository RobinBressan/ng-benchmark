/*global define,describe,it,beforeEach,expect,inject,jasmine*/

(function() {
    'use strict';

    describe('Directive: benchmark', function() {

        var $compile,
            $cacheFactory,
            $rootScope,
            $scope,
            $n,
            element;

        beforeEach(module('ngBenchmark'));

        beforeEach(inject(function($injector) {
            $compile = $injector.get('$compile');
            $cacheFactory = $injector.get('$cacheFactory');
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();

            element = $compile('<div benchmark="div1"><p ng-repeat="i in [1,2]" benchmark="p1">{{ notification.title() }}</p></div><div benchmark="div1"></div>')($scope);
            $scope.$digest();
        }));

        it('should compute benchmarks and store them in cache', function() {
            var benchmarks = $cacheFactory.get('benchmarks');

            expect(benchmarks.info().size).toBe(2);

            expect(benchmarks.get('div1')).not.toBeUndefined();
            expect(benchmarks.get('div1').length).toBe(2);
            expect(benchmarks.get('div1')[0].link).toEqual(jasmine.any(Array));
            expect(benchmarks.get('div1')[0].link.length).toBe(1);

            expect(benchmarks.get('p1')).not.toBeUndefined();
            expect(benchmarks.get('p1').length).toBe(1);
            expect(benchmarks.get('p1')[0].link).toEqual(jasmine.any(Array));
            expect(benchmarks.get('p1')[0].link.length).toBe(2);
        });
    });
}());
