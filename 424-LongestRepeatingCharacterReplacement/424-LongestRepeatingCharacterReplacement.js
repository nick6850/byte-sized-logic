// Last updated: 2/22/2026, 5:11:30 AM
1/**
2 * @param {string} s
3 * @param {number} k
4 * @return {number}
5 */
6var characterReplacement = function(s, k) {
7    let l = 0;
8    let freq = Array(26).fill(0);
9    let maxF = 0;
10    let res = 0;
11
12    for (let r = 0; r < s.length; r++) {
13
14        // добавляем новый символ в текущее окно
15        const idxR = s[r].charCodeAt(0) - 65;
16        freq[idxR]++;
17
18        // обновляем самый частотный символ для данного окна
19        maxF = Math.max(maxF, freq[idxR]);
20
21        // r-l+1 <= текущее окно
22        // отсекаем невалидные окна
23        while (r - l + 1 - maxF > k) {
24            // делаем окно снова валидным
25            // синхронизируем для него количество символов
26            const idxL = s[l].charCodeAt(0) - 65;
27            freq[idxL]--;
28            l++;
29        }
30
31        // фиксируем лучший ответ
32        res = Math.max(res, r - l + 1);
33    }
34
35    // maxF + k не подходит, например в 'AAAA' при k = 2 получится 6 вместо 4
36    return res;
37}