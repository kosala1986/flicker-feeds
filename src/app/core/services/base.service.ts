import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  /*
  GET method
  */
  get(): Observable<any> {
    const header = this.createHeader();
    return this.http.get<any>(`${environment.endPointURL}`, { headers: header })
      .pipe(
        retry(0),
        map((response) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  /*
  POST mrthod
  */

  post(body: object): Observable<any> {
    const header = this.createHeader();
    return this.http.post<any>(`${environment.endPointURL}`, body, { headers: header })
      .pipe(
        retry(0),
        map((response) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  /*
  * Create header
  */

  createHeader(): HttpHeaders {
    const header = new HttpHeaders().set('Accept', 'application/json');
    return header;
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
