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
  searchValue:string;
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
                    this.contentOfOneRequest.length=0;
  }

  updateListOfRequest(key: string,content: string[])
  {
    this.listOfRequest.length=0;
    this.listOfRequest.push({key: key, value:content})
  }
  
  findElementInListOfRequest()
  {    
    this.listOfRequest = this.listOfRequest.
            filter(
                      listOfRequest=>
                      listOfRequest.value
                        .filter(
                               c => c.indexOf(this.searchValue)   //.filter(x => x.toLowerCase().includes(this.searchValue.toLowerCase()))
                               ).length>0
                  );   
                       
                  var eArr = this.listOfRequest.values();
                  for(let i of eArr)
                 {
                   for(let j in i)
                   {  
                      for(var pos=0;pos<i.value.length;pos++)
                      {
                        if(i[j][pos].indexOf(this.searchValue)>=0)
                        {
                          this.contentOfOneRequest = i[j][pos];
                          console.log(this.contentOfOneRequest);
                           //   this.listOfRequest[this.route.snapshot.paramMap.get('Guid')].push(this.contentOfOneRequest)
                        }
                      }
                    }
                    }
  }
}