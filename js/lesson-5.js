// =====================================================================
// ЛАБОРАТОРНА РОБОТА №5
// Об'єкт. Методи об'єкта. Масив об'єктів. Деструктуризація об'єктів.
// Callback. Стрілочні функції. Стрілочні функції як колбеки.
// Перебираючі методи масиву
//
// Виконав: Захаров Олег, група ІА-44
// Номер у списку групи: 6, варіант 6
// Кожне завдання оформлене окремою функцією, щоб змінні різних завдань
// не конфліктували між собою. Запуск — кнопками на сторінці.
// =====================================================================


// =====================================================================
// ПРАКТИЧНЕ ЗАВДАННЯ №1
// =====================================================================


// =====================================================================
// 1.1.6. Підтема «Об'єкт». Завдання 6. Додавання властивостей об'єкта
// Створіть об'єкт teacher, який містить ім'я, прізвище та посаду
// викладача. Додайте до об'єкта властивості department (кафедра),
// experience (стаж роботи) та email. Виведіть оновлений об'єкт.
// =====================================================================

function objectTask6() {
    const teacher = {
        firstName: 'Олена',
        lastName: 'Коваленко',
        position: 'доцент',
    };

    console.log('Початковий об\'єкт:', { ...teacher });

    teacher.department = 'Кафедра інформатики та програмної інженерії';
    teacher.experience = 12;
    teacher.email = 'o.kovalenko@kpi.ua';

    console.log('Оновлений об\'єкт:', teacher);
}


// =====================================================================
// 1.1.8. Підтема «Об'єкт». Завдання 8. Динамічний доступ до властивостей
// Створіть об'єкт employee із властивостями name, position, salary.
// Створіть змінну propertyName, значенням якої буде назва однієї
// з властивостей об'єкта. Отримайте значення відповідної властивості,
// використовуючи квадратні дужки.
// =====================================================================

function objectTask8() {
    const employee = {
        name: 'Андрій Мельник',
        position: 'frontend-розробник',
        salary: 45000,
    };

    let propertyName = 'position';
    console.log(`employee["${propertyName}"] = ${employee[propertyName]}`);

    // та сама змінна — інша властивість
    propertyName = 'salary';
    console.log(`employee["${propertyName}"] = ${employee[propertyName]}`);

    // перебір усіх властивостей через змінну
    for (const key in employee) {
        console.log(`${key}: ${employee[key]}`);
    }
}


// =====================================================================
// 1.2.2. Підтема «Методи об'єкта». Завдання 2. Отримання значень властивостей
// Створіть об'єкт product із властивостями title, category, price,
// quantity. Використовуючи метод Object.values(), отримайте масив усіх
// значень властивостей об'єкта. Виведіть результат у консоль.
// =====================================================================

function methodsTask2() {
    const product = {
        title: 'Механічна клавіатура',
        category: 'Периферія',
        price: 3200,
        quantity: 14,
    };

    const values = Object.values(product);
    console.log('Значення властивостей product:', values);
}


// =====================================================================
// 1.2.6. Підтема «Методи об'єкта». Завдання 6. Перевірка наявності власної властивості
// Створіть об'єкт user із властивостями name, email, phone.
// За допомогою методу Object.hasOwn() перевірте наявність властивостей
// email, password та phone. Виведіть результати перевірки.
// =====================================================================

function methodsTask6() {
    const user = {
        name: 'Марія',
        email: 'maria@example.com',
        phone: '+380671234567',
    };

    const keysToCheck = ['email', 'password', 'phone'];

    for (const key of keysToCheck) {
        const result = Object.hasOwn(user, key);
        console.log(`Властивість "${key}": ${result ? 'є' : 'немає'} (${result})`);
    }
}


// =====================================================================
// 1.3.6. Підтема «Масив об'єктів». Завдання 6. Оновлення властивості об'єкта в масиві
// Створіть масив студентів із властивостями id, name, grade.
// Знайдіть студента з визначеним id за допомогою циклу for та змініть
// його оцінку. Виведіть оновлений масив.
// =====================================================================

function arrayTask6() {
    const students = [
        { id: 1, name: 'Олена', grade: 87 },
        { id: 2, name: 'Андрій', grade: 74 },
        { id: 3, name: 'Марія', grade: 91 },
        { id: 4, name: 'Іван', grade: 65 },
    ];

    const searchId = 2;
    const newGrade = 82;

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === searchId) {
            console.log(`Студент з id ${searchId}: ${students[i].name}, оцінка ${students[i].grade} → ${newGrade}`);
            students[i].grade = newGrade;
            break;
        }
    }

    console.log('Оновлений масив:', students);
}


// =====================================================================
// 1.3.9. Підтема «Масив об'єктів». Завдання 9. Пошук найдорожчого товару
// Створіть масив із п'яти об'єктів товарів. Кожен об'єкт повинен
// містити id, name та price. За допомогою циклу знайдіть найдорожчий
// товар і виведіть його назву та ціну.
// =====================================================================

function arrayTask9() {
    const products = [
        { id: 1, name: 'Миша', price: 650 },
        { id: 2, name: 'Монітор', price: 7400 },
        { id: 3, name: 'Навушники', price: 2100 },
        { id: 4, name: 'Відеокарта', price: 18900 },
        { id: 5, name: 'Клавіатура', price: 3200 },
    ];

    let mostExpensive = products[0];

    for (const product of products) {
        if (product.price > mostExpensive.price) {
            mostExpensive = product;
        }
    }

    console.log(`Найдорожчий товар: ${mostExpensive.name}, ціна ${mostExpensive.price} грн`);
}


// =====================================================================
// 1.4.3. Підтема «Деструктуризація об'єктів». Завдання 3. Значення за замовчуванням
// Створіть об'єкт product, який містить властивості name та price,
// але не містить властивості discount. Виконайте деструктуризацію та
// задайте для discount значення за замовчуванням 0. Виведіть назву
// товару, ціну та знижку.
// =====================================================================

function destructuringTask3() {
    const product = {
        name: 'Ігрова гарнітура',
        price: 2499,
    };

    const { name, price, discount = 0 } = product;

    console.log(`Товар: ${name}`);
    console.log(`Ціна: ${price} грн`);
    console.log(`Знижка: ${discount}%`);
}


// =====================================================================
// 1.4.6. Підтема «Деструктуризація об'єктів». Завдання 6. Деструктуризація об'єктів у масиві
// Створіть масив books, який містить три об'єкти книг із властивостями
// title, author, year. Використовуючи деструктуризацію масиву та
// об'єктів, отримайте назви перших двох книг і прізвище автора першої книги.
// =====================================================================

function destructuringTask6() {
    const books = [
        { title: 'Кайдашева сім\'я', author: 'Іван Нечуй-Левицький', year: 1879 },
        { title: 'Тигролови', author: 'Іван Багряний', year: 1944 },
        { title: 'Місто', author: 'Валер\'ян Підмогильний', year: 1928 },
    ];

    // перший і другий елементи масиву — одразу розбираємо на властивості
    const [{ title: firstTitle, author: firstAuthor }, { title: secondTitle }] = books;

    // автор записаний як «Ім'я Прізвище», прізвище — другий елемент
    const [, authorLastName] = firstAuthor.split(' ');

    console.log(`Перша книга: ${firstTitle}`);
    console.log(`Друга книга: ${secondTitle}`);
    console.log(`Прізвище автора першої книги: ${authorLastName}`);
}


// =====================================================================
// 1.4.9. Підтема «Деструктуризація об'єктів». Завдання 9. Деструктуризація вкладених властивостей із перейменуванням
// Створіть об'єкт company, який містить назву компанії та вкладений
// об'єкт director із властивостями firstName, lastName, position.
// Використовуючи деструктуризацію, отримайте назву компанії та
// перейменуйте firstName на directorName. Виведіть отримані значення.
// =====================================================================

function destructuringTask9() {
    const company = {
        name: 'GameForge Studio',
        director: {
            firstName: 'Олександр',
            lastName: 'Бондар',
            position: 'CEO',
        },
    };

    const {
        name: companyName,
        director: { firstName: directorName },
    } = company;

    console.log(`Компанія: ${companyName}`);
    console.log(`Директор: ${directorName}`);
}


// =====================================================================
// 1.5.6. Підтема «Callback». Завдання 6. Імітація отримання даних користувача
// Створіть функцію getUser(), яка за допомогою setTimeout() імітує
// отримання даних користувача через 2 секунди. Після завершення затримки
// функція повинна викликати callback та передати йому об'єкт користувача
// з властивостями name та email.
// =====================================================================

function callbackTask6() {
    function getUser(callback) {
        console.log('Завантаження даних користувача...');

        setTimeout(function () {
            const user = {
                name: 'Іван Петренко',
                email: 'ivan.petrenko@example.com',
            };
            callback(user);
        }, 2000);
    }

    function showUser(user) {
        console.log(`Дані отримано: ${user.name}, ${user.email}`);
    }

    getUser(showUser);
}


// =====================================================================
// 1.5.10. Підтема «Callback». Завдання 10. Реєстрація користувача з використанням двох callback
// Створіть функцію registerUser(), яка приймає об'єкт користувача,
// функцію успішної реєстрації onSuccess та функцію помилки onError.
// Перевірте, чи містить користувач ім'я та email. Якщо обидва значення
// наявні, викличте onSuccess, інакше — onError. Перевірте роботу функції
// з коректними та некоректними даними.
// =====================================================================

function callbackTask10() {
    function registerUser(user, onSuccess, onError) {
        if (user.name && user.email) {
            onSuccess(user);
        } else {
            onError(user);
        }
    }

    function onSuccess(user) {
        console.log(`Реєстрація успішна: ${user.name} (${user.email})`);
    }

    function onError(user) {
        const missing = [];
        if (!user.name) missing.push('ім\'я');
        if (!user.email) missing.push('email');
        console.log(`Помилка реєстрації: не вказано ${missing.join(' та ')}`);
    }

    registerUser({ name: 'Олена', email: 'olena@example.com' }, onSuccess, onError);
    registerUser({ name: 'Андрій', email: '' }, onSuccess, onError);
    registerUser({ email: 'test@example.com' }, onSuccess, onError);
    registerUser({}, onSuccess, onError);
}


// =====================================================================
// 1.6.1. Підтема «Стрілочні функції». Завдання 1. Перетворення звичайної функції на стрілочну
// Створіть звичайну функцію greeting(), яка приймає ім'я користувача та
// повертає привітання. Перепишіть цю функцію у вигляді стрілочної
// функції. Порівняйте обидва варіанти та перевірте результат.
// =====================================================================

function arrowTask1() {
    // звичайна функція
    function greeting(name) {
        return `Привіт, ${name}!`;
    }

    // та сама функція у вигляді стрілочної
    const greetingArrow = name => `Привіт, ${name}!`;

    console.log('Звичайна функція:', greeting('Марія'));
    console.log('Стрілочна функція:', greetingArrow('Марія'));
    console.log('Результати однакові:', greeting('Марія') === greetingArrow('Марія'));
}


// =====================================================================
// 1.6.6. Підтема «Стрілочні функції». Завдання 6. Створення функції без параметрів
// Створіть стрілочну функцію showDate, яка не приймає параметрів та
// повертає поточну дату. Використайте об'єкт Date. Виведіть результат
// у консоль.
// =====================================================================

function arrowTask6() {
    const showDate = () => new Date().toLocaleDateString('uk-UA');

    console.log(`Сьогодні: ${showDate()}`);
}


// =====================================================================
// 1.7.3. Підтема «Стрілочні функції як колбеки». Завдання 3. Форматування тексту
// Створіть функцію formatText(), яка приймає текст і функцію
// форматування. Використовуючи стрілочні функції як callback, реалізуйте
// перетворення тексту на великі літери, малі літери та видалення зайвих
// пробілів за допомогою trim().
// =====================================================================

function arrowCallbackTask3() {
    function formatText(text, formatter) {
        return formatter(text);
    }

    const text = '   Вивчаємо JavaScript   ';

    console.log(`Початковий текст: "${text}"`);
    console.log(`Великі літери: "${formatText(text, str => str.toUpperCase())}"`);
    console.log(`Малі літери: "${formatText(text, str => str.toLowerCase())}"`);
    console.log(`Без зайвих пробілів: "${formatText(text, str => str.trim())}"`);
}


// =====================================================================
// 1.7.6. Підтема «Стрілочні функції як колбеки». Завдання 6. Отримання значення з поля введення
// Створіть HTML-сторінку з текстовим полем input та кнопкою. За допомогою
// addEventListener() додайте обробник події введення тексту (input).
// Використайте стрілочну функцію як callback, щоб отримувати та виводити
// поточне значення поля введення.
// =====================================================================

function arrowCallbackTask6() {
    const input = document.querySelector('#lr5-input');
    const button = document.querySelector('#lr5-button');
    const output = document.querySelector('#lr5-output');

    input.addEventListener('input', event => {
        const value = event.target.value;
        output.textContent = `Поточне значення: ${value}`;
        console.log(`input: ${value}`);
    });

    button.addEventListener('click', () => {
        console.log(`Кнопка натиснута, значення поля: "${input.value}"`);
        input.value = '';
        output.textContent = 'Поточне значення:';
    });
}


// =====================================================================
// 1.7.9. Підтема «Стрілочні функції як колбеки». Завдання 9. Використання стрілочної функції з Promise
// Створіть об'єкт Promise, який повертає повідомлення "Дані успішно
// завантажено". За допомогою методу .then() та стрілочної функції
// отримайте результат виконання Promise і виведіть його в консоль.
// Додайте обробку помилки за допомогою .catch().
// =====================================================================

function arrowCallbackTask9() {
    // isOk показує, чи «завантаження» пройде успішно
    const loadData = isOk => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isOk) {
                resolve('Дані успішно завантажено');
            } else {
                reject(new Error('Не вдалося завантажити дані'));
            }
        }, 500);
    });

    loadData(true)
        .then(message => console.log(`then: ${message}`))
        .catch(error => console.log(`catch: ${error.message}`));

    loadData(false)
        .then(message => console.log(`then: ${message}`))
        .catch(error => console.log(`catch: ${error.message}`));
}


// =====================================================================
// 1.8.3. Підтема «Перебираючі методи масиву». Завдання 3. Фільтрація масиву за допомогою filter()
// Створіть масив об'єктів students із властивостями name, age, grade.
// Використовуючи метод filter(), створіть новий масив студентів, оцінка
// яких більша або дорівнює 80 балам. Виведіть результат у консоль.
// =====================================================================

function iterTask3() {
    const students = [
        { name: 'Олена', age: 19, grade: 95 },
        { name: 'Андрій', age: 20, grade: 72 },
        { name: 'Марія', age: 18, grade: 80 },
        { name: 'Іван', age: 21, grade: 61 },
        { name: 'Софія', age: 19, grade: 88 },
    ];

    const goodStudents = students.filter(student => student.grade >= 80);

    console.log('Студенти з оцінкою від 80:', goodStudents);
}


// =====================================================================
// 1.8.6. Підтема «Перебираючі методи масиву». Завдання 6. Перевірка наявності хоча б одного елемента за допомогою some()
// Створіть масив об'єктів products із властивостями name, price,
// available. За допомогою методу some() перевірте, чи є в масиві хоча б
// один товар, який відсутній на складі (available === false). Виведіть
// результат перевірки.
// =====================================================================

function iterTask6() {
    const products = [
        { name: 'Миша', price: 650, available: true },
        { name: 'Монітор', price: 7400, available: false },
        { name: 'Навушники', price: 2100, available: true },
    ];

    const hasMissing = products.some(product => product.available === false);

    console.log(`Є товари, відсутні на складі: ${hasMissing}`);
}


// =====================================================================
// 1.8.9. Підтема «Перебираючі методи масиву». Завдання 9. Перетворення масиву за допомогою flatMap()
// Створіть масив об'єктів students, кожен із яких містить властивості
// name та subjects (масив навчальних дисциплін). Використовуючи метод
// flatMap(), сформуйте один загальний масив усіх навчальних дисциплін
// студентів. Виведіть отриманий масив.
// =====================================================================

function iterTask9() {
    const students = [
        { name: 'Олена', subjects: ['Математика', 'Фізика'] },
        { name: 'Андрій', subjects: ['Програмування', 'Англійська мова'] },
        { name: 'Марія', subjects: ['Бази даних', 'Програмування', 'Дизайн'] },
    ];

    const allSubjects = students.flatMap(student => student.subjects);
    console.log('Усі дисципліни:', allSubjects);

    // без повторів — через Set
    const uniqueSubjects = [...new Set(allSubjects)];
    console.log('Без повторів:', uniqueSubjects);
}


// =====================================================================
// ПРАКТИЧНЕ ЗАВДАННЯ №2
// (практичні контрольні завдання 1–12)
// =====================================================================

// =====================================================================
// 2.1–2.2. Створити об'єкт book із властивостями title, author, year,
// price. Вивести значення всіх властивостей у консоль.
// Додати до об'єкта метод, який формує та повертає інформаційний рядок
// про книгу.
// =====================================================================

function practiceBook() {
    const book = {
        title: 'Чистий код',
        author: 'Роберт Мартін',
        year: 2008,
        price: 650,

        getInfo() {
            return `«${this.title}», ${this.author}, ${this.year} р. — ${this.price} грн`;
        },
    };

    console.log(`title: ${book.title}`);
    console.log(`author: ${book.author}`);
    console.log(`year: ${book.year}`);
    console.log(`price: ${book.price}`);
    console.log(book.getInfo());
}


// =====================================================================
// 2.3–2.4. Створити масив із п'яти об'єктів student, кожен з яких містить
// ім'я, вік та середній бал.
// Використати деструктуризацію для отримання імені та середнього бала
// студента.
// =====================================================================

const practiceStudents = [
    { name: 'Олена', age: 19, average: 95 },
    { name: 'Андрій', age: 20, average: 72 },
    { name: 'Марія', age: 18, average: 100 },
    { name: 'Іван', age: 21, average: 64 },
    { name: 'Софія', age: 19, average: 83 },
];

function practiceStudentsArray() {
    console.log('Масив студентів:', practiceStudents);

    const { name, average } = practiceStudents[0];
    console.log(`Перший студент: ${name}, середній бал ${average}`);
}


// =====================================================================
// 2.5–2.6. Створити функцію, яка приймає два числа та callback-функцію
// для виконання арифметичної операції.
// Переписати звичайну функцію обчислення добутку двох чисел у вигляді
// стрілочної функції.
// =====================================================================

function practiceFunctions() {
    function operate(a, b, operation) {
        return operation(a, b);
    }

    // звичайна функція добутку
    function multiply(a, b) {
        return a * b;
    }

    // те саме стрілочною функцією
    const multiplyArrow = (a, b) => a * b;

    console.log(`operate(12, 4, сума) = ${operate(12, 4, (a, b) => a + b)}`);
    console.log(`operate(12, 4, різниця) = ${operate(12, 4, (a, b) => a - b)}`);
    console.log(`operate(12, 4, multiply) = ${operate(12, 4, multiply)}`);
    console.log(`multiplyArrow(12, 4) = ${multiplyArrow(12, 4)}`);
}


// =====================================================================
// 2.7–2.12. За допомогою forEach() вивести імена всіх студентів із масиву.
// За допомогою map() створити новий масив, який містить лише імена.
// За допомогою filter() відібрати студентів, середній бал яких більший за 80.
// За допомогою find() знайти студента за заданим ім'ям.
// За допомогою some() перевірити, чи є в масиві студент із середнім балом 100.
// За допомогою every() перевірити, чи всі студенти мають середній бал не нижче 60.
// =====================================================================

function practiceIteration() {
    console.log('forEach():');
    practiceStudents.forEach(student => console.log(`  ${student.name}`));

    const names = practiceStudents.map(student => student.name);
    console.log('map():', names);

    const best = practiceStudents.filter(student => student.average > 80);
    console.log('filter() — бал > 80:', best);

    const searchName = 'Іван';
    const found = practiceStudents.find(student => student.name === searchName);
    console.log(`find() — ${searchName}:`, found ?? 'не знайдено');

    const hasPerfect = practiceStudents.some(student => student.average === 100);
    console.log(`some() — є студент з балом 100: ${hasPerfect}`);

    const allPassed = practiceStudents.every(student => student.average >= 60);
    console.log(`every() — усі мають бал від 60: ${allPassed}`);
}


// =====================================================================
// Запуск завдань кнопками на сторінці
// =====================================================================

const lesson5Tasks = {
    '1.1.6': objectTask6,
    '1.1.8': objectTask8,
    '1.2.2': methodsTask2,
    '1.2.6': methodsTask6,
    '1.3.6': arrayTask6,
    '1.3.9': arrayTask9,
    '1.4.3': destructuringTask3,
    '1.4.6': destructuringTask6,
    '1.4.9': destructuringTask9,
    '1.5.6': callbackTask6,
    '1.5.10': callbackTask10,
    '1.6.1': arrowTask1,
    '1.6.6': arrowTask6,
    '1.7.3': arrowCallbackTask3,
    '1.7.9': arrowCallbackTask9,
    '1.8.3': iterTask3,
    '1.8.6': iterTask6,
    '1.8.9': iterTask9,
    '2.1': practiceBook,
    '2.3': practiceStudentsArray,
    '2.5': practiceFunctions,
    '2.7': practiceIteration,
};

document.querySelectorAll('[data-lr5]').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.dataset.lr5;
        console.log(`----- Завдання ${id} -----`);
        lesson5Tasks[id]();
    });
});

// поле введення з завдання 1.7.6 працює одразу
arrowCallbackTask6();
