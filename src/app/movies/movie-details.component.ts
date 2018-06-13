import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NavbarService } from '../shared/navbar.service';
import { DataService } from '../shared/data.service';

@Component({
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  movie;
  trailerLink;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private nav: NavbarService,
              private dataService: DataService) { }

  onBack() {
    this.router.navigate(['/movies']);
    this.nav.show();
  }

  ngOnInit() {
    // showing specific movie
    this.route.data.forEach((data) => {
        this.movie = data['movie'];
    });
    this.dataService.getMovieVideo(this.movie.id).subscribe(data => {
      this.trailerLink = data.results;
      if (this.trailerLink.length > 0) {
        this.trailerLink = this.trailerLink[0].key;
      } else {
        this.trailerLink = false;
      }
    });
  }
}
