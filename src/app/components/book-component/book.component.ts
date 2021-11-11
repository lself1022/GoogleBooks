import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/book";

@Component({
  selector: 'gb-book-component',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: Book;

  constructor() {
    this.book = new Book();
  }

  ngOnInit(): void {
  }

}
