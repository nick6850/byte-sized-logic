// Last updated: 4/9/2026, 5:32:23 AM
1function decrypt(code, k) {
2  const n = code.length;
3  const result = new Array(n).fill(0);
4
5  if (k === 0) return result;
6
7  let start;
8  let end;
9
10  if (k > 0) {
11    start = 1;
12    end = k;
13  } else {
14    start = n + k;
15    end = n - 1;
16  }
17
18  let windowCount = 0;
19
20  for (let i = start; i <= end; i++) windowCount += code[i % n]
21
22  for (let i = 0; i < n; i++){
23    result[i] = windowCount;
24    windowCount -= code[(start+i) % n];
25    windowCount += code[(end+i+1) % n];
26  }
27
28  return result;
29}