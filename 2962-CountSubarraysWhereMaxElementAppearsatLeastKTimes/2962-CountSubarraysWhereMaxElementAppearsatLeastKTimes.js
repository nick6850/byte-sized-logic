// Last updated: 5/9/2026, 6:06:57 PM
1function countSubarrays(nums, k) {
2  const max = Math.max(...nums);
3  let left = 0, maxCount = 0, result = 0;
4
5  for (let right = 0; right < nums.length; right++) {
6    if (nums[right] === max) maxCount++;
7
8    while (maxCount === k) {
9      if (nums[left] === max) maxCount--;
10      left++;
11    }
12
13    result += left;
14  }
15
16  return result;
17}