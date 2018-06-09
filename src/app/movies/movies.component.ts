import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../shared/data.service';

import { IMovie } from '../movies/movie.model';

@Component({
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies;
  tenMovies: any[] = [];

  constructor(private dataService: DataService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.movies = this.route.snapshot.data['movies']; // used for getting data through resolve service
    this.tenMovies = this.movies.results;
    console.log(this.tenMovies);
  }
}
