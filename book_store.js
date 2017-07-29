var _ = require("lodash");

var BookStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 1000.00;
}

BookStore.prototype = {
  addBook: function(book) {
    this.inventory.push(book);
  },

  printBookDeets: function() {
    return _.forEach(this.inventory, function(book) {
      return book.print();
    })
  },

  listInventory: function() {
    return _.forEach(this.inventory, function(book) {
      return book;
    })
  },

  sellBook: function(book) {
    this.balance += book.sellPrice();
    _.remove(this.inventory, book);
  },

  storeCapital: function() {
    return _.round(_.sumBy(this.inventory, "price")) + ", " + this.balance;
  },

  findByGenre: function(type) {
    return _.filter(this.inventory, {genre: type});
  }
}

module.exports = BookStore;