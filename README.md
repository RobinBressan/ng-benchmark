ngBenchmark [![Build Status](https://travis-ci.org/RobinBressan/ng-benchmark.svg?branch=master)](https://travis-ci.org/RobinBressan/ng-benchmark)
===============

Benchmark your AngularJS application easily.

# Installation

It is available with bower:

```
bower install ng-benchmark
```

Then add the retrieved files to your HTML layout:

```html
<script type="text/javascript" src="/path/to/bower_components/ng-benchmark/ng-benchmark.min.js"></script>
```

You can also use it with [RequireJS](http://requirejs.org/) as an AMD module.

Then add `ngBenchmark` as dependency for your AngularJS application:

```javascript
var app = angular.module('YOUR_APP', ['ngBenchmark']);
```

# Usage

To benchmark an html node, just add the `benchmark` attribute with a benchmark name as value:

```html
<div class="container" benchmark="container">
    <ul benchmark="list">
        <li>
            <img src="" benchmark="image"/>
        </li>
    </ul>
</div>
```

All benchmarks are stored in a `benchmarks` cache created with `$cacheFactory`. To retrieve them do:

```javascript
var benchmarks = $cacheFactory.get('benchmarks');

// get the container benchmark
// all results are arrays in case you use same name on different nodes

var containerBenchmark = benchmarks.get('container');

console.log(containerBenchmark[0].compile); // returns the compile event timestamp
```

Benchmarks look like this:

```json
{
    "element": "the element",
    "attrs": "the element attributes",
    "compile": "timestamp",
    "link": "array of timestamps",
    "ready": "timestamp",
    "load": "timestamp (only for element with load event like images)"
}
```

For more convenience the `benchmarks` cache is exposed on the `window`. So you access it directly into your console under the name `benchmarks`.

Build
------

To rebuild the minified JavaScript you must have `requirejs` installed globally and run: `make build`.

Tests
-----
Install dependencies and run the unit tests:

```
make install
make test-spec
```

Contributing
------------

All contributions are welcome and must pass the tests. If you add a new feature, please write tests for it.

License
-------

This application is available under the MIT License.
