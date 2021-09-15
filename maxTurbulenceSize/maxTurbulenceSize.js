/*
https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/638/week-3-september-15th-september-21st/3976/

Longest Turbulent Subarray

Given an integer array arr, return the length of a maximum size turbulent subarray of arr.

A subarray is turbulent if the comparison sign flips between each
adjacent pair of elements in the subarray.

More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said
to be turbulent if and only if:

For i <= k < j:
arr[k] > arr[k + 1] when k is odd, and
arr[k] < arr[k + 1] when k is even.
Or, for i <= k < j:
arr[k] > arr[k + 1] when k is even, and
arr[k] < arr[k + 1] when k is odd.

Example 1:
Input: arr = [9,4,2,10,7,8,8,1,9]
Output: 5
Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]

Example 2:
Input: arr = [4,8,12,16]
Output: 2

Example 3:
Input: arr = [100]
Output: 1
*/

const maxTurbulenceSize = (arr) => {
  if (arr.length === 1) {
    return 1;
  }
  if (arr.length === 0) {
    return 0;
  }
  const turbulent = [];
  let left = 0;
  let right = 1;
  while (right < arr.length) {
    if (arr[left] < arr[right]) {
      turbulent.push(-1);
      left += 1;
      right += 1;
    } else if (arr[left] > arr[right]) {
      turbulent.push(1);
      left += 1;
      right += 1;
    } else {
      turbulent.push(0);
      left += 1;
      right += 1;
    }
  }
  const equalNumbers = turbulent.every((number) => number === 0);
  if (equalNumbers) {
    return 1;
  }
  let compare = turbulent[0];
  let count = 1;
  let result = 1;
  for (let i = 1; i < turbulent.length; i += 1) {
    if (turbulent[i] !== compare && turbulent[i] !== 0) {
      count += 1;
      compare = turbulent[i];
    } else {
      if (count > result) {
        result = count;
        count = 1;
      }
      compare = turbulent[i];
    }
  }
  return result + 1;
};

module.exports = maxTurbulenceSize;
