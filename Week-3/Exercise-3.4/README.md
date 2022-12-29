```js
function createStack() {
    return {
        items,
        push(item) {
            this.items.push(item)
        },
        pop() {
            return this.item.pop()
        }
    }
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => [10]
stack.item = [10, 100, 1000] // Encapsulation broken!

```

In the above code we have the access for both the function and as well as the `items`.

Through this way we can manipulate the `items` array, which we should not allow.

So in the file `closure.js` i have refactored the code where they can only update the items using those functions and not directly manipulate the items array.