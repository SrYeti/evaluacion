import { Component } from '@angular/core';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.component.html',
  styleUrls: ['./restablecer.component.scss']
})
export class RestablecerComponent {
  email: string = '';

  restablecer() {
    alert('Solicitud de restablecimiento enviada a ' + this.email);
  }
}
