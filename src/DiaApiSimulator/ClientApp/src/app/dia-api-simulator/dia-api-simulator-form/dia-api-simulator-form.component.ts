import { Component, OnInit } from '@angular/core';
import { DiaApiSimulator } from 'src/app/share/dia-api-simulator.model';
import { DiaApiSimulatorService } from 'src/app/share/dia-api-simulator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dia-api-simulator-form',
  templateUrl: './dia-api-simulator-form.component.html',
  styleUrls: ['./dia-api-simulator-form.component.css']
})
export class DiaApiSimulatorFormComponent implements OnInit {

  constructor(
    public service: DiaApiSimulatorService,
    private route: ActivatedRoute,) { }

  list:DiaApiSimulator[] = [];
  
  singlelist:string[]=[];
  
  ngOnInit() 
  {
    this.getById();
  }
  getContentById()
  {
    this.getById();
  }

  getById()
  {
    const Guid = this.route.snapshot.paramMap.get('Guid');
    this.service.getFromServerById(Guid)
        .subscribe(
                  res => {
                     this.singlelist = res;
                     this.updateListComponent(Guid,this.singlelist);
                    });
  }

  updateListComponent(key: string,content: string[])
  {
    this.list.length = 0;
    this.list.push({key: key, value:content})
  }
  
  
}
