import {Component, OnInit} from '@angular/core';
import {BookService} from "./providers/book.service";
import {Book} from "./models/book";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GoogleBooks';
  favoriteBook: Book = new Book();
  booksToRead: Book[] = [];

  constructor(public bookService: BookService) { }

  ngOnInit() {
    this.favoriteBook = this.bookService.getFavorite();
    this.booksToRead = this.bookService.getBooksToRead();
  }

  favorite(book: Book): void {
    this.favoriteBook = book;
  }
}
