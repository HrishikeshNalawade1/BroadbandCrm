import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    readonly APIUrl="https://localhost:44316/api";

  constructor(private http:HttpClient) { }

  getLead():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Lead/Get');
  }
  addLead(val:any)
  {
    return this.http.post(this.APIUrl+'/Lead/Post',val);
  }
  updateLead(val:any)
  {
    return this.http.put(this.APIUrl+'/Lead/Put',val);
  }
  deleteLead(val:any)
  {
    return this.http.delete(this.APIUrl+'/Lead/Delete/'+val);
  }
  
}
