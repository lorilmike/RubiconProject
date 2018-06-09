import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../shared/data.service';

@Component({
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvShowsComponent implements OnInit {
  tvshows;
  tenTvshows: any[];

  constructor(private dataService: DataService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.tvshows = this.route.snapshot.data['tvshows']; // used for getting data through resolve service
    this.tenTvshows = this.tvshows.results;
    this.tenTvshows = this.tenTvshows.slice(0, 10);
  }

}
