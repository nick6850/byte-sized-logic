// Last updated: 5/18/2026, 4:04:11 AM
1function maximumSubarraySum(nums, k) {
2  let maxSum = 0;
3  let currSum = 0;
4  const window = new Set();
5  let l = 0;
6
7  for (let r = 0; r < nums.length; r++) {
8    while (window.has(nums[r])) {
9      currSum -= nums[l];
10      window.delete(nums[l++])
11    }
12
13    currSum += nums[r];
14    window.add(nums[r]);
15
16    if (window.size > k) {
17      currSum -= nums[l];
18      window.delete(nums[l++])
19    }
20
21    if (window.size >= k) maxSum = Math.max(maxSum, currSum)
22  }
23
24  return maxSum;
25}