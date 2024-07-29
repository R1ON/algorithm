class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

// Мы можем самостоятельно связать ноды,
// либо воспользоваться LinkedList, для автоматического связывания
// const node1 = new Node(10);

// const node2 = new Node(20);
// node1.nextNode = node2;

// const node3 = new Node(30);
// node2.nextNode = node2;

// console.log(node1.value);
// console.log(node1.nextNode.value);

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append = (value) => {
        if (this.head === null) {
            this.head = new Node(value);
            this.length = 1;
            return;
        }

        let current = this.head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }

        current.nextNode = new Node(value);
        this.length++;
    }

    toString = () => {
        const values = [this.head.value];

        let current = this.head;
        while (current !== null) {
            current = current.nextNode;

            if (current) {
                values.push(current.value);
            }
        }

        return `[${values.join(', ')}]`;
    }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
console.log(linkedList.length);
console.log(linkedList.toString());

