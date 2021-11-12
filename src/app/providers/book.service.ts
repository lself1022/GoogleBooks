import {Injectable} from '@angular/core';
import {Book} from "../models/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getFavorite() {
    let newBook = new Book();
    newBook.title = `The Bestest Book Ever`;
    newBook.thumbnail = BOOK_THUMBNAILS[3];
    newBook.type = 'Print';
    newBook.author = `A. Thor`;
    newBook.description = `THIS BOOK IS Fing INCREDIBLE`;
    return newBook;
  }

  getSearchResults() {
    let bookArray: Book[] = [];
    for (let i = 0; i < 10; i++) {
      let newBook = new Book();
      newBook.title = `Search Result ${i}`;
      bookArray.push(newBook);
    }
    return bookArray;
  }

  getBooksToRead() {
    let bookArray: Book[] = [];
    for (let i = 0; i < 3; i++) {
      let newBook = new Book();
      newBook.title = `To Read ${i}`;
      newBook.thumbnail = BOOK_THUMBNAILS[i];
      newBook.type = 'Print';
      newBook.author = `Number ${i}. Author`;
      newBook.description = `Book number ${i} is the ${i}th book in our list of books with index ${i}`;
      bookArray.push(newBook);
    }
    return bookArray;
  }
}

const BOOK_THUMBNAILS: String[] = [
    'https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555',
    'https://media.istockphoto.com/photos/blue-book-cover-picture-id124449413?k=20&m=124449413&s=612x612&w=0&h=JfjGcOVOHVdMGdrtPZj_cNxcCZ3Sn1BWHOGkeNlSIBU=',
    'https://i.pinimg.com/originals/d4/2e/d7/d42ed7bf30a4c1a6a201565f0bc61190.jpg',
    'https://www.mobileread.com/forums/attachment.php?attachmentid=111265&d=1378642555',
];