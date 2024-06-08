import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string= '';
  password: string= '';

  constructor(private authService: AuthService, private router: Router) { }

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      this.router.navigateByUrl('tabs/library');
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }
}
