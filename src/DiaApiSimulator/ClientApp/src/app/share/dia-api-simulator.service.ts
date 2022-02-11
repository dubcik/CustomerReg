import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DiaApiSimulator,DiaApiSimulatorSingle } from "./dia-api-simulator.model";

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
  
  refreshList()
  {
    this.http.get<DiaApiSimulator[]>(this.baseURL)
        .subscribe(
                  res => 
                  this.list = res      ), 
        (error: any) => console.error(error);
     
    this.singlelist.length = 0;
  }

  getById(idToReturn:string)
  {
    this.list.length = 0;
    this.waitForOneSecond().then;
    this.http.get<string[]>(this.baseURL + idToReturn + "/" + "GetById")
        .subscribe(
                  res => 
                  this.singlelist = res);
    
    /*var key = idToReturn;
    var content = this.singlelist;
    this.list.push({key: null, value:content})*/
    return this.updateListComponent(idToReturn,this.singlelist);
  }

  updateListComponent(key: string,content: string[])
  {
    this.list.push({key: key, value:content})
  }

  waitForOneSecond() {
    return new Promise(resolve => 
      {
        setTimeout(() => {
        resolve("Async metod");
        }, 10000);
      });
  }
  promiseMethod()
  {
    this.waitForOneSecond().then((value) => console.log(value));
  }
}
