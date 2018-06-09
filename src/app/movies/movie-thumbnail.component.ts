import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-movie-thumbnail',
    templateUrl: 'movie-thumbnail.component.html',
    styles: []
})

export class MovieThumbnailComponent {
    @Input() movie;
}
