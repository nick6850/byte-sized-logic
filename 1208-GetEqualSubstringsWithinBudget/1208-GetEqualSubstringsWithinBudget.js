// Last updated: 5/21/2026, 3:50:14 AM
1function equalSubstring(s, t, maxCost) {
2  let l = 0;
3  let maxLength = 0;
4
5  for (let r = 0; r < s.length; r++) {
6    maxCost -= Math.abs(s[r].charCodeAt(0) - t[r].charCodeAt(0))
7    while (maxCost < 0) {
8      maxCost += Math.abs(s[l].charCodeAt(0) - t[l].charCodeAt(0))
9      l++
10    }
11
12    maxLength = Math.max(maxLength, r - l + 1)
13  }
14
15  return maxLength;
16}