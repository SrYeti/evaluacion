import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.scss'],
})
export class SesionPage {
  usuario: string = '';
  clave: string = '';
  loginFailed: boolean = false;

  constructor(private AuthService: AuthService, private router: Router) {}

  // Método para iniciar sesión
  login() {
    const user = this.AuthService.login(this.usuario, this.clave);

    if (user) {
      this.loginFailed = false;
      // Redirigir según el rol
      if (user.rol === 'docente') {
        this.router.navigate(['/docente']);
      } else if (user.rol === 'alumno') {
        this.router.navigate(['/alumno']);
      }
    } else {
      this.loginFailed = true; // Mostrar mensaje de error
    }
  }

  // Método para restablecer la contraseña (puedes personalizarlo)
  restablecerContrasena() {
    // Aquí puedes agregar la lógica de restablecimiento
    console.log('Restablecer contraseña');
  }
}
