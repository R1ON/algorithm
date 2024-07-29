const { LinkedList } = require('./linkedList');
const assert = require('assert');

const linkedList = new LinkedList();


// appendStart
linkedList.appendStart(10);
assert.strictEqual(linkedList.length, 1);
assert.strictEqual(linkedList.head.nextNode.value, 10);
assert.strictEqual(linkedList.tail.value, 10);

linkedList.appendStart(20);
assert.strictEqual(linkedList.length, 2);
assert.strictEqual(linkedList.head.nextNode.value, 20);
assert.strictEqual(linkedList.head.nextNode.nextNode.value, 10);
assert.strictEqual(linkedList.tail.value, 10);

// appendEnd
linkedList.appendEnd(30);
assert.strictEqual(linkedList.length, 3);
assert.strictEqual(linkedList.tail.value, 30);
assert.strictEqual(linkedList.head.nextNode.nextNode.nextNode.value, 30);

linkedList.appendEnd(40);
assert.strictEqual(linkedList.length, 4);
assert.strictEqual(linkedList.tail.value, 40);
assert.strictEqual(linkedList.head.nextNode.nextNode.nextNode.nextNode.value, 40);

// appendAfterValue
linkedList.appendAfterValue(30, 11);
assert.strictEqual(linkedList.length, 5);
assert.strictEqual(linkedList.head.nextNode.nextNode.nextNode.nextNode.value, 11);
assert.strictEqual(linkedList.head.nextNode.nextNode.nextNode.nextNode.nextNode.value, 40);
assert.strictEqual(linkedList.tail.value, 40);

assert.throws(() => linkedList.appendAfterValue(100, 50), /не найден/);

// deleteNode
linkedList.deleteNode(10);
assert.strictEqual(linkedList.length, 4);
assert.strictEqual(linkedList.head.nextNode.nextNode.value, 30);
assert.strictEqual(linkedList.head.nextNode.nextNode.nextNode.value, 11);

linkedList.deleteNode(40);
assert.strictEqual(linkedList.length, 3);
assert.strictEqual(linkedList.tail.value, 11);

assert.throws(() => linkedList.deleteNode(100), /не найден/);

// toString
assert.strictEqual(linkedList.toString(), '[20, 30, 11]');

console.log('All tests passed');