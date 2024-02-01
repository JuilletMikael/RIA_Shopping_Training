"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    #articleId
    #name
    #quantity
    #price
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
        this.#checkArticleId(articleId);
        this.#checkPrice(price);
        this.#checkQuantity(quantity);
        this.#articleId = articleId;
        this.#name = name;
        this.#quantity = quantity;
        this.#price = price;
    }

    get articleId() {
        return this.#articleId;
    }

    get name() {
        return this.#name;
    }

    get quantity() {
        return this.#quantity;
    }

    set quantity(value) {
        this.#checkQuantity(value);
        this.#quantity = value;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        this.#checkPrice(value);
        this.#price = value;
    }

    get total() {
        return this.#price * this.#quantity;
    }
    //endregion public methods

    //region private methods
    #checkArticleId(value) {
        if (value < 1) throw new InvalidArticleIdException();
    }

    #checkQuantity(value) {
        if (value < 1) throw new InvalidQuantityException();
    }

    #checkPrice(value) {
        if (value < 10) throw new InvalidPriceException();
    }
    //endregion private methods
}



