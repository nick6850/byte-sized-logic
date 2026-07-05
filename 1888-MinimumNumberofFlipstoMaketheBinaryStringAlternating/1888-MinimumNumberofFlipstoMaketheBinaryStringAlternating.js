// Last updated: 7/6/2026, 2:02:15 AM
1function minFlips(s) {
2  let ss = s + s;
3  let currentMatched1 = 0;
4  let currentMatched2 = 0;
5  let minOperations = Infinity;
6
7  for (let i = 0; i < ss.length; i++) {
8    let ideal1 = i % 2 === 0 ? 0 : 1;
9
10    if (parseInt(ss[i]) === ideal1) {
11      currentMatched1++;
12    } else {
13      currentMatched2++;
14    }
15
16    if (i >= s.length) {
17      const past = i - s.length;
18
19      const pastIdeal1 = past % 2 === 0 ? 0 : 1;
20
21      if (parseInt(ss[past]) === pastIdeal1) {
22        currentMatched1--;
23      } else {
24        currentMatched2--;
25      }
26    }
27
28    if (i + 1 >= s.length) {
29      minOperations = Math.min(minOperations, s.length - Math.max(currentMatched1, currentMatched2))
30    }
31  }
32
33  return minOperations;
34}