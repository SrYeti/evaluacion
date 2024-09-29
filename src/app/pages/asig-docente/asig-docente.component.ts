import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asig-docente',
  templateUrl: './asig-docente.component.html',
  styleUrls: ['./asig-docente.component.scss']
})
export class AsigDocenteComponent {
  asignatura = { id: 0, nombre: '', contenido: '', fechaHora: '' };

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.asignatura = this.obtenerDetallesAsignatura(id); // Simula obtener datos de la asignatura
    });
  }

  obtenerDetallesAsignatura(id: number) {
    return {
      id,
      nombre: 'Matemáticas',
      contenido: 'Álgebra, Geometría',
      fechaHora: 'Lunes, 8 AM'
    };
  }

  generarQR() {
    alert('Código QR generado');
  }
}
