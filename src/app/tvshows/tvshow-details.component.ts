import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NavbarService } from '../shared/navbar.service';

@Component({
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.css']
})

export class TvShowDetailsComponent implements OnInit {
  tvshow;
  trailerLink;
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
    this.dataService.getTvshowVideo(this.tvshow.id).subscribe(data => {
      this.trailerLink = data.results;
      if (this.trailerLink.length > 0) {
        this.trailerLink = this.trailerLink[0].key;
      } else {
        this.trailerLink = false;
      }
    });
  }
}
