import { Component,OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

import {BooksModel} from '../../core/models/books'
import {BooksService} from '../../core/services/books.servise';


@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class Books implements OnInit{
  books: BooksModel[] = []; 
  BooksNameSearch:string='';
  
  constructor(private booksService: BooksService){
  }
  ngOnInit(){
    this.booksService.getBooks().subscribe(res => {
      this.books = res;
      console.log('this.books',this.books); 
    });
  }
  
  
 
  
  
}
