
var expect = require('chai').expect;
const primes = require("../index");

describe('test_range.js:: [Test A] Test Suite for for all prime range alternates, alternatesOptimized, fast, fastOptimized', function () {

    it('[Test A] tests for all prime range alternates for (11,13)', function (done) {
        expect(primes.range.alternates(11, 13).primes.toString()).to.equal([11, 13].toString());
        expect(primes.range.alternates(11, 13).count).to.equal(2);
        done();
    });

    it('[Test A] tests for all prime range alternatesOptimized for (11,13)', function (done) {
        expect(primes.range.alternatesOptimized(11, 13).primes.toString()).to.equal([11, 13].toString());
        expect(primes.range.alternatesOptimized(11, 13).count).to.equal(2);
        done();
    });

    it('[Test A] tests for all prime range fast for (11,13)', function (done) {
        expect(primes.range.fast(11, 13).primes.toString()).to.equal([11, 13].toString());
        expect(primes.range.fast(11, 13).count).to.equal(2);
        done();
    });

    it('[Test A] tests for all prime range fastOptimized for (11,13)', function (done) {
        expect(primes.range.fastOptimized(11, 13).primes.toString()).to.equal([11, 13].toString());
        expect(primes.range.fastOptimized(11, 13).count).to.equal(2);
        done();
    });

});
