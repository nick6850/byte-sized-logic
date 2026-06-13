// Last updated: 6/13/2026, 6:25:07 PM
1function sumSubarrayMins(arr) {
2  const stack = [];
3  let windowSum = 0;
4  let totalSum = 0;
5
6  for (const num of arr){
7    //[min, 1] <== min for at least current subarr
8    const entry = [num, 1]
9
10    //check if it is min for prev subarrays (entries) too
11    while (stack.length && stack.at(-1)[0] >= num){
12      const [prevMin, prevCount] = stack.pop();
13
14      //current sum of all subarrays become smaller
15      windowSum -= prevMin * prevCount;
16      //we become min for them
17      entry[1] += prevCount;
18    }
19    stack.push(entry);
20    windowSum += entry[0] * entry[1];
21    totalSum += windowSum;
22  }
23
24  return totalSum % (10 ** 9 + 7);
25}