import { NgModule } from '@angular/core';
import { TvShowsRoutingModule } from './tvshows-routing.module';
import { SharedModule } from '../shared/shared.module';

import { TvShowsComponent } from './tvshows.component';
import { TvShowDetailsComponent } from './tvshow-details.component';
import { TvShowThumbnailComponent } from './tvshow-thumbnail.component';

import { TvShowResolverService } from './tvshow-resolver.service';
import { TvShowsResolverService } from './tvshows-resolver.service';
import { TvShowGuardService } from './tvshow-guard.service';

@NgModule({
  imports: [
    TvShowsRoutingModule,
    SharedModule
  ],
  declarations: [
    TvShowsComponent,
    TvShowThumbnailComponent,
    TvShowDetailsComponent
  ],
  providers: [
    TvShowGuardService,
    TvShowsResolverService,
    TvShowResolverService
  ]
})
export class TvShowsModule { }
