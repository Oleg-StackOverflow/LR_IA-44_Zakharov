// =====================================================================
// ЛАБОРАТОРНА РОБОТА №4
// Основи JavaScript у HTML-документі. Шаблонні рядки.
// Керування порядком обчислень. Масиви. Методи масивів. Функції
//
// Виконав: Захаров Олег, група ІА-44
// Номер у списку групи: 6 (парний)
// Варіант завдань №7 та №9: 6
// =====================================================================


// =====================================================================
// ЗАВДАННЯ 1
// Збережіть введене значення часу (год:хвил) (використати метод prompt())
// у змінну hour.
// Вивести це значення у Console, використовуючи шаблонний рядок.
// Перевірити до якої чверті години відноситься введене значення.
// Відповідь вивести за допомогою alert().
// Наприклад: при введенні 10:30 виведе «Перша чверть години»
// Підказка: не забудьте зробити ряд перевірок.
// =====================================================================

function task1() {
    const hour = prompt('Введіть час у форматі год:хвил (наприклад, 10:30)');

    console.log(`Введене значення: ${hour}`);

    // натиснули «Скасувати» або нічого не ввели
    if (hour === null || hour.trim() === '') {
        alert('Значення не введено');
        return;
    }

    // перевірка формату: 1-2 цифри, двокрапка, 2 цифри
    const parts = hour.trim().split(':');

    if (parts.length !== 2 || parts[1].length !== 2) {
        alert('Неправильний формат. Введіть час як год:хвил');
        return;
    }

    const h = Number(parts[0]);
    const m = Number(parts[1]);

    if (!Number.isInteger(h) || !Number.isInteger(m) || parts[0] === '') {
        alert('Години та хвилини мають бути цілими числами');
        return;
    }

    if (h < 0 || h > 23) {
        alert('Години мають бути від 0 до 23');
        return;
    }

    if (m < 0 || m > 59) {
        alert('Хвилини мають бути від 0 до 59');
        return;
    }

    // чверть години визначаємо за хвилинами
    let quarter;

    if (m < 15) {
        quarter = 'Перша чверть години';
    } else if (m < 30) {
        quarter = 'Друга чверть години';
    } else if (m < 45) {
        quarter = 'Третя чверть години';
    } else {
        quarter = 'Четверта чверть години';
    }

    console.log(`${hour} — ${quarter.toLowerCase()} (хвилини: ${m})`);
    alert(quarter);
}


// =====================================================================
// ЗАВДАННЯ 2
// Змінна day може набувати одне із 7 значень: '1', '2'... '6' '7'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну finish запише понеділок,
// якщо має значення '2' – вівторок і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше.
// Значення змінної finish виведіть в консоль.
// =====================================================================

function task2() {
    const day = prompt('Введіть номер дня тижня (від 1 до 7)');
    let finish;

    switch (day) {
        case '1':
            finish = 'понеділок';
            break;
        case '2':
            finish = 'вівторок';
            break;
        case '3':
            finish = 'середа';
            break;
        case '4':
            finish = 'четвер';
            break;
        case '5':
            finish = "п'ятниця";
            break;
        case '6':
            finish = 'субота';
            break;
        case '7':
            finish = 'неділя';
            break;
        default:
            finish = 'такого дня тижня немає';
    }

    console.log(`day = ${day}, finish = ${finish}`);
}


// =====================================================================
// ЗАВДАННЯ 3
// Є декілька користувачів User1, User2, User3, з відповідними паролями.
// (Об'явити, проініціалізувати)
// Написати програмний код, який запитуватиме у користувача логін
// (використати prompt) і виводить результат в консоль браузера,
// використовуючи шаблонний рядок.
// Після цього ввести логін користувача. Додайте перевірку введеного
// користувачем значення:
//  - якщо відвідувач вводить, наприклад, "User1" або "User2" або "User3",
//    то prompt запитує пароль. У випадку вдалої ідентифікації в alert
//    вивести «Hello, User1» або «Hello, User2» або «Hello, User3»;
//  - якщо нічого не ввели або натиснули Cancel, то prompt знову просить
//    ввести логін користувача;
//  - в іншому випадку вивести в alert рядок "I don't know you"
// =====================================================================

const users = {
    User1: 'pass111',
    User2: 'pass222',
    User3: 'pass333',
};

function task3() {
    let login = prompt('Введіть логін');
    console.log(`Введений логін: ${login}`);

    // поки нічого не ввели або натиснули Cancel — питаємо знову
    while (login === null || login.trim() === '') {
        login = prompt('Логін не введено. Введіть логін ще раз');
        console.log(`Введений логін: ${login}`);
    }

    login = login.trim();

    if (login in users) {
        const password = prompt(`Введіть пароль для ${login}`);

        if (password === users[login]) {
            console.log(`${login}: пароль правильний`);
            alert(`Hello, ${login}`);
        } else {
            console.log(`${login}: неправильний пароль`);
            alert('Wrong password');
        }
    } else {
        console.log(`Користувача ${login} не знайдено`);
        alert("I don't know you");
    }
}


// =====================================================================
// ЗАВДАННЯ 4
// Оголоси функцію getShippingMessage, яка очікує три параметри,
// значення яких будуть задаватися під час її виклику:
//  • country — перший параметр, рядок, що містить країну доставки
//  • price — другий параметр, число, що містить загальну вартість товару
//  • deliveryFee — третій параметр, число, що містить вартість доставки
// Напиши код функції так, щоб вона повертала рядок з повідомленням
// про доставку товару в країну користувача:
// "Shipping to <country> will cost <totalPrice> credits", де:
//  • <country> — це країна доставки
//  • <totalPrice> — це загальна вартість замовлення, що включає вартість
//    товару і його доставки
// =====================================================================

function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

function task4() {
    console.log(getShippingMessage('Australia', 120, 50));
    console.log(getShippingMessage('Germany', 80, 20));
    console.log(getShippingMessage('Sweden', 100, 20));
    console.log(getShippingMessage('Ukraine', 250, 0));
}


// =====================================================================
// ЗАВДАННЯ 5
// Станція з продажу ремонтних дроїдів.
// Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits),
// яка складає та повертає повідомлення про купівлю ремонтних дроїдів.
// Вона оголошує три параметри:
//  • quantity — кількість замовлених дроїдів
//  • pricePerDroid — ціна одного дроїда
//  • customerCredits — сума коштів на рахунку клієнта
// Доповни функцію таким чином:
//  • Оголоси змінну для зберігання загальної суми замовлення і задай
//    їй вираз розрахунку цієї суми.
//  • Додай перевірку, чи зможе клієнт оплатити замовлення:
//    - якщо сума до сплати перевищує кількість кредитів на рахунку
//      клієнта, функція має повертати рядок "Insufficient funds!"
//    - в іншому випадку функція має повертати рядок
//      "You ordered <quantity> droids worth <totalPrice> credits!"
// =====================================================================

function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = quantity * pricePerDroid;

    if (totalPrice > customerCredits) {
        return 'Insufficient funds!';
    }

    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

function task5() {
    console.log(makeTransaction(5, 3000, 23000));
    console.log(makeTransaction(3, 1000, 15000));
    console.log(makeTransaction(10, 5000, 8000));
    console.log(makeTransaction(8, 2000, 10000));
    console.log(makeTransaction(10, 500, 5000));
}


// =====================================================================
// ЗАВДАННЯ 6
// Напиши функцію під назвою makeArray, яка приймає три параметри:
// firstArray (масив), secondArray (масив) і maxLength (число).
// Функція повинна створювати новий масив, який містить усі елементи
// з firstArray, а потім усі елементи з secondArray.
//  • Якщо кількість елементів у новому масиві перевищує maxLength,
//    функція повинна повернути копію масиву з довжиною maxLength елементів.
//  • В іншому випадку функція повинна повернути весь новий масив.
// =====================================================================

function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray);

    if (newArray.length > maxLength) {
        return newArray.slice(0, maxLength);
    }

    return newArray;
}

function task6() {
    console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
    console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
    console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
    console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
    console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
    console.log(makeArray([], ['Neptune', 'Uranus'], 5));
}


// =====================================================================
// ЗАВДАННЯ 7 (варіант 6)
// 1. Створити одновимірний масив, кількість елементів якого задана
//    користувачем. Обчислити суму елементів між максимальним та
//    мінімальним значеннями масиву. Застосувати функції.
// 2. Упорядкувати масив у порядку зростання (метод швидкого сортування).
//    Надрукувати вхідний та вихідний масив. Застосувати функції.
// =====================================================================

// створює масив заданої довжини з випадковими цілими числами від min до max
function createRandomArray(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

// повертає індекс максимального елемента
function indexOfMax(arr) {
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[index]) {
            index = i;
        }
    }
    return index;
}

// повертає індекс мінімального елемента
function indexOfMin(arr) {
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[index]) {
            index = i;
        }
    }
    return index;
}

// сума елементів, що стоять між максимальним і мінімальним (не включно)
function sumBetweenMaxAndMin(arr) {
    const iMax = indexOfMax(arr);
    const iMin = indexOfMin(arr);
    const start = Math.min(iMax, iMin);
    const end = Math.max(iMax, iMin);

    let sum = 0;
    for (let i = start + 1; i < end; i++) {
        sum += arr[i];
    }
    return sum;
}

// швидке сортування (quick sort) за зростанням
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const middle = [];
    const right = [];

    for (const item of arr) {
        if (item < pivot) {
            left.push(item);
        } else if (item > pivot) {
            right.push(item);
        } else {
            middle.push(item);
        }
    }

    return [...quickSort(left), ...middle, ...quickSort(right)];
}

function task7() {
    const input = prompt('Введіть кількість елементів масиву');
    const length = Number(input);

    if (input === null || !Number.isInteger(length) || length < 2) {
        alert('Кількість елементів має бути цілим числом, не меншим за 2');
        return;
    }

    const numbers = createRandomArray(length, -50, 50);
    console.log(`Вхідний масив (${length} ел.): [${numbers.join(', ')}]`);

    const iMax = indexOfMax(numbers);
    const iMin = indexOfMin(numbers);
    console.log(`Максимальний елемент: ${numbers[iMax]} (індекс ${iMax})`);
    console.log(`Мінімальний елемент: ${numbers[iMin]} (індекс ${iMin})`);
    console.log(`Сума елементів між максимальним і мінімальним: ${sumBetweenMaxAndMin(numbers)}`);

    const sorted = quickSort(numbers);
    console.log(`Вхідний масив:  [${numbers.join(', ')}]`);
    console.log(`Вихідний масив (швидке сортування за зростанням): [${sorted.join(', ')}]`);
}


// =====================================================================
// ЗАВДАННЯ 8
// Є двовимірний масив додатніх і від'ємних чисел.
// (об'явити, проініціалізувати генератором випадкових чисел).
// Вивести у Console браузера.
// Збережи перший і останній елементи масиву в окремі змінні.
// Вставити 25 після другого елемента масиву.
// Вивести у Console браузера.
// =====================================================================

function task8() {
    const rows = 4;
    const cols = 5;
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix.push(createRandomArray(cols, -99, 99));
    }

    console.log('Двовимірний масив:');
    // виводимо копію, щоб у консолі лишився масив до змін
    console.table(matrix.map(row => row.slice()));

    // перший і останній елементи двовимірного масиву
    const first = matrix[0][0];
    const last = matrix[rows - 1][cols - 1];
    console.log(`Перший елемент: ${first}, останній елемент: ${last}`);

    // вставляємо 25 після другого елемента в кожному рядку
    for (const row of matrix) {
        row.splice(2, 0, 25);
    }

    console.log('Масив після вставки 25 після другого елемента кожного рядка:');
    console.table(matrix);
}


// =====================================================================
// ЗАВДАННЯ 9 (варіант 6)
// Календар.
// Реалізувати можливість вибору дати у елемент форми з спеціального
// візуального компоненту. Вимоги до компоненту: вибір числа, перехід між
// місяцями та роками, відміна вибору дати.
// =====================================================================

const MONTHS = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
    'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

function initCalendar() {
    const input = document.querySelector('#date-input');
    const calendar = document.querySelector('#calendar');
    const title = calendar.querySelector('.calendar__title');
    const daysBox = calendar.querySelector('.calendar__days');

    let selectedDate = null;          // вибрана дата
    let viewYear = new Date().getFullYear();   // рік, що показується
    let viewMonth = new Date().getMonth();     // місяць, що показується

    // число з нулем попереду: 5 -> "05"
    function pad(n) {
        return String(n).padStart(2, '0');
    }

    function formatDate(date) {
        return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`;
    }

    function isSameDay(a, b) {
        return a && b &&
            a.getDate() === b.getDate() &&
            a.getMonth() === b.getMonth() &&
            a.getFullYear() === b.getFullYear();
    }

    // малює сітку днів поточного місяця
    function render() {
        title.textContent = `${MONTHS[viewMonth]} ${viewYear}`;
        daysBox.innerHTML = '';

        const firstDay = new Date(viewYear, viewMonth, 1);
        const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
        // тиждень починається з понеділка: неділя (0) стає 6
        const shift = (firstDay.getDay() + 6) % 7;
        const today = new Date();

        for (let i = 0; i < shift; i++) {
            daysBox.append(document.createElement('span'));
        }

        for (let d = 1; d <= daysInMonth; d++) {
            const date = new Date(viewYear, viewMonth, d);
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'calendar__day';
            button.textContent = d;

            if (isSameDay(date, today)) {
                button.classList.add('calendar__day--today');
            }
            if (isSameDay(date, selectedDate)) {
                button.classList.add('calendar__day--selected');
            }

            button.addEventListener('click', function () {
                selectedDate = date;
                input.value = formatDate(date);
                console.log(`Вибрано дату: ${input.value}`);
                close();
            });

            daysBox.append(button);
        }
    }

    function changeMonth(step) {
        viewMonth += step;
        if (viewMonth < 0) {
            viewMonth = 11;
            viewYear--;
        } else if (viewMonth > 11) {
            viewMonth = 0;
            viewYear++;
        }
        render();
    }

    function changeYear(step) {
        viewYear += step;
        render();
    }

    function open() {
        if (selectedDate) {
            viewYear = selectedDate.getFullYear();
            viewMonth = selectedDate.getMonth();
        }
        render();
        calendar.hidden = false;
    }

    function close() {
        calendar.hidden = true;
    }

    input.addEventListener('click', open);
    calendar.querySelector('[data-action="prev-year"]').addEventListener('click', () => changeYear(-1));
    calendar.querySelector('[data-action="next-year"]').addEventListener('click', () => changeYear(1));
    calendar.querySelector('[data-action="prev-month"]').addEventListener('click', () => changeMonth(-1));
    calendar.querySelector('[data-action="next-month"]').addEventListener('click', () => changeMonth(1));

    calendar.querySelector('[data-action="today"]').addEventListener('click', function () {
        const now = new Date();
        viewYear = now.getFullYear();
        viewMonth = now.getMonth();
        render();
    });

    // відміна вибору дати
    calendar.querySelector('[data-action="clear"]').addEventListener('click', function () {
        selectedDate = null;
        input.value = '';
        console.log('Вибір дати скасовано');
        close();
    });

    // клік поза календарем закриває його
    document.addEventListener('click', function (event) {
        if (!calendar.hidden && !calendar.contains(event.target) && event.target !== input) {
            close();
        }
    });
}


// =====================================================================
// Запуск завдань кнопками на сторінці
// =====================================================================

const tasks = {
    1: task1,
    2: task2,
    3: task3,
    4: task4,
    5: task5,
    6: task6,
    7: task7,
    8: task8,
};

document.querySelectorAll('[data-task]').forEach(function (button) {
    button.addEventListener('click', function () {
        const number = button.dataset.task;
        console.log(`----- Завдання ${number} -----`);
        tasks[number]();
    });
});

initCalendar();
