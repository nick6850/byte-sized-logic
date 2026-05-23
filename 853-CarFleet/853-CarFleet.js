// Last updated: 5/23/2026, 3:41:54 AM
1function carFleet(target, position, speed) {
2  const cars = position
3    .map((pos, i) => [pos, speed[i]])
4    .sort((a, b) => b[0] - a[0]);
5
6  const stack = [];
7
8  for (const [pos, spd] of cars) {
9    const time = (target - pos) / spd;
10    if (stack.length === 0 || time > stack[stack.length - 1]) {
11      stack.push(time);
12    }
13  }
14
15  return stack.length;
16}