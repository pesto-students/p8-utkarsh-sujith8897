const Fib = {
  n: 6,
  [Symbol.iterator]() {
    let first = 0,
      second = 1,
      i = 0;
    return {
      next: () => {
        let old = first;
        let current = first + second || 1;
        first = second;
        second = current;
        return { value: old, done: ++i > this.n };
      },
    };
  },
};

for (const x of Fib) {
  console.log(x);
}
