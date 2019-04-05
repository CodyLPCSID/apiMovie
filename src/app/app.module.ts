import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchComponent} from './search/search.component';
import {FilmsComponent} from './films/films.component';
import {FilmDetailComponent} from './film-detail/film-detail.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AccueilComponent} from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilmsComponent,
    FilmDetailComponent,
    NavbarComponent,
    PageNotFoundComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
  ],
  entryComponents : [SearchComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
