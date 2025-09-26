import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true })]
};








// Imports ApplicationConfig (type) and provideZoneChangeDetection (helper) from Angular core.

// Exports a constant appConfig which is used by bootstrapApplication.

// providers: [provideZoneChangeDetection({ eventCoalescing: true })] — configures Angular to use zone-based change detection with event coalescing (this can reduce redundant change detection runs by coalescing DOM events).