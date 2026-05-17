// Last updated: 5/17/2026, 3:34:09 AM
1function maxSatisfied(customers, grumpy, minutes) {
2  let happyCustomerCount = 0;
3
4  for (let i = 0; i < customers.length; i++) {
5    if (!grumpy[i]) happyCustomerCount += customers[i];
6  }
7
8  let bestMargin = 0;
9  let currentMargin = 0;
10  let l = 0;
11
12  for (let r = 0; r < customers.length; r++) {
13    if (r - l + 1 > minutes) {
14      currentMargin -= grumpy[l] ? customers[l] : 0;
15      l++;
16    }
17
18    currentMargin += grumpy[r] ? customers[r] : 0;
19
20    bestMargin = Math.max(bestMargin, currentMargin);
21  }
22
23  return happyCustomerCount + bestMargin;
24}