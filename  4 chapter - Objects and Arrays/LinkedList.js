class Node {
  constructor(value, next = null) {
      this.value = value;
      this.next = next;
  }
}

class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }

    add(value) {
      let node = new Node(value, this.head)

      this.head = node;

      console.log(this.head);

      this.size++;
      
      return this;

    }
}


let list = new LinkedList();

list.add('1').add('2');


console.log(list);
