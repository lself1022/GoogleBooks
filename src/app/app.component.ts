import { Component } from '@angular/core';
import {BookService} from "./providers/book.service";
import {Book} from "./models/book";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoogleBooks';
  favoriteBook: Book;

  constructor(public bookService: BookService) { }

  ngOnInit() {
    this.favoriteBook = new Book();
  }
}
