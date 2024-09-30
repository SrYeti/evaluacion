import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  usuario: { rol: string } | null = null;

  constructor(private router: Router) {
    this.checkSession();
  }

  checkSession() {
    this.usuario = { rol: 'alumno' }; // Puedes cambiar a 'docente' para simular el otro rol
  }

  logout() {
    this.usuario = null;
    this.router.navigate(['/sesion']);
  }

  // Función para verificar si el usuario está logueado
  isLoggedIn() {
    return this.usuario !== null;
  }

  // Función para verificar si el usuario es un alumno
  isAlumno() {
    return this.usuario?.rol === 'alumno';
  }

  // Función para verificar si el usuario es un docente
  isDocente() {
    return this.usuario?.rol === 'docente';
  }
}
