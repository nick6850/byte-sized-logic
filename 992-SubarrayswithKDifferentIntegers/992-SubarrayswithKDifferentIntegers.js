// Last updated: 5/27/2026, 4:06:57 AM
1function subarraysWithKDistinct(nums, k) {
2  return atLeastDistinct(nums, k) - atLeastDistinct(nums, k + 1)
3}
4
5function atLeastDistinct(nums, k) {
6  const freq = new Map();
7  let l = 0
8  let count = 0;
9
10  for (let r = 0; r < nums.length; r++) {
11    freq.set(nums[r], (freq.get(nums[r]) || 0)+1);
12
13    while (freq.size >= k) {
14      count += nums.length - r;
15      const leftNum = nums[l++]
16      freq.set(leftNum, freq.get(leftNum) - 1);
17      if (freq.get(leftNum) === 0) freq.delete(leftNum)
18    }
19  }
20
21  return count;
22}