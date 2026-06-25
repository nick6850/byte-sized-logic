// Last updated: 6/25/2026, 3:56:57 AM
1function takeCharacters(s, k) {
2  
3  const freqMap = new Map();
4
5  for (const char of s) freqMap.set(char, (freqMap.get(char) || 0) + 1);
6  
7
8  let maxValidWindow = 0;
9  let l = 0;
10
11 const a = freqMap.get('a') || 0;
12const b = freqMap.get('b') || 0;
13const c = freqMap.get('c') || 0;
14if (Math.min(a, b, c) < k) return -1;
15
16  for (let r = 0; r < s.length; r++){
17    freqMap.set(s[r], freqMap.get(s[r]) - 1);
18
19    while (Math.min(freqMap.get('a'), freqMap.get('b'), freqMap.get('c')) < k){
20      freqMap.set(s[l], freqMap.get(s[l]) + 1);
21      l++;
22    }
23
24    maxValidWindow = Math.max(maxValidWindow, r-l+1)
25  }
26
27  return s.length - maxValidWindow;
28}