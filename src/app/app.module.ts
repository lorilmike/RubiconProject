import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';

import { MoviesComponent } from './movies/movies.component';
import { MovieThumbnailComponent } from './movies/movie-thumbnail.component';
import { MovieDetailsComponent } from './movies/movie-details.component';

import { TvShowsComponent } from './tvshows/tvshows.component';
import { TvShowDetailComponent } from './tvshows/tvshow-detail.component';

import { DataService } from './shared/data.service';
import { MoviesResolverService } from './movies/movies-resolver.service';
import { MovieResolverService } from './movies/movie-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MoviesComponent,
    MovieDetailsComponent,
    MovieThumbnailComponent,
    TvShowsComponent,
    TvShowDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    MoviesResolverService,
    MovieResolverService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
