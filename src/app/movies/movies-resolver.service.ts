import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DataService } from '../shared/data.service';

@Injectable()

export class MoviesResolverService implements Resolve<any> {

  constructor(private dataService: DataService) {
  }
  // resolve automaticaly subscribes to an Obserable
  resolve() {
    return this.dataService.getMovies();
  }
}
