class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class SortedLinkedList {
  constructor() {
    this.head = new Node();
    this.length = 0;
  }

  appendWithAutoSort = (value) => {
    const newNode = new Node(value);

    let current = this.head;

    while (current.nextNode !== null && value > current.nextNode.value) {
      current = current.nextNode;
    }

    this.length++;
    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
  }

  appendWithoutSort = (value) => {
    const newNode = new Node(value);

    let current = this.head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    this.length++;
    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
  }

  sort = () => {
    const newHead = new Node();

    let current = this.head;


    while (current.nextNode !== null) {
      let prevNode = current;

      let maxNode = current.nextNode;
      let maxValue = current.nextNode.value;

      while (maxNode.nextNode !== null) {
        if (maxNode.nextNode.value > maxValue) {
          maxValue = maxNode.nextNode.value;
          prevNode = maxNode;
        }

        maxNode = maxNode.nextNode;
      }

      maxNode = prevNode.nextNode;

      prevNode.nextNode = maxNode.nextNode;
      maxNode.nextNode = newHead.nextNode;
      newHead.nextNode = maxNode;
    }

    this.head = newHead;
  }

  // TODO: Остальные методы реализовываются по аналогии с linkedList

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

const sortedLinkedList = new SortedLinkedList();
// sortedLinkedList.appendWithAutoSort(10);
// sortedLinkedList.appendWithAutoSort(3);
// sortedLinkedList.appendWithAutoSort(30);
// sortedLinkedList.appendWithAutoSort(27);

sortedLinkedList.appendWithoutSort(2);
sortedLinkedList.appendWithoutSort(1);
sortedLinkedList.appendWithoutSort(7);
sortedLinkedList.appendWithoutSort(5);
sortedLinkedList.sort();

console.log(sortedLinkedList.toString());


module.exports = { SortedLinkedList };
