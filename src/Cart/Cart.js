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

    //endregion public methods

    //region private methods
    #CheckEmptyCart(value) {
        if (value === null) throw new EmptyCartException();
    }
    //endregion private methods
}



