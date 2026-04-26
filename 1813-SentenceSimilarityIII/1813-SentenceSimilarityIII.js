// Last updated: 4/26/2026, 5:43:15 AM
1function areSentencesSimilar(sentence1, sentence2) {
2    let s1 = sentence1.split(" ");
3    let s2 = sentence2.split(" ");
4
5    // Ensure s1 is always the shorter array
6    if (s2.length < s1.length) {
7        [s1, s2] = [s2, s1];
8    }
9
10    // s1 should be a prefix, suffix, or combination of both of s2
11    
12    // Expand prefix match from the left
13    let l1 = 0;
14    while (l1 < s1.length && s1[l1] === s2[l1]) {
15        l1++;
16    }
17    
18    let r1 = s1.length - 1;
19    let r2 = s2.length - 1;
20
21    // r1 >= l1: only scan the unverified region [l1, r1]
22    while (r1 >= l1 && s1[r1] === s2[r2]) {
23        r1--;
24        r2--;
25    }
26
27    // l1 > r1 means the unchecked region in s1 is empty
28    return l1 > r1;
29}