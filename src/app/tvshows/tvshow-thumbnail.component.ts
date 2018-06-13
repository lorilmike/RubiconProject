import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tvshow-thumbnail',
    templateUrl: 'tvshow-thumbnail.component.html',
    styleUrls: ['tvshow-thumbnail.component.css']
})

export class TvShowThumbnailComponent {
    @Input() tvshow;
}
