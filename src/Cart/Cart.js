"use strict";

const EmptyCartException = require("./EmptyCartException");
const UpdateCartException = require("./UpdateCartException");
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
        this.#checkUpdateCart(value);
        if (this.#items) this.#items.push(...value);
        else this.#items = value;
    }

    //endregion public methods

    //region private methods
    #checkEmptyCart(value) {
        if (value === null) throw new EmptyCartException();
    }

    #checkUpdateCart(value) {
        if (value === null) throw new UpdateCartException();
    }

    //endregion private methods
}



