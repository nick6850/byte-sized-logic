// Last updated: 5/28/2026, 4:14:47 AM
1function survivedRobotsHealths(positions, healths, directions) {
2  const n = positions.length;
3
4  const indices = Array.from({ length: n }, (_, i) => i);
5
6  // sort by position
7  indices.sort((a, b) => positions[a] - positions[b]);
8
9  const stack = [];
10
11  for (const i of indices) {
12    if (directions[i] === 'R') {
13      stack.push(i);
14      continue;
15    }
16
17    // current robot moving left
18    while (stack.length && healths[i] > 0) {
19      const j = stack[stack.length - 1];
20
21      if (healths[j] < healths[i]) {
22        stack.pop();
23        healths[i]--;
24        healths[j] = 0;
25      }
26      else if (healths[j] > healths[i]) {
27        healths[j]--;
28        healths[i] = 0;
29      }
30      else {
31        stack.pop();
32        healths[j] = 0;
33        healths[i] = 0;
34      }
35    }
36  }
37
38  return healths.filter(h => h > 0);
39}