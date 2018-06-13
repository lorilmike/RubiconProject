import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs/RX' ;
import { catchError } from 'rxjs/operators';
import { DataService } from '../shared/data.service';

@Injectable()

export class NavbarService {
  visible: boolean;
  apiKey = '62f2c6bd77d6169d36435441643bcd11';

  private navItemSource = new BehaviorSubject<string>('');
  navItem$ = this.navItemSource.asObservable();

  changeNav(query: string) {
    this.navItemSource.next(query);
  }

  constructor(private http: HttpClient,
              private router: Router,
              private dataService: DataService) { this.visible = true; }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  // method for searching through shown data
  search(searchTerm: string): Observable<any[]> {
    if (this.router.url === '/movies') {
      return this.http.get<any[]>(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=` + searchTerm)
                 .pipe(catchError(this.dataService.handleError<any>('search')));
    }
    if (this.router.url === '/tvshows') {
      return this.http.get<any[]>(`https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&query=` + searchTerm)
                 .pipe(catchError(this.dataService.handleError<any>('search')));
    }
  }
}
