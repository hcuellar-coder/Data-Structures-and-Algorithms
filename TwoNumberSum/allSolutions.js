const { performance } = require('perf_hooks');

let array = [3, 5, -4, 8, 11, 1, -1, 6];
let targetSum = 10;

function twoNumberSum1(array, targetSum) {
    for (i = 0; i < array.length; i++) {
        for (j = array.length - 1; j > i; j--) {
            if (targetSum == array[i] + array[j]) {
                return [array[i], array[j]];
            }
        }
    }
    return [];
}

function twoNumberSum2(array, targetSum) {
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

function twoNumberSum3(array, targetSum) {
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
console.log(twoNumberSum1(array, targetSum));
let t1 = performance.now();
console.log("time to execute = " + (t1 - t0) + "milliseconds.");

let t2 = performance.now();
console.log(twoNumberSum2(array, targetSum));
let t3 = performance.now();
console.log("time to execute = " + (t3 - t2) + "milliseconds.");

let t4 = performance.now();
console.log(twoNumberSum3(array, targetSum));
let t5 = performance.now();
console.log("time to execute = " + (t5 - t4) + "milliseconds.");