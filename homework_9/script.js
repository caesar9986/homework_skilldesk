// Задача 1: Параметры по умолчанию
// Напишите функцию sayHello, которая принимает имя (строка) и язык (строка, по умолчанию "ru").
// Если язык "ru", функция выводит "Привет, <имя>!", если "en" — "Hello, !".
function sayHello(name, langue) {
    if (langue === 'ru') {
        console.log("\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(name, "!"));
    }
    else if (langue === 'en') {
        console.log("Hello, ".concat(name, "!"));
    }
}
sayHello('Jhon', 'en');
// Задача 2: Передача по значению
// Напишите функцию increment, которая принимает число (объявленное в какой-то переменной) и увеличивает его на 1 внутри функции.
// Проверьте, изменится ли исходная переменная после вызова функции.
var number = 23;
function increment(number) {
    console.log(++number);
}
console.log(number);
increment(number);
var student = {
    name: 'Alice',
    geades: [5, 4, 3]
};
function addGrade(objectStudent, newGrades) {
    objectStudent.geades.push(newGrades);
    console.log(student);
}
addGrade(student, 2);
var calculator = {
    a: 15,
    b: 4,
    sum: function (a, b) {
        return a + b;
    }
};
console.log(calculator.sum(calculator.a, calculator.b));
