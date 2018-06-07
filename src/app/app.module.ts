import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tvshows/tvshows.component';
import { MovieDetailComponent } from './movies/movie-detail.component';
import { TvShowDetailComponent } from './tvshows/tvshow-detail.component';

import { DataService } from './shared/data.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TvShowsComponent,
    MovieDetailComponent,
    TvShowDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
