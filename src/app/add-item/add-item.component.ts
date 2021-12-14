import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { add_item } from '../item.actions';
import { model } from '../model';
import {cloneDeep} from 'lodash';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  //Initialize defaults
  state = ['New', 'Refurbished']
  tags = ['HP', 'SAMSUNG', 'APPLE', 'COMPUTER', 'ACCESSORY', 'DELL', 'LENOVO']
  data: model = new model("", "", Date.now(), [], "", "", "")
  submit_error = false;
  //initializing the model
  newItem = new model("", "", Date.now(), [], "", "", "")

  //error codes 
  error_codes: string[] = [
    "This item is required.",
    "Select one or more of these items.",
    "Choose an option from one of the items provided"
  ]

  constructor(private router: Router, private store: Store<{item: model}>) { 
    
  }
  
  //methods
  submit():void{
    if(this.newItem.name.length == 0 || this.newItem.img.length == 0 || this.newItem.state.length == 0 || this.newItem.tags.length == 0 || this.newItem.category.length == 0 || this.newItem.description.length == 0){
      this.submit_error = true;
    }else{
      this.store.dispatch(add_item({item: this.newItem}))
      this.router.navigateByUrl("/preview")
    }
  }
  //add_or_remove from item tags
  tag_action(item: string){
    console.log(item)
    if(this.newItem.tags.indexOf(item) == -1){
      (this.newItem).tags.push(item)
    }else{
      (this.newItem).tags.splice(this.newItem.tags.indexOf(item), 1)
    }
  }
  //set_item_state
  set_item_state(state: string){
    this.newItem.state = state;
  }
 
  

  ngOnInit(): void {
    this.store.select('item').subscribe((data:any)=>{
      if(data.name.length > 0){
        this.newItem = new model(data.name, data.description, data.date, [...data.tags], data.category, data.img, data.state)
      }
    })
  
  }

}
