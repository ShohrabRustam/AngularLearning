import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';
import { catchError, Observable, throwError } from 'rxjs';
import { NotificationService } from './notification.service'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private toastr: NgToastService) { }
  // getRequest(url: string): Observable<>{
  // getRequest
  getRequest(url: string): any {
    return this.http.get(url)
    .pipe(
    catchError(throwError)
    )
  }

  //PostRequest
  postRequest(url: string, data: any, option?: any): Observable<any> {
    return this.http.post(url, option);
  }

  // putRequest 
  updateRequest(url: string, data: any, option?: any): Observable<any> {
    return this.http.put(url, data, option);

  }

   handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
