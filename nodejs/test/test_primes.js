/**
 * Ganesh Bhat
 * https://github.com/ganeshkbhat/fastprimecalculations
 * Fastest method of Prime Number Calculations
 * Comparision results for correctness for Prime Numbers
*/

const { prime, fast, primeOld, fastOld, recursive, sqroot, sqrootOptimised } = require("../index").isPrime;
// const {  } = require("../src/node/primes_alternate");

var expect = require('chai').expect;


describe('test_primes.js:: Test Suite for - primes using suggested and alternate functions', function () {

    describe('test_primes.js:: [Test A] Test Suite for recursive, prime, sqroot, sqrootOptimised', function () {
        var result = [], arr = [83, 169, 100007, 300530164787];
        before(function () { })

        it('[Test A] tests for all prime suggested and alternate functions of 83', function (done) {
            expect(recursive(83)).to.equal(true);
            expect(prime(83)).to.equal(true);
            expect(sqroot(83)).to.equal(true);
            expect(sqrootOptimised(83)).to.equal(true);
            done();
        });

        it('[Test A] tests for all prime suggested and alternate functions of 169', function (done) {
            expect(recursive(169)).to.equal(false);
            expect(prime(169)).to.equal(false);
            expect(sqroot(169)).to.equal(false);
            expect(sqrootOptimised(169)).to.equal(false);
            done();
        });

        it('[Test A] tests for all prime suggested and alternate functions of 100007', function (done) {
            expect(recursive(100007)).to.equal(false);
            expect(prime(100007)).to.equal(false);
            expect(sqroot(100007)).to.equal(false);
            expect(sqrootOptimised(100007)).to.equal(false);
            done();
        });

        it('[Test A] tests for all prime suggested and alternate functions of 300530164787', function (done) {
            expect(recursive(300530164787)).to.equal(false);
            expect(prime(300530164787)).to.equal(false);
            expect(sqroot(300530164787)).to.equal(false);
            expect(sqrootOptimised(300530164787)).to.equal(false);
            done();
        });

        // 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149
        // 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097, 1103, 1109, 1117
        // 949849,949853,949889,949891,949903,949931,949937,949939,949951,949957,949961,949967,949973,949979
        it('[Test A] tests for primes of multiple primes for random checks', function (done) {
            expect(prime(41)).to.equal(true);
            expect(prime(43)).to.equal(true);
            expect(prime(47)).to.equal(true);
            expect(prime(53)).to.equal(true);
            expect(prime(59)).to.equal(true);
            expect(prime(61)).to.equal(true);
            expect(prime(67)).to.equal(true);
            expect(prime(71)).to.equal(true);
            expect(prime(73)).to.equal(true);
            expect(prime(79)).to.equal(true);
            expect(prime(83)).to.equal(true);
            expect(prime(89)).to.equal(true);
            expect(prime(97)).to.equal(true);
            expect(prime(101)).to.equal(true);
            expect(prime(103)).to.equal(true);
            expect(prime(107)).to.equal(true);
            expect(prime(109)).to.equal(true);
            expect(prime(113)).to.equal(true);
            expect(prime(127)).to.equal(true);
            expect(prime(131)).to.equal(true);
            expect(prime(137)).to.equal(true);
            expect(prime(139)).to.equal(true);
            expect(prime(149)).to.equal(true);
            expect(prime(1033)).to.equal(true);
            expect(prime(1039)).to.equal(true);
            expect(prime(1049)).to.equal(true);
            expect(prime(1051)).to.equal(true);
            expect(prime(1061)).to.equal(true);
            expect(prime(1063)).to.equal(true);
            expect(prime(1069)).to.equal(true);
            expect(prime(1087)).to.equal(true);
            expect(prime(1091)).to.equal(true);
            expect(prime(1093)).to.equal(true);
            expect(prime(1097)).to.equal(true);
            expect(prime(1117)).to.equal(true);
            expect(prime(949849)).to.equal(true);
            expect(prime(949853)).to.equal(true);
            expect(prime(949889)).to.equal(true);
            expect(prime(949891)).to.equal(true);
            expect(prime(949903)).to.equal(true);
            expect(prime(949931)).to.equal(true);
            expect(prime(949937)).to.equal(true);
            expect(prime(949939)).to.equal(true);
            expect(prime(949951)).to.equal(true);
            expect(prime(949957)).to.equal(true);
            expect(prime(949961)).to.equal(true);
            expect(prime(949967)).to.equal(true);
            expect(prime(949973)).to.equal(true);
            expect(prime(949979)).to.equal(true);
            done();
        });

        // 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149
        // 1033, 1039, 1049, 1051, 1061, 1063, 1069, 1087, 1091, 1093, 1097, 1103, 1109, 1117
        // 949849,949853,949889,949891,949903,949931,949937,949939,949951,949957,949961,949967,949973,949979
        it('[Test A] tests for all prime suggested and alternate functions of 300530164787', function (done) {
            expect(fastOld(41)).to.equal(true);
            expect(fastOld(43)).to.equal(true);
            expect(fastOld(47)).to.equal(true);
            expect(fastOld(53)).to.equal(true);
            expect(fastOld(59)).to.equal(true);
            expect(fastOld(61)).to.equal(true);
            expect(fastOld(67)).to.equal(true);
            expect(fastOld(71)).to.equal(true);
            expect(fastOld(73)).to.equal(true);
            expect(fastOld(79)).to.equal(true);
            expect(fastOld(83)).to.equal(true);
            expect(fastOld(89)).to.equal(true);
            expect(fastOld(97)).to.equal(true);
            expect(fastOld(101)).to.equal(true);
            expect(fastOld(103)).to.equal(true);
            expect(fastOld(107)).to.equal(true);
            expect(fastOld(109)).to.equal(true);
            expect(fastOld(113)).to.equal(true);
            expect(fastOld(127)).to.equal(true);
            expect(fastOld(131)).to.equal(true);
            expect(fastOld(137)).to.equal(true);
            expect(fastOld(139)).to.equal(true);
            expect(fastOld(149)).to.equal(true);
            expect(fastOld(1033)).to.equal(true);
            expect(fastOld(1039)).to.equal(true);
            expect(fastOld(1049)).to.equal(true);
            expect(fastOld(1051)).to.equal(true);
            expect(fastOld(1061)).to.equal(true);
            expect(fastOld(1063)).to.equal(true);
            expect(fastOld(1069)).to.equal(true);
            expect(fastOld(1087)).to.equal(true);
            expect(fastOld(1091)).to.equal(true);
            expect(fastOld(1093)).to.equal(true);
            expect(fastOld(1097)).to.equal(true);
            expect(fastOld(1117)).to.equal(true);
            expect(fastOld(949849)).to.equal(true);
            expect(fastOld(949853)).to.equal(true);
            expect(fastOld(949889)).to.equal(true);
            expect(fastOld(949891)).to.equal(true);
            expect(fastOld(949903)).to.equal(true);
            expect(fastOld(949931)).to.equal(true);
            expect(fastOld(949937)).to.equal(true);
            expect(fastOld(949939)).to.equal(true);
            expect(fastOld(949951)).to.equal(true);
            expect(fastOld(949957)).to.equal(true);
            expect(fastOld(949961)).to.equal(true);
            expect(fastOld(949967)).to.equal(true);
            expect(fastOld(949973)).to.equal(true);
            expect(fastOld(949979)).to.equal(true);
            done();
        });
    });

});
