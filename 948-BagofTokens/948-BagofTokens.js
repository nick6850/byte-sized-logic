// Last updated: 5/17/2026, 7:04:29 PM
1function bagOfTokensScore(tokens, power) {
2  let maxScore = 0;
3  let score = 0
4  
5  tokens.sort((a, b) => a - b);
6
7  let min = 0;
8  let max = tokens.length - 1;
9
10  while (min <= max){
11    //spend power on min (you get score anyway)
12    if (power >= tokens[min]){
13      score++;
14      power-=tokens[min++];
15      maxScore = Math.max(maxScore, score);
16    } else {
17      if (score > 0){
18        //use score on max to gain most power;
19        power+= tokens[max--]
20        score--;
21      } else {
22        //gameover, no score, no power to kill even min
23        break;
24      }
25    }
26
27    
28  }
29
30  return maxScore;
31}