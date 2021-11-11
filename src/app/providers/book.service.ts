import { Injectable } from '@angular/core';
import {Book} from "../models/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getFavorite() {
    return new Book();
  }

  getSearchResults(term: string) {
    let bookArray: Book[] = [];
    for (let i = 0; i < 10; i++) {
      let newBook = new Book();
      newBook.title = `Search Result ${i}`;
      bookArray.push(newBook);
    }
    return bookArray;
  }
}
