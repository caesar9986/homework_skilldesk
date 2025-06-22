// Задание 1. Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа.

let number1: string | null = prompt('Введите число');

if(number1 !== null){
    alert(+number1 / 10);
}

// Задание 2. Написать программу, которая получает два числа и выводит наименьшее.

let number2: string | null = prompt('Введите первое число');
let number3: string | null = prompt('Введите второе число');

if(number2 && number3 !== null){
    if (+number2 < +number3) {
        alert(number2);
    }else{
        alert(number3);
    }
}



// Задание 3. Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’.

let number4: string | null = prompt('Введите число')

if (number4 !== null) {
    if (+number4 < 100) {
        alert('Число меньше 100');
    }else if(+number4 > 100){
        alert('Число больше 100');
    }else{
        alert('Число равно 100');
    }
}


// Задание 4. Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, ’, если пользователь совершеннолетний, или ‘Hi, ’, если пользователь несовершеннолетний.

let nameUser: string | null = prompt('Введите ваше имя')
let ageUser: string | null = prompt('Введите ваш возраст')

if (ageUser !== null) {
    if (+ageUser >= 18) {
        alert('Hello, ' + nameUser)
    }else{
        alert('Hi, ' + nameUser)
    }
}