import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiaApiSimulatorService } from '../share/dia-api-simulator.service';

@Component({
  selector: 'app-dia-api-simulator',
  templateUrl: './dia-api-simulator.component.html',
  styleUrls: ['./dia-api-simulator.component.css']
})

export class DiaApiSimulatorComponent implements OnInit {

  constructor(public service: DiaApiSimulatorService) { }

  ngOnInit() {
    this.service.refreshList2();
    //console.info(this.service.refreshList2());
  }
}
