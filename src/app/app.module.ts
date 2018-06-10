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
import { TvShowDetailsComponent } from './tvshows/tvshow-details.component';
import { TvShowThumbnailComponent } from './tvshows/tvshow-thumbnail.component';

import { DataService } from './shared/data.service';
import { NavbarService } from './shared/navbar.service';

import { MoviesResolverService } from './movies/movies-resolver.service';
import { MovieResolverService } from './movies/movie-resolver.service';
import { MovieGuardService } from './movies/movie-guard.service';

import { TvShowsResolverService } from './tvshows/tvshows-resolver.service';
import { TvShowResolverService } from './tvshows/tvshow-resolver.service';
import { TvShowGuardService } from './tvshows/tvshow-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MoviesComponent,
    MovieDetailsComponent,
    MovieThumbnailComponent,
    TvShowsComponent,
    TvShowDetailsComponent,
    TvShowThumbnailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    NavbarService,
    MoviesResolverService,
    MovieResolverService,
    MovieGuardService,
    TvShowsResolverService,
    TvShowResolverService,
    TvShowGuardService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
