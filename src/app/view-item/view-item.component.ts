import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { generate_data_url } from '../helpers/generateDataUrl';
import { print_single_item } from '../helpers/print_single_item';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  id: string | null = null;
  no_id: boolean = false;
  no_item: boolean = false;
  fetching: boolean = true;
  error_message: string = "kbjjklbnjlblj";
  item: any;
  constructor(private router : Router, private activatedRoute: ActivatedRoute, private http: HttpClient) {

   }

  back(){
    this.router.navigateByUrl("/")
  }
  generate_pdf(){
    print_single_item(this.item)
  }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    if(this.id !== null){
      this.http.get<any>(`https://60742d38066e7e0017e793ca.mockapi.io/api/v1/add-item/${this.id}`).subscribe({
        next: data =>{
          this.item = data;
          this.fetching = false; 
        },
        error: error =>{
          this.fetching = false
          this.no_item = true
        }
      })
    }else{
      this.no_id = true
      this.error_message = "No or invalid id was specified"
    }
  }

}
