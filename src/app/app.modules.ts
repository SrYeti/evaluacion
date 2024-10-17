import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // Importa las rutas definidas
import { QRCodeModule } from 'angularx-qrcode'; // Importa el módulo QR

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes), // Usa las rutas
    QRCodeModule, // Importa el módulo para generar códigos QR
  ],
  providers: [],
})
export class AppModule {}
