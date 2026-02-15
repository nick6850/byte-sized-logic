// Last updated: 2/15/2026, 5:39:25 PM
1/**
2 * @param {number[]} height
3 * @return {number}
4 */
5var maxArea = function(height) {
6    let left = 0, right = height.length - 1, max = 0;
7
8    while (left < right) {
9        const w = right - left;
10        const h = Math.min(height[left], height[right]);
11        max = Math.max(max, w * h);
12
13        if (height[left] < height[right]) {
14            left++;
15        } else {
16            right--;
17        }
18    }
19
20    return max;
21};