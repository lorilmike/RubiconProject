import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  templateUrl: './tvshow-details.component.html'
})

export class TvShowDetailsComponent implements OnInit {
  tvshow;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) { }

  onBack() {
    this.router.navigate(['/tvshows']);
  }

  ngOnInit() {
    // showing specific tv show
    this.route.data.forEach((data) => {
        this.tvshow = data['tvshow'];
    });
  }
}
