import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
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

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('component', () => {
    it('has a label for the title with the value of "Title:" and displays the book title', () => {
      let titleElement: DebugElement = fixture.debugElement.query(By.css('#title'));
      expect(titleElement).toBeTruthy();
      expect(titleElement.nativeElement.textContent).toContain('Title:');
      expect(titleElement.nativeElement.textContent).toContain(component.book.title);
    });
  });
});
