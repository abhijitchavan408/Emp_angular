import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  public getpublicdata(): Observable<any> {
    
    return this.http.get("https://emp-service-xgmuco3q5a-ue.a.run.app/api/User/Public", { responseType: 'text' }).pipe(
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse): any {
    console.log("User Not found");
    return (error);
  }
}
