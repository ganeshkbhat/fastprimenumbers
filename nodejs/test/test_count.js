
var expect = require('chai').expect;
const primes = require("../index");

describe('test_range.js:: [Test A] Test Suite for for all prime count alternates, alternatesOptimized, fast, fastOptimized', function () {

    it('[Test A] tests for all prime count alternates for (11, 2)', function (done) {
        expect(primes.count.alternates(11, 2).primes.toString()).to.equal([11, 13].toString());
        expect(primes.count.alternates(11, 2).count).to.equal(2);
        done();
    });

    it('[Test A] tests for all prime count alternatesOptimized for (11, 2)', function (done) {
        expect(primes.count.alternatesOptimized(11, 2).primes.toString()).to.equal([11, 13].toString());
        expect(primes.count.alternatesOptimized(11, 2).count).to.equal(2);
        done();
    });

    it('[Test A] tests for all prime count fast for (11, 2)', function (done) {
        expect(primes.count.fast(11, 2).primes.toString()).to.equal([11, 13].toString());
        expect(primes.count.fast(11, 2).count).to.equal(2);
        done();
    });

    it('[Test A] tests for all prime count fastOptimized for (11, 2)', function (done) {
        expect(primes.count.fastOptimized(11, 2).primes.toString()).to.equal([11, 13].toString());
        expect(primes.count.fastOptimized(11, 2).count).to.equal(2);
        done();
    });

});
