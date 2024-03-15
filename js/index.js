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
  