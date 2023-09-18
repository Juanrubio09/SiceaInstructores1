import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  clases = [
    { estudiante: 'Juan pablo rubio', categoria: 'C1', hora: '10:00 AM' },
    { estudiante: 'Paula moreno', categoria: 'C1', hora: '12:00 AM' },
    { estudiante: 'michael yesid roa', categoria: 'B1', hora: '2:00 PM' },
    // Agrega más clases según sea necesario
  ];

  constructor(
    private navCtrl: NavController, 
    private router: Router) {}

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
