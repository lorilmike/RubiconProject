import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './shared/data.service';
import { NavbarService } from './shared/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchedTerm;
  searchedMovies: any;
  searchedTvshows: any;

  constructor(private dataService: DataService,
              public nav: NavbarService,
              private router: Router) {}

  ngOnInit() {
  }

  search(searchedTerm: string) {
    searchedTerm = this.searchedTerm;
    this.nav.changeNav(searchedTerm);
  }
}
