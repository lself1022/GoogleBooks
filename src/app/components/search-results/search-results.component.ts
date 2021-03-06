import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Book} from "../../models/book";
import {BookService} from "../../providers/book.service";

@Component({
  selector: 'gb-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  term: String = '';
  results: Book[] = [];

  constructor(private route: ActivatedRoute, public bookService: BookService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.term = params['term'];
    });
    this.results = []
    this.bookService.getSearchResults(this.term).subscribe((book: Book) => {
      this.results.push(book);
    });
  }


}
