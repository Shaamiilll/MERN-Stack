class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        this.items.shift()
    }
}
const NewQueue = new Queue()

NewQueue.enqueue(10)
NewQueue.enqueue(30)
NewQueue.enqueue(20)

NewQueue.dequeue()

console.log(NewQueue.items);