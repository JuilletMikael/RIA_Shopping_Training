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
        this.#checkEmptyCart(this.#items);
        return this.#items;
    }

    get total() {
        this.#checkEmptyCart(this.#items);
        return this.#items.reduce((accumulator, item) => accumulator + item.total, 0);
    }

    count(distinct = false) {
        this.#checkEmptyCart(this.#items);
        if (distinct) return this.items.length;
        return this.#items.reduce((accumulator, item) => accumulator + item.quantity, 0);
    }

    add(value) {
        if (this.#items) this.#items.push(...value);
        else this.#items = value;
    }

    //endregion public methods

    //region private methods
    #checkEmptyCart(value) {
        if (value === null) throw new EmptyCartException();
    }

    //endregion private methods
}



