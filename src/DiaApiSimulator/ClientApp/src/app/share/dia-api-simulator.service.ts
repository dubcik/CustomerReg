import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DiaApiSimulator } from "./dia-api-simulator.model";

@Injectable({
  providedIn: 'root'
})
export class DiaApiSimulatorService {

  constructor(
    private http:HttpClient) { }

  list:DiaApiSimulator[] = [];

  readonly baseURL="https://localhost:5001/api/PublicApiSimulator/"
  
  refreshList(){
    this.http.get<DiaApiSimulator[]>(this.baseURL)
        .subscribe(
                res => 
                this.list = res      ), 
    error => console.error(error);
     
  }
}
