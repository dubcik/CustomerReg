import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class DiaApiSimulatorService {

  constructor(private http:HttpClient) { }

  readonly baseURL="https://localhost:5001/api/PublicApiSimulator/" 
}
