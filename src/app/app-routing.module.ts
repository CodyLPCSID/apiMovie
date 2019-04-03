import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilmsComponent} from './films/films.component';

const routes: Routes = [
  { path: 'films', component: FilmsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
