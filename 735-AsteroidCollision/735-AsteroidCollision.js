// Last updated: 5/28/2026, 1:29:51 AM
1function asteroidCollision(asteroids) {
2  const stack = [];
3
4  for (const asteroid of asteroids) {
5    if (stack.length && asteroid < 0) {
6      let isEqual = false; 
7
8      while (stack.at(-1) > 0 && stack.at(-1) <= Math.abs(asteroid)) {
9        const prev = stack.pop();
10
11        if (prev === Math.abs(asteroid)) {
12          isEqual = true;
13          break;
14        }
15      }
16
17      if ((stack.length === 0 || stack.at(-1) < 0) && !isEqual) stack.push(asteroid);
18    } else {
19      stack.push(asteroid)
20    }
21  }
22
23  return stack;
24}