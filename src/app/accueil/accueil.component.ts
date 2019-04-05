import {Component, OnInit} from '@angular/core';
import {AccueilService} from '../accueil.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  films: any[];

  getResultsFilms(data) {
    this.films = data.results;
    console.log(data.results);
  }

  constructor(private accueilService: AccueilService) {
  }

  getToFetchFilms() {
    console.log(this.accueilService.getUpcoming());
    return this.accueilService.getUpcoming()
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
  }

}
