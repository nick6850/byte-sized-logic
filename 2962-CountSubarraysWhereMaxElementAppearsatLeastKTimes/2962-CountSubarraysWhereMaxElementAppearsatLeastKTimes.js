// Last updated: 5/20/2026, 3:24:03 AM
1function countSubarrays(nums, k) {
2  let maxElement = 0;
3
4  for (const num of nums) if (num > maxElement) maxElement = num;
5
6  let maxCount = 0;
7  let currCount = 0;
8  let l = 0
9
10  for (let r = 0; r < nums.length; r++){
11    if (nums[r] === maxElement){
12      currCount++;
13    }
14
15    while (currCount === k){
16      maxCount += nums.length - r;
17
18      if (nums[l++] === maxElement) currCount--;
19    }
20  }
21
22  return maxCount;
23}