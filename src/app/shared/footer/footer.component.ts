import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  usuario: { rol: string } | null = null; // Simula el estado de sesión del usuario

  constructor(private router: Router) {
    this.checkSession(); // Simula la comprobación de sesión al cargar el componente
  }

  checkSession() {
    // Aquí podrías obtener el estado de sesión real. Simulamos que un alumno está logueado.
    this.usuario = { rol: 'alumno' }; // O 'docente' dependiendo del perfil
  }

  logout() {
    // Aquí va la lógica de cerrar sesión
    this.usuario = null;
    this.router.navigate(['/sesion']); // Redirigir al login
  }
}
