
class Stack {
    constructor(maxSize) {
      this.item = [];
      this.limit = maxSize;
    }
  
    isEmpty() {
      return this.item.length == 0;
    }
  
    push(element) {
      if(this.item.length == this.limit) {
        console.log("Stack already Full");
        return;
      }
      console.log("Pushed Stack -> " + element);
      this.item.push(element);
    }
  
    pop() {
      if(this.isEmpty()) {
        console.log("Stack is Empty");
        return -1;
      }
  
      return this.item.pop();
    }
  
    top() {
      if(this.isEmpty()) {
        console.log("Stack is Empty");
        return -1;
      }
  
      return this.item[this.item.length-1];
    }
  
    size() {
      return this.item.length;
    }
    
    print() {
      while(!this.isEmpty()) {
        console.log(this.pop());
      }
    }
  
  
  }
  
  var stack = new Stack(10);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  //stack.pop()
  //console.log("Poped -> " + stack.pop());
  stack.push(4);
  stack.push(5);
  stack.push(6);
  stack.push(7);
  stack.push(8);
  stack.push(9);
  stack.push(10);
  stack.push(11);
  //stack.pop()
  //console.log("Poped -> " + stack.pop());
  console.log("Print Stack in Top Dowm")
  stack.print();