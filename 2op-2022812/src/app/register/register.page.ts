import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string= '';
  username: string= '';

  constructor(private authService: AuthService, private router: Router) { }

  async register() {
    try {
      await this.authService.register(this.email, this.password);
      this.router.navigateByUrl('/login');
    } catch (error) {
      console.error('Register error:', error);
    }
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }
}
