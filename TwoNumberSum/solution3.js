const { performance } = require('perf_hooks');

let array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

function twoNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        currentSum = array[left] + array[right];
        if (currentSum === targetSum) {
            return [array[left], array[right]];
        } else if (currentSum < targetSum) {
            left++;
        } else if (currentSum > targetSum) {
            right--;
        }
    }
    return [];
}

let t0 = performance.now();
console.log(twoNumberSum(array, targetSum));
let t1 = performance.now();
console.log("time to execute = " + (t1 - t0) + "milliseconds.");