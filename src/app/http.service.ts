import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';
import { NotificationService } from './notification.service'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,private toastr: NgToastService) { }
  // getRequest(url: string): Observable<>{
  getRequest(url: string): any {
    this.http.get(url).subscribe(
      (response) => {
        this.toastr.success({detail: `response`, summary : 'Response Success',duration:3000});
        console.log(response);
      },
      (error) => {
        console.error(error);
        this.toastr.error({detail: 'response', summary : 'Response Success',duration:3000});
       }
    )
  }
}
