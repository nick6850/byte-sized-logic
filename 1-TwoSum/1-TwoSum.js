// Last updated: 2/14/2026, 3:46:38 PM
1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(nums, target) {
7    const map = new Map();
8
9    for (let i = 0; i < nums.length; i++) {
10        const complement = target - nums[i];
11
12        if (map.has(complement)) {
13            return [map.get(complement), i];
14        }
15
16        map.set(nums[i], i);
17    }
18
19    return [];
20}