import {Component, OnInit} from '@angular/core';
import {FilmService} from '../film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
})
export class FilmsComponent implements OnInit {

  films: any[];

  getResultsFilms(data) {
    this.films = data.results;
    console.log(data.results);
  }


  constructor(private filmService: FilmService) {
  }

  getToFetchFilms() {
    console.log(this.filmService.getAllTopRatedFilms());
    return this.filmService.getAllTopRatedFilms()
      .subscribe(
        data => {
          this.getResultsFilms(data);
        },
        error => {
          alert('ERROR');
        });
  }

  ngOnInit() {
    this.getToFetchFilms();
    // let obs = this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=b6aeb3ece0d12122656a309c7613fec1&language=en-US&page=1');
    // obs.subscribe((response) => console.log(response));
  }

}
