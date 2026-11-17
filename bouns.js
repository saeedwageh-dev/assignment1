var createCounter = function (init) {
  let count = init;

  function increment() {
    return ++count;
  }

  function reset() {
    return (count = init);
  }

  function decrement() {
    return --count;
  }

  return { increment, reset, decrement };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
