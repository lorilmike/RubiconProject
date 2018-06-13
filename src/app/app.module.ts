import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { MoviesModule } from './movies/movies.module';
import { TvShowsModule } from './tvshows/tvshows.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { DataService } from './shared/data.service';
import { NavbarService } from './shared/navbar.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    MoviesModule,
    TvShowsModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    NavbarService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
