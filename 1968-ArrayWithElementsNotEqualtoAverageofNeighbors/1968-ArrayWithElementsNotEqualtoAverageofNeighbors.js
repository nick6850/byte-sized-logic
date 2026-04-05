// Last updated: 4/5/2026, 7:44:09 PM
1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5function rearrangeArray(nums) {
6  nums.sort((a, b) => a - b);
7
8
9  for (let i = 1; i < nums.length-1; i++){
10    if (i % 2 === 1){
11      [nums[i], nums[i+1]] = [nums[i+1], nums[i]]
12    }
13  }
14
15  return nums;
16}