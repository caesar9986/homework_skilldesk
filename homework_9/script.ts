// Задача 1: Параметры по умолчанию
// Напишите функцию sayHello, которая принимает имя (строка) и язык (строка, по умолчанию "ru").
// Если язык "ru", функция выводит "Привет, <имя>!", если "en" — "Hello, !".

function sayHello (name: string, langue: 'ru' | string) {
    if (langue === 'ru') {
        console.log(`Привет, ${name}!`)
    } else if (langue === 'en') {
        console.log(`Hello, ${name}!`)
    }
}

sayHello('Jhon', 'en')

// Задача 2: Передача по значению
// Напишите функцию increment, которая принимает число (объявленное в какой-то переменной) и увеличивает его на 1 внутри функции.
// Проверьте, изменится ли исходная переменная после вызова функции.

let number: number = 23;

function increment (number: number) {
    console.log(++number);
}

console.log(number);
increment(number);

// Задача 3: Передача по ссылке
// Напишите функцию addGrade, которая принимает объект student с полями name (строка) и grades (массив чисел),
// а также новую оценку (число). Функция должна добавлять оценку в массив student.grades.
// Проверьте, изменится ли исходный объект после вызова функции.

type Student = {
    name: string,
    geades: number[]
}

const student: Student = {
    name: 'Alice',
    geades: [5, 4, 3]
}

function addGrade (objectStudent: Student, newGrades: number) {
    objectStudent.geades.push(newGrades)
    console.log(student)
}

addGrade(student, 2)

// Задача 4: Метод в объекте (без использования this)
// Создайте объект calculator с двумя свойствами: a (число), b (число) и методом sum,
// который возвращает сумму a и b при вызове calculator.sum().

type Calculator = {
    a: number,
    b: number
    sum: (a: number, b: number) => number
}

const calculator: Calculator = {
    a: 15,
    b: 4,
    sum: function (a, b) {
        return a + b
    }
}

console.log(calculator.sum(calculator.a, calculator.b));