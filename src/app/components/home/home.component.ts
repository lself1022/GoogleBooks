import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/book";
import {BookService} from "../../providers/book.service";

@Component({
  selector: 'gb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
