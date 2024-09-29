import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.scss']
})
export class SesionComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'docente') {
      this.router.navigate(['/docente']);
    } else if (this.username === 'alumno') {
      this.router.navigate(['/alumno']);
    } else {
      this.errorMessage = 'Credenciales incorrectas. Intente nuevamente.';
    }
  }

  restablecer() {
    this.router.navigate(['/restablecer']);
  }
}
