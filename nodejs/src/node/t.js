
async function test() {

    // var range = await fetch("https://unpkg.com/fast-prime-client@0.0.5/src/primes.js");
    // const { alternateWays, alternateWaysOptimized, fast } = range();
    // console.log(alternateWays, alternateWaysOptimized, fast)
    // console.log(range.body)
    fetch("https://unpkg.com/fast-prime-client@0.0.5/src/primes.js").then(r => console.log(r));
}

test();
