class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0  ;
  }
  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "UnderFlow";
    }
    return this.items.pop();
  }
  middle(){
    if(this.isEmpty()){
        return "Stack is Empty"
    }else{
        const middleIndex = Math.floor(this.items.length/2)
        return this.items[middleIndex]
    }
  }

}

const myStack = new Stack();
myStack.push(10)
myStack.push(20)
myStack.push(30)
myStack.push(40)
myStack.push(50)

myStack.pop()


console.log(myStack.items)
// console.log(myStack.middle());



