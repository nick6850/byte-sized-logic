// Last updated: 5/1/2026, 8:13:07 PM
1function findClosestElements(arr, k, x) {
2  let l = 0
3  let r = arr.length-1;
4
5  //берем большое окно
6  //убираем тех кто точно не влезет
7  //сужаем его до валидного (size k) 
8  while (r - l + 1 !== k){
9    if (x - arr[l] <= arr[r] - x){
10      r--
11    } else {
12      l++
13    }
14  }
15
16  //возвращаем оставшиеся
17  return arr.slice(l, r+1);
18}