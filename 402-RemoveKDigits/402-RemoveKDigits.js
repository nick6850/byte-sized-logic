// Last updated: 5/2/2026, 3:34:04 PM
1function removeKdigits(num, k) {
2  const stack = [];
3
4  for (const digit of num){
5    while (k > 0 && digit < stack.at(-1)){
6      stack.pop();
7      k--
8    }
9    
10    stack.push(digit)
11  }
12
13  while (k > 0) {
14    stack.pop();
15    k--
16  }
17
18  let i = 0;
19
20  while (stack[i] === '0' && stack.length > 1) stack[i++] = ''
21
22  return stack.join('') || '0';
23}