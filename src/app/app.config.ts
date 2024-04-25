import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCZ-OSxLBJR8sL8dr5y9SiD8f1dYzq51Tw",
  authDomain: "pokedexapp-9e98e.firebaseapp.com",
  projectId: "pokedexapp-9e98e",
  storageBucket: "pokedexapp-9e98e.appspot.com",
  messagingSenderId: "371622617924",
  appId: "1:371622617924:web:960e305029a126c4cd6d11",
  measurementId: "G-KG802F2T4H"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
    ]),
  ],
};