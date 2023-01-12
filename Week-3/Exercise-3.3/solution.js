function createIncrement() {
  let cnt = 0;
  function increment() {
    cnt++;
  }
  function log() {
    let msg = `Count is ${cnt}`;
    console.log(msg);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();
