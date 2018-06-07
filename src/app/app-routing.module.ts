import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movies/movie-detail.component';
import { TvShowsComponent } from './tvshows/tvshows.component';
import { TvShowDetailComponent } from './tvshows/tvshow-detail.component';

import { MovieGuardService } from './movies/movie-guard.service';
import { TvShowGuardService } from './tvshows/tvshow-guard.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'movies', component: MoviesComponent},
      { path: 'movies/:id', canActivate: [MovieGuardService], component: MovieDetailComponent},
      { path: 'tvshows', component: TvShowsComponent},
      { path: 'tvshows/:id', canActivate: [TvShowGuardService], component: TvShowDetailComponent},
      { path: '', redirectTo: 'movies', pathMatch: 'full'},
      { path: '**', redirectTo: 'movies', pathMatch: 'full'}
    ])
  ],
  declarations: [],
  providers: [
    MovieGuardService,
    TvShowGuardService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
