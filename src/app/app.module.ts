import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MedicComponent } from './pages/medic/medic.component';
import { PatientComponent } from './pages/patient/patient.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { PatientEditComponent } from './pages/patient/patient-edit/patient-edit.component';
import { MedicDialogComponent } from './pages/medic/medic-dialog/medic-dialog.component';
import { ExamComponent } from './pages/exam/exam.component';
import { SpecialtyComponent } from './pages/specialty/specialty.component';
import { ConsultComponent } from './pages/consult/consult.component';
import { ExamEditComponent } from './pages/exam/exam-edit/exam-edit.component';
import { SpecialtyEditComponent } from './pages/specialty/specialty-edit/specialty-edit.component';
import { ExamDialogComponent } from './pages/exam/exam-dialog/exam-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicComponent,
    PatientComponent,
    PatientEditComponent,
    MedicDialogComponent,
    ExamComponent,
    SpecialtyComponent,
    ConsultComponent,
    ExamEditComponent,
    SpecialtyEditComponent,
    ExamDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule, //para uso de forms
    FormsModule //para two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
