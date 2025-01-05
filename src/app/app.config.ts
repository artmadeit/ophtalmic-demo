import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { provideAuth0 } from '@auth0/auth0-angular';
import { authInterceptor } from './core/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), 
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([authInterceptor])),
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 2000
      }
    },
    provideAuth0({
      domain: 'ophtalmic-center.us.auth0.com',
      clientId: 'McskgK1cuSpxuzcMiWQUUDgAgrq38NHp',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: "https://www.ouracademy-ophtalmiccenter.com",
        organization: "org_nXCtaCPT1JLroGw9",
      }
    }),
  ]
};
