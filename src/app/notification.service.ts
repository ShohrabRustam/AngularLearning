import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: NgToastService) { }
  showSuccess(message:string, title:string){

    this.toastr.success({detail: message, summary : title,duration:3000});
}

showError(message:string, title:string){
    this.toastr.error({detail: message, summary : title,duration:3000})
}

showInfo(message:string, title:string){
    this.toastr.info({detail: message, summary : title,duration:3000})
}

showWarning(message:string, title:string){
    this.toastr.warning({detail: message, summary : title,duration:3000})
}

}
