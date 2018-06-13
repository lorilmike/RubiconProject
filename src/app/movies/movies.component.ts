import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../shared/data.service';

import { IMovie } from '../movies/movie.model';
import { NavbarService } from '../shared/navbar.service';

// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  term: string;
  movies;
  tenMovies;
  searchedMovies;
  subscription: Subscription;
  showMovies = true;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private nav: NavbarService) {
              }

  clicked() {
    this.nav.hide();
  }

  ngOnInit() {
    this.nav.show();
    this.gettingSearchedMovies();
  }

  gettingSearchedMovies() {
    this.subscription = this.nav.navItem$.debounceTime(400)
                                         .distinctUntilChanged()
                                         .subscribe(
    term => {
      this.term = term;
      if (this.term.length >= 3) {
          this.searchedMovies = this.nav.search(this.term).subscribe(data => {
          this.searchedMovies = data;
          this.searchedMovies = this.searchedMovies.results;
          this.searchedMovies = this.searchedMovies.filter((searchedItem => {
              return searchedItem.poster_path !== null &&
                     searchedItem.title.toLocaleLowerCase().indexOf(this.term) !== -1;
          }));
        this.showMovies = false;
        });
      } else {
        this.movies = this.route.snapshot.data['movies']; // used for getting data through resolve service
        this.tenMovies = this.movies.results;
        this.tenMovies = this.tenMovies.slice(0, 10);
        this.showMovies = true;
      }
    });
  }
}
