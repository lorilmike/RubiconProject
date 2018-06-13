import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../shared/data.service';
import { NavbarService } from '../shared/navbar.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvShowsComponent implements OnInit {
  term: string;
  tvshows;
  tenTvshows;
  searchedTvshows;
  subscription: ISubscription;
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
    this.gettingSearchedTvshows();
  }

  gettingSearchedTvshows() {
    this.subscription = this.nav.navItem$.debounceTime(400)
                                         .distinctUntilChanged()
                                         .subscribe(
    term => {
      this.term = term;
      if (this.term.length >= 3) {
          this.searchedTvshows = this.nav.search(this.term).subscribe(data => {
          this.searchedTvshows = data;
          this.searchedTvshows = this.searchedTvshows.results;
          this.searchedTvshows = this.searchedTvshows.filter((searchedItem => {
              return searchedItem.name.toLocaleLowerCase().indexOf(this.term) !== -1 &&
                     searchedItem.poster_path !== null;
          }));
        this.showTvshows = false;
        });
      } else {
        this.tvshows = this.route.snapshot.data['tvshows']; // used for getting data through resolve service
        this.tenTvshows = this.tvshows.results;
        this.tenTvshows = this.tenTvshows.slice(0, 10);
        this.showTvshows = true;
      }
    });

    // trying to make array out of object objectkeys and map!
  }
}
