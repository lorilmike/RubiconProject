import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './movie-details.component.html'
})

export class MovieDetailsComponent implements OnInit {
  movie;

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // showing specific movie
    this.route.data.forEach((data) => {
        this.movie = data['movie'];
        console.log(this.movie);
    });
  }
}
