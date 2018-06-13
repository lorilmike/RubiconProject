import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { TvShowsComponent } from './tvshows.component';
import { TvShowDetailsComponent } from './tvshow-details.component';

import { TvShowResolverService } from './tvshow-resolver.service';
import { TvShowsResolverService } from './tvshows-resolver.service';
import { TvShowGuardService } from './tvshow-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: 'tvshows', component: TvShowsComponent, resolve: {tvshows: TvShowsResolverService}},
        { path: 'tvshows/:id', component: TvShowDetailsComponent,
          resolve: {tvshow: TvShowResolverService}, canActivate: [TvShowGuardService]}
        ])
    ],
  exports: [RouterModule]
})
export class TvShowsRoutingModule { }
