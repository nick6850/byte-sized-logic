// Last updated: 3/21/2026, 3:41:22 PM
1/**
2 * @param {number[]} tickets
3 * @param {number} k
4 * @return {number}
5 */
6function timeRequiredToBuy(tickets, k) {
7  let i = 0;
8  let count = 0;
9
10  while (tickets[k] !== 0){
11    //пропускаем бедолаг
12    while(tickets[i] === 0) i = (i + 1) % tickets.length;
13    
14    tickets[i]--;
15    i = (i + 1) % tickets.length;
16    count++;
17  }
18
19  return count;
20}