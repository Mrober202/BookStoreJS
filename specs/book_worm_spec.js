var assert = require("assert");
var BookStore = require("../book_store.js");
var Book = require("../book.js");
var BookWorm = require("../book_worm.js");

describe("BookWorm", function() {
  var bookWorm;
  var bookStore;
  var book1;
  var book2;
  var book3;
  var book4;


  beforeEach(function() {
    book1 = new Book("R Kelly", "How did she get in there?", "RomCom", 11.99, 600);
    book2 = new Book("Alan Russell", "SpiderHands: how to code using one hand", "Factual", 2000, 100);
    book3 = new Book("Graham Bruce", "Pretty Fly For a Chookter", "Fiction", 65.99, 56);
    book4 = new Book("Michael Robertson", "The art of the inside Joke", "Factual", 90.00, 1700);

    bookStore = new BookStore("Borders", "InverNaeWhere");
    bookWorm1 = new BookWorm();
    bookWorm2 = new BookWorm();

  })

  it("should be able to buy and sell books", function() {
    bookWorm1.addBook(book1);
    bookWorm1.addBook(book2);
    bookWorm1.addBook(book3);
    bookWorm1.buyBook(book4);
    assert.strictEqual(bookWorm1.bookCollection.length, 4);
    assert.strictEqual(bookWorm1.cash, 110);
    bookWorm1.sellBook(book1);
    assert.strictEqual(bookWorm1.bookCollection.length, 3);
    assert.strictEqual(bookWorm1.cash, 121.99);
  })

  it("shouldn't be able to buy a Book if they can't afford it.", function() {
    bookWorm1.addBook(book1);
    bookWorm1.buyBook(book2);
    assert.strictEqual(bookWorm1.bookCollection.length, 1);
  })

  it("should be able to view the total value of their collection", function() {
    bookWorm1.addBook(book1);
    bookWorm1.addBook(book2);
    bookWorm1.addBook(book3);
    bookWorm1.buyBook(book4);
    assert.deepEqual(bookWorm1.getCollectionTotal(), 2167.98);
  })

  it("should be able to view the total value of all books of a given Genre", function() {
    bookWorm1.addBook(book1);
    bookWorm1.addBook(book2);
    bookWorm1.addBook(book3);
    bookWorm1.buyBook(book4);
    assert.strictEqual(bookWorm1.getValueOfGenre("factual"), 2090.00);
  })

  it("should be able to view their longest book", function() {
    bookWorm1.addBook(book1);
    bookWorm1.addBook(book2);
    bookWorm1.addBook(book3);
    bookWorm1.buyBook(book4);
    assert.strictEqual(bookWorm1.getLongestBook(), [book4]);
  })

  xit("should be able to sort their books by value. (ascending or descending)", function() {

  })

  xit("should be able to compare the value of their collection with another BookWorm", function() {

  })

})