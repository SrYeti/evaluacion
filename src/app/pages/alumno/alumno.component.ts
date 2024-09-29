import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent {
  nombreAlumno = 'Estudiante Pedro';
  asignaturas = [
    { id: 1, nombre: 'Historia' },
    { id: 2, nombre: 'Literatura' }
  ];

  constructor(private router: Router) {}

  verAsignatura(id: number) {
    this.router.navigate(['/asig-alumno', id]);
  }

  cerrarSesion() {
    this.router.navigate(['/sesion']);
  }
}
