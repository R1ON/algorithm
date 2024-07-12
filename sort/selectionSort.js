/*
   Сортировка для небольших объемов данных. До +- 10тыс элементов.
   
   Индекс 0 - значение 7
   [7, 8, 3, 4] - Находим минимальный и меняем их местами с текущим индексом
   [3, 8, 7, 4]

   Индекс 1 - значение 8
   [3, 8, 7, 4] - Находим минимальный и меняем их местами с текущим индексом
   [3, 4, 7, 8]

   Индекс 2 - значение 7
   [3, 4, 7, 8] - Находим минимальный и меняем их местами с текущим индексом
   [3, 4, 7, 8]

   Сортировка завершена
*/

function selectionSort(data) {
    const result = [...data];
    
    for (let i = 0; i < result.length - 1; i++) {
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