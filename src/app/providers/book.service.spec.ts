import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import {Book} from "../models/book";

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getFavorite', () => {
    it('returns a defined book', () => {
      const service: BookService = TestBed.inject(BookService);
      expect(service.getFavorite()).toBeDefined();
    });
  });

  describe('getSearchResults', () => {
    it('returns 10 books when searched with word "billy"', () => {
      let results: Book[] = service.getSearchResults('billy');
      expect(results.length).toEqual(10);
    });

    it('changes title of each book to be "Search Result" plus index', () => {
      let results: Book[] = service.getSearchResults('billy');
      for (let i = 0; i < 10; i++) {
        expect(results[i].title).toBe(`Search Result ${ i }`);
      }
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
