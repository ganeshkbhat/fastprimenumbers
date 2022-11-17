
var expect = require('chai').expect;
const primes = require("../index");

describe('test_range.js:: [Test A] Test Suite for for all prime factorial for range and count for alternates, alternatesOptimized, fast, fastOptimized', function () {

    it('[Test A] tests for all prime factorial alternates for (11,13)', function (done) {
        expect(primes.factorial.alternatesRange(11, 13).toString()).to.equal([ 39916800, 6227020800 ].toString());
        done();
    });

    it('[Test A] tests for all prime factorial alternatesOptimized for (11,13)', function (done) {
        expect(primes.factorial.alternatesRangeOptimized(11, 13).toString()).to.equal([ 39916800, 6227020800 ].toString());
        done();
    });

    it('[Test A] tests for all prime factorial fast for (11,13)', function (done) {
        expect(primes.factorial.alternatesCount(11, 2).toString()).to.equal([ 39916800, 6227020800 ].toString());
        done();
    });

    it('[Test A] tests for all prime factorial fastOptimized for (11,2)', function (done) {
        expect(primes.factorial.alternatesCountOptimized(11, 2).toString()).to.equal([ 39916800, 6227020800 ].toString());
        done();
    });

    it('[Test A] tests for all prime factorial alternates for (11,2)', function (done) {
        expect(primes.factorial.fastCount(11, 2).toString()).to.equal([ 39916800, 6227020800 ].toString());
        done();
    });

    it('[Test A] tests for all prime factorial alternatesOptimized for (11,2)', function (done) {
        expect(primes.factorial.fastCountOptimized(11, 2).toString()).to.equal([ 39916800, 6227020800 ].toString());
        done();
    });

    it('[Test A] tests for all prime factorial fast for (11,13)', function (done) {
        expect(primes.factorial.fastRange(11, 13).toString()).to.equal([ 39916800, 6227020800 ].toString());
        done();
    });

    it('[Test A] tests for all prime factorial fastOptimized for (11,13)', function (done) {
        expect(primes.factorial.fastRangeOptimized(11, 13).toString()).to.equal([ 39916800, 6227020800 ].toString());
        done();
    });

});
