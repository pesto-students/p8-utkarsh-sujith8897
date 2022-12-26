// memoize function
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = args.toString();
        if(cache.has(key)) {
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    }
}

// fibnocii series
function fib(n) {
    if(n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

// function to calculate processing time
function time(fn) {
    console.time();
    console.log(fn());
    console.timeEnd();
}

const memoizeFib = memoize(fib);

time(()=>memoizeFib(32));
time(()=>memoizeFib(38));
time(()=>memoizeFib(32));
time(()=>memoizeFib(38)); // calling again