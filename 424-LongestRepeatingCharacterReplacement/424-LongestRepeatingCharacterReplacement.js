// Last updated: 5/19/2026, 2:15:17 AM
1function characterReplacement(s, k) {
2  let maxLength = 0;
3  let maxFreq = 0;
4  let charCount = new Map();
5
6
7  let l = 0;
8
9  for (let r = 0; r < s.length; r++){
10    charCount.set(s[r], (charCount.get(s[r]) || 0) + 1)
11
12    if (charCount.get(s[r]) > maxFreq){
13      maxFreq = charCount.get(s[r])
14    }
15
16    let windowSize = r-l+1;
17    let otherElemetsCount = windowSize - maxFreq;
18
19    if (otherElemetsCount <= k){
20      maxLength = Math.max(maxLength, windowSize)
21    } else {
22      charCount.set(s[l], charCount.get(s[l]) - 1);
23      l++
24    }
25  }
26
27  return maxLength;
28}