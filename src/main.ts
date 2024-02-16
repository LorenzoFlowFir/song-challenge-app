import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { HttpClientModule } from '@angular/common/http'; // Assurez-vous d'importer HttpClientModule
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule), // Utilisez importProvidersFrom pour charger HttpClientModule
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          apiKey: 'AIzaSyCebv0licJPevwFIItYtThW-9KsgmrcxeY',
          authDomain: 'songchallenge-13a07.firebaseapp.com',
          projectId: 'songchallenge-13a07',
          storageBucket: 'songchallenge-13a07.appspot.com',
          messagingSenderId: '653405214727',
          appId: '1:653405214727:web:e725baab81b4a358b132a2',
          measurementId: 'G-K9114HTPYH',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
});
