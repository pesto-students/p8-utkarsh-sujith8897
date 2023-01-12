const getNumber = new Promise((Resolve, Reject) => {
  let num = Math.floor(Math.random() * 100);
  setTimeout(() => {
    if (num % 5 === 0) Resolve(num);
    Reject(num);
  }, 2000);
});

console.time();
getNumber
  .then((num) => console.log(`Resolve - ${num}`))
  .catch((num) => console.log(`Reject - ${num}`))
  .finally(() => console.log("Finally"));
console.timeEnd();
