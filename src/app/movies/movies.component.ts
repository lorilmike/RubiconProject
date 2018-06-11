import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../shared/data.service';

import { IMovie } from '../movies/movie.model';
import { NavbarService } from '../navbar/navbar.service';

import { FilterPipe } from '../shared/filter.pipe';

@Component({
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies;
  tenMovies: any[];
  searchedMovies: any[];
  showMovies = true;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private nav: NavbarService) {}

  clicked() {
    this.nav.hide();
  }

  ngOnInit() {
    this.nav.show();

    if (this.nav.searchedMovies && this.nav.searchedTerm.length > 2) {
      this.searchedMovies = this.nav.searchedMovies;
      this.searchedMovies = this.searchedMovies.filter(searchedMovie => {
        return searchedMovie.poster_path !== null;
      });
      console.log(this.searchedMovies);
      this.showMovies = false;
    } else {
      this.movies = this.route.snapshot.data['movies']; // used for getting data through resolve service
      this.tenMovies = this.movies.results;
      this.tenMovies = this.tenMovies.slice(0, 10);
    }
  }
}
