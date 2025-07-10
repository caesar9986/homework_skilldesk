var rawProducts = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 }
];
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
function groupByCategory(rawProducts) {
    var category = [];
    var uncategorized = [];
    for (var i = 0; i < rawProducts.length; i++) {
        if (rawProducts[i].category === undefined) {
            uncategorized.push(rawProducts[i]);
        }
        else {
            category.push(rawProducts[i]);
        }
    }
    return;
}
function printProduct(rawProducts) {
    var idProducts = 1;
    var result;
    for (var i = 0; i < rawProducts.length; i++) {
        if (idProducts === rawProducts[i].id) {
            console.log("\u00AB\u0422\u043E\u0432\u0430\u0440 ".concat(rawProducts[i].name, " (ID: ").concat(rawProducts[i].id, ") \u0441\u0442\u043E\u0438\u0442 $").concat(rawProducts[i].price, "\u00BB"));
        }
    }
    return;
}
// Посдение две задачи, я к сожалению не смог решить, не пойму в чем дело, в функции groupByCategory не понимаю как работает тип данных Record, а в последней, скорее всего надо через переменную result, но я не понимаю как ее применить
