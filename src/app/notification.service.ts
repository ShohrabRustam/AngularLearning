import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: NgToastService) { }
  showSuccess(message:string, title:string){

    this.toastr.success({detail: message, summary : title,duration:2000});
}

// showError(message:string, title:string){
//     this.toastr.error(message, title)
// }

// showInfo(message:string, title:string){
//     this.toastr.info(message, title)
// }

// showWarning(message:string, title:string){
//     this.toastr.warning(message, title)
// }

}
