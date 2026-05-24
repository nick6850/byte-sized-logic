// Last updated: 5/24/2026, 6:08:20 AM
1class NestedIterator {
2  constructor(nestedList) {
3    this.flat = [];
4    this.index = 0;
5    this.flatten(nestedList);
6  }
7
8  flatten(list) {
9    for (const item of list) {
10      if (item.isInteger()) {
11        this.flat.push(item.getInteger());
12      } else {
13        this.flatten(item.getList());
14      }
15    }
16  }
17
18  next() {
19    return this.flat[this.index++];
20  }
21
22  hasNext() {
23    return this.index < this.flat.length;
24  }
25}