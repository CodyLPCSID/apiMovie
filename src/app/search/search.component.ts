import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  films: any[];
  json: any[];
  value = '';
  page = 1;
  previousPage = 1;

  public isCollapsed = false;

  getResultsFilms(data) {
    this.films = data.results;
    this.json = data;
    console.log(data.results);
    console.log(data);
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.getSearchFilms(this.value, this.page);
    }
  }

  constructor(private searchService: SearchService, config: NgbRatingConfig) {
    config.max = 10;
    config.readonly = true;
  }

  getSearchFilms(value: string, page: number) {
    this.value = value;
    this.page = page;
    if (this.value === '') {
      return null;
    } else {
      console.log(this.searchService.searchFilm(this.value, page));
      return this.searchService.searchFilm(this.value, page)
        .subscribe(
          resp => {
            this.getResultsFilms(resp);
          });
    }
  }


  ngOnInit() {
    this.getSearchFilms('', this.page);
  }

}
