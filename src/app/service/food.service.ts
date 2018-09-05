import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private _http: HttpClient) { }

getFood(): Observable<any> {
  return this._http.get('https://us-central1-fir-web-b7852.cloudfunctions.net/helloWorld');
}

}
