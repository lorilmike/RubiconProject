import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../shared/data.service';
import { NavbarService } from '../navbar/navbar.service';
import { empty } from 'rxjs/observable/empty';

@Component({
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvShowsComponent implements OnInit {
  tvshows;
  tenTvshows: any[];
  searchedTvshows: any[];
  showTvshows = true;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private nav: NavbarService) {
  }

  clicked() {
    this.nav.hide();
  }

  ngOnInit() {
    this.nav.show();

    if (this.nav.searchedTvshows && this.nav.searchedTerm.length > 2) {
      this.searchedTvshows = this.nav.searchedTvshows;
      this.searchedTvshows = this.searchedTvshows.filter(searchedTvshow => {
        return searchedTvshow.poster_path !== null;
      });
      console.log(this.searchedTvshows);
      this.showTvshows = false;
    } else {
      this.tvshows = this.route.snapshot.data['tvshows']; // used for getting data through resolve service
      this.tenTvshows = this.tvshows.results;
      this.tenTvshows = this.tenTvshows.slice(0, 10);
    }
  }
}
