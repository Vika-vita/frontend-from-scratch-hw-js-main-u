/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/
//let char =`str`; //удвоить каждый символ


function doubleEachCharacter(str) {
    for (let i = 0; i < str.length; i++);
    if (str.split(""))
        return Array.from(str, char => char + char).join('');
}
console.log(doubleEachCharacter("helo"));

// function doubleEachCharacter(str) {
// return str.split("").reduce((acc,char)=>{
//     return acc += char+ char
// }, [])}

// function doubleStringChars(str) {
//     return str.split('').map(char => char + char).join('');
// }

// function doubleStringChars(str) {
//     return Array.from(str, char => char + char).join('');
// }
