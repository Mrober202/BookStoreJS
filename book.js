var Book = function(author, title, genre, price, pageCount) {
  this.author = author;
  this.title = title;
  this.genre = genre;
  this.price = price;
  this.pageCount = pageCount;
}

Book.prototype = {

  print: function() {
    return "author: " + this.author + ", " + "title: " + this.title + ", " + "genre: " + this.genre + ", " + "price: " + this.price + ", " + "pageCount: " + this.pageCount;
  },

  sellPrice: function() {
    return this.price;
  }
}

module.exports = Book;