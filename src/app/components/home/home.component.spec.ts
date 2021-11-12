import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {Book} from "../../models/book";
import {By} from "@angular/platform-browser";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should have the book property set to the value returned from the service when ngOnInit is called', function () {
    let book: Book = new Book();
    spyOn(component.bookService,'getFavorite').and.returnValue(book);
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.bookService.getFavorite).toHaveBeenCalled();
    expect(component.favoriteBook).toBe(book);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'GoogleBooks'`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('GoogleBooks');
  });

  describe('component', () => {
    describe('addToFavorite', () => {
      it('should set the favoriteBook property to be the passed value', function () {
        let oldFavorite: Book = new Book();
        let newFavorite: Book = new Book();
        newFavorite.title = 'new title';
        component.favoriteBook = oldFavorite;
        component.favorite(newFavorite);
        expect(component.favoriteBook).toBe(newFavorite);
      });
    });
  });

  describe('template', () => {
    it('should have BookComponent elements equal to the number of booksToRead stored in the HomeComponent', function () {
      component.ngOnInit();
      fixture.detectChanges();
      const bookElements = fixture.debugElement.queryAll(By.css('.bookToRead'));
      expect(bookElements.length).toEqual(component.booksToRead.length);
    });

    it('should invoke "favorite(book: Book)" when the favorite is emitted from theBookComponent', function () {
      spyOn(component,'favorite');
      const bookElement = fixture.debugElement.query(By.css('gb-book-component'));
      bookElement.nativeElement.dispatchEvent(new Event('favoriteEvent'));
      expect(component.favorite).toHaveBeenCalled();
    });
  });

});
