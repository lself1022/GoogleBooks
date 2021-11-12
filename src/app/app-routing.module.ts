import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {BookFormComponent} from "./components/book-form/book-form.component";
import {SearchResultsComponent} from "./components/search-results/search-results.component";

const routes: Routes = [
  {
    path: 'newBook',
    component: BookFormComponent
  },
  {
    path: 'search',
    component: SearchResultsComponent
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
