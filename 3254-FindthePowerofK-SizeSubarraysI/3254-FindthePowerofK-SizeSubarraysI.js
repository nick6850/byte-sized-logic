// Last updated: 5/19/2026, 4:48:47 AM
1function resultsArray(nums, k) {
2  const n = nums.length;
3  const result = [];
4  let streak = 1; // length of consecutive increasing run ending at i
5
6  for (let i = 0; i < n; i++) {
7    // Extend or reset the streak
8    if (i > 0 && nums[i] === nums[i - 1] + 1) {
9      streak++;
10    } else {
11      streak = 1;
12    }
13
14    // Only start writing results once we've seen at least k elements
15    if (i >= k - 1) {
16      result.push(streak >= k ? nums[i] : -1);
17    }
18  }
19
20  return result;
21};