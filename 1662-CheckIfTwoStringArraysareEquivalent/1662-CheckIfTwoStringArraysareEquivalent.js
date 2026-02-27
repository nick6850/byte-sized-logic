// Last updated: 2/27/2026, 6:03:23 AM
1/**
2 * @param {string[]} word1
3 * @param {string[]} word2
4 * @return {boolean}
5 */
6var arrayStringsAreEqual = function(word1, word2) { let l = 0, r = 0; let i = 0, j = 0; while (i < word1.length && j < word2.length) { if (word1[i][l] !== word2[j][r]) return false; l++; r++; if (l === word1[i].length) { i++; l = 0; } if (r === word2[j].length) { j++; r = 0; } } return i === word1.length && j === word2.length; }
7