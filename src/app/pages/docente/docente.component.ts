import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss']
})
export class DocenteComponent {
  nombreDocente = 'Profesor Juan';
  asignaturas = [
    { id: 1, nombre: 'Matemáticas' },
    { id: 2, nombre: 'Física' }
  ];

  constructor(private router: Router) {}

  verAsignatura(id: number) {
    this.router.navigate(['/asig-docente', id]);
  }

  cerrarSesion() {
    this.router.navigate(['/sesion']);
  }
}
