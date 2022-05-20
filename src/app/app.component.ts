import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularApp';
  opened = false;

  showNavBar = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (this.router.url === '/login') {
        this.showNavBar = false;
      } else {
        this.showNavBar = true;
      }
    })
  }
}
