// Last updated: 5/31/2026, 5:53:18 PM
1function removeDuplicates(s, k) {
2  const stack = [];
3
4  for (const char of s){
5    if (stack.length && stack.at(-1)[0] === char){
6      stack.at(-1)[1]++;
7
8      if (stack.at(-1)[1] === k) stack.pop();
9    } else {
10      stack.push([char, 1])
11    }
12  }
13  
14  return stack.reduce((acc, curr) => acc + curr[0].repeat(curr[1]), '')
15}