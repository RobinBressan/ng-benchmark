/*global angular */
define(function(require) {
    'use strict';

    var module = angular.module('ngBenchmark', []);

    module.directive('benchmark', require('directive/benchmark'));

    return module;
});
