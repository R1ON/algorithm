class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node();
    this.tail = null;
    this.length = 0;
  }

  appendStart = (value) => {
    const newNode = new Node(value);
    this.length++;

    newNode.nextNode = this.head.nextNode;
    this.head.nextNode = newNode;

    if (this.tail === null) {
      this.tail = newNode;
    }
  }

  appendEnd = (value) => {
    const newNode = new Node(value);
    this.length++;

    if (this.tail === null) {
      this.head.nextNode = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.nextNode = newNode;
    this.tail = newNode;
  }

  appendAfterValue = (target, value) => {
    const newNode = new Node(value);

    let current = this.head.nextNode;

    while (current !== null) {
      if (current.value === target) {
        newNode.nextNode = current.nextNode;
        current.nextNode = newNode;

        if (this.tail === current) {
          this.tail = newNode;
        }

        this.length++;
        return;
      }

      current = current.nextNode;
    }

    throw new Error(`'target' = ${target} не найден`);
  }

  deleteNode = (target) => {
    let current = this.head;

    while (current.nextNode !== null) {
      if (current.nextNode.value === target) {
        if (this.tail === current.nextNode) {
          this.tail = current === this.head ? null : current;
        }

        current.nextNode = current.nextNode.nextNode;

        this.length--;
        return;
      }

      current = current.nextNode;
    }

    throw new Error(`'target' = ${target} не найден`);
  }

  toString = () => {
    let current = this.head.nextNode;

    const result = [];

    while (current !== null) {
      result.push(current.value);
      current = current.nextNode;
    }

    return `[${result.join(', ')}]`;
  }
}

// const linkedList = new LinkedList();
// linkedList.appendStart(10);
// linkedList.appendStart(20);
// linkedList.appendEnd(30);
// linkedList.appendEnd(40);
// linkedList.appendAfterValue(30, 11);
// linkedList.deleteNode(10);

// console.log('length:', linkedList.length);
// console.log('head:', linkedList.head);
// console.log('tail:', linkedList.tail);
// console.log(linkedList.toString());


module.exports = { LinkedList };
