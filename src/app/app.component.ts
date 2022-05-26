import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularLearning';
  submit(){
    alert("We Click on Submit");
    }

    cancel(){
    alert("We Click on Cancel");
    }

}
