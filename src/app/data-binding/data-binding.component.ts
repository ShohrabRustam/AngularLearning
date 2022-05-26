import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

title:string='';
jsonValue:any= {
a:"Hello World",
b:"I am there to help you"
};

handleEvent(){
console.log(this.title);
}

}
