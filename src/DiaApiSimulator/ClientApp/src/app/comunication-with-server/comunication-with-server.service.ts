import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DataFormFromServer } from "./comunication-with-server.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationWithServerService 
{
  constructor(
    private http:HttpClient) 
    { }

  readonly baseURL="https://localhost:5001/api/PublicApiSimulator/"
  
  getFromServer() : Observable<DataFormFromServer[]>
  {
    return this.http.get<DataFormFromServer[]>(this.baseURL);
  }

  getFromServerById(idToReturn:string) : Observable<string[]>
  {
    return this.http.get<string[]>(this.baseURL + idToReturn + "/" + "GetById")
  }
}
