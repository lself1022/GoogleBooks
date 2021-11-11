import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookComponent} from './book.component';
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('component', () => {

    describe('favorite button',  () => {

      it('should create', () => {
        const favoriteButton: DebugElement = fixture.debugElement.query(By.css('#favoriteButton'));
        expect(favoriteButton).toBeTruthy();
      });

      it('should call the favorite() method when clicked', function () {
        const favoriteButton: DebugElement = fixture.debugElement.query(By.css('#favoriteButton'));
        spyOn(favoriteButton.componentInstance, 'favorite');
        favoriteButton.nativeElement.click();
        expect(component.favorite).toHaveBeenCalled();
      });
    });

    it('has a label for the title with the value of "Title:" and displays the book title', () => {
      let titleElement: DebugElement = fixture.debugElement.query(By.css('#title'));
      expect(titleElement.nativeElement.textContent).toContain('Title: ' + component.book.title);
    });

    it('has a label for the author with the value of "Author:" and displays the book author', () => {
      let titleElement: DebugElement = fixture.debugElement.query(By.css('#author'));
      expect(titleElement.nativeElement.textContent).toContain('Author: ' + component.book.author);
    });

    it('has a label for the type with the value of "Type:" and displays the book type', () => {
      let typeElement: DebugElement = fixture.debugElement.query(By.css('#type'));
      expect(typeElement.nativeElement.textContent).toContain('Type: ' + component.book.type);
    });

    it('has a label for the description with the value of "Description:" and displays the book description', () => {
      let descriptionElement: DebugElement = fixture.debugElement.query(By.css('#description'));
      expect(descriptionElement.nativeElement.textContent).toContain('Description: ' + component.book.description);
    });

    it('has a label for the thumbnail with the value of "Thumbnail:" and displays the book thumbnail', () => {
      let thumbnailElement: DebugElement = fixture.debugElement.query(By.css('#thumbnail'));
      expect(thumbnailElement.nativeElement.src).toContain(component.book.thumbnail);
    });
  });
});
