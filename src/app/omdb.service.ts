import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  
  constructor(private http:HttpClient) { }

  getData(input:string):Observable<any>{
    return this.http.get("http://www.omdbapi.com/?s="+input+"&apikey=6f6b386a");
  }

  getDataDetails(id:any):Observable<any>{
    return this.http.get("https://www.omdbapi.com/?i="+id+"&apikey=11e5065a");
  }
}
