"use strict";

const EmptyCartException = require("./EmptyCartException");
module.exports = class Cart {

    //region private attributes
    #items
    //endregion private attributes

    //region public methods
    constructor(items) {
        this.#items = items;
    }

    get items() {
        this.#CheckEmptyCart(this.#items);
        return this.#items;
    }

    get total() {
        this.#CheckEmptyCart(this.#items);
        return this.#items.reduce((accumulator, item) => accumulator + item.total, 0);
    }

    count(distinct = false) {
        this.#CheckEmptyCart(this.#items);
        if (distinct) return this.items.length;
        return this.#items.reduce((accumulator, item) => accumulator + item.quantity, 0);
    }

    //endregion public methods

    //region private methods
    #CheckEmptyCart(value) {
        if (value === null) throw new EmptyCartException();
    }

    //endregion private methods
}



