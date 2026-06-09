// Last updated: 6/9/2026, 5:09:38 AM
1function maximumSubarraySum(nums, k) {
2  let maxSum = 0;
3  let sum = 0;
4  const window = new Set();
5  let l = 0
6
7  for (let r = 0; r < nums.length; r++) {
8    while (window.has(nums[r]) || window.size === k) {
9      window.delete(nums[l])
10      sum -= nums[l];
11      l++
12    }
13
14    sum += nums[r];
15    window.add(nums[r]);
16
17    if(window.size === k){
18      maxSum = Math.max(maxSum, sum);
19    }
20  }
21
22  return maxSum;
23}