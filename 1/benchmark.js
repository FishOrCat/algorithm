const ksum1 = require('./1.js');
const ksum2 = require('./2.js');
const { cases, validate } = require("./cases.js");
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
console.log(cases.map((value, index) => validate(value, index, ksum1(...value))));
console.log(cases.map((value, index) => validate(value, index, ksum2(...value))));
// add tests
suite.add('ksum#1', function () {
    cases.map((value, index) => ksum1(...value));
})
.add('ksum#2', function () {
    cases.map((value, index) => ksum2(...value));
})
// add listeners
.on('cycle', function (event) {
    console.log(String(event.target));
})
.on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });