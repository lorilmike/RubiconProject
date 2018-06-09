import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from '../shared/data.service';

@Injectable()

export class TvShowResolverService implements Resolve<any> {

    constructor(private dataService: DataService) {
    }
    // resolve automaticaly subscribes to an Obserable and 'id' params
    // is same as the one we're naming it in router specification (/tvshows/:id)
    resolve(route: ActivatedRouteSnapshot) {
        return this.dataService.getTvshow(route.params['id']);
    }
}
