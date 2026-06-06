// Last updated: 6/6/2026, 8:02:56 PM
1//"!(&(f,t))"
2
3function parseBoolExpr(expression) {
4  let i = 0;
5
6  function parse() {
7    const char = expression[i++];
8
9    if (char === 't') return true;
10    if (char === 'f') return false;
11
12    //skip (
13    i++
14
15    const operations = [];
16
17    while (expression[i] !== ')') {
18      if (expression[i] === ',') {
19        i++;
20        continue;
21      }
22
23      operations.push(parse())
24    }
25
26    //skip )
27    i++
28
29    if (char === '&') {
30      return operations.every(op => op)
31    } else if (char === '|') {
32      return operations.some(op => op)
33    } else {
34      return !operations[0];
35    }
36  }
37
38  return parse();
39}