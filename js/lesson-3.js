
// Завдання 1:
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// 1
// const newNumbers = numbers.map(number => number ** 2);
// console.log(newNumbers);

// 2
// const powNumbers = (array, pow) => array.map(el => el ** pow);
// console.log(powNumbers(numbers, 2));

// 3
// const powNumbers = (array, pow) => array.map(el => Math.pow(el,pow));
// console.log(powNumbers(numbers, 2));

// Завдання 2:
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// 1
// const allValues = data.flatMap(obj => obj.values);
// console.log(allValues);

// 2
// const allValues = (array) => array.flatMap(obj => obj.values);
// console.log(allValues(data));

// Завдання 3:

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// // 1
// const isYang = people.some(person => person.age < 20);
// console.log(isYang);

// 2
// const checkAge = (array, num) => array.some(obj => obj.age < num);
// console.log(checkAge(people, 20));
 
// Завдання 4:

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// // 1
// const isNuM = numbers.every(el => el % 2 === 0);
// console.log(isNuM);

// 2
// const checkNum = (array, val) => array.every(el => el % val === 0);
// console.log(checkNum(numbers, 2));

// 3
// const checkNum = (array, val) => array.every(el => {
//   console.log(el)  // - вивести для наглядної перевірки
//   return el % val === 0
// });
// console.log(checkNum(numbers, 2));

// Завдання 5:

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// 1
// const firstNum = numbers.find(num => num % 2 !== 0);
// console.log(firstNum);

// 2
// const firstNum = (array, val) => array.find(el => el % val !== 0);
// console.log(firstNum(numbers, 2));

// Завдання 6:

// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// 1
// const newArray = numbersArray.toSorted((a, b) => a - b);
// console.log(newArray);

// const newArray = (array) => array.toSorted((a, b) => a - b);
// console.log(newArray(numbersArray));


// Завдання 7:

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// 1
// const newString = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(newString);
// 2
// const sortedStr = (arr) => arr.toSorted((a, b) => a.localeCompare(b));
// console.log(sortedStr(stringArray));

// Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
// 1
// const newUsersAsd = users.toSorted((a, b) => a.age - b.age);
// console.log(newUsersAsd);
// 2
// const newUsersAsd = (arr) => arr.toSorted((a, b) => a.age - b.age);
// console.log(newUsersAsd(users));

// Завдання 9:

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]
// 1
// const newUsers = users.filter(obj => obj.age > 20);
// console.log(newUser);
// 2
// const checkAge =(arr, val)=> arr.filter(obj => obj.age > val);
// console.log(checkAge(users, 20));

// Завдання 10:

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sumNum = numbers.reduce((sum, elem) => sum + elem, o);
// console.log(sumNum);

// const sumArr = (arr, num) => arr.reduce((sum, elem) => sum + elem, 0);
// console.log(sumArr(numbers,0));

// Завдання 11:

 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод subtract - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
// 
// class Calculator {
//   constructor () {
//     this.result;
//   }

//   number(value) {
//     this.result = value;
//     return this;
//   }

//   getResult() {
//     return this.result;
//   }
 
//   add (value) {
//     this.result += value;
//     return this;
//   }
  
//   subtract(value) {
//     this.result -= value;
//     return this;
//   }

//   divide (value) {
//     if (value !== 0) {
//       this.result /= value;
//     } else {
//       console.log('На 0 ділити не можна');
//     }
//     return this;
//   }

//   multiply (value) {
//     this.result *= value;
//     return this;
//   }
  
// }
 
//  // Приклад використання:
// const calc = new Calculator();


// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult() // Отримуємо результат: 24
//   ;

//   console.log(result); // 24

// Завдання 12:
 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
  
  //  constructor(login, email) {
  //    this.#login = login;
  //    this.#email = email;
  // }

//   get login() {
//     return this.#login;
//   }
  
//   set login(log) {
//     if (log.trim !== log ) {
//       this.#login = log;
//     }
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     if (newEmail.trim !== '' && includes('@')) {
//       this.email = newEmail;
//     }
//   }
  
//  }

// const user = new Client();
// user.login = 'Maryna';
// console.log(user.login);
// user.email = 'kihgoeugh'
// console.log(user.email);




// Завдання 13:

  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.
  
class Person {
  constructor(params) {
    this.name = params.name;
    this.age = params.age;
    this.gender = params.age;
    this.email - params.email
  }
  
  getDetails() {
    return this; 
  }


}



const pers = new Person();
console.log(pers);