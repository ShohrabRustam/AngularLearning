import { Component } from '@angular/core';
import { NotificationService } from './notification.service'
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jsonValue : any;
  title = 'AngularLearning';
  constructor(private notifyService: NotificationService, private http: HttpService) {
  }

  demo() {
    alert("Connected to Angular");
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
    for (let i = 0; i < 100; i++) {
      console.log(i);
    }
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
      // }).unsubscribe(); // advance topic cover later
      })

  }

}
