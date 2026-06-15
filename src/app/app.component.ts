import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, AsyncPipe, JsonPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthActionService } from '@authaction/web-sdk/angular';

@Pipe({ name: 'initials', standalone: true })
export class InitialsPipe implements PipeTransform {
  transform(name: string | null | undefined): string {
    if (!name) return '?';
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join('');
  }
}

@Pipe({ name: 'rawClaims', standalone: true })
export class RawClaimsPipe implements PipeTransform {
  transform(user: Record<string, unknown> | null | undefined): string {
    if (!user) return '{}';
    const { access_token, profile, ...claims } = user;
    return JSON.stringify(claims, null, 2);
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AsyncPipe, JsonPipe, InitialsPipe, RawClaimsPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isAuthenticated$ = this.auth.isAuthenticated$;
  isLoading$ = this.auth.isLoading$;
  user$ = this.auth.user$;

  constructor(public auth: AuthActionService) {}

  login() {
    this.auth.loginWithRedirect();
  }

  signup() {
    this.auth.loginWithRedirect({ authorizationParams: { screen_hint: 'signup' } });
  }

  logout() {
    this.auth.logout();
  }
}
