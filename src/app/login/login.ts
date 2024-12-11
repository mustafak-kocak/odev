import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule], // Ionic bileşenlerini dahil eder
})
export class RegisterPage {
  constructor() {}

  registerUser(event: Event) {
    event.preventDefault();
    console.log('Kullanıcı kayıt oldu!');
  }
}
