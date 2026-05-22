// Last updated: 5/22/2026, 3:18:09 AM
1function numSubarrayProductLessThanK(nums, k) {
2  let res = 0;
3  let left = 0;
4  let right = 0
5  let product = 1;
6  let streak = 0;
7
8  if (k === 0) return 0;
9
10  while (right < nums.length) {
11    product *= nums[right++]
12
13    while (left < right && product >= k) {
14      product = product / nums[left++];
15      streak--;
16    }
17
18    streak++;
19    res += streak;
20  }
21
22  return res;
23}