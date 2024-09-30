import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AsigAlumnoComponent } from './asig-alumno/asig-alumno.component';
import { AsigDocenteComponent } from './asig-docente/asig-docente.component';
import { DocenteComponent } from './docente/docente.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RestablecerComponent } from './restablecer/restablecer.component';
import { SesionComponent } from './sesion/sesion.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'alumno', component: AlumnoComponent },
  { path: 'asig-alumno', component: AsigAlumnoComponent },
  { path: 'asig-docente', component: AsigDocenteComponent },
  { path: 'docente', component: DocenteComponent },
  { path: 'restablecer', component: RestablecerComponent },
  { path: 'sesion', component: SesionComponent },
  { path: 'not-found', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
