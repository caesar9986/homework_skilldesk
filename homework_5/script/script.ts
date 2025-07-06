const rawProducts: Product [] = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 500 }
];

interface Product {
    readonly id: number,
    name: string,
    price: number,
    category?: string
}

let minPrice = 1000;

function getExpensiveProducts (rawProducts: Product[], minPrice: number): Product[] {
    const result: Product[] = [];
    for (let i = 0; i < rawProducts.length; i++) {
        if (rawProducts[i].price > minPrice) {
            result.push(rawProducts[i]);
            
        }
    }
    return result
}

let discount = 10;

function applyDiscount (rawProducts: Product[], discount: number): Product[] {
    let priceDiscount: number = 0;
    const result: Product[] = [];
    for (let i = 0; i < rawProducts.length; i++){
        priceDiscount = rawProducts[i].price / discount
        result.push(priceDiscount[i])
    }
    return result
}



function groupByCategory (rawProducts: Product[]): Record {
    const category: Product[] = [];
    const uncategorized: Product[] = [];
    for (let i = 0; i < rawProducts.length; i++) {
        if (rawProducts[i].category === undefined) {
            uncategorized.push(rawProducts[i])
        } else {
            category.push(rawProducts[i]);
        }
    }
    return
}

function printProduct (rawProducts: Product[]): string {
    const idProducts: number = 1
    let result: Product[]
    for (let i = 0; i < rawProducts.length; i++) {
        if (idProducts === rawProducts[i].id) {
            console.log(`«Товар ${rawProducts[i].name} (ID: ${rawProducts[i].id}) стоит $${rawProducts[i].price}»`);
        }
    }
    return
}

// Посдение две задачи, я к сожалению не смог решить, не пойму в чем дело, в функции groupByCategory не понимаю как работает тип данных Record, а в последней, скорее всего надо через переменную result, но я не понимаю как ее применить