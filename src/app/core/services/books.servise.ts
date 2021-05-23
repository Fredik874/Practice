import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {environment} from "../environment"
import {BooksModel} from '../models/books';
 
@Injectable()
export class BooksService{
    constructor(private http: HttpClient){}
   
    getBooks(): Observable<BooksModel[]>  {
        
        return this.http.get<any[]>(`${environment.apiUrl}/books`);
    }
    addBooks(book:BooksModel):void{
        console.log("add",book)  
        this.http.post(`${environment.apiUrl}/books`,book);
        //this.BooksArr.push(book);
    }
}