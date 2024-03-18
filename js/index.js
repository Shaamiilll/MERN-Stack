// console.log('hello world');

// map
// const res = arr.map((value) => {
//   return value * 2;
// });

// arr.forEach((value) => {
//     console.log(value * 10);
// });

// GENERATOR FUNCTION
// function* GeneratorFunction (){
//     for(let i=1;i<10;i++){
//         yield i
//     }
// }

// let iterator = GeneratorFunction()
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// CALLBACK
// function greet(name, hy) {
//     console.log("Hello, " + name + "!");
//     if (hy && typeof hy === "function") {
//       hy();
//     }
//   }

//   function sayGoodbye() {
//     console.log("Goodbye!");
//   }

//   greet("Alice", sayGoodbye);

// const variable1 = false;
// const variable2 = undefined;
// const variable3 = '';

// // Using the nullish coalescing operator to provide default values
// const result1 = variable1 ?? 'default value'; // result1 will be 'default value'
// const result2 = variable2 ?? 'default value'; // result2 will be 'default value'
// const result3 = variable3 ?? 'default value'; // result3 will be '' (empty string, as variable3 is not null or undefined)
// const user = {
//     name: 'John',
//     address: {
//       city: 'New York',
//       zipcode: '10001'
//     }
//   };

//   // Accessing nested properties without optional chaining
//   const cityWithoutOptionalChaining = user.address.city; // 'New York'
//   const streetWithoutOptionalChaining = user.address.street; // undefined (property does not exist)

//   // Accessing nested properties with optional chaining
//   const cityWithOptionalChaining = user.address?.city; // 'New York'
//   const streetWithOptionalChaining = user.address?.street; // undefined (property does not exist)

//   console.log(cityWithoutOptionalChaining);
//   console.log(streetWithOptionalChaining);

// try {
//     // Code that may throw an exception
//     const result = 10 /0; // Division by zero
//     console.log(result); // This line will not be executed
//   } catch (error) {
//     // Code to handle the exception
//     console.error('An error occurred:', error.message);
//   } finally {
//     // Code to be executed regardless of whether an exception occurs
//     console.log('Finally block executed');
//   }

// Original array
// const a = [1, 3, 5, 74, 4];

// // Shallow copy using slice() method
// const shallowCopy = a.slice();

// // Modify the shallow copy
// shallowCopy[0] = 10;

// console.log(a); // Output: [1, 3, 5, 74, 4]
// console.log(shallowCopy); // Output: [10, 3, 5, 74, 4]

// const words = ['hello', 'world'];
// const letters = words.flatMap(word => word.split(''));
// console.log(letters); // Output: ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// const myWeakMap = new WeakMap();

// let keyObject = {};
// let keyFunction = function() {};

// myWeakMap.set(keyObject, 'value1');
// myWeakMap.set(keyFunction, 'value2');

// // keyObject = "shmil" // The keyObject is no longer reachable

// // The value associated with keyObject will be garbage collected

// console.log(myWeakMap.get(keyFunction)); // Output: 'value2'
// console.log(myWeakMap.get(keyObject)); // Output: 'value2'

// call

// let nameObj = {
// 	name: "Tony"
// }

// let PrintName = {
// 	name: "steve",
// 	sayHi: function (age) {
// 		console.log(this.name + " age is " + age);
// 	}
// }

// PrintName.sayHi.call(nameObj, 42);

// let arr =[1,4,56,23,1,43,78]

// let res =
// console.log(res);

// function createPerson(name, age) {
//     return {
//       name: name,
//       age: age,
//       greet: function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//       }
//     };
//   }
//   const person1 = createPerson('Alice', 30);
// const person2 = createPerson('Bob', 25);

// person1.greet();

// function divide(a, b) {
//     if (b === 0) {
//       throw new Error('Division by zero is not allowed.');
//     }
//     return a / b;
//   }

//   try {
//     console.log(divide(10, 2)); // Output: 5
//     console.log(divide(10, 0)); // This will throw an exception
//     console.log(divide(20, 4)); // This line won't be executed
//   } catch (error) {
//     console.error('An error occurred:', error.message); // Output: An error occurred: Division by zero is not allowed.
//   }

// Creating a WeakSet
// let weakSet = new WeakSet();

// // Creating some objects
// let obj1 = {name:"shamil"};
// let obj2 = {};

// // Adding objects to the WeakSet
// weakSet.add(obj1);
// weakSet.add(obj2);

// // Checking if an object is in the WeakSet
// console.log(weakSet.has(obj1)); // Output: true

// // Checking again
// console.log(weakSet.has(obj1)); // Output: false

// function add(x){
//     return x+2
// }

// function multiply(x){
//     return x*3
// }

// function composition(x){
//     return multiply(add(x))
// }

// console.log(composition(2));

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promise 1 resolved'), 1000);
//   });

//   let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('Promise 2 rejected'), 500);
//   });

//   Promise.race([promise1, promise2])
//     .then(result => {
//       console.log(result);
//     })
//     .catch(error => {
//       console.error(error);
//     });

// Create a buffer from a string
// let hello ='eloooo'
// const buf = Buffer.from(hello, 'utf8');

// // Print buffer contents
// console.log(buf); // Output: <Buffer 68 65 6c 6c 6f>

// // Convert buffer to string
// const str = buf.toString('utf8');
// console.log(str); // Output: "hello"

// // Access individual bytes in the buffer
// console.log(buf[0]); // Output: 104 (ASCII code for 'h')
// console.log(buf[1]); // Output: 101 (ASCII code for 'e')
// console.log('Start');

// process.nextTick(() => {
//   console.log('Process nextTick callback');
// });

// setTimeout(() => {
//   console.log('setTimeout callback');
// }, 0);

// console.log('End');

// const hy = new Promise((resolve, reject) => {
//   // Asynchronous operation
//   setTimeout(() => {
//     const randomNumber = Math.random();
//     if (randomNumber > 0.5) {
//       resolve(randomNumber);
//     } else {
//       reject("Random number is too low");
//     }
//   }, 1000);
// });

// const newPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let a=false
//       if(a){
//         resolve("sucess")
//       }else{
//         reject("Failed")
//       }
//     }, 1000);
//   });

//   newPromise
//     .then((data) => {
//       console.log( data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

// IIFE
// var a = 5;
// (function (a) {
//   var name = "Shamil";
//   console.log("Hello " + name + ", age " + a);
// })(10);

// let x = 5;

// // Post-increment: value used first, then incremented
// let y = x++; // y = 5 (original value of x), x = 6 (incremented value)

// console.log("Post-increment:");
// console.log("y:", y); // Output: 5
// console.log("x:", x); // Output: 6

// // Reset x
// x = 5;

// // Pre-increment: value incremented first, then used
// let z = ++x; // z = 6 (incremented value of x), x = 6 (incremented value)

// console.log("Pre-increment:");
// console.log("z:", z); // Output: 6
// console.log("x:", x); // Output: 6

// const person = {
//     name: "John",
//     age: 30,
//     "favorite color": "blue" // Property name with spaces
//   };

//   console.log(person.name); // Output: John
//   console.log(person.age); // Output: 30
//   console.log(person["favorite color"]); // Output: blue

// setImmediate(() => {
//     console.log('This will be executed in the next event loop cycle');
//   });

// setTimeout(() => {
//     console.log("set time out");
// }, 0);

// function myCallback() {
//     console.log('This will be executed in the next iteration of the event loop');
//   }

//   process.nextTick(myCallback);


// const fs = require("fs");
// const data = "Hello, world!";
// const filePath = "text.txt";

// fs.writeFileSync(filePath, data, (err) => {

//   if (err) {
//     console.error("Error writing to file:", err);
//   } else {
//     console.log("Data has been written to", filePath);
//   }
// });
