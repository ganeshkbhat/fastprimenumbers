/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Comparision results for correctness for Prime Numbers
*/

const { prime, recursive, sqroot, sqrootExpressive } = require("../index").isPrime;
// const {  } = require("../src/node/primes_alternate");

var expect = require('chai').expect;


describe('test_primes.js:: Test Suite for - primes using suggested and alternate functions', function () {

    describe('test_primes.js:: [Test A] Test Suite for recursive, prime, sqroot, sqrootExpressive', function () {
        var result = [], arr = [83, 169, 100007, 300530164787];
        before(function () { })

        it('[Test A] tests for all prime suggested and alternate functions of 83', function (done) {
            expect(recursive(83)).to.equal(true);
            expect(prime(83)).to.equal(true);
            expect(sqroot(83)).to.equal(true);
            expect(sqrootExpressive(83)).to.equal(true);
            done();
        });

        it('[Test A] tests for all prime suggested and alternate functions of 169', function (done) {
            expect(recursive(169)).to.equal(false);
            expect(prime(169)).to.equal(false);
            expect(sqroot(169)).to.equal(false);
            expect(sqrootExpressive(169)).to.equal(false);
            done();
        });

        it('[Test A] tests for all prime suggested and alternate functions of 100007', function (done) {
            expect(recursive(100007)).to.equal(false);
            expect(prime(100007)).to.equal(false);
            expect(sqroot(100007)).to.equal(false);
            expect(sqrootExpressive(100007)).to.equal(false);
            done();
        });

        it('[Test A] tests for all prime suggested and alternate functions of 300530164787', function (done) {
            expect(recursive(300530164787)).to.equal(false);
            expect(prime(300530164787)).to.equal(false);
            expect(sqroot(300530164787)).to.equal(false);
            expect(sqrootExpressive(300530164787)).to.equal(false);
            done();
        });

    });

});
