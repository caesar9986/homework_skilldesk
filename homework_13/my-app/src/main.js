const product = [
  {
    id: 1,
    imgURL: "https://img.icons8.com/3d-fluency/100/laptop.png",
    title: "laptop",
    description: "description",
    price: 2200
  },
  {
    id: 2,
    imgURL: "https://img.icons8.com/3d-fluency/100/smartphone.png",
    title: "smartphone",
    description: "description",
    price: 1500
  },
  {
    id: 3,
    imgURL: "https://img.icons8.com/officel/80/apple-watch-apps.png",
    title: "watch",
    description: "description",
    price: 300
  }
]

// Создание иконок товара из объекта

const container = document.querySelector(".container");

product.forEach((element) => {
  const box = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("h2");
  const description = document.createElement("p");
  const price = document.createElement("p");
  const button = document.createElement("button");
  box.setAttribute("class", `box-basket-${element.id}`)
  img.setAttribute("src", element.imgURL);
  title.innerText = element.title;
  description.innerText = element.description;
  price.innerText = `${element.price}$`;
  button.setAttribute("type", "button");
  button.setAttribute("class", `basket-button-input basket-button-${element.id}`);
  button.innerText = "В корзину";
  container.append(box);
  box.append(img);
  box.append(title);
  box.append(description);
  box.append(price);
  box.append(button);
});

// Создание корзины

let queryBasket = 0;
let queryLaptop = 0;
let querySmartphone = 0;
let queryWatch = 0;
let priceLaptop = 0;
let priceSmartphone = 0;
let priceWatch = 0;
const basket = document.querySelector(".basket_product");
const basketEmpty = document.querySelector(".basket_product p");
const titleBasket = document.querySelector(".basket h2");
const buttonBasket = document.querySelectorAll(".basket-button-input");
const getItemLocalStoregBasket = window.localStorage.getItem("basket-product");
const buttonRemoveBasket = document.querySelector(".button-remove-basket");
queryBasket = getItemLocalStoregBasket;
titleBasket.innerText = `Корзина: ${queryBasket}`;

buttonBasket.forEach(button => {
  button.addEventListener("click", function () {
    titleBasket.innerText = `Корзина: ${++queryBasket}`;
    window.localStorage.setItem("basket-product", queryBasket);
    basket.classList.add("basket-product-grid");
  });
});

buttonRemoveBasket.addEventListener("click", function () {
  if (queryBasket <= 0) {
    queryBasket = 0;
  } else {
    titleBasket.innerText = `Корзина: ${--queryBasket}`;
    window.localStorage.setItem("basket-product", queryBasket);
  }
});

const basketArray = [];

// Создание кнопок "В корзину" для товаров

const basketProductTitleBox = document.querySelector(".basket_product_title_box");
const basketProductQuantityBox = document.querySelector(".basket_product_quantity_box");
const basketProductPriceBox = document.querySelector(".basket_product_price_box");
const basketProductRemoveBox = document.querySelector(".basket_product_remove_box");

const buttonBasket1 = document.querySelector(".basket-button-1");
buttonBasket1.addEventListener("click", function () {
  const basketQuantityProductLaptop = document.querySelector(".basket-quantity-product-laptop");
  const basketTotalPriceLaptop = document.querySelector(".total-price-laptop");
  if (basketQuantityProductLaptop) {
    basketQuantityProductLaptop.innerText = ++queryLaptop;
    priceLaptop = product[0].price * queryLaptop;
  } else {
    if (basketEmpty) {
    basketEmpty.remove();
  }
    const basketTitleProduct = document.createElement("h4");
    const basketPriceProduct = document.createElement("p");
    const basketQuantityProduct = document.createElement("p");
    const basketButtonRemoveProduct = document.createElement("button");
    const basketRemoveProduct = document.createElement("img");
    basketQuantityProduct.classList.add("basket-quantity-product-laptop");
    basketPriceProduct.classList.add("total-price-laptop");
    basketTitleProduct.innerText = product[0].title;
    basketQuantityProduct.innerText = ++queryLaptop;
    basketPriceProduct.innerText = product[0].price;
    basketRemoveProduct.setAttribute("src", "https://img.icons8.com/ios-glyphs/20/minus.png");
    basketButtonRemoveProduct.classList.add("basket-button-remove-basket");
    basketButtonRemoveProduct.classList.add("basket-button-remove-basket-laptop");
    basketProductTitleBox.append(basketTitleProduct);
    basketProductQuantityBox.append(basketQuantityProduct);
    basketProductPriceBox.append(basketPriceProduct);
    basketProductRemoveBox.append(basketButtonRemoveProduct);
    basketButtonRemoveProduct.append(basketRemoveProduct);

    basketButtonRemoveProduct.addEventListener("click", function () {
      const basketQuantityProductRemove = document.querySelector(".basket-quantity-product-laptop");
      const basketTotalPriceLaptopRemove = document.querySelector(".total-price-laptop");
      const basketTitleProductRemove = document.querySelector(".basket_product_title_box h4");
      if (queryLaptop > 1) {
        basketQuantityProductRemove.innerText = --queryLaptop;
        priceLaptop = priceLaptop - product[0].price;
        basketTotalPriceLaptopRemove.innerText = priceLaptop;
        titleBasket.innerText = `Корзина: ${--queryBasket}`;
        window.localStorage.setItem("basket-product", queryBasket);
        console.log(queryBasket);
      } else if (queryBasket === 0) {
        queryLaptop = 0;
        priceLaptop = 0;
        basketTitleProduct.remove();
        basketPriceProduct.remove();
        basketQuantityProduct.remove();
        basketButtonRemoveProduct.remove();
        const basketEmptyCreate = document.createElement("p");
        basketEmptyCreate.innerText = "Ваша корзина пуста";
        basket.classList.remove("basket-product-grid");
        basket.append(basketEmptyCreate);
        console.log(queryBasket);
       } else {
        queryLaptop = 0;
        priceLaptop = 0;
        basketTitleProduct.remove();
        basketPriceProduct.remove();
        basketQuantityProduct.remove();
        basketButtonRemoveProduct.remove();
        titleBasket.innerText = `Корзина: ${--queryBasket}`;
        window.localStorage.setItem("basket-product", queryBasket);
        console.log(queryBasket);
      }
    });
  }
  basketTotalPriceLaptop.innerText = priceLaptop;
  console.log(queryBasket);
});

const buttonBasket2 = document.querySelector(".basket-button-2");
buttonBasket2.addEventListener("click", function () {
  const basketQuantityProductSmartphone = document.querySelector(".basket-quantity-product-smartphone");
  const basketTotalPriceSmartphone = document.querySelector(".total-price-smartphone");
  if (basketQuantityProductSmartphone) {
    basketQuantityProductSmartphone.innerText = ++querySmartphone;
    priceSmartphone = product[1].price * querySmartphone;
  } else {
    if (basketEmpty) {
    basketEmpty.remove();
  }
    const basketTitleProduct = document.createElement("h4");
    const basketPriceProduct = document.createElement("p");
    const basketQuantityProduct = document.createElement("p");
    const basketButtonRemoveProduct = document.createElement("button");
    const basketRemoveProduct = document.createElement("img");
    basketQuantityProduct.classList.add("basket-quantity-product-smartphone");
    basketPriceProduct.classList.add("total-price-smartphone");
    basketTitleProduct.innerText = product[1].title;
    basketQuantityProduct.innerText = ++querySmartphone;
    basketPriceProduct.innerText = product[1].price;
    basketRemoveProduct.setAttribute("src", "https://img.icons8.com/ios-glyphs/20/minus.png");
    basketButtonRemoveProduct.classList.add("basket-button-remove-basket");
    basketButtonRemoveProduct.classList.add("basket-button-remove-basket-smartphone");
    basketProductTitleBox.append(basketTitleProduct);
    basketProductQuantityBox.append(basketQuantityProduct);
    basketProductPriceBox.append(basketPriceProduct);
    basketProductRemoveBox.append(basketButtonRemoveProduct);
    basketButtonRemoveProduct.append(basketRemoveProduct);

    basketButtonRemoveProduct.addEventListener("click", function () {
      const basketQuantityProductRemove = document.querySelector(".basket-quantity-product-smartphone");
      const basketTotalPriceSmartphoneRemove = document.querySelector(".total-price-smartphone");
      const basketTitleProductRemove = document.querySelector(".basket_product_title_box h4");
      if (querySmartphone > 1) {
        basketQuantityProductRemove.innerText = --querySmartphone;
        priceSmartphone = priceSmartphone - product[1].price;
        basketTotalPriceSmartphoneRemove.innerText = priceSmartphone;
        titleBasket.innerText = `Корзина: ${--queryBasket}`;
        window.localStorage.setItem("basket-product", queryBasket);
      } else if (queryBasket === 0) {
        querySmartphone = 0;
        priceSmartphone = 0;
        basketTitleProduct.remove();
        basketPriceProduct.remove();
        basketQuantityProduct.remove();
        basketButtonRemoveProduct.remove();
        const basketEmptyCreate = document.createElement("p");
        basketEmptyCreate.innerText = "Ваша корзина пуста";
        basket.classList.remove("basket-product-grid");
        basket.append(basketEmptyCreate);
      } else {
        querySmartphone = 0;
        priceSmartphone = 0;
        basketTitleProduct.remove();
        basketPriceProduct.remove();
        basketQuantityProduct.remove();
        basketButtonRemoveProduct.remove();
        titleBasket.innerText = `Корзина: ${--queryBasket}`;
        window.localStorage.setItem("basket-product", queryBasket);
      }
    });
  }
  basketTotalPriceSmartphone.innerText = priceSmartphone;
});

const buttonBasket3 = document.querySelector(".basket-button-3");
buttonBasket3.addEventListener("click", function () {
  const basketQuantityProductWatch = document.querySelector(".basket-quantity-product-watch");
  const basketTotalPriceWatch = document.querySelector(".total-price-watch");
  if (basketQuantityProductWatch) {
    basketQuantityProductWatch.innerText = ++queryWatch;
    priceWatch = product[2].price * queryWatch;
  } else {
    if (basketEmpty) {
    basketEmpty.remove();
  }
    const basketTitleProduct = document.createElement("h4");
    const basketPriceProduct = document.createElement("p");
    const basketQuantityProduct = document.createElement("p");
    const basketButtonRemoveProduct = document.createElement("button");
    const basketRemoveProduct = document.createElement("img");
    basketQuantityProduct.classList.add("basket-quantity-product-watch");
    basketPriceProduct.classList.add("total-price-watch");
    basketTitleProduct.innerText = product[2].title;
    basketQuantityProduct.innerText = ++queryWatch;
    basketPriceProduct.innerText = product[2].price;
    basketRemoveProduct.setAttribute("src", "https://img.icons8.com/ios-glyphs/20/minus.png");
    basketButtonRemoveProduct.classList.add("basket-button-remove-basket");
    basketButtonRemoveProduct.classList.add("basket-button-remove-basket-watch");
    basketProductTitleBox.append(basketTitleProduct);
    basketProductQuantityBox.append(basketQuantityProduct);
    basketProductPriceBox.append(basketPriceProduct);
    basketProductRemoveBox.append(basketButtonRemoveProduct);
    basketButtonRemoveProduct.append(basketRemoveProduct);

    basketButtonRemoveProduct.addEventListener("click", function () {
      const basketQuantityProductRemove = document.querySelector(".basket-quantity-product-watch");
      const basketTotalPriceWatchRemove = document.querySelector(".total-price-watch");
      const basketTitleProductRemove = document.querySelector(".basket_product_title_box h4");
      if (queryWatch > 1) {
        basketQuantityProductRemove.innerText = --queryWatch;
        priceWatch = priceWatch - product[2].price;
        basketTotalPriceWatchRemove.innerText = priceWatch;
        titleBasket.innerText = `Корзина: ${--queryBasket}`;
        window.localStorage.setItem("basket-product", queryBasket);
      } else if (queryBasket === 0) {
        queryWatch = 0;
        priceWatch = 0;
        basketTitleProduct.remove();
        basketPriceProduct.remove();
        basketQuantityProduct.remove();
        basketButtonRemoveProduct.remove();
        const basketEmptyCreate = document.createElement("p");
        basketEmptyCreate.innerText = "Ваша корзина пуста";
        basket.classList.remove("basket-product-grid");
        basket.append(basketEmptyCreate);
      } else {
        queryWatch = 0;
        priceWatch = 0;
        basketTitleProduct.remove();
        basketPriceProduct.remove();
        basketQuantityProduct.remove();
        basketButtonRemoveProduct.remove();
        titleBasket.innerText = `Корзина: ${--queryBasket}`;
        window.localStorage.setItem("basket-product", queryBasket);
      }
    });
  }
  basketTotalPriceWatch.innerText = priceWatch;
});