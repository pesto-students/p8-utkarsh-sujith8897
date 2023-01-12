```js
function createIncrement(){
    let cnt = 0;
    function increment() {
        cnt++;
    }
    let msg = `Count is ${cnt}`;
    function log() {
        console.log(msg);
    }
    return [increment, log];
}  

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();
```

```
output: Count is 0
```

For the above code, the output will be `0` because the `msg` variable is computed only once. 

When the `increment` function is called, the `cnt` value increases, but the `msg` value is not updated. 

If you declare the `msg` variable inside the `log` function instead, then every time we print `msg`, we will get the updated value of `cnt`.