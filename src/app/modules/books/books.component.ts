import { Component,OnInit } from '@angular/core';
import {User} from '../../core/models/user'
import {UserService} from '../../core/services/user.servise';


@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class Books implements OnInit{
  books: User[] = []; 
  constructor(private userService: UserService){
  }
  ngOnInit(){
    //this.books = this.userService.getUsers();
    this.userService.getUsers().subscribe(res => {
      this.books = res;
    });
    console.log(this.books); 
  }
  
  
 
  
  
}
