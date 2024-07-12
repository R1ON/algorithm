function selectionSort(data) {
    const result = [...data];
    
    for (let i = 0; i < result.length; i++) {
        let minIndex = i;
    
        for (let j = i + 1; j < result.length; j++) {
            if (result[j] < result[minIndex]) {
                minIndex = j;
            }
        }
    
        if (i !== minIndex) {
            [result[i], result[minIndex]] = [result[minIndex], result[i]];
        }
    }

    return result;
}

const data = [1, 3, 8, 5, 3, 6, 1];

console.log('sorted: ', selectionSort(data));
console.log('initial: ', data);