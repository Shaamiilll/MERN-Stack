class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const NewNode = new Node(value);

    if (!this.head) {
      this.head = NewNode;
    } else {
      this.tail.next = NewNode;
      NewNode.previous = this.tail;
    }
    this.tail = NewNode;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const myList = new LinkedList();
myList.append(1);
myList.append(5);
myList.append(4);
myList.append(2);

myList.print();
