import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccueilService {


  private KEY: string = environment.MOVIE_API_KEY;
  private URL: string = environment.MOVIE_API_URL_UPCOMING;
  private lang = '&language=fr-FR';
  private nbPage = '&page=1';

  // private filmUrlTest = 'https://api.themoviedb.org/3/movie/top_rated?api_key=b6aeb3ece0d12122656a309c7613fec1&language=en-US&page=1';
  constructor(private http: HttpClient) {
  }

  public getUpcoming() {
    return this.http.get(this.URL + this.KEY + this.lang + this.nbPage);
  }



}
