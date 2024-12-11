import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  email = '';
  password = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    if (this.email && this.password) {
      this.userService.login(this.email, this.password).subscribe(
        (response:any) => {
          console.log('Giriş başarılı:', response);
          this.router.navigate(['/users']);
        },
        (error:any) => {
          console.error('Giriş başarısız:', error);
          alert('Hatalı giriş. Bilgilerinizi kontrol edin.');
        }
      );
    } else {
      alert('Lütfen tüm alanları doldurun.');
    }
  }
}
