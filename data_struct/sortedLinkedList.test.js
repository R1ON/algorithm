const { SortedLinkedList } = require('./sortedLinkedList');
const assert = require('assert');

const sortedLinkedList = new SortedLinkedList();

// Тест appendWithAutoSort
sortedLinkedList.appendWithAutoSort(10);
assert.strictEqual(sortedLinkedList.length, 1);
assert.strictEqual(sortedLinkedList.head.nextNode.value, 10);

sortedLinkedList.appendWithAutoSort(3);
assert.strictEqual(sortedLinkedList.length, 2);
assert.strictEqual(sortedLinkedList.head.nextNode.value, 3);
assert.strictEqual(sortedLinkedList.head.nextNode.nextNode.value, 10);

sortedLinkedList.appendWithAutoSort(30);
assert.strictEqual(sortedLinkedList.length, 3);
assert.strictEqual(sortedLinkedList.head.nextNode.nextNode.nextNode.value, 30);

sortedLinkedList.appendWithAutoSort(27);
assert.strictEqual(sortedLinkedList.length, 4);
assert.strictEqual(sortedLinkedList.head.nextNode.nextNode.nextNode.value, 27);
assert.strictEqual(sortedLinkedList.head.nextNode.nextNode.nextNode.nextNode.value, 30);

// Тест appendWithoutSort
const unsortedList = new SortedLinkedList();
unsortedList.appendWithoutSort(5);
assert.strictEqual(unsortedList.length, 1);
assert.strictEqual(unsortedList.head.nextNode.value, 5);

unsortedList.appendWithoutSort(1);
assert.strictEqual(unsortedList.length, 2);
assert.strictEqual(unsortedList.head.nextNode.value, 5);
assert.strictEqual(unsortedList.head.nextNode.nextNode.value, 1);

unsortedList.appendWithoutSort(7);
assert.strictEqual(unsortedList.length, 3);
assert.strictEqual(unsortedList.head.nextNode.nextNode.nextNode.value, 7);

unsortedList.sort();
assert.strictEqual(unsortedList.head.nextNode.value, 1);
assert.strictEqual(unsortedList.head.nextNode.nextNode.value, 5);
assert.strictEqual(unsortedList.head.nextNode.nextNode.nextNode.value, 7);


assert.strictEqual(unsortedList.toString(), '[1, 5, 7]');
console.log('All tests passed');
