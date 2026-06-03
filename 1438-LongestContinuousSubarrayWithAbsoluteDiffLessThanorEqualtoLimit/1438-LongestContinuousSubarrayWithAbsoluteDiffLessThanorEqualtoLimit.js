// Last updated: 6/4/2026, 2:33:00 AM
1function longestSubarray(nums, limit) {
2  const max_deque = [];
3  const min_deque = [];
4
5  let l = 0
6  let longest = 0;
7
8  for (let r = 0; r < nums.length; r++) {
9    const num = nums[r];
10
11    while (min_deque.length && nums[min_deque.at(-1)] >= num) {
12      //evict older (no use)
13      min_deque.pop();
14    }
15
16    while (max_deque && nums[max_deque.at(-1)] <= num) {
17      //evict older (no use)
18      max_deque.pop();
19    }
20
21    min_deque.push(r);
22    max_deque.push(r);
23
24    //compare extremes
25    while (max_deque.length && Math.abs(num - nums[max_deque[0]]) > limit) {
26      l = Math.max(l, max_deque.shift() + 1);
27    }
28
29    //compare extremes
30    while (min_deque.length && Math.abs(num - nums[min_deque[0]]) > limit) {
31      l = Math.max(l, min_deque.shift() + 1);
32    }
33
34    longest = Math.max(longest, r-l+1);
35  }
36
37  return longest;
38}