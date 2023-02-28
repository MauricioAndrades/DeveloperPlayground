// comparison of different flatten algo performance
// recursive, generator and recursive with trampoline.

const arr = Array.from({ length: 1000 }, () => [1, 2, [3, [4, [5]]]]);

function flatten(input) {
    return input.reduce((acc, cur) => {
        return acc.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, []);
}

function* flattenGen(input) {
    for (const val of input) {
        Array.isArray(val) ? yield* flattenGen(val) : yield val;
    }
}

function flattenTramp(input) {
    function trampoline(fn) {
        while (typeof fn === "function") {
            fn = fn();
        }
        return fn;
    }

    function flattenRec(input, acc) {
        return trampoline(() =>
            input.reduceRight((next, cur) => {
                if (typeof next === "function") {
                    return next();
                }
                return Array.isArray(cur) ? () => flattenRec(cur, next) : () => next.concat([cur]);
            }, acc)
        );
    }

    return flattenRec(input, []);
}

const measure = (name, fn, iterations) => {
    const t0 = performance.now();
    for (let i = 0; i < iterations; i++) {
        fn();
    }
    const t1 = performance.now();
    console.log(`${name}: ${Math.trunc(t1 - t0)} ms`);
};

measure("flatten", () => flatten(arr), 100);

measure("flattenGen", () => [...flattenGen(arr)], 100);

measure("flattenTramp", () => flattenTramp(arr), 100);
