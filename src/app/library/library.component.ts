import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor() { }

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
