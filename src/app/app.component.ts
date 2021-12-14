import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pat-test';
  constructor(private router: Router){

  }

  navigate_to_route(route: string):void{
    this.router.navigateByUrl(route)
  }
}
