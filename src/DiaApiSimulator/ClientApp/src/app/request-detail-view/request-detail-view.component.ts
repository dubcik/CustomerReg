import { Component, OnInit } from '@angular/core';
import { DataFormFromServer } from 'src/app/comunication-with-server/comunication-with-server.model';
import { ComunicationWithServerService } from 'src/app/comunication-with-server/comunication-with-server.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-detail-view',
  templateUrl: './request-detail-view.component.html',
  styleUrls: ['./request-detail-view.component.css']
})
export class RequestDetailViewComponent implements OnInit {

  constructor(
    public service: ComunicationWithServerService,
    private route: ActivatedRoute,) { }

  listOfRequest:DataFormFromServer[] = [];
  
  contentOfOneRequest:string[]=[];
  
  ngOnInit() 
  {
    this.getContentWhitIdFromSnapshot();
  }

  getContentWhitIdFromSnapshot()
  
  {
    const Guid = this.route.snapshot.paramMap.get('Guid');
    this.service.getFromServerById(Guid)
        .subscribe(
                  res => {
                     this.contentOfOneRequest = res;
                     this.updateListOfRequest(Guid,this.contentOfOneRequest);
                    });
  }

  updateListOfRequest(key: string,content: string[])
  {
    this.listOfRequest.length=0;
    this.listOfRequest.push({key: key, value:content})
  }
}
