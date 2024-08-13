/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються у змінній values у вигляді рядка.
? Значення гарантовано розділені пробілом.
 */

/*
1. розібʼємо рядок на масив двох значень за допомогою методу split(" ")
2. приводимо значення до числового типу
3. перемножаємо для отримання площі

*/

// const values = '8 11';
// const valuesArr = values.split(' ');
// const result = Number(valuesArr[0]) * Number(valuesArr[1]);

// console.log('result:', result);

/*
? Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
*/

/*
1. ініціалізуємо змінну-накопичувач суми let sum = 0;
2. запустити цикл для перебору значень масиву for of
3. робимо перевірку на те, чи являється поточне значення масиву парним, якщо так то додаємо це число до змінної sum
*/

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// let sum = 0;

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     console.log(number);
//     sum += number;
//   }
// }

// console.log('SUM =', sum);

/*
? Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
? У змінних names та phones зберігаються рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках вказують на
? відповідність. Кількість імен та телефонів гарантовано однакова.
*/

/*
1. перетворюємо рядки на масиви імен і масив телефонів за допомогою методу split(",")
2. запускаємо цикл for для перебору будь-якого масиву, нам не важливо який саме перебирається, бо довжина у них однакова і ми працюємо з індексами
3. вивдомо в консоль поточне імʼя та телефон по однаковому індексу
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]} - ${phonesArr[i]}`);
// }

/*
? Напиши скрипт, який «розгортає» рядок (зворотний порядок літер)
? та виводить її в консоль.
*/

/*
1. створюємо змінну куди будемо накопичувати букви у зворотньому порядку
2. запускаємо цикл на перебір рядку з кінця
3. накопичувати символи в змінну перевернутого рядку

*/

// const string = 'Hello world!'; // !dlrow olleH
// let reversedString = '';

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   reversedString += string[i];
// }

// console.log(reversedString);

// console.log(string.split("").reverse().join(""));

/*
? Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
? для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
*/

/*
    1. створюємо змінну для найменшого числа масиву та ініціалізуємо її значенням першого елементу масиву з яким будуть майбутні порівняння
    2. запускаємо цикл фор який починається з 1 індексу (тому що 0 ми вже використали в 1му кроці)
    3. робимо перевірку порівнюючи поточний елемент з нашим мінімальним якщо поточний менше за мінімальни - він стає новим мінімальним
*/

// const values = [17, -10, 94, -30, 1, 23, -20];

// let min = values[0];

// for (let i = 1; i < values.length; i += 1) {
//   if (values[i] < min) {
//     min = values[i];
//   }
// }

// console.log('MIN:', min);

/*
? У нас є декілька масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/

/*
1. використовуючи метод concat поєднуємо усі масиви в 1 спільний
2. створюємо змінну для накопичення суми
3. запускаємо цикл для перебору масиву for of
4. додаємо поточний елемент масиву до загальної суми
*/

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];

// const salaries = managerSalaries.concat(developersSalaries);

// let total = 0;

// for (const salary of salaries) {
//   total += salary;
// }

// console.log('TOTAL:', total);
