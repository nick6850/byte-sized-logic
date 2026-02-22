// Last updated: 2/22/2026, 6:37:06 PM
1/**
2 * @param {string} s1
3 * @param {string} s2
4 * @return {boolean}
5 */
6var checkInclusion = function(s1, s2) {
7   let l = 0;
8   let needed = s1.length;
9   const charMap = {};
10    
11   for (const char of s1){
12       charMap[char] = (charMap[char] || 0) + 1;
13   }
14   
15    
16   for (let r = 0; r < s2.length; r++){
17       const char = s2[r];
18       charMap[char] = (charMap[char] || 0) - 1;
19       needed--
20       
21       //лишний символ в окне, такое окно никогда не будет валидно
22       while (charMap[char] === -1){
23          charMap[s2[l]]++
24          needed++
25          l++ 
26       } 
27           
28       //если покрыли нужные символы - ура
29       if (needed === 0){
30          return true;
31       }
32   }
33    
34    
35   return false; 
36}