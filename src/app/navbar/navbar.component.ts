import { Component, OnInit, OnChanges } from '@angular/core';

import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';
import { NavbarService } from './navbar.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavBarComponent {
    searchedTerm = '';
    searchedMovies: any;
    searchedTvshows: any;

  constructor(private dataService: DataService,
              public nav: NavbarService,
              private router: Router) {}

  search(searchedTerm: string) {
    searchedTerm = this.searchedTerm.toLocaleLowerCase();
    this.nav.searchedTerm = searchedTerm;

    if (this.router.url === '/movies' && searchedTerm.length >= 3) {
      this.nav.search(searchedTerm).subscribe(data => {
        this.searchedMovies = data;
        this.searchedMovies = this.searchedMovies.results;
        this.searchedMovies = this.searchedMovies.filter((searchedItem => {
            return searchedItem.title.toLocaleLowerCase().indexOf(searchedTerm) !== -1 ;
        }));
        this.nav.searchedMovies = this.searchedMovies;
      });
    }
    if (this.router.url === '/tvshows' && searchedTerm.length >= 3) {
      this.nav.search(searchedTerm).subscribe(data => {
        this.searchedTvshows = data;
        this.searchedTvshows = this.searchedTvshows.results;
        this.searchedTvshows = this.searchedTvshows.filter((searchedItem => {
            return searchedItem.name.toLocaleLowerCase().indexOf(searchedTerm) !== -1 ;
        }));
        this.nav.searchedTvshows = this.searchedTvshows;
      });
    }
  }
}
