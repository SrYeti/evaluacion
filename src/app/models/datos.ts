import { Usuario } from './usuario.model';
import { Asignatura } from './asignaturas.model';
export const datosdePrueba: Usuario[] = [
  {
    id: 1,
    nombreUsuario: 'docenteAdmin',
    contraseña: 'admin123',
    rol: 'docente',
  } as Usuario, // Datos de prueba de un usuario docente con id 1, nombre de usuario "admin", contraseña "admin123", y rol "docente"

  {
    id: 2,
    nombreUsuario: 'cPerez',
    contraseña: 'alum9458',
    rol: 'alumno',
  } as Usuario, // Datos de prueba de un usuario alumno con id 2, nombre de usuario "alumno123", contraseña "alum123", y rol "alumno"

  {
    id: 3,
    nombreUsuario: 'mariLopez',
    contraseña: 'de5456',
    rol: 'docente',
  } as Usuario, // Datos de prueba de un usuario docente con id 3, nombre de usuario "docente456", contraseña "docente456", y rol "docente"
];

export const datosAsignaturas: Asignatura[] = [
  { id: 1, nombre: 'Matemáticas', IDdocente: 1 },
  {
    id: 2,
    nombre: 'Lenguaje',
    IDdocente: 3,
  },
  {
    id: 3,
    nombre: 'Matemática aplicada',
    IDdocente: 1,
  },
];
