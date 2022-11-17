
var expect = require('chai').expect;
const primes = require("../index");

describe('test_range.js:: [Test A] Test Suite for for all prime sum for range and count for alternates, alternatesOptimized, fast, fastOptimized', function () {

    it('[Test A] tests for all prime sum alternates for (11,13)', function (done) {
        expect(primes.sum.alternatesRange(11, 13)).to.equal(24);
        done();
    });

    it('[Test A] tests for all prime sum alternatesOptimized for (11,13)', function (done) {
        expect(primes.sum.alternatesRangeOptimized(11, 13)).to.equal(24);
        done();
    });

    it('[Test A] tests for all prime sum fast for (11,13)', function (done) {
        expect(primes.sum.alternatesCount(11, 2)).to.equal(24);
        done();
    });

    it('[Test A] tests for all prime sum fastOptimized for (11,2)', function (done) {
        expect(primes.sum.alternatesCountOptimized(11, 2)).to.equal(24);
        done();
    });

    it('[Test A] tests for all prime sum alternates for (11,2)', function (done) {
        expect(primes.sum.fastCount(11, 2)).to.equal(24);
        done();
    });

    it('[Test A] tests for all prime sum alternatesOptimized for (11,2)', function (done) {
        expect(primes.sum.fastCountOptimized(11, 2)).to.equal(24);
        done();
    });

    it('[Test A] tests for all prime sum fast for (11,13)', function (done) {
        expect(primes.sum.fastRange(11, 13)).to.equal(24);
        done();
    });

    it('[Test A] tests for all prime sum fastOptimized for (11,13)', function (done) {
        expect(primes.sum.fastRangeOptimized(11, 13)).to.equal(24);
        done();
    });

});
