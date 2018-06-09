import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DataService } from '../shared/data.service';

@Injectable()

export class TvShowsResolverService implements Resolve<any> {

  constructor(private dataService: DataService) {
  }
  // resolve automaticaly subscribes to an Obserable
  resolve() {
    return this.dataService.getTvshows();
  }
}
