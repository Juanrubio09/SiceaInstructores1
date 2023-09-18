import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab4',
  templateUrl:'tab4.page.html',
  styleUrls:['tab4.page.scss'],
})
export class Tab4Page {

  fecha: string = '';
  motivo: string = '';
  descripcion: string = '';
  archivoAdjunto:  File | null = null;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    public alertController: AlertController) 
    {}

    adjuntarArchivo(event: any) {
      // Captura el archivo adjunto seleccionado
      this.archivoAdjunto = event.target.files[0];
    } 

    async registrarPQR() {
      // Realiza la lógica de registro aquí
      // Esto puede incluir el envío de datos al servidor o almacenamiento local
  
      // Muestra un alertController para confirmar el registro
      const alert = await this.alertController.create({
        header: 'Registro Exitoso',
        message: 'Tu PQR se ha registrado correctamente.',
        buttons: ['OK']
      });
  
      await alert.present();
    }

  logout() {
    // Agrega aquí la lógica para cerrar sesión (por ejemplo, limpiar tokens, variables, etc.)
    
    // Redirige a la página de inicio de sesión
    this.router.navigate(['/login']);
  }
  goToTab1() {
    // Redirige al Tab1
    this.router.navigate(['/tabs/tab1']);
  }
}
