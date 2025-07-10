// Задача: Опишите интерфейс Product, добавьте:
// readonly id: number
// name: string
// price: number
// необязательное поле category?: string
// Типизируйте массив rawProducts как Product[].

var rawProducts = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 }
];
// Напишите функцию getExpensiveProducts(products: Product[], minPrice: number): Product[], которая возвращает товары дороже заданной цены.
var minPrice = 1000;
function getExpensiveProducts(rawProducts, minPrice) {
    var result = [];
    for (var i = 0; i < rawProducts.length; i++) {
        if (rawProducts[i].price > minPrice) {
            result.push(rawProducts[i]);
        }
    }
    return result;
}
// Напишите функцию applyDiscount(products: Product[], discount: number): Product[], которая возвращает новый массив товаров с уменьшенной ценой.
var discount = 10;
function applyDiscount(rawProducts, discount) {
    var priceDiscount = 0;
    var result = [];
    for (var i = 0; i < rawProducts.length; i++) {
        priceDiscount = rawProducts[i].price / discount;
        result.push(priceDiscount[i]);
    }
    return result;
}
// Напишите функцию groupByCategory(products: Product[]): Record, которая группирует товары по category. Если category не задана, класть их в группу "uncategorized".
function groupByCategory(rawProducts) {
    var result = {};
    for (var i = 0; i < rawProducts.length; i++) {
        var product = rawProducts[i];
        var category = product.category || "uncategorized";
        if (!result[category]) {
            result[category] = [];
        }
        result[category].push(product);
    }
    return result;
}
// Попробуйте написать функцию printProduct(product: Product): string, которая вернёт строку вроде: «Товар Laptop (ID: 1) стоит $1200».
function printProduct(id) {
    var product = rawProducts.find(function (p) {
        return p.id === id;
    });
    if (product) {
        return "Товар " + product.name + " (ID: " + product.id + ") стоит $" + product.price;
    }
    return undefined;
}
