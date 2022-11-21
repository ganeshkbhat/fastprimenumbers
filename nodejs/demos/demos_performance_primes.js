
const primes = require("../index");

let arr = [
    10, 83,
    169, 5121,
    100007, 125894,
    631577, 115524751,
    305301647, 662135789,
    3005301647, 300530164787,
    3005301647872345, 3053016478756427
];

const fs = require("fs");

fs.appendFile(
    "../demos/perf.csv",
    // "number,fast,count,isprime,recursive,count,isprime,sqroot,count,isprime",
    "number,fcount,rcount,scount\n",
    () => { }
)

for (let i = 0; i < 10000; i++) {
    let f = primes.fast(i);
    let r = primes.recursive(i);
    let s = primes.sqrootOptimised(i);
    let res = [f.number, f.count, r.count, s.count].join(",") + "\n"
    fs.appendFile(
        "../demos/perf.csv",
        res,
        () => { }
    )
    // console.log(
    //     `isprime: ${i}`,
    //     primes.fast(i),
    //     primes.recursive(i),
    //     primes.sqroot(i),
    //     primes.sqrootExpressive(i)
    // )
}

