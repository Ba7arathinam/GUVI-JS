// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

// Without Tail
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
    var node = new Node(element);
    var curr;

    if(this.head == null) {
        this.head = node;
    } else {
        curr = this.head;
        while(curr.next != null) {
            curr = curr.next;
        }

        curr.next = node;
    }
    this.size = this.size + 1;
    }

    print() {
        var curr = this.head;
        while(curr != null) {
            console.log(curr.element);
            curr = curr.next;
        }
    }
    // 1 -> 2 -> 3 -> 4
    // 4 -> 3 -> 2 -> 1
    reverse() {
        var curr = this.head, next = null, prev = null;

        while(curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next
        }
        this.head = prev;
    }

    insert(idx, v) {
      var newNode = new Node(v);
        var curr = this.head;
        var prev = null;
        for(var i = 1; i < idx; i++) {
          prev = curr;
          curr = curr.next;
        }
        prev.next = newNode;
        newNode.next = curr;
    }
}

console.log("LinkedList");

var list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.print();
console.log("after Inserted");

list.insert(3, 1.5);

list.print();




// console.log("Reversed LinkedList");
// 
// var newHead = list.reverse();
// list.print();







// With Tail
class LinkedListWithTail {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(element) {
    var node = new Node(element);
    var curr;

    if(this.head == null) {
        this.head = node;
        this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size = this.size + 1;
    }

    print() {
        var curr = this.head;
        while(curr != null) {
            console.log(curr.element);
            curr = curr.next;
        }
    }
}

// console.log("LinkedList");

// var list = new LinkedListWithTail();

// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.print();

// jambordLink
// https://jamboard.google.com/d/1Rzw_kLtGFLRAjnh7TabxoYQ2JlBbqddy9b8DD78Q6cM/viewer