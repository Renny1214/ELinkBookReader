import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { LibraryComponent } from './library/library.component';


const routes: Routes = [
  {path : 'home' , component : BooksComponent},
  {path : 'addBook' , component : AddBookComponent},
  {path : 'library' , component : LibraryComponent},
  {path:'',redirectTo: "home" , pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
