import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DiaApiSimulator } from "./dia-api-simulator.model";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiaApiSimulatorService 
{

  constructor(
    private http:HttpClient) 
    { }

  list:DiaApiSimulator[] = [];

  singlelist:string[]=[];

  readonly baseURL="https://localhost:5001/api/PublicApiSimulator/"
  
  getFromServer() : Observable<DiaApiSimulator[]>
  {
    return this.http.get<DiaApiSimulator[]>(this.baseURL);
  }

  
  getFromServerById(idToReturn:string) : Observable<string[]>
  {
    return this.http.get<string[]>(this.baseURL + idToReturn + "/" + "GetById")
  }

}
