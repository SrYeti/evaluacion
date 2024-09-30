import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AsigAlumnoComponent } from './asig-alumno/asig-alumno.component';
import { AsigDocenteComponent } from './asig-docente/asig-docente.component';
import { DocenteComponent } from './docente/docente.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RestablecerComponent } from './restablecer/restablecer.component';
import { SesionComponent } from './sesion/sesion.component';


@NgModule({
  declarations: [
    HomeComponent,
    AlumnoComponent,
    AsigAlumnoComponent,
    AsigDocenteComponent,
    DocenteComponent,
    NotFoundComponent,
    RestablecerComponent,
    SesionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
