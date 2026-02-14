// Last updated: 2/14/2026, 4:28:46 PM
1/**
2 * @param {number[]} numbers
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(numbers, target) {
7    let left = 0;
8    let right = numbers.length - 1;
9
10    while (left < right) {
11        const sum = numbers[left] + numbers[right];
12
13        if (sum === target) {
14            // 1-indexed
15            return [left + 1, right + 1]; 
16        }
17
18        if (sum < target) {
19            left++;
20        } else {
21            right--;
22        }
23    }
24    
25    // по условию решение гарантировано
26    return []; 
27}