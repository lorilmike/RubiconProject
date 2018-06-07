import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tvshows/tvshows.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'movies', component: MoviesComponent},
      { path: 'tvshows', component: TvShowsComponent},
      { path: '', redirectTo: 'movies', pathMatch: 'full'},
      { path: '**', redirectTo: 'movies', pathMatch: 'full'}
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
