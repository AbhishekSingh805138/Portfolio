import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));







//   import { bootstrapApplication } — Angular v14+ standalone bootstrap function (no NgModule required).

// import { appConfig } — imports the ApplicationConfig object from app/app.config.ts (used to provide providers).

// import { AppComponent } — imports the root standalone component.

// bootstrapApplication(AppComponent, appConfig) — starts the Angular app using AppComponent as root and the provided config.

// .catch(...) — logs bootstrap errors.