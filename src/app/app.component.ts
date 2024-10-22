import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { filter } from 'rxjs';
import AuthActionConfig from '../config.json';

import { AuthConfig } from 'angular-oauth2-oidc';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: `https://${environment.authactionTenantDomain}/`,

  // URL of the SPA to redirect the user to after login
  redirectUri: environment.authactionRedirectUri,

  postLogoutRedirectUri: environment.authactionLogoutRedirectUri,

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: environment.authactionClientId,

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: 'openid profile email',

  showDebugInformation: true,
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'authaction-angular-example';
  isLoggedIn = false;

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();

    this.oauthService.events
      .pipe(filter((e) => e.type === 'token_received'))
      .subscribe((_) => {
        this.oauthService.loadUserProfile();
        this.isLoggedIn = true;
      });

    this.oauthService.events
      .pipe(filter((e) => e.type === 'logout'))
      .subscribe(() => {
        this.isLoggedIn = false;
      });

    if (this.oauthService.hasValidAccessToken()) {
      this.isLoggedIn = true;
    }
  }

  login() {
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  get userEmail(): string {
    const claims = this.oauthService.getIdentityClaims();
    return claims['email'];
  }

  get idToken(): string {
    return this.oauthService.getIdToken();
  }

  get accessToken(): string {
    return this.oauthService.getAccessToken();
  }
}
