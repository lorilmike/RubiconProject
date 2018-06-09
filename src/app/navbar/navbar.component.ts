import { Component } from '@angular/core';

import { DataService } from '../shared/data.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavBarComponent {
    searchTerm = '';
    foundData: any;
    movies;

  constructor(private dataService: DataService) {}

  search(searchTerm: string) {
    if (searchTerm.length >= 3) {
      this.dataService.search(searchTerm).subscribe(data => {
        this.foundData = data;
      });
    }
  }
 }
