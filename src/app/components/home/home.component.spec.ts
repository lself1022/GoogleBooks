import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {By} from "@angular/platform-browser";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
    describe('addNewBook link', () => {
      it('should  exist as an anchor with a class of "addNewBook"', function () {
        const anchorElement = fixture.debugElement.query(By.css('.addNewBook'));
        expect(anchorElement).toBeTruthy();
      });

      it('should display "Add Book"', function () {
        const anchorElement = fixture.debugElement.query(By.css('.addNewBook'));
        expect(anchorElement.nativeElement.textContent).toContain('Add Book');
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
