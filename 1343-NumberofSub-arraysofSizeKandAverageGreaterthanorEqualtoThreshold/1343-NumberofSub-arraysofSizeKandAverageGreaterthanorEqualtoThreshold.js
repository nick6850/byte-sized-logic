// Last updated: 6/6/2026, 6:22:54 PM
1function numOfSubarrays(arr, k, threshold) {
2  let count = 0;
3  let sum = 0;
4
5  for (let i = 0; i < arr.length; i++){
6    sum += arr[i];
7
8    if (i + 1 >= k){
9      if (sum / k >= threshold) count++;
10
11      sum -= arr[i - k + 1]
12    }
13  }
14
15  return count;
16}