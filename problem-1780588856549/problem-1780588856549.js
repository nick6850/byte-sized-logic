// Last updated: 6/4/2026, 7:00:56 PM
1function shortestSubarray(nums, k) {
2  let shortest = Infinity;
3
4  const pre = new Array(nums.length + 1).fill(0);
5
6  for (let i = 0; i < nums.length; i++) {
7    pre[i + 1] = nums[i] + pre[i]
8  }
9
10  const deque = [];
11
12  for (let i = 0; i < pre.length; i++) {
13    while (deque.length > 0 && pre[deque.at(-1)] >= pre[i]) {
14      //we are smaller, no use of bigger prefixes (yield smaller sum and longer windows)
15      deque.pop();
16    }
17
18    while (deque.length > 0 && pre[i] - pre[deque[0]] >= k) {
19      shortest = Math.min(shortest, i - deque.shift())
20    }
21
22    deque.push(i);
23  }
24
25  return shortest === Infinity ? -1 : shortest;
26}