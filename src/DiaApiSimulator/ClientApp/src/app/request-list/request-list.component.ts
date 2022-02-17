import { Component, OnInit } from '@angular/core';
import { ComunicationWithServerService } from '../comunication-with-server/comunication-with-server.service';
import { DataFormFromServer } from '../comunication-with-server/comunication-with-server.model';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css'],
})

export class RequestListComponent implements OnInit {

  constructor(public service: ComunicationWithServerService) { }

  listOfRequest:DataFormFromServer[] = [];
  
  contentOfOneRequest:string[]=[];
  
  ngOnInit() 
  {
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
}