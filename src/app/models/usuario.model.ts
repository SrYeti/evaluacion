export interface Usuario {
  id: number;
  nombreUsuario: string;
  contraseña: string;
  rol: 'docente' | 'alumno'; // El rol del usuario
}
