// Last updated: 5/31/2026, 12:17:14 AM
1function minOperations(nums) {
2  const n = nums.length;
3  nums = [...new Set(nums)].sort((a, b) => a - b);
4
5  let maxKeep = 0;
6  let min = 0;
7
8  for (let max = 0; max < nums.length; max++) {
9    while (nums[max] - nums[min] >= n) {
10      min++;
11    }
12
13    maxKeep = Math.max(maxKeep, max - min + 1);
14  }
15
16  return n - maxKeep;
17};