// Last updated: 6/2/2026, 2:47:14 AM
1function minWindow(s, t) {
2  if (t.length > s.length) return ''
3  
4  let l = 0;
5  let min = s;
6  let neededMap = new Map();
7  let hasFound = false;
8
9  for (const char of t) neededMap.set(char, (neededMap.get(char) || 0) + 1)
10
11  let needed = t.length;
12
13  for (let r = 0; r < s.length; r++) {
14    if (neededMap.has(s[r])) {
15      neededMap.set(s[r], neededMap.get(s[r]) - 1);
16
17      if (neededMap.get(s[r]) >= 0) {
18        needed--;
19      }
20    }
21
22    while (needed === 0) {
23      hasFound = true;
24      if (r - l + 1 < min.length) {
25        min = s.slice(l, r + 1)
26      }
27
28      if (neededMap.has(s[l])) {
29        neededMap.set(s[l], neededMap.get(s[l]) + 1);
30
31        if (neededMap.get(s[l]) > 0) {
32          needed++;
33        }
34      }
35
36      l++;
37    }
38  }
39
40  if (!hasFound) return ''
41
42  return min;
43}