// Last updated: 2/21/2026, 1:18:40 AM
1/**
2 * @param {number[]} height
3 * @return {number}
4 */
5var trap = function(height) {
6    let l = 0;
7    let r = height.length - 1;
8    
9    let maxL = 0;
10    let maxR = 0;
11    
12    let total = 0;
13    
14    while (l < r){
15        maxL = Math.max(maxL, height[l]);
16        maxR = Math.max(maxR, height[r]);
17        
18        if (maxL <= maxR){
19            total+=maxL-height[l];
20            l++
21        } else {
22            total+=maxR-height[r];
23            r--
24        }
25    }
26    
27    return total;
28}