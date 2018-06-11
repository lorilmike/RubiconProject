import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  templateUrl: './movie-details.component.html'
})

export class MovieDetailsComponent implements OnInit {
  movie;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private nav: NavbarService) { }

  onBack() {
    this.router.navigate(['/movies']);
    this.nav.show();
  }

  ngOnInit() {
    // showing specific movie
    this.route.data.forEach((data) => {
        this.movie = data['movie'];
    });
  }
}
