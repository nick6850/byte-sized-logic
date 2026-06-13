// Last updated: 6/13/2026, 5:55:06 PM
1function clearDigits(s) {
2    const stack = [];
3    for (const ch of s) {
4        if (ch >= '0' && ch <= '9') {
5            stack.pop();
6        } else {
7            stack.push(ch);
8        }
9    }
10    return stack.join('');
11};