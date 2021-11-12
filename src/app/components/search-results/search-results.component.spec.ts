import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsComponent } from './search-results.component';
import {Observable} from "rxjs";
import {Params} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

class MockActivatedRoute{
  queryParams: Observable<Params> = new Observable<Params>();
}

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultsComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useClass: MockActivatedRoute
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

    });

  });

});
