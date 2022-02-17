import { Component, OnInit } from '@angular/core';
import { ComunicationWithServerService } from '../comunication-with-server/comunication-with-server.service';
import { DataFormFromServer } from '../comunication-with-server/comunication-with-server.model';
import { forEachChild } from 'typescript';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css'],
})

export class RequestListComponent implements OnInit {

  constructor(public service: ComunicationWithServerService) { }

  listOfRequest:DataFormFromServer[] = [];
  contentOfOneRequest:string[]=[];
  disableAllRequest:boolean;
  listOfRequestBySerch:DataFormFromServer[] = [];
  searchValue:string;
  
  ngOnInit() 
  {
    this.disableAllRequest=true;
    this.getDataFromService();
  }
 
  getDataFromService()
  {
    this.service.getFromServer()
                 .subscribe(
                      res => 
                      this.listOfRequest = res    ), 
                 (error: any) => console.error(error); 
  }

  onSerchButtonClick()
  {
    return this.searchValue;
  }
  findElementInListOfRequest()
  {
    this.disableAllRequest = false;
    console.log(this.searchValue);
    this.listOfRequestBySerch = this.listOfRequest.
            filter(
                      listOfRequest=>
                      listOfRequest.key == this.searchValue
                  );
                  this.findBySearch(this.searchValue)
  }

  findBySearch(params:string)
  {
     var pet = "ffff";
     let regex = new RegExp ('/^((?!('+pet+')).)*$/');
     console.log(regex.test(params));
  }
} 
   
    
  
