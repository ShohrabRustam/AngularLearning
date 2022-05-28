import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  constructor() { }

  user= {
    'name': 'Rustam',
    age: 22,
    id:0,
  }
  ngOnInit(): void {
  }

}
