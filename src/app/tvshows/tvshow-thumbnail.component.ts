import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tvshow-thumbnail',
    templateUrl: 'tvshow-thumbnail.component.html',
    styles: []
})

export class TvShowThumbnailComponent {
    @Input() tvshow;
}
