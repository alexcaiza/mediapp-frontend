import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConsultListExamDTO } from '../dto/consultListExamDTO';
import { FilterConsultDTO } from '../dto/filterConsultDTO';
import { Consult } from '../model/consult';

@Injectable({
  providedIn: 'root'
})
export class ConsultService {

  private url: string = `${environment.HOST}/consults`;

  constructor(
    private http: HttpClient
  ) { }

  saveTransactional(dto: ConsultListExamDTO){
    return this.http.post(this.url, dto);
  }

  searchOthers(filterConsultDTO: FilterConsultDTO){
    return this.http.post<Consult[]>(`${this.url}/search/others`, filterConsultDTO);
  }

  searchByDates(date1: string, date2: string){
    let params: HttpParams = new HttpParams();
    params.set('date1', date1);
    params.set('date2', date2);

    const p = {
      'date1': date1,
      'date2': date2,
    }

    console.log('params:', params);
    console.log('date1:', date1);
    console.log('date2:', date2);
    console.log('p:', p);

    //return this.http.get<Consult[]>(`${this.url}/search/date?date1=${date1}&date2=${date2}`);
    return this.http.get<Consult[]>(`${this.url}/search/date`, {
      params: p
    });
  }

  callProcedureOrFunction(){
    return this.http.get<any[]>(`${this.url}/callProcedure`);
  }

  //PDF
  generateReport() {
    return this.http.get(`${this.url}/generateReport`, { responseType: 'blob' });
  }

  //Images
  saveFile(data: File){
    let formdata: FormData = new FormData();
    formdata.append('file', data);

    return this.http.post(`${this.url}/saveFile`, formdata);
  }

  readFile(id: number){
    return this.http.get(`${this.url}/readFile/${id}`, { responseType: 'blob'});
  }
}
