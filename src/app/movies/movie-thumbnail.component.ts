import { Component, Input } from '@angular/core';
import { IMovie } from './movie.model';

@Component({
    selector: 'app-movie-thumbnail',
    templateUrl: 'movie-thumbnail.component.html',
    styles: []
})

export class MovieThumbnailComponent {
    @Input() movie: IMovie;
}
