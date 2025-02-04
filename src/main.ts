import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { LayoutComponent } from './app/layout/layout.component';
import { appRoutes } from './app/app.routes';  // Importera appRoutes här

bootstrapApplication(LayoutComponent, {
  providers: [
    provideRouter(appRoutes)  // Ge routing till applikationen
  ]
}).catch(err => console.error(err));
