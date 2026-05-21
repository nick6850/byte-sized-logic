// Last updated: 5/22/2026, 1:55:21 AM
1function numberOfSubstrings(s) {
2  let count = 0;
3  let l = 0;
4  const window = new Map();
5
6  for (let r = 0; r < s.length; r++) {
7    window.set(s[r], (window.get(s[r]) || 0) + 1)
8
9    while (window.size === 3) {
10      count += s.length - r;
11      window.set(s[l], (window.get(s[l]) || 0) - 1);
12      if (window.get(s[l]) === 0) window.delete(s[l]);
13      l++
14    }
15  }
16
17  return count;
18}