import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output() userEvent: EventEmitter<UserInterface>;
  constructor() {
    this.userEvent = new EventEmitter<UserInterface>();
    this.user = {} as UserInterface;
  }
  ngOnInit(): void {
  }

  sentUserEvent(): void {
    this.userEvent.emit(this.user); // user event
  }

}
