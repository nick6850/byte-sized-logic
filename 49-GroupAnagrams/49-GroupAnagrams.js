// Last updated: 2/14/2026, 4:00:26 PM
1/**
2 * @param {string[]} strs
3 * @return {string[][]}
4 */
5var groupAnagrams = function(strs) {
6    const res = {};
7    for (let s of strs) {
8        const count = new Array(26).fill(0);
9        for (let c of s) {
10            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
11        }
12        const key = count.join(',');
13        if (!res[key]) {
14            res[key] = [];
15        }
16        res[key].push(s);
17    }
18    return Object.values(res);
19}