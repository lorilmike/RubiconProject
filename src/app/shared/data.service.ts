import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/RX' ;
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { IMovie } from '../movies/movie.model';
import { ITvShow } from '../tvshows/tvshow';

@Injectable()

export class DataService {

  apiKey = '62f2c6bd77d6169d36435441643bcd11';

  constructor(private http: HttpClient,
              private router: Router) { }

  getMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}`)
               .pipe(catchError(this.handleError<IMovie[]>('getMovies', [])));
  }
  getMovie(id: number): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/` + id + `?api_key=${this.apiKey}`)
                    .pipe(catchError(this.handleError<any>('getMovie')));
  }
  getTvshows() {
    return this.http.get<ITvShow[]>(`https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}`)
               .pipe(catchError(this.handleError<ITvShow[]>('getTvshows', [])));
  }
  getTvshow(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/tv/` + id + `?api_key=${this.apiKey}`)
                    .pipe(catchError(this.handleError<any>('getTvshow')));
  }
  // method for handling errors
  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
       console.error(error);
       return Observable.of(result as T);
    };
  }
}
