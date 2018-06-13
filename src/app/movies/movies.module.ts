import { NgModule } from '@angular/core';
import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MoviesComponent } from './movies.component';
import { MovieThumbnailComponent } from './movie-thumbnail.component';
import { MovieDetailsComponent } from './movie-details.component';

import { MovieGuardService } from './movie-guard.service';
import { MoviesResolverService } from './movies-resolver.service';
import { MovieResolverService } from './movie-resolver.service';

@NgModule({
  imports: [
    MoviesRoutingModule,
    SharedModule
  ],
  declarations: [
    MoviesComponent,
    MovieThumbnailComponent,
    MovieDetailsComponent
  ],
  providers: [
    MovieGuardService,
    MoviesResolverService,
    MovieResolverService
  ]
})
export class MoviesModule { }
