import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilmsComponent} from './films/films.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'films', component: FilmsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
