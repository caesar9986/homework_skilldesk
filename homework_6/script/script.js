const products = [
    {id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5]},
    {id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4]},
    {id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3]},
    {id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4]}
]

// Задача 1: Используя метод reduce найти самый дорогой товар (то есть результатом reduce должен быть один из элементов массива - объект-описание товара).

const maxPriceProduct = products.reduce((acc, price) => {
    if (acc.price > price.price) {
        return acc;
    }
    return price;
}, 0);

console.log(maxPriceProduct);

// Задача 2: Преобразовать объекты в массиве так, чтобы в итоге массив состоял из объектов со свойствами id, title, price, summark, где summark - это сумма оценок в marks).

const summarkProducts = products.map((products) => {
    const summark = products.marks.reduce((acc, marks) => {
        return acc + marks;
    }, 0);

    return {
        id: products.id,
        title: products.title,
        price: products.price,
        summark: summark
    };
});
    
console.log(summarkProducts);

// Задача 3: Найти сумму всех элементов массива, не используя второй аргумент reduce (который аккумулятор).


