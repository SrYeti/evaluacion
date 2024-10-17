import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // Redirige a la página inicial
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule), // Página inicial
  },
  {
    path: 'qr-generator',
    loadChildren: () =>
      import('./qr-generator/qr-generator.module').then(
        (m) => m.QrGeneratorPageModule
      ), // Página para generar QR
  },
  {
    path: 'generarqr',
    loadComponent: () =>
      import('./pages/generarqr/generarqr.page').then((m) => m.GenerarqrPage),
  },

  // Agrega otras rutas aquí según sea necesario
];
