import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asig-alumno',
  templateUrl: './asig-alumno.component.html',
  styleUrls: ['./asig-alumno.component.scss']
})
export class AsigAlumnoComponent {
  asignatura = { id: 0, nombre: '', contenido: '', fechaHora: '' };

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.asignatura = this.obtenerDetallesAsignatura(id);
    });
  }

  obtenerDetallesAsignatura(id: number) {
    return {
      id,
      nombre: 'Historia',
      contenido: 'Revoluciones',
      fechaHora: 'Martes, 10 AM'
    };
  }

  escanearQR() {
    alert('Escaneando QR');
  }
}
