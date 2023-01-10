async function doTask1() {
  return "Task 1 Completed";
}

async function doTask2() {
  return "Task 2 Completed";
}

async function doTask3() {
  return "Task 3 Completed";
}

async function AsyncAwait() {
  console.log("=> using async/await");
  const task1 = await doTask1();
  console.log(task1);

  const task2 = await doTask2();
  console.log(task2);

  const task3 = await doTask3();
  console.log(task3);
}

async function* GeneratorFun(task1, task2, task3) {
  yield await task1();
  yield await task2();
  yield await task3();
}

function Generators() {
  console.log("=> using generators");
  const gen = GeneratorFun(doTask1, doTask2, doTask3);
  gen.next().then((val) => console.log(val.value));
  gen.next().then((val) => console.log(val.value));
  gen.next().then((val) => console.log(val.value));
}

async function main() {
  await AsyncAwait(); // using async/await
  Generators(); // using generators
}

main();
