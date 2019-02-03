import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,  } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InsightsService {
	public apiUrl = environment.BASE_API_URL;
  
  constructor(
  	private http: HttpClient
	) { }

  get() {
  	return this.http.get(`${this.apiUrl}`)
	    .pipe(
	      map(resp => {
	        return resp;
	      }),
	      catchError(this.handleError)
	    );
  }

  post(entry): Observable<any> {
  	return this.http.post(`${this.apiUrl}`, entry)
	    .pipe(
	      map(resp => {
	        return resp;
	      }),
	      catchError(this.handleError)
	    );
  }

  handleError(error: HttpErrorResponse) {
  	return of('There was an error with the request.', error);
  }
}
