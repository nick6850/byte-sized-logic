// Last updated: 6/14/2026, 6:03:33 PM
1function longestSubarray(nums, limit) {
2  const minDeque = [];
3  const maxDeque = [];
4
5  let left = 0
6  let result = 0;
7
8  for (let right = 0; right < nums.length; right++) {
9    //evict smaller
10    while (maxDeque.length && nums[maxDeque.at(-1)] <= nums[right]) {
11      maxDeque.pop();
12    }
13
14    //evict bigger
15    while (minDeque.length && nums[minDeque.at(-1)] >= nums[right]) {
16      minDeque.pop();
17    }
18
19    minDeque.push(right)
20    maxDeque.push(right)
21
22    //at this point we have the biggest and smallest values
23    while (maxDeque.length && minDeque.length && (nums[maxDeque[0]] - nums[minDeque[0]] > limit)) {
24      if (maxDeque[0] <= left) maxDeque.shift();
25      if (minDeque[0] <= left) minDeque.shift();
26      left++
27    }
28
29    result = Math.max(result, right - left + 1)
30  }
31
32  return result;
33}