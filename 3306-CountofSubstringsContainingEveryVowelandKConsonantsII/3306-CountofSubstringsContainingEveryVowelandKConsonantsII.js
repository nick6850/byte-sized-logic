// Last updated: 5/16/2026, 7:23:03 AM
1function countOfSubstrings(word, k) {
2  return atLeastK(word, k) - atLeastK(word, k + 1);
3}
4
5function atLeastK(word, k) {
6  let l = 0;
7  let vowelCount = new Map();
8  let consonantCount = 0;
9  let subStringCount = 0;
10
11  for (let r = 0; r < word.length; r++) {
12    const rChar = word[r];
13    if (isVowel(rChar)) {
14      vowelCount.set(rChar, (vowelCount.get(rChar) || 0) + 1)
15    } else {
16      consonantCount++
17    }
18
19    while (vowelCount.size === 5 && consonantCount >= k) {
20      subStringCount += word.length - r;
21      const lChar = word[l++];
22
23      if (isVowel(lChar)) {
24        const count = vowelCount.get(lChar) - 1;
25        if (count === 0) {
26          vowelCount.delete(lChar)
27        } else {
28          vowelCount.set(lChar, count)
29        }
30      } else {
31        consonantCount--
32      }
33    }
34
35  }
36
37  return subStringCount;
38}
39
40function isVowel(char) {
41  return new Set(['a', 'e', 'i', 'o', 'u']).has(char)
42};