import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAuthAction } from '@authaction/web-sdk/angular';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAuthAction({
      domain: environment.authactionDomain,
      clientId: environment.authactionClientId,
      redirectUri: environment.authactionRedirectUri,
    }),
  ],
};
