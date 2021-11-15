import {Injectable} from '@angular/core';
import {Book} from "../models/book";
import {HttpClient} from "@angular/common/http";
import {map, mergeMap, Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class BookService {
  setFavorite(favBook: Book) {
      this.favorite = favBook;
  }

  favorite: Book = new Book();

  constructor(public httpClient: HttpClient) { }

  getFavorite() {
    return this.favorite;
  }

  getSearchResults(input: String): Observable<Book> {
    let url: string = 'https://www.googleapis.com/books/v1/volumes?q=' + input;
    return this.httpClient.get(url)
        .pipe(mergeMap((value: any) => {
          return value.items;
        }))
        .pipe(map((value: any) => {
          return value.volumeInfo;
        }))
        .pipe(map((value: any) => {
            let book = new Book();
            book.description = value.description;
            book.author = value.authors.join(', ');
            book.type = value.printType;
            book.title = value.title;
            book.thumbnail = value.imageLinks.thumbnail;
            return book;
        }))
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