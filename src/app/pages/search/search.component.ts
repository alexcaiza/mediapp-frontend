import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { FilterConsultDTO } from 'src/app/dto/filterConsultDTO';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form: FormGroup;
  maxEnd: Date = new Date();

  @ViewChild('tab') tabGroup: MatTabGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'dni': new FormControl(),
      'fullname': new FormControl(),
      'startDate': new FormControl(),
      'endDate': new FormControl()
    });
  }

  search(){

    if(this.tabGroup.selectedIndex == 0){
      let dni = this.form.value['dni'];
      let fullname = this.form.value['fullname'];

      let dto = new FilterConsultDTO(dni, fullname);

      if(dto.dni == null){
        delete dto.dni;
      }

      if(dto.fullname == null){
        delete dto.fullname;
      }

      console.log(dto);
    }else{

    }


  }

}
