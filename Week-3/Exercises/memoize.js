// Exercise 3.1:
//Create a memoize function that remembers previous inputs and stores them in cache so that it won’t have to compute the same inputs more than once. The function will take an unspecifiednumber of integer inputs and a reducer method.(1.5hours)

function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = args.toString();
        console.log("Key : " + key)
        if (!cache.has(key)) {
            cache.set(key, fn(...args));
        }
        return cache.get(key);
    }
}

function add(...args) {
    var sum = 0;
    for (var i = 0; i < args.length; i++) {
        sum += args[i];
    }
    console.log("Sum : " + sum);
    return sum;
}

function time(fn) {
    console.time();
    fn();
    console.timeEnd();
}

const memoizeAdd = memoize(add);
time(() => memoizeAdd(100, 100));       // 0.494873046875 ms
time(() => memoizeAdd(100));            // 0.224853515625 ms
time(() => memoizeAdd(100, 100));       // 0.134033203125 ms
time(() => memoizeAdd(100, 200));       // 0.208984375 ms
time(() => memoizeAdd(100, 200, 400));  //  0.21484375 ms