// Last updated: 2/27/2026, 4:01:10 AM
1/**
2 * @param {string[]} word1
3 * @param {string[]} word2
4 * @return {boolean}
5 */
6var arrayStringsAreEqual = function(word1, word2) {
7        let w1 = 0,
8            w2 = 0; // Index of word
9        let i = 0,
10            j = 0; // Index of character
11
12        while (w1 < word1.length && w2 < word2.length) {
13            if (word1[w1][i] !== word2[w2][j]) {
14                return false;
15            }
16
17            i++;
18            j++;
19
20            if (i === word1[w1].length) {
21                w1++;
22                i = 0;
23            }
24            if (j === word2[w2].length) {
25                w2++;
26                j = 0;
27            }
28        }
29        return w1 === word1.length && w2 === word2.length;
30}
31