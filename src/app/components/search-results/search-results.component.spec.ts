import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchResultsComponent} from './search-results.component';
import {Observable, of} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {BookComponent} from "../book-component/book.component";
import {BookService} from "../../providers/book.service";
import {Book} from "../../models/book";

class MockActivatedRoute{
  queryParams: Observable<Params> = new Observable<Params>();
}

class MockBookService{
  getSearchResults(term: String): Observable<Book> {
    return of();
  }
}

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
          SearchResultsComponent,
          BookComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useClass: MockActivatedRoute
        },
        {
          provide: BookService,
          useClass: MockBookService
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  describe('component', function () {
    describe('onNgInit', function () {
      it('should subscribe to the queryParams of the route', function () {
        const route: ActivatedRoute = TestBed.inject(ActivatedRoute);
        spyOn(route.queryParams, "subscribe").and.callFake((callback: any) => {
          return callback({ term: '123'});
        });
        component.ngOnInit();
        expect(route.queryParams.subscribe).toHaveBeenCalled();
        expect(component.term).toBe('123');
      });

      it('should subscribe to the BookService.getSearchResults and push returned books to results list', function () {
        let book: Book = new Book();
        book.title = 'Test Title';
        spyOn(component.bookService, 'getSearchResults').and.returnValue(of(book));
        component.ngOnInit();
        expect(component.results).toBeDefined();
        expect(component.results).toEqual([book]);
      });

    });

  });

});
