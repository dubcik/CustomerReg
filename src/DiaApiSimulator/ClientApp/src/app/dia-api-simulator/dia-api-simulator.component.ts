import { Component, OnInit } from '@angular/core';
import { DiaApiSimulatorService } from '../share/dia-api-simulator.service';
import { DiaApiSimulator } from '../share/dia-api-simulator.model';

@Component({
  selector: 'app-dia-api-simulator',
  templateUrl: './dia-api-simulator.component.html',
  styleUrls: ['./dia-api-simulator.component.css'],
})

export class DiaApiSimulatorComponent implements OnInit {

  constructor(public service: DiaApiSimulatorService) { }

  list:DiaApiSimulator[] = [];
  
  singlelist:string[]=[];
  
  ngOnInit() 
  {
    this.getDataFromService();
  }
  getContentById(id:string)
  {
    this.getById(id);
  }

  getDataFromService()
  {
    this.service.getFromServer()
                 .subscribe(
                      res => 
                      this.list = res    ), 
                 (error: any) => console.error(error); 

    this.singlelist.length = 0;
  }

  getById(idToReturn:string)
  {
    this.service.getFromServerById(idToReturn)
        .subscribe(
                  res => {
                     this.singlelist = res;
                     this.updateListComponent(idToReturn,this.singlelist);
                    });
  }

  updateListComponent(key: string,content: string[])
  {
    this.list.length = 0;
    this.list.push({key: key, value:content})
  }
  
  onClickSearchButton()
  {   
     let guid = (document.getElementById("search-box") as HTMLInputElement).value;
     if(guid=="Search by Guid"|| guid=="")
     {
       console.log("can not find this" , guid);
     }
     else
     {
        this.getById(guid);
      }
  }
}