// Last updated: 5/24/2026, 3:32:20 AM
1function canSeePersonsCount(heights) {
2  const stack = [];
3  const result = new Array(heights.length).fill(0);
4
5  for (let i = 0; i < heights.length; i++) {
6    while (stack.length && heights[stack.at(-1)] < heights[i]) {
7      stack.pop();
8      if (stack.length) result[stack.at(-1)]++;
9    }
10
11    stack.push(i);
12    if (i > 0) result[i - 1]++;
13  }
14
15  return result;
16}