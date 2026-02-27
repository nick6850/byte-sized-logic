// Last updated: 2/28/2026, 1:12:45 AM
1/**
2 * @param {number[]} tickets
3 * @param {number} k
4 * @return {number}
5 */
6var timeRequiredToBuy = function(tickets, k) {
7  let idx = 0;
8  let time = 0;
9
10  while (true) {
11    if (tickets[k] === 0) {
12      return time;
13    }
14
15    if (idx === tickets.length) {
16      idx = 0;
17    }
18
19    while (tickets[idx] === 0) {
20      idx++
21      idx = idx === tickets.length ? 0 : idx;
22    }
23
24    tickets[idx]--
25    idx++
26    time++
27  }
28}