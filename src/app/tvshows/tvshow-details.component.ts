import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  templateUrl: './tvshow-details.component.html'
})

export class TvShowDetailsComponent implements OnInit {
  tvshow;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private nav: NavbarService) { }

  onBack() {
    this.router.navigate(['/tvshows']);
    this.nav.show();
  }

  ngOnInit() {
    // showing specific tv show
    this.route.data.forEach((data) => {
        this.tvshow = data['tvshow'];
    });
  }
}
