
var expect = require('chai').expect;
const primes = require("../index");

describe('test_generator.js:: [Test A] Test Suite for for ', function () {

    it('[Test A] tests for for generator to generate prime of count 5 starting from 0 - primes.generator.generatorPrimes(5)', function (done) {

        let iterator = primes.generator.generatorPrimes(5);

        expect(iterator.next().value).to.equal(2);
        expect(iterator.next().value).to.equal(3);
        expect(iterator.next().value).to.equal(5);
        expect(iterator.next().value).to.equal(7);
        expect(iterator.next().value).to.equal(11);

        done();
    });

    it('[Test A] tests for generator to generate prime of count 2 starting from 0 - primes.generator.counts(0, 2)', function (done) {

        let iterator = primes.generator.counts(0, 2);
        expect(iterator.next().value).to.equal(2);
        expect(iterator.next().value).to.equal(3);
        expect(iterator.next().value).to.equal(undefined);

        done();
    });

    it('[Test A] tests for generator to generate 3 primes randomly starting from 0 - primes.generator.random(3)', function (done) {

        let iterator = primes.generator.random(3);
        expect(!!iterator.next().value).to.equal(true);
        expect(!!iterator.next().value).to.equal(true);
        let v = iterator.next().value;
        expect(!!primes.fast(v)).to.equal(true);

        done();
    });

    it('[Test A] tests for generator to generate a range of primes between 0 and 15 - primes.generator.range(0, 15)', function (done) {

        let iterator = primes.generator.range(0, 15);
        expect(iterator.next().value).to.equal(2);
        expect(iterator.next().value).to.equal(3);
        expect(iterator.next().value).to.equal(5);
        expect(iterator.next().value).to.equal(7);
        expect(iterator.next().value).to.equal(11);
        expect(iterator.next().value).to.equal(13);
        expect(iterator.next().value).to.equal(undefined);
        expect(iterator.next().value).to.equal(undefined);

        done();
    });
});
