/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/


const array=[2,4,6,1,8,4,8,1,];
let unique = new Set(number)
function findUniqueElements(arr) {
    for (let i = 0; i < arr.length; i++){
       if (arr[i]!==arr[i]);{

       }

    }
}
console.log(findUniqueElements())



/*
    let newarray = new Set (array)
console.log( Array.from(newarray))
*/



/*
const names = ['Karina', 'Ilona', 'Petr', 'Maks', 'Ilona', 'Maks'];
const uniqueNames = new Set(names); // создаём коллекцию уникальных значений
console.log(Array.from(uniqueNames)); // => [ 'Karina', 'Ilona', 'Petr', 'Maks' ]
// преобразуем в массив*/
