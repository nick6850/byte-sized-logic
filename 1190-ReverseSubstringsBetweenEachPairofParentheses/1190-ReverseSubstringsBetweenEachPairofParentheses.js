// Last updated: 6/14/2026, 7:04:05 PM
1function reverseParentheses(s) {
2  const pairs = new Map();
3  const stack = [];
4
5  for (let i = 0; i < s.length; i++) {
6    if (s[i] === '(') stack.push(i);
7
8    if (s[i] === ')') {
9      const j = stack.pop();
10      pairs.set(i, j);
11      pairs.set(j, i);
12    }
13  }
14
15  let i = 0;
16  let dir = 1;
17  const result = [];
18
19  while (i < s.length) {
20    if (s[i] === '(' || s[i] === ')') {
21      i = pairs.get(i);
22      dir *= -1;
23      i += dir
24    } else {
25      result.push(s[i])
26      i += dir
27    }
28  }
29
30  return result.join('')
31}