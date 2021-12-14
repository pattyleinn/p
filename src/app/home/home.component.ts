import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any[] = [];
  fetching: boolean = true;
  fetching_error: boolean = false;
  constructor(private http:HttpClient, private router: Router) { }

  navigate_to_item(id: string){
    this.router.navigateByUrl(`/item/${id}`)
  }
  add_item():void{
    this.router.navigateByUrl("/new_item")
  }
  ngOnInit(): void {
    this.http.get<any>("https://60742d38066e7e0017e793ca.mockapi.io/api/v1/add-item").subscribe({
      next: data =>{
        this.items = data
        this.fetching = false;
      },
      error: error =>{
      }
    })
  }

}
