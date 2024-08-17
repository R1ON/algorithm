class Node {
    constructor(value, nextNode = null, prevNode = null) {
        this.value = value;
        this.nextNode = nextNode;
        this.prevNode = prevNode;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node();
        this.tail = null;
        this.length = 0;
    }

    appendStart = (value) => {
        this.length++;

        if (this.head.nextNode === null) {
            const newNode = new Node(value, null, this.head); 

            this.head.nextNode = newNode;
            this.tail = newNode;
            return;
        }

        const newNode = new Node(value, this.head.nextNode, this.head); 
        this.head.nextNode.prevNode = newNode;
        this.head.nextNode = newNode;
    }

    appendEnd = (value) => {
        this.length++;

        if (this.tail === null) {
            const newNode = new Node(value, null, this.head);
            this.head.nextNode = newNode;
            this.tail = newNode;
            return;
        }

        const newNode = new Node(value, null, this.tail);
        this.tail.nextNode = newNode;
        this.tail = newNode;
    }

    appendAfterValue = (target, value) => {
        let current = this.head.nextNode;

        while (current !== null) {
            if (current.value === target) {
                const newNode = new Node(value, current.nextNode, current);

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
                if (current.nextNode === this.tail) {
                    this.tail = current === this.head ? null : current;
                }

                if (current.nextNode.nextNode !== null) {
                    current.nextNode.nextNode.prevNode = current;
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

const linkedList = new DoublyLinkedList();
linkedList.appendStart(20);
linkedList.appendStart(10);
linkedList.appendEnd(30);
linkedList.appendEnd(40);
linkedList.appendAfterValue(10, 11);

console.log(linkedList.toString());

linkedList.deleteNode(30);

console.log('length:', linkedList.length);
console.log('head:', linkedList.head);
console.log('tail:', linkedList.tail);

console.log(linkedList.toString());


module.exports = { DoublyLinkedList };
