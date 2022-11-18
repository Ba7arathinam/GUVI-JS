class Queue {
    constructor(limit) {
      this.items = [];
      this.maxSize = limit;
    }
     enqueue(value) {
       if(this.items.length == this.maxSize) {
         console.log("Stack is Full");
         return;
       }
       this.items.push(value);
       console.log("Enqueued -> " + value);
     }
  
     isEmpty() {
       return this.items.length == 0;
     }
  
     dequeue() {
       if(this.isEmpty()) {
          console.log("Stack is Empty");
          return -1;
       }
       return this.items.shift();
     }
  
     front() {
       if(this.isEmpty()) {
          console.log("Stack is Empty");
          return -1;
       }
       return this.items[0];
     }
  
     rear() {
       if(this.isEmpty()) {
          console.log("Stack is Empty");
          return -1;
       }
       return this.items[this.items.length-1];
       //[1,2,3,4,5,6,7] -> 7
       // 0 1 2 3 4 5 6
     }
  
     size() {
       return this.items.length;
     }
  
     print() {
       while(!this.isEmpty()) {
         console.log(this.dequeue());
       }
     }
  }
  
  
  var q = new Queue(10);
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  q.enqueue(5);
  console.log(q.dequeue());
  q.enqueue(6);
  q.enqueue(7);
  q.enqueue(8);
  console.log(q.dequeue());
  q.enqueue(9);
  q.enqueue(10);
  q.enqueue(11);
  q.enqueue(12);
  q.print();