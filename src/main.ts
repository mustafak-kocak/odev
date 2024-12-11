import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core'; 
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(), 
    importProvidersFrom(IonicModule.forRoot()), 
  ],
}).catch((err) => console.error(err));