const { performance } = require('perf_hooks');

let array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

function twoNumberSum(array, targetSum) {
    const nums = {};
    for (const num of array) {
        const potentialMatch = targetSum - num;
        if (nums.hasOwnProperty(potentialMatch)) {
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
    }
    return [];
}

let t0 = performance.now();
console.log(twoNumberSum(array, targetSum));
let t1 = performance.now();
console.log("time to execute = " + (t1 - t0) + "milliseconds.");