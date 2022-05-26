import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  // getRequest(url: string): Observable<>{
  getRequest(url: string): any {
    this.http.get(url).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
       }
    )
  }
}
