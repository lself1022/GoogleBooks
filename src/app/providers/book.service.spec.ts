import {TestBed} from '@angular/core/testing';

import {BookService} from './book.service';
import {Book} from "../models/book";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

let response = {
  items: [
    {
      volumeInfo: {
        title: 'title1',
        description: 'description1',
        authors: ['author1'],
        printType: 'BOOK1',
        imageLinks: {thumbnail: 'thumbnail1'}
      }
    },
    {
      volumeInfo: {
        title: 'title2',
        description: 'description2',
        authors: ['author2'],
        printType: 'BOOK2',
        imageLinks: {thumbnail: 'thumbnail2'}
      }
    },
    {
      volumeInfo: {
        title: 'title3',
        description: 'description3',
        authors: ['author3'],
        printType: 'BOOK3',
        imageLinks: {thumbnail: 'thumbnail3'}
      }
    },
  ]
}

describe('BookService', () => {
  let service: BookService;
  let httpClient: HttpClient;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BookService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getFavorite', () => {
    it('returns the favorite book', () => {
      let favBook = new Book();
      service.favorite = favBook;
      expect(service.getFavorite()).toEqual(favBook);
    });
  });

  describe('setFavorite', function () {
    it('should set the favorite property to the passed in book', function () {
      let favBook = new Book();
      service.setFavorite(favBook);
      expect(service.favorite).toEqual(favBook);
    });
  });

  describe('getSearchResults', () => {
    let term = 'banana';

    it('should make an API request', function () {
      spyOn(httpClient,'get').and.returnValue(of(response));
      service.getSearchResults(term);
      expect(httpClient.get).toHaveBeenCalled();
    });

    it('should call https://www.googleapis.com/books/v1/volumes for URL', function () {
      spyOn(httpClient, 'get').and.callFake((url: any): any => {
        expect(url).toContain('https://www.googleapis.com/books/v1/volumes');
        return of(response);
      });
      service.getSearchResults(term);
      expect(httpClient.get).toHaveBeenCalled();
    });

    it('should add the term as the value of q in the query params', function () {
      spyOn(httpClient, 'get').and.callFake((url: any): any => {
        expect(url).toContain('q=' + term);
        return of(response);
      });
      service.getSearchResults(term);
      expect(httpClient.get).toHaveBeenCalled();
    });

    it('should return a book object to be subscribed to', function () {
      spyOn(httpClient, 'get').and.callFake((url: any): any => {
        return of(response);
      });
      let bookObservable = service.getSearchResults(term);
      expect(bookObservable).toBeInstanceOf(Observable);
      bookObservable.subscribe((book: Book) => {
        expect(book).toBeInstanceOf(Book);
      });
    });
  });

  describe('getBooksToRead', () => {
    it('returns 3 book model objects when asked what books the user wants to read', () => {
      let results: Book[] = service.getBooksToRead();
      expect(results.length).toBe(3);
    });

    it('changes the title of each book to "To Read " + the index in the list', () => {
      let results: Book[] = service.getBooksToRead();
      for (let i = 0; i < 3; i++) {
        expect(results[i].title).toBe(`To Read ${ i }`);
      }
    });
  });

});
