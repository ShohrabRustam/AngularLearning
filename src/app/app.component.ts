import { Component } from '@angular/core';
import { NotificationService } from './notification.service'
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jsonValue: any;
  title = 'AngularLearning';
  constructor(private notifyService: NotificationService, private http: HttpService) {
  }

  showSuccess() {
    setTimeout(() => {
      this.showToasterSuccess();
    }, 2000);
  }

  showToasterSuccess() {
    this.notifyService.showSuccess("Data shown successfully !!", "www.SalmaRustam.com")
  }

  showToasterInfo() {
    this.notifyService.showInfo("This is Info", "www.SalmaRustam.com")
  }

  showToasterWarning() {
    this.notifyService.showWarning("Some is Warning", "www.SalmaRustam.com")

  }

  showToasterError() {
    this.notifyService.showError("Something is wrong", "www.SalmaRustam.com")
  }

  HandleUrl() {
    console.log("Hello Connection is work !!");
    this.http.getRequest("https://jsonplaceholder.typicode.com/todos/5")
      .subscribe((response: any) => {
        this.jsonValue = response;
        this.showToasterSuccess();
        console.log(this.jsonValue);
        // }).unsubscribe(); // advance topic cover later
      })
  }
  userObject = {
    id: 1,
    name: 'SalmaRustam',
    age: 23,
  }
  showUser:boolean = false;

  handleEvent(event: any) {
    console.log(event);
  }
}
