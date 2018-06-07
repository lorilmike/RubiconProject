import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { DataService } from './shared/data.service';
import { IMovie } from './movies/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm = '';
  foundData: any;

  constructor(private dataService: DataService) {}

  search(searchTerm: string) {
    if (searchTerm.length >= 3) {
      this.dataService.search(searchTerm).subscribe(data => {
        this.foundData = data;
      });
    }
  }
}
