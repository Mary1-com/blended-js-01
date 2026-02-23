// Завдання 1:

// 1 - отримай body елемент і виведи його в консоль;

const body = document.querySelector('body');
console.log(body)
    
// 2 - отримай елемент id="title" і виведи його в консоль ----h1;
    
const titleById = document.querySelector('#title')
console.log(titleById);

// 3 - отримай елемент class="list" і виведи його в консоль;

const listByClass = document.querySelector('.list')
console.log(listByClass);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

const elByAttr = document.querySelectorAll('[data-topic]');
console.log(elByAttr);


// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const firstElByAttr = document.querySelector('[data-topic]');
console.log(firstElByAttr);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

// 1
// const lastElById = elByAttr[elByAttr.length-1]
// console.log(lastElById);

// 2
const lastElById = listByClass.lastElementChild;
console.log(lastElById);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

const susidH1 = titleById.nextElementSibling;
console.log(susidH1);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

const h3 = document.querySelectorAll('h3')
console.log(h3);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

h3.forEach((el) => el.classList.add('active'));

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

const navigation = document.querySelector('[data-topic=navigation]');
console.log(navigation);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

navigation.style.backgroundColor = 'yellow';

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

navigation.querySelector('p').textContent = "Я змінив тут текст!";

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = "manipulation";
const elem = document.querySelector(`[data-topic = ${currentTopic}]`);
console.log(elem);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

elem.style.backgroundColor = 'blue';

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

const head = document.querySelector('.completed');
console.log(head);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

head.parentNode.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

const head1 = document.querySelector('h1');
const ppp = document.createElement('p');
ppp.textContent = "Об'єктна модель документа (Document Object Model)";
head1.after(ppp);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// const newElemLi = document.createElement('li');
// const newElemP = document.createElement('p');
// const elemH3 = document.createElement('h3');
    
// elemH3.textContent = "Властивість innerHTML";
// newElemP.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

// newElemLi.append(elemH3, newElemP);
// listByClass.append(newElemLi);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

const markup = `
    <li>
        <h3>Властивість innerHTML</h3>
        <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
        </p>
    </li>`;

listByClass.insertAdjacentHTML('beforeend', markup);

// 20 - очисти список

listByClass.innerHTML = ('');

//!============================================================================

// Завдання 2:

// Створіть контейнер div (з класом number-container) в HTML-документі

const div = document.querySelector('.number-container');

// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// let arrayElements = [];
// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// for (let i = 0; i < 100; i++) {
//     const capibara = document.createElement('div');
//     capibara.classList.add('number');
//     const number = randomNumber();
//     capibara.textContent = number;
//     if (number % 2 === 0) {
//         capibara.classList.add('even');
//     } else {
//         capibara.classList.add('odd');
//     }
//     arrayElements.push(capibara);
// }

// div.append(...arrayElements);

//... - розпиляли масив у рядок







// Завдання 3:

// Form Events, Input, Focus, Blur and Submit.
// Використовуй шаблон форми з файлу html.
// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

const input = document.querySelector('.js-username-input');

// 1 var - input
// input.addEventListener('input', handlerInput);

// function handlerInput() {
//     const value = input.value.length;
   
//     input.classList.toggle('error', value > 6)
//     input.classList.toggle('success', value <= 6)
//     }

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// input.addEventListener('focus', handlerEvent);
// function handlerEvent() {
//     const value = input.value.length;
   
//     input.classList.toggle('error', value > 6)
//     input.classList.toggle('success', value <= 6)
//     }

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// input.addEventListener('blur', handlerEvent);
// function handlerEvent() {
//     const value = input.value.length;
   
//     input.classList.toggle('error', value > 6)
//     input.classList.toggle('success', value <= 6)
//     }

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const form = document.querySelector('form');
form.addEventListener('submit', handlerSubmit);
function handlerSubmit(e) {
    e.preventDefault();
    const { accept, userName } = e.target.elements;

    if (userName.value.trim() === '' || !accept.checked) {
        alert('Введіть значення');
        return;
    } 

    const data = {name: userName.value};
    console.log(data);
    e.currentTarget.reset();
    document.querySelector('span').textContent = 'Anonimus';
}
input.addEventListener('input', handlerAnonimus);
function handlerAnonimus() {
    const name = input.value.trim();

    if (name !== '') {
        document.querySelector('span').textContent = name;
    } else {
        document.querySelector('span').textContent = 'Anonimus';
    }
}
      
    // const value = input.value.length;
    // input.classList.toggle('error', value > 6)
    // input.classList.toggle('success', value <= 6

// Завдання 4:

 // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const box = document.querySelector('.box');
const btnDecr = document.querySelector('#decrease');
const btnIncr = document.querySelector('#increase');

let curSize = 100;

box.style.width = `${curSize}px`;
box.style.height = `${curSize}px`;

btnDecr.addEventListener('click', () => {
    if (curSize > 20) {
        curSize -= 20;
        updateBoxSize();
    }
});

btnIncr.addEventListener('click', () => {
    curSize += 20;
    updateBoxSize();
});

function updateBoxSize() {
    box.style.width = `${curSize}px`;
    box.style.height = `${curSize}px`;
};