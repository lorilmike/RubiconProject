import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movies/movie-details.component';

import { TvShowsComponent } from './tvshows/tvshows.component';
import { TvShowDetailsComponent } from './tvshows/tvshow-details.component';

import { MovieGuardService } from './movies/movie-guard.service';
import { MoviesResolverService } from './movies/movies-resolver.service';
import { MovieResolverService } from './movies/movie-resolver.service';

import { TvShowResolverService } from './tvshows/tvshow-resolver.service';
import { TvShowsResolverService } from './tvshows/tvshows-resolver.service';
import { TvShowGuardService } from './tvshows/tvshow-guard.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'movies', component: MoviesComponent, resolve: {movies: MoviesResolverService}},
      { path: 'movies/:id', component: MovieDetailsComponent,
        resolve: {movie: MovieResolverService}, canActivate: [MovieGuardService]},
      { path: 'tvshows', component: TvShowsComponent, resolve: {tvshows: TvShowsResolverService}},
      { path: 'tvshows/:id', component: TvShowDetailsComponent,
        resolve: {tvshow: TvShowResolverService}, canActivate: [TvShowGuardService]},
      { path: '', redirectTo: 'movies', pathMatch: 'full'},
      { path: '**', redirectTo: 'movies', pathMatch: 'full'}
    ],
    { preloadingStrategy: PreloadAllModules })
  ],
  declarations: [],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
