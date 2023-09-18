import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


interface Clase {
  estudiante: string;
  categoria: string;
  hora: string;
  asistenciaRegistrada: boolean;
  asistio: boolean;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  clases: Clase[] = [
    { estudiante: 'Juan pablo rubio',
     categoria: 'C1',
      hora: '10:00 AM', 
      asistenciaRegistrada: false, asistio: false },
    { estudiante: 'Paula moreno', 
    categoria: 'C1',
     hora: '12:00 AM', 
     asistenciaRegistrada: false, asistio: false },
    { estudiante: 'michael yesid roa',
     categoria: 'B1', hora: '2:00 PM', 
     asistenciaRegistrada: false, asistio: false },
    // Agrega más clases según sea necesario
  ];

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private alertController: AlertController
     ) {}

     async showAsistenciaAlert(clase: Clase) {
      const alert = await this.alertController.create({
        header: 'Asistencia',
        message: '¿El estudiante asistió?',
        buttons: [
          {
            text: 'Sí',
            handler: () => {
              clase.asistenciaRegistrada = true;
              clase.asistio = true;
            }
          },
          {
            text: 'No',
            handler: () => {
              clase.asistenciaRegistrada = true;
              clase.asistio = false;
            }
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              // El usuario ha cancelado la alerta
            }
          }
        ]
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
