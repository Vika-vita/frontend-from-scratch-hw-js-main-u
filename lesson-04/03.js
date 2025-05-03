/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findCommonElements(array1, array2) {
    let finalReport=[];
        for (let i = 0; i < array1.length; i++) {
            if (array2.includes(array1[i])&& !finalReport.includes(array1[i])) {
                finalReport.push(array1[i]);
            }
        }
        return finalReport;
}

    // return array1.filter((item, index) =>
    //     array2.includes(item) && array1.indexOf(item) === index

console.log(findCommonElements([1, 2, 1, 2, 3, 4, 5, 2, 4, 1, 1, 6],[1,2,5,8,3,7,9]));



