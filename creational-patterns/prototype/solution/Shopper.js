class Shopper {

    constructor(name='unnamed person') {
        this._name = name;
        this._shoppingList = [];
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get shoppingList() {
        return this._shoppingList.join(', ');
    }

    addItemToList(item) {
        this._shoppingList.push(item);
    }

    clone(){
        const proto = Object.getPrototypeOf(this);
        const instance = Object.create(proto);

        instance.name = this.name;
        instance._shoppingList = [...this._shoppingList];
        return instance;
    }

}

//module.exports = Shopper;
export default Shopper;
