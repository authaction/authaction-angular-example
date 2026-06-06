import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, AsyncPipe } from '@angular/common';
import { AuthActionService } from '@authaction/web-sdk/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'authaction-angular-example';

  isAuthenticated$ = this.auth.isAuthenticated$;
  isLoading$ = this.auth.isLoading$;
  user$ = this.auth.user$;

  constructor(public auth: AuthActionService) {}

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout();
  }
}
