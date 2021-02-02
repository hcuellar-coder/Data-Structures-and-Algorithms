const { performance } = require('perf_hooks');

let array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

function twoNumberSum(array, targetSum) {
    for (i = 0; i < array.length; i++) {
        for (j = array.length - 1; j > i; j--) {
            if (targetSum == array[i] + array[j]) {
                return [array[i], array[j]];
            }
        }
    }
    return [];
}

let t0 = performance.now();
console.log(twoNumberSum(array, targetSum));
let t1 = performance.now();
console.log("time to execute = " + (t1 - t0) + "milliseconds.");