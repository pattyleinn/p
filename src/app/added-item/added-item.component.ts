import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { model } from '../model';

@Component({
  selector: 'app-added-item',
  templateUrl: './added-item.component.html',
  styleUrls: ['./added-item.component.css']
})
export class AddedItemComponent implements OnInit {
  
  item: model = new model("", "", Date.now(), [], "", "", "")
  error_occured: boolean = false;
  success: boolean = false;
  
  constructor(private store: Store<{item: model}>, private router: Router, private http: HttpClient) {
   }
  
   back(){
     this.router.navigateByUrl("/new_item")
   }
   post_data(){
    this.http.post<any>("https://60742d38066e7e0017e793ca.mockapi.io/api/v1/add-item", {
      'item-name': this.item.name,
      'item-description': this.item.description,
      'item-state': this.item.state,
      'item-category': this.item.category,
      'item-tag': this.item.tags,
      'item-date': Date.now(),
      'item-img': this.item.img
    }).subscribe({
      next: data =>{
        this.success = true;
        this.error_occured = false;
        setTimeout(()=>{
          this.router.navigateByUrl("/")
        }, 1000)
      },
      error: error=>{
        this.error_occured = true;
        this.success = false
      }
    })
   }
  ngOnInit(): void {
    this.error_occured = false;
    this.success = false;
    this.store.select("item").subscribe((data)=>{
      console.log(data)
      this.item = data
    })
  }

}
