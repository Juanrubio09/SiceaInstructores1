import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab5',
  templateUrl:'tab5.page.html',
  styleUrls:['tab5.page.scss'],
})
export class Tab5Page {

  constructor(private navCtrl: NavController, private router: Router) {}

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
