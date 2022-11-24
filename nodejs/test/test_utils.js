
var expect = require('chai').expect;
const primes = require("../index");

describe('test_utils.js:: [Test A] Test Suite for utility functions to get next, previous prime and set of primes', function () {

    it('[Test A] tests for getting the next prime nearest to the number - whether prime or not prime - nextPrime(num)', function (done) {

        expect(primes.utils.nextPrime(10)).to.equal(11)
        expect(primes.utils.nextPrime(11)).to.equal(13)
        expect(primes.utils.nextPrime(10000000)).to.equal(10000019)
        // expect(primes.utils.nextPrime()).to.equal()

        done();
    });

    it('[Test A] tests for getting the set of next primes as an array - nextPrimeSets(start, count)', function (done) {

        expect(primes.utils.nextPrimeSets(10, 2).toString()).to.equal([11, 13].toString())
        expect(primes.utils.nextPrimeSets(10, 2).length).to.equal(2)
        expect(primes.utils.nextPrimeSets(7, 2).toString()).to.equal([11, 13].toString())
        expect(primes.utils.nextPrimeSets(7, 2).length).to.equal(2)
        expect(primes.utils.nextPrimeSets(10000000, 4).toString()).to.equal([10000019, 10000079, 10000103, 10000121].toString())
        expect(primes.utils.nextPrimeSets(10000000, 4).length).to.equal(4)
        // expect(primes.utils.nextPrimeSets()).to.equal()

        done();
    });

    it('[Test A] tests for getting the previous prime nearest to the number - whether prime or not prime - previousPrime(num)', function (done) {

        expect(primes.utils.previousPrime(10)).to.equal(7)
        expect(primes.utils.previousPrime(11)).to.equal(7)
        expect(primes.utils.previousPrime(10000000)).to.equal(9999973)
        // expect(primes.utils.previousPrime()).to.equal()

        done();
    });

    it('[Test A] tests for getting previous primes as set of arrays - previousPrimeSets(start, count)', function (done) {

        expect(primes.utils.previousPrimeSets(10, 5).toString()).to.equal([2, 3, 5, 7].toString())
        expect(primes.utils.previousPrimeSets(10, 5).length).to.equal(4)
        expect(primes.utils.previousPrimeSets(11, 5).toString()).to.equal([2, 3, 5, 7].toString())
        expect(primes.utils.previousPrimeSets(11, 5).length).to.equal(4)
        expect(primes.utils.previousPrimeSets(10000000, 4).toString()).to.equal([9999991, 9999973, 9999971, 9999943].toString())
        expect(primes.utils.previousPrimeSets(10000000, 4).length).to.equal(4)
        // expect(primes.utils.previousPrimeSets()).to.equal()

        done();
    });

});
