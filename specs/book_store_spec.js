var assert = require("assert");
var BookStore = require("../book_store.js");
var Book = require("../book.js");

describe("BookStore", function() {

  var bookStore;
  var book1;
  var book2;
  var book3;
  var book4;
  var book5;
  var book6;
  var book7;

  beforeEach(function() {
    book1 = new Book("David Clarkson", "A Guide to Null Pointer Exceptions", "RomCom", 25.99, 500);
    book2 = new Book("Chris Burn", "Vandelising Using Weezer Quotes and How To Get Away With It", "Crime", 14.99, 100);
    book3 = new Book("Graham Bruce", "Pretty Fly For a Chookter", "Fiction", 65.99, 56);
    book4 = new Book("Kieran Marshall", "Taking Tesco For All Its Worth: One Meal Deal at a Time", "Economics", 3.00, 700);
    book5 = new Book("Chris Burn", "Code... It's Easy!", "Java", 23.70, 300);
    book6 = new Book("Eddie Ng", "How to Consume your own weight in Jafa Cakes", "Factual", 3.70, 30);
    book7 = new Book("Dale Johnstone", "10 Reasons Why JavaScript is The Devil", "C# 4 lyf", 23.70, 10000);
    bookStore = new BookStore("Borders", "InverNaeWhere");

    bookStore.addBook(book1);
    bookStore.addBook(book2);
    bookStore.addBook(book3);
    bookStore.addBook(book4);
    bookStore.addBook(book5);
    bookStore.addBook(book6);
    bookStore.addBook(book7);

  })
  it("should be able to add to the store inventory", function() {
    assert.strictEqual(bookStore.inventory.length, 7);
  })

  it("should be able to return a books info", function() {
    bookStore.addBook(book1);
    assert.deepEqual(bookStore.printBookDeets()[0], {"author": "David Clarkson", "title": "A Guide to Null Pointer Exceptions", "genre": "RomCom", "price": 25.99,"pageCount": 500  });
  })

  it("should be able to return the list of inventory", function() {
    assert.deepEqual(bookStore.listInventory(), [book1, book2, book3, book4, book5, book6, book7]);
  })

  it("should be able to sell a Book and adjusts the Store's balance to account for the Book being sold.", function() {
    assert.strictEqual(bookStore.inventory.length, 7);
    bookStore.sellBook(book4);
    assert.strictEqual(bookStore.inventory.length, 6);
    assert.strictEqual(bookStore.balance, 1003.00)
  })

  it("should be able to return the balance and the value of stock", function() {
    assert.deepEqual(bookStore.storeCapital(), "161, 1000");
  })

  it("should be able to allow the store to view all Books of a given Genre", function() {
    assert.deepEqual(bookStore.findByGenre("RomCom"), [book1])
  })

})