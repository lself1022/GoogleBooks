import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../models/book";

@Component({
  selector: 'gb-book-component',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  isFavorite: boolean = false;

  @Input()
  book: Book = new Book();

  @Output()
  favoriteEvent: EventEmitter<Book> = new EventEmitter<Book>();

  constructor() {
  }

  ngOnInit(): void {
  }


  favorite() {
    this.favoriteEvent.emit(this.book);
  }
}
