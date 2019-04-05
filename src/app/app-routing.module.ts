import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilmsComponent} from './films/films.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AccueilComponent} from './accueil/accueil.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'toprated', component: FilmsComponent },
  { path: 'search', component: SearchComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
