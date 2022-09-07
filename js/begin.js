// варианты названий переменных
// camelCase
// snake_case
// UPPER_SNAKE_CASE
// kebab-case
// PascalCase

'use strict';
//типы данных
let number = 5; // Number
console.log(4/0); // Infinity 
console.log('text' * 9); //NaN

let string = 'Alex'; // String

let bool = true; // Boolean true/false

// null чего-то не существует
//console.log(something); //null / something is not defined

// undefined что-то есть, но не имеет значения
let word;
console.log(word); // undefined

// Object Объект — коллекция данных, или комплексные типы данных
const obj = {
    name: 'Alex',
    age: 39
};

console.log(obj.name);
console.log(obj['name']);

// Масив это частный случай объекта
let array = ['apple', 'orange', 'nut', 6, 'potato', {}, [], 10];
console.log(array[1]);
array[11] = 'empty'; // Образуются пустоты в масиве, 
//так как в масиве последний елемент иммет индекс 7, а мы добавлем слудующий елемент на 11 индекс
console.log(array);

const arrObj = {
    'a': 1,
    'c': 3,
    'd': 4,
    abc: {
        defe: {
            x: 0,
            y: 10
        }
    }
};

arrObj.b = 1234;
arrObj['e'] = 5;
const test = 'name';
arrObj[test] = 'Alex';

console.log(arrObj.e);
console.log(arrObj['b']);
console.log(arrObj);

//Простое общение с пользователем

//alert('Hello');

// const result = confirm('Continue?');
// console.log(result);

// const answer = prompt('Continue?', 'Yes'); 
// // Ответ пользователя всегда имеет тип данных строка
// // с помощью символа + можно переопределить строку в число +prompt('Введите чило', '10');
// // console.log(typeof(answer)); // number
// console.log(answer);
// console.log(typeof(answer)); // Узнать тим данных typeof()

// const answers = [];

// answers[0] = prompt('Your name?', '');
// answers[1] = prompt('Your surname?', '');
// answers[2] = prompt('Your age?', '');

// document.write(answers);

//Интерполяция

const category = 'toys';

console.log('http://someurl.biz/' + category + '/'); // метод конкантенации строк
console.log(`http://someurl.biz/${category}/`); // Метод интерполяции

const user = 'Alex';
console.log(`Helo ${user}!`);

// Операторы

console.log('arr' + " - object");

console.log(4 + +'4'); // символ + перед строкой называется унарным плюсом и переводит строку в число

// Инкремент и декремент
// Может быть префиксная и постфиксная форма 

let incr = 10,
    decr = 10;

incr++;
decr--;
++incr;
--decr;
console.log(incr, decr);

// Постфиксная форма сначала возвращает старое значение и после увеличивает или уменьшает число на единицу
console.log(incr++, decr--); // поэтому здесь не произойдет изменений, так как в консоль сразу вернутся старые значения
console.log(incr, decr); 
console.log(++incr, --decr); // префисная форма работает наоборот, поэтому в консоль выведется измененный результат

// Остаток от деления
console.log(5 % 2);

// Проверка на равенство и нераверство
console.log(8 == '8'); // true потому что сравнивается только значение, а не тип
console.log(8 === '8'); // false строгое равенство сравниваем и значени и тип данных
console.log(6 != '6'); // false потому что сравнивается только значение, а не тип
console.log(6 !== '6'); // true строгое неравенство сравниваем и значени и тип данных

// ЛОГИЧЕСКИЕ операторы сравнения && И,  || ИЛИ
const isChecked = false,
      isClose = false,
      isSend = true;
console.log(isChecked && isClose && isSend); // true если все операторы true (может быть больше двух)
console.log(isChecked || isClose); // true если хотя бы один оператор true

// Оператор отрицания ! инвертирует true в false и наоборот
console.log(isChecked || !isClose);

console.log('test commit');