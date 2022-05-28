import { Component, OnInit, Input } from '@angular/core';

interface UserInterface {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  @Input() user: UserInterface;
  constructor() {
    this.user = {} as UserInterface;
   }
  ngOnInit(): void {
  }

}
