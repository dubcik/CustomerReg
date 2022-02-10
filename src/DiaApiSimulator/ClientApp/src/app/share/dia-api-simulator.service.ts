import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DiaApiSimulator } from "./dia-api-simulator.model";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiaApiSimulatorService {

  constructor(
    private http:HttpClient) { }

  //formData: DiaApiSimulator = new DiaApiSimulator();
  list:JSON[];//DiaApiSimulator[];

  readonly baseURL="https://localhost:5001/api/PublicApiSimulator/"
  
  refreshList(){
     this.http.get(this.baseURL).toPromise()
     .then(res => this.list = res as JSON[]);
     
  }
  refreshList2(){
    this.http.get(this.baseURL)
  .subscribe((res:Response) => {
    console.log(res.body);
  

  });
  }

}
