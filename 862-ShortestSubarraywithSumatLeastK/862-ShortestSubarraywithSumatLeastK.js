// Last updated: 6/21/2026, 6:07:08 PM
1function shortestSubarray(nums, k) {
2  const prefixes = [0];
3
4  for (const num of nums) {
5    prefixes.push(prefixes.at(-1) + num);
6  }
7
8  let minLen = Infinity;
9  const deque = [];
10
11  for (let i = 0; i < prefixes.length; i++) {
12    const currPrefix = prefixes[i];
13
14    while (deque.length && currPrefix < prefixes[deque.at(-1)]) {
15      //no use (bigger, meaning won't give us positive sum)
16      deque.pop();
17    }
18
19    while (deque.length && currPrefix - prefixes[deque.at(0)] >= k) {
20      //there was sum before at certain index
21      minLen = Math.min(minLen, i - deque.shift());
22    }
23
24    //push ourselves for future reference
25    deque.push(i);
26  }
27
28  return minLen === Infinity ? -1 : minLen;
29}