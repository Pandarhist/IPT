"use strict";

const orderForm = document.getElementById('order');
const productsContainer = document.getElementById('products');
const pizzas = [
    new Pizza('Margarita', [100, 200, 300], '../img/margarita.png'),
    new Pizza('Domashnyaya', [150, 260, 400], '../img/domashnyaya.png'),
    new Pizza('Don Corleone', [180, 250, 380], '../img/don-corleone.png'),
    new Pizza('Mexican', [120, 180, 300], '../img/mexican.png'),
    new Pizza('Peperoni', [100, 200, 300], '../img/peperoni.png'),
];

displayPizzas(pizzas);
addEvents(pizzas);

const orderButton = document.getElementById('order-button');

orderButton.addEventListener('click', () => processOrder(pizzas));

function Pizza(name, prices, picture){
    this.name = name;
    this.minPrice = prices[0];
    this.standardPrice = prices[1];
    this.maxPrice = prices[2];
    this.pictureUrl = picture;
}

// Вывод товаров на экран

function displayPizzas(pizzas) {
    for (let i = 0; i < pizzas.length; i++) {
        displayPizza(pizzas[i]);
    }
}

function displayPizza(pizza) {
    const priceId = getPriceId(pizza.name);
    const countName = getCountName(pizza.name);
    const sizeName = getSizeName(pizza.name);
    const container = `
<fieldset class="form__section">
<h2>${ pizza.name }</h2>
<div class="product__img-container">
    <img class="product__img" src="${ pizza.pictureUrl }" alt="${ pizza.name } picture">
</div>
<div>
    <input id="${ countName }" type="number" min="0" max="100" value="0" class="form__input form__input-small form__product-count">
</div>
<div class="form__price-block">
    <span id="${ priceId }" class="form__price">${ pizza.standardPrice }</span>
    <span class="form__price-desc">, pcs.</span>
</div>
<div class="horizontal-container">
    <label><input type="radio" name="${ sizeName }" value="min" /> Small</label>
    <label><input type="radio" name="${ sizeName }" value="standard" checked /> Standard</label>
    <label><input type="radio" name="${ sizeName }" value="max" /> Big</label>
</div>
</fieldset>`;

    productsContainer.innerHTML += container;
}

function getPizzaId(pizzaName) {
    return pizzaName.toLowerCase().split(' ').join('');
}

function getPriceId(pizzaName) {
    return `${ getPizzaId(pizzaName) }-price`;
}

function getCountName(pizzaName) {
    return `${ getPizzaId(pizzaName) }count`;
}

function getSizeName(pizzaName) {
    return `${ getPizzaId(pizzaName) }size`;
}

// Добавление событий на radio

function addEvents(pizzas) {
    for (let i = 0; i < pizzas.length; i++) {
        let name = pizzas[i].name;
        addSizeEvents(pizzas[i], getSizeName(name), getPriceId(name));
    }
}

function addSizeEvents(pizza, sizeName, priceId) {
    const fields = document.getElementsByName(sizeName);
    const size = fields[0].getAttribute('name');

    for (let i = 0; i < fields.length; i++) {
        fields[i].addEventListener('change', () => changePrice(pizza, priceId, size));
    }
}

function changePrice(pizza, priceId, sizeName) {
    const price = document.getElementById(priceId);
    price.innerText = getCurrentPrice(orderForm[sizeName].value, pizza).toString();
}

function getCurrentPrice(size, pizza){
    switch (size){
        case 'min':
            return pizza.minPrice;
        case 'standard':
            return pizza.standardPrice;
        case 'max':
            return pizza.maxPrice;
    }
}

// Обработка заказа

function processOrder() {
    let shoppingCart = getShoppingCart(pizzas);
    let orderInfo = getOrderInfo(shoppingCart);

    alert(orderInfo);
}

function getShoppingCart(pizzas) {
    let orderedPizzas = [];

    for(const pizza of pizzas) {
        let countItem = document.getElementById(getCountName(pizza.name));
        let count = parseInt(countItem.value);

        if(count > 0) {
            let size = getSelectedSize(pizza.name);
            let price = getCurrentPrice(size, pizza);

            orderedPizzas.push(new PizzaOrder(pizza.name, size, price, count));
        }
    }

    return orderedPizzas;
}

function getSelectedSize(pizzaName) {
    let sizes = [...document.getElementsByName(getSizeName(pizzaName))];

    return sizes.find((size) => size.checked).value;
}

function PizzaOrder(name, sizeName, price, count) {
    this.name = name;
    this.count = count;
    this.sizeName = sizeName;
    this.amount = price * count;
}

function getOrderInfo(shoppingCart) {
    const isDelivery = document.getElementById('isdelivery').checked;
    const order = new Order(shoppingCart, isDelivery);

    return getOrderDetails(order, isDelivery);
}

function Order(shoppingCart, isDelivery) {
    this.pizzas = shoppingCart;
    this.isDelivery = isDelivery;
    this.isFreeDelivery = (countBigPizzas() >= 2);
    this.isFreeDrink = (countBigPizzas() >= 3);
    this.totalAmount = getTotalAmount(this.isFreeDelivery, shoppingCart);

    function  getTotalAmount(isFreeDelivery, shoppingCart) {
        let amount = shoppingCart.reduce((sum, item) => sum += item.count, 0);

        return (isFreeDelivery) ? amount : amount += (0.05 * amount);
    }

    function countBigPizzas() {
        return shoppingCart.reduce(function (count, pizza){
            return (pizza.sizeName == 'max') ? count += pizza.count : count;
        }, 0);
    }
}

function getOrderDetails(order, isDelivery) {
    const pizzasInfo = order.pizzas.reduce(function (info, pizza) {
        let str = `${ pizza.name }: ${ pizza.amount }\n`
    return  info.concat(str);
    }, '');

    const deliveryInfo = (!isDelivery) ? `` : `Free delivery: ${ getAnswer(order.isFreeDelivery) }\nDelivery cost: 5%\n\n`;
    const orderInfo = `Order details\n\n` + pizzasInfo + `\n`+ deliveryInfo + `Free drinks: `+ getAnswer(order.isFreeDrink) +`\n\nTotal: `+ order.totalAmount;

    return  orderInfo;
}

function getAnswer(boolStatement) {
    return (boolStatement) ? 'Yes' : 'No';
}
