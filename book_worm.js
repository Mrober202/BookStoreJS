var _ = require("lodash");

var BookWorm = function() {
  this.cash = 200;
  this.bookCollection = [];
}

BookWorm.prototype = {
  addBook: function(book) {
    this.bookCollection.push(book);
  },

  buyBook: function(book) {
    if(this.cash > book.price) {
      this.cash -= book.sellPrice();
      this.bookCollection.push(book);
    } else {
      return "YUR SKINT AF AND YUR TRYIN TAE BUY A BOOK?";
    }
  },

  sellBook: function(book) {
    this.cash += book.sellPrice();
    _.remove(this.bookCollection, book);
  },

  getCollectionTotal: function() {
    return _.sumBy(this.bookCollection, "price");
  },

  getValueOfGenre: function(type) {
    return _.sumBy(_.filter(this.bookCollection, {genre: type}), "price");
  },

  getLongestBook: function() {
    return _.maxBy(this.bookCollection, "pageCount");
  }
}

module.exports = BookWorm;