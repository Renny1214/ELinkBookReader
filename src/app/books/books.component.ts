import { Component, OnInit } from '@angular/core';
import { BooksArrayService } from '../books-array.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']

})
export class BooksComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }
  abc= "../../assets/books/fictionPhysicsMechanicsGoldstein";

  books = [   {
    BookTitle: "Little Oak",
    BookAuthor: "An Ecommerce Website",
    BookCategory:"abc",
    BookImage:"../../assets/images/Book1.jpg",
    BookPDF: this.abc
  }, 
  {
    BookTitle: "Little Oak",
    BookAuthor: "An Ecommerce Website",
    BookCategory:"abc",
    BookImage:"../../assets/images/Book1.jpg",

    BookPDF: this.abc
  },   {
    BookTitle: "Little Oak",
    BookAuthor: "An Ecommerce Website",
    BookCategory:"abc",
    BookImage:"../../assets/images/Book1.jpg",

    BookPDF: this.abc
  },   {
    BookTitle: "Little Oak",
    BookAuthor: "An Ecommerce Website",
    BookCategory:"abc",
    BookImage:"../../assets/images/Book3.jpg",
    BookPDF: this.abc
  },
  {
    BookTitle: "Little Oak",
    BookAuthor: "An Ecommerce Website",
    BookCategory:"abc",
    BookImage:"../../assets/images/Book1.jpg",
    BookPDF: this.abc
  },
  {
    BookTitle: "Little Oak",
    BookAuthor: "An Ecommerce Website",
    BookCategory:"abc",
    BookImage:"../../assets/images/Book2.jpg",
    BookPDF: this.abc
  }
  ]  
}
