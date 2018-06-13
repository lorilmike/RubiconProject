import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';
import { MovieDetailsComponent } from './movie-details.component';

import { MovieGuardService } from './movie-guard.service';
import { MoviesResolverService } from './movies-resolver.service';
import { MovieResolverService } from './movie-resolver.service';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'movies', component: MoviesComponent, resolve: {movies: MoviesResolverService}},
        { path: 'movies/:id', component: MovieDetailsComponent,
          resolve: {movie: MovieResolverService}, canActivate: [MovieGuardService]}
        ])
    ],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
