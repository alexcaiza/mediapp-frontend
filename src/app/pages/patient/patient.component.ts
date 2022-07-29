import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap } from 'rxjs';
import { Patient } from '../../model/patient';
import { PatientService } from '../../service/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients: Patient[];

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'dni', 'actions'];
  dataSource: MatTableDataSource<Patient>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private patientService: PatientService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    console.log('Method ngOnInit()');

    this.patientService.patientChange.subscribe(data => {
      this.createTable(data);
    });

    this.patientService.getMessageChange().subscribe(data => {
      this.snackBar.open(data, 'INFO', { duration: 2000, verticalPosition: "bottom", horizontalPosition: "center", panelClass: 'snackbar' });
    });

    this.patientService.findAll().subscribe(data => {
      this.createTable(data);
    });
  }

  createTable(patients: Patient[]){
    this.patients = patients;
    this.dataSource = new MatTableDataSource(patients);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }

  delete(idPatient: number){
    this.patientService.delete(idPatient).pipe(switchMap( ()=> {
      return this.patientService.findAll();
    }))
    .subscribe(data => {
      this.patientService.patientChange.next(data);
      this.patientService.setMessageChange('DELETED!');
    })
    ;
  }

}
