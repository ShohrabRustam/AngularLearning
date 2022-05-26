import { Component } from '@angular/core';
import { NotificationService } from './notification.service'
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    this.notifyService.showWarning("This is a warning", "www.SalmaRustam.com")
  }
  showToasterError() {
    this.notifyService.showError("Something is wrong", "www.SalmaRustam.com")
  }

  HandleUrl() {
console.log("Hello Connection is work !!");
    this.http.getRequest("https://jsonplaceholder.typicode.com/todos");
  }

}
