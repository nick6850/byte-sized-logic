// Last updated: 2/15/2026, 4:24:37 PM
1/**
2 * @param {number[]} nums
3 * @return {number[][]}
4 */
5var threeSum = function(nums) {
6    const result = [];
7
8    // сортируем массив, чтобы:
9    // 1) можно было использовать два указателя
10    // 2) корректно обрабатывать дубликаты
11    nums.sort((a, b) => a - b);
12
13    for (let i = 0; i < nums.length - 2; i++) {
14        const num = nums[i];
15
16        // все комбинации с этим числом уже были найдены на предыдущем шаге
17        if (i > 0 && num === nums[i - 1]) continue;
18
19        let left = i + 1;
20        let right = nums.length - 1;
21
22        while (left < right) {
23            const sum = num + nums[left] + nums[right];
24
25            if (sum === 0) {
26                result.push([num, nums[left], nums[right]]);
27
28                // изменяем оба указателя, потому что существует только одна
29                // валидная комбинация с текущими значениями left и right,
30                // и мы её уже нашли
31                left++;
32                right--;
33
34                // если пришли к тем же значениям, которые уже дали результат,
35                // пропускаем их, чтобы не добавить дубликат
36                while (left < right && nums[left] === nums[left - 1]) left++;
37                while (left < right && nums[right] === nums[right + 1]) right--;
38
39            } else if (sum < 0) {
40                // сумма меньше нуля — нужно её увеличить
41                left++;
42            } else {
43                // сумма больше нуля — нужно её уменьшить
44                right--;
45            }
46        }
47    }
48
49    return result;
50}
51