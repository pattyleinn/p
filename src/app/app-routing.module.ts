import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { AddedItemComponent } from './added-item/added-item.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ViewItemComponent } from './view-item/view-item.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "item/:id",component: ViewItemComponent },
  {path: "new_item", component: AddItemComponent},
  {path: "preview", component: AddedItemComponent},
  {path: "**", component: PageNotFoundComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
