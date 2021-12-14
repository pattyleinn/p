import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './add-item/add-item.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AddedItemComponent } from './added-item/added-item.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { itemReducer } from './item.reducers';
import { HttpClientModule } from '@angular/common/http';
import { ViewItemComponent } from './view-item/view-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddItemComponent,
    PageNotFoundComponentComponent,
    AddedItemComponent,
    ViewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    StoreModule.forRoot({item: itemReducer}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
