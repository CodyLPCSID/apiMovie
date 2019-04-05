import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  films: any[];
  json: any[];
  value = '';
  page = 2;

  getResultsFilms(data) {
    this.films = data.results;
    this.json = data;
    console.log(data.results);
    console.log(data);
  }


  constructor(private searchService: SearchService) {
  }

  getSearchFilms(value: string) {
    this.value = value;
    if (this.value === '') {
      return null;
    } else {
      console.log(this.searchService.searchFilm(this.value, 2));
      return this.searchService.searchFilm(this.value, 2)
        .subscribe(
          resp => {
            this.getResultsFilms(resp);
          },
          error => {
            alert('ERROR');
          });
    }
  }



  ngOnInit() {
    this.getSearchFilms('');
  }

}
