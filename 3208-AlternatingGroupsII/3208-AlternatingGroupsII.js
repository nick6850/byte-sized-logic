// Last updated: 5/2/2026, 2:56:31 AM
1/**
2 * @param {number[]} colors
3 * @param {number} k
4 * @return {number}
5 */
6function numberOfAlternatingGroups(colors, k) {
7  let n = colors.length
8  let count = 0;
9  let windowStart = 0;
10  let windowEnd = 1;
11
12  while (windowStart < n) {
13    if (colors[windowEnd % n] === colors.at((windowEnd % n) - 1)) {
14      windowStart = windowEnd;
15    }
16
17    if (windowEnd - windowStart + 1 === k) {
18      count++;
19      windowStart++;
20    }
21
22    windowEnd++
23  }
24
25  return count;
26}
27
28