// Last updated: 5/23/2026, 3:17:21 AM
1function carFleet(target, position, speed) {
2  const cars = [];
3
4  for (let i = 0; i < position.length; i++) {
5    cars.push([position[i], speed[i]])
6  }
7
8  cars.sort((a, b) => a[0] - b[0]);
9
10  const stack = [];
11
12  for (const [position, speed] of cars){
13    const steps = (target - position) / speed
14    while (stack.at(-1) <= steps){
15      stack.pop();
16    }
17
18    stack.push(steps);
19  }
20
21  return stack.length;
22}