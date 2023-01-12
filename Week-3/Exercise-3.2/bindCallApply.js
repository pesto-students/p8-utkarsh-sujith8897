function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

let person1 = { name: "John" };
let person2 = { name: "Jane" };

// Using call
greet.call(person1, "Hello,", "!"); // "Hello, John!"
greet.call(person2, "Hi,", "."); // "Hi, Jane."

// Using bind
let greetJohn = greet.bind(person1, "Hello,", "!");
greetJohn(); // "Hello, John!"

let greetJane = greet.bind(person2);
greetJane("Hi,", "."); // "Hi, Jane."

// Using apply
greet.apply(person1, ["Hello,", "!"]); // "Hello, John!"
greet.apply(person2, ["Hi,", "."]); // "Hi, Jane."
