import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Patient } from '../model/patient';
import { GenericService } from './generic.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService extends GenericService<Patient> {

  patientChange = new Subject<Patient[]>;
  private messageChange = new Subject<string>;

  constructor(protected override http: HttpClient) {
    super(
      http,
      `${environment.HOST}/patients`
      );
  }

  setMessageChange(message: string){
    this.messageChange.next(message);
  }

  getMessageChange(){
    return this.messageChange.asObservable();
  }

  //private url: string = `${environment.HOST}/patients`;

  /*constructor(private http: HttpClient) { }

  public findAll() {
    return this.http.get<Patient[]>(this.url);
  }

  findById(idPatient: number){
    return this.http.get<Patient>(`${this.url}/${idPatient}`)
  }*/
}
