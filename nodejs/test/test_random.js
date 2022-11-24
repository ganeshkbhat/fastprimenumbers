
var expect = require('chai').expect;
const primes = require("../index");

describe('test_random.js:: [Test A] Test Suite for for ', function () {

    it('[Test A] tests for getting random values or between ranges', function (done) {

        expect(!!primes.random.get()).to.equal(true);

        expect(!!primes.random.get(1, 100)).to.equal(true);
        expect(primes.random.get(1, 100)).to.lessThan(100);

        expect(!!primes.random.get(13, 25)).to.equal(true);
        expect(primes.random.get(13, 25)).to.lessThan(25);
        expect(primes.random.get(13, 25)).to.greaterThan(12);

        done();
    });

    it('[Test A] tests for getting counts of random primes after a number with x number of digits', function (done) {

        expect(primes.random.counts(0, 2).count).to.equal(2);
        expect(primes.random.counts(0, 2).primes.length).to.equal(2);
        expect(primes.random.counts(0, 5).count).to.equal(5);
        expect(primes.random.counts(0, 5).primes.length).to.equal(5);

        done();
    });

    it('[Test A] tests for getting prime from range of random digits', function (done) {

        expect(!!primes.random.range(13, 25).primes.length).to.equal(true);
        expect(!!primes.random.range(0, 25).primes.length).to.equal(true);

        done();
    });

    it('[Test A] tests for getting prime with x digits', function (done) {

        expect(!!primes.random.prime(5)).to.equal(true);
        expect(primes.random.prime(5).toString().length).to.equal(5);
        expect(!!primes.random.prime(2)).to.equal(true);
        expect(primes.random.prime(2).toString().length).to.equal(2);
        expect(!!primes.random.prime(8)).to.equal(true);
        expect(primes.random.prime(8).toString().length).to.equal(8);

        expect(primes.random.primesArray(5, 2).length).to.equal(5);
        expect(primes.random.primesArray(5, 6).length).to.equal(5);

        done();
    });

});
