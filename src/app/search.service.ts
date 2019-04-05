import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private KEY: string = environment.MOVIE_API_KEY;
  private URL: string = environment.MOVIE_API_URL_SEARCH;
  private lang = '&language=fr-FR';
  private query = '&query=';
  private nbPage = '&page=';
  // private filmUrlTest = 'https://api.themoviedb.org/3/movie/top_rated?api_key=b6aeb3ece0d12122656a309c7613fec1&language=en-US&page=1';
  constructor(private http: HttpClient) { }

  public searchFilm(input, page) {
    return this.http.get(this.URL + this.KEY + this.lang + this.query + input +  this.nbPage + page);
  }

}
