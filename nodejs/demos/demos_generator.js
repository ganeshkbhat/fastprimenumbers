
const primes = require("../index");


let iterator = primes.generator.generatorPrimes(5);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


iterator = primes.generator.counts(0, 2);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


iterator = primes.generator.random(3);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


iterator = primes.generator.range(0, 15);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
